import "dotenv/config";
import { runContentCycle } from "./hourly-content-cycle.mjs";

const black = "https://www.johnniewalker.com/en-us/our-whisky/core-range/johnnie-walker-black-label";
const doubleBlack = "https://www.johnniewalker.com/en-us/our-whisky/core-range/johnnie-walker-double-black";
const jameson = "https://www.jamesonwhiskey.com/en-us/our-whiskey/jameson-irish-whiskey/";
const blackBarrel = "https://www.jamesonwhiskey.com/en-us/our-whiskey/jameson-black-barrel/";

await runContentCycle([
  {
    id: "guide-johnnie-walker-black-label-vs-double-black-india-2026",
    cover_image_url: "/category-cutouts/world-whisky.png",
    title: "Johnnie Walker Black Label vs Double Black: Which Bottle Is Which?",
    slug: "johnnie-walker-black-label-vs-double-black-india-2026",
    excerpt: "Black Label and Double Black are separate Johnnie Walker blends. The key differences are the stated age and the more smoke-forward style of Double Black.",
    category: "Guides",
    tags: ["Johnnie Walker", "Black Label", "Double Black", "Scotch whisky", "India whisky guide"],
    meta_title: "Black Label vs Double Black: Key Differences | BevOry",
    meta_description: "Compare Johnnie Walker Black Label and Double Black by age statement, flavour style and bottle identity before checking an Indian city price.",
    selection_note: "Search Console showed 39 clicks and 6,635 impressions for 'blue label price in kolkata'. Walker expression confusion is visible, while existing BevOry product pages already serve exact city-price intent. This article answers a distinct comparison question.",
    source_links: [black, doubleBlack],
    content: String.raw`
<p><strong>Johnnie Walker Black Label and Double Black are different blended Scotch whiskies.</strong> Black Label carries a 12-year age statement; Double Black is presented by its maker as a bolder, smokier relative. The word “double” does not mean twice the age, twice the alcohol, or two bottles. If a listing says only “Johnnie Walker Black,” check the complete label before comparing prices.</p>
<h2>What is in Black Label?</h2>
<p>Johnnie Walker says <a href="${black}" target="_blank" rel="noopener noreferrer">Black Label</a> is blended from single malt and grain whiskies aged in casks for at least 12 years. The brand describes fruit, spice and vanilla alongside smoke. That 12-year statement belongs to Black Label; it should not be carried over to every dark-coloured Johnnie Walker bottle. The maker suggests drinking it neat, over ice or in a highball. These are serving ideas, not evidence that one expression is objectively better.</p>
<h2>How is Double Black different?</h2>
<p>The <a href="${doubleBlack}" target="_blank" rel="noopener noreferrer">Double Black product page</a> emphasises a fuller body and lingering smokiness. Johnnie Walker also describes the blend as drawing on naturally smoky whiskies and charred barrels. It is a separate expression, not a renamed Black Label or a special size of the same liquid. The official page does not give it the 12-year statement shown for Black Label, so do not assume it has one.</p>
<p>If you enjoy a clearly smoky style, Double Black is the more relevant bottle to consider based on the maker's descriptions. If you want the stated 12-year blend with a broader fruit-and-spice profile, start with Black Label. Taste remains personal: the descriptions help narrow your choice, but they cannot predict which whisky you will prefer.</p>
<h2>How should I compare prices in India?</h2>
<p>First match the city, exact expression and printed bottle volume. A 700ml imported bottle and a 750ml bottle cannot be compared by total price alone. Prices vary by state and can change; neither a US product page nor a price from another Indian city establishes today's local shelf price. Use the expression-specific BevOry product listing where available, then check the sealed bottle's MRP and current availability with a licensed retailer.</p>
<p>Look for “Black Label” or “Double Black” on the front label, inspect the volume and seal, and keep the shop receipt. Avoid treating packaging colour as proof of the expression. BevOry does not sell alcohol. Follow local age and dry-day rules, and do not drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-jameson-original-vs-black-barrel-india-2026",
    cover_image_url: "/category-cutouts/world-whisky.png",
    title: "Jameson Original vs Black Barrel: What Changes in the Bottle?",
    slug: "jameson-original-vs-black-barrel-india-2026",
    excerpt: "Jameson Original and Black Barrel are separate Irish whiskey expressions. Compare the blend and barrel treatment before searching for a city-specific price.",
    category: "Guides",
    tags: ["Jameson", "Jameson Original", "Jameson Black Barrel", "Irish whiskey", "whiskey comparison"],
    meta_title: "Jameson Original vs Black Barrel | BevOry",
    meta_description: "Jameson Original and Black Barrel are not the same whiskey. See how the blend and double-charred barrels differ before comparing Indian listings.",
    selection_note: "Distinct expression-comparison intent complements existing city/product listings and the observed demand for named whisky bottles. No exact-match Jameson Original-versus-Black-Barrel guide was found in the local content scripts.",
    source_links: [jameson, blackBarrel],
    content: String.raw`
<p><strong>Jameson Original and Jameson Black Barrel are two different Irish whiskeys from the same maker.</strong> Original is the familiar triple-distilled blend. Black Barrel uses a different blend with a greater proportion of pot still whiskey and maturation in double-charred barrels. A shop result that shortens both to “Jameson” leaves out the information needed to choose the right bottle.</p>
<h2>What defines Jameson Original?</h2>
<p>According to <a href="${jameson}" target="_blank" rel="noopener noreferrer">Jameson's Original product page</a>, the whiskey combines pot still and grain whiskeys, is triple distilled and matures in seasoned oak for at least four years. The maker describes light floral aromas, spice, toasted wood, vanilla and nutty notes. Those are brand tasting notes, not a universal tasting verdict. Original can be served neat, over ice or mixed; the choice depends on how you prefer to drink whiskey.</p>
<h2>What changes with Black Barrel?</h2>
<p>The maker's <a href="${blackBarrel}" target="_blank" rel="noopener noreferrer">Black Barrel page</a> says this expression has a higher proportion of pot still whiskey and spends time in double-charred barrels. It describes butterscotch, toffee, vanilla, toasted wood and a richer finish. “Black Barrel” refers to the expression and its barrel treatment; it does not mean the standard Original is simply poured into a dark bottle. The two should be compared as separate products.</p>
<p>If you want a lighter starting point or a flexible mixer, Original is the obvious bottle to examine first from the maker's descriptions. If you are curious about a richer, more wood-led profile, consider Black Barrel. Neither choice is automatically superior, and a higher shop price is not proof that it will suit your taste better.</p>
<h2>What should an Indian buyer check?</h2>
<p>Read the full front label and exact bottle size. A 700ml Black Barrel listing should not be set beside a 750ml Original price without accounting for volume. Check the relevant city: prices and availability can differ between Mumbai, Delhi and Kolkata, and online figures may lag the shop shelf. Ask a licensed retailer to confirm the current MRP and stock for the exact expression and size you want.</p>
<p>Do not confuse Black Barrel with a limited edition or another Jameson variant. Inspect the seal, state marking and printed details on the actual bottle. BevOry does not sell alcohol; respect local age limits and dry days, and never drink and drive.</p>
`.trim(),
  },
], "2026-10-29T08:00:00.000Z");
