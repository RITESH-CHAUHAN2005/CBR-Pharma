import { Truck, Clock, MapPin, Package } from "lucide-react";

const ShippingPage = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container-cbr text-center">
          <Truck className="h-16 w-16 mx-auto text-primary-foreground/80 mb-4" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Shipping & Delivery
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Fast, reliable delivery across India
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-cbr max-w-4xl">
          {/* Delivery Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <Clock className="h-10 w-10 mx-auto text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Standard Delivery</h3>
              <p className="text-muted-foreground text-sm">3-5 Business Days</p>
              <p className="text-primary font-medium mt-2">Free above ₹499</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <Truck className="h-10 w-10 mx-auto text-accent mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Express Delivery</h3>
              <p className="text-muted-foreground text-sm">1-2 Business Days</p>
              <p className="text-primary font-medium mt-2">₹99</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <Package className="h-10 w-10 mx-auto text-secondary-foreground mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Same Day Delivery</h3>
              <p className="text-muted-foreground text-sm">Order before 12 PM</p>
              <p className="text-primary font-medium mt-2">₹149 (Metro cities)</p>
            </div>
          </div>

          {/* Detailed Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                Delivery Charges
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-medium text-foreground">Order Value</th>
                      <th className="text-left py-3 px-4 font-medium text-foreground">Standard</th>
                      <th className="text-left py-3 px-4 font-medium text-foreground">Express</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border">
                      <td className="py-3 px-4">Below ₹499</td>
                      <td className="py-3 px-4">₹49</td>
                      <td className="py-3 px-4">₹149</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4">₹499 - ₹999</td>
                      <td className="py-3 px-4 text-accent font-medium">FREE</td>
                      <td className="py-3 px-4">₹99</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Above ₹999</td>
                      <td className="py-3 px-4 text-accent font-medium">FREE</td>
                      <td className="py-3 px-4 text-accent font-medium">FREE</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                Serviceable Areas
              </h2>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-muted-foreground mb-4">
                    We deliver to all major cities and towns across India. Currently, we service over 20,000+ PIN codes.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Metro Cities:</strong> Delhi NCR, Mumbai, Bangalore, Chennai, Hyderabad, Kolkata, Pune, Ahmedabad
                  </p>
                  <p className="text-muted-foreground mt-2">
                    <strong className="text-foreground">Express Delivery Available:</strong> All metro cities and select tier-2 cities
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                Important Information
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Delivery times are estimates and may vary based on location and availability.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Temperature-sensitive medicines are shipped with cold chain packaging.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  For prescription medicines, delivery will be initiated after prescription verification.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  You will receive SMS and email notifications with tracking details once shipped.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Please ensure someone is available to receive the delivery at the provided address.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ShippingPage;
