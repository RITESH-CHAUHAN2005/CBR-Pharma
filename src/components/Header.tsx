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
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-card border-b border-border shadow-lg md:sticky md:z-50 md:bg-card/95 md:backdrop-blur-md md:shadow-cbr-sm">
      {/* Main header */}
      <div className="container-cbr py-3 md:py-4">
        <div className="flex items-center justify-between gap-3 md:gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 shrink-0">
            <img src={logo} alt="CBR Pharma" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-lg md:text-xl text-primary leading-tight">CBR Pharma</h1>
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
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
            <Link
              to="/wishlist"
              className="relative p-3 md:p-2.5 rounded-xl hover:bg-secondary transition-colors"
            >
              <Heart className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
              {getWishlistCount() > 0 && (
                <span className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
                  {getWishlistCount()}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              className="relative p-3 md:p-2.5 rounded-xl hover:bg-secondary transition-colors"
            >
              <ShoppingCart className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
              {getCartCount() > 0 && (
                <span className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
                  {getCartCount()}
                </span>
              )}
            </Link>

            <button
              onClick={handleAuthClick}
              className="p-3 md:p-2.5 rounded-xl hover:bg-secondary transition-colors"
            >
              <User className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
            </button>

            {/* Mobile menu toggle - hamburger button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors md:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <form onSubmit={handleSearch} className="mt-3 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search medicines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-cbr pl-11 py-3 text-base"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
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

      {/* Mobile menu - Full-width overlay from top */}
      {isMenuOpen && (
        <>
          {/* Full screen backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1001] md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Full-width dropdown menu overlay - appears below navbar */}
          <div 
            className="fixed top-[120px] left-0 right-0 bottom-0 bg-card z-[1002] md:hidden overflow-y-auto shadow-2xl animate-fade-in"
          >
            <nav className="px-5 py-6 pb-24">
              <ul className="space-y-2">
                {navLinks.filter(link => !link.hasMegaMenu).map((link, index) => (
                  <li key={link.name} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-4 py-4 px-4 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-xl transition-all duration-200 min-h-[56px]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                
                {/* Categories with expandable submenu */}
                <li className="border-t border-border pt-5 mt-5">
                  <p className="px-4 text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3">Shop by Category</p>
                  <div className="space-y-1">
                    {megaMenuData.map((category, catIndex) => (
                      <div key={category.name} className="animate-fade-in" style={{ animationDelay: `${(catIndex + 5) * 50}ms` }}>
                        <button
                          onClick={() => setExpandedMobileCategory(
                            expandedMobileCategory === category.name ? null : category.name
                          )}
                          className="w-full flex items-center justify-between py-4 px-4 text-foreground hover:bg-primary/10 rounded-xl transition-all duration-200 min-h-[56px]"
                        >
                          <span className="font-medium text-base">{category.name}</span>
                          <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${expandedMobileCategory === category.name ? "rotate-180" : ""}`} />
                        </button>
                        
                        {/* Submenu with smooth animation */}
                        <div className={`overflow-hidden transition-all duration-300 ease-out ${expandedMobileCategory === category.name ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                          <div className="ml-4 mt-2 pl-4 border-l-2 border-primary/30 space-y-1">
                            {category.subItems.map((subItem, subIndex) => (
                              <Link
                                key={subItem.name}
                                to={`/category/${category.slug}/${subItem.slug}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-3.5 px-4 text-base text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200 animate-fade-in min-h-[48px] flex items-center"
                                style={{ animationDelay: `${subIndex * 30}ms` }}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </li>

                {/* Quick links */}
                <li className="border-t border-border pt-5 mt-5">
                  <p className="px-4 text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3">Quick Links</p>
                  <Link
                    to="/wishlist"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-4 py-4 px-4 text-foreground hover:bg-secondary rounded-xl transition-all duration-200 min-h-[56px]"
                  >
                    <Heart className="h-6 w-6 text-pink-500" />
                    <span className="font-medium text-base">My Wishlist</span>
                    {getWishlistCount() > 0 && (
                      <span className="ml-auto bg-pink-500 text-white text-xs font-bold rounded-full h-6 min-w-6 px-2 flex items-center justify-center">
                        {getWishlistCount()}
                      </span>
                    )}
                  </Link>
                  <Link
                    to="/cart"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-4 py-4 px-4 text-foreground hover:bg-secondary rounded-xl transition-all duration-200 min-h-[56px]"
                  >
                    <ShoppingCart className="h-6 w-6 text-accent" />
                    <span className="font-medium text-base">Shopping Cart</span>
                    {getCartCount() > 0 && (
                      <span className="ml-auto bg-accent text-accent-foreground text-xs font-bold rounded-full h-6 min-w-6 px-2 flex items-center justify-center">
                        {getCartCount()}
                      </span>
                    )}
                  </Link>
                </li>

                <li className="pt-6 border-t border-border mt-5">
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleAuthClick();
                    }}
                    className="w-full btn-primary text-center py-4 text-base font-semibold rounded-xl shadow-lg shadow-primary/25 min-h-[56px]"
                  >
                    {isAuthenticated ? "My Account" : "Login / Sign Up"}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
