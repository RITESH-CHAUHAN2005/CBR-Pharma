import { Shield } from "lucide-react";

const PrivacyPage = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container-cbr text-center">
          <Shield className="h-16 w-16 mx-auto text-primary-foreground/80 mb-4" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Your privacy is important to us
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-cbr max-w-4xl">
          <div className="bg-card rounded-xl border border-border p-8 space-y-8">
            <div>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Last Updated:</strong> January 2024
              </p>
              <p className="text-muted-foreground">
                CBR Pharma ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
                how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground mb-3">We collect information that you provide directly to us, including:</p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Personal information (name, email address, phone number, delivery address)</li>
                <li>• Medical information (prescriptions, health conditions for relevant products)</li>
                <li>• Payment information (card details are processed securely through payment gateways)</li>
                <li>• Account credentials (email and password for your account)</li>
                <li>• Communication data (messages, feedback, and support requests)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-3">We use the information we collect to:</p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Process and fulfill your orders</li>
                <li>• Verify prescriptions for prescription medicines</li>
                <li>• Communicate with you about orders, products, and services</li>
                <li>• Improve our website and services</li>
                <li>• Send promotional communications (with your consent)</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                3. Information Sharing
              </h2>
              <p className="text-muted-foreground mb-3">We may share your information with:</p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Delivery partners (for order fulfillment)</li>
                <li>• Payment processors (for secure transactions)</li>
                <li>• Service providers (for website maintenance and analytics)</li>
                <li>• Legal authorities (when required by law)</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                We do not sell your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                4. Data Security
              </h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. This includes encryption, 
                secure servers, and regular security assessments. However, no method of transmission over the Internet 
                is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                5. Cookies and Tracking
              </h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                Cookies help us remember your preferences, understand how you use our site, and improve our services. 
                You can manage cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                6. Your Rights
              </h2>
              <p className="text-muted-foreground mb-3">You have the right to:</p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Access your personal information</li>
                <li>• Correct inaccurate information</li>
                <li>• Request deletion of your data</li>
                <li>• Opt-out of marketing communications</li>
                <li>• Withdraw consent for data processing</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                7. Contact Us
              </h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p className="text-foreground font-medium">CBR Pharma</p>
                <p className="text-muted-foreground">Email: abhishek@cbrpharm.com</p>
                <p className="text-muted-foreground">Phone: +91 9555559919</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPage;
