import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_69 = [
  ["bootz-dutch", "Bootz Dutch", "Netherlands", "Brandy", "pending-bootz-dutch"],
  ["born-gold", "Born Gold", "Japan", "Sparkling Wine", "pending-born-gold"],
  ["brillo-del-dia", "Brillo Del Dia", "Spain", "Red Wine", "pending-brillo-del-dia"],
  ["brose", "Brose", "Spain", "Rose Wine", "pending-brose"],
  ["brothers-and-co", "Brothers & Co", "India", "Blended Scotch", "pending-brothers-and-co"],
  ["buen-amigo", "Buen Amigo", "Mexico", "Tequila", "pending-buen-amigo"],
  ["bullet", "Bullet", "India", "Beers", "pending-bullet"],
  ["burlingtons", "Burlingtons", "India", "Brandy", "pending-burlingtons"],
  ["buschjagers", "Buschjagers", "Germany", "Liqueurs", "pending-buschjagers"],
  ["bush-ballad", "Bush Ballad", "Australia", "Red Wine", "pending-bush-ballad"],
] as const;

export const BRAND_LOGOS_BATCH_69: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_69: Record<string, string[]> = {
  "bootz-dutch": [
    "https://timesofindia.indiatimes.com/-kyndal-india-pvt-ltd-a-leading-alcobev-company-which-imports-manufactures-and-distributes-some-of-the-worlds-most-exclusive-liquor-brands-into-india-has-announced-the-launch-of-bootz-authentic-dutch-grape-brandy-in-south-india-with-its-tagline-be-famous-/articleshow/14804537.cms",
    "https://www.bevory.in/agra/brand/bootz-dutch",
  ],
  "born-gold": [
    "https://www.born.co.jp/product/gold/",
    "https://www.sakenomy.jp/en/sake/TST0000043210/",
    "https://www.bevory.in/agra/brand/born-gold",
  ],
  "brillo-del-dia": [
    "https://www.bevory.in/agra/brand/brillo-del-dia",
  ],
  brose: [
    "https://www.livcheers.com/jaipur/liquor/brose-amor-brut-rose-330ml",
    "https://www.bevory.in/agra/brand/brose",
  ],
  "brothers-and-co": [
    "https://announcement.acesphere.com/Annoucement/20250520/d836fa5b-ed46-4d59-861b-efdb04b28222.pdf",
    "https://www.bevory.in/agra/brand/brothers-and-co",
  ],
  "buen-amigo": [
    "https://tequilabuenamigo.com/index.php/about/",
    "https://www.signature-brands.co.uk/buen-amigo/",
    "https://www.bevory.in/agra/brand/buen-amigo",
  ],
  bullet: [
    "https://regentbeers.com/",
    "https://www.livcheers.com/pune/liquor/bolt-premium-strong-beer-500ml",
    "https://www.bevory.in/agra/brand/bullet",
  ],
  burlingtons: [
    "https://www.livcheers.com/nashik/liquor/burlingtons-grape-brandy-180ml",
    "https://www.foodtechbiz.com/product-launches/mohan-brothers-launches-vsop-french-grape-burlingtons-brandy",
    "https://www.bevory.in/agra/brand/burlingtons",
  ],
  buschjagers: [
    "https://www.bevory.in/agra/brand/buschjagers",
  ],
  "bush-ballad": [
    "https://bushballad.com/",
    "https://www.bevory.in/agra/brand/bush-ballad",
  ],
};

