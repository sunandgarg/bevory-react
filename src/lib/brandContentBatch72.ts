import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_72 = [
  ["casanova", "Casanova", "Italy", "Red Wine", "pending-casanova"],
  ["casco", "Casco", "Mexico", "Tequila", "pending-casco"],
  ["casetta", "Casetta", "Italy", "White Wine", "pending-casetta"],
  ["castello", "Castello", "Italy", "Wine", "pending-castello"],
  ["castillo", "Castillo", "Spain", "Red Wine", "pending-castillo"],
  ["castle-rock", "Castle Rock", "Scotland", "Blended Scotch", "pending-castle-rock"],
  ["cavalier", "Cavalier", "Italy", "White Wine", "pending-cavalier"],
  ["cazanove", "Cazanove", "France", "Champagne", "pending-cazanove"],
  ["cdl", "CDL", "India", "Indian Whisky", "pending-cdl"],
  ["chabchhu", "Chabchhu", "Nepal", "Strong Lager", "pending-chabchhu"],
] as const;

export const BRAND_LOGOS_BATCH_72: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_72: Record<string, string[]> = {
  casanova: [
    "https://www.casanovadineri.wine/en/prodotti/our-wines/7/vini/72/index.php?a=2021&id_cat=7&id_prod=72&lg=en&p=prodotti",
    "https://www.bevory.in/agra/brand/casanova",
  ],
  casco: [
    "https://www.cascoviejo.com.mx/",
    "https://grandinastia.com/pdf/1596556134ficha%20Casco%20Viejo%20SILVER%202020.pdf",
    "https://www.bevory.in/agra/brand/casco",
  ],
  casetta: [
    "https://www.consorziogavi.com/en/gavi-docg-2/",
    "https://www.bevory.in/agra/brand/casetta",
  ],
  castello: [
    "https://castellodiama.com/en/wines/",
    "https://www.castellodiquerceto.it/home/",
    "https://www.bevory.in/agra/brand/castello",
  ],
  castillo: [
    "https://sanvalero.com/nuestros-vinos/",
    "https://www.claritycru.com/winery/castillo-de-monseran",
    "https://www.bevory.in/agra/brand/castillo",
  ],
  "castle-rock": [
    "https://stirlingdistillery.com/blogs/news/castle-rock-blended-malt-whisky",
    "https://www.bevory.in/agra/brand/castle-rock",
  ],
  cavalier: [
    "https://agricoltura.regione.campania.it/fattorie/scheda-307.html",
    "https://www.paulcaputo.wine/producer/tenuta-cavalier-pepe",
    "https://www.bevory.in/agra/brand/cavalier",
  ],
  cazanove: [
    "https://champagnedecazanove.com/en/",
    "https://maisons-champagne.com/fr/maison/charles-de-cazanove",
    "https://www.bevory.in/agra/brand/cazanove",
  ],
  cdl: [
    "https://www.livcheers.com/gurgaon/liquor/cdl-india-no-1-375ml",
    "https://www.bevory.in/agra/brand/cdl",
  ],
  chabchhu: [
    "https://www.livcheers.com/hyderabad/liquor/chabchhu-strong-beer-650ml",
    "https://www.bevory.in/agra/brand/chabchhu",
  ],
};

