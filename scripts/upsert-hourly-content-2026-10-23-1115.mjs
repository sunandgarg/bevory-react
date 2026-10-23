import "dotenv/config";
import assert from "node:assert/strict";
import { copyFile, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { PrismaClient } from "@prisma/client";

const publishedAt = "2026-10-23T05:34:14.680Z";
const reviewedAt = "2026-10-23";
const filing = "https://nsearchives.nseindia.com/corporate/ABDINDIA_22102026103922_SE_Intimation-Press_Release-Telangana_Malt_Distillery_sd.pdf";
const fssai = "https://fssai.gov.in/upload/uploadfiles/files/Comp_Alcoholic_Beverages_V_04_12_2025.pdf";

const posts = [
  {
    id: "news-abd-telangana-malt-distillery-2026",
    title: "Allied Blenders Starts Malt Distillery Operations in Telangana",
    slug: "abd-telangana-malt-distillery-2026",
    excerpt: "Allied Blenders & Distillers says its Rangapur malt distillery is operating. The facility supports future whisky development, but no new single malt launch has been announced.",
    category: "News",
    tags: ["Allied Blenders & Distillers", "Telangana malt distillery", "Indian whisky", "Rangapur", "spirits news"],
    meta_title: "ABD Opens Telangana Malt Distillery | BevOry",
    meta_description: "Allied Blenders & Distillers has started its Rangapur malt distillery in Telangana. Here is what the move means, and what it does not yet mean for buyers.",
    selection_note: "A 22 October Indian exchange filing directly relevant to whisky supply and future single malt development, with a clear distinction between distillery operations and a consumer launch.",
    source_links: [filing, "https://hdfcsky.com/news/allied-blenders-starts-malt-distillery-operations-shares-rise-0-77-percent"],
    content: String.raw`
<p><strong>Allied Blenders & Distillers (ABD) says commercial operations have begun at its malt distillery in Rangapur, Telangana.</strong> The company announced the development on 22 October 2026. It gives ABD an in-house source of malt spirit for its whisky business, but it is not an announcement that a new single malt bottle is available to buy today.</p>

<h2>What Has Started at Rangapur?</h2>
<p>According to ABD's <a href="${filing}" target="_blank" rel="noopener noreferrer">exchange-filed press release</a>, the malt distillery has an approved capacity of about 4.4 million bulk litres a year. That figure describes the facility's approved manufacturing capacity. It does not say how much spirit has already been produced, matured or bottled.</p>
<p>The company says the new operation lets it make malt spirit in-house instead of relying entirely on outside supply for that input. Rangapur already houses other production and packaging activities, so the malt distillery adds another stage to the site. An <a href="https://hdfcsky.com/news/allied-blenders-starts-malt-distillery-operations-shares-rise-0-77-percent" target="_blank" rel="noopener noreferrer">HDFC SKY report</a> also describes the start of commercial operations and the same approved capacity.</p>

<h2>Does This Mean an ABD Single Malt Is Coming Now?</h2>
<p>Not immediately. ABD says the distillery allows it to lay down malt spirit for a homegrown single malt in the coming years. Making new-make spirit is only the beginning of that process; maturation, blending decisions, packaging and a commercial launch come later. The 22 October release does not name a new single malt expression, bottle size, ABV, price or launch date.</p>
<p>For shoppers, that distinction matters. A production milestone can be important to a company's future range without changing what is on shelves this week. If a retailer or social post presents the distillery opening as a newly released bottle, look for a separate product announcement and an actual local listing.</p>

<h2>Why Does In-House Malt Matter?</h2>
<p>Malt spirit is a whisky ingredient. Producing it at Rangapur gives ABD more direct control over an input it says is important to its portfolio. The company expects that control to support supply consistency and future product development. Those are the company's stated aims, not a guarantee of a particular taste, quality or retail price.</p>
<p>Consumers comparing Indian whiskies should still use the exact expression and label, not the location of a distillery alone. Check the stated category, bottle size and alcohol strength. In India, listed prices and stock can vary by city and retailer, so confirm the current shelf price locally. ABD's announcement is a manufacturing update first; any future single malt deserves its own assessment when a finished product is actually announced.</p>
`.trim(),
  },
  {
    id: "guide-mild-vs-strong-beer-india-2026",
    title: "Mild vs Strong Beer in India: What Is the Difference?",
    slug: "mild-vs-strong-beer-india-2026",
    excerpt: "In India, mild and strong beer are strength categories. Learn the FSSAI ABV ranges and how to compare a can or bottle without guessing from its name.",
    category: "Guides",
    tags: ["mild vs strong beer", "beer ABV India", "strong beer meaning", "beer bottle guide", "FSSAI beer"],
    meta_title: "Mild vs Strong Beer in India | BevOry",
    meta_description: "What makes a beer mild or strong in India? Read the FSSAI ABV ranges and a practical guide to comparing beer strength and pack size.",
    selection_note: "A specific Indian beer-label query with a primary FSSAI source; it complements, rather than repeats, the broader ABV explainer already published.",
    source_links: [fssai, "https://fssai.gov.in/food-law/regulations/amendments/alcoholic-beverages"],
    content: String.raw`
<p><strong>In India, "mild" and "strong" beer refer to alcohol strength, measured as alcohol by volume (ABV).</strong> Under the Food Safety and Standards Authority of India's beer standard, regular or mild beer is above 0.5% and up to 5.0% ABV; strong beer is above 5.0% and up to 8.0% ABV. The word "strong" does not, by itself, tell you how bitter, dark or expensive a beer will be.</p>

<h2>What Are the ABV Ranges?</h2>
<p>The <a href="${fssai}" target="_blank" rel="noopener noreferrer">FSSAI alcoholic beverages compendium</a> gives the ranges for regular and strong beer. A beer labelled exactly 5.0% ABV sits at the upper end of the regular category; a beer above 5.0% moves into the strong category, up to the 8.0% limit stated there. The compendium also lists regular and strong draught and craft beer categories. Check the exact ABV on the pack rather than assuming every beer sold as "strong" has the same percentage.</p>
<p>FSSAI's <a href="https://fssai.gov.in/food-law/regulations/amendments/alcoholic-beverages" target="_blank" rel="noopener noreferrer">alcoholic-beverages amendments page</a> is the place to check for later changes to the rules. Pack labels should still be your starting point for the strength of the particular beer in your hand.</p>

<h2>Does Strong Beer Always Taste Stronger?</h2>
<p>No. ABV measures alcohol concentration, not bitterness or flavour intensity. A lower-ABV stout may taste roasty and full-bodied, while a higher-ABV lager may seem relatively crisp. Ingredients, fermentation, sweetness, carbonation and serving temperature all change the experience. The mild-versus-strong category cannot replace tasting notes or the beer's style.</p>
<p>Similarly, "mild" on an Indian beer label should not be confused with mild ale, a traditional beer style elsewhere. In this shopping context it is a strength category. Read the stated style and product name as well as the ABV to understand what the producer is offering.</p>

<h2>How Do You Compare Two Packs?</h2>
<p>Look at both ABV and container size. A 650 ml bottle at 5% ABV contains about 32.5 ml of pure alcohol; a 330 ml can at 8% contains about 26.4 ml. These figures are simple calculations from the labelled percentages and volumes, not estimates for any particular brand. A larger mild bottle can therefore contain more alcohol than a smaller strong can.</p>
<p>For a fair comparison in Mumbai, Delhi, Gurgaon or another city, note the exact beer name, ABV and pack size before looking at local prices. City listings and shop stock can change. Confirm the current price with a licensed retailer, and do not assume a strength category predicts value or quality. If you are drinking, choose a quantity that suits you and plan a safe way home.</p>
`.trim(),
  },
].map((post) => ({
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

const banned = /\b(?:symphony|testament|delve|nestled|embark|liquid gold|rich tapestry)\b|elevate your senses|dance on the palate|whether you['\u2019]re/i;
assert.equal(posts.length, 2);
assert.equal(new Set(posts.map((post) => post.slug)).size, posts.length);
for (const post of posts) {
  assert.ok(post.title && post.slug && post.excerpt && post.meta_title && post.meta_description && post.selection_note);
  assert.ok(post.meta_title.length <= 60 && post.meta_description.length <= 155, `${post.slug}: metadata too long`);
  assert.ok(post.content.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length >= 300, `${post.slug}: under 300 words`);
  assert.ok(!banned.test([post.title, post.excerpt, post.content].join(" ")), `${post.slug}: banned wording`);
  for (const source of post.source_links) {
    assert.equal(new URL(source).protocol, "https:");
    assert.ok(post.content.includes(`href="${source}"`), `${post.slug}: source not cited`);
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
} else {
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
