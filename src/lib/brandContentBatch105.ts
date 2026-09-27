import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_105 = [
  ["mr-jerrys", "Mr Jerrys", "India", "Ready to Drink", "pending-mr-jerrys"],
  ["mugiichi", "Mugiichi", "Japan", "Sake", "pending-mugiichi"],
  ["murano", "Murano", "India", "Rum", "pending-murano"],
  ["muscadet", "Muscadet", "France", "White Wine", "pending-muscadet"],
  ["muscadet-serve-et-maine-sur-lie", "Muscadet Serve Et Maine Sur Lie", "France", "White Wine", "pending-muscadet-serve-et-maine-sur-lie"],
  ["muscovy", "Muscovy", "India", "Vodka", "pending-muscovy"],
  ["my-pride", "My Pride", "India", "Made in India Whisky", "pending-my-pride"],
  ["napolean", "Napolean", "India", "Brandy", "pending-napolean"],
  ["napoleon", "Napoleon", "France", "Brandy", "pending-napoleon"],
  ["nasik-port", "Nasik Port", "India", "Red Wine", "pending-nasik-port"],
] as const;

export const BRAND_LOGOS_BATCH_105: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_105: Record<string, string[]> = {
  "mr-jerrys": [
    "https://yourstory.com/weekender/mr-jerrys-cocktails-arijit-bose-alco-bev",
    "https://hospitalitybizindia.com/news-track/we-plan-to-introduce-mr-jerrys-at-the-duty-free-outlets-in-indian-international-airportsrincy-varghese-brand-manager-blue-ocean-beverages/",
    "https://results.spiritsselection.com/en/results/2022/187184-mr-jerrys-espresso-martini",
  ],
  mugiichi: [
    "https://www.komasa.co.jp/products/genmai",
    "https://onlineshop.tokyoliquor.co.nz/products/shochumugiichi-romanbottle-shochu-25-alc-vol-720ml",
    "https://www.wabisabijapanliving.com/windows-mugiichi",
  ],
  murano: [
    "https://hermesdistil.com/murano/",
    "https://delhiexcise.gov.in/pdf/Price_25thNov.pdf",
  ],
  muscadet: [
    "https://www.muscadet.fr/en/the-nantes-vineyards/muscadet-sur-lie/",
    "https://www.inao.gouv.fr/en/node/5278",
  ],
  "muscadet-serve-et-maine-sur-lie": [
    "https://www.muscadet.fr/en/the-nantes-vineyards/muscadet-sur-lie/",
    "https://www.livcheers.com/nashik/liquor/henri-bourgeois-muscadet-serve-et-maine-sur-lie-750ml",
    "https://www.inao.gouv.fr/en/node/5278",
  ],
  muscovy: [
    "https://alcobrew.com/wp-content/uploads/2025/09/Draft-Red-Herring-Prospectus.pdf",
    "https://www.livcheers.com/mysore/liquor/muscovy-triple-distilled-grain-vodka-180ml",
    "https://bevco.in/wp-content/uploads/REPORTS/WH_REPORTS_LATEST_ONLY/ALB008.pdf",
  ],
  "my-pride": [
    "https://www.quickcompany.in/trademarks/5139103-my-pride-premium-whisky",
    "https://excise.cg.nic.in/Uploads/RSP_FL_2022_23.pdf",
  ],
  napolean: [
    "https://tasmac.reclaimchennai.city/catalogue?c=BRANDY&d=asc&s=value",
    "https://www.likar.app/liquor-price-list/goa",
  ],
  napoleon: [
    "https://www.livcheers.com/bangalore/brand/napoleon",
    "https://tasmac.reclaimchennai.city/catalogue?c=BRANDY&d=asc&s=value",
    "https://www.vinbros.in/documents/PRICE-LIST-USD-W.E.F-01.06.2024-PDF.pdf",
  ],
  "nasik-port": [
    "https://www.livcheers.com/delhi/liquor/nasik-port-gold-red-wine-750ml",
    "https://nsearchives.nseindia.com/corporate/Registration_12122025021813_AspriDRHP.pdf",
  ],
};

