import "dotenv/config";
import { runContentCycle } from "./hourly-content-cycle.mjs";

const blackDogRelease = "https://www.diageoindia.com/en/news-and-media/press-releases/2026/black-dog-partners-with-manish-malhotra-for-a-festive-expression-of-triple-gold-reserve-scotch-whisky";
const jagerOriginal = "https://www.jagermeister.com/products/jagermeister";
const jagerShop = "https://de.jagermeister.com/shop/jaegermeister/jaegermeister";

await runContentCycle([
  {
    id: "news-black-dog-manish-malhotra-festive-edition-india-2026",
    title: "Black Dog Unveils Manish Malhotra Festive Triple Gold Reserve Edition",
    slug: "black-dog-manish-malhotra-festive-edition-india-2026",
    excerpt: "Diageo India has announced a festive presentation of Black Dog Triple Gold Reserve with Manish Malhotra-designed packaging and an accompanying glass.",
    category: "News",
    tags: ["Black Dog", "Triple Gold Reserve", "Manish Malhotra", "Scotch whisky", "India", "festive edition"],
    meta_title: "Black Dog Manish Malhotra Festive Edition | BevOry",
    meta_description: "What Diageo India has confirmed about the Manish Malhotra Black Dog Triple Gold Reserve festive edition, and what buyers should verify locally.",
    selection_note: "Diageo India's release dated 22 October 2026 was newly featured on its news page on 26 October. Search Console's last accessible 28-day report showed 36 clicks/5,145 impressions for 'black dog 750ml price in kolkata'. This news answers whether the festive edition is a different named whisky without duplicating the existing exact-price product page.",
    source_links: [blackDogRelease],
    content: String.raw`
<p><strong>Diageo India has announced a limited-edition festive presentation of Black Dog Triple Gold Reserve Scotch Whisky designed with Manish Malhotra.</strong> The <a href="${blackDogRelease}" target="_blank" rel="noopener noreferrer">company announcement, dated 22 October 2026</a>, describes decorative work on the outer carton and an accompanying glass. It does not provide a retail price, a list of cities where the edition can be bought, or a new recipe for the whisky.</p>

<h2>What is different about the festive edition?</h2>
<p>Diageo says the design uses a gold-on-gold palette, florals and ornamental motifs inspired by Indian festivities. The artwork runs across the outer monocarton and the accompanying glass. The whisky named in the announcement is Black Dog Triple Gold Reserve. For a shopper, that distinction matters: a special presentation is not proof that the liquid has been reformulated or that every ordinary Triple Gold Reserve bottle will come with a glass.</p>
<p>The announcement calls it a limited edition, but does not specify bottle count, pack volume, an MRP or a retail rollout by state. A photograph of the gift pack online is therefore not reliable evidence that it is on a particular shop shelf today. Ask a licensed retailer about the precise pack before making a trip.</p>

<h2>Is this Black Dog Black Reserve?</h2>
<p>No. Diageo names <strong>Triple Gold Reserve</strong> in this collaboration. Black Dog also sells other expressions, so search results headed simply “Black Dog whisky” can mix bottles. If you want this festive pack, ask for “Black Dog Triple Gold Reserve Manish Malhotra edition,” and confirm the printed expression name on the bottle and carton. An ordinary Triple Gold Reserve product listing may help identify the base expression, but it cannot confirm that the designer carton and glass are included.</p>
<p>BevOry's <a href="https://bevory.in/kolkata/product/black-dog-gold-reserve-7cd4ea3/750ml">Kolkata Black Dog Gold Reserve 750ml listing</a> is a reference for a separately named product card, not a confirmed listing for this limited gift pack. Do not transfer that listing's size or price to the newly announced edition. The announcement itself contains no Kolkata-specific price.</p>

<h2>What should buyers check?</h2>
<p>Ask the licensed shop to confirm that the sealed gift pack includes the designer monocarton and glass, then check the bottle's exact expression, volume, printed alcohol percentage and maximum retail price. Availability and retail rules vary by state. Diageo's announcement does not override local age restrictions or dry-day rules, and it is not a live inventory feed. BevOry does not sell alcohol. Drink responsibly and never drink and drive.</p>
`.trim(),
  },
  {
    id: "guide-jagermeister-original-700ml-kolkata-liqueur-2026",
    title: "Jägermeister in Kolkata: Why the 700ml Bottle Is Not Whisky",
    slug: "jagermeister-original-700ml-kolkata-liqueur-2026",
    excerpt: "Jägermeister Original is a herbal liqueur, not a whisky. Check the 700ml bottle and city before comparing a Kolkata price search result.",
    category: "Guides",
    tags: ["Jägermeister", "Jägermeister Original", "Kolkata", "700ml", "herbal liqueur", "bottle guide"],
    meta_title: "Jägermeister 700ml in Kolkata: Bottle Guide | BevOry",
    meta_description: "Learn what Jägermeister Original is, why its common 700ml bottle differs from 750ml, and how to check a Kolkata listing accurately.",
    selection_note: "The last accessible Search Console 28-day query report recorded 4 clicks/1,810 impressions for 'jagermeister price in kolkata'. An exact BevOry Kolkata Original 700ml product URL exists, so this guide answers classification and size questions rather than publishing another unverified price page.",
    source_links: [jagerOriginal, jagerShop],
    content: String.raw`
<p><strong>Jägermeister Original is a herbal liqueur, not whisky.</strong> Its familiar green bottle can appear beside spirits in a shop, but its production and category differ from a grain-based whisky. If you search for a Jägermeister price in Kolkata, first check whether the result is for Original and whether the bottle is 700ml. A 700ml total cannot be compared directly with a 750ml whisky total.</p>

<h2>What is inside Jägermeister Original?</h2>
<p>The maker's <a href="${jagerOriginal}" target="_blank" rel="noopener noreferrer">official Original product page</a> describes a herbal liqueur made with 56 herbs, roots and spices and matured in oak barrels. The recipe is not published in full. Those botanicals and the liqueur classification are more useful for identifying the product than a generic search result calling it “alcohol” or “whisky.” The producer's <a href="${jagerShop}" target="_blank" rel="noopener noreferrer">German 700ml product page</a> states 35% alcohol by volume for its 0.7-litre Original bottle. Check the printed Indian bottle label for the strength of the specific pack you are considering.</p>
<p>Do not confuse the 56 botanicals with a 56-year age statement. Likewise, maturation of the liqueur base in oak does not turn Jägermeister into Scotch. A whisky comparison can still be about taste or occasion, but the products belong to different spirit categories.</p>

<h2>Why does a 700ml result matter?</h2>
<p>BevOry has a <a href="https://bevory.in/kolkata/product/jagermeister-liqueur-ab3981b/700ml">Kolkata Jägermeister liqueur 700ml product page</a>. That is the exact city-and-size reference if your intended bottle is 700ml Original. Other listings may show 50ml, 375ml or 1 litre, or may refer to a different Jägermeister expression. Before deciding that one figure is cheaper, compare identical volumes and product names. For a fair volume comparison across sizes, divide the bottle price by its volume in millilitres, then multiply by 1,000 to get a price per litre; the shelf price and availability still need confirmation.</p>
<p>The German maker page is useful for product identity, not an Indian retail price. Its euro amount, taxes and delivery information do not apply to Kolkata. Do not convert that amount into rupees and present it as a local shelf price.</p>

<h2>How can I verify a Kolkata purchase?</h2>
<p>Ask a licensed local retailer for the current price and stock of the sealed Jägermeister Original 700ml bottle. Check its name, size, printed ABV and maximum retail price at the shop. An online product page is indicative and cannot promise that a particular outlet is open or has stock; local dry days and age rules may apply. BevOry does not sell alcohol. Drink responsibly and never drink and drive.</p>
`.trim(),
  },
], "2026-10-27T04:58:16.364Z");
