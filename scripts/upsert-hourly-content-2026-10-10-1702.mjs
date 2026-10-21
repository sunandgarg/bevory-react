import "dotenv/config";
import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { PrismaClient } from "@prisma/client";

const publishedAt = "2026-10-10T11:32:53.370Z";

export const posts = [
  {
    id: "news-carlsberg-marstons-brewery-proposed-closure-2027",
    title: "Carlsberg Proposes Marston's Brewery Closure In 2027",
    slug: "carlsberg-marstons-brewery-proposed-closure-2027",
    excerpt:
      "The proposed summer 2027 closure of Marston's Brewery in Burton upon Trent puts around 310 jobs at risk. The plan is subject to consultation.",
    cover_emoji: "news",
    category: "News",
    tags: ["Carlsberg Britvic", "Marston's Brewery", "Burton upon Trent", "beer industry news", "cask ale"],
    meta_title: "Marston's Brewery: Proposed 2027 Closure | BevOry",
    meta_description:
      "Carlsberg Britvic proposes closing Marston's Brewery in summer 2027. Understand the consultation, jobs at risk and plans for its ale brands.",
    selection_note:
      "A consequential UK brewing development reported on 8 October, corroborated by Staffordshire County Council; distinguishes the proposed closure from a completed shutdown.",
    source_links: [
      "https://www.itv.com/news/2026-10-08/carlsberg-to-shut-historic-marstons-brewery-with-310-jobs-at-risk",
      "https://www.staffordshire.gov.uk/newsroom/2026/staffordshire-county-council-statement-proposed-closure-marstons-brewery",
      "https://carlsberggroup.com/newsroom/carlsberg-group-completes-acquisition-of-britvic-plc/",
    ],
    content: String.raw`
<p><strong>Carlsberg Britvic proposes closing Marston's Brewery and its on-site logistics operation in Burton upon Trent in summer 2027.</strong> <a href="https://www.itv.com/news/2026-10-08/carlsberg-to-shut-historic-marstons-brewery-with-310-jobs-at-risk" target="_blank" rel="noopener noreferrer">ITV's 8 October 2026 report</a> says around 310 jobs are at risk.</p>

<h2>A Proposal, Not An Immediate Shutdown</h2>
<p><a href="https://www.staffordshire.gov.uk/newsroom/2026/staffordshire-county-council-statement-proposed-closure-marstons-brewery" target="_blank" rel="noopener noreferrer">Staffordshire County Council's statement</a>, also dated 8 October, stresses that the proposal is subject to consultation. Councillor Martin Murray called for the company to examine options for retaining a presence in Burton and offered support alongside government, local authorities and the business community.</p>

<h2>Why The Ale Market Is Central</h2>
<p>ITV reports that Carlsberg Britvic links its plan to falling ale demand. Chief executive Paul Davies said UK cask-ale volumes had more than halved in under a decade. This is the company's UK cask-market assessment, not a worldwide beer-sales figure.</p>

<h2>The Brewery And The Brands Have Different Futures</h2>
<p>The company intends to continue producing brands including Hobgoblin, McEwan's and Brooklyn, while seeking buyers for some other regional and cask-ale brands. ITV says those potential sales have not been named. The brewery and main logistics operation are expected to keep operating through consultation and a transition period.</p>

<h2>What Carlsberg Britvic Means</h2>
<p>The name reflects a wider UK drinks business. <a href="https://carlsberggroup.com/newsroom/carlsberg-group-completes-acquisition-of-britvic-plc/" target="_blank" rel="noopener noreferrer">Carlsberg's 17 January 2025 announcement</a> confirmed completion of its Britvic acquisition and the creation of Carlsberg Britvic, combining beer and soft drinks. It also named Davies as chief executive of the combined UK operation.</p>

<h2>What Beer Drinkers Should Watch Next</h2>
<p>For drinkers who follow regional ales, our reading is that three developments now matter: the consultation outcome, any buyers announced for individual brands, and details of where continuing beers will be brewed. A production-site proposal and the disappearance of every associated beer are not the same announcement.</p>
`.trim(),
  },
  {
    id: "guide-cask-vs-keg-beer-temperature-carbonation-india",
    title: "Cask Vs Keg Beer: Why Two Draught Pours Can Taste Different",
    slug: "cask-vs-keg-beer-temperature-carbonation-india",
    excerpt:
      "Cask and keg describe how draught beer is conditioned and served, not a simple ale-versus-lager split. Learn the texture and temperature differences.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["cask vs keg beer", "draught beer", "cask ale temperature", "beer carbonation", "beer guide India"],
    meta_title: "Cask vs Keg Beer: Temperature & Taste | BevOry",
    meta_description:
      "Learn how cask and keg beer differ in conditioning, bubbles and serving temperature. Find Indian pairing ideas and check city prices on BevOry.",
    selection_note:
      "Answers a practical draught-beer ordering question using WSET, CAMRA and Cask Marque; complements the brewery news without repeating earlier lager, IPA or stout comparisons.",
    source_links: [
      "https://www.wsetglobal.com/knowledge-centre/blog/2026/cask-vs-keg-beer-what-is-the-difference",
      "https://members.camra.org.uk/learn-discover/the-basics/what-is-cask-conditioned-ale/",
      "https://cask-marque.co.uk/happens-cask-marque-visit/",
    ],
    content: String.raw`
<p><strong>Cask and keg are different ways of conditioning and serving draught beer.</strong> They are not synonyms for ale and lager. The distinction becomes useful at the bar, where temperature and bubbles can change your impression of a pour.</p>

<h2>Cask Beer Keeps Developing After The Brewery</h2>
<p><a href="https://members.camra.org.uk/learn-discover/the-basics/what-is-cask-conditioned-ale/" target="_blank" rel="noopener noreferrer">CAMRA's cask-conditioned beer guide</a> describes live yeast continuing to develop the beer's character in the pub cellar. Traditional service uses a handpull or a tap directly on the cask, without injecting carbon dioxide into the beer. The carbonation is consequently gentler.</p>
<p>CAMRA also emphasises careful storage, clean beer lines and respecting the beer's keeping time. A handpump is a useful clue when ordering, but the care behind the bar matters as much as the handle in front of it.</p>

<h2>A Keg Uses A Pressurised Dispense System</h2>
<p><a href="https://www.wsetglobal.com/knowledge-centre/blog/2026/cask-vs-keg-beer-what-is-the-difference" target="_blank" rel="noopener noreferrer">WSET explains</a> that keg beer reaches the tap under carbon dioxide pressure or a carbon dioxide-and-nitrogen blend. Kegged beer is not necessarily filtered or pasteurised; unfiltered, unpasteurised examples and beers with live yeast also exist.</p>
<p>Many keg pours feel brisker and more carbonated than cask beer. Nitrogenated examples can instead feel smooth and creamy. Neither container decides the beer's colour, strength or quality on its own.</p>

<h2>Cellar Temperature Does Not Mean Warm Beer</h2>
<p><a href="https://cask-marque.co.uk/happens-cask-marque-visit/" target="_blank" rel="noopener noreferrer">Cask Marque's assessment guidance</a> specifies 11-13 degrees Celsius for cask beer, with a one-degree tolerance either side. That is a controlled cool temperature, not a suggestion to leave beer on a dining table until it feels warm.</p>
<p>WSET gives 3-7 degrees Celsius as a common keg serving range, while noting that the right temperature depends on the style and system. A rich stout and a pale lager need not arrive at exactly the same temperature simply because both are kegged.</p>

<h2>Order By The Beer You Enjoy</h2>
<p>Our advice for a first comparison is to ask for a small pour and notice the aroma, fizz and finish. Ask the bartender which style is on tap as well as how it is served; cask versus keg tells you only part of what you will taste.</p>
<p>For food, our suggestions are malai paneer tikka or tandoori mushrooms with a gentler pale ale, rava-fried fish with a crisp lager, and mutton seekh or aged cheddar with a darker, roast-led beer. These are flavour-led pairing ideas, not rules tied to the container. Compare the named beer and serving volume when checking city prices on BevOry.</p>
`.trim(),
  },
  {
    id: "guide-what-is-orange-wine-skin-contact-india",
    title: "What Is Orange Wine? Skin Contact, Taste And Indian Pairings",
    slug: "what-is-orange-wine-skin-contact-india",
    excerpt:
      "Orange wine is made from white grapes with skin contact, not oranges. Explore Georgia's qvevri tradition and a Kisi example served at 12-14 degrees Celsius.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["what is orange wine", "skin-contact white wine", "amber wine", "Georgian qvevri", "wine food pairings India"],
    meta_title: "What Is Orange Wine? Taste & Food Pairings | BevOry",
    meta_description:
      "Understand orange wine's white grapes, skin contact and tannins. Explore a Georgian Kisi example, Indian pairings and city prices on BevOry.",
    selection_note:
      "An evergreen wine-style explainer addressing confusion over orange fruit and amber colour, with a named producer example and practical Indian pairing suggestions.",
    source_links: [
      "https://www.wsetglobal.com/knowledge-centre/blog/2026/what-is-orange-wine-understanding-skin-contact-white-wines",
      "https://wine.gov.ge/En/KvevriWine",
      "https://www.39qvevri.ge/kisi",
    ],
    content: String.raw`
<p><strong>Orange wine is a skin-contact wine made from white grapes, not a wine made from oranges.</strong> During fermentation, the juice stays with the grape skins instead of being separated promptly. The resulting colour and texture explain the name.</p>

<h2>White Grapes, A Different Winemaking Choice</h2>
<p><a href="https://www.wsetglobal.com/knowledge-centre/blog/2026/what-is-orange-wine-understanding-skin-contact-white-wines" target="_blank" rel="noopener noreferrer">WSET's orange-wine guide</a> explains how skin contact adds tannic structure alongside colour. It identifies Georgia's Kakheti region and Oslavia/Brda, on the Italy-Slovenia border, as important centres for these wines.</p>
<p>Clay is not compulsory. WSET describes modern examples fermented in stainless steel or wood as well as amphorae, with skin-contact periods ranging from days to months. Orange is therefore a style of winemaking, not the name of one grape or one vessel.</p>

<h2>Why Georgia's Qvevri Tradition Matters</h2>
<p>Georgia's <a href="https://wine.gov.ge/En/KvevriWine" target="_blank" rel="noopener noreferrer">National Wine Agency</a> describes fermenting and ageing wine in qvevri with grape skins and pips. Kakhetian and Imeretian methods use different amounts of that grape material. In its account of white-grape winemaking, prolonged contact can give straw, gold or tea-like colour and tannins.</p>
<p>That helps explain why an amber wine can feel more structured than the fresh white wine you expected. Do not mistake grip for sweetness: tannins concern texture, while sweetness concerns sugar.</p>

<h2>A Named Bottle Makes The Taste Easier To Picture</h2>
<p><a href="https://www.39qvevri.ge/kisi" target="_blank" rel="noopener noreferrer">39 Qvevri's Kisi 2019</a> comes from Ozhio village in Kakheti's Akhmeta municipality. The producer specifies six months of skin contact and describes peach, dried apricot, a full body, tannins and a long aftertaste. Those are notes for that wine, not a flavour checklist for every orange wine.</p>

<h2>Serving And Food: Give Texture Some Room</h2>
<p>39 Qvevri recommends 12-14 degrees Celsius for its Kisi. Our practical suggestion is a stemmed wine glass with enough space for a gentle swirl. Begin with a small pour before deciding if you want it cooler or slightly warmer.</p>
<p>The producer pairs its wine with chakapuli, roast poultry and sheep cheese. For an Indian table, our starting suggestions are malai paneer tikka, tandoori mushrooms or gently spiced tandoori chicken; aged sheep cheese is another useful comparison. Taste the wine with the food before adding extra chilli or a sharply acidic chutney.</p>
<p>For your first purchase, choose by the grape, region and the texture you prefer rather than colour alone. A short skin-contact white and a long-macerated Kisi can be very different drinking experiences. Compare the exact wine and bottle size when checking city prices on BevOry.</p>
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
  const path = new URL("../docs/editorial/hourly-posts-2026-10-10-1702.json", import.meta.url);
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
