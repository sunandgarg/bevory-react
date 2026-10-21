import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const now = new Date().toISOString();

const posts = [
  {
    id: "news-grey-goose-berry-rouge-premium-flavoured-vodka-2026",
    title: "Grey Goose Berry Rouge Shows Why Premium Vodka Is Chasing Natural Flavour",
    slug: "grey-goose-berry-rouge-premium-flavoured-vodka-2026",
    excerpt:
      "Grey Goose Berry Rouge has expanded in the UK, underlining how premium vodka brands are using natural fruit sourcing, retail exclusives and lighter serves.",
    cover_emoji: "news",
    category: "News",
    tags: ["Grey Goose", "flavoured vodka", "Bacardi", "premium spirits", "vodka", "Berry Rouge"],
    meta_title: "Grey Goose Berry Rouge Vodka News | BevOry",
    meta_description:
      "Grey Goose Berry Rouge shows the premium vodka push into berry flavours, provenance and cocktail-led drinking. Read BevOry's industry note.",
    published_at: "2026-10-06T11:00:00.000+05:30",
    selection_note:
      "Picked as the news item because Grey Goose's UK Berry Rouge rollout is a current premium-spirits launch with wider relevance to flavoured vodka and natural-ingredient positioning.",
    source_links: [
      "https://www.beveragedaily.com/Article/2026/10/02/new-drinks-launches-vodka-wellness-and-premium-wine/",
      "https://www.greygoose.com/products/berry-rouge.html",
      "https://www.greygoose.com/faqs/does-grey-goose-make-flavored-vodka.html",
      "https://greygoose.bacardilimited.com/",
    ],
    content: String.raw`
<p><strong>Grey Goose Berry Rouge is a useful marker for where premium vodka is moving: natural fruit flavour, clear origin cues and cocktail-friendly positioning.</strong> BeverageDaily reported that the expression is expanding in the UK from 5 October 2026 through Tesco, Amazon, Selfridges and selected premium on-trade venues.</p>

<p>The launch sits in a broader global pattern. Premium spirits brands are not only selling neutral base liquid; they are selling ingredient sourcing, serve rituals and a reason to choose one flavour over another.</p>

<h2>What Has Launched</h2>
<ul>
  <li><strong>Product:</strong> Grey Goose Berry Rouge flavoured vodka.</li>
  <li><strong>Flavour base:</strong> strawberries, raspberries, blueberries and blackberries sourced from Mediterranean regions.</li>
  <li><strong>Brand owner:</strong> Grey Goose is part of the Bacardi portfolio.</li>
  <li><strong>UK channel:</strong> BeverageDaily reports Tesco as the exclusive UK grocery retail partner, with Amazon and Selfridges also listed.</li>
  <li><strong>Positioning:</strong> spritzes, martinis and simple mixed drinks rather than only neat sipping.</li>
</ul>

<h2>Why It Matters For India</h2>
<p>India's premium vodka shelf is still smaller than whisky, but cocktail-led drinking in metros is changing how consumers search. Queries such as "best flavoured vodka", "berry vodka cocktail", "vodka price in Mumbai" and "Grey Goose price in Gurgaon" usually need exact bottle, size and city rather than a broad brand answer.</p>

<h2>What The Official Product Page Says</h2>
<p>Grey Goose's product page describes Berry Rouge as using Mediterranean strawberries, raspberries, blueberries and blackberries with Grey Goose vodka. It lists 40% ABV for the Berry Rouge flavoured vodka and available sizes of 50 ml, 750 ml and 1 litre on the global product page.</p>

<h2>Consumer Takeaway</h2>
<p>Flavoured vodka should be judged by base spirit, flavour source, sweetness, serve style and city-level price. Do not assume every berry vodka is sweetened in the same way, and do not use a UK retail launch price as an Indian MRP.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.beveragedaily.com/Article/2026/10/02/new-drinks-launches-vodka-wellness-and-premium-wine/" target="_blank" rel="noopener noreferrer">BeverageDaily: new beverage launches including Grey Goose Berry Rouge</a></li>
  <li><a href="https://www.greygoose.com/products/berry-rouge.html" target="_blank" rel="noopener noreferrer">Grey Goose official Berry Rouge product page</a></li>
  <li><a href="https://www.greygoose.com/faqs/does-grey-goose-make-flavored-vodka.html" target="_blank" rel="noopener noreferrer">Grey Goose official flavoured vodka FAQ</a></li>
  <li><a href="https://greygoose.bacardilimited.com/" target="_blank" rel="noopener noreferrer">Grey Goose News Centre</a></li>
</ul>

<h2>Responsible Drinking Note</h2>
<p>This article covers a product and market trend. Follow local law, buy only from licensed sellers and never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-flavoured-vodka-india-price-serve-food-pairing-2026",
    title: "Flavoured Vodka in India 2026: Price, Taste and Serving Guide",
    slug: "flavoured-vodka-india-price-taste-serving-guide-2026",
    excerpt:
      "A practical guide to flavoured vodka in India, covering berry, citrus and pear styles, cocktail serves, food pairings and city-level price checks.",
    cover_emoji: "glass",
    category: "Guides",
    tags: ["flavoured vodka", "vodka price India", "Grey Goose", "cocktails", "Mumbai", "Delhi"],
    meta_title: "Flavoured Vodka India 2026 Guide | BevOry",
    meta_description:
      "Learn how to compare flavoured vodka in India by flavour, ABV, mixer, bottle size and city price before buying.",
    published_at: "2026-10-06T11:05:00.000+05:30",
    selection_note:
      "Picked as an educational post because flavoured vodka queries combine product discovery, cocktail intent and city-level price comparison in Indian metros.",
    source_links: [
      "https://www.greygoose.com/products/berry-rouge.html",
      "https://www.greygoose.com/faqs/does-grey-goose-make-flavored-vodka.html",
      "https://www.beveragedaily.com/Article/2026/10/02/new-drinks-launches-vodka-wellness-and-premium-wine/",
    ],
    content: String.raw`
<p><strong>Flavoured vodka in India should be compared by flavour source, ABV, bottle size, serve style and city price.</strong> Berry, citrus, pear and botanical vodkas can taste very different even when they sit beside each other in the same premium vodka section.</p>

<p>The category is growing because vodka works well in simple mixed drinks. A chilled highball, spritz, sour or martini variation can make a flavoured vodka easier to use at home than a bottle that needs specialist bar technique.</p>

<h2>Common Flavoured Vodka Styles</h2>
<ul>
  <li><strong>Berry vodka:</strong> usually built around strawberry, raspberry, blueberry, blackberry or mixed red-fruit notes.</li>
  <li><strong>Citrus vodka:</strong> lemon, orange, grapefruit or lime-led profiles suited to soda, tonic and sour-style cocktails.</li>
  <li><strong>Pear vodka:</strong> softer orchard-fruit style, often useful in martinis and sparkling serves.</li>
  <li><strong>Botanical vodka:</strong> lighter, aromatic expressions that can overlap with gin-style drinking occasions.</li>
</ul>

<h2>What To Check Before Buying</h2>
<p>Check whether the product is full-strength vodka or a lighter vodka-based spirit drink. Grey Goose's official Berry Rouge page lists 40% ABV, while its FAQ says the brand's flavoured vodkas include Berry Rouge, La Poire, L'Orange and Le Citron. Other brands may use different ABV, sweetness and flavour systems.</p>

<h2>Best Serves</h2>
<ul>
  <li><strong>Berry vodka soda:</strong> flavoured vodka, chilled soda and a lime wedge in a highball glass.</li>
  <li><strong>Berry spritz:</strong> berry vodka, sparkling wine or soda, lots of ice and fresh berries.</li>
  <li><strong>Citrus martini:</strong> citrus vodka, dry vermouth and a lemon twist.</li>
  <li><strong>Pear highball:</strong> pear vodka, tonic or soda, and a thin pear slice.</li>
</ul>

<h2>Food Pairings</h2>
<p>Pair berry vodka highballs with tandoori prawns, chilli paneer, cucumber chaat or peri-peri chicken skewers. Citrus vodka works with coastal rava-fried fish, malai paneer tikka and goat cheese crostini. Keep the food bright rather than heavy; very rich gravies can bury the fruit profile.</p>

<h2>How To Compare Prices In India</h2>
<p>Search by exact product and city: for example, "Grey Goose price in Mumbai", "vodka price in Delhi 750 ml" or "flavoured vodka price in Gurgaon". A 50 ml, 750 ml and 1 litre bottle should never be compared as if they are the same listing.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.greygoose.com/products/berry-rouge.html" target="_blank" rel="noopener noreferrer">Grey Goose official Berry Rouge product page</a></li>
  <li><a href="https://www.greygoose.com/faqs/does-grey-goose-make-flavored-vodka.html" target="_blank" rel="noopener noreferrer">Grey Goose official flavoured vodka FAQ</a></li>
  <li><a href="https://www.beveragedaily.com/Article/2026/10/02/new-drinks-launches-vodka-wellness-and-premium-wine/" target="_blank" rel="noopener noreferrer">BeverageDaily: premium vodka launch context</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>Flavoured vodka is best bought by exact bottle, not only by brand name.</strong> Match flavour, ABV, bottle size and city-level price before choosing a bottle for cocktails.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is informational. Follow legal drinking age, dry-day and possession rules in your state, and buy only from licensed sellers.</p>
`.trim(),
  },
  {
    id: "guide-gurgaon-liquor-shop-timings-dry-days-2026",
    title: "Gurgaon Liquor Shop Timings 2026: Dry Days, Thekas and Price Checks",
    slug: "gurgaon-liquor-shop-timings-dry-days-2026",
    excerpt:
      "A Gurgaon guide to liquor shop timing checks, Haryana dry days, theka visits, wine-shop planning and city-level price comparison.",
    cover_emoji: "clock",
    category: "Guides",
    tags: ["Gurgaon liquor shop timings", "Gurgaon dry days", "Haryana excise", "theka Gurgaon", "wine shop Gurgaon"],
    meta_title: "Gurgaon Liquor Shop Timings 2026 | BevOry",
    meta_description:
      "Check Gurgaon liquor shop timing basics, Haryana dry days and city-level bottle price tips before visiting a theka or wine shop.",
    published_at: "2026-10-06T11:10:00.000+05:30",
    selection_note:
      "Picked as an educational post because Gurgaon/NCR liquor-shop timing and dry-day searches are recurring high-intent queries for BevOry users.",
    source_links: [
      "https://haryanatax.gov.in/HEX/DownloadPDF?formName=%2FExcisePolicy2025_27%2FExcise_Policy_2025_27.pdf",
      "https://haryanatax.gov.in/LoadPartial/Excise%20Policy",
      "https://excise.delhi.gov.in/excise/frequently-asked-questions-1",
    ],
    content: String.raw`
<p><strong>Gurgaon liquor shop timings should be checked against Haryana excise rules and the exact shop before travelling.</strong> The practical BevOry rule is simple: compare prices by city and bottle size, then verify the shop is legally open on that date.</p>

<p>Gurgaon sits beside Delhi and Noida, but it does not follow the same excise system. Haryana, Delhi and Uttar Pradesh use different licence conditions, dry-day orders and price structures.</p>

<h2>Dry Days To Remember In Haryana</h2>
<p>The Haryana Excise Policy 2025-27 lists dry-day treatment for Republic Day, Independence Day and Mahatma Gandhi's Birthday, with Gandhi Jayanti observed as a full-day dry day for liquor shops. Election-related dry days can also be notified separately.</p>

<h2>Why Gurgaon Prices Differ From Delhi</h2>
<ul>
  <li><strong>Different state policy:</strong> Haryana does not use Delhi's excise framework.</li>
  <li><strong>Different licence markets:</strong> theka retail, bar service and hotel service can follow different conditions.</li>
  <li><strong>Different bottle economics:</strong> duties, margins and local rules affect the final shelf price.</li>
  <li><strong>Different dry-day orders:</strong> NCR shoppers should not assume one city's status applies to another.</li>
</ul>

<h2>Before Visiting A Theka</h2>
<p>Check the current date, dry-day status, exact location, shop contact number and bottle size. Google Maps can lag behind excise orders, especially on national holidays or election-related closure days.</p>

<h2>How To Compare Bottle Prices</h2>
<p>Use exact product names and pack sizes. A 180 ml whisky listing in Gurgaon should not be compared with a 750 ml Delhi listing, and a bar peg price is not the same as a retail shop bottle price.</p>

<h2>Popular Search Examples</h2>
<ul>
  <li>whisky price in Gurgaon 750 ml</li>
  <li>beer price in Gurgaon can</li>
  <li>vodka price in Gurgaon</li>
  <li>is liquor shop open today in Gurgaon</li>
  <li>Gurgaon dry day today</li>
</ul>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://haryanatax.gov.in/HEX/DownloadPDF?formName=%2FExcisePolicy2025_27%2FExcise_Policy_2025_27.pdf" target="_blank" rel="noopener noreferrer">Haryana Excise Policy 2025-27 PDF</a></li>
  <li><a href="https://haryanatax.gov.in/LoadPartial/Excise%20Policy" target="_blank" rel="noopener noreferrer">Haryana Tax Excise Policy page</a></li>
  <li><a href="https://excise.delhi.gov.in/excise/frequently-asked-questions-1" target="_blank" rel="noopener noreferrer">Delhi Excise FAQ for NCR comparison context</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>For Gurgaon, compare by exact bottle and city, then check dry-day status before visiting a shop.</strong> NCR borders make price comparison useful, but legal purchase and possession must follow the state where you buy.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is informational. Follow Haryana legal drinking age, possession, transport and dry-day rules, and buy only from licensed sellers.</p>
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
