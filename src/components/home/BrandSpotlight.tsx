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
}

const fetchBrands = async (): Promise<BrandSpotlightItem[]> => {
  const { data, error } = await apiClient
    .from("brand_spotlights")
    .select("id, brand_name, slug, logo_emoji, logo_url, description, country_flag, country_flag_url, featured_product_id, link_url, is_active, show_in_spotlight")
    .eq("is_active", true)
    .eq("show_in_spotlight", true)
    .order("order_index");
  if (error) throw error;
  return data || [];
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
        <h2 className="text-base font-semibold">Brand Spotlight</h2>
        <Link
          to="/brands"
          className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-0.5 transition-colors"
        >
          View all <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="grid grid-rows-2 grid-flow-col auto-cols-[82px] gap-x-3 gap-y-4 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
        {brands.map((brand) => (
          <Link key={brand.id} to={`/${citySlug}/brand/${brand.slug || brand.id}`} className="group block w-[82px] snap-start">
            <div className="w-[82px] h-[82px] rounded-lg bg-secondary flex items-center justify-center text-2xl overflow-hidden border border-border/50 group-hover:border-accent/40 transition-colors">
              <BrandLogo
                brandName={brand.brand_name}
                slug={brand.slug}
                logoUrl={brand.logo_url}
                emoji={brand.logo_emoji}
                className="h-full w-full"
                imgClassName="h-full w-full"
              />
            </div>
            <p className="text-[11px] font-medium text-center text-muted-foreground group-hover:text-foreground truncate mt-1.5 transition-colors">
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
