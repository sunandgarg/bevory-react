import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const now = new Date().toISOString();

const posts = [
  {
    id: "news-discus-2027-innovation-showcase-finalists-spirits-tech-rtd",
    title: "DISCUS Names 2027 Innovation Showcase Finalists",
    slug: "discus-2027-innovation-showcase-finalists-spirits-tech-rtd",
    excerpt:
      "DISCUS has named six finalists for its 2027 Innovation Showcase, covering digital shelf tools, bourbon, RTDs, packaging and spirits technology.",
    cover_emoji: "news",
    category: "News",
    tags: ["DISCUS", "spirits innovation", "RTD", "digital shelf", "bourbon", "packaging"],
    meta_title: "DISCUS Innovation Showcase 2027 | BevOry",
    meta_description:
      "DISCUS named six spirits innovation finalists across digital shelf, RTDs, bourbon and packaging. Read BevOry's industry note.",
    published_at: "2026-10-07T13:00:00.000+05:30",
    selection_note:
      "Picked as the news item because DISCUS announced the finalists on 5 October 2026, giving a fresh view of where spirits innovation is heading.",
    source_links: [
      "https://distilledspirits.org/news/finalists-announced-for-2027-distilled-spirits-council-innovation-showcase/",
      "https://www.distilledspirits.org/innovation-showcase/",
      "https://newsroom.southernglazers.com/press-releases/press-release-details/2026/Southern-Glazers-New-Report-Identifies-Five-Growth-Opportunities-as-Beverage-Alcohol-Resets/default.aspx",
    ],
    content: String.raw`
<p><strong>The Distilled Spirits Council of the United States has named six finalists for the 2027 Innovation Showcase.</strong> DISCUS announced the shortlist on 5 October 2026, with the live virtual competition scheduled for 5 November 2026.</p>

<p>The finalists show where spirits innovation is moving: digital product storytelling, bourbon positioning, RTD formats, packaging, supply-chain tools and consumer-facing discovery.</p>

<h2>The Six Finalists</h2>
<ul>
  <li><strong>BevAlc360°:</strong> a digital shelf storytelling engine for product detail pages.</li>
  <li><strong>Dexter Bourbon Company:</strong> DEXTER Lawbreaker.</li>
  <li><strong>Fallow Collective:</strong> the Fallow Collective Ecosystem.</li>
  <li><strong>Galloway Company:</strong> a high-protein, low-sugar, cream-based RTD concept.</li>
  <li><strong>Vicard Generation 7:</strong> the Distilium Project.</li>
  <li><strong>Pourly Done LLC:</strong> The Pourveyors Platform.</li>
</ul>

<h2>Why It Matters</h2>
<p>DISCUS says the showcase covers packaging, technology, supply chain, sustainability, marketing, social responsibility and product development. That mix is telling: growth is not coming from liquid alone. Brands also need better product pages, clearer tasting information, smarter pack formats and sharper occasions.</p>

<h2>India Angle</h2>
<p>For BevOry, the digital shelf point is especially relevant. Indian users searching whisky price in Delhi, gin price in Mumbai or tequila price in Gurgaon need complete product pages: bottle image, brand, category, origin, tasting notes, serve, food pairings and city-level price.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://distilledspirits.org/news/finalists-announced-for-2027-distilled-spirits-council-innovation-showcase/" target="_blank" rel="noopener noreferrer">DISCUS finalist announcement</a></li>
  <li><a href="https://www.distilledspirits.org/innovation-showcase/" target="_blank" rel="noopener noreferrer">DISCUS Innovation Showcase page</a></li>
  <li><a href="https://newsroom.southernglazers.com/press-releases/press-release-details/2026/Southern-Glazers-New-Report-Identifies-Five-Growth-Opportunities-as-Beverage-Alcohol-Resets/default.aspx" target="_blank" rel="noopener noreferrer">Southern Glazer's Raise the Bar trend report note</a></li>
</ul>

<h2>Responsible Drinking Note</h2>
<p>This article covers industry innovation. Follow local law, buy only from licensed sellers and drink responsibly.</p>
`.trim(),
  },
  {
    id: "guide-best-liquor-product-pages-india-price-taste-image-2026",
    title: "Best Liquor Product Pages: What Indian Buyers Need Before Paying",
    slug: "best-liquor-product-pages-india-price-taste-image-2026",
    excerpt:
      "A BevOry guide to strong liquor product pages, covering bottle images, city prices, tasting notes, serving, pairings and authenticity checks.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["liquor product page", "whisky price", "bottle image", "tasting notes", "city price", "BevOry"],
    meta_title: "Liquor Product Page Guide India | BevOry",
    meta_description:
      "See what a useful liquor product page needs: image, city price, taste, serve, pairing and authenticity checks on BevOry.",
    published_at: "2026-10-07T13:05:00.000+05:30",
    selection_note:
      "Picked as an educational post because product-page quality directly affects high-intent searches for exact bottles and city-level prices.",
    source_links: [
      "https://distilledspirits.org/news/finalists-announced-for-2027-distilled-spirits-council-innovation-showcase/",
      "https://newsroom.southernglazers.com/press-releases/press-release-details/2026/Southern-Glazers-New-Report-Identifies-Five-Growth-Opportunities-as-Beverage-Alcohol-Resets/default.aspx",
      "https://www.wswa.org/news/wswa-annual-membership-forum-equips-wine-and-spirits-wholesaler-leaders-navigate-market-policy",
    ],
    content: String.raw`
<p><strong>A useful liquor product page in India should answer the buying question fast: what is this bottle, what does it taste like, how should it be served, what food fits it and what is the city-level price?</strong> Anything less forces shoppers to guess.</p>

<p>DISCUS naming a digital shelf storytelling engine among its 2027 Innovation Showcase finalists is a reminder that product pages now carry real commercial weight. A spirits page is not just a catalogue line; it is where the buyer decides.</p>

<h2>What A Strong Product Page Needs</h2>
<ul>
  <li><strong>Clear bottle image:</strong> front-facing, correct product, clean background and no unrelated external branding.</li>
  <li><strong>Exact product name:</strong> brand, expression, age or variant where relevant.</li>
  <li><strong>Category:</strong> single malt, blended Scotch, bourbon, vodka, gin, rum, wine, beer or RTD.</li>
  <li><strong>City price:</strong> Delhi, Mumbai, Gurgaon, Bengaluru or Hyderabad should not be mixed into one national estimate.</li>
  <li><strong>Tasting notes:</strong> nose, palate and finish for spirits; aroma, body and acidity for wine.</li>
  <li><strong>Serving guide:</strong> glassware, temperature and mixer suggestions.</li>
  <li><strong>Food pairing:</strong> specific dishes such as galouti kebabs, tandoori prawns, paneer tikka or dark chocolate.</li>
</ul>

<h2>Why Images Matter</h2>
<p>A wrong image can make a correct price feel untrustworthy. For exact-product searches, the bottle image should match the label, variant, size and packaging as closely as possible.</p>

<h2>Why City Price Matters</h2>
<p>Indian alcohol retail is state-led. A whisky price in Gurgaon, Delhi and Noida can differ even across short distances, so the city field is part of the product, not a decoration.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://distilledspirits.org/news/finalists-announced-for-2027-distilled-spirits-council-innovation-showcase/" target="_blank" rel="noopener noreferrer">DISCUS Innovation Showcase finalist announcement</a></li>
  <li><a href="https://newsroom.southernglazers.com/press-releases/press-release-details/2026/Southern-Glazers-New-Report-Identifies-Five-Growth-Opportunities-as-Beverage-Alcohol-Resets/default.aspx" target="_blank" rel="noopener noreferrer">Southern Glazer's H2 2026 growth opportunities report note</a></li>
  <li><a href="https://www.wswa.org/news/wswa-annual-membership-forum-equips-wine-and-spirits-wholesaler-leaders-navigate-market-policy" target="_blank" rel="noopener noreferrer">WSWA 2026 market and channel context</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>The best liquor product page removes doubt.</strong> It gives the right image, exact bottle, city price, taste, serve and pairing before the buyer leaves the page.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is informational. Follow local legal drinking age, dry-day and possession rules.</p>
`.trim(),
  },
  {
    id: "guide-rtd-variety-pack-india-berry-beer-hard-seltzer-2026",
    title: "RTD Variety Packs in India: Berry Beer, Hard Seltzer and Party Drinks",
    slug: "rtd-variety-pack-india-berry-beer-hard-seltzer-2026",
    excerpt:
      "A guide to RTD variety packs, berry-flavoured beer, hard seltzer and party drinks, with city-price and food-pairing tips for India.",
    cover_emoji: "can",
    category: "Guides",
    tags: ["RTD variety pack", "hard seltzer", "berry beer", "party drinks", "RTD price India"],
    meta_title: "RTD Variety Pack India Guide | BevOry",
    meta_description:
      "Compare RTD variety packs, berry beer and hard seltzer by flavour, pack size and city price on BevOry.",
    published_at: "2026-10-07T13:10:00.000+05:30",
    selection_note:
      "Picked as an educational post because Southern Glazer's H2 2026 report highlights RTDs, variety packs, berry flavours and smaller formats as growth areas.",
    source_links: [
      "https://newsroom.southernglazers.com/press-releases/press-release-details/2026/Southern-Glazers-New-Report-Identifies-Five-Growth-Opportunities-as-Beverage-Alcohol-Resets/default.aspx",
      "https://www.beveragedaily.com/Article/2026/05/22/rtd-alcohol-growth-rates-and-market-competition/",
      "https://www.wswa.org/news/wswa-annual-membership-forum-equips-wine-and-spirits-wholesaler-leaders-navigate-market-policy",
    ],
    content: String.raw`
<p><strong>RTD variety packs help drinkers try multiple flavours without buying a full case of one product.</strong> Southern Glazer's H2 2026 report says variety packs are outperforming single-flavour packs across RTD cocktails and hard seltzers, while berry-flavoured beer is over-indexing with Gen Z drinkers.</p>

<p>For India, the useful buyer question is simple: what pack, what flavour, what ABV, what city price and what occasion?</p>

<h2>What Counts As An RTD Variety Pack</h2>
<ul>
  <li><strong>Hard seltzer packs:</strong> usually lighter, carbonated and flavour-led.</li>
  <li><strong>RTD cocktail packs:</strong> canned or bottled serves built around familiar cocktail flavours.</li>
  <li><strong>Flavoured beer packs:</strong> beer-based drinks with fruit or botanical flavours.</li>
  <li><strong>Party samplers:</strong> mixed packs designed for groups with different taste preferences.</li>
</ul>

<h2>How To Compare In India</h2>
<p>Check the exact brand, ABV, can size, number of cans, flavour mix and city MRP. A 4-pack of 250 ml cans and a 6-pack of 330 ml cans are not comparable unless you calculate the liquid volume and final price.</p>

<h2>Food Pairings</h2>
<p>Berry RTDs and flavoured beers pair with chilli paneer, peri-peri fries, chicken wings and salted popcorn. Citrus hard seltzers work with cucumber chaat, tandoori prawns, rava-fried fish and goat cheese crostini.</p>

<h2>Best Use Cases</h2>
<p>Choose variety packs for house parties, tasting nights, picnics where legal, and guests who do not want full-strength cocktails. Keep water, soda and non-alcohol options on the same table.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://newsroom.southernglazers.com/press-releases/press-release-details/2026/Southern-Glazers-New-Report-Identifies-Five-Growth-Opportunities-as-Beverage-Alcohol-Resets/default.aspx" target="_blank" rel="noopener noreferrer">Southern Glazer's H2 2026 trend report note</a></li>
  <li><a href="https://www.beveragedaily.com/Article/2026/05/22/rtd-alcohol-growth-rates-and-market-competition/" target="_blank" rel="noopener noreferrer">BeverageDaily RTD alcohol market analysis</a></li>
  <li><a href="https://www.wswa.org/news/wswa-annual-membership-forum-equips-wine-and-spirits-wholesaler-leaders-navigate-market-policy" target="_blank" rel="noopener noreferrer">WSWA 2026 market update</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>RTD variety packs are useful when guests want flavour choice and low-effort serves.</strong> Compare exact pack size, ABV, flavour mix and city price on BevOry before buying.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is for adults. Follow local law, dry-day rules and safe transport practices.</p>
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
