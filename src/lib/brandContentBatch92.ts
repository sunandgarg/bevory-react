import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_92 = [
  ["james-king", "James King", "Scotland", "Blended Scotch", "pending-james-king"],
  ["james-mc-gill", "James Mc Gill", "India", "Indian Whisky", "pending-james-mc-gill"],
  ["japanese-dry", "Japanese Dry", "Japan", "Gin", "pending-japanese-dry"],
  ["jeiw", "Jeiw", "Italy", "Sparkling Wine", "pending-jeiw"],
  ["jeruk", "Jeruk", "Netherlands", "Liqueurs", "pending-jeruk"],
  ["jhumroo", "Jhumroo", "India", "Beer", "pending-jhumroo"],
  ["jks-green", "JKS Green", "India", "Indian Whisky", "pending-jks-green"],
  ["joes-craft", "Joe's Craft", "Belgium", "Beer", "pending-joes-craft"],
  ["jogger", "Jogger", "India", "Rum", "pending-jogger"],
  ["john-rider", "John Rider", "India", "Indian Whisky", "pending-john-rider"],
] as const;

export const BRAND_LOGOS_BATCH_92: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_92: Record<string, string[]> = {
  "james-king": [
    "https://www.qualityspiritsinternational.com/brands/james-king/",
    "https://www.livcheers.com/hyderabad/liquor/james-king-3-year-scotch-whisky-700ml",
    "https://www.bevory.in/hyderabad/product/james-king-james-king-3-year-scotch-whisky-6041e91",
  ],
  "james-mc-gill": [
    "https://associatedalcohols.com/aabl-brands/",
    "https://www.quickcompany.in/trademarks/5881462-james-mc-gill-whisky",
    "https://www.bevory.in/bhopal/product/james-mc-gill-whisky-573ed1e",
  ],
  "japanese-dry": [
    "https://www.sakuraobd.co.jp/en/sakurao/",
    "https://shop.sumidaya.co.jp/en/collections/sakurao-distillery/products/sakurao-original",
    "https://www.bevory.in/gurgaon/product/japanese-dry-gin-sakurao-411630f",
  ],
  jeiw: [
    "https://www.livcheers.com/liquor/jeiw-prosecco-rose-750ml",
    "https://www.bevory.in/gurgaon/product/jeiw-prosecco-rose-1f6cc26",
  ],
  jeruk: [
    "https://www.bevory.in/mumbai/product/jeruk-peach-schnapps-liqueur-3908ab9",
    "https://www.bevory.in/thane/product/jeruk-peach-schnapps-liqueur-3908ab9",
  ],
  jhumroo: [
    "https://skuas.in/beer/",
    "https://www.bevory.in/delhi/product/jhumroo-the-himalayan-strong-beer-15115c6",
  ],
  "jks-green": [
    "https://www.bevory.in/bhopal/product/jks-green-whisky-7b93e74",
    "https://www.bevory.in/delhi/product/jks-green-whisky-7b93e74",
  ],
  "joes-craft": [
    "https://uttrakhandexcise.org.in/Docs/CostCard_2526OS.pdf",
    "https://untappd.com/b/brouwerij-van-steenberge-joe-s-craft-belgian-lager/5620110",
    "https://www.bevory.in/gurgaon/product/joes-craft-belgium-wheat-e9b3c64",
    "https://www.bevory.in/gurgaon/product/joes-craft-lager-e288dcc",
    "https://www.bevory.in/gurgaon/product/joes-craft-strong-a2266dc",
  ],
  jogger: [
    "https://www.bevory.in/delhi/product/jogger-superior-rum-0a1efde",
    "https://www.studocu.com/in/document/delhi-technological-university/continous-delivery-and-continous-integration/indian-and-foreign-liquor-brands-registered-in-nct-delhi-2020-21/121011315",
  ],
  "john-rider": [
    "https://tsbcl.nic.in/open_record.php?ID=108",
    "https://tsbcl.nic.in/open_record.php?ID=249",
    "https://www.bevory.in/hyderabad/product/john-rider-john-rider-international-blended-cask-f1fd86b",
  ],
};

