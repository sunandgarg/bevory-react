import { lazy, memo, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeftRight, ArrowRight, ArrowUpRight, BookOpen, MapPin, Martini, PartyPopper, Search, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import MobileLayout from "@/components/layout/MobileLayout";
import CategoryBottleVisual from "@/components/category/CategoryBottleVisual";
import ProductImage from "@/components/product/ProductImage";
import Footer from "@/components/layout/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { useProducts, type Product } from "@/hooks/useProducts";
import { useLocation } from "@/hooks/useLocation";
import { useProductUrl } from "@/hooks/useProductUrl";
import { citySlugFromName } from "@/lib/locations";

const BrandSpotlight = lazy(() => import("@/components/home/BrandSpotlight"));
const WineCollection = lazy(() => import("@/components/home/WineCollection"));
const HomeCocktails = lazy(() => import("@/components/home/HomeCocktails"));
const BevoryGuide = lazy(() => import("@/components/home/BevoryGuide"));
const ProductReviews = lazy(() => import("@/components/home/ProductReviews"));
const VideoReviews = lazy(() => import("@/components/home/VideoReviews"));

const QUICK_LINKS = [
  { title: "Explore drinks", detail: "Whisky, wine, beer and more", to: "/categories", icon: Search, tone: "bg-[#d9ece7]" },
  { title: "Party planner", detail: "For the next get-together", to: "/party-planner", icon: PartyPopper, tone: "bg-[#f6dfcf]" },
  { title: "Cocktails", detail: "Classics and fresh ideas", to: "/cocktails", icon: Martini, tone: "bg-[#dce7f6]" },
  { title: "The guide", detail: "Stories, prices and know-how", to: "/guide", icon: BookOpen, tone: "bg-[#f4e9bb]" },
] as const;

const CATEGORY_TILES = [
  { slug: "vodka", title: "Vodka", tone: "bg-[#f8e9ed]" },
  { slug: "gin", title: "Gin", tone: "bg-[#e3eef7]" },
  { slug: "made-in-india-whisky", title: "Whisky", tone: "bg-[#faede6]" },
  { slug: "beers", title: "Beer", tone: "bg-[#f7e8e8]" },
  { slug: "tequila", title: "Tequila", tone: "bg-[#f5e9ee]" },
  { slug: "red-wine", title: "Wine", tone: "bg-[#eee5ec]" },
  { slug: "rum", title: "Rum", tone: "bg-[#e8efe9]" },
] as const;

const DeferredSection = ({ children }: { children: ReactNode }) => {
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

  return <div ref={ref} className={visible ? undefined : "min-h-40"}>{visible ? children : null}</div>;
};

const SectionHeading = ({ title, detail, to, linkLabel = "View all" }: {
  title: string;
  detail?: string;
  to?: string;
  linkLabel?: string;
}) => (
  <div className="mb-5 flex items-end justify-between gap-4">
    <div>
      <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{title}</h2>
      {detail && <p className="mt-1 text-sm text-muted-foreground">{detail}</p>}
    </div>
    {to && <Link to={to} className="inline-flex shrink-0 items-center gap-1 pb-0.5 text-sm font-semibold hover:text-accent">{linkLabel}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>}
  </div>
);

const ProductShelf = ({ title, detail, products, to }: {
  title: string;
  detail: string;
  products: Product[];
  to: string;
}) => {
  const { getProductUrlSafe } = useProductUrl();
  if (!products.length) return null;

  return (
    <section aria-label={title}>
      <SectionHeading title={title} detail={detail} to={to} />
      <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide sm:gap-4">
        {products.map((product, index) => (
          <Link key={product.id} to={getProductUrlSafe(product)} className="group w-[158px] shrink-0 snap-start sm:w-[188px]">
            <article className="h-full overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-foreground/40">
              <ProductImage src={product.image_url ?? null} alt={`${product.brand} ${product.name}`} fallbackEmoji={product.image_emoji} priority={index < 2} className="h-[170px] w-full rounded-none bg-[#f5f6f4] sm:h-[200px]" width={376} height={400} />
              <div className="p-3">
                <p className="truncate text-xs text-muted-foreground">{product.brand}</p>
                <h3 className="mt-1 line-clamp-2 min-h-10 text-sm font-semibold leading-5 group-hover:text-accent">{product.name}</h3>
                <div className="mt-3 flex items-end justify-between gap-2 border-t border-border pt-2">
                  <span className="truncate text-xs text-muted-foreground">{product.volume || "Bottle"}</span>
                  <span className="shrink-0 text-sm font-bold">₹{Number(product.price).toLocaleString("en-IN")}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

const Home = () => {
  const { categories, products, loading } = useProducts(true, "home");
  const { selectedCity } = useLocation();
  const cityName = selectedCity?.name || "your city";
  const citySlug = citySlugFromName(selectedCity?.name) || "gurgaon";
  const visibleCategories = CATEGORY_TILES.filter((item) => categories.some((category) => category.slug === item.slug));
  const pricedProducts = products.filter((product) => Number(product.price) > 0 && (product.image_url || product.image_emoji));
  const trending = pricedProducts.filter((product) => product.is_trending);
  const popularProducts = [...trending, ...pricedProducts.filter((product) => !product.is_trending)].slice(0, 10);
  const wineProducts = pricedProducts.filter((product) => product.category?.slug?.includes("wine")).slice(0, 10);
  const beerProducts = pricedProducts.filter((product) => product.category?.slug === "beers").slice(0, 10);

  return (
    <MobileLayout showSearch={false} showCheersGuide>
      <div className="bg-background text-foreground">
        <div className="mx-auto max-w-5xl px-4 pt-2 sm:px-8">
          <div className="flex items-center justify-between gap-3 py-3 text-xs font-medium text-muted-foreground sm:text-sm">
            <p className="inline-flex min-w-0 items-center gap-2"><MapPin className="h-4 w-4 shrink-0 text-[#e58c1b]" aria-hidden="true" />Tonight in <strong className="truncate text-foreground">{cityName}</strong></p>
            <p className="inline-flex shrink-0 items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[#249966]" aria-hidden="true" />Local price guide</p>
          </div>
          <section className="relative isolate overflow-hidden rounded-md bg-[#101a2b] text-white" aria-labelledby="home-title">
            <img src="/bevory-home-hero-2026.webp" alt="" width="2048" height="683" className="absolute inset-0 h-full w-full object-cover object-[68%_center] opacity-20 sm:object-center sm:opacity-30" />
            <div className="absolute inset-0 bg-[#101a2b]/55" aria-hidden="true" />
            <div className="relative z-10 px-6 pb-7 pt-9 sm:px-10 sm:pb-8 sm:pt-11 md:px-14">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-white/85"><ShieldCheck className="h-4 w-4 text-[#f5a21b]" aria-hidden="true" />Know before you drink</p>
              <h1 id="home-title" className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">BevOry<span className="sr-only">: Every pour, perfectly priced.</span></h1>
              <p className="mt-1 text-2xl font-semibold leading-tight text-white sm:text-3xl">Every pour, <em className="font-serif font-normal text-[#f5a21b]">perfectly</em> priced.</p>
              <p className="mt-5 max-w-[430px] text-sm leading-6 text-white/75 sm:text-base sm:leading-7">Explore drinks and brands across India, compare locally listed prices in <strong className="text-white">{cityName}</strong>, and plan every gathering with confidence.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/party-planner" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#f5a21b] px-5 text-sm font-bold text-[#132034] transition-colors hover:bg-[#ffc04f]"><PartyPopper className="h-4 w-4" aria-hidden="true" />Plan a party</Link>
                <Link to="/categories" className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/40 bg-white/10 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/20"><ArrowLeftRight className="h-4 w-4" aria-hidden="true" />Compare drinks</Link>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/20 pt-5 text-center sm:mt-10">
                <div><p className="text-sm font-bold sm:text-lg">Local</p><p className="mt-1 text-[10px] uppercase text-white/55 sm:text-xs">price guide</p></div>
                <div><p className="text-sm font-bold sm:text-lg">{categories.length || "Many"}</p><p className="mt-1 text-[10px] uppercase text-white/55 sm:text-xs">categories</p></div>
                <div><p className="text-sm font-bold sm:text-lg">Your city</p><p className="mt-1 text-[10px] uppercase text-white/55 sm:text-xs">your prices</p></div>
              </div>
            </div>
          </section>
        </div>

        <div className="mx-auto max-w-5xl space-y-12 px-4 pb-14 pt-6 sm:space-y-16 sm:px-8 sm:pt-9">
          <nav className="grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label="Explore BevOry">
            {QUICK_LINKS.map((item) => (
              <Link key={item.title} to={item.to} className={`group flex min-h-[158px] flex-col justify-between rounded-md p-4 text-[#172221] transition-transform hover:-translate-y-0.5 sm:min-h-[174px] sm:p-5 ${item.tone}`}>
                <div className="flex items-start justify-between"><item.icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" /><ArrowUpRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></div>
                <div><h2 className="text-lg font-bold leading-tight">{item.title}</h2><p className="mt-1 text-xs leading-5 text-[#34413e] sm:text-sm">{item.detail}</p></div>
              </Link>
            ))}
          </nav>

          <section aria-labelledby="home-categories-heading">
            <div className="mb-5 flex items-center justify-between gap-2 sm:gap-4"><h2 id="home-categories-heading" className="flex min-w-0 items-baseline gap-2 whitespace-nowrap text-base font-bold leading-tight sm:gap-4 sm:text-2xl"><span>Browse <em className="font-serif font-normal">by mood</em></span><span className="text-xs font-normal text-muted-foreground sm:text-sm">Find your perfect pour</span></h2><Link to="/categories" aria-label="All categories" title="All categories" className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold hover:text-accent"><span className="hidden sm:inline">All categories</span><ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
            {visibleCategories.length ? (
              <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide sm:mx-0 sm:gap-5 sm:px-0">
                {visibleCategories.map((item, index) => (
                  <Link key={item.slug} to={`/${citySlug}/category/${item.slug}`} className="group w-[112px] shrink-0 snap-start rounded-md text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-[150px] lg:w-[176px]">
                    <div className={`aspect-square overflow-hidden rounded-full ${item.tone}`}><CategoryBottleVisual slug={item.slug} categoryName={item.title} priority={index < 3} className="h-full w-full p-2.5 transition-transform duration-200 group-hover:scale-105 sm:p-3" /></div>
                    <h3 className="mt-3 text-base font-bold lowercase text-foreground group-hover:text-accent sm:text-lg">{item.title}</h3>
                  </Link>
                ))}
              </div>
            ) : <div className="flex gap-4 overflow-hidden">{CATEGORY_TILES.map((item) => <Skeleton key={item.slug} className="aspect-square w-[112px] shrink-0 rounded-full sm:w-[150px]" />)}</div>}
          </section>

          {loading && <div className="space-y-4"><Skeleton className="h-8 w-56" /><div className="flex gap-3 overflow-hidden">{[1, 2, 3, 4].map((item) => <Skeleton key={item} className="h-64 w-40 shrink-0 rounded-md" />)}</div></div>}
          <ProductShelf title={`Popular drinks in ${cityName}`} detail={`Listed bottle prices for ${cityName}`} products={popularProducts} to={`/${citySlug}/collections/trending`} />
          <ProductShelf title="Beer for the table" detail={`Explore beer listings in ${cityName}`} products={beerProducts} to={`/${citySlug}/category/beers`} />
          <ProductShelf title="Wine worth exploring" detail={`Red, white and sparkling wine in ${cityName}`} products={wineProducts} to={`/${citySlug}/wine-universe`} />
          {popularProducts.length > 0 && <p className="-mt-8 text-xs text-muted-foreground">Prices are indicative and can change by bottle size or retailer. Check the current label and local rules before buying.</p>}
        </div>

        <section className="bg-[#dfeae7] px-4 py-11 sm:px-8 sm:py-14" aria-labelledby="home-party-heading">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-xs font-semibold uppercase text-[#2b6f69]">The next gathering</p><h2 id="home-party-heading" className="mt-2 max-w-xl text-3xl font-bold leading-tight text-[#182827] sm:text-4xl">Good company. Better drinks.</h2><p className="mt-2 max-w-lg text-sm leading-6 text-[#445d59]">Build a drinks list around your guests, tastes and budget.</p></div>
            <Link to="/party-planner" className="inline-flex min-h-11 w-fit items-center gap-2 rounded-md bg-[#173f3a] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#215a52]">Open party planner<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-12 px-4 py-12 sm:space-y-16 sm:px-8 sm:py-16">
          <Suspense fallback={<Skeleton className="h-72 rounded-md" />}><WineCollection categories={categories} /></Suspense>
          <Suspense fallback={<Skeleton className="h-36 rounded-md" />}><BrandSpotlight variant="carousel" limit={16} /></Suspense>
          <DeferredSection><Suspense fallback={<Skeleton className="h-48 rounded-md" />}><HomeCocktails /></Suspense></DeferredSection>
          <DeferredSection><Suspense fallback={<Skeleton className="h-48 rounded-md" />}><BevoryGuide /></Suspense></DeferredSection>
          <DeferredSection><Suspense fallback={<Skeleton className="h-48 rounded-md" />}><ProductReviews /></Suspense></DeferredSection>
          <DeferredSection><Suspense fallback={<Skeleton className="h-48 rounded-md" />}><VideoReviews /></Suspense></DeferredSection>
        </div>
        <Footer />
      </div>
    </MobileLayout>
  );
};

export default memo(Home);
