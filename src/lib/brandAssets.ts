const LIGHT_MARK_ASSETS = new Set<string>();

export const brandLogoNeedsDarkSurface = (source?: string | null) => Boolean(source && LIGHT_MARK_ASSETS.has(source));

const BRAND_SLUG_ALIASES: Record<string, string> = {
  "dewar-s": "dewars",
  "glenfiddich-single-malt-scotch": "glenfiddich",
  "jack-daniels-tennessee-whiskey": "jack-daniels",
  "jager-meister": "jagermeister",
  "jim-beam-bourbon": "jim-beam",
  "mcdowell-s-no-1": "mcdowells-no-1",
  "officer-s-choice": "officers-choice",
  "royal-green-whisky": "royal-green",
  "royal-green-whiskey": "royal-green",
};

const slugifyBrand = (value: string | null | undefined) => {
  const normalized = value
    ?.trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  if (!normalized || /^[0-9a-f]{8}-[0-9a-f-]{27,}$/i.test(normalized)) return null;
  return BRAND_SLUG_ALIASES[normalized] || normalized;
};

export const isFirstPartyImageSource = (source: string) => {
  if (source.startsWith("/")) return true;
  try {
    const host = new URL(source).hostname.toLowerCase();
    return host === "bevory.in" || host === "www.bevory.in" || host === "api.bevory.in";
  } catch {
    return false;
  }
};

export const getBrandLogoSources = ({
  logoUrl,
}: {
  logoUrl?: string | null;
  slug?: string | null;
  brandName?: string | null;
}) => {
  return Array.from(
    new Set([logoUrl].filter((source): source is string => typeof source === "string" && isFirstPartyImageSource(source))),
  );
};
