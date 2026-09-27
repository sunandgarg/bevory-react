import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_63 = [
  ["amarone", "Amarone", "Italy", "Red Wine", "pending-amarone"],
  ["amaze", "Amaze", "India", "Indian Whisky", "pending-amaze"],
  ["amg", "AMG", "United States", "Vodka", "pending-amg"],
  ["amora", "Amora", "India", "Wine", "pending-amora"],
  ["amsterdam", "Amsterdam", "Netherlands", "Beer", "pending-amsterdam"],
  ["andong", "Andong", "South Korea", "Soju", "pending-andong"],
  ["angel-senorita", "Angel Senorita", "United States", "Wine", "pending-angel-senorita"],
  ["angels-haven", "Angels Haven", "India", "Gin", "pending-angels-haven"],
  ["annas-way", "Annas Way", "New Zealand", "Red Wine", "pending-annas-way"],
  ["anytime", "Anytime", "India", "Indian Whisky", "pending-anytime"],
] as const;

export const BRAND_LOGOS_BATCH_63: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_63: Record<string, string[]> = {
  amarone: [
    "https://www.livcheers.com/delhi/brand/amarone",
    "https://www.consorziovalpolicella.it/en/valpolicella-wines/amarone-della-valpolicella-docg/",
  ],
  amaze: [
    "https://www.livcheers.com/goa/brand/amaze",
    "https://www.bevory.in/delhi/brand/amaze",
  ],
  amg: [
    "https://www.livcheers.com/listing/brand/amg",
    "https://www.bevory.in/delhi/brand/amg",
  ],
  amora: [
    "https://www.livcheers.com/listing/brand/amora",
    "https://www.bevory.in/delhi/brand/amora",
  ],
  amsterdam: [
    "https://www.livcheers.com/listing/brand/amsterdam",
    "https://www.bevory.in/delhi/brand/amsterdam",
  ],
  andong: [
    "https://www.livcheers.com/listing/brand/andong",
    "https://www.bevory.in/delhi/brand/andong",
  ],
  "angel-senorita": [
    "https://www.livcheers.com/listing/brand/angel-senorita",
    "https://www.bevory.in/delhi/brand/angel-senorita",
  ],
  "angels-haven": [
    "https://www.livcheers.com/listing/brand/angels-haven",
    "https://www.bevory.in/delhi/brand/angels-haven",
  ],
  "annas-way": [
    "https://www.livcheers.com/listing/brand/annas-way",
    "https://www.bevory.in/delhi/brand/annas-way",
  ],
  anytime: [
    "https://www.livcheers.com/listing/brand/anytime",
    "https://www.bevory.in/delhi/brand/anytime",
  ],
};

