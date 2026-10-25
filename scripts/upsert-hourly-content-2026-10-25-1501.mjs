import "dotenv/config";
import { runContentCycle } from "./hourly-content-cycle.mjs";

const antiquity = "https://www.diageoindia.com/en/brands/brand-explorer/antiquity";
const signature = "https://www.diageoindia.com/en/brands/brand-explorer/signature";
const beam = "https://www.jimbeam.com/en-us/bourbons/original";
const jack = "https://pressroom.jackdaniels.com/products/";

await runContentCycle([
  {
    id: "guide-antiquity-blue-vs-signature-premier-kolkata-2026",
    title: "Antiquity Blue vs Signature Premier: Which Whisky Is Which?",
    slug: "antiquity-blue-vs-signature-premier-kolkata-2026",
    excerpt: "Antiquity Blue and Signature Premier are separate Diageo India whiskies. Compare their maker descriptions and the exact 750ml Kolkata listings.",
    category: "Guides",
    tags: ["Antiquity Blue", "Signature Premier", "Kolkata", "Indian whisky", "whisky comparison"],
    meta_title: "Antiquity Blue vs Signature Premier | BevOry",
    meta_description: "Compare Antiquity Blue and Signature Premier using Diageo India's descriptions. Check the exact 750ml Kolkata bottle before comparing prices.",
    selection_note: "Search Console's 26 Sep-23 Oct 2026 view showed 10 clicks/2,796 impressions for 'antiquity blue price' and 31 clicks/4,752 impressions for 'signature whisky 750ml price in kolkata'. Exact 750ml Kolkata pages already exist; this guide addresses the cross-brand choice, not duplicate price intent.",
    source_links: [antiquity, signature],
    content: String.raw`
<p><strong>Antiquity Blue and Signature Premier are separate Indian whiskies in Diageo India's portfolio.</strong> They have different brand stories and different labels. A search for “Signature whisky” can also show Signature Rare, while a short “Antiquity” listing may omit the word Blue. Start with the full expression name before comparing a shop card or asking a retailer for a bottle.</p>

<h2>What is Antiquity Blue?</h2>
<p><a href="${antiquity}" target="_blank" rel="noopener noreferrer">Diageo India's Antiquity page</a> describes Antiquity Blue as a blend involving Scotch from Cameronbridge, with pronounced malt and wood notes and hints of peat and heather. These are the producer's tasting descriptions; they are not a measured ranking against Signature Premier. The presence of a Scotch component also does not make the whole finished bottle a single-malt Scotch whisky.</p>
<p>The company has refreshed Antiquity Blue's presentation in recent years. Older photos may still circulate online, so check the full name and back label of the sealed bottle offered to you. An older-looking pack is not enough to establish the blend, age, alcohol percentage or current shelf price.</p>

<h2>What is Signature Premier?</h2>
<p>The <a href="${signature}" target="_blank" rel="noopener noreferrer">Signature brand page</a> identifies Signature Premier and Signature Rare as two entries in its range. It describes the newer Signature blends as combining imported Scotches with aged Indian malts and grain spirits. That description applies to the brand's stated blend approach; it does not establish that Premier and Rare taste identical or have the same price.</p>
<p>Choose the word <em>Premier</em> on the listing and bottle if Premier is the whisky you want to compare. A result labelled only “Signature 750ml” is ambiguous until you see the complete expression. Likewise, brand packaging or a marketing phrase cannot substitute for the legal product description printed on an Indian pack.</p>

<h2>How can I compare them in Kolkata?</h2>
<p>BevOry has a <a href="https://bevory.in/kolkata/product/antiquity-blue-antiquity-blue-4320d58/750ml">Kolkata Antiquity Blue 750ml page</a> and a <a href="https://bevory.in/kolkata/product/signature-premier-718bcab/750ml">Kolkata Signature Premier 750ml page</a>. These align the city and volume, but any displayed figures are indicative. Ask a licensed retailer to confirm today's shelf price, stock and sealed pack before making a decision. A Signature Rare result or a different bottle volume is not a like-for-like price comparison.</p>
<p>Neither maker page verifies a current Kolkata shop price. Check the printed Indian bottle for alcohol percentage and other particulars. BevOry does not sell alcohol. Follow applicable age and dry-day rules and never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-jim-beam-vs-jack-daniels-old-no-7-india-2026",
    title: "Jim Beam Original vs Jack Daniel's Old No. 7: The Difference",
    slug: "jim-beam-vs-jack-daniels-old-no-7-india-2026",
    excerpt: "Jim Beam Original is Kentucky bourbon; Jack Daniel's Old No. 7 is Tennessee whiskey. Know the production and bottle-size differences before comparing a Kolkata listing.",
    category: "Guides",
    tags: ["Jim Beam Original", "Jack Daniel's Old No. 7", "bourbon", "Tennessee whiskey", "Kolkata", "whiskey comparison"],
    meta_title: "Jim Beam vs Jack Daniel's Old No. 7 | BevOry",
    meta_description: "Compare Jim Beam Original bourbon with Jack Daniel's Old No. 7 Tennessee whiskey. Check Kolkata pack sizes before interpreting a listed price.",
    selection_note: "Search Console's 26 Sep-23 Oct 2026 view showed 7 clicks/3,253 impressions for 'jim beam price in kolkata' and 7 clicks/828 impressions for 'jack daniels 750ml price in kolkata'. Existing exact product pages cover bottle prices. This guide clarifies bourbon versus Tennessee whiskey and the important 750ml versus 700ml Kolkata listing mismatch.",
    source_links: [beam, jack],
    content: String.raw`
<p><strong>Jim Beam Original is a Kentucky bourbon, while Jack Daniel's Old No. 7 is a Tennessee whiskey.</strong> They are both American whiskeys, but they are not the same brand or the same expression. In Kolkata, BevOry's specific Jim Beam Original and Old No. 7 listings also show different bottle volumes, so their total displayed prices are not automatically comparable.</p>

<h2>What is Jim Beam Original?</h2>
<p>The <a href="${beam}" target="_blank" rel="noopener noreferrer">Jim Beam Original product page</a> calls it a bourbon and describes caramel, vanilla, woody grain and oak. Those are the maker's tasting notes, not a guarantee that everyone will perceive the same flavours. “Original” matters: Jim Beam Black, Honey, Apple and other Beam-labelled products are separate expressions, and a result for one should not be used as the price or tasting profile of another.</p>
<p>If a short listing says only “Jim Beam,” check the bottle photo and full name before assuming it is Original. The maker's US website is useful for identifying the expression, but an imported Indian pack may have a different printed volume or other market-specific label details.</p>

<h2>What is Jack Daniel's Old No. 7?</h2>
<p>Jack Daniel's <a href="${jack}" target="_blank" rel="noopener noreferrer">official product information</a> calls Old No. 7 a Tennessee whiskey and highlights its charcoal-mellowing process. It describes caramel, vanilla and wood notes. This is a producer description rather than a claim that Old No. 7 is objectively smoother than Jim Beam.</p>
<p>Old No. 7 is not interchangeable with Tennessee Honey, Tennessee Apple, Gentleman Jack or Single Barrel. The square bottle and Jack Daniel's name appear across several products, so read the expression on the front label. A flavoured Jack Daniel's product should not be treated as a straight Old No. 7 listing.</p>

<h2>How should I read the Kolkata listings?</h2>
<p>BevOry has a <a href="https://bevory.in/kolkata/product/jim-beam-jim-beam-71942ec/750ml">Jim Beam 750ml Kolkata page</a> and a separate <a href="https://bevory.in/kolkata/product/jack-daniels-old-no-7-ad07e62/700ml">Old No. 7 700ml Kolkata page</a>. The sizes differ. Compare the labelled volume and, if you need a size-adjusted comparison, divide the indicative total by the number of millilitres before drawing conclusions. Do not label the 700ml Old No. 7 entry a 750ml price merely because that wording appears in a search query.</p>
<p>Neither US producer page confirms today's Kolkata shelf price or stock. Ask a licensed retailer to verify the exact sealed Indian-market bottle, current price and printed alcohol percentage. BevOry does not sell alcohol. Follow applicable age and dry-day rules and never drink and drive.</p>
`.trim(),
  },
], "2026-10-25T09:31:23.198Z");
