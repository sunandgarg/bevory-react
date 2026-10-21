import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const now = new Date().toISOString();

const posts = [
  {
    id: "news-southern-glazers-wine-cocktails-growth-h2-2026",
    title: "Wine Cocktails Are Becoming A Serious Growth Lane",
    slug: "southern-glazers-wine-cocktails-growth-h2-2026",
    excerpt:
      "Southern Glazer's H2 2026 report says cocktails account for 92% of total wine growth, pointing to spritzes and low-effort mixed drinks.",
    cover_emoji: "news",
    category: "News",
    tags: ["wine cocktails", "spritz", "Southern Glazer's", "wine", "RTD", "beverage alcohol"],
    meta_title: "Wine Cocktail Growth 2026 News | BevOry",
    meta_description:
      "Southern Glazer's says cocktails drive most wine growth. BevOry explains spritzes, wine cocktails and India price checks.",
    published_at: "2026-10-07T16:00:00.000+05:30",
    selection_note:
      "Picked as the news item because Southern Glazer's H2 2026 report calls out wine cocktails as a major growth driver inside a weak beverage alcohol market.",
    source_links: [
      "https://newsroom.southernglazers.com/press-releases/press-release-details/2026/Southern-Glazers-New-Report-Identifies-Five-Growth-Opportunities-as-Beverage-Alcohol-Resets/default.aspx",
      "https://www.beveragedaily.com/Article/2026/05/22/rtd-alcohol-growth-rates-and-market-competition/",
      "https://www.wswa.org/news/wswa-annual-membership-forum-equips-wine-and-spirits-wholesaler-leaders-navigate-market-policy",
    ],
    content: String.raw`
<p><strong>Wine cocktails are becoming a serious growth lane inside beverage alcohol.</strong> Southern Glazer's H2 2026 Raise the Bar report says cocktails account for 92% of total wine growth, a clear signal that wine is moving beyond the classic still-bottle occasion.</p>

<p>The shift fits a wider pattern: consumers want flavour, lighter serves, simple preparation and pack sizes that match the occasion.</p>

<h2>What Is Driving It</h2>
<ul>
  <li><strong>Spritz occasions:</strong> lower-effort serves built around wine, soda, fruit and ice.</li>
  <li><strong>RTD crossover:</strong> drinkers are comfortable with pre-mixed or easy-mix formats.</li>
  <li><strong>Moderation:</strong> wine-based cocktails can feel lighter than full-strength spirit serves.</li>
  <li><strong>Food flexibility:</strong> spritzes and wine cocktails work with snacks, brunch and casual dinners.</li>
</ul>

<h2>India Angle</h2>
<p>Indian metro searches already show this behaviour: wine price in Mumbai, sparkling wine price in Delhi, Aperol-style spritz ingredients, RTD drinks in Gurgaon and party drinks for home. BevOry should treat wine cocktails as a practical buying occasion, not just a bar menu trend.</p>

<h2>What To Check Before Buying</h2>
<p>Check bottle size, sweetness, ABV, city price and mixer cost. A sparkling wine, still white wine and canned wine cocktail should not be compared as if they are the same product.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://newsroom.southernglazers.com/press-releases/press-release-details/2026/Southern-Glazers-New-Report-Identifies-Five-Growth-Opportunities-as-Beverage-Alcohol-Resets/default.aspx" target="_blank" rel="noopener noreferrer">Southern Glazer's H2 2026 trend report note</a></li>
  <li><a href="https://www.beveragedaily.com/Article/2026/05/22/rtd-alcohol-growth-rates-and-market-competition/" target="_blank" rel="noopener noreferrer">BeverageDaily RTD market analysis</a></li>
  <li><a href="https://www.wswa.org/news/wswa-annual-membership-forum-equips-wine-and-spirits-wholesaler-leaders-navigate-market-policy" target="_blank" rel="noopener noreferrer">WSWA 2026 market update</a></li>
</ul>

<h2>Responsible Drinking Note</h2>
<p>This article covers alcohol trends. Follow local law, buy only from licensed sellers and drink responsibly.</p>
`.trim(),
  },
  {
    id: "guide-spritz-and-wine-cocktails-india-price-pairing-2026",
    title: "Spritz and Wine Cocktails in India: Price, Serve and Pairing Guide",
    slug: "spritz-and-wine-cocktails-india-price-pairing-2026",
    excerpt:
      "A practical guide to spritzes and wine cocktails in India, covering sparkling wine, white wine, mixers, glassware, food pairings and city prices.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["spritz", "wine cocktail", "sparkling wine price", "white wine price", "party drinks"],
    meta_title: "Spritz Wine Cocktail India Guide | BevOry",
    meta_description:
      "Make spritzes and wine cocktails with the right wine, mixer, glassware and food pairings. Compare city prices on BevOry.",
    published_at: "2026-10-07T16:05:00.000+05:30",
    selection_note:
      "Picked as an educational post because spritz and wine-cocktail searches combine recipe intent with high-intent wine price checks.",
    source_links: [
      "https://newsroom.southernglazers.com/press-releases/press-release-details/2026/Southern-Glazers-New-Report-Identifies-Five-Growth-Opportunities-as-Beverage-Alcohol-Resets/default.aspx",
      "https://www.beveragedaily.com/Article/2026/03/13/low-and-no-alcohol-wine-trends-for-2026/",
      "https://www.ipsos.com/en/what-are-consumer-trends-shaping-future-alcohol-2026",
    ],
    content: String.raw`
<p><strong>A spritz is one of the easiest wine cocktails to make at home: chilled wine or aperitif, bubbles, ice and a citrus garnish.</strong> In India, the main buying questions are the wine price, mixer choice, bottle size and city availability.</p>

<p>Wine cocktails are gaining attention because they feel lighter and easier than spirit-heavy drinks. They also pair naturally with snacks and early-evening food.</p>

<h2>Simple Spritz Formula</h2>
<ul>
  <li>Use a large wine glass or goblet.</li>
  <li>Fill with ice.</li>
  <li>Add chilled sparkling wine or white wine.</li>
  <li>Add soda, tonic or a bitter aperitif depending on the style.</li>
  <li>Garnish with orange, lime, mint or cucumber.</li>
</ul>

<h2>Wine Styles To Use</h2>
<p>Dry sparkling wine works for crisp spritzes. Sauvignon Blanc gives citrus and green fruit. Rose brings red-fruit lift. Sweeter wine needs a dry mixer or more soda so the drink does not feel heavy.</p>

<h2>Food Pairings</h2>
<p>Pair spritzes with tandoori prawns, bruschetta, cucumber chaat, malai paneer tikka, goat cheese salad, herbed fries and rava-fried fish. Avoid very heavy gravies with delicate wine cocktails.</p>

<h2>How To Compare Prices</h2>
<p>Search exact city terms such as sparkling wine price in Mumbai, Sauvignon Blanc price in Delhi, rose wine price in Gurgaon or party drinks in Bengaluru. Compare 750 ml bottles separately from cans, half bottles and restaurant pours.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://newsroom.southernglazers.com/press-releases/press-release-details/2026/Southern-Glazers-New-Report-Identifies-Five-Growth-Opportunities-as-Beverage-Alcohol-Resets/default.aspx" target="_blank" rel="noopener noreferrer">Southern Glazer's H2 2026 trend report note</a></li>
  <li><a href="https://www.beveragedaily.com/Article/2026/03/13/low-and-no-alcohol-wine-trends-for-2026/" target="_blank" rel="noopener noreferrer">BeverageDaily low- and no-alcohol wine trends</a></li>
  <li><a href="https://www.ipsos.com/en/what-are-consumer-trends-shaping-future-alcohol-2026" target="_blank" rel="noopener noreferrer">Ipsos and IWSR adult beverage trends</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>Spritzes work best when the wine is dry, chilled and matched to the food.</strong> Check city-level wine prices on BevOry before planning the serve.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is for adults. Follow local law, serve water and food, and never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-tequila-and-agave-spirits-india-price-serve-2026",
    title: "Tequila and Agave Spirits in India: Price, Serve and Food Guide",
    slug: "tequila-and-agave-spirits-india-price-serve-2026",
    excerpt:
      "A consumer guide to tequila and agave spirits in India, covering blanco, reposado, anejo, Paloma serves, food pairings and city-level prices.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["tequila price India", "agave spirits", "Paloma", "blanco tequila", "reposado tequila"],
    meta_title: "Tequila Price India Guide | BevOry",
    meta_description:
      "Compare tequila and agave spirits by style, serve, food pairing, bottle size and city price on BevOry.",
    published_at: "2026-10-07T16:10:00.000+05:30",
    selection_note:
      "Picked as an educational post because Southern Glazer's report highlights tequila and agave growth, while Indian metro users increasingly search tequila prices.",
    source_links: [
      "https://newsroom.southernglazers.com/press-releases/press-release-details/2026/Southern-Glazers-New-Report-Identifies-Five-Growth-Opportunities-as-Beverage-Alcohol-Resets/default.aspx",
      "https://www.beveragedaily.com/Article/2026/02/20/tequila-and-mezcal-must-sustain-boom-to-keep-investor-interest/",
      "https://www.ipsos.com/en/what-are-consumer-trends-shaping-future-alcohol-2026",
    ],
    content: String.raw`
<p><strong>Tequila and agave spirits in India should be compared by style, bottle size, origin, serve and city price.</strong> Blanco, reposado and anejo tequilas are not the same buying question, even when they come from the same brand.</p>

<p>Southern Glazer's H2 2026 report names premium and luxury agave as a growth area, helped by premiumisation and younger consumers. For Indian buyers, that means better searches: exact bottle, exact size and exact city.</p>

<h2>Common Tequila Styles</h2>
<ul>
  <li><strong>Blanco:</strong> fresh agave, citrus and pepper; useful for Margaritas and Palomas.</li>
  <li><strong>Reposado:</strong> rested in oak; adds vanilla, cooked agave and soft spice.</li>
  <li><strong>Anejo:</strong> longer oak ageing; richer texture, caramel, spice and sipping potential.</li>
  <li><strong>Mezcal:</strong> broader agave category, often showing roasted agave and smoke depending on producer.</li>
</ul>

<h2>Best Serves</h2>
<p>Use blanco for a Paloma with grapefruit soda or a Margarita with lime and orange liqueur. Sip good reposado or anejo neat in a small tulip glass, or over one large ice cube.</p>

<h2>Indian Food Pairings</h2>
<p>Pair blanco tequila with tandoori prawns, cucumber chaat, fish tacos and peri-peri fries. Reposado works with chicken tikka, paneer tikka, pork tacos and grilled corn. Anejo can handle dark chocolate and spiced lamb chops.</p>

<h2>How To Check Price</h2>
<p>Search tequila price in Delhi, tequila price in Mumbai, Paloma tequila price in Gurgaon or agave spirits price in Bengaluru. Compare 700 ml and 750 ml bottles separately, and do not use cocktail menu prices as retail MRP.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://newsroom.southernglazers.com/press-releases/press-release-details/2026/Southern-Glazers-New-Report-Identifies-Five-Growth-Opportunities-as-Beverage-Alcohol-Resets/default.aspx" target="_blank" rel="noopener noreferrer">Southern Glazer's H2 2026 trend report note</a></li>
  <li><a href="https://www.beveragedaily.com/Article/2026/02/20/tequila-and-mezcal-must-sustain-boom-to-keep-investor-interest/" target="_blank" rel="noopener noreferrer">BeverageDaily tequila and mezcal market analysis</a></li>
  <li><a href="https://www.ipsos.com/en/what-are-consumer-trends-shaping-future-alcohol-2026" target="_blank" rel="noopener noreferrer">Ipsos and IWSR adult beverage trends</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>Buy tequila by style and use case.</strong> Blanco for cocktails, reposado for flexible sipping and mixing, anejo for richer neat pours.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is informational. Follow legal drinking age, dry-day and possession rules in your state.</p>
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
