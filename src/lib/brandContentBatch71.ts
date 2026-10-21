import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_71 = [
  ["canvas-special", "Canvas Special", "India", "Vodka", "pending-canvas-special"],
  ["cape-elephant", "Cape Elephant", "South Africa", "Wine", "pending-cape-elephant"],
  ["capitel", "Capitel", "Italy", "White Wine", "pending-capitel"],
  ["captains-select", "Captains Select", "India", "Indian Whisky", "pending-captains-select"],
  ["caracteres", "Caracteres", "France", "Red Wine", "pending-caracteres"],
  ["caribay", "Caribay", "India", "Rum", "pending-caribay"],
  ["casa", "Casa", "Spain", "Wine", "pending-casa"],
  ["casa-portuguesa", "Casa Portuguesa", "Portugal", "Red Wine", "pending-casa-portuguesa"],
  ["casa-vino", "Casa Vino", "Italy", "Red Wine", "pending-casa-vino"],
  ["casablanca", "Casablanca", "India", "Sparkling Wine", "pending-casablanca"],
] as const;

export const BRAND_LOGOS_BATCH_71: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_71: Record<string, string[]> = {
  "canvas-special": [
    "https://www.excise.cg.nic.in/csmcl/PriceList",
    "https://liquorsai.com/liquor/canvas-special-vodka",
    "https://www.bevory.in/agra/brand/canvas-special",
  ],
  "cape-elephant": [
    "https://capetradeportal.com/product/cape-elephant-pinotage/",
    "https://lutzvillevineyards.com/",
    "https://www.bevory.in/agra/brand/cape-elephant",
  ],
  capitel: [
    "https://tedeschiwines.com/en/bottiglia/capitel-tenda/",
    "https://www.bevory.in/agra/brand/capitel",
  ],
  "captains-select": [
    "https://beveragetradenetwork.com/en/brands/whisky-5/india-105/captains-select-whisky-8173.htm",
    "https://www.livcheers.com/hyderabad/liquor/captains-select-whisky-750ml",
    "https://www.bevory.in/agra/brand/captains-select",
  ],
  caracteres: [
    "https://collection.andrelurton.com/A418KE/get/tech-sheet/5885PY4JH0",
    "https://www.bevory.in/agra/brand/caracteres",
  ],
  caribay: [
    "https://www.livcheers.com/listing/liquor/caribay-xxx-rum-750ml",
    "https://rum.cz/galery/sas/in/narang/index-en.htm",
    "https://www.bevory.in/agra/brand/caribay",
  ],
  casa: [
    "https://casaelunico.com/",
    "https://www.vivino.com/es/casa-saulita-cabernet-sauvignon/w/7405258",
    "https://www.bevory.in/agra/brand/casa",
  ],
  "casa-portuguesa": [
    "https://www.jmf.pt/index.php?id=735",
    "https://www.bevory.in/agra/brand/casa-portuguesa",
  ],
  "casa-vino": [
    "https://www.drinkarto.com/product-page/casa-vino-rosso",
    "https://www.bevory.in/agra/brand/casa-vino",
  ],
  casablanca: [
    "https://gooddropwine.com/product/casablanca-vino-spumante/",
    "https://www.livcheers.com/liquor/casablanca-sparkling-frizzano-750ml",
    "https://www.bevory.in/agra/brand/casablanca",
  ],
};

