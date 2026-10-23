import "dotenv/config";
import assert from "node:assert/strict";
import { copyFile, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { PrismaClient } from "@prisma/client";

const cycleAt = "2026-10-23T04:59:51.000Z";
const reviewedAt = "2026-10-23";

export const posts = [
  {
    id: "news-rupee-beer-diwali-campaign-us-2026",
    title: "Rupee Beer Launches a Diwali 2026 Campaign in the US",
    slug: "rupee-beer-diwali-campaign-us-2026",
    excerpt: "The Indian-inspired US beer brand has introduced a Diwali campaign centred on food and gathering. It is a marketing announcement, not an India launch.",
    cover_emoji: "news",
    category: "News",
    tags: ["Rupee Beer", "Diwali 2026", "Indian-inspired beer", "beer and Indian food", "beer news"],
    meta_title: "Rupee Beer's Diwali 2026 Campaign | BevOry",
    meta_description: "Rupee Beer has launched a Diwali-themed campaign in the US. See what was announced and why it does not confirm an India retail launch.",
    selection_note: "A fresh 21 October brand announcement with a clear India-culture connection; the article separates the US campaign from unverified Indian availability.",
    source_links: [
      "https://www.bevnet.com/pr/2026/10/21/rupee-beer-launches-light-one-pour-one-2026-diwali-campaign-celebrating-the-indian-festival-of-lights",
      "https://rupeebeer.com/about/",
      "https://rupeebeer.com/",
    ],
    content: String.raw`
<p><strong>Rupee Beer has announced a Diwali-themed campaign called "Light One. Pour One." in the United States.</strong> The 21 October announcement focuses on food, family and gatherings rather than a new beer release. It comes from an Indian-inspired brand based in the US, so readers in India should not mistake the campaign for confirmation that its beers have reached local shops.</p>

<h2>What Has Rupee Beer Announced?</h2>
<p>In its <a href="https://www.bevnet.com/pr/2026/10/21/rupee-beer-launches-light-one-pour-one-2026-diwali-campaign-celebrating-the-indian-festival-of-lights" target="_blank" rel="noopener noreferrer">company-supplied announcement</a>, Rupee Beer presents the campaign as a celebration of Diwali meals and shared occasions. Its message connects the brand's Indian-food pairing identity with a festival recognised far beyond India. This is a brand campaign: the release does not set out a new product specification, Indian launch date or India-wide retail list.</p>
<p>The company describes itself on its <a href="https://rupeebeer.com/about/" target="_blank" rel="noopener noreferrer">official about page</a> as a beer brand developed around Indian and other strongly flavoured cuisines. That positioning explains why a food-led Diwali message fits its existing identity. It does not tell a shopper which bottle will be available in a particular city.</p>

<h2>Is Rupee Beer Available in India?</h2>
<p>This announcement alone does not establish Indian retail availability. The press release names an American location and discusses a campaign, not a licensed Indian distributor, a state launch or a local price. If you encounter a claim that the campaign means Rupee Beer is now sold in Delhi, Mumbai or another Indian city, ask for a current local listing before relying on it.</p>
<p>Beer availability and prices in India are state-specific. Even a product sold overseas may need a separate importer, permissions and retail distribution before it appears at a licensed shop here. A US-facing campaign can build awareness among the Indian diaspora without changing Indian shelves.</p>

<h2>What Does This Mean for Beer Drinkers?</h2>
<p>The useful consumer distinction is between a brand story and a bottle you can actually buy. Rupee Beer's <a href="https://rupeebeer.com/" target="_blank" rel="noopener noreferrer">official website</a> describes its beer range, but a global product page is not a reliable Indian stock or MRP check. Look for the exact beer name, pack size and current city listing before comparing it with a beer sold locally.</p>
<p>If you are choosing drinks for a gathering, match the drink to the food and to guests' preferences, including non-alcoholic options. A festive advertising campaign need not dictate the menu. Drink only where lawful and appropriate, and do not drive after drinking.</p>
`.trim(),
  },
  {
    id: "guide-single-malt-vs-blended-scotch-india-2026",
    title: "Single Malt vs Blended Scotch: What Is the Difference?",
    slug: "single-malt-vs-blended-scotch-india-2026",
    excerpt: "Single malt and blended Scotch describe how a whisky is made, not a quality ranking. Read the label before comparing bottles in India.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["single malt vs blended Scotch", "Scotch whisky guide", "blended malt", "whisky labels India", "whisky buying guide"],
    meta_title: "Single Malt vs Blended Scotch | BevOry",
    meta_description: "Learn the legal difference between single malt, blended malt and blended Scotch, plus what Indian buyers should check on a whisky label.",
    selection_note: "A high-intent whisky-label comparison with primary regulatory and industry sources; it avoids unsupported brand rankings and city prices.",
    source_links: [
      "https://www.scotch-whisky.org.uk/discover-scotch/enjoying-scotch/scotch-whisky-categories/",
      "https://www.legislation.gov.uk/uksi/2009/2890/regulation/3/made",
      "https://www.scotch-whisky.org.uk/media/2387/guidance-for-bottlers-and-producers_2025.pdf",
    ],
    content: String.raw`
<p><strong>Single malt Scotch comes from one distillery and uses malted barley; blended Scotch combines at least one single malt Scotch with at least one single grain Scotch.</strong> These are production categories, not a promise that one bottle will taste better than the other. The exact blend, cask history, bottling strength and your own preferences matter more than a simple hierarchy.</p>

<h2>What Does Single Malt Mean?</h2>
<p>Under the <a href="https://www.legislation.gov.uk/uksi/2009/2890/regulation/3/made" target="_blank" rel="noopener noreferrer">Scotch Whisky Regulations</a>, single malt Scotch is made at a single distillery from water and malted barley, without other cereals, and distilled in pot stills. "Single" refers to the distillery, not to one cask or one year. A producer may combine whisky from several casks at that distillery to make one single malt expression.</p>
<p>The <a href="https://www.scotch-whisky.org.uk/discover-scotch/enjoying-scotch/scotch-whisky-categories/" target="_blank" rel="noopener noreferrer">Scotch Whisky Association</a> explains the five legal categories: single malt, single grain, blended malt, blended grain and blended Scotch. All five are Scotch if they meet the applicable rules. The association says Scotch must mature in Scotland for at least three years and be bottled at no less than 40% alcohol by volume.</p>

<h2>What Does Blended Scotch Mean?</h2>
<p>Blended Scotch mixes one or more single malt Scotches with one or more single grain Scotches. Grain whisky is not automatically a low-quality filler; it is a separate category with a different production method and flavour role. A blender can use both to build a consistent style across batches. The category name alone cannot tell you whether a particular blend will seem light, rich, smoky or sweet.</p>
<p>Do not confuse blended Scotch with blended malt Scotch. A blended malt combines single malts from more than one distillery, without single grain whisky. A bottle labelled "blended malt" and one labelled "blended Scotch" therefore describe different combinations, even though both involve blending.</p>

<h2>Does an Age Statement Make One Better?</h2>
<p>An age statement on Scotch refers to the youngest whisky in the bottle, not the average or oldest component. The Scotch Whisky Association's <a href="https://www.scotch-whisky.org.uk/media/2387/guidance-for-bottlers-and-producers_2025.pdf" target="_blank" rel="noopener noreferrer">producer guidance</a> gives this rule for both single malts and blends. A 12-year-old blend and a 12-year-old single malt have each met a minimum 12-year maturation for their youngest Scotch component; neither label tells you which one you will prefer.</p>

<h2>What Should You Check in an Indian Shop?</h2>
<p>Read the full category on the front label, then the bottling strength, bottle size, age statement if present and the exact expression name. Compare like-sized bottles in your city instead of assuming a generic online "single malt price" applies to every release. Local prices and stock can vary, so confirm the current shelf price with a licensed retailer.</p>
<p>For a first tasting, choose a flavour description you actually want: perhaps fruit-led, malty or smoky. Try a small pour before buying more. If a familiar blend suits your palate and budget better than a single malt, the category label gives no reason to dismiss it.</p>
`.trim(),
  },
].map((post) => ({
  ...post,
  author: "BevOry Editorial Team",
  cover_image_url: null,
  linked_product_id: null,
  linked_brand: null,
  notify_users: false,
  is_published: false,
  is_featured: false,
  published_at: null,
  reviewed_by: "BevOry Editorial Team",
  facts_last_reviewed: reviewedAt,
}));

const banned = /\b(?:symphony|testament|delve|nestled|embark|liquid gold|rich tapestry)\b|elevate your senses|dance on the palate|whether you['\u2019]re/i;
assert.equal(posts.length, 2);
assert.equal(posts.filter((post) => post.category === "News").length, 1);
assert.equal(new Set(posts.map((post) => post.slug)).size, posts.length);
for (const post of posts) {
  for (const key of ["id", "title", "slug", "excerpt", "meta_title", "meta_description", "category", "author", "selection_note", "content"]) {
    assert.ok(typeof post[key] === "string" && post[key].trim(), `${post.slug}: empty ${key}`);
  }
  assert.ok(post.meta_title.length <= 60, `${post.slug}: meta title too long`);
  assert.ok(post.meta_description.length <= 155, `${post.slug}: meta description too long`);
  assert.ok(post.tags.length && post.tags.every(Boolean), `${post.slug}: missing tags`);
  assert.ok(post.content.includes("<h2>"), `${post.slug}: missing sections`);
  assert.ok(post.content.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length >= 300, `${post.slug}: body under 300 words`);
  assert.ok(!banned.test([post.title, post.excerpt, post.meta_title, post.meta_description, post.content].join(" ")), `${post.slug}: banned wording`);
  for (const source of post.source_links) {
    assert.equal(new URL(source).protocol, "https:");
    assert.ok(post.content.includes(`href="${source}"`), `${post.slug}: source not cited in body`);
  }
}

if (process.argv.includes("--check")) {
  console.log(JSON.stringify({ validated: posts.length, slugs: posts.map((post) => post.slug) }));
} else if (process.argv.includes("--seo-only")) {
  const publicDir = process.env.SEO_PUBLIC_DIR || path.resolve("public");
  const contentFile = path.join(publicDir, "seo-routes/content.json");
  const shardFile = path.join(publicDir, "sitemaps/catalog-32.xml");
  const indexFile = path.join(publicDir, "sitemap.xml");
  const [contentRaw, shardRaw, indexRaw] = await Promise.all([contentFile, shardFile, indexFile].map((file) => readFile(file, "utf8")));
  const routes = JSON.parse(contentRaw);
  assert.ok(routes && typeof routes === "object" && !Array.isArray(routes));
  assert.ok((shardRaw.match(/<url>/g) || []).length < 2999, "sitemap shard is full");
  assert.ok(shardRaw.endsWith("</urlset>\n"), "unexpected sitemap shard format");
  assert.equal((indexRaw.match(/<loc>https:\/\/bevory\.in\/sitemaps\/catalog-32\.xml<\/loc>/g) || []).length, 1);
  const plainText = (html) => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const newEntries = [];
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
        "@type": "Article",
        headline: post.title,
        description: post.meta_description,
        datePublished: cycleAt,
        dateModified: cycleAt,
        author: { "@type": "Person", name: post.author },
        publisher: { "@type": "Organization", name: "BevOry" },
        mainEntityOfPage: url,
      },
    };
    newEntries.push(`  <url>\n    <loc>${url}</loc>\n    <lastmod>${cycleAt}</lastmod>\n  </url>\n`);
  }
  if (newEntries.length) {
    const backup = path.join(process.env.SEO_BACKUP_DIR || path.dirname(publicDir), `seo-backup-${Date.now()}`);
    await Promise.all([contentFile, shardFile, indexFile].map((file, i) => copyFile(file, `${backup}-${i}`)));
    const nextShard = shardRaw.replace("</urlset>\n", `${newEntries.join("")}</urlset>\n`);
    const nextIndex = indexRaw.replace(/(<loc>https:\/\/bevory\.in\/sitemaps\/catalog-32\.xml<\/loc>\s*<lastmod>)[^<]+(<\/lastmod>)/, `$1${cycleAt}$2`);
    assert.notEqual(nextIndex, indexRaw, "sitemap index was not updated");
    await writeFile(`${contentFile}.next`, `${JSON.stringify(routes)}\n`);
    await writeFile(`${shardFile}.next`, nextShard);
    await rename(`${contentFile}.next`, contentFile);
    await rename(`${shardFile}.next`, shardFile);
    await writeFile(indexFile, nextIndex);
  }
  console.log(JSON.stringify({ seoRoutes: posts.length, added: newEntries.length, slugs: posts.map((post) => post.slug) }));
} else {
  const prisma = new PrismaClient();
  try {
    const publishPosts = posts.map((post) => ({ ...post, is_published: true, is_featured: post.category === "News", published_at: cycleAt }));
    const keys = publishPosts.map((post) => `blog_posts:${post.id}`);
    const previous = await prisma.contentRecord.findMany({ where: { key: { in: keys } } });
    const now = new Date().toISOString();
    await prisma.$transaction(publishPosts.map((post) => {
      const data = { ...post, created_at: previous.find((record) => record.recordId === post.id)?.data?.created_at ?? now, updated_at: now };
      return prisma.contentRecord.upsert({
        where: { key: `blog_posts:${post.id}` },
        update: { data },
        create: { key: `blog_posts:${post.id}`, tableName: "blog_posts", recordId: post.id, data },
      });
    }));
    const saved = await prisma.contentRecord.findMany({ where: { key: { in: keys } } });
    assert.equal(saved.length, publishPosts.length);
    for (const post of publishPosts) {
      const data = saved.find((record) => record.recordId === post.id)?.data;
      for (const [key, value] of Object.entries(post)) assert.deepEqual(data?.[key], value, `${post.slug}: saved ${key} differs`);
    }
    console.log(JSON.stringify({ saved: saved.length, verified: saved.length, slugs: publishPosts.map((post) => post.slug) }));
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}
