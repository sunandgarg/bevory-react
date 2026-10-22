import "dotenv/config";
import assert from "node:assert/strict";
import { PrismaClient } from "@prisma/client";

const cycleAt = "2026-10-22T11:37:15.000Z";
const reviewedAt = "2026-10-22";

export const posts = [
  {
    id: "news-india-new-zealand-fta-wine-october-2026",
    title: "India-New Zealand Trade Deal Is Now in Force: What Changes for Wine?",
    slug: "india-new-zealand-fta-wine-october-2026",
    excerpt: "The India-New Zealand FTA took effect on 20 October. Here is what its phased wine-tariff terms mean, and why Indian shelf prices will not change overnight.",
    cover_emoji: "news",
    category: "News",
    tags: ["India New Zealand FTA", "New Zealand wine", "wine import duty", "wine India", "Sauvignon Blanc"],
    meta_title: "India-New Zealand FTA: Wine Impact | BevOry",
    meta_description: "The India-New Zealand trade deal took effect on 20 October 2026. See the phased wine-tariff terms and what Indian shoppers should check.",
    selection_note: "The agreement entered into force this week, and its wine provisions are directly relevant to Indian buyers without promising instant retail discounts.",
    source_links: [
      "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2325235&lang=2&reg=48",
      "https://www.mfat.govt.nz/en/trade/free-trade-agreements/free-trade-agreements-in-force/new-zealand-india-free-trade-agreement/overview",
      "https://www.mfat.govt.nz/assets/Trade-agreements/NZ-India-FTA/NZ-India-FTA-National-Interest-Analysis-NIA.pdf",
      "https://www.nzwine.com/en/media/media-releases/india-fta/",
    ],
    content: String.raw`
<p><strong>The India-New Zealand Free Trade Agreement took effect on 20 October 2026, opening a gradual tariff-reduction route for qualifying New Zealand wine entering India.</strong> It does not mean every imported bottle is suddenly cheaper in a Mumbai, Delhi or Bengaluru shop. The Indian government's <a href="https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2325235&lang=2&reg=48" target="_blank" rel="noopener noreferrer">announcement</a> gave the commencement date, and New Zealand's <a href="https://www.mfat.govt.nz/en/trade/free-trade-agreements/free-trade-agreements-in-force/new-zealand-india-free-trade-agreement/overview" target="_blank" rel="noopener noreferrer">trade ministry</a> confirms that the agreement is in force.</p>

<h2>What Does The Agreement Say About Wine?</h2>
<p>New Zealand's <a href="https://www.mfat.govt.nz/assets/Trade-agreements/NZ-India-FTA/NZ-India-FTA-National-Interest-Analysis-NIA.pdf" target="_blank" rel="noopener noreferrer">National Interest Analysis</a> describes a ten-year reduction from a 150% Indian tariff for eligible wine. For wine valued at US$5 to under US$15 per 750 ml, the scheduled end point is 50%. For wine valued at US$15 or more per 750 ml, it is 25%. Wine valued below US$5 per 750 ml remains at 150%, according to that analysis. These dollar thresholds concern the value used for the trade concession, not what a shopper pays at a local counter.</p>
<p>The reductions are staged. Reading the final 50% or 25% figure as the rate for every bottle today would be misleading. Importers must also meet the agreement's relevant conditions to claim a preference. For a consumer, the useful takeaway is that the deal may change import economics over time; it is not a published Indian retail price list.</p>

<h2>Will New Zealand Wine Cost Less In India?</h2>
<p>That cannot be promised from the treaty alone. A bottle's shelf price depends on the exact product, importer, exchange rate, freight, retailer and the state or territory where it is sold. An importer may still have stock purchased under earlier terms. Even when a tariff changes, the size and timing of any retail price change can differ from one market to another.</p>
<p><a href="https://www.nzwine.com/en/media/media-releases/india-fta/" target="_blank" rel="noopener noreferrer">New Zealand Winegrowers</a> welcomed the longer-term route into India and said its wine exports to the country were still modest in 2025. That context matters: more favourable market access does not guarantee a wider choice on every shop shelf immediately. The agreement creates an opportunity for producers and importers, while actual listings remain a separate commercial decision.</p>

<h2>What Should A Wine Buyer Check Now?</h2>
<p>Compare a specific bottle rather than a broad label such as "New Zealand white wine." Check producer, grape, vintage, bottle size, importer label and the current price in your city. A Marlborough Sauvignon Blanc and a Central Otago Pinot Noir are different wines, and even two bottles of the same grape may land at very different prices. Ask the licensed retailer for the current shelf price instead of converting a foreign price or a tariff percentage into rupees.</p>
<p>There is no need to rush a purchase because an FTA has started. If more New Zealand wines reach Indian stores, compare them with Indian and other imported bottles on taste, provenance and the price actually offered where you live. The next meaningful consumer signal will be real availability and verified local pricing, not the treaty headline by itself.</p>
`.trim(),
  },
  {
    id: "guide-sauvignon-blanc-vs-pinot-grigio-india-2026",
    title: "Sauvignon Blanc vs Pinot Grigio: Which White Wine Should You Buy?",
    slug: "sauvignon-blanc-vs-pinot-grigio-india-2026",
    excerpt: "Both can be refreshing whites. Compare aroma, acidity, body and food pairing before choosing a bottle on an Indian wine shelf.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["Sauvignon Blanc vs Pinot Grigio", "white wine India", "Sauvignon Blanc guide", "Pinot Grigio guide", "wine food pairing"],
    meta_title: "Sauvignon Blanc vs Pinot Grigio | BevOry",
    meta_description: "Compare Sauvignon Blanc and Pinot Grigio by aroma, acidity, body and food pairing. A practical white-wine guide for Indian shoppers.",
    selection_note: "A distinct high-intent white-wine comparison supported by wine education and producer-organisation sources, with no invented city price or ABV.",
    source_links: [
      "https://www.wsetglobal.com/knowledge-centre/blog/2020/may/01/understanding-grapes-spotlight-on-sauvignon-blanc/",
      "https://www.wsetglobal.com/media/13022/wset_l2wines_sessionplans_en_may2023_issue2.pdf",
      "https://www.wsetglobal.com/knowledge-centre/blog/2020/june/02/how-to-pair-wine-with-your-favourite-takeaway-meals/",
      "https://www.nzwine.com/en/media/story/sauv-blanc-fast-facts/",
    ],
    content: String.raw`
<p><strong>Choose Sauvignon Blanc if you want an aromatic, often sharply refreshing white; choose a light Pinot Grigio if you prefer a quieter, easy-drinking glass.</strong> Neither grape guarantees one flavour or quality level. Climate, harvest timing and winemaking can change both, so use the front and back labels to narrow the choice.</p>

<h2>How Do They Usually Taste?</h2>
<p>The <a href="https://www.wsetglobal.com/knowledge-centre/blog/2020/may/01/understanding-grapes-spotlight-on-sauvignon-blanc/" target="_blank" rel="noopener noreferrer">Wine &amp; Spirit Education Trust</a> describes Sauvignon Blanc as a grape capable of high-acid, distinctly aromatic wines. Green fruit, herbs and citrus are common clues, though the exact balance depends on origin. A New Zealand example may be particularly expressive, while a bottle from another region may be more restrained. <a href="https://www.nzwine.com/en/media/story/sauv-blanc-fast-facts/" target="_blank" rel="noopener noreferrer">New Zealand Winegrowers</a> also notes that some producers use oak, making richer versions rather than only the familiar crisp style.</p>
<p>Pinot Grigio is often lighter in body and less forceful on the nose. WSET's <a href="https://www.wsetglobal.com/media/13022/wset_l2wines_sessionplans_en_may2023_issue2.pdf" target="_blank" rel="noopener noreferrer">wine teaching material</a> describes a common Italian Pinot Grigio style as dry, light-bodied and medium to high in acidity. It also explains that Pinot Grigio and Pinot Gris are names for the same grape. Wines labelled Pinot Gris can be fuller and sometimes have some sweetness, so the name and the producer's description deserve a second look.</p>

<h2>Does One Work Better With Indian Food?</h2>
<p>For a light starter, grilled fish or lemon-led dish, either can work. Sauvignon Blanc's strong herbal and citrus character can suit coriander, green chutney or a fresh salad when the wine and food have similar intensity. A crisp Pinot Grigio can be a comfortable partner for salty snacks or gently spiced seafood without competing for attention.</p>
<p>These are suggestions, not rules. WSET's <a href="https://www.wsetglobal.com/knowledge-centre/blog/2020/june/02/how-to-pair-wine-with-your-favourite-takeaway-meals/" target="_blank" rel="noopener noreferrer">food-pairing guide</a> recommends zesty whites, including Pinot Grigio, with salty and oily foods. It also lists Sauvignon Blanc among options for certain herb-forward meals. If the dish is very chilli-hot, taste a small sip with the food before committing to a dry, high-acid wine; the match can feel different from the wine tasted alone.</p>

<h2>What Should You Check In A Shop?</h2>
<p>On an Indian shelf, start with the exact bottle rather than a generic online price. Read the producer, country or region, vintage, bottle size and alcohol percentage from its label. Look for dry or off-dry wording if sweetness matters to you. If you enjoyed one Sauvignon Blanc, do not assume another from a different climate will taste identical. The same caution applies to an Italian Pinot Grigio and a fuller Pinot Gris.</p>
<p>Ask a licensed retailer for the current price in your city and compare like-sized bottles. A discounted 375 ml bottle and a 750 ml bottle do not offer the same volume. If possible, choose a single bottle that suits tonight's food before buying several based only on a grape name. For an assertive, herb-and-citrus-led glass, begin with Sauvignon Blanc; for a subtler and often lighter white, start with Pinot Grigio.</p>
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

if (process.argv.includes("--check")) {
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
