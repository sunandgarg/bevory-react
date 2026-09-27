import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_103 = [
  ["mirinda", "Mirinda", "India", "Made in India Whisky", "pending-mirinda"],
  ["miss-valentine", "Miss Valentine", "France", "Rose Wine", "pending-miss-valentine"],
  ["moet-and", "Moet &", "France", "Champagne", "pending-moet-and"],
  ["mog-asun", "Mog Asun", "India", "Made in India Whisky", "pending-mog-asun"],
  ["mohulo", "Mohulo", "India", "Gin", "pending-mohulo"],
  ["mon-frere", "Mon Frere", "United States", "White Wine", "pending-mon-frere"],
  ["mon-petit", "Mon Petit", "France", "Wine", "pending-mon-petit"],
  ["monarch", "Monarch", "India", "Brandy", "pending-monarch"],
  ["mont-blanc", "Mont Blanc", "France", "Vodka", "pending-mont-blanc"],
  ["mont-castle", "Mont Castle", "India", "Made in India Whisky", "pending-mont-castle"],
] as const;

export const BRAND_LOGOS_BATCH_103: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_103: Record<string, string[]> = {
  mirinda: [
    "https://www.livcheers.com/kota/liquor/mirinda-classic-whisky-750ml",
    "https://www.livcheers.com/listing/brand/mirinda",
    "https://panotbook.com/wp-content/uploads/2022/07/Rajasthan-Liquor-Price-List.pdf",
    "https://www.bevory.in/agra/brand/mirinda",
  ],
  "miss-valentine": [
    "https://www.lesvalentines.com/en/miss-valentine-igp-mediterranee-2024-ar59.php",
    "https://www.lesvalentines.com/medias/1554-miss-valentine.pdf",
    "https://www.tallidrinks.com/product-page/miss-valentine-rose",
    "https://www.bevory.in/agra/brand/miss-valentine",
  ],
  "moet-and": [
    "https://www.moet.com/en-us/moet-imperial",
    "https://www.lvmh.com/our-maisons/wines-spirits/moet-chandon",
    "https://www.bevory.in/agra/brand/moet-and",
  ],
  "mog-asun": [
    "https://www.linkedin.com/company/mog-asun",
    "https://www.livcheers.com/goa/liquor/mog-asun-premium-whisky-750ml",
    "https://agnelashram.org/pdf/2021/MARCH-2021.pdf",
    "https://www.bevory.in/agra/brand/mog-asun",
  ],
  mohulo: [
    "https://www.nvgroup.co.in/pages/mohulo",
    "https://www.robbreportindia.com/food-and-drink/spirits/varun-jain-sanya-v-jain-mohulo-india-craft-sipping-gin-invite-only-showcase",
    "https://curlytales.com/step-into-the-world-of-mohulo-indias-first-sipping-gin-experience/",
    "https://www.bevory.in/agra/brand/mohulo",
  ],
  "mon-frere": [
    "https://www.palmbay.com/wines/mon-frere/chardonnay/",
    "https://www.bevory.in/agra/brand/mon-frere",
  ],
  "mon-petit": [
    "https://www.nfbl.co.in/our-brands/amon-petit-amour-rouge/",
    "https://www.bevory.in/agra/brand/mon-petit",
  ],
  monarch: [
    "https://stockdiscovery.s3.amazonaws.com/india/company/929/1341/AR-25.pdf",
    "https://usaspiritsratings.com/en/winner-brands/spirits/2026/tilakanagar-industries-ltd-3204/monarch-crafted-pure-grape-luxury-brandy-6488.htm",
    "https://www.livcheers.com/bangalore/liquor/monarch-crafted-brandy-750ml",
    "https://www.bevory.in/agra/brand/monarch",
  ],
  "mont-blanc": [
    "https://buy.vodka/faq/mont-blanc-vodka/",
    "https://www.winepoint.ro/spirtoase/vodka/mont-blanc/vodka-700-ml-40",
    "https://cove27.co.nz/products/mont-blanc-vodka",
    "https://www.bevory.in/agra/brand/mont-blanc",
  ],
  "mont-castle": [
    "https://www.livcheers.com/bangalore/liquor/mont-castle-blended-malt-whisky-750ml",
    "https://www.bevory.in/agra/brand/mont-castle",
  ],
};

