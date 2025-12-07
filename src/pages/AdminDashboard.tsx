import { useState } from "react";
import { 
  LayoutDashboard, Package, ShoppingCart, Users, BarChart3, 
  Settings, Plus, Edit, Trash2, Search, LogOut, TrendingUp,
  DollarSign, AlertTriangle, Eye, Download, Filter, RefreshCw,
  FileText, Image, Link as LinkIcon, X, Save
} from "lucide-react";
import { products } from "@/data/products";
import SEOHead from "@/components/SEOHead";
import logo from "@/assets/logo.png";
import { PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts";

type Tab = "dashboard" | "products" | "orders" | "customers" | "analytics" | "blogs" | "settings";

interface BlogPost {
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
}

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [blogForm, setBlogForm] = useState<Omit<BlogPost, "id" | "date">>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    image: "",
    author: "",
    category: "",
    status: "draft"
  });

  // Sample blog posts data
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: "1",
      title: "Understanding Diabetes: Prevention and Management",
      slug: "understanding-diabetes-prevention-management",
      excerpt: "Learn about the different types of diabetes and how to manage blood sugar levels effectively.",
      content: "Full blog content here...",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800",
      author: "Dr. Priya Sharma",
      category: "Health Tips",
      status: "published",
      date: "December 1, 2024"
    },
    {
      id: "2",
      title: "The Importance of Vitamin D for Overall Health",
      slug: "importance-of-vitamin-d-overall-health",
      excerpt: "Discover why Vitamin D is essential and how to ensure you're getting enough.",
      content: "Full blog content here...",
      image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=800",
      author: "Dr. Rahul Verma",
      category: "Nutrition",
      status: "published",
      date: "November 28, 2024"
    },
    {
      id: "3",
      title: "Managing Hypertension: A Complete Guide",
      slug: "managing-hypertension-complete-guide",
      excerpt: "Everything you need to know about high blood pressure and how to keep it under control.",
      content: "Full blog content here...",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800",
      author: "Dr. Anita Desai",
      category: "Heart Health",
      status: "published",
      date: "November 25, 2024"
    }
  ]);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "products", label: "Products", icon: Package },
    { id: "orders", label: "Orders", icon: ShoppingCart },
    { id: "customers", label: "Customers", icon: Users },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "blogs", label: "Blog Posts", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const dashboardStats = [
    { label: "Total Revenue", value: "₹24,58,900", change: "+12.5%", positive: true, icon: DollarSign, color: "bg-accent" },
    { label: "Total Orders", value: "1,234", change: "+8.2%", positive: true, icon: ShoppingCart, color: "bg-primary" },
    { label: "Active Customers", value: "5,678", change: "+15.3%", positive: true, icon: Users, color: "bg-cbr-cyan" },
    { label: "Low Stock Items", value: "23", change: "-5 items", positive: false, icon: AlertTriangle, color: "bg-destructive" },
  ];

  const recentOrders = [
    { id: "CBR001", customer: "Rahul Kumar", email: "rahul@email.com", date: "Dec 4, 2024", status: "Processing", total: 1299, items: 3 },
    { id: "CBR002", customer: "Priya Sharma", email: "priya@email.com", date: "Dec 4, 2024", status: "Shipped", total: 2450, items: 5 },
    { id: "CBR003", customer: "Amit Singh", email: "amit@email.com", date: "Dec 3, 2024", status: "Delivered", total: 599, items: 2 },
    { id: "CBR004", customer: "Neha Gupta", email: "neha@email.com", date: "Dec 3, 2024", status: "Processing", total: 1899, items: 4 },
    { id: "CBR005", customer: "Vikram Patel", email: "vikram@email.com", date: "Dec 2, 2024", status: "Delivered", total: 3200, items: 6 },
  ];

  const topProducts = [
    { name: "Dolo 650mg", sales: 234, revenue: 23400, growth: "+15%" },
    { name: "Vitamin D3", sales: 189, revenue: 56700, growth: "+22%" },
    { name: "Omega-3 Fish Oil", sales: 156, revenue: 78000, growth: "+8%" },
    { name: "Paracetamol 500mg", sales: 145, revenue: 14500, growth: "+5%" },
  ];

  // Analytics data
  const salesData = [
    { name: "Jan", sales: 186000, orders: 120 },
    { name: "Feb", sales: 205000, orders: 145 },
    { name: "Mar", sales: 237000, orders: 168 },
    { name: "Apr", sales: 273000, orders: 195 },
    { name: "May", sales: 309000, orders: 220 },
    { name: "Jun", sales: 358000, orders: 258 },
    { name: "Jul", sales: 329000, orders: 235 },
    { name: "Aug", sales: 377000, orders: 270 },
    { name: "Sep", sales: 412000, orders: 295 },
    { name: "Oct", sales: 456000, orders: 328 },
    { name: "Nov", sales: 489000, orders: 352 },
    { name: "Dec", sales: 524000, orders: 378 },
  ];

  const categoryData = [
    { name: "Pain Relief", value: 28, color: "hsl(var(--primary))" },
    { name: "Vitamins", value: 22, color: "hsl(var(--accent))" },
    { name: "Cardiac Care", value: 18, color: "hsl(var(--cbr-cyan))" },
    { name: "Diabetes", value: 15, color: "#8b5cf6" },
    { name: "Antibiotics", value: 10, color: "#f59e0b" },
    { name: "Others", value: 7, color: "#6b7280" },
  ];

  const revenueByChannel = [
    { name: "Website", revenue: 1850000 },
    { name: "Mobile App", revenue: 1200000 },
    { name: "Retail Partners", revenue: 680000 },
    { name: "B2B Sales", revenue: 450000 },
  ];

  const blogCategories = ["Health Tips", "Nutrition", "Heart Health", "Wellness", "Mental Health", "Senior Health", "Fitness", "Emergency Care"];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleBlogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingBlog) {
      // Update existing blog
      setBlogPosts(prev => prev.map(blog => 
        blog.id === editingBlog.id 
          ? { ...blog, ...blogForm, date: blog.date }
          : blog
      ));
    } else {
      // Create new blog
      const newBlog: BlogPost = {
        id: Date.now().toString(),
        ...blogForm,
        date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
      };
      setBlogPosts(prev => [newBlog, ...prev]);
    }
    setShowBlogModal(false);
    setEditingBlog(null);
    setBlogForm({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      image: "",
      author: "",
      category: "",
      status: "draft"
    });
  };

  const handleEditBlog = (blog: BlogPost) => {
    setEditingBlog(blog);
    setBlogForm({
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt,
      content: blog.content,
      image: blog.image,
      author: blog.author,
      category: blog.category,
      status: blog.status
    });
    setShowBlogModal(true);
  };

  const handleDeleteBlog = (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      setBlogPosts(prev => prev.filter(blog => blog.id !== id));
    }
  };

  if (!isLoggedIn) {
    return (
      <>
        <SEOHead 
          title="Admin Login | CBR Pharma"
          description="CBR Pharma admin dashboard login portal for managing orders, products, and customers."
          url="https://cbrpharm.com/admin"
        />
        <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920')" }}
          />
          <div className="absolute inset-0 gradient-hero opacity-95" />
          
          <div className="relative z-10 bg-card rounded-3xl p-8 shadow-cbr-lg w-full max-w-md mx-4">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-primary flex items-center justify-center">
                <LayoutDashboard className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="font-display text-2xl font-bold text-foreground">Admin Portal</h1>
              <p className="text-muted-foreground mt-2">CBR Pharma Management System</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  className="input-cbr"
                  placeholder="admin@cbrpharma.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  className="input-cbr"
                  placeholder="••••••••"
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Sign In to Dashboard
              </button>
            </form>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Protected area. Authorized personnel only.
            </p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <SEOHead 
        title="Admin Dashboard | CBR Pharma"
        description="CBR Pharma admin dashboard for managing pharmacy operations."
        url="https://cbrpharm.com/admin"
      />
      <div className="min-h-screen bg-muted flex">
        {/* Sidebar */}
        <aside className="w-72 bg-card border-r border-border fixed h-full shadow-cbr-sm">
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <img src={logo} alt="CBR Pharma" className="w-12 h-12 object-contain" />
              <div>
                <h1 className="font-display text-lg font-bold text-primary">CBR Pharma</h1>
                <p className="text-xs text-muted-foreground">Admin Dashboard</p>
              </div>
            </div>
          </div>

          <nav className="p-4 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as Tab)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${
                  activeTab === item.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-card">
            <div className="flex items-center gap-3 mb-4 px-2">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <span className="font-medium text-primary-foreground text-sm">AD</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-foreground truncate">Admin User</p>
                <p className="text-xs text-muted-foreground truncate">admin@cbrpharma.com</p>
              </div>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-destructive hover:bg-destructive/10 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-72 flex-1 p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                {menuItems.find(m => m.id === activeTab)?.label}
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Welcome back! Here's what's happening today.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2.5 rounded-xl bg-card hover:bg-secondary transition-colors border border-border">
                <RefreshCw className="h-5 w-5 text-muted-foreground" />
              </button>
              <button className="btn-primary flex items-center gap-2">
                <Download className="h-4 w-4" />
                Export Report
              </button>
            </div>
          </div>

          {/* Dashboard */}
          {activeTab === "dashboard" && (
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardStats.map((stat) => (
                  <div key={stat.label} className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="font-display text-2xl font-bold text-foreground mt-2">{stat.value}</p>
                        <p className={`text-sm mt-2 font-medium ${stat.positive ? "text-accent" : "text-destructive"}`}>
                          {stat.change} from last month
                        </p>
                      </div>
                      <div className={`p-3 rounded-xl ${stat.color}/10`}>
                        <stat.icon className={`h-6 w-6 ${stat.color.replace('bg-', 'text-')}`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Recent Orders */}
                <div className="lg:col-span-2 bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-display text-lg font-bold text-foreground">Recent Orders</h3>
                    <button
                      onClick={() => setActiveTab("orders")}
                      className="text-sm text-primary hover:underline font-medium"
                    >
                      View All →
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Order</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Customer</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                          <th className="text-right py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentOrders.slice(0, 5).map((order) => (
                          <tr key={order.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                            <td className="py-4 px-4">
                              <p className="font-medium text-foreground">{order.id}</p>
                              <p className="text-xs text-muted-foreground">{order.date}</p>
                            </td>
                            <td className="py-4 px-4">
                              <p className="font-medium text-foreground">{order.customer}</p>
                              <p className="text-xs text-muted-foreground">{order.items} items</p>
                            </td>
                            <td className="py-4 px-4">
                              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                                order.status === "Delivered" ? "bg-accent/10 text-accent" :
                                order.status === "Shipped" ? "bg-primary/10 text-primary" :
                                "bg-amber-100 text-amber-700"
                              }`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-right font-bold text-foreground">₹{order.total}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Top Products */}
                <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-display text-lg font-bold text-foreground">Top Products</h3>
                    <TrendingUp className="h-5 w-5 text-accent" />
                  </div>
                  <div className="space-y-4">
                    {topProducts.map((product, index) => (
                      <div key={product.name} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                          <span className="text-sm font-bold text-muted-foreground">{index + 1}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground text-sm truncate">{product.name}</p>
                          <p className="text-xs text-muted-foreground">{product.sales} sales</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-foreground text-sm">₹{product.revenue.toLocaleString()}</p>
                          <p className="text-xs text-accent font-medium">{product.growth}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sales Chart Placeholder */}
              <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-lg font-bold text-foreground">Sales Overview</h3>
                  <select className="input-cbr w-auto text-sm py-2">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                  </select>
                </div>
                <div className="h-64 bg-gradient-to-br from-secondary to-muted rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                    <p className="text-muted-foreground">Sales chart visualization</p>
                    <p className="text-sm text-muted-foreground">Connect analytics for live data</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Products */}
          {activeTab === "products" && (
            <div className="space-y-6">
              {/* Actions Bar */}
              <div className="bg-card rounded-2xl p-4 shadow-cbr-sm border border-border flex flex-wrap gap-4 items-center justify-between">
                <div className="relative flex-1 min-w-[280px] max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="input-cbr pl-10"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <button className="btn-outline py-2.5 flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filters
                  </button>
                  <button className="btn-primary flex items-center gap-2">
                    <Plus className="h-5 w-5" />
                    Add Product
                  </button>
                </div>
              </div>

              {/* Products Table */}
              <div className="bg-card rounded-2xl shadow-cbr-sm border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Product</th>
                        <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Category</th>
                        <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Price</th>
                        <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Stock</th>
                        <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Rx</th>
                        <th className="text-right py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.slice(0, 10).map((product) => (
                        <tr key={product.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-4">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-12 h-12 rounded-xl object-cover"
                              />
                              <div>
                                <p className="font-medium text-foreground">{product.name}</p>
                                <p className="text-sm text-muted-foreground">{product.brand}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <span className="px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground text-sm">
                              {product.category}
                            </span>
                          </td>
                          <td className="py-4 px-6 font-medium text-foreground">₹{product.price}</td>
                          <td className="py-4 px-6">
                            <span className={`text-sm font-medium ${product.inStock ? "text-accent" : "text-destructive"}`}>
                              {product.inStock ? "In Stock" : "Out of Stock"}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            {product.prescriptionRequired && (
                              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-lg font-medium">Rx</span>
                            )}
                          </td>
                          <td className="py-4 px-6 text-right">
                            <div className="flex items-center justify-end gap-1">
                              <button className="p-2 hover:bg-secondary rounded-lg text-muted-foreground hover:text-primary transition-colors">
                                <Eye className="h-4 w-4" />
                              </button>
                              <button className="p-2 hover:bg-secondary rounded-lg text-muted-foreground hover:text-primary transition-colors">
                                <Edit className="h-4 w-4" />
                              </button>
                              <button className="p-2 hover:bg-secondary rounded-lg text-muted-foreground hover:text-destructive transition-colors">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 border-t border-border flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Showing 1-10 of {products.length} products</p>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 rounded-lg border border-border hover:bg-secondary transition-colors text-sm">Previous</button>
                    <button className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm">1</button>
                    <button className="px-3 py-1.5 rounded-lg border border-border hover:bg-secondary transition-colors text-sm">2</button>
                    <button className="px-3 py-1.5 rounded-lg border border-border hover:bg-secondary transition-colors text-sm">Next</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Orders */}
          {activeTab === "orders" && (
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-4 shadow-cbr-sm border border-border flex flex-wrap gap-4 items-center">
                <div className="relative flex-1 min-w-[280px]">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input type="text" placeholder="Search orders..." className="input-cbr pl-10" />
                </div>
                <select className="input-cbr w-auto">
                  <option>All Status</option>
                  <option>Processing</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                </select>
              </div>

              <div className="bg-card rounded-2xl shadow-cbr-sm border border-border overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase">Order ID</th>
                      <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase">Customer</th>
                      <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase">Date</th>
                      <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase">Status</th>
                      <th className="text-right py-4 px-6 text-xs font-semibold text-muted-foreground uppercase">Total</th>
                      <th className="text-right py-4 px-6 text-xs font-semibold text-muted-foreground uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-t border-border hover:bg-muted/30">
                        <td className="py-4 px-6 font-medium text-foreground">{order.id}</td>
                        <td className="py-4 px-6">
                          <p className="font-medium text-foreground">{order.customer}</p>
                          <p className="text-sm text-muted-foreground">{order.email}</p>
                        </td>
                        <td className="py-4 px-6 text-muted-foreground">{order.date}</td>
                        <td className="py-4 px-6">
                          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                            order.status === "Delivered" ? "bg-accent/10 text-accent" :
                            order.status === "Shipped" ? "bg-primary/10 text-primary" :
                            "bg-amber-100 text-amber-700"
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-right font-bold text-foreground">₹{order.total}</td>
                        <td className="py-4 px-6 text-right">
                          <button className="text-sm text-primary hover:underline">View Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Customers */}
          {activeTab === "customers" && (
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                <h3 className="font-display text-lg font-bold text-foreground mb-6">Customer Management</h3>
                <p className="text-muted-foreground">Customer data and analytics will be displayed here.</p>
              </div>
            </div>
          )}

          {/* Analytics */}
          {activeTab === "analytics" && (
            <div className="space-y-6">
              {/* Stats Overview */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                  <p className="font-display text-3xl font-bold text-foreground mt-1">₹41,80,000</p>
                  <p className="text-sm text-accent mt-2">+18.2% vs last year</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                  <p className="text-sm text-muted-foreground">Total Orders</p>
                  <p className="font-display text-3xl font-bold text-foreground mt-1">2,964</p>
                  <p className="text-sm text-accent mt-2">+22.5% vs last year</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                  <p className="text-sm text-muted-foreground">Avg. Order Value</p>
                  <p className="font-display text-3xl font-bold text-foreground mt-1">₹1,410</p>
                  <p className="text-sm text-accent mt-2">+5.3% vs last year</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                  <p className="text-sm text-muted-foreground">Conversion Rate</p>
                  <p className="font-display text-3xl font-bold text-foreground mt-1">3.8%</p>
                  <p className="text-sm text-accent mt-2">+0.5% vs last month</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Sales Trend Chart */}
                <div className="lg:col-span-2 bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-display text-lg font-bold text-foreground">Sales Trend (2024)</h3>
                    <select className="input-cbr w-auto text-sm py-2">
                      <option>Monthly</option>
                      <option>Weekly</option>
                      <option>Daily</option>
                    </select>
                  </div>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={salesData}>
                        <defs>
                          <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(value) => `₹${(value/1000)}k`} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))', 
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '12px'
                          }}
                          formatter={(value: number) => [`₹${value.toLocaleString()}`, 'Revenue']}
                        />
                        <Area type="monotone" dataKey="sales" stroke="hsl(var(--primary))" strokeWidth={2} fill="url(#salesGradient)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Category Distribution Pie Chart */}
                <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                  <h3 className="font-display text-lg font-bold text-foreground mb-6">Sales by Category</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={categoryData}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={80}
                          paddingAngle={4}
                          dataKey="value"
                        >
                          {categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))', 
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '12px'
                          }}
                          formatter={(value: number) => [`${value}%`, 'Share']}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {categoryData.map((item) => (
                      <div key={item.name} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-xs text-muted-foreground">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Revenue by Channel Bar Chart */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                  <h3 className="font-display text-lg font-bold text-foreground mb-6">Revenue by Channel</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={revenueByChannel} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(value) => `₹${(value/100000)}L`} />
                        <YAxis type="category" dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} width={100} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))', 
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '12px'
                          }}
                          formatter={(value: number) => [`₹${value.toLocaleString()}`, 'Revenue']}
                        />
                        <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[0, 8, 8, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Orders Trend */}
                <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                  <h3 className="font-display text-lg font-bold text-foreground mb-6">Orders Trend</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={salesData}>
                        <defs>
                          <linearGradient id="ordersGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))', 
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '12px'
                          }}
                        />
                        <Area type="monotone" dataKey="orders" stroke="hsl(var(--accent))" strokeWidth={2} fill="url(#ordersGradient)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Top Performing Products */}
              <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                <h3 className="font-display text-lg font-bold text-foreground mb-6">Top Performing Products</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Rank</th>
                        <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Product</th>
                        <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Units Sold</th>
                        <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Revenue</th>
                        <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase">Growth</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topProducts.map((product, index) => (
                        <tr key={product.name} className="border-b border-border last:border-0">
                          <td className="py-4 px-4">
                            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                              index === 0 ? 'bg-amber-100 text-amber-700' :
                              index === 1 ? 'bg-gray-100 text-gray-700' :
                              index === 2 ? 'bg-orange-100 text-orange-700' :
                              'bg-secondary text-muted-foreground'
                            }`}>
                              {index + 1}
                            </span>
                          </td>
                          <td className="py-4 px-4 font-medium text-foreground">{product.name}</td>
                          <td className="py-4 px-4 text-muted-foreground">{product.sales}</td>
                          <td className="py-4 px-4 font-bold text-foreground">₹{product.revenue.toLocaleString()}</td>
                          <td className="py-4 px-4">
                            <span className="text-accent font-medium">{product.growth}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts */}
          {activeTab === "blogs" && (
            <div className="space-y-6">
              {/* Actions Bar */}
              <div className="bg-card rounded-2xl p-4 shadow-cbr-sm border border-border flex flex-wrap gap-4 items-center justify-between">
                <div className="relative flex-1 min-w-[280px] max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search blog posts..."
                    className="input-cbr pl-10"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <select className="input-cbr w-auto">
                    <option>All Status</option>
                    <option>Published</option>
                    <option>Draft</option>
                  </select>
                  <button 
                    onClick={() => {
                      setEditingBlog(null);
                      setBlogForm({
                        title: "",
                        slug: "",
                        excerpt: "",
                        content: "",
                        image: "",
                        author: "",
                        category: "",
                        status: "draft"
                      });
                      setShowBlogModal(true);
                    }}
                    className="btn-primary flex items-center gap-2"
                  >
                    <Plus className="h-5 w-5" />
                    New Blog Post
                  </button>
                </div>
              </div>

              {/* Blog Posts Table */}
              <div className="bg-card rounded-2xl shadow-cbr-sm border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Post</th>
                        <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Author</th>
                        <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Category</th>
                        <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                        <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Date</th>
                        <th className="text-right py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {blogPosts.map((blog) => (
                        <tr key={blog.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-4">
                              <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-16 h-12 rounded-lg object-cover"
                              />
                              <div className="max-w-xs">
                                <p className="font-medium text-foreground truncate">{blog.title}</p>
                                <p className="text-sm text-muted-foreground truncate">{blog.excerpt}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-muted-foreground">{blog.author}</td>
                          <td className="py-4 px-6">
                            <span className="px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground text-sm">
                              {blog.category}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                              blog.status === "published" ? "bg-accent/10 text-accent" : "bg-amber-100 text-amber-700"
                            }`}>
                              {blog.status === "published" ? "Published" : "Draft"}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-muted-foreground">{blog.date}</td>
                          <td className="py-4 px-6 text-right">
                            <div className="flex items-center justify-end gap-1">
                              <a 
                                href={`/blog/${blog.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 hover:bg-secondary rounded-lg text-muted-foreground hover:text-primary transition-colors"
                              >
                                <Eye className="h-4 w-4" />
                              </a>
                              <button 
                                onClick={() => handleEditBlog(blog)}
                                className="p-2 hover:bg-secondary rounded-lg text-muted-foreground hover:text-primary transition-colors"
                              >
                                <Edit className="h-4 w-4" />
                              </button>
                              <button 
                                onClick={() => handleDeleteBlog(blog.id)}
                                className="p-2 hover:bg-secondary rounded-lg text-muted-foreground hover:text-destructive transition-colors"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 border-t border-border flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Showing {blogPosts.length} blog posts</p>
                </div>
              </div>
            </div>
          )}

          {/* Settings */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                <h3 className="font-display text-lg font-bold text-foreground mb-6">System Settings</h3>
                <p className="text-muted-foreground">Admin settings and configurations will be managed here.</p>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Blog Modal */}
      {showBlogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={() => setShowBlogModal(false)} />
          <div className="relative bg-card rounded-2xl shadow-cbr-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between z-10">
              <h3 className="font-display text-xl font-bold text-foreground">
                {editingBlog ? "Edit Blog Post" : "Create New Blog Post"}
              </h3>
              <button 
                onClick={() => setShowBlogModal(false)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleBlogSubmit} className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Title *</label>
                  <input
                    type="text"
                    value={blogForm.title}
                    onChange={(e) => {
                      setBlogForm({ 
                        ...blogForm, 
                        title: e.target.value,
                        slug: generateSlug(e.target.value)
                      });
                    }}
                    className="input-cbr"
                    placeholder="Enter blog title"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    URL Slug
                    <span className="text-muted-foreground font-normal ml-1">(auto-generated)</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">/blog/</span>
                    <input
                      type="text"
                      value={blogForm.slug}
                      onChange={(e) => setBlogForm({ ...blogForm, slug: e.target.value })}
                      className="input-cbr flex-1"
                      placeholder="url-slug"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Author *</label>
                  <input
                    type="text"
                    value={blogForm.author}
                    onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                    className="input-cbr"
                    placeholder="Author name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Category *</label>
                  <select
                    value={blogForm.category}
                    onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                    className="input-cbr"
                    required
                  >
                    <option value="">Select category</option>
                    {blogCategories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Featured Image URL *
                </label>
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <Image className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="url"
                      value={blogForm.image}
                      onChange={(e) => setBlogForm({ ...blogForm, image: e.target.value })}
                      className="input-cbr pl-10"
                      placeholder="https://example.com/image.jpg"
                      required
                    />
                  </div>
                  {blogForm.image && (
                    <img src={blogForm.image} alt="Preview" className="w-16 h-12 rounded-lg object-cover" />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Excerpt *</label>
                <textarea
                  value={blogForm.excerpt}
                  onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                  className="input-cbr min-h-[80px] resize-none"
                  placeholder="Brief description of the blog post..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Content *</label>
                <textarea
                  value={blogForm.content}
                  onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                  className="input-cbr min-h-[200px] resize-y"
                  placeholder="Write your blog content here..."
                  required
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Tip: Use line breaks for paragraphs. You can include bullet points with • symbol.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Status</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="status"
                      checked={blogForm.status === "draft"}
                      onChange={() => setBlogForm({ ...blogForm, status: "draft" })}
                      className="text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-foreground">Draft</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="status"
                      checked={blogForm.status === "published"}
                      onChange={() => setBlogForm({ ...blogForm, status: "published" })}
                      className="text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-foreground">Published</span>
                  </label>
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-border">
                <button
                  type="button"
                  onClick={() => setShowBlogModal(false)}
                  className="btn-outline flex-1"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary flex-1 flex items-center justify-center gap-2">
                  <Save className="h-4 w-4" />
                  {editingBlog ? "Update Post" : "Create Post"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDashboard;
