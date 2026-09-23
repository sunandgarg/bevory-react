import { memo, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Transparent, brand-neutral bottle cutouts. Keeping the background in the
// parent card lets every surface use its own colour without a visible image box.
const CATEGORY_VISUALS: Record<string, string> = {
  gin: "/category-cutouts/gin.png",
  rum: "/category-cutouts/rum.png",
  champagne: "/category-cutouts/champagne.png",
  vodka: "/category-cutouts/vodka.png",
  "single-malts": "/category-cutouts/single-malts.png",
  "world-whisky": "/category-cutouts/world-whisky.png",
  "made-in-india-whisky": "/category-cutouts/made-in-india-whisky.png",
  "ready-to-drink": "/category-cutouts/ready-to-drink.png",
  "sparkling-wine": "/category-cutouts/sparkling-wine.png",
  beers: "/category-cutouts/beers.png",
  sake: "/category-cutouts/sake.png",
  "rose-wine": "/category-cutouts/rose-wine.png",
  liqueurs: "/category-cutouts/liqueurs.png",
  "red-wine": "/category-cutouts/red-wine.png",
  "blended-scotch": "/category-cutouts/blended-scotch.png",
  "white-wine": "/category-cutouts/white-wine.png",
  brandy: "/category-cutouts/brandy.png",
  tequila: "/category-cutouts/tequila.png",
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
      className={cn("relative flex aspect-square min-h-0 min-w-0 items-center justify-center overflow-hidden", className)}
    >
      {src && !failed ? (
        <img
          src={src}
          alt=""
          aria-hidden="true"
          draggable={false}
          width={640}
          height={640}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          onError={() => setFailed(true)}
          className="block h-full w-full select-none object-contain object-center drop-shadow-[0_8px_12px_rgba(15,23,42,0.14)]"
        />
      ) : (
        <NeutralBottle />
      )}
    </div>
  );
});

CategoryBottleVisual.displayName = "CategoryBottleVisual";

export default CategoryBottleVisual;
