import { memo, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { apiClient } from "@/integrations/api/client";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "@/hooks/useLocation";
import { citySlugFromName } from "@/lib/locations";
import { youtubeEmbedUrl } from "@/lib/youtube";
import BrandLogo from "@/components/brand/BrandLogo";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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
  story_image_url: string | null;
  youtube_url: string | null;
  video_format: "video" | "short" | null;
}

// The order mirrors the high-recognition brands users expect to see first,
// while the API remains the source of truth for which brands are published.
const BRAND_PRIORITY = [
  "glenfiddich",
  "royal green",
  "jagermeister",
  "jägermeister",
  "jack daniel's",
  "jack daniels",
  "jim beam",
  "dewars",
  "dewar's",
  "bira",
  "dalmore",
  "grover",
  "teacher's",
  "teachers",
  "black dog",
  "monkey shoulder",
  "johnnie walker",
  "oaksmith",
  "breezer",
  "paul john",
  "belvedere",
  "sula",
  "woodnote",
  "budweiser",
] as const;

const normalizeBrandName = (name: string) => name.toLowerCase().replace(/[’']/g, "'").trim();
const priorityRank = (name: string) => BRAND_PRIORITY.indexOf(normalizeBrandName(name) as typeof BRAND_PRIORITY[number]);

interface BrandSpotlightProps {
  variant?: "carousel" | "grid";
  limit?: number;
}

const fetchBrands = async (): Promise<BrandSpotlightItem[]> => {
  const { data, error } = await apiClient
    .from("brand_spotlights")
    .select("id, brand_name, slug, logo_emoji, logo_url, description, country_flag, country_flag_url, featured_product_id, link_url, is_active, show_in_spotlight, order_index, story_image_url, youtube_url, video_format")
    .eq("is_active", true)
    .order("order_index");
  if (error) throw error;
  return (data || []).filter((brand) => brand.show_in_spotlight || priorityRank(brand.brand_name) >= 0).sort((left, right) => {
    const leftName = normalizeBrandName(left.brand_name);
    const rightName = normalizeBrandName(right.brand_name);
    const leftRank = priorityRank(leftName);
    const rightRank = priorityRank(rightName);
    const normalizedLeftRank = leftRank < 0 ? Number.MAX_SAFE_INTEGER : leftRank;
    const normalizedRightRank = rightRank < 0 ? Number.MAX_SAFE_INTEGER : rightRank;
    return normalizedLeftRank - normalizedRightRank
      || Number(left.order_index ?? 0) - Number(right.order_index ?? 0)
      || leftName.localeCompare(rightName);
  });
};

const BrandSpotlight = memo(({ variant = "carousel", limit }: BrandSpotlightProps) => {
  const { selectedCity } = useLocation();
  const citySlug = citySlugFromName(selectedCity?.name) || "gurgaon";
  const { data: brands = [], isLoading } = useQuery({
    queryKey: ["brand-spotlights"],
    queryFn: fetchBrands,
    staleTime: 10 * 60 * 1000,
  });
  const [selectedStory, setSelectedStory] = useState<BrandSpotlightItem | null>(null);
  const selectedEmbed = useMemo(() => youtubeEmbedUrl(selectedStory?.youtube_url), [selectedStory?.youtube_url]);

  if (isLoading) {
    return (
      <section className={variant === "carousel" ? "px-4" : ""}>
        <Skeleton className="h-5 w-32 mb-3" />
        <div className={variant === "grid" ? "grid grid-cols-4 gap-2 sm:gap-3" : "flex gap-2.5 overflow-x-auto"}>
          {[1, 2, 3, 4, 5, 6, 7, 8].slice(0, variant === "grid" ? 8 : 6).map((i) => (
            <Skeleton key={i} className={variant === "grid" ? "aspect-square rounded-2xl" : "h-[68px] w-[68px] flex-shrink-0 rounded-2xl"} />
          ))}
        </div>
      </section>
    );
  }

  if (brands.length === 0) return null;

  const visibleBrands = brands.slice(0, limit ?? (variant === "grid" ? 8 : 20));

  return (
    <section className={variant === "carousel" ? "px-4" : ""} aria-label="Featured Brand Spotlight">
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

      {variant === "grid" ? (
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {visibleBrands.map((brand) => (
            <Link
              key={brand.id}
              to={`/${citySlug}/brand/${brand.slug || brand.id}`}
              className="group min-w-0"
            >
              <div className="aspect-square overflow-hidden rounded-2xl border border-border/70 bg-card p-2 shadow-sm transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-accent/50 group-hover:shadow-md sm:p-4">
                <BrandLogo
                  brandName={brand.brand_name}
                  slug={brand.slug}
                  logoUrl={brand.logo_url}
                  emoji={brand.logo_emoji}
                  className="h-full w-full rounded-xl bg-transparent"
                  imgClassName="h-full w-full rounded-xl object-contain"
                />
              </div>
              <p className="mt-1.5 truncate text-center text-xs font-medium text-foreground sm:text-sm">
                {brand.brand_name}
              </p>
            </Link>
          ))}
        </div>
      ) : (
      <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
        {visibleBrands.map((brand) => {
          const hasStory = Boolean(youtubeEmbedUrl(brand.youtube_url));
          const visual = (
            <>
              <div className={`relative mx-auto h-[78px] w-[78px] rounded-full p-[3px] transition-transform duration-200 group-hover:-translate-y-0.5 ${hasStory ? "bg-gradient-to-br from-accent via-primary to-accent" : "bg-border"}`}>
                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-card p-1.5">
                  {brand.story_image_url ? (
                    <img src={brand.story_image_url} alt={`${brand.brand_name} spotlight`} width={144} height={144} loading="lazy" decoding="async" className="h-full w-full rounded-full object-cover" />
                  ) : (
                    <BrandLogo
                      brandName={brand.brand_name}
                      slug={brand.slug}
                      logoUrl={brand.logo_url}
                      emoji={brand.logo_emoji}
                      className="h-full w-full rounded-full"
                      imgClassName="h-full w-full rounded-full"
                    />
                  )}
                </div>
                {hasStory && (
                  <span className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-accent text-accent-foreground shadow-sm">
                    <Play className="h-3 w-3 fill-current" />
                  </span>
                )}
              </div>
              <p className="mt-1.5 w-[86px] truncate text-center text-[11px] font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                {brand.brand_name}
              </p>
            </>
          );

          return hasStory ? (
            <button key={brand.id} type="button" onClick={() => setSelectedStory(brand)} className="group w-[86px] shrink-0 snap-start" aria-label={`Watch ${brand.brand_name} ${brand.video_format === "short" ? "short" : "video"}`}>
              {visual}
            </button>
          ) : (
            <Link key={brand.id} to={`/${citySlug}/brand/${brand.slug || brand.id}`} className="group w-[86px] shrink-0 snap-start">
              {visual}
            </Link>
          );
        })}
      </div>
      )}

      {variant === "carousel" && <Dialog open={Boolean(selectedStory && selectedEmbed)} onOpenChange={(open) => !open && setSelectedStory(null)}>
        <DialogContent className="w-[calc(100vw-24px)] max-w-3xl border-0 bg-black p-3 text-white sm:p-4">
          <DialogHeader className="pr-8 text-left">
            <DialogTitle>{selectedStory?.brand_name}</DialogTitle>
            <DialogDescription className="text-white/60">
              {selectedStory?.video_format === "short" ? "YouTube Short" : "Brand video"}
            </DialogDescription>
          </DialogHeader>
          {selectedEmbed && (
            <div className={selectedStory?.video_format === "short" ? "mx-auto aspect-[9/16] max-h-[72vh] w-full max-w-[405px]" : "aspect-video w-full"}>
              <iframe
                src={selectedEmbed}
                title={`${selectedStory?.brand_name || "Brand"} ${selectedStory?.video_format === "short" ? "short" : "video"}`}
                className="h-full w-full rounded-xl"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>}
    </section>
  );
});

BrandSpotlight.displayName = "BrandSpotlight";
export default BrandSpotlight;
