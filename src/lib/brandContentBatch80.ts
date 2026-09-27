import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_80 = [
  ["early-dark", "Early Dark", "France", "Wine", "pending-early-dark"],
  ["eden", "Eden", "India", "World Whisky", "pending-eden"],
  ["el-charron", "El Charron", "Mexico", "Tequila", "pending-el-charron"],
  ["el-ron", "El Ron", "Mexico", "Rum", "pending-el-ron"],
  ["elaan", "Elaan", "India", "Liqueurs", "pending-elaan"],
  ["elit-18", "Elit 18", "Latvia", "Vodka", "pending-elit-18"],
  ["embargo", "Embargo", "France", "Rum", "pending-embargo"],
  ["empees-napoleon", "Empees Napoleon", "India", "Brandy", "pending-empees-napoleon"],
  ["en-sign-bio", "En Sign Bio", "India", "Brandy", "pending-en-sign-bio"],
  ["english-drinks", "English Drinks", "United Kingdom", "Gin", "pending-english-drinks"],
] as const;

export const BRAND_LOGOS_BATCH_80: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_80: Record<string, string[]> = {
  "early-dark": [
    "https://tetradbeverages.com/early-dark-wines/",
    "https://www.ritzmagazine.in/for-the-love-of-wines/",
    "https://www.vivino.com/en/wineries/early-dark",
  ],
  eden: [
    "https://www.livcheers.com/bangalore/liquor/eden-blended-malt-whisky-750ml",
    "https://excise.cg.nic.in/Uploads/LandingPrice_2025-26_.pdf",
    "https://excise.cg.nic.in/Uploads/RSP_FL_2025_26.pdf",
  ],
  "el-charron": [
    "https://www.livcheers.com/liquor/el-charron-gold-taqila-750ml",
    "https://www.livcheers.com/reviews/el-charron-silver-tequila",
    "https://papillonrestaurant.com/beer-cocktails-and-spirits",
  ],
  "el-ron": [
    "https://tequilacorralejo.mx/es/nuestros-productos/ron-silver",
    "https://www.iberlicor.com/el-ron-prohibido/",
    "https://www.drinkarto.com/product-page/viva-el-ron-de-cuba-white-rum",
  ],
  elaan: [
    "https://www.livcheers.com/goa/liquor/elaan-orange-liqueur-750ml",
    "https://www.bevory.in/goa/brand/elaan",
  ],
  "elit-18": [
    "https://buy.vodka/brand/elit-eighteen/",
    "https://adultbeveragesolutions.com/gallery/Elit_Sell_Sheet-_HR_201410.pdf",
    "https://www.bevory.in/udaipur/product/elit-18-elit-eighteen-vodka-eb47c12",
  ],
  embargo: [
    "https://www.rhumattitude.com/en/marque/embargo/",
    "https://bottleofitaly.com/en-us/pages/produttore-embargo",
    "https://www.spiritradar.com/rum-db/brands/embargo/",
  ],
  "empees-napoleon": [
    "https://www.empeegroup.in/",
    "https://snjgroup.com/brandy",
    "https://sarakku.in/price/empees-napolean-brandy/",
  ],
  "en-sign-bio": [
    "https://www.sribotanicaldistilleries.com/ensign_product_card.html",
    "https://www.bioliquors.com/our-brands.php",
    "https://trademarks.justia.com/869/14/bio-brandy-en-86914233.html",
  ],
  "english-drinks": [
    "https://www.gin-foundry.com/gin/cucumber-gin/",
    "https://www.masterofmalt.com/gin/english-drinks-company/english-drinks-company-london-dry-gin/",
    "https://www.livcheers.com/liquor/the-english-drinks-pink-dry-gin-700ml",
  ],
};

