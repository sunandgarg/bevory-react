import "dotenv/config";
import { runContentCycle } from "./hourly-content-cycle.mjs";

const royalStagReport = "https://www.pernod-ricard.com/sites/default/files/inline-files/Pernod_Ricard_IAR25_ENGLISH.pdf";
const royalStagBrand = "https://www.pernod-ricard.com/en/brands/royal-stag";
const mcdowellsRelease = "https://www.diageoindia.com/en/news-and-media/press-releases/2026/diageo-india-launches-the-all-new-mcdowells-no-1";

await runContentCycle([
  {
    id: "guide-royal-stag-double-dark-vs-deluxe-gurgaon-2026",
    title: "Royal Stag Double Dark vs Deluxe: What Is Different?",
    slug: "royal-stag-double-dark-vs-deluxe-gurgaon-2026",
    excerpt: "Double Dark is Royal Stag's peaty expression, not another name for the regular Deluxe whisky. Check the full name and 750ml pack in Gurgaon.",
    category: "Guides",
    tags: ["Royal Stag Double Dark", "Royal Stag Deluxe", "Gurgaon", "Indian whisky", "750ml", "peaty whisky"],
    meta_title: "Royal Stag Double Dark vs Deluxe | BevOry",
    meta_description: "Compare Royal Stag Double Dark and Deluxe using the maker's descriptions, then check the exact Gurgaon 750ml product listing.",
    selection_note: "Live Search Console was unavailable, so no new query volume is asserted. Royal Stag is a high-intent Indian bottle family with separate existing Gurgaon Double Dark and regular 750ml product pages. The guide covers an expression distinction not answered by the existing Deluxe-versus-Barrel Select guide.",
    source_links: [royalStagReport, royalStagBrand],
    content: String.raw`
<p><strong>Royal Stag Double Dark is a separate peaty whisky expression, not a dark-coloured label for regular Royal Stag Deluxe.</strong> Pernod Ricard describes the two blends differently. If a search result gives only “Royal Stag 750ml price,” look for the full expression name before assuming it matches the bottle you intend to buy in Gurgaon.</p>

<h2>What is Royal Stag Double Dark?</h2>
<p>In its <a href="${royalStagReport}" target="_blank" rel="noopener noreferrer">2024/25 integrated annual report</a>, Pernod Ricard says Double Dark Peaty Whisky combines double-distilled Scotch malts, peated malt and Indian grain spirits. The company says maturation in dark-charred American and European oak barrels is part of the expression's smoky profile. These are the maker's formulation and flavour descriptions; they do not establish that every drinker will taste the same notes or that the whisky is available at a particular outlet today.</p>
<p>“Peaty” refers to the smoke-influenced malt component described by the producer. It is not an age statement, a strength rating or an instruction that the drink must be consumed neat. Read the current Indian pack for its exact printed alcohol percentage and any other label claims.</p>

<h2>How does that differ from Deluxe?</h2>
<p>The <a href="${royalStagBrand}" target="_blank" rel="noopener noreferrer">official Royal Stag brand page</a> describes Deluxe as a blend of Indian grain spirits and imported Scotch malts, with woody and fruity notes and a touch of smoke. The report presents Double Dark as a newer, separate expression with a deliberately smoky character. That does not prove that one is objectively better, nor does it make a Deluxe price applicable to Double Dark.</p>
<p>Royal Stag also has Barrel Select, which is another named product. BevOry has a <a href="https://bevory.in/guide/royal-stag-deluxe-vs-barrel-select-india-2026">separate Deluxe-versus-Barrel Select guide</a> for that comparison. Avoid treating all three as interchangeable merely because the front labels share the Royal Stag name.</p>

<h2>Which Gurgaon bottle page should I use?</h2>
<p>For a 750ml Double Dark search, see BevOry's <a href="https://bevory.in/gurgaon/product/royal-stag-double-dark-reserve-peaty-whisky-34eed2a/750ml">Gurgaon Double Dark 750ml product page</a>. The <a href="https://bevory.in/gurgaon/product/royal-stag-royal-stag-4f75669/750ml">regular Royal Stag 750ml page</a> is a separate catalogue entry. Match the full bottle name and size at the retailer before comparing any figures. A 180ml Double Dark listing is not a 750ml price, and neither Gurgaon page establishes a current Delhi or Kolkata shelf price.</p>
<p>Online listings are indicative. Ask a licensed Gurgaon shop about current stock and shelf price, then inspect the sealed bottle's printed expression, volume, ABV and maximum retail price. Local age rules and dry days may apply. BevOry does not sell alcohol; never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-mcdowells-no1-new-blend-bottle-india-2026",
    title: "McDowell's No.1 New Bottle and Blend: What Has Changed?",
    slug: "mcdowells-no1-new-blend-bottle-india-2026",
    excerpt: "Diageo India announced an upgraded McDowell's No.1 whisky blend and redesigned bottle in 2026. Here's what is confirmed and what to check on a shop shelf.",
    category: "Guides",
    tags: ["McDowell's No.1", "McDowell's whisky", "Diageo India", "Mumbai", "new bottle", "whisky guide"],
    meta_title: "McDowell's No.1 New Blend and Bottle | BevOry",
    meta_description: "What Diageo India changed in McDowell's No.1 whisky in 2026, and how to verify whether a Mumbai bottle is the refreshed pack.",
    selection_note: "No fresh Search Console query was accessible this cycle. Diageo's 25 September 2026 producer announcement documents a genuine liquid and packaging change in a major Indian whisky. Existing BevOry Mumbai product URLs identify the brand but cannot prove which physical pack a shop holds; this explainer fills that gap.",
    source_links: [mcdowellsRelease],
    content: String.raw`
<p><strong>Diageo India announced both an upgraded blend and redesigned bottle for McDowell's No.1 whisky on 25 September 2026.</strong> This was not only a label refresh. The <a href="${mcdowellsRelease}" target="_blank" rel="noopener noreferrer">company announcement</a> says the changed liquid contains select imported Scotch, Indian malts and premium grain spirits, while the pack has a new visual identity. It does not give a city-by-city rollout schedule, a new MRP or a way to identify every old and new bottle from an online catalogue title alone.</p>

<h2>What did Diageo say about the whisky?</h2>
<p>Diageo describes extra Scotch in the blend and says it uses select oak and American barrels. Its tasting notes mention vanilla, gentle grain sweetness, malt and matured wood. Those notes are the producer's description, not an independent assessment or a guarantee that every shopper will perceive a difference. The announcement does not quantify how much Scotch was added, so a percentage would be speculation. It also does not state a new alcohol percentage for every Indian pack; check the sealed bottle.</p>
<p>A change to the liquid matters if you are trying to replace a bottle you already know. The same brand name can be printed on older and refreshed stock during a transition. Do not assume that an online photo is up to date or that a shop has sold through all previous packaging.</p>

<h2>What changed on the outside?</h2>
<p>The release calls out a redesigned bottle and more contemporary visual identity. That establishes a packaging change, but the producer's text alone does not provide a complete checklist of marks that must appear on each physical pack in every market. If the appearance is important to you, ask the licensed retailer for a current photo of the actual sealed bottle and compare it with the producer's release imagery. Inspect the full product name, bottle size, statutory label, MRP and seal in person.</p>

<h2>Does BevOry's Mumbai listing show the new blend?</h2>
<p>BevOry's <a href="https://bevory.in/mumbai/product/mcdowells-mc-dowells-no-1-3a41c84/750ml">Mumbai McDowell's No.1 750ml page</a> identifies a city and pack size. It cannot establish whether a particular shop's physical bottle is the newly announced version. The <a href="https://bevory.in/mumbai/product/mcdowells-mcdowell-no1-platinum-bfe18c0/750ml">McDowell's No.1 Platinum 750ml page</a> is a different named expression; the producer's September release should not be applied to Platinum without separate confirmation.</p>
<p>For a current purchase, confirm the exact expression, packaging, shelf price and stock with a licensed local retailer. A national launch announcement is not a live inventory or Mumbai price list. BevOry does not sell alcohol. Follow local age and dry-day rules and never drink and drive.</p>
`.trim(),
  },
], "2026-10-27T08:39:18.460Z");
