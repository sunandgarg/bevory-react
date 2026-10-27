import "dotenv/config";
import { runContentCycle } from "./hourly-content-cycle.mjs";

const cagGlossary = "https://www.cag.gov.in/uploads/download_audit_report/2019/Glossary_of_Terms_and_Abbreviations_of_Report_No_1_of_2019_Pricing_of_Production_and_Sale_.pdf";
const goaLabels = "https://excise.goa.gov.in/labels_services.aspx";
const verve = "https://www.radicokhaitan.com/products/magic-moments-remix-6/";
const remix = "https://www.radicokhaitan.com/products/magic-moment-green-apple/";

await runContentCycle([
  {
    id: "guide-quarter-half-full-liquor-bottle-sizes-india-2026",
    title: "Quarter, Half or Full? Liquor Bottle Sizes in India Explained",
    slug: "quarter-half-full-liquor-bottle-sizes-india-2026",
    excerpt: "A quarter commonly means 180ml, a half 375ml and a full 750ml in Indian spirit listings. Check the printed volume, not just the nickname.",
    category: "Guides",
    tags: ["quarter bottle", "half bottle", "full bottle", "180ml", "375ml", "750ml", "India liquor sizes"],
    meta_title: "Quarter, Half and Full Bottle Sizes in India | BevOry",
    meta_description: "What do quarter, half and full mean for liquor bottles in India? Check 180ml, 375ml and 750ml volumes before comparing prices.",
    selection_note: "The last accessible Search Console report showed exact size intent, including 6 clicks/761 impressions for 'snoski vodka 180ml price'. A cross-brand size explainer helps readers compare bottle listings without creating another city-product price page.",
    source_links: [cagGlossary, goaLabels],
    content: String.raw`
<p><strong>In many Indian spirits listings, a “quarter” is 180ml, a “half” is 375ml and a “full” is 750ml.</strong> These are common shopping terms, not a substitute for reading the actual pack. A <a href="${cagGlossary}" target="_blank" rel="noopener noreferrer">government audit glossary</a> records the corresponding formal terms as nip (180ml), pint (375ml) and quart (750ml) for Indian-made foreign liquor. Shops may use “quarter,” “half” and “full” conversationally; the printed millilitre figure is the detail that resolves any ambiguity.</p>

<h2>Are the names mathematically exact?</h2>
<p>Not quite. Half of 750ml would be 375ml, but one quarter of 750ml is 187.5ml, not 180ml. “Quarter” is a conventional name for the smaller pack, not a measurement to calculate from the large bottle. A 180ml pack contains less liquid than a literal quarter of 750ml. That difference matters when comparing a bottle's total price or deciding how much you need.</p>
<p>Likewise, a 700ml imported spirit is not automatically a 750ml “full” bottle. A litre pack is larger again. There are also miniatures and sizes that do not fit the three familiar nicknames. The product's stated volume takes priority over a shop's shorthand.</p>

<h2>How do I compare two bottle prices?</h2>
<p>Match the brand, full expression, city and volume first. Then, if the bottles are otherwise identical, divide each bottle's price by its volume in millilitres and multiply by 1,000 to get a price per litre. This makes the size difference visible. Do not assume a smaller bottle will have the same cost per millilitre as a larger one, and do not compare total prices alone when one bottle is 180ml and the other is 750ml.</p>
<p>For example, BevOry lists <a href="https://bevory.in/delhi/product/teachers-highland-cream-fc446fc/180ml">Teacher's Highland Cream 180ml</a> and <a href="https://bevory.in/delhi/product/teachers-highland-cream-fc446fc/750ml">Teacher's Highland Cream 750ml</a> as separate Delhi pack pages. Those links show why the size must be part of a price query. They do not guarantee either bottle's current stock or shelf price.</p>

<h2>What should I read on the label?</h2>
<p>The <a href="${goaLabels}" target="_blank" rel="noopener noreferrer">Goa Excise Department</a> explains that a liquor label carries the product's nature, quantity, strength, batch information and MRP, among other details. A bottle meant for one state may also have a state-specific sale marking. Check the exact sealed bottle in a licensed shop, including the full name and printed volume. If an online listing says “half” without millilitres, ask the retailer to confirm what it means.</p>
<p>Prices and retail rules differ across states, so a Goa label or a Delhi product page cannot establish a current price elsewhere. BevOry does not sell alcohol. Follow local age and dry-day rules, and never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-magic-moments-verve-vs-remix-delhi-2026",
    title: "Magic Moments Verve vs Remix: Two Vodka Ranges, Different Bottles",
    slug: "magic-moments-verve-vs-remix-delhi-2026",
    excerpt: "Verve and Remix are separate Magic Moments vodka ranges. Check the range, flavour and bottle size before using a Delhi product listing.",
    category: "Guides",
    tags: ["Magic Moments Verve", "Magic Moments Remix", "Delhi", "flavoured vodka", "750ml", "Radico Khaitan"],
    meta_title: "Magic Moments Verve vs Remix Vodka | BevOry",
    meta_description: "How to identify Magic Moments Verve and Remix in Delhi. Compare the full range, named flavour and 750ml bottle before checking a price.",
    selection_note: "Search Console's last accessible 28-day report recorded 20 clicks/5,501 impressions for 'magic moment price'. BevOry already has a plain-vodka-versus-Remix guide and exact Delhi product URLs; this post answers the separate Verve-versus-Remix ambiguity rather than another generic price query.",
    source_links: [verve, remix],
    content: String.raw`
<p><strong>Magic Moments Verve and Magic Moments Remix are separate vodka ranges from Radico Khaitan.</strong> Both can have a named fruit flavour, so “Magic Moments green apple” on its own may not identify the bottle you saw. Read the range name, flavour and millilitre size together before relying on an online price or product photo.</p>

<h2>What is Magic Moments Verve?</h2>
<p>Radico's <a href="${verve}" target="_blank" rel="noopener noreferrer">Verve product page</a> describes a premium range that includes Green Apple, Orange, Cranberry and Lemon Lush variants. Its language is promotional, so a consumer should treat tasting notes as the maker's description, not as a guarantee about personal preference or an independent quality score. The key shopping fact is that Verve is printed as the range name. A Verve Cranberry bottle is not the same expression as Verve Green Apple, even though the parent brand matches.</p>
<p>A Delhi result may also say “M2 Magic Moments Verve Super Premium Vodka.” That wording does not tell you that every flavoured Verve bottle has the same strength, ingredients or price. Use the sealed label to confirm each detail.</p>

<h2>What is Magic Moments Remix?</h2>
<p>The company's <a href="${remix}" target="_blank" rel="noopener noreferrer">Remix range page</a> lists flavoured vodka expressions including Orange, Green Apple, Lemon, Lemongrass &amp; Ginger, Raspberry, Chocolate, Grapefruit &amp; Watermelon, and Cucumber &amp; Wildgreen Lemon. This is a different named range from Verve. A flavour word can overlap between the two, but it cannot replace the range name when matching a price. “Green Apple” alone is not a complete product identity.</p>
<p>BevOry also has an <a href="https://bevory.in/guide/magic-moments-vodka-vs-remix-india-2026">earlier plain Magic Moments versus Remix guide</a>. That answers whether the main, unflavoured vodka is the same as Remix. Here the choice is specifically between Verve and Remix.</p>

<h2>Which Delhi product page should I use?</h2>
<p>For a Verve bottle, the <a href="https://bevory.in/delhi/product/magic-moments-magic-moment-verve-green-apple-efb3cf9/750ml">Delhi Verve Green Apple 750ml page</a> identifies both the range and flavour. For a different example, the <a href="https://bevory.in/delhi/product/magic-moments-m2-magic-moments-remix-grapefruit-and-watermelon-flavoured-superior-vodka-4e4d952/750ml">Delhi Remix Grapefruit &amp; Watermelon 750ml page</a> is a Remix product. Those are not two prices for the same flavour, and neither should stand in for an unspecified Magic Moments bottle.</p>
<p>At a licensed retailer, ask for the exact expression and check its printed volume, ABV, ingredients, seal and MRP. An online page is indicative, not a promise of current stock or shelf price. State-specific rules and dry days can affect retail sale. BevOry does not sell alcohol; follow local age requirements and never drink and drive.</p>
`.trim(),
  },
], "2026-10-27T06:13:20.129Z");
