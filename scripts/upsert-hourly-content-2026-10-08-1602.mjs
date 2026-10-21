import "dotenv/config";
import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { PrismaClient } from "@prisma/client";

const publishedAt = "2026-10-08T10:32:02.226Z";

export const posts = [
  {
    id: "news-us-craft-spirits-sales-distiller-count-2026-report",
    title: "US Craft Spirits Sales Fall Again As Active Distiller Count Drops",
    slug: "us-craft-spirits-sales-distiller-count-2026-report",
    excerpt:
      "ACSA and Park Street report an 8% fall in 2025 craft-spirits volume, alongside fewer active US distillers in August 2026.",
    cover_emoji: "news",
    category: "News",
    tags: ["US craft spirits", "ACSA", "Park Street", "Craft Spirits Data Project", "distillery industry"],
    meta_title: "US Craft Spirits Sales & Distillery Decline | BevOry",
    meta_description:
      "ACSA reports US craft-spirits volume down 8% in 2025 and fewer active distillers in August 2026. Read the figures and what they mean for drinkers.",
    selection_note:
      "An uncovered 6 October industry release with a new craft-sector dataset; the article distinguishes the sales period from the later producer-count snapshot.",
    source_links: [
      "https://americancraftspirits.org/craft-spirits-sales-decline-for-third-straight-year/",
      "https://americancraftspirits.org/wp-content/uploads/2026/10/2026-CSDP-Final-presentation.pdf",
    ],
    content: String.raw`
<p><strong>US craft spirits recorded a third consecutive year of declining sales in 2025, according to new research from the American Craft Spirits Association and Park Street.</strong> Their <a href="https://americancraftspirits.org/craft-spirits-sales-decline-for-third-straight-year/" target="_blank" rel="noopener noreferrer">6 October announcement</a> reports 11.7 million nine-litre cases sold, down 8% year on year, and sales value of $7.3 billion, down 3.7%.</p>

<h2>Sales And Distillery Counts Cover Different Dates</h2>
<p>The 2026 Craft Spirits Data Project reports sales for the full 2025 calendar year. Its producer count is a later snapshot: 2,131 active US craft distillers in August 2026, down 6.6% from a year earlier. The <a href="https://americancraftspirits.org/wp-content/uploads/2026/10/2026-CSDP-Final-presentation.pdf" target="_blank" rel="noopener noreferrer">report presentation</a> sets out both periods.</p>
<p>ACSA says this is the first time distillery closures have outpaced openings. That is an industry-level finding, not a closure announcement about any named producer.</p>

<h2>Why The Tasting Room Matters</h2>
<p>ACSA also reports that sales at the distillery accounted for 26% of craft-spirits sales in 2025, compared with 14% in 2015. Our reading is that the distillery visit has become a more important buying channel within this segment.</p>

<h2>How Indian Drinkers Should Read The Report</h2>
<p>This research measures US craft spirits, not all American whiskey and not India's spirits market. A fall in category sales does not tell you that a particular bottle has changed flavour or become better value.</p>
<p>For a buying decision, give the individual producer, expression and local price their own attention. For industry context, the important signal is a smaller active-producer base alongside weaker sales. Keep those two observations separate from a forecast about your next bottle's MRP.</p>
`.trim(),
  },
  {
    id: "guide-cognac-vs-vsop-xo-age-buying-india",
    title: "Cognac VS, VSOP And XO: Age Labels, Serving And Buying",
    slug: "cognac-vs-vsop-xo-age-buying-india",
    excerpt:
      "VS, VSOP and XO refer to the youngest spirit in a Cognac blend. Learn the two-, four- and ten-year minimums before choosing a bottle.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["Cognac VS VSOP XO", "Cognac age meaning", "Hennessy VSOP", "Cognac India", "Sidecar cocktail"],
    meta_title: "Cognac VS vs VSOP vs XO: Age & Buying | BevOry",
    meta_description:
      "Decode Cognac VS, VSOP and XO age labels. Explore neat serves, Sidecars and Indian pairings, then compare exact bottles and city prices on BevOry.",
    selection_note:
      "A high-intent age-label comparison absent from the earlier hourly posts, supported by the Cognac authority and expression-specific Hennessy pages.",
    source_links: [
      "https://www.cognac.fr/faq/",
      "https://www.cognac.fr/decouvrir/spiritueux-unique/une-origine-controlee/",
      "https://us.hennessy.com/en-us/collection/hennessy-vsop",
      "https://us.hennessy.com/en-us/cocktails/sidecar-cocktail",
    ],
    content: String.raw`
<p><strong>VS, VSOP and XO on a Cognac bottle describe the minimum age of the youngest spirit in the blend.</strong> The minimums are two, four and ten years respectively, as the <a href="https://www.cognac.fr/faq/" target="_blank" rel="noopener noreferrer">Cognac authority's FAQ</a> explains. They are not the average age of the blend, and they are not scores for flavour.</p>

<h2>What Each Label Means</h2>
<p>VS stands for Very Special, VSOP for Very Superior Old Pale, and XO for Extra Old. A VSOP blend can contain older spirits, but its youngest component must meet the four-year minimum. The same principle applies to XO's ten-year threshold.</p>
<p>The authority's <a href="https://www.cognac.fr/decouvrir/spiritueux-unique/une-origine-controlee/" target="_blank" rel="noopener noreferrer">ageing and appellation guide</a> explains that producers often use spirits older than the required minimum. An XO label therefore does not mean every component is exactly ten years old.</p>

<h2>Cognac Is More Specific Than Brandy</h2>
<p>Cognac comes from a defined French production area covering parts of Charente, Charente-Maritime, Dordogne and Deux-Sevres. Wine is distilled twice in a Charentais still and aged in oak, as the Cognac FAQ describes. Do not treat these Cognac age rules as a universal code for every brandy carrying similar initials.</p>

<h2>The Grade Does Not Supply A Tasting Note</h2>
<p>For a concrete example, <a href="https://us.hennessy.com/en-us/collection/hennessy-vsop" target="_blank" rel="noopener noreferrer">Hennessy's VSOP product page</a> describes apricot aromas with vanilla and mellow oak on the palate. Those notes describe that expression, not every VSOP Cognac.</p>
<p>Our buying advice is to use the age category to understand maturation, then judge the named bottle's flavours. Choosing XO solely because it is the oldest of these three labels can miss the style you actually enjoy.</p>

<h2>Neat Pour Or A Sidecar?</h2>
<p>Our suggestion for a first tasting is a small neat pour in a tulip-shaped spirit glass, without heating it. Take time to smell and taste before adding anything.</p>
<p>A VSOP need not be reserved for neat drinking. <a href="https://us.hennessy.com/en-us/cocktails/sidecar-cocktail" target="_blank" rel="noopener noreferrer">Hennessy's own Sidecar recipe</a> combines its VSOP with orange curacao, lemon juice and simple syrup, shaken with ice. It is a useful example of a producer recommending its bottle in a classic cocktail.</p>

<h2>Indian Pairings And City Prices</h2>
<p>For an apricot-and-vanilla profile, our pairing suggestions are malai paneer tikka, lightly spiced chicken reshmi kebabs, roasted almonds, apple tart or 70% dark chocolate. Try one pairing at a time rather than assuming a match suits every Cognac.</p>
<p>On BevOry, select your city and compare the same house, expression and bottle size. A price for a house's VS is not a price for its VSOP or XO. Let the intended serve and the actual bottle guide the budget.</p>
`.trim(),
  },
  {
    id: "guide-do-you-need-to-decant-wine-india",
    title: "Do You Need To Decant Wine? Sediment, Air And Timing",
    slug: "do-you-need-to-decant-wine-india",
    excerpt:
      "A decanter is useful for separating sediment, but extra air is not automatically better. Learn a practical approach for red and white wines.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["how to decant wine", "wine sediment", "red wine serving", "white wine decanting", "wine India"],
    meta_title: "Do You Need To Decant Wine? Serving Guide | BevOry",
    meta_description:
      "Learn when wine needs decanting, how to separate sediment and why timing varies. Get practical red and white wine serving advice from BevOry.",
    selection_note:
      "A practical serving query distinct from earlier vintage, Chardonnay and sparkling-wine guides; the copy separates sediment removal from the debated benefits of aeration.",
    source_links: [
      "https://www.wsetglobal.com/knowledge-centre/blog/2024/july/21/frequently-asked-questions-about-serving-and-decanting-wine",
      "https://www.penfolds.com/en-au/wine-advice/decanting-your-wine.html?forceLang=true",
    ],
    content: String.raw`
<p><strong>Most everyday wines can go straight from bottle to glass.</strong> Decanting has a clearer purpose when a wine has sediment: it separates the liquid from the deposit. Giving wine more air is a different decision, and it is not automatically an improvement.</p>

<h2>Separate Sediment From Aeration</h2>
<p><a href="https://www.wsetglobal.com/knowledge-centre/blog/2024/july/21/frequently-asked-questions-about-serving-and-decanting-wine" target="_blank" rel="noopener noreferrer">WSET's serving guide</a> explains that some bottle-aged reds, vintage Ports and lightly filtered wines develop deposits. Sediment may taste bitter or astringent. Many filtered everyday wines are unlikely to need decanting for this reason.</p>
<p>WSET notes that aeration's benefits are disputed and prolonged oxygen exposure can diminish aromas. It gives no universal decanting time for young wine.</p>

<h2>Taste Before You Pour The Whole Bottle</h2>
<p><a href="https://www.penfolds.com/en-au/wine-advice/decanting-your-wine.html?forceLang=true" target="_blank" rel="noopener noreferrer">Penfolds recommends</a> tasting a small amount on opening to guide the decision. If the bottle has sediment, standing it upright beforehand helps the deposit settle. Handle it gently when opening.</p>
<p>Our practical suggestion is to decide what you want to achieve first. Removing a deposit calls for a careful transfer; testing a little air calls for tasting again. You do not need a dramatic pouring ritual to enjoy dinner.</p>

<h2>Pour Gently When There Is Sediment</h2>
<p>Use a clean decanter or jug. Pour slowly and watch the bottle neck against a light, stopping before the deposit enters the stream. WSET describes this method; Penfolds also stresses avoiding disturbance and limiting splashing with very old wines.</p>
<p>Keep a little wine back with the sediment rather than chasing the last drop. This step is about separating liquid from solids, not filtering out an aroma you dislike.</p>

<h2>Do Not Borrow Another Bottle's Clock</h2>
<p>Penfolds gives timing recommendations for its own reds and notes that style, grape variety and age affect the decision. Our takeaway is not to turn a producer's recommendation into a rule for every Shiraz, Cabernet Sauvignon or Pinot Noir.</p>
<p>For a first attempt, taste before decanting and again shortly before serving. Compare the aroma and texture instead of deciding in advance that a longer wait must be better.</p>

<h2>What About White Wine?</h2>
<p>WSET says few whites need decanting for deposits. Penfolds names Yattarna and Bin A Chardonnay as wines it sometimes decants, with a narrow-based vessel to restrict air contact. These are specific examples, not a reason to decant every chilled white.</p>

<h2>A Simple Dinner Routine</h2>
<p>Our serving routine is to set out the glassware, open the bottle, taste a small pour and then decide. Choose paneer tikka, grilled fish, mushroom kebabs or another dish to suit the wine's actual style; decanting itself does not determine the pairing.</p>
<p>If the wine already tastes good in the glass, leave the decanter on the shelf. It is a useful tool, not a compulsory stage between a bottle and your meal.</p>
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
  const path = new URL("../docs/editorial/hourly-posts-2026-10-08-1602.json", import.meta.url);
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
