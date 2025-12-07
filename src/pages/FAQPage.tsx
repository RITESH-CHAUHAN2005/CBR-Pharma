import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How can I place an order on CBR Pharma?",
      answer: "You can place an order by browsing our products, adding items to your cart, and proceeding to checkout. You'll need to create an account or log in, provide your delivery address, and complete the payment."
    },
    {
      question: "Do I need a prescription for all medicines?",
      answer: "No, not all medicines require a prescription. Products marked with 'Prescription Required' badge need a valid prescription from a registered medical practitioner. You can upload your prescription during checkout."
    },
    {
      question: "How do I upload my prescription?",
      answer: "You can upload your prescription during the checkout process. We accept clear images or PDFs of prescriptions. You can also email your prescription to abhishek@cbrpharm.com with your order number."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept multiple payment methods including Credit/Debit Cards, Net Banking, UPI, Digital Wallets (Paytm, PhonePe, Google Pay), and Cash on Delivery (COD) for eligible orders."
    },
    {
      question: "How long does delivery take?",
      answer: "Standard delivery takes 3-5 business days. Express delivery (available in select cities) takes 1-2 business days. Same-day delivery is available for orders placed before 12 PM in metro cities."
    },
    {
      question: "Is there a minimum order value?",
      answer: "There is no minimum order value. However, orders above ₹499 qualify for free shipping. Orders below ₹499 have a nominal delivery charge of ₹49."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking link via SMS and email. You can also track your order by logging into your account and visiting the 'My Orders' section."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 7 days of delivery for most products if they are unused, unopened, and in original packaging. Prescription medicines cannot be returned due to regulatory requirements."
    },
    {
      question: "Are the medicines genuine?",
      answer: "Yes, all our medicines are 100% genuine and sourced directly from authorized distributors and manufacturers. We are a licensed pharmacy and comply with all regulatory requirements."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our customer support team at +91 9555559919 (Mon-Sat, 9 AM - 9 PM) or email us at abhishek@cbrpharm.com. You can also use the contact form on our website."
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container-cbr text-center">
          <HelpCircle className="h-16 w-16 mx-auto text-primary-foreground/80 mb-4" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Find answers to common questions about ordering, delivery, and more.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="container-cbr max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-muted/50 rounded-xl p-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <a href="/contact" className="btn-primary inline-block">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQPage;
