import { RotateCcw, CheckCircle, XCircle, AlertCircle } from "lucide-react";

const ReturnsPage = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container-cbr text-center">
          <RotateCcw className="h-16 w-16 mx-auto text-primary-foreground/80 mb-4" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Returns & Refunds
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Easy returns and hassle-free refunds
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-cbr max-w-4xl">
          {/* Return Policy Overview */}
          <div className="bg-card rounded-xl border border-border p-6 mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              Return Policy Overview
            </h2>
            <p className="text-muted-foreground mb-4">
              We want you to be completely satisfied with your purchase. If you're not happy with your order, 
              you can return most items within 7 days of delivery for a full refund.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <p className="text-2xl font-bold text-primary">7 Days</p>
                <p className="text-sm text-muted-foreground">Return Window</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <p className="text-2xl font-bold text-primary">Free</p>
                <p className="text-sm text-muted-foreground">Return Pickup</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <p className="text-2xl font-bold text-primary">5-7 Days</p>
                <p className="text-sm text-muted-foreground">Refund Processing</p>
              </div>
            </div>
          </div>

          {/* Eligible & Non-Eligible */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
                <h3 className="font-semibold text-foreground">Eligible for Returns</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Unopened and sealed products</li>
                <li>• Products in original packaging</li>
                <li>• Damaged or defective items</li>
                <li>• Wrong product delivered</li>
                <li>• OTC medicines (unopened)</li>
                <li>• Healthcare devices (unused)</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="h-6 w-6 text-destructive" />
                <h3 className="font-semibold text-foreground">Not Eligible for Returns</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Prescription medicines (regulations)</li>
                <li>• Opened or used products</li>
                <li>• Temperature-sensitive items</li>
                <li>• Products without original packaging</li>
                <li>• Personal hygiene products</li>
                <li>• Items damaged by misuse</li>
              </ul>
            </div>
          </div>

          {/* How to Return */}
          <div className="bg-card rounded-xl border border-border p-6 mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              How to Initiate a Return
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-semibold">1</div>
                <div>
                  <h4 className="font-medium text-foreground">Login to Your Account</h4>
                  <p className="text-sm text-muted-foreground">Go to 'My Orders' section in your account dashboard</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-semibold">2</div>
                <div>
                  <h4 className="font-medium text-foreground">Select the Order</h4>
                  <p className="text-sm text-muted-foreground">Find the order and click on 'Return/Replace' option</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-semibold">3</div>
                <div>
                  <h4 className="font-medium text-foreground">Choose Return Reason</h4>
                  <p className="text-sm text-muted-foreground">Select the reason for return and provide details if needed</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-semibold">4</div>
                <div>
                  <h4 className="font-medium text-foreground">Schedule Pickup</h4>
                  <p className="text-sm text-muted-foreground">Our delivery partner will pick up the item from your address</p>
                </div>
              </div>
            </div>
          </div>

          {/* Refund Info */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              Refund Information
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-foreground">Payment Method</th>
                    <th className="text-left py-3 px-4 font-medium text-foreground">Refund Timeline</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Credit/Debit Card</td>
                    <td className="py-3 px-4">5-7 Business Days</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Net Banking</td>
                    <td className="py-3 px-4">5-7 Business Days</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">UPI</td>
                    <td className="py-3 px-4">2-3 Business Days</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Cash on Delivery</td>
                    <td className="py-3 px-4">Bank Transfer in 7-10 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> Refunds for COD orders will be processed via bank transfer. 
                  Please ensure your bank account details are updated in your profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReturnsPage;
