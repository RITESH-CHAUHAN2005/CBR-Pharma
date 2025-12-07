import { useLocation, useNavigate, Link } from "react-router-dom";
import { CheckCircle, Package, MapPin, CreditCard, Download, ArrowRight } from "lucide-react";

const ThankYouPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId, total } = location.state || { orderId: `CBR${Date.now()}`, total: 0 };

  const orderDetails = {
    orderId,
    date: new Date().toLocaleDateString("en-IN", { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    }),
    estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }),
    address: "123, Green Park Extension, Block A, New Delhi, Delhi - 110016",
    paymentMethod: "Cash on Delivery",
    total
  };

  return (
    <main className="min-h-screen py-16 bg-background">
      <div className="container-cbr">
        <div className="max-w-2xl mx-auto">
          {/* Success Animation */}
          <div className="text-center mb-8 animate-fade-in-up">
            <div className="w-24 h-24 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-12 w-12 text-accent" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Thank You for Your Order!
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Your order has been placed successfully.
            </p>
          </div>

          {/* Order Details Card */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-cbr-md animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            {/* Order ID & Date */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
              <div>
                <p className="text-sm text-muted-foreground">Order ID</p>
                <p className="font-display text-xl font-bold text-primary">{orderDetails.orderId}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Order Date</p>
                <p className="font-medium text-foreground">{orderDetails.date}</p>
              </div>
            </div>

            {/* Estimated Delivery */}
            <div className="py-6 border-b border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                  <p className="font-medium text-foreground text-lg">{orderDetails.estimatedDelivery}</p>
                  <p className="text-sm text-accent mt-1">We'll notify you when shipped</p>
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="py-6 border-b border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Delivery Address</p>
                  <p className="font-medium text-foreground">{orderDetails.address}</p>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="py-6 border-b border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Payment Method</p>
                  <p className="font-medium text-foreground">{orderDetails.paymentMethod}</p>
                </div>
              </div>
            </div>

            {/* Total */}
            <div className="pt-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-foreground">Order Total</span>
                <span className="font-display text-2xl font-bold text-primary">₹{orderDetails.total}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Link
              to="/account/orders"
              className="btn-primary flex items-center justify-center gap-2"
            >
              Track Order
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/products"
              className="btn-outline flex items-center justify-center gap-2"
            >
              Continue Shopping
            </Link>
            <button className="btn-secondary flex items-center justify-center gap-2">
              <Download className="h-4 w-4" />
              Download Invoice
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-secondary rounded-2xl p-6 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <h3 className="font-display text-lg font-bold text-foreground mb-4">
              What's Next?
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">1</span>
                <p className="text-muted-foreground">You will receive an order confirmation email shortly.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">2</span>
                <p className="text-muted-foreground">We'll notify you when your order is shipped with tracking details.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">3</span>
                <p className="text-muted-foreground">Track your order anytime from your account dashboard.</p>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Need help? Contact us at{" "}
              <a href="mailto:abhishek@cbrpharm.com" className="text-primary hover:underline">
                abhishek@cbrpharm.com
              </a>{" "}
              or call{" "}
              <a href="tel:+919555559919" className="text-primary hover:underline">
                +91 9555559919
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThankYouPage;