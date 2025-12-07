import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-cbr py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="CBR Pharma" className="h-12 w-12 object-contain" />
              <div>
                <h3 className="font-display font-bold text-xl">CBR Pharma</h3>
                <p className="text-sm opacity-80">Clinical Based Remedies</p>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Your Trusted Partner in Quality Healthcare. We provide genuine medicines, 
              trusted clinical remedies, and exceptional customer service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><Link to="/about" className="hover:opacity-100 hover:underline transition-all">About Us</Link></li>
              <li><Link to="/products" className="hover:opacity-100 hover:underline transition-all">Shop Products</Link></li>
              <li><Link to="/categories" className="hover:opacity-100 hover:underline transition-all">Categories</Link></li>
              <li><Link to="/blog" className="hover:opacity-100 hover:underline transition-all">Health Blog</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 hover:underline transition-all">Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Customer Service</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><Link to="/faq" className="hover:opacity-100 hover:underline transition-all">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:opacity-100 hover:underline transition-all">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="hover:opacity-100 hover:underline transition-all">Returns & Refunds</Link></li>
              <li><Link to="/privacy" className="hover:opacity-100 hover:underline transition-all">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:opacity-100 hover:underline transition-all">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="opacity-80">+91 9555559919</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="opacity-80">abhishek@cbrpharm.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="opacity-80">CBR Hospitals, Multispeciality Hospital & Trauma Centre</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-cbr py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>© 2024 CBR Pharma. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span>Licensed Pharmacy</span>
              <span>•</span>
              <span>ISO Certified</span>
              <span>•</span>
              <span>Secure Payments</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
