import { Link } from "react-router-dom";
import { X, ShoppingCart, Heart, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

const FloatingNotifications = () => {
  const { notifications, removeNotification } = useCart();

  if (notifications.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-3 max-w-sm">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="bg-card rounded-2xl shadow-cbr-lg border border-border p-4 animate-slide-in-right"
        >
          <div className="flex items-start gap-3">
            {/* Product Image */}
            <img
              src={notification.product.image}
              alt={notification.product.name}
              className="w-16 h-16 rounded-xl object-cover"
            />

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <div className={`p-1 rounded-full ${notification.type === "cart" ? "bg-accent/10" : "bg-pink-100"}`}>
                  {notification.type === "cart" ? (
                    <Check className="h-3 w-3 text-accent" />
                  ) : (
                    <Heart className="h-3 w-3 text-pink-500 fill-pink-500" />
                  )}
                </div>
                <span className="text-xs font-medium text-muted-foreground">
                  {notification.type === "cart" ? "Added to Cart" : "Added to Wishlist"}
                </span>
              </div>

              <p className="font-medium text-foreground text-sm truncate">
                {notification.product.name}
              </p>
              <p className="text-sm font-bold text-primary">₹{notification.product.price}</p>

              <Link
                to={notification.type === "cart" ? "/cart" : "/wishlist"}
                className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:underline"
              >
                {notification.type === "cart" ? (
                  <>
                    <ShoppingCart className="h-3 w-3" />
                    View Cart
                  </>
                ) : (
                  <>
                    <Heart className="h-3 w-3" />
                    View Wishlist
                  </>
                )}
              </Link>
            </div>

            {/* Close button */}
            <button
              onClick={() => removeNotification(notification.id)}
              className="p-1 hover:bg-secondary rounded-lg transition-colors"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingNotifications;
