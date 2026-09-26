import { cityFromSlug } from "./locations";

export const pathForCity = (path: string, citySlug: string) => {
  const url = new URL(path, "https://bevory.in");
  const parts = url.pathname.split("/").filter(Boolean);
  if (cityFromSlug(parts[0] || "")) {
    if (parts.length === 1) return `/${url.search}${url.hash}`;
    parts[0] = citySlug;
  } else if (["product", "category", "brand", "wine-universe"].includes(parts[0])) {
    parts.unshift(citySlug);
  }
  return `/${parts.join("/")}${url.search}${url.hash}`;
};

// City, bottle-size and search-filter changes belong to the current page.
export const pageKey = (path: string) => {
  const parts = new URL(path, "https://bevory.in").pathname.split("/").filter(Boolean);
  if (cityFromSlug(parts[0] || "")) parts.shift();
  if (parts[0] === "product") return `/product/${parts[1] || ""}`;
  return `/${parts.join("/")}`;
};

export const recordPageVisit = (history: string[], path: string, action: string) => {
  if (!history.length) return [path];
  const key = pageKey(path);
  if (pageKey(history[history.length - 1]) === key) return [...history.slice(0, -1), path];
  if (action === "POP") {
    const index = history.map(pageKey).lastIndexOf(key);
    if (index >= 0) return [...history.slice(0, index), path];
  }
  if (action === "REPLACE") return [...history.slice(0, -1), path];
  return [...history, path].slice(-50);
};

export const productHeadingFromSlug = (slug: string) => slug
  .replace(/-[a-f0-9]{7}$/i, "")
  .split("-").map((word) => word ? word[0].toUpperCase() + word.slice(1) : word).join(" ");
