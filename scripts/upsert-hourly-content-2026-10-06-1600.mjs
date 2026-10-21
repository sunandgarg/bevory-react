import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const now = new Date().toISOString();

const posts = [
  {
    id: "news-smirnoff-ice-brittany-broski-halloween-creator-campaign-2026",
    title: "Smirnoff Ice Turns Halloween Into A Creator-Led RTD Campaign",
    slug: "smirnoff-ice-brittany-broski-halloween-creator-campaign-2026",
    excerpt:
      "Smirnoff Ice has partnered with creator Brittany Broski for Halloween content, merchandise and a live event, showing how RTD brands are chasing seasonal occasions.",
    cover_emoji: "news",
    category: "News",
    tags: ["Smirnoff Ice", "Brittany Broski", "RTD", "Halloween", "Diageo", "creator marketing"],
    meta_title: "Smirnoff Ice Halloween Campaign | BevOry",
    meta_description:
      "Smirnoff Ice's Brittany Broski campaign shows how RTD brands use Halloween, merch and creators to drive seasonal drinking.",
    published_at: "2026-10-06T16:00:00.000+05:30",
    selection_note:
      "Picked as the news item because the 1 October 2026 Smirnoff Ice campaign is a live seasonal RTD marketing case with relevance for Halloween, party and ready-to-drink searches.",
    source_links: [
      "https://www.prnewswire.com/news-releases/smirnoff-ice-partners-with-brittany-broski-to-bring-the-party-to-halloween-the-holidays-and-beyond-302896301.html",
      "https://www.mediapost.com/publications/article/418446/smirnoff-ice-drops-wearable-bottle-costume-with-in.html",
      "https://shop.smirnoff.com/shop",
    ],
    content: String.raw`
<p><strong>Smirnoff Ice has partnered with comedian and creator Brittany Broski for a Halloween-led campaign built around original content, limited-edition merchandise and a live brand event.</strong> The official announcement went out on 1 October 2026 and positions Halloween as the starting point for more holiday-season activity.</p>

<p>The campaign is a useful signal for the ready-to-drink market. RTD brands are no longer relying only on flavour and pack shots; they are buying into social culture, costumes, parties and creator-led moments.</p>

<h2>What The Campaign Includes</h2>
<ul>
  <li><strong>Brand:</strong> Smirnoff Ice.</li>
  <li><strong>Creator partner:</strong> Brittany Broski, the comedian and podcast host who became widely known online in 2019.</li>
  <li><strong>Seasonal hook:</strong> Halloween content, a bottle costume and a brand-hosted Halloween event.</li>
  <li><strong>Retail element:</strong> Smirnoff's shop page lists a limited-edition Halloween costume.</li>
  <li><strong>Audience note:</strong> the official release frames the activity for fans aged 21 and above in the US.</li>
</ul>

<h2>Why It Matters For India</h2>
<p>India's party-drinks search behaviour is already split across beer, vodka, Breezer-style alcopops, hard seltzers, flavoured RTDs and cocktail mixers. Searches like "Halloween party drinks", "beer price in Mumbai", "vodka price in Gurgaon" and "RTD drinks price in Delhi" need exact product, size and city-level context.</p>

<h2>What BevOry Users Should Take From It</h2>
<p>Seasonal campaigns can make a drink trend on social media, but price and availability remain local. Check the exact product name, bottle or can size, city and legal shop status before planning a party purchase.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.prnewswire.com/news-releases/smirnoff-ice-partners-with-brittany-broski-to-bring-the-party-to-halloween-the-holidays-and-beyond-302896301.html" target="_blank" rel="noopener noreferrer">Smirnoff Ice official PR Newswire announcement</a></li>
  <li><a href="https://www.mediapost.com/publications/article/418446/smirnoff-ice-drops-wearable-bottle-costume-with-in.html" target="_blank" rel="noopener noreferrer">MediaPost campaign coverage</a></li>
  <li><a href="https://shop.smirnoff.com/shop" target="_blank" rel="noopener noreferrer">Smirnoff shop page</a></li>
</ul>

<h2>Responsible Drinking Note</h2>
<p>This article covers a brand campaign. Follow local legal drinking age, buy only from licensed sellers and arrange safe transport before drinking.</p>
`.trim(),
  },
  {
    id: "guide-halloween-party-drinks-india-beer-vodka-rtd-price-2026",
    title: "Halloween Party Drinks in India 2026: Beer, Vodka and RTD Guide",
    slug: "halloween-party-drinks-india-beer-vodka-rtd-price-2026",
    excerpt:
      "A practical Indian Halloween party drinks guide covering beer, vodka, RTDs, mixers, food pairings, dry-day checks and city-level prices.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["Halloween party drinks", "beer price India", "vodka price India", "RTD drinks", "party drinks", "city price"],
    meta_title: "Halloween Party Drinks India Guide | BevOry",
    meta_description:
      "Plan Halloween party drinks by beer, vodka, RTDs, mixers, food pairings, dry-day checks and city-level prices on BevOry.",
    published_at: "2026-10-06T16:05:00.000+05:30",
    selection_note:
      "Picked as an educational post because Halloween and house-party queries create strong seasonal demand for beer, vodka, RTD and city-price content in Indian metros.",
    source_links: [
      "https://www.prnewswire.com/news-releases/smirnoff-ice-partners-with-brittany-broski-to-bring-the-party-to-halloween-the-holidays-and-beyond-302896301.html",
      "https://excise.delhi.gov.in/excise/frequently-asked-questions-1",
      "https://exciseservices.mahaonline.gov.in/",
      "https://haryanatax.gov.in/LoadPartial/Excise%20Policy",
    ],
    content: String.raw`
<p><strong>Halloween party drinks in India should be planned by drink style, bottle or can size, city price and local shop status.</strong> Beer, vodka, RTDs and simple highballs usually work better for large house parties than complex cocktails that need bar tools.</p>

<p>Smirnoff Ice's 2026 Halloween campaign shows how big brands are turning the season into a drinks occasion. For Indian consumers, the practical question is still local: what is legally available in Delhi, Mumbai, Gurgaon, Bengaluru, Hyderabad or Pune on the day of the party?</p>

<h2>Easy Party Categories</h2>
<ul>
  <li><strong>Beer:</strong> lager, wheat beer or strong beer in cans for easy chilling and serving.</li>
  <li><strong>Vodka:</strong> neutral or flavoured vodka for soda highballs, lemonade serves and simple fruit cocktails.</li>
  <li><strong>RTDs:</strong> ready-to-drink cans or bottles for guests who do not want to mix drinks.</li>
  <li><strong>Gin:</strong> gin and tonic with lime, cucumber or orange peel.</li>
  <li><strong>Non-alcohol options:</strong> soda, tonic, cola, juice, water and zero-alcohol choices.</li>
</ul>

<h2>Food Pairings</h2>
<p>Pair beer with peri-peri fries, chicken wings, chilli paneer and nachos. Vodka highballs work with tandoori prawns, cucumber chaat, malai paneer tikka and hummus. Gin and tonic pairs well with coastal rava-fried fish, bruschetta and herbed fries.</p>

<h2>City Checks Before Buying</h2>
<p>Check dry-day status and shop timings before travelling. Delhi, Maharashtra and Haryana publish excise information through separate official portals, and NCR shoppers should not assume one state's rule applies to another.</p>

<h2>How To Compare Prices</h2>
<ul>
  <li>Use exact product names, not only "beer" or "vodka".</li>
  <li>Compare the same pack size: pint, 330 ml can, 500 ml can, 650 ml bottle, 750 ml bottle or 1 litre bottle.</li>
  <li>Search by city: "vodka price in Gurgaon" is a different query from "vodka price in Delhi".</li>
  <li>Separate retail bottle price from bar or delivery app pricing.</li>
</ul>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.prnewswire.com/news-releases/smirnoff-ice-partners-with-brittany-broski-to-bring-the-party-to-halloween-the-holidays-and-beyond-302896301.html" target="_blank" rel="noopener noreferrer">Smirnoff Ice Halloween campaign announcement</a></li>
  <li><a href="https://excise.delhi.gov.in/excise/frequently-asked-questions-1" target="_blank" rel="noopener noreferrer">Delhi Excise FAQ</a></li>
  <li><a href="https://exciseservices.mahaonline.gov.in/" target="_blank" rel="noopener noreferrer">Maharashtra State Excise portal</a></li>
  <li><a href="https://haryanatax.gov.in/LoadPartial/Excise%20Policy" target="_blank" rel="noopener noreferrer">Haryana Tax Excise Policy page</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>For a Halloween party, keep drinks simple and local.</strong> Compare beer, vodka and RTD prices by exact city and pack size on BevOry, then confirm the shop is open.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is for adults. Follow legal drinking age, dry-day, possession and transport rules in your state, and arrange safe rides home.</p>
`.trim(),
  },
  {
    id: "guide-rtd-drinks-india-breezer-smirnoff-ice-hard-seltzer-2026",
    title: "RTD Drinks in India 2026: Breezer, Smirnoff Ice and Hard Seltzer Guide",
    slug: "rtd-drinks-india-breezer-smirnoff-ice-hard-seltzer-2026",
    excerpt:
      "A consumer guide to RTD drinks, alcopops, hard seltzers and flavoured alcoholic beverages, with city-price and serving checks for India.",
    cover_emoji: "can",
    category: "Guides",
    tags: ["RTD drinks India", "Breezer price", "Smirnoff Ice", "hard seltzer", "alcopop", "city price"],
    meta_title: "RTD Drinks India 2026 Guide | BevOry",
    meta_description:
      "Compare RTD drinks in India by style, ABV, pack size, flavour and city price. Check local prices on BevOry.",
    published_at: "2026-10-06T16:10:00.000+05:30",
    selection_note:
      "Picked as an educational post because RTD, alcopop and flavoured alcoholic beverage searches often need basic category clarity plus city-level price checks.",
    source_links: [
      "https://www.prnewswire.com/news-releases/smirnoff-ice-partners-with-brittany-broski-to-bring-the-party-to-halloween-the-holidays-and-beyond-302896301.html",
      "https://www.beveragedaily.com/Article/2026/10/02/new-drinks-launches-vodka-wellness-and-premium-wine/",
      "https://www.wswa.org/news/wswa-annual-membership-forum-equips-wine-and-spirits-wholesaler-leaders-navigate-market-policy",
    ],
    content: String.raw`
<p><strong>RTD drinks are ready-to-drink alcoholic beverages sold in cans or bottles, often built around beer, malt, spirits, wine or flavoured bases depending on the market.</strong> In India, shoppers usually search by familiar names, flavour, pack size and city price rather than technical category language.</p>

<p>Global RTD marketing is becoming more seasonal and social. Smirnoff Ice's Brittany Broski Halloween campaign is one example, while BeverageDaily's recent launch coverage shows flavour innovation across spirits, wine and rum.</p>

<h2>Common RTD-Style Searches In India</h2>
<ul>
  <li>Breezer price in Mumbai</li>
  <li>Smirnoff Ice price in Delhi</li>
  <li>hard seltzer price in Gurgaon</li>
  <li>flavoured beer can price in Bengaluru</li>
  <li>vodka RTD drinks price in Hyderabad</li>
</ul>

<h2>What To Check On The Label</h2>
<ul>
  <li><strong>ABV:</strong> a lighter RTD and a full-strength spirit are not comparable.</li>
  <li><strong>Base:</strong> malt, wine, spirit, beer or mixed alcoholic beverage.</li>
  <li><strong>Pack size:</strong> 250 ml, 275 ml, 330 ml and 500 ml packs should be compared separately.</li>
  <li><strong>Flavour:</strong> citrus, berry, tropical fruit, cola and ginger styles can taste very different.</li>
  <li><strong>City MRP:</strong> Delhi, Mumbai, Gurgaon and Bengaluru can have different prices.</li>
</ul>

<h2>How To Serve</h2>
<p>Serve RTDs chilled, straight from the bottle or can, or over ice in a highball glass. Add lime, orange peel, mint or cucumber only when the flavour profile fits the drink.</p>

<h2>Food Pairings</h2>
<p>Citrus RTDs pair with tandoori prawns, fish fingers, cucumber chaat and nachos. Berry or tropical RTDs work with chilli paneer, peri-peri fries, chicken wings and salted popcorn.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.prnewswire.com/news-releases/smirnoff-ice-partners-with-brittany-broski-to-bring-the-party-to-halloween-the-holidays-and-beyond-302896301.html" target="_blank" rel="noopener noreferrer">Smirnoff Ice Halloween campaign announcement</a></li>
  <li><a href="https://www.beveragedaily.com/Article/2026/10/02/new-drinks-launches-vodka-wellness-and-premium-wine/" target="_blank" rel="noopener noreferrer">BeverageDaily: new drinks launch round-up</a></li>
  <li><a href="https://www.wswa.org/news/wswa-annual-membership-forum-equips-wine-and-spirits-wholesaler-leaders-navigate-market-policy" target="_blank" rel="noopener noreferrer">WSWA: smaller formats and market context</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>Buy RTDs by exact drink, flavour, pack size and city.</strong> BevOry helps avoid mixing a 275 ml alcopop, a 330 ml can and a full bottle price into one misleading comparison.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is informational. Follow local law, check legal drinking age and do not drink and drive.</p>
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
