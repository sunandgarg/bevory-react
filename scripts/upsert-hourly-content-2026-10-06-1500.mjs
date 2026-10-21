import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const now = new Date().toISOString();

const posts = [
  {
    id: "news-iwsr-status-spirits-2026-rarity-provenance-price",
    title: "IWSR Says High-End Spirits Buyers Now Want Proof, Not Hype",
    slug: "iwsr-status-spirits-2026-rarity-provenance-price",
    excerpt:
      "IWSR's 2026 status spirits read shows luxury drinkers are scrutinising rarity, age, provenance and access before paying high prices.",
    cover_emoji: "news",
    category: "News",
    tags: ["IWSR", "status spirits", "luxury whisky", "premium spirits", "rare bottles", "provenance"],
    meta_title: "IWSR Status Spirits 2026 News | BevOry",
    meta_description:
      "IWSR says high-end spirits buyers want verifiable rarity, age and provenance. Read BevOry's premium spirits market note.",
    published_at: "2026-10-06T15:00:00.000+05:30",
    selection_note:
      "Picked as the news item because IWSR's latest status-spirits analysis gives a clear global signal for premium whisky, cognac, tequila and collectible spirits buying.",
    source_links: [
      "https://www.beveragedaily.com/Article/2026/10/01/the-four-attributes-driving-global-high-end-spirits-purchases-in-2026/",
      "https://www.theiwsr.com/insight/six-key-drivers-shaping-beverage-alcohol-in-2026-and-beyond/",
      "https://www.theiwsr.com/insight/purchasing-channels-evolve-for-high-end-spirits-post-covid/",
    ],
    content: String.raw`
<p><strong>IWSR's 2026 status-spirits analysis shows a tougher luxury drinks buyer: one who wants verifiable rarity, age, provenance and access before paying high prices.</strong> BeverageDaily reported on 1 October 2026 that the global value of status spirits fell by 10% in 2025, marking a second straight year of decline.</p>

<p>That does not mean premium whisky, cognac, rum, tequila or Japanese whisky has lost appeal. It means expensive bottles now need a clearer reason to exist than packaging and scarcity language.</p>

<h2>The Four Buying Signals</h2>
<ul>
  <li><strong>Genuine scarcity:</strong> buyers want proof that a bottle is rare, not just a limited-edition label.</li>
  <li><strong>Age as a trust signal:</strong> age statements and established names help justify high prices.</li>
  <li><strong>Access and community:</strong> distillery visits, cask networks and tastings support the bottle story.</li>
  <li><strong>Provenance over pedigree:</strong> a verified place and production story can matter as much as old-category status.</li>
</ul>

<h2>Why This Matters In India</h2>
<p>Indian buyers are seeing more imported single malts, premium bourbons, Japanese whisky, aged rum and limited-edition gin on city shelves. A buyer searching for whisky price in Mumbai, Scotch price in Delhi or Japanese whisky in Gurgaon needs exact bottle data: age, cask, importer, city price and bottle size.</p>

<h2>What To Watch Before Buying</h2>
<p>Check the age statement, cask type, distillery or blender, importer sticker, excise label and MRP. A real release count, named cask or verified distillery source is more useful than vague premium wording.</p>

<h2>Food Pairing For Status Spirits</h2>
<p>Sherried Scotch and aged rum work with galouti kebabs, lamb rogan josh, mutton seekh and 70% dark chocolate. Cleaner Japanese whisky and lighter Speyside malts pair better with tandoori prawns, roast chicken, salted almonds and aged cheddar.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.beveragedaily.com/Article/2026/10/01/the-four-attributes-driving-global-high-end-spirits-purchases-in-2026/" target="_blank" rel="noopener noreferrer">BeverageDaily: IWSR status spirits analysis</a></li>
  <li><a href="https://www.theiwsr.com/insight/six-key-drivers-shaping-beverage-alcohol-in-2026-and-beyond/" target="_blank" rel="noopener noreferrer">IWSR: six drivers shaping beverage alcohol in 2026</a></li>
  <li><a href="https://www.theiwsr.com/insight/purchasing-channels-evolve-for-high-end-spirits-post-covid/" target="_blank" rel="noopener noreferrer">IWSR: high-end spirits purchasing channels</a></li>
</ul>

<h2>Responsible Drinking Note</h2>
<p>This article is for adult readers and collectors. Buy only from licensed sellers and follow the law in your city or state.</p>
`.trim(),
  },
  {
    id: "guide-premium-whisky-india-age-cask-provenance-price-2026",
    title: "Premium Whisky in India: How To Check Age, Cask and Price",
    slug: "premium-whisky-india-age-cask-provenance-price-2026",
    excerpt:
      "A buyer's guide to premium whisky in India, covering age statements, cask types, provenance, importer labels, city prices and food pairings.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["premium whisky India", "whisky age statement", "cask strength", "single malt price", "Scotch price", "city MRP"],
    meta_title: "Premium Whisky India Price Guide | BevOry",
    meta_description:
      "Check premium whisky by age, cask, provenance, importer label and city price before buying. Compare bottles on BevOry.",
    published_at: "2026-10-06T15:05:00.000+05:30",
    selection_note:
      "Picked as an educational post because premium whisky searches in India often mix price, authenticity, age statement and cask-type questions.",
    source_links: [
      "https://www.beveragedaily.com/Article/2026/10/01/the-four-attributes-driving-global-high-end-spirits-purchases-in-2026/",
      "https://www.theiwsr.com/insight/six-key-drivers-shaping-beverage-alcohol-in-2026-and-beyond/",
      "https://www.gov.uk/government/publications/uk-india-trade-deal-conclusion-summary/uk-india-trade-deal-conclusion-summary",
    ],
    content: String.raw`
<p><strong>Premium whisky in India should be judged by age statement, cask type, distillery or blender, importer route, bottle size and city price.</strong> A high MRP alone does not prove quality, rarity or collectability.</p>

<p>IWSR's 2026 read on high-end spirits shows that buyers are becoming more selective and want transparent reasons to pay more. That same discipline helps Indian consumers compare single malts, blended Scotch, bourbon, Japanese whisky and Indian single malts.</p>

<h2>Age Statement</h2>
<p>An age statement tells you the youngest whisky in the bottle. It can be useful for trust, but it is not the only quality signal. A well-made no-age-statement whisky can still be strong if the distillery, cask policy and flavour profile are clear.</p>

<h2>Cask Type</h2>
<ul>
  <li><strong>Ex-bourbon American oak:</strong> often brings vanilla, coconut, honey and orchard fruit.</li>
  <li><strong>Oloroso sherry-seasoned oak:</strong> often brings dried fruit, walnut, dark chocolate and spice.</li>
  <li><strong>Virgin oak:</strong> can add stronger wood spice, caramel and tannin.</li>
  <li><strong>Wine, port or rum cask finish:</strong> can add fruit, sweetness and extra texture when used well.</li>
</ul>

<h2>Provenance</h2>
<p>Look for real place names: Speyside, Islay, Highlands, Kentucky, Jalisco for agave spirits, or Kavnai and Nashik for Indian single malt and wine contexts. A named distillery or estate is stronger than broad origin language.</p>

<h2>Importer And Excise Label</h2>
<p>In India, imported whisky should carry local importer and statutory label information. Check the seal, excise label, batch details and bottle condition, especially for older or collector bottles.</p>

<h2>How To Compare Price</h2>
<p>Use exact searches such as "Macallan 12 price in Delhi", "Glenfiddich 15 price in Mumbai" or "Amrut Fusion price in Bengaluru". Compare 700 ml, 750 ml and 1 litre bottles separately, and do not use duty-free pricing as Indian retail MRP.</p>

<h2>Food Pairings</h2>
<p>Pair sherried whisky with galouti kebabs, mutton seekh, lamb rogan josh, dark chocolate and aged cheddar. Bourbon-led and lighter malts work well with tandoori chicken, smoked almonds, grilled prawns and butter garlic mushrooms.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.beveragedaily.com/Article/2026/10/01/the-four-attributes-driving-global-high-end-spirits-purchases-in-2026/" target="_blank" rel="noopener noreferrer">BeverageDaily: high-end spirits buyer signals</a></li>
  <li><a href="https://www.theiwsr.com/insight/six-key-drivers-shaping-beverage-alcohol-in-2026-and-beyond/" target="_blank" rel="noopener noreferrer">IWSR: affordability and premiumisation trends</a></li>
  <li><a href="https://www.gov.uk/government/publications/uk-india-trade-deal-conclusion-summary/uk-india-trade-deal-conclusion-summary" target="_blank" rel="noopener noreferrer">UK government: India trade deal whisky and gin tariff context</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>Buy premium whisky by evidence, not noise.</strong> Age, cask, provenance, importer label, bottle size and city-level price should all line up before the bottle feels worth paying for.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is informational. Follow legal drinking age, dry-day and possession rules in your state.</p>
`.trim(),
  },
  {
    id: "guide-limited-edition-whisky-india-real-vs-marketing-2026",
    title: "Limited-Edition Whisky in India: How To Spot Real Value",
    slug: "limited-edition-whisky-india-real-vs-marketing-2026",
    excerpt:
      "A practical guide to limited-edition whisky buying in India, from release counts and cask details to city prices, seals and storage.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["limited edition whisky", "collector whisky", "rare whisky India", "premium spirits", "whisky price India"],
    meta_title: "Limited Edition Whisky India Guide | BevOry",
    meta_description:
      "Learn how to judge limited-edition whisky by release count, cask details, condition and city price before buying on BevOry.",
    published_at: "2026-10-06T15:10:00.000+05:30",
    selection_note:
      "Picked as an educational post because collectible whisky demand in India is rising, while buyers need a simple checklist to separate real scarcity from packaging-led hype.",
    source_links: [
      "https://www.beveragedaily.com/Article/2026/10/01/the-four-attributes-driving-global-high-end-spirits-purchases-in-2026/",
      "https://www.theiwsr.com/insight/purchasing-channels-evolve-for-high-end-spirits-post-covid/",
      "https://www.theiwsr.com/insight/six-key-drivers-shaping-beverage-alcohol-in-2026-and-beyond/",
    ],
    content: String.raw`
<p><strong>Limited-edition whisky in India is worth attention only when the scarcity is backed by real facts.</strong> Release count, cask details, age statement, distillery source, importer route, bottle condition and city price matter more than a decorative box.</p>

<p>IWSR's status-spirits work points to a more sceptical luxury buyer who wants proof. That is a useful mindset for anyone shopping rare Scotch, Japanese whisky, bourbon or Indian single malt.</p>

<h2>What Makes A Limited Edition Strong</h2>
<ul>
  <li><strong>Named distillery:</strong> the producer should be clear.</li>
  <li><strong>Release count:</strong> exact bottle numbers or cask counts are stronger than vague scarcity language.</li>
  <li><strong>Cask information:</strong> ex-bourbon, Oloroso sherry, port, rum, Mizunara or wine cask details help explain flavour.</li>
  <li><strong>Age statement:</strong> useful when verified and legally presented.</li>
  <li><strong>Condition:</strong> seal, fill level, label, box and storage history affect value.</li>
</ul>

<h2>Red Flags</h2>
<p>Be careful with bottles that rely only on a shiny box, unclear origin, missing importer details or a claim of rarity without numbers. A genuine collector bottle should be easy to describe in one sentence: who made it, where it came from, why it is limited and what makes the liquid different.</p>

<h2>How To Check Price In India</h2>
<p>Search by exact product and city: "limited edition Scotch price in Delhi", "Japanese whisky collector bottle Mumbai" or "Indian single malt limited edition Gurgaon". Compare the same bottle size only, and treat auction or overseas prices as separate from Indian retail MRP.</p>

<h2>Serving And Storage</h2>
<p>Serve rare whisky neat in a Glencairn glass at room temperature, with optional drops of spring water. Store bottles upright, away from direct sunlight, heat and damp cupboards.</p>

<h2>Food Pairings</h2>
<p>For sherried or high-aged malts, pair with galouti kebabs, mutton seekh, lamb rogan josh, 70% dark chocolate or aged cheddar. For lighter limited editions, choose tandoori prawns, roast chicken, salted almonds or grilled mushrooms.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.beveragedaily.com/Article/2026/10/01/the-four-attributes-driving-global-high-end-spirits-purchases-in-2026/" target="_blank" rel="noopener noreferrer">BeverageDaily: IWSR high-end spirits purchase attributes</a></li>
  <li><a href="https://www.theiwsr.com/insight/purchasing-channels-evolve-for-high-end-spirits-post-covid/" target="_blank" rel="noopener noreferrer">IWSR: high-end spirits buying channels</a></li>
  <li><a href="https://www.theiwsr.com/insight/six-key-drivers-shaping-beverage-alcohol-in-2026-and-beyond/" target="_blank" rel="noopener noreferrer">IWSR: beverage alcohol drivers 2026</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>A limited-edition whisky should give you verifiable reasons to pay more.</strong> If the facts are thin, compare other bottles at the same city-level price before buying.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is for adult consumers and collectors. Buy from licensed sellers and drink responsibly.</p>
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
