import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Main Footer */}
      <div className="container-cbr py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <img src={logo} alt="CBR Pharma" className="h-14 w-14 object-contain" />
              <div>
                <h3 className="font-display font-bold text-2xl">CBR Pharma</h3>
                <p className="text-sm opacity-80">Clinical Based Remedies</p>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Your Trusted Partner in Quality Healthcare. Committed to providing genuine medicines 
              and trusted clinical remedies for a healthier tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent rounded-full" />
              Our Services
            </h4>
            <ul className="space-y-4 text-sm">
              {[
                "Pharmaceutical Distribution",
                "Medical Consultation",
                "Quality Assurance",
                "Healthcare Solutions",
              ].map((service) => (
                <li key={service}>
                  <span className="opacity-80 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-cbr-cyan rounded-full" />
              Contact Us
            </h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary-foreground/10 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium mb-1">Phone</p>
                  <a href="tel:+919555559919" className="opacity-80 hover:opacity-100 transition-opacity">
                    +91 9555559919
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary-foreground/10 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a href="mailto:abhishek@cbrpharm.com" className="opacity-80 hover:opacity-100 transition-opacity">
                    abhishek@cbrpharm.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary-foreground/10 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium mb-1">Address</p>
                  <p className="opacity-80">
                    CBR Hospitals, Multispeciality Hospital & Trauma Centre
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 relative z-10">
        <div className="container-cbr py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>© {currentYear} CBR Pharma. All rights reserved.</p>
            <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
              <Link to="/privacy" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms" className="hover:opacity-100 transition-opacity">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
