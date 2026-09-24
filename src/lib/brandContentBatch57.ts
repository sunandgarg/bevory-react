import type { BrandPublicContent } from "./brandContentBatch01.js";
import { BRAND_CONTENT_BATCH_19, BRAND_IDENTITIES_BATCH_19, BRAND_LOGOS_BATCH_19, BRAND_SOURCES_BATCH_19 } from "./brandContentBatch19.js";
import { BRAND_CONTENT_BATCH_20, BRAND_IDENTITIES_BATCH_20, BRAND_LOGOS_BATCH_20, BRAND_SOURCES_BATCH_20 } from "./brandContentBatch20.js";

export const BRAND_IDENTITIES_BATCH_57 = [
  ...BRAND_IDENTITIES_BATCH_19.slice(10),
  ...BRAND_IDENTITIES_BATCH_20.slice(0, 20),
] as const;

// Retain the already researched tasting, serving and FAQ fields. These edits
// make the opening and conclusion more direct without adding unverified facts.
const revisions: Record<string, Pick<BrandPublicContent, "description" | "whyChoose" | "finalVerdict">> = {
  oaksmith: {
    description: "Oaksmith is an Indian whisky blended with Scotch malt and Kentucky straight bourbon. Shinji Fukuyo developed its Gold and International expressions for the Indian market, bringing two whisky traditions into each blend.",
    whyChoose: "Scotch malt and Kentucky bourbon meet in a blend directed by Japanese whisky maker Shinji Fukuyo.",
    finalVerdict: "Oaksmith Gold makes most sense when you want honeyed malt with an American-oak accent; try it with mutton seekh.",
  },
  "officers-choice": {
    description: "Officer's Choice is an Indian blended whisky from Allied Blenders & Distillers. Its original expression centres on fruit and wood; Blue and Star carry the name into other styles.",
    whyChoose: "Fruit and wood, rather than heavy peat, are the point of the original Officer's Choice.",
    finalVerdict: "Serve it with cool water and hot paneer pakora when you want a familiar, easygoing Indian blend.",
  },
  "peter-scot": {
    description: "Peter Scot is an Indian whisky from Bengaluru-based House of Khodays. Its classic expression is malt-led, while The Seeker takes a honey-and-oak direction.",
    whyChoose: "The classic Peter Scot's malt character and The Seeker's oak give Khoday drinkers two distinct routes into the range.",
    finalVerdict: "A short pour with water shows the malt clearly; roasted mushrooms suit the oakier expression.",
  },
  roku: {
    description: "Roku is House of Suntory's Japanese gin, built around six local botanicals: sakura flower and leaf, sencha and gyokuro teas, sansho pepper and yuzu peel. Juniper remains present beneath its floral, tea and citrus notes.",
    whyChoose: "Tea, sakura and yuzu give Roku a recognisably Japanese accent without pushing juniper out of the glass.",
    finalVerdict: "Use dry tonic sparingly; the yuzu and teas are reason enough to keep this gin and tonic simple.",
  },
  "seagram-s-100-pipers": {
    description: "100 Pipers is a Pernod Ricard blended Scotch built with malt whiskies including Speyside malts. It offers a soft malt centre and a trace of smoke rather than a heavily peated profile.",
    whyChoose: "100 Pipers keeps Scotch malt in front and smoke in the background.",
    finalVerdict: "One cube and a plate of chicken tikka are enough for this gently smoky blend.",
  },
  "seagram-s-blenders-pride": {
    description: "Blenders Pride is an Indian whisky from Pernod Ricard, blending Indian grain spirit with imported Scotch malts. Rare Premium and Reserve Collection express different balances of fruit and wood.",
    whyChoose: "Its Indian grain base and imported Scotch malt create a fruit-and-wood blend with a clear house character.",
    finalVerdict: "Taste Rare Premium with a little water; bring galouti kebabs when you want a savoury counterpoint.",
  },
  signature: {
    description: "Signature is a Diageo India blended whisky made with aged Indian malt, grain spirit and imported Scotch whisky. Rare and Premier extend the range beyond its original expression.",
    whyChoose: "Indian malt gives Signature's Scotch-and-grain blend a rounded centre.",
    finalVerdict: "Try a short pour with cool water and mutton seekh; the malt stays audible beside the spice.",
  },
  "sterling-reserve": {
    description: "Sterling Reserve is an Allied Blenders & Distillers whisky made with Indian grain spirit and imported Scotch malts. Blend 7 is malt-and-fruit led; Blend 10 moves toward honey, vanilla and oak.",
    whyChoose: "Blend 7 and Blend 10 show how much the balance of malt, fruit and oak can change within one range.",
    finalVerdict: "Choose Blend 7 for lighter malt and fruit, or Blend 10 with tandoori chicken when oak sounds better.",
  },
  "tullamore-dew": {
    description: "Tullamore D.E.W. is Irish whiskey named for the town of Tullamore in County Offaly. Its Original brings grain, malt and pot still whiskeys together in a triple-distilled blend.",
    whyChoose: "Three Irish whiskey styles give Tullamore Original body without a heavy finish.",
    finalVerdict: "Its gentle fruit and grain suit a lemon highball and chicken malai tikka.",
  },
  "vat-69": {
    description: "VAT 69 is a blended Scotch created by William Sanderson. A mellow sweetness meets a firmer, drier finish in the whisky selected from his numbered vats.",
    whyChoose: "William Sanderson's vat-number story belongs to a Scotch blend that still drinks simply with water.",
    finalVerdict: "Cool water and pepper chicken bring out its sweet opening without hiding the dry finish.",
  },
  bols: {
    description: "Bols is an Amsterdam spirits house whose range includes genever and cocktail liqueurs. Malt-led genever and orange-flavoured Blue Curaçao make very different drinks under the same name.",
    whyChoose: "Bols has one foot in Dutch genever history and another in the modern cocktail bar.",
    finalVerdict: "Choose genever for a malt-led Collins; Blue Curaçao belongs in a drink that needs sweet orange.",
  },
  corona: {
    description: "Corona is a Mexican beer brand whose best-known expression, Corona Extra, is a pale lager. Its light malt and restrained bitterness suit a cold serve beside salty or spicy food.",
    whyChoose: "Corona Extra leaves room for the food: the lager stays light while the finish stays crisp.",
    finalVerdict: "A lime wedge is optional; chilled beer and tandoori prawns already make a good match.",
  },
  drambuie: {
    description: "Drambuie is a Scottish liqueur made from aged Scotch whisky, heather honey, herbs and spices. The whisky gives its honeyed sweetness a firmer base than a simple cordial.",
    whyChoose: "Heather honey and aged Scotch make Drambuie recognisably different from a cream liqueur.",
    finalVerdict: "Pour a small measure over ice after dinner, or pair it with Scotch in a Rusty Nail.",
  },
  "fernet-branca": {
    description: "Fernet-Branca is an intensely bitter Italian herbal liqueur made by Fratelli Branca Distillerie. Mint-like herbs, warm spice and a long bitter finish carry more weight than its sweetness.",
    whyChoose: "Fernet-Branca commits to herbal bitterness; there is no need to disguise it as a sweet cordial.",
    finalVerdict: "A small chilled pour after mutton seekh gives the herbs and bitterness room to work.",
  },
  finlandia: {
    description: "Finlandia is a Finnish vodka made from locally grown barley and glacial spring water from Rajamäki. Its light grain note and dry finish work especially well in a cold, uncomplicated serve.",
    whyChoose: "Finnish barley and Rajamäki water give this restrained vodka a clear sense of origin.",
    finalVerdict: "Chill it, add soda and lemon, and keep salty tandoori fish close by.",
  },
  fireball: {
    description: "Fireball Cinnamon Whisky is a sweet, cinnamon-flavoured whisky drink in Sazerac's portfolio. Cinnamon dominates both the aroma and the warming finish, unlike an oak-led straight whisky.",
    whyChoose: "There is no mistaking the cinnamon in Fireball; it is the entire point of the pour.",
    finalVerdict: "A small cold measure works with salted popcorn, while apple juice softens the spice.",
  },
  glenfarclas: {
    description: "Glenfarclas is a Grant-family Speyside single malt Scotch. Malted barley and Oloroso sherry casks contribute the dried fruit, malt and spice associated with the distillery.",
    whyChoose: "The Grant family's long stewardship and Oloroso casks define Glenfarclas more clearly than a fashionable finish.",
    finalVerdict: "Pour it neat with toasted walnuts when dried fruit and malt sound better than peat smoke.",
  },
  gordons: {
    description: "Gordon's is a British London Dry gin created by Alexander Gordon. Juniper leads its classic recipe, with coriander, angelica and liquorice among the supporting botanicals.",
    whyChoose: "Gordon's keeps juniper where a London Dry drinker expects it: right at the front.",
    finalVerdict: "A cold tonic, lemon wedge and tandoori prawns make its dry botanical style easy to appreciate.",
  },
  guinness: {
    description: "Guinness is an Irish stout from Dublin's St. James's Gate brewery. Draught brings a creamy head and dry roast; Foreign Extra Stout takes the name into a fuller beer.",
    whyChoose: "Roasted malt and a dry close, rather than syrupy sweetness, give Guinness Draught its appeal.",
    finalVerdict: "Let the head settle, then take it to the table with mushroom pie or spiced potatoes.",
  },
  hapusa: {
    description: "Hapusa is a gin distilled by Nao Spirits in Goa with Himalayan juniper at its centre. Pine, earth and spice give it a different shape from citrus-first gins.",
    whyChoose: "Himalayan juniper gives Hapusa its forest-like aroma and an unmistakably Indian point of view.",
    finalVerdict: "Taste it cold before adding tonic; tandoori mushrooms suit the pine and spice.",
  },
  heineken: {
    description: "Heineken is a Dutch pale lager that began in Amsterdam. Barley malt, hops and the brewery's A-yeast give the familiar green-bottle beer its light malt and dry finish.",
    whyChoose: "Heineken's mild malt and hop bite make sense when the plate is salty or fried.",
    finalVerdict: "Serve it cold in a clean glass with chicken tikka or masala fries.",
  },
  malibu: {
    description: "Malibu Original is a coconut-flavoured Caribbean rum liqueur in Pernod Ricard's range. Its sweet coconut flavour takes the lead in pineapple-based cocktails.",
    whyChoose: "Malibu puts coconut directly into a tropical long drink without needing a separate syrup.",
    finalVerdict: "Pour it over ice with pineapple juice and try chilli-lime prawns alongside.",
  },
  martell: {
    description: "Martell is a French Cognac house founded by Jean Martell. Borderies eaux-de-vie and distillation of clear wines are closely linked with its floral, fruit-led style.",
    whyChoose: "Borderies fruit gives Martell a floral route into Cognac's oak-aged depth.",
    finalVerdict: "Give a small tulip-glass pour time to open, then try it with dried apricots or dark chocolate.",
  },
  miller: {
    description: "Miller is an American brewing name, and Miller High Life is its long-running pale lager. Light malt, hops and lively carbonation keep High Life crisp rather than weighty.",
    whyChoose: "High Life's fine bubbles and light body suit fried food without dominating it.",
    finalVerdict: "Keep the glass cold and bring masala fries or crispy fish.",
  },
  "old-forester": {
    description: "Old Forester is a Kentucky whiskey brand founded by George Garvin Brown and now owned by Brown-Forman. Its range includes bourbon and rye, with charred oak and spice prominent in the bourbon style.",
    whyChoose: "Old Forester links Kentucky's sealed-bottle history to a bourbon that still has a place in an Old Fashioned.",
    finalVerdict: "Drink a small bourbon pour neat first; its oak and spice also stand up to tandoori lamb.",
  },
  "old-pulteney": {
    description: "Old Pulteney is a single malt Scotch from Wick on Scotland's north coast. The distillery's copper stills and harbour setting are part of a style often marked by salt, honey and citrus.",
    whyChoose: "A dry coastal note cuts across Old Pulteney's honeyed malt rather than letting sweetness settle in.",
    finalVerdict: "A few drops of water and grilled prawns show why this Wick malt belongs near seafood.",
  },
  "old-smuggler": {
    description: "Old Smuggler is a blended Scotch in Campari Group's portfolio. Malt and grain whiskies give it a lighter toffee-and-oak style suited to a long soda serve.",
    whyChoose: "Toffee, a little charcoal and a dry close give Old Smuggler more shape than its easy-drinking reputation suggests.",
    finalVerdict: "Lengthen it with chilled soda and serve it beside pepper chicken or masala peanuts.",
  },
  peroni: {
    description: "Peroni is an Italian brewing name, while Nastro Azzurro is its dry, pale premium lager. Light malt and fine carbonation keep the beer particularly useful at the table.",
    whyChoose: "Nastro Azzurro's dry finish earns its place beside pizza, fried calamari or chilli paneer.",
    finalVerdict: "Pour it cold and let a salty, fried plate provide the contrast.",
  },
  pimms: {
    description: "Pimm's No. 1 is a British gin-based fruit cup flavoured with herbs and citrus. It is usually made into a long, cold drink with lemonade, fruit and cucumber.",
    whyChoose: "Pimm's No. 1 turns gin, fruit and herbs into a refreshing jug drink with very little fuss.",
    finalVerdict: "Use plenty of ice and fresh cucumber; tandoori prawns work surprisingly well beside it.",
  },
  rampur: {
    description: "Rampur is an Indian single malt from Radico Khaitan's distillery in Uttar Pradesh. Copper pot distillation and cask maturation in the Himalayan foothills shape a fruit-and-malt style across its range.",
    whyChoose: "Rampur brings Indian single malt out of a working Uttar Pradesh distillery with decades of whisky-making history.",
    finalVerdict: "Try it neat with mutton seekh, then add a few drops of water to draw out the fruit.",
  },
};

export const BRAND_CONTENT_BATCH_57: Record<string, BrandPublicContent> = Object.fromEntries(
  BRAND_IDENTITIES_BATCH_57.map(([slug]) => {
    const base = BRAND_CONTENT_BATCH_19[slug] ?? BRAND_CONTENT_BATCH_20[slug];
    if (!base || !revisions[slug]) throw new Error(`Missing source guide or revision for ${slug}`);
    return [slug, { ...base, ...revisions[slug] }];
  }),
);

export const BRAND_SOURCES_BATCH_57: Record<string, string[]> = Object.fromEntries(
  BRAND_IDENTITIES_BATCH_57.map(([slug]) => [slug, BRAND_SOURCES_BATCH_19[slug] ?? BRAND_SOURCES_BATCH_20[slug]]),
);

// Only previously identified assets are carried forward. The DB writer keeps
// any stored logo and uses these solely for empty slots.
export const BRAND_LOGOS_BATCH_57: Record<string, string> = Object.fromEntries(
  BRAND_IDENTITIES_BATCH_57.flatMap(([slug]) => {
    const logo = BRAND_LOGOS_BATCH_19[slug] ?? BRAND_LOGOS_BATCH_20[slug];
    return logo ? [[slug, logo]] : [];
  }),
);
