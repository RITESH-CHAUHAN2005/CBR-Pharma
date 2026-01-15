import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Heart,
  Globe,
  Microscope,
  Truck,
  CheckCircle,
  Award,
  Users,
  Pill,
  Stethoscope,
  FlaskConical
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import medicinesTablets from "@/assets/medicines-tablets.jpg";
import medicinesSyrups from "@/assets/medicines-syrups.jpg";
import medicinesInjections from "@/assets/medicines-injections.jpg";
import medicinesAyurvedic from "@/assets/medicines-ayurvedic.jpg";
import serviceConsultation from "@/assets/service-consultation.jpg";
import serviceDistribution from "@/assets/service-distribution.jpg";
import serviceQuality from "@/assets/service-quality.jpg";

const ServicesPage = () => {
  const medicineCategories = [
    {
      title: "Tablets & Capsules",
      description: "Our extensive range of oral medications covers therapeutic areas including cardiovascular, diabetes, antibiotics, pain management, and more. All products meet stringent quality standards.",
      image: medicinesTablets,
      icon: Pill,
      features: ["Extended Release", "Film Coated", "Enteric Coated", "Soft Gels"],
    },
    {
      title: "Syrups & Liquids",
      description: "Specially formulated liquid medications for pediatric and adult patients who prefer or require liquid dosage forms. Available in various flavors for better compliance.",
      image: medicinesSyrups,
      icon: FlaskConical,
      features: ["Sugar Free Options", "Pediatric Formulas", "Multivitamins", "Digestive Aids"],
    },
    {
      title: "Injections & Vials",
      description: "Sterile injectable preparations manufactured under strict aseptic conditions. Our range includes antibiotics, analgesics, vitamins, and specialty injectables.",
      image: medicinesInjections,
      icon: Stethoscope,
      features: ["Sterile Preparations", "Lyophilized Products", "Pre-filled Syringes", "Ampoules"],
    },
    {
      title: "Ayurvedic & Herbal",
      description: "Traditional Ayurvedic formulations combined with modern manufacturing practices. Natural wellness products for holistic health management.",
      image: medicinesAyurvedic,
      icon: Heart,
      features: ["Classical Formulas", "Herbal Extracts", "Wellness Products", "Immunity Boosters"],
    },
  ];

  const healthcareServices = [
    {
      title: "Medical Consultation",
      description: "Our team of experienced healthcare professionals provides expert guidance on medication usage, drug interactions, and treatment protocols. We ensure patients receive the right medicine for their conditions.",
      image: serviceConsultation,
      icon: Users,
      points: [
        "Expert pharmaceutical guidance",
        "Drug interaction consultations",
        "Dosage recommendations",
        "Patient counseling services",
      ],
    },
    {
      title: "Pharmaceutical Distribution",
      description: "With a robust distribution network spanning across regions, we ensure timely and efficient delivery of medicines to hospitals, clinics, pharmacies, and healthcare facilities.",
      image: serviceDistribution,
      icon: Truck,
      points: [
        "Pan-India distribution network",
        "Cold chain logistics",
        "Same-day dispatch available",
        "Real-time tracking",
      ],
    },
    {
      title: "Quality Assurance",
      description: "Every product undergoes rigorous quality testing in our state-of-the-art laboratories. We maintain complete traceability from raw material to finished product.",
      image: serviceQuality,
      icon: Shield,
      points: [
        "WHO-GMP certified facility",
        "Batch-wise quality testing",
        "Stability studies",
        "Complete documentation",
      ],
    },
  ];

  const certifications = [
    { name: "WHO-GMP Certified", icon: Award },
    { name: "ISO 9001:2015", icon: CheckCircle },
    { name: "FDA Approved", icon: Shield },
    { name: "Quality Tested", icon: Microscope },
  ];

  return (
    <>
      <SEOHead
        title="Our Services - CBR Pharma | Pharmaceutical Solutions & Healthcare"
        description="Explore CBR Pharma's comprehensive pharmaceutical services including medicine categories, healthcare consultation, distribution network, and quality assurance."
      />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0xMHY2aDZ2LTZoLTZ6bTEwIDEwdjZoNnYtNmgtNnptMC0xMHY2aDZ2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />

          <div className="container-cbr relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-in-up">
                Our Services
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 animate-fade-in-up animation-delay-200">
                From pharmaceutical products to healthcare services, we provide end-to-end
                solutions designed to support better health outcomes.
              </p>
            </div>
          </div>

          {/* Decorative wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-12 bg-background">
          <div className="container-cbr">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center gap-3 text-muted-foreground">
                  <cert.icon className="h-6 w-6 text-accent" />
                  <span className="font-medium">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medicine Categories */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container-cbr">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Product Categories
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Medicine Categories
              </h2>
              <p className="text-lg text-muted-foreground">
                We offer a comprehensive range of pharmaceutical products across multiple
                therapeutic categories to meet diverse healthcare needs.
              </p>
            </div>

            <div className="space-y-16">
              {medicineCategories.map((category, index) => (
                <div
                  key={category.title}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  <div className={`order-2 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                    </div>
                  </div>

                  <div className={`order-1 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6">
                      <category.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                      {category.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      {category.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {category.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-foreground">
                          <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Healthcare Services */}
        <section className="py-20 md:py-28 bg-muted/50">
          <div className="container-cbr">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Healthcare Services
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Beyond Products
              </h2>
              <p className="text-lg text-muted-foreground">
                Our commitment to healthcare extends beyond manufacturing. We provide comprehensive
                services to ensure quality healthcare reaches everyone.
              </p>
            </div>

            <div className="space-y-12">
              {healthcareServices.map((service, index) => (
                <div
                  key={service.title}
                  className="bg-card rounded-3xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500"
                >
                  <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "" : "lg:flex-row-reverse"}`}>
                    <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-foreground/20 to-transparent lg:hidden" />
                    </div>

                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl gradient-accent text-accent-foreground mb-6">
                        <service.icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                        {service.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.points.map((point) => (
                          <li key={point} className="flex items-center gap-3 text-foreground">
                            <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                              <CheckCircle className="h-4 w-4 text-accent" />
                            </div>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-card relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

          <div className="container-cbr relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Interested in Our Services?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Whether you need pharmaceutical products, distribution partnerships, or healthcare
                consultation, we are here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-primary flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  Get in Touch
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="btn-outline flex items-center justify-center gap-2 text-lg"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicesPage;
