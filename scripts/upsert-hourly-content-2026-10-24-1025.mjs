import "dotenv/config";
import { runContentCycle } from "./hourly-content-cycle.mjs";

const khoday = "https://thehouseofkhodays.com/peter-scot/";
const hpLabels = "https://www.hptax.gov.in/public/notifications/MRP%20IMFS%202023_24_compressed31032023220342.pdf";
const macroys = "https://macroys.in/discover-our-whiskey.html";
const macroysAbout = "https://www.macroys.in/about.html";

await runContentCycle([
  {
    id: "guide-peter-scot-premium-vs-black-single-malt-india-2026",
    title: "Peter Scot Premium vs Peter Scot Black: Check the Whisky Name",
    slug: "peter-scot-premium-vs-black-single-malt-india-2026",
    excerpt: "Peter Scot Premium Malt and Peter Scot Black Single Malt are different Khoday whiskies. Learn which label to check before comparing an Indian city price.",
    category: "Guides",
    tags: ["Peter Scot whisky", "Peter Scot Black", "Khoday whisky", "Indian single malt", "Bengaluru whisky"],
    meta_title: "Peter Scot Premium vs Black Whisky | BevOry",
    meta_description: "Peter Scot Premium Malt and Peter Scot Black Single Malt are different bottles. Check the exact expression and size before comparing Indian city prices.",
    selection_note: "BevOry Search Console's latest 28-day view showed 25 clicks and 1,042 impressions for 'peter scotch price'. A bottle-name explainer supports existing Peter Scot product listings without duplicating a city-price page.",
    source_links: [khoday, hpLabels],
    content: String.raw`
<p><strong>Peter Scot is an Indian whisky brand from Khoday India Limited, not a shorthand for Scotch whisky.</strong> The brand name can also point to different bottles. Peter Scot Premium Malt Whisky and Peter Scot Black Single Malt Whisky should not be treated as one product when comparing a shop price or a search result.</p>

<h2>What Is the Difference Between the Names?</h2>
<p><a href="${khoday}" target="_blank" rel="noopener noreferrer">The House of Khodays presents Peter Scot as a range</a> with more than one expression. Its current brand page uses descriptive names for expressions but does not publish a complete current price list or a side-by-side specification sheet. That is a reason to read the physical label, not to infer that every Peter Scot listing has the same liquid.</p>
<p>An older <a href="${hpLabels}" target="_blank" rel="noopener noreferrer">Himachal Pradesh excise label list</a> separately names Peter Scot Black Single Malt Whisky, Peter Scot Extra Premium Malt Whisky and Peter Scot Malt Whisky. The document is useful for distinguishing registered product names. Its historical price entries are not current shop prices and must not be carried into a 2026 purchase decision.</p>

<h2>Is Peter Scot Black the Same as the Standard Bottle?</h2>
<p>No. “Black Single Malt” is an expression name in the official label list, whereas the standard and Extra Premium malt labels have different names. A single-malt designation is a category claim for that Black expression; it cannot be applied to every Peter Scot bottle. Equally, the word “Scot” in the brand name does not establish Scottish origin. Check the producer and legal description printed on the exact current pack.</p>
<p>Do not assume that Black is simply a darker version of the standard bottle, or that a price difference measures quality. Colour, age, alcohol strength and maturation details need bottle-specific evidence. The sources above do not establish one universal ABV or age for all Peter Scot expressions, so a generic search answer cannot safely supply one.</p>

<h2>How Should You Compare Prices?</h2>
<p>Start with the full expression, volume and city. BevOry's <a href="https://bevory.in/bangalore/product/peter-scot-premium-malt-whisky/750ml" target="_blank" rel="noopener noreferrer">Bangalore Peter Scot Premium Malt 750ml page</a> is for that named bottle and pack. It should not be used as a Peter Scot Black price, or automatically transferred to Hyderabad, Kolkata or another state. If a result says “Peter Scotch price” without an expression, confirm what the seller actually means.</p>
<p>At a licensed retailer, inspect the front and back label, seal, bottle volume, current alcohol percentage and shelf price. Online listings can help you shortlist a bottle but do not guarantee stock. BevOry provides information and does not sell alcohol; follow local age, possession and dry-day rules.</p>
`.trim(),
  },
  {
    id: "guide-macroys-bourbon-sherry-extra-peat-whisky-india-2026",
    title: "MacRoys Whisky: Bourbon Cask, Sherry Finish or Extra Peat?",
    slug: "macroys-bourbon-sherry-extra-peat-whisky-india-2026",
    excerpt: "MacRoys has several blended Scotch expressions. Compare the producer's bourbon-cask, sherry-finished and Extra Peat descriptions before choosing an exact bottle in India.",
    category: "Guides",
    tags: ["MacRoys whisky", "MacRoys Sherry Finish", "MacRoys Extra Peat", "blended Scotch India", "whisky comparison"],
    meta_title: "MacRoys Whisky Expressions Compared | BevOry",
    meta_description: "Compare MacRoys Bourbon Barrel Matured, Sherry Finish and Extra Peat blended Scotch. Learn what changes and how to check the exact Indian bottle.",
    selection_note: "BevOry Search Console's latest 28-day view showed 22 clicks and 1,541 impressions for 'macroys whisky price'. The guide resolves expression ambiguity without inventing a national price.",
    source_links: [macroys, macroysAbout],
    content: String.raw`
<p><strong>“MacRoys whisky price” is not specific enough to identify one bottle.</strong> Angus Dundee's MacRoys range includes blended Scotch expressions with different cask and peat directions. The exact name matters because Bourbon Barrel Matured, Sherry Finish and Extra Peat are not interchangeable products, even though they share a brand.</p>

<h2>Who Makes MacRoys?</h2>
<p><a href="${macroysAbout}" target="_blank" rel="noopener noreferrer">MacRoys identifies Angus Dundee Distillers</a> as the brand owner, manufacturer and marketer. Its India site lists Angus Dundee India as the local business contact. That is different from an Indian blended whisky that merely contains some imported Scotch malt. The maker's <a href="${macroys}" target="_blank" rel="noopener noreferrer">range page describes MacRoys as blended Scotch whisky</a>; check the current bottle's legal description when purchasing.</p>

<h2>Which Style Fits the Flavour You Want?</h2>
<p>The Bourbon Barrel Matured expression is described by the producer as matured in once-used American oak bourbon barrels. Its published notes lean toward soft fruit, vanilla, toasted nuts and sweet spice. This is a producer description, not a guarantee that every person will taste the same notes.</p>
<p>Sherry Finish starts in an ex-bourbon cask and is then transferred to a cask that previously held sherry, according to MacRoys. The producer describes chocolate, dried-fruit and caramel-like notes. A “finish” refers to that later cask stage; it is not the same as claiming the whisky spent its entire maturation in a sherry cask.</p>
<p>Extra Peat is the smoke-led option. MacRoys says peat fires used to dry malted barley contribute its smoky character. If you prefer a gentler, sweeter description, compare the bourbon-cask expression first. If you actively want smoke, Extra Peat is the more relevant label to inspect. No label name alone proves that one bottle is stronger or older than another.</p>

<h2>How Do You Avoid a Wrong Price Comparison?</h2>
<p>Read the full expression and volume in millilitres, then verify the city. A price for MacRoys Sherry Finish 750ml is not the price for Extra Peat 180ml or a Special Reserve bottle. MacRoys' producer pages explain style but do not provide a current Indian city-by-city retail price list. Availability can vary by state and licensed retailer, so a result for another city cannot answer your local purchase question.</p>
<p>Before buying, check the current sealed bottle for its full name, origin, ABV, volume and any age statement. Confirm the current shelf price and stock locally. BevOry does not sell alcohol; buy only from licensed sellers and follow local age and dry-day rules.</p>
`.trim(),
  },
], "2026-10-24T04:55:24.107Z");
