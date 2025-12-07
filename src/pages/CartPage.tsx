import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, AlertCircle, Tag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  const subtotal = getCartTotal();
  const deliveryCharge = subtotal >= 499 ? 0 : 49;
  const discount = 0;
  const total = subtotal + deliveryCharge - discount;

  const hasPrescriptionItems = cartItems.some((item) => item.prescriptionRequired);

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-background py-16">
        <div className="container-cbr text-center">
          <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground/30" />
          <h1 className="font-display text-2xl font-bold text-foreground mt-6">
            Your cart is empty
          </h1>
          <p className="text-muted-foreground mt-2">
            Looks like you haven't added any items yet.
          </p>
          <Link to="/products" className="btn-primary inline-block mt-8">
            Start Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background py-8">
      <div className="container-cbr">
        <h1 className="font-display text-3xl font-bold text-foreground mb-8">
          Shopping Cart ({cartItems.length} items)
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {hasPrescriptionItems && (
              <div className="bg-secondary rounded-xl p-4 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Prescription Required</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Some items in your cart require a valid prescription. Please upload it during checkout.
                  </p>
                </div>
              </div>
            )}

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-xl p-4 md:p-6 border border-border flex gap-4"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-lg overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">{item.brand}</p>
                      <Link
                        to={`/product/${item.id}`}
                        className="font-medium text-foreground hover:text-primary transition-colors line-clamp-2"
                      >
                        {item.name}
                      </Link>
                      {item.prescriptionRequired && (
                        <span className="badge-prescription mt-2 inline-block text-xs">
                          Rx Required
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-border rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-muted transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-10 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-muted transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-foreground">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </p>
                      {item.originalPrice && (
                        <p className="text-sm text-muted-foreground line-through">
                          ₹{(item.originalPrice * item.quantity).toFixed(2)}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-xl p-6 border border-border space-y-6">
              <h2 className="font-display text-xl font-bold text-foreground">
                Order Summary
              </h2>

              {/* Coupon */}
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="input-cbr pl-10 py-2 text-sm"
                  />
                </div>
                <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                  Apply
                </button>
              </div>

              {/* Totals */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className={deliveryCharge === 0 ? "text-accent" : "text-foreground"}>
                    {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-accent">
                    <span>Discount</span>
                    <span>-₹{discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="pt-3 border-t border-border flex justify-between font-bold text-lg">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">₹{total.toFixed(2)}</span>
                </div>
              </div>

              {deliveryCharge > 0 && (
                <p className="text-sm text-muted-foreground text-center">
                  Add ₹{(499 - subtotal).toFixed(0)} more for free delivery
                </p>
              )}

              <Link
                to="/checkout"
                className="btn-accent w-full text-center block"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/products"
                className="btn-outline w-full text-center block"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
