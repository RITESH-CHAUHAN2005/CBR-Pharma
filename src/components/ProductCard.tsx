import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, addToWishlist, removeFromWishlist, wishlistItems, triggerCartNotification, triggerWishlistNotification } = useCart();

  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      prescriptionRequired: product.prescriptionRequired,
    });
    // Trigger notification every time
    triggerCartNotification({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
    });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        prescriptionRequired: product.prescriptionRequired,
      });
      // Trigger notification when adding
      triggerWishlistNotification({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
      });
    }
  };

  return (
    <Link to={`/product/${product.id}`} className="block card-product group">
      <div className="relative overflow-hidden">
        {/* Image */}
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.discount && (
            <span className="badge-discount">-{product.discount}%</span>
          )}
          {product.prescriptionRequired && (
            <span className="badge-prescription">Rx Required</span>
          )}
        </div>

        {/* Wishlist button - Toggle on/off */}
        <button
          onClick={handleToggleWishlist}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
            isInWishlist 
              ? "bg-pink-500 text-white" 
              : "bg-card/80 backdrop-blur-sm hover:bg-card"
          }`}
        >
          <Heart className={`h-5 w-5 ${isInWishlist ? "fill-current" : ""}`} />
        </button>

        {/* Quick add */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground py-3 font-medium text-sm translate-y-full transition-transform group-hover:translate-y-0 flex items-center justify-center gap-2"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wide">{product.brand}</p>
        <h3 className="font-medium text-foreground mt-1 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating)
                    ? "fill-amber-400 text-amber-400"
                    : "text-border"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-lg font-bold text-foreground">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>

        {/* Stock status */}
        <p className={`text-xs mt-2 ${product.inStock ? "text-accent" : "text-destructive"}`}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
