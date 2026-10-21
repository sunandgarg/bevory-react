import "dotenv/config";
import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { PrismaClient } from "@prisma/client";

const publishedAt = "2026-10-10T04:48:12.749Z";

export const posts = [
  {
    id: "news-meiomi-blanc-white-wine-launch-october-2026",
    title: "Meiomi Launches Blanc, A California White Wine Blend",
    slug: "meiomi-blanc-white-wine-launch-october-2026",
    excerpt:
      "Meiomi's 8 October launch brings together unoaked Chardonnay, Viognier and Malvasia from California's Central Coast, including Arroyo Seco.",
    cover_emoji: "news",
    category: "News",
    tags: ["Meiomi Blanc", "wine industry news", "California wine", "white wine blends", "Arroyo Seco"],
    meta_title: "Meiomi Blanc White Wine Launch 2026 | BevOry",
    meta_description:
      "Meiomi launches Blanc with Chardonnay, Viognier and Malvasia. Discover its California origins, producer tasting notes and place in the range.",
    selection_note:
      "A fresh producer announcement dated 8 October, with a named blend and vineyard region; useful launch coverage without assuming an Indian release or price.",
    source_links: [
      "https://www.prnewswire.com/news-releases/meiomi-wines-expands-its-portfolio-with-the-launch-of-meiomi-blanc-white-wine-302902676.html",
      "https://www.meiomi.com/",
    ],
    content: String.raw`
<p><strong>Meiomi has introduced Blanc White Wine, a California blend of unoaked Chardonnay, Viognier and Malvasia.</strong> The winery announced the release on 8 October 2026 in a <a href="https://www.prnewswire.com/news-releases/meiomi-wines-expands-its-portfolio-with-the-launch-of-meiomi-blanc-white-wine-302902676.html" target="_blank" rel="noopener noreferrer">producer statement distributed by PR Newswire</a>. Fruit comes from selected Central Coast vineyards, including Arroyo Seco.</p>

<h2>A Blend, Not Another Sauvignon Blanc</h2>
<p>Blanc follows the brand's Sauvignon Blanc introduction, but it is a separate wine. The three named grapes are Chardonnay, Viognier and Malvasia; Sauvignon Blanc is not among them. For a shopper, the distinction is worth remembering when ordering by name rather than simply asking for Meiomi's white wine.</p>
<p>Meiomi's tasting notes describe pineapple and tropical-fruit character alongside orange blossom, citrus and white nectarine. The emphasis is on fruit and floral aromas, giving drinkers a first indication of the style before choosing a bottle.</p>

<h2>Where It Fits In The Meiomi Range</h2>
<p><a href="https://www.meiomi.com/" target="_blank" rel="noopener noreferrer">Meiomi's own account of its history</a> dates the brand to 2006 and places Pinot Noir at the centre of its early success. Its current range also includes Chardonnay, Cabernet Sauvignon, Sauvignon Blanc and Red Blend, alongside lower-alcohol Bright wines.</p>
<p>Blanc now sits alongside those wines as the multi-grape white option. For someone browsing the range, its Chardonnay-Viognier-Malvasia composition is the useful distinction: Blanc and Sauvignon Blanc are different wines despite the similar names.</p>

<h2>What The Launch Means For Wine Drinkers</h2>
<p>Our reading of the release is straightforward: Meiomi is giving drinkers another way into its portfolio, this time through a multi-grape white. The announcement is a reason to explore the style, not proof that a blend is better than a single-variety wine.</p>
<p>For a food starting point, our suggestion is a chilled glass with malai paneer tikka, tandoori prawns or a peach-and-rocket salad. Keep the seasoning gentle for a first pairing so you can notice the wine's character alongside the dish.</p>
`.trim(),
  },
  {
    id: "guide-screw-cap-vs-cork-wine-quality-india",
    title: "Screw Cap Vs Cork Wine: Is One Better?",
    slug: "screw-cap-vs-cork-wine-quality-india",
    excerpt:
      "A screw cap does not make wine cheap, and a cork does not promise quality. Learn what the closure tells you, plus the signs of cork taint and heat damage.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["screw cap vs cork", "wine buying guide India", "corked wine", "wine quality", "wine faults"],
    meta_title: "Screw Cap vs Cork Wine: Quality Explained | BevOry",
    meta_description:
      "Is screw-cap wine inferior? Understand cork taint, closure myths and bottle condition before buying. Compare your city's wine prices on BevOry.",
    selection_note:
      "A practical buying myth with a clear answer, supported by WSET rather than closure-maker marketing; distinct from the earlier opened-wine storage guide.",
    source_links: [
      "https://www.wsetglobal.com/knowledge-centre/blog/2022/may/05/six-common-wine-myths-debunked",
      "https://www.wsetglobal.com/knowledge-centre/blog/2023/august/24/common-wine-faults-and-how-to-spot-them",
    ],
    content: String.raw`
<p><strong>No: a screw cap is not a sign of inferior wine, and a cork is not a quality guarantee.</strong> <a href="https://www.wsetglobal.com/knowledge-centre/blog/2022/may/05/six-common-wine-myths-debunked" target="_blank" rel="noopener noreferrer">WSET's guide to common wine myths</a> says excellent wines use both closures. It also notes that screw caps are mainstream in Australia and New Zealand and appear across quality levels and price points.</p>

<h2>Choose The Wine, Not The Opening Ceremony</h2>
<p>A corkscrew and the pop of a cork can make dinner feel special. That is a preference about serving, not evidence that the contents are better. WSET identifies easier opening and storage, along with fewer wine faults, as reasons screw caps have found favour with drinkers and producers.</p>
<p>When choosing a bottle in Delhi, Mumbai or Bengaluru, start with the style you want: dry or sweet, light or full-bodied, fresh or oak-influenced. Let the grape, producer and wine description guide that choice. The closure alone cannot answer it.</p>

<h2>What Does Corked Wine Actually Mean?</h2>
<p><a href="https://www.wsetglobal.com/knowledge-centre/blog/2023/august/24/common-wine-faults-and-how-to-spot-them" target="_blank" rel="noopener noreferrer">WSET's wine-fault guide</a> explains cork taint as contamination by TCA, or trichloroanisole. Typical signs are mustiness, damp-cardboard aromas and muted fruit. Tainted cork is the most common source, but TCA can come from elsewhere too.</p>
<p>That last point matters: changing the closure does not make every other source of contamination disappear. A screw cap is not an absolute promise of a fault-free bottle.</p>

<h2>Are Floating Cork Pieces A Fault?</h2>
<p>Not necessarily. WSET distinguishes a crumbling cork from cork taint; fragments in the glass do not establish that the wine's aromas or flavours are faulty. Judge the smell rather than using visible cork pieces as the diagnosis.</p>

<h2>Storage Matters Too</h2>
<p>WSET warns that prolonged heat exposure can leave wine dull and stale. Excess oxygen can also fade fruit and produce browning or bruised-apple notes. Neither closure replaces sensible storage.</p>
<p>Our buying suggestion is to favour bottles kept away from direct sun and obvious heat, and to raise any suspicious smell with the retailer or restaurant. Compare the same wine, vintage and bottle size when checking your city's prices on BevOry. Pay for the wine you enjoy, not for a cork as a status symbol.</p>
`.trim(),
  },
  {
    id: "guide-peated-vs-unpeated-whisky-islay-taste",
    title: "Peated Vs Unpeated Whisky: Taste, Islay And Food Pairings",
    slug: "peated-vs-unpeated-whisky-islay-taste",
    excerpt:
      "Peat smoke is a flavour choice, not a quality ranking. Compare Laphroaig's smoky style with Bruichladdich's unpeated Islay malt and choose your pour.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["peated vs unpeated whisky", "Islay whisky", "Laphroaig 10", "Bruichladdich", "whisky food pairings India"],
    meta_title: "Peated vs Unpeated Whisky: Taste Guide | BevOry",
    meta_description:
      "Learn peated vs unpeated whisky through Laphroaig and Bruichladdich, with Indian food pairings and serving ideas. Check city prices on BevOry.",
    selection_note:
      "A flavour-led Scotch buying query that corrects the all-Islay-is-smoky assumption using distillery sources; separate from the existing whisky-category and cask-strength posts.",
    source_links: [
      "https://www.laphroaig.com/how-to-make-whisky",
      "https://www.laphroaig.com/en-gb/whiskies/10-year-old",
      "https://www.bruichladdich.com/pages/faqs",
    ],
    content: String.raw`
<p><strong>In malt whisky, peating means exposing barley to peat smoke during production.</strong> Unpeated malt does not take that deliberate peat-smoking route. Think of the terms as flavour directions, not a ladder from basic to premium: a smoky whisky is not automatically more complex or better.</p>

<h2>Where The Smoke Comes From</h2>
<p><a href="https://www.laphroaig.com/how-to-make-whisky" target="_blank" rel="noopener noreferrer">Laphroaig's account of its whisky-making process</a> describes burning peat beneath damp barley, which absorbs the smoke's phenolic compounds. Its own cold-smoking stage lasts around 10-12 hours. Fermentation and double distillation in copper stills follow.</p>
<p>This separates peat smoke from cask influence. In this example, the smoky character begins with the malt; it is not simply another name for vanilla, toasted wood or bourbon-barrel sweetness.</p>

<h2>Laphroaig 10: A Smoky Example</h2>
<p>Produced at Port Ellen on Islay, <a href="https://www.laphroaig.com/en-gb/whiskies/10-year-old" target="_blank" rel="noopener noreferrer">Laphroaig 10 Year Old</a> matures in American oak ex-bourbon barrels. The producer describes peat smoke and seaweed on the nose, sweetness and salt alongside peat on the palate, and a long finish with a sweet, seaweed-like character.</p>
<p>Those notes show why a peated whisky need not taste only of smoke. Cask-derived sweetness can sit beside it. They describe this expression, not every smoky whisky on the shelf.</p>

<h2>Is All Islay Whisky Peated?</h2>
<p>No. <a href="https://www.bruichladdich.com/pages/faqs" target="_blank" rel="noopener noreferrer">Bruichladdich Distillery explicitly identifies its Bruichladdich single malts as unpeated</a>, including the floral house style associated with The Classic Laddie. It also makes heavily peated Port Charlotte and super-heavily peated Octomore on the same island.</p>
<p>The practical lesson is to choose the expression rather than guessing from the region. Islay tells you where a whisky is made; it does not make every bottle taste like Laphroaig.</p>

<h2>A Simple Way To Explore Both Styles</h2>
<p>Our suggestion is a small neat measure in a tulip-shaped glass, with water added gradually if desired. If you dislike smoky aromas, choose an explicitly unpeated expression first. If smoke appeals, try a peated pour before committing to a full bottle.</p>
<p>For food, try mutton seekh, tandoori mushrooms or 70% dark chocolate alongside a smoky dram. With a lighter, floral unpeated style, our starting points are malai paneer tikka and salted almonds. Adjust the pairing to the bottle in your glass; sweetness, body and oak character matter alongside smoke. Check city prices on BevOry for the exact expression and bottle size.</p>
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
  const path = new URL("../docs/editorial/hourly-posts-2026-10-10-1018.json", import.meta.url);
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
