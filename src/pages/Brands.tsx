import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, ArrowLeft, Globe } from "lucide-react";
import { apiClient } from "@/integrations/api/client";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MobileLayout from "@/components/layout/MobileLayout";
import SEOHead from "@/components/SEOHead";
import { useLocation } from "@/hooks/useLocation";
import { citySlugFromName } from "@/lib/locations";
import BrandLogo from "@/components/brand/BrandLogo";

interface Brand {
  id: string;
  brand_name: string;
  slug: string | null;
  logo_emoji: string | null;
  logo_url: string | null;
  description: string | null;
  country: string | null;
  country_flag: string | null;
  country_flag_url: string | null;
  show_in_spotlight: boolean | null;
  is_active: boolean | null;
}

const Brands = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const { selectedCity } = useLocation();
  const citySlug = citySlugFromName(selectedCity?.name) || "gurgaon";

  useEffect(() => {
    const fetchBrands = async () => {
      const { data, error } = await apiClient
        .from("brand_spotlights")
        .select("id, brand_name, slug, logo_emoji, logo_url, description, country, country_flag, country_flag_url, show_in_spotlight, is_active")
        .eq("is_active", true)
        .order("brand_name");

      if (!error && data) {
        setBrands(data);
      }
      setLoading(false);
    };
    fetchBrands();
  }, []);

  const filteredBrands = brands.filter((brand) => (
    brand.is_active !== false
    && brand.brand_name.toLowerCase().includes(searchQuery.toLowerCase())
  ));

  // Separate spotlight and non-spotlight brands
  const spotlightBrands = filteredBrands.filter((b) => b.show_in_spotlight);
  const otherBrands = filteredBrands.filter((b) => !b.show_in_spotlight);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "All Brands | BevOry",
    description: "Explore our curated collection of premium liquor brands. Find whisky, vodka, rum, gin, and more from top brands worldwide.",
    url: typeof window !== "undefined" ? window.location.href : "",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: filteredBrands.map((brand, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Brand",
          name: brand.brand_name,
          description: brand.description || `Explore ${brand.brand_name} products`,
        },
      })),
    },
  };

  return (
    <MobileLayout showSearch={false} showCheersGuide={false} showHeader={false}>
      <SEOHead
        title="All Brands | BevOry - Premium Liquor Brands Directory"
        description="Discover and explore our comprehensive directory of premium liquor brands. From iconic whisky to craft spirits, find your favorite brands."
        canonical="/brands"
        jsonLd={jsonLd}
      />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-background/95 border-b border-border">
          <div className="flex items-center gap-3 px-4 py-3">
            <Link to="/" className="p-2 -ml-2 hover:bg-muted rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-lg font-semibold">All Brands</h1>
          </div>

          {/* Search Bar */}
          <div className="px-4 pb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
              />
            </div>
          </div>
        </header>

        <main className="px-4 py-6 pb-24">
          {loading ? (
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 lg:grid-cols-6">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <Skeleton className="w-full aspect-square rounded-xl" />
                  <Skeleton className="h-3 w-14" />
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* Featured/Spotlight Brands */}
              {spotlightBrands.length > 0 && (
                <section className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg">⭐</span>
                    <h2 className="text-base font-semibold">Featured Brands</h2>
                  </div>
                  <div className="grid grid-cols-4 gap-x-3 gap-y-4 sm:grid-cols-5 lg:grid-cols-6">
                    {spotlightBrands.map((brand, index) => (
                      <BrandCard key={brand.id} brand={brand} index={index} citySlug={citySlug} featured />
                    ))}
                  </div>
                </section>
              )}

              {/* All Other Brands */}
              {otherBrands.length > 0 && (
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="w-4 h-4 text-muted-foreground" />
                    <h2 className="text-base font-semibold">All Brands</h2>
                    <span className="text-xs text-muted-foreground">({otherBrands.length})</span>
                  </div>
                  <div className="grid grid-cols-4 gap-x-3 gap-y-4 sm:grid-cols-5 lg:grid-cols-6">
                    {otherBrands.map((brand, index) => (
                      <BrandCard key={brand.id} brand={brand} index={index} citySlug={citySlug} />
                    ))}
                  </div>
                </section>
              )}

              {filteredBrands.length === 0 && (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <span className="text-5xl mb-4">🔍</span>
                  <h3 className="font-medium text-lg mb-1">
                    {brands.length === 0 ? "Brand directory is being updated" : "No matching brands"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {brands.length === 0
                      ? "Brands will appear here as the catalog is published."
                      : "Try another name or clear your search."}
                  </p>
                  {searchQuery && (
                    <Button variant="outline" size="sm" onClick={() => setSearchQuery("")}>
                      Clear search
                    </Button>
                  )}
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </MobileLayout>
  );
};

interface BrandCardProps {
  brand: Brand;
  index: number;
  featured?: boolean;
  citySlug: string;
}

const BrandCard = ({ brand, index, featured, citySlug }: BrandCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.03 }}
  >
    <Link
      to={`/${citySlug}/brand/${brand.slug || brand.id}`}
      className="flex flex-col items-center group"
    >
      <div
        className={`w-full aspect-square rounded-xl flex items-center justify-center mb-1.5 overflow-hidden border border-transparent transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md ${
          featured
            ? "bg-gradient-to-br from-primary/10 to-accent/10 ring-1 ring-primary/20"
            : "bg-secondary/70 group-hover:border-accent/30"
        }`}
      >
        <BrandLogo
          brandName={brand.brand_name}
          slug={brand.slug}
          logoUrl={brand.logo_url}
          emoji={brand.logo_emoji}
          className="h-full w-full"
          imgClassName="h-full w-full p-1.5 sm:p-2"
        />
      </div>
      <p className="text-[10px] sm:text-xs font-medium text-center leading-tight line-clamp-2 group-hover:text-primary transition-colors">
        {brand.brand_name}
      </p>
      {brand.country && (
        <p className="hidden sm:block text-[10px] text-muted-foreground mt-0.5 truncate max-w-full">
          {brand.country_flag_url ? (
            <img src={brand.country_flag_url} alt="" width={16} height={11} loading="lazy" decoding="async" className="inline-block mr-1 h-2.5 w-4 object-cover align-[-1px]" />
          ) : brand.country_flag ? (
            <span className="mr-1" aria-hidden="true">{brand.country_flag}</span>
          ) : null}
          {brand.country}
        </p>
      )}
    </Link>
  </motion.div>
);

export default Brands;
