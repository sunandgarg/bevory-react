import "dotenv/config";
import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { PrismaClient } from "@prisma/client";

const publishedAt = "2026-10-10T08:40:47.182Z";

export const posts = [
  {
    id: "news-on-the-rocks-chocolate-martini-launch-2026",
    title: "On The Rocks Launches A Limited-Edition Chocolate Martini",
    slug: "on-the-rocks-chocolate-martini-launch-2026",
    excerpt:
      "On The Rocks brings EFFEN Vodka and chocolate liqueur together in a dairy-free, ready-to-serve cocktail announced on 6 October.",
    cover_emoji: "news",
    category: "News",
    tags: ["On The Rocks", "Chocolate Martini", "cocktail industry news", "ready-to-serve cocktails", "EFFEN Vodka"],
    meta_title: "On The Rocks Chocolate Martini Launch 2026 | BevOry",
    meta_description:
      "On The Rocks introduces a limited-edition Chocolate Martini. Discover the ingredients, cold serve and how it differs from a classic dry Martini.",
    selection_note:
      "Recent launch coverage with named ingredients and a practical cold serve; distribution geography stays explicitly US.",
    source_links: [
      "https://www.prnewswire.com/news-releases/on-the-rocks-launches-its-new-limited-edition-chocolate-martini-as-a-decadent-twist-on-a-timeless-classic-302898888.html",
      "https://iba-world.com/iba-cocktail/dry-martini/",
    ],
    content: String.raw`
<p><strong>On The Rocks announced a limited-edition Chocolate Martini on 6 October 2026.</strong> Its <a href="https://www.prnewswire.com/news-releases/on-the-rocks-launches-its-new-limited-edition-chocolate-martini-as-a-decadent-twist-on-a-timeless-classic-302898888.html" target="_blank" rel="noopener noreferrer">producer announcement</a> names EFFEN Vodka, chocolate liqueur and recipe creator Joaquin Simo, and describes the cocktail as dairy-free.</p>

<h2>A Dessert-Style Cocktail In A Bottle</h2>
<p>The brand describes cocoa, dark chocolate and vanilla with a smooth finish. Limited-time US distribution uses 375ml bottles.</p>
<p>The producer's cold serve: chill the bottle, shake a measure over ice and strain into a chilled Martini glass, adding a dark-chocolate curl.</p>

<h2>Not The Same Drink As A Dry Martini</h2>
<p>The shared name can hide a substantial difference. The <a href="https://iba-world.com/iba-cocktail/dry-martini/" target="_blank" rel="noopener noreferrer">International Bartenders Association's Dry Martini recipe</a> combines 60ml gin with 10ml dry vermouth. It is stirred over ice, strained into a chilled cocktail glass and finished with lemon-peel oil or an olive.</p>
<p>Compare those ingredients with this vodka-and-chocolate release and the distinction becomes clear: this is a dessert-inspired drink, not the herbal gin-and-vermouth classic. Our advice when ordering a Martini is to name the version you want. The glass shape alone will not tell a bartender your preference.</p>

<h2>Where It Fits At The Table</h2>
<p>Our serving suggestion is to give a chocolate-led cocktail its own moment after dinner rather than pairing it with every course. Try a small square of 70% dark chocolate or a few salted almonds first. If you prefer an Indian sweet alongside it, our starting point is a modest piece of kaju katli.</p>
<p>Keep extra syrup and cream aside for the first taste; decide how you like the cocktail before adding another topping. A simple garnish also makes it easier to notice the drink itself instead of turning the glass into a dessert plate.</p>
`.trim(),
  },
  {
    id: "guide-porter-vs-stout-beer-taste-strength-india",
    title: "Porter Vs Stout: Taste, Strength And Which Beer To Choose",
    slug: "porter-vs-stout-beer-taste-strength-india",
    excerpt:
      "Porter and stout share a history, but stout is not automatically stronger. Compare English porter, Irish stout and a Guinness porter example.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["porter vs stout", "dark beer guide", "Irish stout", "English porter", "beer food pairings India"],
    meta_title: "Porter vs Stout: Taste & Strength Explained | BevOry",
    meta_description:
      "Compare porter and stout by roast, sweetness and ABV, with Indian food pairings. Choose your dark beer and check city prices on BevOry.",
    selection_note:
      "A specific dark-beer comparison that answers flavour and strength questions through BJCP style guidance and a producer example, without assuming local stock or search-volume figures.",
    source_links: [
      "https://www.bjcp.org/style/2021/13/",
      "https://www.bjcp.org/style/2021/15/",
      "https://www.guinness.com/en-gb/beers/guinness-west-indies-porter",
    ],
    content: String.raw`
<p><strong>Porter and stout are related dark-beer styles, not a simple weak-versus-strong divide.</strong> For an approachable first comparison, think of English porter as often chocolate-and-caramel-led, while Irish stout commonly puts coffee-like roast and a drier finish in the foreground.</p>

<h2>They Began As Close Relatives</h2>
<p>The <a href="https://www.bjcp.org/style/2021/13/" target="_blank" rel="noopener noreferrer">Beer Judge Certification Program's English Porter guidance</a> traces porter to early-1700s London and identifies it as the predecessor of stouts, originally known as stout porters. Their shared roots help explain why some bottles taste more alike than the names suggest.</p>
<p>For modern English porter, the BJCP describes toasted or biscuit-like malt, chocolate and caramel, with restrained roast. The finish can run from fairly dry to slightly sweet. That is a useful style description, not a promise that every porter will taste like a chocolate dessert.</p>

<h2>What Irish Stout Brings To The Glass</h2>
<p>The <a href="https://www.bjcp.org/style/2021/15/" target="_blank" rel="noopener noreferrer">BJCP's Irish Stout profile</a> emphasises coffee-like aromas, roasted grain and bitterness, sometimes with dark chocolate. Its finish can be dry or more balanced with a little malt sweetness. Nitro dispense can add creaminess; an ordinary bottled version need not reproduce that texture.</p>

<h2>Is Stout Always Stronger?</h2>
<p>No. The BJCP's style ranges overlap: English porter is listed at 4-5.4% ABV and Irish stout at 3.8-5%. These are judging-style ranges, not limits for every beer carrying either name. Use the specific beer's ABV when comparing strength.</p>
<p><a href="https://www.guinness.com/en-gb/beers/guinness-west-indies-porter" target="_blank" rel="noopener noreferrer">Guinness's UK page for West Indies Porter</a> provides a useful counterexample: it lists 6% ABV, with toffee, caramel and chocolate notes. Its ingredients also include roasted barley, so roasted barley alone is not a reliable way to separate every porter from every stout.</p>

<h2>Pick By Flavour, Then Plan The Food</h2>
<p>If caramel and gentler roast appeal, our suggestion is to begin with an English-style porter. If you prefer coffee-like bitterness, an Irish stout is a sensible first comparison. Pour a small amount into a clean beer glass and notice the aroma before taking a sip.</p>
<p>Our porter pairing ideas are tandoori mushrooms, aged cheddar or grilled aubergine. With a roast-led stout, try mutton seekh, galouti kebabs or a small square of dark chocolate. Choose the dish and seasoning you enjoy, then compare the exact beer and pack size when checking city prices on BevOry.</p>
`.trim(),
  },
  {
    id: "guide-dry-vs-sweet-vermouth-cocktails-storage",
    title: "Dry Vs Sweet Vermouth: What To Buy For Your Cocktail",
    slug: "dry-vs-sweet-vermouth-cocktails-storage",
    excerpt:
      "Dry, sweet and bianco vermouth are not interchangeable. Learn which style a Martini or Negroni needs and why opened bottles belong in the fridge.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["dry vs sweet vermouth", "bianco vermouth", "Dry Martini", "Negroni", "home bar India"],
    meta_title: "Dry vs Sweet Vermouth: Cocktails & Storage | BevOry",
    meta_description:
      "Choose dry, sweet or bianco vermouth for a Martini or Negroni. Learn serving and storage tips, then check your city's prices on BevOry.",
    selection_note:
      "A practical cocktail-ingredient buying guide, supported by WSET and official IBA recipes; it covers style selection and storage rather than repeating earlier RTD or spritz posts.",
    source_links: [
      "https://www.wsetglobal.com/knowledge-centre/blog/2025/everybody-s-talking-about-vermouth/",
      "https://www.wsetglobal.com/knowledge-centre/blog/2024/march/20/what-is-vermouth-a-quick-guide",
      "https://iba-world.com/iba-cocktail/dry-martini/",
      "https://iba-world.com/iba-cocktail/negroni/",
    ],
    content: String.raw`
<p><strong>Choose dry vermouth for a classic Dry Martini and sweet red vermouth for a Negroni.</strong> They do different jobs in the glass. Buying whichever bottle says vermouth can leave you with a cocktail that tastes quite different from the one you planned.</p>

<h2>Vermouth Starts With Wine</h2>
<p><a href="https://www.wsetglobal.com/knowledge-centre/blog/2025/everybody-s-talking-about-vermouth/" target="_blank" rel="noopener noreferrer">WSET's vermouth overview</a> describes wine fortified with spirit and flavoured with wormwood and other botanicals. Sugar commonly balances the botanical bitterness. The base wine and flavourings help explain why different vermouths can taste herbal, citrus-led or spiced.</p>

<h2>Dry, Sweet And Bianco Are Different Styles</h2>
<p><a href="https://www.wsetglobal.com/knowledge-centre/blog/2024/march/20/what-is-vermouth-a-quick-guide" target="_blank" rel="noopener noreferrer">WSET's style guide</a> describes dry vermouth as typically pale and less sweet, but not entirely without sweetness. Sweet vermouth is commonly red; many modern examples start with white wine and gain colour from caramel.</p>
<p>Bianco can look much like dry vermouth while being noticeably sweeter, often with vanilla notes. WSET's overview makes that distinction clear. Colour alone is therefore a poor shortcut: for your first bottle, choose by the named style and the cocktail you want to make.</p>

<h2>Two Classic Recipes Show The Difference</h2>
<p>The <a href="https://iba-world.com/iba-cocktail/dry-martini/" target="_blank" rel="noopener noreferrer">IBA Dry Martini</a> uses 60ml gin and 10ml dry vermouth. Stir them over ice, strain into a chilled cocktail glass and finish with lemon-peel oil or an olive.</p>
<p>The <a href="https://iba-world.com/iba-cocktail/negroni/" target="_blank" rel="noopener noreferrer">IBA Negroni</a> uses 30ml each of gin, Campari and sweet red vermouth. Build it in a chilled old-fashioned glass with ice, stir gently and garnish with half an orange slice.</p>
<p>A dry Martini means less vermouth relative to the spirit; a wet Martini means more. As WSET explains, that wording concerns the proportion, not a switch from dry vermouth to sweet vermouth. State your preference when ordering rather than relying on the word dry alone.</p>

<h2>Refrigerate After Opening</h2>
<p>WSET recommends keeping opened vermouth in the fridge because it begins to oxidise after opening. Our practical suggestion is to close the bottle promptly and buy a size that suits how often you make cocktails.</p>
<p>You can also explore a small pour over ice. Our snack suggestions are salted almonds, olives or malai paneer tikka; with a sweet red style, try aged cheddar or gently spiced tandoori mushrooms. Compare the same vermouth style and bottle size when checking city prices on BevOry.</p>
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

const banned = /\b(?:symphony|testament|delve|nestled|embark|liquid gold|rich tapestry)\b|elevate your senses|dance on the palate|whether you['\u2019]re|information pending verification|BevOry has not assigned|verified ingredient statement is not stored|availability is not assumed|adults can compare like with like|editorial guardrail|no tasting notes found|the producer does not publish/i;
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
  const path = new URL("../docs/editorial/hourly-posts-2026-10-10-1410.json", import.meta.url);
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
