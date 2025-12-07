import { useParams, Link } from "react-router-dom";
import { ChevronRight, ShoppingCart, Heart } from "lucide-react";
import { megaMenuData } from "@/data/megaMenuData";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";

// Mock products for category pages
const categoryProducts = [
  {
    id: "cat-1",
    name: "Airsep Intensity 8",
    brand: "Airsep",
    price: 155000,
    originalPrice: 175000,
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400",
    features: {
      purity: "90-95%",
      type: "High Flow Stationary",
      flow: "1-8 LPM",
      weight: "24.5kg",
      power: "410watts"
    }
  },
  {
    id: "cat-2",
    name: "Philips EverFlo",
    brand: "Philips",
    price: 85000,
    originalPrice: 95000,
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400",
    features: {
      purity: "93%",
      type: "Stationary",
      flow: "1-5 LPM",
      weight: "14kg",
      power: "350watts"
    }
  },
  {
    id: "cat-3",
    name: "Inogen One G5",
    brand: "Inogen",
    price: 245000,
    originalPrice: 280000,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    features: {
      purity: "90%",
      type: "Portable",
      flow: "1-6 settings",
      weight: "2.2kg",
      power: "Battery powered"
    }
  },
  {
    id: "cat-4",
    name: "DeVilbiss 525DS",
    brand: "DeVilbiss",
    price: 72000,
    originalPrice: 82000,
    image: "https://images.unsplash.com/photo-1584483720412-ce931f4aefa8?w=400",
    features: {
      purity: "93%",
      type: "Compact Stationary",
      flow: "1-5 LPM",
      weight: "16.3kg",
      power: "310watts"
    }
  }
];

const CategoryPage = () => {
  const { category, subcategory } = useParams();
  const { addToCart, addToWishlist } = useCart();

  const categoryData = megaMenuData.find(c => c.slug === category);
  const subcategoryData = categoryData?.subItems.find(s => s.slug === subcategory);

  const handleAddToCart = (product: typeof categoryProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image
    });
    toast({ title: "Added to cart", description: `${product.name} has been added to your cart.` });
  };

  const handleAddToWishlist = (product: typeof categoryProducts[0]) => {
    addToWishlist({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image
    });
    toast({ title: "Added to wishlist", description: `${product.name} has been added to your wishlist.` });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container-cbr py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link to="/categories" className="text-muted-foreground hover:text-primary">Categories</Link>
            {categoryData && (
              <>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Link 
                  to={`/category/${category}`} 
                  className="text-muted-foreground hover:text-primary"
                >
                  {categoryData.name}
                </Link>
              </>
            )}
            {subcategoryData && (
              <>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <span className="text-foreground font-medium">{subcategoryData.name}</span>
              </>
            )}
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="gradient-hero text-primary-foreground py-12">
        <div className="container-cbr">
          <h1 className="font-display text-3xl md:text-4xl font-bold">
            {subcategoryData?.name || categoryData?.name || "Products"}
          </h1>
          <p className="mt-2 opacity-90">
            Browse our range of {subcategoryData?.name?.toLowerCase() || categoryData?.name?.toLowerCase() || "products"}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container-cbr">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product, index) => (
              <div 
                key={product.id}
                className="bg-card rounded-2xl overflow-hidden shadow-cbr-sm hover:shadow-cbr-md transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Link to={`/product/${product.id}`}>
                  <div className="aspect-square overflow-hidden bg-secondary">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>

                <div className="p-4">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-display text-lg font-bold text-foreground hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground">{product.brand}</p>

                  {/* Price */}
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-xl font-bold text-accent">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {/* Key Features */}
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Purity</span>
                      <span className="text-primary font-medium">{product.features.purity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Type</span>
                      <span className="text-foreground">{product.features.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Flow</span>
                      <span className="text-foreground">{product.features.flow}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 btn-primary text-sm py-2 flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleAddToWishlist(product)}
                      className="p-2 border border-border rounded-lg hover:bg-secondary transition-colors"
                    >
                      <Heart className="h-5 w-5 text-foreground" />
                    </button>
                  </div>

                  {/* Buy Now */}
                  <Link
                    to="/checkout"
                    className="mt-2 block w-full btn-accent text-sm py-2 text-center"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;