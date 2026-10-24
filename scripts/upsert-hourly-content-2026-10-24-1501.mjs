import "dotenv/config";
import { runContentCycle } from "./hourly-content-cycle.mjs";

const green = "https://adsspirits.com/royal-green/";
const black = "https://adsspirits.com/royal-black/";
const seasons = "https://www.oasisgrp.in/all-seasons-0";
const taj = "https://www.oasisgrp.in/all-seasons";

await runContentCycle([
  {
    id: "guide-royal-green-vs-royal-black-indian-whisky-2026",
    title: "Royal Green vs Royal Black: Which Whisky Is Which?",
    slug: "royal-green-vs-royal-black-indian-whisky-2026",
    excerpt: "Royal Green and Royal Black are separate ADS Spirits whiskies. Compare the producer's descriptions and check the exact bottle before comparing local listings.",
    category: "Guides",
    tags: ["Royal Green", "Royal Black", "ADS Spirits", "Indian whisky", "whisky comparison"],
    meta_title: "Royal Green vs Royal Black Whisky | BevOry",
    meta_description: "Royal Green or Royal Black? Compare ADS Spirits' own tasting descriptions and learn what to check on Indian bottle and city listings.",
    selection_note: "Search Console's recent 28-day view showed 34 clicks/5,270 impressions for 'Royal Green 750ml Kolkata' and 18/1,259 for 'Royal Black 750ml Kolkata'. Exact bottle pages exist; this cross-label guide answers a distinct comparison question.",
    source_links: [green, black],
    content: String.raw`
<p><strong>Royal Green and Royal Black are different whiskies from ADS Spirits, not two names for the same bottle.</strong> The similar names can make search results confusing, especially when a city-price page shows only a shortened product title. Start with the words on the label, then check the volume and city before comparing listings.</p>

<h2>What does the producer say about Royal Green?</h2>
<p><a href="${green}" target="_blank" rel="noopener noreferrer">ADS Spirits describes Royal Green</a> as a blend of Indian grain spirits and imported Scotch malts. Its published tasting description mentions grass, vanilla, cinnamon and malt on the nose, then fruit, vanilla and oak. Those are the maker's notes, not a promise that every person will taste each one.</p>
<p>The company also discusses cask treatment of the Scotch malt component. That does not turn the finished Indian blend into a Scotch whisky. If a catalogue places Royal Green in a broad “blended Scotch” filter, use the current bottle's legal description and the producer's statement to understand what it actually is. Do not infer an age statement or alcohol percentage from the green bottle or a search snippet.</p>

<h2>How is Royal Black described?</h2>
<p><a href="${black}" target="_blank" rel="noopener noreferrer">ADS Spirits lists Royal Black separately</a>. Its tasting notes describe a medium-bodied whisky with fruit on the nose, peat, dry spice and cereal on the palate, and a fruity, honeyed finish with vanilla. These are useful differences in the published descriptions: Green points toward grass and cinnamon, while Black's page places more emphasis on deep fruit, peat and dry spice.</p>
<p>Neither producer page establishes that one label is objectively better, stronger or more expensive in every Indian city. Taste is personal, and a marketing description is not a controlled side-by-side tasting. The exact Royal Black bottle may also include a further expression name such as “Reserve”; match that full name before treating two listings as identical.</p>

<h2>How should you compare local prices?</h2>
<p>Write down three details: city, full expression name and bottle size. BevOry has an existing <a href="https://bevory.in/kolkata/product/royal-green-whisky" target="_blank" rel="noopener noreferrer">Royal Green product page for Kolkata</a> and a separate <a href="https://bevory.in/faridabad/product/royal-black-reserve-whisky" target="_blank" rel="noopener noreferrer">Royal Black Reserve page for Faridabad</a>. Those pages are for different cities, so their displayed figures are not a fair city-matched price comparison. Even within one city, compare the same millilitre size rather than a 375ml bottle with a 750ml bottle.</p>
<p>Before buying, inspect the sealed bottle for the current legal category, volume, alcohol percentage and importer or bottler details. Ask a licensed retailer for today's shelf price and stock; online prices can be outdated or indicative. BevOry does not sell or deliver alcohol. Follow local age and dry-day rules, and never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-all-seasons-whisky-vs-sir-e-taj-india-2026",
    title: "All Seasons Whisky vs Sir' E Taj: Check the Label First",
    slug: "all-seasons-whisky-vs-sir-e-taj-india-2026",
    excerpt: "Oasis Group lists All Seasons Whisky and All Seasons Sir' E Taj separately. Here is how to identify the exact expression and avoid a mismatched price comparison.",
    category: "Guides",
    tags: ["All Seasons whisky", "Sir E Taj", "Oasis Group", "Indian whisky", "bottle guide"],
    meta_title: "All Seasons vs Sir' E Taj Whisky | BevOry",
    meta_description: "All Seasons and Sir' E Taj are separate Oasis Group listings. Compare bottle names and sizes without assuming unverified recipe differences.",
    selection_note: "Search Console's recent 28-day view showed 16 clicks/3,597 impressions for 'All Seasons whisky'. Oasis lists standard All Seasons and Sir' E Taj separately, while BevOry already has exact bottle pages. This guide resolves label and search-result ambiguity without another city-price page.",
    source_links: [seasons, taj],
    content: String.raw`
<p><strong>All Seasons Whisky and All Seasons Sir' E Taj are separate entries in Oasis Group's portfolio.</strong> If a shop listing says only “All Seasons,” it may not give enough information to identify the expression. Check the full wording on the physical bottle before using a search result to compare prices or decide what to ask for.</p>

<h2>What has Oasis Group confirmed?</h2>
<p>The producer maintains a page for <a href="${seasons}" target="_blank" rel="noopener noreferrer">All Seasons Whisky</a> and another for <a href="${taj}" target="_blank" rel="noopener noreferrer">All Seasons Sir' E Taj</a>. Its portfolio displays the two as separate product entries. Both pages use very similar short descriptions, including a claim of a smooth mouthfeel and a lingering finish. That limited copy does not establish a measurable recipe, age, cask or strength difference between the two bottles.</p>
<p>For that reason, “Sir' E Taj” should be treated as a distinct label name, not proof of a particular whisky-making method. The words alone do not tell you how long the liquid was matured, what proportion of malt it contains, or how it compares in a blind tasting. Look for those details on the current pack or in a product-specific statement from the maker rather than relying on a category badge in a retailer's catalogue.</p>

<h2>How do you identify the right bottle?</h2>
<p>Read the front and back labels, including the full expression name, volume in millilitres, legal product description and alcohol percentage. A photograph of an older bottle can be useful for recognition but should not settle a question about today's pack. If a retailer abbreviates the name, ask them to show the bottle and confirm whether it says Sir' E Taj or the standard All Seasons Whisky name.</p>
<p>BevOry already has a <a href="https://bevory.in/lucknow/product/all-season-whisky/180ml" target="_blank" rel="noopener noreferrer">Lucknow listing for standard All Season Whisky in 180ml</a>. Its <a href="https://bevory.in/lucknow/category/made-in-india-whisky" target="_blank" rel="noopener noreferrer">Lucknow whisky catalogue</a> also lists a Sir E Taj 750ml entry. Those are not size-matched products. Do not compare their displayed prices as if they represent the same quantity of whisky.</p>

<h2>What makes a useful price comparison?</h2>
<p>First choose one city and one expression. Then compare the same bottle size across current, licensed sellers. If the size differs, calculate a per-100ml figure only as a rough arithmetic aid; taxes, promotions and pack rules may make the final shelf decision different. A price quoted in Lucknow cannot establish a price in Kolkata or Delhi, and an online listing cannot confirm current stock.</p>
<p>Oasis Group's pages do not provide a current, city-by-city retail price for either expression. Ask a licensed shop for today's price and availability, inspect the seal and label, and follow the rules in your location. BevOry provides information only; it does not sell or deliver alcohol. Alcohol is for adults who meet local law. Never drink and drive.</p>
`.trim(),
  },
], "2026-10-24T09:31:29.276Z");
