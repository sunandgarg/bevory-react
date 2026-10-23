import assert from "node:assert/strict";
import { copyFile, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { PrismaClient } from "@prisma/client";

const banned = /\b(?:symphony|testament|delve|nestled|embark|liquid gold|rich tapestry)\b|elevate your senses|dance on the palate|whether you['\u2019]re/i;

export async function runContentCycle(drafts, publishedAt) {
  assert.ok(!Number.isNaN(Date.parse(publishedAt)), "invalid publication time");
  assert.ok(drafts.length >= 2 && drafts.length <= 3, "cycle needs 2 or 3 posts");
  const reviewedAt = publishedAt.slice(0, 10);
  const posts = drafts.map((post) => ({
    ...post,
    cover_emoji: post.category === "News" ? "news" : "guide",
    author: "BevOry Editorial Team",
    cover_image_url: null,
    linked_product_id: null,
    linked_brand: null,
    notify_users: false,
    is_featured: post.category === "News",
    is_published: true,
    published_at: publishedAt,
    reviewed_by: "BevOry Editorial Team",
    facts_last_reviewed: reviewedAt,
  }));
  assert.equal(new Set(posts.map((post) => post.slug)).size, posts.length, "duplicate slugs");
  for (const post of posts) {
    for (const key of ["id", "title", "slug", "excerpt", "meta_title", "meta_description", "selection_note", "content"]) {
      assert.ok(typeof post[key] === "string" && post[key].trim(), `${post.slug}: missing ${key}`);
    }
    assert.ok(post.meta_title.length <= 60 && post.meta_description.length <= 155, `${post.slug}: metadata too long`);
    assert.ok(post.content.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length >= 300, `${post.slug}: under 300 words`);
    assert.ok(!banned.test([post.title, post.excerpt, post.meta_title, post.meta_description, post.content].join(" ")), `${post.slug}: banned wording`);
    assert.ok(Array.isArray(post.tags) && post.tags.length, `${post.slug}: missing tags`);
    assert.ok(Array.isArray(post.source_links) && post.source_links.length, `${post.slug}: missing sources`);
    for (const source of post.source_links) {
      assert.equal(new URL(source).protocol, "https:");
      assert.ok(post.content.includes(`href="${source}"`), `${post.slug}: source not cited`);
    }
  }

  if (process.argv.includes("--check")) {
    console.log(JSON.stringify({ validated: posts.length, slugs: posts.map((post) => post.slug) }));
    return;
  }

  if (process.argv.includes("--seo-only")) {
    const publicDir = process.env.SEO_PUBLIC_DIR || path.resolve("public");
    const contentFile = path.join(publicDir, "seo-routes/content.json");
    const shardFile = path.join(publicDir, "sitemaps/catalog-32.xml");
    const indexFile = path.join(publicDir, "sitemap.xml");
    const [contentRaw, shardRaw, indexRaw] = await Promise.all([contentFile, shardFile, indexFile].map((file) => readFile(file, "utf8")));
    const routes = JSON.parse(contentRaw);
    assert.ok(routes && typeof routes === "object" && !Array.isArray(routes));
    assert.ok((shardRaw.match(/<url>/g) || []).length + posts.length <= 3000, "sitemap shard is full");
    assert.ok(shardRaw.endsWith("</urlset>\n"), "unexpected sitemap format");
    assert.equal((indexRaw.match(/<loc>https:\/\/bevory\.in\/sitemaps\/catalog-32\.xml<\/loc>/g) || []).length, 1);
    const plainText = (html) => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
    const entries = [];
    for (const post of posts) {
      const routePath = `/guide/${post.slug}`;
      const url = `https://bevory.in${routePath}`;
      if (routes[routePath]) {
        assert.ok(shardRaw.includes(`<loc>${url}</loc>`), `${post.slug}: route exists but sitemap entry is missing`);
        continue;
      }
      assert.ok(!shardRaw.includes(`<loc>${url}</loc>`), `${post.slug}: sitemap entry exists without SEO route`);
      routes[routePath] = {
        title: post.meta_title,
        description: post.meta_description,
        heading: post.title,
        body: [post.meta_description, plainText(post.content)],
        breadcrumbs: [{ name: "Home", path: "/" }, { name: "Guide", path: "/guide" }, { name: post.title, path: routePath }],
        structuredData: {
          "@type": "Article", headline: post.title, description: post.meta_description,
          datePublished: publishedAt, dateModified: publishedAt,
          author: { "@type": "Person", name: post.author },
          publisher: { "@type": "Organization", name: "BevOry" },
          mainEntityOfPage: url,
        },
      };
      entries.push(`  <url>\n    <loc>${url}</loc>\n    <lastmod>${publishedAt}</lastmod>\n  </url>\n`);
    }
    if (entries.length) {
      const backup = path.join(process.env.SEO_BACKUP_DIR || path.dirname(publicDir), `seo-backup-${Date.now()}`);
      await Promise.all([contentFile, shardFile, indexFile].map((file, i) => copyFile(file, `${backup}-${i}`)));
      const nextIndex = indexRaw.replace(/(<loc>https:\/\/bevory\.in\/sitemaps\/catalog-32\.xml<\/loc>\s*<lastmod>)[^<]+(<\/lastmod>)/, `$1${publishedAt}$2`);
      assert.notEqual(nextIndex, indexRaw, "sitemap index was not updated");
      await writeFile(`${contentFile}.next`, `${JSON.stringify(routes)}\n`);
      await writeFile(`${shardFile}.next`, shardRaw.replace("</urlset>\n", `${entries.join("")}</urlset>\n`));
      await rename(`${contentFile}.next`, contentFile);
      await rename(`${shardFile}.next`, shardFile);
      await writeFile(indexFile, nextIndex);
    }
    console.log(JSON.stringify({ seoRoutes: posts.length, added: entries.length, slugs: posts.map((post) => post.slug) }));
    return;
  }

  const prisma = new PrismaClient();
  try {
    const keys = posts.map((post) => `blog_posts:${post.id}`);
    const previous = await prisma.contentRecord.findMany({ where: { key: { in: keys } } });
    const now = new Date().toISOString();
    await prisma.$transaction(posts.map((post) => {
      const data = { ...post, created_at: previous.find((row) => row.recordId === post.id)?.data?.created_at ?? now, updated_at: now };
      return prisma.contentRecord.upsert({
        where: { key: `blog_posts:${post.id}` },
        update: { data },
        create: { key: `blog_posts:${post.id}`, tableName: "blog_posts", recordId: post.id, data },
      });
    }));
    const saved = await prisma.contentRecord.findMany({ where: { key: { in: keys } } });
    assert.equal(saved.length, posts.length);
    for (const post of posts) {
      const data = saved.find((row) => row.recordId === post.id)?.data;
      for (const [key, value] of Object.entries(post)) assert.deepEqual(data?.[key], value, `${post.slug}: saved ${key} differs`);
    }
    console.log(JSON.stringify({ saved: saved.length, verified: saved.length, slugs: posts.map((post) => post.slug) }));
  } finally {
    await prisma.$disconnect();
  }
}