export const BRAND_CONTENT_BATCH_71: Record<string, BrandPublicContent> = {
  "canvas-special": {
    description: "Canvas Special is an Indian vodka label listed on BevOry through Canvas Special Vodka in 180 ml and 750 ml formats. The style is clean, neutral and mixer-friendly, aimed at chilled serves rather than heavy oak or botanical flavour.",
    story: "Canvas Special appears in Indian state retail catalogues as a vodka brand, which keeps the public facts narrow and practical. Its strongest role is a simple vodka base for soda, lime, juice and spice-friendly party serves.",
    tastingNotes: [
      { title: "Clean Vodka Core", description: "Neutral grain spirit, light citrus and a crisp finish make it easy to mix." },
      { title: "Mixer Ready", description: "The profile stays light enough for tonic, soda, orange juice or ginger beer." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled with soda and lime, or build into a Moscow Mule, Screwdriver or Vodka Tonic." },
      { subheading: "Food", description: "Pair with chilli paneer, tandoori momos, masala fries, fried prawns or salted peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli paneer", "tandoori momos", "masala fries", "fried prawns", "salted peanuts"] }],
    whyChoose: "Canvas Special is a straightforward Indian vodka for clean highballs and easy citrus cocktails.",
    faqs: [
      { question: "What is Canvas Special listed as on BevOry?", answer: "Canvas Special is listed as vodka, with Canvas Special Vodka available in 180 ml and 750 ml formats." },
      { question: "Which mixers suit Canvas Special Vodka?", answer: "Soda, tonic, lime, orange juice and ginger beer suit its clean vodka style." },
    ],
    finalVerdict: "Canvas Special is best for drinkers who want a simple chilled vodka base for mixers and snack-led evenings.",
    metaTitle: "Canvas Special Vodka Guide | BevOry",
    metaDescription: "Explore Canvas Special Vodka notes, mixer ideas, snack pairings and city prices on BevOry.",
  },
  "cape-elephant": {
    description: "Cape Elephant is a South African wine label connected with Lutzville Vineyards on the Western Cape's West Coast. BevOry lists Cape Elephant Chenin Blanc and Cabernet Sauvignon alongside short-format Cape wine entries.",
    story: "Lutzville's vineyards sit close to Atlantic influence, where cool morning breezes help balance sunny growing days. The Cape Elephant range gives Indian shoppers easy access to Chenin Blanc, Cabernet Sauvignon and Shiraz-led South African table wines.",
    tastingNotes: [
      { title: "Chenin Blanc", description: "Apple, pear, citrus and a soft tropical edge keep the white fresh and approachable." },
      { title: "Cape Reds", description: "Cabernet and Shiraz styles bring black fruit, plum, gentle spice and soft tannins." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill Chenin Blanc before serving; pour reds slightly cool in a regular red-wine glass." },
      { subheading: "Food", description: "Pair Chenin with grilled prawns or paneer tikka; match reds with lamb chops, seekh kebab or peri-peri chicken." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled prawns", "paneer tikka", "lamb chops", "seekh kebab", "peri-peri chicken"] }],
    whyChoose: "Cape Elephant is a useful South African wine pick for fruit-forward whites and soft, food-friendly reds.",
    faqs: [
      { question: "Where does Cape Elephant wine come from?", answer: "Cape Elephant is linked with Lutzville Vineyards in South Africa's Western Cape." },
      { question: "Which Cape Elephant wines are listed on BevOry?", answer: "BevOry lists Cape Elephant Chenin Blanc, Cabernet Sauvignon and related Cape wine formats." },
    ],
    finalVerdict: "Cape Elephant suits drinkers looking for easy South African wines that handle Indian grills and coastal dishes.",
    metaTitle: "Cape Elephant Wine Guide | BevOry",
    metaDescription: "Explore Cape Elephant wine notes, South African styles, food pairings and city prices on BevOry.",
  },
  capitel: {
    description: "Capitel is listed on BevOry through Capitel Tenda Soave, a Soave DOC Classico white wine from Tedeschi in Veneto, Italy. The wine comes from late-harvested grapes grown in the hills of the Soave Classico zone.",
    story: "Tedeschi ages Capitel Tenda in stainless steel vats before a further bottle-resting period, preserving freshness while adding a soft almond note. The label sits in the Garganega-led Soave tradition, built for fish, white meat and fresh cheese.",
    tastingNotes: [
      { title: "Soave Freshness", description: "Citrus, white flowers, pear and orchard fruit give the wine a clean opening." },
      { title: "Almond Finish", description: "A marked almond note and gentle texture bring depth without heavy oak." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a white-wine glass, around 9-11°C." },
      { subheading: "Food", description: "Pair with tandoori fish, malai paneer tikka, grilled chicken, soft cheese or prawn pasta." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "malai paneer tikka", "grilled chicken", "soft cheese", "prawn pasta"] }],
    whyChoose: "Capitel Tenda is a precise Soave for drinkers who like fresh Italian whites with an almond-edged finish.",
    faqs: [
      { question: "What is Capitel Tenda?", answer: "Capitel Tenda is Tedeschi's Soave DOC Classico white wine from Veneto, Italy." },
      { question: "What food pairs with Capitel Tenda Soave?", answer: "Fish, white meat, soft cheese, malai paneer tikka and prawn pasta pair well with its fresh, almond-toned style." },
    ],
    finalVerdict: "Capitel is a clean Italian white-wine choice when freshness, texture and food flexibility matter.",
    metaTitle: "Capitel Tenda Soave Guide | BevOry",
    metaDescription: "Explore Capitel Tenda Soave notes, Tedeschi style, food pairings and city prices on BevOry.",
  },
  "captains-select": {
    description: "Captains Select is an Indian whisky label listed on BevOry through Captains Select Whisky in 750 ml format. Beverage Trade Network lists it as an Indian whisky associated with Octaga Green Power & Sugar Co. Ltd.",
    story: "The brand sits in India's blended-whisky market, where grain spirit, malt character and mixer fit matter to most shoppers. Its public profile is practical: a bottle for soda, water, ice and snack-heavy gatherings.",
    tastingNotes: [
      { title: "Grain Whisky Style", description: "Cereal sweetness, light vanilla, mild spice and a touch of smoke shape the pour." },
      { title: "Highball Finish", description: "The finish stays warm and simple enough for soda or water." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with ice, water or cold soda in a highball glass." },
      { subheading: "Food", description: "Pair with chicken tikka, mutton seekh, masala peanuts, tandoori mushroom or egg bhurji toast." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "mutton seekh", "masala peanuts", "tandoori mushroom", "egg bhurji toast"] }],
    whyChoose: "Captains Select is a no-fuss Indian whisky for highballs and savoury bar snacks.",
    faqs: [
      { question: "What is Captains Select?", answer: "Captains Select is listed on BevOry as a made-in-India whisky." },
      { question: "How should Captains Select Whisky be served?", answer: "Serve it over ice, with water, or as a cold soda highball." },
    ],
    finalVerdict: "Captains Select works best as an Indian whisky highball with bold, spicy food.",
    metaTitle: "Captains Select Whisky Guide | BevOry",
    metaDescription: "Explore Captains Select Whisky notes, highball serves, snack pairings and city prices on BevOry.",
  },
  caracteres: {
    description: "Caracteres is listed on BevOry through Caracteres M Margaux AOC, a Bordeaux red from the Margaux appellation in France. The bottle sits in the Bordeaux-blend space, where Cabernet Sauvignon and Merlot-led structure define the style.",
    story: "Margaux is one of the classic communes of the Medoc, known for perfumed red wines with polished tannins. Caracteres M gives BevOry shoppers a way into that appellation without treating it like a casual table red.",
    tastingNotes: [
      { title: "Margaux Fruit", description: "Blackcurrant, plum, violet and cedar sit at the centre of the red-fruit profile." },
      { title: "Bordeaux Structure", description: "Fine tannins, fresh acidity and savoury oak notes make it a food-led wine." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve at 16-18°C in a red-wine glass and let it breathe before dinner." },
      { subheading: "Food", description: "Pair with lamb chops, galouti kebab, roast mushroom, aged cheddar or mutton rogan josh." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb chops", "galouti kebab", "roast mushroom", "aged cheddar", "mutton rogan josh"] }],
    whyChoose: "Caracteres is for drinkers who want a structured Margaux-style Bordeaux red with dinner.",
    faqs: [
      { question: "What is Caracteres M Margaux AOC?", answer: "It is a French red wine from the Margaux AOC in Bordeaux." },
      { question: "What food pairs with Caracteres?", answer: "Lamb, kebabs, mushrooms, aged cheese and slow-cooked mutton suit its tannin and savoury depth." },
    ],
    finalVerdict: "Caracteres is a serious red-wine choice for slow meals, red meat and Bordeaux drinkers.",
    metaTitle: "Caracteres Margaux Wine Guide | BevOry",
    metaDescription: "Explore Caracteres M Margaux AOC notes, serving style, pairings and city prices on BevOry.",
  },
  caribay: {
    description: "Caribay is an Indian rum label listed on BevOry through Caribay XXX Rum in 750 ml format. Retail listings describe the bottle as a dark rum, while older Indian rum label archives connect Caribay Deluxe XXX Rum with Narang Distilleries in Uttar Pradesh.",
    story: "Caribay belongs to the Indian XXX rum tradition, a style commonly poured with cola, soda or lime-led mixers. Its identity is built around dark-rum warmth, caramel sweetness and easy snack pairing.",
    tastingNotes: [
      { title: "Dark Rum Notes", description: "Caramel, vanilla, oak, toffee and warm spice give the rum its rounded profile." },
      { title: "Sweet Finish", description: "A mellow finish works well with cola, lime and salty snacks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over ice with cola and lime, or use it in a simple dark-rum punch." },
      { subheading: "Food", description: "Pair with Koliwada prawns, chilli paneer, barbecue wings, pork vindaloo or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["Koliwada prawns", "chilli paneer", "barbecue wings", "pork vindaloo", "dark chocolate"] }],
    whyChoose: "Caribay is a dark Indian rum for cola serves, lime highballs and spicy food.",
    faqs: [
      { question: "What type of rum is Caribay?", answer: "Caribay is listed on BevOry as XXX rum and appears as a dark rum in market listings." },
      { question: "What mixer suits Caribay XXX Rum?", answer: "Cola, soda, lime and simple rum punch builds suit its caramel and spice profile." },
    ],
    finalVerdict: "Caribay is a casual dark-rum pick for mixers, fried snacks and bold Indian flavours.",
    metaTitle: "Caribay XXX Rum Guide | BevOry",
    metaDescription: "Explore Caribay XXX Rum notes, mixer ideas, Indian food pairings and city prices on BevOry.",
  },
  casa: {
    description: "Casa is a BevOry wine page covering Casa Saulita Cabernet Sauvignon, Casa El Unico and Casa Unico Chardonnay. The listing spans red and white wines, with Spanish Calatayud and Chilean Central Valley cues across the bottles.",
    story: "Casa El Unico is tied to Bodegas Valdepablo in Calatayud, Spain, with a family estate story dating to 1928. Casa Saulita brings Cabernet Sauvignon into the same shopper journey, so the page is best read as a route into Casa-labelled everyday wines.",
    tastingNotes: [
      { title: "Casa El Unico", description: "Tempranillo brings cherry, leather and soft tannin, while Chardonnay leans peachy and tropical." },
      { title: "Casa Saulita", description: "Cabernet Sauvignon gives raspberry, plum, chocolate and gentle spice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill Chardonnay to 10-12°C and serve reds slightly cool in a red-wine glass." },
      { subheading: "Food", description: "Pair whites with butter chicken or paneer tikka; match reds with kebabs, roast vegetables or lamb." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["butter chicken", "paneer tikka", "seekh kebab", "roast vegetables", "grilled lamb"] }],
    whyChoose: "Casa is useful for shoppers comparing approachable red and white wines under familiar Casa labels.",
    faqs: [
      { question: "Which Casa wines are listed on BevOry?", answer: "BevOry lists Casa Saulita Cabernet Sauvignon, Casa El Unico and Casa Unico Chardonnay." },
      { question: "What food pairs with Casa wines?", answer: "Chardonnay suits creamy dishes and paneer, while the reds pair well with kebabs, lamb and roast vegetables." },
    ],
    finalVerdict: "Casa works as an easy wine page for weeknight reds, chilled whites and food-friendly pours.",
    metaTitle: "Casa Wine Guide | BevOry",
    metaDescription: "Explore Casa red and white wines, tasting notes, serving ideas, pairings and city prices on BevOry.",
  },
  "casa-portuguesa": {
    description: "Casa Portuguesa is a Portuguese red wine from José Maria da Fonseca, listed on BevOry in 750 ml format. The official Casa Portuguesa red comes from Peninsula de Setubal and uses Castelao with Trincadeira.",
    story: "José Maria da Fonseca is one of Portugal's established wine houses, with Domingos Soares Franco leading a technical winemaking team. Casa Portuguesa keeps the style youthful, fresh and soft rather than heavily oaked.",
    tastingNotes: [
      { title: "Portuguese Red Fruit", description: "Red fruit, spice and a fresh aroma profile lead the wine." },
      { title: "Soft Tannins", description: "The palate is fresh, medium in length and supported by soft but present tannins." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool, around 14-16°C, in a red-wine glass." },
      { subheading: "Food", description: "Pair with roast chicken, pork vindaloo, seekh kebab, mushroom pulao or semi-hard cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["roast chicken", "pork vindaloo", "seekh kebab", "mushroom pulao", "semi-hard cheese"] }],
    whyChoose: "Casa Portuguesa is a fresh Portuguese red for drinkers who want soft tannins and easy food pairing.",
    faqs: [
      { question: "Who makes Casa Portuguesa?", answer: "Casa Portuguesa is made by José Maria da Fonseca in Portugal." },
      { question: "Which grapes are used in Casa Portuguesa red?", answer: "The official red wine uses Castelao and Trincadeira from Peninsula de Setubal." },
    ],
    finalVerdict: "Casa Portuguesa is a dependable red for soft tannins, red fruit and relaxed dinner pairing.",
    metaTitle: "Casa Portuguesa Red Wine Guide | BevOry",
    metaDescription: "Explore Casa Portuguesa red wine notes, Setubal grapes, serving ideas and city prices on BevOry.",
  },
  "casa-vino": {
    description: "Casa Vino is listed on BevOry through Casa Vino Rosso in 750 ml format. The name points to an Italian-style red wine lane, with the public listing focused on a simple Rosso rather than a named estate cru.",
    story: "Casa Vino Rosso works best as an everyday red-wine page for shoppers who want a soft, dark-fruited bottle. The facts are intentionally kept to the listed wine style, so the page does not force an estate story that is not attached to the bottle.",
    tastingNotes: [
      { title: "Rosso Fruit", description: "Dark cherry, plum and blackberry give the wine an easy red-fruit centre." },
      { title: "Smooth Spice", description: "Soft tannins, light spice and a touch of oak-like warmth shape the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a red-wine glass and keep the pour with food." },
      { subheading: "Food", description: "Pair with pizza, tomato pasta, chicken tikka, mushroom kebab or hard cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pizza", "tomato pasta", "chicken tikka", "mushroom kebab", "hard cheese"] }],
    whyChoose: "Casa Vino is a simple red-wine choice for casual Italian food and Indian snacks.",
    faqs: [
      { question: "What Casa Vino product is listed on BevOry?", answer: "BevOry lists Casa Vino Rosso in 750 ml format." },
      { question: "How should Casa Vino Rosso be served?", answer: "Serve it slightly cool with pizza, tomato pasta, kebabs or cheese." },
    ],
    finalVerdict: "Casa Vino is for drinkers who want an uncomplicated red wine for food-first evenings.",
    metaTitle: "Casa Vino Rosso Guide | BevOry",
    metaDescription: "Explore Casa Vino Rosso notes, serving style, food pairings and city prices on BevOry.",
  },
  casablanca: {
    description: "Casablanca is an Indian sparkling wine label listed on BevOry through Sparkling Rose, Sparkling Frizzano and Sparkling Vino. The range is associated with Good Drop Wine's fruit-forward, approachable sparkling style.",
    story: "Good Drop presents Casablanca Vino Spumante as India's first Prosecco-style sparkling wine, built around freshness and easy celebration. Retail listings describe Casablanca Sparkling Frizzano as light-bodied, fruity and effervescent.",
    tastingNotes: [
      { title: "Sparkling Vino", description: "Pear, peach, apple and gentle sweetness give the white sparkler its easy appeal." },
      { title: "Rose And Frizzano", description: "Strawberry, cherry, peach, apricot and white flowers keep the range bright and bubbly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a flute or tulip glass; keep the bottle cold between pours." },
      { subheading: "Food", description: "Pair with tandoori prawns, cheese toast, berry dessert, chilli paneer or brunch eggs." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "cheese toast", "berry dessert", "chilli paneer", "brunch eggs"] }],
    whyChoose: "Casablanca is an accessible Indian sparkling-wine pick for chilled pours and celebration food.",
    faqs: [
      { question: "Which Casablanca wines are listed on BevOry?", answer: "BevOry lists Casablanca Sparkling Rose, Sparkling Frizzano and Sparkling Vino." },
      { question: "How should Casablanca sparkling wine be served?", answer: "Serve it well chilled in a flute or tulip glass with snacks, seafood or light desserts." },
    ],
    finalVerdict: "Casablanca is a bright Indian sparkling wine option for brunches, parties and easy chilled pours.",
    metaTitle: "Casablanca Sparkling Wine Guide | BevOry",
    metaDescription: "Explore Casablanca sparkling wine notes, chilled serves, food pairings and city prices on BevOry.",
  },
};