export const BRAND_CONTENT_BATCH_105: Record<string, BrandPublicContent> = {
  "mr-jerrys": {
    description: "Mr Jerrys is a Goa-born ready-to-drink cocktail label from Blue Ocean Beverages. Its BevOry listings include Very Merry Toddy, Midday Negroni, Long Island Iced Tea and Cucumber & Elderflower Fizz in 500ml formats.",
    story: "The brand was launched in 2020 by Mrinal Manu and Rincy Varghese, with Arijit Bose and Pankaj Balachandran involved in cocktail development. It belongs to the newer Indian bottled-cocktail wave, built around bar-style mixed drinks for home pours.",
    tastingNotes: [
      { title: "Cocktail Range", description: "Expect citrus, tea, spice, bitter-orange or cucumber-led profiles depending on the bottle." },
      { title: "Ready Pour", description: "The style is mixed and finished before opening, so the drink lands closer to a cocktail than a flavoured soda." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill well, pour over hard ice and use a short glass or highball depending on the cocktail." },
      { subheading: "Food", description: "Pair with Goan chorizo pao, masala fries, peri-peri chicken, nachos or chilli cheese toast." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["Goan chorizo pao", "masala fries", "peri-peri chicken", "nachos", "chilli cheese toast"] }],
    whyChoose: "Mr Jerrys brings Indian bottled cocktails into a convenient format without asking you to build the drink from scratch.",
    faqs: [
      { question: "What is Mr Jerrys?", answer: "Mr Jerrys is an Indian ready-to-drink cocktail brand from Blue Ocean Beverages in Goa." },
      { question: "Which Mr Jerrys cocktails are listed on BevOry?", answer: "Listings include Very Merry Toddy, Midday Negroni, Long Island Iced Tea and Cucumber & Elderflower Fizz." },
    ],
    finalVerdict: "Mr Jerrys suits house parties, beach-trip coolers and cocktail drinkers who want a chilled pour with real mixed-drink character.",
    metaTitle: "Mr Jerrys Cocktail Guide | BevOry",
    metaDescription: "Explore Mr Jerrys ready cocktails, serving ideas, Goa snack pairings and city prices on BevOry.",
  },
  mugiichi: {
    description: "Mugiichi is a Japanese barley shochu from Komasa Jyozo in Kagoshima. BevOry lists Mugiichi Roman in a 720ml bottle under the sake and Japanese drinks shelf.",
    story: "Komasa Jyozo's product information identifies Mugiichi as a barley shochu made with white koji. The distillery sits in Kagoshima, a region strongly associated with Japanese honkaku shochu traditions.",
    tastingNotes: [
      { title: "Barley Shochu", description: "Clean grain, soft cereal sweetness and a light fruity edge lead the aroma." },
      { title: "Smooth Finish", description: "The palate stays mild and refreshing, with a crisp close rather than heavy oak or smoke." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve on the rocks, with chilled water, soda, or warm water for a softer Japanese-style pour." },
      { subheading: "Food", description: "Pair with yakitori, tempura prawns, sushi, chicken gyoza or pepper mushroom skewers." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["yakitori", "tempura prawns", "sushi", "chicken gyoza", "pepper mushroom skewers"] }],
    whyChoose: "Mugiichi is a clean barley shochu for drinkers who want Japanese grain character without whisky weight.",
    faqs: [
      { question: "What is Mugiichi made from?", answer: "Komasa Jyozo lists Mugiichi as a barley shochu made with white koji." },
      { question: "How do you drink Mugiichi?", answer: "It works on ice, with soda, with chilled water, or with warm water." },
    ],
    finalVerdict: "Mugiichi is a crisp Japanese shochu that pairs naturally with grilled, fried and soy-led snacks.",
    metaTitle: "Mugiichi Shochu Guide | BevOry",
    metaDescription: "Explore Mugiichi barley shochu notes, Komasa Jyozo context, serves, pairings and city prices.",
  },
  murano: {
    description: "Murano is an Indian dark rum from Hermes Distillery. The producer describes it as a molasses-based rum aged in oak barrels with added sugar cane.",
    story: "Hermes positions Murano among Indian rum brands with a dark, oak-led profile. BevOry lists Murano Rum in 180ml and 750ml formats for city-level comparison.",
    tastingNotes: [
      { title: "Dark Rum", description: "Molasses, brown sugar, vanilla and light oak spice shape the core flavour." },
      { title: "Cola Friendly", description: "The finish is sweet, warming and easy to stretch with cola, lime or ginger ale." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over ice with cola and lime, or keep it simple with chilled water." },
      { subheading: "Food", description: "Pair with tandoori wings, pork chilli, fried fish, peanut chaat or chocolate brownie." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori wings", "pork chilli", "fried fish", "peanut chaat", "chocolate brownie"] }],
    whyChoose: "Murano is a straightforward Indian dark rum for cola serves and bold snacks.",
    faqs: [
      { question: "Who makes Murano Rum?", answer: "Murano Rum is listed by Hermes Distillery." },
      { question: "What is Murano Rum made from?", answer: "The producer describes it as molasses-based rum aged in oak barrels with sugar cane." },
    ],
    finalVerdict: "Murano is best treated as a chilled, mixer-friendly rum for spicy Indian food and casual evenings.",
    metaTitle: "Murano Rum Guide | BevOry",
    metaDescription: "Explore Murano Indian rum notes, oak-aged molasses style, food pairings and city prices.",
  },
  muscadet: {
    description: "Muscadet is a dry white wine from the Nantes area of France's Loire Valley. It is made from the Melon de Bourgogne grape and is prized for crisp acidity, saline freshness and seafood pairing.",
    story: "The Muscadet region includes appellations such as Muscadet Sevre et Maine, Cotes de Grandlieu and Coteaux de la Loire. Wines marked sur lie spend time on fine lees, adding texture and a lightly creamy edge to the otherwise brisk style.",
    tastingNotes: [
      { title: "Loire Freshness", description: "Lemon, green apple, pear skin and sea-salt minerality drive the aroma." },
      { title: "Lees Texture", description: "Sur lie bottlings add subtle bread dough, roundness and a longer dry finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a white-wine glass, cool rather than icy." },
      { subheading: "Food", description: "Pair with oysters, grilled prawns, Goan fish curry, sushi or lemon butter chicken." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["oysters", "grilled prawns", "Goan fish curry", "sushi", "lemon butter chicken"] }],
    whyChoose: "Muscadet is one of the sharpest white-wine choices for seafood, coastal food and hot-weather drinking.",
    faqs: [
      { question: "Is Muscadet a grape?", answer: "No. Muscadet is a Loire wine style and appellation; the grape is Melon de Bourgogne." },
      { question: "What does sur lie mean for Muscadet?", answer: "Sur lie means the wine rested on fine lees, adding texture and subtle savoury depth." },
    ],
    finalVerdict: "Muscadet is a bright, mineral French white for seafood tables and crisp white-wine drinkers.",
    metaTitle: "Muscadet White Wine Guide | BevOry",
    metaDescription: "Explore Muscadet Loire white wine notes, Melon de Bourgogne, sur lie style and city prices.",
  },
  "muscadet-serve-et-maine-sur-lie": {
    description: "Muscadet Serve Et Maine Sur Lie is BevOry's spelling for Muscadet Sevre et Maine Sur Lie, a dry Loire white wine. It comes from the Nantes vineyard area and is made from Melon de Bourgogne.",
    story: "Sevre et Maine is the best-known Muscadet sub-appellation, named after two rivers south-east of Nantes. The sur lie ageing style keeps the wine in contact with fine lees before bottling, giving extra texture without losing the sharp coastal freshness.",
    tastingNotes: [
      { title: "Citrus And Mineral", description: "Lemon peel, green apple, white flowers and stony salinity sit at the centre." },
      { title: "Sur Lie Feel", description: "Fine lees contact adds a faint creamy note and a clean, persistent dry finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a narrow white-wine glass and let it open for a few minutes." },
      { subheading: "Food", description: "Pair with butter garlic prawns, rava-fried fish, oysters, crab cakes or paneer malai tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["butter garlic prawns", "rava-fried fish", "oysters", "crab cakes", "paneer malai tikka"] }],
    whyChoose: "Muscadet Sevre et Maine Sur Lie is a precise Loire white when you want acidity, salt and seafood-ready texture.",
    faqs: [
      { question: "What grape is used in Muscadet Sevre et Maine?", answer: "The wine is made from Melon de Bourgogne." },
      { question: "What food works with Muscadet Sur Lie?", answer: "Seafood, fried fish, prawns, oysters and creamy paneer starters are strong pairings." },
    ],
    finalVerdict: "Muscadet Sevre et Maine Sur Lie is a clean, dry white built for coastal food and crisp refreshment.",
    metaTitle: "Muscadet Sevre Et Maine Guide | BevOry",
    metaDescription: "Explore Muscadet Sevre et Maine Sur Lie notes, Melon de Bourgogne style, pairings and city prices.",
  },
  muscovy: {
    description: "Muscovy is an Indian vodka label listed on BevOry in plain and flavoured variants. Current bottles include Triple Distilled Grain Vodka, Orange Vodka, Lemon Vodka and Apple Vodka.",
    story: "Trade filings and public Indian liquor lists connect Muscovy to the mainstream Indian vodka shelf. The range uses a neutral vodka base, with citrus and apple flavours built for chilled shots and simple mixed drinks.",
    tastingNotes: [
      { title: "Grain Vodka", description: "The plain expression is clean, light and neutral, with a short cereal finish." },
      { title: "Flavoured Range", description: "Orange, lemon and apple versions bring bright fruit sweetness for easy long drinks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled, over ice with soda, or with tonic and a citrus wedge." },
      { subheading: "Food", description: "Pair with peri-peri fries, chicken tikka, fried momos, masala peanuts or lemony fish." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["peri-peri fries", "chicken tikka", "fried momos", "masala peanuts", "lemony fish"] }],
    whyChoose: "Muscovy is a practical vodka option for clean highballs and fruit-flavoured party serves.",
    faqs: [
      { question: "What Muscovy vodkas are listed on BevOry?", answer: "BevOry lists Triple Distilled Grain Vodka along with Orange, Lemon and Apple variants." },
      { question: "How should Muscovy Vodka be served?", answer: "Serve it chilled, with soda, tonic or a citrus garnish." },
    ],
    finalVerdict: "Muscovy works best as a chilled vodka for simple mixers, citrus serves and spicy snack plates.",
    metaTitle: "Muscovy Vodka Guide | BevOry",
    metaDescription: "Explore Muscovy vodka notes, flavoured variants, mixer ideas, snack pairings and city prices.",
  },
  "my-pride": {
    description: "My Pride is an Indian whisky label linked with Chhattisgarh Distilleries. BevOry lists My Pride Whisky in a 750ml format under Made in India Whisky.",
    story: "Public trademark and Chhattisgarh excise records identify My Pride Premium Whisky in the Indian IMFL whisky market. The brand belongs to the everyday Indian whisky segment, where soda, water and snack pairings matter more than formal tasting ritual.",
    tastingNotes: [
      { title: "Indian Whisky", description: "Caramel, grain sweetness, light oak and pepper give the whisky its familiar profile." },
      { title: "Mixer Friendly", description: "The finish is direct and warming, suited to soda, water and ice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with chilled soda, water and ice, or taste a small neat pour first." },
      { subheading: "Food", description: "Pair with mutton seekh, chilli chicken, paneer tikka, roasted chana or masala peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "chilli chicken", "paneer tikka", "roasted chana", "masala peanuts"] }],
    whyChoose: "My Pride is a familiar Indian whisky pick for simple highballs and spicy bar snacks.",
    faqs: [
      { question: "Who is linked with My Pride Whisky?", answer: "Public trademark records list Chhattisgarh Distilleries Public Limited for My Pride Premium Whisky." },
      { question: "What size is My Pride listed in on BevOry?", answer: "BevOry lists My Pride Whisky in a 750ml format." },
    ],
    finalVerdict: "My Pride is a no-fuss Indian whisky for soda serves, ice and robust snacks.",
    metaTitle: "My Pride Whisky Guide | BevOry",
    metaDescription: "Explore My Pride Indian whisky notes, serving ideas, snack pairings and city prices.",
  },
  napolean: {
    description: "Napolean is a brandy listing on BevOry tied to Napolean French Spirit Syrens in a 1 litre format. The spelling appears separately from Napoleon, so this guide focuses on that specific Indian retail listing.",
    story: "Tamil Nadu retail data lists Napoleon French Spirit Syrens under brandy, supplied through Aspri Spirits. The name points to the French-style brandy tradition while the BevOry entry keeps the Napolean spelling used in the product listing.",
    tastingNotes: [
      { title: "French-Style Brandy", description: "Expect grape spirit warmth, dried fruit, caramel and soft oak spice." },
      { title: "Long Pour", description: "The style works best with water, soda or a small amount of cola rather than heavy cocktail treatment." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve in a balloon glass with a splash of water, or over ice with soda." },
      { subheading: "Food", description: "Pair with chicken pepper fry, mutton sukka, dark chocolate, cashew pakora or plum cake." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken pepper fry", "mutton sukka", "dark chocolate", "cashew pakora", "plum cake"] }],
    whyChoose: "Napolean is for drinkers seeking an Indian-listed French-style brandy in a large-format bottle.",
    faqs: [
      { question: "What is Napolean on BevOry?", answer: "BevOry lists Napolean French Spirit Syrens under Brandy." },
      { question: "Is Napolean the same as Napoleon?", answer: "BevOry keeps Napolean as a separate spelling because the listed product uses that name." },
    ],
    finalVerdict: "Napolean is a practical brandy-style pour for ice, soda and peppery Indian snacks.",
    metaTitle: "Napolean Brandy Guide | BevOry",
    metaDescription: "Explore Napolean French Spirit Syrens notes, brandy serving ideas, pairings and city prices.",
  },
  napoleon: {
    description: "Napoleon is a brandy name on BevOry covering French-style brandy and liqueur listings. Products include Napoleon VSOP French Brandy, A. Baronet VSOP Napoleon Finest Brandy and Napoleon XO Royal Castle.",
    story: "In brandy culture, Napoleon commonly signals a mature, oak-influenced style rather than one single producer. Indian retail listings use the name across several French-style brandies, so flavour depends on the exact bottle.",
    tastingNotes: [
      { title: "Oak And Fruit", description: "Dried apricot, raisin, vanilla, caramel and mild baking spice are the natural flavour markers." },
      { title: "VSOP Leaning", description: "The better bottlings show smoother oak, rounder fruit and less raw spirit heat." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a snifter, with one ice cube, or with soda for a lighter pour." },
      { subheading: "Food", description: "Pair with galouti kebabs, pepper chicken, baked brie, walnut cake or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "pepper chicken", "baked brie", "walnut cake", "dark chocolate"] }],
    whyChoose: "Napoleon brandy appeals when you want grape-spirit warmth, oak sweetness and dessert-friendly depth.",
    faqs: [
      { question: "What Napoleon products are listed on BevOry?", answer: "Listings include Napoleon VSOP French Brandy, A. Baronet VSOP Napoleon Finest Brandy and Napoleon XO Royal Castle." },
      { question: "How should Napoleon brandy be served?", answer: "Serve it neat, over one cube, or with soda if you prefer a longer drink." },
    ],
    finalVerdict: "Napoleon is a warm, oak-led brandy style for slow sipping, chocolate desserts and rich kebabs.",
    metaTitle: "Napoleon Brandy Guide | BevOry",
    metaDescription: "Explore Napoleon brandy notes, VSOP-style serves, dessert pairings and city prices.",
  },
  "nasik-port": {
    description: "Nasik Port is an Indian red wine listing on BevOry through Nasik Port Gold Red Wine. The name points to Nashik, Maharashtra, India's best-known wine belt.",
    story: "Nashik's wine identity is built around warm days, cooler nights and a broad spread of Indian table-wine styles. Nasik Port Gold Red Wine sits on the accessible side of that market, suited to casual chilled red-wine service.",
    tastingNotes: [
      { title: "Indian Red", description: "Ripe red fruit, jammy sweetness and soft spice give the wine an easy profile." },
      { title: "Port-Style Cue", description: "The name suggests a richer, sweeter red-wine direction rather than a lean dry table wine." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly chilled in a small wine glass; keep the bottle cool after opening." },
      { subheading: "Food", description: "Pair with paneer tikka, chicken 65, veg biryani, gulab jamun or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["paneer tikka", "chicken 65", "veg biryani", "gulab jamun", "dark chocolate"] }],
    whyChoose: "Nasik Port is an accessible Indian red when you want a softer, sweeter wine style.",
    faqs: [
      { question: "What Nasik Port wine is listed on BevOry?", answer: "BevOry lists Nasik Port Gold Red Wine in a 750ml format." },
      { question: "Should Nasik Port be chilled?", answer: "A light chill helps the fruit feel fresher and keeps sweetness in balance." },
    ],
    finalVerdict: "Nasik Port is a relaxed Indian red for sweet-leaning palates, spicy snacks and simple desserts.",
    metaTitle: "Nasik Port Red Wine Guide | BevOry",
    metaDescription: "Explore Nasik Port Gold Red Wine notes, Nashik context, serving ideas and city prices.",
  },
};
