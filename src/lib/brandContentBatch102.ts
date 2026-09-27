import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_102 = [
  ["mekowu", "Mekowu", "France", "Liqueurs", "pending-mekowu"],
  ["mesma", "Mesma", "India", "Rum", "pending-mesma"],
  ["metal", "Metal", "Australia", "Red Wine", "pending-metal"],
  ["metal-label", "Metal Label", "Australia", "Red Wine", "pending-metal-label"],
  ["method", "Method", "Ireland", "Gin", "pending-method"],
  ["meursault", "Meursault", "France", "White Wine", "pending-meursault"],
  ["mexcalia", "Mexcalia", "Mexico", "Mezcal", "pending-mexcalia"],
  ["mg-estate", "MG Estate", "Chile", "Wine", "pending-mg-estate"],
  ["mgc", "MGC", "Australia", "Gin", "pending-mgc"],
  ["mikhail", "Mikhail", "India", "Vodka", "pending-mikhail"],
] as const;

export const BRAND_LOGOS_BATCH_102: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_102: Record<string, string[]> = {
  mekowu: [
    "https://meukowcognac.com/the-collection/",
    "https://meukowcognac.com/cocktails/",
    "https://d2e1hu1ktur9ur.cloudfront.net/wp-content/uploads/2025/05/price-list-.pdf",
    "https://www.bevory.in/agra/brand/mekowu",
  ],
  mesma: [
    "https://www.livcheers.com/goa/liquor/mesma-rare-rum-750ml",
    "https://www.whatshot.in/goa/8-new-indian-whiskies-gins-and-rums-to-elevate-your-spirits-c-42154",
    "https://www.linkedin.com/pulse/therumlab-industry-newsletter-week-28-2023-the-rum-lab",
    "https://www.bevory.in/agra/brand/mesma",
  ],
  metal: [
    "https://www.bertonvineyards.com.au/collections/metal-label",
    "https://assets-au-01.kc-usercontent.com/0ac91d05-5d92-02bc-a4b7-4be3a2b3c95e/3a76a1d2-1cee-4f4d-9251-04502e264543/2023%20Portfolio%20Brochure.pdf",
    "https://www.bevory.in/agra/brand/metal",
  ],
  "metal-label": [
    "https://www.bertonvineyards.com.au/collections/metal-label",
    "https://assets-au-01.kc-usercontent.com/0ac91d05-5d92-02bc-a4b7-4be3a2b3c95e/3a76a1d2-1cee-4f4d-9251-04502e264543/2023%20Portfolio%20Brochure.pdf",
    "https://www.bevory.in/agra/brand/metal-label",
  ],
  method: [
    "https://www.methodandmadnesswhiskey.com/en-us/about",
    "https://www.methodandmadnesswhiskey.com/en/our-drinks/micro-gin",
    "https://www.pernod-ricard.com/en/brands/method-and-madness",
    "https://www.bevory.in/agra/brand/method",
  ],
  meursault: [
    "https://www.terroirsdumondeeducation.com/article-sur-le-pays/parent-france/vignobles-de-la-bourgogne/vignobles-dexception-de-bourgogne-non-aop/clos-de-la-barre/",
    "https://www.decanter.com/wine/producer-profiles/domaine-des-comtes-lafon-producer-profile-245913/",
    "https://www.vinsgrandscrus.fr/en_com/domaine-comtes-lafon-meursault-clos-de-la-barre-2022-150cl.html",
    "https://www.bevory.in/agra/brand/meursault",
  ],
  mexcalia: [
    "https://www.mezcaldistrict.com/mexcalia",
    "https://www.mezcaldistrict.com/",
    "https://trademarks.justia.com/778/25/mexcalia-77825512.html",
    "https://www.bevory.in/agra/brand/mexcalia",
  ],
  "mg-estate": [
    "https://montgras.cl/lineas/",
    "https://tienda.montgras.cl/collection/montgras-reserva-de-vine",
    "https://www.bevory.in/agra/brand/mg-estate",
  ],
  mgc: [
    "https://melbournegincompany.com/",
    "https://melbournegincompany.com/recipes/",
    "https://global.vic.gov.au/__data/assets/pdf_file/0006/2408955/2025.07-AKBC-Report_Food-for-the-SeOUL-2025.pdf",
    "https://www.bevory.in/agra/brand/mgc",
  ],
  mikhail: [
    "https://www.excise.cg.nic.in/csmcl/PriceList",
    "https://sansprito.com/product-category/indian/regular/vodka-regular/",
    "https://www.livcheers.com/thane/liquor/mikhail-premium-vodka-750ml",
    "https://www.bevory.in/agra/brand/mikhail",
  ],
};

