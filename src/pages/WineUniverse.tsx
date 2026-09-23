import { useEffect, useMemo, useState } from "react";
import { ArrowRight, BookOpen, Check, ChevronDown, Grape, MapPin, RotateCcw, Search, Star, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import MobileLayout from "@/components/layout/MobileLayout";
import SEOHead from "@/components/SEOHead";
import ProductImage from "@/components/product/ProductImage";
import CategoryBottleVisual from "@/components/category/CategoryBottleVisual";
import FavoriteButton from "@/components/FavoriteButton";
import CompareButton from "@/components/product/CompareButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "@/hooks/useLocation";
import { useProducts, type Product } from "@/hooks/useProducts";
import { useProductUrl } from "@/hooks/useProductUrl";
import { citySlugFromName } from "@/lib/locations";

type ViewMode = "explore" | "taste" | "price" | "value";
type StyleFilter = "all" | "red-wine" | "white-wine" | "rose-wine" | "sparkling-wine" | "dessert-wine";
type PriceFilter = "all" | "under-1000" | "1000-2500" | "over-2500";

const STYLE_FILTERS: Array<{ value: StyleFilter; label: string }> = [
  { value: "all", label: "All wines" },
  { value: "red-wine", label: "Red" },
  { value: "white-wine", label: "White" },
  { value: "rose-wine", label: "Rosé" },
  { value: "sparkling-wine", label: "Sparkling" },
  { value: "dessert-wine", label: "Dessert" },
];

const WINE_REGIONS = ["India", "France", "Italy", "Australia", "Chile", "Spain"];

const TASTE_FILTERS = [
  { value: "crisp", label: "Crisp & dry" },
  { value: "fruity", label: "Fruity" },
  { value: "bold", label: "Bold & rich" },
  { value: "sweet", label: "Sweet" },
  { value: "oaky", label: "Oaky" },
] as const;

const WINE_PAIRINGS = [
  { name: "Tandoori & kebabs", style: "Bold reds and aromatic whites" },
  { name: "Paneer & creamy curries", style: "Medium-bodied whites or rosé" },
  { name: "Biryani & spicy food", style: "Fruit-forward reds with softer tannins" },
  { name: "Desserts", style: "Sweet, fortified or sparkling wines" },
] as const;

const WINE_STYLE_DIRECTORY = [
  { slug: "red-wine", name: "Red wine", text: "From light, perfumed reds to rich, intense styles." },
  { slug: "white-wine", name: "White wine", text: "Crisp, aromatic and buttery bottles for every table." },
  { slug: "rose-wine", name: "Rosé wine", text: "Fresh, dry and fruit-forward pours for warm evenings." },
  { slug: "sparkling-wine", name: "Sparkling wine", text: "Bright bubbles for celebrations, brunches and milestones." },
] as const;

const WINE_LEARNING = [
  { icon: Grape, title: "Grapes & styles", text: "Understand varieties, body, acidity and tannins.", to: "/guide" },
  { icon: Utensils, title: "Food pairing", text: "Find thoughtful pairings for Indian dishes and occasions.", to: "/guide" },
  { icon: BookOpen, title: "Serving guide", text: "Learn glassware, temperature and responsible serving sizes.", to: "/guide" },
] as const;

const isWine = (product: Product) => {
  const slug = product.category?.slug?.toLowerCase() || "";
  return slug === "wine" || slug.includes("wine") || slug === "champagne";
};

const productStyle = (product: Product): StyleFilter => {
  const slug = [product.category?.slug, product.category?.name, product.type_tag]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  if (slug.includes("red")) return "red-wine";
  if (slug.includes("white")) return "white-wine";
  if (slug.includes("rose")) return "rose-wine";
  if (slug.includes("sparkling") || slug.includes("champagne")) return "sparkling-wine";
  if (slug.includes("dessert") || slug.includes("fortified")) return "dessert-wine";
  return "all";
};

const productMatchesPrice = (product: Product, priceFilter: PriceFilter) => {
  if (priceFilter === "all") return true;
  const price = Number(product.price);
  if (!Number.isFinite(price)) return false;
  if (priceFilter === "under-1000") return price < 1000;
  if (priceFilter === "1000-2500") return price >= 1000 && price <= 2500;
  return price > 2500;
};

const productSearchText = (product: Product) => [
  product.brand,
  product.name,
  product.category?.name,
  product.origin,
  product.taste_profile,
  product.type_tag,
].filter(Boolean).join(" ").toLowerCase();

const SAVED_SEARCHES_KEY = "bevory_wine_saved_searches";

type SavedSearch = {
  id: string;
  label: string;
  query: string;
  style: StyleFilter;
  price: PriceFilter;
  region: string;
  minimumRating: number;
  taste: string;
};

const WineUniverse = () => {
  const { selectedCity } = useLocation();
  const cityName = selectedCity?.name || "your city";
  const citySlug = citySlugFromName(selectedCity?.name) || "gurgaon";
  const canonicalPath = typeof window !== "undefined" && window.location.pathname !== "/"
    ? window.location.pathname
    : "/wine-universe";
  const { products, loading, hasNextPage, fetchNextPage, isFetchingNextPage } = useProducts(true, "category", "wine", true);
  const { getProductUrlSafe } = useProductUrl();
  const [query, setQuery] = useState("");
  const [view, setView] = useState<ViewMode>("explore");
  const [style, setStyle] = useState<StyleFilter>("all");
  const [price, setPrice] = useState<PriceFilter>("all");
  const [region, setRegion] = useState("all");
  const [minimumRating, setMinimumRating] = useState(0);
  const [taste, setTaste] = useState("");
  const [savedSearches, setSavedSearches] = useState<SavedSearch[]>([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(SAVED_SEARCHES_KEY) || "[]") as SavedSearch[];
      if (Array.isArray(saved)) setSavedSearches(saved.slice(0, 6));
    } catch {
      localStorage.removeItem(SAVED_SEARCHES_KEY);
    }
  }, []);

  const wines = useMemo(() => products.filter(isWine), [products]);
  const regions = useMemo(() => {
    const fromCatalog = [...new Set(wines.map((product) => product.origin?.trim()).filter(Boolean) as string[])];
    return [...new Set([...WINE_REGIONS, ...fromCatalog])].slice(0, 20);
  }, [wines]);

  const filteredWines = useMemo(() => {
    const search = query.trim().toLowerCase();
    return wines
      .filter((product) => !search || productSearchText(product).includes(search))
      .filter((product) => style === "all" || productStyle(product) === style)
      .filter((product) => price === "all" || productMatchesPrice(product, price))
      .filter((product) => region === "all" || product.origin?.toLowerCase().includes(region.toLowerCase()))
      .filter((product) => !taste || productSearchText(product).includes(taste))
      .filter((product) => Number(product.rating || 0) >= minimumRating)
      .sort((left, right) => {
        if (view === "price") return Number(left.price || Number.MAX_SAFE_INTEGER) - Number(right.price || Number.MAX_SAFE_INTEGER);
        if (view === "value") {
          const leftValue = Number(left.rating || 0) / Math.max(Number(left.price || 0), 1);
          const rightValue = Number(right.rating || 0) / Math.max(Number(right.price || 0), 1);
          return rightValue - leftValue;
        }
        if (view === "taste") return Number(right.rating || 0) - Number(left.rating || 0) || String(left.taste_profile || "").localeCompare(String(right.taste_profile || ""));
        return Number(right.rating || 0) - Number(left.rating || 0) || Number(right.is_trending) - Number(left.is_trending);
      });
  }, [minimumRating, price, query, region, style, taste, view, wines]);

  const resetFilters = () => {
    setQuery("");
    setStyle("all");
    setPrice("all");
    setRegion("all");
    setMinimumRating(0);
    setTaste("");
  };

  const saveCurrentSearch = () => {
    const label = [query.trim(), style !== "all" ? STYLE_FILTERS.find((item) => item.value === style)?.label : "", taste ? TASTE_FILTERS.find((item) => item.value === taste)?.label : "", region !== "all" ? region : "", price !== "all" ? price.replaceAll("-", " ") : ""]
      .filter(Boolean)
      .join(" · ") || "All wines";
    const saved: SavedSearch = { id: `${Date.now()}`, label, query, style, price, region, minimumRating, taste };
    const next = [saved, ...savedSearches.filter((item) => item.label !== label)].slice(0, 6);
    setSavedSearches(next);
    localStorage.setItem(SAVED_SEARCHES_KEY, JSON.stringify(next));
  };

  const applySavedSearch = (saved: SavedSearch) => {
    setQuery(saved.query);
    setStyle(saved.style);
    setPrice(saved.price);
    setRegion(saved.region);
    setMinimumRating(saved.minimumRating);
    setTaste(saved.taste || "");
  };

  const jsonLd = {
    "@type": "CollectionPage",
    name: "Wine Universe | BevOry",
    description: `Explore wine styles, regions, tasting notes and indicative local prices in ${cityName}.`,
    url: typeof window !== "undefined" ? `${window.location.origin}${canonicalPath}` : "https://bevory.in/wine-universe",
    about: { "@type": "Thing", name: "Wine information and price guide" },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: filteredWines.slice(0, 12).map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: typeof window !== "undefined" ? `${window.location.origin}${getProductUrlSafe(product)}` : getProductUrlSafe(product),
        name: `${product.brand} ${product.name}`,
      })),
    },
  };

  return (
    <>
      <SEOHead
        title="Wine Universe | Explore Wine Styles, Regions & Prices | BevOry"
        description={`Explore red, white, rosé and sparkling wines with tasting guidance, food pairings and indicative ${cityName} price information.`}
        canonical={canonicalPath}
        keywords="wine guide India, wine prices, red wine, white wine, rose wine, sparkling wine, wine pairing"
        jsonLd={jsonLd}
      />
      <MobileLayout showSearch={false} showCheersGuide={false}>
        <main className="space-y-7 px-4 pb-24 pt-4">
          <section className="relative overflow-hidden rounded-3xl bg-foreground px-5 py-6 text-background shadow-[var(--shadow-md)]">
            <div className="pointer-events-none absolute -right-14 -top-20 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative z-10 max-w-xl">
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-background/20 bg-background/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-background/80">
                <Grape className="h-3 w-3 text-accent" /> BevOry Wine Universe
              </div>
              <h1 className="text-[30px] font-bold leading-[1.05] tracking-tight">Find your next great wine.</h1>
              <p className="mt-2 max-w-md text-[13px] leading-relaxed text-background/70">
                Explore styles, regions, tasting ideas and reviewed local price information for {cityName}. BevOry is an independent information guide—not a seller or delivery service.
              </p>
              <div className="relative mt-5">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search wine, brand, region or grape"
                  aria-label="Search wines"
                  className="h-11 border-0 bg-background pl-10 text-foreground shadow-sm placeholder:text-muted-foreground"
                />
              </div>
            </div>
          </section>

          <section aria-labelledby="wine-universe-modes">
            <div className="mb-3 flex items-center justify-between">
              <h2 id="wine-universe-modes" className="text-base font-semibold">Explore your way</h2>
              <Link to="/favorites" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Saved wines <ArrowRight className="ml-0.5 inline h-3 w-3" /></Link>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {([
                ["explore", "Discover", "Top-rated wines"],
                ["price", "Price guide", `Reviewed in ${cityName}`],
                ["taste", "Taste match", "Notes & pairings"],
                ["value", "Best value", "Rating for the price"],
              ] as const).map(([value, label, hint]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setView(value)}
                  className={`rounded-2xl border p-3 text-left transition-all ${view === value ? "border-accent/50 bg-accent/10 shadow-[var(--shadow-sm)]" : "border-border/60 bg-card hover:border-accent/30"}`}
                  aria-pressed={view === value}
                >
                  <span className="block text-[13px] font-semibold">{label}</span>
                  <span className="mt-1 block text-[10px] leading-tight text-muted-foreground">{hint}</span>
                </button>
              ))}
            </div>
          </section>

          <section aria-labelledby="wine-filters">
            <div className="mb-3 flex items-center justify-between">
              <h2 id="wine-filters" className="text-base font-semibold">Browse wine styles</h2>
              <button type="button" onClick={resetFilters} className="inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground">
                <RotateCcw className="h-3 w-3" /> Reset
              </button>
            </div>
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-hide">
              {STYLE_FILTERS.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setStyle(filter.value)}
                  className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${style === filter.value ? "bg-foreground text-background" : "bg-secondary text-foreground hover:bg-secondary/70"}`}
                  aria-pressed={style === filter.value}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              <label className="relative block">
                <span className="sr-only">Price range</span>
                <select value={price} onChange={(event) => setPrice(event.target.value as PriceFilter)} className="h-10 w-full appearance-none rounded-xl border border-border/60 bg-card px-3 pr-8 text-xs outline-none focus:border-accent/60">
                  <option value="all">Any price</option>
                  <option value="under-1000">Under ₹1,000</option>
                  <option value="1000-2500">₹1,000–₹2,500</option>
                  <option value="over-2500">Over ₹2,500</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              </label>
              <label className="relative block">
                <span className="sr-only">Region</span>
                <select value={region} onChange={(event) => setRegion(event.target.value)} className="h-10 w-full appearance-none rounded-xl border border-border/60 bg-card px-3 pr-8 text-xs outline-none focus:border-accent/60">
                  <option value="all">Any region</option>
                  {regions.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              </label>
              <label className="relative block">
                <span className="sr-only">Minimum rating</span>
                <select value={minimumRating} onChange={(event) => setMinimumRating(Number(event.target.value))} className="h-10 w-full appearance-none rounded-xl border border-border/60 bg-card px-3 pr-8 text-xs outline-none focus:border-accent/60">
                  <option value={0}>Any rating</option>
                  <option value={4}>4.0+ rating</option>
                  <option value={4.5}>4.5+ rating</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              </label>
            </div>
            <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
              <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Taste</span>
              {TASTE_FILTERS.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setTaste(taste === filter.value ? "" : filter.value)}
                  className={`whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] transition-colors ${taste === filter.value ? "border-accent/50 bg-accent/10 text-foreground" : "border-border/60 bg-card text-muted-foreground hover:text-foreground"}`}
                  aria-pressed={taste === filter.value}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Button type="button" variant="outline" size="sm" onClick={saveCurrentSearch} className="h-8 text-[11px]">
                <Check className="h-3 w-3" /> Save this search
              </Button>
              {savedSearches.map((saved) => (
                <button key={saved.id} type="button" onClick={() => applySavedSearch(saved)} className="max-w-[180px] truncate rounded-full bg-secondary px-2.5 py-1 text-[10px] text-muted-foreground transition-colors hover:text-foreground" title={saved.label}>
                  {saved.label}
                </button>
              ))}
            </div>
          </section>

          <section aria-labelledby="wine-results">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h2 id="wine-results" className="text-base font-semibold">{view === "price" ? "Local price guide" : view === "taste" ? "Taste-led picks" : view === "value" ? "Best value wines" : "Wines to explore"}</h2>
                <p className="mt-0.5 text-[11px] text-muted-foreground">{filteredWines.length} reviewed results · information only</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground"><MapPin className="h-3 w-3" /> {cityName}</span>
            </div>
            {loading && wines.length === 0 ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((item) => <div key={item} className="h-64 animate-pulse rounded-2xl bg-secondary" />)}
              </div>
            ) : filteredWines.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border p-8 text-center">
                <p className="text-sm font-medium">No wines match those filters.</p>
                <p className="mt-1 text-xs text-muted-foreground">Try a broader style, region or price range.</p>
                <Button variant="outline" size="sm" className="mt-4" onClick={resetFilters}>Reset filters</Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {filteredWines.slice(0, 18).map((product, index) => (
                  <Link key={product.id} to={getProductUrlSafe(product)} className="group rounded-2xl border border-border/60 bg-card p-2.5 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[var(--shadow-md)]">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-secondary/60">
                      <ProductImage src={product.image_url} alt={`${product.brand} ${product.name}`} fallbackEmoji="🍷" priority={index < 2} width={420} className="h-full w-full rounded-none" />
                      {product.is_trending && <Badge className="absolute left-2 top-2 bg-accent text-accent-foreground text-[9px]">Trending</Badge>}
                      <div className="absolute right-1.5 top-1.5 flex flex-col gap-1">
                        <FavoriteButton productId={product.id} size="sm" variant="overlay" className="h-8 w-8 min-h-8 min-w-8" />
                        <CompareButton productId={product.id} size="sm" variant="icon" className="h-8 w-8" />
                      </div>
                    </div>
                    <p className="mt-2 truncate text-[10px] text-muted-foreground">{product.brand}</p>
                    <h3 className="truncate text-[13px] font-semibold">{product.name}</h3>
                    <div className="mt-1 flex items-center justify-between gap-2 text-[10px] text-muted-foreground">
                      <span>{product.volume || "Size pending"}</span>
                      <span className="inline-flex items-center gap-0.5"><Star className="h-3 w-3 fill-accent text-accent" />{Number(product.rating || 0) > 0 ? Number(product.rating).toFixed(1) : "New"}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between border-t border-border/50 pt-2">
                      <span className="text-[11px] font-semibold">{product.price ? `₹${Number(product.price).toLocaleString("en-IN")}` : "Price pending"}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {hasNextPage && (
              <Button variant="outline" className="mt-4 w-full" onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
                {isFetchingNextPage ? "Loading more wines…" : "Load more wines"}
              </Button>
            )}
          </section>

          <section aria-labelledby="wine-style-directory">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h2 id="wine-style-directory" className="text-base font-semibold">Start with a wine style</h2>
                <p className="mt-0.5 text-[11px] text-muted-foreground">A simple path into the wine universe.</p>
              </div>
              <Link to={`/${citySlug}/category/red-wine`} className="text-[11px] text-muted-foreground hover:text-foreground">Browse all <ArrowRight className="ml-0.5 inline h-3 w-3" /></Link>
            </div>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {WINE_STYLE_DIRECTORY.map((item, index) => (
                <Link key={item.slug} to={`/${citySlug}/category/${item.slug}`} className="group rounded-2xl border border-border/60 bg-card p-2.5 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[var(--shadow-sm)]">
                  <div className="aspect-[1.2] overflow-hidden rounded-xl bg-secondary/70">
                    <CategoryBottleVisual slug={item.slug} categoryName={item.name} priority={index === 0} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <h3 className="mt-2 text-[12px] font-semibold">{item.name}</h3>
                  <p className="mt-1 line-clamp-2 text-[10px] leading-relaxed text-muted-foreground">{item.text}</p>
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="wine-pairings">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h2 id="wine-pairings" className="text-base font-semibold">Pair wine with Indian food</h2>
                <p className="mt-0.5 text-[11px] text-muted-foreground">Practical starting points, not hard rules.</p>
              </div>
              <Link to="/guide" className="text-[11px] text-muted-foreground hover:text-foreground">Pairing guide <ArrowRight className="ml-0.5 inline h-3 w-3" /></Link>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {WINE_PAIRINGS.map((pairing) => (
                <Link key={pairing.name} to="/guide" className="rounded-2xl border border-border/60 bg-card p-3 transition-colors hover:border-accent/40">
                  <h3 className="text-[12px] font-semibold">{pairing.name}</h3>
                  <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">{pairing.style}</p>
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="wine-learning">
            <div className="mb-3 flex items-center justify-between">
              <h2 id="wine-learning" className="text-base font-semibold">Build your wine knowledge</h2>
              <Link to="/guide" className="text-[11px] text-muted-foreground hover:text-foreground">All guides <ArrowRight className="ml-0.5 inline h-3 w-3" /></Link>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {WINE_LEARNING.map(({ icon: Icon, title, text, to }) => (
                <Link key={title} to={to} className="rounded-2xl border border-border/60 bg-card p-3 transition-colors hover:border-accent/40">
                  <Icon className="h-4 w-4 text-accent" />
                  <h3 className="mt-2 text-[13px] font-semibold">{title}</h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{text}</p>
                </Link>
              ))}
            </div>
          </section>

          <p className="text-[10px] leading-relaxed text-muted-foreground">
            BevOry provides independent information, reviewed price observations and educational content. Prices, availability, ratings and product details can change at retail and should be verified locally. BevOry does not sell, deliver or process alcohol orders.
          </p>
        </main>
      </MobileLayout>
    </>
  );
};

export default WineUniverse;
