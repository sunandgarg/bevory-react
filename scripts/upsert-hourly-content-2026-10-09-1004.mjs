import "dotenv/config";
import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { PrismaClient } from "@prisma/client";

const publishedAt = "2026-10-09T04:34:54.626Z";

export const posts = [
  {
    id: "news-jack-daniels-halo-mk1-uk-packaging-award-2026",
    title: "Jack Daniel's Halo MK1 Wins UK Packaging Award",
    slug: "jack-daniels-halo-mk1-uk-packaging-award-2026",
    excerpt:
      "The McLaren-inspired Halo MK1 case wins Limited Edition Packaging of the Year. Here is what the award recognises and what whiskey sits inside.",
    cover_emoji: "news",
    category: "News",
    tags: ["Jack Daniel's", "McLaren Racing", "Halo MK1", "UK Packaging Awards 2026", "Tennessee whiskey news"],
    meta_title: "Jack Daniel's Halo MK1 Packaging Award 2026 | BevOry",
    meta_description:
      "Jack Daniel's x McLaren Halo MK1 wins a UK packaging award. Explore the engineered case, 58.7% Tennessee whiskey and the meaning of the win.",
    selection_note:
      "A fresh 8 October announcement, checked against the awards organiser and producer; the story distinguishes packaging recognition from a whiskey tasting award.",
    source_links: [
      "https://ukpackagingawards.co.uk/ukpackagingawards2026/en/page/2026-winners",
      "https://wineindustryadvisor.com/2026/10/08/hunter-luxury-makes-it-two-in-a-row-at-uk-packaging-awards-with-halo-mk1/",
      "https://www.hunterluxury.com/hunter-luxury-halo-mk1-uk-packaging-awards-2026/",
      "https://pressroom.jackdaniels.com/jack-daniels-debuts-design-forward-halo-mk1-tennessee-whiskey-with-mclaren-mastercard-formula-1-team/",
    ],
    content: String.raw`
<p><strong>Jack Daniel's x McLaren Halo MK1 has won Limited Edition Packaging of the Year at the UK Packaging Awards 2026.</strong> The <a href="https://ukpackagingawards.co.uk/ukpackagingawards2026/en/page/2026-winners" target="_blank" rel="noopener noreferrer">organiser's winners list</a> names Hunter Luxury alongside the release. An <a href="https://wineindustryadvisor.com/2026/10/08/hunter-luxury-makes-it-two-in-a-row-at-uk-packaging-awards-with-halo-mk1/" target="_blank" rel="noopener noreferrer">8 October announcement published by Wine Industry Advisor</a> reports the result.</p>

<h2>A Packaging Award, Not A Tasting Medal</h2>
<p>The winning category concerns the presentation pack. It should not be read as an award for the whiskey's flavour or as a ranking against other Tennessee whiskeys. For a drinker considering a collectible bottle, the distinction keeps the case and its contents in perspective.</p>

<h2>How The McLaren-Inspired Case Works</h2>
<p><a href="https://www.hunterluxury.com/hunter-luxury-halo-mk1-uk-packaging-awards-2026/" target="_blank" rel="noopener noreferrer">Hunter Luxury's account of the project</a> describes a structure inspired by Formula 1's Halo safety device. Pressing a concealed button beneath the McLaren emblem releases the bottle from its cradle.</p>
<p>The company worked with Brown-Forman and McLaren Racing on the pack. Its construction brings together more than 50 custom components, eight materials and eight manufacturing processes. Aluminium sections, carbon fibre-effect detailing and an Alcantara-inspired lining are among the features Hunter identifies. These are presentation materials, not whiskey ingredients.</p>

<h2>The Tennessee Whiskey Inside</h2>
<p>Jack Daniel's <a href="https://pressroom.jackdaniels.com/jack-daniels-debuts-design-forward-halo-mk1-tennessee-whiskey-with-mclaren-mastercard-formula-1-team/" target="_blank" rel="noopener noreferrer">30 April 2026 launch announcement</a> places production in Lynchburg, Tennessee. The grain recipe is 80% corn, 8% rye and 12% malted barley. The spirit undergoes sugar-maple charcoal mellowing before ageing in new American white oak barrels made with staves given extended outdoor seasoning.</p>
<p>Halo MK1 is bottled at 58.7% ABV. Master Distiller Chris Fletcher's notes describe maple, fruit and toasted oak aromas, followed by caramel, chocolate, tobacco and baking spice. Barrel spice and brown-sugar sweetness carry into the finish.</p>

<h2>Choose For The Pour As Well As The Display</h2>
<p>Our suggestion for this collector release is a small neat pour in a Glencairn, with optional drops of water. Consider the flavour profile and your interest in the McLaren design separately; a packaging trophy is not a reason on its own to pay a collector premium.</p>
`.trim(),
  },
  {
    id: "guide-cask-strength-whisky-meaning-water-single-cask",
    title: "Cask-Strength Whisky: Meaning, Water And Single-Cask Labels",
    slug: "cask-strength-whisky-meaning-water-single-cask",
    excerpt:
      "Cask strength describes bottling without dilution, not a guaranteed quality level or a single barrel. Learn how batches differ and how to add water.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["cask strength whisky", "single cask whisky", "adding water to whisky", "Laphroaig Cask Strength", "whisky buying guide India"],
    meta_title: "Cask-Strength Whisky: Meaning & Serving Guide | BevOry",
    meta_description:
      "Understand cask-strength vs single-cask whisky, batch ABV and adding water. Learn what to compare, then check your city's whisky prices on BevOry.",
    selection_note:
      "A focused label-and-serving query distinct from the existing ABV explainer, using WSET definitions and a specifically identified producer batch rather than generic strength claims.",
    source_links: [
      "https://www.wsetglobal.com/knowledge-centre/blog/2023/october/13/busting-spirits-industry-jargon/",
      "https://www.wsetglobal.com/knowledge-centre/blog/2026/from-40-to-cask-strength-understanding-whisky-abv",
      "https://www.laphroaig.com/whiskies/10-year-old-cask-strength-batch-13",
    ],
    content: String.raw`
<p><strong>Cask-strength whisky is bottled without dilution with water before bottling.</strong> That is the definition in <a href="https://www.wsetglobal.com/knowledge-centre/blog/2023/october/13/busting-spirits-industry-jargon/" target="_blank" rel="noopener noreferrer">WSET's spirits terminology guide</a>. It describes a production choice, not an age statement, a promise of better flavour or a requirement to drink the whisky neat.</p>

<h2>Cask Strength And Single Cask Are Different</h2>
<p>Cask strength concerns dilution; single cask concerns where the whisky comes from. A release can be cask strength without coming from just one barrel. <a href="https://www.wsetglobal.com/knowledge-centre/blog/2026/from-40-to-cask-strength-understanding-whisky-abv" target="_blank" rel="noopener noreferrer">WSET's whisky-strength guide</a> points to Aberlour A'Bunadh as a batch-released example and notes that single-cask whiskies are not always bottled undiluted.</p>
<p>Read those two terms separately. A batch number identifies a particular release; it is not a cask number. A higher ABV alone also does not establish that a whisky is cask strength.</p>

<h2>A Real Batch Example</h2>
<p><a href="https://www.laphroaig.com/whiskies/10-year-old-cask-strength-batch-13" target="_blank" rel="noopener noreferrer">Laphroaig 10 Year Old Cask Strength Batch 13</a> is listed by its producer at 57.9% ABV. It spends ten years in charred ex-bourbon barrels. Laphroaig describes vanilla, toffee, sea salt and spice on the palate, with a long finish carrying oak, iodine and salt.</p>
<p>The batch identification matters: 57.9% is this release's strength, not a number to apply to every Laphroaig Cask Strength bottle. When comparing city prices, match the expression, batch and bottle size.</p>

<h2>Adding Water Is A Choice, Not A Mistake</h2>
<p>WSET explicitly recognises dilution in the glass as a way to find a preferred drinking strength. Laphroaig also describes salt and peat smoke becoming evident with water in Batch 13.</p>
<p>Our serving suggestion is to use a Glencairn or another tulip-shaped glass, pour a small measure and add water a few drops at a time if desired. Smell and taste again between additions. There is no need to force a high-strength neat pour or follow one fixed dilution ratio for every bottle.</p>

<h2>Buy For Flavour, Not The Biggest Number</h2>
<p>WSET cautions that higher strength does not guarantee better whisky, and long maturation can leave cask-strength releases at much lower ABVs. Choose the cask profile and flavours you enjoy, then consider how you will serve it. Check your city's whisky prices on BevOry.</p>
`.trim(),
  },
  {
    id: "guide-is-rose-wine-sweet-or-dry-india",
    title: "Is Rose Wine Sweet Or Dry? How To Choose Your Bottle",
    slug: "is-rose-wine-sweet-or-dry-india",
    excerpt:
      "Pink does not automatically mean sweet. Compare dry Provence rose with Sula Zinfandel Rose, then choose a serving style and food pairing you enjoy.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["rose wine sweet or dry", "rose wine India", "Whispering Angel", "Sula Zinfandel Rose", "rose wine food pairings"],
    meta_title: "Is Rose Wine Sweet or Dry? Buying Guide | BevOry",
    meta_description:
      "Is rose wine sweet or dry? Explore pink-wine styles, Whispering Angel, Sula Zinfandel Rose and Indian food pairings. Check city prices on BevOry.",
    selection_note:
      "A practical sweetness question with Indian relevance, grounded in WSET and two producer examples; no sweetness level is inferred from bottle colour or a missing tasting-grid marker.",
    source_links: [
      "https://www.wsetglobal.com/knowledge-centre/blog/2023/november/29/types-of-ros%C3%A9-from-around-the-world",
      "https://www.wsetglobal.com/knowledge-centre/blog/2021/september/23/what-determines-the-colour-of-wine",
      "https://www.esclans.com/en-us/our-wines/whispering-angel",
      "https://sulavineyards.com/sula-classics/zinfandel-rose.php",
    ],
    content: String.raw`
<p><strong>Rose wine can be dry or have noticeable sweetness; pink colour does not settle the question.</strong> <a href="https://www.wsetglobal.com/knowledge-centre/blog/2023/november/29/types-of-ros%C3%A9-from-around-the-world" target="_blank" rel="noopener noreferrer">WSET's guide to rose styles</a> describes a range from dry, tart wines to fruity, off-dry examples. It identifies Cabernet d'Anjou in France's Loire Valley as a medium-sweet style.</p>

<h2>Why The Wine Is Pink</h2>
<p><a href="https://www.wsetglobal.com/knowledge-centre/blog/2021/september/23/what-determines-the-colour-of-wine" target="_blank" rel="noopener noreferrer">WSET's explanation of wine colour</a> describes how short contact with black grape skins can tint the juice pink before it is separated and fermented. Skin contact explains the colour; it is not a sugar measurement.</p>
<p>For shopping, a producer's dry or sweet description is more useful than choosing the palest bottle. Fruit aromas alone are not a reliable sweetness guide either: a wine can have generous fruit character and still be dry.</p>

<h2>Whispering Angel: A Dry Provence Example</h2>
<p><a href="https://www.esclans.com/en-us/our-wines/whispering-angel" target="_blank" rel="noopener noreferrer">Chateau d'Esclans describes Whispering Angel</a> as bone dry, despite a full, lush taste profile. Grapes come from the Esclans Valley and nearby vineyards in Cotes de Provence. The producer identifies Grenache, Cinsault and Rolle among its varieties and describes temperature-controlled stainless-steel fermentation and ageing.</p>

<h2>Sula Zinfandel Rose: Fruit With Balanced Sugar</h2>
<p><a href="https://sulavineyards.com/sula-classics/zinfandel-rose.php" target="_blank" rel="noopener noreferrer">Sula's Zinfandel Rose page</a> identifies 100% Zinfandel and describes citrus, cranberry and ripe-fruit notes, with acidity balancing residual sugar. This is a different description from Whispering Angel's explicitly bone-dry style; the two are not interchangeable simply because both wines are pink.</p>

<h2>Serve It With Dinner, Not Just Before Dinner</h2>
<p>Chateau d'Esclans recommends 8-12 degrees C for Whispering Angel. Our suggestion is a stemmed white-wine glass and a chilled bottle on the table. For a dry, fresh style, try malai paneer tikka, tandoori prawns or a lemon-dressed chickpea salad.</p>
<p>Sula recommends pakoras and chilli paneer or chicken with its Zinfandel Rose. Those are useful starting points for an Indian meal; choose the dish's chilli level to suit your own palate.</p>

<h2>Choose By Style First</h2>
<p>If you prefer little sweetness, look for an explicitly dry description. If you want some sweetness, choose a wine described that way rather than assuming all rose is sweet. Compare the same wine, vintage and bottle size when checking city prices on BevOry.</p>
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
  facts_last_reviewed: "2026-10-09",
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
  const path = new URL("../docs/editorial/hourly-posts-2026-10-09-1004.json", import.meta.url);
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
