import { useEffect, useState, useMemo, useCallback } from "react";
import { Search as SearchIcon, SlidersHorizontal, X, Star, TrendingUp, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import MobileLayout from "@/components/layout/MobileLayout";
import { Category, Product, useProducts } from "@/hooks/useProducts";
import { useLocation } from "@/hooks/useLocation";
import { Link, useSearchParams } from "react-router-dom";
import CompareButton from "@/components/product/CompareButton";
import FavoriteButton from "@/components/FavoriteButton";
import SEOHead from "@/components/SEOHead";
import { useProductUrl } from "@/hooks/useProductUrl";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { apiClient } from "@/integrations/api/client";
import { parseSearchIntent, productMatchesIntent } from "@/lib/searchDemand";
import CategoryBottleVisual from "@/components/category/CategoryBottleVisual";
import ProductImage from "@/components/product/ProductImage";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { PRODUCT_BATCH_SIZE } from "@/lib/catalogPagination";
import BrandSpotlight from "@/components/home/BrandSpotlight";
import { INFORMATIONAL_PRICE_NOTICE } from "@/lib/informationNotice";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get("q")?.trim() || "");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(() => searchParams.get("category"));
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [minRating, setMinRating] = useState(0);
  const [visibleCount, setVisibleCount] = useState(PRODUCT_BATCH_SIZE);
  const [sortBy, setSortBy] = useState<"rating" | "price_asc" | "price_desc" | "name">(() => {
    const requestedSort = searchParams.get("sort");
    return requestedSort === "price_asc" || requestedSort === "price_desc" || requestedSort === "name"
      ? requestedSort
      : "rating";
  });

  const { selectedCity } = useLocation();
  const { getProductUrlSafe } = useProductUrl();
  const trendingOnly = searchParams.get("sort") === "trending" || searchParams.get("trending") === "true";
  const searchIntent = useMemo(() => parseSearchIntent(debouncedQuery), [debouncedQuery]);
  const catalogFilterActive = Boolean(
    selectedCategory
      || trendingOnly
      || minRating > 0
      || priceRange[0] > 0
      || priceRange[1] < 50000
      || sortBy !== "rating",
  );
  const isDiscoveryLanding = !debouncedQuery.trim() && !catalogFilterActive;
  const catalogEnabled = !searchIntent.lookupTerm && !isDiscoveryLanding;
  const {
    products,
    categories: catalogCategories,
    loading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useProducts(catalogEnabled, "full", undefined, true);
  const { data: filterCategories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async (): Promise<Category[]> => {
      const { data, error } = await apiClient
        .from("categories")
        .select("id, name, slug, emoji, image_url, description")
        .eq("is_active", true)
        .order("order_index");
      if (error) throw error;
      return ((data ?? []) as Category[]).map((category) => (
        category.slug === "beers" ? { ...category, name: "Beer" } : category
      ));
    },
    staleTime: 10 * 60 * 1000,
    enabled: showFilters,
  });
  const categories = catalogCategories.length > 0 ? catalogCategories : filterCategories;

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedQuery(query), 250);
    return () => window.clearTimeout(timer);
  }, [query]);

  const globalSearch = useInfiniteQuery({
    queryKey: ["global-product-search", searchIntent.text, searchIntent.volumeMl],
    queryFn: async ({ pageParam }) => {
      const lookup = searchIntent.lookupTerm.replace(/[%,]/g, "");
      const { data, error } = await apiClient
        .from("products")
        .select(`
          id, name, slug, brand, brand_id, category_id, sub_category_id, price, mrp, volume,
          rating, image_emoji, image_url, origin, origin_flag, abv, age, type_tag,
          taste_profile, is_trending, is_all_time_favourite, available_volumes_ml,
          category:categories(name, slug, emoji),
          sub_category:sub_categories(name, slug, emoji)
        `)
        .eq("is_active", true)
        .or(`name.ilike.%${lookup}%,brand.ilike.%${lookup}%`)
        .range(pageParam, pageParam + PRODUCT_BATCH_SIZE - 1);
      if (error) throw error;
      const pageProducts = (data ?? []) as Product[];
      return {
        products: pageProducts.filter((product) => productMatchesIntent(product, searchIntent)),
        nextOffset: pageProducts.length === PRODUCT_BATCH_SIZE ? pageParam + PRODUCT_BATCH_SIZE : undefined,
      };
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextOffset,
    enabled: searchIntent.lookupTerm.length >= 2,
    staleTime: 10 * 60 * 1000,
  });
  const globalMatches = useMemo(
    () => globalSearch.data?.pages.flatMap((page) => page.products) ?? [],
    [globalSearch.data],
  );
  const globalSearchLoading = globalSearch.isLoading;
  const {
    hasNextPage: hasNextSearchPage,
    fetchNextPage: fetchNextSearchPage,
    isFetchingNextPage: isFetchingNextSearchPage,
  } = globalSearch;

  const searchableProducts = useMemo(() => {
    if (!debouncedQuery.trim()) return products;
    const localById = new Map(products.map((product) => [product.id, product]));
    return globalMatches.map((product) => ({ ...product, ...localById.get(product.id) }));
  }, [debouncedQuery, globalMatches, products]);

  useEffect(() => {
    setQuery(searchParams.get("q")?.trim() || "");
    setSelectedCategory(searchParams.get("category"));

    const requestedSort = searchParams.get("sort");
    if (requestedSort === "price_asc" || requestedSort === "price_desc" || requestedSort === "name") {
      setSortBy(requestedSort);
    } else {
      setSortBy("rating");
    }
  }, [searchParams]);

  const updateSearchParam = (key: string, value?: string | null) => {
    const nextParams = new URLSearchParams(searchParams);
    if (value) nextParams.set(key, value);
    else nextParams.delete(key);
    setSearchParams(nextParams, { replace: true });
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    updateSearchParam("q", value.trim() || null);
  };

  const handleCategoryChange = (slug: string) => {
    const nextCategory = selectedCategory === slug ? null : slug;
    setSelectedCategory(nextCategory);
    updateSearchParam("category", nextCategory);
  };

  const handleSortChange = (value: typeof sortBy) => {
    setSortBy(value);
    updateSearchParam("sort", value === "rating" ? null : value);
  };

  const filteredProducts = useMemo(() => {
    let result = [...searchableProducts];

    if (trendingOnly) {
      result = result.filter((product) => product.is_trending);
    }

    // Search filter
    if (debouncedQuery) result = result.filter((product) => productMatchesIntent(product, searchIntent));

    // Category filter
    if (selectedCategory) {
      result = result.filter((p) => p.category?.slug === selectedCategory);
    }

    // Price filter
    result = result.filter((p) => {
      const price = Number(p.price) || 0;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Rating filter
    if (minRating > 0) {
      result = result.filter((p) => (p.rating || 0) >= minRating);
    }

    // Sort
    switch (sortBy) {
      case "rating":
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "price_asc":
        result.sort((a, b) => {
          if (!Number(a.price)) return 1;
          if (!Number(b.price)) return -1;
          return Number(a.price) - Number(b.price);
        });
        break;
      case "price_desc":
        result.sort((a, b) => {
          if (!Number(a.price)) return 1;
          if (!Number(b.price)) return -1;
          return Number(b.price) - Number(a.price);
        });
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [searchableProducts, debouncedQuery, searchIntent, selectedCategory, priceRange, minRating, sortBy, trendingOnly]);

  useEffect(() => setVisibleCount(PRODUCT_BATCH_SIZE), [debouncedQuery, selectedCategory, priceRange, minRating, sortBy, selectedCity?.id]);
  const visibleProducts = debouncedQuery
    ? filteredProducts.slice(0, visibleCount)
    : filteredProducts;
  const canRevealSearchResults = Boolean(debouncedQuery) && visibleCount < filteredProducts.length;
  const canFetchCatalog = !debouncedQuery && Boolean(hasNextPage);
  const canFetchSearch = Boolean(debouncedQuery) && Boolean(hasNextSearchPage);
  const loadNextPage = useCallback(() => {
    if (canRevealSearchResults) {
      setVisibleCount((count) => Math.min(count + PRODUCT_BATCH_SIZE, filteredProducts.length));
    } else if (canFetchSearch && !isFetchingNextSearchPage) {
      void fetchNextSearchPage();
    } else if (canFetchCatalog && !isFetchingNextPage) {
      void fetchNextPage();
    }
  }, [canFetchCatalog, canFetchSearch, canRevealSearchResults, fetchNextPage, fetchNextSearchPage, filteredProducts.length, isFetchingNextPage, isFetchingNextSearchPage]);
  const loadMoreRef = useInfiniteScroll(
    loadNextPage,
    (canRevealSearchResults || canFetchCatalog || canFetchSearch)
      && !isFetchingNextPage
      && !isFetchingNextSearchPage,
  );

  useEffect(() => {
    if (debouncedQuery && filteredProducts.length < 8 && hasNextSearchPage && !isFetchingNextSearchPage) {
      void fetchNextSearchPage();
    }
  }, [debouncedQuery, fetchNextSearchPage, filteredProducts.length, hasNextSearchPage, isFetchingNextSearchPage]);

  useEffect(() => {
    const filteringCatalog = Boolean(selectedCategory || trendingOnly || minRating > 0 || priceRange[0] > 0 || priceRange[1] < 50000);
    if (!debouncedQuery && filteringCatalog && filteredProducts.length < 8 && hasNextPage && !isFetchingNextPage) {
      void fetchNextPage();
    }
  }, [debouncedQuery, fetchNextPage, filteredProducts.length, hasNextPage, isFetchingNextPage, minRating, priceRange, selectedCategory, trendingOnly]);

  const clearFilters = () => {
    setSelectedCategory(null);
    setPriceRange([0, 50000]);
    setMinRating(0);
    setSortBy("rating");
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete("category");
    nextParams.delete("sort");
    nextParams.delete("trending");
    setSearchParams(nextParams, { replace: true });
  };

  const clearAll = () => {
    setQuery("");
    setSelectedCategory(null);
    setPriceRange([0, 50000]);
    setMinRating(0);
    setSortBy("rating");
    setSearchParams({}, { replace: true });
  };

  const hasActiveFilters = Boolean(
    selectedCategory || trendingOnly || minRating > 0 || priceRange[0] > 0 || priceRange[1] < 50000,
  );

  return (
    <>
      <SEOHead
        title={query ? `Search: ${query} | BevOry` : "Search Products - Find Your Perfect Drink | BevOry"}
        description="Search and compare prices for whisky, vodka, rum, gin, and more. Find the best deals on premium spirits near you."
        keywords="search spirits, find whisky, compare prices, buy alcohol online, liquor search"
        canonical="/search"
        robots="noindex, follow, max-image-preview:large"
      />
      <MobileLayout title="Search" showHeader={false}>
        <div className="pb-6">
          {/* Hero Header */}
          <header className="px-4 pb-4 pt-5 sm:pt-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 text-center"
            >
              <div className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-accent">
                <TrendingUp className="w-4 h-4" />
                <span>Discover the BevOry catalogue</span>
              </div>
              <h1 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Find your perfect drink
              </h1>
            </motion.div>

            {/* Search Bar */}
            <div className="flex gap-2">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="relative flex-1"
              >
                <div className="relative">
                  <SearchIcon className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-accent sm:left-5" />
                  <Input
                    placeholder="Search BevOry"
                    value={query}
                    onChange={(e) => handleQueryChange(e.target.value)}
                    aria-label="Search drinks and brands"
                    className="h-14 rounded-2xl border-border bg-card pl-14 pr-12 text-base shadow-sm focus-visible:border-accent sm:h-16 sm:text-lg"
                  />
                  <AnimatePresence>
                    {query && (
                      <motion.button
                        type="button"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={() => handleQueryChange("")}
                        aria-label="Clear search"
                        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-muted/80"
                      >
                        <X className="h-4 w-4" />
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              <Sheet open={showFilters} onOpenChange={setShowFilters}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Open filters and sorting"
                    className={`h-14 w-14 rounded-2xl shadow-sm sm:h-16 sm:w-16 ${hasActiveFilters ? "border-accent text-accent bg-accent/10" : ""}`}
                  >
                    <SlidersHorizontal className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[85vh] rounded-t-3xl">
                  <SheetHeader>
                    <SheetTitle className="font-serif">Filters & Sort</SheetTitle>
                  </SheetHeader>

                  <div className="mt-6 space-y-8">
                    {/* Categories */}
                    <section>
                      <h3 className="font-semibold mb-3">Category</h3>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => handleCategoryChange(cat.slug)}
                            aria-pressed={selectedCategory === cat.slug}
                            className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all ${
                              selectedCategory === cat.slug
                                ? "bg-accent text-accent-foreground shadow-lg"
                                : "bg-secondary text-foreground hover:bg-secondary/80"
                            }`}
                          >
                            <CategoryBottleVisual
                              slug={cat.slug}
                              categoryName={cat.name}
                              className="h-6 w-6 shrink-0 rounded-md bg-background/70"
                            />
                            {cat.name}
                          </button>
                        ))}
                      </div>
                    </section>

                    {/* Price Range */}
                    <section>
                      <h3 className="font-semibold mb-3">
                        Price Range: ₹{priceRange[0].toLocaleString('en-IN')} - ₹{priceRange[1].toLocaleString('en-IN')}
                      </h3>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        min={0}
                        max={50000}
                        step={500}
                        className="py-4"
                      />
                    </section>

                    {/* Rating */}
                    <section>
                      <h3 className="font-semibold mb-3">Minimum Rating</h3>
                      <div className="flex gap-2">
                        {[0, 3, 3.5, 4, 4.5].map((rating) => (
                          <button
                            key={rating}
                            onClick={() => setMinRating(rating)}
                            aria-pressed={minRating === rating}
                            className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm transition-all ${
                              minRating === rating
                                ? "bg-accent text-accent-foreground shadow-lg"
                                : "bg-secondary text-foreground hover:bg-secondary/80"
                            }`}
                          >
                            {rating === 0 ? (
                              "All"
                            ) : (
                              <>
                                <Star className="w-3.5 h-3.5 fill-current" />
                                {rating}+
                              </>
                            )}
                          </button>
                        ))}
                      </div>
                    </section>

                    {/* Sort */}
                    <section>
                      <h3 className="font-semibold mb-3">Sort By</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { value: "rating", label: "Top Rated", icon: "⭐" },
                          { value: "price_asc", label: "Price: Low → High", icon: "💰" },
                          { value: "price_desc", label: "Price: High → Low", icon: "💎" },
                          { value: "name", label: "Name A-Z", icon: "🔤" },
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleSortChange(option.value as typeof sortBy)}
                            aria-pressed={sortBy === option.value}
                            className={`px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${
                              sortBy === option.value
                                ? "bg-accent text-accent-foreground shadow-lg"
                                : "bg-secondary text-foreground hover:bg-secondary/80"
                            }`}
                          >
                            <span className="mr-2">{option.icon}</span>
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </section>

                    {/* Actions */}
                    <div className="flex gap-3 pt-4">
                      <Button variant="outline" onClick={clearFilters} className="flex-1">
                        Clear All
                      </Button>
                      <Button onClick={() => setShowFilters(false)} className="flex-1 bg-accent text-accent-foreground">
                        Show {filteredProducts.length} Results
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </header>

          <main className="px-4">
            {isDiscoveryLanding ? (
              <div className="space-y-8 pb-6 pt-2">
                <BrandSpotlight variant="grid" limit={8} />

                <section className="rounded-2xl border border-border/70 bg-secondary/35 p-5" aria-labelledby="search-disclaimer">
                  <div className="mb-3 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-accent" aria-hidden="true" />
                    <h2 id="search-disclaimer" className="font-semibold text-foreground">Good to know</h2>
                  </div>
                  <ul className="space-y-2.5 pl-5 text-sm leading-6 text-muted-foreground marker:text-accent">
                    <li>{INFORMATIONAL_PRICE_NOTICE}</li>
                    <li>BevOry is an independent information and discovery platform. Brand names and logos belong to their respective owners.</li>
                    <li>Please drink responsibly. Alcohol is only for adults of legal drinking age in their location.</li>
                  </ul>
                </section>
              </div>
            ) : <>
            {/* Results Info */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground" aria-live="polite">
                <span className="font-medium text-foreground">{filteredProducts.length}</span>{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
                {selectedCity && <span className="text-accent"> in {selectedCity.name}</span>}
                {trendingOnly && <span className="text-accent"> · Trending</span>}
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-accent font-medium hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>

            {/* Products Grid */}
            {loading || (Boolean(query) && globalSearchLoading) ? (
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-[3/4] bg-muted rounded-2xl animate-pulse" />
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
                aria-live="polite"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                  <SearchIcon className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {debouncedQuery.trim().length === 1
                    ? "Keep typing"
                    : debouncedQuery.trim()
                      ? "No matches found"
                      : products.length === 0
                        ? "Catalogue is being updated"
                        : "No matches found"}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {debouncedQuery.trim().length === 1
                    ? "Enter at least two characters to search drinks and brands."
                    : debouncedQuery.trim()
                      ? "Try a shorter search, another spelling, or reset your filters."
                      : products.length === 0
                        ? `Products for ${selectedCity?.name || "your city"} will appear as local prices are published.`
                        : "Try a shorter search or reset your filters."}
                </p>
                {!debouncedQuery.trim() && products.length === 0 ? (
                  <Button variant="outline" asChild>
                    <Link to="/categories">Browse categories</Link>
                  </Button>
                ) : (
                  <Button variant="outline" onClick={clearAll}>
                    Reset search
                  </Button>
                )}
              </motion.div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-3">
                  {visibleProducts.map((product, index) => (
                    <article
                      key={product.id}
                      ref={index === visibleProducts.length - 5 ? loadMoreRef : undefined}
                    >
                      <Link to={getProductUrlSafe(product)}>
                        <div className="bg-card rounded-2xl border border-border/50 overflow-hidden relative group hover:border-accent/30 hover:shadow-lg transition-all">
                          {/* Action Buttons */}
                          <div className="absolute top-2 left-2 right-2 flex justify-between z-10">
                            <CompareButton productId={product.id} size="sm" />
                            <FavoriteButton productId={product.id} size="sm" />
                          </div>
                          
                          {/* Trending Badge */}
                          {product.is_trending && (
                            <Badge className="absolute top-2 left-1/2 -translate-x-1/2 bg-accent/90 text-accent-foreground text-[10px] z-10">
                              🔥 Trending
                            </Badge>
                          )}
                          
                          {/* Product Image */}
                          <ProductImage
                            src={product.image_url}
                            alt={`${product.brand} ${product.name} bottle`}
                            fallbackEmoji={product.image_emoji}
                            priority={index < 4}
                            className="aspect-square rounded-none"
                          />
                          
                          {/* Product Info */}
                          <div className="p-3.5">
                            <p className="text-xs text-muted-foreground mb-0.5">{product.brand}</p>
                            <h3 className="font-medium text-sm line-clamp-1 group-hover:text-accent transition-colors">
                              {product.name}
                            </h3>
                            
                            {/* Sub-Category Badge */}
                            <div className="mt-1 flex min-h-4 items-center gap-1.5">
                              {product.sub_category && (
                                <Badge variant="outline" className="text-[9px] px-1.5 py-0 border-accent/30 text-accent">
                                  {product.sub_category.emoji} {product.sub_category.name}
                                </Badge>
                              )}
                              {product.origin_flag && <span className="text-sm" title={product.origin || "Origin"}>{product.origin_flag}</span>}
                            </div>
                            
                            {/* Rating & Price */}
                            <div className="flex items-center justify-between mt-2.5">
                              <div className="flex items-center gap-1">
                                <Star
                                  className={`w-3.5 h-3.5 ${
                                    Number(product.rating) > 0
                                      ? "fill-amber-400 text-amber-400"
                                      : "text-muted-foreground/50"
                                  }`}
                                />
                                <span className={`text-xs font-medium ${Number(product.rating) > 0 ? "" : "text-muted-foreground"}`}>
                                  {Number(product.rating) > 0 ? Number(product.rating).toFixed(1) : "New"}
                                </span>
                              </div>
                              <p className={`font-bold ${product.price ? "text-sm text-accent" : "text-[10px] text-muted-foreground"}`}>
                                {product.price ? `₹${Number(product.price).toLocaleString('en-IN')}` : "Price pending"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
                {(isFetchingNextPage || isFetchingNextSearchPage) && (
                  <div className="mt-5 grid grid-cols-2 gap-3" aria-label="Loading more products">
                    <div className="aspect-[3/4] animate-pulse rounded-xl bg-muted" />
                    <div className="aspect-[3/4] animate-pulse rounded-xl bg-muted" />
                  </div>
                )}
              </>
            )}
            </>}
          </main>
        </div>
      </MobileLayout>
    </>
  );
};

export default Search;
