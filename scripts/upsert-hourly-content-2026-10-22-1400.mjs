import "dotenv/config";
import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { PrismaClient } from "@prisma/client";

const cycleAt = "2026-10-22T08:33:09.952Z";
const reviewedAt = "2026-10-22";

export const posts = [
  {
    id: "news-in-good-taste-wine-advent-club-2026",
    title: "In Good Taste Adds Wine Cocktail Calendar and Advent Club",
    slug: "in-good-taste-wine-cocktail-advent-club-2026",
    excerpt: "The US wine company has added a cocktail-themed Advent calendar and a year-round club. Here is what is in the 2026 range and where it is sold.",
    cover_emoji: "news",
    category: "News",
    tags: ["In Good Taste", "wine advent calendar", "wine club", "wine cocktails", "wine news"],
    meta_title: "In Good Taste 2026 Wine Advent Calendars | BevOry",
    meta_description: "In Good Taste has added a wine cocktail calendar and Advent Wine Club for 2026. See the formats, 187 ml pours and US-only buying details.",
    selection_note: "A fresh producer announcement on 20 October with clearly specified formats and a practical India-availability caveat.",
    source_links: [
      "https://www.prnewswire.com/news-releases/in-good-taste-surpasses-300-000-wine-advent-calendar-sales-launches-biggest-lineup-ever-and-new-advent-wine-club-302913610.html",
      "https://ingoodtaste.com/",
    ],
    content: String.raw`
<p><strong>US wine company In Good Taste has expanded its 2026 Advent range with a wine-cocktail calendar and a new Advent Wine Club.</strong> Its <a href="https://www.prnewswire.com/news-releases/in-good-taste-surpasses-300-000-wine-advent-calendar-sales-launches-biggest-lineup-ever-and-new-advent-wine-club-302913610.html" target="_blank" rel="noopener noreferrer">20 October announcement</a> lists six calendar formats in all. This is a US launch; the announcement does not establish availability or a retail price in India.</p>

<h2>What Is New In The 2026 Lineup?</h2>
<p>The new Wine Cocktail Advent Calendar contains 24 ready-to-drink wine cocktails. The company names Espresso Martinis and Piña Coladas among its examples, but the release does not set out the full ingredient list or alcohol strength of each drink. The other new calendar is a Food Pairing Advent Calendar with 24 bites intended to accompany certain wine calendars. It is a food calendar, not a second box of wine. That distinction matters if you are comparing what each format actually contains.</p>
<p>The continuing range comprises mixed wine, white and rosé, all-red, and luxury wine calendars. In Good Taste says each wine calendar contains 24 different wines in 187 ml single-serve bottles, with daily tasting videos and notes. The company reports that it has produced more than 300,000 wine Advent calendars to date. That sales figure is the company's own claim, not a count independently verified by BevOry.</p>

<h2>How Does The Advent Wine Club Work?</h2>
<p>The new club is built around a summer and a winter Advent calendar, with full-size bottles of favourites included in its plans. The idea is to taste the smaller pours before choosing wines to revisit. The company says membership starts at US$175. That is a US starting figure, not a per-bottle price, an Indian subscription quote or a guarantee that every plan costs the same. Read the current terms and delivery conditions before joining any subscription.</p>
<p>The brand's <a href="https://ingoodtaste.com/" target="_blank" rel="noopener noreferrer">US storefront</a> displays the calendar formats and current offers. Promotional prices can change, so the producer's dated announcement and the live checkout may differ. The release says the 2026 calendars ship in October in the US and can be delayed for gifting. It does not say they ship to India.</p>

<h2>What Should An Indian Wine Buyer Take From This?</h2>
<p>These are useful examples of a smaller-pour tasting format rather than confirmed products for an Indian shelf. If you are comparing any wine sampler in Mumbai, Delhi, Bengaluru or elsewhere, check how many containers it holds, the volume in each, whether every drink is wine or a wine-based cocktail, and the alcohol percentage on each label. A 187 ml pour is not the same volume as a standard full bottle, and a cocktail may have ingredients beyond wine.</p>
<p>For gifting, confirm the seller can legally deliver to the recipient's location before paying. Do not treat a US dollar price or a US shipping promise as an Indian offer. If a local seller stocks a similar sampler, compare its exact contents and local shelf price instead of assuming the two boxes are equivalent. Adults can also build a small tasting with locally available wines without committing to a large mixed case.</p>
`.trim(),
  },
  {
    id: "guide-shiraz-vs-cabernet-sauvignon-india-2026",
    title: "Shiraz vs Cabernet Sauvignon: Which Red Wine Should You Choose?",
    slug: "shiraz-vs-cabernet-sauvignon-india-2026",
    excerpt: "Both grapes can make bold reds, but fruit, tannin and climate change the experience. Use the label and your food plans to choose a bottle in India.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["Shiraz vs Cabernet Sauvignon", "red wine India", "Shiraz guide", "Cabernet Sauvignon guide", "wine buying guide"],
    meta_title: "Shiraz vs Cabernet Sauvignon in India | BevOry",
    meta_description: "Compare Shiraz and Cabernet Sauvignon by fruit, tannin, label and food pairing. An India-focused guide without made-up bottle prices.",
    selection_note: "A high-intent red-wine comparison grounded in WSET and Wine Australia education, with an Indian producer example and no invented price or ABV.",
    source_links: [
      "https://www.wineaustralia.com/market-insights/regions-and-varieties/shiraz",
      "https://www.wsetglobal.com/knowledge-centre/blog/2025/judging-cabernet-napa-versus-bordeaux-cabernet-sauvignon/",
      "https://www.wsetglobal.com/knowledge-centre/blog/2025/how-to-find-a-wine-youll-like",
      "https://sulavineyards.com/dindori/shiraz.php",
    ],
    content: String.raw`
<p><strong>Shiraz often suits someone looking for ripe fruit and spice; Cabernet Sauvignon often appeals to someone who enjoys firmer structure and a drying tannin finish.</strong> Those are starting points, not promises. A warm-region Cabernet can be plush, while a cooler-climate Shiraz can be more peppery and restrained. The producer, place and particular bottle matter more than a grape name on its own.</p>

<h2>How Does Shiraz Usually Taste?</h2>
<p><a href="https://www.wineaustralia.com/market-insights/regions-and-varieties/shiraz" target="_blank" rel="noopener noreferrer">Wine Australia</a> describes Shiraz as a versatile variety whose styles change with region. Riper examples can bring dark fruit and chocolate notes; other growing conditions can emphasise spice. This is why an inexpensive bottle and a reserve bottling need not feel alike even when both say Shiraz. The same grape is commonly called Syrah in other markets, but naming alone does not fix the wine's body or quality.</p>
<p>For a local example, <a href="https://sulavineyards.com/dindori/shiraz.php" target="_blank" rel="noopener noreferrer">Sula's Dindori Reserve Shiraz page</a> describes smoky, vanilla, cherry and spice notes and suggests Laal Maas, green chicken curry and chargrilled food. Sula also says that this expression may contain up to 10% Cabernet Sauvignon. That is a useful reminder to read the producer's details: a bottle marketed by its main grape can still be a blend. These notes and pairings apply to Sula's stated expression, not to every Shiraz sold in India.</p>

<h2>What Is Different About Cabernet Sauvignon?</h2>
<p>A <a href="https://www.wsetglobal.com/knowledge-centre/blog/2025/judging-cabernet-napa-versus-bordeaux-cabernet-sauvignon/" target="_blank" rel="noopener noreferrer">Wine &amp; Spirit Education Trust comparison</a> shows how Cabernet Sauvignon can range from leafier, grippier examples to riper wines with dark fruit and a smoother texture. Its natural acidity and tannin are part of the reason many drinkers experience it as structured. Tannin is the drying sensation felt around the gums; it is not the same as sweetness, alcohol strength or bitterness.</p>
<p>Cabernet does not automatically mean heavier than Shiraz. A warm-climate Shiraz may be full-bodied, while the style of a Cabernet depends on ripeness and winemaking. If you dislike a firm drying finish, look for producer notes such as smooth or soft tannins, or try a smaller pour before buying a case.</p>

<h2>Which One Works With Dinner?</h2>
<p>With smoky kebabs, grilled paneer or a robust meat dish, either grape can work. Shiraz's fruit and spice may feel especially comfortable with tandoor flavours; a Cabernet with more tannin can sit well beside rich protein and fat. These are pairing suggestions, not fixed rules. Very hot chilli can make alcohol and tannin seem more pronounced, so taste the food and wine together before deciding that a bold red is the right match.</p>

<h2>What Should You Compare On An Indian Shelf?</h2>
<p>The <a href="https://www.wsetglobal.com/knowledge-centre/blog/2025/how-to-find-a-wine-youll-like" target="_blank" rel="noopener noreferrer">WSET buying guide</a> recommends considering producer, origin, grape and style together. On a shelf in Mumbai, Pune, Bengaluru or Delhi, compare the exact bottle name, blend, vintage, alcohol by volume and size. Read the back label or producer page for oak ageing and tasting notes. A vintage is the grape-harvest year, not an automatic quality score. An imported Cabernet and an Indian Shiraz also cannot be compared fairly using a price posted for a different city or state.</p>
<p>If you want a fruit-led red with some spice, start with a Shiraz whose tasting notes match that preference. If you prefer a drier-feeling, more structured finish, explore a Cabernet Sauvignon. In either case, buy the bottle that fits your meal and budget, and let the specific producer's description guide you more than the grape alone.</p>
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

if (process.argv.includes("--export")) {
  const path = new URL("../docs/editorial/hourly-posts-2026-10-22-1400.json", import.meta.url);
  await writeFile(path, JSON.stringify({
    automation_id: "bevory-hourly-alcohol-content-engine",
    cycle_at: cycleAt,
    publication_status: "prepared_not_published",
    publication_blockers: ["The configured local MySQL tunnel at 127.0.0.1:3308 is closed."],
    posts,
  }, null, 2) + "\n");
  console.log(`Exported ${posts.length} validated drafts to ${path.pathname}`);
} else if (process.argv.includes("--check")) {
  console.log(JSON.stringify({ validated: posts.length, slugs: posts.map((post) => post.slug) }));
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
