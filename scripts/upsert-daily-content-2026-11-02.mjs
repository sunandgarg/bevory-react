import "dotenv/config";
import { runContentCycle } from "./hourly-content-cycle.mjs";

const mcdowell = "https://www.diageoindia.com/en/news-and-media/press-releases/2026/diageo-india-launches-the-all-new-mcdowells-no-1";
const royalStag = "https://www.pernod-ricard.com/en/brands/royal-stag";
const beerReport = "https://www.unitedbreweries.com/pdf/InvestorReport/UB-Annual-Financial-Report-2021-2022.pdf";
const beerPortfolio = "https://www.unitedbreweries.com/pdf/Material%20Events/Regulation%2030%20SEBI%20%28LODR%29%20Regulations%202015%20-%20Launch%20Kingfisher%20Smooth%20Strong-Rajasthan.pdf";
const godawan = "https://www.diageoindia.com/en/news-and-media/stories/2024/a-taste-of-indian-excellence-award-winning-godawan-artisanal-indian-single-malt-launches-in-uk";
const godawanReport = "https://www.diageoindia.com/~/media/Files/D/Diageo-V2/Diageo-India/investors/financials/results-reports-and-presentations/united-spirits-limited-annual-report-2024-25.pdf";

await runContentCycle([
  {
    id: "guide-mcdowells-no1-vs-royal-stag-deluxe-india-2026",
    title: "McDowell's No.1 vs Royal Stag Deluxe: What Actually Differs?",
    slug: "mcdowells-no1-vs-royal-stag-deluxe-india-2026",
    excerpt: "Two familiar Indian whiskies have different makers and blend descriptions. Compare the exact label and bottle before comparing local prices.",
    category: "Guides",
    tags: ["McDowell's No.1", "Royal Stag Deluxe", "Indian whisky", "whisky comparison"],
    meta_title: "McDowell's No.1 vs Royal Stag Deluxe | BevOry",
    meta_description: "Compare McDowell's No.1 and Royal Stag Deluxe using current maker descriptions. Learn what the 2026 McDowell's refresh changes and how to check a bottle.",
    selection_note: "Search Console's 25-31 October sample favored exact Indian bottle pages; this separate cross-brand decision was not covered by an existing comparison. No direct query count for this pairing is asserted.",
    source_links: [mcdowell, royalStag],
    content: String.raw`
<p><strong>McDowell's No.1 and Royal Stag Deluxe are different Indian whiskies from different makers.</strong> Diageo India produces McDowell's No.1; Royal Stag is a Pernod Ricard brand. That distinction matters more than an online headline that calls both simply "whisky." For a useful comparison, identify the exact expression, the bottle size and the city before looking at a price.</p>
<h2>What changed in McDowell's No.1?</h2>
<p>In a <a href="${mcdowell}">September 2026 announcement</a>, Diageo India described an upgraded McDowell's No.1 blend and a redesigned bottle. The company says the refreshed whisky combines select imported Scotch, Indian malts and grain spirits, with maturation in selected oak and American barrels. Its own tasting description mentions vanilla, gentle grain sweetness, wood and delicate spice. Those are producer notes for the announced refresh, not an independent tasting verdict or proof that every bottle in a shop has already changed.</p>
<p>If you are specifically seeking the refreshed presentation, inspect the sealed bottle and current label. A generic McDowell's No.1 listing may use an older photograph, and a search snippet cannot establish whether a retailer holds old or new stock. Ask the retailer which pack it is offering rather than assuming a published announcement has reached every city at once.</p>
<h2>What is Royal Stag Deluxe?</h2>
<p><a href="${royalStag}">Pernod Ricard's Royal Stag page</a> says the brand combines Indian grain spirits with imported Scotch malts. It describes Deluxe as woody and fruity with a touch of smoke. The same page lists Barrel Select as a separate expression. Do not import Barrel Select's maturation description or labelled strength into a comparison of Deluxe. The full product name is the practical safeguard here.</p>
<h2>Which bottle fits your preference?</h2>
<p>The makers' descriptions suggest two different starting points: the refreshed McDowell's description emphasises vanilla and soft grain, while Royal Stag Deluxe's description mentions wood, fruit and a little smoke. These are not comparable blind-tasting scores, and neither establishes which bottle is objectively better. If you can sample them legally, use a similar measured pour and glass for each rather than changing the mixer, ice and serving temperature at the same time.</p>
<h2>How should an Indian city-price comparison work?</h2>
<p>Compare the same millilitre size in the same city on the same day. A 180ml quote for one whisky cannot be compared directly with a 750ml quote for the other. Even a matching size may represent a different expression or an older price. Check the physical label, printed MRP, current retailer price and receipt with a licensed seller. The maker sources above establish identity and producer descriptions; they do not verify today's stock or shelf price anywhere in India. BevOry does not sell alcohol. Follow local law and never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-kingfisher-premium-vs-strong-india-2026",
    title: "Kingfisher Premium vs Strong: Which Beer Are You Looking At?",
    slug: "kingfisher-premium-vs-strong-india-2026",
    excerpt: "Kingfisher Premium and Strong are separate beer lines. Here is how to compare the right can or bottle without mixing up pack sizes or strength claims.",
    category: "Guides",
    tags: ["Kingfisher Premium", "Kingfisher Strong", "Indian beer", "beer comparison"],
    meta_title: "Kingfisher Premium vs Strong Beer | BevOry",
    meta_description: "Kingfisher Premium and Strong are distinct beers. Check the full label, local ABV, can or bottle volume, and current retailer price before comparing.",
    selection_note: "The 25-31 October Search Console top-query sample did not show this beer pairing. The existing Kingfisher guide compares Premium with Ultra Max, not Strong; this covers a separate expression-choice question without another city-price page.",
    source_links: [beerReport, beerPortfolio],
    content: String.raw`
<p><strong>Kingfisher Premium and Kingfisher Strong are not two names for the same beer.</strong> United Breweries lists them as separate products under the Kingfisher family. A result headed only "Kingfisher beer price" does not identify which one it means, and a photograph of a can is not enough if the listing title and pack size disagree.</p>
<h2>What does the maker say about Premium?</h2>
<p><a href="${beerReport}">United Breweries' annual report</a> describes Kingfisher Premium as a mild-beer brand launched in 1978. The report lists bottle and can formats for Premium, including 330ml, 500ml and 650ml packs in its historical portfolio description. That does not guarantee each format is currently sold in every Indian city. Retail formats and stock can change, so use the actual sealed pack as the final check.</p>
<h2>What does Strong mean here?</h2>
<p>The same <a href="${beerReport}">company report</a> identifies Kingfisher Strong as a distinct line launched in 1999 for the strong-beer segment. A later <a href="${beerPortfolio}">United Breweries exchange filing</a> also lists Strong and Premium separately in its portfolio. These sources support the product distinction, but they do not establish the current alcohol percentage of every pack on a local shelf. Read the ABV printed on the can or bottle you are considering rather than copying a number from another market or older listing.</p>
<h2>Is Strong simply a better-value Premium?</h2>
<p>No such conclusion follows from the names. The two lines serve different preferences. Total pack price also hides volume: a 500ml can and a 650ml bottle are not a like-for-like comparison. If your question is cost per 100ml, divide each current shelf price by the pack volume and multiply by 100. If your question is how much alcohol a pack contains, compare the labelled ABV and volume together. Neither calculation tells you which flavour you will enjoy.</p>
<h2>What should you check in a shop?</h2>
<p>Ask for "Kingfisher Premium" or "Kingfisher Strong" in full, then specify can or bottle and the millilitre size. Inspect the label and seal, confirm the local retailer's current price and request a receipt. Do not use a Mumbai quote as a price for Gurgaon, or assume a product page proves real-time stock. BevOry's listings are informational and do not sell or deliver alcohol. Follow local age and dry-day rules, drink responsibly, and never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-godawan-01-vs-02-indian-single-malt-2026",
    title: "Godawan 01 vs 02: A Guide to the Two Indian Single Malts",
    slug: "godawan-01-vs-02-indian-single-malt-2026",
    excerpt: "Godawan 01 Rich and Rounded and 02 Fruit and Spice have different cask descriptions and producer tasting notes. Compare the right expression and bottle format.",
    category: "Guides",
    tags: ["Godawan 01", "Godawan 02", "Indian single malt", "whisky comparison"],
    meta_title: "Godawan 01 vs 02 Indian Single Malt | BevOry",
    meta_description: "Compare Godawan 01 Rich and Rounded with 02 Fruit and Spice using Diageo India's cask and tasting descriptions. Check the exact bottle before buying.",
    selection_note: "The 25-31 October Search Console top-query sample did not show this pairing. BevOry has individual Godawan 01 and 02 pages but no exact comparison guide; this targets expression-choice intent rather than another city-price page.",
    source_links: [godawan, godawanReport],
    content: String.raw`
<p><strong>Godawan 01 Rich and Rounded and Godawan 02 Fruit and Spice are two named Indian single malts, not an age sequence.</strong> The numbers identify expressions in the range. If a search result says only "Godawan single malt," check whether its bottle is marked 01 or 02 before relying on a tasting note, image or city listing.</p>
<h2>What does Godawan 01 taste like?</h2>
<p>In its <a href="${godawan}">description of the two expressions</a>, Diageo India says Godawan 01 uses Pedro Ximenez sherry casks and a portion of spirit transferred to American Standard Barrels. The producer describes sultanas and dried fruit on the nose, raisin, fig and apricot on the palate, and a wood-and-caramel finish. These are the maker's notes for that expression, not a guarantee that every drinker will pick out the same flavours.</p>
<h2>How is Godawan 02 different?</h2>
<p>The same <a href="${godawan}">company description</a> says Godawan 02 uses virgin oak, with a portion transferred to American Standard Barrels, then a cherrywood finish. Its producer notes move toward fruit, floral tones, vanilla, ginger and coconut, ending with spice and roasted coffee. That cask account is a meaningful product distinction. It does not mean 02 is older, stronger or automatically more premium than 01.</p>
<h2>What do they share?</h2>
<p><a href="${godawanReport}">Diageo India's annual report</a> identifies both as Godawan Indian single malts made with locally sourced six-row barley and matured in Rajasthan's warm, dry conditions. The company description cited above specified 700ml bottles and 46% ABV for the UK launch; those details describe that announced release. Check the current Indian bottle's printed size and strength rather than assuming every market uses identical packaging.</p>
<h2>Which expression should you start with?</h2>
<p>If dried-fruit and sherry-cask notes interest you, 01 is the clearer starting point based on the maker's description. If you are curious about brighter fruit, spice and the cherrywood finish, look at 02. This is a preference guide, not a rating or a promise of what either one will taste like to you. Try a small measured pour neat and add water gradually if you prefer; avoid judging one chilled and the other warm.</p>
<h2>Can you compare their Indian prices?</h2>
<p>Only for the same city, date and exact bottle size. An online listing for a 700ml Godawan 01 cannot establish today's price or availability for 02, even when both appear in the same search result. Verify the expression name, seal, printed MRP and current shelf price with a licensed retailer. BevOry does not sell alcohol. Follow local law and never drink and drive.</p>
`.trim(),
  },
], "2026-11-02T05:00:00.000Z");
