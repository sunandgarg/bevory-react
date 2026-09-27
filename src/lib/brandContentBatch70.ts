import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_70 = [
  ["bushwhacker", "Bushwhacker", "New Zealand", "Beers", "pending-bushwhacker"],
  ["cabron", "Cabron", "Mexico", "Tequila", "pending-cabron"],
  ["cajulana", "Cajulana", "India", "Liqueurs", "pending-cajulana"],
  ["calenter", "Calenter", "India", "Rum", "pending-calenter"],
  ["cambridge", "Cambridge", "United Kingdom", "Gin", "pending-cambridge"],
  ["camlin", "Camlin", "India", "Spirits", "pending-camlin"],
  ["campa", "Campa", "India", "Indian Whisky", "pending-campa"],
  ["campo", "Campo", "Spain", "Wine", "pending-campo"],
  ["cantine", "Cantine", "Italy", "Red Wine", "pending-cantine"],
  ["cantores", "Cantores", "Portugal", "Wine", "pending-cantores"],
] as const;

export const BRAND_LOGOS_BATCH_70: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_70: Record<string, string[]> = {
  bushwhacker: [
    "https://kashspirits.com/Kash-Profile.pdf",
    "https://www.tastings.com/Beer-Review/Bushwhacker-Strong-Premium-Lager-India-11-19-2018.aspx",
    "https://www.bevory.in/agra/brand/bushwhacker",
  ],
  cabron: [
    "https://www.livcheers.com/jaipur/brand/cabron",
    "https://www.bevory.in/agra/brand/cabron",
  ],
  cajulana: [
    "https://www.goaipb.goa.gov.in/wp-content/uploads/2025/02/ODOP-Feni-List-of-Brands.pdf",
    "https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/120",
    "https://www.bevory.in/goa/brand/cajulana",
  ],
  calenter: [
    "https://www.bevory.in/agra/brand/calenter",
  ],
  cambridge: [
    "https://cambridgedistillery.co.uk/products/japanese-gin",
    "https://www.cambridgewine.com/shop/products/spirits/gin/cambridge-distillery-japanese-gin-70cl.html",
    "https://www.bevory.in/agra/brand/cambridge",
  ],
  camlin: [
    "https://www.bevory.in/jaipur/brand/camlin",
  ],
  campa: [
    "https://www.livcheers.com/udaipur/liquor/campa-classic-whisky-750ml",
    "https://www.bevory.in/jaipur/brand/campa",
  ],
  campo: [
    "https://www.campoviejo.com/",
    "https://www.campoviejo.com/product/blanco/",
    "https://www.pernod-ricard.com/en/brands/campo-viejo",
    "https://www.bevory.in/agra/brand/campo",
  ],
  cantine: [
    "https://cantinepovero.com/product/batu-barbaresco-docg/",
    "https://cantinepovero.com/en/product-category/vini-rossi-en/nebbiolo-en/",
    "https://www.bevory.in/agra/brand/cantine",
  ],
  cantores: [
    "https://www.santosesantos.pt/wp-content/uploads/2023/10/Cantores-de-Pias-Tinto-BIB.pdf",
    "https://www.bevory.in/faridabad/brand/cantores",
  ],
};

