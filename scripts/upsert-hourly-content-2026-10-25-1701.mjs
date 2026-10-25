import "dotenv/config";
import { runContentCycle } from "./hourly-content-cycle.mjs";

const snoskiFiling = "https://www.bseindia.com/xml-data/corpfiling/AttachHis/7f15c32d-45be-4c47-b396-9b1af0721639.pdf";
const snoskiPresentation = "https://nsearchives.nseindia.com/corporate/GLOBUSSPR_20052025130244_covering_Letter_with_Revised_Investor_Presentation.pdf";
const camikaraRange = "https://camikara.com/our-rum.html";
const camikaraFaq = "https://www.piccadily.com/faq";

await runContentCycle([
  {
    id: "guide-snoski-vodka-classic-vs-orange-india-2026",
    title: "Snoski Vodka: Classic or Orange? Check the Exact Bottle",
    slug: "snoski-vodka-classic-vs-orange-india-2026",
    excerpt: "Globus Spirits lists Snoski classic and flavoured vodkas separately. An 180ml Orange listing is not the price of plain Snoski vodka.",
    category: "Guides",
    tags: ["Snoski vodka", "Snoski Orange", "Globus Spirits", "Kolkata", "Noida", "vodka guide"],
    meta_title: "Snoski Vodka: Classic vs Orange | BevOry",
    meta_description: "Identify Snoski plain vodka and the Orange variant before comparing a Kolkata or Noida bottle listing. Match the flavour, city and size.",
    selection_note: "Search Console's 26 Sep-23 Oct 2026 report showed 5 clicks/6,732 impressions for 'snoski vodka', 5/4,119 for 'snoski vodka price' and 6/761 for 'snoski vodka 180ml price'. Existing BevOry plain 750ml and Orange 180ml product pages cover exact prices; this guide resolves the dangerous expression-and-size mismatch.",
    source_links: [snoskiFiling, snoskiPresentation],
    content: String.raw`
<p><strong>Snoski is a vodka range, not one interchangeable bottle.</strong> Globus Spirits identifies a plain Crafted Vodka and flavoured expressions, including Orange, Cranberry and Green Apple. If a search result says only “Snoski vodka price,” check the full flavour name and millilitre size before treating its number as relevant to the bottle you want.</p>

<h2>Who makes Snoski, and what variants are documented?</h2>
<p>A <a href="${snoskiFiling}" target="_blank" rel="noopener noreferrer">Globus Spirits exchange filing from June 2024</a> names Snoski Crafted Vodka alongside Green Apple, Cranberry and Orange variants. A later <a href="${snoskiPresentation}" target="_blank" rel="noopener noreferrer">company investor presentation</a> also shows classic and flavoured Snoski products. These producer documents establish the range, but they do not tell you which flavour or size is on a particular shop shelf today.</p>
<p>“Classic” here means the non-flavoured Snoski product in the producer's range. It should not be confused with Orange just because both share the Snoski name, nor with another company's orange vodka. Read the category and full product name on the Indian bottle label.</p>

<h2>Why does 180ml matter?</h2>
<p>Searches for “Snoski 180ml price” can surface a flavoured 180ml pack when the reader intended the plain vodka. BevOry has a <a href="https://bevory.in/kolkata/product/snoski-premium-crafted-vodka-18b4e5f/750ml">plain Snoski 750ml Kolkata listing</a> and a separate <a href="https://bevory.in/kolkata/product/snoski-premier-crafted-vodka-orange-4a6a8ec/180ml">Snoski Orange 180ml Kolkata listing</a>. The latter is not evidence of a plain 180ml bottle or its price. The total price of 180ml also cannot be compared directly with a 750ml total.</p>
<p>If shopping in Noida, use that city's own <a href="https://bevory.in/noida/product/snoski-premium-crafted-vodka-18b4e5f/750ml">plain 750ml</a> or <a href="https://bevory.in/noida/product/snoski-premier-crafted-vodka-orange-4a6a8ec/180ml">Orange 180ml</a> page, not Kolkata's listing. City, flavour and volume must all match.</p>

<h2>What should I verify at the shop?</h2>
<p>Ask a licensed retailer to confirm current stock and the shelf price of the exact sealed bottle. Inspect its printed product description, flavour, volume, alcohol percentage and maximum retail price. Online figures are indicative and a historic company launch document is not a live stock feed. BevOry does not sell alcohol. Follow local age and dry-day rules and never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-camikara-rum-3-vs-8-vs-12-years-delhi-2026",
    title: "Camikara Rum: 3, 8 or 12 Years? Pick the Right Expression",
    slug: "camikara-rum-3-vs-8-vs-12-years-delhi-2026",
    excerpt: "Camikara has separate 3-, 8- and 12-year cane-juice rums. Learn what the age label identifies before reading a Delhi price listing.",
    category: "Guides",
    tags: ["Camikara rum", "Camikara 3 Year", "Camikara 8 Year", "Camikara 12 Year", "Delhi", "Indian rum"],
    meta_title: "Camikara Rum 3 vs 8 vs 12 Years | BevOry",
    meta_description: "Compare Camikara's three age-stated cane-juice rums and check which expression the existing Delhi 750ml product page actually lists.",
    selection_note: "Search Console's 26 Sep-23 Oct 2026 view showed 5 clicks/208 impressions for 'camikara rum price in delhi'. The existing BevOry Delhi 750ml page is specifically Camikara 3 Years, so a three-expression explainer prevents users transferring that price to the 8- or 12-year rum.",
    source_links: [camikaraRange, camikaraFaq],
    content: String.raw`
<p><strong>Camikara has separate 3-year, 8-year and 12-year cask-aged rums.</strong> A Delhi listing for the 3-year bottle cannot answer the price of the 8- or 12-year expression. Before comparing any figure, read the age statement and volume on the bottle or complete product title.</p>

<h2>What is common to the Camikara range?</h2>
<p>The <a href="${camikaraRange}" target="_blank" rel="noopener noreferrer">official Camikara range page</a> calls the spirits Indian pure-cane-juice rum and lists three cask-aged expressions. Piccadily's <a href="${camikaraFaq}" target="_blank" rel="noopener noreferrer">producer FAQ</a> explains that Camikara is distilled from sugarcane juice rather than the molasses commonly associated with rum. This ingredient distinction applies to the named range; it does not tell you that all three bottles have the same ageing, strength or taste.</p>
<p>An age statement identifies the expression's stated maturation period, not how long a sealed bottle has sat in a store. Do not use a 3-year product card for a 12-year search merely because both display the Camikara logo.</p>

<h2>How do the three bottles differ?</h2>
<p>Camikara's range page names a 3-year, an 8-year and a 12-year cane-juice rum, each matured in oak barrels. The producer describes the 3-year as a younger, more vibrant expression; the 8-year as balanced with more developed maturation; and the 12-year as its flagship with greater depth. These are the company's characterisations, not an independent ranking or a guarantee about individual taste. The 12-year page and range materials also show different strength information from the 3- and 8-year products, so check the exact Indian pack rather than carrying an alcohol percentage across expressions.</p>
<p>“Older” is not automatically “better” for every serve. The useful choice is between the bottle names and the style you actually prefer, not a number taken out of context.</p>

<h2>Which Camikara bottle does BevOry list for Delhi?</h2>
<p>BevOry's <a href="https://bevory.in/delhi/product/camikara-rum-cask-3-yrs-aged-aca8f2c/750ml">Delhi Camikara 3 Years 750ml page</a> is specifically for the 3-year expression. It is not a live price or stock confirmation for Camikara 8 or 12. If a retailer offers another expression, ask for that exact sealed bottle's current shelf price, volume and printed alcohol percentage. Do not assume any of the three is currently available in Delhi solely because the producer lists it nationally.</p>
<p>BevOry does not sell alcohol. Follow applicable age and dry-day rules, and never drink and drive.</p>
`.trim(),
  },
], "2026-10-25T11:29:53.938Z");
