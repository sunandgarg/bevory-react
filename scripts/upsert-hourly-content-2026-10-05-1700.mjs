import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const now = new Date().toISOString();

const posts = [
  {
    id: "news-us-wine-spirits-selective-consumer-sipsource-august-2026",
    title: "US Wine and Spirits Demand Is Falling, But Premium Pockets Are Holding Up",
    slug: "us-wine-spirits-selective-consumer-sipsource-august-2026",
    excerpt:
      "WSWA's August SipSource data shows wine and spirits pressure in the US, while on-premise occasions and higher wine price bands remain more resilient.",
    cover_emoji: "news",
    category: "News",
    tags: ["US alcohol market", "wine", "spirits", "SipSource", "premiumisation", "on-premise"],
    meta_title: "US Wine & Spirits Demand Update 2026 | BevOry",
    meta_description:
      "WSWA August 2026 data shows selective alcohol spending: weaker wine and spirits volume, stronger on-premise and premium pockets.",
    published_at: "2026-10-05T17:00:00.000+05:30",
    selection_note:
      "Picked as the news item because WSWA's latest SipSource update is a current trade signal for global wine and spirits demand, useful for BevOry's industry coverage.",
    content: String.raw`
<p><strong>US wine and spirits demand remains under pressure, but the latest WSWA SipSource update shows that consumers are becoming more selective rather than simply leaving the category.</strong> The August data points to weaker overall volume alongside more resilient drinking occasions, price bands and premium wine categories.</p>

<p>Wine & Spirits Wholesalers of America reported that combined wine and spirits volume was down 6.7%, while the on-premise channel performed better than off-premise. That matters globally because US distributor depletion data often shapes supplier planning for Scotch, American whiskey, tequila, Champagne, premium wine and RTD launches.</p>

<h2>What The Data Says</h2>
<ul>
  <li><strong>Volume is still negative:</strong> WSWA says wine and spirits volume fell 6.7% in the tracked period.</li>
  <li><strong>On-premise is less weak:</strong> bars, restaurants and hospitality occasions performed better than retail take-home channels.</li>
  <li><strong>Premium pockets are alive:</strong> spirits in the $20-$29.99 band and wine priced at $16 and above held up better than weaker value segments.</li>
  <li><strong>Some wine styles still have momentum:</strong> Prosecco, Sauvignon Blanc and Champagne showed recent revenue growth in the update.</li>
</ul>

<h2>Why India Should Watch This</h2>
<p>India's premium alcobev market is still shaped by global supplier confidence. If US consumers become more careful, global brand owners may push harder in growth markets where premium whisky, tequila, gin and imported wine still have headroom. Delhi's current UK-India CETA price-watch moment sits inside that bigger global trend.</p>

<h2>What It Means For Brands</h2>
<p>Broad premiumisation is no longer enough. The stronger story is selective premiumisation: consumers will still spend, but the bottle must fit a clear occasion, price point or flavour preference. For BevOry users, that makes city-level comparison, exact bottle details and honest tasting notes more useful than generic premium labels.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.wswa.org/news/sipsource-august-data-more-selective-consumer-reshaping-beverage-alcohol-market" target="_blank" rel="noopener noreferrer">WSWA SipSource August 2026 data update</a></li>
  <li><a href="https://www.wswa.org/news" target="_blank" rel="noopener noreferrer">WSWA news and press releases</a></li>
</ul>

<h2>Responsible Drinking Note</h2>
<p>This article covers market data, not drinking advice. Drink within local law, buy only from licensed sellers and never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-delhi-liquor-shop-timings-2026",
    title: "Delhi Liquor Shop Timings 2026: Wine Shops, Dry Days and Legal Age",
    slug: "delhi-liquor-shop-timings-2026-wine-shops-dry-days",
    excerpt:
      "A practical Delhi guide to wine-shop timings, dry days, retail vends, legal age and why Google Maps hours can be wrong during excise orders.",
    cover_emoji: "clock",
    category: "Guides",
    tags: ["Delhi liquor shop timings", "wine shops Delhi", "dry days", "legal drinking age", "Delhi excise"],
    meta_title: "Delhi Liquor Shop Timings 2026 | BevOry",
    meta_description:
      "Check Delhi liquor shop timings, dry days, legal age and retail-vend rules before visiting a wine shop or theka in 2026.",
    published_at: "2026-10-05T17:05:00.000+05:30",
    selection_note:
      "Picked as an educational post because Delhi liquor-shop timing and dry-day searches are high-intent, recurring and useful for local discovery.",
    content: String.raw`
<p><strong>Delhi liquor shops are generally planned around notified excise timings, but the practical shopper rule is to verify the current day before travelling.</strong> Delhi's excise FAQ states that L-6 vends operate from 10 a.m. to 10 p.m., and also makes clear that retail vends remain closed when dry-day restrictions apply.</p>

<p>Delhi's liquor retail system is licence-driven. Shop timing, dry-day closure, bar service, home possession and age rules are all controlled by Delhi excise law and notifications, not by Google Maps alone.</p>

<h2>Normal Wine-Shop Timing In Delhi</h2>
<p>The Delhi Excise Department FAQ states that the timing for L-6 vends is 10 a.m. to 10 p.m. A shop may still close earlier because of a local law-and-order direction, licence issue, inventory problem or dry-day order.</p>

<h2>Dry Days In Delhi</h2>
<p>On dry days, Delhi suspends sale and supply of liquor and retail vends remain closed. Delhi guidance lists Republic Day, Independence Day and Gandhi Jayanti among key dry days, while other important or religious days can be notified in the excise year.</p>

<h2>Legal Drinking Age</h2>
<p>Delhi excise material refers to liquor service for adults above 25 years of age in licence contexts. Users should carry valid physical identification and follow the current rule applied by the licensed shop, bar or venue.</p>

<h2>Why Google Maps Can Mislead</h2>
<ul>
  <li><strong>Dry days override normal hours.</strong> A listing may show open while sale is legally suspended.</li>
  <li><strong>Police or excise orders can shorten hours.</strong> Delhi has previously used temporary early-closure directions for public-order reasons.</li>
  <li><strong>Licence categories differ.</strong> A retail vend, departmental beer-and-wine licence, hotel bar and club licence do not operate under identical conditions.</li>
</ul>

<h2>Before You Visit A Delhi Wine Shop</h2>
<p>Check the date, dry-day status, exact shop location and current excise order. If you are comparing prices, compare the same product name, bottle size and city because Delhi pricing can differ from Gurugram, Noida and Mumbai.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://excise.delhi.gov.in/excise/frequently-asked-questions-1" target="_blank" rel="noopener noreferrer">Delhi Excise Department FAQ</a></li>
  <li><a href="https://excise.delhi.gov.in/excise/function-excise" target="_blank" rel="noopener noreferrer">Delhi Excise Department functions and retail licence context</a></li>
  <li><a href="https://excise.delhi.gov.in/excise/licences" target="_blank" rel="noopener noreferrer">Delhi Excise licence information</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>For Delhi in 2026, treat 10 a.m. to 10 p.m. as the basic L-6 vend timing reference, but always check dry days and local orders before travelling.</strong> Use BevOry for normal-day city-level product discovery and price comparison.</p>

<h2>Responsible Drinking Note</h2>
<p>Follow Delhi's legal age, possession, dry-day and transport rules. Buy only from licensed sellers and never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-liquor-mrp-meaning-india-city-price-guide-2026",
    title: "What Does MRP Mean on Liquor in India? City Price Guide 2026",
    slug: "what-does-mrp-mean-on-liquor-india-city-price-guide-2026",
    excerpt:
      "Understand liquor MRP in India, why bottle prices differ by state and how to compare whisky, beer, wine and gin prices across cities.",
    cover_emoji: "receipt",
    category: "Guides",
    tags: ["liquor MRP", "India liquor price", "whisky price", "beer price", "wine shop", "city price"],
    meta_title: "Liquor MRP Meaning in India: 2026 Guide | BevOry",
    meta_description:
      "Learn what liquor MRP means in India, why prices differ by city and how to compare whisky, beer, wine and gin prices safely.",
    published_at: "2026-10-05T17:10:00.000+05:30",
    selection_note:
      "Picked as an educational post because MRP and city-price intent supports BevOry's core product comparison pages across Indian metros.",
    content: String.raw`
<p><strong>MRP on liquor in India means the maximum retail price approved for that bottle in that state or market.</strong> It is not a national price. The same whisky, beer, gin or wine can have different MRPs in Delhi, Mumbai, Gurugram, Noida, Goa and Bengaluru because alcohol pricing is controlled state by state.</p>

<p>Liquor MRP usually includes duties, taxes and allowed margins. Maharashtra's excise material describes MRP as the maximum price printed on the pack and inclusive of applicable taxes and duties. Delhi rules also require retail licensees to display price information for bottle sizes and brands.</p>

<h2>Why Liquor Prices Differ By City</h2>
<ul>
  <li><strong>State excise duty:</strong> each state sets its own duty and licence structure.</li>
  <li><strong>Customs duty:</strong> imported products carry import-duty effects before state pricing is applied.</li>
  <li><strong>VAT and taxes:</strong> state-level tax treatment changes the final shelf price.</li>
  <li><strong>Approved margins:</strong> wholesale and retail margins are built into the local price framework.</li>
  <li><strong>Bottle size:</strong> 180 ml, 375 ml, 750 ml and 1 litre packs should never be compared casually.</li>
</ul>

<h2>MRP Is Not The Same As Bar Price</h2>
<p>A retail shop MRP is not the price of a peg at a bar, club, hotel or restaurant. On-premise venues price service, glassware, location, staff, rent and taxes differently. Use MRP for packaged-bottle comparison, not for menu pricing.</p>

<h2>How To Compare A Bottle Correctly</h2>
<p>Use the exact product name, brand, expression, pack size and city. For example, a 750 ml imported Scotch bottle in Delhi should be compared with the same 750 ml expression in Mumbai or Gurugram, not with a different age statement or a travel-retail pack.</p>

<h2>Does A Tariff Cut Change MRP?</h2>
<p>It can, but only after the pricing process catches up. The UK-India CETA tariff cut may affect qualifying Scotch whisky and UK gin at the import-duty level, but the final MRP still needs city and state approval before shoppers see a changed shelf price.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://stateexcise.maharashtra.gov.in/Pdf/MRP%20%26%20Excise%20Duties.pdf" target="_blank" rel="noopener noreferrer">Maharashtra MRP and excise duties reference</a></li>
  <li><a href="https://stateexcise.maharashtra.gov.in/1246/Excise-Duty-and-Fee-Structure" target="_blank" rel="noopener noreferrer">Maharashtra State Excise duty and fee structure</a></li>
  <li><a href="https://indiacode.ecourtsindia.com/rules/the-delhi-excise-rules-2010-8381fdf0/" target="_blank" rel="noopener noreferrer">Delhi Excise Rules 2010 reference</a></li>
  <li><a href="https://questions-statements.parliament.uk/written-questions/detail/2026-08-28/24243" target="_blank" rel="noopener noreferrer">UK Parliament answer on UK-India Scotch whisky tariff reduction</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>Liquor MRP in India is local, bottle-specific and state-controlled.</strong> For the cleanest comparison, check the same product and pack size city by city, then verify the current label or approved shop price before buying.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is informational. Follow local legal drinking age, dry-day, possession and transport rules, and buy only from licensed sellers.</p>
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

console.log(JSON.stringify({ saved: savedPosts.length, posts: savedPosts }, null, 2));

await prisma.$disconnect();
