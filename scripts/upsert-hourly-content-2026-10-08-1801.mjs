import "dotenv/config";
import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { PrismaClient } from "@prisma/client";

const publishedAt = "2026-10-08T12:31:01.776Z";

export const posts = [
  {
    id: "news-clydebuilt-refreshed-10-year-single-malt-range-2026",
    title: "Clydebuilt Refreshes Its Range With Three 10-Year-Old Malts",
    slug: "clydebuilt-refreshed-10-year-single-malt-range-2026",
    excerpt:
      "Clydebuilt's refreshed Scotch range pairs two sherry-matured expressions with the American-oak-aged Candlebrae, in new River Clyde packaging.",
    cover_emoji: "news",
    category: "News",
    tags: ["Clydebuilt whisky", "Ardgowan Distillery", "Candlebrae", "sherry cask whisky", "Scotch whisky news"],
    meta_title: "Clydebuilt's Refreshed 10-Year Malt Range | BevOry",
    meta_description:
      "Explore Clydebuilt's refreshed 10-year-old Scotch range: two sherry-matured malts and American-oak Candlebrae, with new River Clyde packaging.",
    selection_note:
      "An uncovered 6 October producer announcement with specific expressions and maturation details; the article separates the bottling range from Ardgowan's own young spirit.",
    source_links: [
      "https://www.ardgowandistillery.com/clydebuilt-whisky-reveals-packaging-transformation-and-streamlined-range/",
      "https://www.ardgowandistillery.com/product/clydebuilt-10-years-old-sherry-cask-matured/",
      "https://www.ardgowandistillery.com/product/clydebuilt-10-years-old-candlebrae/",
    ],
    content: String.raw`
<p><strong>Clydebuilt has refreshed its Scotch whisky range with two sherry-matured 10-year-olds and a limited Highland malt aged in American oak.</strong> Ardgowan Distillery's <a href="https://www.ardgowandistillery.com/clydebuilt-whisky-reveals-packaging-transformation-and-streamlined-range/" target="_blank" rel="noopener noreferrer">6 October 2026 announcement</a> also introduces bottles and giftboxes carrying a map of the River Clyde.</p>

<h2>Three Expressions, Different Strengths</h2>
<p>The core range comprises Clydebuilt 10 Years Old Sherry Cask Matured at 46% ABV and its 100 Proof counterpart at 57.1%. The limited Clydebuilt 10 Years Old Candlebrae is bottled at 48%. Whisky Maker Laura Davies developed all three expressions.</p>

<h2>Sherry Casks Or American Oak?</h2>
<p>The <a href="https://www.ardgowandistillery.com/product/clydebuilt-10-years-old-sherry-cask-matured/" target="_blank" rel="noopener noreferrer">Sherry Cask Matured product page</a> identifies a Speyside malt aged in sherry butts and European oak Pedro Ximenez and Oloroso hogsheads from Jose y Miguel Martin. The producer describes dried fruit and almonds on the nose, then honey, raisins, cinnamon and cloves.</p>
<p><a href="https://www.ardgowandistillery.com/product/clydebuilt-10-years-old-candlebrae/" target="_blank" rel="noopener noreferrer">Candlebrae</a> takes a different route: a Highland single malt matured for a decade in American oak. Its producer notes include baked apple, waxy citrus, apricot, cream and spiced oak. Both product pages specify no added colouring or chill filtration.</p>

<h2>The Brand And The Distillery</h2>
<p>Clydebuilt is an independent-bottling range launched in 2019. Its brand home, Ardgowan, began distilling its own spirit in June 2025. These 10-year-old bottlings belong to the Clydebuilt range, not a decade of whisky production at that new distillery.</p>

<h2>Choosing A First Pour</h2>
<p>Our suggestion is to compare the cask profiles before choosing by strength. Try a small neat pour in a tulip-shaped glass; add water gradually if preferred. For the fruit-and-spice style, roasted almonds or a little dark chocolate are useful pairing ideas.</p>
`.trim(),
  },
  {
    id: "guide-how-long-wine-lasts-after-opening-india",
    title: "How Long Does Wine Last After Opening? A Home Storage Guide",
    slug: "how-long-wine-lasts-after-opening-india",
    excerpt:
      "Reclose and refrigerate opened wine, including reds. Learn realistic freshness windows, sparkling-wine stoppers and a simple routine for the next pour.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["wine after opening", "opened red wine", "wine storage India", "Champagne stopper", "wine refrigerator"],
    meta_title: "How Long Does Opened Wine Last? Storage Guide | BevOry",
    meta_description:
      "Learn how to store opened red, white and sparkling wine, why a fridge helps, and when to use a Champagne stopper. Practical advice from BevOry.",
    selection_note:
      "An everyday storage query distinct from the decanting guide; the copy treats freshness windows as quality guidance and uses the Champagne authority's bottle-specific advice.",
    source_links: [
      "https://www.wsetglobal.com/knowledge-centre/blog/2023/march/07/the-best-ways-to-preserve-wine-after-opening",
      "https://www.wsetglobal.com/knowledge-centre/blog/2022/may/05/six-common-wine-myths-debunked",
      "https://www.champagne.fr/en/champagne-frequently-asked-questions?nid=609",
    ],
    content: String.raw`
<p><strong>Reclose an opened bottle of still wine and put it in the fridge, including red wine.</strong> <a href="https://www.wsetglobal.com/knowledge-centre/blog/2023/march/07/the-best-ways-to-preserve-wine-after-opening" target="_blank" rel="noopener noreferrer">WSET's preservation guide</a> says a reclosed red or white can stay relatively fresh for up to five days when refrigerated. That is a useful planning window, not a promise that every bottle will taste unchanged until day five.</p>

<h2>Air And Heat Change The Wine</h2>
<p>Opening exposes wine to oxygen, while heat and light also work against freshness. WSET recommends closing the bottle after pouring, keeping it upright and refrigerating it. Cooler storage slows oxidation; standing an opened bottle upright reduces the surface exposed to air.</p>
<p>Our practical routine is to write the opening date on a removable label and return the bottle to the fridge after serving. In a warm Indian kitchen, the counter is not a substitute for cool storage.</p>

<h2>Red Wine Can Go In The Fridge</h2>
<p>Storage temperature and serving temperature are different decisions. You can keep the remaining red cold and let the next small pour warm before drinking. <a href="https://www.wsetglobal.com/knowledge-centre/blog/2022/may/05/six-common-wine-myths-debunked" target="_blank" rel="noopener noreferrer">WSET's wine-myth guide</a> places red-wine serving temperatures broadly at 13-18 degrees C and notes that lighter reds can be enjoyable chilled.</p>
<p>Our suggestion is to adjust the glass rather than leave the whole bottle out throughout dinner. Take another taste as it warms and choose the temperature you prefer.</p>

<h2>Sparkling Wine Needs Its Own Stopper</h2>
<p>The <a href="https://www.champagne.fr/en/champagne-frequently-asked-questions?nid=609" target="_blank" rel="noopener noreferrer">Comite Champagne FAQ</a> says an opened Champagne bottle can be kept for one or two days when immediately closed with a special airtight stopper. Its guidance describes a seal held securely against the bottle neck by latches.</p>
<p>Use a stopper designed for sparkling wine and refrigerate the bottle. WSET's wine-myth guide also rejects the familiar spoon-in-the-neck trick. Set the proper stopper beside the glasses before opening Champagne or Prosecco, so it is ready after the first pour.</p>

<h2>Plan For The Next Glass</h2>
<p>Plan the next serving before returning the bottle to the fridge. Treat the day count as a guide to freshness, not a universal shelf-life guarantee, and avoid tasting a bottle merely to investigate suspected contamination.</p>
`.trim(),
  },
  {
    id: "guide-alcohol-gurugram-noida-to-delhi-one-litre-rule",
    title: "Bringing Alcohol From Gurugram To Delhi: The One-Litre Rule",
    slug: "alcohol-gurugram-noida-to-delhi-one-litre-rule",
    excerpt:
      "Delhi's published excise rules list a one-litre limit when entering from another state. Bottle count and Metro travel do not replace that volume limit.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["Gurugram to Delhi liquor", "Noida to Delhi alcohol", "Delhi one litre rule", "Delhi Metro alcohol", "Delhi excise rules"],
    meta_title: "Alcohol From Gurugram to Delhi: Carrying Rules | BevOry",
    meta_description:
      "Bringing alcohol from Gurugram or Noida into Delhi? Understand the published one-litre limit, bottle-size examples and Delhi Metro rules on BevOry.",
    selection_note:
      "A specific NCR travel question, supported by Delhi's published rules, its excise FAQ and DMRC's current state-law notice rather than a blanket two-bottle claim.",
    source_links: [
      "https://excise.delhi.gov.in/sites/default/files/generic_multiple_files/delhi_excise_rules_2010_0.pdf",
      "https://excise.delhi.gov.in/excise/frequently-asked-questions-1",
      "https://backend.delhimetrorail.com/documents/7087/list-of-prohibited-Items.pdf",
    ],
    content: String.raw`
<p><strong>Delhi's published excise rules list a one-litre limit for Indian or foreign liquor when entering Delhi from another state.</strong> That is the relevant quantity provision to read before bringing a purchase from Gurugram or Noida into Delhi. It is a volume limit, not a universal allowance of one or two bottles.</p>

<h2>Where The One-Litre Figure Comes From</h2>
<p><a href="https://excise.delhi.gov.in/sites/default/files/generic_multiple_files/delhi_excise_rules_2010_0.pdf" target="_blank" rel="noopener noreferrer">Rule 20 of the Delhi Excise Rules, 2010</a> sets out the quantity table for individuals aged 25 or older. The table lists one litre while entering Delhi from other states. The department's <a href="https://excise.delhi.gov.in/excise/frequently-asked-questions-1" target="_blank" rel="noopener noreferrer">FAQ, question 12</a>, repeats that figure separately from its domestic-possession quantities.</p>
<p>Rule 3 addresses private consumption, not resale, within the prescribed maximum quantities. Do not turn that private-consumption provision into permission to move stock for a business.</p>

<h2>Count Millilitres, Not Bottles</h2>
<p>Two 750 ml bottles total 1,500 ml, which exceeds one litre. Two 500 ml bottles total 1,000 ml. These examples explain the arithmetic; they are not a guarantee of permission for a particular journey.</p>
<p>Compare the net volume shown on each bottle and add the quantities together. A lower price, a sealed carton or a different mode of travel does not change the total liquid volume.</p>

<h2>Delhi Metro Does Not Override State Rules</h2>
<p>DMRC's <a href="https://backend.delhimetrorail.com/documents/7087/list-of-prohibited-Items.pdf" target="_blank" rel="noopener noreferrer">published prohibited-items notice</a> explicitly says the concerned state's excise rules and restrictions apply to alcohol carriage. Do not treat a Metro bottle-count allowance as an exemption from Delhi's interstate quantity provision.</p>

<h2>Check The Direction Of Your Journey</h2>
<p>This guide concerns entering Delhi. It does not set the rules for a return trip into Haryana or Uttar Pradesh, nor does it cover commercial supply. For permit questions or an unusual journey, seek guidance from the relevant excise department before travelling.</p>
<p>Keep any purchase documentation available, but do not treat a receipt as permission to exceed a quantity restriction. Compare city prices on BevOry with the intended purchase location in mind; a price difference is not a transport authorisation.</p>
`.trim(),
  },
].map((post) => ({
  ...post,
  author: "BevOry Editorial Team",
  cover_image_url: null,
  linked_product_id: null,
  linked_brand: null,
  notify_users: false,
  is_published: true,
  is_featured: post.category === "News",
  published_at: publishedAt,
  reviewed_by: "BevOry Editorial Team",
  facts_last_reviewed: "2026-10-08",
}));

