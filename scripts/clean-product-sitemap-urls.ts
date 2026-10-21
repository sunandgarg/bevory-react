import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { buildProductRoutes, publicProductPath } from "../src/lib/productRoutes.js";

// Stage a URL-only rewrite. Never overwrite the source sitemaps or change dates,
// images, page eligibility, file names, or the number of URLs in each shard.
const [source, output, productIndexFile] = process.argv.slice(2);
if (!source || !output || !productIndexFile || path.resolve(source) === path.resolve(output)) {
  throw new Error("Usage: clean-product-sitemap-urls <source-public-dir> <new-output-dir> <product-index.json>");
}
const index = JSON.parse(await readFile(productIndexFile, "utf8")) as {
  products: Record<string, unknown>; aliases?: Record<string, string>;
};
const routes = buildProductRoutes([
  ...Object.keys(index.products).map(slug => ({ slug })),
  ...Object.entries(index.aliases || {}).map(([slug, canonical_slug]) => ({ slug, canonical_slug, is_active: false })),
]);
await mkdir(output); // Refuse to overwrite an existing deployment or staging directory.
await mkdir(path.join(output, "sitemaps"));
const files = ["sitemap.xml", ...(await readdir(path.join(source, "sitemaps")))
  .filter(name => name.endsWith(".xml")).map(name => `sitemaps/${name}`)];
let changed = 0;
let total = 0;
const allUrls = new Set<string>();
for (const file of files) {
  const xml = await readFile(path.join(source, file), "utf8");
  const isIndex = xml.includes("<sitemapindex");
  let count = 0;
  const rewritten = xml.replace(/<loc>(https:\/\/bevory\.in\/[^<]*)<\/loc>/g, (_match, url: string) => {
    const canonical = publicProductPath(url, routes);
    if (canonical !== url) changed++;
    if (!isIndex) {
      count++;
      if (allUrls.has(canonical)) throw new Error(`Duplicate sitemap URL: ${canonical}`);
      allUrls.add(canonical);
    }
    return `<loc>${canonical}</loc>`;
  });
  if (count > 3000) throw new Error(`${file} exceeds the 3,000-URL limit`);
  total += count;
  await writeFile(path.join(output, file), rewritten, { flag: "wx" });
}
console.log(JSON.stringify({ files: files.length, urls: total, changed, duplicates: 0, output }));
