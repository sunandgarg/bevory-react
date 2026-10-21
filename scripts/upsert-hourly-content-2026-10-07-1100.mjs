import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const now = new Date().toISOString();

const posts = [
  {
    id: "news-california-cocktails-to-go-extended-until-2029",
    title: "California Extends Cocktails-To-Go Until 2029",
    slug: "california-cocktails-to-go-extended-until-2029",
    excerpt:
      "California's AB 2663 extends cocktails-to-go until 2029, keeping restaurant takeout drinks in the spotlight for the global on-premise trade.",
    cover_emoji: "news",
    category: "News",
    tags: ["cocktails to-go", "California", "AB 2663", "restaurants", "spirits", "alcohol policy"],
    meta_title: "California Cocktails To-Go 2029 | BevOry",
    meta_description:
      "California extends cocktails-to-go until 2029. Read what the policy means for restaurants, spirits and takeaway drink trends.",
    published_at: "2026-10-07T11:00:00.000+05:30",
    selection_note:
      "Picked as the news item because California's signed AB 2663 is a recent alcohol-policy change with direct relevance to restaurants, cocktails and convenience-led drinking occasions.",
    source_links: [
      "https://distilledspirits.org/news/california-governor-signs-bill-extending-cocktails-to-go-until-2029/",
      "https://calmatters.digitaldemocracy.org/bills/ca_202520260ab2663",
      "https://www.abc.ca.gov/licensing/sales-of-alcoholic-beverages-to-go/",
    ],
    content: String.raw`
<p><strong>California has extended cocktails-to-go until 2029 after Governor Gavin Newsom signed AB 2663.</strong> The Distilled Spirits Council of the United States reported the signing on 30 September 2026, noting that the pandemic-era measure had been due to expire in December 2026.</p>

<p>The law keeps a high-profile restaurant channel alive for mixed drinks sold for off-premise consumption. For the wider alcohol industry, the signal is clear: convenience, sealed packaging and food-linked drinking occasions remain part of the post-pandemic playbook.</p>

<h2>What Changed</h2>
<ul>
  <li><strong>Bill:</strong> AB 2663.</li>
  <li><strong>Market:</strong> California, United States.</li>
  <li><strong>Category:</strong> cocktails and other eligible alcoholic beverages sold to-go by qualifying licensed businesses.</li>
  <li><strong>Timeline:</strong> Digital Democracy's bill summary says the provisions extend until 31 December 2029.</li>
  <li><strong>Trade impact:</strong> restaurants and eligible producers keep a convenience-led sales channel for longer.</li>
</ul>

<h2>Why BevOry Readers Should Care</h2>
<p>India has different excise systems in every state, so California's rule does not apply locally. Still, the trend matters: drinkers are searching for easier planning around bars, restaurant cocktails, RTDs, party drinks and city-level bottle prices.</p>

<h2>India Context</h2>
<p>Do not assume alcohol delivery or takeout cocktails are legal in your city because a US state allows them. In India, check the current excise department rules for Delhi, Maharashtra, Haryana, Karnataka, Telangana or the state where the purchase happens.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://distilledspirits.org/news/california-governor-signs-bill-extending-cocktails-to-go-until-2029/" target="_blank" rel="noopener noreferrer">DISCUS: California cocktails-to-go extension</a></li>
  <li><a href="https://calmatters.digitaldemocracy.org/bills/ca_202520260ab2663" target="_blank" rel="noopener noreferrer">Digital Democracy: AB 2663 bill summary</a></li>
  <li><a href="https://www.abc.ca.gov/licensing/sales-of-alcoholic-beverages-to-go/" target="_blank" rel="noopener noreferrer">California ABC: alcoholic beverages to-go page</a></li>
</ul>

<h2>Responsible Drinking Note</h2>
<p>This article covers policy and industry trends. Follow the law where you live, buy only from licensed sellers and never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-alcohol-delivery-takeaway-rules-india-city-check-2026",
    title: "Alcohol Delivery and Takeaway in India: City Rules To Check First",
    slug: "alcohol-delivery-takeaway-rules-india-city-check-2026",
    excerpt:
      "A practical India guide to checking alcohol delivery, takeaway, dry days, shop status and city-level prices before placing any order or visiting a shop.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["alcohol delivery India", "wine shop open", "liquor shop delivery", "dry day", "city price"],
    meta_title: "Alcohol Delivery India Rules Guide | BevOry",
    meta_description:
      "Check alcohol delivery, takeaway, dry days, shop status and city prices before buying. Use BevOry for local bottle checks.",
    published_at: "2026-10-07T11:05:00.000+05:30",
    selection_note:
      "Picked as an educational post because users frequently search for alcohol delivery and liquor-shop-open queries, but rules vary sharply by Indian state and city.",
    source_links: [
      "https://excise.delhi.gov.in/excise/frequently-asked-questions-1",
      "https://exciseservices.mahaonline.gov.in/",
      "https://haryanatax.gov.in/LoadPartial/Excise%20Policy",
      "https://www.excise.telangana.gov.in/Service_Chart",
    ],
    content: String.raw`
<p><strong>Alcohol delivery and takeaway rules in India must be checked city by city before buying.</strong> Delhi, Mumbai, Gurgaon, Bengaluru, Hyderabad, Goa and Kolkata do not follow one national retail rule for liquor shops, dry days or online ordering.</p>

<p>The safest BevOry workflow is simple: check the state excise source, confirm the shop status, then compare the exact bottle, pack size and city price.</p>

<h2>What To Check First</h2>
<ul>
  <li><strong>State rule:</strong> alcohol retail is controlled by state excise departments.</li>
  <li><strong>Dry day:</strong> shops and bars may close even if the date is not a normal weekly closure.</li>
  <li><strong>Licence type:</strong> a bar, hotel, retail shop and wine shop can have different permissions.</li>
  <li><strong>Exact city:</strong> Gurgaon and Delhi sit close together but follow different excise frameworks.</li>
  <li><strong>Pack size:</strong> compare 180 ml, 375 ml, 750 ml and 1 litre prices separately.</li>
</ul>

<h2>City Examples</h2>
<p>Delhi users should check Delhi Excise notices and dry-day guidance. Mumbai users should verify Maharashtra State Excise information. Gurgaon buyers should use Haryana excise policy sources, while Hyderabad buyers should check Telangana Prohibition and Excise information.</p>

<h2>Searches That Need Local Verification</h2>
<ul>
  <li>is wine shop open today in Delhi</li>
  <li>alcohol delivery in Mumbai</li>
  <li>liquor shop open in Gurgaon today</li>
  <li>beer price in Bengaluru</li>
  <li>dry day in Hyderabad today</li>
</ul>

<h2>Price Checks</h2>
<p>Do not compare a restaurant cocktail, delivery quote and retail bottle as if they are the same product. Search by exact product name, size and city on BevOry before deciding.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://excise.delhi.gov.in/excise/frequently-asked-questions-1" target="_blank" rel="noopener noreferrer">Delhi Excise FAQ</a></li>
  <li><a href="https://exciseservices.mahaonline.gov.in/" target="_blank" rel="noopener noreferrer">Maharashtra State Excise portal</a></li>
  <li><a href="https://haryanatax.gov.in/LoadPartial/Excise%20Policy" target="_blank" rel="noopener noreferrer">Haryana Tax Excise Policy page</a></li>
  <li><a href="https://www.excise.telangana.gov.in/Service_Chart" target="_blank" rel="noopener noreferrer">Telangana Prohibition and Excise service chart</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>For alcohol delivery, takeaway or shop visits in India, check the city rule before the price.</strong> Once the purchase route is legal, compare exact bottle prices on BevOry.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is informational. Follow legal drinking age, dry-day, possession and transport rules in your state.</p>
`.trim(),
  },
  {
    id: "guide-cocktail-party-at-home-india-vodka-gin-whisky-rtd-2026",
    title: "Cocktail Party at Home in India: Vodka, Gin, Whisky and RTD Guide",
    slug: "cocktail-party-at-home-india-vodka-gin-whisky-rtd-2026",
    excerpt:
      "A home cocktail party guide for Indian cities, with simple vodka, gin, whisky and RTD serves, food pairings, bottle-size planning and price checks.",
    cover_emoji: "cocktail",
    category: "Guides",
    tags: ["cocktail party India", "vodka price", "gin price", "whisky highball", "RTD drinks", "party drinks"],
    meta_title: "Home Cocktail Party India Guide | BevOry",
    meta_description:
      "Plan a home cocktail party with vodka, gin, whisky and RTDs. Compare bottle sizes and city prices on BevOry.",
    published_at: "2026-10-07T11:10:00.000+05:30",
    selection_note:
      "Picked as an educational post because party-drink searches combine high-intent price checks with serving, mixer and food-pairing needs.",
    source_links: [
      "https://distilledspirits.org/news/california-governor-signs-bill-extending-cocktails-to-go-until-2029/",
      "https://www.wswa.org/news/wswa-annual-membership-forum-equips-wine-and-spirits-wholesaler-leaders-navigate-market-policy",
      "https://www.beveragedaily.com/Article/2026/09/28/suntory-unveils-uk-fractional-format-strategy-with-jim-beam-35cl-launch/",
    ],
    content: String.raw`
<p><strong>A good home cocktail party in India starts with simple serves, enough ice, clear mixers and city-level bottle prices.</strong> Vodka, gin, whisky highballs and RTDs cover most guests without needing professional bar gear.</p>

<p>Global trade signals point in the same direction: smaller formats, convenience channels and occasion-led drinking are getting more attention from major drinks companies. For a home buyer, the practical job is to match bottle, size, mixer and food.</p>

<h2>Four Easy Drink Lanes</h2>
<ul>
  <li><strong>Vodka soda:</strong> vodka, soda, ice and lime in a highball glass.</li>
  <li><strong>Gin and tonic:</strong> gin, tonic water, ice and lime, cucumber or orange peel.</li>
  <li><strong>Whisky highball:</strong> blended whisky or bourbon with chilled soda and a lemon twist.</li>
  <li><strong>RTDs:</strong> ready-to-drink cans or bottles served cold for guests who do not want mixed drinks.</li>
</ul>

<h2>Food Pairings</h2>
<p>Serve vodka soda with tandoori prawns, cucumber chaat and chilli paneer. Gin and tonic works with rava-fried fish, malai paneer tikka and herbed fries. Whisky highballs pair with chicken seekh, masala peanuts, smoked cheese and grilled mushrooms.</p>

<h2>Buying Checklist</h2>
<ul>
  <li>Check dry-day status before shopping.</li>
  <li>Compare exact city prices on BevOry.</li>
  <li>Match bottle size to guest count.</li>
  <li>Buy enough ice, soda, tonic and water.</li>
  <li>Keep non-alcohol options on the table.</li>
</ul>

<h2>How To Search</h2>
<p>Use searches like "vodka price in Mumbai", "gin price in Delhi", "whisky price in Gurgaon 750 ml" or "RTD drinks price in Bengaluru". Exact city and pack size matter more than broad national estimates.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://distilledspirits.org/news/california-governor-signs-bill-extending-cocktails-to-go-until-2029/" target="_blank" rel="noopener noreferrer">DISCUS: cocktails-to-go convenience trend</a></li>
  <li><a href="https://www.wswa.org/news/wswa-annual-membership-forum-equips-wine-and-spirits-wholesaler-leaders-navigate-market-policy" target="_blank" rel="noopener noreferrer">WSWA: smaller-format and on-premise/off-premise market context</a></li>
  <li><a href="https://www.beveragedaily.com/Article/2026/09/28/suntory-unveils-uk-fractional-format-strategy-with-jim-beam-35cl-launch/" target="_blank" rel="noopener noreferrer">BeverageDaily: smaller spirits format trend</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>Keep home cocktails simple and compare prices locally.</strong> BevOry helps you check the exact bottle, size and city before the party starts.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is for adults. Follow local law, serve water and food, and arrange safe transport for guests.</p>
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
