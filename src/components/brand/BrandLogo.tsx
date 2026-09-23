import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { getBrandLogoSources } from "@/lib/brandAssets";

interface BrandLogoProps {
  brandName: string;
  slug?: string | null;
  logoUrl?: string | null;
  emoji?: string | null;
  className?: string;
  imgClassName?: string;
  alt?: string;
  loading?: "eager" | "lazy";
}

const BrandLogo = ({
  brandName,
  slug,
  logoUrl,
  emoji,
  className,
  imgClassName,
  alt,
  loading = "lazy",
}: BrandLogoProps) => {
  const sources = useMemo(
    () => getBrandLogoSources({ logoUrl, slug, brandName }),
    [brandName, logoUrl, slug],
  );
  const [sourceIndex, setSourceIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setSourceIndex(0);
    setFailed(false);
  }, [sources]);

  if (failed || sources.length === 0) {
    return (
      <span className={cn("inline-flex items-center justify-center", className)} aria-label={`${brandName} logo`}>
        {emoji || "🏷️"}
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center justify-center", className)}>
      <img
        src={sources[sourceIndex]}
        alt={alt || `${brandName} logo`}
        loading={loading}
        decoding="async"
        className={cn("block object-contain", imgClassName)}
        onError={() => {
          if (sourceIndex < sources.length - 1) {
            setSourceIndex((current) => current + 1);
          } else {
            setFailed(true);
          }
        }}
      />
    </span>
  );
};

export default BrandLogo;
