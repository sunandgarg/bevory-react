import { useState, useRef, useEffect, memo } from "react";
import { cn } from "@/lib/utils";

interface ProductImageProps {
  src: string | null;
  alt: string;
  fallbackEmoji?: string | null;
  className?: string;
  priority?: boolean;
  objectFit?: "contain" | "cover";
  width?: number;
  height?: number;
}

const ProductImage = memo(({
  src,
  alt,
  fallbackEmoji = "🍾",
  className,
  priority = false,
  objectFit = "contain",
  width = 400,
  height,
}: ProductImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority || !containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px", threshold: 0.01 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [priority]);

  if (!src || hasError) {
    return (
      <div
        ref={containerRef}
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-secondary/80 to-secondary/40 rounded-xl",
          className
        )}
      >
        <span className="text-5xl">{fallbackEmoji}</span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl",
        className
      )}
    >
      {!isLoaded && isInView && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted/50 to-muted/30" />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height || width}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          {...({ fetchpriority: priority ? "high" : "auto" } as any)}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            "absolute inset-0 m-auto block max-w-full max-h-full transition-all duration-500",
            objectFit === "contain" && "object-contain p-3",
            objectFit === "cover" && "w-full h-full object-cover",
            !isLoaded && "opacity-0 scale-95",
            isLoaded && "opacity-100 scale-100"
          )}
          style={{ objectPosition: "center center" }}
        />
      )}
    </div>
  );
});

ProductImage.displayName = "ProductImage";

export default ProductImage;
