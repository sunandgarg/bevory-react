import "dotenv/config";
import { runContentCycle } from "./hourly-content-cycle.mjs";

const monk = "https://mohanmeakin.com/wp-content/uploads/2024/08/Annual-Report-FY-2023-24.pdf";
const black = "https://www.johnniewalker.com/en/our-whisky/core-range/johnnie-walker-black-label";
const blue = "https://www.johnniewalker.com/en/whisky-guide/types-of-whisky";

await runContentCycle([
  {
    id: "guide-old-monk-xxx-vs-gold-reserve-rum-india-2026",
    title: "Old Monk XXX vs Gold Reserve: Identify the Right Rum",
    slug: "old-monk-xxx-vs-gold-reserve-rum-india-2026",
    excerpt: "Old Monk XXX and Gold Reserve are distinct Mohan Meakin rum labels. Check the full name and bottle size before comparing listings in your city.",
    category: "Guides",
    tags: ["Old Monk", "Old Monk Gold Reserve", "Old Monk XXX", "Indian rum", "Kolkata rum"],
    meta_title: "Old Monk XXX vs Gold Reserve Rum | BevOry",
    meta_description: "Learn how Old Monk XXX and Gold Reserve differ as labelled products. Check exact name, bottle size and city before comparing local rum listings.",
    selection_note: "Search Console's recent 28-day view showed 13 clicks/2,868 impressions for 'Old Monk 180 Kolkata'. Existing Kolkata pages cover the exact 180ml classic and 750ml Gold Reserve bottles; this guide resolves expression and size confusion without another price page.",
    source_links: [monk],
    content: String.raw`
<p><strong>Old Monk XXX and Old Monk Gold Reserve are separate rum labels.</strong> A search for “Old Monk price” may return several different Mohan Meakin products, including XXX, Gold Reserve, Supreme, White and flavoured rums. The brand name alone is not enough to identify the bottle or compare its price.</p>

<h2>What does the maker list?</h2>
<p>Mohan Meakin's <a href="${monk}" target="_blank" rel="noopener noreferrer">published annual report</a> lists Old Monk Gold Reserve separately from its XXX-labelled rums, including Old Monk Deluxe XXX and Old Monk Matured XXX Select. It also lists Old Monk Supreme, White and other expressions. That product list confirms that a Gold Reserve listing should not be treated as simply another spelling of the familiar XXX bottle.</p>
<p>The report is a portfolio list, not a current retail catalogue. It does not establish today's local stock, a universal alcohol percentage, or a city price for either expression. It also does not support the assumption that every bottle bearing “Gold Reserve” has the same age claim in every market. Read the actual label if an age statement matters to you.</p>

<h2>What should you inspect on an Old Monk bottle?</h2>
<p>Start with the full front-label name. “Old Monk 180ml” in a search snippet can describe a size rather than an expression; “XXX” or “Gold Reserve” on the label gives more useful product identification. Check the back for legal product description, volume, alcohol percentage, bottler details and any age wording. Do not infer technical details from the bottle colour or a photograph of a different market's pack.</p>
<p>BevOry has a <a href="https://bevory.in/kolkata/product/old-monk-180ml-90c0ee8/180ml" target="_blank" rel="noopener noreferrer">Kolkata Old Monk 180ml listing</a> and a separate <a href="https://bevory.in/kolkata/product/old-monk-gold-reserve-e868190/750ml" target="_blank" rel="noopener noreferrer">Kolkata Gold Reserve 750ml listing</a>. These are different expressions or catalogue labels and different sizes. Their displayed figures should not be read as a like-for-like bottle-price comparison.</p>

<h2>How do you compare value without getting misled?</h2>
<p>Choose one city, then compare the same expression and same bottle size at licensed shops. If the volumes differ, you can divide each verified price by its millilitre count to understand the arithmetic, but that calculation does not make different rums taste the same or account for retailer promotions. An old online figure can also be out of date.</p>
<p>If a store offers “Old Monk Gold” without the full name, ask to see the sealed bottle before agreeing to the purchase. Confirm today's price and stock with that retailer. BevOry provides information only and does not sell alcohol. Alcohol is for adults who meet local law; observe dry days and never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-johnnie-walker-black-vs-blue-label-india-2026",
    title: "Johnnie Walker Black vs Blue Label: Key Differences",
    slug: "johnnie-walker-black-vs-blue-label-india-2026",
    excerpt: "Black Label carries a 12-year age statement; Blue Label is a separate rare-cask blend. Compare the exact bottle and city, not just the colour name.",
    category: "Guides",
    tags: ["Johnnie Walker Black Label", "Johnnie Walker Blue Label", "Scotch whisky", "whisky comparison", "Kolkata whisky"],
    meta_title: "Johnnie Walker Black vs Blue Label | BevOry",
    meta_description: "Compare Black and Blue Label using Johnnie Walker's descriptions. Learn what the Black age statement means before comparing local listings.",
    selection_note: "Search Console's recent 28-day view showed 12 clicks/4,272 impressions for Blue Label Kolkata. Separate Kolkata Black and Blue product URLs already exist; this guide addresses age and expression differences instead of repeating prices.",
    source_links: [black, blue],
    content: String.raw`
<p><strong>Johnnie Walker Black Label and Blue Label are different blended Scotch whiskies.</strong> Black Label is the familiar 12-year-old expression. Blue Label is a separate blend selected from rare Scotch whiskies, but its name is not an age statement. The colour on the label tells you which product to seek, not how many years it spent in a cask.</p>

<h2>What does Black Label's 12-year statement mean?</h2>
<p>Johnnie Walker's <a href="${black}" target="_blank" rel="noopener noreferrer">official Black Label page</a> says the blend uses single malt and grain whiskies aged in casks for at least 12 years. The maker describes sweet fruit, spice, vanilla and smoke. These tasting words are the brand's description, not a guarantee of how every person will experience a glass. The 12-year statement applies to the whisky, not to the time a sealed retail bottle has sat on a shelf.</p>
<p>Black Label is not the same as Double Black, Black Cask or a location-specific limited edition. A search result that shortens those names to “Johnnie Walker Black” could lead you to the wrong bottle. Read the full front label and confirm the pack volume before comparing prices.</p>

<h2>How is Blue Label described?</h2>
<p>In its <a href="${blue}" target="_blank" rel="noopener noreferrer">guide to the range</a>, Johnnie Walker describes Blue Label as a blend made by selecting rare Scotch whiskies for depth of flavour. The brand suggests serving it neat with cold water. That is a serving suggestion, not a rule or a claim that a more expensive bottle is necessarily more enjoyable to every drinker.</p>
<p>The standard Blue Label name does not itself say “12 years” or another age. Do not apply Black Label's age statement to Blue Label. Also distinguish standard Blue Label from an Indian Festive Blend or another limited edition: those are separately named products and may have different packaging or market availability.</p>

<h2>How do you compare them in Kolkata or another city?</h2>
<p>BevOry lists <a href="https://bevory.in/kolkata/product/johnnie-walker-black-label-6e8300f/750ml" target="_blank" rel="noopener noreferrer">Black Label 750ml in Kolkata</a> and <a href="https://bevory.in/kolkata/product/johnnie-walker-blue-label-cabf46d/750ml" target="_blank" rel="noopener noreferrer">Blue Label 750ml in Kolkata</a>. Those exact pages keep the city and bottle size aligned. They do not establish today's shelf price or stock, and they cannot be used as a current price for Delhi, Mumbai or another location.</p>
<p>Check the seal, imported label, expression name, volume and alcohol percentage on the bottle offered by a licensed retailer. Ask for the current local price before choosing. BevOry does not sell or deliver alcohol. Follow local age and dry-day rules, and never drink and drive.</p>
`.trim(),
  },
], "2026-10-24T11:33:30.360Z");
