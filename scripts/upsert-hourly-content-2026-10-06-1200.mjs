import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const now = new Date().toISOString();

const posts = [
  {
    id: "news-delhi-premium-scotch-price-cut-ceta-october-2026",
    title: "Delhi Starts Scotch Price Review After India-UK Trade Deal",
    slug: "delhi-premium-scotch-price-cut-ceta-october-2026",
    excerpt:
      "Delhi's excise process for UK-origin whisky and gin could bring lower MRPs for select imported bottles after the India-UK CETA tariff cut.",
    cover_emoji: "news",
    category: "News",
    tags: ["Delhi Scotch price", "India UK CETA", "imported whisky", "premium spirits", "gin", "Delhi excise"],
    meta_title: "Delhi Scotch Price Cut News | BevOry",
    meta_description:
      "Delhi is reviewing UK whisky and gin MRPs after the India-UK trade deal. Check what may change for Scotch prices on BevOry.",
    published_at: "2026-10-06T12:00:00.000+05:30",
    selection_note:
      "Picked as the news item because Delhi imported-whisky pricing is an immediate, high-intent consumer query after the India-UK CETA tariff reduction.",
    source_links: [
      "https://www.hindustantimes.com/india-news/delhi-excise-department-invites-applications-to-reduce-imported-liquor-prices-after-india-uk-trade-pact-101791176127850.html",
      "https://timesofindia.indiatimes.com/city/delhi/excise-dept-starts-process-to-cut-uk-whisky-prices/articleshow/134714371.cms",
      "https://www.gov.uk/government/publications/uk-india-trade-deal-conclusion-summary/uk-india-trade-deal-conclusion-summary",
      "https://www.gov.uk/government/news/uk-signs-trade-deal-with-india",
    ],
    content: String.raw`
<p><strong>Delhi has begun the process of reviewing maximum retail prices for imported UK-origin whisky and gin after the India-UK Comprehensive Economic and Trade Agreement.</strong> Hindustan Times reported on 5 October 2026 that Delhi's Excise Department asked wholesale liquor licence holders to apply for MRP revisions for eligible imported brands.</p>

<p>The development matters because Delhi whisky searches are highly price-sensitive. A consumer looking for Johnnie Walker, Chivas Regal, Glenfiddich, The Macallan, Ballantine's or UK gin needs the new approved MRP for the exact bottle, not a broad percentage estimate.</p>

<h2>What Changed</h2>
<ul>
  <li><strong>Policy trigger:</strong> the India-UK trade deal reduced tariffs on eligible UK whisky and gin.</li>
  <li><strong>Delhi action:</strong> wholesale foreign liquor licensees have been asked to submit revised MRP applications for covered brands.</li>
  <li><strong>Consumer impact:</strong> reports indicate some premium Scotch and gin bottles may become cheaper, but the final Delhi shelf price depends on the approved cost card and state-level pricing formula.</li>
  <li><strong>Timing:</strong> news reports point to movement after 10 October 2026, with Delhi still reviewing brand-level submissions.</li>
</ul>

<h2>Why A Tariff Cut Is Not The Same As A Shelf-Price Cut</h2>
<p>The UK government summary says whisky and gin tariffs move from 150% to 75% on day one and then toward 40% over a staged period. A bottle's retail price in Delhi also includes state excise duty, margins, distribution costs and approved MRP rules, so consumers should expect brand-by-brand changes rather than one flat discount.</p>

<h2>What Delhi Buyers Should Do Now</h2>
<p>Track the exact brand, variant and bottle size. A 750 ml Scotch bottle, a 1 litre duty-paid bottle and a bar pour are different price questions. Check city-level listings on BevOry once revised MRPs begin appearing, especially for imported Scotch and gin.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.hindustantimes.com/india-news/delhi-excise-department-invites-applications-to-reduce-imported-liquor-prices-after-india-uk-trade-pact-101791176127850.html" target="_blank" rel="noopener noreferrer">Hindustan Times: Delhi excise MRP revision report</a></li>
  <li><a href="https://timesofindia.indiatimes.com/city/delhi/excise-dept-starts-process-to-cut-uk-whisky-prices/articleshow/134714371.cms" target="_blank" rel="noopener noreferrer">Times of India: Delhi whisky price revision process</a></li>
  <li><a href="https://www.gov.uk/government/publications/uk-india-trade-deal-conclusion-summary/uk-india-trade-deal-conclusion-summary" target="_blank" rel="noopener noreferrer">UK government: India trade deal conclusion summary</a></li>
  <li><a href="https://www.gov.uk/government/news/uk-signs-trade-deal-with-india" target="_blank" rel="noopener noreferrer">UK government: whisky and gin tariff reduction note</a></li>
</ul>

<h2>Responsible Drinking Note</h2>
<p>This article is for pricing and policy awareness. Buy only from licensed sellers, follow Delhi legal drinking age rules and do not drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-scotch-price-delhi-noida-gurgaon-uk-trade-deal-2026",
    title: "Scotch Prices in Delhi, Noida and Gurgaon: What The UK Deal Means",
    slug: "scotch-price-delhi-noida-gurgaon-uk-trade-deal-2026",
    excerpt:
      "A practical NCR guide to UK-origin Scotch price changes, why discounts differ by state, and how to compare whisky MRPs by bottle size.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["Scotch price Delhi", "Noida liquor price", "Gurgaon whisky price", "India UK trade deal", "premium whisky"],
    meta_title: "Scotch Price Delhi NCR 2026 Guide | BevOry",
    meta_description:
      "Compare Scotch prices in Delhi, Noida and Gurgaon after the UK trade deal. Check bottle size, MRP and city prices on BevOry.",
    published_at: "2026-10-06T12:05:00.000+05:30",
    selection_note:
      "Picked as an educational post because NCR users often compare Delhi, Noida and Gurgaon whisky prices before buying imported Scotch.",
    source_links: [
      "https://www.gov.uk/government/publications/uk-india-trade-deal-conclusion-summary/uk-india-trade-deal-conclusion-summary",
      "https://www.hindustantimes.com/cities/others/ukorigin-whisky-may-get-cheaper-by-octend-101791137057786.html",
      "https://timesofindia.indiatimes.com/city/noida/cheers-uk-liquor-brands-to-get-up-to-15-cheaper-from-oct-10/amp_articleshow/134646006.cms",
      "https://haryanatax.gov.in/LoadPartial/Excise%20Policy",
    ],
    content: String.raw`
<p><strong>Scotch whisky prices in Delhi, Noida and Gurgaon can move differently even when the same India-UK trade deal applies to the imported bottle.</strong> The customs-duty change is national, but retail alcohol pricing is still shaped by state excise rules, approved MRPs and local distribution.</p>

<p>That is why a consumer should not assume one NCR city's price applies across the border. Delhi, Uttar Pradesh and Haryana run separate excise systems.</p>

<h2>The Core Tariff Change</h2>
<p>The UK government says Indian tariffs on eligible whisky and gin from the UK fall from 150% to 75% at the start of the agreement, then move toward 40% over time. This affects UK-origin Scotch and gin, but the final bottle price also reflects state-level calculations.</p>

<h2>Delhi</h2>
<p>Delhi has asked wholesale foreign-liquor licensees to apply for MRP revisions for eligible imported brands. For buyers, the clean comparison is exact product plus pack size: for example, 750 ml Johnnie Walker Black Label in Delhi, not just "Scotch price".</p>

<h2>Noida And Uttar Pradesh</h2>
<p>Times of India reported that Uttar Pradesh planned revised prices for several UK-origin brands from 10 October 2026, with reductions varying by brand. For Noida users, scan the bottle QR code where available and compare with the displayed MRP before paying.</p>

<h2>Gurgaon And Haryana</h2>
<p>Gurgaon follows Haryana's excise framework, not Delhi's. A Delhi price drop does not automatically mean the same shelf price in Gurgaon, so check Haryana city listings separately before planning a purchase.</p>

<h2>How To Compare Like A Smart Buyer</h2>
<ul>
  <li>Use the exact brand and expression: Glenfiddich 12 is not The Glenlivet 12.</li>
  <li>Use the exact bottle size: 180 ml, 375 ml, 700 ml, 750 ml and 1 litre listings cannot be compared directly.</li>
  <li>Check the city: Delhi, Noida and Gurgaon can show different MRPs.</li>
  <li>Separate retail price from bar price: a peg at a restaurant includes service, taxes and venue pricing.</li>
  <li>Watch dry days: a lower MRP does not help if shops are closed by excise order.</li>
</ul>

<h2>Food Pairings For Premium Scotch</h2>
<p>Sherried single malts work with galouti kebabs, mutton seekh, lamb rogan josh and 70% dark chocolate. Lighter Speyside malts pair well with grilled prawns, roast chicken, salted almonds and aged cheddar.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.gov.uk/government/publications/uk-india-trade-deal-conclusion-summary/uk-india-trade-deal-conclusion-summary" target="_blank" rel="noopener noreferrer">UK government: India trade deal tariff summary</a></li>
  <li><a href="https://www.hindustantimes.com/cities/others/ukorigin-whisky-may-get-cheaper-by-octend-101791137057786.html" target="_blank" rel="noopener noreferrer">Hindustan Times: Delhi UK-origin whisky price report</a></li>
  <li><a href="https://timesofindia.indiatimes.com/city/noida/cheers-uk-liquor-brands-to-get-up-to-15-cheaper-from-oct-10/amp_articleshow/134646006.cms" target="_blank" rel="noopener noreferrer">Times of India: Noida and UP price changes</a></li>
  <li><a href="https://haryanatax.gov.in/LoadPartial/Excise%20Policy" target="_blank" rel="noopener noreferrer">Haryana Tax: excise policy page</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>The India-UK deal can reduce pressure on imported Scotch prices, but BevOry users should still compare by exact bottle, size and city.</strong> NCR price shopping only works when Delhi, Noida and Gurgaon are checked separately.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is informational. Follow local law, buy only from licensed retailers and do not transport alcohol across state borders unless legally permitted.</p>
`.trim(),
  },
  {
    id: "guide-collector-jamaican-rum-appleton-hearts-1999-india-2026",
    title: "Collector Jamaican Rum Guide: Appleton Hearts 1999 and Pot-Still Bottles",
    slug: "collector-jamaican-rum-appleton-hearts-1999-india-2026",
    excerpt:
      "A guide to Appleton Estate Hearts Collection 1999, Jamaican pot-still rum, tropical ageing and how Indian collectors should assess rare rum.",
    cover_emoji: "rum",
    category: "Guides",
    tags: ["Appleton Estate", "Jamaican rum", "collector rum", "pot still rum", "Campari Group", "rare spirits"],
    meta_title: "Collector Jamaican Rum Guide 2026 | BevOry",
    meta_description:
      "Learn how to assess Appleton Hearts 1999, Jamaican pot-still rum, tropical ageing and collector bottles. Check city prices on BevOry.",
    published_at: "2026-10-06T12:10:00.000+05:30",
    selection_note:
      "Picked as an educational post because rare rum launches are becoming more visible globally, while Indian consumers need clear guidance on provenance and bottle authentication.",
    source_links: [
      "https://www.prnewswire.com/news-releases/appleton-estates-hearts-collection-1999-returns-after-five-more-years-in-cask-302895187.html",
      "https://drinks-intel.com/spirits/this-weeks-new-spirits-launches-28-september-2-october-2026/",
      "https://www.appletonestate.com/",
      "https://www.camparigroup.com/en",
    ],
    content: String.raw`
<p><strong>Appleton Estate Hearts Collection 1999 shows how rare Jamaican rum is being framed for collectors: single marque, pot-still distillation, tropical ageing and very small release volumes.</strong> Appleton Estate announced the 2026 release on 1 October 2026, describing it as a 26-year-old expression drawn from just 10 casks.</p>

<p>For Indian collectors, the lesson is broader than one bottle. Rare rum should be judged by distillery, still type, age statement, cask history, bottle count, import route and storage condition.</p>

<h2>What Makes Appleton Hearts 1999 Important</h2>
<ul>
  <li><strong>Estate:</strong> Appleton Estate in Jamaica's Nassau Valley.</li>
  <li><strong>Owner:</strong> Campari Group owns Appleton Estate.</li>
  <li><strong>Blend leadership:</strong> Master Blender Joy Spence selected the casks for the release.</li>
  <li><strong>Production:</strong> the 2026 release is described as 100% pot-still rum distilled in a Forsyth Pot Still.</li>
  <li><strong>Age:</strong> the new release is now 26 years old after five more tropical years in cask.</li>
  <li><strong>Scale:</strong> Global Drinks Intel listed 1,406 units for the 2026 bottling.</li>
</ul>

<h2>How Tropical Ageing Changes Rum</h2>
<p>Rum matured in Jamaica ages in a warm, humid climate, which can increase wood interaction and evaporation compared with cooler warehouse conditions. That is why a 26-year-old tropical-aged rum is usually treated as a serious collector bottle, not a casual mixer.</p>

<h2>How To Taste Rare Jamaican Rum</h2>
<p>Use a tulip glass at room temperature and pour a small measure. Look for dark cocoa, coffee, dried fruit, baking spice, herbal notes and polished oak. Add a few drops of water only after nosing the rum neat.</p>

<h2>Indian Food Pairings</h2>
<p>Pair mature Jamaican rum with 70% dark chocolate, smoked almonds, mutton seekh, slow-cooked pork vindaloo or caramelized banana tart. Avoid cola or sweet mixers for a bottle built around long tropical ageing.</p>

<h2>Buying Checklist For India</h2>
<ul>
  <li>Confirm the official importer and state label.</li>
  <li>Check the seal, closure, fill level and batch details.</li>
  <li>Compare city-level prices by exact bottle name and volume.</li>
  <li>Keep rare bottles away from heat, direct sunlight and damp storage.</li>
</ul>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.prnewswire.com/news-releases/appleton-estates-hearts-collection-1999-returns-after-five-more-years-in-cask-302895187.html" target="_blank" rel="noopener noreferrer">Appleton Estate press release via PR Newswire</a></li>
  <li><a href="https://drinks-intel.com/spirits/this-weeks-new-spirits-launches-28-september-2-october-2026/" target="_blank" rel="noopener noreferrer">Global Drinks Intel: weekly spirits launches</a></li>
  <li><a href="https://www.appletonestate.com/" target="_blank" rel="noopener noreferrer">Appleton Estate official website</a></li>
  <li><a href="https://www.camparigroup.com/en" target="_blank" rel="noopener noreferrer">Campari Group official website</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>Appleton Hearts 1999 is a reference point for how to assess collector rum: provenance first, then age, still type, release size and verified route to market.</strong> For Indian buyers, the safest comparison is always exact bottle and city-level price.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is for adult collectors and drinkers. Buy only through legal channels and enjoy mature spirits in small pours.</p>
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
