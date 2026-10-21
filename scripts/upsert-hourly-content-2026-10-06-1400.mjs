import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const now = new Date().toISOString();

const posts = [
  {
    id: "news-wswa-2026-forum-wine-spirits-category-decline-stabilization",
    title: "US Wine and Spirits Wholesalers Say Category Declines Are Stabilising",
    slug: "wswa-2026-forum-wine-spirits-category-decline-stabilization",
    excerpt:
      "WSWA's 2026 Annual Membership Forum highlighted declining wine, spirits and beer demand, smaller-format growth and stronger on-premise performance.",
    cover_emoji: "news",
    category: "News",
    tags: ["WSWA", "wine and spirits", "beverage alcohol", "wholesale", "SipSource", "spirits market"],
    meta_title: "WSWA 2026 Alcohol Market News | BevOry",
    meta_description:
      "WSWA says wine, spirits and beer remain under pressure, but the market is stabilising. Read BevOry's industry update.",
    published_at: "2026-10-06T14:00:00.000+05:30",
    selection_note:
      "Picked as the news item because WSWA's 5 October 2026 forum update gives a fresh trade-level read on wine, spirits, beer, wholesale and consumer behaviour.",
    source_links: [
      "https://www.wswa.org/news/wswa-annual-membership-forum-equips-wine-and-spirits-wholesaler-leaders-navigate-market-policy",
      "https://www.wswa.org/news",
    ],
    content: String.raw`
<p><strong>Wine &amp; Spirits Wholesalers of America says every major beverage alcohol category remains in decline, but recent data shows signs of stabilisation.</strong> The trade body's 2026 Annual Membership Forum was held in Chicago on 1-2 October 2026, with WSWA publishing its update on 5 October.</p>

<p>The most useful signal for BevOry readers is not panic; it is selectivity. Consumers are still drinking, but they are choosing formats, occasions and price points more carefully.</p>

<h2>What WSWA Highlighted</h2>
<ul>
  <li><strong>Market pressure:</strong> wine, core spirits and beer are still facing category declines.</li>
  <li><strong>Stabilisation:</strong> WSWA's SipSource read points to a market that is no longer moving in one simple direction.</li>
  <li><strong>Smaller formats:</strong> smaller bottles are trending upward as shoppers manage budget, moderation and trial.</li>
  <li><strong>Channel split:</strong> on-premise is outperforming off-premise, and WSWA says that gap has widened month by month.</li>
  <li><strong>Shelf pressure:</strong> points of distribution have fallen across wine and core spirits over the past couple of years.</li>
</ul>

<h2>Why This Matters In India</h2>
<p>India is not the US market, but the consumer logic travels well. Indian buyers in Delhi, Mumbai, Gurgaon, Bengaluru and Hyderabad also compare exact bottle size, visible MRP and drinking occasion before buying. That makes 180 ml, 375 ml, 750 ml and 1 litre listings more important than broad brand averages.</p>

<h2>What Retailers And Brands Should Watch</h2>
<p>Clear price architecture, smaller trial sizes, city-specific availability and trustworthy product information now matter more than vague premium language. For BevOry users, the practical result is simple: search exact product, exact size and exact city before buying.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.wswa.org/news/wswa-annual-membership-forum-equips-wine-and-spirits-wholesaler-leaders-navigate-market-policy" target="_blank" rel="noopener noreferrer">WSWA: 2026 Annual Membership Forum update</a></li>
  <li><a href="https://www.wswa.org/news" target="_blank" rel="noopener noreferrer">WSWA news page</a></li>
</ul>

<h2>Responsible Drinking Note</h2>
<p>This article discusses market trends. Follow local law, buy only from licensed sellers and do not drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-quarter-half-full-bottle-liquor-price-india-2026",
    title: "Quarter, Half and Full Bottle Price Guide in India 2026",
    slug: "quarter-half-full-bottle-liquor-price-india-2026",
    excerpt:
      "A consumer guide to comparing 180 ml, 375 ml, 750 ml and 1 litre liquor prices in Indian cities without mixing bottle sizes or bar prices.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["liquor bottle sizes India", "quarter price", "half bottle price", "whisky price", "vodka price", "city price"],
    meta_title: "Quarter Half Full Bottle Price Guide | BevOry",
    meta_description:
      "Compare liquor prices by bottle size, city and exact product. Learn quarter, half, full and 1 litre checks on BevOry.",
    published_at: "2026-10-06T14:05:00.000+05:30",
    selection_note:
      "Picked as an educational post because Indian liquor-price searches often mix quarter, half, full bottle and bar peg prices, creating high-intent confusion.",
    source_links: [
      "https://www.wswa.org/news/wswa-annual-membership-forum-equips-wine-and-spirits-wholesaler-leaders-navigate-market-policy",
      "https://www.beveragedaily.com/Article/2026/09/28/suntory-unveils-uk-fractional-format-strategy-with-jim-beam-35cl-launch/",
      "https://www.gov.uk/weights-measures-and-packaging-the-law/specified-quantities",
    ],
    content: String.raw`
<p><strong>Liquor prices in India should be compared by exact product, city and bottle size: quarter, half, full or 1 litre.</strong> A whisky quarter price in Gurgaon is not comparable with a 750 ml price in Delhi, and a restaurant peg is a different purchase altogether.</p>

<p>Smaller-format bottles are becoming more important globally. WSWA's 2026 forum update said smaller formats are trending upward, while BeverageDaily reported Suntory's UK push into 35 cl Jim Beam bottles as part of a wider fractional-format strategy.</p>

<h2>Common Bottle Size Terms In India</h2>
<ul>
  <li><strong>Quarter:</strong> commonly used by shoppers for a small bottle, often around 180 ml depending on state and product.</li>
  <li><strong>Half:</strong> commonly used for a mid-size bottle, often around 375 ml.</li>
  <li><strong>Full:</strong> usually used for the standard large bottle, often 750 ml in Indian retail listings.</li>
  <li><strong>1 litre:</strong> a separate pack size and not the same as a 750 ml full bottle.</li>
</ul>

<h2>How To Compare Price Correctly</h2>
<ul>
  <li>Search the full product name, not just the brand.</li>
  <li>Check the bottle size printed on the listing.</li>
  <li>Compare only within the same city or state.</li>
  <li>Separate retail bottle price from bar peg price.</li>
  <li>Check whether the listing is whisky, rum, vodka, gin, wine, beer or RTD.</li>
</ul>

<h2>Why Smaller Bottles Are Popular</h2>
<p>Smaller bottles reduce the upfront spend, support trial and help shoppers avoid committing to a full-size bottle. They are useful for comparing entry-level Scotch, Indian whisky, bourbon, vodka, rum and gin before moving to a larger size.</p>

<h2>Food And Occasion Pairing</h2>
<p>For a casual whisky quarter, serve a highball with soda and pair it with paneer tikka, chicken seekh or salted peanuts. For a better single malt full bottle, taste it neat first with galouti kebabs, dark chocolate or aged cheddar.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.wswa.org/news/wswa-annual-membership-forum-equips-wine-and-spirits-wholesaler-leaders-navigate-market-policy" target="_blank" rel="noopener noreferrer">WSWA: smaller-format market trend note</a></li>
  <li><a href="https://www.beveragedaily.com/Article/2026/09/28/suntory-unveils-uk-fractional-format-strategy-with-jim-beam-35cl-launch/" target="_blank" rel="noopener noreferrer">BeverageDaily: Jim Beam 35 cl fractional-format launch</a></li>
  <li><a href="https://www.gov.uk/weights-measures-and-packaging-the-law/specified-quantities" target="_blank" rel="noopener noreferrer">GOV.UK: packaged alcohol size examples</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>Always compare liquor prices by product, city and bottle size.</strong> BevOry's city pages are built for that exact job: avoiding false comparisons between quarter, half, full and 1 litre listings.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is informational. Follow legal drinking age, dry-day and possession rules in your state.</p>
`.trim(),
  },
  {
    id: "guide-whisky-home-vs-bar-price-india-on-premise-off-premise-2026",
    title: "Whisky At Home vs Bar Price: Why The Same Bottle Costs Different",
    slug: "whisky-home-vs-bar-price-india-on-premise-off-premise-2026",
    excerpt:
      "A practical guide to retail bottle price, bar peg price, restaurant mark-ups and why whisky costs differently at home and on-premise.",
    cover_emoji: "glass",
    category: "Guides",
    tags: ["whisky price India", "bar peg price", "retail bottle price", "on premise", "off premise", "city price"],
    meta_title: "Whisky Bar vs Bottle Price Guide | BevOry",
    meta_description:
      "Learn why whisky costs more by the peg at bars than by retail bottle, and compare city-level bottle prices on BevOry.",
    published_at: "2026-10-06T14:10:00.000+05:30",
    selection_note:
      "Picked as an educational post because many consumers compare bar peg prices with retail bottle prices, while trade data shows on-premise and off-premise are behaving differently.",
    source_links: [
      "https://www.wswa.org/news/wswa-annual-membership-forum-equips-wine-and-spirits-wholesaler-leaders-navigate-market-policy",
      "https://excise.delhi.gov.in/excise/frequently-asked-questions-1",
      "https://haryanatax.gov.in/LoadPartial/Excise%20Policy",
    ],
    content: String.raw`
<p><strong>A whisky peg at a bar and a whisky bottle from a retail shop are not the same price question.</strong> A bar price includes venue service, glassware, staff, ambience, licences, taxes and operating costs, while a retail bottle price is the cost of buying the sealed bottle from a licensed shop.</p>

<p>WSWA's 2026 forum update noted that on-premise is outperforming off-premise in the US market. The Indian version of that idea is simple: people may still go out for experience, but they search BevOry for exact retail bottle prices before buying for home use.</p>

<h2>Retail Bottle Price</h2>
<p>This is the amount charged for a sealed bottle at a licensed liquor shop, theka or wine shop. It should be compared by exact product, bottle size and city: for example, a 750 ml whisky bottle in Gurgaon or a 180 ml rum quarter in Delhi.</p>

<h2>Bar Peg Price</h2>
<p>This is a served drink price. A 30 ml or 60 ml pour at a bar may include service charge, GST, premium location cost and venue margin. It should not be multiplied directly to judge whether a retail bottle is expensive.</p>

<h2>Why Prices Differ By City</h2>
<ul>
  <li>Delhi, Haryana, Maharashtra, Karnataka and Telangana use different excise systems.</li>
  <li>MRP, duty, licence fee and wholesale structures vary by state.</li>
  <li>Dry days and local closure orders can affect availability.</li>
  <li>Imported whisky may change price after tariff or cost-card revisions.</li>
</ul>

<h2>How To Use BevOry For Smarter Checks</h2>
<p>Search the exact bottle name and city. Compare Johnnie Walker Black Label 750 ml in Delhi with the same bottle in Delhi, not with a bar peg in Cyber Hub or a different size in Noida.</p>

<h2>Food Pairing At Home</h2>
<p>For blended Scotch or bourbon highballs, pair with chicken tikka, chilli paneer, masala peanuts or smoked cheddar. For richer single malts, choose galouti kebabs, mutton seekh, lamb rogan josh or 70% dark chocolate.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.wswa.org/news/wswa-annual-membership-forum-equips-wine-and-spirits-wholesaler-leaders-navigate-market-policy" target="_blank" rel="noopener noreferrer">WSWA: on-premise and off-premise market context</a></li>
  <li><a href="https://excise.delhi.gov.in/excise/frequently-asked-questions-1" target="_blank" rel="noopener noreferrer">Delhi Excise FAQ</a></li>
  <li><a href="https://haryanatax.gov.in/LoadPartial/Excise%20Policy" target="_blank" rel="noopener noreferrer">Haryana Tax Excise Policy page</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>Use bar prices to judge the experience and BevOry retail listings to judge the bottle.</strong> The clean comparison is exact product, bottle size and city.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is for adults. Follow local law, drink responsibly and never drink and drive.</p>
`.trim(),
  },
];

const baseData = {
  cover_image_url: null,
  author: "BevOry Editorial",
  linked_product_id: null,
  linked_brand: null,
  notify_users: false,
};

const savedPosts = [];

for (const post of posts) {
  const data = {
    ...baseData,
    ...post,
    is_published: true,
    is_featured: post.category === "News",
    created_at: now,
    updated_at: now,
  };

  await prisma.contentRecord.upsert({
    where: { key: `blog_posts:${post.id}` },
    update: { data: { ...data, updated_at: now } },
    create: {
      key: `blog_posts:${post.id}`,
      tableName: "blog_posts",
      recordId: post.id,
      data,
    },
  });

  savedPosts.push({
    id: post.id,
    slug: post.slug,
    title: post.title,
    category: post.category,
  });
}

const verification = await prisma.contentRecord.findMany({
  where: { key: { in: posts.map((post) => `blog_posts:${post.id}`) } },
  select: { key: true, data: true },
});

console.log(JSON.stringify({
  saved: savedPosts.length,
  verified: verification.length,
  posts: savedPosts,
}, null, 2));

await prisma.$disconnect();
