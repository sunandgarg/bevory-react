import "dotenv/config";
import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { PrismaClient } from "@prisma/client";

const publishedAt = "2026-10-08T09:31:01.924Z";

export const posts = [
  {
    id: "news-woodford-reserve-30th-anniversary-releases-2026",
    title: "Woodford Reserve Marks 30 Years With Two Distillery Releases",
    slug: "woodford-reserve-30th-anniversary-releases-2026",
    excerpt:
      "Woodford Reserve's anniversary brings a Triple Pot Still release and a Louisville Stoneware decanter with Elizabeth McCall's Double Oaked selection.",
    cover_emoji: "news",
    category: "News",
    tags: ["Woodford Reserve", "bourbon releases", "Triple Pot Still", "Elizabeth McCall", "Kentucky whiskey"],
    meta_title: "Woodford Reserve 30th Anniversary Releases | BevOry",
    meta_description:
      "Woodford Reserve marks 30 years with Triple Pot Still whiskey and a Double Oaked ceramic decanter. See the Kentucky release dates and details.",
    selection_note:
      "A 7 October producer announcement with two distinct releases and specific October dates; the story separates Kentucky gift-shop sales from Indian availability.",
    source_links: [
      "https://www.bevnet.com/pr/2026/10/07/woodford-reserve-celebrates-30-years-with-exclusive-anniversary-releases",
      "https://www.woodfordreserve.com/tour/legacytour/",
    ],
    content: String.raw`
<p><strong>Woodford Reserve is marking its 30th anniversary with two limited releases at its Kentucky distillery.</strong> In a <a href="https://www.bevnet.com/pr/2026/10/07/woodford-reserve-celebrates-30-years-with-exclusive-anniversary-releases" target="_blank" rel="noopener noreferrer">7 October announcement posted by the producer on BevNET</a>, the brand sets out a Triple Pot Still whiskey and a ceramic decanter containing a specially selected Double Oaked Single Barrel.</p>

<h2>Triple Pot Still Arrives First</h2>
<p>The Distillery Series release uses whiskey distilled entirely at Woodford Reserve through three copper pot stills. Sales at the distillery gift shop began on 7 October, according to the announcement. The production detail belongs to this release; it should not be read as a description of every Woodford bottle.</p>

<h2>A Ceramic Decanter Follows On 16 October</h2>
<p>The second release pairs a Louisville Stoneware ceramic decanter with a personal selection of Double Oaked Single Barrel chosen by master distiller Elizabeth McCall. The company gives 16 October as its gift-shop release date.</p>

<h2>The Anniversary Includes The Distillery's People</h2>
<p>Woodford Reserve was introduced in October 1996. Its <a href="https://www.woodfordreserve.com/tour/legacytour/" target="_blank" rel="noopener noreferrer">anniversary tour page</a> also features Master Distiller Emeritus Chris Morris, with a programme covering the site's 1990s rebuilding and triple-pot-still process. That adds a production-history angle alongside the commemorative packaging.</p>

<h2>What This Means For Indian Buyers</h2>
<p>Our reading of the announcement is a destination release, not an Indian retail launch. A collector considering either bottle should distinguish the liquid, packaging and purchase location. An anniversary date alone does not establish rarity, future resale value or better flavour than a regular expression.</p>
`.trim(),
  },
  {
    id: "guide-is-jack-daniels-bourbon-tennessee-whiskey",
    title: "Is Jack Daniel's Bourbon? Tennessee Whiskey Explained",
    slug: "is-jack-daniels-bourbon-tennessee-whiskey",
    excerpt:
      "Old No. 7 is labelled Tennessee whiskey and meets bourbon's production requirements. Its sugar-maple charcoal step explains the distinction.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["is Jack Daniels bourbon", "Tennessee whiskey", "Old No. 7", "charcoal mellowing", "American whiskey India"],
    meta_title: "Is Jack Daniel's Bourbon? Tennessee Whiskey | BevOry",
    meta_description:
      "Understand Jack Daniel's Old No. 7, bourbon rules and charcoal mellowing. Get serving ideas, Indian food pairings and check city prices on BevOry.",
    selection_note:
      "A precise bottle-classification question not covered by the existing broad bourbon-versus-Scotch guide; official whiskey standards and producer explanations resolve the misconception.",
    source_links: [
      "https://www.jackdaniels.com/en-gb/podcasts/jack-daniels-around-barrel-season-1-episode-2",
      "https://www.ecfr.gov/current/title-27/chapter-I/subchapter-A/part-5/subpart-I/section-5.143",
      "https://pressroom.jackdaniels.com/products/",
      "https://www.brown-forman.com/brand/jack-daniels",
    ],
    content: String.raw`
<p><strong>Jack Daniel's Old No. 7 is sold as Tennessee whiskey, but charcoal mellowing does not prevent it from meeting bourbon's production requirements.</strong> That is the distinction behind the familiar question, "Is Jack Daniel's bourbon?" The label describes the identity the producer uses; the production rules explain the overlap.</p>

<h2>Why The Answer Is Not A Simple No</h2>
<p>In <a href="https://www.jackdaniels.com/en-gb/podcasts/jack-daniels-around-barrel-season-1-episode-2" target="_blank" rel="noopener noreferrer">Jack Daniel's own production discussion</a>, Jeff Arnett explains that the whiskey meets bourbon's requirements and undergoes additional charcoal mellowing. The producer identifies it as Tennessee whiskey.</p>
<p>The labels are not contradictory. Saying Old No. 7 cannot qualify as bourbon because it touches charcoal is the misconception.</p>

<h2>What Bourbon Requires</h2>
<p>The <a href="https://www.ecfr.gov/current/title-27/chapter-I/subchapter-A/part-5/subpart-I/section-5.143" target="_blank" rel="noopener noreferrer">US whisky standards</a> require bourbon to be distilled and aged in the United States, using a grain mash with at least 51% corn. Distillation must not exceed 160 US proof, and the spirit enters new charred oak at no more than 125 proof. Bourbon does not permit added colouring or flavouring materials.</p>
<p>It does not have to come from Kentucky. The separate designation straight bourbon requires at least two years of ageing. These are production terms, not tasting scores.</p>

<h2>Charcoal Mellowing Comes Before The Barrel</h2>
<p>Arnett places the charcoal step before barrel ageing. <a href="https://www.brown-forman.com/brand/jack-daniels" target="_blank" rel="noopener noreferrer">Brown-Forman's production description</a> specifies ten feet of sugar-maple charcoal and new charred American white oak barrels for Old No. 7, made in Lynchburg, Tennessee. This is different from simply filtering a finished whiskey before bottling.</p>
<p>Our takeaway: do not translate "charcoal" into a peat-smoke tasting note. Here, the term describes a processing step, not a smoky flavour claim.</p>

<h2>Old No. 7 Is Not The Whole Range</h2>
<p>The <a href="https://pressroom.jackdaniels.com/products/" target="_blank" rel="noopener noreferrer">official product descriptions</a> give Old No. 7 caramel, vanilla and wood notes. Gentleman Jack is mellowed before and after ageing, while Tennessee Honey combines the whiskey with a honey liqueur. Those are different expressions, not interchangeable bottles of the same liquid.</p>

<h2>Serving, Food And City Prices</h2>
<p>Our serving suggestion for Old No. 7 is a small neat pour in a tulip-shaped glass, followed by a few drops of water. A rocks glass or a measured whiskey-and-soda also suits a casual serve.</p>
<p>Try mutton seekh kebabs, mushroom tikka, grilled corn with butter, roasted almonds or 70% dark chocolate. These are pairing suggestions for its caramel-and-wood profile, not ingredients in the whiskey.</p>
<p>For an Indian price comparison, select your city on BevOry and match Old No. 7 with the same bottle size. Gentleman Jack, Tennessee Honey and Single Barrel belong in separate comparisons.</p>
`.trim(),
  },
  {
    id: "guide-london-dry-vs-distilled-gin-meaning-india",
    title: "London Dry Vs Distilled Gin: What The Label Tells You",
    slug: "london-dry-vs-distilled-gin-meaning-india",
    excerpt:
      "London Dry describes a way of making gin, not a requirement to make it in London. Learn how botanicals, tonic and garnish shape your choice.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["London Dry gin meaning", "distilled gin", "gin botanicals", "Beefeater", "gin and tonic India"],
    meta_title: "London Dry Vs Distilled Gin: Differences | BevOry",
    meta_description:
      "Compare London Dry and distilled gin: production, botanicals, tonic and Indian pairings. Find your preferred style and check city prices on BevOry.",
    selection_note:
      "An evergreen label-comparison query with practical gin-and-tonic guidance and Indian pairings, distinct from earlier wine, beer and whisky explainers.",
    source_links: [
      "https://www.beefeatergin.com/en/frequently-asked-questions/",
      "https://www.wsetglobal.com/knowledge-centre/blog/2023/june/08/understanding-flavours-in-gin",
      "https://www.beefeatergin.com/en-gb/distillery/",
    ],
    content: String.raw`
<p><strong>London Dry is a production style within distilled gin, not a requirement to make the spirit in London.</strong> The useful difference is how botanical flavours enter the gin and what can be added afterwards. Neither label, on its own, tells you which bottle you will prefer.</p>

<h2>London Dry Describes The Making</h2>
<p>As <a href="https://www.beefeatergin.com/en/frequently-asked-questions/" target="_blank" rel="noopener noreferrer">Beefeater's explanation</a> sets out, London Dry gets its botanical flavour through distillation, rather than later additions of flavouring. It can be made anywhere in the world. Distilled gin allows more flexibility after distillation, including added flavourings, sweetening and colouring.</p>
<p>That flexibility is a permission, not a recipe shared by every distilled gin. A bottle in the broader category is not automatically sweet, coloured or less carefully made. Look at the actual botanical profile before deciding.</p>

<h2>Juniper Is The Starting Point, Not The Whole Taste</h2>
<p><a href="https://www.wsetglobal.com/knowledge-centre/blog/2023/june/08/understanding-flavours-in-gin" target="_blank" rel="noopener noreferrer">WSET's gin-flavour guide</a> connects juniper with pine-like aromas, coriander with spice, angelica with earthy notes and citrus peel with zest. Botanical proportions and the way a distiller extracts flavour help shape the result.</p>
<p>That is why two London Dry gins can taste noticeably different. The shared production term does not mean an identical balance of citrus, spice and juniper.</p>

<h2>A Real London-Made Example</h2>
<p>Beefeater happens to make its gin in Kennington, London. The <a href="https://www.beefeatergin.com/en-gb/distillery/" target="_blank" rel="noopener noreferrer">distillery's production account</a> names nine botanicals, including Sicilian lemon peel and Seville orange peel, steeped for 24 hours before distillation. Its London location is a brand fact; it is not a geographic rule for all London Dry gin.</p>

<h2>Choose The Tonic Before Adding A Complicated Garnish</h2>
<p>Our comparison method is simple: use the same measured gin pour, tonic and ice for both bottles. Begin with a restrained garnish so it does not dominate the glass. You can then decide how much citrus or spice you enjoy.</p>
<p>For Beefeater London Dry, the producer suggests one part gin to three parts tonic, plenty of ice, and lemon and orange. Use a highball glass or a roomy stemmed glass. A sweeter tonic changes the finished drink, even when the gin itself is dry.</p>

<h2>Indian Food Pairings And Buying Choices</h2>
<p>Our suggestions for a juniper-and-citrus gin and tonic are malai paneer tikka, tandoori prawns, cucumber chaat, coastal rava-fried fish and salted almonds. Start with moderate chilli and adjust the pairing to the drink.</p>
<p>For city prices on BevOry, compare the exact expression and bottle size. A brand's London Dry, pink gin and other flavoured releases can make quite different drinks. The better choice is the bottle that suits your tonic, meal and preferred flavours, not the more elaborate label.</p>
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
  const path = new URL("../docs/editorial/hourly-posts-2026-10-08-1501.json", import.meta.url);
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
