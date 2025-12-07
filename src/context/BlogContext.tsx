import { createContext, useContext, useState, ReactNode } from "react";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  category: string;
  status: "draft" | "published";
  date: string;
  readTime?: string;
}

interface BlogContextType {
  blogPosts: BlogPost[];
  addBlogPost: (post: Omit<BlogPost, "id" | "date">) => void;
  updateBlogPost: (id: string, post: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;
  getPublishedBlogs: () => BlogPost[];
}

const initialBlogs: BlogPost[] = [
  {
    id: "1",
    slug: "understanding-diabetes-prevention-management",
    title: "Understanding Diabetes: Prevention and Management",
    excerpt: "Learn about the different types of diabetes and how to manage blood sugar levels effectively.",
    content: `Diabetes is a chronic health condition that affects how your body turns food into energy. There are three main types of diabetes: Type 1, Type 2, and gestational diabetes.

Type 1 diabetes is thought to be caused by an autoimmune reaction that stops your body from making insulin. Type 2 diabetes, the most common type, occurs when your body becomes resistant to insulin or doesn't make enough insulin. Gestational diabetes develops in pregnant women who have never had diabetes.

Prevention Tips:
• Maintain a healthy weight
• Stay physically active - aim for 30 minutes of moderate activity daily
• Eat a balanced diet rich in fruits, vegetables, and whole grains
• Limit processed foods and sugary drinks
• Get regular health checkups

Management Strategies:
• Monitor blood sugar levels regularly
• Take medications as prescribed
• Follow a diabetes-friendly meal plan
• Exercise regularly
• Manage stress effectively
• Get adequate sleep

At CBR Pharma, we offer a wide range of diabetes management products including glucose monitors, testing strips, and medications. Consult with our pharmacists for personalized guidance.`,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800",
    author: "Dr. Priya Sharma",
    date: "December 1, 2024",
    readTime: "5 min read",
    category: "Health Tips",
    status: "published"
  },
  {
    id: "2",
    slug: "importance-of-vitamin-d-overall-health",
    title: "The Importance of Vitamin D for Overall Health",
    excerpt: "Discover why Vitamin D is essential and how to ensure you're getting enough.",
    content: `Vitamin D, often called the "sunshine vitamin," plays a crucial role in maintaining overall health. It helps regulate calcium and phosphorus absorption, supports immune function, and promotes bone health.

Why is Vitamin D Important?
• Supports bone health and prevents osteoporosis
• Boosts immune system function
• May help prevent certain cancers
• Supports cardiovascular health
• Improves mood and reduces depression risk

Signs of Vitamin D Deficiency:
• Fatigue and tiredness
• Bone pain and muscle weakness
• Mood changes, including depression
• Slow wound healing
• Hair loss

How to Get Enough Vitamin D:
1. Sun Exposure: Spend 10-30 minutes in midday sunlight several times per week
2. Diet: Include fatty fish, egg yolks, and fortified foods
3. Supplements: Take Vitamin D3 supplements as recommended

The recommended daily intake varies by age, but most adults need 600-800 IU daily. However, many experts suggest higher doses, especially in regions with limited sunlight.

CBR Pharma offers high-quality Vitamin D supplements in various strengths. Consult with our healthcare team to find the right dosage for you.`,
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=800",
    author: "Dr. Rahul Verma",
    date: "November 28, 2024",
    readTime: "4 min read",
    category: "Nutrition",
    status: "published"
  },
  {
    id: "3",
    slug: "managing-hypertension-complete-guide",
    title: "Managing Hypertension: A Complete Guide",
    excerpt: "Everything you need to know about high blood pressure and how to keep it under control.",
    content: `Hypertension, or high blood pressure, is a common condition that affects millions of people worldwide. It's often called the "silent killer" because it typically has no symptoms but can lead to serious health problems.

Understanding Blood Pressure Numbers:
• Normal: Less than 120/80 mmHg
• Elevated: 120-129/less than 80 mmHg
• High Blood Pressure Stage 1: 130-139/80-89 mmHg
• High Blood Pressure Stage 2: 140 or higher/90 or higher mmHg

Risk Factors:
• Age
• Family history
• Being overweight
• Lack of physical activity
• High sodium diet
• Excessive alcohol consumption
• Stress

Lifestyle Modifications:
1. Reduce sodium intake to less than 2,300 mg per day
2. Exercise regularly - at least 150 minutes per week
3. Maintain a healthy weight
4. Limit alcohol consumption
5. Quit smoking
6. Manage stress through meditation or yoga

Monitoring at Home:
Regular home monitoring is essential. Use a validated blood pressure monitor and take readings at the same time each day. Keep a log to share with your healthcare provider.

CBR Pharma offers a range of digital blood pressure monitors and medications. Our pharmacists can guide you on proper monitoring techniques.`,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800",
    author: "Dr. Anita Desai",
    date: "November 25, 2024",
    readTime: "6 min read",
    category: "Heart Health",
    status: "published"
  },
  {
    id: "4",
    slug: "boosting-immunity-naturally",
    title: "Boosting Immunity Naturally",
    excerpt: "Natural ways to strengthen your immune system and stay healthy year-round.",
    content: `A strong immune system is your body's first line of defense against infections and diseases.`,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
    author: "Dr. Meera Patel",
    date: "November 22, 2024",
    readTime: "5 min read",
    category: "Wellness",
    status: "published"
  },
  {
    id: "5",
    slug: "mental-health-breaking-the-stigma",
    title: "Mental Health: Breaking the Stigma",
    excerpt: "Understanding mental health conditions and the importance of seeking help.",
    content: `Mental health is just as important as physical health, yet it's often overlooked or stigmatized.`,
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800",
    author: "Dr. Vikram Singh",
    date: "November 18, 2024",
    readTime: "5 min read",
    category: "Mental Health",
    status: "published"
  },
  {
    id: "6",
    slug: "healthy-aging-tips-for-seniors",
    title: "Healthy Aging: Tips for Seniors",
    excerpt: "Practical advice for maintaining health and vitality as you age.",
    content: `Aging is a natural process, but how we age is largely influenced by our lifestyle choices.`,
    image: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=800",
    author: "Dr. Sunita Kumar",
    date: "November 15, 2024",
    readTime: "6 min read",
    category: "Senior Health",
    status: "published"
  }
];

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogs);

  const addBlogPost = (post: Omit<BlogPost, "id" | "date">) => {
    const newPost: BlogPost = {
      id: Date.now().toString(),
      ...post,
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      readTime: post.readTime || "5 min read"
    };
    setBlogPosts(prev => [newPost, ...prev]);
  };

  const updateBlogPost = (id: string, updates: Partial<BlogPost>) => {
    setBlogPosts(prev => prev.map(blog => 
      blog.id === id ? { ...blog, ...updates } : blog
    ));
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(blog => blog.id !== id));
  };

  const getPublishedBlogs = () => {
    return blogPosts.filter(blog => blog.status === "published");
  };

  return (
    <BlogContext.Provider value={{ blogPosts, addBlogPost, updateBlogPost, deleteBlogPost, getPublishedBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
};
