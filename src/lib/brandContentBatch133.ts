import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_133 = [
  ["flor-de-cana", "Flor de Caña", "Nicaragua", "Rum", "brand-expansion-flor-de-cana"],
  ["grants", "Grant's", "Scotland", "Blended Scotch Whisky", "brand-expansion-grants"],
  ["jameson", "Jameson", "Ireland", "Irish Whiskey", "brand-expansion-jameson"],
  ["jose-cuervo", "Jose Cuervo", "Mexico", "Tequila", "brand-expansion-jose-cuervo"],
  ["kendall-jackson", "Kendall-Jackson", "United States", "Wine", "brand-expansion-kendall-jackson"],
  ["krsma", "KRSMA", "India", "Wine", "brand-expansion-krsma"],
  ["m-chapoutier", "M. Chapoutier", "France", "Wine", "brand-expansion-m-chapoutier"],
  ["moet-and-chandon", "Moët & Chandon", "France", "Champagne", "brand-expansion-moet-and-chandon"],
  ["remy-martin", "Rémy Martin", "France", "Cognac", "brand-expansion-remy-martin"],
  ["ron-zacapa", "Zacapa", "Guatemala", "Rum", "brand-expansion-ron-zacapa"],
] as const;

export const BRAND_LOGOS_BATCH_133: Record<string, string> = {
  "kendall-jackson": "https://www.kj.com/on/demandware.static/-/Sites-KJ-Library/default/dw1d270911/images/logo/kj-logo-from-figma-2024-group3629-hq-compressed.png",
  krsma: "https://www.krsmaestates.com/wp-content/uploads/2020/03/image-logo-krsma-630x535.webp",
  "moet-and-chandon": "https://www.moet.com/themes/custom/moet/images/logo-red-header.png",
};

export const BRAND_SOURCES_BATCH_133: Record<string, string[]> = {
  "flor-de-cana": ["https://www.flordecana.com/family-legacy"],
  grants: ["https://www.williamgrant.com/We", "https://www.grantswhisky.com/fr/notre-histoire/"],
  jameson: [
    "https://www.jamesonwhiskey.com/en/our-story/our-history",
    "https://www.jamesonwhiskey.com/en-ca/our-story/how-jameson-irish-whiskey-is-made/",
  ],
  "jose-cuervo": ["https://global.cuervo.com/history-of-jose-cuervo/", "https://global.cuervo.com/about-jose-cuervo/"],
  "kendall-jackson": ["https://www.kj.com/about.html", "https://www.jacksonfamilywines.com/history"],
  krsma: ["https://www.krsmaestates.com/about-us/", "https://www.krsmaestates.com/crafting-wine/"],
  "m-chapoutier": ["https://www.chapoutier.com/en/the-maison/history/"],
  "moet-and-chandon": ["https://www.lvmh.com/our-maisons/wines-spirits/moet-chandon"],
  "remy-martin": ["https://www.remymartin.com/en-us/who-we-are/our-history/", "https://www.remymartin.com/en-us/what-is-cognac/"],
  "ron-zacapa": ["https://www.zacaparum.com/en/our-story/aged-above-clouds", "https://www.zacaparum.com/en/our-story/sistema-solera"],
};

