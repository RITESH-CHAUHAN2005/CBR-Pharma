import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist, moveToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <main className="min-h-screen bg-background py-16">
        <div className="container-cbr text-center">
          <Heart className="h-24 w-24 mx-auto text-muted-foreground/30" />
          <h1 className="font-display text-2xl font-bold text-foreground mt-6">Your wishlist is empty</h1>
          <p className="text-muted-foreground mt-2">Save items you love for later.</p>
          <Link to="/products" className="btn-primary inline-block mt-8">Start Shopping</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background py-8">
      <div className="container-cbr">
        <h1 className="font-display text-3xl font-bold text-foreground mb-8">My Wishlist ({wishlistItems.length})</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="aspect-square bg-muted">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground">{item.brand}</p>
                <h3 className="font-medium text-foreground line-clamp-2">{item.name}</h3>
                <p className="font-bold text-foreground mt-2">₹{item.price}</p>
                <div className="flex gap-2 mt-4">
                  <button onClick={() => moveToCart(item.id)} className="flex-1 btn-primary text-sm py-2 flex items-center justify-center gap-1">
                    <ShoppingCart className="h-4 w-4" /> Add
                  </button>
                  <button onClick={() => removeFromWishlist(item.id)} className="p-2 border border-border rounded-lg hover:bg-destructive hover:text-destructive-foreground transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default WishlistPage;
