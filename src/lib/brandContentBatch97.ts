import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_97 = [
  ["le-grand-dauphin", "Le Grand Dauphin", "France", "Cognac", "pending-le-grand-dauphin"],
  ["le-haut", "Le Haut", "France", "Wine", "pending-le-haut"],
  ["le-mire", "Le Mire", "Italy", "Wine", "pending-le-mire"],
  ["le-petit", "Le Petit", "France", "Wine", "pending-le-petit"],
  ["le-saint-emilion", "Le Saint Emilion", "France", "Wine", "pending-le-saint-emilion"],
  ["leap-year", "Leap Year", "United States", "Wine", "pending-leap-year"],
  ["legacy", "Legacy", "India", "Whisky", "pending-legacy"],
  ["legend", "Legend", "India", "Brandy", "pending-legend"],
  ["legion", "Legion", "India", "Whisky", "pending-legion"],
  ["les-clef", "Les Clef", "France", "Wine", "pending-les-clef"],
] as const;

export const BRAND_LOGOS_BATCH_97: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_97: Record<string, string[]> = {
  "le-grand-dauphin": [
    "https://www.pourbud.com/drinks/le-grand-dauphin-cognac",
    "https://www.livcheers.com/bangalore/brand/le-grand-dauphin",
    "https://www.bevory.in/hubli-dharwad/product/le-grand-dauphin-cognac-6878b89",
  ],
  "le-haut": [
    "https://www.saq.com/en/15225940",
    "https://www.medoc-bordeaux.com/en/medoc-chateaux/chateau-branaire-ducru-2/",
    "https://www.bevory.in/bangalore/product/le-haut-medoc-de-branaire-ducru-a4ca794",
  ],
  "le-mire": [
    "https://divinefw.com.au/wp-content/uploads/2020/08/Le-Mire-IGT-Rosso-Toscana-NEW.pdf",
    "https://www.italvin.be/fr/vins-rouges/279-le-mire.html",
    "https://www.bevory.in/pune/product/le-mire-rosso-toscana-bf0d117",
  ],
  "le-petit": [
    "https://www.vignoblescompagnie.com/wp-content/uploads/2024/03/BOOK-EXPORT-2024-NUMERIQUE-2-compresse.pdf",
    "https://www.wineenthusiast.com/buying-guide/le-petit-cochonnet-2015-merlot-pays-doc/",
    "https://www.bevory.in/delhi/product/le-petit-coch-the-lit-pig-merlot-d354270",
  ],
  "le-saint-emilion": [
    "https://www.saint-emilion-pomerol-fronsac.com/wp-content/uploads/2013/11/guide-pratique-en.pdf",
    "https://vins-saint-emilion.com/en/chateau-pdf/29950",
    "https://www.bevory.in/gurgaon/brand/le-saint-emilion",
  ],
  "leap-year": [
    "https://www.winc.com/products/2018-leap-year-white-wine-blend-california",
    "https://www.vivino.com/NL/en/leap-year-white-blend/w/9316929",
    "https://www.bevory.in/delhi/product/leap-year-white-blend-wine-9e94c77",
  ],
  legacy: [
    "https://www.thespiritsbusiness.com/2022/11/bacardi-enters-indian-whisky-category/",
    "https://www.financialexpress.com/business/brandwagon-zeenah-vilcassim-of-bacardi-on-growing-premium-offerings-under-dewars-besides-its-plan-to-acquire-new-brands-3003910/",
    "https://www.livcheers.com/goa/liquor/legacy-premium-blended-classic-whisky-750ml",
    "https://www.bevory.in/delhi/product/legacy-premium-blended-classic-whisky-d73febf",
  ],
  legend: [
    "https://somindia.com/product/legend-rare-brandy/",
    "https://www.bevory.in/indore/product/legend-rare-brandy-1160088",
    "https://www.bevory.in/pune/product/legend-premium-whisky-c3df89e",
  ],
  legion: [
    "https://www.njmblends.com/",
    "https://www.bevory.in/gurgaon/brand/legion",
  ],
  "les-clef": [
    "https://www.vivino.com/US/en/les-clefs-saint-estephe/w/6490832",
    "https://www.secwines.com/products/les-clefs-2021-saint-estephe-red-bordeaux",
    "https://www.bevory.in/delhi/brand/les-clef",
  ],
};

