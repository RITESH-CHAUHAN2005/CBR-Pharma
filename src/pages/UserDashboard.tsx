import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  User, Package, Heart, MapPin, FileText, Settings, LogOut, 
  Edit2, Bell, Shield, Eye, EyeOff, Camera, Mail, Phone, Calendar
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";

type Tab = "overview" | "profile" | "orders" | "wishlist" | "addresses" | "prescriptions" | "settings";

const UserDashboard = () => {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated, setShowAuthModal, setAuthMode } = useAuth();
  const { wishlistItems } = useCart();
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [showPassword, setShowPassword] = useState(false);

  const menuItems = [
    { id: "overview", label: "Overview", icon: User },
    { id: "profile", label: "My Profile", icon: Edit2 },
    { id: "orders", label: "My Orders", icon: Package },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "addresses", label: "Saved Addresses", icon: MapPin },
    { id: "prescriptions", label: "Prescriptions", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const mockOrders = [
    { id: "CBR1701234567890", date: "Dec 1, 2024", status: "Delivered", total: 1299, items: 3 },
    { id: "CBR1701234567891", date: "Nov 28, 2024", status: "Processing", total: 599, items: 2 },
    { id: "CBR1701234567892", date: "Nov 25, 2024", status: "Shipped", total: 2450, items: 5 },
    { id: "CBR1701234567893", date: "Nov 20, 2024", status: "Delivered", total: 890, items: 4 },
  ];

  const savedAddresses = [
    { id: "1", type: "Home", name: "Rahul Kumar", address: "123, Green Park Extension, Block A, New Delhi, Delhi - 110016", phone: "+91 9876543210", isDefault: true },
    { id: "2", type: "Office", name: "Rahul Kumar", address: "456, Sector 15, Near City Mall, Noida, UP - 201301", phone: "+91 9876543210", isDefault: false }
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
    toast({ title: "Logged out successfully" });
  };

  if (!isAuthenticated) {
    return (
      <>
        <SEOHead 
          title="My Account | CBR Pharma"
          description="Access your CBR Pharma account dashboard to manage orders, profile, and prescriptions."
          url="https://cbrpharm.com/account"
        />
        <main className="min-h-screen py-16 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920')" }}
          />
          <div className="container-cbr relative">
            <div className="max-w-md mx-auto text-center bg-card rounded-3xl p-10 shadow-cbr-lg border border-border">
              <div className="w-20 h-20 mx-auto rounded-full gradient-primary flex items-center justify-center mb-6">
                <User className="h-10 w-10 text-primary-foreground" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">Welcome to CBR Pharma</h2>
              <p className="mt-4 text-muted-foreground">
                Login to access your account dashboard, track orders, and manage your health profile.
              </p>
              <div className="mt-8 space-y-3">
                <button
                  onClick={() => { setAuthMode("login"); setShowAuthModal(true); }}
                  className="btn-primary w-full"
                >
                  Login to Your Account
                </button>
                <button
                  onClick={() => { setAuthMode("signup"); setShowAuthModal(true); }}
                  className="btn-outline w-full"
                >
                  Create New Account
                </button>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <SEOHead 
        title="My Account Dashboard | CBR Pharma"
        description="Manage your CBR Pharma account, view orders, update profile, and track prescriptions."
        url="https://cbrpharm.com/account"
      />
      <main className="min-h-screen py-8 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920')" }}
        />
        <div className="container-cbr relative">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl shadow-cbr-sm sticky top-24 overflow-hidden border border-border">
                {/* User Header */}
                <div className="relative p-6 text-center gradient-hero text-white">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30">
                      <span className="font-display text-3xl font-bold">
                        {user?.name?.charAt(0) || "U"}
                      </span>
                    </div>
                    <button className="absolute bottom-0 right-0 p-2 rounded-full bg-accent text-white shadow-md">
                      <Camera className="h-4 w-4" />
                    </button>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold">
                    {user?.name || "User"}
                  </h3>
                  <p className="text-sm text-white/80">{user?.email}</p>
                </div>

                {/* Menu */}
                <nav className="p-4 space-y-1">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id as Tab)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        activeTab === item.id
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "text-foreground hover:bg-secondary"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-destructive/10 transition-colors mt-4"
                  >
                    <LogOut className="h-5 w-5" />
                    <span className="font-medium">Logout</span>
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Overview */}
              {activeTab === "overview" && (
                <>
                  <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                    <h2 className="font-display text-xl font-bold text-foreground mb-6">
                      Welcome back, {user?.name?.split(" ")[0] || "User"}!
                    </h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-5 text-center border border-primary/10">
                        <Package className="h-10 w-10 mx-auto text-primary mb-3" />
                        <p className="font-display text-3xl font-bold text-foreground">{mockOrders.length}</p>
                        <p className="text-sm text-muted-foreground mt-1">Total Orders</p>
                      </div>
                      <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-xl p-5 text-center border border-pink-200">
                        <Heart className="h-10 w-10 mx-auto text-pink-500 mb-3" />
                        <p className="font-display text-3xl font-bold text-foreground">{wishlistItems.length}</p>
                        <p className="text-sm text-muted-foreground mt-1">Wishlist Items</p>
                      </div>
                      <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-5 text-center border border-accent/10">
                        <MapPin className="h-10 w-10 mx-auto text-accent mb-3" />
                        <p className="font-display text-3xl font-bold text-foreground">{savedAddresses.length}</p>
                        <p className="text-sm text-muted-foreground mt-1">Saved Addresses</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-display text-lg font-bold text-foreground">Recent Orders</h3>
                      <button onClick={() => setActiveTab("orders")} className="text-sm text-primary hover:underline font-medium">
                        View All →
                      </button>
                    </div>
                    <div className="space-y-3">
                      {mockOrders.slice(0, 3).map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                          <div>
                            <p className="font-medium text-foreground">{order.id}</p>
                            <p className="text-sm text-muted-foreground">{order.date} • {order.items} items</p>
                          </div>
                          <div className="text-right">
                            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                              order.status === "Delivered" ? "bg-accent/10 text-accent" :
                              order.status === "Shipped" ? "bg-primary/10 text-primary" :
                              "bg-amber-100 text-amber-700"
                            }`}>
                              {order.status}
                            </span>
                            <p className="mt-1 font-bold text-foreground">₹{order.total}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Profile */}
              {activeTab === "profile" && (
                <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                  <h2 className="font-display text-xl font-bold text-foreground mb-6">My Profile</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          Full Name
                        </label>
                        <input type="text" defaultValue={user?.name || ""} className="input-cbr" />
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          Email Address
                        </label>
                        <input type="email" defaultValue={user?.email || ""} className="input-cbr" />
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          Phone Number
                        </label>
                        <input type="tel" defaultValue="+91 9876543210" className="input-cbr" />
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          Date of Birth
                        </label>
                        <input type="date" className="input-cbr" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Gender</label>
                        <select className="input-cbr">
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <button type="submit" className="btn-primary">Save Changes</button>
                  </form>
                </div>
              )}

              {/* Orders */}
              {activeTab === "orders" && (
                <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                  <h2 className="font-display text-xl font-bold text-foreground mb-6">My Orders</h2>
                  <div className="space-y-4">
                    {mockOrders.map((order) => (
                      <div key={order.id} className="border border-border rounded-xl p-5 hover:shadow-cbr-sm transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <p className="font-medium text-foreground">{order.id}</p>
                            <p className="text-sm text-muted-foreground">{order.date}</p>
                          </div>
                          <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${
                            order.status === "Delivered" ? "bg-accent/10 text-accent" :
                            order.status === "Shipped" ? "bg-primary/10 text-primary" :
                            "bg-amber-100 text-amber-700"
                          }`}>
                            {order.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-muted-foreground">{order.items} items</p>
                          <p className="font-display text-lg font-bold text-foreground">₹{order.total}</p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-border flex gap-3">
                          <button className="btn-outline text-sm py-2 flex-1">View Details</button>
                          <button className="btn-primary text-sm py-2 flex-1">Track Order</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Wishlist */}
              {activeTab === "wishlist" && (
                <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                  <h2 className="font-display text-xl font-bold text-foreground mb-6">My Wishlist</h2>
                  {wishlistItems.length === 0 ? (
                    <div className="text-center py-12">
                      <Heart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground mb-4">Your wishlist is empty</p>
                      <Link to="/products" className="btn-primary inline-block">Browse Products</Link>
                    </div>
                  ) : (
                    <p className="text-muted-foreground">{wishlistItems.length} items in wishlist</p>
                  )}
                </div>
              )}

              {/* Addresses */}
              {activeTab === "addresses" && (
                <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-display text-xl font-bold text-foreground">Saved Addresses</h2>
                    <button className="btn-primary text-sm">+ Add New Address</button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {savedAddresses.map((addr) => (
                      <div key={addr.id} className="border border-border rounded-xl p-5 hover:shadow-cbr-sm transition-shadow">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="font-medium text-foreground">{addr.type}</span>
                          {addr.isDefault && (
                            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Default</span>
                          )}
                        </div>
                        <p className="font-medium text-foreground">{addr.name}</p>
                        <p className="text-sm text-muted-foreground mt-2">{addr.address}</p>
                        <p className="text-sm text-muted-foreground">{addr.phone}</p>
                        <div className="mt-4 flex gap-3">
                          <button className="text-sm text-primary hover:underline">Edit</button>
                          <button className="text-sm text-destructive hover:underline">Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Prescriptions */}
              {activeTab === "prescriptions" && (
                <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-display text-xl font-bold text-foreground">Uploaded Prescriptions</h2>
                    <button className="btn-primary text-sm">+ Upload New</button>
                  </div>
                  <div className="text-center py-12">
                    <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">No prescriptions uploaded yet</p>
                    <p className="text-sm text-muted-foreground mt-2">Upload prescriptions to order prescription medicines</p>
                  </div>
                </div>
              )}

              {/* Settings */}
              {activeTab === "settings" && (
                <div className="space-y-6">
                  <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="h-6 w-6 text-primary" />
                      <h2 className="font-display text-xl font-bold text-foreground">Change Password</h2>
                    </div>
                    <form className="space-y-4 max-w-md">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Current Password</label>
                        <div className="relative">
                          <input type={showPassword ? "text" : "password"} className="input-cbr pr-10" />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">New Password</label>
                        <input type="password" className="input-cbr" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Confirm New Password</label>
                        <input type="password" className="input-cbr" />
                      </div>
                      <button type="submit" className="btn-primary">Update Password</button>
                    </form>
                  </div>

                  <div className="bg-card rounded-2xl p-6 shadow-cbr-sm border border-border">
                    <div className="flex items-center gap-3 mb-6">
                      <Bell className="h-6 w-6 text-primary" />
                      <h2 className="font-display text-xl font-bold text-foreground">Notification Preferences</h2>
                    </div>
                    <div className="space-y-4">
                      {[
                        { label: "Order Updates", description: "Get notified about order status" },
                        { label: "Promotional Offers", description: "Receive exclusive deals and offers" },
                        { label: "Health Tips", description: "Weekly health tips and articles" },
                        { label: "Prescription Reminders", description: "Reminders for medicine refills" }
                      ].map((item) => (
                        <div key={item.label} className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                          <div>
                            <p className="font-medium text-foreground">{item.label}</p>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-border rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default UserDashboard;
