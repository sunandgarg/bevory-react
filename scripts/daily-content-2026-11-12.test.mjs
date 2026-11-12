import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import { mkdtemp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "vitest";
import { fileURLToPath } from "node:url";
import { newPosts, posts } from "./upsert-daily-content-2026-11-12.mjs";

const script = fileURLToPath(new URL("./upsert-daily-content-2026-11-12.mjs", import.meta.url));
const publishedAt = "2026-11-12T06:00:00.000Z";

test("50 unique complete guides validate without database access", () => {
  assert.equal(newPosts.length, 22);
  assert.equal(posts.length, 50);
  assert.equal(new Set(posts.map((post) => post.slug)).size, 50);
  const result = JSON.parse(execFileSync(process.execPath, [script, "--check"], {
    encoding: "utf8", env: { ...process.env, DATABASE_URL: "invalid-test-url" },
  }));
  assert.equal(result.validated, 50);
});

test("publication requires an explicit shared timestamp before any write", () => {
  const env = { ...process.env, DATABASE_URL: "invalid-test-url" };
  delete env.CONTENT_PUBLISHED_AT;
  const result = spawnSync(process.execPath, [script], { encoding: "utf8", env });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Set CONTENT_PUBLISHED_AT/);
});

test("SEO export backs up files, emits all 50 routes, and is idempotent", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "bevory-content-test-"));
  try {
    await mkdir(path.join(dir, "seo-routes"));
    await mkdir(path.join(dir, "sitemaps"));
    const files = ["seo-routes/content.json", "sitemaps/catalog-32.xml", "sitemap.xml"];
    const original = [
      "{}\n",
      '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n</urlset>\n',
      '<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>https://bevory.in/sitemaps/catalog-32.xml</loc><lastmod>2026-11-08T05:12:07.000Z</lastmod></sitemap></sitemapindex>\n',
    ];
    for (let i = 0; i < files.length; i++) await writeFile(path.join(dir, files[i]), original[i]);
    const run = () => JSON.parse(execFileSync(process.execPath, [script, "--seo-only"], {
      encoding: "utf8",
      env: { ...process.env, DATABASE_URL: "invalid-test-url", CONTENT_PUBLISHED_AT: publishedAt, SEO_PUBLIC_DIR: dir, SEO_BACKUP_DIR: dir },
    }));
    assert.equal(run().added, 50);
    const routes = JSON.parse(await readFile(path.join(dir, files[0]), "utf8"));
    assert.equal(Object.keys(routes).length, 50);
    const shard = await readFile(path.join(dir, files[1]), "utf8");
    for (const post of posts) {
      const url = `https://bevory.in/guide/${post.slug}`;
      const route = routes[`/guide/${post.slug}`];
      assert.equal(route.structuredData.mainEntityOfPage, url);
      assert.equal(route.structuredData.datePublished, publishedAt);
      assert.equal(route.description, post.meta_description);
      assert.equal(shard.split(`<loc>${url}</loc>`).length - 1, 1);
    }
    const backups = (await readdir(dir)).filter((name) => name.startsWith("seo-backup-"));
    assert.equal(backups.length, 3);
    for (let i = 0; i < files.length; i++) {
      assert.equal(await readFile(path.join(dir, backups.find((name) => name.endsWith(`-${i}`))), "utf8"), original[i]);
    }
    const first = await readFile(path.join(dir, files[1]), "utf8");
    assert.equal(run().added, 0);
    assert.equal(await readFile(path.join(dir, files[1]), "utf8"), first);
    assert.equal((await readdir(dir)).filter((name) => name.startsWith("seo-backup-")).length, 3);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});
