import type { BrandPublicContent } from "./brandContentBatch01.js";
import { BRAND_CONTENT_BATCH_22, BRAND_IDENTITIES_BATCH_22, BRAND_LOGOS_BATCH_22, BRAND_SOURCES_BATCH_22 } from "./brandContentBatch22.js";
import { BRAND_CONTENT_BATCH_23, BRAND_IDENTITIES_BATCH_23, BRAND_LOGOS_BATCH_23, BRAND_SOURCES_BATCH_23 } from "./brandContentBatch23.js";

export const BRAND_IDENTITIES_BATCH_60 = [
  ...BRAND_IDENTITIES_BATCH_22.slice(20),
  ...BRAND_IDENTITIES_BATCH_23.slice(0, 20),
] as const;

// Earlier guides already supply researched history, tasting notes, pairings
// and FAQs. These public edits tighten the opening and conclusion without
// adding unverified technical details.
const revisions: Record<string, Pick<BrandPublicContent, "description" | "whyChoose" | "finalVerdict">> = {
  "grand-macnish": {
    description: "Grand Macnish is a blended Scotch with roots in Glasgow. Its original blend was developed as a softer alternative to the heavier Scotch styles of its day.",
    whyChoose: "Grand Macnish Original keeps the lighter side of blended Scotch in view.",
    finalVerdict: "Pour it long with chilled soda and keep masala peanuts nearby.",
  },
  "guado-al-tasso": {
    description: "Guado al Tasso is an Antinori wine estate in Bolgheri on Tuscany's Maremma coast. Its flagship red grows from Bordeaux grape varieties in sea-facing vineyards.",
    whyChoose: "Coastal Bolgheri gives this Antinori red its own setting beyond inland Tuscany.",
    finalVerdict: "Give the flagship wine time in a wide glass beside a substantial mutton dish.",
  },
  haku: {
    description: "Haku is Suntory's Japanese vodka distilled from white rice. Bamboo-charcoal filtration helps give it a soft, clean texture distinct from grain-led European vodkas.",
    whyChoose: "Rice and bamboo charcoal make Haku's production as recognisable as its gentle texture.",
    finalVerdict: "Serve it chilled in a dry Martini or with soda and lightly seasoned fish.",
  },
  hakushika: {
    description: "Hakushika is a sake label from the Tatsuuma brewery in Nishinomiya, Hyogo. Rice and the region's miyamizu water support a range that moves beyond one sake style.",
    whyChoose: "Nishinomiya's brewing water is part of Hakushika's identity, not just the label's history.",
    finalVerdict: "Begin with a chilled aromatic bottle and a plate of grilled prawns.",
  },
  hakutsuru: {
    description: "Hakutsuru brews sake in Nada, Kobe. Junmai, fragrant junmai ginjo and cloudy nigori offer noticeably different textures within its rice-based range.",
    whyChoose: "Hakutsuru's junmai ginjo and nigori make sake's range of texture easy to taste.",
    finalVerdict: "A chilled junmai ginjo sits comfortably beside seafood and lightly spiced paneer.",
  },
  "height-of-arrows": {
    description: "Height of Arrows is a gin from Edinburgh's Holyrood Distillery. Juniper is the sole botanical, while sea salt and beeswax shape its texture and finish.",
    whyChoose: "With only juniper as its botanical, Height of Arrows leaves the core of gin exposed.",
    finalVerdict: "A small tonic and plenty of ice show the juniper clearly beside salty snacks.",
  },
  hibiki: {
    description: "Hibiki is Suntory's blended Japanese whisky. Japanese Harmony combines malt and grain whiskies in a floral, honeyed style rather than a peat-led one.",
    whyChoose: "Malt and grain meet in a blend that gives flowers and honey more space than smoke.",
    finalVerdict: "A small neat pour with roasted almonds leaves Japanese Harmony's softer notes intact.",
  },
  inglenook: {
    description: "Inglenook is a wine estate on California's Rutherford Bench in Napa Valley. Cabernet Sauvignon and other Bordeaux varieties shape the structured reds for which the estate is known.",
    whyChoose: "Rutherford-grown Cabernet carries Inglenook's estate history into the glass.",
    finalVerdict: "Open the Cabernet with a substantial dinner and allow time for its tannins to soften.",
  },
  "j-and-b": {
    description: "J&B is a blended Scotch from Justerini & Brooks, now part of Diageo. J&B Rare combines malt and grain whiskies in a lighter, fruit-led style made for long drinks.",
    whyChoose: "J&B Rare keeps Scotch light enough for a simple highball without losing its fruit.",
    finalVerdict: "Try it with soda, ice and grilled mushrooms rather than an elaborate mixer.",
  },
  "jim-barry": {
    description: "Jim Barry Wines is a family producer in South Australia's Clare Valley. Riesling and Shiraz give the winery two very different ways to express the region.",
    whyChoose: "Clare Valley Riesling and Shiraz let this family winery work across both sharp whites and generous reds.",
    finalVerdict: "Choose Riesling with fish tikka or Shiraz with a richer mutton dish.",
  },
  "ketel-one": {
    description: "Ketel One is a Dutch vodka made by the Nolet family in Schiedam. Copper pot distillation sits alongside modern distilling methods in its production.",
    whyChoose: "A family distillery and copper pot still give Ketel One a specific Schiedam identity.",
    finalVerdict: "A small chilled pour or a dry Martini gives its clean grain note room.",
  },
  kirin: {
    description: "Kirin is a Japanese brewer whose Ichiban lager uses the first wort drawn from the mash. That first-press choice helps give the beer its malt-led character.",
    whyChoose: "Ichiban's first-wort method translates a brewing choice into a clear malt note.",
    finalVerdict: "Serve cold with karaage or tandoori chicken and let the lager refresh the palate.",
  },
  kraken: {
    description: "Kraken Original is a black spiced rum built from Caribbean rum associated with Trinidad and Tobago. Cinnamon and vanilla make the dark bottle particularly useful in a ginger highball.",
    whyChoose: "Cinnamon and vanilla give Kraken enough spice to stand up to ginger beer.",
    finalVerdict: "Add lime to keep the sweetness in check and bring salted popcorn alongside.",
  },
  "kronenbourg-1664": {
    description: "Kronenbourg 1664 is a French lager connected to Strasbourg brewing history. The pale lager uses Alsatian Strisselspalt hops; 1664 Blanc is a separate wheat-beer style.",
    whyChoose: "A mild Alsatian hop note distinguishes the lager from its softer Blanc sibling.",
    finalVerdict: "Choose the lager for fried fish and Blanc for a gentler, wheat-led glass.",
  },
  "kumeu-river": {
    description: "Kumeu River is a family winery near Auckland focused on Chardonnay. The Brajkovich family makes estate and single-vineyard wines with a restrained approach to fruit and oak.",
    whyChoose: "Single-vineyard Chardonnay shows how the Brajkovich family's nearby sites differ.",
    finalVerdict: "Serve it cool, not icy, with roast chicken or tandoori fish.",
  },
  kwv: {
    description: "KWV is a wine and brandy producer based in Paarl, South Africa. Roodeberg wines and oak-aged brandies place two different drinks under the same house name.",
    whyChoose: "Paarl's KWV offers both table wine and a slower, oak-aged brandy pour.",
    finalVerdict: "Choose the wine for dinner and save the brandy for dark chocolate afterward.",
  },
  "la-trappe": {
    description: "La Trappe is Trappist beer brewed at Koningshoeven Abbey near Tilburg in the Netherlands. Its range moves from blond ales to darker Dubbel and Quadrupel bottles.",
    whyChoose: "A working abbey produces beers with enough variation to follow a meal from light to rich.",
    finalVerdict: "Take Dubbel with dinner; let Quadrupel occupy a slower glass later.",
  },
  "la-vieille-ferme": {
    description: "La Vieille Ferme is a southern Rhône wine range from Famille Perrin. Ventoux reds and fresher Luberon whites and rosés give the label different places at the table.",
    whyChoose: "Ventoux and Luberon give this Perrin range more regional detail than its everyday price suggests.",
    finalVerdict: "Choose the red for spiced mutton or a chilled white for tandoori fish.",
  },
  "laurent-perrier": {
    description: "Laurent-Perrier is a Champagne house based in Tours-sur-Marne. La Cuvée brut and the house's rosé share a marked emphasis on freshness.",
    whyChoose: "Brisk acidity makes Laurent-Perrier useful beyond the opening toast.",
    finalVerdict: "Keep a chilled glass through the first course, especially with seafood.",
  },
  leffe: {
    description: "Leffe is a Belgian abbey-beer range linked to Notre-Dame de Leffe near Dinant. Blonde and Brune take the malt-and-yeast style in lighter and darker directions.",
    whyChoose: "The difference between Blonde and Brune makes the range easier to match with food.",
    finalVerdict: "Choose Blonde with chicken and Brune with mushroom stew or dark bread.",
  },
  "licor-43": {
    description: "Licor 43 is a golden Spanish liqueur made by the Zamora family in Cartagena. Mediterranean citrus, vanilla and other botanicals form its sweet, aromatic profile.",
    whyChoose: "Citrus and vanilla give a small measure a clear place beside coffee or dessert.",
    finalVerdict: "Add a modest splash to strong coffee and serve with almond cake.",
  },
  "london-no-1": {
    description: "The London No. 1 is a dry gin in the González Byass portfolio. Juniper, bergamot, iris and citrus peel are among its twelve botanicals.",
    whyChoose: "Bergamot gives this otherwise dry botanical gin a distinctive fragrant edge.",
    finalVerdict: "A dry tonic and restrained lemon peel leave the bergamot in view.",
  },
  "longitude-77": {
    description: "Longitude 77 is Pernod Ricard's Indian single malt matured at Dindori near Nashik. American bourbon barrels and wine casks both contribute to its double-cask character.",
    whyChoose: "Bourbon and wine casks give this Dindori malt a fruit-and-oak signature.",
    finalVerdict: "Taste it neat first, then add water beside a plate of mutton seekh.",
  },
  "louis-roederer": {
    description: "Louis Roederer is an independent Champagne house based in Reims. Its multi-vintage Collection brings Chardonnay, Pinot Noir and Meunier together from selected vineyards.",
    whyChoose: "Collection uses several harvests to keep a recognisable house style while retaining vineyard character.",
    finalVerdict: "Take Collection to the table with grilled prawns rather than stopping at the toast.",
  },
  lustau: {
    description: "Lustau is a sherry house from Jerez de la Frontera. Its range spans dry Fino and Amontillado, fuller Oloroso and the dark sweetness of Pedro Ximénez.",
    whyChoose: "Lustau makes the distance between flor-aged dryness and Pedro Ximénez sweetness easy to explore.",
    finalVerdict: "Fino belongs with olives and fried seafood; PX belongs with dessert.",
  },
  "maestro-dobel": {
    description: "Maestro Dobel is a tequila range made in Jalisco. Diamante Cristalino blends aged tequila styles, then filters the blend clear while retaining oak influence.",
    whyChoose: "Diamante's clear appearance makes its aged-tequila flavour a more interesting first sip.",
    finalVerdict: "Serve a small pour over one cube with grilled corn to notice the oak and agave together.",
  },
  "makers-mark": {
    description: "Maker's Mark is a Kentucky bourbon distilled in Loretto. Soft red winter wheat replaces rye in its mash, giving the whiskey a gentler spice profile.",
    whyChoose: "Wheat makes Maker's Mark notably softer than many rye-led bourbons.",
    finalVerdict: "Try it neat beside roasted pecans before mixing an Old Fashioned.",
  },
  malfy: {
    description: "Malfy is an Italian gin made at Torino Distillati in Moncalieri, Piedmont. Alongside Originale, the range explores lemon, grapefruit and orange-led expressions.",
    whyChoose: "Citrus gives Malfy's range more than one route into a simple gin and tonic.",
    finalVerdict: "Match the garnish to the bottle and bring grilled prawns to the table.",
  },
  masi: {
    description: "Masi is a Valpolicella wine producer from Veneto closely associated with Amarone. The Boscaini family uses appassimento, drying selected grapes before fermentation, in its richer reds.",
    whyChoose: "Appassimento lets dried fruit and concentration speak plainly in Masi's Amarone wines.",
    finalVerdict: "Give an Amarone a substantial dinner and time in the glass.",
  },
  masseto: {
    description: "Masseto is a Tuscan wine estate near Bolgheri whose flagship red centres on Merlot. Blue clay on its sea-facing hillside is central to the identity of its most closely watched parcels.",
    whyChoose: "Masseto's Merlot comes from a Bolgheri slope where blue clay is more than a footnote.",
    finalVerdict: "Open the wine with a rich meal and let it develop slowly in the glass.",
  },
};

export const BRAND_CONTENT_BATCH_60: Record<string, BrandPublicContent> = Object.fromEntries(
  BRAND_IDENTITIES_BATCH_60.map(([slug]) => {
    const base = BRAND_CONTENT_BATCH_22[slug] ?? BRAND_CONTENT_BATCH_23[slug];
    if (!base || !revisions[slug]) throw new Error(`Missing source guide or revision for ${slug}`);
    return [slug, { ...base, ...revisions[slug] }];
  }),
);

export const BRAND_SOURCES_BATCH_60: Record<string, string[]> = Object.fromEntries(
  BRAND_IDENTITIES_BATCH_60.map(([slug]) => [slug, BRAND_SOURCES_BATCH_22[slug] ?? BRAND_SOURCES_BATCH_23[slug]]),
);

export const BRAND_LOGOS_BATCH_60: Record<string, string> = Object.fromEntries(
  BRAND_IDENTITIES_BATCH_60.flatMap(([slug]) => {
    const logo = BRAND_LOGOS_BATCH_22[slug] ?? BRAND_LOGOS_BATCH_23[slug];
    return logo ? [[slug, logo]] : [];
  }),
);