export const BRAND_CONTENT_BATCH_72: Record<string, BrandPublicContent> = {
  casanova: {
    description: "Casanova is listed on BevOry through Casanova di Neri IrROSSO, a Toscana IGT red wine from Montalcino in Tuscany. The wine is built around Sangiovese with Cabernet Sauvignon, giving it the fresher, earlier-drinking side of a Brunello-focused estate.",
    story: "Casanova di Neri works from Podere Fiesole near Montalcino, one of Italy's most closely watched Sangiovese zones. IrROSSO carries the estate style in a more approachable form, with manual harvest, steel-vat fermentation and a clear Tuscan red-fruit profile.",
    tastingNotes: [
      { title: "Tuscan Red Fruit", description: "Ruby colour, red berries, spice and a touch of violet make the first impression bright and direct." },
      { title: "Soft Tuscan Grip", description: "Sangiovese freshness meets rounded tannins, giving the wine enough structure for food without feeling heavy." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a red-wine glass and give the wine a short breather before dinner." },
      { subheading: "Food", description: "Pair with mutton rogan josh, lamb chops, tomato pasta, mushroom kebab or aged pecorino." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton rogan josh", "lamb chops", "tomato pasta", "mushroom kebab", "aged pecorino"] }],
    whyChoose: "Casanova gives Indian wine drinkers a direct route into modern Montalcino Sangiovese without jumping straight to Brunello pricing.",
    faqs: [
      { question: "What is Casanova di Neri IrROSSO?", answer: "It is a Toscana IGT red wine from Casanova di Neri in Montalcino, made with Sangiovese and Cabernet Sauvignon." },
      { question: "What food pairs with Casanova red wine?", answer: "Tuscan reds like this work well with lamb, mutton curries, tomato pasta, mushrooms and hard cheese." },
    ],
    finalVerdict: "Casanova is a polished Tuscan red for drinkers who want Sangiovese freshness with dinner-friendly tannins.",
    metaTitle: "Casanova Red Wine Guide | BevOry",
    metaDescription: "Explore Casanova di Neri IrROSSO notes, Tuscan food pairings, serving ideas and city prices on BevOry.",
  },
  casco: {
    description: "Casco is listed on BevOry through Casco Viejo Silver, a 100% agave tequila from Mexico. The Silver expression is clear, crisp and aimed at classic tequila serves rather than oak-aged sipping.",
    story: "Casco Viejo positions itself around pure agave tequila, with the Silver bottle carrying the clean, unaged side of the range. Its role is straightforward: a bright tequila base for lime, salt, citrus mixers and fast-built cocktails.",
    tastingNotes: [
      { title: "Agave And Citrus", description: "Fresh agave, lime peel, green herbs and pepper give the tequila its clean opening." },
      { title: "Silver Finish", description: "The finish is dry, light and snappy, made for Margaritas, Palomas and chilled shots." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled, with lime and salt, or build into a Margarita, Paloma or Tequila Soda." },
      { subheading: "Food", description: "Pair with fish tacos, tandoori prawns, chilli chicken, nachos or achari paneer tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fish tacos", "tandoori prawns", "chilli chicken", "nachos", "achari paneer tikka"] }],
    whyChoose: "Casco Viejo Silver is a clean 100% agave tequila for citrus cocktails and spicy snacks.",
    faqs: [
      { question: "What type of tequila is Casco Viejo Silver?", answer: "Casco Viejo Silver is a clear 100% agave tequila from Mexico." },
      { question: "Which cocktails suit Casco Viejo Silver?", answer: "Margaritas, Palomas and Tequila Soda suit its fresh agave and citrus-friendly profile." },
    ],
    finalVerdict: "Casco is the practical pick when you want a bright tequila for lime-led cocktails and snack plates.",
    metaTitle: "Casco Viejo Tequila Guide | BevOry",
    metaDescription: "Explore Casco Viejo Silver tequila notes, cocktail serves, food pairings and city prices on BevOry.",
  },
  casetta: {
    description: "Casetta is listed on BevOry through Gavi Casetta, a dry Italian white wine style tied to the Cortese grape of Piedmont. Gavi DOCG comes from the province of Alessandria, close to Liguria, where Cortese gives crisp, mineral white wines.",
    story: "Gavi's reputation rests on Cortese, a local white grape valued for freshness, delicate aromatics and a clean seafood-friendly finish. Casetta sits in that lane: pale, dry, citrus-led and more about precision than sweetness.",
    tastingNotes: [
      { title: "Cortese Freshness", description: "Lemon, green apple, pear and white flowers shape the bright white-wine profile." },
      { title: "Clean Mineral Finish", description: "A dry palate, gentle almond edge and crisp acidity keep the finish sharp." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a white-wine glass, ideally around 8-10°C." },
      { subheading: "Food", description: "Pair with tandoori fish, prawn rawa fry, grilled zucchini, lemon chicken or fresh goat cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "prawn rawa fry", "grilled zucchini", "lemon chicken", "fresh goat cheese"] }],
    whyChoose: "Casetta is a crisp Gavi-style white for drinkers who like dry Italian wines with seafood and grills.",
    faqs: [
      { question: "What grape is used in Gavi Casetta?", answer: "Gavi wines are made from Cortese, the white grape associated with the Gavi DOCG area of Piedmont." },
      { question: "How should Casetta Gavi be served?", answer: "Serve it chilled in a white-wine glass with seafood, light chicken dishes or fresh cheese." },
    ],
    finalVerdict: "Casetta is a clean, food-friendly Italian white for bright seafood meals and chilled aperitif pours.",
    metaTitle: "Casetta Gavi Wine Guide | BevOry",
    metaDescription: "Explore Casetta Gavi notes, Cortese style, seafood pairings and city prices on BevOry.",
  },
  castello: {
    description: "Castello on BevOry points toward Italian wine labels such as Castello di Ama, Castello di Querceto and Le Rime. The route spans Chianti Classico reds and fresh Toscana whites, so the core identity is Italian estate wine rather than one single grape.",
    story: "Castello di Ama is rooted in Chianti Classico, while Castello di Querceto works from the Greve in Chianti area of Tuscany. Le Rime sits in the lighter Toscana IGT space, showing how the Castello name can cover both structured Sangiovese reds and easy white blends.",
    tastingNotes: [
      { title: "Chianti Classico Reds", description: "Cherry, plum, violet, leather and firm acidity make the Sangiovese-led wines dinner-ready." },
      { title: "Toscana Whites", description: "Pear, citrus, white peach and a light floral note keep the Pinot Grigio-Chardonnay side crisp." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled; pour Chianti-style reds slightly cool and let them open in the glass." },
      { subheading: "Food", description: "Pair reds with lamb raan, mushroom risotto or pepperoni pizza; pair whites with tandoori fish or malai tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb raan", "mushroom risotto", "pepperoni pizza", "tandoori fish", "malai tikka"] }],
    whyChoose: "Castello is useful for shoppers comparing Italian reds with structure and lighter Tuscan white-wine options.",
    faqs: [
      { question: "Which Castello wines are listed on BevOry?", answer: "BevOry lists Castello di Ama, Castello di Querceto and Castello Le Rime-style Italian wine entries." },
      { question: "What food pairs with Castello wines?", answer: "Chianti-style reds suit lamb, mushrooms and pizza, while the whites work with fish, chicken and creamy paneer dishes." },
    ],
    finalVerdict: "Castello is a strong Italian wine path for drinkers moving between Chianti structure and crisp Tuscan whites.",
    metaTitle: "Castello Wine Guide | BevOry",
    metaDescription: "Explore Castello Italian wines, Chianti notes, Tuscan white styles, pairings and city prices on BevOry.",
  },
  castillo: {
    description: "Castillo is listed on BevOry through Spanish wines including Castillo de Monseran Garnacha and Castillo de Santiago. The Monseran label is linked with Bodegas San Valero in Carinena, a Garnacha-focused region in Aragon.",
    story: "Bodegas San Valero began as a Carinena cooperative in 1945, bringing together local growers in one of Spain's historic Garnacha areas. Castillo de Monseran keeps that regional story in an accessible, fruit-forward red wine format.",
    tastingNotes: [
      { title: "Garnacha Fruit", description: "Cherry, raspberry, red plum and a light floral lift give the wine its easy charm." },
      { title: "Soft Spanish Spice", description: "Rounded tannins, gentle pepper and a warm finish make it suitable for grills and roasts." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a red-wine glass; avoid over-chilling so the fruit stays open." },
      { subheading: "Food", description: "Pair with chicken tikka, chorizo, lamb seekh, rajma chawal or grilled aubergine." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "chorizo", "lamb seekh", "rajma chawal", "grilled aubergine"] }],
    whyChoose: "Castillo is a good route into Spanish Garnacha when you want ripe red fruit and soft tannins.",
    faqs: [
      { question: "What is Castillo de Monseran Garnacha?", answer: "It is a Spanish Garnacha wine associated with Carinena in Aragon and Bodegas San Valero." },
      { question: "How should Castillo red wine be served?", answer: "Serve it slightly cool with grilled meats, spicy Indian snacks, tomato dishes or roasted vegetables." },
    ],
    finalVerdict: "Castillo is an easy Spanish red-wine pick for fruit, spice and weeknight food pairing.",
    metaTitle: "Castillo Spanish Wine Guide | BevOry",
    metaDescription: "Explore Castillo Spanish wine notes, Garnacha style, food pairings and city prices on BevOry.",
  },
  "castle-rock": {
    description: "Castle Rock is listed on BevOry as a blended Scotch whisky, with local products including Castle Rock Blended Scotch Whisky. Stirling Distillery describes Castle Rock as a light blended malt Scotch, built for approachable, easy-drinking serves.",
    story: "The name points to Stirling's Castle Rock landmark, giving the whisky a central-Scotland identity rather than a single-malt estate story. Its character sits on malt sweetness, orchard fruit and gentle spice rather than heavy peat.",
    tastingNotes: [
      { title: "Light Malt", description: "Honeyed malt, apple, vanilla and soft cereal notes make the whisky easy to approach." },
      { title: "Gentle Spice", description: "Mild oak, pepper and a clean finish work well neat, on ice or in a highball." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Try neat in a tulip glass first, then use ice or soda if you prefer a longer drink." },
      { subheading: "Food", description: "Pair with chicken malai tikka, smoked almonds, grilled pork, mushroom toast or caramel pudding." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken malai tikka", "smoked almonds", "grilled pork", "mushroom toast", "caramel pudding"] }],
    whyChoose: "Castle Rock is a gentle Scotch choice for drinkers who prefer malt sweetness over heavy smoke.",
    faqs: [
      { question: "What type of whisky is Castle Rock?", answer: "Castle Rock is listed on BevOry as blended Scotch whisky, with a light blended malt style linked to Stirling Distillery." },
      { question: "Is Castle Rock smoky?", answer: "Its public style is lighter and malt-led, with fruit, vanilla and gentle spice rather than a heavily peated profile." },
    ],
    finalVerdict: "Castle Rock suits Scotch drinkers who want a softer malt profile for neat pours and highballs.",
    metaTitle: "Castle Rock Scotch Guide | BevOry",
    metaDescription: "Explore Castle Rock Scotch notes, highball serves, food pairings and city prices on BevOry.",
  },
  cavalier: {
    description: "Cavalier is listed on BevOry through Cavalier Pepe Beneventano Falanghina, an Italian white wine from Campania. Tenuta Cavalier Pepe works in Sant'Angelo all'Esca in Avellino, an area associated with Aglianico, Fiano, Greco and Falanghina.",
    story: "Campania's Falanghina wines are known for combining Mediterranean freshness with stone-fruit and citrus aromas. Cavalier Pepe's broader estate identity sits in Irpinia, where volcanic soils, hills and native grapes shape the region's white and red wines.",
    tastingNotes: [
      { title: "Falanghina Citrus", description: "Lemon, apple, pear and white peach give the wine a bright, clean profile." },
      { title: "Campania Texture", description: "Fresh acidity, light floral notes and a mineral finish make it useful with seafood and herbs." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a white-wine glass and keep the pour fresh rather than too cold." },
      { subheading: "Food", description: "Pair with tandoori prawns, lemon fish, pesto pasta, hara bhara kebab or burrata." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "lemon fish", "pesto pasta", "hara bhara kebab", "burrata"] }],
    whyChoose: "Cavalier is a smart Italian white for drinkers who like crisp citrus, herbs and seafood-friendly acidity.",
    faqs: [
      { question: "What is Cavalier Pepe Beneventano Falanghina?", answer: "It is an Italian white wine made from Falanghina, a native grape associated with Campania." },
      { question: "What should I pair with Cavalier Falanghina?", answer: "Seafood, lemony chicken, pesto, fresh cheese and herb-led Indian starters match its crisp style." },
    ],
    finalVerdict: "Cavalier is a lively Campania white that brings citrus freshness to seafood, herbs and grilled snacks.",
    metaTitle: "Cavalier Falanghina Guide | BevOry",
    metaDescription: "Explore Cavalier Pepe Falanghina notes, Campania style, food pairings and city prices on BevOry.",
  },
  cazanove: {
    description: "Cazanove is listed on BevOry through Charles de Cazanove Champagne and a Cazanove aperitivo entry. Champagne Charles de Cazanove is a French Champagne house founded in 1811 and now based in Reims.",
    story: "The house traces its name to Charles Gabriel de Cazanove and later came under the Rapeneau family in 2003. Its Champagne style is built around the region's classic sparkling-wine method, with freshness, mousse and pastry-led complexity at the centre.",
    tastingNotes: [
      { title: "Champagne Lift", description: "Green apple, citrus, brioche and fine bubbles give the Champagne side its lively structure." },
      { title: "Aperitivo Edge", description: "The aperitivo listing leans toward bittersweet citrus, herbs and a spritz-friendly profile." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Champagne well chilled in a flute or tulip glass; use the aperitivo over ice with soda or sparkling wine." },
      { subheading: "Food", description: "Pair with tandoori prawns, fried chicken, brie, truffle fries or strawberry tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "fried chicken", "brie", "truffle fries", "strawberry tart"] }],
    whyChoose: "Cazanove brings a classic Reims Champagne name into BevOry's sparkling and aperitivo discovery path.",
    faqs: [
      { question: "Where is Charles de Cazanove Champagne from?", answer: "Charles de Cazanove is a Champagne house from France, founded in 1811 and based in Reims." },
      { question: "How should Cazanove Champagne be served?", answer: "Serve it well chilled in a flute or tulip glass with seafood, fried snacks, soft cheese or light desserts." },
    ],
    finalVerdict: "Cazanove is for drinkers who want Champagne freshness, fine bubbles and food-friendly sparkle.",
    metaTitle: "Cazanove Champagne Guide | BevOry",
    metaDescription: "Explore Cazanove Champagne notes, aperitivo serves, food pairings and city prices on BevOry.",
  },
  cdl: {
    description: "CDL is listed on BevOry through CDL India No 1, an Indian whisky available in multiple bottle sizes in Haryana-linked listings. The brand sits in the value Indian blended whisky space, made for soda, water and simple party serves.",
    story: "CDL India No 1 appears in north-Indian price discovery journeys where compact bottle sizes matter as much as the 750 ml format. Its appeal is practical: familiar whisky sweetness, easy mixing and a price-led shelf position.",
    tastingNotes: [
      { title: "Indian Whisky Sweetness", description: "Grain, caramel, vanilla and mild oak notes keep the flavour direct and mixer-friendly." },
      { title: "Short Warm Finish", description: "A light spice finish works best with cold soda, water or ice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with ice, soda or water in a highball glass." },
      { subheading: "Food", description: "Pair with masala peanuts, chicken tikka, egg roll, tandoori mushroom or chilli potato." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["masala peanuts", "chicken tikka", "egg roll", "tandoori mushroom", "chilli potato"] }],
    whyChoose: "CDL India No 1 is a budget-friendly Indian whisky for straightforward highballs and spicy snacks.",
    faqs: [
      { question: "What is CDL India No 1?", answer: "CDL India No 1 is an Indian whisky listed on BevOry in 180 ml, 375 ml and 750 ml formats." },
      { question: "What mixer works with CDL whisky?", answer: "Cold soda, water and ice suit its simple caramel-and-spice whisky profile." },
    ],
    finalVerdict: "CDL is a practical Indian whisky for value-focused buyers who want an easy soda serve.",
    metaTitle: "CDL India No 1 Whisky Guide | BevOry",
    metaDescription: "Explore CDL India No 1 whisky notes, highball serves, snack pairings and city prices on BevOry.",
  },
  chabchhu: {
    description: "Chabchhu is listed on BevOry through Chabchhu Strong Beer, a Nepal strong lager sold in 650 ml format. Livcheers identifies it as a strong lager with a robust malt profile and warming finish.",
    story: "Chabchhu sits in the Himalayan strong-beer lane, where malt weight and chill factor matter more than craft complexity. The beer is built for cold service, salty snacks and larger-format sharing.",
    tastingNotes: [
      { title: "Strong Lager Malt", description: "Rich malt, grain sweetness and a fuller body give the beer its strong-lager character." },
      { title: "Cold Finish", description: "A noticeable warmth and light bitterness land best when the bottle is served very cold." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a lager glass or straight from a cold bottle." },
      { subheading: "Food", description: "Pair with wai wai sadeko, chicken momos, chilli pork, aloo sadeko or masala peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["wai wai sadeko", "chicken momos", "chilli pork", "aloo sadeko", "masala peanuts"] }],
    whyChoose: "Chabchhu is a robust Nepal strong lager for drinkers who want malt body and a cold, snack-friendly beer.",
    faqs: [
      { question: "Where is Chabchhu Strong Beer from?", answer: "Chabchhu Strong Beer is listed on Livcheers as a strong beer from Nepal." },
      { question: "How should Chabchhu be served?", answer: "Serve it very cold with salty, spicy snacks such as momos, chilli pork or masala peanuts." },
    ],
    finalVerdict: "Chabchhu is best treated as a cold, full-bodied strong lager for spicy snacks and casual sharing.",
    metaTitle: "Chabchhu Strong Beer Guide | BevOry",
    metaDescription: "Explore Chabchhu Strong Beer notes, Nepal lager style, snack pairings and city prices on BevOry.",
  },
};
