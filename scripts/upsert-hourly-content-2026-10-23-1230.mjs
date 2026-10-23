import "dotenv/config";
import { runContentCycle } from "./hourly-content-cycle.mjs";

const lion = "https://www.lionco.com/game-set-beer-hahn-joins-the-australian-open-as-the-official-beer-partner/";
const tennis = "https://www.tennis.com.au/fan-zone/media-releases/2026/10/22/game-set-beer-hahn-joins-the-australian-open-as-the-official-beer-partner";
const wsetColour = "https://www.wsetglobal.com/knowledge-centre/blog/2021/september/23/what-determines-the-colour-of-wine";
const wsetStyles = "https://www.wsetglobal.com/knowledge-centre/blog/2023/october/03/how-many-wine-types-and-styles-are-there/";

await runContentCycle([
  {
    id: "news-hahn-australian-open-beer-partner-2026",
    title: "Hahn Named Official Beer of the Australian Open",
    slug: "hahn-australian-open-beer-partner-2026",
    excerpt: "Lion and Tennis Australia have announced a multi-year Australian Open partnership for Hahn. The plans cover Melbourne Park and Australian promotions, not an India launch.",
    category: "News",
    tags: ["Hahn beer", "Australian Open", "Lion", "beer partnerships", "Australia beer news"],
    meta_title: "Hahn Becomes Australian Open Beer Partner | BevOry",
    meta_description: "Hahn is the Australian Open's new official beer under a multi-year deal. See what Lion and Tennis Australia announced for Melbourne Park and beyond.",
    selection_note: "A 22 October announcement confirmed by both the brewer and tournament organiser, with clear consumer details and no unsupported India availability claim.",
    source_links: [lion, tennis],
    content: String.raw`
<p><strong>Hahn has been named the official beer of the Australian Open under a new multi-year agreement between Lion and Tennis Australia.</strong> Announced on 22 October 2026, the deal is built around the tournament in Melbourne and promotions across Australia. It is a sponsorship and hospitality announcement, not a new beer recipe or a launch in India.</p>

<h2>What Will Change at the Australian Open?</h2>
<p><a href="${lion}" target="_blank" rel="noopener noreferrer">Lion's announcement</a> says Hahn House will be a two-storey venue on Grand Slam Oval at Melbourne Park, with a beer garden for tournament visitors. Tennis Australia's <a href="${tennis}" target="_blank" rel="noopener noreferrer">corresponding release</a> confirms the venue and the multi-year official-beer deal. The organisers also say other Lion brands will have a presence: Stone &amp; Wood at Garden Square and Four Pillars with a gin bar at Kia Arena.</p>
<p>The arrangement extends beyond the tournament site. Lion plans limited-edition Hahn packaging, competitions, merchandise and venue promotions during the Australian summer of tennis. These are announced plans, so the exact packs and participating places will need their own details when the promotions begin.</p>

<h2>Is This a New Hahn Beer?</h2>
<p>No new Hahn beer, ABV or pack size is specified in either 22 October release. "Official beer" describes the brand partnership. It should not be read as a claim that every Hahn product will be available at every bar in Melbourne Park, or that a special Australian Open beer has already been bottled.</p>
<p>For a shopper, that distinction is useful. A co-branded can or event promotion can change the packaging or where a familiar beer is seen without changing the beer inside. Check the exact name, strength and container size on any future limited-edition pack rather than assuming it differs from the standard version.</p>

<h2>Does the Deal Affect Indian Availability?</h2>
<p>The announcements focus on Australia. They do not provide an Indian launch date, distributor, city price or stock list for Hahn. Beer sold in one country is not automatically sold in licensed shops in another. Indian readers looking for a particular Hahn product should rely on a current local listing and the label of the exact pack, not on this sports partnership.</p>
<p>For the Australian Open, the broader signal is that beer brands continue to use major sporting events for on-site experiences and retail promotions. For drinkers, the practical questions remain simpler: which product is actually offered, at what strength, and where it is legally available? Non-alcoholic choices and a safe route home matter just as much as the branding around a match.</p>
`.trim(),
  },
  {
    id: "guide-red-vs-white-wine-india-2026",
    title: "Red vs White Wine: What Is the Difference?",
    slug: "red-vs-white-wine-india-2026",
    excerpt: "Red and white wine differ mainly in grape-skin contact during winemaking. Learn what colour can tell you, what it cannot, and how to compare bottles in India.",
    category: "Guides",
    tags: ["red vs white wine", "wine guide India", "wine colour", "wine tannins", "wine buying guide"],
    meta_title: "Red vs White Wine: Key Differences | BevOry",
    meta_description: "Learn why red and white wines have different colours and textures, and what to check on the label when choosing a wine in India.",
    selection_note: "A high-intent beginner wine comparison supported by wine-education sources, designed to help Indian shoppers choose by style rather than colour alone.",
    source_links: [wsetColour, wsetStyles],
    content: String.raw`
<p><strong>The main difference between red and white wine is how the grape juice meets the skins during winemaking.</strong> Red wine usually ferments with dark grape skins, which provide much of its colour and tannin. White wine is usually pressed away from the skins before fermentation. That simple distinction explains a lot, but it does not tell you which bottle is sweeter, stronger or better for a particular meal.</p>

<h2>Why Is Red Wine Red?</h2>
<p>The <a href="${wsetColour}" target="_blank" rel="noopener noreferrer">Wine &amp; Spirit Education Trust (WSET)</a> explains that grape juice is generally colourless; the colour comes mainly from skin contact. For red wine, black-skinned grapes are fermented with their skins. The skins also contribute tannin, the drying sensation that some red wines leave in your mouth. The time and temperature of contact influence how much colour and tannin are extracted.</p>
<p>White wine is generally made by pressing grapes and separating the juice from the skins before fermentation. Most white wines use white-skinned grapes, but a white wine can also be made from black grapes if the skins are removed promptly. That is why grape colour and wine colour are related but not identical.</p>

<h2>Does Red Mean Dry and White Mean Sweet?</h2>
<p>No. Colour does not establish sweetness. Both red and white wines come in different styles, from dry to sweet, and the exact label or producer description is more useful than the colour alone. A red wine may feel richer because of tannin, while a white can feel crisp because of acidity, but there are plenty of exceptions.</p>
<p>WSET's <a href="${wsetStyles}" target="_blank" rel="noopener noreferrer">guide to wine styles</a> also notes that body, colour and sweetness are separate characteristics. A light red and a full-bodied white can feel more alike than two reds from very different grapes. If you dislike a mouth-drying finish, look for a gentler style rather than ruling out all red wine.</p>

<h2>How Should You Choose a Bottle in India?</h2>
<p>Start with the occasion and your own preference. For a lighter, chilled glass, explore a white wine with the flavour profile you like. For a wine with more tannin and a different texture, try a red. Neither choice is automatically the right partner for all Indian food: spice, richness, sweetness and serving temperature can change what works. A small tasting, when available, is more useful than a rigid pairing rule.</p>
<p>At the shelf, compare the exact wine name, grape or blend, dry or sweet description, ABV, vintage if stated and bottle size. Then compare current prices in your city for the same pack size. A bottle listed in Mumbai may not have the same price or availability in Delhi, Gurgaon or Goa. Colour is a helpful first filter; the specific bottle tells the fuller story.</p>
`.trim(),
  },
], "2026-10-23T06:32:26.054Z");
