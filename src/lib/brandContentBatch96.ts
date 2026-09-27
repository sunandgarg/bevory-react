import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_96 = [
  ["la-chica", "La Chica", "Mexico", "Tequila", "pending-la-chica"],
  ["la-crown-d-or", "La Crown D'Or", "India", "Brandy", "pending-la-crown-d-or"],
  ["la-fantasia", "La Fantasia", "Chile", "Wine", "pending-la-fantasia"],
  ["la-rocca", "La Rocca", "Italy", "Wine", "pending-la-rocca"],
  ["la-tete", "La Tete", "France", "Wine", "pending-la-tete"],
  ["la-vielle", "La Vielle", "France", "Wine", "pending-la-vielle"],
  ["laffaire-napoleon", "Laffaire Napoleon", "India", "Brandy", "pending-laffaire-napoleon"],
  ["langlauf", "Langlauf", "Belgium", "Beer", "pending-langlauf"],
  ["las-carretas", "Las Carretas", "Spain", "Wine", "pending-las-carretas"],
  ["le-botaniste", "Le Botaniste", "France", "Wine", "pending-le-botaniste"],
] as const;

export const BRAND_LOGOS_BATCH_96: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_96: Record<string, string[]> = {
  "la-chica": [
    "https://www.masterofmalt.com/tequila/la-chica-tequila-blanco-tequila/",
    "https://www.diffordsguide.com/beer-wine-spirits/1502/la-chica-gold-tequila",
    "https://www.livcheers.com/liquor/la-chica-tequila-blanco-700ml",
    "https://www.bevory.in/pune/product/la-chica-tequila-blanco-f0178be",
  ],
  "la-crown-d-or": [
    "https://vinbros.in/products.html",
    "https://www.vinbros.com/contact.html",
    "https://in.kompass.com/p/vinbros-and-company/in741748/la-crown-d-or-xo/13146dd2-6941-499a-9ce9-a1abe61b90d2/",
    "https://www.bevory.in/bangalore/product/la-crown-d-or-xo-french-brandy-fea1056",
  ],
  "la-fantasia": [
    "https://www.vivino.com/US/en/la-fantasia-classic-merlot/w/5986157",
    "https://www.livcheers.com/gurgaon/liquor/la-fantasia-cabernet-sauvignon-750ml",
    "https://www.bevory.in/gurgaon/product/la-fantasia-cabernet-sauvignon-9d9e140",
    "https://www.bevory.in/gurgaon/product/la-fantasia-sauvignon-blanc-73e0543",
  ],
  "la-rocca": [
    "https://www.vivino.com/en/wineries/la-roccagrande",
    "https://www.livcheers.com/liquor/la-roccagrande-vino-bianco-wine-750ml",
    "https://delhidutyfree.co.in/default/la-roccagrande-vino-bianco-wine.html",
    "https://www.bevory.in/jodhpur/product/la-rocca-la-roccagrande-vino-bianco-wine-948563c",
  ],
  "la-tete": [
    "https://www.livcheers.com/gwalior/liquor/sauvignon-la-tete-dans-les-cepages-pays-d-oc-750ml",
    "https://www.volza.com/hs-codes/search/white-wine-sauvignon-blanc/france/",
    "https://www.bevory.in/bhopal/product/pays-d-oc-sauvignon-la-tete-dans-les-cepages-pays-d-oc-05e60b6",
    "https://www.bevory.in/mumbai/product/pays-d-oc-merlot-la-tete-dans-les-cepages-pays-d-oc-00b36b3",
  ],
  "la-vielle": [
    "https://www.lavieilleferme.com/vin/la-vieille-ferme-blanc/",
    "https://fr.familleperrin.com/pages/la-vieille-ferme",
    "https://www.bevory.in/agra/product/la-vielle-ferme-white-e02d378",
  ],
  "laffaire-napoleon": [
    "https://tsbcl.nic.in/open_record.php?ID=272",
    "https://drinksbuff.com/spirits/laffaire-napoleon-premium-french-blended-grape-brandy/",
    "https://www.bevory.in/delhi/brand/laffaire-napoleon",
  ],
  langlauf: [
    "https://www.livcheers.com/delhi/liquor/langlauf-white-belgian-wheat-beer-330ml",
    "https://untappd.com/b/langlauf-langlauf-belgian-white-beer/6019689",
    "https://www.bevory.in/delhi/brand/langlauf",
  ],
  "las-carretas": [
    "https://www.livcheers.com/delhi/liquor/las-carretas-white-wine-750ml",
    "https://www.vivino.com/HK/en/castano-las-carretas-blanco/w/10906639",
    "https://www.bevory.in/delhi/product/las-carretas-white-wine-32e95bc",
  ],
  "le-botaniste": [
    "https://www.livcheers.com/mumbai/liquor/le-botaniste-rose-grenache-syrah-750ml",
    "https://www.prowein.de/vis-content/event-prowein2022/exh-prowein2022.2700140/ProWein-2022-LES-VIGNOBLES-DE-ROMBEAU-SARL-Paper-prowein2022.2700140-pOXVaOyTRGeDCC4tskoySA.pdf",
    "https://www.bevory.in/nashik/product/le-botaniste-rose-grenache-syrah-50aa503",
  ],
};

