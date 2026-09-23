import { mkdir, readdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const origin = "https://bevory.in";
const root = path.resolve(import.meta.dirname, "..");
const routeDirectory = path.join(root, "public", "seo-routes");
const sitemapDirectory = path.join(root, "public", "sitemaps");
const nextDirectory = path.join(root, "public", "sitemaps-next");
const shardSize = 3_000;

const routeFiles = (await readdir(routeDirectory))
  .filter((file) => file.endsWith(".json") && file !== "product-index.json");
const indexablePaths = new Set<string>();

for (const file of routeFiles) {
  const routes = JSON.parse(await readFile(path.join(routeDirectory, file), "utf8")) as Record<string, unknown>;
  Object.keys(routes).forEach((route) => indexablePaths.add(route));
}

const sitemapFiles = (await readdir(sitemapDirectory)).filter((file) => file.endsWith(".xml"));
const retainedBlocks: string[] = [];
let total = 0;

for (const file of sitemapFiles) {
  const xml = await readFile(path.join(sitemapDirectory, file), "utf8");
  for (const match of xml.matchAll(/<url>\s*<loc>https:\/\/bevory\.in([^<]+)<\/loc>[\s\S]*?<\/url>/g)) {
    total += 1;
    if (indexablePaths.has(match[1])) retainedBlocks.push(match[0]);
  }
}

await rm(nextDirectory, { recursive: true, force: true });
await mkdir(nextDirectory, { recursive: true });

const shardMetadata: Array<{ file: string; lastmod?: string }> = [];
for (let offset = 0; offset < retainedBlocks.length; offset += shardSize) {
  const blocks = retainedBlocks.slice(offset, offset + shardSize);
  const file = `catalog-${shardMetadata.length + 1}.xml`;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${blocks.map((block) => `  ${block.replace(/\n/g, "\n  ")}`).join("\n")}\n</urlset>\n`;
  await writeFile(path.join(nextDirectory, file), xml);
  const timestamps = blocks
    .flatMap((block) => [...block.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((match) => Date.parse(match[1])))
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

console.log(`Pruned sitemap from ${total.toLocaleString()} to ${retainedBlocks.length.toLocaleString()} indexable URLs in ${shardMetadata.length} shards.`);
