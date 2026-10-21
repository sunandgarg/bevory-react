import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const now = new Date().toISOString();

const posts = [
  {
    id: "news-southern-glazers-h2-2026-alcohol-growth-opportunities",
    title: "Southern Glazer's Says Alcohol Growth Is Moving To RTDs, Smaller Packs And Moderation",
    slug: "southern-glazers-h2-2026-alcohol-growth-opportunities",
    excerpt:
      "Southern Glazer's H2 2026 report says beverage alcohol is resetting, with growth in RTDs, wine cocktails, smaller formats, tequila and moderation-led occasions.",
    cover_emoji: "news",
    category: "News",
    tags: ["Southern Glazer's", "RTD", "smaller formats", "tequila", "moderation", "beverage alcohol"],
    meta_title: "Southern Glazer's H2 2026 Alcohol Trends | BevOry",
    meta_description:
      "Southern Glazer's says growth is shifting to RTDs, smaller formats, tequila, premium bottles and moderation. BevOry explains.",
    published_at: "2026-10-07T15:00:00.000+05:30",
    selection_note:
      "Picked as the news item because Southern Glazer's H2 2026 report gives current distributor-side evidence on where beverage alcohol demand is still growing.",
    source_links: [
      "https://newsroom.southernglazers.com/press-releases/press-release-details/2026/Southern-Glazers-New-Report-Identifies-Five-Growth-Opportunities-as-Beverage-Alcohol-Resets/default.aspx",
      "https://www.wswa.org/news/wswa-annual-membership-forum-equips-wine-and-spirits-wholesaler-leaders-navigate-market-policy",
      "https://www.beveragedaily.com/Article/2026/05/22/rtd-alcohol-growth-rates-and-market-competition/",
    ],
    content: String.raw`
<p><strong>Southern Glazer's Wine &amp; Spirits says beverage alcohol is not simply shrinking; it is changing where growth appears.</strong> Its H2 2026 Raise the Bar report highlights RTDs, wine cocktails, no- and low-alcohol drinks, tequila, smaller formats and premium offerings as areas still creating opportunity.</p>

<p>The useful lesson for BevOry readers is practical. Shoppers are becoming more selective, so exact product, pack size, occasion and city price matter more than broad category labels.</p>

<h2>The Five Growth Opportunities</h2>
<ul>
  <li><strong>Next-generation consumers:</strong> Gen Z over-indexes in spirits and RTDs and shows interest in flavour and variety packs.</li>
  <li><strong>Formats and drink types:</strong> Southern Glazer's says spirits RTDs drive 94% of total spirits volume growth, while cocktails account for 92% of total wine growth.</li>
  <li><strong>Occasions:</strong> social gatherings, everyday consumption and on-premise discovery all matter.</li>
  <li><strong>Barbell buying:</strong> value formats and premium experiences can grow at the same time.</li>
  <li><strong>Moderation:</strong> no-, low- and functional beverages are adding occasions rather than replacing all alcohol use.</li>
</ul>

<h2>India Angle</h2>
<p>In India, the same pattern shows up in searches: vodka price in Mumbai, beer price in Gurgaon, RTD drinks in Delhi, tequila price in Bengaluru, and whisky price by exact bottle size. BevOry pages should answer those questions locally, not with one national estimate.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://newsroom.southernglazers.com/press-releases/press-release-details/2026/Southern-Glazers-New-Report-Identifies-Five-Growth-Opportunities-as-Beverage-Alcohol-Resets/default.aspx" target="_blank" rel="noopener noreferrer">Southern Glazer's H2 2026 report announcement</a></li>
  <li><a href="https://www.wswa.org/news/wswa-annual-membership-forum-equips-wine-and-spirits-wholesaler-leaders-navigate-market-policy" target="_blank" rel="noopener noreferrer">WSWA 2026 market update</a></li>
  <li><a href="https://www.beveragedaily.com/Article/2026/05/22/rtd-alcohol-growth-rates-and-market-competition/" target="_blank" rel="noopener noreferrer">BeverageDaily RTD market analysis</a></li>
</ul>

<h2>Responsible Drinking Note</h2>
<p>This article covers market trends. Follow local law, buy only from licensed sellers and drink responsibly.</p>
`.trim(),
  },
  {
    id: "guide-small-bottle-liquor-price-india-180ml-375ml-35cl-2026",
    title: "Small Bottle Liquor Price in India: 180 ml, 375 ml and 35 cl Guide",
    slug: "small-bottle-liquor-price-india-180ml-375ml-35cl-2026",
    excerpt:
      "A practical guide to small-format liquor prices in India, covering 180 ml quarters, 375 ml halves, 35 cl bottles and city-level comparisons.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["small bottle liquor", "180 ml price", "375 ml price", "35cl bottle", "quarter price", "city price"],
    meta_title: "Small Bottle Liquor Price India Guide | BevOry",
    meta_description:
      "Compare 180 ml, 375 ml and 35 cl liquor prices by exact product, bottle size and city on BevOry.",
    published_at: "2026-10-07T15:05:00.000+05:30",
    selection_note:
      "Picked as an educational post because smaller-format bottles are a repeated growth theme and Indian users search quarter, half and full prices heavily.",
    source_links: [
      "https://newsroom.southernglazers.com/press-releases/press-release-details/2026/Southern-Glazers-New-Report-Identifies-Five-Growth-Opportunities-as-Beverage-Alcohol-Resets/default.aspx",
      "https://www.beveragedaily.com/Article/2026/09/28/suntory-unveils-uk-fractional-format-strategy-with-jim-beam-35cl-launch/",
      "https://www.wswa.org/news/wswa-annual-membership-forum-equips-wine-and-spirits-wholesaler-leaders-navigate-market-policy",
    ],
    content: String.raw`
<p><strong>Small bottle liquor prices in India should be compared by exact product, city and pack size.</strong> A 180 ml quarter, 375 ml half, 35 cl bottle, 750 ml full bottle and 1 litre bottle are separate buying questions.</p>

<p>Southern Glazer's says smaller formats are gaining ground as consumers look for convenience, affordability and lower-risk trial. BeverageDaily has also reported Suntory's UK launch of a 35 cl Jim Beam bottle as part of a fractional-format strategy.</p>

<h2>Common Small Formats</h2>
<ul>
  <li><strong>180 ml:</strong> commonly searched in India as a quarter.</li>
  <li><strong>375 ml:</strong> commonly searched as a half bottle.</li>
  <li><strong>35 cl:</strong> a 350 ml-style format seen in some international markets.</li>
  <li><strong>Miniatures:</strong> small trial bottles, often used for sampling or gifting.</li>
</ul>

<h2>Why Small Bottles Matter</h2>
<p>They lower the entry cost, help shoppers try a new whisky, rum, vodka or gin, and reduce waste for occasional drinkers. They also make price comparison harder when listings do not show pack size clearly.</p>

<h2>How To Compare</h2>
<ul>
  <li>Use the exact brand and expression.</li>
  <li>Check the ml or cl size before comparing.</li>
  <li>Compare inside the same city or state.</li>
  <li>Separate retail shop price from bar peg price.</li>
  <li>Check dry-day status before travelling.</li>
</ul>

<h2>Food Pairings</h2>
<p>For small-format whisky highballs, pair with chicken tikka, masala peanuts or smoked cheese. Vodka and gin smaller bottles work with tandoori prawns, cucumber chaat and malai paneer tikka.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://newsroom.southernglazers.com/press-releases/press-release-details/2026/Southern-Glazers-New-Report-Identifies-Five-Growth-Opportunities-as-Beverage-Alcohol-Resets/default.aspx" target="_blank" rel="noopener noreferrer">Southern Glazer's H2 2026 report announcement</a></li>
  <li><a href="https://www.beveragedaily.com/Article/2026/09/28/suntory-unveils-uk-fractional-format-strategy-with-jim-beam-35cl-launch/" target="_blank" rel="noopener noreferrer">BeverageDaily on Jim Beam 35 cl launch</a></li>
  <li><a href="https://www.wswa.org/news/wswa-annual-membership-forum-equips-wine-and-spirits-wholesaler-leaders-navigate-market-policy" target="_blank" rel="noopener noreferrer">WSWA 2026 market update</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>Small bottle prices are useful only when size and city are clear.</strong> BevOry helps compare exact products instead of mixing quarter, half and full-bottle prices.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is informational. Follow legal drinking age, possession and dry-day rules in your state.</p>
`.trim(),
  },
  {
    id: "guide-no-low-alcohol-drinks-india-wine-beer-rtd-2026",
    title: "No- and Low-Alcohol Drinks in India: Wine, Beer and RTD Guide",
    slug: "no-low-alcohol-drinks-india-wine-beer-rtd-2026",
    excerpt:
      "A consumer guide to no- and low-alcohol drinks in India, covering alcohol-free wine, beer, RTDs, serving, food pairings and label checks.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["no alcohol drinks", "low alcohol beer", "alcohol free wine", "RTD drinks", "moderation"],
    meta_title: "No Low Alcohol Drinks India Guide | BevOry",
    meta_description:
      "Compare no- and low-alcohol wine, beer and RTDs by ABV, flavour, serving style and city availability on BevOry.",
    published_at: "2026-10-07T15:10:00.000+05:30",
    selection_note:
      "Picked as an educational post because moderation is a core 2026 growth theme and users need clear label-reading guidance for no- and low-alcohol options.",
    source_links: [
      "https://newsroom.southernglazers.com/press-releases/press-release-details/2026/Southern-Glazers-New-Report-Identifies-Five-Growth-Opportunities-as-Beverage-Alcohol-Resets/default.aspx",
      "https://www.beveragedaily.com/Article/2026/03/13/low-and-no-alcohol-wine-trends-for-2026/",
      "https://www.ipsos.com/en/what-are-consumer-trends-shaping-future-alcohol-2026",
    ],
    content: String.raw`
<p><strong>No- and low-alcohol drinks are becoming part of regular drinking occasions, not only January challenges.</strong> Southern Glazer's H2 2026 report says no-, low- and functional beverages are complementing traditional alcohol and expanding occasions.</p>

<p>For Indian shoppers, the label matters. A 0.0% beer, alcohol-free wine, low-alcohol spritz and functional RTD can all sit in the same moderation conversation but taste and perform very differently.</p>

<h2>What To Check On The Label</h2>
<ul>
  <li><strong>ABV:</strong> check whether it is 0.0%, low-alcohol or simply lighter than usual.</li>
  <li><strong>Base drink:</strong> beer, wine, RTD, botanical drink or functional beverage.</li>
  <li><strong>Sugar:</strong> some alcohol-free wines and RTDs use sweetness to add body.</li>
  <li><strong>Serving style:</strong> chilled bottle, wine glass, highball or over ice.</li>
  <li><strong>Occasion:</strong> food pairing, weekday dinner, party alternative or driving-safe choice.</li>
</ul>

<h2>Serving Guide</h2>
<p>Serve alcohol-free sparkling wine and lighter white styles chilled at 6-8°C. Serve no-alcohol beer cold in a pilsner glass. Serve botanical RTDs over ice with citrus, cucumber or mint.</p>

<h2>Food Pairings</h2>
<p>Alcohol-free sparkling wine works with tandoori prawns, goat cheese, chaat and fried snacks. Low-alcohol beer pairs with chicken tikka, chilli paneer and masala fries. Botanical RTDs suit cucumber chaat, grilled fish and malai paneer tikka.</p>

<h2>How BevOry Users Should Search</h2>
<p>Use exact category searches: alcohol-free wine India, no-alcohol beer price in Mumbai, low-alcohol drinks in Delhi or RTD drinks price in Gurgaon. Availability can vary by city and retailer.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://newsroom.southernglazers.com/press-releases/press-release-details/2026/Southern-Glazers-New-Report-Identifies-Five-Growth-Opportunities-as-Beverage-Alcohol-Resets/default.aspx" target="_blank" rel="noopener noreferrer">Southern Glazer's moderation consumer trend note</a></li>
  <li><a href="https://www.beveragedaily.com/Article/2026/03/13/low-and-no-alcohol-wine-trends-for-2026/" target="_blank" rel="noopener noreferrer">BeverageDaily low- and no-alcohol wine trends</a></li>
  <li><a href="https://www.ipsos.com/en/what-are-consumer-trends-shaping-future-alcohol-2026" target="_blank" rel="noopener noreferrer">Ipsos and IWSR adult beverage trends</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>No- and low-alcohol drinks are best compared by ABV, flavour, serve and occasion.</strong> Check the label first, then compare local availability and price on BevOry.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is informational. Even low-alcohol products should be consumed responsibly and checked for exact ABV.</p>
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
