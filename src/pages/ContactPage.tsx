import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Building2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "abhishek@cbrpharm.com",
      link: "mailto:abhishek@cbrpharm.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 9555559919",
      link: "tel:+919555559919"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "CBR Hospitals, Multispeciality Hospital & Trauma Centre",
      link: "#map"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Sat: 9:00 AM - 9:00 PM",
      link: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="container-cbr text-center">
          <Building2 className="h-16 w-16 mx-auto text-primary-foreground/80 mb-4" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Have questions about our products or services? We're here to help you 24/7.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-muted/50">
        <div className="container-cbr">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20">
            {contactInfo.map((info, index) => (
              <a
                key={info.title}
                href={info.link}
                className="bg-card rounded-xl p-6 shadow-cbr-md hover:shadow-cbr-lg transition-all hover:-translate-y-1 animate-fade-in-up border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{info.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{info.content}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="container-cbr">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-xl p-8 shadow-cbr-md border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Send us a Message
              </h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-cbr"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-cbr"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input-cbr"
                      placeholder="+91 9999999999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="input-cbr"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-cbr resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Info */}
            <div className="space-y-6">
              <div id="map" className="rounded-xl overflow-hidden shadow-cbr-md border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d406247.596860494!2d76.52046808906249!3d28.474321199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f863478b775%3A0xe8c513b6da2a19f1!2sCBR%20Hospitals%20-%20Multispeciality%20Hospital%20And%20Trauma%20Centre!5e1!3m2!1sen!2sin!4v1764864465387!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CBR Pharma Location"
                />
              </div>

              <div className="bg-card rounded-xl p-6 shadow-cbr-md border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-border">
                    <p className="font-medium text-foreground">How can I track my order?</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      You can track your order from your account dashboard or using the tracking link sent to your email.
                    </p>
                  </div>
                  <div className="pb-4 border-b border-border">
                    <p className="font-medium text-foreground">What are the delivery charges?</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Delivery is free for orders above ₹499. For orders below ₹499, a nominal delivery charge applies.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Do you accept prescriptions online?</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Yes, you can upload your prescription during checkout or email it to us directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
