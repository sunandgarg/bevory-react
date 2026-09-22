import { memo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { apiClient } from "@/integrations/api/client";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "@/hooks/useLocation";
import { citySlugFromName } from "@/lib/locations";
import BrandLogo from "@/components/brand/BrandLogo";

interface BrandSpotlightItem {
  id: string;
  brand_name: string;
  slug: string | null;
  logo_emoji: string | null;
  logo_url: string | null;
  description: string | null;
  country_flag: string | null;
  country_flag_url: string | null;
  featured_product_id: string | null;
  link_url: string | null;
  is_active: boolean;
  show_in_spotlight: boolean | null;
  order_index: number | null;
}

// The order mirrors the high-recognition brands users expect to see first,
// while the API remains the source of truth for which brands are published.
const BRAND_PRIORITY = [
  "glenfiddich",
  "jagermeister",
  "jägermeister",
  "jim beam",
  "royal green",
  "jack daniel's",
  "jack daniels",
  "dewars",
  "dewar's",
  "bombay sapphire",
  "blenders pride",
  "kingfisher",
  "sula",
] as const;

const normalizeBrandName = (name: string) => name.toLowerCase().replace(/[’']/g, "'").trim();

const fetchBrands = async (): Promise<BrandSpotlightItem[]> => {
  const { data, error } = await apiClient
    .from("brand_spotlights")
    .select("id, brand_name, slug, logo_emoji, logo_url, description, country_flag, country_flag_url, featured_product_id, link_url, is_active, show_in_spotlight, order_index")
    .eq("is_active", true)
    .eq("show_in_spotlight", true)
    .order("order_index");
  if (error) throw error;
  return (data || []).sort((left, right) => {
    const leftName = normalizeBrandName(left.brand_name);
    const rightName = normalizeBrandName(right.brand_name);
    const leftRank = BRAND_PRIORITY.indexOf(leftName as typeof BRAND_PRIORITY[number]);
    const rightRank = BRAND_PRIORITY.indexOf(rightName as typeof BRAND_PRIORITY[number]);
    const normalizedLeftRank = leftRank < 0 ? Number.MAX_SAFE_INTEGER : leftRank;
    const normalizedRightRank = rightRank < 0 ? Number.MAX_SAFE_INTEGER : rightRank;
    return normalizedLeftRank - normalizedRightRank
      || Number(left.order_index ?? 0) - Number(right.order_index ?? 0)
      || leftName.localeCompare(rightName);
  });
};

const BrandSpotlight = memo(() => {
  const { selectedCity } = useLocation();
  const citySlug = citySlugFromName(selectedCity?.name) || "gurgaon";
  const { data: brands = [], isLoading } = useQuery({
    queryKey: ["brand-spotlights"],
    queryFn: fetchBrands,
    staleTime: 10 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <section className="px-4">
        <Skeleton className="h-5 w-32 mb-3" />
        <div className="flex gap-2.5 overflow-x-auto">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="w-[68px] h-[68px] rounded-2xl flex-shrink-0" />
          ))}
        </div>
      </section>
    );
  }

  if (brands.length === 0) return null;

  return (
    <section className="px-4" aria-label="Featured Brand Spotlight">
      <div className="flex items-center justify-between mb-3">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <h2 className="shrink-0 text-[20px] tracking-tight text-foreground">
            Brand <span className="font-bold">Spotlight</span>
          </h2>
          <div className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>
        <Link
          to="/brands"
          className="ml-3 flex shrink-0 items-center gap-0.5 text-[11px] text-muted-foreground transition-colors hover:text-foreground"
        >
          View all <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="grid grid-rows-2 grid-flow-col auto-cols-[96px] gap-x-3 gap-y-4 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 snap-x snap-mandatory sm:auto-cols-[112px]">
        {brands.map((brand) => (
          <Link key={brand.id} to={`/${citySlug}/brand/${brand.slug || brand.id}`} className="group block w-[96px] snap-start sm:w-[112px]">
            <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-card p-2 shadow-[var(--shadow-sm)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-accent/40 group-hover:shadow-[var(--shadow-md)]">
              <BrandLogo
                brandName={brand.brand_name}
                slug={brand.slug}
                logoUrl={brand.logo_url}
                emoji={brand.logo_emoji}
                className="h-full w-full"
                imgClassName="h-full w-full"
              />
            </div>
            <p className="mt-1.5 truncate text-center text-[11px] font-medium text-muted-foreground transition-colors group-hover:text-foreground">
              {brand.brand_name}
            </p>
            {(brand.country_flag_url || brand.country_flag) && (
              <div className="flex justify-center mt-0.5" aria-label="Country of origin">
                {brand.country_flag_url ? (
                  <img src={brand.country_flag_url} alt="" width={16} height={11} loading="lazy" decoding="async" className="h-2.5 w-4 object-cover" />
                ) : (
                  <span aria-hidden="true">{brand.country_flag}</span>
                )}
              </div>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
});

BrandSpotlight.displayName = "BrandSpotlight";
export default BrandSpotlight;
