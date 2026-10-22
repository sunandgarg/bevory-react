import "dotenv/config";
import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { PrismaClient } from "@prisma/client";

const cycleAt = "2026-10-22T06:30:22.682Z";
const reviewedAt = "2026-10-22";

export const posts = [
  {
    id: "news-jack-daniels-coy-hill-rye-single-barrel-2026",
    title: "Jack Daniel's Releases 2026 Coy Hill Single Barrel Rye",
    slug: "jack-daniels-coy-hill-rye-single-barrel-2026",
    excerpt: "The 2026 Coy Hill Rye is a ten-year, barrel-proof Single Barrel release. Here are its mash bill, strength range and US launch details.",
    cover_emoji: "news",
    category: "News",
    tags: ["Jack Daniel's", "Coy Hill Rye", "Tennessee rye", "single barrel", "whiskey news"],
    meta_title: "Jack Daniel's Coy Hill Rye 2026 Release | BevOry",
    meta_description: "Jack Daniel's 2026 Coy Hill Rye is a ten-year single-barrel release. See its mash bill, barrel-proof range, 700 ml US launch and India caveat.",
    selection_note: "A fresh 20 October distillery announcement with verifiable production and launch details; the US price is clearly separated from Indian availability.",
    source_links: [
      "https://www.breakingbourbon.com/bourbon-whiskey-press-releases/jack-daniels-introduces-coy-hill-rye-as-latest-in-its-single-barrel-special-release-series",
      "https://pressroom.jackdaniels.com/jack-daniels-introduces-tanyard-hill-rye-as-part-of-its-single-barrel-special-release-series/",
    ],
    content: String.raw`
<p><strong>Jack Daniel's has announced Coy Hill Rye as its 2026 Single Barrel Special Release.</strong> The Tennessee distillery says this is the first rye matured in its Coy Hill barrelhouses to be bottled as a Single Barrel release. The <a href="https://www.breakingbourbon.com/bourbon-whiskey-press-releases/jack-daniels-introduces-coy-hill-rye-as-latest-in-its-single-barrel-special-release-series" target="_blank" rel="noopener noreferrer">20 October distillery announcement</a> gives a ten-year maturation period and a barrel-proof range rather than a single strength shared by every bottle.</p>

<h2>What Is Coy Hill Rye?</h2>
<p>The whiskey uses Jack Daniel's Tennessee Rye mash bill: 70% rye, 18% corn and 12% malted barley. The distillery says it charcoal-mellowed the spirit before filling new, charred American white oak barrels in 2016. Those barrels spent ten years in barrelhouses 1 through 13 on Coy Hill, the distillery's highest-elevation maturation site. This is a rye whiskey, not a variant of the familiar Old No. 7 Tennessee Whiskey.</p>
<p>"Single Barrel" also matters here. Bottles come from individual barrels, so the strength and some flavour details can differ. The announced range is 128.7 to 148.5 US proof, or 64.35% to 74.25% alcohol by volume. Check the exact bottle label before quoting its ABV. That range is much stronger than many standard bottlings, and it is more useful to a buyer than treating the highest number as the strength of every bottle.</p>

<h2>How Does It Compare With Last Year's Release?</h2>
<p>Jack Daniel's annual series featured Tanyard Hill Rye in 2025. According to the distillery's <a href="https://pressroom.jackdaniels.com/jack-daniels-introduces-tanyard-hill-rye-as-part-of-its-single-barrel-special-release-series/" target="_blank" rel="noopener noreferrer">2025 announcement</a>, that whiskey matured on neighbouring Tanyard Hill. Both releases draw on the Tennessee Rye mash bill, but they are separate limited expressions from different maturation sites. The Coy Hill name is therefore about where the barrels aged, not a new rye grain or a cocktail style.</p>

<h2>What Does The Producer Say It Tastes Like?</h2>
<p>In its release, Jack Daniel's describes orchard fruit, honey and toasted oak on the nose; citrus sweetness, molasses, black tea and oak on the palate; and rye sweetness with barrel spice on the finish. Those are the producer's tasting notes, not a promise that every single barrel will taste identical. The distillery itself says the finish varies slightly by barrel.</p>

<h2>US Price And Indian Availability</h2>
<p>The company lists a suggested US retail price of $89.99 for a 700 ml bottle and says the limited release is available at select US stores. That figure is not an Indian MRP. The announcement does not confirm an India launch, a local distributor or a price in Mumbai, Delhi or Gurgaon. If a bottle appears at an Indian retailer, verify its expression, stated ABV, importer details, volume and local shelf price before comparing it with the US release.</p>
<p>For an adult opening a high-strength bottle, a small first pour gives room to assess it before adding a few drops of water. There is no need to drink at barrel strength to appreciate the difference between this release and a standard rye.</p>
`.trim(),
  },
  {
    id: "guide-champagne-vs-sparkling-wine-india-2026",
    title: "Champagne vs Sparkling Wine: What Indian Buyers Should Check",
    slug: "champagne-vs-sparkling-wine-india-2026",
    excerpt: "All Champagne is sparkling wine, but not all sparkling wine is Champagne. Learn the origin, production and label clues before comparing bottles in India.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["Champagne vs sparkling wine", "sparkling wine India", "Brut meaning", "wine buying guide", "Champagne label"],
    meta_title: "Champagne vs Sparkling Wine in India | BevOry",
    meta_description: "Champagne is a protected French origin, not a synonym for every bubbly wine. Compare methods, Brut labels, bottle sizes and Indian shelf prices.",
    selection_note: "An evergreen high-intent wine comparison relevant to Indian buyers; origin, fermentation methods and sweetness terms are supported by trade and producer-body sources.",
    source_links: [
      "https://www.champagne.fr/en/about-champagne/a-great-blended-wine/champagne-designation",
      "https://www.champagne.fr/en/about-champagne/how-champagne-is-made/bottling-and-second-fermentation",
      "https://www.wsetglobal.com/knowledge-centre/blog/2026/a-guide-to-sparkling-wine-production-methods-and-regional-styles",
      "https://www.champagne.fr/en/about-champagne/how-champagne-is-made/dosage",
      "https://www.champagne.fr/en/about-champagne/how-champagne-is-made/labelling",
    ],
    content: String.raw`
<p><strong>Champagne is sparkling wine from the protected Champagne designation in France; sparkling wine is the wider category.</strong> A bottle made elsewhere can be excellent, but its bubbles alone do not make it Champagne. For an Indian shopper choosing between two bottles, origin, style, sweetness, volume and local price are more useful than the shape of the bottle or the sound of the cork.</p>

<h2>What Makes A Wine Champagne?</h2>
<p>The <a href="https://www.champagne.fr/en/about-champagne/a-great-blended-wine/champagne-designation" target="_blank" rel="noopener noreferrer">Comité Champagne</a> describes Champagne as an appellation d'origine contrôlée, or AOC, tied to a defined French area and production rules. It is a place and a regulated designation, not a generic word for fizz. Indian-made sparkling wine and sparkling wines from Italy, Spain or other French regions should be described by their own origin and designation rather than called Champagne.</p>
<p>Champagne gets its bubbles through a second fermentation in the bottle. The <a href="https://www.champagne.fr/en/about-champagne/how-champagne-is-made/bottling-and-second-fermentation" target="_blank" rel="noopener noreferrer">producer body explains</a> that the wine is sold in the bottle in which this fermentation took place. That tells you about its method; it does not mean that every other bottle-fermented sparkling wine is Champagne.</p>

<h2>How Is Other Sparkling Wine Made?</h2>
<p>There is more than one route to a sparkling wine. The <a href="https://www.wsetglobal.com/knowledge-centre/blog/2026/a-guide-to-sparkling-wine-production-methods-and-regional-styles" target="_blank" rel="noopener noreferrer">Wine &amp; Spirit Education Trust</a> explains that traditional-method wines undergo their second fermentation in the bottle, while tank-method wines have it in a sealed tank. Both methods can produce enjoyable wines, and the method alone is not a quality score. If you want the fuller, lees-influenced character often associated with traditional-method wines, look for that production wording. If you prefer a fresher, fruit-led style, a tank-method wine may be a better fit.</p>

<h2>Does Brut Mean Champagne?</h2>
<p>No. "Brut" refers to a dry sweetness style, not to the region. For Champagne, the <a href="https://www.champagne.fr/en/about-champagne/how-champagne-is-made/dosage" target="_blank" rel="noopener noreferrer">Comité Champagne's dosage guide</a> places Brut below 12 grams of sugar per litre and Extra-Dry between 12 and 17 grams per litre. The name sounds counterintuitive: Extra-Dry is sweeter than Brut in that classification. Do not use those exact Champagne thresholds to judge every bottle from every country; read the specific wine's label and producer information.</p>

<h2>What Should You Check Before Buying In India?</h2>
<p>Read the front and back labels for the actual wine name, country of origin, style, alcohol by volume and bottle capacity. The <a href="https://www.champagne.fr/en/about-champagne/how-champagne-is-made/labelling" target="_blank" rel="noopener noreferrer">Champagne labelling guide</a> lists the designation, sugar content, ABV, volume and producer details among its compulsory information. For any imported bottle in India, also check the local importer and the retail label rather than assuming a foreign online price applies at home.</p>
<p>When comparing a Champagne with another sparkling wine in Mumbai, Delhi, Bengaluru or Goa, compare the same volume and the price at a licensed local seller. State-specific taxes and retail conditions can make prices differ; there is no honest nationwide price for the category. For a celebration, pick by the style you and your guests actually like: a dry Brut for those who prefer less sweetness, or a softer, fruit-forward sparkling wine where that suits the food. Serve chilled and open carefully, keeping the cork pointed away from people.</p>
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
  const path = new URL("../docs/editorial/hourly-posts-2026-10-22-1200.json", import.meta.url);
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
