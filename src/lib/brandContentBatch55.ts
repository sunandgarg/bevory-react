import type { BrandPublicContent } from "./brandContentBatch01.js";
import { BRAND_CONTENT_BATCH_14 } from "./brandContentBatch14.js";
import { BRAND_CONTENT_BATCH_15 } from "./brandContentBatch15.js";
import { BRAND_CONTENT_BATCH_16 } from "./brandContentBatch16.js";
import { BRAND_CONTENT_BATCH_17 } from "./brandContentBatch17.js";

export const BRAND_IDENTITIES_BATCH_55 = [
  ["aberlour", "Aberlour"], ["aix-provence", "AIX Provence"],
  ["allan-scott", "Allan Scott"], ["allegrini-amarone", "Allegrini Amarone"],
  ["alta-vista", "Alta Vista"], ["amarula", "Amarula"],
  ["amstel", "Amstel"], ["angostura", "Angostura"],
  ["antiquity-blue", "Antiquity Blue"], ["aperol", "Aperol"],
  ["appleton-estate", "Appleton Estate"], ["ardbeg", "Ardbeg"],
  ["auchentoshan", "Auchentoshan"], ["barefoot", "Barefoot"],
  ["beefeater", "Beefeater"], ["belvedere", "Belvedere"],
  ["1965-xxx", "1965 Spirit of Victory"], ["3-kilos", "3 Kilos"],
  ["44-degree", "44°N"], ["9-lives", "9 Lives"],
  ["adobe", "Adobe"], ["aerolite-lyndsay", "Aerolite Lyndsay"],
  ["agavales", "Agavales"], ["alambre", "Alambre"],
  ["altamura", "Altamura"], ["altano", "Altano"],
  ["antigal-uno", "Antigal UNO"], ["ardmore", "Ardmore"],
  ["archers", "Archers"], ["balblair", "Balblair"],
] as const;

export const BRAND_FULL_FACT_CHECK_PENDING_BATCH_55 = new Set<string>(
  BRAND_IDENTITIES_BATCH_55.slice(0, 16).map(([slug]) => slug),
);

// Evidence stays in editorial data, never in the consumer-facing fields.
export const BRAND_SOURCES_BATCH_55: Record<string, string[]> = {
  aberlour: ["https://www.aberlour.com/en/"],
  "aix-provence": ["https://www.aixrose.com/"],
  "allan-scott": ["https://allanscott.com/"],
  "allegrini-amarone": ["https://allegrini.it/en/"],
  "alta-vista": ["https://altavistawines.com/"],
  amarula: ["https://amarula.com/en-za/faqs/"],
  amstel: ["https://www.amstel.nl/"],
  angostura: ["https://angostura.com/"],
  "antiquity-blue": ["https://www.diageoindia.com/en/brands/brand-explorer/antiquity"],
  aperol: ["https://www.aperol.com/"],
  "appleton-estate": ["https://www.appletonestate.com/en-us/roots/"],
  ardbeg: ["https://www.ardbeg.com/en-gb"],
  auchentoshan: ["https://www.auchentoshan.com/"],
  barefoot: ["https://www.barefootwine.com/our-story.html"],
  beefeater: ["https://www.beefeatergin.com/en/"],
  belvedere: ["https://www.belvederevodka.com/en-int"],
  "1965-xxx": ["https://radicokhaitan.com/products/1965-premium-xxx-rum/"],
  "3-kilos": ["https://3kilos.de/"],
  "44-degree": ["https://www.44gin.com/"],
  "9-lives": ["https://9liveswine.com/wines/delirious/"],
  adobe: ["https://www.emiliana.cl/vinos/adobe/"],
  "aerolite-lyndsay": ["https://www.atombrands.com/blog-press-posts/aerolite-lyndsay"],
  agavales: ["https://www.agavalestequila.com/original-blanco-range-tequila"],
  alambre: ["https://www.jmf.pt/index.php?id=77"],
  altamura: ["https://www.altamuradistilleries.com/en/premium-vodka/"],
  altano: ["https://en.altano.pt/wines"],
  "antigal-uno": ["https://www.antigal.com/uno/"],
  ardmore: ["https://www.ardmorewhisky.com/"],
  archers: ["https://archers.com/products/archers/"],
  balblair: ["https://www.balblair.com/"],
};

