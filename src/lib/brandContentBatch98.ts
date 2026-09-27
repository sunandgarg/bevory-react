import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_98 = [
  ["les-legendes", "Les Legendes", "France", "Wine", "pending-les-legendes"],
  ["les-legendres", "Les Legendres", "France", "Wine", "pending-les-legendres"],
  ["les-terrasses", "Les Terrasses", "France", "Wine", "pending-les-terrasses"],
  ["les-terroirs", "Les Terroirs", "France", "Wine", "pending-les-terroirs"],
  ["lesprit-de-bacchus", "L'Esprit De Bacchus", "France", "Wine", "pending-lesprit-de-bacchus"],
  ["leyenda", "Leyenda", "Spain", "Sherry", "pending-leyenda"],
  ["light-house", "Light House", "Scotland", "Whisky", "pending-light-house"],
  ["lilas-kangaro", "Lilas Kangaro", "India", "Beer", "pending-lilas-kangaro"],
  ["limoncello", "Limoncello", "Italy", "Liqueur", "pending-limoncello"],
  ["limu", "Limu", "Italy", "Liqueur", "pending-limu"],
] as const;

export const BRAND_LOGOS_BATCH_98: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_98: Record<string, string[]> = {
  "les-legendes": [
    "https://www.lafite.com/les-legendes-r/",
    "https://www.palmbay.com/wines/les-legendes/bordeaux-blanc-2/",
    "https://www.bevory.in/delhi/product/les-legendes-bordeaux-blanc-e4dde5b",
  ],
  "les-legendres": [
    "https://www.lafite.com/les-legendes-r/",
    "https://www.bordeaux.com/en/selection/les-legendes-medoc/",
    "https://www.bevory.in/delhi/product/les-legendres-les-legenderes-bordeaux-red-60cfbc4",
  ],
  "les-terrasses": [
    "https://www.vignerons-ardechois.com/en/wines/category/signatures",
    "https://wicklowwineco.ie/shop/wine/roses/dry_rose/les-terrasses-dardeche-rose/",
    "https://www.bevory.in/gurgaon/product/igp-les-terrasses-rose-4ceca81",
  ],
  "les-terroirs": [
    "https://www.bevory.in/bangalore/product/les-terroirs-merlot-9bcfb96",
    "https://www.bevory.in/bangalore/product/les-terroirs-chardonnay-63370a5",
    "https://www.bevory.in/pune/product/les-terroirs-merlot-9bcfb96",
  ],
  "lesprit-de-bacchus": [
    "https://www.vivino.com/ES/en/l-esprit-de-bacchus-bordeaux-bordeaux-red-wine-v-tydze/w/4317765",
    "https://www.bevory.in/pune/product/lesprit-de-bacchus-l-esprit-de-bacchus-bordeaux-rouge-17ab67a",
  ],
  leyenda: [
    "https://www.wine.com/product/bodegas-m-gil-luque-leyenda-cream-sherry/155424",
    "https://www.kysela.com/wine/leyenda-cream.html?format=pdf",
    "https://www.sherry.wine/sherry-wine/sweet-sherry-wines/cream",
    "https://www.bevory.in/mumbai/product/leyenda-cream-sherry-759203c",
  ],
  "light-house": [
    "https://www.bravenewspirits.com/whiskies/lighthouse-whisky",
    "https://www.bcctaipei.com/beverages/lighthouse-blended-scotch-whisky",
    "https://www.bevory.in/hyderabad/product/light-house-light-house-blended-scotch-whisky-71f4f72",
  ],
  "lilas-kangaro": [
    "https://untappd.com/b/lilasons-kangaro-10000/1557434",
    "https://liquorsai.com/liquor/lilas-kangaro-10000-strong",
    "https://www.bevory.in/delhi/product/lilas-kangaro-10000-strong-8e13bd5",
  ],
  limoncello: [
    "https://www.mikiamo.com/",
    "https://www.livcheers.com/delhi/liquor/mikiamo-limoncello-liqueur-750ml",
    "https://www.bevory.in/delhi/product/limoncello-mikiamo-limoncello-liqueur-e412e3e",
  ],
  limu: [
    "https://www.livcheers.com/faridabad/liquor/limu-limencello-700ml",
    "https://tallidrinks.in/products/limu-limencello-700ml",
    "https://www.bevory.in/gurgaon/product/limu-limencello-eb213c2",
  ],
};

