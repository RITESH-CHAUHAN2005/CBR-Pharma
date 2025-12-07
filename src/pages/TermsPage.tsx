import { FileText } from "lucide-react";

const TermsPage = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container-cbr text-center">
          <FileText className="h-16 w-16 mx-auto text-primary-foreground/80 mb-4" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-cbr max-w-4xl">
          <div className="bg-card rounded-xl border border-border p-8 space-y-8">
            <div>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Effective Date:</strong> January 2024
              </p>
              <p className="text-muted-foreground">
                Welcome to CBR Pharma. By accessing or using our website and services, you agree to be bound by these 
                Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground">
                By using CBR Pharma's website and services, you confirm that you are at least 18 years of age and 
                have the legal capacity to enter into binding contracts. If you are using our services on behalf of 
                an organization, you represent that you have the authority to bind that organization to these terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                2. Products and Services
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• We sell pharmaceutical products, healthcare devices, and wellness products through our platform.</li>
                <li>• All products are sourced from authorized distributors and manufacturers.</li>
                <li>• Prescription medicines require a valid prescription from a registered medical practitioner.</li>
                <li>• Product images are for illustration purposes and actual products may vary slightly.</li>
                <li>• Prices are subject to change without prior notice.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                3. Prescription Medicines
              </h2>
              <p className="text-muted-foreground mb-3">
                For medicines that require a prescription:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• A valid prescription must be uploaded during or after placing the order.</li>
                <li>• Orders will be processed only after prescription verification.</li>
                <li>• We reserve the right to cancel orders if the prescription is invalid or forged.</li>
                <li>• Prescription medicines cannot be returned due to regulatory requirements.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                4. User Account
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>• You agree to provide accurate and complete information when creating an account.</li>
                <li>• We reserve the right to suspend or terminate accounts that violate our terms.</li>
                <li>• You are responsible for all activities that occur under your account.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                5. Payment Terms
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• All prices are in Indian Rupees (INR) and inclusive of applicable taxes.</li>
                <li>• We accept various payment methods including cards, UPI, net banking, and COD.</li>
                <li>• Payment must be completed before order processing (except for COD orders).</li>
                <li>• We use secure payment gateways and do not store your complete card information.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                6. Delivery and Returns
              </h2>
              <p className="text-muted-foreground">
                Please refer to our <a href="/shipping" className="text-primary hover:underline">Shipping & Delivery</a> and 
                <a href="/returns" className="text-primary hover:underline ml-1">Returns & Refunds</a> pages for detailed 
                information about delivery timelines, charges, return eligibility, and refund processes.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                CBR Pharma shall not be liable for any indirect, incidental, special, or consequential damages arising 
                from the use of our services. Our total liability shall not exceed the amount paid by you for the 
                relevant product or service. We do not provide medical advice; always consult a healthcare professional 
                before using any medication.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                8. Intellectual Property
              </h2>
              <p className="text-muted-foreground">
                All content on this website, including text, graphics, logos, images, and software, is the property 
                of CBR Pharma or its content suppliers and is protected by intellectual property laws. You may not 
                reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                9. Governing Law
              </h2>
              <p className="text-muted-foreground">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. 
                Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts 
                in New Delhi, India.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                10. Contact Information
              </h2>
              <p className="text-muted-foreground">
                For any questions regarding these Terms and Conditions, please contact us:
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

export default TermsPage;
