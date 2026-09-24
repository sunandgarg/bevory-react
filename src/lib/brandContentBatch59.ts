import type { BrandPublicContent } from "./brandContentBatch01.js";
import { BRAND_CONTENT_BATCH_21, BRAND_IDENTITIES_BATCH_21, BRAND_LOGOS_BATCH_21, BRAND_SOURCES_BATCH_21 } from "./brandContentBatch21.js";
import { BRAND_CONTENT_BATCH_22, BRAND_IDENTITIES_BATCH_22, BRAND_LOGOS_BATCH_22, BRAND_SOURCES_BATCH_22 } from "./brandContentBatch22.js";

export const BRAND_IDENTITIES_BATCH_59 = [
  ...BRAND_IDENTITIES_BATCH_21.slice(20),
  ...BRAND_IDENTITIES_BATCH_22.slice(0, 20),
] as const;

// Retain researched history, tasting notes, pairings and FAQs. These public
// edits reuse established facts without adding expression-level claims.
const revisions: Record<string, Pick<BrandPublicContent, "description" | "whyChoose" | "finalVerdict">> = {
  "cloudy-bay": {
    description: "Cloudy Bay makes wine in New Zealand, with Marlborough Sauvignon Blanc at the centre of its reputation. Chardonnay, Pinot Noir and other releases show a broader range than that famous white alone.",
    whyChoose: "Marlborough Sauvignon Blanc gave Cloudy Bay its name; the other varieties show what else the producer can do.",
    finalVerdict: "Bring the Sauvignon Blanc to a table of grilled prawns and herbs, where its citrus has a job to do.",
  },
  clynelish: {
    description: "Clynelish is a Highland single malt made near Brora on Scotland's northeast coast. A waxy texture, honeyed fruit and restrained coastal note distinguish the distillate.",
    whyChoose: "Texture is Clynelish's calling card: its waxiness stays noticeable beside the fruit.",
    finalVerdict: "Sip it slowly with smoked fish or salted almonds when heavy peat is not the point.",
  },
  codigo: {
    description: "Código 1530 is tequila made in Amatitán, Jalisco, from mature agave. Stainless-steel ovens cook the agave, while French oak red-wine barrels influence its aged expressions.",
    whyChoose: "The move from clear agave to red-wine-cask influence makes Código's styles worth tasting side by side.",
    finalVerdict: "Use Blanco with lime and save an aged expression for a slower pour beside grilled food.",
  },
  "copper-dog": {
    description: "Copper Dog is a Speyside blended malt Scotch made from eight single malts. The name comes from the pub at the Craigellachie Hotel by the River Spey.",
    whyChoose: "Eight Speyside malts give Copper Dog fruit and biscuit character without turning the blend heavy.",
    finalVerdict: "A highball with cold soda belongs beside mushroom kebabs or salted bar snacks.",
  },
  craigellachie: {
    description: "Craigellachie is a Speyside single malt made where the Fiddich and Spey rivers meet. Worm-tub condensers contribute to its substantial spirit and weightier texture.",
    whyChoose: "Worm tubs give Craigellachie the heft that sets it apart from lighter Speyside malts.",
    finalVerdict: "A small neat pour with roasted nuts gives the fruit and weight equal room.",
  },
  "crystal-head": {
    description: "Crystal Head is a Canadian vodka brand created by Dan Aykroyd and John Alexander. Original, Aurora and Onyx use different bases, including corn, wheat and agave, inside the familiar skull bottles.",
    whyChoose: "The bottle gets attention, but the three different base ingredients make the range worth comparing.",
    finalVerdict: "Choose Original for a corn-based pour, Aurora for wheat or Onyx for agave rather than shopping by skull colour.",
  },
  delirium: {
    description: "Delirium is a Belgian beer range from Brouwerij Huyghe. Delirium Tremens, with the pink elephant label, is a strong golden ale whose yeast character matters as much as its malt.",
    whyChoose: "Behind the playful label is a strong Belgian ale with unmistakable fermentation character.",
    finalVerdict: "Give Delirium Tremens a clean glass and a plate of roast chicken rather than drinking it hurriedly.",
  },
  "dom-perignon": {
    description: "Dom Pérignon is a vintage-only Champagne made by Moët & Chandon. Chardonnay and Pinot Noir shape each release, with the harvest year central to its character.",
    whyChoose: "A Dom Pérignon release stands or falls on its single harvest, not a fixed house blend from many years.",
    finalVerdict: "A proper wine glass and a meal give the vintage more room than a brief toast.",
  },
  donnafugata: {
    description: "Donnafugata is a Sicilian wine estate founded by Giacomo Rallo and Gabriella Anca. Its vineyards stretch from Contessa Entellina to Pantelleria, Etna and Vittoria, with grapes including Zibibbo and Nero d'Avola.",
    whyChoose: "A Pantelleria Zibibbo and an Etna red tell distinctly different parts of Donnafugata's Sicilian story.",
    finalVerdict: "Follow the place and grape on the label: the sweet island wine and the volcanic red need different food.",
  },
  "el-dorado": {
    description: "El Dorado is a Demerara rum made by Demerara Distillers at Guyana's Diamond Distillery. Its blends draw on several still types, including historic wooden stills.",
    whyChoose: "Guyana's surviving wooden stills give El Dorado blending tools few rum houses still possess.",
    finalVerdict: "Start with a neat pour and dark chocolate, then notice how the blends shift with the stills used.",
  },
  "el-jimador": {
    description: "El Jimador is a 100% blue Weber agave tequila from Casa Herradura in Amatitán, Jalisco. Silver keeps the agave direct, while Reposado brings oak into the picture.",
    whyChoose: "Blue agave stays visible in both the bright Silver and oak-rested Reposado.",
    finalVerdict: "Silver suits a lime-forward Margarita; try Reposado with one cube and corn chaat.",
  },
  "elijah-craig": {
    description: "Elijah Craig is a Kentucky bourbon made by Heaven Hill. Its Small Batch takes vanilla, caramel and spice from maturation in level-three charred oak barrels.",
    whyChoose: "Charred oak gives Elijah Craig Small Batch a toasted edge without burying its caramel sweetness.",
    finalVerdict: "Pour it neat with roasted pecans when you want oak and spice in the same sip.",
  },
  erdinger: {
    description: "Erdinger is a family-owned wheat-beer brewery in Erding, Bavaria. Weissbier combines wheat and barley malt with top-fermenting yeast for a soft, fruity beer.",
    whyChoose: "Wheat, yeast and a full head give Erdinger Weissbier its distinctly Bavarian texture.",
    finalVerdict: "Serve it in a tall wheat-beer glass with salted pretzels or paneer pakora.",
  },
  eristoff: {
    description: "Eristoff is a grain vodka with a family story tracing back to Georgia. Its Original is triple-distilled and charcoal-filtered for a crisp, restrained style.",
    whyChoose: "Original keeps grain and a clean finish in balance, leaving mixers room to work.",
    finalVerdict: "A cold soda-and-lemon serve suits tandoori fish better than a sugary mixer.",
  },
  espolon: {
    description: "Espolón is tequila made at the San Nicolás distillery in Mexico. Its pot-and-column distillation meets labels inspired by José Guadalupe Posada's prints.",
    whyChoose: "The artwork catches the eye, but the choice between Blanco and Reposado changes the drink.",
    finalVerdict: "Take Blanco into a Margarita; pour Reposado with ice and grilled corn.",
  },
  "evan-williams": {
    description: "Evan Williams is a Kentucky straight bourbon brand from Heaven Hill. Black Label is the familiar oak-aged bottle; Bottled-in-Bond and 1783 take the range in different directions.",
    whyChoose: "Black Label handles a stirred cocktail, while the wider range offers fuller bourbon styles.",
    finalVerdict: "Use Black Label for an Old Fashioned and keep barbecue chicken nearby.",
  },
  fosters: {
    description: "Foster's began as a lager label in Melbourne, Australia. The pale, light-bodied beer is built for a cold pour beside food rather than a dense malt experience.",
    whyChoose: "Its light body makes Foster's easy to place beside salty, fried snacks.",
    finalVerdict: "Serve cold with masala fries or fish fry; keep the food, not the beer, in the foreground.",
  },
  "four-pillars": {
    description: "Four Pillars makes gin in Healesville in Australia's Yarra Valley. Rare Dry Gin uses native lemon myrtle and Tasmanian pepperberry with fresh orange among its botanicals.",
    whyChoose: "Rare Dry puts Australian citrus and pepperberry into a gin that works at the table.",
    finalVerdict: "A restrained tonic and tandoori prawns leave the citrus and spice in clear view.",
  },
  freixenet: {
    description: "Freixenet is a Spanish sparkling-wine house associated with cava from Penedès. Cordón Negro uses Parellada, Macabeo and Xarel·lo, gaining its bubbles through a second fermentation in the bottle.",
    whyChoose: "Penedès grapes and bottle fermentation give Cordón Negro its crisp, food-friendly shape.",
    finalVerdict: "Chill it for fried prawns or paneer pakora, where the acidity earns its keep.",
  },
  frescobaldi: {
    description: "Frescobaldi is a Tuscan wine family with estates across the region. Sangiovese-led reds, Chardonnay and other wines take their character from different vineyards rather than one house-wide flavour.",
    whyChoose: "A look across Frescobaldi's estates shows how much Tuscan site matters to the wine.",
    finalVerdict: "Choose the estate and grape before the meal; a robust red belongs with rogan josh.",
  },
  frontera: {
    description: "Frontera is a Chilean wine label from Concha y Toro. Cabernet Sauvignon from the Central Valley sits within a wider range of approachable varietal wines.",
    whyChoose: "Its Central Valley Cabernet offers a direct entry into Chilean red wine.",
    finalVerdict: "Pour the Cabernet with a spiced mutton dinner, where its fruit has something to meet.",
  },
  "g-h-mumm": {
    description: "G.H. Mumm is a Champagne house based in Reims. Pinot Noir takes a leading role in its fresh, structured house style, especially Grand Cordon.",
    whyChoose: "Pinot Noir gives Grand Cordon enough structure to stay on the table after the toast.",
    finalVerdict: "Keep a chilled glass beside the first savoury course rather than ending at the aperitif.",
  },
  gaja: {
    description: "Gaja is a family wine producer based in Barbaresco, Piedmont. Nebbiolo defines its Barbaresco wines, while the family also works vineyards elsewhere in Italy.",
    whyChoose: "Gaja's Barbaresco brings Nebbiolo's flowers, fruit and tannin into sharp focus.",
    finalVerdict: "Open it with a substantial meal and give the red time in a wide glass.",
  },
  gianchand: {
    description: "GianChand is an Indian single malt made by DeVANS in Jammu. Malted barley and the region's distilling conditions give the whisky a local identity of its own.",
    whyChoose: "A Jammu-made single malt adds another distinct place to India's whisky map.",
    finalVerdict: "Try a small neat pour beside mutton seekh and let its malt lead.",
  },
  "gin-mare": {
    description: "Gin Mare is a Spanish gin made near Barcelona. Arbequina olives, rosemary, thyme and basil give it a savoury Mediterranean profile.",
    whyChoose: "Olive and kitchen herbs make Gin Mare particularly comfortable beside food.",
    finalVerdict: "A rosemary-garnished tonic belongs next to grilled prawns or herb-led paneer.",
  },
  glenallachie: {
    description: "The GlenAllachie is a Speyside single malt from the distillery of the same name. Sherry-seasoned oak has a prominent role in its core range, bringing dried fruit and spice beside the malt.",
    whyChoose: "Cask choice gives GlenAllachie's Speyside malt its dried-fruit depth.",
    finalVerdict: "Start with a sherry-cask expression neat and bring roasted walnuts to the table.",
  },
  glengoyne: {
    description: "Glengoyne is a Highland single malt distilled near Dumgoyne, Scotland. Unpeated malt and slow distillation put fruit and cask character ahead of smoke.",
    whyChoose: "Glengoyne lets fruit and oak speak without peat in the way.",
    finalVerdict: "A slow neat pour with dried fruit or almonds suits this unpeated malt.",
  },
  godawan: {
    description: "Godawan is an Indian single malt made by Diageo India at Alwar in Rajasthan. Desert maturation and conservation work for the Great Indian Bustard are part of its regional identity.",
    whyChoose: "Alwar's dry climate gives Godawan a setting unlike India's coastal and hill distilleries.",
    finalVerdict: "A measured pour with a Rajasthani mutton dish lets the local story meet the meal.",
  },
  godfather: {
    description: "Godfather is an Indian beer brand from DeVANS Modern Breweries. Its range includes strong beers and a lighter Luxury Lager rather than a single beer style.",
    whyChoose: "The strong beer and Luxury Lager give Godfather two different places at the table.",
    finalVerdict: "Choose the lighter lager for a longer meal and serve it well chilled with salty snacks.",
  },
  "gouden-carolus": {
    description: "Gouden Carolus is a Belgian beer range brewed by Het Anker in Mechelen. Classic is a dark, top-fermented beer with roasted malt, caramel and chocolate notes.",
    whyChoose: "Classic's dark malt and high-fermentation character give it enough depth for dinner.",
    finalVerdict: "A stemmed glass and a plate of spiced roast meat suit this rich Belgian ale.",
  },
};

export const BRAND_CONTENT_BATCH_59: Record<string, BrandPublicContent> = Object.fromEntries(
  BRAND_IDENTITIES_BATCH_59.map(([slug]) => {
    const base = BRAND_CONTENT_BATCH_21[slug] ?? BRAND_CONTENT_BATCH_22[slug];
    if (!base || !revisions[slug]) throw new Error(`Missing source guide or revision for ${slug}`);
    return [slug, { ...base, ...revisions[slug] }];
  }),
);

export const BRAND_SOURCES_BATCH_59: Record<string, string[]> = Object.fromEntries(
  BRAND_IDENTITIES_BATCH_59.map(([slug]) => [slug, BRAND_SOURCES_BATCH_21[slug] ?? BRAND_SOURCES_BATCH_22[slug]]),
);

export const BRAND_LOGOS_BATCH_59: Record<string, string> = Object.fromEntries(
  BRAND_IDENTITIES_BATCH_59.flatMap(([slug]) => {
    const logo = BRAND_LOGOS_BATCH_21[slug] ?? BRAND_LOGOS_BATCH_22[slug];
    return logo ? [[slug, logo]] : [];
  }),
);