export const BRAND_CONTENT_BATCH_133: Record<string, BrandPublicContent> = {
  "flor-de-cana": {
    description: "Flor de Caña is a Nicaraguan rum brand whose story began in 1890 at the base of San Cristóbal, Nicaragua's tallest active volcano. The rum is known for a dry, oak-aged profile built around sugarcane molasses and long tropical maturation.",
    story: "Alfredo Francisco Pellas chose the volcanic region for sugarcane and rum-making, and the brand has remained tied to the Pellas family legacy. Flor de Caña's identity rests on Nicaraguan climate, volcanic soil and a cleaner style than many heavily sweet rums.",
    tastingNotes: [
      { title: "Volcanic Rum", description: "Toffee, roasted nuts, orange peel, vanilla and dry oak give the aged rums a firm, polished profile." },
      { title: "Dry Finish", description: "The finish is cleaner and less syrupy, with spice and wood carrying through." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip aged expressions neat or over one cube; use younger rums in Daiquiris and rum highballs." },
      { subheading: "Food", description: "Pair with grilled pork, pepper chicken, dark chocolate, banana fritters or spiced cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled pork", "pepper chicken", "dark chocolate", "banana fritters", "spiced cashews"] }],
    whyChoose: "Flor de Caña is a strong pick for drinkers who want dry Nicaraguan rum with oak, spice and volcanic provenance.",
    faqs: [
      { question: "Where is Flor de Caña from?", answer: "Flor de Caña is from Nicaragua, with roots at the base of the San Cristóbal volcano." },
      { question: "When did Flor de Caña's story begin?", answer: "The brand traces its rum-making story to 1890." },
    ],
    finalVerdict: "Flor de Caña is a dry, structured rum for sipping, citrus cocktails and grilled food.",
    metaTitle: "Flor de Caña Rum Guide | BevOry",
    metaDescription: "Explore Flor de Caña Nicaraguan rum, volcanic origin, tasting notes, pairings and city prices on BevOry.",
  },
  grants: {
    description: "Grant's is a blended Scotch whisky brand from William Grant & Sons, the family company established by William Grant in 1887. It is best known for approachable blended Scotch in the brand's familiar triangular bottle.",
    story: "William Grant built his whisky business with family help, and the company remains linked to Grant family ownership across generations. Grant's sits on the everyday side of Scotch: soft grain, malt sweetness and simple mixed serves.",
    tastingNotes: [
      { title: "Blended Scotch", description: "Honey, pear, cereal, vanilla and gentle spice shape the whisky's rounded core." },
      { title: "Easy Finish", description: "A light oak finish and mild sweetness make it friendly with soda or ginger ale." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour over ice, mix with soda, or build a whisky ginger with fresh lime." },
      { subheading: "Food", description: "Pair with chicken tikka, fish fingers, masala peanuts, cheddar toast or apple tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "fish fingers", "masala peanuts", "cheddar toast", "apple tart"] }],
    whyChoose: "Grant's is a straightforward family-owned Scotch blend for highballs and casual whisky tables.",
    faqs: [
      { question: "Who owns Grant's whisky?", answer: "Grant's is owned by William Grant & Sons." },
      { question: "What style is Grant's?", answer: "Grant's is a blended Scotch whisky." },
    ],
    finalVerdict: "Grant's is an easy Scotch blend for soda, ginger ale and everyday savoury snacks.",
    metaTitle: "Grant's Whisky Guide | BevOry",
    metaDescription: "Explore Grant's blended Scotch, William Grant history, tasting notes, pairings and city prices on BevOry.",
  },
  jameson: {
    description: "Jameson is an Irish whiskey brand founded by John Jameson at Bow Street, Dublin, in 1780. It is known for triple distillation and a blend of pot still whiskey made from malted and unmalted barley with grain whiskey.",
    story: "Bow Street became one of Irish whiskey's defining addresses before Jameson production moved to Midleton in County Cork. The brand's global success comes from a soft, versatile style that works neat, with ginger ale, or in cocktails.",
    tastingNotes: [
      { title: "Irish Smoothness", description: "Vanilla, orchard fruit, cereal, honey and light nuttiness give Jameson its familiar gentle style." },
      { title: "Triple Distilled", description: "The texture is clean and rounded, with a soft finish that keeps cocktails bright." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Drink neat, over ice, with ginger ale and lime, or in an Irish Coffee." },
      { subheading: "Food", description: "Pair with chicken wings, pork sliders, cheese toast, apple crumble or seekh kebabs." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken wings", "pork sliders", "cheese toast", "apple crumble", "seekh kebabs"] }],
    whyChoose: "Jameson is the classic Irish whiskey choice for smooth highballs and easy mixed drinks.",
    faqs: [
      { question: "When was Jameson founded?", answer: "Jameson traces its origins to John Jameson's Bow Street distillery in 1780." },
      { question: "How is Jameson made?", answer: "Jameson blends triple-distilled pot still whiskey with triple-distilled grain whiskey." },
    ],
    finalVerdict: "Jameson is a soft Irish whiskey that moves easily from neat pours to ginger highballs.",
    metaTitle: "Jameson Irish Whiskey Guide | BevOry",
    metaDescription: "Explore Jameson Irish whiskey, Bow Street history, tasting notes, serves, pairings and city prices on BevOry.",
  },
  "jose-cuervo": {
    description: "Jose Cuervo is a tequila brand from Tequila, Jalisco, with commercial roots dating to 1795. The brand is tied to La Rojeña, described by Cuervo as the oldest active distillery in Latin America.",
    story: "The Cuervo family's tequila story began with agave land granted in 1758 and grew into one of Mexico's most recognised spirits names. Jose Cuervo spans party-friendly mixto tequila, 100 percent agave bottles and higher-end Reserva de la Familia releases.",
    tastingNotes: [
      { title: "Agave And Citrus", description: "Blanco styles bring cooked agave, pepper, lemon peel and herbal brightness." },
      { title: "Oak And Spice", description: "Reposado and añejo styles move toward vanilla, caramel, oak spice and roasted agave." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use Blanco in Margaritas, sip 100 percent agave expressions neat, or pour with grapefruit soda." },
      { subheading: "Food", description: "Pair with tacos al pastor, tandoori prawns, nachos, achari paneer or grilled pineapple." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tacos al pastor", "tandoori prawns", "nachos", "achari paneer", "grilled pineapple"] }],
    whyChoose: "Jose Cuervo is a historic tequila name with a broad range from cocktails to sipping bottles.",
    faqs: [
      { question: "Where is Jose Cuervo from?", answer: "Jose Cuervo is from Tequila, Jalisco, Mexico." },
      { question: "When did Jose Cuervo receive its commercial tequila charter?", answer: "Jose Cuervo traces commercial tequila production to 1795." },
    ],
    finalVerdict: "Jose Cuervo is a versatile tequila name for Margaritas, party serves and agave-forward sipping.",
    metaTitle: "Jose Cuervo Tequila Guide | BevOry",
    metaDescription: "Explore Jose Cuervo tequila, Jalisco history, tasting notes, cocktails, pairings and city prices on BevOry.",
  },
  "kendall-jackson": {
    description: "Kendall-Jackson is a California wine brand from Jackson Family Wines, launched with the 1982 vintage of Vintner's Reserve Chardonnay. Its signature Chardonnay is one of America's best-known premium white wines.",
    story: "Jess Jackson built the brand around coastal California fruit and a richer, approachable Chardonnay style. The portfolio now covers Chardonnay, Sauvignon Blanc, Pinot Noir, Cabernet Sauvignon and reserve-tier wines from cool coastal appellations.",
    tastingNotes: [
      { title: "Chardonnay", description: "Pineapple, pear, citrus, vanilla, butter and toasted oak define the familiar Vintner's Reserve style." },
      { title: "California Reds", description: "Pinot Noir and Cabernet expressions bring cherry, black fruit, mocha, spice and polished tannin." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Chardonnay chilled in a white-wine glass; pour reds slightly cool with a little air." },
      { subheading: "Food", description: "Pair Chardonnay with butter chicken, grilled prawns or creamy pasta; serve Cabernet with lamb chops or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["butter chicken", "grilled prawns", "creamy pasta", "lamb chops", "aged cheddar"] }],
    whyChoose: "Kendall-Jackson is a dependable California name for rich Chardonnay and polished coastal wines.",
    faqs: [
      { question: "What is Kendall-Jackson best known for?", answer: "Kendall-Jackson is best known for Vintner's Reserve Chardonnay." },
      { question: "Who owns Kendall-Jackson?", answer: "Kendall-Jackson is part of Jackson Family Wines." },
    ],
    finalVerdict: "Kendall-Jackson is ideal when the table wants generous California fruit and a fuller Chardonnay style.",
    metaTitle: "Kendall-Jackson Wine Guide | BevOry",
    metaDescription: "Explore Kendall-Jackson California wine, Chardonnay notes, food pairings and city prices on BevOry.",
  },
  krsma: {
    description: "KRSMA is an Indian wine estate near Hampi in Karnataka, founded by Krishna Prasad and Uma Chigurupati. The vineyards sit around the Hampi Hills, where warm days, rocky soils and careful irrigation shape concentrated Indian wines.",
    story: "The founders searched beyond India's usual wine regions before choosing land near the ruins of Hampi in 2008. KRSMA built its reputation on Cabernet Sauvignon, Sauvignon Blanc, Chardonnay and other small-production wines that focus on site rather than volume.",
    tastingNotes: [
      { title: "Hampi Reds", description: "Cabernet Sauvignon shows blackcurrant, plum, spice, cedar and structured tannin." },
      { title: "Estate Whites", description: "Sauvignon Blanc and Chardonnay bring citrus, tropical fruit, stone fruit and a firm mineral line." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled; decant structured reds or pour in a wide glass at cool room temperature." },
      { subheading: "Food", description: "Pair Cabernet with mutton rogan josh or lamb chops; serve Sauvignon Blanc with tandoori fish or goat cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton rogan josh", "lamb chops", "tandoori fish", "goat cheese", "mushroom galouti"] }],
    whyChoose: "KRSMA is one of India's serious estate-wine names, driven by Hampi Hills terroir and low-volume ambition.",
    faqs: [
      { question: "Where is KRSMA made?", answer: "KRSMA wines come from vineyards near Hampi in Karnataka." },
      { question: "Who founded KRSMA?", answer: "KRSMA was founded by Krishna Prasad and Uma Chigurupati." },
    ],
    finalVerdict: "KRSMA is a benchmark Indian estate for drinkers who want structured reds and distinctive Hampi-grown wines.",
    metaTitle: "KRSMA Wine Guide | BevOry",
    metaDescription: "Explore KRSMA Indian wine from Hampi Hills, tasting notes, food pairings and city prices on BevOry.",
  },
  "m-chapoutier": {
    description: "M. Chapoutier is a Rhône Valley wine house based in Tain-l'Hermitage, with roots going back to 1808. The producer is closely associated with Syrah, Marsanne, Roussanne and biodynamic viticulture under Michel Chapoutier.",
    story: "The Chapoutier family name entered the business in the 19th century, and Michel Chapoutier later pushed the house toward parcel expression and biodynamic farming. The braille on Chapoutier labels has become one of the wine world's most recognisable accessibility gestures.",
    tastingNotes: [
      { title: "Rhône Reds", description: "Syrah-led wines show blackberry, pepper, smoked meat, violets and firm mineral tannin." },
      { title: "Rhône Whites", description: "Marsanne and Roussanne bring pear, honey, almond, waxy texture and savoury freshness." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve structured reds slightly cool after aeration; pour whites chilled but not ice-cold." },
      { subheading: "Food", description: "Pair Syrah with lamb chops, galouti kebabs or pepper steak; serve Rhône whites with roast chicken or paneer tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb chops", "galouti kebabs", "pepper steak", "roast chicken", "paneer tikka"] }],
    whyChoose: "M. Chapoutier is a Rhône benchmark for terroir-focused Syrah and textured white wines.",
    faqs: [
      { question: "Where is M. Chapoutier based?", answer: "M. Chapoutier is based in Tain-l'Hermitage in France's Rhône Valley." },
      { question: "What grapes is M. Chapoutier known for?", answer: "The house is closely associated with Syrah, Marsanne and Roussanne." },
    ],
    finalVerdict: "M. Chapoutier is for drinkers who want serious Rhône character with a strong terroir signature.",
    metaTitle: "M. Chapoutier Wine Guide | BevOry",
    metaDescription: "Explore M. Chapoutier Rhône wines, Syrah, Marsanne, tasting notes, pairings and city prices on BevOry.",
  },
  "moet-and-chandon": {
    description: "Moët & Chandon is a Champagne house founded in 1743 and based on Avenue de Champagne in Épernay. Part of LVMH, it is known for Brut Impérial, Rosé Impérial and vintage Grand Vintage Champagnes.",
    story: "The house built its reputation through scale, cellar heritage and celebratory Champagne culture. Its style blends Pinot Noir, Pinot Meunier and Chardonnay from across Champagne to create a bright, polished house profile.",
    tastingNotes: [
      { title: "Brut Impérial", description: "Green apple, citrus, white flowers, brioche and fine bubbles create the classic aperitif profile." },
      { title: "Rosé Style", description: "Red berries, peach, floral notes and gentle spice bring a fuller fruit-led Champagne expression." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a tulip or white-wine glass to keep bubbles lively and aromas open." },
      { subheading: "Food", description: "Pair Brut with oysters, sushi, tandoori prawns or fried chicken; pour Rosé with berry tart or duck." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["oysters", "sushi", "tandoori prawns", "fried chicken", "berry tart"] }],
    whyChoose: "Moët & Chandon is the classic celebration Champagne when polish, freshness and recognisable heritage matter.",
    faqs: [
      { question: "When was Moët & Chandon founded?", answer: "Moët & Chandon was founded in 1743." },
      { question: "Where is Moët & Chandon based?", answer: "The house is based in Épernay in France's Champagne region." },
    ],
    finalVerdict: "Moët & Chandon remains a polished Champagne choice for celebrations, aperitifs and seafood-led meals.",
    metaTitle: "Moët & Chandon Champagne Guide | BevOry",
    metaDescription: "Explore Moët & Chandon Champagne, Épernay history, tasting notes, pairings and city prices on BevOry.",
  },
  "remy-martin": {
    description: "Rémy Martin is a Cognac house founded in 1724 by a winegrower in Cognac. The house specialises in Cognac Fine Champagne, using eaux-de-vie from Grande Champagne and Petite Champagne crus.",
    story: "Rémy Martin's centaur emblem was chosen in 1870 as the house expanded abroad. Its reputation rests on long-ageing eaux-de-vie, Grande and Petite Champagne fruit, and a richer style seen in VSOP, 1738 Accord Royal and XO.",
    tastingNotes: [
      { title: "Fine Champagne", description: "Apricot, fig, vanilla, baking spice, orange peel and toasted oak shape the house profile." },
      { title: "Long Finish", description: "Mature expressions bring dried fruit, cocoa, leather and a rounded, warming finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip neat in a tulip glass, pour over one cube, or mix VSOP in a Sidecar." },
      { subheading: "Food", description: "Pair with duck, galouti kebabs, dark chocolate, crème brûlée or roasted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["duck", "galouti kebabs", "dark chocolate", "crème brûlée", "roasted almonds"] }],
    whyChoose: "Rémy Martin is a premium Cognac choice for drinkers who like fruit depth, spice and long oak ageing.",
    faqs: [
      { question: "When was Rémy Martin founded?", answer: "Rémy Martin was founded in Cognac in 1724." },
      { question: "What does Cognac Fine Champagne mean?", answer: "It means the cognac is made from Grande Champagne and Petite Champagne eaux-de-vie, with at least half from Grande Champagne." },
    ],
    finalVerdict: "Rémy Martin is a polished Cognac for slow sipping, classic cocktails and rich food pairings.",
    metaTitle: "Rémy Martin Cognac Guide | BevOry",
    metaDescription: "Explore Rémy Martin Cognac Fine Champagne, tasting notes, serving ideas, pairings and city prices on BevOry.",
  },
  "ron-zacapa": {
    description: "Zacapa is a Guatemalan rum brand made from virgin sugarcane honey rather than standard molasses. Its identity centres on high-altitude maturation at the House Above the Clouds and a Sistema Solera ageing method.",
    story: "Zacapa was created in Guatemala to mark the centenary of the city of Zacapa. Master blender Lorena Vásquez is closely linked with the brand's layered cask profile, which uses different barrel types to build sweetness, spice and texture.",
    tastingNotes: [
      { title: "Solera Rum", description: "Caramel, dried apricot, vanilla, cocoa, toasted wood and sweet spice define the plush house style." },
      { title: "Highland Ageing", description: "Cool mountain maturation keeps the rum rounded, aromatic and slow-building." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip neat in a small glass, pour over a large cube, or stir into a rum Old Fashioned." },
      { subheading: "Food", description: "Pair with dark chocolate, pork belly, coffee kulfi, grilled pineapple or spiced nuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["dark chocolate", "pork belly", "coffee kulfi", "grilled pineapple", "spiced nuts"] }],
    whyChoose: "Zacapa is a rich Guatemalan rum for drinkers who want dessert-like depth and layered cask influence.",
    faqs: [
      { question: "Where is Zacapa rum from?", answer: "Zacapa is from Guatemala." },
      { question: "What is Zacapa's House Above the Clouds?", answer: "It is the high-altitude maturation site where Zacapa rum ages in cool mountain air." },
    ],
    finalVerdict: "Zacapa is a plush sipping rum built around sweet spice, dried fruit and highland ageing.",
    metaTitle: "Zacapa Rum Guide | BevOry",
    metaDescription: "Explore Zacapa Guatemalan rum, Sistema Solera ageing, tasting notes, pairings and city prices on BevOry.",
  },
};