export const BRAND_CONTENT_BATCH_96: Record<string, BrandPublicContent> = {
  "la-chica": {
    description: "La Chica is a Mexican tequila label tracked in India through blanco, silver and gold expressions. The range is built for agave-forward cocktails, with 700 ml bottles appearing in Indian retail and hospitality lists.",
    story: "La Chica Gold is connected with Tequilas Las Siete Marcas in Jalisco, the Mexican heartland of tequila. The brand sits in the accessible tequila shelf, where blanco and gold styles are usually chosen for margaritas, Palomas and chilled shots.",
    tastingNotes: [
      { title: "Blanco Profile", description: "Fresh agave, lime zest, light pepper and a clean spirit snap suit citrus-led cocktails." },
      { title: "Gold Style", description: "Sweet cooked agave, gentle caramel and warm spice give the gold expression a rounder finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use blanco in margaritas, Palomas or tequila sodas; serve gold chilled or with ginger ale and lime." },
      { subheading: "Food", description: "Pair with chicken tacos, peri-peri prawns, nachos, paneer tikka or chilli guacamole." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tacos", "peri-peri prawns", "nachos", "paneer tikka", "chilli guacamole"] }],
    whyChoose: "La Chica is a practical tequila pick for agave cocktails, citrus mixers and spicy bar snacks.",
    faqs: [
      { question: "What La Chica variants are tracked?", answer: "BevOry tracks La Chica Tequila Blanco, with gold and silver variants also appearing in Indian retail lists." },
      { question: "What cocktails suit La Chica tequila?", answer: "Margaritas, Palomas, tequila soda and lime-led highballs suit the blanco style." },
    ],
    finalVerdict: "La Chica works best when you want a Mexican tequila for bright cocktails and spicy food.",
    metaTitle: "La Chica Tequila Guide | BevOry",
    metaDescription: "Explore La Chica tequila notes, blanco and gold styles, cocktail ideas, food pairings and city prices on BevOry.",
  },
  "la-crown-d-or": {
    description: "La Crown D'Or is an XO brandy from Vinbros and Company, a Pondicherry-based alcoholic-beverage producer. BevOry tracks La Crown D'Or XO French Brandy in formats led by the 750 ml bottle.",
    story: "Vinbros lists La Crown D'Or XO in its brandy portfolio alongside The Warehouse Brandy VSOP, Renoir VSOP and Vinbros Napoleon VSOP. The producer's facility is in Villianur Commune, Puducherry, giving the label a clear South Indian production base.",
    tastingNotes: [
      { title: "XO Brandy Weight", description: "Raisin, dried fig, caramel and vanilla sit over a warm grape-spirit base." },
      { title: "Spiced Finish", description: "Oak spice, toasted sugar and light cocoa carry into a rounded aftertaste." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a snifter, over one cube, or with a small pour of soda for a lighter drink." },
      { subheading: "Food", description: "Pair with pepper chicken, mutton seekh, plum cake, roasted almonds or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pepper chicken", "mutton seekh", "plum cake", "roasted almonds", "dark chocolate"] }],
    whyChoose: "La Crown D'Or is a Pondicherry-made XO brandy for drinkers who like dried fruit, caramel and oak spice.",
    faqs: [
      { question: "Who makes La Crown D'Or?", answer: "La Crown D'Or XO is listed by Vinbros and Company, based in Pondicherry." },
      { question: "How should La Crown D'Or brandy be served?", answer: "Serve it neat, over ice, or with soda if you prefer a lighter long drink." },
    ],
    finalVerdict: "La Crown D'Or is a warm Indian XO brandy for slow sipping and rich snacks.",
    metaTitle: "La Crown D'Or Brandy Guide | BevOry",
    metaDescription: "Explore La Crown D'Or XO brandy notes, Vinbros context, serving styles, pairings and city prices on BevOry.",
  },
  "la-fantasia": {
    description: "La Fantasia is a wine label tracked in India across Cabernet Sauvignon, Merlot and Sauvignon Blanc bottles. The Classic Merlot is associated with Chile's Central Valley, while the wider line gives shoppers both red and white options.",
    story: "La Fantasia sits in the value imported-wine space, especially on hotel and retail lists that need approachable by-the-glass reds and whites. Its Merlot and Sauvignon Blanc styles make it easy to compare ripe red fruit against crisp citrus-led white wine.",
    tastingNotes: [
      { title: "Classic Merlot", description: "Plum, red cherry, soft tannins and a touch of vanilla suit drinkers who want a smooth red." },
      { title: "Sauvignon Blanc", description: "Lemon, green apple and grassy freshness give the white a crisp, lighter profile." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Sauvignon Blanc well chilled and Merlot slightly cool in a standard red-wine glass." },
      { subheading: "Food", description: "Pair Merlot with mutton seekh or pizza; match Sauvignon Blanc with tandoori fish, salads or goat cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "tandoori fish", "goat cheese salad", "pizza", "grilled vegetables"] }],
    whyChoose: "La Fantasia is useful when you want simple imported wine styles without moving into expensive reserve labels.",
    faqs: [
      { question: "What La Fantasia wines are tracked?", answer: "BevOry tracks La Fantasia Cabernet Sauvignon, Merlot and Sauvignon Blanc bottles." },
      { question: "Which food suits La Fantasia Merlot?", answer: "Mutton seekh, pizza, grilled vegetables and mild hard cheeses suit its soft red-fruit profile." },
    ],
    finalVerdict: "La Fantasia is an easy wine-table choice when guests want familiar red and white varietals.",
    metaTitle: "La Fantasia Wine Guide | BevOry",
    metaDescription: "Explore La Fantasia Merlot, Cabernet and Sauvignon Blanc notes, food pairings and city prices on BevOry.",
  },
  "la-rocca": {
    description: "La Rocca on BevOry refers to Italian La Roccagrande wines, including Vino Bianco and Merlot Veneto listings. The range covers easy-drinking Italian white and red styles in 750 ml bottles.",
    story: "La Roccagrande is associated with a broad selection of Italian varietal wines made for straightforward table drinking. In India, La Roccagrande Vino Bianco and La Rocca Merlot Veneto place the brand in the everyday Italian wine lane.",
    tastingNotes: [
      { title: "Vino Bianco", description: "Citrus, pear, green apple and light floral notes give the white a clean, refreshing shape." },
      { title: "Merlot Veneto", description: "Cherry, black cherry, soft tannins and a dry finish make the red suited to casual meals." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve the white chilled and the Merlot slightly cool, using simple tulip-shaped wine glasses." },
      { subheading: "Food", description: "Pair the white with prawns or pasta; match the Merlot with roast chicken, paneer tikka or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["garlic prawns", "pasta primavera", "roast chicken", "paneer tikka", "aged cheddar"] }],
    whyChoose: "La Rocca is a straightforward Italian wine option for crisp whites and soft, food-friendly reds.",
    faqs: [
      { question: "What La Rocca wines are tracked?", answer: "BevOry tracks La Roccagrande Vino Bianco Wine and La Rocca Merlot Veneto listings." },
      { question: "How should La Roccagrande Vino Bianco be served?", answer: "Serve it chilled with seafood, pasta, salads or light Indian starters." },
    ],
    finalVerdict: "La Rocca is a useful Italian wine label for everyday white-wine freshness and mellow Merlot drinking.",
    metaTitle: "La Rocca Wine Guide | BevOry",
    metaDescription: "Explore La Rocca Italian wine notes, Vino Bianco and Merlot styles, food pairings and city prices on BevOry.",
  },
  "la-tete": {
    description: "La Tete on BevOry refers to La Tete Dans Les Cepages wines from France's IGP Pays d'Oc. The tracked bottles include Sauvignon Blanc and Merlot styles in 750 ml formats.",
    story: "Pays d'Oc wines come from southern France, where varietal labelling helps drinkers choose by grape rather than by village. La Tete Dans Les Cepages follows that direct style, with Sauvignon Blanc for freshness and Merlot for soft red-fruit drinking.",
    tastingNotes: [
      { title: "Sauvignon Blanc", description: "Grapefruit, lemon zest, green apple and cut grass give the white a lively profile." },
      { title: "Merlot", description: "Plum, cherry, soft tannins and mild spice make the red round and easy to pair." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Sauvignon Blanc chilled at 8-10C and Merlot slightly cool at 14-16C." },
      { subheading: "Food", description: "Pair Sauvignon Blanc with tandoori fish or salads; match Merlot with galouti kebabs, pizza or roast mushrooms." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "goat cheese salad", "galouti kebabs", "pizza", "roast mushrooms"] }],
    whyChoose: "La Tete is a clear Pays d'Oc choice when you want grape-led French wine without a complicated label.",
    faqs: [
      { question: "What does La Tete offer on BevOry?", answer: "BevOry tracks La Tete Dans Les Cepages Sauvignon Blanc and Merlot from IGP Pays d'Oc." },
      { question: "What is IGP Pays d'Oc known for?", answer: "IGP Pays d'Oc is known for southern French varietal wines that name the grape clearly on the label." },
    ],
    finalVerdict: "La Tete is a friendly French wine pick for crisp Sauvignon Blanc and soft Merlot meals.",
    metaTitle: "La Tete Wine Guide | BevOry",
    metaDescription: "Explore La Tete Pays d'Oc wine notes, Sauvignon Blanc and Merlot styles, pairings and city prices on BevOry.",
  },
  "la-vielle": {
    description: "La Vielle on BevOry refers to La Vieille Ferme White, the French wine label from Famille Perrin. The white blend uses grapes such as Bourboulenc, Grenache Blanc, Ugni Blanc and Vermentino.",
    story: "Jean-Pierre Perrin created La Vieille Ferme as an accessible French wine range tied to the Perrin family's Southern Rhone heritage. The Blanc is made with temperature-controlled fermentation and stainless-steel ageing to preserve freshness.",
    tastingNotes: [
      { title: "Southern French White", description: "White peach, pear, citrus, almond blossom and light saline notes shape the Blanc." },
      { title: "Fresh Finish", description: "Gentle texture, bright acidity and a clean finish make it useful with lighter food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled around 8C in a white-wine glass, especially with starters and seafood." },
      { subheading: "Food", description: "Pair with tandoori fish, prawn salad, grilled chicken, hummus, paneer tikka or lemon rice." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "prawn salad", "grilled chicken", "hummus", "lemon rice"] }],
    whyChoose: "La Vieille Ferme Blanc is a dependable French white for fresh acidity, soft fruit and light meals.",
    faqs: [
      { question: "Who makes La Vieille Ferme?", answer: "La Vieille Ferme is made by Famille Perrin, the Southern Rhone wine family behind Chateau de Beaucastel." },
      { question: "What grapes are in La Vieille Ferme Blanc?", answer: "The Blanc uses Bourboulenc, Grenache Blanc, Ugni Blanc and Vermentino." },
    ],
    finalVerdict: "La Vieille Ferme Blanc is a crisp French white for seafood, salads and relaxed table drinking.",
    metaTitle: "La Vielle Wine Guide | BevOry",
    metaDescription: "Explore La Vieille Ferme Blanc notes, Famille Perrin context, food pairings and city prices on BevOry.",
  },
  "laffaire-napoleon": {
    description: "Laffaire Napoleon is an Indian grape brandy sold as Laffaire Napoleon Premium French Blended Grape Brandy. It sits in the domestic brandy shelf for drinkers who like warm, sweet-spiced grape spirit.",
    story: "The Napoleon-style name points to India's long-running preference for French-style grape brandy at approachable prices. Its format is built for familiar home serves: neat, with warm water, over ice or topped with soda.",
    tastingNotes: [
      { title: "Grape Brandy Core", description: "Raisin, caramel, dried fruit and warm spirit notes form the main profile." },
      { title: "Sweet Spice", description: "Vanilla, toasted sugar and mild oak spice give the finish a rounded feel." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, with warm water, over ice, or topped with soda for an easy long drink." },
      { subheading: "Food", description: "Pair with mutton pepper fry, chicken tikka, plum cake, roasted peanuts or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton pepper fry", "chicken tikka", "plum cake", "roasted peanuts", "dark chocolate"] }],
    whyChoose: "Laffaire Napoleon is a classic Indian grape brandy pick for warm, sweet-spiced serves.",
    faqs: [
      { question: "What type of drink is Laffaire Napoleon?", answer: "Laffaire Napoleon is listed as a premium French blended grape brandy in Indian excise records." },
      { question: "How should Laffaire Napoleon be served?", answer: "Serve it neat, with warm water, over ice or with soda." },
    ],
    finalVerdict: "Laffaire Napoleon suits drinkers who want a familiar Indian grape brandy with dried-fruit warmth.",
    metaTitle: "Laffaire Napoleon Brandy Guide | BevOry",
    metaDescription: "Explore Laffaire Napoleon grape brandy notes, serving ideas, Indian pairings and city prices on BevOry.",
  },
  langlauf: {
    description: "Langlauf is a Belgian wheat beer label tracked in India through Langlauf White Belgian Wheat Beer. The beer is listed as a witbier-style 330 ml bottle with a citrus-and-spice profile.",
    story: "Langlauf sits in the Belgian white beer tradition, where wheat malt, expressive yeast and spice notes create a cloudy, refreshing beer. Indian listings place it in the premium imported beer shelf for drinkers comparing witbier alternatives.",
    tastingNotes: [
      { title: "Witbier Citrus", description: "Orange peel, lemon zest, coriander and soft wheat give the beer its bright aroma." },
      { title: "Cloudy Finish", description: "Light body, creamy grain and mild spice keep the finish crisp and refreshing." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled at 4-7C in a tall wheat-beer glass, pouring with a generous head." },
      { subheading: "Food", description: "Pair with bhel puri, grilled prawns, paneer tikka, green salad or lemon chicken." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["bhel puri", "grilled prawns", "paneer tikka", "green salad", "lemon chicken"] }],
    whyChoose: "Langlauf is a crisp witbier choice for drinkers who like wheat texture, citrus and spice.",
    faqs: [
      { question: "What style is Langlauf White Belgian Wheat Beer?", answer: "Langlauf White Belgian Wheat Beer is listed as a witbier or Belgian-style wheat beer." },
      { question: "What food goes with Langlauf?", answer: "Bhel puri, grilled prawns, paneer tikka and lemon chicken work well with its citrusy wheat profile." },
    ],
    finalVerdict: "Langlauf is a refreshing Belgian wheat beer for hot weather, chaat and grilled seafood.",
    metaTitle: "Langlauf Wheat Beer Guide | BevOry",
    metaDescription: "Explore Langlauf Belgian wheat beer notes, serving temperature, food pairings and city prices on BevOry.",
  },
  "las-carretas": {
    description: "Las Carretas is a wine label seen in India through red and white wine bottles. Las Carretas White Wine appears in 750 ml format, with the style positioned as a Spanish white blend.",
    story: "The Las Carretas name appears across Spanish wine references, including white and red table-wine styles. In India, the label is mainly useful for shoppers comparing approachable imported wines around seafood, salads and casual dinners.",
    tastingNotes: [
      { title: "White Blend", description: "Citrus, green apple, pear and light floral notes keep the white crisp and easy to pour." },
      { title: "Red Wine Style", description: "Red-fruit notes, gentle spice and soft tannins suit simple grilled food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve the white chilled and the red slightly cool, using standard wine glasses." },
      { subheading: "Food", description: "Pair the white with grilled fish or salad; match the red with chicken tikka, tapas or mushrooms." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled fish", "green salad", "chicken tikka", "patatas bravas", "roast mushrooms"] }],
    whyChoose: "Las Carretas is a simple imported wine option for crisp white serves and casual red-wine meals.",
    faqs: [
      { question: "What Las Carretas wine is tracked?", answer: "BevOry tracks Las Carretas White Wine in a 750 ml bottle, with red listings also appearing in Indian wine categories." },
      { question: "What food suits Las Carretas White Wine?", answer: "Grilled fish, green salad, prawns and light vegetarian starters suit its crisp profile." },
    ],
    finalVerdict: "Las Carretas works as an easy table-wine choice for light food, tapas and casual dinners.",
    metaTitle: "Las Carretas Wine Guide | BevOry",
    metaDescription: "Explore Las Carretas white and red wine notes, serving ideas, food pairings and city prices on BevOry.",
  },
  "le-botaniste": {
    description: "Le Botaniste is a French wine label tracked in India through Le Botaniste Rose Grenache Syrah. The broader Rombeau Le Botaniste range is linked with Cotes du Roussillon Villages in southern France.",
    story: "Domaine de Rombeau is based in Roussillon, a Mediterranean wine region shaped by sun, wind and limestone-clay soils. Le Botaniste bottlings are built around southern French grapes such as Grenache, Syrah and Mourvedre.",
    tastingNotes: [
      { title: "Rose Grenache Syrah", description: "Red berries, citrus peel, rosehip and gentle spice create a dry, food-friendly rose profile." },
      { title: "Roussillon Red Style", description: "Black cherry, cassis, baking spice and firm tannins show the deeper side of the range." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve rose chilled at 8-10C; serve red Le Botaniste slightly cool in a wide red-wine glass." },
      { subheading: "Food", description: "Pair rose with tandoori prawns or salads; match the reds with lamb chops, mushroom kebabs or Manchego." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "lamb chops", "mushroom kebabs", "Manchego", "grilled vegetables"] }],
    whyChoose: "Le Botaniste is a strong French pick for drinkers who want southern grapes with spice, fruit and structure.",
    faqs: [
      { question: "What Le Botaniste wine is tracked on BevOry?", answer: "BevOry tracks Le Botaniste Rose Grenache Syrah in a 750 ml format." },
      { question: "Which grapes are linked with Le Botaniste wines?", answer: "Le Botaniste wines are linked with southern French grapes such as Grenache, Syrah and Mourvedre." },
    ],
    finalVerdict: "Le Botaniste is a characterful French wine choice for rose freshness and Roussillon-style red depth.",
    metaTitle: "Le Botaniste Wine Guide | BevOry",
    metaDescription: "Explore Le Botaniste French wine notes, Grenache Syrah styles, pairings and city prices on BevOry.",
  },
};
