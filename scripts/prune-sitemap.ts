import { mkdir, readdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const origin = "https://bevory.in";
const root = path.resolve(import.meta.dirname, "..");
const routeDirectory = path.join(root, "public", "seo-routes");
const sitemapDirectory = path.join(root, "public", "sitemaps");
const nextDirectory = path.join(root, "public", "sitemaps-next");
const normalizedName = (value: string) => value.normalize("NFKD").toLowerCase().replace(/[^a-z0-9]/g, "");

const productIndex = JSON.parse(await readFile(path.join(routeDirectory, "product-index.json"), "utf8")) as {
  products: Record<string, { brand: string; prices: Record<string, Record<string, number>> }>;
};
const pricedBrandsByCity = new Map<string, Set<string>>();
for (const product of Object.values(productIndex.products)) {
  for (const [city, prices] of Object.entries(product.prices || {})) {
    if (!Object.values(prices).some((price) => price > 0)) continue;
    if (!pricedBrandsByCity.has(city)) pricedBrandsByCity.set(city, new Set());
    pricedBrandsByCity.get(city)!.add(normalizedName(product.brand));
  }
}

const routeFiles = (await readdir(routeDirectory))
  .filter((file) => file.endsWith(".json") && file !== "product-index.json");
const indexablePaths = new Set<string>();
let skippedUnpricedBrands = 0;

for (const file of routeFiles) {
  const routes = JSON.parse(await readFile(path.join(routeDirectory, file), "utf8")) as Record<string, {
    structuredData?: { name?: string };
  }>;
  for (const [route, seo] of Object.entries(routes)) {
    const brandRoute = route.match(/^\/([^/]+)\/brand\/[^/]+$/);
    if (brandRoute) {
      const brandName = seo.structuredData?.name;
      if (!brandName) throw new Error(`Missing brand name for ${route}`);
      if (!pricedBrandsByCity.get(brandRoute[1])?.has(normalizedName(brandName))) {
        skippedUnpricedBrands += 1;
        continue;
      }
    }
    indexablePaths.add(route);
  }
}

const sitemapFiles = (await readdir(sitemapDirectory))
  .filter((file) => file.endsWith(".xml"))
  .sort((left, right) => Number(left.match(/\d+/)?.[0]) - Number(right.match(/\d+/)?.[0]));
let total = 0;
let retainedCount = 0;

await rm(nextDirectory, { recursive: true, force: true });
await mkdir(nextDirectory, { recursive: true });

const shardMetadata: Array<{ file: string; lastmod?: string }> = [];
for (const file of sitemapFiles) {
  const source = await readFile(path.join(sitemapDirectory, file), "utf8");
  let matched = 0;
  let kept = 0;
  const xml = source.replace(/  <url>\s*<loc>https:\/\/bevory\.in([^<]+)<\/loc>[\s\S]*?<\/url>\n/g, (block, route: string) => {
    matched += 1;
    if (!indexablePaths.has(route)) return "";
    kept += 1;
    return block;
  });
  if (matched !== (source.match(/<url>/g) || []).length) {
    throw new Error(`Could not parse every URL in ${file}`);
  }
  total += matched;
  retainedCount += kept;
  if (!kept) continue;
  await writeFile(path.join(nextDirectory, file), xml);
  const timestamps = [...xml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)]
    .map((match) => Date.parse(match[1]))
    .filter(Number.isFinite);
  shardMetadata.push({
    file,
    ...(timestamps.length ? { lastmod: new Date(Math.max(...timestamps)).toISOString() } : {}),
  });
}

const index = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...shardMetadata.flatMap(({ file, lastmod }) => [
    "  <sitemap>",
    `    <loc>${origin}/sitemaps/${file}</loc>`,
    ...(lastmod ? [`    <lastmod>${lastmod}</lastmod>`] : []),
    "  </sitemap>",
  ]),
  "</sitemapindex>",
  "",
].join("\n");

await rm(sitemapDirectory, { recursive: true, force: true });
await rename(nextDirectory, sitemapDirectory);
await writeFile(path.join(root, "public", "sitemap.xml"), index);

console.log(`Pruned sitemap from ${total.toLocaleString()} to ${retainedCount.toLocaleString()} indexable URLs in ${shardMetadata.length} shards (${skippedUnpricedBrands.toLocaleString()} unpriced city-brand routes excluded).`);