export const BRAND_CONTENT_BATCH_70: Record<string, BrandPublicContent> = {
  bushwhacker: {
    description: "Bushwhacker is a strong beer label listed on BevOry through Bushwhacker Strong in 330 ml and 650 ml formats. Indian distribution material links Bushwhacker beer with New Zealand origin and pan-India licensing.",
    story: "The brand sits in the strong-lager space, where cold service and malt weight matter more than ornate tasting language. BevOry listings show it as a practical beer choice for city-level price comparison.",
    tastingNotes: [
      { title: "Strong Lager Body", description: "Malt sweetness, cereal grain and light caramel give the beer its fuller profile." },
      { title: "Cold Finish", description: "Firm carbonation and a crisp bitter edge keep the finish clean with fried snacks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve very cold in a lager glass, with enough space for foam." },
      { subheading: "Food", description: "Pair with chicken wings, masala fries, tandoori momos, fried fish or spicy peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken wings", "masala fries", "tandoori momos", "fried fish", "spicy peanuts"] }],
    whyChoose: "Bushwhacker is a cold strong-beer pick for drinkers who want malt weight with spicy food.",
    faqs: [
      { question: "What is Bushwhacker listed as on BevOry?", answer: "Bushwhacker is listed through Bushwhacker Strong under beer." },
      { question: "What food pairs with Bushwhacker Strong?", answer: "Fried fish, wings, masala fries and tandoori momos suit its strong-lager profile." },
    ],
    finalVerdict: "Bushwhacker is best treated as a chilled strong lager for snack-led, casual beer occasions.",
    metaTitle: "Bushwhacker Strong Beer Guide | BevOry",
    metaDescription: "Explore Bushwhacker Strong beer notes, chilled serves, snack pairings and city prices on BevOry.",
  },
  cabron: {
    description: "Cabron is listed on BevOry through Cabron Blanco Tequila in 750 ml format. As a Blanco tequila listing, it belongs in the fresh agave, citrus and pepper-led side of the tequila shelf.",
    story: "Blanco tequila is bottled without the oak-led character of reposado or anejo styles, so the drink focuses on agave freshness. Cabron's page gives Indian shoppers a direct tequila entry for Margarita, Paloma and chilled shot serves.",
    tastingNotes: [
      { title: "Blanco Profile", description: "Cooked agave, lime peel, white pepper and a light herbal note shape the expected Blanco style." },
      { title: "Cocktail Finish", description: "A clean, crisp finish makes it practical for citrus-led cocktails." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled with lime, or shake into a Margarita with fresh lime and orange liqueur." },
      { subheading: "Food", description: "Pair with fish tacos, tandoori prawns, nachos with salsa, chicken quesadillas or chilli paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fish tacos", "tandoori prawns", "nachos with salsa", "chicken quesadillas", "chilli paneer"] }],
    whyChoose: "Cabron is a simple Blanco tequila choice for fresh lime cocktails and spicy food.",
    faqs: [
      { question: "What type of tequila is Cabron?", answer: "Cabron is listed on BevOry as Blanco tequila." },
      { question: "Which cocktail suits Cabron Blanco?", answer: "A Margarita or Paloma suits its agave, citrus and pepper-led style." },
    ],
    finalVerdict: "Cabron is a straight-ahead Blanco tequila for Margaritas, Palomas and bright snack pairings.",
    metaTitle: "Cabron Blanco Tequila Guide | BevOry",
    metaDescription: "Explore Cabron Blanco Tequila notes, cocktail serves, food pairings and city prices on BevOry.",
  },
  cajulana: {
    description: "Cajulana is a Goan feni label listed on BevOry through Cajulana Cashew Feni in 750 ml format. The brand appears in Goa's official cashew feni brand list.",
    story: "Cashew feni is a protected Goan spirit tied to the state's cashew apple harvest and distillation culture. Cajulana sits in that local tradition, with a flavour profile built around fruit, earth and rustic warmth.",
    tastingNotes: [
      { title: "Cashew Fruit", description: "Ripe cashew apple, fermented fruit and a faint floral note lead the aroma." },
      { title: "Goan Spirit Finish", description: "Earthy warmth, tangy fruit and a dry finish make the spirit distinct from rum or brandy." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve in a small measure neat, with ice, or with lime and soda in a tall glass." },
      { subheading: "Food", description: "Pair with Goan fish curry, prawn balchao, recheado fish, pork vindaloo or cashew nuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["Goan fish curry", "prawn balchao", "recheado fish", "pork vindaloo", "cashew nuts"] }],
    whyChoose: "Cajulana is for drinkers who want a direct Goan cashew feni profile rather than a neutral spirit.",
    faqs: [
      { question: "What is Cajulana?", answer: "Cajulana is listed on BevOry as Cashew Feni from Goa." },
      { question: "How should Cajulana Cashew Feni be served?", answer: "Serve it neat in a small measure, over ice, or lengthened with lime and soda." },
    ],
    finalVerdict: "Cajulana brings a clear Goan feni identity for drinkers who enjoy fruit, earth and spice-driven food.",
    metaTitle: "Cajulana Cashew Feni Guide | BevOry",
    metaDescription: "Explore Cajulana Cashew Feni, Goan serving ideas, food pairings and city prices on BevOry.",
  },
  calenter: {
    description: "Calenter is an Indian rum label listed on BevOry through Calenter Rum in 180 ml, 375 ml and 750 ml formats. It sits in the everyday dark-rum space where cola, soda and spicy snacks are natural partners.",
    story: "The current BevOry catalogue gives Calenter a focused rum page rather than mixing it into whisky or brandy comparisons. Its strongest role is practical: simple pours, highballs and food-led casual serves.",
    tastingNotes: [
      { title: "Dark Rum Cues", description: "Molasses sweetness, caramel, light vanilla and warm spice shape the core profile." },
      { title: "Mixer Friendly", description: "A rounded finish makes it suitable for cola, soda or a lime-led long drink." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over ice with cola, soda and lime, or use a measured pour in a simple rum punch." },
      { subheading: "Food", description: "Pair with chilli chicken, pork vindaloo, barbecue wings, grilled pineapple or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli chicken", "pork vindaloo", "barbecue wings", "grilled pineapple", "dark chocolate"] }],
    whyChoose: "Calenter is a practical Indian rum for easy mixers and bold food.",
    faqs: [
      { question: "What type of drink is Calenter?", answer: "Calenter is listed on BevOry as rum." },
      { question: "What mixer suits Calenter Rum?", answer: "Cola, soda, lime and simple rum punch builds work well with its caramel-spice profile." },
    ],
    finalVerdict: "Calenter is an everyday rum choice for cola serves, lime highballs and spicy Indian food.",
    metaTitle: "Calenter Rum Guide | BevOry",
    metaDescription: "Explore Calenter Rum notes, mixer ideas, food pairings and city prices on BevOry.",
  },
  cambridge: {
    description: "Cambridge is listed on BevOry through Cambridge English Dry Gin and Cambridge Japanese Gin. The range is connected with Cambridge Distillery, known for individually distilled botanicals and precision-led gin making.",
    story: "Cambridge Japanese Gin uses yuzu peel, shiso leaf, toasted white sesame and sansho pepper alongside juniper. Cambridge Dry gives shoppers a more classic dry-gin route, making the brand useful for both tonic serves and Martini-style drinks.",
    tastingNotes: [
      { title: "Japanese Gin", description: "Yuzu, shiso, sesame and sansho create a dry, green, citrus-spiced profile." },
      { title: "English Dry", description: "Juniper, citrus peel and dry herbal notes suit tonic, Martini and clean soda serves." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use chilled tonic and a simple citrus garnish, or stir Japanese Gin into a dry Martini with shiso or lemon." },
      { subheading: "Food", description: "Pair with tandoori prawns, sushi, cucumber salad, pepper chicken or lemon-paneer skewers." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "sushi", "cucumber salad", "pepper chicken", "lemon-paneer skewers"] }],
    whyChoose: "Cambridge is a sharp gin pick for drinkers who like classic juniper and Japanese botanical detail.",
    faqs: [
      { question: "What Cambridge gins are listed on BevOry?", answer: "BevOry lists Cambridge English Dry Gin and Cambridge Japanese Gin." },
      { question: "What botanicals define Cambridge Japanese Gin?", answer: "Yuzu peel, shiso leaf, toasted white sesame and sansho pepper define its Japanese botanical profile." },
    ],
    finalVerdict: "Cambridge works for gin drinkers who want clean dry serves with a serious botanical edge.",
    metaTitle: "Cambridge Gin Guide | BevOry",
    metaDescription: "Explore Cambridge English Dry and Japanese Gin notes, serves, pairings and city prices on BevOry.",
  },
  camlin: {
    description: "Camlin is an Indian drinks label listed on BevOry through Camlin Orange Vodka and Camlin Whisky. The brand covers both flavoured vodka and made-in-India whisky formats.",
    story: "Camlin's catalogue role is mixer-friendly rather than collector-led. The orange vodka points toward chilled soda and citrus drinks, while the whisky suits short pours and simple highballs.",
    tastingNotes: [
      { title: "Orange Vodka", description: "Orange peel, light sweetness and clean spirit warmth make it useful in soda-led drinks." },
      { title: "Whisky", description: "Grain sweetness, caramel and mild spice support ice, water and soda serves." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve the vodka with soda and orange; pour the whisky over ice or lengthen with cold soda." },
      { subheading: "Food", description: "Pair with chilli paneer, chicken tikka, masala peanuts, orange-glazed wings or fried fish." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli paneer", "chicken tikka", "masala peanuts", "orange-glazed wings", "fried fish"] }],
    whyChoose: "Camlin is useful when one Indian label gives shoppers both citrus vodka and whisky options.",
    faqs: [
      { question: "What Camlin products are listed on BevOry?", answer: "BevOry lists Camlin Orange Vodka and Camlin Whisky." },
      { question: "How should Camlin Orange Vodka be served?", answer: "Serve it chilled with soda, orange garnish and plenty of ice." },
    ],
    finalVerdict: "Camlin is a mixer-friendly Indian label for orange vodka serves and simple whisky highballs.",
    metaTitle: "Camlin Vodka and Whisky Guide | BevOry",
    metaDescription: "Explore Camlin Orange Vodka and Whisky notes, mixer ideas, pairings and city prices on BevOry.",
  },
  campa: {
    description: "Campa is listed on BevOry through Campa Classic Whisky in 180 ml and 750 ml formats. The current beverage-alcohol listing is a blended Indian whisky, separate from any similarly named soft-drink identity.",
    story: "Campa Classic Whisky belongs in the budget-friendly Indian whisky lane, where drinkers usually compare bottle size, mixer fit and city price. Its profile is built for soda, water and snack-led occasions.",
    tastingNotes: [
      { title: "Mellow Whisky", description: "Caramel, dried fruit, light oak and grain sweetness give the whisky an easy opening." },
      { title: "Warm Spice", description: "Vanilla, toffee and a touch of cinnamon carry the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with ice, water or cold soda; keep sweet mixers light so the whisky is not buried." },
      { subheading: "Food", description: "Pair with mutton seekh, chicken tikka, smoked paneer, masala peanuts or vegetable cutlets." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "chicken tikka", "smoked paneer", "masala peanuts", "vegetable cutlets"] }],
    whyChoose: "Campa Classic Whisky is a straightforward Indian whisky for highballs and spicy snacks.",
    faqs: [
      { question: "What is Campa Classic Whisky?", answer: "Campa Classic Whisky is listed on BevOry as a blended Indian whisky." },
      { question: "What mixer suits Campa Classic Whisky?", answer: "Cold soda, water or one large cube suit its caramel and light spice profile." },
    ],
    finalVerdict: "Campa Classic Whisky is best for simple Indian whisky serves where ice, soda and snacks lead.",
    metaTitle: "Campa Classic Whisky Guide | BevOry",
    metaDescription: "Explore Campa Classic Whisky notes, highball serves, Indian food pairings and city prices on BevOry.",
  },
  campo: {
    description: "Campo is listed on BevOry mainly through Campo Viejo Rioja wines and Campo Maccione Vermentino Toscana. Campo Viejo is a Spanish Rioja wine brand founded in 1959 and owned by Pernod Ricard.",
    story: "Campo Viejo works with Rioja's signature grapes, including Tempranillo, Garnacha, Viura and Tempranillo Blanco. The BevOry page also captures Campo Maccione, so shoppers should treat the page as a route into Campo-labelled wines rather than one single estate style.",
    tastingNotes: [
      { title: "Rioja Reds", description: "Tempranillo brings red cherry, plum, vanilla, gentle oak and savoury spice." },
      { title: "White Wines", description: "Viura and Tempranillo Blanco show citrus, white fruit, floral lift and crisp acidity." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Rioja reds slightly cool in a red-wine glass and chill whites before pouring." },
      { subheading: "Food", description: "Pair reds with lamb chops or rogan josh; match whites with tandoori fish, goat cheese or creamy pasta." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb chops", "rogan josh", "tandoori fish", "goat cheese", "creamy pasta"] }],
    whyChoose: "Campo is useful for shoppers comparing Rioja reds, fresh Spanish whites and food-friendly European wines.",
    faqs: [
      { question: "Which Campo wines are listed on BevOry?", answer: "BevOry lists Campo Viejo red and white Rioja wines plus Campo Maccione Vermentino Toscana." },
      { question: "What grape is Campo Viejo known for?", answer: "Campo Viejo is strongly associated with Rioja Tempranillo, alongside Viura and Tempranillo Blanco in its white wines." },
    ],
    finalVerdict: "Campo gives wine shoppers a practical route into Rioja reds, crisp whites and dinner-table pairings.",
    metaTitle: "Campo Viejo Wine Guide | BevOry",
    metaDescription: "Explore Campo Viejo Rioja wines, tasting notes, serving ideas, pairings and city prices on BevOry.",
  },
  cantine: {
    description: "Cantine is listed on BevOry through Cantine Povero Batù Barbaresco in 750 ml format. Cantine Povero is a Piedmont producer based in Cisterna d'Asti, Italy, with a long family wine story.",
    story: "Batù Barbaresco DOCG is made from Nebbiolo, the classic grape of Barbaresco and Barolo. Cantine Povero describes Batù as a structured Piedmont red with dried rose, cherry, spice, tobacco and cedar notes.",
    tastingNotes: [
      { title: "Nebbiolo Aromatics", description: "Dried rose, red cherry, red-fruit preserve, cinnamon, clove and tobacco lead the nose." },
      { title: "Barbaresco Structure", description: "Dry tannins, bright acidity and a long savoury finish make it a serious food wine." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve at 16-18°C in a wide red-wine glass; give the wine time to breathe." },
      { subheading: "Food", description: "Pair with mushroom risotto, lamb chops, mutton rogan josh, hard cheese or truffle pasta." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mushroom risotto", "lamb chops", "mutton rogan josh", "hard cheese", "truffle pasta"] }],
    whyChoose: "Cantine Povero Batù is for drinkers who want a Nebbiolo-led Piedmont red with tannin, perfume and food depth.",
    faqs: [
      { question: "What is Cantine Povero Batù?", answer: "It is a Barbaresco DOCG red wine from Piedmont made from Nebbiolo." },
      { question: "What food pairs with Cantine Povero Batù Barbaresco?", answer: "Mushroom dishes, lamb, rogan josh, hard cheeses and truffle pasta match its tannin and savoury depth." },
    ],
    finalVerdict: "Cantine Povero Batù is a focused Italian red for Nebbiolo drinkers who want perfume, grip and dinner-table structure.",
    metaTitle: "Cantine Povero Barbaresco Guide | BevOry",
    metaDescription: "Explore Cantine Povero Batu Barbaresco notes, serving style, pairings and city prices on BevOry.",
  },
  cantores: {
    description: "Cantores is listed on BevOry through Cantores De Pias red and white wines. The label is connected with Santos & Santos Companhia de Vinhos in Portugal.",
    story: "Cantores De Pias is a Portuguese table-wine style built for direct fruit and simple food pairing. The red focuses on ripe fruit, structure and a smooth finish, while the white gives the brand a chilled, easy-drinking lane.",
    tastingNotes: [
      { title: "Red Wine", description: "Intense red fruit, gentle structure and a smooth finish suit meat, sausages and cheese." },
      { title: "White Wine", description: "Fresh citrus, orchard fruit and clean acidity make the white useful with seafood and lighter snacks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve the red around 16-17°C and chill the white well before pouring." },
      { subheading: "Food", description: "Pair the red with seekh kebab, sausages or hard cheese; match the white with grilled prawns, fish tikka or goat cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["seekh kebab", "sausages", "hard cheese", "grilled prawns", "fish tikka"] }],
    whyChoose: "Cantores is a straightforward Portuguese wine label for easy red and white food pairings.",
    faqs: [
      { question: "What Cantores wines are listed on BevOry?", answer: "BevOry lists Cantores De Pias Red and Cantores De Pias White." },
      { question: "How should Cantores De Pias Red be served?", answer: "Serve it slightly cool, around 16-17°C, with meat dishes, sausages or cheese." },
    ],
    finalVerdict: "Cantores is a simple Portuguese wine pick for drinkers who want unfussy red and white dinner options.",
    metaTitle: "Cantores De Pias Wine Guide | BevOry",
    metaDescription: "Explore Cantores De Pias red and white wines, serving ideas, pairings and city prices on BevOry.",
  },
};
