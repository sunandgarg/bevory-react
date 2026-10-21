import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const now = new Date().toISOString();

const posts = [
  {
    id: "news-constellation-brands-q2-fy2027-beer-wine-spirits-results",
    title: "Constellation Q2 Shows Beer Still Carrying Premium Alcohol Growth",
    slug: "constellation-brands-q2-fy2027-beer-wine-spirits-results",
    excerpt:
      "Constellation Brands reported Q2 FY2027 net sales growth, with beer up 5% and wine and spirits up 17% after portfolio changes.",
    cover_emoji: "news",
    category: "News",
    tags: ["Constellation Brands", "beer", "wine and spirits", "Modelo", "Corona", "Kim Crawford", "earnings"],
    meta_title: "Constellation Q2 FY2027 Alcohol News | BevOry",
    meta_description:
      "Constellation Q2 FY2027 shows beer growth and wine-spirit recovery. Read what it means for premium alcohol demand.",
    published_at: "2026-10-07T10:00:00.000+05:30",
    selection_note:
      "Picked as the news item because Constellation's 6 October 2026 results give fresh, company-reported signals across beer, wine and spirits.",
    source_links: [
      "https://ir.cbrands.com/news-events/press-releases/detail/346/constellation-brands-reports-second-quarter-fiscal-2027-financial-results",
      "https://ir.cbrands.com/sec-filings/all-sec-filings/content/0000016918-26-000039/stzex991_83120268kearnings.htm",
      "https://www.cbrands.com/blogs/stories/earnings-recap-constellation-brands-second-quarter-fiscal-2027-earnings-results",
    ],
    content: String.raw`
<p><strong>Constellation Brands reported second-quarter fiscal 2027 net sales of $2.633 billion, up 6% from the same quarter last year.</strong> The company released the numbers on 6 October 2026 and scheduled its earnings call for 7 October at 8:00 a.m. ET.</p>

<p>The headline for the drinks trade is simple: beer remained the bigger engine, while wine and spirits showed a sharper rebound on a smaller base.</p>

<h2>Key Numbers</h2>
<ul>
  <li><strong>Total net sales:</strong> $2.633 billion, up 6%.</li>
  <li><strong>Beer net sales:</strong> $2.4736 billion, up 5%.</li>
  <li><strong>Beer shipments:</strong> up 5.5%.</li>
  <li><strong>Beer depletions:</strong> down 0.6%.</li>
  <li><strong>Wine and spirits net sales:</strong> $159.4 million, up 17%.</li>
  <li><strong>Wine and spirits depletions:</strong> up 10.2%, driven by Kim Crawford and Mi CAMPO.</li>
</ul>

<h2>What The Portfolio Says</h2>
<p>Constellation's US beer portfolio includes Corona Extra, Modelo Especial, Modelo Cheladas, Pacifico and Victoria. Its wine and spirits portfolio includes Kim Crawford, Robert Mondavi Winery, The Prisoner Wine Company, Mi CAMPO Tequila and High West Whiskey.</p>

<h2>Why BevOry Readers Should Care</h2>
<p>Global results like this shape how premium alcohol brands spend on marketing, pack formats and availability. Indian users still need city-level checks: Corona price in Mumbai, Sauvignon Blanc price in Delhi or tequila price in Gurgaon are local retail questions, not global earnings numbers.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://ir.cbrands.com/news-events/press-releases/detail/346/constellation-brands-reports-second-quarter-fiscal-2027-financial-results" target="_blank" rel="noopener noreferrer">Constellation Brands official Q2 FY2027 press release</a></li>
  <li><a href="https://ir.cbrands.com/sec-filings/all-sec-filings/content/0000016918-26-000039/stzex991_83120268kearnings.htm" target="_blank" rel="noopener noreferrer">Constellation Q2 FY2027 earnings tables</a></li>
  <li><a href="https://www.cbrands.com/blogs/stories/earnings-recap-constellation-brands-second-quarter-fiscal-2027-earnings-results" target="_blank" rel="noopener noreferrer">Constellation earnings recap</a></li>
</ul>

<h2>Responsible Drinking Note</h2>
<p>This article covers industry results. Follow local law, buy only from licensed sellers and drink responsibly.</p>
`.trim(),
  },
  {
    id: "guide-imported-beer-price-india-corona-modelo-pacifico-2026",
    title: "Imported Beer Price in India: Corona, Modelo-Style and Pack Size Guide",
    slug: "imported-beer-price-india-corona-modelo-pacifico-2026",
    excerpt:
      "A practical guide to imported and premium beer prices in Indian cities, covering bottle size, can size, country of origin and retail MRP checks.",
    cover_emoji: "beer",
    category: "Guides",
    tags: ["imported beer price", "Corona price India", "beer price Mumbai", "beer price Delhi", "premium beer"],
    meta_title: "Imported Beer Price India Guide | BevOry",
    meta_description:
      "Compare imported beer in India by exact brand, pack size, city and MRP. Check local beer prices on BevOry.",
    published_at: "2026-10-07T10:05:00.000+05:30",
    selection_note:
      "Picked as an educational post because imported beer price searches are high-intent and often mix 330 ml bottles, 500 ml cans and 650 ml bottles.",
    source_links: [
      "https://www.cbrands.com/blogs/stories/earnings-recap-constellation-brands-second-quarter-fiscal-2027-earnings-results",
      "https://ir.cbrands.com/news-events/press-releases/detail/346/constellation-brands-reports-second-quarter-fiscal-2027-financial-results",
      "https://excise.delhi.gov.in/excise/frequently-asked-questions-1",
      "https://exciseservices.mahaonline.gov.in/",
    ],
    content: String.raw`
<p><strong>Imported beer prices in India should be compared by exact brand, pack size, city and retail MRP.</strong> A 330 ml bottle, 500 ml can and 650 ml bottle are three different price questions.</p>

<p>Constellation's latest US results show premium imported beer remains commercially important in mature markets. For Indian shoppers, the useful lesson is narrower: brand strength matters, but the final shelf price is local.</p>

<h2>What To Compare</h2>
<ul>
  <li><strong>Exact product:</strong> Corona Extra, Hoegaarden, Budweiser Magnum, Heineken, Bira, Kingfisher Ultra or any other specific beer.</li>
  <li><strong>Pack size:</strong> 330 ml bottle, 500 ml can, pint bottle, 650 ml bottle or multipack.</li>
  <li><strong>City:</strong> Delhi, Mumbai, Gurgaon, Noida, Bengaluru, Hyderabad and Goa can show different MRPs.</li>
  <li><strong>Origin and route:</strong> imported, brewed under licence or domestic premium.</li>
  <li><strong>Shop status:</strong> dry days and local closure orders can override normal timings.</li>
</ul>

<h2>Serving Guide</h2>
<p>Serve lager-style imported beers chilled at 3-5°C in a clean pilsner glass or straight from the bottle. Add lime only when it fits the beer style and the serve you prefer.</p>

<h2>Food Pairings</h2>
<p>Pair crisp lagers with tandoori chicken, peri-peri fries, coastal rava-fried fish, chilli paneer, nachos and salted peanuts. Wheat beers work well with malai paneer tikka, grilled prawns and herbed cheese.</p>

<h2>How To Search On BevOry</h2>
<p>Use exact city searches such as "Corona beer price in Delhi", "beer price in Mumbai 650 ml" or "premium beer price in Gurgaon". Do not compare restaurant pint prices with retail shop bottle prices.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.cbrands.com/blogs/stories/earnings-recap-constellation-brands-second-quarter-fiscal-2027-earnings-results" target="_blank" rel="noopener noreferrer">Constellation Brands Q2 FY2027 beer portfolio context</a></li>
  <li><a href="https://ir.cbrands.com/news-events/press-releases/detail/346/constellation-brands-reports-second-quarter-fiscal-2027-financial-results" target="_blank" rel="noopener noreferrer">Constellation official earnings release</a></li>
  <li><a href="https://excise.delhi.gov.in/excise/frequently-asked-questions-1" target="_blank" rel="noopener noreferrer">Delhi Excise FAQ</a></li>
  <li><a href="https://exciseservices.mahaonline.gov.in/" target="_blank" rel="noopener noreferrer">Maharashtra State Excise portal</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>Imported beer price checks are only useful when brand, size and city match.</strong> BevOry helps keep those comparisons clean before you buy.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is informational. Follow legal drinking age, dry-day and possession rules in your state.</p>
`.trim(),
  },
  {
    id: "guide-sauvignon-blanc-price-india-kim-crawford-marlborough-2026",
    title: "Sauvignon Blanc Price in India: Marlborough Wine Buying Guide",
    slug: "sauvignon-blanc-price-india-kim-crawford-marlborough-2026",
    excerpt:
      "A consumer guide to Sauvignon Blanc in India, covering Marlborough style, Kim Crawford, serving temperature, food pairings and city-level price checks.",
    cover_emoji: "wine",
    category: "Guides",
    tags: ["Sauvignon Blanc price", "Kim Crawford", "Marlborough wine", "white wine price India", "wine guide"],
    meta_title: "Sauvignon Blanc Price India Guide | BevOry",
    meta_description:
      "Compare Sauvignon Blanc in India by region, bottle size, style and city price. Learn Marlborough food pairings on BevOry.",
    published_at: "2026-10-07T10:10:00.000+05:30",
    selection_note:
      "Picked as an educational post because Sauvignon Blanc searches combine wine discovery, city price intent and food pairing needs for Indian consumers.",
    source_links: [
      "https://www.kimcrawfordwines.com/products/sauvignon-blanc",
      "https://www.kimcrawfordwines.com/pages/about-us",
      "https://www.cbrands.com/blogs/stories/earnings-recap-constellation-brands-second-quarter-fiscal-2027-earnings-results",
    ],
    content: String.raw`
<p><strong>Sauvignon Blanc in India should be compared by region, producer, vintage, bottle size and city price.</strong> Marlborough from New Zealand is one of the most searched styles because it is crisp, aromatic and easy to pair with Indian food.</p>

<p>Constellation's Q2 FY2027 recap names Kim Crawford as one of the drivers of wine and spirits depletion growth. Kim Crawford's official Sauvignon Blanc page places the wine in Marlborough, New Zealand, with citrus, tropical fruit and herbal freshness at the centre of the style.</p>

<h2>What Marlborough Sauvignon Blanc Tastes Like</h2>
<ul>
  <li><strong>Aroma:</strong> lime, grapefruit, passion fruit, guava, cut grass and herbs.</li>
  <li><strong>Palate:</strong> light to medium body with bright acidity and clean fruit.</li>
  <li><strong>Finish:</strong> crisp, zesty and refreshing rather than sweet or heavy.</li>
</ul>

<h2>How To Serve</h2>
<p>Serve Sauvignon Blanc chilled at 8-10°C in a white wine glass. Open it close to serving time and keep the bottle cold in an ice bucket during warm Indian weather.</p>

<h2>Indian Food Pairings</h2>
<p>Pair Marlborough Sauvignon Blanc with tandoori prawns, coastal rava-fried fish, malai paneer tikka, cucumber chaat, goat cheese salad and Thai green curry. The acidity handles spice and fried textures well.</p>

<h2>How To Compare Prices</h2>
<p>Search exact terms such as "Sauvignon Blanc price in Mumbai", "Kim Crawford price in Delhi" or "white wine price in Gurgaon". Compare 750 ml bottles separately from half bottles, restaurant pours and overseas retail prices.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.kimcrawfordwines.com/products/sauvignon-blanc" target="_blank" rel="noopener noreferrer">Kim Crawford official Sauvignon Blanc product page</a></li>
  <li><a href="https://www.kimcrawfordwines.com/pages/about-us" target="_blank" rel="noopener noreferrer">Kim Crawford official about page</a></li>
  <li><a href="https://www.cbrands.com/blogs/stories/earnings-recap-constellation-brands-second-quarter-fiscal-2027-earnings-results" target="_blank" rel="noopener noreferrer">Constellation Brands Q2 FY2027 recap</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>Sauvignon Blanc is a strong white-wine choice for Indian seafood, paneer and chaat pairings.</strong> Compare by producer, region, vintage and city-level price before buying.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is for adults. Buy only from licensed retailers and follow dry-day rules in your city.</p>
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