export const BRAND_CONTENT_BATCH_63: Record<string, BrandPublicContent> = {
  amarone: {
    description: "Amarone is a powerful dry red wine style from Valpolicella in Italy's Veneto region. It is made from partially dried grapes, usually led by Corvina and Corvinone with Rondinella, giving the wine concentration without turning it into a sweet dessert wine.",
    story: "The appassimento method is the heart of Amarone: harvested grapes rest in drying rooms before fermentation, concentrating sugar, skins and aroma. The finished wines are known for depth, alcohol warmth and long ageing potential.",
    tastingNotes: [
      { title: "Dried cherry", description: "Dried cherry, plum, fig and dark chocolate sit over warm spice and polished tannin." },
      { title: "Full structure", description: "A dense palate, firm body and long savoury finish make Amarone a slow dinner wine." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve around 16-18 C in a large red-wine glass; decant young bottles before dinner." },
      { subheading: "Food", description: "Pair with mutton rogan josh, galouti kebab, braised lamb, aged Parmigiano or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton rogan josh", "galouti kebab", "braised lamb", "aged Parmigiano", "dark chocolate"] }],
    whyChoose: "Amarone is the rich Italian red to choose when ordinary table wine feels too light for the meal.",
    faqs: [
      { question: "Is Amarone sweet?", answer: "Amarone is normally fermented dry, although dried-grape aromas can make it smell richly fruity." },
      { question: "Where is Amarone made?", answer: "Amarone comes from Valpolicella in the Veneto region of northern Italy." },
    ],
    finalVerdict: "Amarone is a serious, food-led red for slow meals, winter dinners and richly spiced Indian meat dishes.",
    metaTitle: "Amarone Red Wine Guide | BevOry",
    metaDescription: "Explore Amarone from Valpolicella with tasting notes, serving tips, pairings and city prices on BevOry.",
  },
  amaze: {
    description: "Amaze is an Indian whisky label listed through Amaze Luxury Grain Whisky. The bottle sits in the made-in-India blended whisky lane, with grain sweetness and light oak suited to highball-style serves.",
    story: "The current catalogue identity is narrow and practical: one whisky name, one familiar Indian drinking context. Its value to buyers is in comparing bottle size, city price and serving style against other Indian grain whiskies.",
    tastingNotes: [
      { title: "Grain sweetness", description: "Caramel, cereal grain and vanilla form the first impression." },
      { title: "Light spice", description: "Soft oak spice and a warming finish keep the whisky mixer-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour over ice, then add water or chilled soda for a longer drink." },
      { subheading: "Food", description: "Pair with chicken tikka, masala peanuts, paneer pakora, seekh kebab or chilli cheese toast." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "masala peanuts", "paneer pakora", "seekh kebab", "chilli cheese toast"] }],
    whyChoose: "Amaze is a straightforward Indian grain whisky for simple pours, soda and spicy snacks.",
    faqs: [
      { question: "What type of whisky is Amaze?", answer: "Amaze is listed as an Indian luxury grain whisky." },
      { question: "How should Amaze whisky be served?", answer: "Serve it with ice, water or soda rather than heavy sweet mixers." },
    ],
    finalVerdict: "Amaze works best as a casual Indian whisky pour with bold snacks and a clean mixer.",
    metaTitle: "Amaze Whisky Guide | BevOry",
    metaDescription: "Explore Amaze Luxury Grain Whisky, tasting notes, serving ideas, snack pairings and city prices on BevOry.",
  },
  amg: {
    description: "AMG is a vodka label listed with Carbon Vodka, Frozen Vodka and Honey & Pepper Vodka. The range moves from clean chilled vodka to flavoured bottles built for colder shots and mixed drinks.",
    story: "The AMG row is a product-family listing rather than a single flavour. Carbon and Frozen lean toward neutral vodka service, while Honey & Pepper adds sweetness and spice for drinkers who want a bolder party pour.",
    tastingNotes: [
      { title: "Clean vodka", description: "Carbon and Frozen keep the profile crisp, cold and mixer-ready." },
      { title: "Honey and pepper", description: "The flavoured bottle brings sweet honey up front with peppery heat on the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neutral bottles freezer-cold in small pours or with soda; use Honey & Pepper in short, chilled serves." },
      { subheading: "Food", description: "Pair with tandoori prawns, chilli chicken, salted cucumber, masala fries or smoked cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "chilli chicken", "salted cucumber", "masala fries", "smoked cheese"] }],
    whyChoose: "AMG gives vodka drinkers both clean chilled serves and a spicy-sweet flavoured option.",
    faqs: [
      { question: "Which AMG vodkas are listed?", answer: "Current listings include AMG Carbon Vodka, Frozen Vodka and Honey & Pepper Vodka." },
      { question: "How should AMG Honey & Pepper be served?", answer: "Serve it well chilled in a small pour or use it carefully in spicy cocktails." },
    ],
    finalVerdict: "AMG is most useful when you pick the exact vodka style first: clean, frozen or honey-pepper.",
    metaTitle: "AMG Vodka Guide | BevOry",
    metaDescription: "Explore AMG vodka styles, Honey & Pepper notes, serving tips, food pairings and city prices on BevOry.",
  },
  amora: {
    description: "Amora is an Indian wine label listed across white, red and rose wines. The range is built for simple colour-led selection rather than a single grape-specific identity.",
    story: "Amora's current BevOry footprint covers everyday 750 ml table wines. White, red and rose bottles should be chosen by meal, temperature and preferred body rather than treated as one flavour.",
    tastingNotes: [
      { title: "White and rose", description: "White wine leans toward citrus and orchard fruit, while rose brings lighter red-berry freshness." },
      { title: "Red wine", description: "The red bottle moves toward plum, berry fruit and soft dinner-table tannin." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill white and rose well; serve the red slightly cool in a medium red-wine glass." },
      { subheading: "Food", description: "Pair white with tandoori fish, rose with paneer tikka, and red with mushroom kebab or lamb curry." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "paneer tikka", "mushroom kebab", "lamb curry", "grilled vegetables"] }],
    whyChoose: "Amora is a simple Indian wine range for buyers deciding by colour and food pairing.",
    faqs: [
      { question: "Which Amora wines are listed?", answer: "BevOry lists Amora White Wine, Amora Red Wine and Amora Rose Wine." },
      { question: "How should Amora wines be served?", answer: "Serve white and rose chilled; pour red slightly cool with richer food." },
    ],
    finalVerdict: "Amora is a practical table-wine choice when you want white, rose and red options under one name.",
    metaTitle: "Amora Wine Guide | BevOry",
    metaDescription: "Explore Amora red, white and rose wines with tasting notes, serving tips, pairings and city prices on BevOry.",
  },
  amsterdam: {
    description: "Amsterdam is a beer label listed in India in a 500 ml format. The current catalogue row points to a cold, easy-drinking lager-style beer rather than a hop-heavy craft ale.",
    story: "The Amsterdam name uses Dutch beer cues, but the useful consumer decision is simple: chilled beer, can or bottle size and snack pairing. Treat it as a refreshment beer for casual food rather than a cellar-style drink.",
    tastingNotes: [
      { title: "Pale malt", description: "Light malt, cereal grain and clean carbonation lead the profile." },
      { title: "Dry finish", description: "A mild bitter finish keeps the beer crisp with salty snacks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a lager glass or straight from an ice bucket." },
      { subheading: "Food", description: "Pair with masala fries, chicken wings, fish fry, grilled corn or salted peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["masala fries", "chicken wings", "fish fry", "grilled corn", "salted peanuts"] }],
    whyChoose: "Amsterdam is a straightforward cold beer for salty snacks and casual drinking.",
    faqs: [
      { question: "What size is Amsterdam beer listed in?", answer: "Current BevOry pages show Amsterdam beer in a 500 ml format." },
      { question: "What food pairs with Amsterdam beer?", answer: "Masala fries, fish fry, chicken wings and salted peanuts are natural matches." },
    ],
    finalVerdict: "Amsterdam is the batch's simple beer pick: cold, crisp and made for snack plates.",
    metaTitle: "Amsterdam Beer Guide | BevOry",
    metaDescription: "Explore Amsterdam beer style, serving tips, snack pairings and city prices on BevOry.",
  },
  andong: {
    description: "Andong is listed with Korean fruit soju flavours such as Green Grape and Strawberry. The bottles are light, sweet and fruit-led, closer to chilled party pours than traditional rice wine service.",
    story: "Andong is also the name of a Korean city famous for distilled soju traditions, but these current listings are modern flavoured soju bottles. Green grape and strawberry flavours make the range easy to understand for first-time soju drinkers.",
    tastingNotes: [
      { title: "Green grape", description: "Fresh grape candy, pear and light acidity create a bright chilled pour." },
      { title: "Strawberry", description: "Sweet strawberry, red fruit and soft alcohol warmth define the fruitier bottle." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve very cold in small glasses, or mix lightly with soda over ice." },
      { subheading: "Food", description: "Pair with Korean fried chicken, chilli paneer, spicy noodles, barbecue pork or salted chips." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["Korean fried chicken", "chilli paneer", "spicy noodles", "barbecue pork", "salted chips"] }],
    whyChoose: "Andong is an accessible fruit-soju option for chilled, low-fuss party serves.",
    faqs: [
      { question: "Which Andong flavours are listed?", answer: "Current listings include Green Grape Soju and Strawberry Soju." },
      { question: "How should Andong soju be served?", answer: "Serve it very cold in small pours, or with soda and ice for a lighter drink." },
    ],
    finalVerdict: "Andong is best for drinkers who want sweet, chilled fruit soju with spicy snacks.",
    metaTitle: "Andong Soju Guide | BevOry",
    metaDescription: "Explore Andong Green Grape and Strawberry soju notes, serving ideas, pairings and city prices on BevOry.",
  },
  "angel-senorita": {
    description: "Angel Senorita is a wine label listed with Merlot red wine and Chardonnay white wine. The range gives drinkers a direct choice between soft red fruit and a rounder white-wine style.",
    story: "Angel Senorita appears in BevOry as a compact two-grape wine listing. Merlot handles the softer red-wine role, while Chardonnay fits creamy starters, seafood and milder Indian dishes.",
    tastingNotes: [
      { title: "Merlot", description: "Plum, red cherry and gentle tannin make the red wine approachable." },
      { title: "Chardonnay", description: "Apple, pear and light creaminess give the white wine a fuller feel than sharper citrus whites." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill Chardonnay to 8-10 C; serve Merlot slightly cool in a medium red-wine glass." },
      { subheading: "Food", description: "Pair Chardonnay with malai tikka or tandoori fish; match Merlot with mushroom kebab, roast chicken or lamb chops." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["malai tikka", "tandoori fish", "mushroom kebab", "roast chicken", "lamb chops"] }],
    whyChoose: "Angel Senorita keeps the decision simple: Chardonnay for lighter food, Merlot for richer plates.",
    faqs: [
      { question: "Which Angel Senorita wines are listed?", answer: "Current listings include Angel Senorita Merlot and Angel Senorita Chardonnay." },
      { question: "How should Angel Senorita Merlot be served?", answer: "Serve it slightly cool with roast chicken, mushrooms or lamb dishes." },
    ],
    finalVerdict: "Angel Senorita is a straightforward two-style wine label for everyday dinner pairing.",
    metaTitle: "Angel Senorita Wine Guide | BevOry",
    metaDescription: "Explore Angel Senorita Merlot and Chardonnay notes, serving tips, pairings and city prices on BevOry.",
  },
  "angels-haven": {
    description: "Angels Haven is an Indian gin label listed in a 480 ml format. The current bottle sits in a simple gin-and-mixer space, led by juniper, citrus and chilled tonic service.",
    story: "The catalogue row is narrow, so the best reading is practical: a gin bottle for highballs, not a complex botanical archive. Its role is to give gin drinkers an accessible option for tonic, soda and citrus-led serves.",
    tastingNotes: [
      { title: "Juniper and citrus", description: "Piney juniper, lemon peel and light spice give the gin its classic frame." },
      { title: "Clean mixer finish", description: "The finish is dry enough for tonic, soda and lime-led long drinks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Build with plenty of ice, chilled tonic and a lemon or lime wedge." },
      { subheading: "Food", description: "Pair with tandoori prawns, cucumber chaat, lemon chicken, masala fries or herbed paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "cucumber chaat", "lemon chicken", "masala fries", "herbed paneer"] }],
    whyChoose: "Angels Haven is a simple gin choice for chilled tonic serves and citrus-friendly snacks.",
    faqs: [
      { question: "What type of drink is Angels Haven?", answer: "Angels Haven is listed as a gin." },
      { question: "How should Angels Haven gin be served?", answer: "Use ice, chilled tonic and a citrus wedge for a classic long serve." },
    ],
    finalVerdict: "Angels Haven is best kept cold, bright and simple in a gin-and-tonic style serve.",
    metaTitle: "Angels Haven Gin Guide | BevOry",
    metaDescription: "Explore Angels Haven gin notes, tonic serves, food pairings and city prices on BevOry.",
  },
  "annas-way": {
    description: "Annas Way is a New Zealand Pinot Noir label listed in a 750 ml bottle. The style is light to medium-bodied, red-fruited and better served slightly cool than warm.",
    story: "New Zealand Pinot Noir is strongly associated with cooler regions and vivid red-fruit expression. Annas Way sits in that drinkable Pinot lane, where freshness and food flexibility matter more than heavy oak weight.",
    tastingNotes: [
      { title: "Red cherry", description: "Cherry, raspberry and a light earthy note give the wine its Pinot Noir shape." },
      { title: "Silky body", description: "Soft tannin and fresh acidity keep the palate nimble with food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool, around 14-16 C, in a Burgundy or medium red-wine glass." },
      { subheading: "Food", description: "Pair with tandoori chicken, mushroom galouti, roast duck, grilled salmon or mild cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "mushroom galouti", "roast duck", "grilled salmon", "mild cheddar"] }],
    whyChoose: "Annas Way is a lighter red option for drinkers who find Cabernet or Shiraz too heavy.",
    faqs: [
      { question: "What grape is Annas Way?", answer: "Current BevOry listings show Annas Way Pinot Noir." },
      { question: "Should Annas Way Pinot Noir be chilled?", answer: "Serve it slightly cool, not fridge-cold and not warm." },
    ],
    finalVerdict: "Annas Way is a clean Pinot Noir choice for poultry, mushrooms and lighter Indian grills.",
    metaTitle: "Annas Way Pinot Noir Guide | BevOry",
    metaDescription: "Explore Annas Way Pinot Noir notes, serving temperature, food pairings and city prices on BevOry.",
  },
  anytime: {
    description: "Anytime is an Indian whisky label listed through Anytime Rare Premium Whisky. It belongs to the made-in-India blended whisky shelf, with 375 ml and 750 ml formats visible in current pages.",
    story: "Anytime is built as an everyday whisky name, easy to compare by size and city price. The public-facing decision is simple: choose the bottle, keep the serve measured and match it with bold snacks.",
    tastingNotes: [
      { title: "Caramel grain", description: "Caramel, toasted grain and light vanilla create a familiar Indian whisky base." },
      { title: "Oak spice", description: "Gentle spice and mild warmth carry the finish without heavy smoke." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour over one cube, then add water or soda for a lighter long drink." },
      { subheading: "Food", description: "Pair with mutton seekh, chicken pakora, smoked paneer, masala peanuts or pepper chicken." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "chicken pakora", "smoked paneer", "masala peanuts", "pepper chicken"] }],
    whyChoose: "Anytime is a direct Indian whisky option for casual pours, soda serves and spicy snacks.",
    faqs: [
      { question: "What is Anytime whisky?", answer: "Anytime is listed as Anytime Rare Premium Whisky in the made-in-India whisky category." },
      { question: "What food pairs with Anytime whisky?", answer: "Mutton seekh, chicken pakora, smoked paneer and masala peanuts are practical matches." },
    ],
    finalVerdict: "Anytime is a no-fuss Indian whisky for snack-led drinking and simple highballs.",
    metaTitle: "Anytime Whisky Guide | BevOry",
    metaDescription: "Explore Anytime Rare Premium Whisky notes, serving ideas, snack pairings and city prices on BevOry.",
  },
};
