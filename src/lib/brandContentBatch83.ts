import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_83 = [
  ["fuerza", "Fuerza", "Spain", "Wine", "pending-fuerza"],
  ["gaillac", "Gaillac", "France", "Wine", "pending-gaillac"],
  ["garrison", "Garrison", "India", "Made in India Whisky", "pending-garrison"],
  ["gavi", "Gavi", "Italy", "Wine", "pending-gavi"],
  ["genesis", "Genesis", "Chile", "Wine", "pending-genesis"],
  ["gilbert", "Gilbert", "France", "Wine", "pending-gilbert"],
  ["gilmore-18", "Gilmore 18", "India", "Made in India Whisky", "pending-gilmore-18"],
  ["ginjo", "Ginjo", "Japan", "Sake", "pending-ginjo"],
  ["ginsin", "Ginsin", "India", "Gin", "pending-ginsin"],
  ["gk-golden-key", "GK Golden Key", "India", "Brandy", "pending-gk-golden-key"],
] as const;

export const BRAND_LOGOS_BATCH_83: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_83: Record<string, string[]> = {
  fuerza: [
    "https://egobodegas.com/vino/fuerza/",
    "https://www.decantalo.com/us/en/fuerza.html",
    "https://www.bevory.in/gurgaon/product/fuerza-monastrell-cabernet-sauvignon-3ba9a36",
  ],
  gaillac: [
    "https://www.vins-gaillac.com/notre-vignoble/nos-vins-aop-igp/aop-gaillac-rouge/?legal=1",
    "https://www.bevory.in/gurgaon/product/gaillac-rouge-mas-viel-79ccd37",
  ],
  garrison: [
    "https://www.livcheers.com/hyderabad/liquor/garrison-reserve-ultra-premium-whisky-750ml",
    "https://uttrakhandexcise.org.in/Docs/COSTCARD_20222023.pdf",
    "https://www.bevory.in/gurgaon/brand/garrison",
  ],
  gavi: [
    "https://www.michelechiarlo.it/vini/gavi-del-comune-gavi-docg-rovereto/",
    "https://www.bevory.in/gurgaon/brand/gavi",
    "https://www.bevory.in/gurgaon/product/michele-chiarlo-rovereto-gavi-di-gavi-dc7f047",
  ],
  genesis: [
    "https://www.vivino.com/US/en/wineries/genesisch",
    "https://www.livcheers.com/gurgaon/brand/genesis",
    "https://www.bevory.in/gurgaon/brand/genesis",
  ],
  gilbert: [
    "https://www.domainephilippegilbert.fr/en/our-wines/domaine/domaine-blanc/",
    "https://www.bevory.in/gurgaon/product/gilbert-blanc-9cb0434",
  ],
  "gilmore-18": [
    "https://www.bevory.in/gurgaon/brand/gilmore-18",
    "https://www.bevory.in/gurgaon/product/gilmore-18-select-gilmore-malted-whisky-dad882e",
  ],
  ginjo: [
    "https://www.ichishima.jp/en/product/yume/",
    "https://www.hakushika.co.jp/en/products/p12.html",
    "https://www.bevory.in/gurgaon/brand/ginjo",
  ],
  ginsin: [
    "https://www.livcheers.com/mumbai/liquor/ginsin-london-dry-gin-750ml",
    "https://www.bevory.in/gurgaon/brand/ginsin",
  ],
  "gk-golden-key": [
    "https://www.bevory.in/gurgaon/brand/gk-golden-key",
    "https://www.bevory.in/gurgaon/product/gk-golden-key-gk-golden-key-vsop-brandy-f3d3176",
  ],
};

