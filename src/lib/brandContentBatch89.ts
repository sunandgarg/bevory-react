import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_89 = [
  ["hokkan", "Hokkan", "Japan", "Sake", "pending-hokkan"],
  ["honey-guide", "Honey Guide", "India", "Indian Spirits", "pending-honey-guide"],
  ["honey-trs", "Honey TRS", "India", "Vodka", "pending-honey-trs"],
  ["honjozo", "Honjozo", "Japan", "Sake", "pending-honjozo"],
  ["honroro", "Honroro", "Spain", "Wine", "pending-honroro"],
  ["husky", "Husky", "Russia", "Vodka", "pending-husky"],
  ["ibf", "IBF", "India", "Beer", "pending-ibf"],
  ["igp", "IGP", "France", "Wine", "pending-igp"],
  ["iice", "Iice", "India", "Vodka", "pending-iice"],
  ["ilauri-tavo", "iLauri Tavo", "Italy", "Wine", "pending-ilauri-tavo"],
] as const;

export const BRAND_LOGOS_BATCH_89: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_89: Record<string, string[]> = {
  hokkan: [
    "https://www.bevory.in/gurgaon/product/sake-jpn-sake-hokkan-sen-7044aa4",
    "https://www.bevory.in/gurgaon/product/hokkan-brewing-kacho-fugetsu-1848593",
    "https://www.bevory.in/gurgaon/product/hokkan-brewing-sen-f222326",
  ],
  "honey-guide": [
    "https://www.bevory.in/gurgaon/brand/honey-guide",
  ],
  "honey-trs": [
    "https://www.bevory.in/gurgaon/product/honey-trs-orange-flavoured-vodka-7c92d8f",
    "https://www.bevory.in/gurgaon/product/honey-trs-superior-rum-d123b6b",
    "https://www.liquorprice.info/product-category/vodka/page/11/",
  ],
  honjozo: [
    "https://www.toshimaya.co.jp/en/category/products/sake/honjozo",
    "https://www.kamotsuru.jp/en/brands_type/honjozo/",
    "https://www.bevory.in/gurgaon/product/tokubetsu-honjozo-tentaka-takanotsume-b0b2662",
    "https://www.bevory.in/gurgaon/product/sake-jpn-sake-bunraku-honjozo-taruzake-962ccf2",
  ],
  honroro: [
    "https://gilfamily.es/bodegas_juan_gil_honoro_vera_monastrell/en",
    "https://store.gilfamily.es/products/item/3/honoro-vera-monastrell/pdf/en",
    "https://www.bevory.in/gurgaon/product/honroro-honroro-monastrell-cf2b0be",
  ],
  husky: [
    "https://www.asg.ru/production/haski/",
    "https://rskrf.ru/goods/vodka-khaski-husky/",
    "https://www.bevory.in/gurgaon/product/husky-vodka-e55177a",
    "https://www.bevory.in/gurgaon/product/husky-legends-o-t-north-503935a",
  ],
  ibf: [
    "https://www.bevory.in/gurgaon/product/ibf-bully-strong-beer-can-5a4c5fe",
    "https://www.bevory.in/gurgaon/brand/ibf",
  ],
  igp: [
    "https://www.bevory.in/gurgaon/product/french-roots-merlot-igp-pays-d-oc-3965d2c",
    "https://www.bevory.in/gurgaon/product/french-roots-sauvignon-igp-pays-d-oc-blanc-d9129f4",
    "https://www.bevory.in/gurgaon/product/igp-les-terrasses-rose-4ceca81",
  ],
  iice: [
    "https://www.livcheers.com/jaipur/liquor/iice-undress-the-orange-vodka-platinum-375ml",
    "https://excise.cg.nic.in/Uploads/RSP_FL_2022_23.pdf",
    "https://tsbcl.nic.in/open_record.php?ID=249",
    "https://www.bevory.in/gurgaon/product/iice-iice-undress-the-orange-vodka-platinum-daf8545",
  ],
  "ilauri-tavo": [
    "https://www.i-lauri.it/it/",
    "https://www.i-lauri.it/schede/2022/iLauri_Tavo_ENG.pdf",
    "https://www.bevory.in/gurgaon/product/ilauri-tavo-pinot-grigio-white-wine-eae66f3",
  ],
};

