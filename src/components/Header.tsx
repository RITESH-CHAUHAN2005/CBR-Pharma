import { useState, useRef, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingCart, User, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import MegaMenu from "@/components/MegaMenu";
import { products } from "@/data/products";
import { megaMenuData } from "@/data/megaMenuData";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { getCartCount, getWishlistCount } = useCart();
  const { isAuthenticated, setShowAuthModal, setAuthMode } = useAuth();

  // Filter products based on search query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.tags?.some(tag => tag.toLowerCase().includes(query))
    ).slice(0, 6);
  }, [searchQuery]);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setShowSearchResults(false);
      setSearchQuery("");
    }
  };

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
    setShowSearchResults(false);
    setSearchQuery("");
  };

  const handleAuthClick = () => {
    if (isAuthenticated) {
      navigate("/account");
    } else {
      setAuthMode("login");
      setShowAuthModal(true);
    }
  };

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setShowMegaMenu(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setShowMegaMenu(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (megaMenuTimeoutRef.current) {
        clearTimeout(megaMenuTimeoutRef.current);
      }
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Categories", path: "#", hasMegaMenu: true },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-cbr-sm">
      {/* Main header */}
      <div className="container-cbr py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="CBR Pharma" className="h-12 w-12 object-contain" />
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-xl text-primary leading-tight">CBR Pharma</h1>
              <p className="text-xs text-muted-foreground">Clinical Based Remedies</p>
            </div>
          </Link>

          {/* Search bar - desktop */}
          <div ref={searchRef} className="hidden md:block flex-1 max-w-xl relative">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search medicines, health products..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchResults(true);
                  }}
                  onFocus={() => setShowSearchResults(true)}
                  className="input-cbr pl-12 pr-24 w-full"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 btn-accent py-2 px-4 text-sm"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Search Results Dropdown */}
            {showSearchResults && searchQuery.trim() && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-card rounded-xl shadow-cbr-lg border border-border z-50 overflow-hidden">
                {searchResults.length > 0 ? (
                  <>
                    <div className="max-h-96 overflow-y-auto">
                      {searchResults.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleProductClick(product.id)}
                          className="w-full flex items-center gap-3 p-3 hover:bg-secondary transition-colors text-left"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-foreground text-sm truncate">{product.name}</p>
                            <p className="text-xs text-muted-foreground">{product.brand}</p>
                          </div>
                          <p className="font-bold text-primary text-sm">₹{product.price}</p>
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={handleSearch}
                      className="w-full p-3 text-center text-primary text-sm font-medium hover:bg-secondary transition-colors border-t border-border"
                    >
                      View all results for "{searchQuery}"
                    </button>
                  </>
                ) : (
                  <div className="p-4 text-center text-muted-foreground">
                    No products found for "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              to="/wishlist"
              className="relative p-2.5 rounded-xl hover:bg-secondary transition-colors"
            >
              <Heart className="h-6 w-6 text-foreground" />
              {getWishlistCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
                  {getWishlistCount()}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              className="relative p-2.5 rounded-xl hover:bg-secondary transition-colors"
            >
              <ShoppingCart className="h-6 w-6 text-foreground" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
                  {getCartCount()}
                </span>
              )}
            </Link>

            <button
              onClick={handleAuthClick}
              className="p-2.5 rounded-xl hover:bg-secondary transition-colors"
            >
              <User className="h-6 w-6 text-foreground" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl hover:bg-secondary transition-colors md:hidden"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <form onSubmit={handleSearch} className="mt-4 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search medicines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-cbr pl-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
        </form>
      </div>

      {/* Navigation */}
      <nav className="hidden md:block border-t border-border bg-card relative">
        <div className="container-cbr">
          <ul className="flex items-center gap-8 py-3">
            {navLinks.map((link) => (
              <li 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasMegaMenu && handleMegaMenuEnter()}
                onMouseLeave={() => link.hasMegaMenu && handleMegaMenuLeave()}
              >
                {link.hasMegaMenu ? (
                  <button
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group flex items-center gap-1"
                  >
                    {link.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${showMegaMenu ? "rotate-180" : ""}`} />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group flex items-center gap-1"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Mega Menu */}
        <div
          onMouseEnter={handleMegaMenuEnter}
          onMouseLeave={handleMegaMenuLeave}
        >
          <MegaMenu isOpen={showMegaMenu} onClose={() => setShowMegaMenu(false)} />
        </div>
      </nav>

      {/* Mobile menu - Full overlay with highest z-index */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-card z-[9999] md:hidden overflow-y-auto" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
          {/* Close button */}
          <div className="sticky top-0 bg-card flex items-center justify-between px-4 py-4 border-b border-border">
            <Link to="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
              <img src={logo} alt="CBR Pharma" className="h-10 w-10 object-contain" />
              <span className="font-display font-bold text-lg text-primary">CBR Pharma</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-xl hover:bg-secondary transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <nav className="px-4 py-6">
            <ul className="space-y-1">
              {navLinks.filter(link => !link.hasMegaMenu).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 px-4 text-lg font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              
              {/* Categories with expandable submenu */}
              <li className="border-t border-border pt-4 mt-4">
                <p className="px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Categories</p>
                {megaMenuData.map((category) => (
                  <div key={category.name}>
                    <button
                      onClick={() => setExpandedMobileCategory(
                        expandedMobileCategory === category.name ? null : category.name
                      )}
                      className="w-full flex items-center justify-between py-3 px-4 text-foreground hover:bg-secondary rounded-lg transition-colors"
                    >
                      <span className="font-medium">{category.name}</span>
                      <ChevronRight className={`h-5 w-5 transition-transform ${expandedMobileCategory === category.name ? "rotate-90" : ""}`} />
                    </button>
                    
                    {expandedMobileCategory === category.name && (
                      <div className="ml-4 pl-4 border-l border-border">
                        {category.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={`/category/${category.slug}/${subItem.slug}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="block py-2 px-4 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </li>

              {/* Quick links */}
              <li className="border-t border-border pt-4 mt-4">
                <Link
                  to="/wishlist"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 py-3 px-4 text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  <Heart className="h-5 w-5" />
                  <span className="font-medium">Wishlist</span>
                  {getWishlistCount() > 0 && (
                    <span className="ml-auto bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {getWishlistCount()}
                    </span>
                  )}
                </Link>
                <Link
                  to="/cart"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 py-3 px-4 text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="font-medium">Cart</span>
                  {getCartCount() > 0 && (
                    <span className="ml-auto bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {getCartCount()}
                    </span>
                  )}
                </Link>
              </li>

              <li className="pt-4 border-t border-border">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleAuthClick();
                  }}
                  className="w-full btn-primary text-center"
                >
                  {isAuthenticated ? "My Account" : "Login / Sign Up"}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
