import { memo, lazy, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import {
  PartyPopper,
  ArrowLeftRight,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Flame,
  Wine,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import MobileLayout from "@/components/layout/MobileLayout";
import { useProducts } from "@/hooks/useProducts";
import { useLocation } from "@/hooks/useLocation";
import TrendingProducts from "@/components/home/TrendingProducts";
import Footer from "@/components/layout/Footer";
import CategoryBottleVisual from "@/components/category/CategoryBottleVisual";
import { Skeleton } from "@/components/ui/skeleton";
import { citySlugFromName } from "@/lib/locations";

const BrandSpotlight = lazy(() => import("@/components/home/BrandSpotlight"));
const HomeCocktails = lazy(() => import("@/components/home/HomeCocktails"));
const BevoryGuide = lazy(() => import("@/components/home/BevoryGuide"));
const ProductReviews = lazy(() => import("@/components/home/ProductReviews"));
const VideoReviews = lazy(() => import("@/components/home/VideoReviews"));

const SectionSkeleton = () => (
  <div className="px-4 space-y-3">
    <Skeleton className="h-5 w-32" />
    <div className="flex gap-3 overflow-x-auto">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} className="w-40 h-48 rounded-xl flex-shrink-0" />
      ))}
    </div>
  </div>
);

const DeferredSection = ({ children, minHeight = 180 }: { children: ReactNode; minHeight?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || visible) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: "240px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div ref={ref} style={visible ? undefined : { minHeight }}>
      {visible ? children : null}
    </div>
  );
};

const QUICK_ACTIONS = [
  { icon: TrendingUp, label: "Trending", hint: "What's hot now", to: "/search?sort=trending", color: "text-primary" },
  { icon: Wine, label: "Cocktails", hint: "Recipes to try", to: "/cocktails", color: "text-accent" },
  { icon: BookOpen, label: "Guide", hint: "Know before you sip", to: "/guide", color: "text-success" },
] as const;

const serifStyle = { fontFamily: "'Instrument Serif', Georgia, serif" } as const;

// India is a whisky-led market, with beer the next broad demand group. Keep
// high-intent local price categories first, then faster-growing white spirits.
const CATEGORY_DEMAND_ORDER = [
  "made-in-india-whisky",
  "beers",
  "world-whisky",
  "single-malts",
  "rum",
  "brandy",
  "vodka",
  "gin",
  "red-wine",
  "white-wine",
  "ready-to-drink",
  "champagne",
] as const;

const formatCount = (count: number) => {
  if (count >= 1000) {
    const compact = count >= 10000 ? Math.floor(count / 1000) : Math.floor(count / 100) / 10;
    return `${compact}K`;
  }

  return count.toLocaleString("en-IN");
};

