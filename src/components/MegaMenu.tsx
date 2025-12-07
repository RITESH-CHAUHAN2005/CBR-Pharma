import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { megaMenuData, MenuItem } from "@/data/megaMenuData";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  const [activeCategory, setActiveCategory] = useState<MenuItem | null>(megaMenuData[0]);

  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-0 w-full bg-card shadow-cbr-lg border-t border-border z-50"
    >
      <div className="container-cbr py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Categories */}
          <div className="col-span-3 border-r border-border pr-6">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Medicine Categories
            </h4>
            <ul className="space-y-1">
              {megaMenuData.map((category) => (
                <li key={category.id}>
                  <button
                    onMouseEnter={() => setActiveCategory(category)}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all ${
                      activeCategory?.id === category.id
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "hover:bg-secondary text-foreground"
                    }`}
                  >
                    <span className="font-medium text-sm">{category.name}</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle Column - SubItems */}
          <div className="col-span-5">
            {activeCategory && (
              <>
                <h3 className="font-display font-bold text-lg text-foreground mb-4">
                  {activeCategory.name}
                </h3>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {activeCategory.subItems.map((subItem) => (
                    <li key={subItem.id}>
                      <Link
                        to={`/category/${activeCategory.slug}/${subItem.slug}`}
                        onClick={onClose}
                        className="block py-2.5 px-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all text-sm"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/category/${activeCategory.slug}`}
                  onClick={onClose}
                  className="inline-flex items-center gap-2 mt-6 text-primary text-sm font-medium hover:underline"
                >
                  View All {activeCategory.name}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </>
            )}
          </div>

          {/* Right Column - Image */}
          <div className="col-span-4">
            {activeCategory && (
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-cbr-md">
                <img
                  src={activeCategory.image}
                  alt={activeCategory.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
