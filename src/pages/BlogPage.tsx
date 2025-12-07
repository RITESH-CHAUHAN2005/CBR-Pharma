import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { useBlog } from "@/context/BlogContext";

const BlogPage = () => {
  const { getPublishedBlogs } = useBlog();
  const blogs = getPublishedBlogs();

  return (
    <>
      <SEOHead 
        title="Health & Wellness Blog | CBR Pharma"
        description="Expert health tips, wellness advice, and healthcare insights from CBR Pharma. Stay informed with our latest articles on medicine, nutrition, and healthy living."
        url="https://cbrpharm.com/blog"
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="gradient-hero text-primary-foreground py-16">
          <div className="container-cbr text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold">
              Health & Wellness Blog
            </h1>
            <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
              Expert insights, health tips, and the latest in healthcare from CBR Pharma
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-background">
          <div className="container-cbr">
            {blogs.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No blog posts available yet.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                  <Link
                    key={blog.id}
                    to={`/blog/${blog.slug}`}
                    className="bg-card rounded-2xl overflow-hidden shadow-cbr-sm hover:shadow-cbr-md transition-all group animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                      <h2 className="font-display text-xl font-bold text-foreground mt-3 group-hover:text-primary transition-colors line-clamp-2">
                        {blog.title}
                      </h2>
                      <p className="text-muted-foreground mt-2 line-clamp-2 text-sm">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {blog.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {blog.readTime || "5 min read"}
                          </span>
                        </div>
                        <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogPage;
