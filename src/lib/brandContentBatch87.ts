import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_87 = [
  ["green-deer", "Green Deer", "India", "Beer", "pending-green-deer"],
  ["green-killer", "Green Killer", "Belgium", "Beer", "pending-green-killer"],
  ["green-mark", "Green Mark", "Russia", "Vodka", "pending-green-mark"],
  ["greenwich", "Greenwich", "India", "Brandy", "pending-greenwich"],
  ["grimaldi", "Grimaldi", "Italy", "Wine", "pending-grimaldi"],
  ["gypsy", "Gypsy", "India", "Indian Whisky", "pending-gypsy"],
  ["happy-by-thirsty", "Happy By Thirsty", "Bosnia and Herzegovina", "Beer", "pending-happy-by-thirsty"],
  ["harewood", "Harewood", "Australia", "Wine", "pending-harewood"],
  ["hawkston", "Hawkston", "India", "Indian Whisky", "pending-hawkston"],
  ["haze-french-lineage", "Haze French Lineage", "India", "Brandy", "pending-haze-french-lineage"],
] as const;

export const BRAND_LOGOS_BATCH_87: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_87: Record<string, string[]> = {
  "green-deer": [
    "https://untappd.com/b/ab-inbev-india-green-deer-premium-lager-beer/5228337",
    "https://www.tapintoyourbeer.com/de/beer/de/green-deer",
    "https://www.livcheers.com/warangal/liquor/green-deer-premium-lager-beer-650ml",
    "https://www.bevory.in/gurgaon/product/green-deer-green-deer-premium-lager-beer-9cfa9f8",
  ],
  "green-killer": [
    "https://www.horecatel.be/sites/default/files/exhibitor-files/8036/Silly_Bundle_Fiches%20EN%202021_v3.pdf",
    "https://www.bevory.in/gurgaon/product/green-killer-green-killer-a0cd248",
    "https://www.bevory.in/gurgaon/product/green-killer-green-killer-1d92273",
  ],
  "green-mark": [
    "https://roust.com/en/media/talka-green-mark-and-rosa-vodkas-switch-to-alpha-grade-wheat-spirit-for-enhanced-purity-and-taste/",
    "https://roust.com/en/media/roust-uk-moves-to-its-own-distribution-model/",
    "https://www.bevory.in/gurgaon/product/green-mark-vodka-153d64f",
  ],
  greenwich: [
    "https://www.bevory.in/gurgaon/product/greenwich-greenwich-vsop-brandy-eaf3d89",
    "https://www.livcheers.com/",
  ],
  grimaldi: [
    "https://giacomogrimaldi.com/en/",
    "https://giacomogrimaldi.com/en/barolo-d-o-c-g/",
    "https://giacomogrimaldi.com/en/territory/",
    "https://www.bevory.in/gurgaon/product/grimaldi-barolo-dcd1a90",
  ],
  gypsy: [
    "https://www.volza.com/p/fine-whisky/manufacturers/manufacturers-in-india/",
    "https://www.bevory.in/gurgaon/product/gypsy-fine-whisky-b693f6a",
  ],
  "happy-by-thirsty": [
    "https://www.brewer-world.com/calling-happiness/",
    "https://www.livcheers.com/hyderabad/liquor/happy-by-thirsty-beer-330ml",
    "https://lbb.in/delhi/happiness-bottled-in-a-big-can-of-yellow-0f0ef7/",
    "https://www.bevory.in/gurgaon/product/happy-by-thirsty-happy-by-thirsty-beer-a778d89",
  ],
  harewood: [
    "https://harewood.com.au/",
    "https://www.wa.gov.au/system/files/2023-09/dpird_wa_exporter_directory_japanese_web.pdf",
    "https://www.bevory.in/gurgaon/product/harewood-estate-chardonnay-4814b80",
  ],
  hawkston: [
    "https://www.modiillva.com/product/hawkston",
    "https://www.indiafilings.com/search/the-hawkston-noble-reserve-tm-3596523",
    "https://delhiexcise.gov.in/pdf/Price_25thNov.pdf",
    "https://www.bevory.in/gurgaon/product/hawkston-the-hawkston-d8f2dfb",
  ],
  "haze-french-lineage": [
    "https://drinksbuff.com/pricing/pricing-of-haze-french-lineage-xo-brandy-750-ml-in-telangana/",
    "https://drinksbuff.com/spirits/haze-premium-xo-brandy/",
    "https://www.bevory.in/gurgaon/product/haze-french-lineage-haze-french-lineage-xo-brandy-4e415e1",
  ],
};

