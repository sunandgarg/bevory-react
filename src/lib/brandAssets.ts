const LIVCHEERS_BRAND_LOGO_BASE = "https://static.livcheers.com/static/content/images/brand";

const LIVCHEERS_BRAND_LOGO_OVERRIDES: Record<string, string> = {
  glenfiddich: `${LIVCHEERS_BRAND_LOGO_BASE}/glenfiddich.webp`,
  "royal-green": `${LIVCHEERS_BRAND_LOGO_BASE}/royal-green.webp`,
};

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

export const getLivcheersBrandLogoUrl = (slug?: string | null, brandName?: string | null) => {
  const normalized = slugifyBrand(slug) || slugifyBrand(brandName);
  return normalized ? LIVCHEERS_BRAND_LOGO_OVERRIDES[normalized] || `${LIVCHEERS_BRAND_LOGO_BASE}/${normalized}.webp` : null;
};

export const getBrandLogoSources = ({
  logoUrl,
  slug,
  brandName,
}: {
  logoUrl?: string | null;
  slug?: string | null;
  brandName?: string | null;
}) => Array.from(new Set([logoUrl, getLivcheersBrandLogoUrl(slug, brandName)].filter((source): source is string => Boolean(source))));