export const BRAND_CONTENT_BATCH_102: Record<string, BrandPublicContent> = {
  mekowu: {
    description: "Mekowu is the BevOry spelling used for Meukow liqueur bottles, especially Meukow Xpresso and Meukow Vanilla. These are French cognac-based liqueurs from the Meukow house, built for dessert pours and cocktail mixing.",
    story: "Meukow is a Cognac house known for its panther-bottle identity and a collection that includes classic cognacs alongside flavoured liqueurs. Xpresso brings coffee and cognac together, while Vanilla leans into sweet, creamy cocktail serves.",
    tastingNotes: [
      { title: "Xpresso", description: "Roasted coffee, burnt oak, dark chocolate and bitter orange give the liqueur a deep after-dinner profile." },
      { title: "Vanilla", description: "Vanilla sweetness, cognac warmth and soft cream notes make it suited to long drinks and dessert cocktails." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled, over ice, in espresso-style cocktails, or mixed with tonic, lemonade or sparkling water." },
      { subheading: "Food", description: "Pair with tiramisu, dark chocolate mousse, gulab jamun, coffee cake or salted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tiramisu", "dark chocolate mousse", "gulab jamun", "coffee cake", "salted almonds"] }],
    whyChoose: "Mekowu is for drinkers who want cognac warmth with coffee or vanilla dessert flavours.",
    faqs: [
      { question: "Is Mekowu connected to Meukow?", answer: "The BevOry bottles under Mekowu correspond to Meukow Xpresso and Meukow Vanilla liqueurs." },
      { question: "How should Meukow Xpresso be served?", answer: "Serve it chilled, over ice, or in coffee-led cocktails after dinner." },
    ],
    finalVerdict: "Mekowu is a rich cognac-liqueur choice for dessert tables and after-dinner cocktails.",
    metaTitle: "Mekowu Liqueur Guide | BevOry",
    metaDescription: "Explore Mekowu Meukow Xpresso and Vanilla notes, cocktail serves, pairings and city prices.",
  },
  mesma: {
    description: "Mesma is an Indian rare rum from Stilldistilling Spirits, the Goa-based team behind Maka Zai. Mesma Rare Rum is a limited barrel-aged release designed as a sipping rum rather than a simple cola mixer.",
    story: "Mesma has been described as a five-year barrel-aged rum matured in former bourbon barrels, with only a small Goa-focused release at launch. Founder Kasturi Banerjee's Stilldistilling Spirits helped bring a modern craft-rum lens to India.",
    tastingNotes: [
      { title: "Barrel-Aged Rum", description: "Orange peel, tobacco, molasses and sweet berries shape the aroma." },
      { title: "Bourbon Cask Depth", description: "Citrus, vanilla, apricot, oak and cocoa build a warm, amber finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip neat, with one cube of ice, or with a small splash of water." },
      { subheading: "Food", description: "Pair with pork vindaloo, dark chocolate, caramel custard, smoked nuts or grilled pineapple." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pork vindaloo", "dark chocolate", "caramel custard", "smoked nuts", "grilled pineapple"] }],
    whyChoose: "Mesma is a serious Indian rum pick for drinkers who want cask flavour, fruit and spice.",
    faqs: [
      { question: "Who makes Mesma Rare Rum?", answer: "Mesma is associated with Stilldistilling Spirits, the makers of Maka Zai." },
      { question: "How should Mesma be served?", answer: "Serve it neat, with ice, or with a small splash of water to open the oak and fruit." },
    ],
    finalVerdict: "Mesma is a polished Indian aged rum for slow sipping and richer food pairings.",
    metaTitle: "Mesma Rare Rum Guide | BevOry",
    metaDescription: "Explore Mesma Rare Rum notes, Stilldistilling context, serving ideas, pairings and city prices.",
  },
  metal: {
    description: "Metal is represented on BevOry by Metal Black Shiraz, part of Berton Vineyard's Australian Metal Label range. It is a bold red wine style built around ripe Shiraz fruit and a dark, full-bodied profile.",
    story: "Berton Vineyard's Metal Label collection includes The Black Shiraz, Durif, Cabernet Sauvignon and other expressive Australian reds. The Black Shiraz is positioned as a bold Australian Shiraz and one of the range's most popular wines.",
    tastingNotes: [
      { title: "Black Shiraz", description: "Blackberry, plum, dark cherry and peppery spice give the wine a rich fruit core." },
      { title: "Bold Finish", description: "Full body, soft oak and ripe tannin make the finish warm and generous." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a large red-wine glass; give it a short breather after opening." },
      { subheading: "Food", description: "Pair with mutton seekh, pepper steak, barbecue chicken, dal makhani or smoked cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "pepper steak", "barbecue chicken", "dal makhani", "smoked cheddar"] }],
    whyChoose: "Metal Black Shiraz is a dark, generous Australian red for spicy grills and hearty dinners.",
    faqs: [
      { question: "What wine is Metal on BevOry?", answer: "The key bottle is Metal Black Shiraz from Berton Vineyard's Metal Label range." },
      { question: "What food suits Metal Black Shiraz?", answer: "Grilled meats, smoky vegetarian dishes, peppery kebabs and hard cheeses work well." },
    ],
    finalVerdict: "Metal is a bold Shiraz pick when dinner needs ripe fruit, spice and weight.",
    metaTitle: "Metal Black Shiraz Guide | BevOry",
    metaDescription: "Explore Metal Black Shiraz notes, Australian red wine style, pairings and city prices on BevOry.",
  },
  "metal-label": {
    description: "Metal Label is an Australian wine range from Berton Vineyard, represented on BevOry by Metal Label Durif. Durif is a dark, tannic red grape known for dense colour and powerful black-fruit flavours.",
    story: "Berton Vineyard's Metal Label line highlights expressive, value-minded Australian varietals. The Durif bottling sits alongside The Black Shiraz and Cabernet Sauvignon, giving the range a muscular red-wine identity.",
    tastingNotes: [
      { title: "Durif", description: "Blueberry, blackberry, plum, black pepper and cocoa create a deep, inky profile." },
      { title: "Firm Structure", description: "Big tannins, firm acidity and a dry finish make the wine suited to rich food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a large red-wine glass; decant briefly if the tannins feel tight." },
      { subheading: "Food", description: "Pair with lamb chops, beef kebabs, mushroom galouti, aged cheddar or chilli lamb noodles." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb chops", "beef kebabs", "mushroom galouti", "aged cheddar", "chilli lamb noodles"] }],
    whyChoose: "Metal Label Durif is for drinkers who want a darker, firmer Australian red than everyday Merlot.",
    faqs: [
      { question: "What is Durif?", answer: "Durif is a dark red grape also known for firm tannins, deep colour and black-fruit flavour." },
      { question: "Who makes Metal Label wines?", answer: "Metal Label is part of Berton Vineyard's Australian wine range." },
    ],
    finalVerdict: "Metal Label Durif is a powerful Australian red for grilled food and slow dinners.",
    metaTitle: "Metal Label Durif Guide | BevOry",
    metaDescription: "Explore Metal Label Durif notes, Berton Vineyard context, food pairings and city prices.",
  },
  method: {
    description: "Method is represented on BevOry by Method N Madness gin, part of the Method and Madness spirits family from Ireland. The gin comes from the Irish Distillers world around Midleton and is built around experimental micro-distillation.",
    story: "Method and Madness began as a creative project from masters and apprentices at Midleton Distillery. Its Irish Micro Distilled Gin was released with 16 botanicals, led by black lemon and Irish gorse flowers.",
    tastingNotes: [
      { title: "Irish Micro Gin", description: "Juniper, black lemon, citrus peel, floral gorse and spice create a bright, lifted aroma." },
      { title: "Clean Finish", description: "The palate is crisp and botanical, with citrus oils and gentle pepper carrying the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with tonic over block ice and a lemon peel twist, or use in a dry Martini." },
      { subheading: "Food", description: "Pair with tandoori prawns, goat cheese, lemon chicken, cucumber sandwiches or herbed paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "goat cheese", "lemon chicken", "cucumber sandwiches", "herbed paneer"] }],
    whyChoose: "Method is a distinctive Irish gin choice for citrus-led tonic serves and clean Martinis.",
    faqs: [
      { question: "Who makes Method and Madness?", answer: "Method and Madness is connected with Irish Distillers and Midleton Distillery." },
      { question: "What botanicals define Method and Madness gin?", answer: "Its official profile highlights black lemon and Irish gorse flowers among 16 botanicals." },
    ],
    finalVerdict: "Method is a polished Irish gin for drinkers who enjoy citrus, spice and modern botanical detail.",
    metaTitle: "Method And Madness Gin Guide | BevOry",
    metaDescription: "Explore Method and Madness gin notes, Midleton context, tonic serves, pairings and city prices.",
  },
  meursault: {
    description: "Meursault is represented on BevOry by Meursault Clos De La Barre, a white Burgundy tied to Domaine des Comtes Lafon. The wine is made from Chardonnay in the village appellation of Meursault in Burgundy.",
    story: "Clos de la Barre is a walled monopole in the heart of Meursault, owned and farmed by Domaine des Comtes Lafon. The parcel is a village-level Meursault site rather than a premier cru, but its reputation rests on Lafon's farming and the clos itself.",
    tastingNotes: [
      { title: "White Burgundy", description: "Lemon, pear, hazelnut, white flowers and subtle butter show classic Meursault depth." },
      { title: "Mineral Texture", description: "Chalky freshness, gentle oak and a long savoury finish balance the richness." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve lightly chilled in a Burgundy glass, not ice cold." },
      { subheading: "Food", description: "Pair with lobster, butter garlic prawns, roast chicken, truffle pasta or malai tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lobster", "butter garlic prawns", "roast chicken", "truffle pasta", "malai tikka"] }],
    whyChoose: "Meursault Clos de la Barre is a serious white Burgundy for drinkers who want texture, mineral depth and Chardonnay richness.",
    faqs: [
      { question: "What grape is Meursault Clos de la Barre made from?", answer: "It is a Chardonnay from Meursault in Burgundy." },
      { question: "Who is associated with Clos de la Barre?", answer: "Clos de la Barre is strongly associated with Domaine des Comtes Lafon." },
    ],
    finalVerdict: "Meursault is a premium white Burgundy choice for seafood, poultry and slower meals.",
    metaTitle: "Meursault Clos De La Barre Guide | BevOry",
    metaDescription: "Explore Meursault Clos De La Barre notes, Burgundy Chardonnay style, pairings and city prices.",
  },
  mexcalia: {
    description: "Mexcalia is a Mexican mezcal label made from 100% Espadin agave. The bottle on BevOry is Mexcalia Mezcal, a smoky agave spirit suited to neat sipping and simple citrus cocktails.",
    story: "Mexcalia is presented by Mezcal District as an authentic, pure mezcal made by a maestro mezcalero and double distilled from cooked Espadin agave. Its style is built to be smooth enough for first-time mezcal drinkers while still showing cooked agave character.",
    tastingNotes: [
      { title: "Espadin Agave", description: "Cooked agave, soft smoke, tropical fruit and earthy mineral notes form the aroma." },
      { title: "Smooth Smoke", description: "The palate is round and fruity, with measured smokiness rather than harsh char." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip neat in small pours, slightly chilled, or use in a mezcal margarita." },
      { subheading: "Food", description: "Pair with tacos al pastor, tandoori mushrooms, grilled pineapple, prawn skewers or chilli salt peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tacos al pastor", "tandoori mushrooms", "grilled pineapple", "prawn skewers", "chilli salt peanuts"] }],
    whyChoose: "Mexcalia is an approachable Espadin mezcal for drinkers exploring smoke, agave and citrus-friendly cocktails.",
    faqs: [
      { question: "What agave is Mexcalia made from?", answer: "Mexcalia is presented as a 100% Espadin agave mezcal." },
      { question: "How should Mexcalia mezcal be served?", answer: "Sip it neat in small chilled pours, or mix it into citrus-led mezcal cocktails." },
    ],
    finalVerdict: "Mexcalia is a smooth entry into mezcal for agave lovers and smoky cocktail fans.",
    metaTitle: "Mexcalia Mezcal Guide | BevOry",
    metaDescription: "Explore Mexcalia Mezcal notes, Espadin agave style, serving ideas, pairings and city prices.",
  },
  "mg-estate": {
    description: "MG Estate is a Chilean wine range from MontGras, represented by Sauvignon Blanc, Carmenere and Pinot Noir bottles. It sits in MontGras's varietal wine tier, made for clear grape character and everyday food pairing.",
    story: "MontGras works across Chilean valleys and presents MG Estate by MontGras as part of its varietal wine portfolio. The wider MontGras identity is built around sustainability, vineyard detail and a willingness to work across classic and modern Chilean styles.",
    tastingNotes: [
      { title: "Sauvignon Blanc", description: "Lime, grapefruit, green apple and herbal freshness make the white crisp." },
      { title: "Carmenere And Pinot Noir", description: "Carmenere gives plum and pepper, while Pinot Noir brings red cherry, strawberry and soft spice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Sauvignon Blanc chilled; pour Carmenere and Pinot Noir slightly cool." },
      { subheading: "Food", description: "Pair Sauvignon Blanc with fish tikka, Carmenere with lamb kebabs, and Pinot Noir with roast chicken or mushroom momos." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fish tikka", "lamb kebabs", "roast chicken", "mushroom momos", "goat cheese"] }],
    whyChoose: "MG Estate is a flexible Chilean wine range when you want Sauvignon Blanc freshness, Carmenere spice or Pinot Noir softness.",
    faqs: [
      { question: "Who makes MG Estate wine?", answer: "MG Estate is connected with MontGras in Chile." },
      { question: "Which MG Estate bottles are on BevOry?", answer: "Key bottles include Sauvignon Blanc, Carmenere and MG Estate by MontGras Pinot Noir." },
    ],
    finalVerdict: "MG Estate is a useful Chilean range for mixing white and red wine pairings at the table.",
    metaTitle: "MG Estate Wine Guide | BevOry",
    metaDescription: "Explore MG Estate Sauvignon Blanc, Carmenere and Pinot Noir notes, pairings and city prices.",
  },
  mgc: {
    description: "MGC is The Melbourne Gin Company, an Australian gin producer founded in 2012 by Andrew Marks. BevOry carries MGC Dry Gin, a Melbourne-made dry gin shaped by classic juniper and local botanical detail.",
    story: "Andrew Marks came to gin from a Yarra Valley winemaking background and founded MGC in Collingwood. The distillery uses perfume-style stills, local rainwater and individually distilled botanicals blended with a winemaker's eye.",
    tastingNotes: [
      { title: "Melbourne Dry", description: "Juniper, citrus peel, coriander spice and native botanical lift give the gin a clean dry profile." },
      { title: "Batch Distilled", description: "A crisp, non-chill-filtered texture keeps the finish aromatic and martini-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with tonic and grapefruit, or stir into a dry Martini with a citrus twist." },
      { subheading: "Food", description: "Pair with sushi, pepper prawns, goat cheese, lemon chicken or cucumber chaat." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["sushi", "pepper prawns", "goat cheese", "lemon chicken", "cucumber chaat"] }],
    whyChoose: "MGC is a polished Australian dry gin for classic G&T drinkers and Martini fans.",
    faqs: [
      { question: "What does MGC stand for?", answer: "MGC stands for The Melbourne Gin Company." },
      { question: "Who founded The Melbourne Gin Company?", answer: "The distillery was founded by Andrew Marks in 2012." },
    ],
    finalVerdict: "MGC Dry Gin is a crisp Australian gin for clean tonic serves and elegant cocktails.",
    metaTitle: "MGC Dry Gin Guide | BevOry",
    metaDescription: "Explore MGC Dry Gin notes, Melbourne Gin Company story, cocktail serves, pairings and city prices.",
  },
  mikhail: {
    description: "Mikhail is an Indian vodka label represented by Mikhail Premium Vodka and Mikhail Premium Orange Vodka. Indian price lists describe both as triple-distilled vodka, with plain and orange-flavoured options.",
    story: "Mikhail sits in India's accessible vodka shelf, where clean neutrality and easy mixers matter most. The orange variant gives the range a fruit-led party serve, while the plain vodka stays flexible for soda, tonic and lime.",
    tastingNotes: [
      { title: "Premium Vodka", description: "Clean grain spirit, light sweetness and a crisp finish make the plain vodka easy to mix." },
      { title: "Orange Vodka", description: "Sweet orange peel, citrus candy and gentle warmth give the flavoured bottle a bright profile." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled with soda, tonic, lemonade, orange juice or fresh lime." },
      { subheading: "Food", description: "Pair with chilli paneer, chicken momos, masala fries, fried prawns or cheese nachos." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli paneer", "chicken momos", "masala fries", "fried prawns", "cheese nachos"] }],
    whyChoose: "Mikhail is a simple Indian vodka choice for chilled mixers and citrus-forward drinks.",
    faqs: [
      { question: "What Mikhail vodka bottles are on BevOry?", answer: "BevOry includes Mikhail Premium Vodka and Mikhail Premium Orange Vodka." },
      { question: "How should Mikhail vodka be served?", answer: "Serve it chilled with soda, tonic, lemonade, orange juice or lime." },
    ],
    finalVerdict: "Mikhail is a practical vodka range for easy highballs, party mixers and spicy snacks.",
    metaTitle: "Mikhail Vodka Guide | BevOry",
    metaDescription: "Explore Mikhail Premium Vodka notes, orange vodka style, serving ideas, pairings and city prices.",
  },
};