export const BRAND_CONTENT_BATCH_80: Record<string, BrandPublicContent> = {
  "early-dark": {
    description: "Early Dark is an India-led French wine label made with Vignobles Arbeau in South West France. The range seen on BevOry includes Sauvignon Blanc, Geraud Arbeau Bordeaux Red and Chateau Coutinel Fronton Syrah-led red wines.",
    story: "The label was created by Indian wine professional Abhay Kewadkar with the Arbeau family, whose wine roots in the Fronton region run across five generations. Early Dark was built around small-batch French wines adapted for Indian tables and early-evening wine drinking.",
    tastingNotes: [
      { title: "Sauvignon Blanc", description: "Citrus, herbs, guava and green apple sit over bright acidity and a dry, refreshing finish." },
      { title: "Fronton Red", description: "Dark berries, violet, pepper and a savoury edge come from the South West France red-wine style." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Sauvignon Blanc chilled; serve Bordeaux and Fronton reds slightly cool in a medium red-wine glass." },
      { subheading: "Food", description: "Pair whites with tandoori fish or Thai curry; pair reds with seekh kebab, roast chicken or mushroom pizza." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "Thai green curry", "seekh kebab", "roast chicken", "mushroom pizza"] }],
    whyChoose: "Early Dark is a smart French wine pick for Indian drinkers who want approachable reds and zesty whites.",
    faqs: [
      { question: "Where is Early Dark wine made?", answer: "Early Dark wines are made in France with Vignobles Arbeau in South West France." },
      { question: "Which Early Dark wines are common?", answer: "BevOry lists Sauvignon Blanc, Geraud Arbeau Bordeaux Red and Chateau Coutinel Fronton styles." },
    ],
    finalVerdict: "Early Dark works well when you want French wine structure without losing easy Indian-food compatibility.",
    metaTitle: "Early Dark Wine Guide | BevOry",
    metaDescription: "Explore Early Dark French wines, Sauvignon Blanc, Bordeaux Red, Fronton notes, pairings and city prices.",
  },
  eden: {
    description: "Eden is an Indian blended malt whisky label associated with Indospirit Beverages and listed in 750 ml format. It sits in the modern Indian whisky lane where malt-led flavour, honeyed sweetness and a smoother premium pour matter most.",
    story: "Eden's market presence is built around one clear bottle: a 750 ml blended malt whisky made for neat pours, water serves and premium highballs. The style points toward honeyed fruit, soft vanilla and gentle oak rather than heavy smoke.",
    tastingNotes: [
      { title: "Malt Sweetness", description: "Honey, pear, glazed apple and vanilla give the whisky a rounded opening." },
      { title: "Zesty Finish", description: "Grapefruit, gooseberry, lime marmalade and gentle oak keep the finish lively." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat first, then try a large cube or a splash of water to open the malt notes." },
      { subheading: "Food", description: "Pair with chicken tikka, grilled prawns, paneer kulcha, salted almonds or apple crumble." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "grilled prawns", "paneer kulcha", "salted almonds", "apple crumble"] }],
    whyChoose: "Eden gives Indian whisky buyers a malt-forward profile at a familiar 750 ml bottle format.",
    faqs: [
      { question: "What is Eden Blended Malt Whisky?", answer: "It is an Indian whisky label listed as a blended malt whisky in 750 ml format." },
      { question: "What does Eden whisky taste like?", answer: "Expect honeyed fruit, vanilla, mild oak and a citrus-led finish." },
    ],
    finalVerdict: "Eden is a clean, malt-led Indian whisky choice for neat pours, water serves and spicy snacks.",
    metaTitle: "Eden Whisky Guide | BevOry",
    metaDescription: "Explore Eden Blended Malt Whisky notes, serving ideas, Indian pairings and city prices on BevOry.",
  },
  "el-charron": {
    description: "El Charron is a Mexican tequila label listed on BevOry through Gold and Silver tequila bottles. The brand sits in the everyday tequila space for Margaritas, shots and simple agave-led serves.",
    story: "The El Charron name follows the Mexican charro tradition, a visual language often used by tequila labels to signal Jalisco-style heritage. Indian listings focus on Silver and Gold expressions rather than a large aged-tequila portfolio.",
    tastingNotes: [
      { title: "Silver Tequila", description: "Clean agave, citrus, pepper and a brisk finish suit chilled shots and Margaritas." },
      { title: "Gold Tequila", description: "Caramel, vanilla, soft oak and warm spice make the Gold expression rounder." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use Silver for Margaritas and Palomas; use Gold over ice or in a tequila highball." },
      { subheading: "Food", description: "Pair with chicken tacos, tandoori prawns, chilli paneer, nachos or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tacos", "tandoori prawns", "chilli paneer", "nachos", "dark chocolate"] }],
    whyChoose: "El Charron is a practical tequila page for comparing Gold and Silver bottles in Indian cities.",
    faqs: [
      { question: "Which El Charron tequilas are listed?", answer: "BevOry shows El Charron Gold and El Charron Silver tequila bottles." },
      { question: "How should El Charron Silver be used?", answer: "Use it in Margaritas, Palomas, chilled shots or citrus-forward tequila highballs." },
    ],
    finalVerdict: "El Charron is an easy tequila choice for agave cocktails, quick shots and spicy bar snacks.",
    metaTitle: "El Charron Tequila Guide | BevOry",
    metaDescription: "Explore El Charron Gold and Silver tequila notes, cocktail serves, food pairings and city prices.",
  },
  "el-ron": {
    description: "El Ron is a rum brand page led by El Ron Prohibido and Viva El Ron rum listings. The range covers Mexican-style aged rum and Cuban white or lemon rum expressions.",
    story: "El Ron Prohibido draws on the Mexican chinguirito story, where cane spirit was moved in former sherry casks and later prohibited by Spanish royal order. Viva El Ron listings lean toward Cuba-style white rum and citrus-flavoured rum for long drinks.",
    tastingNotes: [
      { title: "El Ron Prohibido", description: "Raisin, prune, walnut, chocolate, coffee and sherry-cask sweetness shape the aged rum style." },
      { title: "Viva El Ron", description: "Sugarcane, lemon peel, citrus oil and a clean white-rum base suit lighter cocktails." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip El Ron Prohibido neat or over ice; use white and lemon rum in Cuba Libre, Daiquiri or Mojito-style serves." },
      { subheading: "Food", description: "Pair with pork ribs, jerk chicken, peri peri fries, rum cake or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pork ribs", "jerk chicken", "peri peri fries", "rum cake", "dark chocolate"] }],
    whyChoose: "El Ron is useful when you want both aged rum depth and citrus-friendly white rum options on one page.",
    faqs: [
      { question: "What is El Ron Prohibido?", answer: "El Ron Prohibido is a Mexican rum known for sherry-cask influence and dark dried-fruit notes." },
      { question: "What cocktails suit Viva El Ron?", answer: "Use it in Cuba Libre, Daiquiri, Mojito-style highballs or simple rum-and-citrus serves." },
    ],
    finalVerdict: "El Ron gives rum drinkers a bridge between dark sipping rum and easy citrus cocktails.",
    metaTitle: "El Ron Rum Guide | BevOry",
    metaDescription: "Explore El Ron Prohibido and Viva El Ron rum notes, cocktail serves, pairings and city prices.",
  },
  elaan: {
    description: "Elaan is an Indian orange liqueur label listed on BevOry in 750 ml format. It is made around grain spirit, orange oils and citrus sweetness for cocktails and dessert-style serves.",
    story: "Elaan belongs to the Indian liqueur set where bright flavour and mixability matter more than barrel age. The orange profile makes it a natural fit for Margaritas, Sidecars, Cosmopolitans and citrus highballs.",
    tastingNotes: [
      { title: "Orange Peel", description: "Sweet orange, bitter peel and citrus oil give the liqueur its main aromatic lift." },
      { title: "Soft Sweetness", description: "A rounded grain-spirit base carries marmalade, candied zest and gentle warmth." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use in Margaritas, Sidecars, Cosmopolitans or pour a small measure over ice with soda." },
      { subheading: "Food", description: "Pair with orange cake, gulab jamun, dark chocolate, chilli prawns or fruit chaat." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["orange cake", "gulab jamun", "dark chocolate", "chilli prawns", "fruit chaat"] }],
    whyChoose: "Elaan is a handy Indian orange liqueur for citrus cocktails and dessert pairings.",
    faqs: [
      { question: "What is Elaan Orange Liqueur?", answer: "It is an Indian orange-flavoured liqueur listed in 750 ml format." },
      { question: "Which cocktails use Elaan?", answer: "Try it in a Margarita, Sidecar, Cosmopolitan or orange spritz." },
    ],
    finalVerdict: "Elaan is a bright cocktail liqueur for orange-led drinks, desserts and party serves.",
    metaTitle: "Elaan Orange Liqueur Guide | BevOry",
    metaDescription: "Explore Elaan orange liqueur notes, cocktail uses, dessert pairings and city prices on BevOry.",
  },
  "elit-18": {
    description: "Elit 18 is listed through Elit Eighteen Vodka, a premium vodka style associated with Latvia. Its identity points to the freeze-filtration language used by elit vodka, where extreme cold filtration is central to the texture.",
    story: "Elit vodka built its reputation around a final freeze-out filtration stage at minus 18 degrees Celsius. The BevOry listing keeps the focus on the Elit Eighteen bottle, a clean vodka aimed at Martinis, chilled pours and polished cocktails.",
    tastingNotes: [
      { title: "Clean Core", description: "Neutral grain, mineral clarity and a light creamy texture define the first sip." },
      { title: "Cold Finish", description: "White pepper, faint citrus and a crisp finish keep the vodka sharp." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled, in a Vodka Martini, with soda, or over a large cube." },
      { subheading: "Food", description: "Pair with smoked salmon, caviar-style canapes, tandoori prawns, potato rosti or salted cucumber." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked salmon", "caviar-style canapes", "tandoori prawns", "potato rosti", "salted cucumber"] }],
    whyChoose: "Elit 18 is for vodka drinkers who prefer a clean, cold, Martini-ready style.",
    faqs: [
      { question: "What is Elit 18 vodka?", answer: "It is a premium vodka listing tied to the Elit Eighteen name and a cold-filtered style." },
      { question: "How should Elit 18 be served?", answer: "Serve well chilled, neat, in a Martini or with soda and a citrus twist." },
    ],
    finalVerdict: "Elit 18 is a crisp vodka choice for chilled pours, Martinis and seafood-led snacks.",
    metaTitle: "Elit 18 Vodka Guide | BevOry",
    metaDescription: "Explore Elit 18 vodka notes, chilled serves, Martini ideas, food pairings and city prices.",
  },
  embargo: {
    description: "Embargo is a French rum brand owned by Les Bienheureux, the spirits company behind El Pasador de Oro. The range focuses on blended rums designed for both mixology and neat drinking.",
    story: "Les Bienheureux imports, blends and bottles rums in France, drawing on Caribbean and Central American rum stocks. Embargo appears across Anejo, Blanco, Esplendido and spiced rum styles, giving bartenders a flexible rum base.",
    tastingNotes: [
      { title: "Anejo Style", description: "Vanilla, molasses, toasted oak and dried fruit create a warm aged-rum profile." },
      { title: "Spiced Rum", description: "Brown sugar, baking spice, citrus peel and gentle heat suit cola and ginger highballs." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use Blanco in Daiquiris, Anejo over ice, and spiced rum with cola, ginger beer or lime." },
      { subheading: "Food", description: "Pair with barbecue chicken, pork bao, masala peanuts, banana fritters or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["barbecue chicken", "pork bao", "masala peanuts", "banana fritters", "dark chocolate"] }],
    whyChoose: "Embargo is a versatile rum page for cocktail-first drinkers who still want aged-rum depth.",
    faqs: [
      { question: "Who owns Embargo rum?", answer: "Embargo is owned by the French spirits company Les Bienheureux." },
      { question: "What styles does Embargo cover?", answer: "Listings include Anejo, Blanco, Esplendido and spiced rum styles." },
    ],
    finalVerdict: "Embargo is built for flexible rum drinking, from Daiquiris to dark-rum highballs.",
    metaTitle: "Embargo Rum Guide | BevOry",
    metaDescription: "Explore Embargo rum notes, Les Bienheureux context, cocktail serves, pairings and city prices.",
  },
  "empees-napoleon": {
    description: "Empees Napoleon is an Indian brandy from the Empee distillery legacy in South India. It appears in Indian retail listings as Empees Napoleon Brandy and Finest Grape Brandy formats.",
    story: "Empee entered the Indian beverage and distillery industry in 1984 after setting up its Tamil Nadu plant. The group built well-known southern Indian spirits brands, including Old Secret Brandy, Chevalier Brandy and Empee's Napoleon Brandy.",
    tastingNotes: [
      { title: "Grape Brandy Style", description: "Dried grape, caramel, vanilla and warm oak shape the familiar Indian brandy profile." },
      { title: "Soft Spice", description: "Nutmeg, raisin, brown sugar and a mild pepper finish make it food-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a small brandy glass, on ice, with warm water, or with soda." },
      { subheading: "Food", description: "Pair with pepper chicken, mutton sukka, plum cake, dark chocolate or roasted cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pepper chicken", "mutton sukka", "plum cake", "dark chocolate", "roasted cashews"] }],
    whyChoose: "Empees Napoleon is a classic South Indian brandy name for warm, snack-led drinking.",
    faqs: [
      { question: "Who makes Empees Napoleon Brandy?", answer: "Empees Napoleon is linked to the Empee distillery group in South India." },
      { question: "How should Empees Napoleon be served?", answer: "Serve it neat, over ice, with warm water or with soda." },
    ],
    finalVerdict: "Empees Napoleon is a familiar Indian brandy for slow pours, rich snacks and dessert pairings.",
    metaTitle: "Empees Napoleon Brandy Guide | BevOry",
    metaDescription: "Explore Empees Napoleon Brandy notes, Empee history, serving ideas, pairings and city prices.",
  },
  "en-sign-bio": {
    description: "En Sign Bio is an Indian brandy label from the Bio Liquors and Sri Botanical Distilleries portfolio. The 750 ml Bio Brandy XO listing is built around grain spirit, matured grape spirit, cognac influence and botanicals.",
    story: "Sri Botanical Distilleries is based in Andhra Pradesh and positions its spirits around botanical additions. En-Sign Bio Brandy is described with imported matured grape spirits, French cognac influence and a fruit-forward botanical profile.",
    tastingNotes: [
      { title: "Fruity Grape", description: "Grape, raisin, soft oak and brandy warmth form the core." },
      { title: "Botanical Lift", description: "Herbal sweetness, mild spice and a warm finish give it a distinctive Indian style." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, with warm water, on ice, or with soda for a lighter brandy serve." },
      { subheading: "Food", description: "Pair with chicken 65, paneer pepper fry, mutton chops, fruit cake or salted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken 65", "paneer pepper fry", "mutton chops", "fruit cake", "salted almonds"] }],
    whyChoose: "En Sign Bio is a distinctive Indian brandy for drinkers curious about grape spirit and botanical styling.",
    faqs: [
      { question: "What is En Sign Bio?", answer: "En Sign Bio is an Indian Bio Brandy label associated with Sri Botanical Distilleries." },
      { question: "What does En Sign Bio taste like?", answer: "Expect fruity grape aroma, warm brandy notes, mild botanicals and a smooth finish." },
    ],
    finalVerdict: "En Sign Bio is a warm Indian brandy choice with grape sweetness and botanical character.",
    metaTitle: "En Sign Bio Brandy Guide | BevOry",
    metaDescription: "Explore En Sign Bio Brandy notes, botanical style, serving ideas, pairings and city prices.",
  },
  "english-drinks": {
    description: "English Drinks is a British gin brand best known for Cucumber Gin, Pink Dry Gin and London Dry Gin. The BevOry listings show 700 ml gin formats built around classic botanicals and flavoured gin serves.",
    story: "The English Drinks Company moved from cucumber soft drinks into gin after drinkers mixed its Qcumber drink with gin. Its Cucumber Gin launched after a long flavour-development process, followed by broader English gin expressions.",
    tastingNotes: [
      { title: "London Dry", description: "Juniper, coriander, liquorice, orange peel, cardamom and light anise give a crisp gin base." },
      { title: "Flavoured Gin", description: "Cucumber brings cool green freshness, while Pink Dry Gin adds strawberry, raspberry and citrus." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with tonic, plenty of ice and a matching garnish: cucumber, orange, berries or mint." },
      { subheading: "Food", description: "Pair with fish tikka, cucumber sandwiches, goat cheese salad, sushi or lemon chicken." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fish tikka", "cucumber sandwiches", "goat cheese salad", "sushi", "lemon chicken"] }],
    whyChoose: "English Drinks is a flavour-friendly gin page for crisp G&Ts, berry cocktails and cucumber-led summer serves.",
    faqs: [
      { question: "Which English Drinks gins are listed?", answer: "BevOry shows London Dry Gin, Cucumber Gin and Pink Dry Gin listings." },
      { question: "What garnish works with English Drinks gin?", answer: "Use cucumber for Cucumber Gin, orange for London Dry, and berries or mint for Pink Dry Gin." },
    ],
    finalVerdict: "English Drinks is a lively gin choice for tonic serves, garden cocktails and light seafood snacks.",
    metaTitle: "English Drinks Gin Guide | BevOry",
    metaDescription: "Explore English Drinks gin notes, London Dry, Cucumber Gin, Pink Dry Gin, pairings and city prices.",
  },
};
