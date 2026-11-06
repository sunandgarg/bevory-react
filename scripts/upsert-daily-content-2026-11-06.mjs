import "dotenv/config";
import { runContentCycle } from "./hourly-content-cycle.mjs";

const blackDog = "https://www.thebar.com/en-in/products/black-dog-centenary-black-reserve-blended-scotch-whisky-750ml";
const blackLabel = "https://www.johnniewalker.com/en/our-whisky/core-range/johnnie-walker-black-label";
const royalGreen = "https://adsspirits.com/royal-green/";
const allSeasons = "https://www.oasisgrp.in/all-seasons";

await runContentCycle([
  {
    id: "guide-black-dog-black-reserve-vs-johnnie-walker-black-label-india-2026",
    title: "Black Dog Black Reserve vs Johnnie Walker Black Label",
    slug: "black-dog-black-reserve-vs-johnnie-walker-black-label-india-2026",
    excerpt: "Both are blended Scotch whiskies, but their full names and maker descriptions differ. Compare the right bottles before checking a local price.",
    category: "Guides",
    tags: ["Black Dog Black Reserve", "Johnnie Walker Black Label", "blended Scotch", "whisky comparison", "India"],
    meta_title: "Black Dog Black Reserve vs Black Label | BevOry",
    meta_description: "Compare Black Dog Black Reserve with Johnnie Walker Black Label using official product details. Check the exact pack before comparing Indian prices.",
    selection_note: "Search Console, 7 Oct-3 Nov 2026: 'black dog 750ml price in kolkata' had 76 clicks/9,965 impressions. Exact bottle pages exist; this is a distinct cross-brand choice, not a second city-price page.",
    source_links: [blackDog, blackLabel],
    content: String.raw`
<p><strong>Black Dog Centenary Black Reserve and Johnnie Walker Black Label are different blended Scotch whiskies.</strong> Their dark labels make a short search result easy to misread, but the full brand and expression identify two separate bottles. Compare those names first, then bottle size and the actual label sold in your city.</p>
<h2>What does Black Dog Black Reserve offer?</h2>
<p>Diageo's Indian product page for <a href="${blackDog}">Black Dog Centenary Black Reserve</a> describes a 750ml blended Scotch. Its published tasting notes mention matured wood, malt, moderate honey sweetness and floral notes on the nose, followed by malt, oak and sherry sweetness. These are the maker's descriptions, not a promise that everyone will taste the same things. The page names a specific expression; it should not be confused with Black Dog Triple Gold Reserve or another Black Dog pack.</p>
<h2>What does Johnnie Walker Black Label say?</h2>
<p>The <a href="${blackLabel}">Johnnie Walker Black Label maker page</a> calls it a blended Scotch made from malt and grain whiskies aged for at least 12 years. It describes sweet fruit, spice, vanilla and smoke. That published 12-year statement belongs to Black Label. Do not transfer it to Black Dog Black Reserve, Johnnie Walker Double Black or a similarly named bottle. The global maker page shows a 70cl pack, which is not proof of the size or strength of every Indian retail pack.</p>
<h2>Which should you consider?</h2>
<p>If you are choosing by published flavour direction, Black Dog's page foregrounds malt, honey and oak, while Black Label's page highlights fruit, vanilla, spice and smoke. That is a comparison of producer descriptions, not an independent taste test or a quality ranking. A small side-by-side pour, where lawful, is the better way to learn which you prefer. Keep the serving size, glass, water and temperature alike so the comparison is meaningful.</p>
<h2>How do you compare a Kolkata price?</h2>
<p>Ask for the full expression and the same millilitre size in the same city on the same date. A Black Dog 750ml quote and a Black Label 700ml or 750ml quote are not directly comparable by total price. A generic “Black Dog” listing may refer to Triple Gold Reserve, so inspect the bottle photo and printed label before using the figure. BevOry's <a href="https://bevory.in/kolkata/product/johnnie-walker-black-label/750ml">Kolkata Black Label 750ml page</a> can help identify that specific listing, but it does not establish Black Dog's price or today's stock. Confirm the current shelf price and seal with a licensed retailer. BevOry does not sell alcohol. Follow local rules and never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-royal-green-vs-all-seasons-whisky-india-2026",
    title: "Royal Green vs All Seasons: Two Indian Whiskies Compared",
    slug: "royal-green-vs-all-seasons-whisky-india-2026",
    excerpt: "Royal Green and All Seasons are separate Indian whisky brands. Use the makers' descriptions and the full bottle names to compare them fairly.",
    category: "Guides",
    tags: ["Royal Green whisky", "All Seasons whisky", "Indian whisky", "whisky comparison", "Kolkata"],
    meta_title: "Royal Green vs All Seasons Whisky | BevOry",
    meta_description: "Royal Green and All Seasons are different Indian whisky brands. Compare the maker descriptions and check the exact bottle and city before a price search.",
    selection_note: "Search Console, 7 Oct-3 Nov 2026: 'royal green 750ml price in kolkata' had 51 clicks/8,303 impressions; 'all seasons whisky price' had 37 clicks/6,522. Existing product pages cover exact prices, so this addresses a separate brand-choice question.",
    source_links: [royalGreen, allSeasons],
    content: String.raw`
<p><strong>Royal Green and All Seasons are separate Indian whisky brands from different producers.</strong> If the names appear together in a price search, do not assume they are two expressions from one distillery or that a price for one can answer a question about the other. Start with the maker, complete bottle name and volume.</p>
<h2>What is Royal Green?</h2>
<p><a href="${royalGreen}">ADS Spirits presents Royal Green</a> as a whisky blending premium Indian grain spirits with imported Scotch malts. Its product page publishes flavour descriptions, but those are the company's own notes and not an independent score. The presence of imported Scotch malt in an Indian blend does not make the finished bottle a Scotch whisky. Look for “Royal Green” on the current label rather than relying on the green colour of a small online picture; other brands use similar colours.</p>
<h2>What is All Seasons?</h2>
<p><a href="${allSeasons}">Oasis Group lists All Seasons Whisky</a> as a product in its collection, alongside a separately named All Seasons Sir' E Taj. The company describes its signature whisky in smooth-mouthfeel terms. That broad maker description does not tell you which pack or expression a particular shop has, and it is not a basis for asserting that one whisky is smoother than Royal Green. Check whether a search result says All Seasons Whisky, Sir' E Taj or another label before comparing it.</p>
<h2>How should you choose between them?</h2>
<p>The useful first distinction is identity: ADS Spirits makes Royal Green, while Oasis Group presents All Seasons. Royal Green's official page describes the blend components; Oasis Group's page focuses more on the brand and drinking character. Because the maker pages provide different levels of detail, an exact recipe or objective taste ranking would be guesswork. If you have a legal opportunity to taste both, use the same glass and similar measured pours. If you usually add water or soda, try the same amount with each rather than judging one neat and the other diluted.</p>
<h2>What about a Kolkata bottle price?</h2>
<p>Match city, expression, millilitre size and date. BevOry has a <a href="https://bevory.in/kolkata/product/royal-green-whisky">Royal Green product page for Kolkata</a>, but its figure cannot establish today's price for All Seasons. Neither maker page is a current city price list or a stock checker. When a result omits a size, ask the licensed retailer whether it refers to 180ml, 375ml, 750ml or another pack. Inspect the printed MRP, the seal and the legal description on the physical bottle, and request a receipt. BevOry provides information only and does not sell alcohol. Follow local age and dry-day rules; never drink and drive.</p>
`.trim(),
  },
], "2026-11-06T04:30:00.000Z");