const banned = /\b(?:symphony|testament|delve|nestled|embark|liquid gold|rich tapestry)\b|elevate your senses|dance on the palate|whether you['\u2019]re|information pending verification|BevOry has not assigned|verified ingredient statement is not stored|availability is not assumed|adults can compare like with like/i;
assert.equal(posts.length, 3);
assert.equal(new Set(posts.map((post) => post.slug)).size, posts.length);
assert.equal(new Set(posts.map((post) => post.id)).size, posts.length);
assert.equal(posts.filter((post) => post.category === "News").length, 1);
for (const post of posts) {
  for (const key of ["id", "title", "slug", "excerpt", "meta_title", "meta_description", "category", "author", "selection_note", "content"]) {
    assert.ok(typeof post[key] === "string" && post[key].trim(), `${post.slug}: empty ${key}`);
  }
  assert.ok(post.meta_title.length <= 60, `${post.slug}: meta title exceeds 60 characters`);
  assert.ok(post.meta_description.length <= 155, `${post.slug}: meta description exceeds 155 characters`);
  assert.ok(!banned.test([post.title, post.excerpt, post.meta_title, post.meta_description, post.content].join(" ")), `${post.slug}: prohibited public wording`);
  assert.ok(post.tags.length && post.tags.every((tag) => tag.trim()), `${post.slug}: missing tags`);
  assert.ok(post.source_links.length, `${post.slug}: missing sources`);
  assert.ok(post.content.includes("<h2>"), `${post.slug}: no article sections`);
  assert.ok(post.content.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length >= 200, `${post.slug}: incomplete body`);
  assert.ok(Number.isFinite(Date.parse(post.published_at)), `${post.slug}: invalid publication date`);
  for (const source of post.source_links) {
    assert.equal(new URL(source).protocol, "https:");
    assert.ok(post.content.includes(`href="${source}"`), `${post.slug}: source not cited in body`);
  }
}

if (process.argv.includes("--export")) {
  const path = new URL("../docs/editorial/hourly-posts-2026-10-08-1801.json", import.meta.url);
  await writeFile(path, JSON.stringify({
    automation_id: "bevory-hourly-alcohol-content-engine",
    cycle_at: publishedAt,
    publication_status: "prepared",
    posts,
  }, null, 2) + "\n");
  console.log(`Exported ${posts.length} complete posts to ${path.pathname}`);
} else if (process.argv.includes("--check")) {
  console.log(JSON.stringify({ validated: posts.length, posts: posts.map(({ title, slug }) => ({ title, slug })) }, null, 2));
} else {
  const prisma = new PrismaClient();
  try {
    const keys = posts.map((post) => `blog_posts:${post.id}`);
    const previous = await prisma.contentRecord.findMany({ where: { key: { in: keys } } });
    const now = new Date().toISOString();
    await prisma.$transaction(posts.map((post) => {
      const data = {
        ...post,
        created_at: previous.find((record) => record.recordId === post.id)?.data?.created_at ?? now,
        updated_at: now,
      };
      return prisma.contentRecord.upsert({
        where: { key: `blog_posts:${post.id}` },
        update: { data },
        create: { key: `blog_posts:${post.id}`, tableName: "blog_posts", recordId: post.id, data },
      });
    }));
    const saved = await prisma.contentRecord.findMany({ where: { key: { in: keys } } });
    assert.equal(saved.length, posts.length, "Not every post was saved");
    for (const post of posts) {
      const data = saved.find((record) => record.recordId === post.id)?.data;
      for (const [key, value] of Object.entries(post)) {
        assert.deepEqual(data?.[key], value, `${post.slug}: saved ${key} differs`);
      }
    }
    console.log(JSON.stringify({ saved: saved.length, verified: saved.length, slugs: posts.map((post) => post.slug) }, null, 2));
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}
