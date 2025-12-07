import { Link } from "react-router-dom";
import { ArrowRight, Shield, Truck, Headphones, Award, Star, ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import SEOHead from "@/components/SEOHead";
import { products, categories, testimonials } from "@/data/products";

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [email, setEmail] = useState("");

  const featuredProducts = products.slice(0, 8);
  const usps = [
    { icon: Shield, title: "Genuine Medicines", description: "100% authentic products" },
    { icon: Award, title: "Trusted Remedies", description: "Clinically proven formulas" },
    { icon: Truck, title: "Fast Delivery", description: "Same day dispatch" },
    { icon: Headphones, title: "Expert Support", description: "Licensed pharmacists" },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <>
      <SEOHead 
        title="CBR Pharma - Clinical Based Remedies | Online Pharmacy India"
        description="CBR Pharma is your trusted online pharmacy in India. Buy genuine medicines, health supplements, and wellness products with fast delivery. Clinical Based Remedies for better health."
        keywords="CBR Pharma, online pharmacy India, buy medicines online, health supplements, prescription medicines, OTC medicines, clinical based remedies"
        url="https://cbrpharm.com"
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920')" }}
          />
          <div className="absolute inset-0 gradient-hero opacity-95" />
          
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
          </div>
          
          <div className="container-cbr py-20 md:py-28 lg:py-36 relative">
            <div className="max-w-2xl animate-fade-in-up">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Clinical Based Remedies for Your Better Health
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
                Your Trusted Partner in Quality Healthcare. Get genuine medicines, health supplements, 
                and wellness products delivered to your doorstep.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/products" className="btn-accent inline-flex items-center gap-2">
                  Shop Medicines
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/about" className="bg-white/10 border border-white/30 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition-colors">
                  Know More About CBR
                </Link>
              </div>
            </div>
          </div>

          {/* Wave decoration */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
            </svg>
          </div>
        </section>

        {/* USP Strip */}
        <section className="bg-card border-b border-border">
          <div className="container-cbr py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {usps.map((usp, index) => (
                <div 
                  key={usp.title} 
                  className="flex items-center gap-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <usp.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{usp.title}</h3>
                    <p className="text-sm text-muted-foreground">{usp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920')" }}
          />
          <div className="container-cbr relative">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Shop by Category
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Browse our wide range of healthcare products organized for your convenience
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {categories.map((category, index) => (
                <Link
                  key={category.id}
                  to={`/products?category=${category.id}`}
                  className="group relative overflow-hidden rounded-2xl aspect-square hover-lift animate-fade-in-up shadow-cbr-md hover:shadow-cbr-lg"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-white font-medium text-sm text-center">{category.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1920')" }}
          />
          <div className="absolute inset-0 bg-muted/95" />
          
          <div className="container-cbr relative">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Bestsellers
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Most popular products loved by our customers
                </p>
              </div>
              <Link
                to="/products"
                className="hidden md:inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {featuredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link to="/products" className="btn-primary">
                View All Products
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920')" }}
          />
          <div className="container-cbr relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <span className="text-primary font-medium">About CBR Pharma</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
                  Clinical Based Remedies You Can Trust
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  CBR Pharma is committed to providing high-quality, clinically proven healthcare 
                  products at affordable prices. With a team of licensed pharmacists and healthcare 
                  professionals, we ensure every product meets the highest standards of safety and efficacy.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our mission is to make quality healthcare accessible to everyone, anywhere. 
                  From prescription medicines to wellness supplements, we've got your health covered.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="font-display text-3xl font-bold text-primary">50K+</p>
                    <p className="text-sm text-muted-foreground">Products</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-3xl font-bold text-primary">1M+</p>
                    <p className="text-sm text-muted-foreground">Customers</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-3xl font-bold text-primary">500+</p>
                    <p className="text-sm text-muted-foreground">Cities</p>
                  </div>
                </div>
                <Link to="/about" className="btn-primary mt-8 inline-block">
                  Learn More
                </Link>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-cbr-lg">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600"
                    alt="Healthcare professional"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576671081837-49000212a370?w=1920')" }}
          />
          <div className="absolute inset-0 bg-secondary/95" />
          
          <div className="container-cbr relative">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                What Our Customers Say
              </h2>
              <p className="mt-4 text-muted-foreground">
                Trusted by thousands of happy customers across India
              </p>
            </div>

            <div className="relative max-w-3xl mx-auto">
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-cbr-md text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-foreground italic leading-relaxed">
                  "{testimonials[currentTestimonial].comment}"
                </p>
                <div className="mt-8 flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-medium text-foreground">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].location}</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full bg-card shadow-cbr-md hover:shadow-cbr-lg transition-shadow"
              >
                <ChevronLeft className="h-5 w-5 text-foreground" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full bg-card shadow-cbr-md hover:shadow-cbr-lg transition-shadow"
              >
                <ChevronRight className="h-5 w-5 text-foreground" />
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentTestimonial ? "bg-primary w-8" : "bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585435557343-3b092031a831?w=1920')" }}
          />
          <div className="absolute inset-0 gradient-hero opacity-95" />
          
          <div className="container-cbr text-center relative">
            <Mail className="h-12 w-12 mx-auto mb-6 text-white/80" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Stay Updated with Health Tips
            </h2>
            <p className="mt-4 text-white/90 max-w-xl mx-auto">
              Subscribe to our newsletter for exclusive offers, health tips, and new product launches.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mt-8 max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                required
              />
              <button type="submit" className="btn-accent shrink-0">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