const Home = () => {
  const { categories, products } = useProducts(true, "home");
  const { selectedCity, allCities } = useLocation();
  const cityName = selectedCity?.name || "your city";
  const citySlug = citySlugFromName(selectedCity?.name) || "gurgaon";
  const cityCount = Math.max(allCities.length, selectedCity ? 1 : 0);
  const ratedProducts = products.filter((product) => Number(product.rating) > 0);
  const averageRating = ratedProducts.length
    ? ratedProducts.reduce((total, product) => total + Number(product.rating), 0) / ratedProducts.length
    : null;
  const demandOrderedCategories = [...categories].sort((left, right) => {
    const leftRank = CATEGORY_DEMAND_ORDER.indexOf(left.slug as typeof CATEGORY_DEMAND_ORDER[number]);
    const rightRank = CATEGORY_DEMAND_ORDER.indexOf(right.slug as typeof CATEGORY_DEMAND_ORDER[number]);
    return (leftRank < 0 ? Number.MAX_SAFE_INTEGER : leftRank)
      - (rightRank < 0 ? Number.MAX_SAFE_INTEGER : rightRank);
  });
  const trustStats = [
    { value: formatCount(cityCount), label: cityCount === 1 ? "City" : "Cities" },
    {
      value: categories.length > 0 ? formatCount(categories.length) : "Explore",
      label: categories.length === 1 ? "Category" : "Categories",
    },
    averageRating
      ? { value: `${averageRating.toFixed(1)}★`, label: "Community" }
      : { value: "Local", label: "Price guide" },
  ];

  return (
    <MobileLayout showSearch={true} showCheersGuide={true}>
      <div className="space-y-6 pb-6">
        {/* ─── Personalized greeting (anchoring + trust signal) ─── */}
        <div className="px-4 pt-2 flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground animate-in fade-in duration-500">
          <MapPin className="w-3 h-3 text-accent" />
          <span>Tonight in</span>
          <span className="text-foreground font-semibold">{cityName}</span>
          <span className="ml-auto inline-flex items-center gap-1 text-xs text-muted-foreground">
            <ShieldCheck className="w-3 h-3 text-success" />
            Local price guide
          </span>
        </div>

        {/* ─── Hero Banner ─── */}
        <div className="px-4">
          <div className="relative overflow-hidden rounded-2xl bg-foreground border border-foreground px-6 pt-7 pb-6 text-background animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-medium mb-4 uppercase tracking-[0.12em]">
                <ShieldCheck className="w-3 h-3 text-accent" />
                Know Before You Drink
              </div>

              <h1 className="text-[30px] leading-[1.05] mb-2.5 tracking-tight font-bold">
                Every pour,{" "}
                <span style={serifStyle} className="italic font-normal text-accent">
                  perfectly
                </span>{" "}
                priced.
              </h1>
              <p className="text-[13px] leading-relaxed text-background/75 mb-5 max-w-[290px]">
                Discover drinks in <span className="text-background font-semibold">{cityName}</span>, compare local prices, and plan every gathering with confidence.
              </p>

              <div className="flex flex-wrap gap-2">
                <Link
                  to="/party-planner"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-accent text-accent-foreground text-sm font-semibold hover:brightness-110 transition-all duration-200 active:scale-[0.97]"
                >
                  <PartyPopper className="w-4 h-4" />
                  Plan a Party
                </Link>
                <Link
                  to="/search"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-background/10 text-background text-sm font-medium hover:bg-background/20 transition-all duration-200 active:scale-[0.97] border border-background/20"
                >
                  <ArrowLeftRight className="w-4 h-4" />
                  Compare
                </Link>
              </div>

              {/* Social-proof trust strip inside hero */}
              <div className="mt-6 pt-5 border-t border-background/10 grid grid-cols-3 gap-2">
                {trustStats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-base font-bold text-background tracking-tight">{s.value}</div>
                    <div className="text-[10px] text-background/60 uppercase tracking-wider mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─── Quick Actions ─── */}
        <div className="px-4">
          <div className="grid grid-cols-3 gap-2.5">
            {QUICK_ACTIONS.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="group flex flex-col items-start gap-1 p-3 rounded-2xl bg-card border border-border/60 hover:border-accent/40 hover:shadow-[var(--shadow-sm)] transition-all duration-200 active:scale-[0.97]"
              >
                <div className="w-8 h-8 rounded-xl bg-secondary/70 flex items-center justify-center mb-1 group-hover:bg-accent/10 transition-colors">
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                </div>
                <span className="text-[13px] font-semibold text-foreground leading-tight">{item.label}</span>
                <span className="text-[10px] text-muted-foreground leading-tight">{item.hint}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* ─── Categories ─── */}
        <div>
          <div className="flex items-end justify-between mb-3 px-4">
            <div>
              <h2 className="text-[17px] font-bold tracking-tight">
                Browse{" "}
                <span style={serifStyle} className="italic font-normal text-muted-foreground">
                  by mood
                </span>
              </h2>
              <p className="text-[11px] text-muted-foreground mt-0.5">Find your perfect pour</p>
            </div>
            <Link
              to="/categories"
              className="text-[11px] text-muted-foreground hover:text-foreground flex items-center gap-0.5 transition-colors"
            >
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-1 px-4 scrollbar-hide snap-x snap-mandatory">
            {demandOrderedCategories.slice(0, 8).map((cat, index) => (
              <Link key={cat.id} to={`/${citySlug}/category/${cat.slug}`} className="group block w-[76px] flex-shrink-0 snap-start">
                <div className="w-[76px] h-[76px] rounded-2xl bg-secondary/80 border border-border/40 flex items-center justify-center mb-1.5 overflow-hidden group-hover:border-accent/40 group-hover:shadow-[var(--shadow-sm)] transition-all duration-200">
                  <CategoryBottleVisual
                    slug={cat.slug}
                    categoryName={cat.name}
                    priority={index < 2}
                    className="h-full w-full transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <p className="text-[11px] font-medium text-center text-muted-foreground group-hover:text-foreground truncate transition-colors">
                  {cat.name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* ─── Brand Spotlight ─── */}
        <Suspense fallback={<SectionSkeleton />}>
          <BrandSpotlight />
        </Suspense>

        {/* ─── Favourites and Trending ─── */}
        <TrendingProducts />

        {/* ─── Promotional Card ─── */}
        <div className="px-4">
          <Link
            to="/party-planner"
            className="block rounded-xl bg-secondary/60 border border-accent/25 p-5 hover:border-accent/40 transition-all active:scale-[0.99]"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Flame className="w-3.5 h-3.5 text-accent" />
                  <span className="text-xs font-bold text-foreground uppercase tracking-wider">
                    Party Planner
                  </span>
                </div>
                <p className="text-[15px] font-bold text-foreground mb-0.5 tracking-tight">
                  Planning a get-together?
                </p>
                <p className="text-[12px] text-muted-foreground">
                  Personalized drink picks for your budget
                </p>
              </div>
              <div className="w-11 h-11 rounded-xl bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>

        {/* ─── Lazy Loaded Sections ─── */}
        <DeferredSection>
          <Suspense fallback={<SectionSkeleton />}>
            <HomeCocktails />
          </Suspense>
        </DeferredSection>
        <DeferredSection>
          <Suspense fallback={<SectionSkeleton />}>
            <BevoryGuide />
          </Suspense>
        </DeferredSection>
        <DeferredSection minHeight={220}>
          <Suspense fallback={<SectionSkeleton />}>
            <ProductReviews />
          </Suspense>
        </DeferredSection>
        <DeferredSection minHeight={260}>
          <Suspense fallback={<SectionSkeleton />}>
            <VideoReviews />
          </Suspense>
        </DeferredSection>

        <Footer />
      </div>
    </MobileLayout>
  );
};

export default memo(Home);
