import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { useBlog } from "@/context/BlogContext";

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getPublishedBlogs } = useBlog();
  const blogs = getPublishedBlogs();
  
  const blog = blogs.find(b => b.slug === slug);
  
  if (!blog) {
    return (
      <main className="min-h-screen py-20">
        <div className="container-cbr text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Blog Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary">Back to Blog</Link>
        </div>
      </main>
    );
  }

  const relatedBlogs = blogs.filter(b => b.category === blog.category && b.id !== blog.id).slice(0, 3);

  return (
    <>
      <SEOHead 
        title={`${blog.title} | CBR Pharma Blog`}
        description={blog.excerpt}
        url={`https://cbrpharm.com/blog/${blog.slug}`}
      />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="gradient-hero text-primary-foreground py-12">
          <div className="container-cbr">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <span className="inline-block text-xs font-medium bg-white/20 px-3 py-1 rounded-full mb-4">
              {blog.category}
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-6 text-sm opacity-90">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {blog.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {blog.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {blog.readTime || "5 min read"}
              </span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="-mt-8 mb-12">
          <div className="container-cbr">
            <div className="max-w-4xl mx-auto">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full aspect-video object-cover rounded-2xl shadow-cbr-lg"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-16">
          <div className="container-cbr">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div className="text-foreground whitespace-pre-line leading-relaxed">
                  {blog.content}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedBlogs.length > 0 && (
          <section className="py-16 bg-muted">
            <div className="container-cbr">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    to={`/blog/${relatedBlog.slug}`}
                    className="bg-card rounded-xl overflow-hidden shadow-cbr-sm hover:shadow-cbr-md transition-all group"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{relatedBlog.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default BlogDetailPage;
