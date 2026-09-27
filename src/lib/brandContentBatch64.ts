import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_64 = [
  ["aromas", "Aromas", "India", "Brandy", "pending-aromas"],
  ["atm-all-time", "Atm All Time", "India", "Brandy", "pending-atm-all-time"],
  ["aurva", "Aurva", "Argentina", "Sparkling Wine", "pending-aurva"],
  ["avon", "Avon", "India", "Gin", "pending-avon"],
  ["awitman", "Awitman", "India", "Beer", "pending-awitman"],
  ["baba", "Baba", "India", "Beer", "pending-baba"],
  ["backbencher", "Backbencher", "India", "Indian Whisky", "pending-backbencher"],
  ["balivada", "Balivada", "India", "Indian Whisky", "pending-balivada"],
  ["barath", "Barath", "India", "Brandy", "pending-barath"],
  ["barents", "Barents", "India", "Vodka", "pending-barents"],
] as const;

export const BRAND_LOGOS_BATCH_64: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_64: Record<string, string[]> = {
  aromas: [
    "https://www.bevory.in/delhi/brand/aromas",
    "https://www.livcheers.com/listing/brand/aromas",
  ],
  "atm-all-time": [
    "https://www.bevory.in/delhi/brand/atm-all-time",
    "https://www.livcheers.com/listing/brand/atm-all-time",
  ],
  aurva: [
    "https://www.livcheers.com/bangalore/liquor/aurva-chandon-wine-750ml",
    "https://www.livcheers.com/compare/gurgaon/aurva-chandon-wine-750ml",
  ],
  avon: [
    "https://www.bevory.in/delhi/brand/avon",
    "https://www.livcheers.com/listing/brand/avon",
  ],
  awitman: [
    "https://www.bevory.in/delhi/brand/awitman",
    "https://www.livcheers.com/listing/brand/awitman",
  ],
  baba: [
    "https://www.bevory.in/delhi/brand/baba",
    "https://www.livcheers.com/listing/brand/baba",
  ],
  backbencher: [
    "https://www.bevory.in/delhi/brand/backbencher",
    "https://www.livcheers.com/listing/brand/backbencher",
  ],
  balivada: [
    "https://www.livcheers.com/listing/brand/balivada",
    "https://www.livcheers.com/bangalore/liquor/balivada-malt-de-goa-indian-single-malt-whisky-750ml",
  ],
  barath: [
    "https://www.bevory.in/delhi/brand/barath",
    "https://www.livcheers.com/listing/brand/barath",
  ],
  barents: [
    "https://www.bevory.in/delhi/brand/barents",
    "https://www.livcheers.com/reviews/barents-premium-gold-reserve",
  ],
};