export const BRAND_CONTENT_BATCH_92: Record<string, BrandPublicContent> = {
  "james-king": {
    description: "James King is a blended Scotch whisky brand from Quality Spirits International. Its India-facing shelf includes James King 3 Year Scotch Whisky in a 700 ml format.",
    story: "The James King range pays tribute to King James IV and Scotland's Stirling Castle, with Highland malt whisky blended with Lowland grain whisky. The official range includes 3 Year Old, 5 Year Old and 8 Year Old expressions.",
    tastingNotes: [
      { title: "Clean Scotch Aroma", description: "Vanilla, malt, light citrus and honey give the whisky a bright, easy nose." },
      { title: "Mellow Finish", description: "Green apple, pear, sweet oak and gentle spice lead into a clean, lingering close." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour neat first, then add one cube or lengthen with chilled soda for a highball." },
      { subheading: "Food", description: "Pair with galouti kebabs, smoked chicken, roasted almonds, mature cheddar or apple tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "smoked chicken", "roasted almonds", "mature cheddar", "apple tart"] }],
    whyChoose: "James King gives Scotch drinkers a light, approachable blend for highballs and casual sipping.",
    faqs: [
      { question: "What is James King whisky?", answer: "James King is a blended Scotch whisky range from Quality Spirits International." },
      { question: "How should James King be served?", answer: "Serve it neat, on ice, or with soda in a tall highball." },
    ],
    finalVerdict: "James King is a clean blended Scotch option for simple whisky serves and snack-led evenings.",
    metaTitle: "James King Scotch Guide | BevOry",
    metaDescription: "Explore James King Scotch notes, Scottish blend style, serving ideas, pairings and city prices.",
  },
  "james-mc-gill": {
    description: "James Mc Gill is an Indian whisky brand from Associated Alcohols & Breweries Limited. The whisky sits in the blended Indian category, with commonly listed formats from 375 ml to 1 litre.",
    story: "AABL identifies James Mc Gill Whisky as part of its proprietary brand portfolio alongside Central Province, Titanium, Bombay Special and Jamaican Magic. The brand sits in the everyday Indian whisky shelf, where mixer flexibility and bottle-size choice are central.",
    tastingNotes: [
      { title: "Indian Whisky", description: "Caramel, toasted grain, vanilla and mild wood spice shape the core profile." },
      { title: "Easy Mixer Finish", description: "Soft sweetness and gentle warmth keep the whisky friendly with soda, water or cola." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over ice, with chilled water, with soda, or as a simple whisky-cola." },
      { subheading: "Food", description: "Pair with tandoori chicken, mutton seekh, masala peanuts, chilli paneer or dal makhani." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "mutton seekh", "masala peanuts", "chilli paneer", "dal makhani"] }],
    whyChoose: "James Mc Gill is a practical Indian whisky for classic mixed serves and local bottle-size comparisons.",
    faqs: [
      { question: "Who owns James Mc Gill Whisky?", answer: "Associated Alcohols & Breweries Limited lists James Mc Gill Whisky in its proprietary brand portfolio." },
      { question: "Which bottle sizes appear on BevOry?", answer: "BevOry routes show formats including 375 ml, 500 ml, 750 ml and 1 litre." },
    ],
    finalVerdict: "James Mc Gill is an Indian whisky built for soda, water, cola and spicy bar snacks.",
    metaTitle: "James Mc Gill Whisky Guide | BevOry",
    metaDescription: "Explore James Mc Gill Whisky notes, AABL portfolio context, mixers, pairings and city prices.",
  },
  "japanese-dry": {
    description: "Japanese Dry Gin Sakurao is a Japanese gin from Sakurao Brewery and Distillery in Hiroshima. The gin is built around Hiroshima botanicals, supported by imported juniper and coriander seed.",
    story: "Sakurao Brewery and Distillery is based in Hatsukaichi, Hiroshima, and draws on more than 100 years of distilling know-how. Sakurao Gin Original uses Hiroshima citrus and botanicals with imported juniper and coriander seed, using both steeping and vapor methods.",
    tastingNotes: [
      { title: "Hiroshima Citrus", description: "Lemon, yuzu, fresh citrus peel and bright juniper give the gin its lifted aroma." },
      { title: "Japanese Botanical Finish", description: "Hinoki cypress, cherry blossom, coriander and mineral savoury notes create a dry, precise close." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with premium tonic and a citrus peel, or use in a dry martini with a restrained garnish." },
      { subheading: "Food", description: "Pair with sushi, tandoori prawns, chicken yakitori, cucumber salad or lemon-pepper paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["sushi", "tandoori prawns", "chicken yakitori", "cucumber salad", "lemon-pepper paneer"] }],
    whyChoose: "Japanese Dry is for gin drinkers who want Sakurao's Hiroshima citrus, sakura and dry botanical detail.",
    faqs: [
      { question: "Where is Japanese Dry Gin Sakurao made?", answer: "It is made by Sakurao Brewery and Distillery in Hatsukaichi, Hiroshima, Japan." },
      { question: "What botanicals define Sakurao Gin?", answer: "The official profile highlights Hiroshima citrus, yuzu, hinoki, oyster shells, cherry blossoms, juniper and coriander seed." },
    ],
    finalVerdict: "Japanese Dry Gin Sakurao brings precise Hiroshima botanical character to G&Ts and martinis.",
    metaTitle: "Japanese Dry Gin Guide | BevOry",
    metaDescription: "Explore Japanese Dry Gin Sakurao notes, Hiroshima botanicals, tonic serves, pairings and city prices.",
  },
  jeiw: {
    description: "Jeiw Prosecco Rose is a rose sparkling wine in a 750 ml bottle format. It belongs to the festive Prosecco shelf, where crisp bubbles and pink-fruited freshness matter most.",
    story: "Prosecco Rose blends the bright, sparkling style of Prosecco with a pink-fruited rose profile. Jeiw fits brunches, aperitif pours and lighter party food where freshness is more useful than heavy oak or high sweetness.",
    tastingNotes: [
      { title: "Rose Bubbles", description: "Strawberry, red apple, white peach and citrus make the aroma fresh and fruit-led." },
      { title: "Crisp Sparkle", description: "Fine bubbles, light berry sweetness and clean acidity keep the finish lively." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a flute or white-wine glass, opening just before pouring." },
      { subheading: "Food", description: "Pair with tandoori fish, prawn tempura, bruschetta, strawberry salad or soft goat cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "prawn tempura", "bruschetta", "strawberry salad", "soft goat cheese"] }],
    whyChoose: "Jeiw works when you want a light rose sparkling wine for aperitif pours and easy celebrations.",
    faqs: [
      { question: "What style is Jeiw Prosecco Rose?", answer: "It is listed as a rose sparkling wine in the Prosecco category on BevOry." },
      { question: "How cold should Jeiw Prosecco Rose be served?", answer: "Serve it well chilled, ideally around 6-8 C, in a flute or white-wine glass." },
    ],
    finalVerdict: "Jeiw Prosecco Rose is a bright sparkling choice for chilled pours and lighter food.",
    metaTitle: "Jeiw Prosecco Rose Guide | BevOry",
    metaDescription: "Explore Jeiw Prosecco Rose notes, sparkling serving tips, food pairings and city prices.",
  },
  jeruk: {
    description: "Jeruk Peach Schnapps is a fruit liqueur in a 700 ml bottle format. It is made for peach-led cocktails, long drinks and chilled party serves.",
    story: "Peach schnapps is made for bright, sweet cocktail service rather than neat sipping alone. Jeruk is useful in mixed drinks where peach, citrus and soda need a clean fruit base.",
    tastingNotes: [
      { title: "Peach Schnapps", description: "Ripe peach, apricot, sugar syrup and light citrus create a sweet fruit-led nose." },
      { title: "Cocktail Finish", description: "A smooth, candy-peach finish works with orange juice, lemonade, soda and sparkling wine." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use in a Sex on the Beach, Bellini-style spritz, peach lemonade or a soda highball." },
      { subheading: "Food", description: "Pair with chilli chicken, spicy nachos, fruit tart, vanilla ice cream or salty fries." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli chicken", "spicy nachos", "fruit tart", "vanilla ice cream", "salty fries"] }],
    whyChoose: "Jeruk is a direct peach liqueur pick for sweet, fruit-forward cocktails.",
    faqs: [
      { question: "What is Jeruk Peach Schnapps?", answer: "It is a peach-flavoured fruit liqueur listed on BevOry in a 700 ml format." },
      { question: "What can I mix with Jeruk?", answer: "Orange juice, lemonade, soda, cranberry juice and sparkling wine all suit peach schnapps." },
    ],
    finalVerdict: "Jeruk is best used as a peach cocktail ingredient for chilled, fruit-led drinks.",
    metaTitle: "Jeruk Peach Schnapps Guide | BevOry",
    metaDescription: "Explore Jeruk Peach Schnapps notes, cocktail serves, food pairings and city prices.",
  },
  jhumroo: {
    description: "Jhumroo The Himalayan Strong Beer is an Indian strong beer from the SKUAS beer portfolio. Its mountain-led identity suits chilled 500 ml can service and high-energy casual occasions.",
    story: "Jhumroo sits in the strong beer shelf, aimed at chilled 500 ml can service and high-energy casual occasions. Its Himalayan positioning fits North Indian beer moments built around cold serves, snacks and spicy food.",
    tastingNotes: [
      { title: "Strong Beer", description: "Grain, malt sweetness, light hop bitterness and a firm body drive the beer style." },
      { title: "Cold Finish", description: "A crisp, bitter-edged finish keeps the beer refreshing when served very cold." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve very cold in a chilled mug or straight from the can after a gentle pour." },
      { subheading: "Food", description: "Pair with chicken pakora, chilli paneer, momos, masala fries or tandoori fish." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken pakora", "chilli paneer", "momos", "masala fries", "tandoori fish"] }],
    whyChoose: "Jhumroo is a strong Indian beer option for cold serves and spicy snack plates.",
    faqs: [
      { question: "What is Jhumroo known for on BevOry?", answer: "Jhumroo is represented by The Himalayan Strong Beer." },
      { question: "What food pairs with Jhumroo?", answer: "Chicken pakora, momos, chilli paneer and masala fries match its strong beer style." },
    ],
    finalVerdict: "Jhumroo is a chilled strong beer choice for snack-heavy evenings and spicy food.",
    metaTitle: "Jhumroo Beer Guide | BevOry",
    metaDescription: "Explore Jhumroo Himalayan Strong Beer notes, serving ideas, snack pairings and city prices.",
  },
  "jks-green": {
    description: "JKS Green is an Indian whisky in the blended whisky shelf with a 750 ml bottle format. It is shaped for familiar mixed serves, value-led buying and easy party pours.",
    story: "JKS Green sits in the everyday Indian whisky lane, where value, soda compatibility and familiar flavour matter. Its profile is best understood as a straightforward blended whisky for mixed serves and casual gatherings.",
    tastingNotes: [
      { title: "Blended Indian Whisky", description: "Caramel, toasted grain, vanilla and soft spice form a rounded whisky base." },
      { title: "Simple Finish", description: "A light oak note and sweet warmth make it easy with soda, water or cola." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour with soda, chilled water, cola or over ice in a rocks glass." },
      { subheading: "Food", description: "Pair with seekh kebab, masala peanuts, butter chicken, chilli paneer or roasted cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["seekh kebab", "masala peanuts", "butter chicken", "chilli paneer", "roasted cashews"] }],
    whyChoose: "JKS Green is a no-fuss Indian whisky for classic mixers and familiar party snacks.",
    faqs: [
      { question: "What is JKS Green Whisky?", answer: "It is a blended Indian whisky made for easy mixed serves." },
      { question: "How should JKS Green be served?", answer: "Serve with soda, water, cola or ice, depending on the drink style." },
    ],
    finalVerdict: "JKS Green is a simple Indian whisky pick for mixed drinks and spicy food.",
    metaTitle: "JKS Green Whisky Guide | BevOry",
    metaDescription: "Explore JKS Green Whisky notes, mixers, Indian food pairings, bottle format and city prices.",
  },
  "joes-craft": {
    description: "Joe's Craft is a Belgium-origin beer range covering Belgian Wheat, Lager and Strong variants. The 330 ml bottles sit in the imported beer shelf beside lager, wheat beer and stronger chilled options.",
    story: "Joe's Craft gives drinkers three clear moods: a light lager, a softer wheat beer and a stronger beer for heavier food. That range makes it useful for mixed tables where one beer style rarely suits every plate.",
    tastingNotes: [
      { title: "Belgian Wheat", description: "Soft wheat, citrus peel, light spice and a cloudy body suit easy chilled drinking." },
      { title: "Lager And Strong", description: "The lager leans crisp and malty, while the strong beer brings fuller grain weight and firmer bitterness." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a lager or wheat-beer glass, leaving room for foam." },
      { subheading: "Food", description: "Pair with tandoori prawns, chicken wings, fish fry, peri-peri fries or cheese toast." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "chicken wings", "fish fry", "peri-peri fries", "cheese toast"] }],
    whyChoose: "Joe's Craft is useful when you want Belgian-style beer options across wheat, lager and strong formats.",
    faqs: [
      { question: "Which Joe's Craft beers appear on BevOry?", answer: "BevOry routes include Belgian Wheat, Lager and Strong beer listings." },
      { question: "How should Joe's Craft beer be served?", answer: "Serve well chilled in a clean beer glass with room for a compact head." },
    ],
    finalVerdict: "Joe's Craft gives beer drinkers a Belgian-style choice for chilled bottles and snack pairings.",
    metaTitle: "Joe's Craft Beer Guide | BevOry",
    metaDescription: "Explore Joe's Craft Belgian Wheat, Lager and Strong notes, serving tips, pairings and city prices.",
  },
  jogger: {
    description: "Jogger Superior Rum is an Indian rum in a 750 ml bottle format. It belongs to the accessible dark-rum shelf, where cola, lime and simple party serves matter most.",
    story: "Jogger Superior Rum belongs to the accessible Indian rum category, built for cola, lime and simple party serves. Its strongest use case is dark-rum mixing with spicy food rather than slow sipping.",
    tastingNotes: [
      { title: "Superior Rum", description: "Molasses, caramel, vanilla and light spice create a sweet, familiar rum profile." },
      { title: "Mixer Finish", description: "A rounded, warm finish works easily with cola, ginger ale and lime soda." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Mix with cola and lime, pour over ice, or lengthen with ginger ale." },
      { subheading: "Food", description: "Pair with pepper chicken, pork chilli, paneer tikka, barbecue wings or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pepper chicken", "pork chilli", "paneer tikka", "barbecue wings", "dark chocolate"] }],
    whyChoose: "Jogger is a practical Indian rum option for cola highballs and spicy snack plates.",
    faqs: [
      { question: "What is Jogger Superior Rum?", answer: "It is an Indian rum commonly seen in a 750 ml bottle format." },
      { question: "What mixer suits Jogger Rum?", answer: "Cola, ginger ale, lime soda and fresh lime are easy matches." },
    ],
    finalVerdict: "Jogger Superior Rum is made for simple mixed serves with bold, spicy food.",
    metaTitle: "Jogger Rum Guide | BevOry",
    metaDescription: "Explore Jogger Superior Rum notes, mixers, serving ideas, food pairings and city prices.",
  },
  "john-rider": {
    description: "John Rider International Blended Cask is an Indian whisky available in formats including 180 ml, 750 ml and 2 litre bottles. It sits in the blended whisky shelf despite the international cask styling in its name.",
    story: "John Rider is built for practical mixed serves, especially short pours with soda, water or cola. Its larger bottle presence also makes it familiar for group occasions and value-led shopping.",
    tastingNotes: [
      { title: "Blended Cask Style", description: "Vanilla, caramel, toasted grain and gentle oak spice give the whisky a rounded profile." },
      { title: "Highball Finish", description: "A sweet-spiced finish keeps the drink clean with soda, chilled water or cola." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over ice, with soda, with chilled water, or in a whisky-cola long drink." },
      { subheading: "Food", description: "Pair with chicken tikka, galouti kebabs, chilli paneer, masala peanuts or dal makhani." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "galouti kebabs", "chilli paneer", "masala peanuts", "dal makhani"] }],
    whyChoose: "John Rider is a straightforward Indian blended whisky for cask-styled mixed serves.",
    faqs: [
      { question: "What is John Rider International Blended Cask?", answer: "It is an Indian blended whisky made for everyday mixed serves." },
      { question: "Which formats appear in Telangana listings?", answer: "Public beverage listings show 180 ml, 750 ml and 2 litre formats." },
    ],
    finalVerdict: "John Rider is an easy Indian blended whisky for soda, cola and spicy food.",
    metaTitle: "John Rider Whisky Guide | BevOry",
    metaDescription: "Explore John Rider International Blended Cask notes, formats, mixers, pairings and city prices.",
  },
};
