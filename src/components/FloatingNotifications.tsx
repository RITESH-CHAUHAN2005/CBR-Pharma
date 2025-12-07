import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, ShoppingCart, Heart, Check } from "lucide-react";
import { useCart, CartItem, WishlistItem } from "@/context/CartContext";

interface Notification {
  id: string;
  type: "cart" | "wishlist";
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
  };
}

const FloatingNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { cartItems, wishlistItems } = useCart();
  const prevCartItemsRef = useRef<CartItem[]>([]);
  const prevWishlistItemsRef = useRef<WishlistItem[]>([]);
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Skip on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      prevCartItemsRef.current = cartItems;
      prevWishlistItemsRef.current = wishlistItems;
      return;
    }

    // Detect new cart items by comparing IDs
    const prevCartIds = new Set(prevCartItemsRef.current.map(item => item.id));
    const newCartItems = cartItems.filter(item => !prevCartIds.has(item.id));

    newCartItems.forEach(newItem => {
      const notification: Notification = {
        id: `cart-${Date.now()}-${newItem.id}`,
        type: "cart",
        product: {
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
        },
      };
      setNotifications((prev) => [...prev, notification]);

      // Auto remove after 5 seconds
      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== notification.id));
      }, 5000);
    });

    prevCartItemsRef.current = cartItems;
  }, [cartItems]);

  useEffect(() => {
    // Skip on initial mount
    if (isInitialMount.current) {
      return;
    }

    // Detect new wishlist items by comparing IDs
    const prevWishlistIds = new Set(prevWishlistItemsRef.current.map(item => item.id));
    const newWishlistItems = wishlistItems.filter(item => !prevWishlistIds.has(item.id));

    newWishlistItems.forEach(newItem => {
      const notification: Notification = {
        id: `wishlist-${Date.now()}-${newItem.id}`,
        type: "wishlist",
        product: {
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
        },
      };
      setNotifications((prev) => [...prev, notification]);

      // Auto remove after 5 seconds
      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== notification.id));
      }, 5000);
    });

    prevWishlistItemsRef.current = wishlistItems;
  }, [wishlistItems]);

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

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
