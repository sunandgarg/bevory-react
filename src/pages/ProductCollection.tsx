import { useInfiniteQuery } from "@tanstack/react-query";
import { ArrowLeft, Heart, Star, TrendingUp } from "lucide-react";
import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";
import MobileLayout from "@/components/layout/MobileLayout";
import ProductImage from "@/components/product/ProductImage";
import SEOHead from "@/components/SEOHead";
import { useProductUrl } from "@/hooks/useProductUrl";
import { useRouteCity } from "@/hooks/useRouteCity";
import type { Product } from "@/hooks/useProducts";
import { apiClient } from "@/integrations/api/client";
import { INFORMATIONAL_PRICE_NOTICE } from "@/lib/informationNotice";

const PAGE_SIZE = 24;
const CATEGORIES = [
  { slug: "whisky", label: "Whisky" },
  { slug: "wine", label: "Wine" },
  { slug: "beers", label: "Beer" },
  { slug: "vodka", label: "Vodka" },
  { slug: "gin", label: "Gin" },
  { slug: "rum", label: "Rum" },
] as const;

const ProductCollection = () => {
  const { citySlug, collection } = useParams<{ citySlug: string; collection: string }>();
  const [searchParams] = useSearchParams();
  const { selectedCity, routeCityReady } = useRouteCity(citySlug);
  const { getProductUrlSafe } = useProductUrl();
  const validCollection = collection === "favourites" || collection === "trending";
  const collectionType = collection === "favourites" ? "favourites" : "trending";
  const category = collectionType === "trending"
    ? CATEGORIES.find((item) => item.slug === searchParams.get("category"))
    : undefined;
  const title = collectionType === "favourites" ? "All Time Favourites" : "Trending Now";

  const listings = useInfiniteQuery({
    queryKey: ["product-collection", selectedCity?.id ?? "none", collectionType, category?.slug ?? "all"],
    queryFn: async ({ pageParam }) => {
      const { data, error } = await apiClient.catalog.getCollection(
        selectedCity!.id,
        collectionType,
        category?.slug,
        { offset: pageParam, limit: PAGE_SIZE },
      );
      if (error) throw error;
      return {
        products: (data?.products ?? []) as Product[],
        totalProducts: data?.totalProducts ?? 0,
        hasMore: data?.hasMore === true,
        nextOffset: pageParam + (data?.products.length ?? 0),
      };
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.hasMore ? lastPage.nextOffset : undefined,
    enabled: validCollection && routeCityReady && Boolean(selectedCity?.id),
    staleTime: 5 * 60 * 1000,
  });

  if (!validCollection) return <Navigate to="/" replace />;

  const products = listings.data?.pages.flatMap((page) => page.products) ?? [];
  const totalProducts = listings.data?.pages[0]?.totalProducts ?? 0;
  const Icon = collectionType === "favourites" ? Heart : TrendingUp;

  return (
    <MobileLayout showHeader={false} showSearch={false}>
      <SEOHead
        title={`${title} in ${selectedCity?.name ?? "India"} | BevOry`}
        description={`Explore ${title.toLowerCase()} and indicative bottle prices in ${selectedCity?.name ?? "your city"}.`}
        canonical={`/${citySlug}/collections/${collectionType}`}
        robots="noindex, follow"
      />
      <div className="px-4 pb-8 pt-5">
        <Link to={citySlug === "gurgaon" ? "/" : `/${citySlug}`} className="mb-5 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Home
        </Link>
        <div className="mb-5 flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Browse bottles and indicative prices in {selectedCity?.name ?? "your city"}.
            </p>
          </div>
        </div>

        {collectionType === "trending" && (
          <nav aria-label="Browse categories" className="-mx-4 mb-5 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-hide">
            <Link to={`/${citySlug}/collections/trending`} className={`shrink-0 rounded-full px-4 py-2 text-sm ${!category ? "bg-foreground text-background" : "bg-secondary text-foreground"}`}>
              All
            </Link>
            {CATEGORIES.map((item) => (
              <Link key={item.slug} to={`/${citySlug}/collections/trending?category=${item.slug}`} className={`shrink-0 rounded-full px-4 py-2 text-sm ${category?.slug === item.slug ? "bg-foreground text-background" : "bg-secondary text-foreground"}`}>
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        {listings.isLoading ? (
          <div className="space-y-3" aria-label="Loading products">
            {[1, 2, 3].map((item) => <div key={item} className="h-36 animate-pulse rounded-2xl bg-secondary" />)}
          </div>
        ) : listings.isError ? (
          <div className="rounded-2xl border border-border p-6 text-center">
            <p className="font-medium">Products could not be loaded.</p>
            <button type="button" onClick={() => void listings.refetch()} className="mt-3 text-sm font-semibold text-accent">Try again</button>
          </div>
        ) : products.length === 0 ? (
          <div className="rounded-2xl border border-border p-6 text-center text-sm text-muted-foreground">
            No products are currently listed in this collection for {selectedCity?.name ?? "this city"}.
          </div>
        ) : (
          <>
            <p className="mb-3 text-xs text-muted-foreground">{totalProducts.toLocaleString("en-IN")} products</p>
            <div className="grid gap-3 md:grid-cols-2">
              {products.map((product) => (
                <Link key={product.id} to={getProductUrlSafe(product)} className="group flex min-h-36 gap-3 rounded-2xl border border-border/70 bg-card p-2.5 transition-colors hover:border-accent/50">
                  <ProductImage
                    src={product.image_url}
                    alt={`${product.brand} ${product.name} bottle`}
                    fallbackEmoji={product.image_emoji}
                    className="h-32 w-28 shrink-0 rounded-xl border border-border/50 bg-background"
                    width={224}
                  />
                  <div className="flex min-w-0 flex-1 flex-col py-1">
                    <p className="truncate text-xs font-medium text-accent">{product.brand}</p>
                    <h2 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug group-hover:text-accent">{product.name}</h2>
                    <p className="mt-1 text-xs text-muted-foreground">{product.volume || "See sizes"}{product.category?.name ? ` · ${product.category.name}` : ""}</p>
                    <div className="mt-auto flex items-center justify-between gap-2 pt-2">
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="h-3 w-3 text-accent" />
                        {Number(product.rating) > 0 ? Number(product.rating).toFixed(1) : "New"}
                      </span>
                      <span className="text-sm font-semibold">{product.price ? `₹${Number(product.price).toLocaleString("en-IN")}` : "Price pending"}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {listings.hasNextPage && (
              <button type="button" onClick={() => void listings.fetchNextPage()} disabled={listings.isFetchingNextPage} className="mt-5 min-h-11 w-full rounded-xl border border-border bg-card text-sm font-semibold hover:bg-secondary disabled:opacity-60">
                {listings.isFetchingNextPage ? "Loading…" : "Load more products"}
              </button>
            )}
          </>
        )}
        <p className="mt-7 text-xs leading-relaxed text-muted-foreground">{INFORMATIONAL_PRICE_NOTICE}</p>
      </div>
    </MobileLayout>
  );
};

export default ProductCollection;
