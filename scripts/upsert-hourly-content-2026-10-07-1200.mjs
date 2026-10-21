import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const now = new Date().toISOString();

const posts = [
  {
    id: "news-us-canadian-wine-spirits-import-ban-ttb-october-2026",
    title: "US Canadian Wine and Spirits Import Ban Hits Holiday Planning",
    slug: "us-canadian-wine-spirits-import-ban-ttb-october-2026",
    excerpt:
      "TTB's October 2026 newsletter confirms new US restrictions on certain Canadian wine and spirits imports, adding pressure before the holiday season.",
    cover_emoji: "news",
    category: "News",
    tags: ["Canada alcohol ban", "TTB", "wine imports", "spirits imports", "trade", "holiday season"],
    meta_title: "US Canada Alcohol Import Ban News | BevOry",
    meta_description:
      "TTB confirms new US restrictions on Canadian wine and spirits imports. Read what it means for trade and consumer choice.",
    published_at: "2026-10-07T12:00:00.000+05:30",
    selection_note:
      "Picked as the news item because TTB's 2 October 2026 newsletter confirms a live trade restriction affecting Canadian wine and spirits imports into the US.",
    source_links: [
      "https://content.govdelivery.com/accounts/USTTB/bulletins/42d93ed",
      "https://www.ttb.gov/public-information/press-room/news-and-events",
      "https://distilledspirits.org/news/toasts-not-tariffs-coalition-statement-as-u-s-ban-on-canadian-spirits-and-wine-takes-effect/",
      "https://distilledspirits.org/news/toasts-not-tariffs-coalition-sends-letter-to-president-trump-urging-resolution-of-u-s-canada-beverage-alcohol-trade-dispute/",
    ],
    content: String.raw`
<p><strong>The US Alcohol and Tobacco Tax and Trade Bureau has flagged newly effective restrictions on certain Canadian alcoholic beverages imported into the United States.</strong> TTB's 2 October 2026 newsletter says the restrictions took effect on 29 September 2026 and apply to Canadian products listed in the presidential proclamation's annex.</p>

<p>The update matters because trade restrictions do not stay inside customs paperwork. They affect importers, distributors, retailers, restaurant lists and holiday-season inventory planning.</p>

<h2>What TTB Said</h2>
<ul>
  <li><strong>Effective date:</strong> 29 September 2026.</li>
  <li><strong>Scope:</strong> certain alcoholic beverages that are products of Canada, as listed in the proclamation annex.</li>
  <li><strong>TTB processing:</strong> TTB says certificates of label approval and formulas for Canadian products remain unaffected.</li>
  <li><strong>Trade contact:</strong> TTB directs import-ban questions to US Customs and Border Protection.</li>
</ul>

<h2>Why The Trade Dispute Is Bigger Than One Border</h2>
<p>The Toasts Not Tariffs Coalition says Canadian provincial restrictions had already pushed US spirits exports to Canada down 70% and US wine exports down 87%. The coalition warned that the US ban could hit restaurants, bars, retailers and consumer choice during the holiday planning season.</p>

<h2>India Angle</h2>
<p>India is not directly covered by this US-Canada action, but imported alcohol buyers should watch trade news closely. Tariffs, bans and import rules can affect global allocation, bottle availability and pricing signals for Canadian whisky, American whiskey, wine and premium spirits.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://content.govdelivery.com/accounts/USTTB/bulletins/42d93ed" target="_blank" rel="noopener noreferrer">TTB Newsletter for October 2, 2026</a></li>
  <li><a href="https://www.ttb.gov/public-information/press-room/news-and-events" target="_blank" rel="noopener noreferrer">TTB News and Events archive</a></li>
  <li><a href="https://distilledspirits.org/news/toasts-not-tariffs-coalition-statement-as-u-s-ban-on-canadian-spirits-and-wine-takes-effect/" target="_blank" rel="noopener noreferrer">Toasts Not Tariffs Coalition statement as ban takes effect</a></li>
  <li><a href="https://distilledspirits.org/news/toasts-not-tariffs-coalition-sends-letter-to-president-trump-urging-resolution-of-u-s-canada-beverage-alcohol-trade-dispute/" target="_blank" rel="noopener noreferrer">Toasts Not Tariffs Coalition letter summary</a></li>
</ul>

<h2>Responsible Drinking Note</h2>
<p>This article covers trade policy. Follow local law, buy only from licensed sellers and drink responsibly.</p>
`.trim(),
  },
  {
    id: "guide-canadian-whisky-price-india-crown-royal-canadian-club-2026",
    title: "Canadian Whisky Price in India: Style, Brands and City Checks",
    slug: "canadian-whisky-price-india-crown-royal-canadian-club-2026",
    excerpt:
      "A practical guide to Canadian whisky in India, covering rye-forward style, major brands, serving, food pairings and city-level price checks.",
    cover_emoji: "whisky",
    category: "Guides",
    tags: ["Canadian whisky price", "Crown Royal", "Canadian Club", "whisky price India", "rye whisky"],
    meta_title: "Canadian Whisky Price India Guide | BevOry",
    meta_description:
      "Compare Canadian whisky in India by brand, bottle size, style and city price. Check local whisky prices on BevOry.",
    published_at: "2026-10-07T12:05:00.000+05:30",
    selection_note:
      "Picked as an educational post because trade restrictions have put Canadian alcohol in the news, while Indian users need practical brand, style and price guidance.",
    source_links: [
      "https://content.govdelivery.com/accounts/USTTB/bulletins/42d93ed",
      "https://distilledspirits.org/news/toasts-not-tariffs-coalition-statement-as-u-s-ban-on-canadian-spirits-and-wine-takes-effect/",
      "https://www.crownroyal.com/",
      "https://www.canadianclub.com/",
    ],
    content: String.raw`
<p><strong>Canadian whisky in India should be compared by exact brand, bottle size, style and city price.</strong> The category often includes smooth blended whisky profiles, rye grain influence and easy highball serves, but each bottle needs its own check.</p>

<p>Canadian alcohol is currently in global trade headlines because of US import restrictions and the US-Canada beverage alcohol dispute. That does not set Indian MRP, but it makes provenance and supply routes worth watching.</p>

<h2>Common Canadian Whisky Names</h2>
<ul>
  <li><strong>Crown Royal:</strong> a major Canadian whisky brand owned by Diageo.</li>
  <li><strong>Canadian Club:</strong> a long-running Canadian whisky brand associated with blended whisky and cocktail serves.</li>
  <li><strong>Lot 40:</strong> a rye-focused Canadian whisky name for drinkers who want a spicier profile.</li>
</ul>

<h2>Typical Tasting Profile</h2>
<p>Expect vanilla, caramel, light oak, baking spice, toasted grain and, in rye-led bottles, peppery spice. Canadian whisky is often lighter and more mixable than heavily sherried Scotch or smoky Islay single malt.</p>

<h2>How To Serve</h2>
<p>Use a rocks glass for whisky over ice, a highball glass for whisky soda or ginger ale, and a coupe for cocktails such as a Manhattan-style serve. Taste premium bottles neat before mixing.</p>

<h2>Indian Food Pairings</h2>
<p>Pair Canadian whisky highballs with chicken tikka, chilli paneer, masala peanuts, seekh kebabs and smoked cheese. Rye-forward whisky works well with mutton seekh, pepper chicken and dark chocolate.</p>

<h2>How To Check Price</h2>
<p>Search exact terms such as "Canadian whisky price in Delhi", "Crown Royal price in Mumbai" or "Canadian Club price in Gurgaon". Compare only the same bottle size and city; duty-free and overseas prices are separate markets.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://content.govdelivery.com/accounts/USTTB/bulletins/42d93ed" target="_blank" rel="noopener noreferrer">TTB newsletter on Canadian alcohol import restrictions</a></li>
  <li><a href="https://distilledspirits.org/news/toasts-not-tariffs-coalition-statement-as-u-s-ban-on-canadian-spirits-and-wine-takes-effect/" target="_blank" rel="noopener noreferrer">Toasts Not Tariffs Coalition trade statement</a></li>
  <li><a href="https://www.crownroyal.com/" target="_blank" rel="noopener noreferrer">Crown Royal official website</a></li>
  <li><a href="https://www.canadianclub.com/" target="_blank" rel="noopener noreferrer">Canadian Club official website</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>Canadian whisky is best bought by exact bottle, not only by country name.</strong> Compare brand, bottle size, style and city-level price on BevOry before buying.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is for adults. Follow legal drinking age, dry-day and possession rules in your state.</p>
`.trim(),
  },
  {
    id: "guide-imported-alcohol-price-shocks-india-tariffs-bans-mrp-2026",
    title: "Imported Alcohol Prices: How Tariffs, Bans and MRPs Affect India",
    slug: "imported-alcohol-price-shocks-india-tariffs-bans-mrp-2026",
    excerpt:
      "A consumer guide to how tariffs, import bans, excise rules and city MRPs can affect imported whisky, wine, gin, tequila and rum prices in India.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["imported alcohol price", "tariffs", "MRP", "Scotch price India", "wine price India", "excise"],
    meta_title: "Imported Alcohol Price India Guide | BevOry",
    meta_description:
      "Learn how tariffs, bans, excise and MRPs affect imported alcohol prices. Compare exact city prices on BevOry.",
    published_at: "2026-10-07T12:10:00.000+05:30",
    selection_note:
      "Picked as an educational post because imported bottle searches spike whenever trade news appears, and Indian consumers need a simple price-impact framework.",
    source_links: [
      "https://content.govdelivery.com/accounts/USTTB/bulletins/42d93ed",
      "https://distilledspirits.org/news/toasts-not-tariffs-coalition-statement-as-u-s-ban-on-canadian-spirits-and-wine-takes-effect/",
      "https://www.gov.uk/government/publications/uk-india-trade-deal-conclusion-summary/uk-india-trade-deal-conclusion-summary",
      "https://excise.delhi.gov.in/excise/frequently-asked-questions-1",
    ],
    content: String.raw`
<p><strong>Imported alcohol prices move through several layers before a bottle reaches an Indian shelf: trade rules, customs duty, state excise, importer cost, retailer margin and final MRP.</strong> That is why a global headline does not always translate into an immediate local price change.</p>

<p>The current US-Canada alcohol dispute and the India-UK trade deal show both sides of the issue. One market is dealing with import restrictions on Canadian alcohol, while another has tariff reductions for eligible UK whisky and gin.</p>

<h2>The Price Layers</h2>
<ul>
  <li><strong>Country of origin:</strong> Scotland, Japan, Canada, Mexico, France, Italy or Australia can imply different trade routes.</li>
  <li><strong>Customs duty:</strong> national-level charges affect landed cost.</li>
  <li><strong>State excise:</strong> Delhi, Maharashtra, Haryana, Karnataka and Telangana calculate retail alcohol differently.</li>
  <li><strong>Importer and distributor:</strong> local route-to-market costs matter.</li>
  <li><strong>Pack size:</strong> 700 ml, 750 ml and 1 litre bottles must be compared separately.</li>
</ul>

<h2>What Consumers Should Not Do</h2>
<p>Do not assume a US import ban, UK tariff change or overseas launch price is the same as an Indian retail MRP. Do not compare duty-free prices with city retail prices. Do not compare a restaurant pour with a sealed bottle.</p>

<h2>Useful BevOry Searches</h2>
<ul>
  <li>Scotch price in Delhi 750 ml</li>
  <li>imported wine price in Mumbai</li>
  <li>Japanese whisky price in Gurgaon</li>
  <li>tequila price in Bengaluru</li>
  <li>gin price in Hyderabad</li>
</ul>

<h2>Food Pairing Reminder</h2>
<p>Rich Scotch works with galouti kebabs, mutton seekh and dark chocolate. Crisp white wine works with tandoori prawns and malai paneer tikka. Tequila and gin pair well with cucumber chaat, fish tacos and coastal rava-fried fish.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://content.govdelivery.com/accounts/USTTB/bulletins/42d93ed" target="_blank" rel="noopener noreferrer">TTB Newsletter for October 2, 2026</a></li>
  <li><a href="https://distilledspirits.org/news/toasts-not-tariffs-coalition-statement-as-u-s-ban-on-canadian-spirits-and-wine-takes-effect/" target="_blank" rel="noopener noreferrer">Toasts Not Tariffs Coalition trade statement</a></li>
  <li><a href="https://www.gov.uk/government/publications/uk-india-trade-deal-conclusion-summary/uk-india-trade-deal-conclusion-summary" target="_blank" rel="noopener noreferrer">UK government India trade deal summary</a></li>
  <li><a href="https://excise.delhi.gov.in/excise/frequently-asked-questions-1" target="_blank" rel="noopener noreferrer">Delhi Excise FAQ</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>Imported alcohol prices are local by the time you buy the bottle.</strong> Use BevOry to compare exact product, bottle size and city instead of relying on global headlines alone.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is informational. Follow local alcohol laws and buy only from licensed sellers.</p>
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
