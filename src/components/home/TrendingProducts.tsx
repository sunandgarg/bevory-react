import { useState, useEffect, useMemo, memo, useCallback } from "react";
import { Star, TrendingUp, ChevronRight, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { Product, useProducts } from "@/hooks/useProducts";
import { useLocation } from "@/hooks/useLocation";
import { useProductUrl } from "@/hooks/useProductUrl";
import FavoriteButton from "@/components/FavoriteButton";
import CompareButton from "@/components/product/CompareButton";
import ProductImage from "@/components/product/ProductImage";
import { citySlugFromName } from "@/lib/locations";

interface TrendingProductsProps { defaultCategory?: string; }

const CATEGORY_TABS = ["whisky", "wine", "beers", "vodka", "gin", "rum"] as const;
const categoryTabLabel = (slug: string) => slug === "beers" ? "Beer" : slug;
const FAVOURITE_BRANDS = /johnnie walker|old monk|kingfisher|bacardi|absolut|magic moments|tuborg|royal stag/i;

const TrendingProducts = memo(({ defaultCategory = "whisky" }: TrendingProductsProps) => {
  const [selectedTab, setSelectedTab] = useState(defaultCategory);
  const { products, loading } = useProducts(true, "home");
  const { selectedCity } = useLocation();
  const citySlug = citySlugFromName(selectedCity?.name) || "gurgaon";
  const { getProductUrlSafe } = useProductUrl();

  const productsByTab = useMemo(() => {
    const map = new Map<string, Product[]>();
    CATEGORY_TABS.forEach((tab) => map.set(tab, []));
    products.forEach((product) => {
      const slug = product.category?.slug?.toLowerCase();
      const tab = slug && CATEGORY_TABS.find((candidate) => slug.includes(candidate));
      if (tab) map.get(tab)?.push(product);
    });
    return map;
  }, [products]);

  const allTimeFavourites = useMemo(() => {
    const marked = products.filter((product) => product.is_all_time_favourite);
    const familiar = products.filter((product) => FAVOURITE_BRANDS.test(`${product.brand} ${product.name}`));
    return [...new Map([...marked, ...familiar].map((product) => [product.id, product])).values()].slice(0, 8);
  }, [products]);

  const filteredProducts = useMemo(() => {
    const categoryProducts = productsByTab.get(selectedTab) ?? [];
    const marked = categoryProducts.filter((product) => product.is_trending);
    return (marked.length ? marked : categoryProducts).slice(0, 8);
  }, [productsByTab, selectedTab]);

  useEffect(() => {
    if ((productsByTab.get(selectedTab) ?? []).length > 0) return;
    const firstAvailable = CATEGORY_TABS.find((tab) => (productsByTab.get(tab) ?? []).length > 0);
    if (firstAvailable) setSelectedTab(firstAvailable);
  }, [productsByTab, selectedTab]);

  const handleTabClick = useCallback((tab: string) => setSelectedTab(tab), []);

  const productRail = (items: Product[]) => (
    <div className="flex gap-2.5 overflow-x-auto pb-1 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory">
      {items.map((product, index) => (
        <div key={product.id} className="w-36 flex-shrink-0 snap-start">
          <Link to={getProductUrlSafe(product)}>
            <article className="bg-card rounded-lg border border-border overflow-hidden group hover:border-border/80 transition-colors">
              <div className="relative h-32">
                <ProductImage src={product.image_url} alt={`${product.brand} ${product.name} bottle`} fallbackEmoji={product.image_emoji}
                  priority={index < 2} className="h-full w-full rounded-none" width={288} />
                <div className="absolute top-1.5 left-1.5"><CompareButton productId={product.id} size="sm" variant="icon" /></div>
                <div className="absolute top-1.5 right-1.5"><FavoriteButton productId={product.id} size="sm" variant="overlay" /></div>
              </div>
              <div className="p-2.5">
                <p className="text-[10px] text-muted-foreground truncate">{product.brand}</p>
                <p className="font-medium text-xs truncate mt-0.5">{product.name}</p>
                <div className="mt-0.5 flex items-center justify-between text-[10px] text-muted-foreground">
                  <span>{product.volume}</span><span title={product.origin || "Origin"}>{product.origin_flag}</span>
                </div>
                <div className="flex items-center justify-between mt-1.5 pt-1.5 border-t border-border/50">
                  <div className="flex items-center gap-0.5">
                    <Star className={`w-3 h-3 ${Number(product.rating) > 0 ? "fill-accent text-accent" : "text-muted-foreground/50"}`} />
                    <span className="text-[10px] font-medium">{Number(product.rating) > 0 ? Number(product.rating).toFixed(1) : "New"}</span>
                  </div>
                  <p className={`font-semibold ${product.price ? "text-xs" : "text-[10px] text-muted-foreground"}`}>
                    {product.price ? `₹${Number(product.price).toLocaleString("en-IN")}` : "Price pending"}
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </div>
      ))}
    </div>
  );

  if (loading) return <div className="px-4"><Skeleton className="h-5 w-40 mb-3" /><Skeleton className="h-56 w-full rounded-lg" /></div>;
  if (products.length === 0) return null;

  return (
    <div className="px-4 space-y-7">
      {allTimeFavourites.length > 0 && <section aria-labelledby="all-time-favourites">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5"><Heart className="w-4 h-4 text-accent" /><h2 id="all-time-favourites" className="text-base font-semibold">All Time Favourites</h2></div>
          <Link to={`/${citySlug}/collections/favourites`} className="text-xs flex items-center gap-0.5">See all <ChevronRight className="w-3 h-3" /></Link>
        </div>
        {productRail(allTimeFavourites)}
      </section>}

      <section aria-labelledby="trending-now">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5"><TrendingUp className="w-4 h-4 text-accent" /><h2 id="trending-now" className="text-base font-semibold">Trending Now</h2></div>
          <Link to={`/${citySlug}/collections/trending?category=${selectedTab}`} className="text-xs flex items-center gap-0.5">See all <ChevronRight className="w-3 h-3" /></Link>
        </div>
        <div className="flex gap-1.5 mb-3 overflow-x-auto pb-1 -mx-4 px-4 scrollbar-hide">
          {CATEGORY_TABS.map((tab) => (
            <button key={tab} onClick={() => handleTabClick(tab)} aria-pressed={selectedTab === tab}
              className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize whitespace-nowrap ${selectedTab === tab ? "bg-foreground text-background" : "bg-secondary text-foreground"}`}>
              {categoryTabLabel(tab)}
            </button>
          ))}
        </div>
        {productRail(filteredProducts)}
      </section>

      {selectedCity && <p className="text-[10px] text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" /> Prices in {selectedCity.name}</p>}
    </div>
  );
});

TrendingProducts.displayName = "TrendingProducts";
export default TrendingProducts;
