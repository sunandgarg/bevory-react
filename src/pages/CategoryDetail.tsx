import { useState, useEffect, useMemo, useCallback } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Package } from "lucide-react";
import MobileLayout from "@/components/layout/MobileLayout";
import { useProducts } from "@/hooks/useProducts";
import { useRouteCity } from "@/hooks/useRouteCity";
import { useProductUrl } from "@/hooks/useProductUrl";
import CompareButton from "@/components/product/CompareButton";
import FavoriteButton from "@/components/FavoriteButton";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { apiClient } from "@/integrations/api/client";
import { citySlugFromName } from "@/lib/locations";
import ProductImage from "@/components/product/ProductImage";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { INFORMATIONAL_PRICE_NOTICE } from "@/lib/informationNotice";

interface SubCategory {
  id: string;
  name: string;
  slug: string | null;
  emoji: string | null;
  image_url: string | null;
}

const CategoryDetail = () => {
  const { citySlug, slug, subCategorySlug } = useParams<{
    citySlug?: string;
    slug: string;
    subCategorySlug?: string;
  }>();
  const canonicalCategorySlug = slug === "beer" ? "beers" : slug;
  const {
    categories,
    getProductsByCategory,
    totalProducts,
    loading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useProducts(true, "category", canonicalCategorySlug, true);
  const { selectedCity, routeCityReady } = useRouteCity(citySlug);
  const { getProductUrlSafe } = useProductUrl();
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);

  const category = categories.find((c) => c.slug === canonicalCategorySlug);
  const allProducts = getProductsByCategory(canonicalCategorySlug || "");
  const canonicalCitySlug = citySlug || citySlugFromName(selectedCity?.name) || "gurgaon";
  const categoryPath = `/${canonicalCitySlug}/category/${canonicalCategorySlug}`;

  // Fetch sub-categories for this category
  useEffect(() => {
    const fetchSubCategories = async () => {
      if (!category?.id) return;
      const { data } = await apiClient
        .from("sub_categories")
        .select("id, name, slug, emoji, image_url")
        .eq("category_id", category.id)
        .eq("is_active", true)
        .order("order_index");
      if (data) setSubCategories(data);
    };
    fetchSubCategories();
  }, [category?.id]);

  const selectedSubCategory = useMemo(
    () => subCategories.find((subCategory) => subCategory.slug === subCategorySlug) ?? null,
    [subCategories, subCategorySlug],
  );

  // Stable path-based filters can be crawled and shared without indexing arbitrary query combinations.
  const products = useMemo(() => {
    if (!selectedSubCategory) return allProducts;
    return allProducts.filter((p: any) => p.sub_category_id === selectedSubCategory.id);
  }, [allProducts, selectedSubCategory]);
  const loadNextPage = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) void fetchNextPage();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);
  const loadMoreRef = useInfiniteScroll(loadNextPage, Boolean(hasNextPage) && !isFetchingNextPage);

  useEffect(() => {
    if (selectedSubCategory && products.length < 8 && hasNextPage && !isFetchingNextPage) {
      void fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, products.length, selectedSubCategory]);

  // Generate structured data for SEO
  const generateStructuredData = () => {
    if (!category) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": `${selectedSubCategory?.name || category.name} Collection`,
      "description": selectedSubCategory
        ? `Compare ${selectedSubCategory.name} products, variants and local prices.`
        : category.description || `Browse our collection of ${category.name} products with prices and reviews.`,
      "url": `https://bevory.in${categoryPath}${selectedSubCategory?.slug ? `/${selectedSubCategory.slug}` : ""}`,
      "numberOfItems": products.length,
      "itemListElement": products.slice(0, 10).map((p, i) => ({
        "@type": "Product",
        "position": i + 1,
        "name": `${p.brand} ${p.name}`,
        "brand": { "@type": "Brand", "name": p.brand },
        ...(p.price && {
          "offers": {
            "@type": "Offer",
            "price": p.price,
            "priceCurrency": "INR",
          }
        }),
      })),
    };
  };

  if (slug !== canonicalCategorySlug) {
    return (
      <Navigate
        replace
        to={`${categoryPath}${subCategorySlug ? `/${subCategorySlug}` : ""}`}
      />
    );
  }

  if (loading || !routeCityReady) {
    return (
      <MobileLayout showHeader={false}>
        <div className="px-4 pb-8 pt-16 sm:px-6">
          <div className="mb-3 h-9 w-64 animate-pulse rounded-md bg-muted" />
          <div className="mb-8 h-5 w-36 animate-pulse rounded-md bg-muted" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[4/5] animate-pulse rounded-md bg-muted" />
            ))}
          </div>
        </div>
      </MobileLayout>
    );
  }

  if (!category) {
    return (
      <MobileLayout showBack>
        <div className="p-4 text-center py-16">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
            <Package className="w-10 h-10 text-muted-foreground" />
          </div>
          <h1 className="text-xl font-serif font-bold mb-2">Category Not Found</h1>
          <p className="text-muted-foreground mb-6">The category you're looking for doesn't exist.</p>
          <Link to="/categories">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" /> Browse Categories
            </Button>
          </Link>
        </div>
      </MobileLayout>
    );
  }

  return (
    <>
      <SEOHead
        title={selectedSubCategory
          ? `${selectedSubCategory.name} Prices | BevOry`
          : (category as any).meta_title || `${category.name} Prices & Reviews | BevOry`}
        description={selectedSubCategory
          ? `Compare ${selectedSubCategory.name} products, bottle sizes and verified local prices in ${selectedCity?.name || "India"}.`
          : (category as any).meta_description || category.description || `Browse our collection of ${category.name}. Compare prices, read reviews, and find the best ${category.name.toLowerCase()} in ${selectedCity?.name || 'India'}.`}
        keywords={`${selectedSubCategory?.name || category.name}, ${(selectedSubCategory?.name || category.name).toLowerCase()} price guide, ${category.name.toLowerCase()} India`}
        canonical={`${categoryPath}${selectedSubCategory?.slug ? `/${selectedSubCategory.slug}` : ""}`}
        jsonLd={generateStructuredData()}
        robots={products.length > 0
          ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          : "noindex, follow, max-image-preview:large"}
      />
      <MobileLayout showHeader={false}>
        <div className="px-4 pb-8 pt-5 sm:px-6">
          <Link to="/categories" className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> All categories
          </Link>
          <header className="mb-6 border-b border-border pb-5">
            <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
              {category.name} in {selectedCity?.name || "India"}
            </h1>
            {category.description && (
              <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
            )}
            <p className="mt-3 text-sm font-medium text-foreground">
              {selectedSubCategory ? `${products.length} shown` : `${totalProducts.toLocaleString("en-IN")} products`}
            </p>
          </header>

          {subCategories.length > 0 && (
            <nav aria-label="Filter by type" className="mb-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <Link to={categoryPath} aria-current={!selectedSubCategory ? "page" : undefined} className={`flex min-h-10 shrink-0 items-center rounded-md border px-4 text-sm font-medium ${!selectedSubCategory ? "border-foreground bg-foreground text-background" : "border-border bg-background hover:border-foreground"}`}>
                All
              </Link>
              {subCategories.filter((sub) => sub.slug).map((sub) => (
                <Link key={sub.id} to={`${categoryPath}/${sub.slug}`} aria-current={selectedSubCategory?.id === sub.id ? "page" : undefined} className={`flex min-h-10 shrink-0 items-center rounded-md border px-4 text-sm font-medium ${selectedSubCategory?.id === sub.id ? "border-foreground bg-foreground text-background" : "border-border bg-background hover:border-foreground"}`}>
                  {sub.name}
                </Link>
              ))}
            </nav>
          )}

          <section aria-label={`${selectedSubCategory?.name || category.name} products`}>
            {products.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                  <Package className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {selectedSubCategory ? "No products in this sub-category" : "No products yet"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {selectedSubCategory ? "Try selecting a different filter" : "Products in this category will appear here"}
                </p>
                {selectedSubCategory && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="mt-4"
                  >
                    <Link to={categoryPath}>Clear Filter</Link>
                  </Button>
                )}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-4">
                  {products.map((product, index) => (
                    <article
                      key={product.id}
                      ref={index === Math.max(0, products.length - 5) ? loadMoreRef : undefined}
                      className="relative min-w-0"
                    >
                      <Link
                        to={getProductUrlSafe(product)}
                        className="group block rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      >
                        <div className="aspect-[4/5] overflow-hidden rounded-md border border-border/50 bg-[#f4f5f6] transition-colors group-hover:border-foreground/35">
                          <ProductImage
                            src={product.image_url}
                            alt={`${product.brand} ${product.name} bottle`}
                            fallbackEmoji={product.image_emoji}
                            priority={index < 4}
                            className="h-full w-full rounded-none bg-[#f4f5f6]"
                          />
                        </div>
                        <div className="pt-3">
                          <p className="truncate text-xs text-muted-foreground">{product.brand}</p>
                          <h2 className="mt-1 line-clamp-2 min-h-10 text-sm font-semibold leading-5 text-foreground group-hover:text-accent">
                            {product.name}
                          </h2>
                          <p className="mt-1 truncate text-xs text-muted-foreground">
                            {product.sub_category?.name || category.name} · {product.volume || "See sizes"}
                          </p>
                          <p className="mt-3 text-base font-semibold text-foreground">
                            {product.price ? `₹${Number(product.price).toLocaleString("en-IN")}` : "Price unavailable"}
                          </p>
                        </div>
                      </Link>
                      <div className="absolute left-2 top-2 z-10">
                        <CompareButton productId={product.id} variant="icon" className="border border-border/70 shadow-sm" />
                      </div>
                      <div className="absolute right-2 top-2 z-10">
                        <FavoriteButton productId={product.id} size="sm" variant="overlay" className="border border-border/70 shadow-sm" />
                      </div>
                    </article>
                  ))}
                </div>
                {isFetchingNextPage && (
                  <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4" aria-label="Loading more products">
                    <div className="aspect-[4/5] animate-pulse rounded-md bg-muted" />
                    <div className="aspect-[4/5] animate-pulse rounded-md bg-muted" />
                  </div>
                )}
                {hasNextPage && !isFetchingNextPage && (
                  <Button variant="outline" className="mx-auto mt-8 flex min-h-11" onClick={() => void fetchNextPage()}>
                    Load more products
                  </Button>
                )}
              </>
            )}
          </section>
          <p className="mt-8 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">{INFORMATIONAL_PRICE_NOTICE}</p>
        </div>
      </MobileLayout>
    </>
  );
};

export default CategoryDetail;
