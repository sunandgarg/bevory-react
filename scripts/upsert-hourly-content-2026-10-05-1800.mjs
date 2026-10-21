import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const now = new Date().toISOString();

const posts = [
  {
    id: "news-iwsr-premium-spirits-provenance-2026",
    title: "IWSR Says Premium Spirits Buyers Want Provenance, Not Just Higher Prices",
    slug: "iwsr-premium-spirits-buyers-provenance-2026",
    excerpt:
      "IWSR says high-end spirits buyers are becoming more selective, with rarity, liquid quality and verified provenance carrying more weight than price alone.",
    cover_emoji: "news",
    category: "News",
    tags: ["IWSR", "premium spirits", "Scotch whisky", "tequila", "luxury alcohol", "consumer trends"],
    meta_title: "Premium Spirits Buyers Want Provenance | BevOry",
    meta_description:
      "IWSR says premium spirits buyers now demand rarity, liquid quality and provenance, reshaping Scotch, tequila and luxury alcohol.",
    published_at: "2026-10-05T18:00:00.000+05:30",
    selection_note:
      "Picked as the news item because IWSR's 2026 premiumisation research is a current global trend signal for luxury spirits, Scotch and tequila coverage.",
    content: String.raw`
<p><strong>Premium spirits buyers are no longer impressed by high prices alone.</strong> IWSR's 2026 analysis says high-end status spirits shoppers are becoming more sceptical and are looking for genuine rarity, liquid quality and proven provenance before they pay more.</p>

<p>The shift matters for Scotch whisky, tequila, Cognac, Japanese whisky and limited-edition releases in India. A luxury bottle now needs a clear reason to exist: where it was made, why the liquid is distinctive, how scarce it really is and whether the story can be verified.</p>

<h2>What IWSR Is Seeing</h2>
<ul>
  <li><strong>Status spirits are under pressure:</strong> IWSR says the global value of status spirits fell by 10% in 2025, the second year of decline.</li>
  <li><strong>Buyers are trading up selectively:</strong> premiumisation is moving from price-led status to occasion, scarcity and product truth.</li>
  <li><strong>Provenance is becoming practical:</strong> origin, production method and credible scarcity matter more than a vague limited-edition claim.</li>
  <li><strong>Quality must be liquid-led:</strong> cask choice, age statement, distillery reputation and batch transparency help a bottle justify its price.</li>
</ul>

<h2>Why This Matters In India</h2>
<p>India is a fast-growing premium spirits market, but consumers are increasingly comparing exact bottles, not just brand names. A Scotch drinker in Delhi or Mumbai may want to know whether a bottle is a single malt, blended Scotch, sherry-cask finish, travel-retail expression or India-only pack before paying a premium.</p>

<h2>What BevOry Users Should Check</h2>
<p>For expensive whisky, tequila or Cognac, check the full label, bottle size, category, origin, age statement where present, cask or maturation claim and city-level price. A higher MRP is not proof of a better bottle; the liquid and provenance need to support the price.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.theiwsr.com/insight/spending-smart-four-ways-to-attract-status-spirits-buyers/" target="_blank" rel="noopener noreferrer">IWSR: spending smart and status spirits buyers</a></li>
  <li><a href="https://www.theiwsr.com/insight/premiumisation-redefined-from-pricing-to-meaningful-moments/" target="_blank" rel="noopener noreferrer">IWSR: premiumisation redefined</a></li>
  <li><a href="https://www.theiwsr.com/insight/six-key-drivers-shaping-beverage-alcohol-in-2026-and-beyond/" target="_blank" rel="noopener noreferrer">IWSR: beverage alcohol drivers in 2026</a></li>
</ul>

<h2>Responsible Drinking Note</h2>
<p>This article covers market trends, not a buying recommendation. Buy only from licensed sellers, follow local law and never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-premium-whisky-price-mumbai-2026",
    title: "Premium Whisky Price in Mumbai 2026: What Changes The MRP?",
    slug: "premium-whisky-price-mumbai-2026-mrp-guide",
    excerpt:
      "A Mumbai guide to premium whisky MRP, covering single malt, blended Scotch, Indian whisky, bottle size, excise duty and provenance.",
    cover_emoji: "glass",
    category: "Guides",
    tags: ["premium whisky price Mumbai", "single malt", "Scotch whisky", "Maharashtra MRP", "Indian whisky"],
    meta_title: "Premium Whisky Price in Mumbai 2026 | BevOry",
    meta_description:
      "Understand premium whisky prices in Mumbai: single malt, blended Scotch, Indian whisky, bottle size, MRP and Maharashtra excise.",
    published_at: "2026-10-05T18:05:00.000+05:30",
    selection_note:
      "Picked as an educational post because premium whisky price queries in Mumbai have strong commercial intent and fit BevOry's city-level price discovery.",
    content: String.raw`
<p><strong>Premium whisky price in Mumbai depends on the exact bottle, pack size and Maharashtra's approved MRP framework.</strong> A single malt Scotch, a blended Scotch and an Indian premium whisky can sit in very different price bands even when they share the same 750 ml size.</p>

<p>Mumbai follows Maharashtra excise rules. That means Delhi price news, UK tariff changes or a brand's national campaign do not automatically decide the shelf price in Mumbai.</p>

<h2>What Changes The MRP?</h2>
<ul>
  <li><strong>Category:</strong> single malt Scotch, blended Scotch, bourbon, Irish whiskey and Indian whisky are priced through different product contexts.</li>
  <li><strong>Origin:</strong> imported whisky carries customs-duty effects before state-level pricing is applied.</li>
  <li><strong>Pack size:</strong> 180 ml, 375 ml, 750 ml and 1 litre bottles should be compared separately.</li>
  <li><strong>Age and cask claims:</strong> age statements, sherry casks, bourbon barrels and limited batches can change positioning, but they do not replace the printed MRP.</li>
  <li><strong>State formula:</strong> Maharashtra's excise and MRP structure shapes the final shelf price.</li>
</ul>

<h2>Single Malt Vs Blended Scotch</h2>
<p>Single malt Scotch comes from one distillery and is made from malted barley, while blended Scotch combines malt and grain whiskies from different sources. Single malt often costs more because of production scale, ageing inventory and brand positioning, but a well-known blend can still sit at a premium price if demand is strong.</p>

<h2>Indian Premium Whisky In Mumbai</h2>
<p>Indian premium whisky has become more competitive, especially with brands using Indian grain spirits, malt components, cask finishes and sharper packaging. For Mumbai shoppers, the smart comparison is not imported versus Indian in broad terms; it is exact bottle, size, style and MRP.</p>

<h2>How To Compare On BevOry</h2>
<p>Search by exact bottle name and city. Compare Mumbai with Thane, Pune, Delhi, Gurgaon and Goa only after matching the same bottle size. Dry days and stock movement can affect whether a price is useful on the day you plan to buy.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://stateexcise.maharashtra.gov.in/Pdf/MRP%20%26%20Excise%20Duties.pdf" target="_blank" rel="noopener noreferrer">Maharashtra MRP and excise duties reference</a></li>
  <li><a href="https://stateexcise.maharashtra.gov.in/1246/Excise-Duty-and-Fee-Structure" target="_blank" rel="noopener noreferrer">Maharashtra State Excise duty and fee structure</a></li>
  <li><a href="https://www.theiwsr.com/insight/premiumisation-redefined-from-pricing-to-meaningful-moments/" target="_blank" rel="noopener noreferrer">IWSR: premiumisation and consumer value</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>Premium whisky price in Mumbai is bottle-specific and state-controlled.</strong> Check the exact name, size, category and current city-level price before assuming a Scotch or Indian whisky is cheaper elsewhere.</p>

<h2>Responsible Drinking Note</h2>
<p>Follow Maharashtra legal drinking age, possession, permit and dry-day rules. Buy only from licensed sellers.</p>
`.trim(),
  },
  {
    id: "guide-beer-price-delhi-mumbai-gurgaon-2026",
    title: "Beer Price in Delhi, Mumbai and Gurgaon 2026: Why It Changes By City",
    slug: "beer-price-delhi-mumbai-gurgaon-2026-city-guide",
    excerpt:
      "A city guide to beer prices in Delhi, Mumbai and Gurgaon, explaining MRP, state excise, pack size, imported beer and dry-day checks.",
    cover_emoji: "beer",
    category: "Guides",
    tags: ["beer price Delhi", "beer price Mumbai", "beer price Gurgaon", "MRP", "excise"],
    meta_title: "Beer Price Delhi, Mumbai, Gurgaon 2026 | BevOry",
    meta_description:
      "Compare beer prices in Delhi, Mumbai and Gurgaon with a simple guide to MRP, state excise, pack size and dry-day checks.",
    published_at: "2026-10-05T18:10:00.000+05:30",
    selection_note:
      "Picked as an educational post because beer price searches across Delhi, Mumbai and Gurgaon are high-frequency local queries with strong BevOry fit.",
    content: String.raw`
<p><strong>Beer price changes between Delhi, Mumbai and Gurgaon because alcohol pricing is controlled at the state level in India.</strong> A 330 ml bottle, 500 ml can or 650 ml bottle can carry different MRPs depending on local excise rules, taxes, margins and whether the beer is domestic or imported.</p>

<p>That is why a beer that looks cheap in one city may not match the shelf price in another. Always compare the same brand, pack size and city.</p>

<h2>Delhi Beer Price Basics</h2>
<p>Delhi's retail system is governed by Delhi excise rules and notifications. Normal shop timing, dry-day closure and licence type matter when planning a purchase. If Delhi declares a dry day, retail sale can stop even when a shop listing shows regular hours online.</p>

<h2>Mumbai Beer Price Basics</h2>
<p>Mumbai follows Maharashtra's MRP and excise-duty framework. Maharashtra excise references treat MRP as the maximum retail price printed on the pack and inclusive of applicable taxes and duties. Imported beer and domestic beer can sit under different cost structures.</p>

<h2>Gurgaon Beer Price Basics</h2>
<p>Gurgaon follows Haryana excise policy. Retail price, dry-day rules and licence conditions differ from Delhi even though both markets are part of the NCR buying conversation. A Gurgaon price should not be assumed for Delhi or Noida.</p>

<h2>Why The Same Beer Costs Differently</h2>
<ul>
  <li><strong>Pack size:</strong> 330 ml, 500 ml and 650 ml formats should be compared separately.</li>
  <li><strong>Imported vs domestic:</strong> imported beer carries customs and supply-chain cost before local pricing.</li>
  <li><strong>State taxes:</strong> each state sets its own excise and licence structure.</li>
  <li><strong>Dry days:</strong> price is irrelevant if sale is suspended for the day.</li>
  <li><strong>Retail channel:</strong> shop price and bar menu price are not the same thing.</li>
</ul>

<h2>How To Search Smartly</h2>
<p>Use searches such as "beer price in Delhi 650 ml", "beer price in Mumbai can", or "beer price in Gurgaon" only as a starting point. For useful comparison, match the exact brand, pack, city and current date.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://excise.delhi.gov.in/excise/frequently-asked-questions-1" target="_blank" rel="noopener noreferrer">Delhi Excise Department FAQ</a></li>
  <li><a href="https://stateexcise.maharashtra.gov.in/Pdf/MRP%20%26%20Excise%20Duties.pdf" target="_blank" rel="noopener noreferrer">Maharashtra MRP and excise duties reference</a></li>
  <li><a href="https://haryanatax.gov.in/LoadPartial/Excise%20Policy" target="_blank" rel="noopener noreferrer">Haryana Excise Policy page</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>Beer price in India is local, pack-specific and excise-driven.</strong> Compare Delhi, Mumbai and Gurgaon only after matching the same beer, format and date.</p>

<h2>Responsible Drinking Note</h2>
<p>Follow legal drinking age, dry-day, possession and transport rules in your city. Buy only from licensed sellers.</p>
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
