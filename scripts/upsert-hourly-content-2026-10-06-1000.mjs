import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const now = new Date().toISOString();

const posts = [
  {
    id: "news-godawan-stop-motion-conservation-world-wildlife-week-2026",
    title: "Godawan Turns Conservation Into Whisky Storytelling For World Wildlife Week",
    slug: "godawan-stop-motion-conservation-world-wildlife-week-2026",
    excerpt:
      "Godawan has released a handcrafted stop-motion film around the Great Indian Bustard, connecting Indian single malt, Rajasthan craft and conservation.",
    cover_emoji: "news",
    category: "News",
    tags: ["Godawan", "Diageo India", "Indian single malt", "World Wildlife Week", "Great Indian Bustard", "Rajasthan"],
    meta_title: "Godawan Conservation Film News | BevOry",
    meta_description:
      "Godawan's World Wildlife Week film links Indian single malt with Rajasthan craft, Jaipur Blue Pottery and Great Indian Bustard conservation.",
    published_at: "2026-10-06T10:00:00.000+05:30",
    selection_note:
      "Picked as the news item because it is a fresh Indian whisky brand story from World Wildlife Week with strong relevance to premium Indian single malt and sustainability coverage.",
    source_links: [
      "https://www.diageoindia.com/en/news-and-media/press-releases/2026/in-a-culture-obsessed-with-speed-the-godawan-a-handcrafted-stop-motion",
      "https://campaignbriefasia.com/2026/10/06/22feet-and-mccann-india-bring-godawans-great-indian-bustard-story-to-life-by-hand/",
      "https://thewhiskeywash.com/whiskey-news/godawan-launches-stop-motion-film-for-great-indian-bustard-conservation/",
    ],
    content: String.raw`
<p><strong>Godawan is using World Wildlife Week to put conservation, Rajasthan craft and Indian single malt into one brand story.</strong> The Diageo India whisky brand has released <em>The Godawan</em>, a handcrafted stop-motion short film about the Great Indian Bustard, the endangered bird that gives the brand its name.</p>

<p>The film matters because it shows how premium Indian spirits are moving beyond label design and awards. Godawan is building memory around place: Rajasthan, Jaipur Blue Pottery, folk music, desert wildlife and the slow craft behind a luxury bottle.</p>

<h2>What Has Launched</h2>
<ul>
  <li><strong>The film:</strong> a handcrafted stop-motion, 2D animation and live-action piece centred on the Great Indian Bustard.</li>
  <li><strong>The craft system:</strong> the visual world uses more than 5,200 ceramic pieces inspired by Jaipur Blue Pottery.</li>
  <li><strong>The makers:</strong> Campaign Brief Asia reports that 22feet, McCann India and Studio Eeksaurus worked on the film.</li>
  <li><strong>The sound:</strong> the score draws from Rajasthani folk traditions and regional instruments such as the Ravanahatha and Morchang.</li>
</ul>

<h2>Why This Is Bigger Than One Campaign</h2>
<p>Indian single malt is already gaining global attention through brands such as Godawan, Indri, Amrut, Paul John and Rampur. The next stage is sharper differentiation. A buyer comparing premium whisky now wants to know the distillery, cask story, region, liquid style and why the brand feels rooted in a real place.</p>

<h2>Godawan's Conservation Thread</h2>
<p>Campaign Brief Asia notes that Godawan 100 marked the bird population milestone in 2023, while Godawan 173: The Collector's Edition connected the next milestone to Jaipur Blue Pottery-inspired bottles. That makes the new film part of a continuing brand platform rather than a standalone advertisement.</p>

<h2>What BevOry Users Should Watch</h2>
<p>For shoppers, the useful comparison is still exact bottle first: Godawan expression, pack size, city, current price and tasting style. The conservation story can explain why the brand is memorable, but the product page should still separate the liquid profile from the campaign.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.diageoindia.com/en/news-and-media/press-releases/2026/in-a-culture-obsessed-with-speed-the-godawan-a-handcrafted-stop-motion" target="_blank" rel="noopener noreferrer">Diageo India: Godawan World Wildlife Week film announcement</a></li>
  <li><a href="https://campaignbriefasia.com/2026/10/06/22feet-and-mccann-india-bring-godawans-great-indian-bustard-story-to-life-by-hand/" target="_blank" rel="noopener noreferrer">Campaign Brief Asia: Godawan Great Indian Bustard story</a></li>
  <li><a href="https://thewhiskeywash.com/whiskey-news/godawan-launches-stop-motion-film-for-great-indian-bustard-conservation/" target="_blank" rel="noopener noreferrer">The Whiskey Wash: Godawan conservation film coverage</a></li>
</ul>

<h2>Responsible Drinking Note</h2>
<p>This article covers brand and industry news. Buy only from licensed sellers, follow local law and never drink and drive.</p>
`.trim(),
  },
  {
    id: "news-indri-diwali-collectors-edition-2026-ruby-port-cask",
    title: "Indri Diwali Collector's Edition 2026 Arrives As A Ruby Port Cask Release",
    slug: "indri-diwali-collectors-edition-2026-ruby-port-cask",
    excerpt:
      "Indri's 2026 Diwali Collector's Edition is a limited Indian single malt matured in Ruby Port casks, with UK specialist retail availability reported.",
    cover_emoji: "news",
    category: "News",
    tags: ["Indri", "Piccadily", "Indian single malt", "Diwali Collector's Edition", "Ruby Port cask", "limited whisky"],
    meta_title: "Indri Diwali 2026 Ruby Port Cask | BevOry",
    meta_description:
      "Indri Diwali Collector's Edition 2026 is reported as a Ruby Port cask Indian single malt release. See key facts and price-watch notes.",
    published_at: "2026-10-06T10:05:00.000+05:30",
    selection_note:
      "Picked as the second news item because it is a time-sensitive Indian single malt launch with collector, gifting, Diwali and price-search demand.",
    source_links: [
      "https://thewhiskeywash.com/whiskey-news/indri-unveils-diwali-collectors-edition-2026-matured-in-ruby-port-casks/",
      "https://drinks-intel.com/spirits/this-weeks-new-spirits-launches-5-9-october-2026/",
      "https://www.indri.in/faq",
      "https://piccadily.com/",
    ],
    content: String.raw`
<p><strong>Indri's Diwali Collector's Edition 2026 has been reported as a Ruby Port cask Indian single malt release for the UK market.</strong> The Whiskey Wash says the cask-strength expression is limited to 180 numbered bottles, while Global Drinks Intel lists it as a Haryana single malt matured in ex-Ruby Port casks from Portugal.</p>

<p>This is a useful signal for India's premium whisky category. Limited festive releases are becoming more technical, with cask source, country of release, bottle count and ABV doing more work than broad festive packaging alone.</p>

<h2>Key Reported Details</h2>
<ul>
  <li><strong>Producer:</strong> Piccadily Agro Industries, the company behind Indri.</li>
  <li><strong>Category:</strong> Indian single malt whisky from Haryana.</li>
  <li><strong>Cask direction:</strong> Ruby Port cask maturation from Portugal, as reported by The Whiskey Wash and Global Drinks Intel.</li>
  <li><strong>Release scale:</strong> The Whiskey Wash reports 180 numbered bottles.</li>
  <li><strong>UK pricing signal:</strong> reports cite a UK specialist retail price around GBP 200, equal to roughly USD 265 at the article's reference point.</li>
</ul>

<h2>Why Ruby Port Casks Matter</h2>
<p>Ruby Port casks can push a whisky toward red-fruit depth, darker berry notes, wine sweetness, spice and tannic structure. That does not mean every pour will taste identical; the final character still depends on the base malt, Indian maturation climate, cask history, strength and bottling choices.</p>

<h2>What Makes Indri Relevant</h2>
<p>Indri's own FAQ describes the brand as using six-row Indian barley, traditional Scottish-style copper pot stills and cask styles including ex-bourbon, French wine and PX sherry for its core triple-cask identity. The Diwali Collector's Edition series gives the brand room to test more focused cask stories for collectors.</p>

<h2>India Price Watch</h2>
<p>A UK launch price should not be copied as an Indian MRP. Import channel, allocation, duty, state excise and local availability decide the city-level price. For Indian shoppers, the practical step is to check the exact expression name, bottle size and city when listings appear.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://thewhiskeywash.com/whiskey-news/indri-unveils-diwali-collectors-edition-2026-matured-in-ruby-port-casks/" target="_blank" rel="noopener noreferrer">The Whiskey Wash: Indri Diwali Collector's Edition 2026</a></li>
  <li><a href="https://drinks-intel.com/spirits/this-weeks-new-spirits-launches-5-9-october-2026/" target="_blank" rel="noopener noreferrer">Global Drinks Intel: new spirits launches, 5-9 October 2026</a></li>
  <li><a href="https://www.indri.in/faq" target="_blank" rel="noopener noreferrer">Indri official FAQ: production and cask information</a></li>
  <li><a href="https://piccadily.com/" target="_blank" rel="noopener noreferrer">Piccadily official site</a></li>
</ul>

<h2>Responsible Drinking Note</h2>
<p>This article covers a product launch and market context. Follow local law, buy only from licensed sellers and never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-delhi-dry-days-october-november-2026-diwali-guru-nanak",
    title: "Delhi Dry Days October-November 2026: Diwali and Guru Nanak Jayanti Dates",
    slug: "delhi-dry-days-october-november-2026-diwali-guru-nanak",
    excerpt:
      "Delhi has dry-day restrictions around Gandhi Jayanti, Diwali and Guru Nanak Jayanti. Check the dates before visiting wine shops, bars or thekas.",
    cover_emoji: "calendar",
    category: "Guides",
    tags: ["Delhi dry days", "Diwali 2026", "Guru Nanak Jayanti", "wine shops Delhi", "liquor shop open today"],
    meta_title: "Delhi Dry Days Oct-Nov 2026 | BevOry",
    meta_description:
      "Check Delhi dry days for Oct-Nov 2026, including Diwali and Guru Nanak Jayanti, before visiting wine shops or bars.",
    published_at: "2026-10-06T10:10:00.000+05:30",
    selection_note:
      "Picked as the educational post because Delhi dry-day and liquor-shop-open searches spike around festival dates and carry strong local intent.",
    source_links: [
      "https://www.jagran.com/delhi/new-delhi-city-delhi-dry-days-2026-liquor-ban-on-gandhi-jayanti-diwali-guru-nanak-jayanti-40392315.html",
      "https://www.drikpanchang.com/festivals/lakshmipuja/festivals-lakshmipuja-timings.html?geoname-id=1261481",
      "https://excise.delhi.gov.in/excise/frequently-asked-questions-1",
      "https://excise.delhi.gov.in/sites/default/files/Excise/circulars-orders/drydayorder_2026.pdf",
    ],
    content: String.raw`
<p><strong>Delhi shoppers should treat 8 November 2026, Diwali, and 24 November 2026, Guru Nanak Jayanti, as dry-day dates unless a newer excise order changes the position.</strong> Jagran reported that Delhi's excise department declared Gandhi Jayanti, Diwali and Guru Nanak Jayanti as dry days for the October-November 2026 window.</p>

<p>For BevOry users, the practical question is simple: do not depend on normal shop timings on a dry day. A liquor shop, wine shop, theka, bar, club or restaurant may show routine hours online, but excise restrictions can still stop sale and service.</p>

<h2>Important Delhi Dates</h2>
<ul>
  <li><strong>2 October 2026:</strong> Gandhi Jayanti dry day.</li>
  <li><strong>8 November 2026:</strong> Diwali dry day. Drik Panchang lists Lakshmi Puja in New Delhi on Sunday, 8 November 2026.</li>
  <li><strong>24 November 2026:</strong> Guru Nanak Jayanti dry day.</li>
</ul>

<h2>What Closes On A Dry Day?</h2>
<p>Dry-day orders apply through licence categories. Jagran's report says retail, wholesale, hotel, restaurant, bar, club and other licence holders were covered by the Delhi order, while resident guests in hotels with eligible L-15 and L-15F licences are treated differently. Users should still confirm directly with the venue before making plans.</p>

<h2>Are Wine Shops Open On Diwali In Delhi?</h2>
<p><strong>No, plan for Delhi wine shops and retail liquor vends to be closed on Diwali 2026.</strong> The date is Sunday, 8 November 2026, and the current festival dry-day reporting places it under Delhi's Rule 52 dry-day framework.</p>

<h2>Why Google Maps Hours Can Be Wrong</h2>
<ul>
  <li><strong>Dry days override routine listings.</strong> A shop can appear open online while sale is restricted by excise order.</li>
  <li><strong>Festival orders are date-specific.</strong> A normal Sunday timing does not automatically apply on Diwali.</li>
  <li><strong>Licence type matters.</strong> Retail vends, bars, clubs and hotels may face different conditions.</li>
</ul>

<h2>How To Plan Safely</h2>
<p>Check the date, the latest Delhi Excise update and the exact city before travelling. Do not buy from unofficial sellers on a dry day; counterfeit risk and legal risk both rise when normal licensed sale is closed.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://www.jagran.com/delhi/new-delhi-city-delhi-dry-days-2026-liquor-ban-on-gandhi-jayanti-diwali-guru-nanak-jayanti-40392315.html" target="_blank" rel="noopener noreferrer">Jagran: Delhi dry days for Gandhi Jayanti, Diwali and Guru Nanak Jayanti</a></li>
  <li><a href="https://www.drikpanchang.com/festivals/lakshmipuja/festivals-lakshmipuja-timings.html?geoname-id=1261481" target="_blank" rel="noopener noreferrer">Drik Panchang: Diwali 2026 date for New Delhi</a></li>
  <li><a href="https://excise.delhi.gov.in/excise/frequently-asked-questions-1" target="_blank" rel="noopener noreferrer">Delhi Excise Department FAQ</a></li>
  <li><a href="https://excise.delhi.gov.in/sites/default/files/Excise/circulars-orders/drydayorder_2026.pdf" target="_blank" rel="noopener noreferrer">Delhi Excise dry-day order reference</a></li>
</ul>

<h2>Bottom Line</h2>
<p><strong>For Delhi in October-November 2026, check 8 November and 24 November before visiting a liquor shop or bar.</strong> On listed dry days, city-level price comparison is useful for planning, but legal sale may be suspended for the day.</p>

<h2>Responsible Drinking Note</h2>
<p>This guide is informational. Follow Delhi's legal drinking age, dry-day, possession and transport rules, and buy only from licensed sellers.</p>
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
