import type { BrandPublicContent } from "./brandContentBatch01.js";
import { BRAND_CONTENT_BATCH_14 } from "./brandContentBatch14.js";
import { BRAND_CONTENT_BATCH_15 } from "./brandContentBatch15.js";
import { BRAND_CONTENT_BATCH_16 } from "./brandContentBatch16.js";

export const BRAND_IDENTITIES_BATCH_54 = [
  ["remy-martin", "Remy Martin"], ["ron-zacapa", "Zacapa"],
  ["singleton", "The Singleton"], ["talisker", "Talisker"],
  ["tanqueray", "Tanqueray"], ["william-lawsons", "William Lawson's"],
  ["100-pipers", "100 Pipers"], ["8-pm", "8 PM"],
  ["albert-bichot", "Albert Bichot"], ["alexis-lichine", "Alexis Lichine"],
  ["all-season", "All Seasons"], ["baron-philippe", "Baron Philippe de Rothschild"],
  ["bouchard", "Bouchard Aine & Fils"], ["cazulo", "Cazulo"],
  ["chandon", "Chandon"], ["cinzano", "Cinzano"],
  ["emiliana", "Emiliana"], ["fruzzante", "Fruzzante"],
  ["lindemans", "Lindeman's"], ["luis-felipe", "Luis Felipe Edwards"],
  ["premius", "Premius"], ["tenjaku", "Tenjaku"],
  ["tomintoul", "Tomintoul"], ["valdivieso", "Valdivieso"],
  ["ventisquero", "Ventisquero"], ["viu-manent", "Viu Manent"],
  ["1664", "1664"], ["1800-tequila", "1800 Tequila"],
  ["818-tequila", "818 Tequila"], ["aberfeldy", "Aberfeldy"],
] as const;

// Research references are internal; none of these URLs are rendered in public copy.
export const BRAND_SOURCES_BATCH_54: Record<string, string[]> = {
  "remy-martin": ["https://www.remymartin.com/en-uk/who-we-are/our-history/"],
  "ron-zacapa": ["https://www.zacaparum.com/en/our-story", "https://www.zacaparum.com/en/our-story/aged-above-clouds"],
  singleton: ["https://www.diageo.com/en/our-brands/scotch-whisky/the-singleton"],
  talisker: ["https://www.malts.com/en/talisker/visit"],
  tanqueray: ["https://www.tanqueray.com/en-gb"],
  "william-lawsons": ["https://www.williamlawsons.com/our-story/", "https://www.bacardilimited.com/our-brands/portfolio/"],
  "100-pipers": ["https://www.pernod-ricard.com/en/brands/100-pipers"],
  "8-pm": ["https://radicokhaitan.com/products/8pm-whisky/", "https://radicokhaitan.com/products/8pm-premium-black-whisky/", "https://www.radicokhaitan.com/products/8pm-grain-blended-whisky/"],
  "albert-bichot": ["https://www.albert-bichot.com/"],
  "alexis-lichine": ["https://www.groupegcf.fr/le-groupe-lgcf/notre-histoire.html"],
  "all-season": ["https://oasisgrp.in/product.php"],
  "baron-philippe": ["https://www.bpdr.com/en/the-history/key-dates"],
  bouchard: ["https://www.bouchard-aine.fr/en/"],
  cazulo: ["https://cazulofeni.com/cazulo-premium-feni.php"],
  chandon: ["https://www.chandon.co.in/"],
  cinzano: ["https://cinzano.com/ja/our-heritage/history"],
  emiliana: ["https://www.emiliana.cl/en/nosotros/historia/"],
  fruzzante: ["https://www.mfec.in/inspection-visit-of-the-first-model-winery-at-ihm-by-smti-priyanka-save-and-mr-nagesh-pai-managing-directors-of-hill-zill-wines-and-owners-of-the-first-chikoo-wine-brand-fruzzante/"],
  lindemans: ["https://www.lindemans.com/en-us/about"],
  "luis-felipe": ["https://www.lfewines.com/about/", "https://www.lfewines.com/vineyards/"],
  premius: ["https://www.yvon-mau.com/"],
  tenjaku: ["https://tenjaku-spirits.com/environment.html"],
  tomintoul: ["https://tomintoulwhisky.com/"],
  valdivieso: ["https://www.valdiviesowines.com/our-company/history/?lang=en"],
  ventisquero: ["https://www.ventisquero.com/en/abous-us/history.html"],
  "viu-manent": ["https://viumanent.cl/en/quienes-somos/historia/"],
  "1664": ["https://www.1664blanc.com/en"],
  "1800-tequila": ["https://www.1800tequila.com/pages/our-story"],
  "818-tequila": ["https://drink818.com/pages/our-story", "https://drink818.com/pages/our-evolved-taste"],
  aberfeldy: ["https://www.aberfeldy.com/us/en/our-distillery/"],
};

