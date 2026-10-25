import "dotenv/config";
import { runContentCycle } from "./hourly-content-cycle.mjs";

const indriStory = "https://www.indri.in/our-story";
const indriFaq = "https://www.indri.in/faq";
const khodayRed = "https://thehouseofkhodays.com/red-knight/";
const khodayPeter = "https://thehouseofkhodays.com/peter-scot/";

await runContentCycle([
  {
    id: "guide-indri-trini-vs-dru-indian-single-malt-2026",
    title: "Indri Trini vs Dru: Which Single Malt Are You Looking At?",
    slug: "indri-trini-vs-dru-indian-single-malt-2026",
    excerpt: "Indri Trini and Dru are different Indian single malts. Compare their cask approach and check the exact bottle before using a local listing.",
    category: "Guides",
    tags: ["Indri Trini", "Indri Dru", "Indian single malt", "Kolkata", "Gurgaon"],
    meta_title: "Indri Trini vs Dru Single Malt | BevOry",
    meta_description: "Compare Indri's triple-cask Trini and cask-strength Dru using the distiller's own details. Check the expression and city before buying.",
    selection_note: "Search Console's 25 Sep-22 Oct view showed 6 clicks/1,628 impressions for 'indri whisky price in kolkata' and 6 clicks/862 impressions for 'indri price in gurgaon'. Indri has several expressions, and existing Trini product pages cover exact bottle listings; this guide serves expression-choice intent.",
    source_links: [indriStory, indriFaq],
    content: String.raw`
<p><strong>Indri Trini and Indri Dru are different Indian single malts from the same distiller.</strong> Trini is the flagship triple-cask expression; Dru is the cask-strength expression. A search for “Indri whisky price” does not identify which of these bottles is being quoted, so start with the full name on the label.</p>

<h2>What is Indri Trini?</h2>
<p>According to the <a href="${indriStory}" target="_blank" rel="noopener noreferrer">Indri producer's story</a>, Trini is made using whisky matured in ex-bourbon, ex-French red wine and PX sherry casks. Those three cask types explain the name “Trini” and the brand's “three wood” description. It is not three separate whiskies sold as a pack, and it is not an age statement. The bottle and label are the best checks when a listing shortens its name to simply “Indri.”</p>

<h2>What is Indri Dru?</h2>
<p>Indri's <a href="${indriFaq}" target="_blank" rel="noopener noreferrer">official FAQ</a> identifies Dru as a cask-strength variant matured in ex-bourbon casks. “Cask strength” is a production description, not permission to assume the alcohol percentage from another Indri bottle or a foreign-market listing. Read the percentage and volume printed on the specific pack you are considering.</p>
<p>The cask approach is a meaningful difference: Trini combines three maturation influences, while the maker describes Dru around selected ex-bourbon casks. That does not prove either whisky will be sweeter, older, smoother or better to every drinker. If a retailer describes a bottle as a “special edition,” ask for the exact expression name rather than treating it as a synonym for Dru.</p>

<h2>How should I compare prices in India?</h2>
<p>Keep the expression, city and millilitre size fixed. BevOry has a specific <a href="https://bevory.in/kolkata/product/indri-trini-956dca9/750ml">Indri Trini 750ml Kolkata page</a> and a separate <a href="https://bevory.in/gurgaon/product/indri-trini-956dca9/750ml">Indri Trini 750ml Gurgaon page</a>. These identify the same expression and size in different cities; they are not a current Dru price or a guarantee that either city has stock today. Ask a licensed retailer for the exact Dru pack and current shelf price before making a comparison.</p>
<p>Do not use a Trini listing as a price for Dru, and do not transfer a Diwali Collector's Edition or duty-free description to either regular expression. BevOry does not sell alcohol. Follow local age and dry-day rules and never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-red-knight-vs-peter-scot-khoday-whisky-2026",
    title: "Red Knight vs Peter Scot: Two Khodays Whiskies Explained",
    slug: "red-knight-vs-peter-scot-khoday-whisky-2026",
    excerpt: "Red Knight and Peter Scot share a producer, but not a bottle name. Use Khodays' descriptions to identify the right whisky and compare exact sizes.",
    category: "Guides",
    tags: ["Red Knight whisky", "Peter Scot", "Khodays", "Indian whisky", "Mumbai"],
    meta_title: "Red Knight vs Peter Scot Whisky | BevOry",
    meta_description: "Red Knight and Peter Scot both come from Khodays. See how their maker describes them and what to verify before comparing Mumbai listings.",
    selection_note: "Search Console's 25 Sep-22 Oct view showed 16 clicks/915 impressions for 'red knight whisky price' and 26 clicks/1,093 impressions for 'peter scotch price'. Khodays has separate official pages, and BevOry has exact Mumbai 750ml products, so this answers cross-brand choice intent without making another price page.",
    source_links: [khodayRed, khodayPeter],
    content: String.raw`
<p><strong>Red Knight and Peter Scot are separate whisky brands from Khoday India Limited.</strong> Their names can sit close together in a search result or shop, but the fact that they share a producer does not make them the same blend. Peter Scot also has more than one expression, so read its full front label before comparing it with Red Knight.</p>

<h2>How does Khodays describe Red Knight?</h2>
<p>The <a href="${khodayRed}" target="_blank" rel="noopener noreferrer">House of Khodays Red Knight page</a> describes a malt-forward profile and presents the whisky as bold yet smooth. It also refers to a layered blend of selected matured malts. Those are the maker's descriptions, not a verified tasting result for every bottle or drinker. The page shows more than one Red Knight presentation, so an image alone may not settle which expression a retailer has listed.</p>

<h2>What does the Peter Scot name cover?</h2>
<p>Khodays gives <a href="${khodayPeter}" target="_blank" rel="noopener noreferrer">Peter Scot its own product page</a>, with several presentations rather than a single universal bottle. The page describes a traditional malt character for one expression and American oak maturation with honeyed and woody notes for another. It does not say that every bottle under the Peter Scot name has those same features. Check whether the label says Premium, Black or another specific expression before carrying tasting notes across.</p>
<p>The name “Peter Scot” is not, by itself, proof that a particular bottle is Scotch whisky. Use the exact category and origin printed on the pack. Likewise, a phrase such as “malt-forward” for Red Knight does not establish a stated age or a single-malt classification. These are different questions from which bottle you personally prefer.</p>

<h2>How can I compare the Mumbai bottles?</h2>
<p>BevOry lists <a href="https://bevory.in/mumbai/product/red-knight-whisky-bf86695/750ml">Red Knight 750ml</a> and <a href="https://bevory.in/mumbai/product/peter-scot-premium-malt-whisky-b8d4c37/750ml">Peter Scot Premium Malt 750ml</a> for Mumbai. Matching the city and volume makes a useful starting point, but online figures are indicative. A licensed retailer should confirm current price, stock, the full expression and the seal on the physical bottle.</p>
<p>If a shop instead has Peter Scot Black, do not treat its name or price as though it were the Premium Malt listing. BevOry does not sell alcohol. Follow local age and dry-day rules and never drink and drive.</p>
`.trim(),
  },
], "2026-10-25T06:33:59.108Z");