export const BRAND_CONTENT_BATCH_89: Record<string, BrandPublicContent> = {
  hokkan: {
    description: "Hokkan is a Japanese sake label listed on BevOry through Hokkan Sen and Kacho Fugetsu routes. The page sits in the clean table-sake lane, with 300 ml and 720 ml formats suited to chilled or gently warmed service.",
    story: "Hokkan belongs to the Japanese sake shelf where rice polish, water, yeast and serving temperature shape the drinking experience. The BevOry routes make the brand useful for shoppers comparing compact sake bottles with standard 720 ml pours.",
    tastingNotes: [
      { title: "Rice And Umami", description: "Steamed rice, soft grain sweetness and light savoury umami create the centre." },
      { title: "Clean Sake Finish", description: "A gentle mineral edge and dry close keep the sake food-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a wine glass or gently warmed in a small ceramic sake cup." },
      { subheading: "Food", description: "Pair with sushi, yakitori, chicken momos, tandoori prawns or grilled mushrooms." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["sushi", "yakitori", "chicken momos", "tandoori prawns", "grilled mushrooms"] }],
    whyChoose: "Hokkan is a practical Japanese sake choice for clean rice flavour and flexible food pairing.",
    faqs: [
      { question: "What is Hokkan on BevOry?", answer: "Hokkan is listed as a Japanese sake brand with Sen and Kacho Fugetsu routes." },
      { question: "Should Hokkan sake be chilled or warm?", answer: "Try it chilled first, then gently warmed if you prefer a rounder rice-and-umami profile." },
    ],
    finalVerdict: "Hokkan is a clean, food-friendly sake page for Japanese meals and lighter Indian snacks.",
    metaTitle: "Hokkan Sake Guide | BevOry",
    metaDescription: "Explore Hokkan Japanese sake notes, bottle sizes, serving styles, pairings and city prices.",
  },
  "honey-guide": {
    description: "Honey Guide is an Indian spirits brand page on BevOry. Its current public route is best treated as a name-led discovery page for shoppers who remember the Honey Guide label and want local availability.",
    story: "Honey Guide uses a warm, approachable name that fits India's flavoured-spirit and casual mixer shelf. The page gives users a clean landing point before they move into exact bottle choices as they appear in the catalogue.",
    tastingNotes: [
      { title: "Warm Cue", description: "Honeyed sweetness, citrus lift and soft spice are the natural direction for this brand name." },
      { title: "Mixer Friendly", description: "Light sweetness and a clean finish suit soda, tonic, citrus and fruit-led serves." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, tonic, lemon, orange juice or plenty of ice in a tall glass." },
      { subheading: "Food", description: "Pair with chilli paneer, honey chilli potato, chicken tikka, nachos or salted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli paneer", "honey chilli potato", "chicken tikka", "nachos", "salted almonds"] }],
    whyChoose: "Honey Guide helps shoppers move from a remembered Indian spirits name to city-level bottle discovery.",
    faqs: [
      { question: "What is Honey Guide on BevOry?", answer: "Honey Guide is an Indian spirits brand page used for local discovery and availability checks." },
      { question: "What mixers suit Honey Guide?", answer: "Soda, tonic, lemon, orange juice and ice are sensible starting points." },
    ],
    finalVerdict: "Honey Guide is a simple Indian spirits page for easy mixers and snack-led drinking.",
    metaTitle: "Honey Guide Spirits Guide | BevOry",
    metaDescription: "Explore Honey Guide spirits serving ideas, tasting direction, pairings and city prices on BevOry.",
  },
  "honey-trs": {
    description: "Honey TRS is an Indian spirits label listed on BevOry through Orange Flavoured Vodka and Superior Rum routes. The brand covers both citrus-led vodka and rum-style mixed serves in 750 ml format.",
    story: "Honey TRS works as a party-shelf brand where flavour and mixer compatibility matter more than technical ageing language. The vodka route leans orange and bright, while the rum route moves toward cola, lime and spiced snack pairings.",
    tastingNotes: [
      { title: "Orange Vodka", description: "Sweet orange peel, citrus oil and light grain spirit create a bright flavoured-vodka profile." },
      { title: "Superior Rum", description: "Caramel, molasses sweetness and mild spice suit cola or lime mixers." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Mix the vodka with soda, cranberry or orange juice; pour the rum with cola, lime or ginger ale." },
      { subheading: "Food", description: "Pair with peri-peri fries, chilli chicken, paneer tikka, pork chilli or chocolate brownie." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["peri-peri fries", "chilli chicken", "paneer tikka", "pork chilli", "chocolate brownie"] }],
    whyChoose: "Honey TRS is useful when one brand search needs both citrus vodka and easy rum serves.",
    faqs: [
      { question: "Which Honey TRS bottles are listed on BevOry?", answer: "BevOry shows Honey TRS Orange Flavoured Vodka and Honey TRS Superior Rum routes." },
      { question: "How should Honey TRS Orange Vodka be mixed?", answer: "Use soda, orange juice, cranberry juice or lemon-lime mixers over ice." },
    ],
    finalVerdict: "Honey TRS is a flexible party-spirit page for orange vodka cocktails and rum highballs.",
    metaTitle: "Honey TRS Vodka & Rum Guide | BevOry",
    metaDescription: "Explore Honey TRS orange vodka and rum notes, mixers, pairings and city prices on BevOry.",
  },
  honjozo: {
    description: "Honjozo is a Japanese sake style page on BevOry, covering routes such as Tentaka Tokubetsu Honjozo and Bunraku Honjozo Taruzake. Honjozo sake is made with rice, koji and a small addition of brewer's alcohol for lift and clarity.",
    story: "Honjozo is prized in Japan as a food-friendly category because it can taste clean chilled and fuller when warmed. Taruzake versions add cedar-cask aroma, while tokubetsu honjozo usually signals a more refined special-designation bottling.",
    tastingNotes: [
      { title: "Classic Honjozo", description: "Steamed rice, melon, light banana, cereal and soft umami lead the profile." },
      { title: "Taruzake Cedar", description: "Cedar wood, spice, rice sweetness and a dry finish define barrel-scented bottles." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled, at room temperature or gently warmed depending on the bottle and meal." },
      { subheading: "Food", description: "Pair with yakitori, ramen eggs, sushi, tempura prawns or paneer gyoza." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["yakitori", "ramen eggs", "sushi", "tempura prawns", "paneer gyoza"] }],
    whyChoose: "Honjozo is a dependable sake style for drinkers who want clean rice flavour across several serving temperatures.",
    faqs: [
      { question: "What does Honjozo mean?", answer: "Honjozo is a sake category made with rice, koji and a small addition of brewer's alcohol." },
      { question: "Can Honjozo sake be warmed?", answer: "Yes, many Honjozo bottles work well chilled, at room temperature or gently warmed." },
    ],
    finalVerdict: "Honjozo is a food-first sake style that moves easily from sushi to grilled snacks.",
    metaTitle: "Honjozo Sake Guide | BevOry",
    metaDescription: "Explore Honjozo sake notes, taruzake style, serving temperatures, pairings and city prices.",
  },
  honroro: {
    description: "Honroro on BevOry points to Honoro Vera Monastrell, a Spanish red wine from Gil Family Estates in Jumilla. The wine is built around Monastrell grapes grown on chalky, rocky soils with strong fruit concentration.",
    story: "Jumilla's hot, dry climate makes Monastrell a natural local signature, giving deeply coloured reds with ripe fruit and earthy spice. Gil Family Estates places Honoro Vera in a fruit-forward, easy-drinking style while keeping the Jumilla identity clear.",
    tastingNotes: [
      { title: "Jumilla Monastrell", description: "Blackberry, red plum, cherry, violets and menthol carry the aromatic fruit." },
      { title: "Mineral Spice", description: "Medium body, balanced acidity, mineral depth and soft tannins shape the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool at 15-18 C in a medium red-wine glass." },
      { subheading: "Food", description: "Pair with mutton rogan josh, grilled lamb chops, mushroom curry, roast chicken or cured cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton rogan josh", "grilled lamb chops", "mushroom curry", "roast chicken", "cured cheese"] }],
    whyChoose: "Honroro is a strong pick for drinkers who like ripe Spanish Monastrell with spice and food-friendly tannins.",
    faqs: [
      { question: "What grape is Honroro Monastrell made from?", answer: "It is based on Monastrell from Spain's Jumilla region." },
      { question: "What food pairs with Honroro Monastrell?", answer: "Lamb, mutton rogan josh, mushrooms, roast chicken and cured cheese work well." },
    ],
    finalVerdict: "Honroro is a ripe Jumilla red for grilled meats, earthy dishes and Spanish-wine discovery.",
    metaTitle: "Honroro Monastrell Wine Guide | BevOry",
    metaDescription: "Explore Honroro Monastrell notes, Jumilla origin, serving tips, pairings and city prices.",
  },
  husky: {
    description: "Husky is a Russian vodka brand listed on BevOry through Husky Vodka and Legends of the North routes. Official Russian material connects the brand with Siberian imagery and a clean vodka profile.",
    story: "Husky uses cold-climate branding to signal purity, chill and a northern Russian drinking mood. The BevOry routes include 700 ml and 1 litre vodka formats, plus a Legends of the North listing for shoppers comparing variants.",
    tastingNotes: [
      { title: "Clean Vodka", description: "Neutral grain, cool mineral notes and light citrus make the vodka crisp." },
      { title: "Frozen Finish", description: "A clean, dry close suits chilled shots, soda and sharp citrus mixers." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve freezer-cold, over ice, with soda, tonic, lime or grapefruit juice." },
      { subheading: "Food", description: "Pair with smoked fish, tandoori prawns, chicken momos, salted almonds or pickled cucumber." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked fish", "tandoori prawns", "chicken momos", "salted almonds", "pickled cucumber"] }],
    whyChoose: "Husky is a crisp vodka choice for chilled service and clean highballs.",
    faqs: [
      { question: "What is Husky Vodka?", answer: "Husky is a Russian vodka brand listed on BevOry in 700 ml and 1 litre formats." },
      { question: "How should Husky Vodka be served?", answer: "Serve it freezer-cold, over ice or with soda, tonic and citrus." },
    ],
    finalVerdict: "Husky is a cold, clean vodka pick for simple serves and sharp snacks.",
    metaTitle: "Husky Vodka Guide | BevOry",
    metaDescription: "Explore Husky Vodka notes, serving ideas, bottle formats, pairings and city prices on BevOry.",
  },
  ibf: {
    description: "IBF is an Indian beer brand page listed on BevOry through IBF Bully Strong Beer Can. The route points to a 500 ml strong lager-style can made for cold, high-refreshment service.",
    story: "IBF sits in India's strong-beer search lane, where can format, chill and snack pairing drive most buying decisions. The Bully name signals a bolder beer profile than light lager without needing complex craft-beer language.",
    tastingNotes: [
      { title: "Strong Lager", description: "Sweet malt, grain, light corn and firm bitterness shape the beer." },
      { title: "Cold Can Finish", description: "A crisp, slightly warming close works best when poured very cold." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a beer mug or straight from the can over a relaxed session." },
      { subheading: "Food", description: "Pair with chicken wings, masala peanuts, chilli paneer, fried fish or spicy chips." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken wings", "masala peanuts", "chilli paneer", "fried fish", "spicy chips"] }],
    whyChoose: "IBF is a direct strong-beer page for shoppers looking for a bold 500 ml can.",
    faqs: [
      { question: "What is IBF Bully?", answer: "IBF Bully is listed on BevOry as a strong beer can in 500 ml format." },
      { question: "How should IBF beer be served?", answer: "Serve it very cold with spicy snacks or fried starters." },
    ],
    finalVerdict: "IBF is best for cold strong-beer serves, bold snacks and quick local price checks.",
    metaTitle: "IBF Beer Guide | BevOry",
    metaDescription: "Explore IBF Bully Strong Beer notes, can format, serving ideas, pairings and city prices.",
  },
  igp: {
    description: "IGP on BevOry covers French regional wine routes such as French Roots Merlot IGP Pays d'Oc, Sauvignon IGP Pays d'Oc Blanc and Les Terrasses Rosé. IGP signals a protected regional wine category with broader grape flexibility than stricter appellations.",
    story: "Pays d'Oc IGP is one of France's most familiar regional wine labels, especially for clear varietal wines from southern France. The BevOry routes make the page useful for shoppers choosing between Merlot, Sauvignon Blanc and rosé by food and mood.",
    tastingNotes: [
      { title: "Pays d'Oc Whites", description: "Sauvignon Blanc brings lemon, green apple, herbs and a crisp finish." },
      { title: "Merlot And Rosé", description: "Merlot leans plum and soft tannin, while rosé brings red berry and citrus freshness." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Sauvignon Blanc and rosé chilled; pour Merlot slightly cool in a red-wine glass." },
      { subheading: "Food", description: "Pair whites with tandoori fish, rosé with kebabs, and Merlot with mushroom tikka or lamb." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "seekh kebabs", "mushroom tikka", "grilled lamb", "goat cheese"] }],
    whyChoose: "IGP is a useful French wine route for grape-led choices without overcomplicating the label.",
    faqs: [
      { question: "What does IGP mean on French wine?", answer: "IGP is a protected regional wine category that identifies the wine's broader geographical origin." },
      { question: "Which IGP wines are listed on BevOry?", answer: "BevOry shows Merlot, Sauvignon Blanc and rosé routes under IGP-linked pages." },
    ],
    finalVerdict: "IGP is a practical French wine page for choosing easy Merlot, Sauvignon Blanc or rosé.",
    metaTitle: "IGP French Wine Guide | BevOry",
    metaDescription: "Explore IGP French wine notes, Merlot, Sauvignon Blanc, rosé pairings and city prices.",
  },
  iice: {
    description: "Iice is an Indian vodka brand listed through Iice Undress The Orange Vodka Platinum. Retail tasting notes describe it as orange-flavoured vodka, while excise listings connect Iice vodka labels with Jagatjit Industries Limited.",
    story: "Iice belongs to India's flavoured-vodka shelf, where citrus flavour, cold service and quick cocktails matter most. The orange expression is built for soda, cranberry, grapefruit and party-style highballs.",
    tastingNotes: [
      { title: "Orange Vodka", description: "Fresh orange peel, sweet citrus, light grain spirit and a clean aroma lead the profile." },
      { title: "Platinum Finish", description: "Zesty sweetness and a crisp close make it easy to mix." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled with soda, cranberry juice, grapefruit juice or lemon-lime mixers." },
      { subheading: "Food", description: "Pair with peri-peri fries, tandoori prawns, chilli chicken, nachos or fruit chaat." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["peri-peri fries", "tandoori prawns", "chilli chicken", "nachos", "fruit chaat"] }],
    whyChoose: "Iice is a bright flavoured vodka for orange-led highballs and low-effort cocktails.",
    faqs: [
      { question: "What flavour is Iice Undress The Orange?", answer: "It is an orange-flavoured vodka listed on BevOry." },
      { question: "What mixer works with Iice orange vodka?", answer: "Soda, cranberry juice, grapefruit juice and lemon-lime mixers work well." },
    ],
    finalVerdict: "Iice is a citrus-forward vodka for cold cocktails, party pours and spicy snacks.",
    metaTitle: "Iice Orange Vodka Guide | BevOry",
    metaDescription: "Explore Iice Undress The Orange Vodka notes, mixers, pairings and city prices on BevOry.",
  },
  "ilauri-tavo": {
    description: "iLauri Tavo is an Italian Pinot Grigio delle Venezie DOC wine from iLauri. The producer is based in Loreto Aprutino in Abruzzo, while Tavo Pinot Grigio draws fruit from the Veneto Pinot Grigio DOC area.",
    story: "iLauri was built around Abruzzo roots, sustainability work and the local Tavo river name. The Tavo label focuses on 100% Pinot Grigio, soft pressing and stainless-steel fermentation to preserve fresh fruit and floral lift.",
    tastingNotes: [
      { title: "Pinot Grigio Fruit", description: "Melon, orange blossom, mango and pear give the wine a delicate aromatic profile." },
      { title: "Clean Italian White", description: "Silky texture, gentle acidity and a lightly spicy finish keep it refreshing." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled around 10 C in a white-wine glass." },
      { subheading: "Food", description: "Pair with grilled fish, asparagus risotto, fresh cheese, tandoori prawns or chicken malai tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled fish", "asparagus risotto", "fresh cheese", "tandoori prawns", "chicken malai tikka"] }],
    whyChoose: "iLauri Tavo is a polished Italian Pinot Grigio for crisp white-wine drinking and seafood pairings.",
    faqs: [
      { question: "What grape is iLauri Tavo made from?", answer: "iLauri Tavo is made from 100% Pinot Grigio." },
      { question: "Where is iLauri Tavo from?", answer: "The Tavo Pinot Grigio route is tied to Italy's Pinot Grigio delle Venezie DOC area." },
    ],
    finalVerdict: "iLauri Tavo is a fresh, floral Pinot Grigio for light meals, seafood and chilled white-wine pours.",
    metaTitle: "iLauri Tavo Pinot Grigio Guide | BevOry",
    metaDescription: "Explore iLauri Tavo Pinot Grigio notes, Veneto DOC style, pairings and city prices on BevOry.",
  },
};
