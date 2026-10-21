import "dotenv/config";
import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { PrismaClient } from "@prisma/client";

const publishedAt = "2026-10-08T06:12:45.040Z";

export const posts = [
  {
    id: "news-constellation-spikedade-acquisition-october-2026",
    title: "Constellation Buys SpikedAde: $75 Million Now, More If It Grows",
    slug: "constellation-spikedade-acquisition-october-2026",
    excerpt:
      "Constellation's SpikedAde deal adds a vodka-based RTD to its portfolio, with $75 million paid at closing and further payments tied to performance.",
    cover_emoji: "news",
    category: "News",
    tags: ["Constellation Brands", "SpikedAde", "ready-to-drink", "vodka", "acquisitions"],
    meta_title: "Constellation Buys SpikedAde RTD | BevOry",
    meta_description:
      "Constellation buys SpikedAde for $75 million upfront, with performance payments to follow. Understand the deal and its vodka-based RTD format.",
    selection_note:
      "A new acquisition announcement with disclosed terms and a distinctive RTD format; not covered by the earlier results article.",
    source_links: [
      "https://ir.cbrands.com/news-events/press-releases/detail/347/constellation-brands-announces-acquisition-of-spirit-based-ready-to-drink-brand-spikedade",
      "https://rethinkingdrinking.niaaa.nih.gov/how-much-too-much/whats-standard-drink",
    ],
    content: String.raw`
<p><strong>Constellation Brands announced its SpikedAde purchase on 6 October 2026.</strong> The vodka-based RTD has sports-drink-inspired flavours and no carbonation. It is an alcoholic beverage.</p>

<h2>What Constellation Is Paying</h2>
<p>The deal includes $75 million at closing and up to $278 million over five years, conditional on performance. The maximum is $353 million, rather than an unconditional upfront payment. <a href="https://ir.cbrands.com/news-events/press-releases/detail/347/constellation-brands-announces-acquisition-of-spirit-based-ready-to-drink-brand-spikedade" target="_blank" rel="noopener noreferrer">Constellation's announcement sets out the terms.</a></p>

<h2>Where The Brand Goes Next</h2>
<p>SpikedAde's team will join Constellation's Beer Division, which will oversee production, marketing and distribution. The release describes US expansion through Gold Network distributor partners.</p>

<h2>What A Drinker Should Compare</h2>
<p>The useful question at the shelf is what is inside the can. A familiar fruit flavour or colourful pack does not tell you the alcohol strength. Compare the stated ABV, container volume and alcohol base before treating two ready-to-drink products as equivalents.</p>
<p>The <a href="https://rethinkingdrinking.niaaa.nih.gov/how-much-too-much/whats-standard-drink" target="_blank" rel="noopener noreferrer">US National Institute on Alcohol Abuse and Alcoholism</a> explains that alcohol content varies within beverage categories, and customary serving sizes can differ from a standard drink.</p>
<p>For Indian shoppers, an overseas acquisition price offers no useful shortcut to a local retail price. Use the city selector on BevOry to compare the exact products listed in your city. Our <a href="/guide/abv-alcohol-content-beer-wine-rtd-india">ABV guide</a> shows how a small can and a large bottle can contain very different amounts of alcohol at the same strength.</p>
`.trim(),
  },
  {
    id: "guide-abv-alcohol-content-beer-wine-rtd-india",
    title: "ABV Explained: How Much Alcohol Is In Beer, Wine And RTD Cans?",
    slug: "abv-alcohol-content-beer-wine-rtd-india",
    excerpt:
      "Compare alcohol strength and serving size with worked examples for beer, wine, RTDs and whisky pours in millilitres.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["ABV meaning", "beer strength", "wine alcohol content", "RTD drinks", "bottle sizes"],
    meta_title: "ABV Meaning: Beer, Wine & RTD Alcohol Content | BevOry",
    meta_description:
      "Understand ABV and compare alcohol in beer, wine, RTD cans and whisky pours. Use practical examples, then check city prices on BevOry.",
    selection_note:
      "Answers a concrete label-reading question with reproducible calculations; complements RTD news without claiming measured search volume.",
    source_links: [
      "https://www.nhs.uk/live-well/alcohol-advice/calculating-alcohol-units/",
      "https://rethinkingdrinking.niaaa.nih.gov/how-much-too-much/whats-standard-drink",
      "https://rethinkingdrinking.niaaa.nih.gov/tools/calculators/alcohol-drink-size-calculator",
    ],
    content: String.raw`
<p><strong>ABV means alcohol by volume: the percentage of a drink's liquid volume that is pure alcohol.</strong> A 5% beer contains 5 ml of alcohol per 100 ml of beer. The amount in your drink also depends on how much you pour or how large the container is.</p>
<p>This is why a 650 ml bottle and a 330 ml can at the same ABV are different servings. Looking at the percentage alone leaves out nearly half the comparison.</p>

<h2>The Calculation In Millilitres</h2>
<p>Multiply the volume you will drink by the ABV, then divide by 100:</p>
<p><strong>Pure alcohol in ml = drink volume in ml x ABV percentage / 100.</strong></p>
<p>The <a href="https://www.nhs.uk/live-well/alcohol-advice/calculating-alcohol-units/" target="_blank" rel="noopener noreferrer">NHS alcohol-units guide</a> uses these same volume and strength inputs. It divides by 1,000 to calculate UK units, each representing 10 ml of pure alcohol. Here, the table keeps the result in millilitres.</p>

<h2>Worked Examples: A Can, A Bottle And A Pour</h2>
<p>These are illustrative strengths and sizes, not specifications for a named brand. Each calculation covers the entire amount shown.</p>
<table>
  <thead><tr><th>Example</th><th>Volume</th><th>ABV</th><th>Pure alcohol</th></tr></thead>
  <tbody>
    <tr><td>Beer can</td><td>330 ml</td><td>5%</td><td>16.5 ml</td></tr>
    <tr><td>Beer bottle</td><td>650 ml</td><td>5%</td><td>32.5 ml</td></tr>
    <tr><td>Stronger beer can</td><td>500 ml</td><td>8%</td><td>40 ml</td></tr>
    <tr><td>RTD can</td><td>250 ml</td><td>5%</td><td>12.5 ml</td></tr>
    <tr><td>Wine glass</td><td>150 ml</td><td>12%</td><td>18 ml</td></tr>
    <tr><td>Whisky pour</td><td>30 ml</td><td>40%</td><td>12 ml</td></tr>
  </tbody>
</table>
<p>In these examples, the 650 ml beer has almost twice the alcohol of the 330 ml beer. The 150 ml wine glass contains more alcohol than the 30 ml whisky pour, despite wine having a much lower percentage.</p>

<h2>Is One Container One Standard Drink?</h2>
<p>No. A container can hold several standard drinks. The <a href="https://rethinkingdrinking.niaaa.nih.gov/how-much-too-much/whats-standard-drink" target="_blank" rel="noopener noreferrer">NIAAA definition</a> uses 14 grams of alcohol for one US standard drink. That is a different measure from a UK unit; neither defines the size of an Indian bar pour.</p>
<p>For a calculation using the US definition, the <a href="https://rethinkingdrinking.niaaa.nih.gov/tools/calculators/alcohol-drink-size-calculator" target="_blank" rel="noopener noreferrer">NIAAA drink-size calculator</a> accepts both container size and strength. Enter the actual values instead of assuming every beer or cocktail is identical.</p>

<h2>Does Adding Soda Reduce The Alcohol?</h2>
<p>Soda dilutes the drink, lowering its ABV, but does not remove the alcohol already poured. For example, 30 ml of a 40% spirit contains 12 ml of pure alcohol. Adding 120 ml of an alcohol-free mixer makes a 150 ml drink at approximately 8% ABV, before allowing for ice melt. It still contains that original 12 ml.</p>

<h2>Comparing Drinks On BevOry</h2>
<p>Match the exact expression and pack size when comparing prices in Mumbai, Delhi, Gurgaon or Bengaluru. Use the bottle's ABV for alcohol comparisons and the selected city's listing for price comparisons. Strength and price answer different questions; neither tells you how the drink will taste.</p>
`.trim(),
  },
  {
    id: "guide-oaked-vs-unoaked-chardonnay-india",
    title: "Oaked vs Unoaked Chardonnay: Taste, Indian Pairings And Serving",
    slug: "oaked-vs-unoaked-chardonnay-india",
    excerpt:
      "Learn why Chardonnay can taste crisp or creamy, how oak and climate shape it, and where Sula Dindori Reserve fits.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["Chardonnay", "oaked vs unoaked", "Sula Dindori Reserve", "Indian wine", "white wine pairings"],
    meta_title: "Oaked vs Unoaked Chardonnay India Guide | BevOry",
    meta_description:
      "Compare crisp and creamy Chardonnay, Sula Dindori Reserve, Indian food pairings and serving temperatures. Check city prices on BevOry.",
    selection_note:
      "A specific wine-style comparison with an official Indian bottle example, practical pairings and service guidance; no ranking promise.",
    source_links: [
      "https://www.wsetglobal.com/knowledge-centre/blog/2022/may/24/behind-the-grape-chardonnay-in-the-us",
      "https://www.wineaustralia.com/market-insights/regions-and-varieties/chardonnay",
      "https://sulavineyards.com/dindori/chardonnay.php",
      "https://www.wsetglobal.com/knowledge-centre/blog/2022/april/26/ideal-serving-temperatures-and-top-tips-for-wine-storage",
    ],
    content: String.raw`
<p><strong>Chardonnay is a white grape that can make both crisp, fruit-led wines and fuller wines with creamy texture and oak flavours.</strong> The difference begins with where the grapes grow and continues in the winery. Oak is one influence, rather than a complete description of the wine.</p>

<h2>What You Taste In Each Style</h2>
<p>Unoaked Chardonnay often puts fruit and acidity first. Look for descriptions such as green apple, citrus or pear; warmer growing conditions can bring riper fruit. An oaked version may add vanilla and toast, with a broader texture.</p>
<p>The <a href="https://www.wsetglobal.com/knowledge-centre/blog/2022/may/24/behind-the-grape-chardonnay-in-the-us" target="_blank" rel="noopener noreferrer">Wine &amp; Spirit Education Trust's Chardonnay guide</a> describes the roles of oak contact, malolactic fermentation and time on lees in richer styles. These are separate winemaking choices. A wine can be creamy without every flavour coming from a barrel.</p>

<h2>Climate Matters As Much As The Oak Label</h2>
<p><a href="https://www.wineaustralia.com/market-insights/regions-and-varieties/chardonnay" target="_blank" rel="noopener noreferrer">Wine Australia</a> describes cooler-climate Chardonnay as generally lighter, with higher acidity, and warmer-climate versions as fuller, with riper fruit. It also notes that producers can use larger barrels and less new oak for subtler influence.</p>
<p>For a regional example, Adelaide Hills Chardonnay commonly combines peach and citrus with texture. That helps explain why the choice is not simply between sharp wine and heavily buttery wine. Origin and winemaking can produce many styles in between.</p>

<h2>An Indian Example: Sula Dindori Reserve Chardonnay</h2>
<p>Sula's <a href="https://sulavineyards.com/dindori/chardonnay.php" target="_blank" rel="noopener noreferrer">Dindori Reserve Chardonnay page</a> identifies the wine as 100% Chardonnay, partly barrel-fermented and partly aged in French oak. The producer lists honey, lemon, tropical fruit and vanilla, alongside a creamy texture.</p>
<p>This makes it a useful example of fruit and oak sharing the glass. Those are Sula's notes for this particular wine, rather than flavours to assign to every Chardonnay.</p>

<h2>Indian Food Pairings That Fit The Style</h2>
<p>For a fresher, lighter Chardonnay, try malai paneer tikka, lemon-grilled fish or gently seasoned tandoori prawns. These are serving suggestions: keep chilli and heavy sauces restrained so the wine's fruit remains clear.</p>
<p>With a richer Chardonnay, butter chicken, butter garlic prawns and mushroom pasta give the wine something creamy to work alongside. Sula specifically recommends butter chicken, butter garlic prawns, mustard fish and white-sauce pasta for Dindori Reserve Chardonnay.</p>

<h2>How Cold Should Chardonnay Be?</h2>
<p>Use a stemmed white-wine glass. WSET recommends around 10-13 degrees C for a full-bodied white such as oaked Chardonnay. A fresher, lighter bottle benefits from more chilling; 8-10 degrees C is a practical starting point. Adjust to the style and your preference.</p>
<p><a href="https://www.wsetglobal.com/knowledge-centre/blog/2022/april/26/ideal-serving-temperatures-and-top-tips-for-wine-storage" target="_blank" rel="noopener noreferrer">WSET's serving-temperature guidance</a> notes that chilling below 6 degrees C can mask aromas. If a rich Chardonnay tastes muted straight from the fridge, let the glass warm a little before deciding what you think.</p>

<h2>Choosing A Bottle And Comparing City Prices</h2>
<p>Start with the meal and the texture you enjoy. Choose a fruit-led style for a lighter dish, or try a wine with oak influence alongside a creamier sauce. Compare the producer, cuvee, vintage and bottle size on BevOry after selecting Mumbai, Delhi, Gurgaon, Pune or your own city.</p>
<p>A higher price does not automatically mean heavier oak, and heavier oak does not automatically mean better wine. The useful choice is the bottle whose style suits your dinner.</p>
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
  assert.ok(!banned.test([post.title, post.excerpt, post.meta_description, post.content].join(" ")), `${post.slug}: prohibited public wording`);
  assert.ok(post.tags.length && post.tags.every((tag) => tag.trim()), `${post.slug}: missing tags`);
  assert.ok(post.content.includes("<h2>"), `${post.slug}: no article sections`);
  assert.ok(post.content.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length >= 200, `${post.slug}: incomplete body`);
  assert.ok(Number.isFinite(Date.parse(post.published_at)), `${post.slug}: invalid publication date`);
  for (const source of post.source_links) {
    assert.equal(new URL(source).protocol, "https:");
    assert.ok(post.content.includes(`href="${source}"`), `${post.slug}: source not cited in body`);
  }
}
assert.equal(650 * 5 / 100, 32.5);
assert.equal(150 * 12 / 100, 18);
assert.equal(30 * 40 / 100, 12);
assert.equal(12 / 150 * 100, 8);
assert.equal(75 + 278, 353);

if (process.argv.includes("--export")) {
  const path = new URL("../docs/editorial/hourly-posts-2026-10-08-1142.json", import.meta.url);
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
