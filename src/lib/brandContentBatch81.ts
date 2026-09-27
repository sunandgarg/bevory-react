import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_81 = [
  ["english-horse", "English Horse", "India", "Made in India Whisky", "pending-english-horse"],
  ["enso-reserve", "Enso Reserve", "Japan", "World Whisky", "pending-enso-reserve"],
  ["episode", "Episode", "India", "Made in India Whisky", "pending-episode"],
  ["espania", "Espania", "Spain", "Wine", "pending-espania"],
  ["especial", "Especial", "Mexico", "Tequila", "pending-especial"],
  ["estimulo", "Estimulo", "Argentina", "Wine", "pending-estimulo"],
  ["everyday-gold", "Everyday Gold", "India", "Made in India Whisky", "pending-everyday-gold"],
  ["extill", "Extill", "India", "Vodka", "pending-extill"],
  ["facewood", "Facewood", "India", "Made in India Whisky", "pending-facewood"],
  ["famille", "Famille", "France", "Wine", "pending-famille"],
] as const;

export const BRAND_LOGOS_BATCH_81: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_81: Record<string, string[]> = {
  "english-horse": [
    "https://www.bevory.in/gurgaon/brand/english-horse",
    "https://www.bevory.in/gurgaon/product/english-horse-english-horse-extra-special-whisky-7475e2f",
  ],
  "enso-reserve": [
    "https://www.bevory.in/goa/brand/enso-reserve",
    "https://www.bevory.in/goa/product/enso-reserve-japanese-whisky-b72e05c",
  ],
  episode: [
    "https://www.bevory.in/gurgaon/brand/episode",
    "https://www.bevory.in/gurgaon/product/episode-gold-whisky-d29d77c",
    "https://www.bevory.in/asansol/product/episode-classic-whisky-8dbcdb7",
  ],
  espania: [
    "https://www.bevory.in/gurgaon/brand/espania",
    "https://www.bevory.in/ghaziabad/product/espania-tempranillo-garnacha-fb6046b",
    "https://www.bevory.in/kota/product/espania-macabeo-sauvignon-d634917",
  ],
  especial: [
    "https://www.bevory.in/gurgaon/brand/especial",
    "https://www.bevory.in/goa/product/jose-cuervo-especial-reposado-tequila-dcfb47c",
    "https://www.bevory.in/pune/product/santa-rita-120-reserva-especial-cabernet-sauvignon-1b2d4ad",
  ],
  estimulo: [
    "https://www.bevory.in/gurgaon/brand/estimulo",
    "https://www.bevory.in/gurgaon/product/estimulo-malbec-red-beebb43",
  ],
  "everyday-gold": [
    "https://www.bevory.in/gurgaon/brand/everyday-gold",
    "https://www.bevory.in/gurgaon/product/everyday-gold-prestige-whisky-fe428ab",
  ],
  extill: [
    "https://www.bevory.in/gurgaon/brand/extill",
    "https://www.bevory.in/gurgaon/product/extill-vodka-e4dc7d7",
  ],
  facewood: [
    "https://www.bevory.in/gurgaon/brand/facewood",
    "https://www.bevory.in/gurgaon/product/facewood-barrel-fired-whisky-9586920",
  ],
  famille: [
    "https://www.familleperrin.com/",
    "https://www.hugel.com/en/",
    "https://www.bevory.in/gurgaon/brand/famille",
  ],
};

