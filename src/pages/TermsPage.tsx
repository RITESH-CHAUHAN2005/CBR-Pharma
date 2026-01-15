import { FileText, Scale, AlertCircle, CheckCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const TermsPage = () => {
  return (
    <>
      <SEOHead 
        title="Terms & Conditions | CBR Pharma - Clinical Based Remedies"
        description="Read CBR Pharma's Terms and Conditions. Understand the terms of use for our website and services."
        keywords="terms and conditions, terms of use, CBR Pharma, legal terms"
        url="https://cbrpharm.com/terms"
      />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary py-16">
          <div className="container-cbr text-center">
            <Scale className="h-16 w-16 mx-auto text-primary-foreground/80 mb-4" />
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
              Terms & Conditions
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
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
                    Acceptance of Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using the CBR Pharma website, you accept and agree to be bound by 
                    these Terms and Conditions. If you do not agree to these terms, please do not use 
                    our website or services.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Use of Website
                  </h2>
                  <ul className="text-muted-foreground space-y-3 list-disc list-inside">
                    <li>The website is for informational purposes only</li>
                    <li>You must be at least 18 years old to use our services</li>
                    <li>You agree not to misuse the website or its content</li>
                    <li>We reserve the right to modify or discontinue services at any time</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <AlertCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Medical Disclaimer
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The information provided on this website is for general informational purposes only 
                    and should not be considered as medical advice. Always consult with a qualified 
                    healthcare professional before making any health-related decisions or starting any 
                    treatment.
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and software, 
                  is the property of CBR Pharma and is protected by copyright and trademark laws. 
                  You may not reproduce, distribute, or use any content without our prior written permission.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  CBR Pharma shall not be liable for any indirect, incidental, special, or consequential 
                  damages arising out of or in connection with the use of our website or services. 
                  Our liability is limited to the maximum extent permitted by law.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions shall be governed by and construed in accordance with 
                  the laws of India. Any disputes arising from these terms shall be subject to the 
                  exclusive jurisdiction of the courts in India.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will 
                  be effective immediately upon posting on this page. Your continued use of the website 
                  constitutes acceptance of the modified terms.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about these Terms and Conditions, please contact us at:
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

export default TermsPage;
