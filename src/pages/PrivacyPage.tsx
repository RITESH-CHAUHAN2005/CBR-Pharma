import { Shield, Lock, Eye, FileText } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const PrivacyPage = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy | CBR Pharma - Clinical Based Remedies"
        description="Read CBR Pharma's Privacy Policy. Learn how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, CBR Pharma, personal information"
        url="https://cbrpharm.com/privacy"
      />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary py-16">
          <div className="container-cbr text-center">
            <Shield className="h-16 w-16 mx-auto text-primary-foreground/80 mb-4" />
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we handle your information.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container-cbr max-w-4xl">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-cbr-md border border-border space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Introduction
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    CBR Pharma ("we", "our", or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                    information when you visit our website or contact us for our services.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Information We Collect
                  </h2>
                  <ul className="text-muted-foreground space-y-3 list-disc list-inside">
                    <li>Personal information you provide (name, email, phone number) when contacting us</li>
                    <li>Technical data such as IP address, browser type, and device information</li>
                    <li>Usage data including pages visited and time spent on our website</li>
                    <li>Communication preferences and inquiry details</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    How We Use Your Information
                  </h2>
                  <ul className="text-muted-foreground space-y-3 list-disc list-inside">
                    <li>To respond to your inquiries and provide customer support</li>
                    <li>To improve our website and services</li>
                    <li>To send you relevant information about our products (with your consent)</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, or 
                  destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to access, correct, or delete your personal information. 
                  You may also object to or restrict certain processing of your data. To exercise 
                  these rights, please contact us using the information below.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">Email:</strong> abhishek@cbrpharm.com</p>
                  <p><strong className="text-foreground">Phone:</strong> +91 9555559919</p>
                </div>
              </div>

              <div className="border-t border-border pt-8 text-sm text-muted-foreground">
                <p>Last updated: {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PrivacyPage;
