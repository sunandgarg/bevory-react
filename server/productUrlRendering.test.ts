import { afterEach, describe, expect, it } from "vitest";
import { mkdtemp, mkdir, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { createLegacyRedirectResolver, createSeoRenderer } from "./seo.js";

const directories: string[] = [];
afterEach(async () => {
  await Promise.all(directories.splice(0).map(directory => rm(directory, { recursive: true, force: true })));
});

describe("product URL compatibility at the origin", () => {
  it("redirects old links once and renders the clean 750ml URL with identical price and editorial", async () => {
    const directory = await mkdtemp(path.join(tmpdir(), "bevory-product-url-test-"));
    directories.push(directory);
    await mkdir(path.join(directory, "seo-routes"));
    await writeFile(path.join(directory, "index.html"), '<html><head><title>Default</title><link rel="canonical" href="https://bevory.in/" /></head><body><div id="root"></div><script src="/app.js"></script></body></html>');
    await writeFile(path.join(directory, "seo-routes/product-index.json"), JSON.stringify({
      products: { "johnnie-walker-red-label-721d6b0": { name: "Red Label", brand: "Johnnie Walker", description: "Blended Scotch", volumes: ["750ml"], prices: { pune: { "750ml": 1900 } } } }, brandsById: {},
    }));
    const redirect = createLegacyRedirectResolver(directory);
    const clean = "/pune/product/johnnie-walker-red-label/750ml";
    expect(await redirect("/pune/product/johnnie-walker-red-label-721d6b0/750ml")).toBe(clean);
    expect(await redirect(clean)).toBeNull();
    const render = createSeoRenderer(directory);
    const page = await render(clean);
    expect(page.statusCode).toBe(200);
    expect(page.html).toContain(`href="https://bevory.in${clean}"`);
    expect(page.html).toContain("1,900");
    expect(page.html).toContain("Johnnie Walker");
    expect((await render("/pune/product/johnnie-walker-red-label/999ml")).statusCode).toBe(404);
    expect((await render("/pune/product/unknown/750ml")).statusCode).toBe(404);
  });
});
