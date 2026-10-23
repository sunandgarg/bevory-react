import "dotenv/config";
import { runContentCycle } from "./hourly-content-cycle.mjs";

const filing = "https://nsearchives.nseindia.com/corporate/ABDINDIA_22102026103922_SE_Intimation-Press_Release-Telangana_Malt_Distillery_sd.pdf";
const xclamation = "https://www.pernod-ricard.com/en/locations/india/media/innovation-led-portfolio-strategy-set-power-pernod-ricard-india-s-next-growth";

await runContentCycle([
  {
    id: "news-abd-telangana-malt-distillery-operations-2026",
    title: "ABD Starts Malt Distillery Operations in Telangana: What It Means for Whisky Buyers",
    slug: "abd-telangana-malt-distillery-operations-2026",
    excerpt: "Allied Blenders & Distillers has started commercial operations at its Rangapur malt distillery. The news concerns whisky production, not an immediate new bottle or retail price.",
    category: "News",
    tags: ["Allied Blenders & Distillers", "Telangana malt distillery", "Indian whisky", "Rangapur", "whisky news India"],
    meta_title: "ABD Telangana Malt Distillery Starts Operations | BevOry",
    meta_description: "ABD has started its Rangapur malt distillery in Telangana. Learn what the October 2026 filing says and what it does not mean for whisky prices or launches.",
    selection_note: "Fresh October 22 NSE filing; India whisky production is relevant to the same audience searching BevOry's Indian whisky brands. No consumer price effect is claimed.",
    source_links: [filing, "https://www.abdindia.com/wp-content/uploads/2026/06/18th-AGM-Notice-and-Annual-Report.pdf"],
    content: String.raw`
<p><strong>Allied Blenders & Distillers (ABD) says commercial operations have begun at its malt distillery in Rangapur, Telangana.</strong> The company disclosed the development on 22 October 2026. For shoppers, this is a production milestone, not an announcement that a new whisky bottle is on shelves or that existing whiskies have changed price.</p>

<h2>What Has Started in Rangapur?</h2>
<p>According to <a href="${filing}" target="_blank" rel="noopener noreferrer">ABD's exchange-filed press release</a>, the greenfield malt distillery has approved manufacturing capacity of about 4.4 million bulk litres a year. The company says making malt spirit in-house will give it more control over an input used in its whisky portfolio. It also says the facility can support product development and the laying down of spirit for future maturation.</p>
<p>This follows the plan described in <a href="https://www.abdindia.com/wp-content/uploads/2026/06/18th-AGM-Notice-and-Annual-Report.pdf" target="_blank" rel="noopener noreferrer">ABD's 2025–26 annual report</a>, which identified Rangapur as a captive malt project for its prestige whisky business and potential single malt development. The October filing changes the status from a planned facility to one with commercial operations under way.</p>

<h2>Will ABD Release a New Single Malt Now?</h2>
<p>The filing does not provide a launch date, bottle name, age statement, alcohol strength, city-wise availability or retail price for a new single malt. Distilling spirit and selling a finished whisky are separate steps. If a whisky is described as matured, the producer still has to hold the spirit for the period required by the product it intends to make. A running distillery is therefore not evidence that a particular new expression can be bought today.</p>
<p>It is also too early to infer that existing ABD whiskies will taste different. The company's announcement discusses supply, quality control and future development; it does not say that a currently sold bottle has been reformulated. A change in production capability should not be confused with a confirmed change to a specific product label.</p>

<h2>What Should Indian Buyers Watch For?</h2>
<p>Watch for a separate official product announcement naming the expression, bottling details and launch markets. Once a bottle reaches a licensed retailer, compare its exact name and size with the current local shelf price. Whisky availability and pricing vary by state; a Telangana manufacturing site does not set the price in Hyderabad, Delhi or Mumbai.</p>
<p>ABD's filing is significant because it adds domestic malt-spirit capacity to an Indian whisky producer. Its immediate consumer meaning is limited: there is no verified new retail product or price in this announcement. BevOry does not sell alcohol; buy only where permitted and confirm any later product claim against the current bottle and official producer information.</p>
`.trim(),
  },
  {
    id: "guide-xclamation-whisky-vs-five-spirit-range-india-2026",
    title: "Xclamation Whisky or Another Xclamat!on Spirit? Check the Bottle First",
    slug: "xclamation-whisky-vs-five-spirit-range-india-2026",
    excerpt: "Seagram's Xclamat!on is a five-spirit Indian range, not just a whisky. Learn how to identify the whisky and avoid comparing its price with vodka, gin, rum or brandy.",
    category: "Guides",
    tags: ["Xclamation whisky", "Seagram's Xclamat!on", "Pernod Ricard India", "Indian whisky", "whisky bottle guide"],
    meta_title: "Xclamation Whisky: Check the Exact Bottle | BevOry",
    meta_description: "Seagram's Xclamat!on covers whisky, vodka, gin, rum and brandy. Learn how to identify the whisky and compare the right bottle and size in your city.",
    selection_note: "Recent Search Console data showed 10,307 impressions and 19 clicks for an Xclamation whisky query. This disambiguates the producer's five-spirit range and supports existing exact-match product pages without a competing price guide.",
    source_links: [xclamation],
    content: String.raw`
<p><strong>Seagram's Xclamat!on is a brand range, not the name of one whisky bottle.</strong> Pernod Ricard India introduced five spirits under the name: whisky, vodka, gin, rum and brandy. If you search “Xclamation whisky price,” identify the whisky on the label before comparing any number. A result for Xclamat!on vodka or rum answers a different question.</p>

<h2>What Is Xclamat!on Whisky?</h2>
<p>In its <a href="${xclamation}" target="_blank" rel="noopener noreferrer">official range announcement</a>, Pernod Ricard India describes the whisky as a blend of Speyside Scotch malts and Indian grain spirits. That does not make the complete bottle Scotch whisky: the producer describes a locally crafted Indian range that uses imported malt as one component. Read the current Indian bottle label for its legal description, alcohol strength and pack volume rather than assuming details from another market or expression.</p>
<p>The producer describes the other Xclamat!on bottles separately. Brandy uses a different base and production approach, while the vodka, gin and rum are each their own spirits. A shared brand identity and similar packaging can make a search result look close to the whisky result even when its contents are not close at all.</p>

<h2>How Do I Find the Right Price in My City?</h2>
<p>Use three checks: the word <em>whisky</em> on the bottle, its volume in millilitres, and the city where you plan to buy it. BevOry's <a href="https://bevory.in/warangal/product/xclamation-whisky/750ml" target="_blank" rel="noopener noreferrer">Xclamation Whisky 750ml page for Warangal</a> is an example of an exact product-and-pack listing. It is not a national price, a live stock feed or a price for Xclamat!on gin, vodka, rum or brandy.</p>
<p>Do not compare a 180ml bottle with a 750ml bottle as though they were the same purchase. Even when two listings show the same expression, city and state taxes, current registered price and retailer inventory can differ. Check the exact bottle at a licensed shop and confirm the current shelf price there before buying.</p>

<h2>Does the Spelling Matter?</h2>
<p>The launch uses the stylised name “Xclamat!on,” while shoppers often type “Xclamation.” Both spellings may lead you toward the same brand family, but a search result still needs the category name. If the result says only “Xclamation” with no spirit, size or city, it is too broad to be a reliable whisky price answer.</p>
<p>Pernod Ricard announced a phased launch starting with several Indian markets, not a guarantee of availability at every retailer. Check the bottle seal, printed name and volume, then confirm stock and price locally. The useful comparison is the same whisky expression and size in the same city, not the shared logo on five different spirits.</p>
`.trim(),
  },
], "2026-10-23T10:31:44.794Z");
