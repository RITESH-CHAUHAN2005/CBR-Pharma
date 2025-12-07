import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, ShoppingCart, Star, Minus, Plus, Share2, Truck, Shield, Clock, Package, AlertCircle } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { toast } from "@/hooks/use-toast";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const { addToCart, addToWishlist, wishlistItems } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Product not found</h1>
          <Link to="/products" className="mt-4 btn-primary inline-block">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const isInWishlist = wishlistItems.some((item) => item.id === product.id);
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        prescriptionRequired: product.prescriptionRequired,
      });
    }
    toast({
      title: "Added to cart",
      description: `${quantity}x ${product.name} added to your cart.`,
    });
  };

  const handleAddToWishlist = () => {
    addToWishlist({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      prescriptionRequired: product.prescriptionRequired,
    });
    toast({
      title: "Added to wishlist",
      description: `${product.name} saved to your wishlist.`,
    });
  };

  const tabs = [
    { id: "description", label: "Description" },
    { id: "details", label: "Product Details" },
    { id: "directions", label: "How to Use" },
    { id: "sideEffects", label: "Safety Info" },
    { id: "reviews", label: "Reviews" },
  ];

  // Product details for table
  const productDetails = [
    { label: "Brand", value: product.brand },
    { label: "Category", value: product.category },
    { label: "SKU", value: `CBR-${product.id.toUpperCase()}` },
    { label: "Prescription Required", value: product.prescriptionRequired ? "Yes" : "No" },
    { label: "Stock Status", value: product.inStock ? "In Stock" : "Out of Stock" },
    { label: "Country of Origin", value: "India" },
    { label: "Manufacturer", value: product.brand },
    { label: "Package Type", value: "Strip / Bottle" },
  ];

  return (
    <main className="min-h-screen bg-background py-8">
      <div className="container-cbr">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary">Products</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted border border-border">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden bg-muted border-2 border-transparent hover:border-primary cursor-pointer transition-colors">
                  <img
                    src={product.image}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-medium">{product.brand}</p>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-border"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Badge */}
              {product.prescriptionRequired && (
                <span className="badge-prescription mt-4 inline-block">
                  Prescription Required
                </span>
              )}
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-foreground">₹{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                  <span className="badge-discount">{product.discount}% OFF</span>
                </>
              )}
            </div>

            {/* Stock */}
            <p className={`font-medium ${product.inStock ? "text-accent" : "text-destructive"}`}>
              {product.inStock ? "✓ In Stock" : "✗ Out of Stock"}
            </p>

            {/* Quantity & Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center border border-border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-muted transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-muted transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>

              <button
                onClick={handleAddToWishlist}
                className={`p-3 rounded-lg border transition-colors ${
                  isInWishlist
                    ? "bg-destructive text-destructive-foreground border-destructive"
                    : "border-border hover:bg-muted"
                }`}
              >
                <Heart className={`h-5 w-5 ${isInWishlist ? "fill-current" : ""}`} />
              </button>

              <button className="p-3 rounded-lg border border-border hover:bg-muted transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            {/* USPs */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto text-primary" />
                <p className="text-xs text-muted-foreground mt-2">Free Delivery on ₹499+</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto text-primary" />
                <p className="text-xs text-muted-foreground mt-2">100% Genuine</p>
              </div>
              <div className="text-center">
                <Clock className="h-6 w-6 mx-auto text-primary" />
                <p className="text-xs text-muted-foreground mt-2">Same Day Dispatch</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="flex gap-1 border-b border-border overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="py-8">
            {activeTab === "description" && (
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                <div className="bg-muted/50 rounded-xl p-6 mt-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      Clinically tested and proven formula
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      Fast acting relief within 30 minutes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      Safe for daily use as directed
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      No known interactions with common medications
                    </li>
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === "details" && (
              <div className="space-y-6">
                <div className="bg-card rounded-xl border border-border overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {productDetails.map((detail, index) => (
                        <tr key={detail.label} className={index % 2 === 0 ? "bg-muted/30" : ""}>
                          <td className="px-6 py-4 font-medium text-foreground w-1/3 border-r border-border">
                            {detail.label}
                          </td>
                          <td className="px-6 py-4 text-muted-foreground">
                            {detail.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {product.composition && (
                  <div className="bg-muted/50 rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-3">Composition</h4>
                    <p className="text-muted-foreground">{product.composition}</p>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === "directions" && (
              <div className="space-y-4">
                <div className="bg-card rounded-xl border border-border p-6">
                  <h4 className="font-semibold text-foreground mb-4">Directions for Use</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {product.directions || "Please read the product label carefully before use. Follow the dosage instructions provided on the packaging or as directed by your healthcare professional."}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h5 className="font-medium text-foreground mb-2">Adults</h5>
                      <p className="text-sm text-muted-foreground">Take 1-2 tablets as directed, not exceeding 4 tablets in 24 hours.</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h5 className="font-medium text-foreground mb-2">Storage</h5>
                      <p className="text-sm text-muted-foreground">Store in a cool, dry place away from direct sunlight. Keep out of reach of children.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "sideEffects" && (
              <div className="space-y-4">
                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                    Safety Information
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.sideEffects || "Some users may experience mild side effects. If you experience any allergic reactions, discontinue use immediately and consult a healthcare professional."}
                  </p>
                </div>
                
                <div className="bg-card rounded-xl border border-border p-6">
                  <h4 className="font-semibold text-foreground mb-4">Precautions</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      Do not exceed the recommended dosage
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      Consult a doctor if you are pregnant or nursing
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      Keep out of reach of children
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      Do not use if seal is broken or missing
                    </li>
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-foreground">{product.rating}</p>
                      <div className="flex items-center justify-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? "fill-amber-400 text-amber-400"
                                : "text-border"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{product.reviewCount} reviews</p>
                    </div>
                    <div className="flex-1 space-y-2">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground w-8">{star}★</span>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-amber-400 rounded-full"
                              style={{ width: `${star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 7 : 3}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="btn-outline w-full">Write a Review</button>
                </div>
                <p className="text-center text-muted-foreground">Customer reviews coming soon.</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetailPage;
