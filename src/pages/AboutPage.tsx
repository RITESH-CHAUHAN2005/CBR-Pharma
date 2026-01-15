import { Shield, Award, Users, Target, Heart, CheckCircle } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every product undergoes rigorous quality checks to ensure safety and efficacy."
    },
    {
      icon: Award,
      title: "Clinical Excellence",
      description: "Our remedies are backed by scientific research and clinical studies."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "We prioritize customer satisfaction with dedicated support and care."
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Making healthcare accessible and affordable for everyone."
    }
  ];

  const milestones = [
    { year: "2015", event: "CBR Pharma Founded" },
    { year: "2017", event: "Expanded to 100+ Cities" },
    { year: "2019", event: "Launched Online Platform" },
    { year: "2021", event: "1 Million+ Customers Served" },
    { year: "2023", event: "Pan India Delivery Network" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-16 md:py-24">
        <div className="container-cbr">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold">
              About CBR Pharma
            </h1>
            <p className="mt-6 text-lg opacity-90">
              Clinical Based Remedies - Your Trusted Partner in Quality Healthcare
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="container-cbr">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
                Committed to Your Health Since 2015
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                CBR Pharma was founded with a simple mission: to make quality healthcare accessible 
                to everyone. What started as a small pharmacy has grown into one of India's most 
                trusted healthcare platforms, serving millions of customers across the country.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our name "Clinical Based Remedies" reflects our commitment to providing medicines 
                and healthcare products that are backed by clinical research and proven efficacy. 
                Every product on our platform undergoes rigorous quality checks to ensure you 
                receive only the best.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                With a team of licensed pharmacists and healthcare professionals, we're not just 
                an online pharmacy - we're your health partner, here to guide you on your 
                wellness journey.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600"
                alt="CBR Pharma Team"
                className="rounded-2xl shadow-cbr-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-secondary">
        <div className="container-cbr">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-cbr-md">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To revolutionize healthcare accessibility in India by providing genuine, 
                affordable medicines and health products with the convenience of doorstep 
                delivery, backed by professional pharmaceutical guidance.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-cbr-md">
              <Award className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground">Our Vision</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To become India's most trusted healthcare platform, where every individual 
                has access to quality healthcare products and professional guidance, 
                regardless of their location or economic status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background">
        <div className="container-cbr">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Our Core Values
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at CBR Pharma
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-card rounded-2xl p-6 shadow-cbr-sm hover:shadow-cbr-md transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <value.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted">
        <div className="container-cbr">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Our Journey
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className="flex gap-6 items-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="shrink-0 w-20 h-20 rounded-full gradient-primary flex items-center justify-center">
                    <span className="font-display font-bold text-primary-foreground">{milestone.year}</span>
                  </div>
                  <div className="flex-1 bg-card rounded-xl p-4 shadow-cbr-sm">
                    <p className="font-medium text-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 gradient-hero text-primary-foreground">
        <div className="container-cbr">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold">50K+</p>
              <p className="mt-2 opacity-80">Products Available</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold">1M+</p>
              <p className="mt-2 opacity-80">Happy Customers</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold">500+</p>
              <p className="mt-2 opacity-80">Cities Served</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold">24/7</p>
              <p className="mt-2 opacity-80">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container-cbr">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Why Choose CBR Pharma?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "100% Genuine Medicines",
              "Licensed Pharmacist Support",
              "Easy Prescription Upload",
              "Fast & Free Delivery",
              "Secure Payment Options",
              "Best Price Guarantee"
            ].map((item, index) => (
              <div 
                key={item}
                className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-cbr-sm"
              >
                <CheckCircle className="h-6 w-6 text-accent shrink-0" />
                <span className="font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;