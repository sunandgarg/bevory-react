import type { BrandPublicContent } from "./brandContentBatch01.js";
import { BRAND_CONTENT_BATCH_18, BRAND_IDENTITIES_BATCH_18, BRAND_LOGOS_BATCH_18, BRAND_SOURCES_BATCH_18 } from "./brandContentBatch18.js";
import { BRAND_CONTENT_BATCH_19, BRAND_IDENTITIES_BATCH_19, BRAND_LOGOS_BATCH_19, BRAND_SOURCES_BATCH_19 } from "./brandContentBatch19.js";

export const BRAND_IDENTITIES_BATCH_56 = [
  ...BRAND_IDENTITIES_BATCH_18,
  ...BRAND_IDENTITIES_BATCH_19.slice(0, 10),
] as const;

// These are already researched guides. Keep their detailed fields, but refresh
// the consumer summaries without changing expression-level facts.
const revisions: Record<string, Pick<BrandPublicContent, "whyChoose" | "finalVerdict">> = {
  bowmore: { whyChoose: "Loch Indaal's peated malt pairs lemon and honey with smoke that stays earthy, not medicinal.", finalVerdict: "Bowmore 12 is a measured introduction to Islay peat, especially with charred prawns or dark chocolate." },
  bruichladdich: { whyChoose: "The Classic Laddie makes room for barley and flowers on an island better known for heavy smoke.", finalVerdict: "Pour this unpeated Islay malt when you want grain, fruit and a little cask sweetness in the foreground." },
  "buffalo-trace": { whyChoose: "Mint and anise distinguish Buffalo Trace from a bourbon that offers only vanilla sweetness.", finalVerdict: "It carries an Old Fashioned without disappearing, yet has enough detail to drink neat." },
  bulleit: { whyChoose: "The rye in Bulleit Bourbon gives its maple and oak a welcome dry-spice counterweight.", finalVerdict: "Use it for a less sugary Old Fashioned or drink it over one large cube with pepper chicken." },
  campari: { whyChoose: "Campari's assertive bitter orange keeps a Negroni from becoming a sweet vermouth drink.", finalVerdict: "A splash of soda, ice and orange is enough to show why Milan made room for this aperitif." },
  cointreau: { whyChoose: "Distilled sweet and bitter orange peels give Cointreau both perfume and the sharpness a Margarita needs.", finalVerdict: "A little goes a long way in a fresh-lime cocktail; the peel flavour remains clear after the ice melts." },
  ciroc: { whyChoose: "Grape distillation gives Ciroc a softer texture than a grain-led vodka, with citrus rather than pepper up front.", finalVerdict: "Serve the original cold with soda and lime, where its restrained fruit does not have to compete with sweet mixers." },
  kahlua: { whyChoose: "Arabica coffee and rum give Kahlua's sweetness a roasted centre instead of a plain syrup note.", finalVerdict: "Shake it with fresh espresso for a coffee cocktail, or use a small pour beside walnut cake." },
  dalwhinnie: { whyChoose: "Dalwhinnie 15 leads with heather honey and citrus, leaving smoke to arrive quietly at the end.", finalVerdict: "A small neat pour with roasted almonds shows the softer side of Highland malt." },
  glenkinchie: { whyChoose: "Its East Lothian setting and large stills produce a floral, creamy malt with a gentle citrus edge.", finalVerdict: "Glenkinchie 12 suits a pre-dinner pour with prawns or lemon fish tikka." },
  lagavulin: { whyChoose: "Lagavulin 16 keeps its peat, salt and seaweed distinct even after the first powerful smoky sip.", finalVerdict: "Save this Islay malt for charred food and a slow glass; the smoke needs space." },
  oban: { whyChoose: "Oban brings orchard fruit and clove into a full-bodied coastal Highland whisky.", finalVerdict: "The 14-year-old works with grilled fish when a touch of brine is more appealing than a wall of peat." },
  "highland-park": { whyChoose: "Orkney's heathered peat gives Highland Park 12 aromatic smoke around orange and fruitcake.", finalVerdict: "A few drops of water bring out the honey before the smoke returns on the finish." },
  kilchoman: { whyChoose: "Machir Bay places lemon and tropical fruit inside the island's familiar salt-and-peat frame.", finalVerdict: "The citrus in a plate of tandoori prawns makes this smoky Islay malt feel especially lively." },
  teremana: { whyChoose: "Brick-oven agave runs through both Teremana styles, while barrel time gives Reposado its vanilla edge.", finalVerdict: "Choose Blanco for lime and a cold glass; choose Reposado when you want the agave with a little oak." },
  teachers: { whyChoose: "Ardmore malt gives Teacher's Highland Cream its recognisable smoky core.", finalVerdict: "Cold soda lengthens the whisky without losing the malt, a useful partner for tandoori mushrooms." },
  "royal-green": { whyChoose: "ADS Spirits blends Indian grain spirit with Scotch malt for a medium-bodied whisky with fruit and warming spice.", finalVerdict: "Try Royal Green with cool water before adding soda; its vanilla and cinnamon come through more clearly." },
  "royal-stag": { whyChoose: "Royal Stag Deluxe keeps fruit and wood visible around the imported Scotch malt in its Indian blend.", finalVerdict: "A simple soda serve leaves its light smoky note intact beside kebabs or roasted peanuts." },
  "bee-young": { whyChoose: "BeeYoung's crisp start and ripe-fruit middle give this strong lager more than malt weight alone.", finalVerdict: "Serve it properly chilled with onion pakoras or fish fry rather than masking it with ice." },
  "bad-monkey": { whyChoose: "Tamed Lager offers a cleaner, lighter malt profile within Bad Monkey's beer range.", finalVerdict: "Its gentle citrus suits fish fingers and salted wedges better than a heavy, sweet sauce." },
  antiquity: { whyChoose: "Antiquity Blue's malt, oak and slight peat give its Indian blend a firmer outline than sweetness alone.", finalVerdict: "Try it with galouti kebabs when a little smoke and wood sound better than a fruit-led whisky." },
  bagpiper: { whyChoose: "A small malt component gives Bagpiper's lighter Indian blend its soft wood and grain character.", finalVerdict: "Cool water and masala peanuts keep the serve simple enough for its gentle flavour." },
  glenwalk: { whyChoose: "The Glenwalk favours fruit, treacle and soft spice over peat in its blended Scotch profile.", finalVerdict: "A tall soda pour works well with pepper chicken or tandoori mushrooms." },
  "havana-club": { whyChoose: "Cuban-made 3 Años stays recognisable beside the lime and mint of a Mojito.", finalVerdict: "For a Daiquiri or Mojito, begin with Havana Club 3 Años and let fresh citrus do the rest." },
  haywards: { whyChoose: "Haywards brings honey and mild spice to a grain-and-Scotch-malt Indian blend.", finalVerdict: "Keep the mixer restrained and bring roasted peanuts or paneer tikka to the table." },
  jagermeister: { whyChoose: "Fifty-six botanicals make Jagermeister a sweet-bitter herbal liqueur rather than a fruit-flavoured shot.", finalVerdict: "Serve it cold in a small glass, with masala cashews to cut through the sweetness." },
  jaisalmer: { whyChoose: "Darjeeling tea, vetiver and cubeb give Jaisalmer an Indian accent without losing its juniper centre.", finalVerdict: "Dry tonic and a strip of orange peel leave the gin's tea-and-pepper detail intact." },
  lillet: { whyChoose: "Bordeaux wine and fruit macerations make Lillet Blanc a lighter pre-dinner alternative to a spirit-led cocktail.", finalVerdict: "Tonic and an orange slice bring its citrus into focus beside olives or grilled prawns." },
  longmorn: { whyChoose: "Creamy pear and toffee make Longmorn a fruit-led Speyside malt for a patient neat pour.", finalVerdict: "Give it a little time in the glass, then bring out almond cake or a slice of pear tart." },
  "monkey-shoulder": { whyChoose: "A malt-only Scotch blend gives Monkey Shoulder enough biscuit and orange character for a highball.", finalVerdict: "Cold soda and an orange twist make an easy long drink without burying the whisky." },
};

export const BRAND_CONTENT_BATCH_56: Record<string, BrandPublicContent> = Object.fromEntries(
  BRAND_IDENTITIES_BATCH_56.map(([slug]) => {
    const base = BRAND_CONTENT_BATCH_18[slug] ?? BRAND_CONTENT_BATCH_19[slug];
    if (!base || !revisions[slug]) throw new Error(`Missing source guide or revision for ${slug}`);
    return [slug, { ...base, ...revisions[slug] }];
  }),
);

export const BRAND_SOURCES_BATCH_56: Record<string, string[]> = Object.fromEntries(
  BRAND_IDENTITIES_BATCH_56.map(([slug]) => [slug, BRAND_SOURCES_BATCH_18[slug] ?? BRAND_SOURCES_BATCH_19[slug]]),
);

// These mappings already exist in earlier batches. Stored logos always win in the DB writer.
export const BRAND_LOGOS_BATCH_56: Record<string, string> = Object.fromEntries(
  BRAND_IDENTITIES_BATCH_56.flatMap(([slug]) => {
    const logo = BRAND_LOGOS_BATCH_18[slug] ?? BRAND_LOGOS_BATCH_19[slug];
    return logo ? [[slug, logo]] : [];
  }),
);
