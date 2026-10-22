import "dotenv/config";
import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { PrismaClient } from "@prisma/client";

const cycleAt = "2026-10-22T04:40:22.507Z";
const reviewedAt = "2026-10-22";

export const posts = [
  {
    id: "news-absolut-charli-xcx-two-year-partnership-oct-2026",
    title: "Absolut and Charli xcx Announce a Two-Year Partnership",
    slug: "absolut-charli-xcx-two-year-partnership-october-2026",
    excerpt: "Absolut's new Charli xcx partnership promises limited-edition drops, custom glassware and fan events, but has not named a new vodka expression.",
    cover_emoji: "news",
    category: "News",
    tags: ["Absolut Vodka", "Charli xcx", "vodka news", "spirits partnerships", "cocktail culture"],
    meta_title: "Absolut and Charli xcx Partnership | BevOry",
    meta_description: "Absolut and Charli xcx plan two years of drops, glassware and events. See what is confirmed and what the announcement means for vodka buyers.",
    selection_note: "A 21 October 2026 announcement from Absolut's owner is timely and verifiable; the article distinguishes a brand collaboration from a new product launch.",
    source_links: [
      "https://www.pernod-ricard.com/en/locations/uk/media/it-s-absolut-baby",
      "https://www.wsetglobal.com/knowledge-centre/blog/2026/gins-botanical-blueprint",
    ],
    content: String.raw`
<p><strong>Absolut Vodka and Charli xcx have announced a two-year partnership.</strong> In a <a href="https://www.pernod-ricard.com/en/locations/uk/media/it-s-absolut-baby" target="_blank" rel="noopener noreferrer">21 October 2026 announcement</a>, Absolut's owner Pernod Ricard says the collaboration will include limited-edition drops, collectible items, custom glassware and fan events. It is a brand and culture announcement, not a disclosed new vodka recipe.</p>

<h2>What Has Actually Been Announced?</h2>
<p>The confirmed scope is broad: Absolut and the artist plan to work together for two years, with music, drinks and fan participation at the centre of the campaign. Custom glassware is specifically mentioned. So are limited-edition drops and collectibles, although the company has not described the contents of each drop or published a calendar for them.</p>
<p>The release points to a Dirty Martini as a drink associated with the collaboration. That is a cocktail cue, not a technical description of a new spirit. The announcement does not identify a new expression, bottle size, ABV, retail price or country-by-country release plan. A limited-edition item should not be treated as a limited-edition vodka bottle until a product is actually specified.</p>

<h2>Why This Matters To Vodka Drinkers</h2>
<p>For a shopper, the immediate distinction is between a familiar vodka on the shelf and a campaign built around it. Packaging, glassware and events can change how a brand appears in a bar or at a party without changing the liquid in the bottle. If a bottle connected to the partnership is eventually announced, its label and official product details will be the useful things to compare.</p>
<p>The Dirty Martini reference also gives the campaign a clear serving identity. <a href="https://www.wsetglobal.com/knowledge-centre/blog/2026/gins-botanical-blueprint" target="_blank" rel="noopener noreferrer">WSET's cocktail guide</a> describes a Martini as spirit with dry vermouth and a Dirty Martini as a variation with olive brine. The amount of brine and vermouth changes the result considerably, so a bar's Dirty Martini tells you as much about its recipe as it does about the base spirit.</p>

<h2>What To Check Before Buying In India</h2>
<p>There is no India-specific price or availability in the <a href="https://www.pernod-ricard.com/en/locations/uk/media/it-s-absolut-baby" target="_blank" rel="noopener noreferrer">company announcement</a>. If campaign merchandise or a bottle reaches Indian retailers, check the exact item, pack size and city-level listing. Do not use a social-media image or an overseas price as a local MRP.</p>
<p>For now, the confirmed news is the two-year creative partnership and its planned drops, glassware and events. Further product details would need a separate announcement.</p>
`.trim(),
  },
  {
    id: "guide-vodka-vs-gin-cocktails-taste-indian-food-2026",
    title: "Vodka vs Gin for Cocktails: Taste, Mixers and Indian Food",
    slug: "vodka-vs-gin-cocktails-taste-indian-food-2026",
    excerpt: "Vodka and gin may both start with neutral spirit, but juniper and other botanicals change what happens in a Martini or a long drink.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["vodka vs gin", "gin and tonic", "vodka cocktails", "Martini guide", "spirits guide India"],
    meta_title: "Vodka vs Gin: Taste and Cocktails | BevOry",
    meta_description: "Compare vodka and gin by flavour, Martini style and mixers. Find Indian food pairings and check exact bottle sizes and city prices on BevOry.",
    selection_note: "A high-intent comparison for Indian home bars, grounded in current FSSAI definitions and WSET tasting guidance, without invented prices or availability.",
    source_links: [
      "https://www.fssai.gov.in/upload/uploadfiles/files/Comp_Alcoholic_Beverages_IV_27_08_2025.pdf",
      "https://www.wsetglobal.com/knowledge-centre/blog/2024/premium-vodka-and-how-to-savour-it",
      "https://www.wsetglobal.com/knowledge-centre/blog/2023/june/08/understanding-flavours-in-gin",
      "https://www.beefeatergin.com/en-us/gin-cocktails/gin-tonic/",
    ],
    content: String.raw`
<p><strong>The practical difference between vodka and gin is flavour.</strong> Vodka usually gives a cocktail a cleaner base, while gin brings juniper and other botanicals into the drink. Neither is automatically stronger, better or more expensive: compare the ABV, expression and bottle size on the label.</p>

<h2>What Goes Into Each Spirit?</h2>
<p>India's <a href="https://www.fssai.gov.in/upload/uploadfiles/files/Comp_Alcoholic_Beverages_IV_27_08_2025.pdf" target="_blank" rel="noopener noreferrer">FSSAI alcoholic-beverage standards</a> define vodka as a distilled drink made from neutral spirit obtained from an agricultural mash, which may include rye, potato, cassava or grains. The same standards describe gin as a neutral agricultural spirit flavoured with juniper berries and/or other botanical flavouring agents. That does not mean every vodka tastes identical or that every gin has the same botanical recipe.</p>
<p><a href="https://www.wsetglobal.com/knowledge-centre/blog/2024/premium-vodka-and-how-to-savour-it" target="_blank" rel="noopener noreferrer">WSET's vodka guide</a> explains that raw material, distillation, filtration and water can affect texture and subtle flavour. A wheat vodka and a potato vodka are not guaranteed to feel exactly alike. Gin makes its flavour more overt: <a href="https://www.wsetglobal.com/knowledge-centre/blog/2023/june/08/understanding-flavours-in-gin" target="_blank" rel="noopener noreferrer">WSET's gin guide</a> connects juniper with pine-like aromas, coriander with spice and citrus peel with zest.</p>

<h2>Which Works Better In A Martini?</h2>
<p>Choose gin if you want the botanicals to remain part of every sip. Choose vodka if you would rather focus on the vermouth, chilled texture and any olive brine. A Dirty Martini is particularly sensitive to the amount of brine; changing the base spirit is only one variable. Make two small drinks with the same vermouth and garnish before deciding which version you prefer.</p>

<h2>What About Long Drinks?</h2>
<p>For a gin and tonic, expect the gin's herbs and citrus to meet tonic's bitterness. <a href="https://www.beefeatergin.com/en-us/gin-cocktails/gin-tonic/" target="_blank" rel="noopener noreferrer">Beefeater's own recipe</a> uses 50 ml of its London Dry gin and 125 ml of tonic over ice, with citrus garnish. That is one producer's serve, not a universal ratio. For a more neutral base, vodka with soda and fresh lime keeps the mixer prominent; vodka with ginger beer makes a sharper, sweeter long drink.</p>

<h2>Pair The Drink With Dinner</h2>
<p>Our pairing suggestions for a citrus-led gin and tonic are cucumber chaat, malai paneer tikka and tandoori prawns. A vodka soda with lime can sit beside coastal rava-fried fish or a lightly spiced vegetable skewer without adding another strong botanical note. Keep the chilli moderate when tasting the spirits side by side, because intense heat can hide subtle differences.</p>
<p>For Delhi, Mumbai, Gurgaon or Bengaluru prices, compare the exact expression and pack size on BevOry. Plain vodka, flavoured vodka, London Dry gin and fruit-flavoured gin should not be treated as interchangeable bottles. Choose the liquid for the drink you actually plan to make, then check its local listing.</p>
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
  const path = new URL("../docs/editorial/hourly-posts-2026-10-22-1010.json", import.meta.url);
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
