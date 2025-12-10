import { Link } from "react-router-dom";
import { X, ShoppingCart, Heart, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

const FloatingNotifications = () => {
  const { notifications, removeNotification } = useCart();

  if (notifications.length === 0) return null;

  return (
    <div className="fixed bottom-20 right-3 left-3 sm:left-auto sm:right-6 sm:bottom-6 z-[999] space-y-3 sm:max-w-sm">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="bg-card rounded-xl sm:rounded-2xl shadow-xl border border-border p-3 sm:p-4 animate-slide-in-right"
        >
          <div className="flex items-start gap-3">
            {/* Product Image */}
            <img
              src={notification.product.image}
              alt={notification.product.name}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl object-cover flex-shrink-0"
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
                className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:underline font-medium"
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
              className="p-1.5 hover:bg-secondary rounded-lg transition-colors flex-shrink-0"
              aria-label="Dismiss notification"
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
