import "dotenv/config";
import { runContentCycle } from "./hourly-content-cycle.mjs";

const report = "https://in.marketscreener.com/news/india-s-scotch-probe-of-diageo-pernod-undermining-india-uk-pact-benefits-trade-group-says-ce785cdfda8df62c";
const uk = "https://www.business.gov.uk/export-from-uk/markets/india/trade-agreement/tariffs-and-customs-for-imports-from-and-exports-to-india/";
const gold = "https://www.oaksmithwhisky.com/oaksmith-premium-whisky/oaksmith-gold";
const international = "https://www.oaksmithwhisky.com/oaksmith-premium-whisky/oaksmith-international";

await runContentCycle([
  {
    id: "news-india-uk-scotch-bulk-import-tariff-dispute-2026-10-24",
    title: "India-UK Scotch Tariff Dispute: What Is Being Challenged?",
    slug: "india-uk-scotch-bulk-import-tariff-dispute-2026-10-24",
    excerpt: "An industry group disputes India's reported treatment of bulk Scotch imports under the UK trade deal. The disagreement is about customs classification, not a confirmed retail price change.",
    category: "News",
    tags: ["India UK trade deal", "Scotch whisky", "import tariff", "Diageo", "Pernod Ricard"],
    meta_title: "India-UK Scotch Tariff Dispute Explained | BevOry",
    meta_description: "An industry group challenges India's reported tariff treatment of bulk Scotch imports. What the dispute means, and why bottle prices are not settled.",
    selection_note: "Reuters reported a new October 24 industry challenge to the treatment of bulk Scotch imports. This is India-relevant and time-sensitive. UK government guidance establishes the general tariff schedule; the article keeps the unresolved classification issue separate from consumer prices.",
    source_links: [report, uk],
    content: String.raw`
<p><strong>An Indian spirits trade group says the lower Scotch whisky tariff under the India-UK trade agreement should also cover bulk Scotch imports used in Indian blends.</strong> Indian investigators have reportedly taken a different view for some bulk imports. This is an unresolved customs-classification dispute, not an announced change to the price of any bottle on a shop shelf.</p>

<h2>What happened?</h2>
<p>In a <a href="${report}" target="_blank" rel="noopener noreferrer">Reuters report carried by MarketScreener and updated on 24 October 2026</a>, the International Spirits and Wines Association of India said that excluding bulk Scotch from the reduced rate conflicts with the India-UK trade agreement. Reuters reported that the group made its case in a letter seen by the news agency. Reuters also said India's Directorate of Revenue Intelligence had examined imports by Diageo and Pernod Ricard and questioned executives this month.</p>
<p>Those reported searches and questions are not a finding of wrongdoing. The disagreement concerns how bulk Scotch whisky material should be classified for customs purposes. The companies' own positions and any formal decision must be distinguished from the trade group's argument and the investigators' reported interpretation.</p>

<h2>What does the trade agreement say about Scotch duties?</h2>
<p><a href="${uk}" target="_blank" rel="noopener noreferrer">UK government trade guidance</a> says the tariff on Scotch whisky under HS code 2208.30 fell from 150% to 75% when the agreement entered into force, with staged reductions toward 40% over ten years. The broad schedule is public. The present dispute is whether the bulk material at issue qualifies for that reduced treatment under the relevant customs classification. This article does not decide that legal question.</p>
<p>The existence of a lower tariff for a defined import category does not mean every whisky-related shipment is automatically eligible. Equally, a reported challenge to an import declaration does not mean all Scotch imports are back at the old rate. The classification and any final assessment belong to customs authorities and, if contested, the applicable review process.</p>

<h2>Will whisky prices change in India?</h2>
<p>There is no verified, immediate shelf-price change from this report. Import duty is only one component of a bottle's eventual price. State-level duties, other charges, pack sizes, distribution and retailer pricing also matter. The dispute concerns inputs used in some Indian blends, so it should not be conflated with the price of a sealed imported Scotch bottle.</p>
<p>For consumers comparing Royal Stag, Blenders Pride, McDowell's or a Scotch whisky, the practical step remains the same: check the exact expression and millilitre size, then ask a licensed retailer for the current price in your city. Do not treat a headline about a tariff investigation as a new price list or evidence that a familiar brand's formula has changed.</p>
<p>BevOry will update this story if authorities or the companies publish a substantive decision. BevOry does not sell alcohol. Follow local age and dry-day rules and never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-oaksmith-gold-vs-international-whisky-india-2026",
    title: "Oaksmith Gold vs International: Compare the Two Blends",
    slug: "oaksmith-gold-vs-international-whisky-india-2026",
    excerpt: "Oaksmith Gold and International are two made-for-India whisky blends. Compare the producer's tasting notes, then check exact city and bottle size before buying.",
    category: "Guides",
    tags: ["Oaksmith Gold", "Oaksmith International", "Indian whisky", "Suntory", "whisky comparison"],
    meta_title: "Oaksmith Gold vs International Whisky | BevOry",
    meta_description: "Compare Oaksmith Gold and International using Suntory's official blend and tasting descriptions. Check the exact bottle, size and local listing.",
    selection_note: "Search Console's recent 28-day view showed 12 clicks/2,858 impressions for Oaksmith Kolkata. Exact Gold and International product URLs exist, while the maker offers distinct product details; this guide serves comparison intent without duplicating a city-price page.",
    source_links: [gold, international],
    content: String.raw`
<p><strong>Oaksmith Gold and Oaksmith International are distinct made-for-India whisky blends.</strong> Both are from Suntory Global Spirits and both draw on Scotch malt, Kentucky straight bourbon and Indian grain neutral spirit, according to their producer pages. Their shared ingredients and Oaksmith name should not be taken to mean the bottles have identical profiles or prices.</p>

<h2>How does the producer describe Gold?</h2>
<p>The <a href="${gold}" target="_blank" rel="noopener noreferrer">Oaksmith Gold product page</a> calls it the brand's most premium expression. Its published tasting notes mention a rich, fruity and sweet nose with a hint of peat, followed by a mild but full-bodied palate and oak character. Those are the maker's descriptions, not a promise that every drinker will taste the same things.</p>
<p>The producer lists 180ml, 375ml and 750ml formats for Gold. A size shown on a brand website does not establish that it is registered or stocked at a particular shop today. Check the actual local bottle and the exact size in a listing before using a displayed figure as a comparison point.</p>

<h2>How is International described?</h2>
<p>The separate <a href="${international}" target="_blank" rel="noopener noreferrer">Oaksmith International page</a> describes a softer grain sweetness on the nose, a clean and mild palate with peat and oak, and spice and peat on the finish. It also lists 180ml, 375ml and 750ml packs. The brand presents International as a made-for-India blend, not as a bottle imported intact from Scotland, the United States or Japan.</p>
<p>Both pages identify Scotch malt and Kentucky bourbon components along with Indian grain spirit. That does not make either finished product a Scotch whisky or a Japanese whisky. “Japanese craftsmanship” refers to the maker's blending approach. The producer publishes the same alcohol percentage on both pages, but check the current Indian bottle label before relying on a website number for the pack you are holding.</p>

<h2>Which should you compare in your city?</h2>
<p>If the maker's fruit-and-sweet description interests you, inspect Gold first. If its grain-led, mild description sounds closer to your preference, inspect International. Neither is an objective winner. The names and tasting descriptions are useful starting points for choosing a bottle, not a substitute for your own measured tasting or the current label.</p>
<p>BevOry lists <a href="https://bevory.in/kolkata/product/oaksmith-gold-whisky-08f4d5b/750ml" target="_blank" rel="noopener noreferrer">Oaksmith Gold 750ml</a> and <a href="https://bevory.in/kolkata/product/oaksmith-international-whisky-088d87d/750ml" target="_blank" rel="noopener noreferrer">Oaksmith International 750ml</a> for Kolkata. These exact pages keep the city and size aligned, but online figures remain indicative. Ask a licensed retailer for today's price and stock, and check the seal, full name and volume. BevOry does not sell alcohol. Follow local age and dry-day rules and never drink and drive.</p>
`.trim(),
  },
], "2026-10-24T12:26:30.543Z");
