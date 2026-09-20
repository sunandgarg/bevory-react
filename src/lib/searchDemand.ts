import { CITY_SLUGS } from "./locations";

const ALIASES: Array<[RegExp, string]> = [
  [/\bwhiskey\b/g, "whisky"],
  [/\bjohnny\b/g, "johnnie"],
  [/\b(?:macdol|megdol|mc\s*dowells?)\b/g, "mcdowell"],
  [/\b(?:casberg|carlsburg)\b/g, "carlsberg"],
  [/\bbear\b/g, "beer"],
  [/\bmagic\s+moment\b/g, "magic moments"],
  [/\bofficer\s+choice\b/g, "officers choice"],
  [/\ball\s+seasons?\s+sartaj\b/g, "all season sir e taj"],
];

const GENERIC_TERMS = new Set([
  "alcohol", "bottle", "cost", "drink", "india", "near", "price", "prices",
  "rate", "rates", "the", "in", "of", "me",
  ...CITY_SLUGS.flatMap((city) => city.split("-")),
]);

export type SearchIntent = {
  text: string;
  terms: string[];
  volumeMl: number | null;
  lookupTerm: string;
};

export const parseSearchIntent = (value: string): SearchIntent => {
  let normalized = value.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9.]+/g, " ");
  for (const [pattern, replacement] of ALIASES) normalized = normalized.replace(pattern, replacement);

  const volumeMatch = normalized.match(/\b(\d{2,4})\s*(?:ml|millilit(?:er|re)s?)\b/);
  const volumeMl = volumeMatch ? Number(volumeMatch[1]) : null;
  const terms = normalized
    .replace(/\b\d{2,4}\s*(?:ml|millilit(?:er|re)s?)\b/g, " ")
    .split(/\s+/)
    .filter((term) => term && !GENERIC_TERMS.has(term));
  const uniqueTerms = [...new Set(terms)];
  const lookupTerm = [...uniqueTerms]
    .filter((term) => !["whisky", "vodka", "beer", "rum", "gin", "brandy"].includes(term))
    .sort((left, right) => right.length - left.length)[0]
    || uniqueTerms.sort((left, right) => right.length - left.length)[0]
    || "";

  return {
    text: uniqueTerms.join(" "),
    terms: uniqueTerms,
    volumeMl,
    lookupTerm,
  };
};

export const productMatchesIntent = (
  product: {
    brand?: string | null;
    name?: string | null;
    category?: { name?: string | null } | null;
    available_volumes_ml?: number[] | null;
  },
  intent: SearchIntent,
) => {
  const haystack = `${product.brand || ""} ${product.name || ""} ${product.category?.name || ""}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ");
  if (!intent.terms.every((term) => haystack.includes(term))) return false;
  return intent.volumeMl == null || (product.available_volumes_ml ?? []).includes(intent.volumeMl);
};

export const SEARCH_SUGGESTIONS = [
  "All Season whisky",
  "Singleton whisky",
  "McDowell No. 1 180ml",
  "Royal Challenge whisky",
  "Tuborg beer",
  "Magic Moments vodka",
] as const;

export const SEARCH_DEMAND_LINKS = [
  { label: "Whisky prices in Gurgaon", to: "/guide/whisky-price-in-gurgaon-2026" },
  { label: "Vodka prices in Mumbai", to: "/guide/vodka-price-in-mumbai-2026" },
  { label: "Peter Scot", to: "/gurgaon/brand/peter-scot" },
  { label: "Champagne prices", to: "/gurgaon/category/champagne" },
  { label: "Magic Moments", to: "/gurgaon/brand/magic-moments" },
  { label: "Breezer flavours", to: "/guide/breezer-flavours-in-india" },
] as const;
