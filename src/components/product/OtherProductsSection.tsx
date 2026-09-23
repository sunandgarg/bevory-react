import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { useProductUrl } from "@/hooks/useProductUrl";

interface Product {
  id: string;
  name: string;
  brand: string;
  slug: string | null;
  image_emoji: string | null;
  image_url: string | null;
  rating: number | null;
  price?: number | null;
  price_volume?: string | null;
  category?: {
    slug?: string;
    name?: string;
  } | null;
  sub_category?: {
    slug?: string | null;
    name?: string;
  } | null;
}

interface OtherProductsSectionProps {
  products: Product[];
  title?: string;
}

const OtherProductsSection = ({ products, title = "Other Products" }: OtherProductsSectionProps) => {
  const { getProductUrlSafe } = useProductUrl();
  
  if (products.length === 0) return null;

  return (
    <div>
      <h3 className="font-semibold mb-3">{title}</h3>
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory">
        {products.map((product) => (
          <Link key={product.id} to={getProductUrlSafe(product)} className="snap-start">
            <div className="w-32 flex-shrink-0 bg-card rounded-xl border border-border overflow-hidden hover:border-accent/50 transition-colors">
              <div className="aspect-square bg-muted/50 flex items-center justify-center">
                {product.image_url ? (
                  <img src={product.image_url} alt={`${product.brand} ${product.name} bottle`} loading="lazy" decoding="async" width={128} height={128} className="w-full h-full object-contain p-2" />
                ) : (
                  <span className="text-4xl">{product.image_emoji || "🥃"}</span>
                )}
              </div>
              <div className="p-2">
                <p className="text-xs text-muted-foreground line-clamp-1">{product.brand}</p>
                <p className="font-medium text-sm line-clamp-1">{product.name}</p>
                <div className="flex items-end justify-between gap-1 mt-1">
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3 h-3 fill-accent text-accent" />
                    <span className="text-xs">{product.rating || "—"}</span>
                  </div>
                  {Number(product.price) > 0 && (
                    <div className="text-right leading-tight">
                      <p className="text-xs font-semibold text-foreground">₹{Number(product.price).toLocaleString("en-IN")}</p>
                      {product.price_volume && (
                        <p className="text-[10px] text-muted-foreground">{product.price_volume}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OtherProductsSection;