// Only assets visually checked for the matching brand and usable on light cards.
// Existing stored logos are preserved by the database update path.
export const BRAND_LOGOS_BATCH_55: Record<string, string> = {
  "3-kilos": "https://3kilos.de/wp-content/uploads/2024/04/cropped-3-KILOS-VODKA-LOGO-PRIMARY-583x1024.png",
  altamura: "https://www.altamuradistilleries.com/wp-content/uploads/2024/01/01-24-logo.svg",
  "antigal-uno": "https://www.antigal.com/wp-content/uploads/svg/brand_UNO.svg",
};

const earlier: Record<string, BrandPublicContent> = {
  ...BRAND_CONTENT_BATCH_14,
  ...BRAND_CONTENT_BATCH_15,
  ...BRAND_CONTENT_BATCH_16,
  ...BRAND_CONTENT_BATCH_17,
};

const revisions: Record<string, Partial<BrandPublicContent>> = {
  aberlour: {
    description: "Aberlour is a Speyside single malt founded by James Fleming beside the Lour Burn. Its Double Cask 12 Year Old brings American oak and sherry-cask character together; A'bunadh takes a richer, batch-made route.",
    whyChoose: "James Fleming's Speyside distillery puts orchard fruit and sherry-cask depth in the same glass.",
    finalVerdict: "The 12 Year Old is the lighter entry point; A'bunadh is for a slower, fuller after-dinner pour.",
  },
  "aix-provence": {
    description: "AIX is the rosé of Maison Saint Aix, whose 75 hectares lie in the Coteaux d'Aix-en-Provence appellation. Grenache, Syrah and Cinsault grow in limestone-rich soils under the cooling Mistral.",
    whyChoose: "Estate-grown Grenache, Syrah and Cinsault give AIX its dry red-berry and citrus profile.",
    finalVerdict: "AIX rosé is at home beside tandoori prawns: dry, refreshing and substantial enough for food.",
  },
  "allan-scott": {
    description: "Allan Scott is a Marlborough winery established by Allan and Cathy Scott on Jacksons Road. Sauvignon Blanc leads its range, with Pinot Noir, Chardonnay and sparkling wine alongside it.",
    whyChoose: "The Scott family's early work in Marlborough vineyards gives this winery a direct link to the region's rise.",
    finalVerdict: "Its brisk Sauvignon Blanc is a good place to begin; the Pinot Noir shows the family's quieter red-wine side.",
  },
  "allegrini-amarone": {
    description: "Allegrini makes Amarone in Fumane, at the heart of Valpolicella Classica in Veneto. The family also works with Corvina in La Poja and other estate wines, each showing a different side of the local grape.",
    whyChoose: "Allegrini's Amarone concentrates Valpolicella fruit through grape drying while retaining a firm, food-friendly frame.",
    finalVerdict: "Pour its Amarone with slow-cooked mutton rather than a delicate starter; the dried-fruit weight needs a substantial plate.",
  },
  "alta-vista": {
    story: "Count Patrick d'Aulan founded Alta Vista in 1998, bringing a French family winemaking background to Argentina. The team works across high-altitude sites in Mendoza and Salta, treating each parcel as its own source of character.",
    whyChoose: "Alta Vista lets Malbec speak through distinct Andean sites instead of a single broad regional blend.",
    finalVerdict: "The estate Malbec offers generous fruit; a single-vineyard bottle makes a sharper case for place.",
  },
  amarula: {
    description: "Amarula is a South African cream liqueur built on spirit distilled from marula fruit. The original combines that fruit spirit with dairy cream; the range also includes coffee and fruit-led variations.",
    whyChoose: "Marula fruit gives the cream liqueur a South African identity beyond vanilla and caramel sweetness.",
    finalVerdict: "Chill Amarula Cream and serve it after dinner with coffee or dark chocolate, where the marula note stays clear.",
  },
  amstel: {
    description: "Amstel is the Amsterdam-born lager brand now owned by Heineken. Its Pilsener is brewed with malt for a fuller grain taste than a very light lager, with fresh carbonation and a crisp close.",
    tastingNotes: [
      { title: "Amstel Pilsener", description: "Bread-like malt and a mild hop edge meet lively carbonation." },
      { title: "Finish", description: "A lightly bitter, clean close keeps the malt from feeling heavy." },
    ],
    finalVerdict: "Cold Amstel Pilsener and hot pakoras make a direct match: malt, salt and a crisp finish.",
  },
  angostura: {
    description: "Angostura is a Trinidad and Tobago house known for aromatic bitters and rum. The bitters season cocktails a few dashes at a time; its molasses-based rums belong in a separate glass and serving tradition.",
    whyChoose: "Few names connect cocktail bitters and Trinidadian rum as directly as Angostura.",
    finalVerdict: "Use the bitters to sharpen a drink; pour Angostura rum to explore the house's barrel-aged side.",
  },
  "antiquity-blue": {
    description: "Antiquity Blue is an Indian whisky made by Diageo India, established in 1992. Scotch grain whisky from Cameronbridge contributes to its blend, while malt, wood, heather and a hint of peat shape the house profile.",
    story: "Antiquity Blue draws part of its whisky lineage from Cameronbridge, associated with Robert Stein's nineteenth-century work in grain distillation. Its blue bottle is one of the label's most recognisable features in India.",
    finalVerdict: "A measured hint of peat gives Antiquity Blue more contour than a purely sweet whisky-and-soda pour.",
  },
  aperol: {
    description: "Aperol is a bittersweet Italian aperitivo introduced in Padua by the Barbieri brothers in 1919. Orange is its most immediate note; herbs and a modest bitter edge keep it suited to a sparkling Spritz.",
    tastingNotes: [
      { title: "Orange", description: "Fresh citrus peel and a gentle sweetness lead the first sip." },
      { title: "Herbal finish", description: "A light bitter-herbal edge lingers after the orange, especially when the aperitivo is served cold." },
    ],
    finalVerdict: "The classic Spritz works because Aperol's orange sweetness meets dry bubbles and salty food.",
  },
  "appleton-estate": {
    description: "Appleton Estate makes Jamaican rum in the Nassau Valley using molasses and both pot and column distillation. Orange peel and ripe fruit run through the range, with oak becoming more prominent in longer-aged expressions.",
    whyChoose: "Its Nassau Valley home and pot-still component give Appleton Estate a recognisably Jamaican weight.",
    finalVerdict: "Start with Signature in a rum highball, then try an older Appleton Estate neat to hear what the oak adds.",
  },
  ardbeg: {
    description: "Ardbeg is a heavily peated single malt from Islay's southern coast. Its smoke comes with lemon, sweetness and sea air rather than peat alone.",
    whyChoose: "Ardbeg Ten sets intense peat against lemon and salt; Uigeadail adds dark fruit and sherry-cask weight.",
    finalVerdict: "Ardbeg Ten suits smoked fish or pepper chicken; Uigeadail can carry a darker, spicier dinner.",
  },
  auchentoshan: {
    description: "Auchentoshan is a Lowland single malt made near Glasgow with triple-distilled spirit. The clean, fruit-led base takes on vanilla and coconut in American Oak, then darker fruit in the Three Wood expression.",
    whyChoose: "Triple distillation makes the contrast between Auchentoshan's bourbon- and sherry-influenced bottles easy to taste.",
    finalVerdict: "American Oak keeps things bright; Three Wood is the choice when plum and nutty sherry notes sound better.",
  },
  barefoot: {
    description: "Barefoot is a California wine range owned by E. & J. Gallo. Its shelves span Moscato, Chardonnay, Pinot Grigio, Cabernet Sauvignon and other still and sparkling styles.",
    whyChoose: "Barefoot puts familiar grape names and clear fruit character ahead of wine jargon.",
    finalVerdict: "Moscato and Cabernet Sauvignon sit at opposite ends of this range; pick the grape and sweetness level that suit dinner.",
  },
  beefeater: {
    description: "Beefeater is a London Dry gin developed by James Burrough and made in London. Its classic recipe keeps juniper in front, supported by citrus peel, coriander, angelica and liquorice.",
    whyChoose: "The juniper-and-citrus balance is strong enough for a Martini and clear enough for a simple tonic.",
    finalVerdict: "A Beefeater gin and tonic with lemon peel works neatly beside tandoori prawns or salted almonds.",
  },
  belvedere: {
    description: "Belvedere is a Polish vodka made from rye and water at the Polmos Żyrardów distillery. Rather than disappearing in a mixer, its soft texture carries a little white-pepper and almond character.",
    whyChoose: "Rye gives Belvedere texture and a gentle pepper note without turning the vodka coarse.",
    finalVerdict: "Serve it cold with smoked fish or a restrained Martini so the rye character remains visible.",
  },
  "1965-xxx": {
    story: "Radico Khaitan named 1965 Spirit of Victory for the Indian soldiers of the 1965 Indo-Pak war. The rum has a place in CSD canteens, linking the label's commemorative identity with an actual serving context.",
    whyChoose: "Honey, chocolate and dried fruit give this Radico rum a distinctly rich dark-rum direction.",
    finalVerdict: "A short rocks pour works with pepper chicken or dark chocolate, letting the rum's sweet fruit carry the finish.",
  },
  "3-kilos": {
    description: "3 Kilos is a Dutch wheat vodka made in Schiedam and bottled in a patented gold-bar shape. The wheat spirit passes through five-column distillation before dilution with purified water.",
    whyChoose: "The bullion bottle catches the eye, but the wheat spirit inside brings floral, grapefruit and almond notes.",
    finalVerdict: "Chill 3 Kilos for a neat pour or keep it spare in a Martini with a lemon twist.",
  },
  "44-degree": {
    description: "44°N is a gin from Comte de Grasse in Grasse, France. Its floral and citrus botanicals draw on the city's perfume-making heritage without hiding the gin's juniper base.",
    whyChoose: "Rose, citrus and coastal herbs give 44°N a fragrant Riviera signature.",
    finalVerdict: "Use a light tonic and grapefruit peel; heavily flavoured mixers would bury the flowers.",
  },
  "9-lives": {
    description: "9 Lives is a Chilean wine label associated with Viña San Pedro and VSPT Wine Group. Delirious Cabernet Sauvignon brings ripe red fruit into a pepper-and-tea finish.",
    whyChoose: "Its Cabernet Sauvignon brings easy red fruit to the table without losing a savoury edge.",
    finalVerdict: "Pour the Delirious Cabernet slightly cool with stuffed mushrooms or mutton seekh.",
  },
  adobe: {
    description: "Adobe is Emiliana's Chilean Reserva wine range made with organically grown grapes. Sauvignon Blanc, Carmenère and other varietals show different sides of the producer's vineyard work.",
    whyChoose: "Adobe makes Emiliana's organic farming visible through familiar Chilean grape styles.",
    finalVerdict: "The citrus-led Sauvignon Blanc is an easy match for paneer tikka or lemon fish.",
  },
  "aerolite-lyndsay": {
    description: "Aerolite Lyndsay is a peated, ten-year-old Islay single malt released by Atom Brands for The Character of Islay Whisky Company. The launch whisky combined ex-bourbon barrels, Spanish oak sherry quarter casks and a small share of selected character casks.",
    story: "Launched in 2019, Aerolite Lyndsay was the first whisky in Atom Brands' Character of Islay series. Its name rearranges the letters of 'ten year old Islay', a plain account of the age and island behind the playful label.",
    finalVerdict: "Its smoke has enough cocoa and toffee behind it to stand up to charred paneer or peppery lamb.",
  },
  agavales: {
    description: "Agavales is a tequila range from Jalisco, Mexico, with Original Blanco and Reposado among its expressions. Blanco foregrounds fresh agave and citrus; Reposado moves toward baked agave and caramel.",
    whyChoose: "The Blanco and Reposado make a useful side-by-side lesson in how oak changes agave spirit.",
    finalVerdict: "Try Blanco in a lime-led cocktail and Reposado with grilled corn or chilli paneer.",
  },
  alambre: {
    description: "Alambre is José Maria da Fonseca's Moscatel de Setúbal, a fortified wine from Portugal's Setúbal Peninsula. Its Muscat grapes give orange-peel and apricot aromas; used oak brings a deeper nutty side to aged bottlings.",
    whyChoose: "Orange peel, apricot and walnut make the ten-year Alambre distinct from a simple sweet white wine.",
    finalVerdict: "A small, cool glass of Alambre 10 Years works with almond sweets or aged cheese.",
  },
  altamura: {
    description: "Altamura Distilleries makes vodka from durum wheat grown around Altamura in Puglia, the grain also used for the town's protected bread. Triple distillation leaves a creamy, savoury body with citrus and soft spice.",
    whyChoose: "Puglian durum wheat gives Altamura a cereal-and-umami signature unusual in vodka.",
    finalVerdict: "The texture earns a simple chilled pour, especially beside olives or lightly spiced seafood.",
  },
  altano: {
    description: "Altano is the Symington family's dry-wine range from Portugal's Douro Valley. Touriga Franca, Tinta Roriz and native white grapes give the reds and whites different regional accents.",
    whyChoose: "Port-country grapes in dry-wine form are the reason to explore Altano.",
    finalVerdict: "Try its red with mutton seekh and its white with tandoori fish; the Douro offers both sides of the meal.",
  },
  "antigal-uno": {
    description: "UNO is the Mendoza range of Antigal Winery, whose home is a restored Maipú winery. Malbec leads, with Cabernet Sauvignon and other varietal wines showing the label's wider reach.",
    whyChoose: "UNO Malbec puts generous Mendoza plum fruit inside a soft-tannin frame.",
    finalVerdict: "Give UNO Malbec a little air and bring it to grilled lamb or mushroom kebabs.",
  },
  ardmore: {
    description: "Ardmore is a Highland single malt made near Kennethmont in Aberdeenshire. Its use of peated malt brings a distinctive smoke to a region more often associated with unpeated whisky.",
    whyChoose: "Ardmore's dry peat smoke gives Highland whisky a different route from Islay's coastal intensity.",
    finalVerdict: "A small splash of water opens Ardmore's smoke beside seekh kebabs or smoked aubergine.",
  },
  archers: {
    description: "Archers is a British peach schnapps liqueur now owned by De Kuyper. Its ripe peach sweetness makes it a mixer rather than a spirit to approach like dry gin or whisky.",
    whyChoose: "The soft peach flavour makes Archers useful in long drinks with lemonade or soda.",
    finalVerdict: "Keep an Archers drink cold and simple; peach and fizz are enough beside salty snacks.",
  },
  balblair: {
    description: "Balblair is a Highland single malt from Edderton in Scotland, made at a distillery whose story reaches back to 1790. Its range moves between orchard fruit, citrus and the deeper notes drawn from oak maturation.",
    whyChoose: "Balblair brings northern Highland fruit into clear focus before the oak takes over.",
    finalVerdict: "Serve it neat first, then with a drop of water and a plate of roasted almonds or tandoori chicken.",
  },
};

export const BRAND_CONTENT_BATCH_55: Record<string, BrandPublicContent> = Object.fromEntries(
  BRAND_IDENTITIES_BATCH_55.map(([slug]) => {
    const base = earlier[slug];
    if (!base || !revisions[slug]) throw new Error(`Missing source guide or revision for ${slug}`);
    return [slug, { ...base, ...revisions[slug] }];
  }),
);
