import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled 
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border" 
          : "bg-primary md:bg-primary/90 md:backdrop-blur-sm"
      }`}
    >
      <div className="container-cbr py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src={logo} 
                alt="CBR Pharma" 
                className="h-12 w-12 md:h-14 md:w-14 object-contain transition-transform group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <h1 className={`font-display font-bold text-xl md:text-2xl transition-colors ${
                scrolled ? "text-primary" : "text-primary-foreground"
              }`}>
                CBR Pharma
              </h1>
              <p className={`text-xs md:text-sm transition-colors ${
                scrolled ? "text-muted-foreground" : "text-primary-foreground/80"
              }`}>
                Clinical Based Remedies
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : scrolled
                    ? "text-foreground hover:bg-primary/10 hover:text-primary"
                    : "text-primary-foreground/90 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <Link
            to="/contact"
            className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              scrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            }`}
          >
            Get in Touch
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu - Top dropdown */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-foreground/50 z-[1001] md:hidden animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu */}
          <div 
            className="fixed top-[76px] left-0 right-0 max-h-[calc(100vh-76px)] bg-background z-[1002] md:hidden overflow-y-auto shadow-2xl border-b border-border animate-slide-down"
          >
            <nav className="px-5 py-6">
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={link.name} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-4 py-4 px-4 text-lg font-medium rounded-xl transition-all duration-200 min-h-[56px] ${
                        isActive(link.path)
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-4 border-t border-border mt-4">
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center gap-2 py-4 px-4 bg-primary text-primary-foreground text-lg font-semibold rounded-xl shadow-lg shadow-primary/25 min-h-[56px]"
                  >
                    Get in Touch
                  </Link>
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