export const BRAND_CONTENT_BATCH_69: Record<string, BrandPublicContent> = {
  "bootz-dutch": {
    description: "Bootz Dutch is a grape brandy label linked to the Dutch Bootz name and distributed in India through Kyndal India. BevOry listings currently show Bootz Dutch Grape Brandy in 750 ml format.",
    story: "Bootz belongs to the Dutch brandy and liqueur tradition, where grape-based spirits were built for neat pours and simple mixed drinks. Its Indian launch positioned the bottle as an approachable Dutch grape brandy for mainstream retail shelves.",
    tastingNotes: [
      { title: "Grape Brandy Core", description: "Dried grape, caramel, light oak and mellow fruit sweetness form the centre of the pour." },
      { title: "After-Dinner Style", description: "Soft spice and a warm finish make it easier with dessert than with very sharp food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour a small measure neat in a brandy glass, or serve over one cube for a cooler, softer sip." },
      { subheading: "Food", description: "Pair with fruit cake, dark chocolate, roasted almonds, caramel custard or mild blue cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fruit cake", "dark chocolate", "roasted almonds", "caramel custard", "mild blue cheese"] }],
    whyChoose: "Bootz Dutch works for drinkers who want a fruit-led brandy profile with Dutch identity and easy dessert pairing.",
    faqs: [
      { question: "What is Bootz Dutch?", answer: "Bootz Dutch is listed on BevOry as a grape brandy in 750 ml format." },
      { question: "How should Bootz Dutch brandy be served?", answer: "Serve it neat in a small measure, over one cube, or alongside chocolate and nut-led desserts." },
    ],
    finalVerdict: "Bootz Dutch is a practical grape brandy choice for slow pours, dessert tables and simple ice serves.",
    metaTitle: "Bootz Dutch Brandy Guide | BevOry",
    metaDescription: "Explore Bootz Dutch Grape Brandy notes, serving ideas, dessert pairings and city prices on BevOry.",
  },
  "born-gold": {
    description: "Born Gold is a Japanese junmai daiginjo sake from Katoukichibee Shouten in Fukui Prefecture. It is made with rice and rice koji, using Yamada Nishiki rice polished to 50 percent.",
    story: "Katoukichibee Shouten traces the Born sake house to Fukui, where the brewery works with polished rice and cold maturation. Born Gold is an unfiltered, pale-gold sake that includes sake ice-aged at -10°C for up to one year before release.",
    tastingNotes: [
      { title: "Golden Junmai Daiginjo", description: "Clear aroma, ripe apple, peach, soft rice sweetness and gentle umami sit in a smooth, polished body." },
      { title: "Fresh Acidity", description: "A clean lift of acidity keeps the finish lively, especially when poured chilled." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled at 5-10°C in a wine glass, or at cool room temperature when you want more rice sweetness." },
      { subheading: "Food", description: "Pair with sushi, tandoori prawns, butter garlic mushrooms, creamy pasta or soft cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["sushi", "tandoori prawns", "butter garlic mushrooms", "creamy pasta", "soft cheese"] }],
    whyChoose: "Born Gold gives sake drinkers a polished Fukui junmai daiginjo with texture, fruit and clean acidity.",
    faqs: [
      { question: "Where is Born Gold made?", answer: "Born Gold is made by Katoukichibee Shouten in Fukui Prefecture, Japan." },
      { question: "What rice is used in Born Gold?", answer: "Born Gold uses Yamada Nishiki rice grown under contract in Hyogo Prefecture's special A district." },
    ],
    finalVerdict: "Born Gold is a refined Japanese sake for drinkers who enjoy fragrant rice, ripe fruit and a chilled wine-glass serve.",
    metaTitle: "Born Gold Sake Guide | BevOry",
    metaDescription: "Explore Born Gold sake from Fukui, tasting notes, serving temperature, food pairings and city prices on BevOry.",
  },
  "brillo-del-dia": {
    description: "Brillo Del Dia is listed on BevOry through a 187 ml Merlot red wine format. The name fits a compact, single-serve red-wine role rather than a large cellar bottle.",
    story: "The BevOry listing places Brillo Del Dia in the Merlot-led red wine space, useful for shoppers comparing small bottle formats. Merlot is known for plum, cherry and softer tannin, making it accessible with casual food.",
    tastingNotes: [
      { title: "Merlot Fruit", description: "Plum, red cherry and gentle berry notes give the wine an easy red-fruit character." },
      { title: "Soft Finish", description: "Light spice and smooth tannins keep the small-format pour friendly with food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a red-wine glass, especially in warm weather." },
      { subheading: "Food", description: "Pair with paneer tikka, roast chicken, mushroom pizza, lamb sliders or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["paneer tikka", "roast chicken", "mushroom pizza", "lamb sliders", "aged cheddar"] }],
    whyChoose: "Brillo Del Dia is useful when you want a small red-wine pour built around soft Merlot-style fruit.",
    faqs: [
      { question: "What type of wine is Brillo Del Dia?", answer: "BevOry lists Brillo Del Dia as a Merlot-style red wine in 187 ml format." },
      { question: "What food suits Brillo Del Dia Merlot?", answer: "Paneer tikka, roast chicken, mushroom pizza and aged cheddar suit its soft red-fruit profile." },
    ],
    finalVerdict: "Brillo Del Dia is a compact red-wine option for easy Merlot-style fruit and everyday food pairing.",
    metaTitle: "Brillo Del Dia Merlot Guide | BevOry",
    metaDescription: "Explore Brillo Del Dia Merlot notes, small-bottle serves, food pairings and city prices on BevOry.",
  },
  brose: {
    description: "Brose is listed on BevOry through Brose Amor Brut Rose in a 330 ml format. The bottle is positioned as a sparkling rose wine with a dry, celebratory style.",
    story: "Brose Amor Brut Rose appears in Indian retail references as a Spanish sparkling rose. Its smaller format gives rose drinkers a chilled, single-serve route for parties, brunches and snack-led occasions.",
    tastingNotes: [
      { title: "Rose Fruit", description: "Strawberry, raspberry and red-currant hints sit over a clean sparkling base." },
      { title: "Brut Finish", description: "Fine bubbles and a dry finish keep the wine crisp rather than syrupy." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill well and pour into a flute or small white-wine glass." },
      { subheading: "Food", description: "Pair with tandoori prawns, chicken tikka, burrata salad, berry tart or salted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "chicken tikka", "burrata salad", "berry tart", "salted almonds"] }],
    whyChoose: "Brose is a compact sparkling rose pick for chilled pours, pink-fruit freshness and party food.",
    faqs: [
      { question: "What is Brose Amor Brut Rose?", answer: "It is listed on BevOry as a sparkling rose wine in 330 ml format." },
      { question: "Should Brose be served chilled?", answer: "Yes. Serve it well chilled in a flute or small wine glass." },
    ],
    finalVerdict: "Brose is best for drinkers who want sparkling rose freshness in an easy party-size bottle.",
    metaTitle: "Brose Brut Rose Guide | BevOry",
    metaDescription: "Explore Brose Amor Brut Rose notes, chilled serving ideas, food pairings and city prices on BevOry.",
  },
  "brothers-and-co": {
    description: "Brothers & Co is an Indian-market whisky label listed on BevOry through Brothers & Co Blended Whisky. Trade material describes the blend as bringing Scotch, American bourbon and aged Indian single malt into one smoky profile.",
    story: "The brand sits in the newer Indian whisky space where imported and domestic whisky styles are combined for bolder flavour. Its name signals a social, shared-table whisky rather than a quiet age-statement malt.",
    tastingNotes: [
      { title: "Blended Whisky Character", description: "Caramel, toasted oak, grain sweetness and dried fruit give the whisky a rounded opening." },
      { title: "Smoky Edge", description: "A light smoky thread and spice finish help it stand up to soda, ice and grilled food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Try a small neat pour first, then use ice, water or a cold soda highball." },
      { subheading: "Food", description: "Pair with galouti kebabs, mutton seekh, smoked paneer, pepper chicken or roasted cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "mutton seekh", "smoked paneer", "pepper chicken", "roasted cashews"] }],
    whyChoose: "Brothers & Co is built for drinkers who want a smoky, mixed-origin whisky style with Indian food.",
    faqs: [
      { question: "What is Brothers & Co?", answer: "Brothers & Co is listed on BevOry as a blended whisky in 750 ml format." },
      { question: "What mixer suits Brothers & Co whisky?", answer: "Cold soda, water or one large cube work well with its oak, spice and smoke cues." },
    ],
    finalVerdict: "Brothers & Co is a sociable whisky for highballs, grilled starters and smoke-friendly Indian pairings.",
    metaTitle: "Brothers & Co Whisky Guide | BevOry",
    metaDescription: "Explore Brothers & Co whisky notes, highball serves, Indian food pairings and city prices on BevOry.",
  },
  "buen-amigo": {
    description: "Buen Amigo is a Mexican tequila brand from Jalisco, created within the DIALCE group portfolio. The brand has been active since 1996 and is positioned around approachable tequila for cocktails and friendly occasions.",
    story: "Buen Amigo presents itself as a tribute to friendship and Mexican heritage. Its range includes Blanco and other tequila-led drinks, with agave character kept at the centre of the serve.",
    tastingNotes: [
      { title: "Blanco Agave", description: "Cooked agave, citrus peel, white pepper and herbal freshness give the Blanco its clean tequila profile." },
      { title: "Cocktail Ready", description: "A crisp finish makes it suitable for Margaritas, Palomas and chilled shots with lime." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Blanco chilled with lime, or mix it into a Margarita with fresh lime and orange liqueur." },
      { subheading: "Food", description: "Pair with fish tacos, tandoori prawns, chicken quesadillas, nachos with salsa or chilli paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fish tacos", "tandoori prawns", "chicken quesadillas", "nachos with salsa", "chilli paneer"] }],
    whyChoose: "Buen Amigo is an accessible Jalisco tequila for fresh citrus cocktails and spicy food.",
    faqs: [
      { question: "Where is Buen Amigo tequila from?", answer: "Buen Amigo is a tequila brand from Jalisco, Mexico." },
      { question: "Which cocktail suits Buen Amigo Blanco?", answer: "A Margarita or Paloma suits its agave, citrus and pepper character." },
    ],
    finalVerdict: "Buen Amigo is a friendly tequila choice for lime-led cocktails, shots and snack-heavy evenings.",
    metaTitle: "Buen Amigo Tequila Guide | BevOry",
    metaDescription: "Explore Buen Amigo tequila from Jalisco, tasting notes, cocktail serves, pairings and city prices on BevOry.",
  },
  bullet: {
    description: "Bullet is an Indian beer label listed on BevOry through Bullet Super Strong Beer in 330 ml and 650 ml formats. The beer is associated with Regent Beers and Wines Limited in Madhya Pradesh trade references.",
    story: "Regent Beers presents itself as a brewery with more than two decades of beer-making experience. Bullet belongs to India's strong-beer shelf, where cold service, malt weight and spicy snacks drive the drinking moment.",
    tastingNotes: [
      { title: "Strong Lager Body", description: "Malt, cereal sweetness and light caramel give the beer a fuller body." },
      { title: "Cold Crispness", description: "Carbonation and hop bitterness help the finish stay sharp enough for fried food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve very cold in a clean lager glass with room for foam." },
      { subheading: "Food", description: "Pair with tandoori momos, chicken wings, masala fries, fried fish or spicy peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori momos", "chicken wings", "masala fries", "fried fish", "spicy peanuts"] }],
    whyChoose: "Bullet is a strong Indian beer for drinkers who want chilled malt weight with spicy snacks.",
    faqs: [
      { question: "What type of beer is Bullet?", answer: "Bullet is listed on BevOry as a super strong beer." },
      { question: "Which food pairs with Bullet Super Strong Beer?", answer: "Fried fish, wings, masala fries, momos and spicy peanuts work well with the strong-lager style." },
    ],
    finalVerdict: "Bullet is a cold strong beer pick for snack-heavy tables and casual Indian beer occasions.",
    metaTitle: "Bullet Strong Beer Guide | BevOry",
    metaDescription: "Explore Bullet Super Strong Beer notes, chilled serves, snack pairings and city prices on BevOry.",
  },
  burlingtons: {
    description: "Burlingtons is an Indian grape brandy label associated with Mohan Brothers. BevOry listings include Burlingtons Grape Brandy in 180 ml and 750 ml formats.",
    story: "Mohan Brothers is known in India's brandy market through Doctor's Brandy Reserve No 1, first launched in the 1970s. Burlingtons extends that brandy house into a French grape brandy style with honeyed fruit and oak cues.",
    tastingNotes: [
      { title: "Grape And Oak", description: "Ripe grape, apricot, honey and gentle oak create a rounded brandy profile." },
      { title: "Soft Finish", description: "Floral hints and mild sweetness carry the finish without turning too heavy." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a small brandy glass, over one cube, or with warm water on a cool evening." },
      { subheading: "Food", description: "Pair with fruit cake, gulab jamun, dark chocolate, roasted almonds or smoked cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fruit cake", "gulab jamun", "dark chocolate", "roasted almonds", "smoked cheese"] }],
    whyChoose: "Burlingtons is a fruit-forward Indian brandy option backed by a long-running local brandy house.",
    faqs: [
      { question: "Who is associated with Burlingtons brandy?", answer: "Burlingtons is associated with Mohan Brothers in India." },
      { question: "How should Burlingtons Grape Brandy be served?", answer: "Serve it neat, over one cube, or with warm water alongside dessert." },
    ],
    finalVerdict: "Burlingtons is a dependable grape brandy for fruit, oak and dessert-led Indian serves.",
    metaTitle: "Burlingtons Brandy Guide | BevOry",
    metaDescription: "Explore Burlingtons Grape Brandy notes, serving ideas, dessert pairings and city prices on BevOry.",
  },
  buschjagers: {
    description: "Buschjagers is listed on BevOry through Buschjagers Liquor in a 700 ml bottle. The name and category place it in the liqueur lane, suited to chilled shots and after-dinner pours.",
    story: "European herbal and sweet liqueurs are often chosen for small measures rather than long pours. Buschjagers fits that role on BevOry, giving shoppers a liqueur option outside whisky, wine and beer.",
    tastingNotes: [
      { title: "Liqueur Sweetness", description: "Sweet spice, herbal warmth and a smooth texture define the expected liqueur character." },
      { title: "Short Serve Finish", description: "A chilled pour keeps the finish clean and makes the sweetness easier to manage." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a small shot glass, or pour over one cube after dinner." },
      { subheading: "Food", description: "Pair with dark chocolate, coffee cake, salted almonds, apple strudel or spicy potato wedges." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["dark chocolate", "coffee cake", "salted almonds", "apple strudel", "spicy potato wedges"] }],
    whyChoose: "Buschjagers is for drinkers who want a sweet, chilled liqueur-style pour after food.",
    faqs: [
      { question: "What is Buschjagers?", answer: "Buschjagers is listed on BevOry as a liqueur in 700 ml format." },
      { question: "How do you serve Buschjagers?", answer: "Serve it well chilled in a small glass or over one cube after dinner." },
    ],
    finalVerdict: "Buschjagers is a compact after-dinner liqueur choice for chilled shots and dessert pairings.",
    metaTitle: "Buschjagers Liqueur Guide | BevOry",
    metaDescription: "Explore Buschjagers liqueur notes, chilled serves, dessert pairings and city prices on BevOry.",
  },
  "bush-ballad": {
    description: "Bush Ballad is an Australian wine brand inspired by the bush-song tradition and the Waltzing Matilda story. BevOry listings include Shiraz, Merlot, Shiraz Cabernet, Sauvignon Blanc and Chardonnay.",
    story: "The brand points to Australian outdoor imagery and wine regions associated with Shiraz, Cabernet Sauvignon, Chardonnay, Merlot and Pinot Noir. Its portfolio gives Indian buyers both full red-wine styles and chilled white-wine options.",
    tastingNotes: [
      { title: "Red Wines", description: "Shiraz and Shiraz Cabernet bring plum, blackberry, spice and medium tannins; Merlot stays softer with rounded red fruit." },
      { title: "White Wines", description: "Chardonnay shows tropical fruit and creamy texture, while Sauvignon Blanc leans cleaner and more citrus-led." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve reds at 16-18°C in a broad glass and whites chilled around 10-12°C." },
      { subheading: "Food", description: "Pair Shiraz with rogan josh, Cabernet blends with lamb chops, and Chardonnay with malai tikka or creamy pasta." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["rogan josh", "lamb chops", "malai tikka", "creamy pasta", "aged cheddar"] }],
    whyChoose: "Bush Ballad is a useful Australian wine range when you want both bold reds and food-friendly whites.",
    faqs: [
      { question: "What wines are listed under Bush Ballad?", answer: "BevOry lists Shiraz, Merlot, Shiraz Cabernet, Sauvignon Blanc and Chardonnay." },
      { question: "What food pairs with Bush Ballad Shiraz?", answer: "Rogan josh, lamb chops, barbecue dishes and aged cheddar suit its plum, spice and tannin." },
    ],
    finalVerdict: "Bush Ballad gives Indian wine shoppers an approachable Australian range across red and white dinner-table styles.",
    metaTitle: "Bush Ballad Wine Guide | BevOry",
    metaDescription: "Explore Bush Ballad Australian wines, tasting notes, serving temperatures, pairings and city prices on BevOry.",
  },
};
