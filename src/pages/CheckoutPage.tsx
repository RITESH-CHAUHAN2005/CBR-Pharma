import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Truck, CreditCard, CheckCircle, Plus, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/hooks/use-toast";

type Step = "address" | "delivery" | "payment" | "review";

interface Address {
  id: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { isAuthenticated, setShowAuthModal, setAuthMode } = useAuth();
  const [currentStep, setCurrentStep] = useState<Step>("address");
  const [selectedAddress, setSelectedAddress] = useState<string | null>("1");
  const [selectedDelivery, setSelectedDelivery] = useState("standard");
  const [selectedPayment, setSelectedPayment] = useState("cod");
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });

  const savedAddresses: Address[] = [
    {
      id: "1",
      name: "Rahul Kumar",
      phone: "+91 9876543210",
      address: "123, Green Park Extension, Block A",
      city: "New Delhi",
      state: "Delhi",
      pincode: "110016",
      isDefault: true
    },
    {
      id: "2",
      name: "Rahul Kumar",
      phone: "+91 9876543210",
      address: "456, Sector 15, Near City Mall",
      city: "Noida",
      state: "Uttar Pradesh",
      pincode: "201301",
      isDefault: false
    }
  ];

  const deliveryOptions = [
    { id: "standard", name: "Standard Delivery", time: "3-5 Business Days", price: 0 },
    { id: "express", name: "Express Delivery", time: "1-2 Business Days", price: 99 },
    { id: "sameday", name: "Same Day Delivery", time: "Today", price: 199 }
  ];

  const paymentMethods = [
    { id: "cod", name: "Cash on Delivery", description: "Pay when you receive" },
    { id: "upi", name: "UPI", description: "PhonePe, GPay, Paytm" },
    { id: "card", name: "Credit/Debit Card", description: "All major cards accepted" },
    { id: "netbanking", name: "Net Banking", description: "All major banks" }
  ];

  const steps = [
    { id: "address", label: "Address", icon: MapPin },
    { id: "delivery", label: "Delivery", icon: Truck },
    { id: "payment", label: "Payment", icon: CreditCard },
    { id: "review", label: "Review", icon: CheckCircle }
  ];

  const subtotal = getCartTotal();
  const deliveryCharge = deliveryOptions.find(d => d.id === selectedDelivery)?.price || 0;
  const total = subtotal + deliveryCharge;

  const handlePlaceOrder = () => {
    clearCart();
    navigate("/thank-you", { state: { orderId: `CBR${Date.now()}`, total } });
  };

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Address Added", description: "New address has been saved successfully." });
    setShowAddAddress(false);
    setNewAddress({ name: "", phone: "", address: "", city: "", state: "", pincode: "" });
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen py-16 bg-background">
        <div className="container-cbr">
          <div className="max-w-md mx-auto text-center bg-card rounded-2xl p-8 shadow-cbr-md">
            <h2 className="font-display text-2xl font-bold text-foreground">Login Required</h2>
            <p className="mt-4 text-muted-foreground">
              Please login or create an account to proceed with checkout.
            </p>
            <div className="mt-6 space-y-3">
              <button
                onClick={() => { setAuthMode("login"); setShowAuthModal(true); }}
                className="btn-primary w-full"
              >
                Login
              </button>
              <button
                onClick={() => { setAuthMode("signup"); setShowAuthModal(true); }}
                className="btn-outline w-full"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen py-16 bg-background">
        <div className="container-cbr">
          <div className="max-w-md mx-auto text-center bg-card rounded-2xl p-8 shadow-cbr-md">
            <h2 className="font-display text-2xl font-bold text-foreground">Your Cart is Empty</h2>
            <p className="mt-4 text-muted-foreground">
              Add some products to your cart before checking out.
            </p>
            <button onClick={() => navigate("/products")} className="btn-primary mt-6">
              Browse Products
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-8 bg-background">
      <div className="container-cbr">
        <h1 className="font-display text-3xl font-bold text-foreground mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Steps */}
            <div className="bg-card rounded-2xl p-6 shadow-cbr-sm">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <button
                      onClick={() => setCurrentStep(step.id as Step)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                        currentStep === step.id
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      <step.icon className="h-5 w-5" />
                      <span className="hidden sm:inline font-medium">{step.label}</span>
                    </button>
                    {index < steps.length - 1 && (
                      <ChevronRight className="h-5 w-5 text-muted-foreground mx-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Address Step */}
            {currentStep === "address" && (
              <div className="bg-card rounded-2xl p-6 shadow-cbr-sm">
                <h2 className="font-display text-xl font-bold text-foreground mb-6">
                  Select Delivery Address
                </h2>
                <div className="space-y-4">
                  {savedAddresses.map((addr) => (
                    <label
                      key={addr.id}
                      className={`block p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                        selectedAddress === addr.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="radio"
                          name="address"
                          checked={selectedAddress === addr.id}
                          onChange={() => setSelectedAddress(addr.id)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-foreground">{addr.name}</p>
                            {addr.isDefault && (
                              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                                Default
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{addr.phone}</p>
                          <p className="text-sm text-muted-foreground">
                            {addr.address}, {addr.city}, {addr.state} - {addr.pincode}
                          </p>
                        </div>
                      </div>
                    </label>
                  ))}

                  {!showAddAddress ? (
                    <button
                      onClick={() => setShowAddAddress(true)}
                      className="w-full p-4 border-2 border-dashed border-border rounded-xl text-primary hover:bg-secondary transition-colors flex items-center justify-center gap-2"
                    >
                      <Plus className="h-5 w-5" />
                      Add New Address
                    </button>
                  ) : (
                    <form onSubmit={handleAddAddress} className="p-4 border border-border rounded-xl space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={newAddress.name}
                          onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                          className="input-cbr"
                          required
                        />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={newAddress.phone}
                          onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                          className="input-cbr"
                          required
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Address"
                        value={newAddress.address}
                        onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
                        className="input-cbr"
                        required
                      />
                      <div className="grid grid-cols-3 gap-4">
                        <input
                          type="text"
                          placeholder="City"
                          value={newAddress.city}
                          onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                          className="input-cbr"
                          required
                        />
                        <input
                          type="text"
                          placeholder="State"
                          value={newAddress.state}
                          onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                          className="input-cbr"
                          required
                        />
                        <input
                          type="text"
                          placeholder="Pincode"
                          value={newAddress.pincode}
                          onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
                          className="input-cbr"
                          required
                        />
                      </div>
                      <div className="flex gap-2">
                        <button type="submit" className="btn-primary">Save Address</button>
                        <button type="button" onClick={() => setShowAddAddress(false)} className="btn-outline">Cancel</button>
                      </div>
                    </form>
                  )}
                </div>

                <button
                  onClick={() => setCurrentStep("delivery")}
                  disabled={!selectedAddress}
                  className="btn-primary mt-6 w-full"
                >
                  Continue to Delivery
                </button>
              </div>
            )}

            {/* Delivery Step */}
            {currentStep === "delivery" && (
              <div className="bg-card rounded-2xl p-6 shadow-cbr-sm">
                <h2 className="font-display text-xl font-bold text-foreground mb-6">
                  Select Delivery Option
                </h2>
                <div className="space-y-4">
                  {deliveryOptions.map((option) => (
                    <label
                      key={option.id}
                      className={`block p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                        selectedDelivery === option.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="delivery"
                            checked={selectedDelivery === option.id}
                            onChange={() => setSelectedDelivery(option.id)}
                          />
                          <div>
                            <p className="font-medium text-foreground">{option.name}</p>
                            <p className="text-sm text-muted-foreground">{option.time}</p>
                          </div>
                        </div>
                        <p className="font-bold text-foreground">
                          {option.price === 0 ? "FREE" : `₹${option.price}`}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentStep("payment")}
                  className="btn-primary mt-6 w-full"
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {/* Payment Step */}
            {currentStep === "payment" && (
              <div className="bg-card rounded-2xl p-6 shadow-cbr-sm">
                <h2 className="font-display text-xl font-bold text-foreground mb-6">
                  Select Payment Method
                </h2>
                <div className="space-y-4">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`block p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                        selectedPayment === method.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="payment"
                          checked={selectedPayment === method.id}
                          onChange={() => setSelectedPayment(method.id)}
                        />
                        <div>
                          <p className="font-medium text-foreground">{method.name}</p>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentStep("review")}
                  className="btn-primary mt-6 w-full"
                >
                  Review Order
                </button>
              </div>
            )}

            {/* Review Step */}
            {currentStep === "review" && (
              <div className="bg-card rounded-2xl p-6 shadow-cbr-sm">
                <h2 className="font-display text-xl font-bold text-foreground mb-6">
                  Review Your Order
                </h2>

                {/* Address Summary */}
                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-foreground">Delivery Address</h3>
                    <button
                      onClick={() => setCurrentStep("address")}
                      className="text-sm text-primary hover:underline"
                    >
                      Change
                    </button>
                  </div>
                  {savedAddresses.filter(a => a.id === selectedAddress).map(addr => (
                    <p key={addr.id} className="text-sm text-muted-foreground">
                      {addr.name}, {addr.address}, {addr.city}, {addr.state} - {addr.pincode}
                    </p>
                  ))}
                </div>

                {/* Delivery Summary */}
                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-foreground">Delivery Option</h3>
                    <button
                      onClick={() => setCurrentStep("delivery")}
                      className="text-sm text-primary hover:underline"
                    >
                      Change
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {deliveryOptions.find(d => d.id === selectedDelivery)?.name} - {deliveryOptions.find(d => d.id === selectedDelivery)?.time}
                  </p>
                </div>

                {/* Payment Summary */}
                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-foreground">Payment Method</h3>
                    <button
                      onClick={() => setCurrentStep("payment")}
                      className="text-sm text-primary hover:underline"
                    >
                      Change
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {paymentMethods.find(p => p.id === selectedPayment)?.name}
                  </p>
                </div>

                {/* Items */}
                <div>
                  <h3 className="font-medium text-foreground mb-4">Order Items ({cartItems.length})</h3>
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{item.name}</p>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-bold text-foreground">₹{item.price * item.quantity}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <button onClick={handlePlaceOrder} className="btn-accent mt-6 w-full text-lg py-4">
                  Place Order - ₹{total}
                </button>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 shadow-cbr-sm sticky top-24">
              <h2 className="font-display text-xl font-bold text-foreground mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 pb-4 border-b border-border">
                {cartItems.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
                      <p className="text-xs text-muted-foreground">x{item.quantity}</p>
                    </div>
                    <p className="text-sm font-bold text-foreground">₹{item.price * item.quantity}</p>
                  </div>
                ))}
                {cartItems.length > 3 && (
                  <p className="text-sm text-muted-foreground text-center">
                    +{cartItems.length - 3} more items
                  </p>
                )}
              </div>

              <div className="space-y-3 py-4 border-b border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="text-foreground">
                    {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
                  </span>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <span className="font-bold text-foreground">Total</span>
                <span className="font-display text-xl font-bold text-primary">₹{total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;