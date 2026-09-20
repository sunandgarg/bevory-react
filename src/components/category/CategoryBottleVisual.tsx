import { memo, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Original, brand-neutral 4K masters delivered from private S3 through BevOry's
// same-origin media route. Filenames are content-addressed for immutable caching.
const CATEGORY_VISUALS: Record<string, string> = {
  gin: "/media/migrated-images/category-visuals/gin/8b34333b4324e8031e08.jpg",
  rum: "/media/migrated-images/category-visuals/rum/0882256c6c7d4746b1fb.jpg",
  champagne: "/media/migrated-images/category-visuals/champagne/63cd6282580ece4fbf7e.jpg",
  vodka: "/media/migrated-images/category-visuals/vodka/0efb4033135d2304a1df.jpg",
  "single-malts": "/media/migrated-images/category-visuals/single-malts/01f7bddd90553af6d049.jpg",
  "world-whisky": "/media/migrated-images/category-visuals/world-whisky/9cb61dcb2b77d74555be.jpg",
  "made-in-india-whisky": "/media/migrated-images/category-visuals/made-in-india-whisky/5aa5024ff29d768993e1.jpg",
  "ready-to-drink": "/media/migrated-images/category-visuals/ready-to-drink/69818a87be91abc53ea5.jpg",
  "sparkling-wine": "/media/migrated-images/category-visuals/sparkling-wine/bfeac81c63fcd8406d69.jpg",
  beers: "/media/migrated-images/category-visuals/beers/33e3b55dcc99cac17447.jpg",
  sake: "/media/migrated-images/category-visuals/sake/bd8ae2eabcd9111873c4.jpg",
  "rose-wine": "/media/migrated-images/category-visuals/rose-wine/7243f263958f1d79f86a.jpg",
  liqueurs: "/media/migrated-images/category-visuals/liqueurs/1df7bfb518e8f61c31e4.jpg",
  "red-wine": "/media/migrated-images/category-visuals/red-wine/b1d353ec8257817540ea.jpg",
  "blended-scotch": "/media/migrated-images/category-visuals/blended-scotch/22ee74b795e0fb1b2b87.jpg",
  "white-wine": "/media/migrated-images/category-visuals/white-wine/0bcc267bff6ff4a45542.jpg",
  brandy: "/media/migrated-images/category-visuals/brandy/96db4cb099d990536d95.jpg",
  tequila: "/media/migrated-images/category-visuals/tequila/562396fd30ab6bb3d30a.jpg",
};

interface CategoryBottleVisualProps {
  slug: string;
  categoryName: string;
  className?: string;
  priority?: boolean;
}

const NeutralBottle = () => (
  <svg viewBox="0 0 64 96" className="h-[82%] w-[62%] text-muted-foreground/70" aria-hidden="true">
    <path
      d="M25 4h14v17c0 5 3 8 8 13 5 5 7 11 7 18v31c0 6-4 9-10 9H20c-6 0-10-3-10-9V52c0-7 2-13 7-18 5-5 8-8 8-13V4Z"
      fill="currentColor"
      opacity=".18"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M18 48h28v24H18z" fill="currentColor" opacity=".3" />
  </svg>
);

const CategoryBottleVisual = memo(({
  slug,
  categoryName,
  className,
  priority = false,
}: CategoryBottleVisualProps) => {
  const src = CATEGORY_VISUALS[slug];
  const [failed, setFailed] = useState(false);

  useEffect(() => setFailed(false), [src]);

  return (
    <div
      aria-hidden="true"
      data-category-visual={categoryName}
      className={cn("relative flex items-center justify-center overflow-hidden", className)}
    >
      {src && !failed ? (
        <img
          src={src}
          alt=""
          aria-hidden="true"
          draggable={false}
          width={3840}
          height={3840}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full select-none object-cover"
        />
      ) : (
        <NeutralBottle />
      )}
    </div>
  );
});

CategoryBottleVisual.displayName = "CategoryBottleVisual";

export default CategoryBottleVisual;
