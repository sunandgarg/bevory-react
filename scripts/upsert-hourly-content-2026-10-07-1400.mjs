import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const now = new Date().toISOString();

const posts = [
  {
    id: "news-wswa-access-live-2027-registration-dallas",
    title: "WSWA Opens Access LIVE 2027 Registration As Alcohol Trade Resets",
    slug: "wswa-access-live-2027-registration-dallas",
    excerpt:
      "WSWA's Access LIVE 2027 will return to Dallas in February, bringing wholesalers, suppliers, retailers and importers together around data and discovery.",
    cover_emoji: "news",
    category: "News",
    tags: ["WSWA", "Access LIVE", "wine and spirits", "distribution", "wholesale", "beverage alcohol"],
    meta_title: "WSWA Access LIVE 2027 News | BevOry",
    meta_description:
      "WSWA opens Access LIVE 2027 registration as wine and spirits trade focuses on data, discovery and distribution.",
    published_at: "2026-10-07T14:00:00.000+05:30",
    selection_note:
      "Picked as the news item because Access LIVE early-bird registration closes on 9 October 2026, making WSWA's trade event update time-sensitive.",
    source_links: [
      "https://www.wswa.org/news/registration-opens-wswas-access-live-2027-beverage-alcohol-industrys-premier-business-event",
      "https://www.wswa.org/news/wswa-annual-membership-forum-equips-wine-and-spirits-wholesaler-leaders-navigate-market-policy",
      "https://www.wswa.org/news",
    ],
    content: String.raw`
<p><strong>Wine &amp; Spirits Wholesalers of America has opened registration for Access LIVE 2027, its three-day beverage alcohol trade event in Dallas.</strong> WSWA says the event will run from 1-4 February 2027 at the Gaylord Texan Resort &amp; Convention Center.</p>

<p>The timing matters. Wine, spirits and beer are all working through slower demand, tighter distribution and more selective consumers, so wholesaler and supplier meetings are becoming more data-led.</p>

<h2>What WSWA Announced</h2>
<ul>
  <li><strong>Event:</strong> WSWA Access LIVE 2027.</li>
  <li><strong>Location:</strong> Gaylord Texan Resort &amp; Convention Center, Dallas, Texas.</li>
  <li><strong>Dates:</strong> 1-4 February 2027.</li>
  <li><strong>Audience:</strong> wholesalers, suppliers, retailers, importers, exporters and service providers.</li>
  <li><strong>Early-bird deadline:</strong> WSWA lists 9 October 2026.</li>
</ul>

<h2>Why It Matters For BevOry</h2>
<p>Distribution shapes what consumers can actually find on shelves. If brands want to win searches such as whisky price in Delhi, wine price in Mumbai or gin price in Gurgaon, they need the boring pieces right: accurate product data, bottle images, city-level availability and clear MRP updates.</p>

<h2>Industry Context</h2>
<p>WSWA's recent membership forum update said the trade is discussing market health, innovation, wine trends and category data. That fits the current consumer mood: people still buy alcohol, but they compare harder by price, bottle size and occasion.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.wswa.org/news/registration-opens-wswas-access-live-2027-beverage-alcohol-industrys-premier-business-event" target="_blank" rel="noopener noreferrer">WSWA Access LIVE 2027 registration announcement</a></li>
  <li><a href="https://www.wswa.org/news/wswa-annual-membership-forum-equips-wine-and-spirits-wholesaler-leaders-navigate-market-policy" target="_blank" rel="noopener noreferrer">WSWA 2026 Annual Membership Forum update</a></li>
  <li><a href="https://www.wswa.org/news" target="_blank" rel="noopener noreferrer">WSWA news page</a></li>
</ul>

<h2>Responsible Drinking Note</h2>
<p>This article covers industry trade news. Buy only from licensed sellers and follow local alcohol laws.</p>
`.trim(),
  },
  {
    id: "guide-why-liquor-availability-differs-by-city-india-2026",
    title: "Why Liquor Availability Differs By City in India",
    slug: "why-liquor-availability-differs-by-city-india-2026",
    excerpt:
      "A practical guide to why whisky, wine, beer, gin and vodka availability differs across Delhi, Gurgaon, Jaipur, Mumbai and other Indian cities.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["liquor availability India", "city price", "excise", "whisky price", "wine shop open"],
    meta_title: "Liquor Availability India Guide | BevOry",
    meta_description:
      "Learn why liquor availability differs by city, state excise, licence type, dry days and bottle size. Compare prices on BevOry.",
    published_at: "2026-10-07T14:05:00.000+05:30",
    selection_note:
      "Picked as an educational post because city-level availability is one of the core reasons BevOry users search exact bottles and locations.",
    source_links: [
      "https://www.wswa.org/news/registration-opens-wswas-access-live-2027-beverage-alcohol-industrys-premier-business-event",
      "https://haryanatax.gov.in/LoadPartial/Excise%20Policy",
      "https://excise.rajasthan.gov.in/Important-Information.aspx?enc=dHlwZT1EUllEQVlT",
      "https://exciseservices.mahaonline.gov.in/",
    ],
    content: String.raw`
<p><strong>Liquor availability differs by city in India because alcohol retail is shaped by state excise rules, licence types, distributors, approved labels, dry days and shop-level stock.</strong> A bottle available in Gurgaon may not be listed in Delhi, Jaipur or Mumbai at the same price.</p>

<p>That is why BevOry treats city as part of the buying question. "Whisky price in India" is too broad; "whisky price in Gurgaon 750 ml" is useful.</p>

<h2>The Main Reasons</h2>
<ul>
  <li><strong>State excise rules:</strong> Haryana, Delhi, Rajasthan and Maharashtra publish separate policy and public-information pages.</li>
  <li><strong>Licence type:</strong> retail shops, bars, hotels and temporary-event permits can follow different rules.</li>
  <li><strong>Dry days:</strong> sale can be stopped statewide or locally on notified dates.</li>
  <li><strong>Label approval:</strong> a brand must be registered or approved for a market before regular sale.</li>
  <li><strong>Pack size:</strong> 180 ml, 375 ml, 750 ml and 1 litre listings can vary by state.</li>
</ul>

<h2>How To Search Better</h2>
<p>Use exact terms: Johnnie Walker Black Label 750 ml price in Delhi, Sula wine price in Jaipur, Corona beer price in Mumbai or gin price in Gurgaon. Do not compare a bar peg, delivery quote and retail bottle as one number.</p>

<h2>Food And Occasion Clarity</h2>
<p>For parties, decide the drinking occasion first. Beer pairs with chilli paneer and tandoori chicken, white wine with tandoori prawns and malai paneer tikka, and rich whisky with galouti kebabs or dark chocolate.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.wswa.org/news/registration-opens-wswas-access-live-2027-beverage-alcohol-industrys-premier-business-event" target="_blank" rel="noopener noreferrer">WSWA distribution and trade event context</a></li>
  <li><a href="https://haryanatax.gov.in/LoadPartial/Excise%20Policy" target="_blank" rel="noopener noreferrer">Haryana Tax Excise Policy page</a></li>
  <li><a href="https://excise.rajasthan.gov.in/Important-Information.aspx?enc=dHlwZT1EUllEQVlT" target="_blank" rel="noopener noreferrer">Rajasthan Excise public information page</a></li>
  <li><a href="https://exciseservices.mahaonline.gov.in/" target="_blank" rel="noopener noreferrer">Maharashtra State Excise portal</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>Availability is local, not national.</strong> Search by exact product, bottle size and city before you plan a shop visit or compare prices.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is informational. Follow legal drinking age, dry-day and possession rules in your state.</p>
`.trim(),
  },
  {
    id: "guide-jaipur-rajasthan-dry-days-liquor-shop-open-2026",
    title: "Jaipur Dry Days 2026: Is Liquor Shop Open in Rajasthan?",
    slug: "jaipur-rajasthan-dry-days-liquor-shop-open-2026",
    excerpt:
      "A Jaipur and Rajasthan dry-day guide covering official dry days, wine-shop planning, liquor-shop checks and city-level bottle price comparisons.",
    cover_emoji: "calendar",
    category: "Guides",
    tags: ["Jaipur dry day", "Rajasthan dry day", "liquor shop open Jaipur", "wine shop Jaipur", "dry days 2026"],
    meta_title: "Jaipur Dry Days 2026 Guide | BevOry",
    meta_description:
      "Check Jaipur and Rajasthan dry days, liquor-shop planning and city-level bottle prices before visiting a wine shop.",
    published_at: "2026-10-07T14:10:00.000+05:30",
    selection_note:
      "Picked as an educational post because Rajasthan's official dry-day page was updated recently and Jaipur liquor-shop-open searches are high-intent.",
    source_links: [
      "https://excise.rajasthan.gov.in/Important-Information.aspx?enc=dHlwZT1EUllEQVlT",
      "https://excise.rajasthan.gov.in/",
      "https://excise.delhi.gov.in/excise/frequently-asked-questions-1",
    ],
    content: String.raw`
<p><strong>Jaipur liquor-shop planning should start with Rajasthan's official dry-day list, not a generic national calendar.</strong> The Rajasthan Excise public information page says sale of liquor is prohibited across the state on declared dry days.</p>

<p>The page lists dry days for Republic Day, Shahid Diwas, Independence Day, Gandhi Jayanti and Mahaveer Jayanti. It was last updated on 29 September 2026.</p>

<h2>Official Rajasthan Dry Days Listed</h2>
<ul>
  <li>Republic Day: 26 January</li>
  <li>Shahid Diwas: 30 January</li>
  <li>Independence Day: 15 August</li>
  <li>Gandhi Jayanti: 2 October</li>
  <li>Mahaveer Jayanti</li>
</ul>

<h2>What Dry Day Means In Rajasthan</h2>
<p>Rajasthan's official page defines a dry day as a day when sale of liquor is prohibited in the whole state. It also says consumption is not prohibited by that definition, but buyers should still follow possession, transport and local venue rules.</p>

<h2>Before Visiting A Jaipur Wine Shop</h2>
<ul>
  <li>Check the current date against the dry-day list.</li>
  <li>Confirm the shop is licensed and open.</li>
  <li>Compare exact product, bottle size and city price.</li>
  <li>Do not assume Delhi, Haryana or Maharashtra rules apply in Rajasthan.</li>
  <li>Use official excise sources when a holiday or election period is close.</li>
</ul>

<h2>Popular BevOry Searches</h2>
<p>Useful searches include whisky price in Jaipur, beer price in Jaipur, wine shop open today in Jaipur, Rajasthan dry day today and vodka price in Jaipur 750 ml.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://excise.rajasthan.gov.in/Important-Information.aspx?enc=dHlwZT1EUllEQVlT" target="_blank" rel="noopener noreferrer">Rajasthan Excise: dry days public information</a></li>
  <li><a href="https://excise.rajasthan.gov.in/" target="_blank" rel="noopener noreferrer">Rajasthan Excise official portal</a></li>
  <li><a href="https://excise.delhi.gov.in/excise/frequently-asked-questions-1" target="_blank" rel="noopener noreferrer">Delhi Excise FAQ for dry-day comparison context</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>For Jaipur, check Rajasthan's dry-day list first, then compare bottle prices by exact product and size.</strong> BevOry can help with the price question once the shop-status question is clear.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is informational. Follow Rajasthan legal drinking age, dry-day, possession and transport rules.</p>
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
