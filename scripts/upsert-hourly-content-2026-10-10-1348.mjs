import "dotenv/config";
import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { PrismaClient } from "@prisma/client";

const publishedAt = "2026-10-10T08:18:15.257Z";

export const posts = [
  {
    id: "news-bruichladdich-laddie-rye-2026-us-release",
    title: "Bruichladdich Releases The Laddie Rye 2026 In The US",
    slug: "bruichladdich-laddie-rye-2026-us-release",
    excerpt:
      "Bruichladdich's second US-exclusive Laddie Rye pairs Islay-grown grain with bourbon barrels and American oak. The six-year-old release is bottled at 50% ABV.",
    cover_emoji: "news",
    category: "News",
    tags: ["The Laddie Rye", "Bruichladdich", "whisky industry news", "Islay whisky", "American oak"],
    meta_title: "Bruichladdich The Laddie Rye 2026 US Launch | BevOry",
    meta_description:
      "Bruichladdich announces The Laddie Rye 2026, a US-exclusive Islay whisky. Explore its grain origins, oak maturation and producer tasting notes.",
    selection_note:
      "A producer announcement dated 6 October gives this cycle a current global whisky story, with specific grain and cask details rather than an assumed Indian launch.",
    source_links: [
      "https://www.prnewswire.com/news-releases/bruichladdich-introduces-the-second-expression-of-the-laddie-rye-exclusively-in-the-us-302900281.html",
      "https://www.bruichladdich.com/pages/faqs",
    ],
    content: String.raw`
<p><strong>Bruichladdich has announced The Laddie Rye 2026, its second US-exclusive rye release.</strong> The <a href="https://www.prnewswire.com/news-releases/bruichladdich-introduces-the-second-expression-of-the-laddie-rye-exclusively-in-the-us-302900281.html" target="_blank" rel="noopener noreferrer">6 October producer announcement</a> describes a six-year-old whisky at 50% ABV, made from Islay-grown rye and malted barley. Its grain comes from a single-farm 2019 harvest, following the inaugural release in 2025.</p>

<h2>The Wood Behind The Spice</h2>
<p>Maturation combines first-fill bourbon barrels with second-fill American oak casks originally used as virgin oak. Some bourbon barrels were de-charred and re-charred. The producer's tasting notes point to clove, liquorice and toasted coconut, followed by pepper, caramel and orchard fruit, with citrus and warm oak lingering.</p>

<h2>Why The Anniversary Starts In 2001</h2>
<p>The release accompanies 25 years since Bruichladdich's revival, not its original founding. <a href="https://www.bruichladdich.com/pages/faqs" target="_blank" rel="noopener noreferrer">The distillery's history</a> begins with the Harvey brothers in 1881. After a 1994 closure, Mark Reynier and Simon Coughlin brought it back in 2001 with whisky-maker Jim McEwan.</p>
<p>Bruichladdich places its distillery beside Loch Indaal on Islay, in Scotland's Hebrides. Its account of the revival describes a determination to keep operations on the island and give local farming a central role. That background helps explain why the origin of the grain matters to the brand alongside the whisky's age.</p>

<h2>Our Suggested First Pour</h2>
<p>For a first tasting, our suggestion is a small neat measure in a tulip-shaped glass, with a little water added gradually if desired. Leave the mixer aside initially so you can decide which aromas appeal to you.</p>
<p>For food, try salted almonds or a small piece of aged cheddar before moving to something richer. Our Indian pairing starting point is gently seasoned mutton seekh. Treat the pairing as an experiment: take a bite, then a sip, and decide what you would change for the next pour.</p>
`.trim(),
  },
  {
    id: "guide-single-grain-scotch-meaning-vs-single-malt",
    title: "Single Grain Scotch: What Single Really Means",
    slug: "single-grain-scotch-meaning-vs-single-malt",
    excerpt:
      "Single grain means one distillery, not one cereal. Understand the category through Loch Lomond's malted-barley whisky and its continuous-still production.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["single grain Scotch", "single grain vs single malt", "Loch Lomond", "whisky buying guide India", "continuous stills"],
    meta_title: "Single Grain Scotch Meaning vs Single Malt | BevOry",
    meta_description:
      "What is single grain Scotch? Learn how it differs from single malt, with a Loch Lomond example and serving ideas. Check city prices on BevOry.",
    selection_note:
      "A precise whisky-category buying question, supported by the Scotch Whisky Association and a distillery example; not a repeat of the general Scotch-versus-bourbon guide.",
    source_links: [
      "https://www.scotch-whisky.org.uk/discover-scotch/enjoying-scotch/scotch-whisky-categories/",
      "https://www.lochlomondwhiskies.com/products/loch-lomond-single-grain-whisky",
    ],
    content: String.raw`
<p><strong>Single grain Scotch comes from one distillery; the name does not mean it uses only one type of grain.</strong> That distinction makes the category much less confusing when you see it beside single malt on a whisky shelf.</p>

<h2>One Distillery, Not One Cereal</h2>
<p>The <a href="https://www.scotch-whisky.org.uk/discover-scotch/enjoying-scotch/scotch-whisky-categories/" target="_blank" rel="noopener noreferrer">Scotch Whisky Association's category definitions</a> allow single grain to use malted barley with or without other malted or unmalted whole cereals. It must come from a single distillery and fall outside the single-malt definition.</p>
<p>Single malt has more specific production requirements: malted barley without other cereals, made at one distillery through batch distillation in copper pot stills. So ingredients alone do not settle the category; the production method matters too.</p>

<h2>Loch Lomond Makes The Difference Clear</h2>
<p><a href="https://www.lochlomondwhiskies.com/products/loch-lomond-single-grain-whisky" target="_blank" rel="noopener noreferrer">Loch Lomond Single Grain</a> uses exclusively malted barley, but the producer distils it in a continuous still. It is therefore a useful example of why an all-barley whisky need not be a single malt.</p>
<p>The distillery, in Alexandria, Scotland, bottles this expression at 46% ABV after American oak maturation. Its tasting notes describe baked apple and biscuit aromas, pineapple and lemon on the palate, and a gentle, fruity finish. Those are notes for this bottle, not a flavour promise for every single grain.</p>

<h2>Single Grain Is Not Blended Grain</h2>
<p>The SWA distinguishes blended grain as grain whiskies from more than one distillery. Blended Scotch combines malt and grain whiskies. These names describe composition and origin; our advice is to use them to understand the bottle, not as a ranking of what you should enjoy.</p>

<h2>Choosing And Serving A First Bottle</h2>
<p>Decide what you want from the pour before comparing prices. If fruit and vanilla appeal, Loch Lomond's own description gives you a starting point. For this expression, our suggestion is a small neat measure in a tulip glass, followed by a few drops of water if desired.</p>
<p>Try it alongside salted almonds, malai paneer tikka or a slice of aged gouda. Keep the first pairing simply seasoned, then adjust to your taste. When comparing city prices on BevOry, use the exact expression and bottle size rather than treating all single-grain whiskies as interchangeable.</p>
`.trim(),
  },
  {
    id: "guide-cabernet-sauvignon-vs-merlot-india",
    title: "Cabernet Sauvignon Vs Merlot: Which Red Wine Should You Buy?",
    slug: "cabernet-sauvignon-vs-merlot-india",
    excerpt:
      "Cabernet Sauvignon often brings firmer tannins; Merlot is known for a rounder feel. Compare their fruit, regional styles and Indian dinner pairings.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["Cabernet Sauvignon vs Merlot", "red wine buying guide", "Bordeaux", "Napa Valley", "Indian wine food pairings"],
    meta_title: "Cabernet Sauvignon vs Merlot: Taste & Food | BevOry",
    meta_description:
      "Compare Cabernet Sauvignon and Merlot by tannins, fruit and Indian food pairings. Find your dinner wine and check city prices on BevOry.",
    selection_note:
      "An evergreen red-wine comparison with a practical food-led buying answer, grounded in WSET's grape and service guidance without inventing city prices or search volumes.",
    source_links: [
      "https://www.wsetglobal.com/knowledge-centre/blog/2025/judging-cabernet-napa-versus-bordeaux-cabernet-sauvignon/",
      "https://www.wsetglobal.com/knowledge-centre/blog/2024/five-merlot-facts-every-wine-lover-should-know",
      "https://www.wsetglobal.com/knowledge-centre/blog/2022/april/26/ideal-serving-temperatures-and-top-tips-for-wine-storage",
    ],
    content: String.raw`
<p><strong>If you enjoy a firmer, more gripping red, Cabernet Sauvignon is a useful starting point. For a rounder feel and plum-led fruit, try Merlot.</strong> These are broad style clues, not rules for every bottle. Region, ripeness and winemaking can change the comparison.</p>

<h2>What Does Cabernet Sauvignon Taste Like?</h2>
<p><a href="https://www.wsetglobal.com/knowledge-centre/blog/2025/judging-cabernet-napa-versus-bordeaux-cabernet-sauvignon/" target="_blank" rel="noopener noreferrer">WSET educator Lauren Denyer's Cabernet guide</a> describes cassis, capsicum and occasional menthol, with naturally high acidity and firm tannins. Cassis means blackcurrant; tannin is the drying grip you notice rather than another fruit flavour.</p>
<p>Place makes a difference. Cabernet-led Left Bank Bordeaux blends, including those from Pauillac and Margaux, commonly incorporate Merlot for roundness. Warmer Napa Valley can produce riper dark-fruit character and more fully ripened tannins. A Cabernet from one region need not feel identical to another.</p>

<h2>Where Merlot Differs</h2>
<p><a href="https://www.wsetglobal.com/knowledge-centre/blog/2024/five-merlot-facts-every-wine-lover-should-know" target="_blank" rel="noopener noreferrer">WSET's Merlot explainer</a> highlights a velvety texture, approachable tannins and plum, cherry and chocolate flavours. It also identifies Merlot with Bordeaux's Right Bank.</p>
<p>For a first red-wine dinner, our suggestion is to try a Merlot described as plush or fruit-forward. If you already enjoy a noticeable tannic grip, look at Cabernet Sauvignon instead. Neither grape name is a quality grade, so leave room for the producer's particular style.</p>

<h2>Pair The Wine With Dinner</h2>
<p>Our Cabernet starting points are tandoori lamb chops, mutton seekh or grilled portobello mushrooms. For Merlot, try a gently spiced mutton rogan josh, mushroom masala or roast aubergine with aged cheddar. Keep the chilli moderate for a first pairing, then adjust the seasoning to your taste.</p>
<p>WSET educator Anjali Douglas recommends Merlot with beef massaman curry, an example of matching its plush texture to a rich, slow-cooked dish. Use that idea to plan a dinner pairing rather than automatically reserving Merlot for lighter food.</p>

<h2>Serve Both Cooler Than A Warm Dining Room</h2>
<p><a href="https://www.wsetglobal.com/knowledge-centre/blog/2022/april/26/ideal-serving-temperatures-and-top-tips-for-wine-storage" target="_blank" rel="noopener noreferrer">WSET's service guidance</a> places full-bodied reds around 15-18 degrees C. Our practical target is 16-18 degrees C in a stemmed red-wine glass. Chill the bottle gently if the room is warmer; ice-cold red can taste harsh.</p>
<p>Choose the texture you like, then compare that wine's vintage and bottle size when checking your city's prices on BevOry. The better dinner bottle is the one that suits your meal and your palate, not the grape with the grander reputation.</p>
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
  facts_last_reviewed: "2026-10-10",
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
  const path = new URL("../docs/editorial/hourly-posts-2026-10-10-1348.json", import.meta.url);
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