export const BRAND_CONTENT_BATCH_81: Record<string, BrandPublicContent> = {
  "english-horse": {
    description: "English Horse is an Indian whisky label listed through English Horse Extra Special Whisky. The bottle sits in the everyday whisky space, built for soda, water, ice and simple highball serves.",
    story: "English Horse follows the old Indian whisky naming style where British clubroom cues meet local bar drinking. Its Extra Special expression gives the page one clear focus: a familiar 750 ml whisky format for casual home pours.",
    tastingNotes: [
      { title: "Grain Sweetness", description: "Cereal, caramel, vanilla and light dried fruit give the whisky an easy opening." },
      { title: "Warm Finish", description: "Mild oak, pepper and toasted grain carry through a short, warming finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with ice, chilled water or soda in a tall glass." },
      { subheading: "Food", description: "Pair with chicken pakora, paneer tikka, masala peanuts, mutton seekh or cheese toast." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken pakora", "paneer tikka", "masala peanuts", "mutton seekh", "cheese toast"] }],
    whyChoose: "English Horse is a straightforward Indian whisky for familiar mixed serves and spicy snacks.",
    faqs: [
      { question: "What is English Horse Extra Special Whisky?", answer: "It is an Indian whisky listing built around an approachable Extra Special whisky style." },
      { question: "How should English Horse be served?", answer: "Serve it with water, soda or ice alongside salty and spicy snacks." },
    ],
    finalVerdict: "English Horse works best as an easy whisky pick for highballs, home gatherings and snack-heavy evenings.",
    metaTitle: "English Horse Whisky Guide | BevOry",
    metaDescription: "Explore English Horse Extra Special Whisky notes, serving ideas, Indian snack pairings and city prices.",
  },
  "enso-reserve": {
    description: "Enso Reserve is a Japanese whisky listing centred on Enso Reserve Japanese Whisky. It belongs to the soft, polished Japanese whisky lane where fruit, vanilla and gentle oak are the main cues.",
    story: "The Enso name points to the Japanese circular symbol linked with clarity and balance. The Reserve bottle is shaped for drinkers who want a lighter whisky profile than heavily peated Scotch or bold Indian blends.",
    tastingNotes: [
      { title: "Soft Fruit", description: "Apple, pear, honey and vanilla create a mellow first impression." },
      { title: "Gentle Oak", description: "Light spice, toasted wood and a clean finish keep the whisky composed." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a tulip glass, over a clear cube, or as a Japanese-style highball with chilled soda." },
      { subheading: "Food", description: "Pair with yakitori, sushi, tandoori mushrooms, miso-glazed fish or salted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["yakitori", "sushi", "tandoori mushrooms", "miso-glazed fish", "salted almonds"] }],
    whyChoose: "Enso Reserve suits drinkers looking for a clean Japanese whisky profile without heavy smoke.",
    faqs: [
      { question: "What type of whisky is Enso Reserve?", answer: "It is listed as a Japanese whisky with a smooth, fruit-and-oak style." },
      { question: "What is the best serve for Enso Reserve?", answer: "Try it neat first, then as a chilled whisky highball with soda." },
    ],
    finalVerdict: "Enso Reserve is a calm Japanese whisky choice for highballs, light food and quieter sipping.",
    metaTitle: "Enso Reserve Whisky Guide | BevOry",
    metaDescription: "Explore Enso Reserve Japanese Whisky notes, highball serves, food pairings and city prices.",
  },
  episode: {
    description: "Episode is an Indian whisky label listed through Classic and Gold whisky bottles. It sits in the value-to-premium everyday whisky lane, with 375 ml and 750 ml formats visible across city pages.",
    story: "Episode works as a session-friendly Indian whisky name rather than a single limited expression. The Classic and Gold bottles give drinkers two familiar choices for mixed pours, quick gatherings and bar-style serves.",
    tastingNotes: [
      { title: "Classic Style", description: "Toasted grain, caramel, light fruit and gentle spice make the Classic bottle easy to mix." },
      { title: "Gold Style", description: "Softer vanilla, honey and mild oak give Gold a rounder profile." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, water, cola or ice; use a tall glass for lighter highballs." },
      { subheading: "Food", description: "Pair with chilli chicken, kebab rolls, paneer tikka, salted chips or fried fish." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli chicken", "kebab rolls", "paneer tikka", "salted chips", "fried fish"] }],
    whyChoose: "Episode is a useful Indian whisky page for comparing Classic and Gold labels by city.",
    faqs: [
      { question: "Which Episode whiskies are listed?", answer: "BevOry shows Episode Classic Whisky and Episode Gold Whisky listings." },
      { question: "Is Episode better neat or mixed?", answer: "It is best suited to water, soda, ice and casual whisky highballs." },
    ],
    finalVerdict: "Episode is made for simple whisky serves, spicy food and practical city-level comparison.",
    metaTitle: "Episode Whisky Guide | BevOry",
    metaDescription: "Explore Episode Classic and Gold Whisky notes, serving ideas, snack pairings and city prices.",
  },
  espania: {
    description: "Espania is a Spanish wine label listed through Macabeo Sauvignon white wine and Tempranillo Garnacha red wine. The range covers two of Spain's most useful table-wine lanes: crisp whites and juicy reds.",
    story: "Macabeo is widely grown in Spain and often brings citrus, apple and floral lift, while Tempranillo and Garnacha form a classic red-wine pairing across many Spanish regions. Espania uses those familiar grapes for approachable, food-ready bottles.",
    tastingNotes: [
      { title: "Macabeo Sauvignon", description: "Green apple, lemon, white flowers and a clean dry finish make the white fresh." },
      { title: "Tempranillo Garnacha", description: "Red cherry, plum, soft spice and gentle tannins shape the red blend." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve the white chilled; serve the red slightly cool in a medium red-wine glass." },
      { subheading: "Food", description: "Pair the white with tandoori fish or goat cheese; pair the red with lamb kebab, pizza or chorizo." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "goat cheese", "lamb kebab", "pizza", "chorizo"] }],
    whyChoose: "Espania gives Indian shoppers simple access to Spanish white and red grape styles.",
    faqs: [
      { question: "Which Espania wines are listed?", answer: "The listed bottles include Macabeo Sauvignon and Tempranillo Garnacha." },
      { question: "What food suits Espania Tempranillo Garnacha?", answer: "Try it with lamb kebab, pizza, roast chicken or tomato-based pasta." },
    ],
    finalVerdict: "Espania is a practical Spanish wine pick for crisp aperitif pours and easy red-wine dinners.",
    metaTitle: "Espania Wine Guide | BevOry",
    metaDescription: "Explore Espania Spanish wines, Macabeo Sauvignon, Tempranillo Garnacha, pairings and city prices.",
  },
  especial: {
    description: "Especial is a BevOry brand page for bottles using Especial as a key label term, led by Jose Cuervo Especial tequila and Santa Rita 120 Reserva Especial wines. The page helps separate tequila, Chilean wine and brandy listings that share the same word.",
    story: "Especial means special in Spanish and Portuguese, which is why it appears across very different drinks. For shoppers, the name most often points to Jose Cuervo's Especial tequila line or Reserva Especial wine labels.",
    tastingNotes: [
      { title: "Tequila Lane", description: "Agave, citrus, pepper, caramel and light oak define the Jose Cuervo Especial style." },
      { title: "Wine Lane", description: "Reserva Especial wines can move from crisp Sauvignon Blanc citrus to Cabernet blackcurrant and spice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use tequila in Margaritas and Palomas; chill Sauvignon Blanc and serve Cabernet slightly cool." },
      { subheading: "Food", description: "Pair tequila with tacos or tandoori prawns; pair reds with lamb chops, rajma or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tacos", "tandoori prawns", "lamb chops", "rajma", "aged cheddar"] }],
    whyChoose: "Especial is useful when you need to compare similarly named bottles without mixing tequila and wine intent.",
    faqs: [
      { question: "Is Especial one single alcohol brand?", answer: "No. On BevOry, Especial appears across different bottle names, including tequila and wine listings." },
      { question: "Which Especial tequila is common?", answer: "Jose Cuervo Especial Reposado is one of the best-known Especial tequila listings." },
    ],
    finalVerdict: "Especial is best treated as a shopper shortcut for checking the exact bottle style before choosing a serve.",
    metaTitle: "Especial Drinks Guide | BevOry",
    metaDescription: "Compare Especial tequila and wine listings, tasting notes, serving ideas, pairings and city prices.",
  },
  estimulo: {
    description: "Estimulo is an Argentinian red wine label listed through Estimulo Malbec Red. The bottle sits in the Mendoza-style Malbec lane, known for dark fruit, soft tannins and barbecue-friendly weight.",
    story: "Malbec became Argentina's signature red grape because it handles sunny vineyards and altitude-driven freshness well. Estimulo follows that approachable style with a 750 ml red built for grilled food and casual dinners.",
    tastingNotes: [
      { title: "Dark Fruit", description: "Plum, blackberry and black cherry give the wine a juicy core." },
      { title: "Soft Spice", description: "Cocoa, pepper and mild tannins make the finish smooth and food-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a red-wine glass and let the bottle breathe for a few minutes." },
      { subheading: "Food", description: "Pair with seekh kebab, grilled steak, mushroom galouti, pepper chicken or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["seekh kebab", "grilled steak", "mushroom galouti", "pepper chicken", "aged cheddar"] }],
    whyChoose: "Estimulo is a Malbec-led red for drinkers who want ripe fruit without aggressive tannin.",
    faqs: [
      { question: "What grape is Estimulo Malbec Red made from?", answer: "The listed bottle is a Malbec red wine." },
      { question: "What food pairs with Estimulo Malbec?", answer: "Grilled meats, kebabs, mushrooms, pepper chicken and hard cheese work well." },
    ],
    finalVerdict: "Estimulo is a reliable red-wine choice for grilled food, spice and relaxed dinners.",
    metaTitle: "Estimulo Malbec Wine Guide | BevOry",
    metaDescription: "Explore Estimulo Malbec Red notes, serving temperature, Indian food pairings and city prices.",
  },
  "everyday-gold": {
    description: "Everyday Gold is an Indian whisky label listed through Everyday Gold Prestige Whisky. It appears in multiple practical bottle sizes, including 375 ml, 500 ml, 750 ml and 1 litre formats.",
    story: "Everyday Gold sits exactly where its name points: a value-minded whisky for regular mixed serves. The Prestige label gives the bottle a familiar Indian whisky profile built around sweetness, grain and light oak.",
    tastingNotes: [
      { title: "Sweet Grain", description: "Caramel, cereal, vanilla and mild fruit make the first sip approachable." },
      { title: "Light Oak", description: "Toasted wood, pepper and a short warm finish suit soda and water serves." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, water, ice or cola in a simple highball glass." },
      { subheading: "Food", description: "Pair with masala peanuts, egg bhurji, chilli paneer, chicken tikka or fried papad." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["masala peanuts", "egg bhurji", "chilli paneer", "chicken tikka", "fried papad"] }],
    whyChoose: "Everyday Gold is a practical whisky page for regular mixed drinks and different bottle-size needs.",
    faqs: [
      { question: "What is Everyday Gold Prestige Whisky?", answer: "It is an Indian whisky listing available across several bottle sizes." },
      { question: "What is the best mixer for Everyday Gold?", answer: "Soda, chilled water, cola and ice are the most natural serves." },
    ],
    finalVerdict: "Everyday Gold is built for simple whisky drinking, shared snacks and straightforward value comparison.",
    metaTitle: "Everyday Gold Whisky Guide | BevOry",
    metaDescription: "Explore Everyday Gold Prestige Whisky notes, bottle sizes, serving ideas, pairings and city prices.",
  },
  extill: {
    description: "Extill is an Indian vodka label listed through Extill Vodka in 750 ml format. The bottle belongs to the neutral vodka lane for chilled shots, soda mixes and fruit-led cocktails.",
    story: "Extill keeps the focus on clean mixing rather than heavy flavour. Its simple vodka profile makes it useful for house parties, citrus drinks, cranberry serves and tall soda highballs.",
    tastingNotes: [
      { title: "Clean Vodka", description: "Neutral grain, light sweetness and faint citrus keep the palate crisp." },
      { title: "Smooth Finish", description: "A short, cool finish makes it easy to mix with soda, tonic or juice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled, with soda and lime, tonic, cranberry juice or in a Moscow Mule-style serve." },
      { subheading: "Food", description: "Pair with tandoori prawns, fries, sushi rolls, chilli chicken or cucumber salad." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "fries", "sushi rolls", "chilli chicken", "cucumber salad"] }],
    whyChoose: "Extill is a clean Indian vodka option for chilled shots and simple cocktail builds.",
    faqs: [
      { question: "What is Extill Vodka?", answer: "Extill is an Indian vodka listing in 750 ml format." },
      { question: "Which cocktails suit Extill?", answer: "Try vodka soda, cranberry vodka, lime highballs or Moscow Mule-style drinks." },
    ],
    finalVerdict: "Extill is a straightforward vodka choice for cold serves, mixers and party cocktails.",
    metaTitle: "Extill Vodka Guide | BevOry",
    metaDescription: "Explore Extill Vodka notes, cocktail ideas, chilled serves, food pairings and city prices.",
  },
  facewood: {
    description: "Facewood is an Indian whisky label listed through Facewood Barrel Fired Whisky. The bottle points toward a bolder oak-led whisky style made for highballs and neat trial pours.",
    story: "The Barrel Fired name gives Facewood a smoky, charred-wood personality in the Indian whisky aisle. Its page is useful for drinkers comparing richer whisky styles without moving into imported Scotch pricing.",
    tastingNotes: [
      { title: "Barrel Char", description: "Toasted oak, caramel, roasted grain and a hint of smoke lead the profile." },
      { title: "Spiced Warmth", description: "Pepper, clove, vanilla and dried fruit carry into a warming finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Try a small neat pour first, then add ice, soda or a splash of water." },
      { subheading: "Food", description: "Pair with tandoori chicken, smoked paneer, lamb seekh, barbecue wings or roasted cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "smoked paneer", "lamb seekh", "barbecue wings", "roasted cashews"] }],
    whyChoose: "Facewood is for Indian whisky drinkers who like charred oak, spice and heavier snack pairings.",
    faqs: [
      { question: "What is Facewood Barrel Fired Whisky?", answer: "It is an Indian whisky listing with an oak-forward Barrel Fired identity." },
      { question: "How should Facewood be served?", answer: "Serve neat, on ice, with water or with soda depending on how much oak intensity you want." },
    ],
    finalVerdict: "Facewood is a bolder Indian whisky pick for smoky snacks, soda serves and oak-led pours.",
    metaTitle: "Facewood Whisky Guide | BevOry",
    metaDescription: "Explore Facewood Barrel Fired Whisky notes, oak style, serving ideas, pairings and city prices.",
  },
  famille: {
    description: "Famille is a French wine page led by family-name bottles such as Famille Perrin Cotes du Rhone Reserve and Famille Hugel AOC Alsace Riesling. It spans Rhone red blends and Alsace Riesling rather than one single grape style.",
    story: "Famille Perrin is closely linked with the Perrin family's Rhone Valley work and Chateau de Beaucastel, while Hugel is a long-established Alsace family producer based in Riquewihr. Together, the listed bottles give shoppers two classic French regions on one page.",
    tastingNotes: [
      { title: "Rhone Red", description: "Red berry, plum, pepper, herbs and soft tannins suit the Famille Perrin Cotes du Rhone style." },
      { title: "Alsace Riesling", description: "Lime, green apple, white flowers and mineral acidity define the Famille Hugel Riesling lane." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Riesling chilled; serve Cotes du Rhone slightly cool in a red-wine glass." },
      { subheading: "Food", description: "Pair Riesling with tandoori fish or sushi; pair Rhone red with lamb chops, roast chicken or ratatouille." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "sushi", "lamb chops", "roast chicken", "ratatouille"] }],
    whyChoose: "Famille is useful for comparing two respected French family-wine styles: Alsace Riesling and Rhone red.",
    faqs: [
      { question: "Which Famille wines are listed?", answer: "Listings include Famille Perrin Cotes du Rhone Reserve and Famille Hugel AOC Alsace Riesling." },
      { question: "Is Famille one producer?", answer: "On BevOry, Famille covers different French family-name wines, mainly Perrin and Hugel listings." },
    ],
    finalVerdict: "Famille is a strong French wine page for shoppers choosing between crisp Riesling and food-ready Rhone red.",
    metaTitle: "Famille Wine Guide | BevOry",
    metaDescription: "Explore Famille Perrin and Famille Hugel wines, tasting notes, serving ideas, pairings and city prices.",
  },
};
