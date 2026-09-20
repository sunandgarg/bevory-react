import { useState, useRef, useEffect, useMemo, useCallback, memo } from "react";
import { Search, X, ArrowRight, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { apiClient } from "@/integrations/api/client";
import { fuzzyFilter } from "@/lib/fuzzySearch";
import { useLocation } from "@/hooks/useLocation";
import { citySlugFromName } from "@/lib/locations";
import { generateProductUrl } from "@/lib/productSlug";
import CategoryBottleVisual from "@/components/category/CategoryBottleVisual";
import ProductImage from "@/components/product/ProductImage";

interface Brand {
  id: string;
  brand_name: string;
  slug: string | null;
  logo_emoji: string | null;
  logo_url: string | null;
}

interface SearchProduct {
  id: string;
  name: string;
  brand: string;
  rating: number | null;
  image_emoji: string | null;
  image_url: string | null;
  slug: string | null;
  category: { name: string; slug: string; emoji: string | null } | null;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  emoji: string | null;
}

interface UniversalSearchProps {
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}

// Lightweight search cache to avoid re-fetching identical queries
const searchCache = new Map<string, SearchProduct[]>();
const CACHE_MAX = 50;

const UniversalSearch = memo(({ 
  placeholder = "Search drinks, brands...", 
  className = "",
  autoFocus = false 
}: UniversalSearchProps) => {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchProduct[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [staticDataLoaded, setStaticDataLoaded] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();
  const staticDataLoadingRef = useRef(false);
  const searchSequenceRef = useRef(0);
  const { selectedCity } = useLocation();
  const citySlug = citySlugFromName(selectedCity?.name) || "gurgaon";

  // Load suggestions only after the user starts searching.
  useEffect(() => {
    if (query.trim().length < 2 || staticDataLoaded || staticDataLoadingRef.current) return;
    staticDataLoadingRef.current = true;
    const fetchStatic = async () => {
      const [catRes, brandRes] = await Promise.all([
        apiClient.from("categories").select("id, name, slug, emoji").eq("is_active", true).order("order_index"),
        apiClient.from("brand_spotlights").select("id, brand_name, slug, logo_emoji, logo_url").eq("is_active", true),
      ]);
      if (catRes.data) setCategories(catRes.data);
      if (brandRes.data) setBrands(brandRes.data);
      setStaticDataLoaded(true);
      staticDataLoadingRef.current = false;
    };
    void fetchStatic();
  }, [query, staticDataLoaded]);

  // Debounced search - only fetches matching products, NOT all products
  const debouncedSearch = useCallback((searchQuery: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    
    if (searchQuery.length < 2) {
      searchSequenceRef.current += 1;
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    // Check cache first
    const cacheKey = `${selectedCity?.id || "none"}:${searchQuery.toLowerCase()}`;
    const cached = searchCache.get(cacheKey);
    if (cached) {
      setSearchResults(cached);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const sequence = ++searchSequenceRef.current;
    debounceRef.current = setTimeout(async () => {
      const lookup = searchQuery.trim().replace(/[^a-zA-Z0-9\s'-]/g, " ").trim();
      if (!lookup) {
        setSearchResults([]);
        setIsSearching(false);
        return;
      }
      const { data, error } = await apiClient
        .from("products")
        .select("id, name, brand, rating, image_emoji, image_url, slug, category:categories(name, slug, emoji)")
        .eq("is_active", true)
        .or(`name.ilike.%${lookup}%,brand.ilike.%${lookup}%`)
        .limit(30);
      const results = error ? [] : fuzzyFilter(
        (data ?? []) as SearchProduct[],
        searchQuery,
        (product) => [product.name, product.brand, product.category?.name || ""],
        0.25,
      ).slice(0, 8);
      if (sequence !== searchSequenceRef.current) return;

      if (searchCache.size >= CACHE_MAX) {
        const firstKey = searchCache.keys().next().value;
        if (firstKey) searchCache.delete(firstKey);
      }
      searchCache.set(cacheKey, results);
      setSearchResults(results);
      setIsSearching(false);
    }, 250); // 250ms debounce
  }, [selectedCity?.id]);

  // Trigger search on query change
  useEffect(() => {
    debouncedSearch(query);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, debouncedSearch]);

  // Fuzzy filter categories and brands (client-side, tiny datasets)
  const filteredCategories = useMemo(() => {
    if (query.length < 2) return [];
    return fuzzyFilter(categories, query, (c) => [c.name], 0.4);
  }, [categories, query]);

  const filteredBrands = useMemo(() => {
    if (query.length < 2) return [];
    return fuzzyFilter(brands, query, (b) => [b.brand_name], 0.3).slice(0, 5);
  }, [brands, query]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setShowResults(false);
      setQuery("");
    }
  }, [query, navigate]);

  const handleResultClick = useCallback(() => {
    setShowResults(false);
    setQuery("");
  }, []);

  const hasResults = searchResults.length > 0 || filteredCategories.length > 0 || filteredBrands.length > 0;

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            ref={inputRef}
            placeholder={placeholder}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowResults(true);
            }}
            onFocus={() => setShowResults(true)}
            autoFocus={autoFocus}
            className="pl-10 pr-10 h-12 rounded-2xl bg-card border-border"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
        </div>
      </form>

      <>
        {showResults && query.length >= 2 && hasResults && (
          <div
            className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-lg z-50 overflow-hidden max-h-80 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-150"
          >
            {/* Products are shown first because they satisfy the most common search intent. */}
            {searchResults.length > 0 && (
              <div className="p-2 border-b border-border">
                <p className="text-[11px] font-semibold uppercase text-muted-foreground px-2 py-1">Products</p>
                {searchResults.map((product) => (
                  <Link
                    key={product.id}
                    to={generateProductUrl({ citySlug, productSlug: product.slug || product.id })}
                    onClick={handleResultClick}
                    className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <ProductImage
                      src={product.image_url}
                      alt={`${product.brand} ${product.name} bottle`}
                      fallbackEmoji={product.image_emoji}
                      className="h-11 w-11 shrink-0 rounded-md"
                      width={88}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{product.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{product.brand}</p>
                    </div>
                    {product.rating && (
                      <div className="flex items-center gap-1 text-xs">
                        <Star className="w-3 h-3 fill-accent text-accent" />
                        {product.rating}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            )}

            {/* Brands */}
            {filteredBrands.length > 0 && (
              <div className="p-2 border-b border-border">
                <p className="text-[11px] font-semibold uppercase text-muted-foreground px-2 py-1">Brands</p>
                {filteredBrands.map((brand) => (
                  <Link
                    key={brand.id}
                    to={`/${citySlug}/brand/${brand.slug || brand.id}`}
                    onClick={handleResultClick}
                    className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-secondary transition-colors"
                  >
                    {brand.logo_url ? (
                      <img src={brand.logo_url} alt="" className="w-6 h-6 rounded object-contain" loading="lazy" />
                    ) : (
                      <span className="text-xl">{brand.logo_emoji || "🏷️"}</span>
                    )}
                    <span className="font-medium">{brand.brand_name}</span>
                    <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground" />
                  </Link>
                ))}
              </div>
            )}

            {/* Categories */}
            {filteredCategories.length > 0 && (
              <div className="p-2">
                <p className="text-[11px] font-semibold uppercase text-muted-foreground px-2 py-1">Categories</p>
                {filteredCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/${citySlug}/category/${cat.slug}`}
                    onClick={handleResultClick}
                    className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <CategoryBottleVisual slug={cat.slug} categoryName={cat.name} className="h-8 w-8 shrink-0" />
                    <span className="font-medium">{cat.name}</span>
                    <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground" />
                  </Link>
                ))}
              </div>
            )}

            {/* View All */}
            <Link
              to={`/search?q=${encodeURIComponent(query)}`}
              onClick={handleResultClick}
              className="flex items-center justify-center gap-2 p-3 border-t border-border bg-secondary/50 text-sm font-medium hover:bg-secondary transition-colors"
            >
              View all results
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Loading indicator */}
        {showResults && query.length >= 2 && isSearching && !hasResults && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-lg z-50 p-4 text-center text-sm text-muted-foreground animate-in fade-in duration-150">
            Searching...
          </div>
        )}
      </>
    </div>
  );
});

UniversalSearch.displayName = "UniversalSearch";
export default UniversalSearch;
