import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { apiClient } from "@/integrations/api/client";
import { useLocation } from "@/hooks/useLocation";
import { citySlugFromName } from "@/lib/locations";
import BrandLogo from "@/components/brand/BrandLogo";

interface BrandSpotlight {
  id: string;
  brand_name: string;
  slug: string | null;
  description: string | null;
  logo_emoji: string | null;
  logo_url: string | null;
  country: string | null;
  country_flag: string | null;
  country_flag_url: string | null;
}

interface ProductBrandSpotlightProps {
  brandName: string;
}

const ProductBrandSpotlight = ({ brandName }: ProductBrandSpotlightProps) => {
  const [brand, setBrand] = useState<BrandSpotlight | null>(null);
  const { selectedCity } = useLocation();
  const citySlug = citySlugFromName(selectedCity?.name) || "gurgaon";

  useEffect(() => {
    const fetchBrand = async () => {
      const { data } = await apiClient
        .from("brand_spotlights")
        .select("*")
        .ilike("brand_name", brandName)
        .eq("is_active", true)
        .maybeSingle();

      if (data) setBrand(data);
    };
    if (brandName) fetchBrand();
  }, [brandName]);

  if (!brand) return null;

  return (
    <div>
      <h3 className="font-semibold mb-3">Brand Spotlight</h3>
      <Link to={`/${citySlug}/brand/${brand.slug || brand.id}`}>
        <div className="p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center overflow-hidden flex-shrink-0">
              <BrandLogo
                brandName={brand.brand_name}
                slug={brand.slug}
                logoUrl={brand.logo_url}
                emoji={brand.logo_emoji}
                className="h-full w-full"
                imgClassName="h-full w-full p-1"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold">{brand.brand_name}</p>
              {brand.country && (
                <p className="text-sm text-muted-foreground">
                  {brand.country_flag_url ? (
                    <img src={brand.country_flag_url} alt="" width={16} height={11} loading="lazy" decoding="async" className="inline-block mr-1 h-2.5 w-4 object-cover align-[-1px]" />
                  ) : brand.country_flag ? (
                    <span className="mr-1" aria-hidden="true">{brand.country_flag}</span>
                  ) : null}
                  {brand.country}
                </p>
              )}
              {brand.description && (
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                  {brand.description}
                </p>
              )}
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductBrandSpotlight;