export const BRAND_CONTENT_BATCH_98: Record<string, BrandPublicContent> = {
  "les-legendes": {
    description: "Les Legendes is a Bordeaux wine range from Domaines Barons de Rothschild Lafite. In India, the tracked bottle is Les Legendes Bordeaux Blanc, a dry white Bordeaux style tied to Sauvignon Blanc and Semillon.",
    story: "The Rothschild family has produced wine in Bordeaux since the nineteenth century, and the Les Legendes range presents regional Bordeaux appellations in a more approachable form. Bordeaux Blanc usually draws its freshness from Sauvignon Blanc, with Semillon adding texture.",
    tastingNotes: [
      { title: "Bordeaux Blanc", description: "Lemon, grapefruit, white peach and cut grass give the white a clean, aromatic opening." },
      { title: "Fresh Texture", description: "Crisp acidity, light herbal detail and a dry finish make it useful with seafood and starters." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled at 8-10C in a white-wine glass." },
      { subheading: "Food", description: "Pair with tandoori fish, prawn salad, goat cheese, lemon chicken or paneer tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "prawn salad", "goat cheese", "lemon chicken", "paneer tikka"] }],
    whyChoose: "Les Legendes is a polished Bordeaux Blanc for drinkers who want freshness with a Lafite-family connection.",
    faqs: [
      { question: "Who makes Les Legendes wines?", answer: "Les Legendes is made by Domaines Barons de Rothschild Lafite." },
      { question: "What style is Les Legendes Bordeaux Blanc?", answer: "It is a dry white Bordeaux style, usually shaped by Sauvignon Blanc and Semillon." },
    ],
    finalVerdict: "Les Legendes Bordeaux Blanc is a crisp French white for seafood, salads and refined casual pours.",
    metaTitle: "Les Legendes Wine Guide | BevOry",
    metaDescription: "Explore Les Legendes Bordeaux Blanc notes, Rothschild context, pairings and city prices on BevOry.",
  },
  "les-legendres": {
    description: "Les Legendres on BevOry refers to Les Legenderes Bordeaux Red, a French Bordeaux rouge listing. The style is a dry red blend built around classic Bordeaux fruit, tannin and savoury detail.",
    story: "Bordeaux red wines typically lean on Merlot, Cabernet Sauvignon and Cabernet Franc, with the exact balance changing by producer and vintage. Les Legendres gives Indian shoppers a straightforward entry into claret-style red wine.",
    tastingNotes: [
      { title: "Bordeaux Rouge", description: "Blackcurrant, plum, cherry and violet sit over a dry, medium-bodied palate." },
      { title: "Savoury Finish", description: "Cedar, tobacco leaf, graphite and firm tannins give the wine a dinner-table frame." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a red-wine glass; decant briefly if the bottle feels tight." },
      { subheading: "Food", description: "Pair with galouti kebabs, roast chicken, mushroom biryani, lamb chops or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "roast chicken", "mushroom biryani", "lamb chops", "aged cheddar"] }],
    whyChoose: "Les Legendres is useful when you want a dry Bordeaux red for rich food without an overly heavy profile.",
    faqs: [
      { question: "What is Les Legendres on BevOry?", answer: "It refers to Les Legenderes Bordeaux Red, a French red wine listing." },
      { question: "What food suits Les Legendres Bordeaux Red?", answer: "Kebabs, roast chicken, lamb chops and aged cheese suit its dry, tannic profile." },
    ],
    finalVerdict: "Les Legendres is a food-friendly Bordeaux red for savoury Indian and European meals.",
    metaTitle: "Les Legendres Bordeaux Guide | BevOry",
    metaDescription: "Explore Les Legendres Bordeaux Red notes, serving ideas, food pairings and city prices on BevOry.",
  },
  "les-terrasses": {
    description: "Les Terrasses is a French wine label tracked through red, white and rose bottles from the Ardeche and IGP-style shelves. Les Terrasses d'Ardeche Rose is commonly associated with Grenache and Syrah.",
    story: "Ardeche lies west of the Rhone, where cooperative producers and local growers make bright, fruit-led wines for everyday drinking. The Les Terrasses name fits that landscape of sunlit slopes, fresh rose and easy table wines.",
    tastingNotes: [
      { title: "Rose Style", description: "Strawberry, raspberry, citrus peel and a pale, crisp finish suit chilled summer pours." },
      { title: "Red And White Range", description: "The reds lean toward soft berry fruit, while the whites bring pear, citrus and gentle floral notes." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve rose and white chilled; serve red slightly cool in a simple wine glass." },
      { subheading: "Food", description: "Pair rose with tandoori prawns, the white with salads, and the red with chicken tikka or pizza." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "green salad", "chicken tikka", "pizza", "grilled vegetables"] }],
    whyChoose: "Les Terrasses is a flexible French table-wine pick when you want rose freshness and casual food pairing.",
    faqs: [
      { question: "What Les Terrasses wines are tracked?", answer: "BevOry tracks Les Terrasses rose, red and white wine listings." },
      { question: "What grapes are linked with Les Terrasses Rose?", answer: "Les Terrasses d'Ardeche Rose is commonly linked with Grenache and Syrah." },
    ],
    finalVerdict: "Les Terrasses works well for relaxed meals where chilled rose or easy French wine is the brief.",
    metaTitle: "Les Terrasses Wine Guide | BevOry",
    metaDescription: "Explore Les Terrasses French wine notes, Ardeche rose style, pairings and city prices on BevOry.",
  },
  "les-terroirs": {
    description: "Les Terroirs is a French wine label tracked in India through Merlot and Chardonnay bottles. The range gives shoppers familiar red and white varietals in 750 ml formats.",
    story: "The name points to the French idea of terroir, where soil, climate and site shape the final wine. In the Indian catalogue, Les Terroirs is easiest to understand through its two clear styles: soft Merlot and fresh Chardonnay.",
    tastingNotes: [
      { title: "Merlot", description: "Plum, cherry, soft tannins and light spice make the red smooth and easy to pair." },
      { title: "Chardonnay", description: "Pear, apple, citrus and gentle creaminess give the white a rounded but fresh profile." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Chardonnay chilled and Merlot slightly cool in standard wine glasses." },
      { subheading: "Food", description: "Pair Merlot with mutton seekh or pizza; match Chardonnay with butter chicken, prawns or paneer tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "pizza", "butter chicken", "garlic prawns", "paneer tikka"] }],
    whyChoose: "Les Terroirs is a simple French varietal range for drinkers choosing between Merlot and Chardonnay.",
    faqs: [
      { question: "What Les Terroirs wines are available?", answer: "BevOry tracks Les Terroirs Merlot and Les Terroirs Chardonnay." },
      { question: "How should Les Terroirs Chardonnay be served?", answer: "Serve it chilled with seafood, creamy chicken dishes or light vegetarian starters." },
    ],
    finalVerdict: "Les Terroirs is a practical French wine choice for familiar red and white grape styles.",
    metaTitle: "Les Terroirs Wine Guide | BevOry",
    metaDescription: "Explore Les Terroirs Merlot and Chardonnay notes, serving ideas, pairings and city prices on BevOry.",
  },
  "lesprit-de-bacchus": {
    description: "L'Esprit De Bacchus is a French Bordeaux red wine listing tracked in India through Bordeaux Rouge bottles. The style is a dry red blend with classic claret fruit and savoury structure.",
    story: "Bacchus is the Roman name tied to wine, harvest and celebration, making it a familiar reference on European wine labels. In this bottle, the important identity is Bordeaux: red-fruited, structured and built for food.",
    tastingNotes: [
      { title: "Bordeaux Fruit", description: "Black cherry, plum, cassis and redcurrant give the wine a clear fruit core." },
      { title: "Dry Finish", description: "Cedar, cocoa, light earth and firm tannins bring a savoury close." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Open 20 minutes before pouring and serve slightly cool in a red-wine glass." },
      { subheading: "Food", description: "Pair with mutton rogan josh, galouti kebabs, roast mushrooms, grilled steak or aged gouda." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton rogan josh", "galouti kebabs", "roast mushrooms", "grilled steak", "aged gouda"] }],
    whyChoose: "L'Esprit De Bacchus is a Bordeaux red for drinkers who want dry structure and dark fruit with dinner.",
    faqs: [
      { question: "What type of wine is L'Esprit De Bacchus?", answer: "It is tracked as a French Bordeaux red wine." },
      { question: "What food works with L'Esprit De Bacchus?", answer: "Rich kebabs, mutton dishes, mushrooms and aged cheese work well with its dry red profile." },
    ],
    finalVerdict: "L'Esprit De Bacchus is a savoury Bordeaux-style red for hearty food and measured pours.",
    metaTitle: "L'Esprit De Bacchus Wine Guide | BevOry",
    metaDescription: "Explore L'Esprit De Bacchus Bordeaux Rouge notes, food pairings and city prices on BevOry.",
  },
  leyenda: {
    description: "Leyenda is a Spanish sherry label tracked in India through Cream Sherry and Oloroso Sherry bottles. The cream style is a sweetened Oloroso profile from Andalusia's Jerez tradition.",
    story: "Cream sherry is made by blending oxidative Oloroso with sweet Pedro Ximenez, creating a darker, richer fortified wine. Leyenda's Indian listings sit in that dessert-friendly sherry space, with nutty depth and raisin sweetness.",
    tastingNotes: [
      { title: "Cream Sherry", description: "Raisin, fig, walnut, caramel and orange peel give the wine a rich, sweet profile." },
      { title: "Oloroso Depth", description: "Toasted nuts, dates, brown sugar and oxidative savouriness make the finish warming." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve lightly chilled in a small wine glass, or pour over ice with an orange slice." },
      { subheading: "Food", description: "Pair with gulab jamun, fruit cake, vanilla ice cream, blue cheese or roasted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["gulab jamun", "fruit cake", "vanilla ice cream", "blue cheese", "roasted almonds"] }],
    whyChoose: "Leyenda is a sweet Spanish sherry pick for dessert pairings and after-dinner sipping.",
    faqs: [
      { question: "What is Leyenda Cream Sherry?", answer: "It is a sweet sherry style based on Oloroso and Pedro Ximenez." },
      { question: "How should Leyenda sherry be served?", answer: "Serve it lightly chilled, in a small glass, or over ice with orange." },
    ],
    finalVerdict: "Leyenda is best for drinkers who want nutty, raisin-rich Spanish sherry after a meal.",
    metaTitle: "Leyenda Sherry Guide | BevOry",
    metaDescription: "Explore Leyenda Cream and Oloroso Sherry notes, serving ideas, pairings and city prices on BevOry.",
  },
  "light-house": {
    description: "Light House is a blended Scotch whisky from Brave New Spirits, tracked in India through classic and lightly peated 700 ml bottles. The range is designed as an approachable gateway into Scotch, with fruit, malt and a measured smoky touch.",
    story: "Brave New Spirits presents Light House in classic and lightly peated forms, giving new whisky drinkers a clear choice between softer malt and gentle peat. The lighthouse identity fits the whisky's role as a simple guide into blended Scotch.",
    tastingNotes: [
      { title: "Classic Blend", description: "Orchard fruit, vanilla, honey and light nutty malt shape the softer expression." },
      { title: "Lightly Peated", description: "Chocolate, fruit sweetness, soft smoke and charred wood give the peated bottle more grip." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, over ice, with soda, or as a highball with plenty of chilled sparkling water." },
      { subheading: "Food", description: "Pair with smoked chicken, tandoori mushrooms, mutton seekh, salted almonds or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked chicken", "tandoori mushrooms", "mutton seekh", "salted almonds", "dark chocolate"] }],
    whyChoose: "Light House is an accessible blended Scotch for drinkers exploring gentle smoke without heavy peat.",
    faqs: [
      { question: "Who makes Light House whisky?", answer: "Light House is a blended Scotch whisky from Brave New Spirits." },
      { question: "Is Light House smoky?", answer: "The lightly peated expression brings soft smoke, while the classic style is fruitier and milder." },
    ],
    finalVerdict: "Light House is a smart blended Scotch choice for highballs, ice pours and light peat exploration.",
    metaTitle: "Light House Scotch Guide | BevOry",
    metaDescription: "Explore Light House blended Scotch notes, classic and lightly peated styles, pairings and city prices.",
  },
  "lilas-kangaro": {
    description: "Lilas Kangaro is an Indian strong beer label linked with Kangaro 10000 from Lilasons. The tracked 500 ml format sits in the strong lager space, built for a bolder malt body and higher-strength profile.",
    story: "Lilasons is associated with Kangaro 10000 in Indian strong beer listings. The brand's identity is direct: strong lager, cold serve, and a no-fuss profile for drinkers who prefer weight over delicate hop aroma.",
    tastingNotes: [
      { title: "Strong Lager", description: "Malt sweetness, cereal grain, light corn and mild bitterness define the beer's main profile." },
      { title: "Bold Finish", description: "A warmer, fuller finish gives it more punch than standard light lagers." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve very cold in a chilled lager glass or straight from the can after proper cooling." },
      { subheading: "Food", description: "Pair with chicken tikka, chilli paneer, masala peanuts, seekh kebabs or spicy fries." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "chilli paneer", "masala peanuts", "seekh kebabs", "spicy fries"] }],
    whyChoose: "Lilas Kangaro is for drinkers who want a cold, strong Indian lager with spicy snacks.",
    faqs: [
      { question: "What style is Lilas Kangaro?", answer: "It is tracked as a strong lager-style beer under Kangaro 10000." },
      { question: "What food suits Lilas Kangaro?", answer: "Spicy Indian bar snacks such as chicken tikka, chilli paneer and masala peanuts work well." },
    ],
    finalVerdict: "Lilas Kangaro is a straightforward strong beer for cold serves and high-spice snacks.",
    metaTitle: "Lilas Kangaro Beer Guide | BevOry",
    metaDescription: "Explore Lilas Kangaro strong beer notes, serving ideas, spicy food pairings and city prices on BevOry.",
  },
  limoncello: {
    description: "Limoncello is an Italian lemon liqueur category tracked through bottles such as Mikiamo Limoncello, Luxardo Limoncello and Amalfi-style liqueurs. The style is built from lemon peel, spirit, sugar and water.",
    story: "Traditional limoncello is strongly linked with southern Italy, especially the Gulf of Naples, Sorrento, Capri and the Amalfi Coast. In India, newer labels such as Mikiamo have brought the citrus liqueur into modern bar and dessert occasions.",
    tastingNotes: [
      { title: "Lemon Zest", description: "Bright lemon peel, candied citrus and fresh zest give limoncello its vivid aroma." },
      { title: "Sweet Chill", description: "Sugar syrup, citrus oil and a smooth, cold finish make it a classic digestif." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve freezer-cold in a small glass, or mix with soda, tonic or sparkling wine." },
      { subheading: "Food", description: "Pair with lemon tart, panna cotta, rasmalai, fruit salad or almond biscotti." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lemon tart", "panna cotta", "rasmalai", "fruit salad", "almond biscotti"] }],
    whyChoose: "Limoncello is the go-to citrus liqueur for chilled shots, spritzes and dessert pairings.",
    faqs: [
      { question: "What is limoncello made from?", answer: "Limoncello is made by infusing lemon peel in spirit, then blending it with sugar syrup." },
      { question: "How should limoncello be served?", answer: "Serve it very cold as a digestif or use it in spritz-style cocktails." },
    ],
    finalVerdict: "Limoncello is a bright lemon liqueur for after-dinner pours and easy sparkling cocktails.",
    metaTitle: "Limoncello Liqueur Guide | BevOry",
    metaDescription: "Explore limoncello liqueur notes, Italian style, serving ideas, pairings and city prices on BevOry.",
  },
  limu: {
    description: "Limu is a fruit-liqueur label tracked in India through Limu Limencello 700 ml. The bottle is positioned as a citrus-forward limoncello-inspired liqueur with added botanicals.",
    story: "Limu sits close to the Italian limoncello family but uses a modern botanical angle rather than a strictly traditional lemon-only profile. The result is meant for chilled digestif pours and citrus-led cocktails.",
    tastingNotes: [
      { title: "Citrus And Herbs", description: "Lemon zest, lime peel, aromatic herbs and light spice shape the nose." },
      { title: "Sweet Botanical Finish", description: "Bright citrus, gentle sweetness and a clean finish make it easy to mix." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled, over crushed ice, with soda, or in a spritz with sparkling wine." },
      { subheading: "Food", description: "Pair with lemon tart, prawn skewers, fruit chaat, panna cotta or salted cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lemon tart", "prawn skewers", "fruit chaat", "panna cotta", "salted cashews"] }],
    whyChoose: "Limu is a lively citrus liqueur for drinkers who want limoncello sweetness with herbal lift.",
    faqs: [
      { question: "What is Limu Limencello?", answer: "Limu Limencello is a citrus-forward fruit liqueur inspired by limoncello." },
      { question: "How should Limu be mixed?", answer: "Use it chilled, with soda, or in a spritz with sparkling wine and plenty of ice." },
    ],
    finalVerdict: "Limu is a bright, botanical citrus liqueur for chilled pours and easy spritzes.",
    metaTitle: "Limu Limencello Guide | BevOry",
    metaDescription: "Explore Limu Limencello notes, citrus liqueur style, cocktail ideas and city prices on BevOry.",
  },
};
