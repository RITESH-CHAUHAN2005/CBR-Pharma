import { createContext, useContext, useState, ReactNode, useCallback } from "react";

export interface CartItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  prescriptionRequired?: boolean;
}

export interface WishlistItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  prescriptionRequired?: boolean;
}

export interface NotificationProduct {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface Notification {
  id: string;
  type: "cart" | "wishlist";
  product: NotificationProduct;
}

interface CartContextType {
  cartItems: CartItem[];
  wishlistItems: WishlistItem[];
  notifications: Notification[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  moveToCart: (id: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  getWishlistCount: () => number;
  triggerCartNotification: (product: NotificationProduct) => void;
  triggerWishlistNotification: (product: NotificationProduct) => void;
  removeNotification: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const addToWishlist = (item: WishlistItem) => {
    setWishlistItems((prev) => {
      if (prev.find((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const moveToCart = (id: string) => {
    const item = wishlistItems.find((i) => i.id === id);
    if (item) {
      addToCart(item);
      removeFromWishlist(id);
    }
  };

  const clearCart = () => setCartItems([]);

  const getCartTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const getCartCount = () =>
    cartItems.reduce((count, item) => count + item.quantity, 0);

  const getWishlistCount = () => wishlistItems.length;

  const triggerCartNotification = useCallback((product: NotificationProduct) => {
    const notification: Notification = {
      id: `cart-${Date.now()}-${Math.random()}`,
      type: "cart",
      product,
    };
    setNotifications((prev) => [...prev, notification]);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== notification.id));
    }, 5000);
  }, []);

  const triggerWishlistNotification = useCallback((product: NotificationProduct) => {
    const notification: Notification = {
      id: `wishlist-${Date.now()}-${Math.random()}`,
      type: "wishlist",
      product,
    };
    setNotifications((prev) => [...prev, notification]);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== notification.id));
    }, 5000);
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        notifications,
        addToCart,
        removeFromCart,
        updateQuantity,
        addToWishlist,
        removeFromWishlist,
        moveToCart,
        clearCart,
        getCartTotal,
        getCartCount,
        getWishlistCount,
        triggerCartNotification,
        triggerWishlistNotification,
        removeNotification,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
