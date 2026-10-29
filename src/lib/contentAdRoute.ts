import { CITY_SLUGS } from "@/lib/locations";

export const hasContentAds = (pathname: string) => {
  if (pathname === "/" || CITY_SLUGS.includes(pathname.slice(1))) return false;
  return /^\/(?:guide|cocktails|cocktail|brands|brand|categories|category|product|wine-universe|masterclass)(?:\/|$)/.test(pathname) ||
    /^\/[^/]+\/(?:category|product|brand|wine-universe)(?:\/|$)/.test(pathname);
};
