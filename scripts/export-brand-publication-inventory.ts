import { writeFile } from "node:fs/promises";
import { isDeepStrictEqual } from "node:util";
import { BRAND_EXPANSION, buildBrandExpansionData } from "../src/lib/brandExpansion.js";
import { publicBrandFields } from "./brand-editorial-audit-lib.js";

type LiveBrand = Record<string, unknown> & { brand_name: string; slug: string; content_version?: string };
const fields = ["brand_name", "slug", "content_version", ...publicBrandFields];
const response = await fetch("https://bevory.in/api/query", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({ table: "brand_spotlights", operation: "select", select: fields.join(",") }),
});
if (!response.ok) throw new Error(`Live brand query returned HTTP ${response.status}`);
const payload = await response.json() as { data?: LiveBrand[]; count?: number; error?: unknown };
if (payload.error || !Array.isArray(payload.data) || payload.count !== payload.data.length) {
  throw new Error("Live brand query was incomplete");
}
const liveBySlug = new Map(payload.data.map((brand) => [brand.slug, brand]));
if (liveBySlug.size !== payload.data.length) throw new Error("Duplicate live brand slug");
const localBySlug = new Map(BRAND_EXPANSION.map((brand) => [brand.slug, brand]));
if (localBySlug.size !== BRAND_EXPANSION.length) throw new Error("Duplicate authored brand slug");
const authored = BRAND_EXPANSION.map((definition) => {
  const live = liveBySlug.get(definition.slug);
  if (!live) throw new Error(`Authored brand missing from live catalogue: ${definition.slug}`);
  const local = buildBrandExpansionData(definition);
  const current = live.content_version === local.content_version
    && publicBrandFields.every((field) => isDeepStrictEqual(live[field], local[field]));
  return { name: definition.brandName, current };
});
const outstanding = payload.data.filter((brand) => !localBySlug.has(brand.slug));
const sortNames = (names: string[]) => names.sort((a, b) => a.localeCompare(b));
const pending = authored.filter((brand) => !brand.current);
const current = authored.filter((brand) => brand.current);
const report = [
  `BevOry brand inventory captured ${new Date().toISOString()} from the public production catalogue.`,
  `Catalogue rows: ${payload.data.length}. Locally authored: ${authored.length}. Exact public copy currently live: ${current.length}. Authored but live differs: ${pending.length}. Not locally authored: ${outstanding.length}.`,
  "These are catalogue rows, not deduplicated corporate identities. Authored means a guide exists in source, not that every fact or logo has completed final review.",
  "",
  `Done in source (${authored.length}; comma-separated):`,
  sortNames(authored.map((brand) => brand.name)).join(", "),
  "",
  `Of those, awaiting production sync (${pending.length}; comma-separated):`,
  sortNames(pending.map((brand) => brand.name)).join(", "),
  "",
  `Left to author (${outstanding.length}; comma-separated):`,
  sortNames(outstanding.map((brand) => brand.brand_name)).join(", "),
  "",
].join("\n");
const output = "docs/editorial/brand-publication-inventory-latest.txt";
await writeFile(output, report);
console.log(JSON.stringify({ output, catalogueRows: payload.data.length, authored: authored.length, liveCurrent: current.length, pending: pending.length, remaining: outstanding.length }));
