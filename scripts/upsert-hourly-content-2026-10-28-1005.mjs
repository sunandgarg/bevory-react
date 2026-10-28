import "dotenv/config";
import { runContentCycle } from "./hourly-content-cycle.mjs";

const wbPortal = "https://excise.wb.gov.in/Portal_New_Default.aspx";
const wbMrp = "https://excise.wb.gov.in/CommonUser/Check_MRP_Registered_Brand_Liquor.aspx?type=28";
const limon = "https://www.bacardi.com/us/en/our-rums/limon-rum/";

await runContentCycle([
  {
    id: "guide-check-kolkata-liquor-mrp-west-bengal-excise-2026",
    title: "Kolkata Liquor MRP: How to Check the West Bengal Excise List",
    slug: "check-kolkata-liquor-mrp-west-bengal-excise-2026",
    excerpt: "West Bengal Excise has a public liquor MRP lookup. Here is how to match the brand, financial year and bottle size before comparing a Kolkata price.",
    category: "Guides",
    tags: ["Kolkata liquor MRP", "West Bengal excise price list", "Kolkata whisky price", "liquor bottle size", "official MRP"],
    meta_title: "Check Kolkata Liquor MRP on West Bengal Excise | BevOry",
    meta_description: "Use West Bengal Excise's official MRP lookup to check a Kolkata liquor bottle. Match brand, variant, financial year and pack size before comparing prices.",
    selection_note: "Search Console's recent 28 days showed strong Kolkata bottle-price demand: Bacardi Limon 750ml 32 clicks/14,702 impressions, Black Dog 750ml 50/6,587, and Royal Green 750ml 39/6,483. Existing exact product pages answer individual bottle queries; this distinct guide explains the government's MRP lookup instead of duplicating those pages.",
    source_links: [wbPortal, wbMrp],
    content: String.raw`
<p><strong>To check a liquor MRP for Kolkata, start with the West Bengal Excise Directorate's public “Check MRP of Liquor” tool.</strong> It is more useful than a generic city-price snippet when you need the government's listed figure for a specific registered bottle. The <a href="${wbPortal}" target="_blank" rel="noopener noreferrer">Excise Directorate home page</a> links to the service; the <a href="${wbMrp}" target="_blank" rel="noopener noreferrer">MRP lookup</a> provides category, type, financial-year and brand-search fields. The tool was checked on 28 October 2026.</p>

<h2>How do I search for a bottle?</h2>
<p>Open the MRP lookup, select the relevant liquor category and type, then choose the financial year shown on the page. Enter the brand name in “Quick Search by Brand” and inspect the returned entries. A search for a family name alone may bring up multiple expressions. For example, “Signature” can refer to Signature Rare or Signature Premier; “Black Dog” can refer to more than one reserve expression. Read the full product description before taking a figure from the result.</p>
<p>Match the printed bottle volume as carefully as the name. A 180ml, 375ml or 750ml pack is a different listing, even when the branding looks similar. Check the label's alcohol category too: flavoured rum and regular white rum should not be treated as the same item. If a brand does not appear, try its exact spelling or a shorter distinctive term; absence from a search result is not proof that the bottle is unavailable or unregistered.</p>

<h2>Does an MRP result mean a shop has the bottle?</h2>
<p>No. The official lookup is a price reference, not a live inventory feed. It cannot tell you whether a licensed shop near you is open, has stock today, or is affected by a dry-day notice. Before travelling, call the retailer. At the counter, compare the sealed bottle's exact name and size with the listing and its printed MRP, and ask for the normal receipt.</p>

<h2>Where does BevOry fit?</h2>
<p>BevOry's <a href="https://bevory.in/kolkata/product/bacardi-limon/750ml">Bacardi Limon 750ml</a> and <a href="https://bevory.in/kolkata/product/signature-premier/750ml">Signature Premier 750ml</a> pages help you find the correct city, expression and size. Treat displayed prices as indicative and use the state lookup and the physical bottle to verify the current figure. A Kolkata result should not be carried over to Mumbai or Delhi. BevOry does not sell alcohol. Follow local age and dry-day rules, and never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-bacardi-limon-mixers-india-2026",
    title: "What to Mix With Bacardi Limon: Three Simple Drinks",
    slug: "what-to-mix-with-bacardi-limon-india-2026",
    excerpt: "Bacardi Limon is flavoured with lemon, lime and grapefruit. Try it with soda, lemonade or cola, and check the exact bottle when browsing Indian listings.",
    category: "Guides",
    tags: ["Bacardi Limon", "Bacardi Limon mixer", "flavoured rum", "rum and soda", "Kolkata rum"],
    meta_title: "What to Mix With Bacardi Limon | BevOry",
    meta_description: "Three easy Bacardi Limon mixers: soda, lemonade and cola. Learn what the citrus-flavoured rum contains and how to find the exact Indian bottle listing.",
    selection_note: "Search Console showed 32 clicks/14,702 impressions for 'bacardi limon 750ml price in kolkata' and its Kolkata 750ml product page had 55 clicks/25,209 impressions. Existing product and comparison pages cover price and variant identity; this guide serves the separate, practical mixing intent and links to the exact bottle rather than creating another price page.",
    source_links: [limon],
    content: String.raw`
<p><strong>Bacardi Limon works with soda, lemonade or cola.</strong> The choice depends on how sweet you want the finished drink. Bacardi says the rum's citrus character comes from <a href="${limon}" target="_blank" rel="noopener noreferrer">lemon, lime and grapefruit</a>, not lemon alone. That three-fruit blend is why a plain sparkling mixer can be enough. Serve only to adults of legal drinking age and keep measures modest.</p>

<h2>1. Limon and soda: the least sweet starting point</h2>
<p>Add ice to a tall glass, pour a measured serving of Limon, and top with chilled soda water. Stir gently. Taste before adding a squeeze of nimbu: the rum already brings citrus, and extra lime can make the drink sharper than intended. A slice of fresh lime or a little mint is optional. This is a useful choice when you want to notice the rum's citrus flavour without adding sweetness from a bottled mixer. Bacardi's own page lists a Limon-and-soda serve among its suggested drinks.</p>

<h2>2. Limon and lemonade: a sweeter option</h2>
<p>Pour Limon over ice and add cold lemonade, then stir. Bacardi publishes a <a href="${limon}" target="_blank" rel="noopener noreferrer">Limonade recipe</a> using one part rum to two parts lemonade. You can start lighter by using more lemonade; there is no need to match a branded recipe exactly. If the lemonade is already sweet, skip extra syrup. Fresh lemon or lime can balance the sweetness, but add it gradually.</p>

<h2>3. Limon and cola: citrus with a familiar mixer</h2>
<p>Cola brings its own sweetness and spice notes, so start with more mixer than rum and adjust to taste. Bacardi also lists Limon and cola as a pairing. Use plenty of ice and avoid adding another sweet flavoured syrup until you have tried the basic combination. A lime wedge is enough garnish for a casual long drink. These are serving ideas, not a claim that one mixer is objectively best.</p>

<h2>Which bottle should I search for in India?</h2>
<p>Look for the full “Bacardi Limon” expression and the exact millilitre size. A <a href="https://bevory.in/kolkata/product/bacardi-limon/750ml">Kolkata 750ml listing</a> cannot establish a current price or stock position in another city, and Limon is not the same product as Bacardi Carta Blanca. Check the sealed label, ABV, printed MRP and availability with a licensed retailer. This guide was checked against Bacardi's product page on 28 October 2026. BevOry does not sell alcohol; follow local laws and never drink and drive.</p>
`.trim(),
  },
], "2026-10-28T04:34:49.440Z");