export const BRAND_CONTENT_BATCH_97: Record<string, BrandPublicContent> = {
  "le-grand-dauphin": {
    description: "Le Grand Dauphin is a French Cognac label appearing in India through Le Grand Dauphin Cognac 500 ml. It is tied to the Cognac appellation in the Charente region, where grape wine is double-distilled and oak-aged.",
    story: "The name borrows from old French court language, where the Dauphin was the heir to the throne. In the bottle, the useful context is classic Cognac craft: white wine distillation, maturation in oak and a brandy style built for slow sipping.",
    tastingNotes: [
      { title: "Cognac Fruit", description: "Dried apricot, raisin, orange peel and soft grape sweetness give the brandy its rounded opening." },
      { title: "Oak Finish", description: "Vanilla, toasted almond, oak spice and warm caramel carry the finish without feeling heavy." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a snifter, over one large cube, or with a short pour of soda for a lighter drink." },
      { subheading: "Food", description: "Pair with dark chocolate, almond biscotti, mutton seekh, plum cake or smoked cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["dark chocolate", "almond biscotti", "mutton seekh", "plum cake", "smoked cheese"] }],
    whyChoose: "Le Grand Dauphin is a French Cognac option for drinkers who want grape-spirit warmth, oak and dried fruit.",
    faqs: [
      { question: "What type of drink is Le Grand Dauphin?", answer: "Le Grand Dauphin is listed as a French Cognac, a grape brandy from the Cognac appellation." },
      { question: "How should Le Grand Dauphin Cognac be served?", answer: "Serve it neat, over ice, or with soda if you prefer a softer long drink." },
    ],
    finalVerdict: "Le Grand Dauphin is best suited to after-dinner sipping and rich, spiced snacks.",
    metaTitle: "Le Grand Dauphin Cognac Guide | BevOry",
    metaDescription: "Explore Le Grand Dauphin Cognac notes, serving ideas, food pairings and city prices on BevOry.",
  },
  "le-haut": {
    description: "Le Haut on BevOry refers to Le Haut-Medoc de Branaire-Ducru, a red Bordeaux wine from France. The wine comes from Chateau Branaire-Ducru's Bordeaux orbit and is built around Cabernet Sauvignon and Merlot.",
    story: "Chateau Branaire-Ducru is a Saint-Julien estate on Bordeaux's Left Bank, with Haut-Medoc parcels giving this label a broader appellation identity. The style sits in the Cabernet-led Bordeaux lane: dark fruit, firm structure and savoury mineral detail.",
    tastingNotes: [
      { title: "Left Bank Fruit", description: "Blackcurrant, blackberry, dark cherry and violet sit over a dry, structured palate." },
      { title: "Savoury Frame", description: "Graphite, cedar, olive and fine tannins give the wine a classic Haut-Medoc shape." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Decant for 30 minutes and serve slightly cool in a Bordeaux glass." },
      { subheading: "Food", description: "Pair with galouti kebabs, roast lamb, mushroom biryani, grilled steak or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "roast lamb", "mushroom biryani", "grilled steak", "aged cheddar"] }],
    whyChoose: "Le Haut is a serious Bordeaux pick for Cabernet structure without moving into grand-vin pricing.",
    faqs: [
      { question: "Where is Le Haut-Medoc de Branaire-Ducru from?", answer: "It comes from the Haut-Medoc appellation in Bordeaux, France." },
      { question: "Which grapes shape Le Haut?", answer: "The wine is led by Cabernet Sauvignon and Merlot, with vintage blends varying by release." },
    ],
    finalVerdict: "Le Haut is a polished French red for grilled meats, kebabs and structured Bordeaux drinking.",
    metaTitle: "Le Haut Bordeaux Wine Guide | BevOry",
    metaDescription: "Explore Le Haut-Medoc de Branaire-Ducru notes, Bordeaux style, pairings and city prices on BevOry.",
  },
  "le-mire": {
    description: "Le Mire is an Italian red wine label tracked in India through Le Mire Rosso Toscana IGT. The wine is a Tuscan red blend commonly associated with Sangiovese and Merlot.",
    story: "Toscana IGT gives winemakers room to blend regional grapes with international varieties while keeping a clear Tuscan identity. Le Mire follows that food-friendly path, leaning on Sangiovese's cherry acidity and Merlot's softer fruit.",
    tastingNotes: [
      { title: "Tuscan Red Fruit", description: "Red cherry, plum, dried herbs and tomato-leaf savouriness keep the wine lively." },
      { title: "Soft Spice", description: "Gentle tannins, black pepper and a dry finish make it easy to pour with dinner." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a medium red-wine glass; a short decant helps the fruit open." },
      { subheading: "Food", description: "Pair with pizza, tomato pasta, chicken tikka, mushroom kebabs or pecorino." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pizza", "tomato pasta", "chicken tikka", "mushroom kebabs", "pecorino"] }],
    whyChoose: "Le Mire is a useful Tuscan red when you want Sangiovese brightness with a softer Merlot edge.",
    faqs: [
      { question: "What is Le Mire Rosso Toscana?", answer: "It is an Italian Toscana IGT red wine, commonly built as a Sangiovese and Merlot blend." },
      { question: "What food suits Le Mire?", answer: "Pizza, tomato pasta, chicken tikka and mushroom kebabs suit its red-fruit acidity." },
    ],
    finalVerdict: "Le Mire is an easy Tuscan dinner wine with enough grip for Indian and Italian food.",
    metaTitle: "Le Mire Toscana Wine Guide | BevOry",
    metaDescription: "Explore Le Mire Rosso Toscana notes, Sangiovese Merlot style, pairings and city prices on BevOry.",
  },
  "le-petit": {
    description: "Le Petit on BevOry refers to Le Petit Cochonnet wines from France's Pays d'Oc. The Indian listings include Sauvignon Blanc, Merlot and rose bottles under the playful little-pig label.",
    story: "Le Petit Cochonnet sits in the southern French varietal-wine tradition, where the grape name is easy to spot and the style is made for casual meals. The range gives shoppers crisp white, soft red and dry rose options without a complicated Bordeaux-style label.",
    tastingNotes: [
      { title: "Sauvignon Blanc", description: "Lemon, grapefruit, green apple and grassy freshness give the white a brisk profile." },
      { title: "Merlot And Rose", description: "Merlot brings plum and cherry softness, while the rose leans toward red berries and citrus peel." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Sauvignon Blanc and rose chilled; serve Merlot slightly cool in a standard red-wine glass." },
      { subheading: "Food", description: "Pair the white with tandoori fish, the rose with chaat, and the Merlot with seekh kebabs or pizza." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "papdi chaat", "seekh kebabs", "pizza", "goat cheese salad"] }],
    whyChoose: "Le Petit is a flexible French wine range for mixed tables where guests want white, rose and red choices.",
    faqs: [
      { question: "What Le Petit wines are available on BevOry?", answer: "The tracked range includes Le Petit Cochonnet Sauvignon Blanc, Merlot and rose wines." },
      { question: "Where is Le Petit Cochonnet from?", answer: "Le Petit Cochonnet is associated with France's Pays d'Oc varietal wine style." },
    ],
    finalVerdict: "Le Petit is a friendly French table-wine pick for casual dinners, snacks and mixed preferences.",
    metaTitle: "Le Petit Wine Guide | BevOry",
    metaDescription: "Explore Le Petit Cochonnet Sauvignon Blanc, Merlot and rose notes, pairings and city prices on BevOry.",
  },
  "le-saint-emilion": {
    description: "Le Saint Emilion is a French red-wine listing connected with Saint-Emilion, the Right Bank Bordeaux appellation. The regional style is usually Merlot-led, often supported by Cabernet Franc and Cabernet Sauvignon.",
    story: "Saint-Emilion sits on Bordeaux's Right Bank around a medieval village known for limestone, clay and gravel sites. Its wines are prized for plush red fruit, savoury depth and a rounder structure than many Cabernet-heavy Left Bank bottles.",
    tastingNotes: [
      { title: "Right Bank Fruit", description: "Plum, red cherry, black raspberry and violet notes give the wine a generous opening." },
      { title: "Bordeaux Depth", description: "Cedar, tobacco leaf, cocoa and fine tannins bring structure to the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Open 20-30 minutes before serving and pour slightly cool in a large red-wine glass." },
      { subheading: "Food", description: "Pair with mutton rogan josh, roast chicken, galouti kebabs, mushroom risotto or aged gouda." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton rogan josh", "roast chicken", "galouti kebabs", "mushroom risotto", "aged gouda"] }],
    whyChoose: "Le Saint Emilion is a good introduction to Merlot-led Bordeaux with ripe fruit and dinner-table structure.",
    faqs: [
      { question: "What style is Saint-Emilion wine?", answer: "Saint-Emilion is a Right Bank Bordeaux red style, usually led by Merlot with Cabernet Franc support." },
      { question: "What food works with Le Saint Emilion?", answer: "Mutton rogan josh, roast chicken, galouti kebabs and mushroom dishes suit its plush red-fruit profile." },
    ],
    finalVerdict: "Le Saint Emilion suits drinkers who want a softer, Merlot-led Bordeaux red for rich meals.",
    metaTitle: "Le Saint Emilion Wine Guide | BevOry",
    metaDescription: "Explore Le Saint Emilion Bordeaux notes, Right Bank style, food pairings and city prices on BevOry.",
  },
  "leap-year": {
    description: "Leap Year is a California white-wine label tracked in India through Leap Year White Blend. The style is built around easygoing fruit, bright acidity and a clean 750 ml table-wine format.",
    story: "California white blends often combine aromatic and citrus-led grapes to make a relaxed, fruit-forward wine. Leap Year follows that simple occasion-led idea: a bottle for chilled pours, party starters and lighter food.",
    tastingNotes: [
      { title: "White Blend Fruit", description: "Pear, melon, lemon and green apple give the wine a fresh, uncomplicated profile." },
      { title: "Clean Finish", description: "Light body, gentle sweetness of fruit and crisp acidity keep the finish refreshing." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a white-wine glass or keep it on ice for casual outdoor pours." },
      { subheading: "Food", description: "Pair with prawn salad, chilli paneer, lemon chicken, hummus or fresh fruit." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["prawn salad", "chilli paneer", "lemon chicken", "hummus", "fresh fruit"] }],
    whyChoose: "Leap Year is a bright California white blend for easy chilled drinking.",
    faqs: [
      { question: "What type of wine is Leap Year?", answer: "Leap Year is tracked as a California white blend wine." },
      { question: "How should Leap Year White Blend be served?", answer: "Serve it well chilled with light starters, seafood, salads or mildly spicy vegetarian snacks." },
    ],
    finalVerdict: "Leap Year works when you want a simple chilled white wine for snacks and casual meals.",
    metaTitle: "Leap Year White Wine Guide | BevOry",
    metaDescription: "Explore Leap Year White Blend notes, California style, food pairings and city prices on BevOry.",
  },
  legacy: {
    description: "Legacy is Bacardi India's premium blended Indian whisky, launched as the company's first made-in-India whisky innovation. The blend combines Indian grain spirits with Indian and Scottish malt whiskies.",
    story: "Bacardi entered the Indian whisky category with Legacy in 2022, placing it in a market where whisky dominates brown-spirit consumption. The liquid was designed for Indian drinkers who want a locally made premium blend with malt depth and gentle smoke.",
    tastingNotes: [
      { title: "Malt And Grain", description: "Honey, dried fruit, vanilla and toasted oak sit over a smooth grain-whisky base." },
      { title: "Peaty Lift", description: "Subtle smoke, spice and a soft vanilla finish give the blend a Scotch-influenced edge." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with a splash of water, over ice, or as a whisky highball with soda." },
      { subheading: "Food", description: "Pair with tandoori chicken, mutton seekh, smoked almonds, chilli paneer or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "mutton seekh", "smoked almonds", "chilli paneer", "dark chocolate"] }],
    whyChoose: "Legacy brings Bacardi's Indian whisky play into a smooth, malt-accented blend made for modern home bars.",
    faqs: [
      { question: "Who makes Legacy whisky?", answer: "Legacy is made by Bacardi India as a premium Indian blended whisky." },
      { question: "What is Legacy whisky made from?", answer: "The blend combines Indian grain spirits with Indian and Scottish malt whiskies." },
    ],
    finalVerdict: "Legacy is a polished Indian whisky choice for highballs, ice pours and smoky-spiced food.",
    metaTitle: "Legacy Indian Whisky Guide | BevOry",
    metaDescription: "Explore Legacy whisky notes, Bacardi India context, serving ideas, pairings and city prices on BevOry.",
  },
  legend: {
    description: "Legend is an Indian spirits label tracked through Legend Rare Brandy and Legend Premium Whisky. The brand sits in the domestic brown-spirits shelf, with brandy and whisky styles made for familiar Indian serves.",
    story: "Legend Rare Brandy is part of SOM Group's portfolio, where grape-spirit character and wooden-cask maturation define the brandy expression. Indian shelves also show Legend Premium Whisky, so the name works as a broader brown-spirit family.",
    tastingNotes: [
      { title: "Rare Brandy", description: "Raisin, caramel, dried fruit and warm oak spice shape the brandy profile." },
      { title: "Premium Whisky", description: "Grain sweetness, light malt, vanilla and gentle spice give the whisky a mixer-friendly finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve brandy neat or with warm water; serve whisky with soda, water or ice." },
      { subheading: "Food", description: "Pair with chicken tikka, mutton pepper fry, roasted peanuts, plum cake or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "mutton pepper fry", "roasted peanuts", "plum cake", "dark chocolate"] }],
    whyChoose: "Legend is useful when you want affordable Indian brown spirits for classic home serves.",
    faqs: [
      { question: "What Legend products are tracked?", answer: "BevOry tracks Legend Rare Brandy and Legend Premium Whisky listings." },
      { question: "How should Legend Rare Brandy be served?", answer: "Serve it neat, with warm water, over ice or with soda." },
    ],
    finalVerdict: "Legend is a straightforward Indian brandy and whisky choice for spiced snacks and relaxed pours.",
    metaTitle: "Legend Brandy Whisky Guide | BevOry",
    metaDescription: "Explore Legend Rare Brandy and Premium Whisky notes, serving ideas, pairings and city prices on BevOry.",
  },
  legion: {
    description: "Legion is an Indian premium blended whisky from NJM Blends, launched first in Goa in 2019. The blend combines Indian grain and malt spirit matured in American oakwood casks with Highland and Islay Scotch malts.",
    story: "NJM Blends positions Legion around a master blender with more than 60 years of experience in alcobev blending. The whisky's identity leans into subtle peat, sea-salt hints and malt warmth rather than a sweet-only Indian whisky profile.",
    tastingNotes: [
      { title: "Peaty Malt", description: "Soft peat, malt biscuit, vanilla and charred wood give Legion a smoky opening." },
      { title: "Warm Finish", description: "Cinnamon spice, salty malt and earthy smoke carry into a rounded finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with a splash of water to open the malt, or pour over ice for a softer drink." },
      { subheading: "Food", description: "Pair with smoked chicken, tandoori mushrooms, mutton seekh, salted almonds or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked chicken", "tandoori mushrooms", "mutton seekh", "salted almonds", "dark chocolate"] }],
    whyChoose: "Legion stands out among Indian blends for its Scotch malt influence and gentle peat character.",
    faqs: [
      { question: "Who makes Legion whisky?", answer: "Legion Premium Blended Whisky is made by NJM Blends in India." },
      { question: "What gives Legion its smoky note?", answer: "The blend includes Highland and Islay Scotch malts, bringing subtle peat and charred wood notes." },
    ],
    finalVerdict: "Legion is a strong pick for drinkers who want an Indian blended whisky with real smoky-malt presence.",
    metaTitle: "Legion Indian Whisky Guide | BevOry",
    metaDescription: "Explore Legion Premium Blended Whisky notes, NJM Blends story, pairings and city prices on BevOry.",
  },
  "les-clef": {
    description: "Les Clef on BevOry refers to Les Clefs, a French red Bordeaux label associated with Saint-Estephe. The style is dry, structured and built around the dark-fruited character expected from the northern Medoc.",
    story: "Saint-Estephe sits at the northern end of Bordeaux's Medoc, where clay and gravel soils often produce firm, savoury reds. Les Clefs follows that regional lane, giving drinkers a Left Bank profile without needing a famous chateau name.",
    tastingNotes: [
      { title: "Saint-Estephe Fruit", description: "Blackcurrant, plum, cassis and dark cherry form the main fruit profile." },
      { title: "Firm Frame", description: "Cedar, graphite, tobacco leaf and grippy tannins give the wine a serious finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Decant for 30 minutes and serve slightly cool in a Bordeaux glass." },
      { subheading: "Food", description: "Pair with lamb chops, mutton seekh, pepper steak, mushroom kebabs or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb chops", "mutton seekh", "pepper steak", "mushroom kebabs", "aged cheddar"] }],
    whyChoose: "Les Clef is a sturdy French red for drinkers who like Cabernet-led Bordeaux structure.",
    faqs: [
      { question: "What kind of wine is Les Clef?", answer: "Les Clef is tracked as a French red Bordeaux wine associated with Saint-Estephe." },
      { question: "What food suits Les Clef?", answer: "Lamb chops, mutton seekh, pepper steak and aged cheddar suit its firm tannic profile." },
    ],
    finalVerdict: "Les Clef is a dinner-ready Bordeaux red for rich meat dishes and savoury vegetarian grills.",
    metaTitle: "Les Clef Bordeaux Wine Guide | BevOry",
    metaDescription: "Explore Les Clef Saint-Estephe notes, Bordeaux style, serving ideas and city prices on BevOry.",
  },
};
