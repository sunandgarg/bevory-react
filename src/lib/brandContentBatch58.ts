import type { BrandPublicContent } from "./brandContentBatch01.js";
import { BRAND_CONTENT_BATCH_20, BRAND_IDENTITIES_BATCH_20, BRAND_LOGOS_BATCH_20, BRAND_SOURCES_BATCH_20 } from "./brandContentBatch20.js";
import { BRAND_CONTENT_BATCH_21, BRAND_IDENTITIES_BATCH_21, BRAND_LOGOS_BATCH_21, BRAND_SOURCES_BATCH_21 } from "./brandContentBatch21.js";

export const BRAND_IDENTITIES_BATCH_58 = [
  ...BRAND_IDENTITIES_BATCH_20.slice(20),
  ...BRAND_IDENTITIES_BATCH_21.slice(0, 20),
] as const;

// Keep the complete earlier guides while tightening the public opening and
// conclusion. No new technical or expression-level claim is introduced here.
const revisions: Record<string, Pick<BrandPublicContent, "description" | "whyChoose" | "finalVerdict">> = {
  ricard: {
    description: "Ricard is a Marseille pastis created by Paul Ricard. Anise and liquorice dominate the small measure, which turns cloudy and aromatic when lengthened with cold water.",
    whyChoose: "Anise and liquorice, opened with water, put Ricard squarely in Marseille's aperitif tradition.",
    finalVerdict: "Pour it before dinner with cold water and salted olives; let the anise do the talking.",
  },
  skyy: {
    description: "SKYY began in San Francisco and is now a Campari Group vodka. Its restrained, dry style gives citrus and bitters space in a mixed drink.",
    whyChoose: "SKYY stays out of a grapefruit highball's way while adding a soft, clean vodka base.",
    finalVerdict: "Use it cold with soda and grapefruit, then put lemon prawns on the table.",
  },
  stolichnaya: {
    description: "Stolichnaya, branded Stoli in many markets, is a grain vodka from Stoli Group. Current production is linked to the Latvijas Balzams facility in Riga, Latvia.",
    whyChoose: "A long-established vodka name now closely associated with its Riga production home.",
    finalVerdict: "Chill it for a short pour or lengthen with soda and lemon beside smoked fish.",
  },
  teeling: {
    description: "Teeling is an Irish whiskey house revived in Dublin by brothers Jack and Stephen Teeling. Its range moves between blends, malt and different cask influences, including a rum-cask finish for Small Batch.",
    whyChoose: "The Teeling brothers brought distilling back near their family's old Marrowbone Lane address.",
    finalVerdict: "Start with Small Batch neat to find its fruit and spice; pepper chicken suits a second glass.",
  },
  titos: {
    description: "Tito's Handmade Vodka is distilled from corn in Austin, Texas. Founder Bert 'Tito' Beveridge built the label around a Texas distillery rather than a traditional European vodka region.",
    whyChoose: "Corn and an Austin origin give Tito's a specific identity among otherwise neutral vodkas.",
    finalVerdict: "Soda, lime and plenty of ice leave its soft corn note in place beside chilli paneer.",
  },
  "wild-turkey": {
    description: "Wild Turkey is a Kentucky bourbon distilled in Lawrenceburg. The Russell family's stewardship and a bold oak-and-spice profile run through its core whiskeys.",
    whyChoose: "Oak, grain and spice stand up clearly in Wild Turkey, even beside charred food.",
    finalVerdict: "Try a short pour with mutton seekh or use it when an Old Fashioned needs backbone.",
  },
  "william-fevre": {
    description: "Domaine William Fèvre grows Chardonnay in Chablis, Burgundy, including Premier Cru and Grand Cru vineyards. Limestone-rich sites help give the wines the acidity and stony character associated with the region.",
    whyChoose: "Named Chablis cru sites give William Fèvre's Chardonnay a stronger sense of place than a generic white Burgundy.",
    finalVerdict: "Serve cool with grilled prawns or tandoori fish; the acidity earns its place at dinner.",
  },
  woodford: {
    description: "Woodford Reserve is a Brown-Forman bourbon from Kentucky's Woodford County. Its grain recipe includes corn, rye and malted barley, and its core style brings citrus, oak and spice together.",
    whyChoose: "Orange, cocoa and spice keep Woodford Reserve's oak from becoming the whole story.",
    finalVerdict: "Sip it neat before reaching for bitters; galouti kebabs suit the richer finish.",
  },
  yamazaki: {
    description: "Yamazaki is Suntory's single malt from the distillery Shinjiro Torii established near Kyoto in 1923. Different stills and casks bring fruit, oak and spice into the range in different proportions.",
    whyChoose: "Yamazaki is made where Suntory began its Japanese malt-whisky project in 1923.",
    finalVerdict: "Give a small neat pour time in the glass, then try yakitori or tandoori mushrooms.",
  },
  zubrowka: {
    description: "Żubrówka is a Polish vodka name associated with bison grass from the Białowieża Forest. Its grass-flavoured expression carries herbal, vanilla-like and hay notes distinct from unflavoured vodka.",
    whyChoose: "Bison grass gives Żubrówka a meadow-like aroma that a neutral vodka cannot offer.",
    finalVerdict: "Serve chilled with apple juice or sliced apple and a plate of salty snacks.",
  },
  "barone-ricasoli": {
    description: "Barone Ricasoli makes Sangiovese-led Chianti Classico at Brolio, near Gaiole in Chianti. The family's Tuscan vineyards cross several soils, giving its reds more than one expression of the same grape.",
    whyChoose: "Brolio's Sangiovese comes from an estate tied closely to the history of Chianti Classico.",
    finalVerdict: "Take a bottle to dinner with mushroom risotto or paneer in tomato gravy.",
  },
  barsol: {
    description: "BarSol is Peruvian pisco from Bodega San Isidro in the Ica Valley. Quebranta anchors one side of the range, while Italia, Torontel and Moscatel offer more aromatic grape expressions.",
    whyChoose: "Ica-grown grapes, not neutral spirit, determine the character of each BarSol pisco.",
    finalVerdict: "Use Quebranta for a Pisco Sour; an aromatic grape expression rewards a slower sip with ceviche.",
  },
  becks: {
    description: "Beck's is a pilsner beer from Bremen, Germany. Its light malt and dry hop finish make the green-bottle lager particularly suited to salty food.",
    whyChoose: "Bremen's Beck's keeps a dry pilsner finish even beside spicy snacks.",
    finalVerdict: "Serve it cold with masala fries or fried fish; it needs no elaborate garnish.",
  },
  benromach: {
    description: "Benromach is a Speyside single malt distilled in Forres under Gordon & MacPhail ownership. Malt sweetness and a measured trace of peat distinguish its house style.",
    whyChoose: "A little peat gives Benromach a Speyside profile with depth, not a smoke screen.",
    finalVerdict: "A small neat pour and roasted almonds show how fruit and gentle smoke can share a glass.",
  },
  beronia: {
    description: "Beronia makes wine in Rioja Alta and Rueda, Spain. Tempranillo leads its Rioja reds, while Verdejo gives the Rueda whites a different, fresher direction.",
    whyChoose: "Rioja Tempranillo and Rueda Verdejo make Beronia useful for two very different dinners.",
    finalVerdict: "Choose the Rioja red for mutton; keep the Rueda white beside grilled fish.",
  },
  besserat: {
    description: "Besserat de Bellefon is an Épernay Champagne house known for a fine, soft mousse. The Cuvée des Moines range was developed with dining in mind rather than a toast alone.",
    whyChoose: "Its gentle mousse makes Besserat de Bellefon a Champagne to keep pouring once food arrives.",
    finalVerdict: "Serve it with a meal, especially seafood, when fine bubbles matter more than forceful fizz.",
  },
  "birra-moretti": {
    description: "Birra Moretti began in Udine, Italy, and is best known for its pale L'Autentica lager. Mild malt and a restrained hop bitterness leave plenty of room for food.",
    whyChoose: "L'Autentica stays mild enough for dinner but finishes dry enough for fried food.",
    finalVerdict: "A cold glass beside margherita pizza or paneer pakora does the job.",
  },
  "blue-nun": {
    description: "Blue Nun is a German wine label made by Langguth Erben. Its range spans familiar white wines, Riesling, Gewürztraminer and sparkling releases, each with its own level of fruit and freshness.",
    whyChoose: "Riesling and Gewürztraminer give Blue Nun more to explore than the label's best-known white blend.",
    finalVerdict: "Choose a fresh white for tandoori fish and a sweeter style for spiced fruit dessert.",
  },
  boodles: {
    description: "Boodles is a British London Dry gin whose recipe includes juniper, nutmeg, sage and rosemary but no citrus botanicals. It is redistilled from wheat spirit in a Carter-Head copper still.",
    whyChoose: "Boodles leaves citrus to the garnish, allowing its herbs and juniper to lead.",
    finalVerdict: "Add fresh lime to a dry tonic and put coriander-led snacks alongside it.",
  },
  botanist: {
    description: "The Botanist is an Islay gin distilled at Bruichladdich. Its original expression brings 22 hand-foraged island botanicals together with nine conventional gin botanicals.",
    whyChoose: "Islay's plants, rather than its famous peat smoke, shape The Botanist's identity.",
    finalVerdict: "Use a restrained tonic and let the herbal detail meet grilled fish or fresh herbs.",
  },
  "brancott-estate": {
    description: "Brancott Estate is a Marlborough, New Zealand wine brand closely associated with Sauvignon Blanc. Its range includes reserve bottlings and other varieties from the region.",
    whyChoose: "Herb and citrus in Brancott's Sauvignon Blanc make Marlborough's regional style easy to recognise.",
    finalVerdict: "A chilled glass suits tandoori prawns when lime and fresh herbs are already on the plate.",
  },
  "famous-grouse": {
    description: "The Famous Grouse is a Scottish blended whisky made from malt and grain whiskies. The core blend leans toward soft fruit, shortbread and warming spice.",
    whyChoose: "Fruit and biscuit notes give The Famous Grouse enough character for a simple ginger highball.",
    finalVerdict: "Try it with chilled ginger ale and roasted cashews before moving to a neat pour.",
  },
  "bull-dog": {
    description: "Bulldog is a twelve-botanical London Dry gin. Juniper remains at its centre, with citrus and spice extending the dry profile rather than sweetening it.",
    whyChoose: "Bulldog widens the botanical range while keeping a clear London Dry backbone.",
    finalVerdict: "Use tonic, ice and a citrus slice; chilli paneer brings the contrast.",
  },
  camikara: {
    description: "Camikara is a Piccadily rum made in Haryana from fresh sugarcane juice, not molasses. Pot distillation and oak maturation bring the cane into an aged Indian rum style.",
    whyChoose: "Fresh cane juice gives Camikara a different starting point from molasses-led dark rum.",
    finalVerdict: "Sip a small measure neat before ice, then try it with spiced nuts or grilled pineapple.",
  },
  "canadian-club": {
    description: "Canadian Club is a Canadian whisky with roots in Walkerville, Ontario. Its blended style is soft enough for a long drink yet has enough grain character for a short pour.",
    whyChoose: "Walkerville history and a light, mixable profile make Canadian Club a practical highball whisky.",
    finalVerdict: "Chilled soda and a lemon twist make a straightforward partner for pepper chicken.",
  },
  caorunn: {
    description: "Caorunn is distilled at Balmenach in Speyside, Scotland. Rowan berry is among five locally foraged Celtic botanicals that join six familiar gin ingredients.",
    whyChoose: "Rowan berry and the Copper Berry Chamber give Caorunn a Speyside identity beyond the whisky map.",
    finalVerdict: "Try an apple-garnished tonic with herb-forward fish or paneer.",
  },
  cardhu: {
    description: "Cardhu is a Speyside single malt made near the River Spey. Its soft fruit and gentle sweetness make a different proposition from heavily peated Scotch.",
    whyChoose: "Cardhu's gentle malt and the Cumming family's history give it more to offer than a sweet first sip.",
    finalVerdict: "A neat measure with roasted almonds is a calm introduction to Speyside whisky.",
  },
  "carlo-rossi": {
    description: "Carlo Rossi is an American wine label in the Gallo portfolio. Reds, whites and fruit-led bottles cover different meals rather than one fixed grape or regional style.",
    whyChoose: "Carlo Rossi keeps the focus on easy table wines across several styles.",
    finalVerdict: "Choose the wine for the meal: a red with grilled food or a chilled white with fish.",
  },
  chambord: {
    description: "Chambord is a French raspberry liqueur associated with the Loire Valley. Black raspberries, other raspberry varieties, vanilla, citrus peel and honey build its layered berry flavour.",
    whyChoose: "Raspberry, citrus and honey give Chambord more depth than a simple fruit syrup.",
    finalVerdict: "A small measure in a cocktail is enough; dark chocolate handles the berry sweetness well.",
  },
  chimay: {
    description: "Chimay is a Belgian Trappist beer brewed at the Abbey of Scourmont. Its bottle-conditioned Red, Blue and White ales differ in malt, yeast and fruit character.",
    whyChoose: "Chimay's abbey brewing and bottle conditioning make its ales worth serving with a meal.",
    finalVerdict: "Use a goblet and give the ale time; spiced roast potatoes suit the richer bottlings.",
  },
};

export const BRAND_CONTENT_BATCH_58: Record<string, BrandPublicContent> = Object.fromEntries(
  BRAND_IDENTITIES_BATCH_58.map(([slug]) => {
    const base = BRAND_CONTENT_BATCH_20[slug] ?? BRAND_CONTENT_BATCH_21[slug];
    if (!base || !revisions[slug]) throw new Error(`Missing source guide or revision for ${slug}`);
    return [slug, { ...base, ...revisions[slug] }];
  }),
);

export const BRAND_SOURCES_BATCH_58: Record<string, string[]> = Object.fromEntries(
  BRAND_IDENTITIES_BATCH_58.map(([slug]) => [slug, BRAND_SOURCES_BATCH_20[slug] ?? BRAND_SOURCES_BATCH_21[slug]]),
);

export const BRAND_LOGOS_BATCH_58: Record<string, string> = Object.fromEntries(
  BRAND_IDENTITIES_BATCH_58.flatMap(([slug]) => {
    const logo = BRAND_LOGOS_BATCH_20[slug] ?? BRAND_LOGOS_BATCH_21[slug];
    return logo ? [[slug, logo]] : [];
  }),
);