export const BRAND_CONTENT_BATCH_83: Record<string, BrandPublicContent> = {
  fuerza: {
    description: "Fuerza is a Spanish red wine from Ego Bodegas in Jumilla, made from Monastrell and Cabernet Sauvignon. The style is full-bodied, Mediterranean and built around dark fruit, spice and oak polish.",
    story: "Jumilla is one of Spain's key Monastrell regions, where sunny vineyards give the grape deep colour and generous ripeness. Fuerza uses that local strength with Cabernet Sauvignon for extra structure and black-fruit depth.",
    tastingNotes: [
      { title: "Dark Fruit", description: "Blackberry, plum, black cherry and cassis give the wine a dense core." },
      { title: "Oak Spice", description: "Toasted notes, pepper, smoke and firm tannins carry the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a large red-wine glass and let it breathe before dinner." },
      { subheading: "Food", description: "Pair with mutton seekh, lamb chops, grilled mushrooms, pepper chicken or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "lamb chops", "grilled mushrooms", "pepper chicken", "aged cheddar"] }],
    whyChoose: "Fuerza is a strong pick for drinkers who like Spanish reds with ripe fruit and real structure.",
    faqs: [
      { question: "What grapes are used in Fuerza wine?", answer: "Fuerza is made from Monastrell and Cabernet Sauvignon." },
      { question: "Where is Fuerza wine from?", answer: "Fuerza comes from Jumilla in southeastern Spain." },
    ],
    finalVerdict: "Fuerza is a bold Spanish red for grilled food, spice and slow dinner pours.",
    metaTitle: "Fuerza Wine Guide | BevOry",
    metaDescription: "Explore Fuerza Monastrell Cabernet notes, Jumilla origin, serving ideas, pairings and city prices.",
  },
  gaillac: {
    description: "Gaillac is a South West France wine page led by Gaillac Rouge Mas Viel. The Gaillac red style is known for local grapes such as Braucol, Duras and Prunelart, often supported by Syrah.",
    story: "Gaillac is one of France's old wine regions, set around the Tarn near Toulouse. Its red wines often lean rustic and savoury, with dark berries, herbs, spice and enough freshness for rich food.",
    tastingNotes: [
      { title: "South West Red", description: "Black cherry, blackberry, violet and dried herbs give the wine a regional accent." },
      { title: "Savoury Grip", description: "Pepper, earth and moderate tannins make the finish food-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a red-wine glass and give the bottle a short breather." },
      { subheading: "Food", description: "Pair with galouti kebabs, roast lamb, mushroom pulao, duck, or grilled sausages." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "roast lamb", "mushroom pulao", "duck", "grilled sausages"] }],
    whyChoose: "Gaillac is a good choice when you want a French red with rustic depth beyond the usual Bordeaux lane.",
    faqs: [
      { question: "What is Gaillac Rouge?", answer: "Gaillac Rouge is a red wine style from South West France, often made with local grapes such as Braucol and Duras." },
      { question: "What food pairs with Gaillac red wine?", answer: "Kebabs, lamb, duck, mushrooms and grilled sausages match its savoury red profile." },
    ],
    finalVerdict: "Gaillac is a characterful French red page for drinkers who like herbs, spice and country-style food.",
    metaTitle: "Gaillac Wine Guide | BevOry",
    metaDescription: "Explore Gaillac Rouge wine notes, South West France grapes, serving ideas, pairings and city prices.",
  },
  garrison: {
    description: "Garrison is an Indian whisky label listed through Garrison Reserve Ultra Premium Whisky. Excise references place the bottle in the Indian liquor whisky category, with Punjab noted as the manufacturing state.",
    story: "Garrison Reserve sits in the Indian ultra-premium whisky lane for drinkers comparing local blends with stronger packaging and richer positioning. The BevOry listing keeps the focus on the 750 ml Reserve bottle.",
    tastingNotes: [
      { title: "Reserve Style", description: "Caramel, cereal sweetness, vanilla and dried fruit create a rounded whisky base." },
      { title: "Oak Warmth", description: "Light smoke, pepper and toasted oak give the finish more grip." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat for a first taste, then add ice, water or soda." },
      { subheading: "Food", description: "Pair with tandoori chicken, mutton seekh, paneer tikka, roasted cashews or cheese toast." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "mutton seekh", "paneer tikka", "roasted cashews", "cheese toast"] }],
    whyChoose: "Garrison is a local whisky option for drinkers comparing premium Indian blends by city.",
    faqs: [
      { question: "What is Garrison Reserve?", answer: "Garrison Reserve is an Indian ultra-premium whisky listing in 750 ml format." },
      { question: "How should Garrison whisky be served?", answer: "Serve it neat, with ice, with water or as a soda highball." },
    ],
    finalVerdict: "Garrison is a practical Indian whisky pick for richer mixed serves and snack-led evenings.",
    metaTitle: "Garrison Whisky Guide | BevOry",
    metaDescription: "Explore Garrison Reserve Whisky notes, serving ideas, Indian food pairings and city prices.",
  },
  gavi: {
    description: "Gavi is an Italian white wine page led by Gavi DOCG bottles from Piedmont. The style is made from Cortese and is known for citrus, white flowers, green apple and mineral freshness.",
    story: "The commune of Gavi and its surrounding hills in Piedmont produce one of northern Italy's best-known dry whites. BevOry listings include names such as Michele Chiarlo Rovereto Gavi di Gavi, Batasiolo Granee Gavi DOCG, Ricossa Antica Casa Gavi and Bosio Gavi DOCG.",
    tastingNotes: [
      { title: "Cortese Freshness", description: "Lemon, grapefruit, green apple and white flowers define the aromatic profile." },
      { title: "Mineral Finish", description: "Crisp acidity, almond skin and a lightly saline finish keep the wine sharp." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a white-wine glass at aperitif temperature." },
      { subheading: "Food", description: "Pair with tandoori fish, prawn pasta, sushi, goat cheese or lemon chicken." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "prawn pasta", "sushi", "goat cheese", "lemon chicken"] }],
    whyChoose: "Gavi is a crisp Italian white for seafood, aperitifs and drinkers who prefer dry mineral wines.",
    faqs: [
      { question: "What grape is used in Gavi wine?", answer: "Gavi is made from the Cortese grape in Piedmont, Italy." },
      { question: "Which Gavi bottles are listed on BevOry?", answer: "Listings include Michele Chiarlo, Batasiolo, Ricossa, Bosio and other Gavi DOCG bottles." },
    ],
    finalVerdict: "Gavi is an elegant Italian white page for chilled seafood pairings and fresh aperitif drinking.",
    metaTitle: "Gavi Wine Guide | BevOry",
    metaDescription: "Explore Gavi DOCG wines, Cortese tasting notes, seafood pairings, serving ideas and city prices.",
  },
  genesis: {
    description: "Genesis is a Chilean wine label listed across Cabernet Sauvignon, Merlot, Chardonnay, Rose Syrah and Syrah Reserve bottles. The range is linked with Chile's Maule Valley in public wine references.",
    story: "Genesis gives Indian shoppers a compact Chilean portfolio covering everyday reds, white wine and a rose style. Cabernet and Merlot bring soft red-fruit structure, while Chardonnay and Rose Syrah handle lighter chilled serves.",
    tastingNotes: [
      { title: "Red Wines", description: "Cabernet, Merlot and Syrah Reserve show blackcurrant, plum, spice and soft oak." },
      { title: "Chilled Styles", description: "Chardonnay brings apple and citrus, while Rose Syrah adds red berries and freshness." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Chardonnay and Rose chilled; serve reds slightly cool in a red-wine glass." },
      { subheading: "Food", description: "Pair reds with lamb kebab or rajma; pair chilled styles with tandoori fish, salad or grilled paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb kebab", "rajma", "tandoori fish", "grilled paneer", "salad"] }],
    whyChoose: "Genesis is useful when you want one Chilean range covering red, white and rose dinner needs.",
    faqs: [
      { question: "Which Genesis wines are listed?", answer: "BevOry lists Genesis Cabernet Sauvignon, Merlot, Chardonnay, Rose Syrah and Syrah Reserve." },
      { question: "What is the best Genesis wine for spicy food?", answer: "Cabernet Sauvignon, Merlot and Syrah Reserve work well with kebabs, rajma and grilled meat." },
    ],
    finalVerdict: "Genesis is a versatile Chilean wine page for simple food matching across red, white and rose.",
    metaTitle: "Genesis Wine Guide | BevOry",
    metaDescription: "Explore Genesis Chilean wines, Cabernet, Merlot, Chardonnay, Rose Syrah, pairings and city prices.",
  },
  gilbert: {
    description: "Gilbert is a French wine page led by Gilbert Blanc. The strongest producer match is Philippe Gilbert's Domaine Blanc, a Loire Valley white wine from Menetou-Salon and the Centre-Loire region.",
    story: "Domaine Philippe Gilbert works in the Loire's Menetou-Salon area, where Sauvignon Blanc is central to the white wines. The Gilbert Blanc listing should be read as a crisp French white-wine lane rather than a heavy oak-aged style.",
    tastingNotes: [
      { title: "Loire White", description: "Lemon, grapefruit, green apple and white flowers give the wine a bright nose." },
      { title: "Clean Finish", description: "Fresh acidity, mineral notes and a dry finish suit lighter food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a white-wine glass." },
      { subheading: "Food", description: "Pair with goat cheese, tandoori fish, sushi, lemon prawns or herbed chicken." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["goat cheese", "tandoori fish", "sushi", "lemon prawns", "herbed chicken"] }],
    whyChoose: "Gilbert is a clean French white-wine pick for citrus freshness and seafood-friendly meals.",
    faqs: [
      { question: "What is Gilbert Blanc?", answer: "Gilbert Blanc is listed as a French white wine style on BevOry." },
      { question: "What food pairs with Gilbert Blanc?", answer: "Goat cheese, fish, prawns, sushi and lemon-herb chicken pair naturally." },
    ],
    finalVerdict: "Gilbert is a crisp white-wine page for chilled pours, seafood and fresh cheese pairings.",
    metaTitle: "Gilbert Wine Guide | BevOry",
    metaDescription: "Explore Gilbert Blanc wine notes, French white-wine style, serving ideas, pairings and city prices.",
  },
  "gilmore-18": {
    description: "Gilmore 18 is an Indian whisky label listed through Gilmore 18 Select Malted Whisky. The visible format is a large 4.5 litre bottle, making it more of a group-serve whisky listing than a standard bar-bottle page.",
    story: "Gilmore 18 sits in the Indian malted-whisky lane, where the label language points toward malt character and richer mixed serves. The oversized format makes the page useful for shoppers checking party, banquet or high-volume needs.",
    tastingNotes: [
      { title: "Malted Style", description: "Cereal, honey, caramel and light dried fruit form the main flavour cues." },
      { title: "Warm Finish", description: "Oak, pepper and a mild toasted note keep the finish whisky-forward." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with water, soda, ice or cola in tall glasses." },
      { subheading: "Food", description: "Pair with kebab platters, chicken tikka, paneer pakora, masala peanuts or fried fish." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["kebab platters", "chicken tikka", "paneer pakora", "masala peanuts", "fried fish"] }],
    whyChoose: "Gilmore 18 is useful for large-format whisky buying and casual malted-whisky serves.",
    faqs: [
      { question: "What is Gilmore 18 Select Malted Whisky?", answer: "It is an Indian whisky listing with a malted-whisky identity and a large 4.5 litre format." },
      { question: "How should Gilmore 18 be served?", answer: "Serve it with water, soda, ice or cola for group-friendly whisky serves." },
    ],
    finalVerdict: "Gilmore 18 is a practical large-format whisky page for parties and shared food spreads.",
    metaTitle: "Gilmore 18 Whisky Guide | BevOry",
    metaDescription: "Explore Gilmore 18 Select Malted Whisky notes, large-format serves, pairings and city prices.",
  },
  ginjo: {
    description: "Ginjo is a sake page covering ginjo, junmai ginjo and daiginjo-style listings from Japanese producers. BevOry routes include Hakutsuru Daiginjo, Maboroshi no Taki Junmai Ginjo, Hana Kizakura Junmai Ginjo, Yume Ginjo Namacho and other premium sake bottles.",
    story: "Ginjo sake is brewed with highly polished rice and cool fermentation to bring out fragrance and finesse. Junmai Ginjo uses only rice, rice koji and water, while Daiginjo pushes the polished, aromatic style further.",
    tastingNotes: [
      { title: "Aromatic Sake", description: "Melon, pear, apple, white flowers and soft rice sweetness are common ginjo cues." },
      { title: "Clean Texture", description: "Smooth body, fresh acidity and a delicate finish make the style versatile." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a small wine glass or sake cup to preserve aroma." },
      { subheading: "Food", description: "Pair with sushi, sashimi, tandoori prawns, tofu, grilled mushrooms or tempura." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["sushi", "sashimi", "tandoori prawns", "tofu", "tempura"] }],
    whyChoose: "Ginjo is the right page for shoppers comparing fragrant, polished Japanese sake styles.",
    faqs: [
      { question: "What does ginjo mean in sake?", answer: "Ginjo refers to a premium sake style made with polished rice and careful cool fermentation." },
      { question: "Should ginjo sake be served chilled?", answer: "Most ginjo and daiginjo sake tastes best chilled to keep the aroma fresh." },
    ],
    finalVerdict: "Ginjo is a refined sake lane for chilled pours, Japanese food and delicate seafood pairings.",
    metaTitle: "Ginjo Sake Guide | BevOry",
    metaDescription: "Explore Ginjo, Junmai Ginjo and Daiginjo sake notes, chilled serves, pairings and city prices.",
  },
  ginsin: {
    description: "Ginsin is an Indian gin label listed through Ginsin London Dry Gin in 750 ml format. The style sits in the classic London Dry lane, where juniper, citrus peel and dry botanicals matter most.",
    story: "Ginsin is positioned for tonic serves and simple gin cocktails rather than sweet liqueur-style drinking. The London Dry label gives shoppers a clear expectation: crisp, dry and built around botanical freshness.",
    tastingNotes: [
      { title: "Juniper Core", description: "Piney juniper, coriander and citrus peel create a classic gin profile." },
      { title: "Dry Finish", description: "Light spice, herbal lift and clean alcohol warmth finish the drink." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with tonic, lots of ice and a lime or orange peel garnish." },
      { subheading: "Food", description: "Pair with tandoori prawns, cucumber sandwiches, fish tikka, chips or goat cheese salad." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "cucumber sandwiches", "fish tikka", "chips", "goat cheese salad"] }],
    whyChoose: "Ginsin is a straightforward London Dry gin choice for crisp G&Ts and citrus cocktails.",
    faqs: [
      { question: "What type of gin is Ginsin?", answer: "Ginsin is listed as a London Dry Gin in 750 ml format." },
      { question: "What mixer works with Ginsin?", answer: "Tonic water, soda, lime and citrus garnishes suit its dry gin profile." },
    ],
    finalVerdict: "Ginsin is a clean gin page for tonic serves, simple cocktails and light snacks.",
    metaTitle: "Ginsin Gin Guide | BevOry",
    metaDescription: "Explore Ginsin London Dry Gin notes, tonic serves, garnish ideas, pairings and city prices.",
  },
  "gk-golden-key": {
    description: "GK Golden Key is an Indian brandy label listed through GK Golden Key VSOP Brandy. The bottle sits in the familiar Indian VSOP brandy lane for neat pours, warm-water serves and soda mixes.",
    story: "Golden Key's public footprint is narrow, so the safest reading is the exact BevOry listing: a 750 ml VSOP brandy for local comparison. The style points toward grape-spirit sweetness, caramel warmth and easy after-dinner drinking.",
    tastingNotes: [
      { title: "VSOP Brandy", description: "Raisin, grape, caramel and vanilla give the brandy a rounded first sip." },
      { title: "Warm Spice", description: "Mild oak, nutmeg and brown sugar carry into a warming finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, with warm water, on ice, or with soda." },
      { subheading: "Food", description: "Pair with pepper chicken, plum cake, roasted cashews, dark chocolate or mutton chops." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pepper chicken", "plum cake", "roasted cashews", "dark chocolate", "mutton chops"] }],
    whyChoose: "GK Golden Key is a direct VSOP brandy page for shoppers comparing Indian brandy bottles by city.",
    faqs: [
      { question: "What is GK Golden Key?", answer: "GK Golden Key is listed as a VSOP brandy on BevOry." },
      { question: "How should GK Golden Key Brandy be served?", answer: "Serve it neat, with warm water, over ice or with soda." },
    ],
    finalVerdict: "GK Golden Key is a straightforward Indian brandy choice for warm serves, dessert and spicy snacks.",
    metaTitle: "GK Golden Key Brandy Guide | BevOry",
    metaDescription: "Explore GK Golden Key VSOP Brandy notes, serving ideas, food pairings and city prices.",
  },
};
