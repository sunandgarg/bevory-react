import "dotenv/config";
import { runContentCycle } from "./hourly-content-cycle.mjs";

const rum = "https://radicokhaitan.com/products/1965-premium-xxx-rum/";
const rumRelease = "https://radicokhaitan.com/wp-content/uploads/2023/03/Press-Release-March-27-2023.pdf";
const boho = "https://adsspirits.com/boho-whisky/";
const green = "https://adsspirits.com/royal-green/";

await runContentCycle([
  {
    id: "guide-1965-xxx-rum-vs-lemon-dash-india-2026",
    title: "1965 XXX Rum vs Lemon Dash: Which Variant Is Which?",
    slug: "1965-xxx-rum-vs-lemon-dash-india-2026",
    excerpt: "The 1965 name covers a dark Premium XXX rum and a lemon-flavoured white rum. Check the variant and bottle size before comparing an Indian listing.",
    category: "Guides",
    tags: ["1965 rum", "1965 Lemon Dash", "Radico Khaitan", "dark rum", "white rum", "Kolkata"],
    meta_title: "1965 XXX Rum vs Lemon Dash | BevOry",
    meta_description: "Compare Radico Khaitan's 1965 Premium XXX Rum and Lemon Dash. Learn which is dark rum, which is flavoured white rum, and how to check a bottle.",
    selection_note: "Search Console's 25 Sep-22 Oct 2026 report showed 6 clicks and 1,596 impressions for '1965 rum price'. An existing exact Kolkata 750ml XXX product page handles price intent; this guide resolves the two-variant naming ambiguity without creating a competing price page.",
    source_links: [rum, rumRelease],
    content: String.raw`
<p><strong>1965 Spirit of Victory is a rum brand with two distinct variants: Premium XXX Rum and Lemon Dash.</strong> The first is a dark rum; the second is a lemon-flavoured white rum. Searching only for “1965 rum” can blur that difference, so the full name on the front label matters more than the shared number.</p>

<h2>What is 1965 Premium XXX Rum?</h2>
<p>Radico Khaitan's <a href="${rum}" target="_blank" rel="noopener noreferrer">Premium XXX product page</a> identifies it as a dark rum and describes hints of honey, chocolate and dried fruit. Those are the maker's tasting notes, not a guaranteed flavour in every glass. The company says the brand began as a tribute to Indian soldiers; the number in the name refers to 1965, not a bottle age or a price.</p>
<p>“XXX” is part of this variant's name. It should not be read as an alcohol percentage, a bottle-size code or proof that every 1965 bottle has the same liquid. If an online card says only “1965”, open the product details or inspect the bottle image before deciding it is the Premium XXX expression.</p>

<h2>How is Lemon Dash different?</h2>
<p>In a <a href="${rumRelease}" target="_blank" rel="noopener noreferrer">March 2023 company release</a>, Radico identified Lemon Dash as a flavoured white rum extension added in 2022. The company described lemon and spice in its profile. That makes it a different expression, not a renamed Premium XXX dark rum or a smaller pack of the same blend.</p>
<p>The 2023 release mentioned distribution in particular states at that time. It does not establish where Lemon Dash is stocked today. Do not assume a retailer has it simply because a national article or an old product image lists it. Likewise, a bottle labelled Lemon Dash should not inherit a dark-rum tasting description from Premium XXX.</p>

<h2>How should I compare a city price?</h2>
<p>Start with the exact variant, then match the city and volume. BevOry's <a href="https://bevory.in/kolkata/product/1965-xxx-rum-8a387ea/750ml">1965 Premium XXX Rum 750ml Kolkata page</a> is for that dark-rum listing, not for Lemon Dash. Any displayed figure is indicative; ask a licensed retailer to confirm the current shelf price and stock for the specific sealed bottle. A 180ml total and a 750ml total are not directly comparable.</p>
<p>Check the printed Indian label for the alcohol percentage and other pack details rather than transferring specifications between variants or markets. BevOry does not sell alcohol. Follow applicable age and dry-day rules, and do not drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-boho-vs-royal-green-whisky-india-2026",
    title: "BOHO vs Royal Green Whisky: How the Two Blends Differ",
    slug: "boho-vs-royal-green-whisky-india-2026",
    excerpt: "BOHO and Royal Green are separate ADS Spirits whiskies. Compare the maker's tasting descriptions and check the exact Delhi 750ml bottles.",
    category: "Guides",
    tags: ["BOHO whisky", "Royal Green whisky", "ADS Spirits", "Indian whisky", "Delhi", "whisky comparison"],
    meta_title: "BOHO vs Royal Green Whisky | BevOry",
    meta_description: "BOHO and Royal Green are different ADS Spirits whiskies. Compare their maker descriptions, label details and exact Delhi 750ml product pages.",
    selection_note: "Search Console's 25 Sep-22 Oct 2026 report showed 6 clicks/5,554 impressions for 'boho whisky' and 6 clicks/3,688 impressions for 'boho whisky price'. Existing exact Delhi BOHO and Royal Green 750ml URLs cover price intent; this guide answers cross-brand choice intent.",
    source_links: [boho, green],
    content: String.raw`
<p><strong>BOHO and Royal Green are different whisky brands from ADS Spirits.</strong> BOHO's maker description leans towards fruit, florals and vanilla, while Royal Green's description includes grassy, vanilla, cinnamon, oak and spicy notes. These are producer tasting notes, not independent scores or a promise that one bottle is better.</p>

<h2>What does the maker say about BOHO?</h2>
<p>The <a href="${boho}" target="_blank" rel="noopener noreferrer">BOHO whisky page</a> describes ripe pear, summer fruit and floral notes alongside smooth malt, creamy vanilla and a subtle peat touch. That combination may help you decide whether to try it neat, with water or in a simple mixed drink, but individual taste varies. The same page uses marketing terms such as “premium”; that is positioning rather than a comparison standard.</p>
<p>BOHO is not another name for Royal Green. If a short search result shows only the company or a similar bottle colour, check the full expression name and the printed label. Avoid treating an unverified review score or a different bottle size as evidence about the exact pack you plan to inspect.</p>

<h2>What does the maker say about Royal Green?</h2>
<p>ADS Spirits' <a href="${green}" target="_blank" rel="noopener noreferrer">Royal Green page</a> says the blend combines Indian grain spirits and imported Scotch malts. Its tasting description mentions freshly cut grass, vanilla, cinnamon and malt on the nose, with fruit, vanilla, oak and a spicy finish. The page discusses maturation of the Scotch malt component; it does not mean the entire finished blend is a single malt or that every ingredient was aged in the same cask.</p>
<p>The company also describes bottle-design changes over time. A photograph on an older listing may not match the presentation now at a local shop. Confirm the sealed bottle's name and volume rather than selecting on packaging colour alone.</p>

<h2>Which Delhi bottle should I compare?</h2>
<p>BevOry has separate <a href="https://bevory.in/delhi/product/boho-boho-premium-blended-whisky-569dfbb/750ml">BOHO 750ml Delhi</a> and <a href="https://bevory.in/delhi/product/royal-green-whisky-728e4c5/750ml">Royal Green 750ml Delhi</a> pages. That aligns the city and size for a useful starting comparison. Any online figure is indicative; a licensed retailer must confirm today's shelf price, stock and actual pack. Neither maker page provides a verified current Delhi price.</p>
<p>Check alcohol percentage on the Indian bottle itself. BevOry does not sell alcohol. Follow applicable age and dry-day rules, and never drink and drive.</p>
`.trim(),
  },
], "2026-10-25T08:31:57.634Z");
