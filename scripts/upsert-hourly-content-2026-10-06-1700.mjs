import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const now = new Date().toISOString();

const posts = [
  {
    id: "news-dalmore-cigar-malt-signature-reserve-18-2026",
    title: "The Dalmore Adds An 18-Year Cigar Malt To Its Permanent Line-Up",
    slug: "dalmore-cigar-malt-signature-reserve-18-2026",
    excerpt:
      "The Dalmore Cigar Malt Signature Reserve Aged 18 Years uses five cask influences and joins the Highland distillery's Cigar Malt family as a permanent expression.",
    cover_emoji: "news",
    category: "News",
    tags: ["The Dalmore", "Cigar Malt", "Highland single malt", "Scotch whisky", "Whyte & Mackay", "premium whisky"],
    meta_title: "Dalmore Cigar Malt 18 News | BevOry",
    meta_description:
      "The Dalmore adds an 18-year Cigar Malt with bourbon, Marsala, Cabernet and Matusalem casks. Read BevOry's Scotch note.",
    published_at: "2026-10-06T17:00:00.000+05:30",
    selection_note:
      "Picked as the news item because The Dalmore's 1 October 2026 launch is a current premium Scotch release with clear cask, age and collector-search relevance.",
    source_links: [
      "https://www.thedalmore.com/en-us/cigar-malt-signature-reserve-aged-18-year-old/",
      "https://www.thedalmore.com/en-us/our-world/the-dalmore-cigar-malt-signature-reserve-aged-18-years-defined-by-the-moment/",
      "https://drinks-intel.com/spirits/this-weeks-new-spirits-launches-28-september-2-october-2026/",
      "https://thewhiskeywash.com/whiskey-news/the-dalmore-cigar-malt-18-year-old-joins-principal-collection/",
    ],
    content: String.raw`
<p><strong>The Dalmore has introduced Cigar Malt Signature Reserve Aged 18 Years, a Highland single malt built around five cask influences and added as a permanent extension of the Cigar Malt family.</strong> The brand published the release story on 1 October 2026, while Global Drinks Intel listed the wider market rollout from 19 October.</p>

<p>The release matters because it is not only a special pack. It gives drinkers a clear specification: age statement, Highland origin, natural colour, non-chill filtration, 46% ABV and a detailed cask recipe.</p>

<h2>What The Bottle Is</h2>
<ul>
  <li><strong>Producer:</strong> The Dalmore, a Highland single malt Scotch whisky distillery operated by Whyte &amp; Mackay.</li>
  <li><strong>Age:</strong> 18 years.</li>
  <li><strong>ABV:</strong> 46%, according to The Dalmore.</li>
  <li><strong>Style:</strong> rich Highland single malt designed for slow sipping and structured pairings.</li>
  <li><strong>Casks:</strong> American white oak ex-bourbon barrels, Marsala casks, Cabernet Sauvignon barriques, Cabernet Franc barriques and Matusalem sherry casks.</li>
</ul>

<h2>Tasting Direction</h2>
<p>The Dalmore describes chocolate orange, dried fig, dark fruit, sandalwood, forest berries, sticky dates, orange marmalade, dark chocolate, nutmeg and cinnamon. That profile places the whisky firmly in a richer, dessert-spice style rather than a smoky Islay lane.</p>

<h2>Why Indian Buyers Should Watch It</h2>
<p>India's premium Scotch searches are increasingly specific: "Dalmore price in Mumbai", "Dalmore Cigar Malt price in Delhi" and "Highland single malt price in Gurgaon" are not the same query. If this bottle reaches India, compare it by exact expression, importer label, bottle size and city-level MRP.</p>

<h2>Food Pairings</h2>
<p>Skip sweet mixers. Pair a small neat pour with galouti kebabs, mutton seekh, lamb rogan josh, 70% dark chocolate, aged cheddar or roasted almonds.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.thedalmore.com/en-us/cigar-malt-signature-reserve-aged-18-year-old/" target="_blank" rel="noopener noreferrer">The Dalmore official product page</a></li>
  <li><a href="https://www.thedalmore.com/en-us/our-world/the-dalmore-cigar-malt-signature-reserve-aged-18-years-defined-by-the-moment/" target="_blank" rel="noopener noreferrer">The Dalmore official release story</a></li>
  <li><a href="https://drinks-intel.com/spirits/this-weeks-new-spirits-launches-28-september-2-october-2026/" target="_blank" rel="noopener noreferrer">Global Drinks Intel weekly spirits launch round-up</a></li>
  <li><a href="https://thewhiskeywash.com/whiskey-news/the-dalmore-cigar-malt-18-year-old-joins-principal-collection/" target="_blank" rel="noopener noreferrer">The Whiskey Wash launch coverage</a></li>
</ul>

<h2>Responsible Drinking Note</h2>
<p>This article is for adult readers. Buy only from licensed sellers, follow state law and do not drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-rich-highland-scotch-india-cask-price-pairing-2026",
    title: "Rich Highland Scotch in India: Cask, Price and Food Pairing Guide",
    slug: "rich-highland-scotch-india-cask-price-pairing-2026",
    excerpt:
      "A practical guide to rich Highland Scotch whisky in India, covering Dalmore-style casks, tasting notes, serving, pairings and city-price checks.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["Highland Scotch", "Dalmore price", "single malt price India", "Scotch pairing", "premium whisky"],
    meta_title: "Rich Highland Scotch India Guide | BevOry",
    meta_description:
      "Compare rich Highland Scotch by cask, age, flavour and city price. Learn serving and Indian food pairings on BevOry.",
    published_at: "2026-10-06T17:05:00.000+05:30",
    selection_note:
      "Picked as an educational post because Dalmore-style Highland Scotch searches combine premium whisky discovery, cask education and Indian city-level price intent.",
    source_links: [
      "https://www.thedalmore.com/en-us/our-world/the-dalmore-cigar-malt-signature-reserve-aged-18-years-defined-by-the-moment/",
      "https://www.thedalmore.com/en-us/cigar-malt-signature-reserve-aged-18-year-old/",
      "https://drinks-intel.com/spirits/this-weeks-new-spirits-launches-28-september-2-october-2026/",
    ],
    content: String.raw`
<p><strong>Rich Highland Scotch in India should be compared by distillery, age, cask recipe, importer label, bottle size and city price.</strong> Bottles from houses such as The Dalmore often lean into fruit, chocolate, sherry, wine-cask spice and polished oak rather than coastal peat smoke.</p>

<p>The Dalmore Cigar Malt Signature Reserve Aged 18 Years is a current example of this style. It uses American white oak ex-bourbon barrels with Marsala, Cabernet Sauvignon, Cabernet Franc and Matusalem sherry cask influences.</p>

<h2>What Rich Highland Scotch Usually Tastes Like</h2>
<ul>
  <li><strong>Nose:</strong> orange peel, dried fig, raisin, chocolate, walnut, spice and polished wood.</li>
  <li><strong>Palate:</strong> medium-to-full body with dark fruit, marmalade, honey, cocoa and warming oak.</li>
  <li><strong>Finish:</strong> medium to long, often showing cinnamon, nutmeg, dried fruit and gentle tannin.</li>
</ul>

<h2>How To Serve</h2>
<p>Use a Glencairn or tulip glass at room temperature. Taste it neat first, then add a few drops of spring water if the whisky feels tight. A bottle built around old casks and layered maturation should not be treated like a cola mixer.</p>

<h2>Indian Food Pairings</h2>
<p>Choose food with depth rather than sharp chilli alone: galouti kebabs, mutton seekh, lamb rogan josh, butter garlic mushrooms, aged cheddar, smoked almonds and 70% dark chocolate. These dishes can stand up to sherry, wine-cask spice and dark-fruit notes.</p>

<h2>Price Checks In Indian Cities</h2>
<p>Search by exact expression and city: "Dalmore 18 price in Delhi", "Highland single malt price in Mumbai" or "Dalmore Cigar Malt price in Gurgaon". Compare only the same bottle size, and do not use overseas launch pricing as Indian retail MRP.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.thedalmore.com/en-us/our-world/the-dalmore-cigar-malt-signature-reserve-aged-18-years-defined-by-the-moment/" target="_blank" rel="noopener noreferrer">The Dalmore official cask and tasting note story</a></li>
  <li><a href="https://www.thedalmore.com/en-us/cigar-malt-signature-reserve-aged-18-year-old/" target="_blank" rel="noopener noreferrer">The Dalmore product page</a></li>
  <li><a href="https://drinks-intel.com/spirits/this-weeks-new-spirits-launches-28-september-2-october-2026/" target="_blank" rel="noopener noreferrer">Global Drinks Intel launch context</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>Rich Highland Scotch rewards careful comparison.</strong> Match age, cask recipe, flavour style and city-level price before choosing a premium bottle.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is informational. Buy only from licensed retailers and follow local legal drinking age and dry-day rules.</p>
`.trim(),
  },
  {
    id: "guide-wine-cask-finished-whisky-india-sherry-marsala-cabernet-2026",
    title: "Wine-Cask Finished Whisky: Sherry, Marsala and Cabernet Explained",
    slug: "wine-cask-finished-whisky-india-sherry-marsala-cabernet-2026",
    excerpt:
      "A clear guide to wine-cask finished whisky, including Oloroso and Matusalem sherry, Marsala, Cabernet barriques and how Indian buyers should compare prices.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["wine cask whisky", "sherry cask whisky", "Marsala cask", "Cabernet cask", "Scotch whisky India"],
    meta_title: "Wine Cask Whisky India Guide | BevOry",
    meta_description:
      "Learn how sherry, Marsala and Cabernet casks shape whisky flavour, then compare bottle and city prices on BevOry.",
    published_at: "2026-10-06T17:10:00.000+05:30",
    selection_note:
      "Picked as an educational post because cask terms appear often on premium whisky labels, but Indian shoppers need plain explanations before comparing prices.",
    source_links: [
      "https://www.thedalmore.com/en-us/our-world/the-dalmore-cigar-malt-signature-reserve-aged-18-years-defined-by-the-moment/",
      "https://drinks-intel.com/spirits/this-weeks-new-spirits-launches-28-september-2-october-2026/",
      "https://www.thedalmore.com/en-us/cigar-malt-signature-reserve-aged-18-year-old/",
    ],
    content: String.raw`
<p><strong>Wine-cask finished whisky uses casks that previously held fortified wine or still wine to add fruit, spice, tannin and texture after the main maturation.</strong> Sherry, Marsala, port, Madeira and red-wine barriques can all change how a whisky smells, tastes and finishes.</p>

<p>The Dalmore Cigar Malt Signature Reserve Aged 18 Years is a useful current example because it combines ex-bourbon American white oak with Marsala, Cabernet Sauvignon, Cabernet Franc and Matusalem sherry cask influences.</p>

<h2>Common Cask Terms</h2>
<ul>
  <li><strong>Matusalem sherry:</strong> often associated with dried fruit, walnut, dark chocolate and nutty depth.</li>
  <li><strong>Oloroso sherry:</strong> usually brings raisin, spice, toasted nuts and richer texture.</li>
  <li><strong>Marsala:</strong> can add ginger warmth, cooked fruit and sweet spice.</li>
  <li><strong>Cabernet Sauvignon barrique:</strong> can add tannin, black fruit and structure.</li>
  <li><strong>Cabernet Franc barrique:</strong> can bring aromatic lift, red fruit and savoury nuance.</li>
</ul>

<h2>How It Changes The Whisky</h2>
<p>A bourbon-cask base often gives vanilla, honey and citrus. Wine casks can add darker fruit, spice, cocoa, nutty notes and a firmer finish. Good whisky keeps those cask layers balanced with the distillery character.</p>

<h2>How To Serve</h2>
<p>Serve wine-cask finished whisky neat in a Glencairn glass at room temperature. Add a few drops of water if the ABV or tannin feels strong; avoid sweet mixers that flatten the cask detail.</p>

<h2>Indian Food Pairings</h2>
<p>Sherry and Marsala-led whiskies work with galouti kebabs, mutton seekh, lamb rogan josh, almond-stuffed dates and dark chocolate. Cabernet-influenced whiskies can handle tandoori lamb chops, aged cheddar and mushroom galouti.</p>

<h2>Buying Checklist</h2>
<ul>
  <li>Check whether the label says full maturation or finish.</li>
  <li>Look for named casks instead of vague wine-cask language.</li>
  <li>Compare exact bottle size and city-level price.</li>
  <li>Check importer label, seal and storage condition for expensive bottles.</li>
</ul>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.thedalmore.com/en-us/our-world/the-dalmore-cigar-malt-signature-reserve-aged-18-years-defined-by-the-moment/" target="_blank" rel="noopener noreferrer">The Dalmore official cask explanation</a></li>
  <li><a href="https://drinks-intel.com/spirits/this-weeks-new-spirits-launches-28-september-2-october-2026/" target="_blank" rel="noopener noreferrer">Global Drinks Intel new spirits launch round-up</a></li>
  <li><a href="https://www.thedalmore.com/en-us/cigar-malt-signature-reserve-aged-18-year-old/" target="_blank" rel="noopener noreferrer">The Dalmore product page</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>Wine-cask finished whisky is worth paying more for when the cask details are specific and the price makes sense in your city.</strong> Use BevOry to compare exact bottles, not loose style labels.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is for adult consumers. Follow state law and enjoy premium whisky in small pours.</p>
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
