const LIVCHEERS_BRAND_LOGO_BASE = "https://static.livcheers.com/static/content/images/brand";

const LIGHT_MARK_ASSETS = new Set([
  "https://fourpillarsgin.com/cdn/shop/files/logo-full.svg",
  "https://www.agavalestequila.com/image/6795185.1610451419000/Agavales_white.png",
  "https://armanddebrignac.com/wp-content/uploads/2026/02/Secondary-Logo.svg",
  "https://argentowine.com/wp-content/themes/argento-2012/images/logo.png",
  "https://www.kilchomandistillery.com/wp-content/uploads/2018/04/logo.svg",
  "https://static.wixstatic.com/media/212f39_3181f693f440415c8e90914e1032e1d4~mv2.png/v1/fit/w_600,h_300,q_90/BEEYOUNG.png",
  "https://www.pernod-ricard.com/sites/default/files/2021-04/brand-ricard-logo-600px.png",
  "https://ricasoli.com/wp-content/uploads/2018/03/IST_RICASOLI_NEW__bianco.png",
  "https://www.beronia.com/sites/default/files/styles/logo_header/public/2021-07/logotipo-beronia-blanco.png?itok=9GpuOZfr",
  "https://09ec060a.delivery.rocketcdn.me/wp-content/uploads/elementor/thumbs/AN00197-KWV-CORPORATE-website-2021-FA_logo-white-pjh3rr7knofctmq1rn4azrwg4h391cqp2mvnyeiku8.png",
  "https://www.maestrodobel.com/cdn/shop/files/dobel-logo-white.svg?v=1746629111&width=600",
  "https://www.datocms-assets.com/33016/1779794982-logo_white.svg",
  "https://www.champagnepommery.com/build/images/logo-white2.6013fb44.svg",
  "https://www.michelechiarlo.it/wp-content/themes/barriotheme/img/logo-michele-chiarlo-bianco.png",
  "https://www.champagne-geoffroy.com/wp-content/uploads/2025/07/LOGO-CHAMPAGNE-GEOFFROY-01.svg",
  "https://kilikanoon.com.au/cdn/shop/files/KILIKANOON_BRAND_LOCK-UPS_FA2-13_1.svg?crop=center&height=126&v=1762961911",
  "https://loveblockwine.com/wp-content/uploads/logo.svg",
  "https://nemiroff.vodka/wp-content/uploads/2024/03/logo.svg",
  "https://olddurbar.com/wp-content/themes/starter/imagio_s/img/logo/old_durbar_logo-1.svg",
  "https://ouzo.plomari-media.gr/wp-content/uploads/2026/07/WHITE-TRANSlogo_final-30-11-20_OUT_ENG-21.png",
  "https://querciabella.com/wp-content/themes/querciabella-theme/img/logo-full.svg",
  "https://sthugo.com/cdn/shop/files/small_logo.png",
  "https://strangenaturegin.com/cdn/shop/files/Strange_Nature_Full_Logo_White.png",
  "https://www.taylorswines.com.au/cdn/shop/files/taylors-logo-dark.svg",
  "https://torbreck.com/cdn/shop/files/torbreck-logo-white.png",
  "https://www.torres.es/themes/custom/torres_theme/logo.png",
]);

export const brandLogoNeedsDarkSurface = (source?: string | null) => Boolean(source && LIGHT_MARK_ASSETS.has(source));

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
}) => {
  const normalized = slugifyBrand(slug) || slugifyBrand(brandName);
  const knownFallback = normalized ? LIVCHEERS_BRAND_LOGO_OVERRIDES[normalized] : null;
  return Array.from(new Set([logoUrl, knownFallback].filter((source): source is string => Boolean(source))));
};
