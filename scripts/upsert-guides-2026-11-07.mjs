import "dotenv/config";
import { runContentCycle } from "./hourly-content-cycle.mjs";

const jameson = "https://www.jamesonwhiskey.com/en-gb/our-whiskey/jameson-irish-whiskey";
const blackLabel = "https://www.johnniewalker.com/en-gb/our-whisky/core-range/johnnie-walker-black-label-blended-scotch-whisky-70-cl";
const oldMonk = "https://mohanmeakin.com/wp-content/uploads/2024/08/Annual-Report-FY-2023-24.pdf";
const bacardi = "https://www.bacardi.com/our-rums/carta-blanca-rum/";

await runContentCycle([
  {
    id: "guide-jameson-original-vs-johnnie-walker-black-label-india-2026",
    title: "Jameson Original vs Johnnie Walker Black Label: Which Whisky Fits?",
    slug: "jameson-original-vs-johnnie-walker-black-label-india-2026",
    excerpt: "Irish whiskey or blended Scotch? Compare the makers' descriptions of Jameson Original and Black Label before choosing a bottle in India.",
    category: "Guides",
    tags: ["Jameson Original", "Johnnie Walker Black Label", "Irish whiskey", "blended Scotch", "whisky comparison India"],
    meta_title: "Jameson vs Johnnie Walker Black Label | BevOry",
    meta_description: "Jameson Original and Johnnie Walker Black Label differ in origin, maturation and flavour. Compare exact bottles before checking Indian city prices.",
    selection_note: "A distinct cross-category buying question. Existing BevOry pages cover each bottle and Jameson Original vs Black Barrel, but not this head-to-head. Query-level Search Console evidence was unavailable; no search-volume claim is made.",
    source_links: [jameson, blackLabel],
    content: String.raw`
<p><strong>Jameson Original and Johnnie Walker Black Label are not two grades of the same whisky.</strong> Jameson Original is blended Irish whiskey; Black Label is blended Scotch whisky. Both can sit on an Indian shop shelf, but their maker descriptions point to different styles. The sensible choice starts with how you plan to drink it, not a claim that one country makes better whisky.</p>
<h2>What is in each bottle?</h2>
<p><a href="${jameson}">Jameson's Original page</a> says it combines pot-still and grain whiskeys, is triple distilled, and is matured in oak for at least four years. The maker describes spice, nuts, vanilla and a hint of sweet sherry. <a href="${blackLabel}">Johnnie Walker's Black Label page</a> identifies malt and grain Scotch whiskies matured for at least 12 years, with sweet fruit, spice, vanilla and smoke. Those published details belong to these exact expressions. They do not apply to Jameson Black Barrel or Johnnie Walker Double Black just because the names share a brand.</p>
<h2>Which flavour direction makes sense?</h2>
<p>If smoke is what you want, Black Label is the more direct candidate from the makers' own descriptions. If you prefer a whiskey whose producer highlights spice, nuts and vanilla without putting smoke at the centre, start with Jameson Original. A tasting note is a guide, not a guarantee: mixer, ice and food can shift what you notice. For a fair side-by-side, use modest pours in the same glass and add the same amount of water to each.</p>
<h2>Neat, highball or with food?</h2>
<p>Jameson's maker suggests mixing Original with ginger ale or cola as well as sipping it neat. A ginger-and-lime highball can sit alongside paneer tikka or grilled chicken. Black Label's smoky edge can be a useful contrast with tandoori mushrooms or a lightly charred kebab. Those food ideas are serving suggestions, not producer claims. If you are shopping for a larger group, ask which style guests actually enjoy instead of buying on the age statement alone.</p>
<h2>How should an Indian price comparison work?</h2>
<p>Open BevOry's <a href="https://bevory.in/mumbai/product/jameson-irish-whiskey/200ml">Jameson Original listing</a> and its <a href="https://bevory.in/kolkata/product/johnnie-walker-black-label/750ml">Black Label listing</a> for bottle identification. Do not compare their displayed totals as if they were the same size or city. Choose a single city, match millilitres and check the full expression name, then confirm today's shelf price with a licensed retailer. For a closer within-brand decision, see <a href="https://bevory.in/guide/jameson-original-vs-black-barrel-india-2026">Jameson Original versus Black Barrel</a>. BevOry provides information, not alcohol sales. Follow local law and never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-old-monk-xxx-vs-bacardi-carta-blanca-rum-india-2026",
    title: "Old Monk XXX vs Bacardí Carta Blanca: Dark or White Rum?",
    slug: "old-monk-xxx-vs-bacardi-carta-blanca-rum-india-2026",
    excerpt: "Old Monk XXX and Bacardí Carta Blanca fill different roles in an Indian home bar. Compare exact expressions and mixing styles before buying.",
    category: "Guides",
    tags: ["Old Monk XXX", "Bacardi Carta Blanca", "dark rum vs white rum", "rum for cocktails", "India"],
    meta_title: "Old Monk vs Bacardí Carta Blanca Rum | BevOry",
    meta_description: "Compare Old Monk XXX dark rum with Bacardí Carta Blanca white rum for mixing, bottle identification and Indian city-price checks.",
    selection_note: "Existing Old Monk and Bacardí product pages answer exact bottle searches; the white-versus-dark explainer covers the category. This guide answers a specific cross-brand mixing choice without duplicating either page. No query-volume claim is made.",
    source_links: [oldMonk, bacardi],
    content: String.raw`
<p><strong>Old Monk XXX and Bacardí Carta Blanca answer different rum questions.</strong> Old Monk is an Indian rum name from Mohan Meakin; Carta Blanca is Bacardí's white rum made for mixing. A search for “Old Monk” can mean XXX, Gold Reserve, Supreme or another expression, so this comparison is specifically about an XXX-labelled bottle, not every rum under the brand.</p>
<h2>Know the bottles before comparing</h2>
<p><a href="${oldMonk}">Mohan Meakin's published product list</a> names Old Monk Very Old Vatted XXX alongside Old Monk White, Gold Reserve and other variants. That matters because Old Monk White would make a different comparison. <a href="${bacardi}">Bacardí's Carta Blanca page</a> calls its product a light, aromatic white rum suited to cocktails. It says the rum spends time in American white oak and is charcoal-filtered. Clear colour therefore does not prove a rum never touched wood.</p>
<h2>What works in a glass?</h2>
<p>For a lime-and-mint Mojito or a Daiquiri, Carta Blanca is the maker's explicit recommendation. Its described fruit-and-floral character and dry finish give citrus room to show. For a cola highball, either rum can work, but expect different results: a dark rum can make the drink feel fuller, while Carta Blanca keeps the mixer and lime more prominent. That contrast is a serving judgement, not an independent tasting score for Old Monk XXX. Make a smaller first pour and taste before adding more mixer.</p>
<h2>Does dark mean older or stronger?</h2>
<p>No reliable answer comes from colour alone. Filtering, blending and maturation can all influence appearance; the Bacardí process is one clear example. Neither “XXX” nor “white” is a universal ABV or age statement. Read the particular Indian pack for its strength, volume and manufacturer details. If you are comparing bottles within the Old Monk family, BevOry's <a href="https://bevory.in/guide/old-monk-xxx-vs-gold-reserve-rum-india-2026">XXX versus Gold Reserve guide</a> addresses that separate choice.</p>
<h2>What should you check in India?</h2>
<p>Compare the same millilitre size within the same city on the same day. A <a href="https://bevory.in/mumbai/product/bacardi-white-rum/180ml">Mumbai Bacardí White Rum listing</a> is a starting point for the Bacardí bottle; an <a href="https://bevory.in/bangalore/product/old-monk-180ml">Old Monk 180ml listing</a> identifies a different city and may not specify the XXX expression. Neither can establish a head-to-head current price. Ask a licensed retailer for the exact label, sealed pack and current shelf price. BevOry does not sell alcohol. Follow your local legal age and dry-day rules; never drink and drive.</p>
`.trim(),
  },
], "2026-11-06T20:25:00.000Z");
