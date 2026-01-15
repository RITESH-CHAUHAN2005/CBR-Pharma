import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Beaker, Users, Target, Heart, Leaf, Stethoscope, Pill, FlaskConical, Star, Phone, Mail } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import heroPharma from "@/assets/hero-pharma.jpg";
import tabletsImg from "@/assets/medicines-tablets.jpg";
import syrupsImg from "@/assets/medicines-syrups.jpg";
import injectionsImg from "@/assets/medicines-injections.jpg";
import ayurvedicImg from "@/assets/medicines-ayurvedic.jpg";
import consultationImg from "@/assets/service-consultation.jpg";
import distributionImg from "@/assets/service-distribution.jpg";
import qualityImg from "@/assets/service-quality.jpg";

const HomePage = () => {

  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "500+", label: "Products" },
    { value: "1000+", label: "Healthcare Partners" },
    { value: "50+", label: "Cities Covered" },
  ];

  const medicineCategories = [
    { name: "Tablets & Capsules", image: tabletsImg, description: "High-quality oral medications" },
    { name: "Syrups & Liquids", image: syrupsImg, description: "Easy-to-consume liquid formulations" },
    { name: "Injections", image: injectionsImg, description: "Sterile injectable solutions" },
    { name: "Ayurvedic", image: ayurvedicImg, description: "Traditional herbal remedies" },
  ];

  const services = [
    {
      icon: Stethoscope,
      title: "Healthcare Consultation",
      description: "Expert guidance from licensed pharmacists and healthcare professionals",
      image: consultationImg
    },
    {
      icon: FlaskConical,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control for every product",
      image: qualityImg
    },
    {
      icon: Pill,
      title: "Pharmaceutical Distribution",
      description: "Reliable supply chain ensuring timely delivery to healthcare facilities",
      image: distributionImg
    },
  ];

  const values = [
    { icon: Shield, title: "Quality First", description: "Every product meets the highest pharmaceutical standards" },
    { icon: Heart, title: "Patient Care", description: "Dedicated to improving lives through better healthcare" },
    { icon: Leaf, title: "Natural Solutions", description: "Blending modern science with traditional remedies" },
    { icon: Award, title: "Excellence", description: "Committed to excellence in everything we do" },
  ];

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "General Physician, Delhi",
      comment: "CBR Pharma has been our trusted partner for pharmaceutical supplies. Their quality and reliability are unmatched in the industry.",
      rating: 5,
      initials: "RK",
      bgColor: "bg-primary",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sanjay Gupta",
      role: "Owner, Sanjay Medical Store",
      comment: "Excellent product range and timely deliveries. CBR Pharma truly understands the needs of healthcare providers.",
      rating: 5,
      initials: "SG",
      bgColor: "bg-accent",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Pediatrician, Mumbai",
      comment: "I recommend CBR Pharma products to my patients with confidence. Their formulations are effective and safe for children.",
      rating: 5,
      initials: "PS",
      bgColor: "bg-cbr-cyan",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Amit Patel",
      role: "Hospital Administrator",
      comment: "Their distribution network is impeccable. We've never faced stock issues since partnering with CBR Pharma.",
      rating: 5,
      initials: "AP",
      bgColor: "bg-primary",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
      name: "Dr. Meena Verma",
      role: "Dermatologist, Bangalore",
      comment: "The quality of their dermatological products is exceptional. My patients have shown remarkable improvement.",
      rating: 5,
      initials: "MV",
      bgColor: "bg-accent",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rahul Sharma",
      role: "Pharmacy Chain Owner",
      comment: "Working with CBR Pharma for 10+ years. Their commitment to quality and customer service is truly commendable.",
      rating: 5,
      initials: "RS",
      bgColor: "bg-cbr-cyan",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    },
  ];


  return (
    <>
      <SEOHead
        title="CBR Pharma - Clinical Based Remedies | Trusted Pharmaceutical Company"
        description="CBR Pharma is a trusted pharmaceutical company providing high-quality medicines, health supplements, and healthcare solutions. Clinical Based Remedies for better health."
        keywords="CBR Pharma, pharmaceutical company, medicines, healthcare, clinical remedies, quality medicines India"
        url="https://cbrpharm.com"
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroPharma})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />

          {/* Animated elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-40 left-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
          </div>

          <div className="container-cbr py-20 relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Clinical Based Remedies for <span className="text-accent">Better Health</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
                Your Trusted Partner in Quality Healthcare. We manufacture and distribute
                genuine medicines, health supplements, and wellness products across India.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/services" className="btn-accent inline-flex items-center gap-2 group shadow-lg">
                  Our Services
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/about" className="bg-white/10 border border-white/30 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition-all backdrop-blur-sm">
                  About CBR Pharma
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-white/80">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Award className="h-5 w-5" />
                  <span className="text-sm">GMP Approved</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Beaker className="h-5 w-5" />
                  <span className="text-sm">Lab Tested</span>
                </div>
              </div>
            </div>
          </div>

          {/* Wave decoration */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card border-b border-border">
          <div className="container-cbr">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-display text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-2 text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16">
          <div className="container-cbr">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-2xl shadow-cbr-sm hover:shadow-cbr-md transition-shadow text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl gradient-primary flex items-center justify-center mb-4">
                    <value.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medicine Categories */}
        <section className="py-16 bg-muted/50">
          <div className="container-cbr">
            <div className="text-center mb-12">
              <span className="text-primary font-medium">Our Products</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Medicine Categories
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                We offer a comprehensive range of pharmaceutical products to meet diverse healthcare needs
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {medicineCategories.map((category, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-cbr-md hover:shadow-cbr-lg transition-all"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h3 className="text-white font-semibold text-lg">{category.name}</h3>
                    <p className="text-white/80 text-sm mt-1">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container-cbr">
            <div className="text-center mb-12">
              <span className="text-primary font-medium">What We Do</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Our Healthcare Services
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Comprehensive pharmaceutical solutions for healthcare providers and patients
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl overflow-hidden shadow-cbr-sm hover:shadow-cbr-lg transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 -mt-12 relative z-10 shadow-lg">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">{service.title}</h3>
                    <p className="mt-2 text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/services" className="btn-primary inline-flex items-center gap-2">
                Explore All Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-16 bg-secondary/50">
          <div className="container-cbr">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium">About CBR Pharma</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
                  Clinical Based Remedies You Can Trust
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  CBR Pharma is committed to providing high-quality, clinically proven healthcare
                  products at affordable prices. With over 25 years of experience in the pharmaceutical
                  industry, we have established ourselves as a trusted name in healthcare.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our team of licensed pharmacists and healthcare professionals ensures every product
                  meets the highest standards of safety and efficacy. We believe in making quality
                  healthcare accessible to everyone.
                </p>

                <div className="mt-8 flex items-center gap-8">
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-bold text-foreground">Expert Team</p>
                      <p className="text-sm text-muted-foreground">Licensed Professionals</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-bold text-foreground">Our Mission</p>
                      <p className="text-sm text-muted-foreground">Better Health for All</p>
                    </div>
                  </div>
                </div>

                <Link to="/about" className="btn-primary mt-8 inline-flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-cbr-lg">
                  <img
                    src={consultationImg}
                    alt="Healthcare professionals"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg hidden md:block">
                  <p className="font-display text-3xl font-bold">25+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted/30">
          <div className="container-cbr">
            <div className="text-center mb-14">
              <span className="text-primary font-medium">Testimonials</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                What Our Partners Say
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Trusted by healthcare professionals and businesses across India
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-cbr-sm hover:shadow-cbr-md transition-all duration-300 border border-border group hover:-translate-y-1"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    "{testimonial.comment}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full shadow-md object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroPharma})` }}
          />
          <div className="absolute inset-0 bg-primary/95" />

          <div className="container-cbr text-center relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Partner with CBR Pharma
            </h2>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto">
              Whether you're a healthcare provider, pharmacy, or distributor, we'd love to hear from you.
              Let's work together to bring quality healthcare to more people.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-accent inline-flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Contact Us
              </Link>
              <a href="mailto:info@cbrpharma.com" className="bg-white/10 border border-white/30 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition-all inline-flex items-center gap-2">
                <Mail className="h-5 w-5" />
                info@cbrpharma.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
