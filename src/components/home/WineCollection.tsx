import { memo } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CategoryBottleVisual from "@/components/category/CategoryBottleVisual";
import { citySlugFromName } from "@/lib/locations";
import { useLocation } from "@/hooks/useLocation";
import type { Category } from "@/hooks/useProducts";

type WineCollectionProps = {
  categories: Category[];
};

const WINE_COLLECTION = [
  { slug: "sparkling-wine", name: "Sparkling Wine", description: "Bright, celebratory bubbles" },
  { slug: "rose-wine", name: "Rosé Wine", description: "Fresh and fruit-forward" },
  { slug: "red-wine", name: "Red Wine", description: "Rich, layered reds" },
  { slug: "white-wine", name: "White Wine", description: "Crisp and refreshing" },
] as const;

const WineCollection = memo(({ categories }: WineCollectionProps) => {
  const { selectedCity } = useLocation();
  const citySlug = citySlugFromName(selectedCity?.name) || "gurgaon";
  const categoryBySlug = new Map(categories.map((category) => [category.slug, category]));

  return (
    <section aria-labelledby="wine-collection-heading">
      <div className="mb-5 flex items-center gap-3">
        <h2 id="wine-collection-heading" className="shrink-0 text-2xl font-bold leading-tight text-foreground sm:text-3xl">
          Wine Collection
        </h2>
        <div className="h-px flex-1 bg-border" aria-hidden="true" />
        <Link
          to={`/${citySlug}/wine-universe`}
          className="inline-flex shrink-0 items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
        >
          Wine Universe <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 scrollbar-hide sm:mx-0 sm:gap-4 sm:px-0">
        {WINE_COLLECTION.map((item, index) => {
          const category = categoryBySlug.get(item.slug);
          const name = category?.name || item.name;
          const description = category?.description || item.description;

          return (
            <Link
              key={item.slug}
              to={`/${citySlug}/category/${item.slug}`}
              className="group w-[168px] shrink-0 snap-start sm:w-[210px] md:w-[220px]"
            >
              <div className="relative aspect-square overflow-hidden rounded-md border border-border/60 bg-[#f1f3f4] shadow-[var(--shadow-sm)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-accent/40 group-hover:shadow-[var(--shadow-md)]">
                <CategoryBottleVisual
                  slug={item.slug}
                  categoryName={name}
                  priority={index === 0}
                  className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent px-3 pb-2 pt-10">
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/85">
                    Explore
                  </span>
                </div>
              </div>
              <h3 className="mt-2 truncate text-sm font-semibold text-foreground sm:text-base">{name}</h3>
              <p className="mt-0.5 truncate text-xs text-muted-foreground sm:text-sm">{description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
});

WineCollection.displayName = "WineCollection";

export default WineCollection;