export const BRAND_CONTENT_BATCH_87: Record<string, BrandPublicContent> = {
  "green-deer": {
    description: "Green Deer is an Indian premium lager listed on BevOry in 330 ml and 650 ml bottle formats. Beer references connect Green Deer Premium Lager Beer with AB InBev India, placing it in the clear, golden, easy-drinking lager lane.",
    story: "Green Deer speaks to India's modern beer shelf, where large-format lagers sit beside familiar pub and retail choices. Its name and green label cues make it easy to remember for shoppers comparing local lager options by city.",
    tastingNotes: [
      { title: "Golden Lager", description: "Clean malt, light grain, mild hop bitterness and a crisp golden-beer finish." },
      { title: "Cold Refreshment", description: "Gentle breadiness, faint citrus and a dry close suit chilled service." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a pilsner glass, lager mug or straight from an ice-cold bottle." },
      { subheading: "Food", description: "Pair with chicken tikka, masala fries, fish fingers, chilli paneer or salted peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "masala fries", "fish fingers", "chilli paneer", "salted peanuts"] }],
    whyChoose: "Green Deer is a straightforward lager choice for cold, casual pours and city-level beer price checks.",
    faqs: [
      { question: "What type of beer is Green Deer?", answer: "Green Deer is listed as a premium lager beer on BevOry." },
      { question: "Which Green Deer bottle sizes appear on BevOry?", answer: "BevOry shows Green Deer Premium Lager Beer in 330 ml and 650 ml routes." },
    ],
    finalVerdict: "Green Deer works best as a crisp, cold lager for spicy snacks and relaxed beer sessions.",
    metaTitle: "Green Deer Beer Guide | BevOry",
    metaDescription: "Explore Green Deer Premium Lager notes, serving ideas, snack pairings and city prices on BevOry.",
  },
  "green-killer": {
    description: "Green Killer is a Belgian beer name associated with a hoppy, bitter blond IPA style. BevOry lists Green Killer in 330 ml routes, making it a sharper alternative to simple lager searches.",
    story: "Belgian brewing gives Green Killer its useful context: pale ale strength, expressive hops and a firm bitter edge. It is the kind of beer page shoppers reach when they want something more aromatic than a standard lager.",
    tastingNotes: [
      { title: "Hoppy Bite", description: "Grapefruit peel, pine, bitter herbs and pale malt give the beer its main snap." },
      { title: "Blond Malt", description: "Light cereal sweetness and a dry, bitter finish keep the profile clean." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a tulip, stemmed beer glass or IPA glass to hold the hop aroma." },
      { subheading: "Food", description: "Pair with peri-peri chicken, tandoori prawns, chilli garlic noodles, nachos or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["peri-peri chicken", "tandoori prawns", "chilli garlic noodles", "nachos", "aged cheddar"] }],
    whyChoose: "Green Killer is for drinkers who want a brighter, bitterer beer than a soft mainstream lager.",
    faqs: [
      { question: "What style is Green Killer?", answer: "Green Killer is associated with a hoppy blond IPA-style beer." },
      { question: "How should Green Killer be served?", answer: "Serve it chilled in a tulip or IPA glass with spicy fried snacks or seafood." },
    ],
    finalVerdict: "Green Killer is a punchy beer pick when hop bitterness and spicy food are the mood.",
    metaTitle: "Green Killer Beer Guide | BevOry",
    metaDescription: "Explore Green Killer beer notes, IPA-style bitterness, serving tips, food pairings and city prices.",
  },
  "green-mark": {
    description: "Green Mark is a vodka brand in the Roust portfolio, listed on BevOry through 700 ml and 1 litre vodka routes. Roust has described Green Mark as one of its popular vodka brands and has linked it with Alpha-grade wheat spirit.",
    story: "The Green Mark name is tied to Russian vodka's quality-seal language and a clean mainstream style. Its appeal is direct: neutral grain character, chilled service and easy mixing without heavy flavour distractions.",
    tastingNotes: [
      { title: "Clean Grain", description: "Soft wheat, light citrus peel and a cool mineral edge shape the first sip." },
      { title: "Neutral Finish", description: "A crisp, dry close keeps it useful for vodka sodas, tonics and citrus cocktails." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve freezer-cold in small glasses, over ice, with tonic or as a vodka soda with lime." },
      { subheading: "Food", description: "Pair with smoked fish, tandoori prawns, chicken momos, salted almonds or cucumber salad." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked fish", "tandoori prawns", "chicken momos", "salted almonds", "cucumber salad"] }],
    whyChoose: "Green Mark is a practical vodka for drinkers who want clean wheat-spirit character and simple mixers.",
    faqs: [
      { question: "Who owns Green Mark vodka?", answer: "Green Mark is part of the Roust vodka portfolio." },
      { question: "What is the best way to drink Green Mark?", answer: "Serve it chilled, over ice, with tonic, soda and lime, or in clean citrus cocktails." },
    ],
    finalVerdict: "Green Mark is a clean, mixer-friendly vodka for chilled shots, highballs and sharp bar snacks.",
    metaTitle: "Green Mark Vodka Guide | BevOry",
    metaDescription: "Explore Green Mark vodka notes, wheat-spirit style, serving ideas, pairings and city prices.",
  },
  greenwich: {
    description: "Greenwich is a VSOP brandy label listed on BevOry through a 750 ml bottle route. It sits in the Indian brandy shelf, where grape-spirit cues, oak warmth and smooth mixer service matter most.",
    story: "Greenwich uses classic VSOP brandy language familiar to Indian retail counters and evening home bars. The name points to a polished, old-world cue while the serve remains local: warm water, ice, ginger ale or a small neat pour.",
    tastingNotes: [
      { title: "Brandy Warmth", description: "Raisin, caramel, dried apricot and vanilla give the brandy its rounded centre." },
      { title: "Oak Spice", description: "Nutmeg, toasted wood and light pepper sit on a mellow finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a snifter, over a large cube, with warm water or with ginger ale." },
      { subheading: "Food", description: "Pair with pepper chicken, mutton cutlets, plum cake, dark chocolate or roasted cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pepper chicken", "mutton cutlets", "plum cake", "dark chocolate", "roasted cashews"] }],
    whyChoose: "Greenwich is a useful VSOP brandy page for shoppers comparing warm, oak-led Indian brandy serves.",
    faqs: [
      { question: "What is Greenwich VSOP?", answer: "Greenwich VSOP is listed on BevOry as a 750 ml brandy route." },
      { question: "What mixer suits Greenwich brandy?", answer: "Warm water, ginger ale, soda and ice all suit its mellow brandy profile." },
    ],
    finalVerdict: "Greenwich suits drinkers who want a mellow brandy for neat pours, warm serves and rich snacks.",
    metaTitle: "Greenwich Brandy Guide | BevOry",
    metaDescription: "Explore Greenwich VSOP Brandy notes, serving ideas, Indian pairings and city prices on BevOry.",
  },
  grimaldi: {
    description: "Grimaldi is an Italian wine brand linked on BevOry to Barolo, the Nebbiolo-based DOCG red wine from Piedmont. Giacomo Grimaldi is based in Barolo in the Province of Cuneo, one of the key Langhe wine areas.",
    story: "The Grimaldi Barolo route belongs to a wine culture built around Nebbiolo, long maceration, slow ageing and the hills of Barolo, La Morra, Serralunga d'Alba and nearby villages. Barolo's structure makes it a natural match for slow-cooked food and patient glass time.",
    tastingNotes: [
      { title: "Nebbiolo Core", description: "Rose, cherry, red plum and dried herbs lead into firm tannins." },
      { title: "Barolo Depth", description: "Leather, anise, tobacco and earthy spice build as the wine opens in the glass." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a large red-wine glass and give the wine time to breathe." },
      { subheading: "Food", description: "Pair with mutton rogan josh, lamb chops, mushroom risotto, truffle pasta or aged parmesan." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton rogan josh", "lamb chops", "mushroom risotto", "truffle pasta", "aged parmesan"] }],
    whyChoose: "Grimaldi is for drinkers who want classic Piedmont Nebbiolo power with food-friendly tannins.",
    faqs: [
      { question: "What grape is used for Grimaldi Barolo?", answer: "Barolo is made from Nebbiolo grown in Piedmont's Barolo zone." },
      { question: "How should Grimaldi Barolo be served?", answer: "Use a large red-wine glass, serve slightly cool and allow the wine time to open." },
    ],
    finalVerdict: "Grimaldi Barolo is a serious Italian red for slow meals, firm tannins and layered Nebbiolo flavour.",
    metaTitle: "Grimaldi Barolo Wine Guide | BevOry",
    metaDescription: "Explore Grimaldi Barolo notes, Nebbiolo style, serving tips, food pairings and city prices.",
  },
  gypsy: {
    description: "Gypsy is an Indian fine whisky label listed on BevOry in 375 ml, 500 ml, 750 ml and 1 litre routes. It belongs to the everyday Indian whisky space, where smooth grain character and flexible mixer service drive the search.",
    story: "Gypsy is built around a familiar Indian whisky promise: an accessible bottle for home bars, parties and local retail counters. Its larger and smaller bottle formats make it easy to compare by occasion and city.",
    tastingNotes: [
      { title: "Mellow Grain", description: "Caramel, cereal, honey and light vanilla give the whisky an easy start." },
      { title: "Spiced Finish", description: "Pepper, toasted oak and faint citrus keep the finish mixer-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, water, ice, cola or ginger ale in a sturdy highball glass." },
      { subheading: "Food", description: "Pair with mutton seekh, chicken tikka, masala peanuts, chilli paneer or fried fish." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "chicken tikka", "masala peanuts", "chilli paneer", "fried fish"] }],
    whyChoose: "Gypsy is a practical Indian whisky pick when multiple bottle sizes and simple mixers matter.",
    faqs: [
      { question: "What is Gypsy Fine Whisky?", answer: "Gypsy Fine Whisky is an Indian whisky listed on BevOry across several bottle sizes." },
      { question: "Which mixer works with Gypsy whisky?", answer: "Soda, water, ice, cola and ginger ale all work with its mellow whisky profile." },
    ],
    finalVerdict: "Gypsy is a casual Indian whisky for highballs, party pours and spicy food.",
    metaTitle: "Gypsy Whisky Guide | BevOry",
    metaDescription: "Explore Gypsy Fine Whisky notes, bottle sizes, serving ideas, pairings and city prices on BevOry.",
  },
  "happy-by-thirsty": {
    description: "Happy By Thirsty is a beer from Thirsty Beers, created for the Indian market and listed on BevOry in 330 ml format. Brewer World describes Thirsty Beers as established in 2017, with Happy developed under the Thirsty brand and brewed in Bosnia.",
    story: "Happy By Thirsty was designed as a bright, balanced beer for India's warmer drinking occasions. Brewer World connects the recipe with UK brewmaster Alex Barlow and notes Herkules hops for spicy bitterness, floral lift and citrus aroma.",
    tastingNotes: [
      { title: "Yellow Can Freshness", description: "Citrus, floral hops, pale malt and light tropical fruit make the beer bright." },
      { title: "Easy Bitterness", description: "A gentle spicy hop edge and crisp carbonation finish clean." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a tall beer glass, with a lime wedge if you like a sharper finish." },
      { subheading: "Food", description: "Pair with grilled prawns, peri-peri fries, summer salads, chicken sliders or chilli cheese toast." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled prawns", "peri-peri fries", "summer salads", "chicken sliders", "chilli cheese toast"] }],
    whyChoose: "Happy By Thirsty brings citrusy, floral beer character to easy Indian summer drinking.",
    faqs: [
      { question: "Who makes Happy By Thirsty?", answer: "Happy By Thirsty is part of the Thirsty Beers portfolio created for the Indian market." },
      { question: "What does Happy By Thirsty taste like?", answer: "Expect citrus, floral hops, pale malt and a crisp, lightly bitter finish." },
    ],
    finalVerdict: "Happy By Thirsty is a bright beer for chilled pours, lime-friendly serves and snack-heavy evenings.",
    metaTitle: "Happy By Thirsty Beer Guide | BevOry",
    metaDescription: "Explore Happy By Thirsty beer notes, Herkules hop style, pairings, serving tips and city prices.",
  },
  harewood: {
    description: "Harewood is an Australian wine estate from Denmark in the Great Southern region of Western Australia. BevOry lists Harewood Estate Chardonnay in 750 ml format, pointing to cool maritime fruit from one of Australia's important cool-climate wine zones.",
    story: "Harewood Estate was established in 1988 and is described by Western Australia's exporter material as family owned and operated. Its Denmark vineyard sits in a coastal Great Southern setting, where Chardonnay can hold freshness alongside ripe orchard fruit.",
    tastingNotes: [
      { title: "Cool-Climate Chardonnay", description: "Lemon, white peach, pear and green apple bring a fresh fruit line." },
      { title: "Textured Finish", description: "Creamy lees, subtle cashew and bright acidity give the wine food-friendly shape." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled at 8-10 C in a white-wine glass and let it warm slightly as you drink." },
      { subheading: "Food", description: "Pair with tandoori fish, butter garlic prawns, roast chicken, paneer malai tikka or brie." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "butter garlic prawns", "roast chicken", "paneer malai tikka", "brie"] }],
    whyChoose: "Harewood is a smart pick for cool-climate Australian Chardonnay with freshness and texture.",
    faqs: [
      { question: "Where is Harewood Estate located?", answer: "Harewood Estate is in Denmark in the Great Southern region of Western Australia." },
      { question: "What food pairs with Harewood Chardonnay?", answer: "Tandoori fish, prawns, roast chicken, paneer malai tikka and soft cheese suit the wine." },
    ],
    finalVerdict: "Harewood Chardonnay gives Indian wine shoppers a crisp, textured Australian white for seafood and creamy dishes.",
    metaTitle: "Harewood Chardonnay Guide | BevOry",
    metaDescription: "Explore Harewood Estate Chardonnay notes, Great Southern origin, pairings and city prices on BevOry.",
  },
  hawkston: {
    description: "Hawkston is an Indian whisky brand from Modi Illva India, the Modi Group and Illva Saronno joint venture. Modi Illva describes Hawkston Noble Reserve as a blend of malt whiskies and grain spirits.",
    story: "Hawkston belongs to the Indian blended-whisky shelf, where imported-style cues meet local bottle formats. Excise and BevOry routes show Hawkston across 180 ml, 375 ml and 750 ml sizes, useful for both trial pours and full-bottle buying.",
    tastingNotes: [
      { title: "Malt And Grain", description: "Honey, vanilla, cereal grain and light dried fruit create a smooth centre." },
      { title: "Reserve Spice", description: "Toffee, oak, pepper and a warm finish make it suitable for highballs." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat for the first sip, then with soda, water, ice or ginger ale." },
      { subheading: "Food", description: "Pair with galouti kebabs, chicken tikka, paneer tikka, masala peanuts or smoked cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "chicken tikka", "paneer tikka", "masala peanuts", "smoked cheese"] }],
    whyChoose: "Hawkston is a well-placed Indian blended whisky for malt-grain flavour and flexible bottle sizes.",
    faqs: [
      { question: "Who owns Hawkston whisky?", answer: "Hawkston is connected with Modi Illva India, a joint venture between Modi Group and Illva Saronno." },
      { question: "What is Hawkston Noble Reserve made from?", answer: "Modi Illva describes it as blended from malt whiskies and grain spirits." },
    ],
    finalVerdict: "Hawkston is a dependable Indian whisky for soda serves, kebab pairings and quick city-price comparison.",
    metaTitle: "Hawkston Whisky Guide | BevOry",
    metaDescription: "Explore Hawkston Noble Reserve notes, Modi Illva origin, bottle sizes, pairings and city prices.",
  },
  "haze-french-lineage": {
    description: "Haze French Lineage is an XO brandy label listed on BevOry through a 750 ml route. Its positioning leans on French-lineage brandy cues: grape-spirit richness, oak warmth and a smoother after-dinner style.",
    story: "Haze sits in India's premium brandy search lane, where XO language signals deeper oak, dried fruit and a slower sipping mood. The BevOry page helps shoppers separate this brandy route from standard VSOP and deluxe brandy choices.",
    tastingNotes: [
      { title: "XO Fruit", description: "Raisin, fig, caramel and baked apple give the brandy a rounded fruit base." },
      { title: "Oak Warmth", description: "Vanilla, clove, nutmeg and toasted wood shape a longer finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a brandy balloon, over one large cube or with a splash of warm water." },
      { subheading: "Food", description: "Pair with pepper mutton, roast chicken, plum cake, dark chocolate or roasted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pepper mutton", "roast chicken", "plum cake", "dark chocolate", "roasted almonds"] }],
    whyChoose: "Haze French Lineage is for brandy drinkers who want richer dried-fruit notes and warm oak spice.",
    faqs: [
      { question: "What is Haze French Lineage?", answer: "Haze French Lineage is listed on BevOry as an XO brandy in 750 ml format." },
      { question: "How should Haze French Lineage be served?", answer: "Serve it neat, over a large cube or with warm water to soften the oak spice." },
    ],
    finalVerdict: "Haze French Lineage is a richer brandy choice for slow sipping, desserts and spicy meat dishes.",
    metaTitle: "Haze French Lineage Brandy Guide | BevOry",
    metaDescription: "Explore Haze French Lineage XO Brandy notes, serving ideas, pairings and city prices on BevOry.",
  },
};
