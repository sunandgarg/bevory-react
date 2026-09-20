const DEFAULT_SITE_ORIGIN = "https://bevory.in";
export const DEFAULT_PUBLIC_MEDIA_BASE = `${DEFAULT_SITE_ORIGIN}/media`;

export const parsePublicMediaBase = (value: string): string | null => {
  try {
    const url = new URL(value);
    const pathname = url.pathname.replace(/\/+$/, "");
    if (
      url.protocol !== "https:"
      || url.username
      || url.password
      || url.search
      || url.hash
      || pathname !== "/media"
    ) return null;
    return `${url.origin}${pathname}`;
  } catch {
    return null;
  }
};

export const validSitemapImageUrl = (
  value: unknown,
  publicMediaBase = DEFAULT_PUBLIC_MEDIA_BASE,
  siteOrigin = DEFAULT_SITE_ORIGIN,
): string | null => {
  if (typeof value !== "string" || !value.trim()) return null;
  const base = parsePublicMediaBase(publicMediaBase);
  if (!base) return null;

  try {
    if (value.trim().startsWith("//") || value.includes("\\")) return null;
    const url = new URL(value.trim(), `${siteOrigin}/`);
    const baseUrl = new URL(base);
    if (
      url.protocol !== "https:"
      || url.origin !== baseUrl.origin
      || url.username
      || url.password
      || url.search
      || url.hash
      || !url.pathname.startsWith(`${baseUrl.pathname}/`)
    ) return null;
    return url.toString();
  } catch {
    return null;
  }
};
