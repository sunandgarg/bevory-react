import "dotenv/config";
import { runContentCycle } from "./hourly-content-cycle.mjs";

const morpheusBrandy = "https://radicokhaitan.com/products/morpheus-blue-xo-premium-brandy/";
const morpheusWhisky = "https://www.radicokhaitan.com/wp-content/uploads/2025/05/Morpheus.pdf";
const morpheusVariants = "https://www.radicokhaitan.com/wp-content/uploads/2024/05/Press-Release-May-27-2024.pdf";
const afterDarkRelease = "https://nsearchives.nseindia.com/corporate/RADICO_12062026105513_Intimation.pdf";
const afterDark = "https://www.radicokhaitan.com/products/after-dark/";

await runContentCycle([
  {
    id: "guide-morpheus-brandy-vs-whisky-bangalore-2026",
    title: "Morpheus Brandy or Whisky? Check the Bottle Before You Buy",
    slug: "morpheus-brandy-vs-whisky-bangalore-2026",
    excerpt: "Radico Khaitan sells Morpheus brandy and a separate Morpheus whisky. Learn how to identify XO, Blue XO and the whisky before using a Bengaluru price listing.",
    category: "Guides",
    tags: ["Morpheus brandy", "Morpheus Blue XO", "Morpheus whisky", "Bengaluru", "Radico Khaitan", "bottle guide"],
    meta_title: "Morpheus Brandy vs Whisky in Bengaluru | BevOry",
    meta_description: "Morpheus XO and Blue XO are brandies; Morpheus whisky is a separate spirit. Identify the exact Bengaluru bottle, expression and size first.",
    selection_note: "Search Console's 26 Sep-23 Oct 2026 view showed 6 clicks/1,036 impressions for 'morpheus brandy price in bangalore' and 4 clicks/1,436 impressions for 'morpheus whisky'. BevOry already lists Bengaluru XO, Blue XO and whisky products; this guide resolves cross-category ambiguity instead of duplicating their price pages.",
    source_links: [morpheusBrandy, morpheusWhisky, morpheusVariants],
    content: String.raw`
<p><strong>“Morpheus” no longer identifies only a brandy.</strong> Radico Khaitan has Morpheus XO brandy, Morpheus Blue XO brandy and a separate Morpheus whisky. A result that says only “Morpheus price” is therefore incomplete: the category, full expression, bottle volume and city must all match the bottle you want.</p>

<h2>Which Morpheus bottles are brandy?</h2>
<p>Radico Khaitan's <a href="${morpheusVariants}" target="_blank" rel="noopener noreferrer">May 2024 company release</a> identifies Morpheus XO and Morpheus Blue XO as brandy expressions, with Blue XO introduced as a more premium extension. The brandy label's “XO” is part of the product name; it does not turn the bottle into a whisky or prove a universal age statement for every market. Check the printed Indian pack for its own legal description.</p>
<p>The separate <a href="${morpheusBrandy}" target="_blank" rel="noopener noreferrer">Blue XO producer page</a> describes fruit and floral notes, dried fruit, nuts, honey, oak, vanilla and caramel. These are the producer's tasting notes rather than an independent rating or a promise about what everyone will taste. The blue name and label distinguish this expression from the regular XO brandy.</p>

<h2>What is Morpheus whisky?</h2>
<p>Radico announced a <a href="${morpheusWhisky}" target="_blank" rel="noopener noreferrer">Morpheus whisky launch in May 2025</a>. Its announcement describes a blend of imported Scotch malts and Indian grain spirits, with bourbon-barrel ageing and fruity-floral character. That makes it a whisky product under the Morpheus name, not a re-labelled Blue XO brandy. Nor does a Scotch-malt component make the entire Indian blend a bottle of Scotch whisky.</p>
<p>Because the release is a launch announcement, its historical rollout or promotional price must not be treated as today's Bengaluru availability or shelf price. Ask for the actual sealed bottle, not a photo from the announcement.</p>

<h2>How do I compare Bengaluru listings?</h2>
<p>BevOry has distinct pages for <a href="https://bevory.in/bangalore/product/morpheus-xo-blended-premium-brandy-16f915a/750ml">Morpheus XO brandy 750ml</a>, <a href="https://bevory.in/bangalore/product/morpheus-xo-blue-premium-brandy-02738cf/750ml">Morpheus Blue XO brandy 750ml</a> and <a href="https://bevory.in/bangalore/product/morpheus-whisky-morpheus-luxury-whisky-69f96f1/750ml">Morpheus whisky 750ml</a> in Bengaluru. These separate listings help align category and volume, but their displayed figures are indicative. A licensed retailer must confirm today's price and stock for the exact expression.</p>
<p>Check the current bottle's full name, seal, volume and printed alcohol percentage. BevOry does not sell alcohol. Follow applicable age and dry-day rules, and never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-after-dark-blue-whisky-new-bottle-2026",
    title: "After Dark Blue Whisky: How to Recognise the New Bottle",
    slug: "after-dark-blue-whisky-new-bottle-2026",
    excerpt: "Radico Khaitan announced a new After Dark Blue pack in 2026. Here is what changed visually and what to check before comparing a city listing.",
    category: "Guides",
    tags: ["After Dark Blue whisky", "Radico Khaitan", "whisky bottle", "Kolkata", "Bengaluru", "packaging guide"],
    meta_title: "After Dark Blue Whisky: New Bottle Guide | BevOry",
    meta_description: "Identify After Dark Blue's refreshed 2026 pack and avoid assuming an old photo proves current stock, blend or price in your city.",
    selection_note: "Search Console's 26 Sep-23 Oct 2026 view showed 6 clicks/782 impressions for 'after dark blue whisky price' and 4 clicks/1,254 impressions for 'after dark whisky 750ml price in kolkata'. Existing Kolkata and Bengaluru 750ml URLs cover price intent; this guide addresses label and packaging confusion using Radico's exchange-filed June announcement.",
    source_links: [afterDarkRelease, afterDark],
    content: String.raw`
<p><strong>After Dark Blue Grain Whisky received a refreshed pack announced in June 2026.</strong> If the bottle you see looks different from an older search image, a design change is one possible explanation. A photo alone cannot tell you which pack a shop has today or whether two listings refer to the same batch, strength or bottle volume.</p>

<h2>What did Radico Khaitan change?</h2>
<p>In its <a href="${afterDarkRelease}" target="_blank" rel="noopener noreferrer">12 June 2026 exchange-filed announcement</a>, Radico described a deep-blue, white and gold design, a tapered bottle shape, an embossed brand line and a gold seal for the refreshed After Dark Blue pack. The company said the new presentation was launching first in Uttar Pradesh, with other markets planned afterward. A planned rollout is not proof that the refreshed bottle is already stocked in every city.</p>
<p>The announcement focuses on presentation and positioning. It does not give a verified current Kolkata or Bengaluru shelf price, and it should not be read as evidence that an older pack is counterfeit. Shops can carry different batches or packaging generations; inspect the actual sealed bottle and its printed details.</p>

<h2>Is “After Dark” the same listing as “After Dark Blue”?</h2>
<p>Radico also maintains an <a href="${afterDark}" target="_blank" rel="noopener noreferrer">After Dark brand page</a>, while its 2026 release specifically names After Dark Blue Grain Whisky. A short search result that says only “After Dark” may omit a useful part of the product name. Before transferring a price, tasting description or photo between results, confirm the full front-label wording, bottle size and city.</p>
<p>Do not infer that every “Blue” result is a new 2026 pack. The name was in use before the packaging refresh. The physical label and retailer confirmation are better evidence of what is being offered now.</p>

<h2>Where can I check an exact bottle?</h2>
<p>BevOry has <a href="https://bevory.in/kolkata/product/after-dark-blue-classic-grain-whisky-070589e/750ml">After Dark Blue 750ml in Kolkata</a> and <a href="https://bevory.in/bangalore/product/after-dark-blue-classic-grain-whisky-070589e/750ml">After Dark Blue 750ml in Bengaluru</a> as separate city pages. Their figures are indicative, not live stock feeds. Ask a licensed retailer to verify today's shelf price, pack generation and printed alcohol percentage. A 180ml result elsewhere cannot stand in for a 750ml total.</p>
<p>BevOry does not sell alcohol. Follow applicable age and dry-day rules, and never drink and drive.</p>
`.trim(),
  },
], "2026-10-25T10:28:23.600Z");
