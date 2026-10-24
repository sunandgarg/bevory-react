import "dotenv/config";
import { runContentCycle } from "./hourly-content-cycle.mjs";

const abd = "https://www.abdindia.com/news-and-media/2019/abd-expands-brand-portfolio-launches-sterling-reserve-range-of-premium-whiskies/";
const b7 = "https://www.abdindia.com/spirits/whisky-brands/sterling-reserve-blend-7/";
const pipers = "https://www.pernod-ricard.com/en/brands/100-pipers";

await runContentCycle([
  {
    id: "guide-sterling-reserve-b7-vs-b10-whisky-india-2026",
    title: "Sterling Reserve B7 vs B10: What Is the Difference?",
    slug: "sterling-reserve-b7-vs-b10-whisky-india-2026",
    excerpt: "Sterling Reserve B7 and B10 are separate Indian whisky blends. Compare the maker's descriptions, then check the full bottle name and size for a fair local price comparison.",
    category: "Guides",
    tags: ["Sterling Reserve B7", "Sterling Reserve B10", "Indian whisky", "whisky comparison", "Kolkata whisky"],
    meta_title: "Sterling Reserve B7 vs B10 Whisky | BevOry",
    meta_description: "Compare Sterling Reserve B7 and B10 using Allied Blenders and Distillers' descriptions. Check exact expression, size and city before comparing prices.",
    selection_note: "Search Console's recent 28-day view showed 15 clicks/5,597 impressions for B7 750ml Kolkata. Both B7 and B10 have exact Kolkata product URLs; this guide addresses the distinct expression-comparison intent.",
    source_links: [abd, b7],
    content: String.raw`
<p><strong>Sterling Reserve B7 and B10 are separate whisky blends from Allied Blenders and Distillers (ABD).</strong> The numbers are part of their product names. They should not be read as age statements: ABD does not describe B7 as seven years old or B10 as ten years old. When comparing listings, start with the complete expression name on the bottle.</p>

<h2>What does B7 contain?</h2>
<p>ABD's <a href="${b7}" target="_blank" rel="noopener noreferrer">Blend 7 product page</a> describes a mix of imported Scotch malts and selected Indian grain spirits. It says some of the malt was matured in charred ex-Bourbon oak barrels and presents seven tasting notes as part of the expression's positioning. This is an Indian blend with a Scotch malt component, not a bottle that should automatically be labelled Scotch whisky.</p>
<p>ABD lists several pack formats for B7 on that page, including 90ml, 180ml, 375ml and 750ml. A producer's size range does not guarantee that every format is registered or in stock in your city today. Use the exact size on the physical pack or current retailer listing before making a price comparison.</p>

<h2>How is B10 positioned?</h2>
<p>In its <a href="${abd}" target="_blank" rel="noopener noreferrer">Sterling Reserve launch announcement</a>, ABD names Blend 10 as a separate premium-segment variant and B7 as a semi-premium-segment variant. The company describes B10 as combining imported Scotch malts with Indian grain spirits, with malts from different bourbon-oak barrel origins. It also says the B10 blend is chill-filtered and refers to ten tasting notes.</p>
<p>Those seven and ten counts are the maker's tasting-note descriptions, not a universal way to measure flavour quality. A person may prefer either expression. The official release does not establish a single national shelf price, and the segment labels are ABD's marketing positions rather than a guarantee of the final price at any licensed shop.</p>

<h2>How can you compare the price fairly?</h2>
<p>Match city, exact expression and volume. BevOry has separate <a href="https://bevory.in/kolkata/product/sterling-reserve-b7-4867d71/750ml" target="_blank" rel="noopener noreferrer">B7 750ml</a> and <a href="https://bevory.in/kolkata/product/sterling-reserve-b10-fe18d23/750ml" target="_blank" rel="noopener noreferrer">B10 750ml</a> product pages for Kolkata. Those are the appropriate starting points for a size-matched Kolkata comparison. They are not evidence of today's stock or final shelf price. Ask a licensed retailer to confirm both bottles, their current price and the pack information.</p>
<p>A B7 premixed cola product is not interchangeable with the whisky bottle, even if a search result starts with “Sterling Reserve B7.” Inspect the bottle's legal description, seal, alcohol percentage and full name. BevOry does not sell alcohol; follow local age and dry-day rules and never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-100-pipers-deluxe-vs-12-years-india-2026",
    title: "100 Pipers Regular vs 12 Years: Read the Age Label",
    slug: "100-pipers-deluxe-vs-12-years-india-2026",
    excerpt: "The regular 100 Pipers blend and 100 Pipers 12 Years Old are different Scotch whiskies. See what the producer confirms and compare the same bottle size in the same city.",
    category: "Guides",
    tags: ["100 Pipers", "100 Pipers 12 Years", "Scotch whisky", "whisky comparison", "Kolkata whisky"],
    meta_title: "100 Pipers Regular vs 12 Years | BevOry",
    meta_description: "Compare regular 100 Pipers and 100 Pipers 12 Years Old using Pernod Ricard's product details. Check the age statement and local bottle label.",
    selection_note: "Search Console's recent 28-day view included demand for 100 Pipers city-and-bottle queries, while BevOry has exact Kolkata product pages for Deluxe and 12 Years. A label-focused comparison avoids duplicating their price pages.",
    source_links: [pipers],
    content: String.raw`
<p><strong>100 Pipers and 100 Pipers 12 Years Old are different Scotch whisky expressions.</strong> If a search result says only “100 Pipers price,” do not assume it refers to the 12-year bottle. Check the age statement on the label, the size in millilitres and the city before comparing figures.</p>

<h2>What does the producer say about regular 100 Pipers?</h2>
<p><a href="${pipers}" target="_blank" rel="noopener noreferrer">Pernod Ricard describes 100 Pipers</a> as a blended Scotch drawing on malt whiskies from Speyside. Its brand page calls the standard expression smooth and subtly smoky. The product information shown there lists Scotch whisky made from cereal and malt distillates with water and plain caramel colour. These are producer descriptions, not a promise that every taster will perceive the same notes.</p>
<p>Some Indian catalogues call the regular listing “Deluxe Blended Scotch.” That is a retail product title; use the full bottle label to establish exactly which expression a seller has. The standard name alone does not provide an age statement. A bottle lacking “12 Years Old” on the front should not be treated as the age-stated version simply because the labels share a brand.</p>

<h2>What does 12 Years Old mean here?</h2>
<p>The <a href="${pipers}" target="_blank" rel="noopener noreferrer">same official brand page</a> lists 100 Pipers 12 Years Old separately. “12 Years Old” is the age statement for that Scotch expression, not a measure of how long the bottle sat in a shop. The producer publishes separate product information for the regular and 12-year blends. That makes the 12-year name the key distinction to check when a listing abbreviates its title to “100 Pipers 12.”</p>
<p>An age statement is one product fact, not an objective quality score. It does not prove that every drinker will prefer the 12-year expression, or that its price will have the same relationship to the regular bottle in every Indian state. The current imported or locally sold label remains the best check for alcohol percentage and pack details.</p>

<h2>How do you compare listings in India?</h2>
<p>BevOry has separate Kolkata pages for <a href="https://bevory.in/kolkata/product/100-pipers-dlx-blended-scotch-e45aa96" target="_blank" rel="noopener noreferrer">100 Pipers Deluxe</a> and <a href="https://bevory.in/kolkata/product/100-pipers-12-years-bf0e341/750ml" target="_blank" rel="noopener noreferrer">100 Pipers 12 Years 750ml</a>. Open the exact size for each before comparing. A 375ml Deluxe entry and a 750ml 12-year entry are not directly comparable shelf prices. Kolkata listings also cannot establish a current price in Delhi, Noida or another city.</p>
<p>Check the seal, age wording, volume and local label at a licensed retailer, then ask for today's price and availability. BevOry provides information and does not sell alcohol. Follow local age and dry-day rules, and never drink and drive.</p>
`.trim(),
  },
], "2026-10-24T10:33:29.712Z");