export const BRAND_CONTENT_BATCH_103: Record<string, BrandPublicContent> = {
  mirinda: {
    description: "Mirinda Classic Whisky is an Indian blended whisky listed in BevOry's Made in India Whisky catalogue. It is a budget-friendly 750ml whisky style built around grain sweetness, soft oak spice and easy mixer serves.",
    story: "The name appears in Indian retail and excise listings as Mirinda Classic Whisky, separate from the soft-drink brand most consumers know. On shelves, it sits in the accessible Indian whisky segment where highballs, soda serves and party pours drive most usage.",
    tastingNotes: [
      { title: "Classic Indian Whisky", description: "Caramelised sugar, light oak spice and dried-fruit sweetness shape the aroma." },
      { title: "Mixer-Friendly Finish", description: "Vanilla, toffee and a touch of cinnamon keep the palate mellow and straightforward." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, cola, ginger ale or ice; keep the pour chilled for a cleaner highball." },
      { subheading: "Food", description: "Pair with chicken tikka, masala peanuts, chilli potato, seekh kebab or egg pakora." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "masala peanuts", "chilli potato", "seekh kebab", "egg pakora"] }],
    whyChoose: "Mirinda Classic Whisky is a simple Indian whisky pick for casual soda serves and spicy snacks.",
    faqs: [
      { question: "What type of drink is Mirinda Classic Whisky?", answer: "It is listed as an Indian blended whisky in the Made in India Whisky category." },
      { question: "How should Mirinda Classic Whisky be served?", answer: "Serve it over ice with soda, cola, ginger ale or a squeeze of lime." },
    ],
    finalVerdict: "Mirinda Classic Whisky works best as an easy, mixer-led Indian whisky for informal gatherings.",
    metaTitle: "Mirinda Classic Whisky Guide | BevOry",
    metaDescription: "Explore Mirinda Classic Whisky notes, mixer serves, Indian snack pairings and city prices.",
  },
  "miss-valentine": {
    description: "Miss Valentine is a French rose wine from Chateau Les Valentines, made under the IGP Mediterranee designation. The cuvee is built from Grenache and Syrah, with old-vine fruit and a pale, fresh Provence-style profile.",
    story: "Chateau Les Valentines presents Miss Valentine as a seasonal, Valentine-linked rose with a bright Mediterranean identity. The estate notes direct pressing, traditional culture and vines averaging around 50 years for this bottling.",
    tastingNotes: [
      { title: "Mediterranean Rose", description: "Citrus, white peach, red berry and pale floral notes give the wine a fresh nose." },
      { title: "Tangy Finish", description: "A smooth, dry palate carries grapefruit lift, soft fruit and clean acidity." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled at 8 to 10 degrees Celsius in a white-wine glass." },
      { subheading: "Food", description: "Pair with grilled fish, prawn koliwada, tomato mozzarella, summer salads or fruit chaat." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled fish", "prawn koliwada", "tomato mozzarella", "summer salads", "fruit chaat"] }],
    whyChoose: "Miss Valentine is a crisp French rose for drinkers who like peach, citrus and a clean seaside-style finish.",
    faqs: [
      { question: "Who makes Miss Valentine Rose?", answer: "Miss Valentine is made by Chateau Les Valentines in southern France." },
      { question: "Which grapes are used in Miss Valentine?", answer: "The published wine information lists Grenache and Syrah for Miss Valentine Rose." },
    ],
    finalVerdict: "Miss Valentine is a polished Mediterranean rose for chilled glasses, seafood and sunny Indian brunches.",
    metaTitle: "Miss Valentine Rose Guide | BevOry",
    metaDescription: "Explore Miss Valentine Rose notes, Chateau Les Valentines story, food pairings and city prices.",
  },
  "moet-and": {
    description: "Moet & is the BevOry shorthand listing for Moet & Chandon Brut, the Champagne house's classic non-vintage cuvee from Epernay. The wine blends Pinot Noir, Meunier and Chardonnay from Champagne crus with a reserve-wine component.",
    story: "Moet & Chandon was founded in 1743 by Claude Moet and later became one of LVMH's flagship wine and spirits houses. Brut Imperial has been associated with the house style since the nineteenth century, built for consistency across harvests.",
    tastingNotes: [
      { title: "Brut Imperial", description: "Green apple, citrus, white flowers, brioche, cereal and fresh nuts give the nose its classic Champagne profile." },
      { title: "Fine Bubbles", description: "Pear, peach, lemon and gooseberry notes ride a lively mousse with a dry, polished finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a tulip glass or white-wine glass; avoid over-freezing the bottle." },
      { subheading: "Food", description: "Pair with tandoori prawns, sushi, tempura vegetables, fried chicken, brie or salted cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "sushi", "tempura vegetables", "fried chicken", "brie"] }],
    whyChoose: "Moet & is a recognisable Champagne choice when you want bright fruit, fine bubbles and an established house style.",
    faqs: [
      { question: "What is Moet & on BevOry?", answer: "It refers to the Moet & Chandon Brut-style Champagne listing carried under the shortened brand name." },
      { question: "Which grapes are in Moet & Chandon Brut Imperial?", answer: "Moet & Chandon lists Pinot Noir, Meunier and Chardonnay in the Brut Imperial blend." },
    ],
    finalVerdict: "Moet & is a dependable Champagne pick for celebrations, seafood and crisp aperitif pours.",
    metaTitle: "Moet & Champagne Guide | BevOry",
    metaDescription: "Explore Moet & Chandon Brut notes, Champagne grapes, serving ideas, pairings and city prices.",
  },
  "mog-asun": {
    description: "Mog Asun is a premium whisky brand from Goa, listed on BevOry as Mog Asun Premium Whisky. The brand positions itself around Goan identity, hospitality and an easy-drinking Indian whisky style.",
    story: "Mog Asun's own public profile describes it as made in Goa, and the brand has appeared in Goa hospitality events including a student cocktail competition in 2021. The name carries a local, convivial tone, built for social pours rather than formal nosing-room whisky.",
    tastingNotes: [
      { title: "Goan Whisky", description: "Light malt, grain sweetness, citrus and gentle cereal notes keep the profile clean." },
      { title: "Smooth Serve", description: "A mild, easy finish makes it suitable for soda, ginger ale and simple whisky cocktails." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, coconut water, ginger ale, cola or plenty of ice." },
      { subheading: "Food", description: "Pair with Goan sausage chilli fry, prawn recheado, cafreal chicken, xacuti or roasted cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["Goan sausage chilli fry", "prawn recheado", "cafreal chicken", "xacuti", "roasted cashews"] }],
    whyChoose: "Mog Asun is a Goa-rooted whisky for relaxed mixers, beach-side snacks and casual highballs.",
    faqs: [
      { question: "Where is Mog Asun from?", answer: "Mog Asun presents itself publicly as a whisky made in Goa." },
      { question: "How should Mog Asun whisky be served?", answer: "Serve it with soda, ginger ale, cola, coconut water or ice-led whisky cocktails." },
    ],
    finalVerdict: "Mog Asun is a friendly Goan whisky choice for mixers, spicy seafood and easy party serves.",
    metaTitle: "Mog Asun Whisky Guide | BevOry",
    metaDescription: "Explore Mog Asun Premium Whisky notes, Goan context, mixer serves, food pairings and city prices.",
  },
  mohulo: {
    description: "Mohulo is an Indian sipping gin from NV Group, built around the mahua flower. The brand positions the bottle as India's first craft sipping gin, designed to be enjoyed neat or over ice.",
    story: "Mohulo was conceived by Varun Jain and shaped around mahua, a culturally important flower used by tribal communities across central India. The brand's public story connects Indian botanical heritage with modern gin craft.",
    tastingNotes: [
      { title: "Mahua Flower", description: "Delicate florals, subtle sweetness, juniper and soft citrus create a gentle aromatic lift." },
      { title: "Sipping Gin", description: "The texture is smooth and rounded, with mild spice and a clean, warm finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip neat, over a large cube, or with a light tonic when you want a longer drink." },
      { subheading: "Food", description: "Pair with tandoori prawns, herb paneer tikka, smoked almonds, goat cheese or citrus salad." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "herb paneer tikka", "smoked almonds", "goat cheese", "citrus salad"] }],
    whyChoose: "Mohulo stands out for bringing mahua flower into a refined Indian sipping-gin format.",
    faqs: [
      { question: "What botanical defines Mohulo gin?", answer: "Mohulo highlights the mahua flower as its signature Indian botanical." },
      { question: "Who is behind Mohulo?", answer: "Mohulo is connected with NV Group and was conceived by Varun Jain." },
    ],
    finalVerdict: "Mohulo is a distinctive Indian gin for slow sipping, light tonic serves and botanical-led food pairings.",
    metaTitle: "Mohulo Gin Guide | BevOry",
    metaDescription: "Explore Mohulo gin notes, mahua flower story, sipping serves, pairings and city prices.",
  },
  "mon-frere": {
    description: "Mon Frere is a California wine label represented on BevOry by Mon Frere Chardonnay. The brand name means \"my brother\" in French and is built around approachable, value-minded California winemaking.",
    story: "Mon Frere Winery sources Chardonnay from California sites including Mendocino, Lodi and Monterey. Its Chardonnay is whole-cluster pressed, tank fermented, partly put through malolactic fermentation and aged in French oak.",
    tastingNotes: [
      { title: "California Chardonnay", description: "Citrus, pear, stone fruit, floral notes, nutmeg and vanilla shape the aroma." },
      { title: "Round Texture", description: "A rich mouthfeel, balanced acidity and mineral freshness keep the finish lively." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve lightly chilled in a white-wine glass; let it warm slightly after pouring." },
      { subheading: "Food", description: "Pair with butter garlic prawns, malai tikka, white fish, roast chicken or mushroom risotto." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["butter garlic prawns", "malai tikka", "white fish", "roast chicken", "mushroom risotto"] }],
    whyChoose: "Mon Frere Chardonnay gives California ripeness with enough freshness for seafood and creamy Indian dishes.",
    faqs: [
      { question: "What wine is Mon Frere on BevOry?", answer: "The BevOry listing is Mon Frere Chardonnay from California." },
      { question: "What style is Mon Frere Chardonnay?", answer: "It is a ripe but fresh California Chardonnay with citrus, pear, stone fruit and French-oak detail." },
    ],
    finalVerdict: "Mon Frere is an easy California Chardonnay for creamy food, seafood and relaxed dinners.",
    metaTitle: "Mon Frere Chardonnay Guide | BevOry",
    metaDescription: "Explore Mon Frere Chardonnay notes, California sourcing, serving ideas, pairings and city prices.",
  },
  "mon-petit": {
    description: "Mon Petit is listed on BevOry through Mon Petit Amour red and white wines. The wines are European Community table-wine styles aimed at simple, everyday drinking rather than cellar ageing.",
    story: "National Food and Beverages lists A Mon Petit Amour Rouge as a blend of red Mediterranean varieties. The style is straightforward: soft fruit, modest structure and food-friendly freshness.",
    tastingNotes: [
      { title: "Petit Amour Red", description: "Ruby colour, red berries and dark berries give the red wine an easy fruit profile." },
      { title: "Everyday White", description: "The white side of the range is best treated as a chilled, fresh table-wine pour." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve the white chilled and the red slightly cool, especially in warm weather." },
      { subheading: "Food", description: "Pair with fish fry, Thai curry, smoked salmon, roast chicken, vegetable pulao or mild cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fish fry", "Thai curry", "smoked salmon", "roast chicken", "vegetable pulao"] }],
    whyChoose: "Mon Petit is a simple table-wine option when you want soft fruit, light structure and flexible food pairing.",
    faqs: [
      { question: "Which Mon Petit wines are on BevOry?", answer: "BevOry lists Mon Petit Amour White and Mon Petit Amour Red." },
      { question: "What grapes are in Mon Petit Amour Red?", answer: "Published trade information describes the red as a blend of Mediterranean red varieties." },
    ],
    finalVerdict: "Mon Petit is best for casual meals where a soft, unfussy red or chilled white fits the table.",
    metaTitle: "Mon Petit Wine Guide | BevOry",
    metaDescription: "Explore Mon Petit Amour red and white notes, serving ideas, food pairings and city prices.",
  },
  monarch: {
    description: "Monarch is an Indian luxury pure-grape brandy from Tilaknagar Industries. The Monarch Crafted Brandy listing focuses on grape spirit, oak maturation and a premium Indian brandy identity.",
    story: "Tilaknagar Industries traces its roots to 1933 and built Monarch as a step into the luxury brandy segment. Company material describes Monarch as a blend of matured Indian and French grape spirits, distilled in traditional coal-fired copper pot stills and matured in ex-red-wine oak barrels.",
    tastingNotes: [
      { title: "Pure Grape Brandy", description: "Grape fruit, apple, nutmeg and subtle tobacco lead the aroma." },
      { title: "Oak And Spice", description: "Creamy oak, dried fruits, cinnamon, peach and clove shape a long warm finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip neat in a tulip glass, with one cube of ice, or with a small splash of water." },
      { subheading: "Food", description: "Pair with galouti kebab, spiced mutton, dark chocolate, caramel custard or roasted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebab", "spiced mutton", "dark chocolate", "caramel custard", "roasted almonds"] }],
    whyChoose: "Monarch is a standout Indian brandy for drinkers who want grape-spirit depth, oak and a polished sipping profile.",
    faqs: [
      { question: "Who makes Monarch brandy?", answer: "Monarch is made by Tilaknagar Industries in India." },
      { question: "What is Monarch brandy made from?", answer: "Company material presents Monarch as a pure-grape brandy using Indian and French grape spirits." },
    ],
    finalVerdict: "Monarch is a serious Indian brandy for neat pours, rich food and after-dinner sipping.",
    metaTitle: "Monarch Brandy Guide | BevOry",
    metaDescription: "Explore Monarch pure-grape brandy notes, Tilaknagar story, serving ideas, pairings and city prices.",
  },
  "mont-blanc": {
    description: "Mont Blanc is a French vodka listed on BevOry in a 700ml bottle format. Public retail and label information places the brand in the clean, neutral French vodka style, suited to chilled shots and cocktails.",
    story: "Mont Blanc Vodka draws its identity from the Alpine mountain name and the idea of crystal clarity. Trade listings describe it as French vodka made with grain and pure water, shaped for a smooth, balanced pour.",
    tastingNotes: [
      { title: "French Vodka", description: "Clean grain, light sweetness and a soft mineral edge define the aroma." },
      { title: "Neutral Finish", description: "The palate is smooth and crisp, with gentle warmth and a dry close." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled, over ice, with soda, tonic, lime, cranberry juice or in a Martini." },
      { subheading: "Food", description: "Pair with caviar-style canapes, fried prawns, chilli paneer, sushi, masala fries or olives." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fried prawns", "chilli paneer", "sushi", "masala fries", "olives"] }],
    whyChoose: "Mont Blanc is a clean French vodka for chilled neat serves and sharp, simple cocktails.",
    faqs: [
      { question: "Where is Mont Blanc Vodka from?", answer: "Public label and retail information identifies Mont Blanc Vodka as French." },
      { question: "How should Mont Blanc Vodka be served?", answer: "Serve it chilled, over ice, with soda or tonic, or in a clean vodka Martini." },
    ],
    finalVerdict: "Mont Blanc is a crisp vodka choice for neutral cocktails, cold pours and salty snacks.",
    metaTitle: "Mont Blanc Vodka Guide | BevOry",
    metaDescription: "Explore Mont Blanc Vodka notes, French vodka style, cocktail serves, pairings and city prices.",
  },
  "mont-castle": {
    description: "Mont Castle is an Indian blended malt whisky listed on BevOry as Mont Castle Blended Malt Whisky. It is an accessible Indian whisky style built from malt and grain spirits with gentle sweetness and cereal warmth.",
    story: "Mont Castle appears in Indian retail listings as a budget-friendly blended whisky with domestic distribution. The style is made for approachable serves rather than heavy peat, high age statements or collector positioning.",
    tastingNotes: [
      { title: "Blended Indian", description: "Light grain, malt sweetness, subtle vanilla and mild cereal notes create a soft aroma." },
      { title: "Gentle Warmth", description: "The finish is smooth and accessible, with a modest oak-spice edge." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, cola, ginger ale, ice or a splash of water." },
      { subheading: "Food", description: "Pair with tandoori chicken, paneer tikka, spicy peanuts, mutton seekh or chilli garlic noodles." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "paneer tikka", "spicy peanuts", "mutton seekh", "chilli garlic noodles"] }],
    whyChoose: "Mont Castle is a practical Indian whisky for mixer-led serves and spicy comfort food.",
    faqs: [
      { question: "What type of whisky is Mont Castle?", answer: "It is listed as a blended Indian whisky under Mont Castle Blended Malt Whisky." },
      { question: "What mixers suit Mont Castle?", answer: "Soda, cola, ginger ale and ice-led highballs work well with its light malt character." },
    ],
    finalVerdict: "Mont Castle is an easy Indian blended whisky for highballs, casual snacks and everyday pours.",
    metaTitle: "Mont Castle Whisky Guide | BevOry",
    metaDescription: "Explore Mont Castle Blended Malt Whisky notes, mixer serves, food pairings and city prices.",
  },
};
