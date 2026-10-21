import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const now = new Date().toISOString();

const posts = [
  {
    id: "news-diageo-don-julio-casamigos-100-agave-case-dismissed-2026",
    title: "Diageo Wins Dismissal In Don Julio And Casamigos Agave Case",
    slug: "diageo-don-julio-casamigos-100-agave-case-dismissed-2026",
    excerpt:
      "A New York federal court dismissed a proposed class action over 100% agave claims for Don Julio and Casamigos, citing insufficient evidence.",
    cover_emoji: "news",
    category: "News",
    tags: ["Diageo", "Don Julio", "Casamigos", "tequila", "100% agave", "spirits law"],
    meta_title: "Diageo Agave Case Dismissed | BevOry",
    meta_description:
      "Diageo won dismissal of a Don Julio and Casamigos 100% agave case. Read what it means for tequila buyers.",
    published_at: "2026-10-07T17:00:00.000+05:30",
    selection_note:
      "Picked as the news item because the 1 October 2026 ruling affects two of the largest premium tequila brands and raises consumer questions around 100% agave labels.",
    source_links: [
      "https://www.shankennewsdaily.com/2026/10/02/40987/diageo-prevails-in-ny-agave-class-action-case/",
      "https://app.midpage.ai/document/pusateri-v-diageo-north-america--ab9978a3-c1a2-4522-a650-ed4e0bfac079",
      "https://www.law360.com/cases/68191a9d8c53a2460ac6a570/articles",
      "https://www.donjulio.com/frequently-asked-questions",
      "https://www.casamigos.com/en-us",
    ],
    content: String.raw`
<p><strong>Diageo has won dismissal of a proposed New York class action that challenged 100% agave claims around Don Julio and Casamigos tequila.</strong> Shanken News Daily reported on 2 October 2026 that Judge LaShann DeArcy Hall of the US District Court for the Eastern District of New York granted Diageo North America's motion to dismiss.</p>

<p>The ruling is important for tequila buyers because it shows how seriously courts, brands and consumers treat origin and ingredient claims in premium agave spirits.</p>

<h2>What The Case Was About</h2>
<ul>
  <li><strong>Brands:</strong> Don Julio and Casamigos.</li>
  <li><strong>Claim challenged:</strong> 100% agave labelling and marketing.</li>
  <li><strong>Court:</strong> US District Court, Eastern District of New York.</li>
  <li><strong>Outcome:</strong> the court dismissed the proposed class action.</li>
  <li><strong>Key point:</strong> reporting and the order say the plaintiffs did not sufficiently support a broad allegation of widespread mislabelling.</li>
</ul>

<h2>What Diageo Says</h2>
<p>Don Julio's FAQ says every bottle begins with 100% Blue Weber agave. Casamigos' official site says its tequilas are made from 100% Blue Weber agaves grown in Jalisco's clay soils.</p>

<h2>Why This Matters In India</h2>
<p>Indian tequila searches are getting more specific: Don Julio price in Delhi, Casamigos price in Mumbai, tequila price in Gurgaon and blanco tequila price in Bengaluru. Shoppers should check exact expression, bottle size, importer label and city price before buying.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.shankennewsdaily.com/2026/10/02/40987/diageo-prevails-in-ny-agave-class-action-case/" target="_blank" rel="noopener noreferrer">Shanken News Daily case report</a></li>
  <li><a href="https://app.midpage.ai/document/pusateri-v-diageo-north-america--ab9978a3-c1a2-4522-a650-ed4e0bfac079" target="_blank" rel="noopener noreferrer">Pusateri v. Diageo North America memorandum and order</a></li>
  <li><a href="https://www.law360.com/cases/68191a9d8c53a2460ac6a570/articles" target="_blank" rel="noopener noreferrer">Law360 case tracker and ruling summary</a></li>
  <li><a href="https://www.donjulio.com/frequently-asked-questions" target="_blank" rel="noopener noreferrer">Don Julio official FAQ</a></li>
  <li><a href="https://www.casamigos.com/en-us" target="_blank" rel="noopener noreferrer">Casamigos official website</a></li>
</ul>

<h2>Responsible Drinking Note</h2>
<p>This article covers spirits law and product labelling. Follow local law, buy only from licensed sellers and drink responsibly.</p>
`.trim(),
  },
  {
    id: "guide-100-agave-tequila-label-india-don-julio-casamigos-2026",
    title: "100% Agave Tequila: What The Label Means Before You Buy",
    slug: "100-agave-tequila-label-india-don-julio-casamigos-2026",
    excerpt:
      "A clear guide to 100% agave tequila labels, Blue Weber agave, blanco, reposado and anejo styles, and city-level price checks in India.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["100% agave tequila", "tequila label", "Don Julio", "Casamigos", "tequila price India"],
    meta_title: "100% Agave Tequila India Guide | BevOry",
    meta_description:
      "Learn what 100% agave tequila means, how to compare blanco, reposado and anejo, and check city prices on BevOry.",
    published_at: "2026-10-07T17:05:00.000+05:30",
    selection_note:
      "Picked as an educational post because agave-label questions are rising after the Diageo ruling and Indian tequila searches need simple buying guidance.",
    source_links: [
      "https://www.donjulio.com/frequently-asked-questions",
      "https://www.casamigos.com/en-us/our-story",
      "https://www.ttb.gov/regulated-commodities/beverage-alcohol/distilled-spirits/labeling",
      "https://app.midpage.ai/document/pusateri-v-diageo-north-america--ab9978a3-c1a2-4522-a650-ed4e0bfac079",
    ],
    content: String.raw`
<p><strong>100% agave tequila means the tequila is made from agave sugars rather than a mixto-style blend of agave and other fermentable sugars.</strong> For Indian buyers, the label is a useful starting point, but the exact brand, expression, importer label and city price still matter.</p>

<p>Don Julio and Casamigos both state on official brand pages that their tequilas use 100% Blue Weber agave. The recent Diageo case dismissal has put that label language back into the spotlight.</p>

<h2>What To Check On A Tequila Bottle</h2>
<ul>
  <li><strong>Agave claim:</strong> look for 100% agave, 100% Blue Weber agave or 100% de agave wording.</li>
  <li><strong>Style:</strong> blanco, reposado, anejo, cristalino or mezcal.</li>
  <li><strong>Origin:</strong> tequila should be tied to Mexico's tequila-producing regions, with Jalisco especially prominent.</li>
  <li><strong>Importer label:</strong> Indian bottles should carry required importer and statutory information.</li>
  <li><strong>Pack size:</strong> compare 700 ml and 750 ml bottles separately.</li>
</ul>

<h2>Style Guide</h2>
<p>Blanco is fresh and bright, built for Margaritas and Palomas. Reposado adds oak softness, vanilla and spice. Anejo is richer and better for neat sipping or slow rocks pours.</p>

<h2>Food Pairings</h2>
<p>Blanco works with tandoori prawns, cucumber chaat, fish tacos and peri-peri fries. Reposado pairs with chicken tikka, paneer tikka and grilled corn. Anejo suits lamb chops, dark chocolate and spiced nuts.</p>

<h2>How To Check Price In India</h2>
<p>Search exact city terms such as Don Julio price in Delhi, Casamigos price in Mumbai, tequila price in Gurgaon or reposado tequila price in Bengaluru. Do not compare bar cocktail prices with sealed-bottle MRPs.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.donjulio.com/frequently-asked-questions" target="_blank" rel="noopener noreferrer">Don Julio official FAQ</a></li>
  <li><a href="https://www.casamigos.com/en-us/our-story" target="_blank" rel="noopener noreferrer">Casamigos official craft page</a></li>
  <li><a href="https://www.ttb.gov/regulated-commodities/beverage-alcohol/distilled-spirits/labeling" target="_blank" rel="noopener noreferrer">TTB distilled spirits labelling guidance</a></li>
  <li><a href="https://app.midpage.ai/document/pusateri-v-diageo-north-america--ab9978a3-c1a2-4522-a650-ed4e0bfac079" target="_blank" rel="noopener noreferrer">Pusateri v. Diageo order text</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>For tequila, read the agave label, then compare style, bottle size and city price.</strong> BevOry helps turn that label check into a local buying decision.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is for adults. Follow local legal drinking age, dry-day and possession rules.</p>
`.trim(),
  },
  {
    id: "guide-casamigos-vs-don-julio-india-price-taste-serve-2026",
    title: "Casamigos vs Don Julio in India: Price, Taste and Serve Guide",
    slug: "casamigos-vs-don-julio-india-price-taste-serve-2026",
    excerpt:
      "A consumer comparison of Casamigos and Don Julio tequila in India, covering style, flavour, serving, food pairings and city-level price checks.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["Casamigos vs Don Julio", "tequila price India", "Don Julio price", "Casamigos price", "Paloma"],
    meta_title: "Casamigos vs Don Julio India Guide | BevOry",
    meta_description:
      "Compare Casamigos and Don Julio by style, flavour, serve, food pairing and city price before buying tequila on BevOry.",
    published_at: "2026-10-07T17:10:00.000+05:30",
    selection_note:
      "Picked as an educational post because Casamigos and Don Julio are high-recognition tequila brands and comparison searches can convert into exact city-price checks.",
    source_links: [
      "https://www.casamigos.com/en-us",
      "https://www.casamigos.com/en-us/our-story",
      "https://www.donjulio.com/",
      "https://www.donjulio.com/frequently-asked-questions",
      "https://www.diageoindia.com/en/brands/brand-explorer/don-julio",
    ],
    content: String.raw`
<p><strong>Casamigos and Don Julio are both premium tequila names, but they should be compared by expression, style, bottle size and city price.</strong> Blanco, reposado, anejo and cristalino bottles serve different drinking occasions.</p>

<p>Casamigos leans into smooth, easy-drinking tequila and party-friendly cocktails. Don Julio carries a longer luxury tequila heritage and, through Diageo India, is positioned around high-calibre Blue Weber agave and Mexican origin.</p>

<h2>Best For Cocktails</h2>
<p>Use blanco tequila for Margaritas and Palomas. Casamigos Blanco and Don Julio Blanco both fit citrus-led cocktails where lime, grapefruit and soda keep the drink fresh.</p>

<h2>Best For Sipping</h2>
<p>Reposado and anejo bottles are better for neat pours or one large ice cube. Expect more oak, vanilla, cooked agave and spice than in blanco tequila.</p>

<h2>Food Pairings</h2>
<p>Pair blanco tequila with tandoori prawns, cucumber chaat, fish tacos and rava-fried fish. Reposado works with paneer tikka, chicken tikka, grilled corn and pork tacos. Anejo can pair with lamb chops, dark chocolate and smoked almonds.</p>

<h2>How To Compare Price In India</h2>
<p>Search exact terms such as Casamigos Blanco price in Mumbai, Don Julio Reposado price in Delhi, Don Julio 1942 price in Gurgaon or tequila price in Bengaluru. Compare the same bottle size and expression only.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.casamigos.com/en-us" target="_blank" rel="noopener noreferrer">Casamigos official website</a></li>
  <li><a href="https://www.casamigos.com/en-us/our-story" target="_blank" rel="noopener noreferrer">Casamigos official craft page</a></li>
  <li><a href="https://www.donjulio.com/" target="_blank" rel="noopener noreferrer">Don Julio official website</a></li>
  <li><a href="https://www.donjulio.com/frequently-asked-questions" target="_blank" rel="noopener noreferrer">Don Julio official FAQ</a></li>
  <li><a href="https://www.diageoindia.com/en/brands/brand-explorer/don-julio" target="_blank" rel="noopener noreferrer">Diageo India Don Julio brand page</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>Choose Casamigos or Don Julio by use case: blanco for bright cocktails, reposado for flexible sipping and anejo or luxury expressions for slow pours.</strong> Then compare city prices on BevOry.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is informational. Follow local law, buy from licensed sellers and do not drink and drive.</p>
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
