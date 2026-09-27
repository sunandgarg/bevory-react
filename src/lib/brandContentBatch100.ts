import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_100 = [
  ["lumo", "Lumo", "Italy", "White Wine", "pending-lumo"],
  ["luz-maria", "Luz Maria", "Chile", "Wine", "pending-luz-maria"],
  ["lynx", "Lynx", "United States", "White Wine", "pending-lynx"],
  ["magic", "Magic", "India", "Vodka", "pending-magic"],
  ["magic-moments-m2", "Magic Moments M2", "India", "Vodka", "pending-magic-moments-m2"],
  ["magpie", "Magpie", "Scotland", "Whisky", "pending-magpie"],
  ["maison-bel-air", "Maison Bel Air", "France", "Red Wine", "pending-maison-bel-air"],
  ["maison-du-sud", "Maison Du Sud", "France", "White Wine", "pending-maison-du-sud"],
  ["makers-delight", "Makers Delight", "India", "Whisky", "pending-makers-delight"],
  ["maltage", "Maltage", "India", "Whisky", "pending-maltage"],
] as const;

export const BRAND_LOGOS_BATCH_100: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_100: Record<string, string[]> = {
  lumo: [
    "https://www.grapex.com/national-portfolio/colterenzio/colterenzio-lumo-pinot-grigio/",
    "https://www.vivino.com/GB/en/colterenzio-schreckbichl-lumo-pinot-grigio/w/1407895",
    "https://www.bevory.in/agra/brand/lumo",
  ],
  "luz-maria": [
    "https://www.vivino.com/en/luz-maria-chardonnay/w/8636297",
    "https://www.vivino.com/es/luz-maria-merlot/w/4027228",
    "https://www.livcheers.com/lucknow/liquor/luz-maria-chardonnay-white-wine-750ml",
    "https://www.bevory.in/agra/brand/luz-maria",
  ],
  lynx: [
    "https://www.lynxwines.com/our-wines/lynx-chardonnay-barrel-aged/",
    "https://www.bevory.in/agra/brand/lynx",
  ],
  magic: [
    "https://radicokhaitan.com/wp-content/uploads/2025/06/PressRelease20062025.pdf",
    "https://radicokhaitan.com/wp-content/uploads/2022/11/RKL-Investor-Presentation-November-2022-v-Web.pdf",
    "https://www.bevory.in/agra/brand/magic",
  ],
  "magic-moments-m2": [
    "https://radicokhaitan.com/products/magic-moment-verve-3/",
    "https://radicokhaitan.com/wp-content/uploads/2025/06/PressRelease20062025.pdf",
    "https://www.bevory.in/agra/brand/magic-moments-m2",
  ],
  magpie: [
    "https://magpiescotchwhisky.com/",
    "https://spiritz.in/files/spiritz/media/files/2024/10/24/final-oct-24-a.pdf",
    "https://www.bevory.in/agra/brand/magpie",
  ],
  "maison-bel-air": [
    "https://www.vinsetmillesimes.com/en/margaux/127839-maison-bel-air-2016.html",
    "https://www.vivino.com/LU/de/maison-bel-air-margaux-margaux/w/6884179",
    "https://www.bevory.in/agra/brand/maison-bel-air",
  ],
  "maison-du-sud": [
    "https://www.tbs.go.tz/uploads/files/REGISTERED%20FOOD%20PRODUCTS%20UP%20TO%20SEPTEMBER%202025.pdf",
    "https://www.vivino.com/US/en/jean-jean-maison-du-sud-sauvignon-blanc/w/3465943?year=2018",
    "https://www.bevory.in/agra/brand/maison-du-sud",
  ],
  "makers-delight": [
    "https://www.livcheers.com/delhi/liquor/makers-delight-ultra-premium-why-750ml",
    "https://excise.cg.nic.in/Uploads/RSP_2024_2025.pdf",
    "https://www.bevory.in/agra/brand/makers-delight",
  ],
  maltage: [
    "https://www.midrafzc.com/product/maltage/",
    "https://drinksbuff.com/spirits/maltage-aged-malt-whisky/",
    "https://www.bevory.in/agra/brand/maltage",
  ],
};