export const BRAND_CONTENT_BATCH_64: Record<string, BrandPublicContent> = {
  aromas: {
    description: "Aromas is an Indian brandy label listed with Aroma Ok VSOP Brandy and Merlyn VSOP Brandy. The range sits in the familiar Indian brandy lane, with fruit, caramel and oak warmth built for small pours or simple long drinks.",
    story: "The current catalogue identity is product-led rather than estate-led. VSOP wording signals a brandy presentation focused on smoother texture and after-dinner warmth, but each bottle should be chosen by its exact label and size.",
    tastingNotes: [
      { title: "Fruit and caramel", description: "Raisin, dried fruit and caramel give the brandy its rounded first impression." },
      { title: "Oak warmth", description: "Vanilla, gentle spice and a mellow finish suit neat pours and ginger highballs." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve a small neat pour in a brandy glass, or lengthen with ginger ale over ice." },
      { subheading: "Food", description: "Pair with dark chocolate, fruit cake, almond biscuits, smoked cheese or grilled pineapple." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["dark chocolate", "fruit cake", "almond biscuits", "smoked cheese", "grilled pineapple"] }],
    whyChoose: "Aromas gives Indian brandy drinkers a straightforward VSOP-style option for dessert and relaxed evening serves.",
    faqs: [
      { question: "Which Aromas brandies are listed?", answer: "Current listings include Aroma Ok VSOP Brandy and Merlyn VSOP Brandy." },
      { question: "How should Aromas brandy be served?", answer: "Try a small neat pour, or use ginger ale and ice for a lighter long drink." },
    ],
    finalVerdict: "Aromas is a practical Indian brandy choice for after-dinner sipping and sweet-spiced pairings.",
    metaTitle: "Aromas Brandy Guide | BevOry",
    metaDescription: "Explore Aromas VSOP brandy styles, tasting notes, serving ideas, pairings and city prices on BevOry.",
  },
  "atm-all-time": {
    description: "Atm All Time is an Indian brandy label listed through Atm All Time Magic Brandy. The current 180 ml listing places it in a compact, value-led brandy serve rather than a wide premium portfolio.",
    story: "The name links to an everyday Indian brandy format built for small bottles and simple occasions. Its public comparison points are bottle size, city price, mixer style and snack pairing.",
    tastingNotes: [
      { title: "Soft fruit", description: "Dried fruit, caramel and light vanilla shape the brandy's easygoing profile." },
      { title: "Short finish", description: "Gentle spice and warmth make it better suited to simple serves than long tasting sessions." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour a small measure neat or with a splash of water; ginger ale works for a longer serve." },
      { subheading: "Food", description: "Pair with fruit cake, salted cashews, dark chocolate, grilled pineapple or spicy peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fruit cake", "salted cashews", "dark chocolate", "grilled pineapple", "spicy peanuts"] }],
    whyChoose: "Atm All Time is a small-format Indian brandy for simple pours and sweet-savoury snacks.",
    faqs: [
      { question: "What is Atm All Time?", answer: "It is listed as Atm All Time Magic Brandy in the brandy category." },
      { question: "What food pairs with Atm All Time brandy?", answer: "Fruit cake, dark chocolate, salted cashews and grilled pineapple are practical matches." },
    ],
    finalVerdict: "Atm All Time is best treated as a direct Indian brandy pour with simple mixers and snacks.",
    metaTitle: "Atm All Time Brandy Guide | BevOry",
    metaDescription: "Explore Atm All Time Magic Brandy notes, serving ideas, snack pairings and city prices on BevOry.",
  },
  aurva: {
    description: "Aurva is listed with Aurva Chandon Wine, a 750 ml sparkling wine shown with Argentina as the country on current product pages. The style is crisp and fruit-led, with citrus, green apple and fine bubbles at the centre.",
    story: "Aurva's current identity is tied to one sparkling-wine listing rather than a broad winery page. It is useful for buyers comparing celebration bottles, brunch pours and aperitif-style sparkling wine.",
    tastingNotes: [
      { title: "Citrus and apple", description: "Lemon, green apple, pear and white peach give the wine a fresh aromatic line." },
      { title: "Fine bubbles", description: "Lively acidity and delicate bubbles keep the finish clean and refreshing." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill to 6-8 C and pour into a flute or white-wine glass just before serving." },
      { subheading: "Food", description: "Pair with tandoori prawns, cheese straws, fried fish, fresh berries or lemon tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "cheese straws", "fried fish", "fresh berries", "lemon tart"] }],
    whyChoose: "Aurva is a crisp sparkling wine option for aperitifs, brunch and celebratory pours.",
    faqs: [
      { question: "What type of wine is Aurva?", answer: "Aurva is listed as a sparkling wine." },
      { question: "How cold should Aurva be served?", answer: "Serve it well chilled, around 6-8 C." },
    ],
    finalVerdict: "Aurva is a bright sparkling-wine pick for toasts, seafood starters and fresh citrus-led food.",
    metaTitle: "Aurva Sparkling Wine Guide | BevOry",
    metaDescription: "Explore Aurva sparkling wine notes, serving temperature, food pairings and city prices on BevOry.",
  },
  avon: {
    description: "Avon is an Indian dry gin label listed in 180 ml and 750 ml formats. The bottle belongs in a classic gin-and-tonic lane, led by juniper, citrus and dry spice.",
    story: "Avon's current catalogue role is straightforward: a gin bottle for tonic, soda and citrus-led mixed drinks. It should be compared by bottle size and city price rather than treated as a botanical-heavy craft gin.",
    tastingNotes: [
      { title: "Juniper", description: "Piney juniper and lemon peel give the gin its classic dry frame." },
      { title: "Clean finish", description: "Light spice and a crisp finish make it easy to use with tonic or soda." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Build with plenty of ice, chilled tonic and a lemon or lime wedge." },
      { subheading: "Food", description: "Pair with tandoori prawns, cucumber chaat, lemon chicken, masala fries or herbed paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "cucumber chaat", "lemon chicken", "masala fries", "herbed paneer"] }],
    whyChoose: "Avon is a simple dry gin for cold tonic serves and citrus-friendly snacks.",
    faqs: [
      { question: "What type of gin is Avon?", answer: "Avon is listed as a dry gin." },
      { question: "How should Avon Dry Gin be served?", answer: "Serve with ice, chilled tonic and a citrus wedge." },
    ],
    finalVerdict: "Avon is best kept cold, dry and simple in a gin-and-tonic style serve.",
    metaTitle: "Avon Dry Gin Guide | BevOry",
    metaDescription: "Explore Avon Dry Gin notes, tonic serves, food pairings and city prices on BevOry.",
  },
  awitman: {
    description: "Awitman is an Indian beer label listed through Awitman Premium Strong Beer in a 500 ml format. The style is strong-lager oriented, with malt weight and chilled refreshment doing most of the work.",
    story: "The current catalogue row is narrow and practical: one strong beer, one cold serve, one clear drinking context. It belongs beside spicy snacks and fried food rather than delicate tasting flights.",
    tastingNotes: [
      { title: "Malt body", description: "Cereal malt and fuller body give the beer more weight than a light lager." },
      { title: "Cold finish", description: "Moderate bitterness and carbonation keep the finish refreshing when served well chilled." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve very cold in a clean beer glass or straight from an ice bucket." },
      { subheading: "Food", description: "Pair with chicken pakora, masala fries, spicy peanuts, fish fry or grilled corn." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken pakora", "masala fries", "spicy peanuts", "fish fry", "grilled corn"] }],
    whyChoose: "Awitman is a strong-beer option for cold serves and salty Indian snacks.",
    faqs: [
      { question: "What beer is listed under Awitman?", answer: "Current listings show Awitman Premium Strong Beer." },
      { question: "What food pairs with Awitman beer?", answer: "Chicken pakora, masala fries, spicy peanuts and fish fry are good matches." },
    ],
    finalVerdict: "Awitman is a cold strong beer for snack plates and casual Indian drinking sessions.",
    metaTitle: "Awitman Strong Beer Guide | BevOry",
    metaDescription: "Explore Awitman Premium Strong Beer notes, serving tips, snack pairings and city prices on BevOry.",
  },
  baba: {
    description: "Baba is an Indian beer label listed through Baba 10000 Super Strong Beer in a 650 ml bottle. The profile belongs to India's strong-beer segment, built for malt weight, chill and assertive refreshment.",
    story: "The 10000-style naming places Baba in the familiar super-strong beer shelf. Its best use is simple and cold, with food that can handle a heavier lager body.",
    tastingNotes: [
      { title: "Strong lager body", description: "Fuller malt, cereal sweetness and stronger warming character shape the beer." },
      { title: "Bitter snap", description: "A mild bitter edge and carbonation help balance the heavier body." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve ice-cold and drink from a clean lager glass to keep the carbonation lively." },
      { subheading: "Food", description: "Pair with tandoori chicken, masala papad, fried fish, chilli potatoes or spicy peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "masala papad", "fried fish", "chilli potatoes", "spicy peanuts"] }],
    whyChoose: "Baba is a super-strong beer choice for drinkers who want a heavier cold lager serve.",
    faqs: [
      { question: "What is Baba 10000?", answer: "It is listed as Baba 10000 Super Strong Beer." },
      { question: "How should Baba beer be served?", answer: "Serve it very cold with spicy or fried snacks." },
    ],
    finalVerdict: "Baba is a robust strong beer for bold snacks and chilled, no-fuss service.",
    metaTitle: "Baba 10000 Beer Guide | BevOry",
    metaDescription: "Explore Baba 10000 Super Strong Beer notes, serving tips, snack pairings and city prices on BevOry.",
  },
  backbencher: {
    description: "Backbencher is an Indian whisky label listed in 375 ml and 750 ml formats. The style sits in made-in-India blended whisky territory, with grain sweetness, caramel and light oak spice.",
    story: "Backbencher reads as an everyday Indian whisky brand rather than a distillery-led single malt. Its useful comparison points are bottle size, price, mixer style and how it performs with snacks.",
    tastingNotes: [
      { title: "Caramel grain", description: "Caramel, cereal sweetness and vanilla form the whisky's approachable base." },
      { title: "Light oak", description: "Mild oak spice and warmth keep the finish suitable for soda and water." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour over ice, then add water or chilled soda for a longer serve." },
      { subheading: "Food", description: "Pair with mutton seekh, chicken tikka, masala peanuts, smoked paneer or pepper chicken." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "chicken tikka", "masala peanuts", "smoked paneer", "pepper chicken"] }],
    whyChoose: "Backbencher is a casual Indian whisky for simple highballs and spicy snack plates.",
    faqs: [
      { question: "What type of whisky is Backbencher?", answer: "Backbencher is listed as a made-in-India whisky." },
      { question: "What food pairs with Backbencher whisky?", answer: "Mutton seekh, chicken tikka, masala peanuts and smoked paneer work well." },
    ],
    finalVerdict: "Backbencher is best used as a straightforward whisky pour with soda and bold Indian snacks.",
    metaTitle: "Backbencher Whisky Guide | BevOry",
    metaDescription: "Explore Backbencher whisky notes, serving ideas, Indian snack pairings and city prices on BevOry.",
  },
  balivada: {
    description: "Balivada is an Indian whisky label listed through Balivada Malt De Goa Indian Single Malt Whisky. Current product pages place it as a 750 ml Indian malt whisky with caramel, vanilla, oak and spice at the centre.",
    story: "The Malt De Goa name gives Balivada a clear Indian coastal identity while keeping the bottle focused on malt whisky. Its flavour direction is richer than everyday blended whisky, with oak and dried-fruit notes suited to slower sipping.",
    tastingNotes: [
      { title: "Caramel and oak", description: "Caramel, vanilla, oak and dried fruit shape the aroma." },
      { title: "Spiced finish", description: "Toffee, dark chocolate and warm spice carry the finish, with a light smoky edge." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Taste neat in a tulip glass first, then add a few drops of water if the oak feels tight." },
      { subheading: "Food", description: "Pair with galouti kebab, smoked paneer, dark chocolate, pepper chicken or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebab", "smoked paneer", "dark chocolate", "pepper chicken", "aged cheddar"] }],
    whyChoose: "Balivada is a richer Indian malt whisky option for drinkers moving beyond basic highball blends.",
    faqs: [
      { question: "What is Balivada Malt De Goa?", answer: "It is listed as an Indian malt whisky in a 750 ml format." },
      { question: "How should Balivada be served?", answer: "Start neat in a tulip glass, then add a few drops of water if needed." },
    ],
    finalVerdict: "Balivada is the premium-style Indian malt pick in this batch, best served slowly with savoury food.",
    metaTitle: "Balivada Malt De Goa Guide | BevOry",
    metaDescription: "Explore Balivada Malt De Goa notes, serving ideas, food pairings and city prices on BevOry.",
  },
  barath: {
    description: "Barath is an Indian brandy label listed through Barath Doctor Brandy in a 750 ml bottle. The profile belongs to a warm, fruit-and-oak brandy style suited to simple after-dinner pours.",
    story: "Barath's current public identity is a single brandy listing, so the strongest consumer angle is serving style and food fit. Doctor Brandy naming is common on Indian shelves, but the exact character still belongs to the bottle in hand.",
    tastingNotes: [
      { title: "Dried fruit", description: "Raisin, prune and caramel notes give the brandy a rounded sweetness." },
      { title: "Gentle spice", description: "Vanilla, oak and mild warmth carry the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve a small neat pour after food, or lengthen with warm water or ginger ale." },
      { subheading: "Food", description: "Pair with fruit cake, dark chocolate, roasted almonds, grilled pineapple or smoked cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fruit cake", "dark chocolate", "roasted almonds", "grilled pineapple", "smoked cheese"] }],
    whyChoose: "Barath is a direct Indian brandy option for warm, fruit-led sipping and dessert pairings.",
    faqs: [
      { question: "What is Barath Doctor Brandy?", answer: "It is an Indian brandy listing shown in a 750 ml format." },
      { question: "What food pairs with Barath brandy?", answer: "Fruit cake, dark chocolate, roasted almonds and smoked cheese are practical matches." },
    ],
    finalVerdict: "Barath is a simple Indian brandy for after-dinner serves and rich sweet snacks.",
    metaTitle: "Barath Brandy Guide | BevOry",
    metaDescription: "Explore Barath Doctor Brandy notes, serving ideas, dessert pairings and city prices on BevOry.",
  },
  barents: {
    description: "Barents is listed with Barents Premium Gold Reserve in the vodka category. The current catalogue position is a clean, premium-style spirit for chilled pours, soda serves and citrus-led mixers.",
    story: "Barents appears as a focused single-label listing rather than a broad distillery story. Its best public use is helping buyers compare a premium reserve-style vodka by bottle size, serve and food pairing.",
    tastingNotes: [
      { title: "Clean spirit", description: "Neutral grain character, light sweetness and a smooth chilled texture lead the profile." },
      { title: "Crisp finish", description: "A clean finish works with soda, lime and restrained citrus mixers." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve freezer-cold in small pours, or build with soda, ice and lime." },
      { subheading: "Food", description: "Pair with tandoori prawns, salted cucumber, smoked fish, potato crisps or chilli paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "salted cucumber", "smoked fish", "potato crisps", "chilli paneer"] }],
    whyChoose: "Barents is a clean vodka option for chilled service and simple highballs.",
    faqs: [
      { question: "What is Barents Premium Gold Reserve?", answer: "It is listed on BevOry in the vodka category." },
      { question: "How should Barents be served?", answer: "Serve it freezer-cold or with soda, ice and lime." },
    ],
    finalVerdict: "Barents is best for drinkers who want a cold, clean vodka serve without heavy flavouring.",
    metaTitle: "Barents Vodka Guide | BevOry",
    metaDescription: "Explore Barents Premium Gold Reserve notes, serving ideas, food pairings and city prices on BevOry.",
  },
};