// These five are visually checked brand marks. Existing stored logos always win.
export const BRAND_LOGOS_BATCH_54: Record<string, string> = {
  "baron-philippe": "https://www.bpdr.com/zone/themes/bphr/images/logo-name2.jpg",
  bouchard: "https://www.bouchard-aine.fr/images/logo_site_1.png",
  cazulo: "https://cazulofeni.com/images/cazulo-logo.png",
  emiliana: "https://www.emiliana.cl/cms/wp-content/uploads/2026/03/VOE-logo-negro@2x.png",
  "viu-manent": "https://cdn.tasteatlas.com/images/productmakers/657f22c22bad455eac3a485b5c4751a3.png",
};

const earlier: Record<string, BrandPublicContent> = {
  ...BRAND_CONTENT_BATCH_14,
  ...BRAND_CONTENT_BATCH_15,
  ...BRAND_CONTENT_BATCH_16,
};

const revisions: Record<string, Partial<BrandPublicContent>> = {
  "remy-martin": {
    whyChoose: "Fine Champagne Cognac puts the limestone soils of Grande and Petite Champagne at the centre of the glass.",
    finalVerdict: "The Centaur house is worth exploring for its fruit-led Fine Champagne blends, especially alongside dark chocolate or a quiet after-dinner pour.",
  },
  "ron-zacapa": {
    story: "Zacapa began in 1976 to mark the centenary of the Guatemalan town whose name it bears. Its rum then travels to the House Above the Clouds at 2,300 metres, where Lorena Vasquez oversees a sequence of different casks; the woven petate band on Zacapa 23 comes from Guatemalan artisans.",
    whyChoose: "First-press sugarcane and cool mountain maturation give Zacapa 23 its own route to a rounded, cask-led rum.",
    finalVerdict: "Pour Zacapa 23 slowly for raisin, cocoa and orange; the distinctive highland ageing is the reason to linger.",
  },
  singleton: {
    description: "The Singleton is Diageo's single malt name shared by Glen Ord, Glendullan and Dufftown in Scotland. The malt inside a bottle comes from one of those distilleries, rather than a blend of all three.",
    whyChoose: "The three-distillery family offers a way into single malt through fruit, gentle spice and a rounded texture.",
    finalVerdict: "Look for the distillery name on The Singleton bottle: that tells you which part of this Scottish family you are tasting.",
  },
  talisker: {
    whyChoose: "Talisker's peppery smoke and maritime edge come from a working distillery beside Loch Harport on Skye.",
    finalVerdict: "Talisker is the Skye malt for someone who likes a bracing, peppery dram with smoked fish or tandoori prawns.",
  },
  tanqueray: {
    whyChoose: "Four botanicals keep classic Tanqueray London Dry sharply focused on juniper, citrus lift and a dry finish.",
    finalVerdict: "Tanqueray London Dry is built for a crisp gin and tonic, with enough juniper to hold its own beside salty snacks.",
  },
  "william-lawsons": {
    whyChoose: "Macduff malt gives William Lawson's a Highland backbone without making peat smoke the main event.",
    finalVerdict: "A straightforward blended Scotch for highballs, William Lawson's brings vanilla and spice without an overtly smoky profile.",
  },
  "100-pipers": {
    description: "100 Pipers is a Pernod Ricard blended Scotch built with roughly 25 to 30 malt whiskies, many from Speyside, alongside grain whisky. The producer describes the finished blend as smooth and subtly smoky.",
    whyChoose: "Its measured smoke gives 100 Pipers more grip than a wholly sweet, soft blend.",
    finalVerdict: "Try 100 Pipers with a splash of water and a plate of seekh kebabs; the light smoke makes that pairing work.",
  },
  "8-pm": {
    description: "8 PM is an Indian whisky brand launched by Radico Khaitan in 1998. The range includes a grain-blended whisky and the distinct Premium Black expression.",
    tastingNotes: [
      { title: "8 PM Grain Blended", description: "A grain-based blended whisky made for a straightforward, smooth pour." },
      { title: "8 PM Premium Black", description: "The producer describes a fruity, slightly sweet nose with a hint of peat and a medium-bodied finish." },
    ],
    finalVerdict: "8 PM's grain blend and Premium Black serve different tastes; the latter brings a light peaty note to its fruit-led profile.",
  },
  "albert-bichot": {
    whyChoose: "The Beaune house offers Burgundy through both its own estates and a wider merchant selection, from Chablis Chardonnay to Cote d'Or Pinot Noir.",
    finalVerdict: "Albert Bichot is a useful Burgundy name when you want to compare how Chardonnay and Pinot Noir change from one appellation to another.",
  },
  "alexis-lichine": {
    whyChoose: "The label carries the name of a wine writer and Margaux proprietor who helped make French wine legible beyond France.",
    finalVerdict: "Alexis Lichine's French reds and whites are a food-table introduction to a figure who spent his life explaining wine.",
  },
  "all-season": {
    description: "All Seasons is an Indian whisky from Oasis Group. The producer presents it as a smooth signature blend within a portfolio that also includes Royal Arms whisky and OPM vodka.",
    tastingNotes: [
      { title: "Mouthfeel", description: "The producer's calling card for All Seasons is a smooth feel rather than heavy oak or smoke." },
      { title: "Finish", description: "A brisk, lingering close gives the whisky a firmer edge after its soft entry." },
    ],
    whyChoose: "All Seasons is an Indian blended whisky with a smoother opening and a notably brisk finish.",
    finalVerdict: "Serve All Seasons over ice or with soda when you want a direct, brisk Indian whisky pour.",
  },
  "baron-philippe": {
    story: "Baron Philippe took charge of Chateau Mouton Rothschild in 1922 and introduced Mouton Cadet in 1930. A wine-trading company acquired with Chateau d'Armailhac in 1933 became the forerunner of today's Baron Philippe de Rothschild company.",
    whyChoose: "The name connects Pauillac estate wine with the more accessible Bordeaux tradition of Mouton Cadet.",
    finalVerdict: "Baron Philippe de Rothschild spans two different Bordeaux conversations: the Mouton Rothschild estate and the everyday reach of Mouton Cadet.",
  },
  bouchard: {
    story: "The Bouchard family's Burgundy wine trade took formal shape in 1750. From Beaune, Bouchard Aine & Fils built a merchant house closely tied to the named vineyards and villages of the Cote d'Or.",
    whyChoose: "Its Beaune base and long merchant history make Bouchard Aine & Fils a practical route through Burgundy's village and vineyard names.",
    finalVerdict: "Choose the appellation first with Bouchard Aine & Fils; Beaune, Meursault and Nuits-Saint-Georges do not taste alike.",
  },
  cazulo: {
    description: "Cazulo makes cashew and coconut feni in Goa. Both begin with local agricultural ingredients and undergo small-batch pot-still distillation, but the two spirits have distinct aromas.",
    whyChoose: "Few spirits express Goa's cashew harvest and coconut-palm tradition as directly as feni.",
    finalVerdict: "Cazulo is most revealing beside Goan food: try cashew feni with recheado fish and coconut feni with a gentler seafood curry.",
  },
  chandon: {
    whyChoose: "Dindori-grown fruit gives Chandon India a local sparkling-wine identity rather than a borrowed Champagne label.",
    finalVerdict: "Chandon's Nashik sparkling wines are at their best chilled with fish tikka, fried snacks or a plate of lightly spiced prawns.",
  },
  cinzano: {
    story: "Brothers Giovanni Giacomo and Carlo Stefano Cinzano entered Turin's guild of distillers and confectioners in 1757. By 1776 their business supplied the House of Savoy; sparkling wine joined the vermouth trade in the nineteenth century.",
    whyChoose: "Cinzano ties Turin's vermouth tradition to aperitivo serves that still make sense over ice or in a Negroni.",
    finalVerdict: "Cinzano Rosso brings herbal sweetness to an aperitivo; Extra Dry takes a leaner path into a Martini.",
  },
  emiliana: {
    story: "Emiliana began its organic and biodynamic vineyard work in 1998. Coyam and Novas reached the market in 2003; Gê's 2003 vintage later became the first wine in Chile and Latin America certified biodynamic by Demeter.",
    whyChoose: "Emiliana has long vineyard practice behind its organic label, with Coyam and Gê showing what that work can produce.",
    finalVerdict: "From crisp coastal whites to Coyam's darker red-fruit profile, Emiliana gives Chilean organic wine more than one voice.",
  },
  fruzzante: {
    description: "Fruzzante is a chikoo fruit-wine brand made by Hill Zill Wines in Maharashtra. Priyanka Save and Nagesh Pai developed it from the sapota fruit grown around Bordi and Dahanu.",
    whyChoose: "Chikoo makes Fruzzante unlike a grape wine: its appeal begins with the fruit of Maharashtra's coastal orchards.",
    finalVerdict: "Serve Fruzzante cold with fruit chaat or mildly spiced snacks, letting the chikoo character do the talking.",
  },
  lindemans: {
    story: "Dr Henry Lindeman started growing wine grapes in the Hunter Valley in 1843. His Cawarra Claret reached Britain in 1858, decades before the Bin wines became familiar on shelves around the world.",
    whyChoose: "Lindeman's pairs a Hunter Valley beginning with clearly named, approachable Australian varietal wines.",
    finalVerdict: "Bin 65 Chardonnay and Bin 50 Shiraz show the accessible side of Lindeman's without pretending they are the same style.",
  },
  "luis-felipe": {
    story: "Luis Felipe Edwards Sr bought Fundo San Jose de Puquillay in Colchagua in 1976. The family later expanded into Leyda and the Colchagua foothills, with mountain blocks reaching roughly 900 metres.",
    whyChoose: "LFE can put coastal Leyda whites beside Colchagua reds and higher-altitude fruit under one family name.",
    finalVerdict: "Luis Felipe Edwards is worth following by valley: the coastal and Andean vineyards make different demands of the same winemaking family.",
  },
  premius: {
    description: "Premius is a Bordeaux wine label in the Yvon Mau portfolio. Yvon Mau's merchant business dates to 1897 and now sits within Henkell Freixenet, connecting Premius to a substantial French wine-sourcing operation.",
    whyChoose: "Premius gives Bordeaux drinkers a merchant-house label that can be compared across red and white styles.",
    finalVerdict: "Premius is an entry into Yvon Mau's Bordeaux portfolio, with the grape blend and appellation doing the most useful work on the label.",
  },
  tenjaku: {
    whyChoose: "Tenjaku's connection to Fuefuki and the Kofu Basin gives its whisky and other spirits a clear Yamanashi point of origin.",
    finalVerdict: "Tenjaku works well in a Japanese-style highball; its lighter pours leave room for yakitori or grilled mushrooms.",
  },
  tomintoul: {
    story: "Tomintoul Distillery opened in 1965 near the village of the same name in the Cairngorms. Robert Fleming, a fourth-generation Speyside distiller, has guided its spirit and cask choices for more than three decades.",
    whyChoose: "Tall stills, Ballantruan spring water and long Speyside experience make Tomintoul's gentle profile easy to recognise.",
    finalVerdict: "Tomintoul is a soft Speyside malt to try neat before adding water; its fruit and honey sit comfortably beside salted almonds.",
  },
  valdivieso: {
    story: "Alberto Valdivieso founded a sparkling-wine house in Chile in 1879, the first of its kind in South America. Still wines came later, so the name now covers both bubbles and reds from Chilean vineyards.",
    whyChoose: "Valdivieso's sparkling-wine history gives its current range a different starting point from most Chilean still-wine houses.",
    finalVerdict: "Begin with Valdivieso's sparkling wines for the house's original story, then move to Caballo Loco for its red-wine ambitions.",
  },
  ventisquero: {
    story: "Gonzalo Vial planted the Trinidad property in coastal Maipo in 1998. Felipe Tosso led the first harvest around the turn of the millennium, and the Ventisquero range grew toward Casablanca, Colchagua and eventually the Atacama's Huasco Valley.",
    whyChoose: "Ventisquero's vineyards run from coastal Maipo to the desert, giving its wines genuine contrasts of site and climate.",
    finalVerdict: "Choose Ventisquero by vineyard as much as by grape; a coastal white and an Apalta red are very different Chilean pours.",
  },
  "viu-manent": {
    story: "Miguel Viu-Garcia and his sons founded Bodegas Viu in Santiago in 1935. The family bought Hacienda San Carlos de Cunaco in Colchagua in 1966, gaining old vineyards that became central to its Malbec reputation.",
    whyChoose: "Old-vine Malbec from San Carlos is the most distinctive reason to learn the Viu Manent name.",
    finalVerdict: "Viu Manent's Colchagua Malbec is a natural match for grilled lamb or mushroom galouti, with fruit and structure in equal measure.",
  },
  "1664": {
    description: "1664 is a French beer family rooted in the Kronenbourg brewing tradition. Alongside lager, its best-known departure is 1664 Blanc, a hazy wheat beer with a citrus-led profile.",
    whyChoose: "1664 Blanc changes the pace from crisp lager to softer wheat, orange and coriander.",
    finalVerdict: "Pour 1664 Blanc cold with fish tikka or calamari; its citrus edge keeps fried food lively.",
  },
  "1800-tequila": {
    story: "The name 1800 points to an early Beckmann family practice of ageing tequila in oak. Juan Beckmann Vidal launched 1800 Anejo in the 1970s as tequila gained protected-origin status in Mexico.",
    whyChoose: "The range makes a clear progression from Blue Weber agave in Blanco to richer oak influence in Reposado and Anejo.",
    finalVerdict: "Taste 1800 Blanco before mixing it; cooked agave and pepper explain why the Margarita works so well.",
  },
  "818-tequila": {
    story: "818 takes its name from the San Fernando Valley area code. Production moved to Grupo Solave in Jalisco in 2021, where cooked Los Valles agave is crushed by stone tahona and distilled twice in copper pot stills.",
    whyChoose: "818 now puts more of the agave forward, with traditional tahona extraction and a lighter hand on sweetness than its earlier profile.",
    finalVerdict: "The current 818 Blanco is the place to start: sip it first, then add lime for a Margarita with roasted-agave character.",
  },
  aberfeldy: {
    description: "Aberfeldy is a Highland single malt distilled in Perthshire with water from the Pitilie Burn. Longer fermentation and copper pot distillation help build the honeyed character for which it is known.",
    whyChoose: "Aberfeldy's honeyed malt character comes from a working distillery built in 1898, not just a sweet cask finish.",
    finalVerdict: "Aberfeldy 12 is a gentle Highland starting point, especially with roasted almonds or a square of dark chocolate.",
  },
};

export const BRAND_CONTENT_BATCH_54: Record<string, BrandPublicContent> = Object.fromEntries(
  BRAND_IDENTITIES_BATCH_54.map(([slug]) => {
    const base = earlier[slug];
    if (!base || !revisions[slug]) throw new Error(`Missing reviewed content for ${slug}`);
    return [slug, { ...base, ...revisions[slug] }];
  }),
);