export const BRAND_CONTENT_BATCH_100: Record<string, BrandPublicContent> = {
  lumo: {
    description: "Lumo is an Italian white wine label best known here through Colterenzio Lumo Pinot Grigio. The wine comes from northern Italian Pinot Grigio vineyards around Trentino-Alto Adige, Veneto and the Dolomite foothills.",
    story: "Colterenzio is a South Tyrol winegrowers' cooperative founded in 1960, with hundreds of member families farming high-altitude vineyards. Lumo Pinot Grigio is fermented in stainless steel and rested briefly on fine lees, keeping the wine crisp and aromatic.",
    tastingNotes: [
      { title: "Pinot Grigio", description: "Citrus, white peach, green apple and a light minty lift give the wine a bright nose." },
      { title: "Alpine Freshness", description: "Clean acidity, gentle stone fruit and crisp minerality carry the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled at 8-10C in a white-wine glass." },
      { subheading: "Food", description: "Pair with grilled fish, mushroom crostini, pesto pasta, tandoori prawns or lemon paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled fish", "mushroom crostini", "pesto pasta", "tandoori prawns", "lemon paneer"] }],
    whyChoose: "Lumo is a clean northern Italian Pinot Grigio for drinkers who want citrus, minerality and food-friendly freshness.",
    faqs: [
      { question: "What grape is Lumo made from?", answer: "Lumo is linked with Pinot Grigio from northern Italy." },
      { question: "What food suits Lumo Pinot Grigio?", answer: "Seafood, mushrooms, pesto, light paneer dishes and citrus-led starters work well." },
    ],
    finalVerdict: "Lumo is a bright Pinot Grigio for chilled aperitif pours and lighter Indian or Italian meals.",
    metaTitle: "Lumo Pinot Grigio Guide | BevOry",
    metaDescription: "Explore Lumo Pinot Grigio notes, Colterenzio context, food pairings and city prices on BevOry.",
  },
  "luz-maria": {
    description: "Luz Maria is a Chilean wine label from the Central Valley, with Chardonnay and Merlot as the main BevOry bottles. The range gives Indian shoppers a familiar white-and-red pairing from one of Chile's broadest wine regions.",
    story: "Chile's Central Valley is known for reliable varietal wines, with Chardonnay, Merlot, Cabernet Sauvignon and Carmenere widely planted. Luz Maria keeps that identity simple: fruit-forward wines built around clear grape names.",
    tastingNotes: [
      { title: "Chardonnay", description: "Pear, green apple, honeydew melon, citrus blossom and a light vanilla note shape the white." },
      { title: "Merlot", description: "Plum, red cherry, soft tannins and gentle herbal spice define the red." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Chardonnay chilled and Merlot slightly cool in standard wine glasses." },
      { subheading: "Food", description: "Pair Chardonnay with butter garlic prawns; match Merlot with lamb kebabs, roast chicken or mushroom tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["butter garlic prawns", "lamb kebabs", "roast chicken", "mushroom tikka", "aged cheddar"] }],
    whyChoose: "Luz Maria is an easy Chilean choice when you want straightforward Chardonnay and Merlot styles.",
    faqs: [
      { question: "Where is Luz Maria wine from?", answer: "Luz Maria is associated with Chile's Central Valley." },
      { question: "Which Luz Maria wines are on BevOry?", answer: "The key bottles are Luz Maria Chardonnay White Wine and Luz Maria Merlot Red Wine." },
    ],
    finalVerdict: "Luz Maria is a practical Chilean wine range for casual dinners and clear varietal flavour.",
    metaTitle: "Luz Maria Wine Guide | BevOry",
    metaDescription: "Explore Luz Maria Chardonnay and Merlot notes, Chilean style, pairings and city prices on BevOry.",
  },
  lynx: {
    description: "Lynx is a California Chardonnay label with a ripe, oak-influenced style. The wine is associated with House of Big Wines and a fuller Chardonnay profile.",
    story: "Lynx Chardonnay is presented as a California wine with American oak barrel character. The label focuses on a fuller, buttery Chardonnay profile rather than a lean unoaked white.",
    tastingNotes: [
      { title: "Barrel-Aged Chardonnay", description: "Tropical fruit, yellow apple, citrus and vanilla give the wine a ripe opening." },
      { title: "Buttery Texture", description: "Macadamia, oak spice and a rounded mouthfeel make the finish fuller and richer." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve lightly chilled, not ice cold, so the oak and fruit can show." },
      { subheading: "Food", description: "Pair with butter chicken, grilled salmon, malai tikka, creamy pasta or roasted corn." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["butter chicken", "grilled salmon", "malai tikka", "creamy pasta", "roasted corn"] }],
    whyChoose: "Lynx suits drinkers who prefer a richer Chardonnay with oak, vanilla and tropical fruit.",
    faqs: [
      { question: "What style is Lynx Chardonnay?", answer: "It is a California-style Chardonnay with oak influence, ripe fruit and buttery texture." },
      { question: "What food suits Lynx Chardonnay?", answer: "Creamy chicken, grilled fish, malai tikka and rich vegetarian dishes pair well." },
    ],
    finalVerdict: "Lynx Chardonnay is a fuller white wine for creamy dishes and oak-friendly palates.",
    metaTitle: "Lynx Chardonnay Guide | BevOry",
    metaDescription: "Explore Lynx Chardonnay notes, California style, food pairings and city prices on BevOry.",
  },
  magic: {
    description: "Magic is part of the Magic Moments vodka family from Radico Khaitan. The range includes plain vodka and flavoured variants such as cranberry, orange and Dazzle-style bottles.",
    story: "Radico Khaitan launched Magic Moments in the mid-2000s and built it into one of India's most visible premium vodka families. The portfolio now spans plain vodka, Remix flavours, Verve, Dazzle and ready-to-drink vodka cocktails.",
    tastingNotes: [
      { title: "Plain Vodka", description: "Clean grain spirit, soft sweetness and a crisp finish make it easy to mix." },
      { title: "Flavoured Range", description: "Orange, cranberry, green apple and other fruit-led variants bring bright, sweet cocktail cues." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled with soda, tonic, cranberry juice, lemonade or fresh lime." },
      { subheading: "Food", description: "Pair with chilli paneer, chicken momos, fried prawns, nachos or masala fries." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli paneer", "chicken momos", "fried prawns", "nachos", "masala fries"] }],
    whyChoose: "Magic is a broad Magic Moments vodka shelf for quick highballs, flavoured mixers and party serves.",
    faqs: [
      { question: "Who makes Magic Moments vodka?", answer: "Magic Moments is made by Radico Khaitan." },
      { question: "What Magic variants are on BevOry?", answer: "The shelf includes plain Magic Moment Vodka plus flavoured bottles such as cranberry and orange." },
    ],
    finalVerdict: "Magic is a flexible Indian vodka choice for chilled mixers and fruit-forward drinks.",
    metaTitle: "Magic Vodka Guide | BevOry",
    metaDescription: "Explore Magic Moments vodka notes, Radico context, mixers, food pairings and city prices on BevOry.",
  },
  "magic-moments-m2": {
    description: "Magic Moments M2 is a premium vodka and cocktail selection from Radico Khaitan's Magic Moments family. The range includes Verve, Dazzle, Remix flavours and low-alcohol vodka cocktails.",
    story: "Magic Moments Verve uses a multi-stage filtration approach, including silver and platinum filtration in the brand's premium positioning. Radico Khaitan has expanded the family through flavoured vodkas, RTD cocktails and India-inspired flavour launches.",
    tastingNotes: [
      { title: "Verve And Dazzle", description: "Clean grain spirit, soft vanilla, citrus peel and smooth sweetness define the premium vodka side." },
      { title: "Remix And Cocktails", description: "Grapefruit, watermelon, mojito mint, cranberry and tropical fruit notes shape the flavoured bottles." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled neat, with soda, or in simple cocktails with lime, mint and fruit mixers." },
      { subheading: "Food", description: "Pair with peri-peri fries, tandoori prawns, kebab platters, chilli garlic noodles or cheese toast." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["peri-peri fries", "tandoori prawns", "kebab platters", "chilli garlic noodles", "cheese toast"] }],
    whyChoose: "Magic Moments M2 is for drinkers who want a premium, flavour-heavy vodka range with cocktail-ready options.",
    faqs: [
      { question: "What is Magic Moments M2?", answer: "It sits within the wider Magic Moments vodka family, including Verve, Dazzle, Remix and cocktail bottles." },
      { question: "How should Magic Moments M2 be served?", answer: "Serve chilled, with soda, or mixed into fruit and lime-led cocktails." },
    ],
    finalVerdict: "Magic Moments M2 is the more premium, flavour-led side of the Magic Moments vodka shelf.",
    metaTitle: "Magic Moments M2 Vodka Guide | BevOry",
    metaDescription: "Explore Magic Moments M2 notes, Verve and Dazzle styles, mixers, pairings and city prices.",
  },
  magpie: {
    description: "Magpie is a blended Scotch whisky brand led by Magpie Gold Blended Scotch Whisky. The brand presents itself as a Scotch blend made from malt and grain whiskies with Highland sourcing cues.",
    story: "Magpie Gold is positioned for South Asian drinkers, with the brand describing a blend shaped through trial with a master blender. The whisky is matured in oak barrels and sold in India in a 1 litre format.",
    tastingNotes: [
      { title: "Gold Blend", description: "Vanilla, oak, cereal malt and light dried fruit give the whisky a soft amber profile." },
      { title: "Rounded Finish", description: "Gentle spice, caramel and grain sweetness keep the finish smooth and mixer-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, with ice, soda, ginger ale or as a whisky highball." },
      { subheading: "Food", description: "Pair with tandoori chicken, lamb seekh, smoked cheese, salted almonds or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "lamb seekh", "smoked cheese", "salted almonds", "dark chocolate"] }],
    whyChoose: "Magpie Gold is a smooth blended Scotch option for drinkers who like oak, vanilla and easy highballs.",
    faqs: [
      { question: "What is Magpie Gold?", answer: "Magpie Gold is a blended Scotch whisky available in a 1 litre format." },
      { question: "How should Magpie whisky be served?", answer: "It works neat, on ice, with soda, or in a chilled highball." },
    ],
    finalVerdict: "Magpie Gold is a mellow blended Scotch for casual pours and savoury snacks.",
    metaTitle: "Magpie Scotch Guide | BevOry",
    metaDescription: "Explore Magpie Gold Scotch notes, serving ideas, food pairings and city prices on BevOry.",
  },
  "maison-bel-air": {
    description: "Maison Bel Air is a French red wine label represented by Maison Bel Air Margaux 2016. The bottle comes from Margaux on Bordeaux's Left Bank, an appellation known for Cabernet-led red blends.",
    story: "Margaux sits in the Medoc on Bordeaux's Left Bank, where gravelly soils help produce structured, perfumed red wines. Maison Bel Air Margaux 2016 belongs to that classic Bordeaux dinner-wine tradition.",
    tastingNotes: [
      { title: "Margaux Red", description: "Blackcurrant, red plum, violet and cedar give the wine a polished Bordeaux aroma." },
      { title: "Silky Structure", description: "Fine tannins, graphite, oak spice and a long dry finish make it suited to rich food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a large red-wine glass; decant if the bottle feels closed." },
      { subheading: "Food", description: "Pair with galouti kebabs, lamb chops, mushroom risotto, roast duck or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "lamb chops", "mushroom risotto", "roast duck", "aged cheddar"] }],
    whyChoose: "Maison Bel Air is a Margaux pick for drinkers who want elegant Bordeaux fruit and firm dinner-table structure.",
    faqs: [
      { question: "Where is Maison Bel Air Margaux from?", answer: "It is from Margaux, an appellation on Bordeaux's Left Bank in France." },
      { question: "What food suits Maison Bel Air Margaux?", answer: "Lamb, kebabs, duck, mushrooms and aged cheese suit its tannic red-wine profile." },
    ],
    finalVerdict: "Maison Bel Air Margaux is a classic Bordeaux red for richer meals and slower pours.",
    metaTitle: "Maison Bel Air Margaux Guide | BevOry",
    metaDescription: "Explore Maison Bel Air Margaux notes, Bordeaux style, food pairings and city prices on BevOry.",
  },
  "maison-du-sud": {
    description: "Maison Du Sud is a French white wine label represented by Maison Du Sud Sauvignon Blanc. The brand is connected with Maison Jeanjean in Saint-Felix-de-Lodez, France.",
    story: "Maison Du Sud fits the southern French table-wine style: fresh fruit, clear grape identity and simple chilled serving. Its Sauvignon Blanc listing gives the range a crisp white-wine profile for seafood and vegetarian dishes.",
    tastingNotes: [
      { title: "Sauvignon Blanc", description: "Lime, grapefruit, green apple and light herb notes give the wine a zesty opening." },
      { title: "Fresh Finish", description: "Crisp acidity and a dry, clean finish keep it refreshing and food-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled at 8-10C in a white-wine glass." },
      { subheading: "Food", description: "Pair with tandoori fish, goat cheese, cucumber salad, prawn skewers or palak paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "goat cheese", "cucumber salad", "prawn skewers", "palak paneer"] }],
    whyChoose: "Maison Du Sud is a crisp French Sauvignon Blanc choice for bright, light meals.",
    faqs: [
      { question: "What wine is Maison Du Sud known for on BevOry?", answer: "Maison Du Sud Sauvignon Blanc is the key bottle shoppers will see." },
      { question: "How should Maison Du Sud Sauvignon Blanc be served?", answer: "Serve it well chilled with seafood, salads, goat cheese or fresh vegetarian dishes." },
    ],
    finalVerdict: "Maison Du Sud Sauvignon Blanc is a clean, zesty French white for chilled everyday pours.",
    metaTitle: "Maison Du Sud Sauvignon Guide | BevOry",
    metaDescription: "Explore Maison Du Sud Sauvignon Blanc notes, French style, pairings and city prices on BevOry.",
  },
  "makers-delight": {
    description: "Makers Delight is an Indian whisky label led by Makers Delight Ultra Premium Whisky. It sits in the made-in-India whisky shelf with a smooth, mixer-friendly profile.",
    story: "Makers Delight is linked with Continental Distilleries in Indian beverage documentation. Its Ultra Premium Whisky positioning points to a smooth, accessible whisky made for mixers and casual sipping.",
    tastingNotes: [
      { title: "Indian Whisky", description: "Caramel, ripe fruit, vanilla and light grain sweetness shape the aroma." },
      { title: "Oak Spice", description: "Gentle oak, warm spice and a rounded finish make it suitable for soda or ice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, water, cola, ginger ale or one large ice cube." },
      { subheading: "Food", description: "Pair with chicken tikka, mutton seekh, masala peanuts, paneer tikka or chilli chicken." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "mutton seekh", "masala peanuts", "paneer tikka", "chilli chicken"] }],
    whyChoose: "Makers Delight is a practical Indian whisky for smooth mixers and spicy food pairings.",
    faqs: [
      { question: "What is Makers Delight?", answer: "Makers Delight is an Indian whisky label led by Makers Delight Ultra Premium Whisky." },
      { question: "How should Makers Delight be served?", answer: "Serve it with soda, water, cola, ginger ale or ice." },
    ],
    finalVerdict: "Makers Delight is an easy Indian whisky for relaxed highballs and savoury snacks.",
    metaTitle: "Makers Delight Whisky Guide | BevOry",
    metaDescription: "Explore Makers Delight Ultra Premium Whisky notes, serves, pairings and city prices on BevOry.",
  },
  maltage: {
    description: "Maltage is an aged malt whisky label led by Maltage Aged Malt Whisky. The brand highlights copper pot still malt spirit, premium grain spirit and double-charred wood influence.",
    story: "Maltage presents its whisky around port-pipe casking, double barrel charring and malt-driven packaging. In India, it appears across multiple bottle formats, from smaller serves to 1 litre listings.",
    tastingNotes: [
      { title: "Aged Malt Style", description: "Toasted wood, vanilla, malt biscuit and gentle dried fruit shape the core profile." },
      { title: "Charred Finish", description: "Double-charred oak adds spice, caramel and a smoky-toast edge." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, with a splash of water, over ice, or as a soda highball." },
      { subheading: "Food", description: "Pair with pepper chicken, grilled lamb, smoked paneer, roasted cashews or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pepper chicken", "grilled lamb", "smoked paneer", "roasted cashews", "dark chocolate"] }],
    whyChoose: "Maltage is a malt-forward Indian whisky for drinkers who enjoy toasted oak and vanilla-rich serves.",
    faqs: [
      { question: "What is Maltage Aged Malt Whisky?", answer: "It is an aged malt whisky label featuring malt spirit, grain spirit and charred wood influence." },
      { question: "How should Maltage be served?", answer: "Serve it neat, with water, over ice, or with soda." },
    ],
    finalVerdict: "Maltage is a toasted, malt-led whisky for simple sipping and bold Indian snacks.",
    metaTitle: "Maltage Whisky Guide | BevOry",
    metaDescription: "Explore Maltage Aged Malt Whisky notes, charred wood style, pairings and city prices on BevOry.",
  },
};
