import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const now = new Date().toISOString();

const posts = [
  {
    id: "news-hibiki-japanese-harmony-chiso-limited-edition-2026",
    title: "Hibiki Japanese Harmony 2026 Chiso Bottle Turns Whisky Into Luxury Gifting",
    slug: "hibiki-japanese-harmony-chiso-limited-edition-2026",
    excerpt:
      "House of Suntory has released a Hibiki Japanese Harmony 2026 limited-edition bottle with Kyoto kimono house Chiso, aimed at collectors and luxury gifting.",
    cover_emoji: "news",
    category: "News",
    tags: ["Hibiki", "Japanese whisky", "House of Suntory", "Chiso", "luxury spirits", "whisky gifting"],
    meta_title: "Hibiki Chiso 2026 Whisky News | BevOry",
    meta_description:
      "Hibiki Japanese Harmony 2026 Chiso edition blends Japanese whisky, Kyoto design and gifting demand. Read BevOry's market note.",
    published_at: "2026-10-06T13:00:00.000+05:30",
    selection_note:
      "Picked as the news item because the Hibiki Chiso limited edition is a current official luxury whisky release with strong gifting and collector-search relevance.",
    source_links: [
      "https://www.suntoryglobalspirits.com/news/house-suntory-unveils-hibikir-japanese-harmony-limited-edition-designed-collaboration",
      "https://house.suntory.com/stories/hibiki-japanese-harmony-chiso-limited-edition",
      "https://house.suntory.com/hibiki-whisky/hibiki-japanese-harmony",
      "https://www.chiso.co.jp/en/about/news/",
    ],
    content: String.raw`
<p><strong>House of Suntory has released Hibiki Japanese Harmony 2026 Limited-Edition, Chiso Collaboration, a collectible bottle created with the Kyoto kimono house Chiso.</strong> The official announcement was published on 1 October 2026 and positions the release around Japanese whisky, seasonal design and luxury gifting.</p>

<p>Chiso was founded in Kyoto in 1555 and is known for Kyo-Yuzen kimono dyeing. For Hibiki, the collaboration matters because the bottle is not being sold only as liquid; it is being sold as a design object tied to Japanese craft.</p>

<h2>What The Release Includes</h2>
<ul>
  <li><strong>Product:</strong> Hibiki Japanese Harmony 2026 Limited-Edition, Chiso Collaboration.</li>
  <li><strong>Producer:</strong> The House of Suntory, part of Suntory Global Spirits.</li>
  <li><strong>Design partner:</strong> Chiso, a Kyoto kimono house founded in 1555.</li>
  <li><strong>Bottle cue:</strong> Hibiki's 24-faceted bottle, linked by the brand to Japan's 24 traditional micro-seasons.</li>
  <li><strong>ABV:</strong> 43%, according to Suntory Global Spirits.</li>
  <li><strong>Global pricing:</strong> Suntory lists suggested retail pricing of USD 135 to USD 150, depending on market.</li>
</ul>

<h2>Why It Matters For India</h2>
<p>Japanese whisky has strong gifting value in Indian metros, especially around Diwali, weddings and corporate gifting. Buyers searching for Hibiki price in Mumbai, Delhi, Gurgaon or Bengaluru should still compare the exact bottle, importer label and city-level price before buying.</p>

<h2>Tasting And Serve</h2>
<p>Suntory's Hibiki Japanese Harmony page describes notes of honey-like sweetness, candied orange peel, white chocolate, rose, lychee, rosemary, mature wood and a Mizunara oak hint on the finish. Serve it neat in a tulip glass or over a large hand-carved ice ball; avoid sweet mixers for a collector-style bottle.</p>

<h2>Food Pairings</h2>
<p>Pair Hibiki Japanese Harmony with yakitori, tandoori prawns, malai paneer tikka, miso-glazed mushrooms, salted almonds or white chocolate. The lighter floral and orchard-fruit profile works best with food that is precise rather than very oily.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.suntoryglobalspirits.com/news/house-suntory-unveils-hibikir-japanese-harmony-limited-edition-designed-collaboration" target="_blank" rel="noopener noreferrer">Suntory Global Spirits official press release</a></li>
  <li><a href="https://house.suntory.com/stories/hibiki-japanese-harmony-chiso-limited-edition" target="_blank" rel="noopener noreferrer">House of Suntory Hibiki x Chiso story</a></li>
  <li><a href="https://house.suntory.com/hibiki-whisky/hibiki-japanese-harmony" target="_blank" rel="noopener noreferrer">House of Suntory Hibiki Japanese Harmony product page</a></li>
  <li><a href="https://www.chiso.co.jp/en/about/news/" target="_blank" rel="noopener noreferrer">Chiso official news page</a></li>
</ul>

<h2>Responsible Drinking Note</h2>
<p>This article is for adult readers. Buy only from licensed sellers and follow local law on legal drinking age, dry days and transport.</p>
`.trim(),
  },
  {
    id: "guide-japanese-whisky-price-india-hibiki-yamazaki-hakushu-2026",
    title: "Japanese Whisky in India 2026: Price Checks, Labels and Serving Guide",
    slug: "japanese-whisky-price-india-hibiki-yamazaki-hakushu-2026",
    excerpt:
      "A practical guide to Japanese whisky in India, including Hibiki, Yamazaki and Hakushu price checks, label standards, tasting cues and food pairings.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["Japanese whisky India", "Hibiki price", "Yamazaki price", "Hakushu price", "whisky guide", "JSLMA"],
    meta_title: "Japanese Whisky India Price Guide | BevOry",
    meta_description:
      "Compare Japanese whisky in India by label, bottle size, city price, tasting profile and serve. Check city-level prices on BevOry.",
    published_at: "2026-10-06T13:05:00.000+05:30",
    selection_note:
      "Picked as an educational post because Japanese whisky searches mix brand discovery, price intent and authenticity questions for Indian metro buyers.",
    source_links: [
      "https://house.suntory.com/hibiki-whisky/hibiki-japanese-harmony",
      "https://www.yoshu.or.jp/files/libs/552/202303291555304944.pdf",
      "https://www.suntoryglobalspirits.com/news/house-suntory-unveils-hibikir-japanese-harmony-limited-edition-designed-collaboration",
      "https://www.nikka.com/en/brands/labelingstandards/",
    ],
    content: String.raw`
<p><strong>Japanese whisky in India should be compared by exact bottle, label wording, importer details, size and city price.</strong> Hibiki, Yamazaki, Hakushu, Nikka and other Japanese whisky names can sit across very different price bands and styles.</p>

<p>The key point for buyers is simple: "Japanese-style" and "Japanese whisky" are not the same buying signal. Look at the label, origin statement, importer sticker and bottle size before comparing prices.</p>

<h2>What Counts As Japanese Whisky</h2>
<p>The Japan Spirits &amp; Liqueurs Makers Association published standards for labeling Japanese whisky. The standards cover grain ingredients, Japanese water, saccharification, fermentation, distillation, maturation in wooden casks in Japan, bottling in Japan and minimum alcoholic strength. These standards help consumers separate fully Japanese whisky from products that only use Japanese design language.</p>

<h2>Popular Japanese Whisky Styles</h2>
<ul>
  <li><strong>Hibiki:</strong> blended Japanese whisky known for polished texture, floral notes and gentle oak.</li>
  <li><strong>Yamazaki:</strong> Japanese single malt from Suntory's Yamazaki distillery, often associated with fruit, oak and sherry-cask depth depending on expression.</li>
  <li><strong>Hakushu:</strong> Japanese single malt from Suntory's forested Hakushu distillery, typically lighter, herbal and fresh.</li>
  <li><strong>Nikka:</strong> a major Japanese whisky producer with both blended and malt-led bottlings across its portfolio.</li>
</ul>

<h2>How To Check Price In India</h2>
<p>Search by exact expression and city: "Hibiki Japanese Harmony price in Delhi", "Yamazaki 12 price in Mumbai" or "Hakushu whisky price in Gurgaon". Compare 700 ml, 750 ml and 1 litre bottles separately, and do not treat duty-free prices as Indian retail MRPs.</p>

<h2>Serving Guide</h2>
<p>Serve Hibiki and Yamazaki neat in a tulip glass at room temperature, or over one large ice block when the bottle is not rare. Lighter Japanese blends can work in a highball with chilled soda, but collector bottles deserve a small neat pour first.</p>

<h2>Food Pairings</h2>
<p>Pair floral Japanese whisky with sushi, yakitori, malai paneer tikka, tandoori prawns, roast chicken, salted almonds or white chocolate. Sherried or older expressions can handle galouti kebabs, mutton seekh and dark chocolate.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://house.suntory.com/hibiki-whisky/hibiki-japanese-harmony" target="_blank" rel="noopener noreferrer">House of Suntory Hibiki Japanese Harmony product page</a></li>
  <li><a href="https://www.yoshu.or.jp/files/libs/552/202303291555304944.pdf" target="_blank" rel="noopener noreferrer">JSLMA standards for labeling Japanese whisky PDF</a></li>
  <li><a href="https://www.suntoryglobalspirits.com/news/house-suntory-unveils-hibikir-japanese-harmony-limited-edition-designed-collaboration" target="_blank" rel="noopener noreferrer">Suntory Global Spirits Hibiki 2026 release note</a></li>
  <li><a href="https://www.nikka.com/en/brands/labelingstandards/" target="_blank" rel="noopener noreferrer">Nikka explanation of Japanese whisky labeling standards</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>For Japanese whisky in India, the smartest comparison is exact expression, label status, importer route, bottle size and city price.</strong> BevOry can help narrow that search by city instead of relying on broad national estimates.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is informational. Buy from licensed sellers, drink moderately and follow the rules of your state or union territory.</p>
`.trim(),
  },
  {
    id: "guide-diwali-2026-dry-day-delhi-mumbai-bengaluru-hyderabad",
    title: "Diwali 2026 Dry Day Guide: Delhi, Mumbai, Bengaluru and Hyderabad",
    slug: "diwali-2026-dry-day-delhi-mumbai-bengaluru-hyderabad",
    excerpt:
      "A city-wise Diwali 2026 dry-day planning guide for liquor-shop buyers in Delhi, Mumbai, Bengaluru and Hyderabad, with official-source checks.",
    cover_emoji: "calendar",
    category: "Guides",
    tags: ["Diwali dry day 2026", "liquor shop open", "Delhi dry day", "Mumbai dry day", "Bengaluru dry day", "Hyderabad dry day"],
    meta_title: "Diwali 2026 Dry Day India Guide | BevOry",
    meta_description:
      "Check Diwali 2026 dry-day planning for Delhi, Mumbai, Bengaluru and Hyderabad. Verify city liquor shop status on BevOry.",
    published_at: "2026-10-06T13:10:00.000+05:30",
    selection_note:
      "Picked as an educational post because Diwali dry-day and liquor-shop-open queries spike before the festival across Indian metro cities.",
    source_links: [
      "https://www.indiapost.gov.in/holidays-list",
      "https://excise.delhi.gov.in/excise/frequently-asked-questions-1",
      "https://exciseservices.mahaonline.gov.in/",
      "https://tumkur.nic.in/en/excise/",
      "https://www.excise.telangana.gov.in/Service_Chart",
    ],
    content: String.raw`
<p><strong>Diwali 2026 falls on Sunday, 8 November 2026, and liquor-shop buyers should check the local excise order for their city before planning a purchase.</strong> Dry-day rules are set by states and union territories, so Delhi, Mumbai, Bengaluru and Hyderabad should be checked separately.</p>

<p>India Post's official holiday list shows Diwali on 8 November 2026. That date is useful for planning, but the liquor-shop closure rule still comes from the relevant excise department.</p>

<h2>Delhi</h2>
<p>The Delhi Excise FAQ lists Diwali among dry days and explains that retail vends remain closed on dry days. Delhi buyers should check the latest Excise Department order close to the festival because the department notifies dry days for the excise year.</p>

<h2>Mumbai And Maharashtra</h2>
<p>Mumbai follows Maharashtra State Excise rules. The safest check is the Maharashtra State Excise portal, the local collector or police notification, and the shop itself before travelling. Do not rely on a Delhi dry-day list for Mumbai.</p>

<h2>Bengaluru And Karnataka</h2>
<p>Karnataka excise information published by district administration pages notes dry-day restrictions including Mahatma Gandhi's birthday and poll-related dates. Festival-specific closure directions can be issued locally, so Bengaluru buyers should verify the current city notification.</p>

<h2>Hyderabad And Telangana</h2>
<p>Telangana's excise service chart lists penalties for sale during dry days by retail shops and bars. For Hyderabad, check the Telangana Prohibition and Excise Department or local notice before the festival week.</p>

<h2>Quick Planning Checklist</h2>
<ul>
  <li>Confirm the exact date: Diwali 2026 is Sunday, 8 November 2026.</li>
  <li>Check the city-level excise notification, not just a national holiday list.</li>
  <li>Buy only from licensed sellers and follow possession limits.</li>
  <li>Compare prices by exact product, bottle size and city on BevOry.</li>
  <li>Do not carry alcohol across state borders unless local law permits it.</li>
</ul>

<h2>Searches BevOry Users Make Before Diwali</h2>
<ul>
  <li>is wine shop open on Diwali in Delhi</li>
  <li>Mumbai liquor shop open today</li>
  <li>Bengaluru dry day Diwali 2026</li>
  <li>Hyderabad wine shop timing Diwali</li>
  <li>whisky price in Gurgaon before Diwali</li>
</ul>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.indiapost.gov.in/holidays-list" target="_blank" rel="noopener noreferrer">India Post official 2026 holiday list</a></li>
  <li><a href="https://excise.delhi.gov.in/excise/frequently-asked-questions-1" target="_blank" rel="noopener noreferrer">Delhi Excise FAQ on dry days and retail vends</a></li>
  <li><a href="https://exciseservices.mahaonline.gov.in/" target="_blank" rel="noopener noreferrer">Maharashtra State Excise official portal</a></li>
  <li><a href="https://tumkur.nic.in/en/excise/" target="_blank" rel="noopener noreferrer">Karnataka district excise information page</a></li>
  <li><a href="https://www.excise.telangana.gov.in/Service_Chart" target="_blank" rel="noopener noreferrer">Telangana Prohibition and Excise service chart</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>Plan Diwali alcohol purchases by city, not by guesswork.</strong> Check the latest excise order, confirm the shop status and compare exact bottle prices on BevOry before travelling.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is informational. Follow legal drinking age, dry-day, possession and transport rules in your state.</p>
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
