import "dotenv/config";
import { runContentCycle } from "./hourly-content-cycle.mjs";

const winery = "https://www.multivu.com/frank-family-vineyards/9408451-en-ffv-simkhai-limited-edition-cabernet-sauvignon-supporting-dress-for-success";
const event = "https://www.frankfamilyvineyards.com/events/simkhai-x-frank-family-vineyards-fashion-show-luncheon-benefiting-dress-for-success";
const label = "https://www.wsetglobal.com/knowledge-centre/blog/2019/how-to-read-wine-labels-part-one-common-features-on-wine-labels";
const choosing = "https://www.wsetglobal.com/knowledge-centre/blog/2025/how-to-find-a-wine-youll-like";

await runContentCycle([
  {
    id: "news-frank-family-simkhai-cabernet-2026",
    title: "Frank Family and SIMKHAI Unveil a Limited-Edition Cabernet",
    slug: "frank-family-simkhai-cabernet-2026",
    excerpt: "Frank Family Vineyards and SIMKHAI have announced a limited-edition Napa Valley Cabernet Sauvignon in a lace-inspired bottle supporting Dress for Success Worldwide.",
    category: "News",
    tags: ["Frank Family Vineyards", "SIMKHAI", "Cabernet Sauvignon", "Napa Valley wine", "wine news"],
    meta_title: "Frank Family x SIMKHAI Cabernet Announced | BevOry",
    meta_description: "Frank Family and SIMKHAI have announced a limited Napa Cabernet. See its release plan and what has not been confirmed for India.",
    selection_note: "A fresh 22 October winery announcement with an upcoming release date and a clear consumer angle; Indian availability is explicitly unconfirmed.",
    source_links: [winery, event],
    content: String.raw`
<p><strong>Frank Family Vineyards and fashion house SIMKHAI have announced a limited-edition Napa Valley Cabernet Sauvignon with a custom lace-inspired bottle.</strong> The 22 October 2026 announcement says the collaboration will support Dress for Success Worldwide through the winery's Frank for a Cause initiative. This is a US release announcement; it does not announce an Indian launch.</p>

<h2>What Is the New Bottle?</h2>
<p>The wine is Frank Family's 2024 Napa Valley Cabernet Sauvignon presented in packaging designed with SIMKHAI. According to the <a href="${winery}" target="_blank" rel="noopener noreferrer">winery's release</a>, designer Jonathan Simkhai adapted lace detailing from the brand's Lina Lace Mini Dress for the bottle. The visual design is the distinguishing feature described in the announcement; the release does not claim a new grape variety or a different winemaking process for this edition.</p>
<p>The winery says the limited-edition bottle is due to make its official debut on 24 October at a fashion show and luncheon in Calistoga, California. The <a href="${event}" target="_blank" rel="noopener noreferrer">event page</a> also lists the collaborative wine in its programme. General availability through the winery's US online shop is planned from 26 October. Until that date, readers should treat the product as announced rather than already on sale.</p>

<h2>How Does the Charity Partnership Work?</h2>
<p>Frank Family says purchases will support its partnership with Dress for Success Worldwide, an organisation focused on helping women with career resources and support. The winery's release describes the collaboration as part of its annual Frank for a Cause initiative. It does not provide a per-bottle donation amount or a percentage for the wine, so a precise charitable contribution should not be inferred from the bottle price.</p>
<p>The Calistoga event brings the wine, the bottle design and the cause together. That makes the launch more than a packaging change, but it is still important to separate the documented details from the broader story: the bottle, planned dates and named beneficiary are confirmed by the winery; any specific impact per purchase would need a separate disclosure.</p>

<h2>Can You Buy It in India?</h2>
<p>The announcement identifies the winery's US shop and selected US events, not an Indian distributor, city listing or retail price. Indian shoppers should not assume the wine will reach Mumbai, Delhi or another local market. Import rules, distribution and local stock can differ by city and change over time.</p>
<p>If the bottle later appears in a licensed Indian shop, check its full product name, vintage, bottle size, importer details and current local price before comparing it with a standard Frank Family Cabernet. For now, the confirmed story is a limited US release with a design-led charity partnership, not an India availability notice.</p>
`.trim(),
  },
  {
    id: "guide-how-to-read-wine-label-india-2026",
    title: "How to Read a Wine Label Before Buying a Bottle",
    slug: "how-to-read-wine-label-india-2026",
    excerpt: "A wine label can tell you about the producer, grape, region, vintage and alcohol level. Here is what each clue means, and what it cannot guarantee.",
    category: "Guides",
    tags: ["how to read a wine label", "wine buying guide India", "wine vintage", "wine grape variety", "wine region"],
    meta_title: "How to Read a Wine Label in India | BevOry",
    meta_description: "Learn to read wine labels: producer, grape, origin, vintage, ABV and style terms. Use the clues to compare bottles before buying.",
    selection_note: "A high-intent beginner wine-shopping question, sourced to WSET and distinct from existing red-versus-white and wine-style guides.",
    source_links: [label, choosing],
    content: String.raw`
<p><strong>To read a wine label, start with the producer, wine name, grape or region, vintage and alcohol by volume.</strong> Those details help you identify the exact bottle and make an informed guess about its style. They do not guarantee that you will like it, or that two bottles with similar-looking labels will taste the same.</p>

<h2>Start With the Producer and Wine Name</h2>
<p>The producer tells you who made or marketed the wine; the wine name identifies a particular bottle within its range. A single producer may sell several reds, whites or sparkling wines, so the brand name alone is not enough for a useful price comparison. Note the complete name, including any range or vineyard designation, and compare the same bottle size.</p>
<p>The <a href="${label}" target="_blank" rel="noopener noreferrer">Wine &amp; Spirit Education Trust (WSET)</a> explains that a wine name can refer to a grape, a place or a name chosen by the producer. Do not assume every prominent place name is the grape variety.</p>

<h2>Look for Grape and Origin</h2>
<p>If the grape is stated, it gives you a useful first clue about flavour and texture. A familiar grape can help you narrow a crowded shelf, but growing region and winemaking also matter. WSET notes that some European labels emphasise the geographical origin rather than putting a grape variety on the front. In that case, research the named region instead of guessing what is inside.</p>
<p>Origin can be broad, such as a country, or specific, such as a named wine region. More precise geography does not automatically make a wine better for your tastes. It gives you a more focused clue about where its grapes came from and, in some regions, the rules under which it was made. If a label carries an unfamiliar regional term, use it as a prompt to learn more rather than as a quality score.</p>

<h2>What Does the Vintage Mean?</h2>
<p>Vintage usually refers to the year the grapes were harvested. It is not the bottling date or an expiry date. WSET's <a href="${choosing}" target="_blank" rel="noopener noreferrer">consumer wine guide</a> cautions against treating the year alone as proof of quality: region, producer and style provide the context. Some wines are intended for early drinking, while a smaller number can benefit from ageing.</p>
<p>If no vintage is shown, check the specific wine's description. Do not invent a year based on a shop listing or a photograph of an older label. When comparing two prices, make sure the vintage matches if it is part of the product name.</p>

<h2>Check ABV, Style and the Back Label</h2>
<p>Alcohol by volume (ABV) is generally on the bottle, sometimes on the back. Read the number on the exact bottle you are considering rather than relying on a generic brand description. Style words also matter: terms such as dry or demi-sec tell you something different from colour or grape alone. WSET notes that some label terms have formal meanings while others are producer descriptions.</p>
<p>For an Indian purchase, finish with the practical details: bottle size, importer or local label information, current city price and availability from a licensed retailer. A wine available in one city may not be stocked or priced the same way in another. If you know you prefer crisp whites or softer reds, use the label to shortlist options, then let your own taste decide. The best label is the one that helps you identify what you are actually buying.</p>
`.trim(),
  },
], "2026-10-23T07:26:04.901Z");
