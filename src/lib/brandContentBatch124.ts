import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_124 = [
  ["bulleit", "Bulleit", "United States", "World Whisky", "lc-brand-f8508c31c372363c18b29dc6"],
  ["campari", "Campari", "Italy", "Aperitif", "lc-brand-6163405c7a834f68df51634b"],
  ["cointreau", "Cointreau", "France", "Liqueur", "lc-brand-526e4b017af2bf7caf048b4c"],
  ["ciroc", "Ciroc", "France", "Vodka", "lc-brand-5f54557c7537945f26556265"],
  ["kahlua", "Kahlua", "Mexico", "Liqueur", "lc-brand-afa06d194fbcc82f37c70bca"],
  ["dalwhinnie", "Dalwhinnie", "Scotland", "Single Malts", "lc-brand-ad3286b7bf7c6d8bf8291595"],
  ["glenkinchie", "Glenkinchie", "Scotland", "Single Malts", "lc-brand-2fd33cd69ddc14256394ab87"],
  ["altamura", "Altamura", "Italy", "Vodka", "lc-brand-66f40fff5f0447c6f136e77d"],
  ["altano", "Altano", "Portugal", "Wine", "lc-brand-fe4901e6a40cc69a4a47ab89"],
  ["anakena-birdman", "Anakena Birdman", "Chile", "Wine", "lc-brand-9f070df4f7f35dcbc87eb8a1"],
] as const;

export const BRAND_LOGOS_BATCH_124: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_124: Record<string, string[]> = {
  bulleit: [
    "https://www.diageo.com/en/our-brands/whiskey/bulleit",
    "https://www.bulleit.com/whiskeys",
  ],
  campari: [
    "https://www.campari.com/en-us/our-history/",
    "https://www.camparigroup.com/en/page/group/our-story",
  ],
  cointreau: [
    "https://www.cointreau.com/us/en/discover-cointreau/history",
    "https://www.cointreau.com/us/en/faq",
  ],
  ciroc: [
    "https://www.ciroc.com/en/our-roots",
    "https://www.ciroc.com/en/ciroc-flavours",
  ],
  kahlua: [
    "https://www.kahlua.com/en-us/about/",
    "https://www.kahlua.com/en-us/products/original-coffee-liqueur/",
  ],
  dalwhinnie: [
    "https://www.malts.com/en/products/dalwhinnie-15-year-old-single-malt-scotch-whisky-70cl",
  ],
  glenkinchie: [
    "https://www.diageo.com/en/news-and-media/stories/2020/glenkinchie-distillery-launch-sows-the-seeds-of-future-tourism-growth",
    "https://www.malts.com/en-us/glenkinchie/visit",
  ],
  altamura: [
    "https://www.altamuradistilleries.com/en/premium-vodka/",
    "https://www.altamuradistilleries.com/en/about-us/",
  ],
  altano: [
    "https://www.symington.com/brand/altano",
    "https://en.altano.pt/vineyards",
  ],
  "anakena-birdman": [
    "https://anakenawines.com/pages/our-wines",
    "https://anakenawines.com/collections/all",
  ],
};

export const BRAND_CONTENT_BATCH_124: Record<string, BrandPublicContent> = {
  bulleit: {
    description: "Bulleit is an American whiskey brand in Diageo's portfolio, best known for Kentucky Straight Bourbon and rye whiskey. The bourbon is built around a distinctive high-rye recipe, giving it a spicy, dry-edged profile.",
    story: "Bulleit presents its modern whiskey as a continuation of a family frontier-whiskey idea, with rye spice at the centre of the brand. Its orange-label bourbon became a familiar back-bar choice because it works neatly in Old Fashioneds, whiskey highballs and neat pours.",
    tastingNotes: [
      { title: "High-Rye Spice", description: "Sweet oak, nutmeg, pepper and gentle vanilla give the bourbon its bold opening." },
      { title: "Dry Finish", description: "Maple, toffee, oak and spice finish long, clean and less syrupy than softer bourbons." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, over one large cube, in an Old Fashioned or with soda in a tall highball." },
      { subheading: "Food", description: "Pair with seekh kebab, smoked chicken, grilled corn, pecan pie or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["seekh kebab", "smoked chicken", "grilled corn", "pecan pie", "aged cheddar"] }],
    whyChoose: "Bulleit is a smart bourbon choice when you want rye spice, cocktail strength and a dry finish.",
    faqs: [
      { question: "What makes Bulleit Bourbon spicy?", answer: "Bulleit is known for a high-rye bourbon recipe, which gives it a bolder spice profile." },
      { question: "Who owns Bulleit?", answer: "Bulleit is part of Diageo's whiskey portfolio." },
    ],
    finalVerdict: "Bulleit works best for drinkers who like bourbon sweetness sharpened by rye spice.",
    metaTitle: "Bulleit Bourbon Guide | BevOry",
    metaDescription: "Explore Bulleit high-rye bourbon notes, cocktail serves, food pairings and city prices on BevOry.",
  },
  campari: {
    description: "Campari is an Italian bitter aperitif created by Gaspare Campari in 1860. Its red colour, bitter orange bite and herbal depth made it central to Milanese aperitivo culture.",
    story: "Gaspare Campari's liqueur work grew into a family business that later became Campari Group. The brand is closely tied to Milan, Caffe Campari and classic cocktails such as the Negroni and Americano.",
    tastingNotes: [
      { title: "Bitter Citrus", description: "Orange peel, grapefruit bitterness, red fruit and herbal roots form the signature profile." },
      { title: "Dry Aperitif Finish", description: "The palate moves from sweet red fruit into a firm, drying bitter finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda and orange, or build a Negroni, Americano or Campari Spritz over good ice." },
      { subheading: "Food", description: "Pair with olives, salted almonds, bruschetta, fried prawns or chilli cheese toast." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["olives", "salted almonds", "bruschetta", "fried prawns", "chilli cheese toast"] }],
    whyChoose: "Campari is the red bitter to reach for when a drink needs aperitif grip and classic cocktail authority.",
    faqs: [
      { question: "Who created Campari?", answer: "Gaspare Campari created Campari in 1860." },
      { question: "Which cocktails use Campari?", answer: "Campari is central to the Negroni, Americano and Campari Spritz." },
    ],
    finalVerdict: "Campari is essential for bitter aperitif drinkers and serious Italian-style cocktails.",
    metaTitle: "Campari Aperitif Guide | BevOry",
    metaDescription: "Explore Campari bitter aperitif notes, Milan history, cocktail serves and city prices on BevOry.",
  },
  cointreau: {
    description: "Cointreau is a French orange liqueur from Angers, created by the Cointreau family house founded in 1849. The clear liqueur is built around sweet and bitter orange peel character.",
    story: "Adolphe Cointreau and Edouard-Jean Cointreau began the family distillery in Angers before Edouard Cointreau refined the orange liqueur style. Cointreau became a key cocktail ingredient because it adds citrus intensity without heavy colour or muddiness.",
    tastingNotes: [
      { title: "Orange Peel", description: "Fresh orange zest, bitter peel and floral citrus oil lead the aroma." },
      { title: "Clean Sweetness", description: "Bright sweetness is balanced by bitter-orange lift and a dry, precise finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use in Margaritas, Cosmopolitans, Sidecars or a simple orange spritz." },
      { subheading: "Food", description: "Pair with orange cake, dark chocolate, crepes, chilli prawns or duck pancakes." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["orange cake", "dark chocolate", "crepes", "chilli prawns", "duck pancakes"] }],
    whyChoose: "Cointreau is a precise orange liqueur for cocktails that need clean citrus structure.",
    faqs: [
      { question: "Where is Cointreau from?", answer: "Cointreau is from Angers, France." },
      { question: "Which cocktails use Cointreau?", answer: "Cointreau is widely used in Margaritas, Cosmopolitans and Sidecars." },
    ],
    finalVerdict: "Cointreau is a reliable bottle for bright orange flavour, cocktail balance and dessert pairings.",
    metaTitle: "Cointreau Liqueur Guide | BevOry",
    metaDescription: "Explore Cointreau orange liqueur notes, Angers history, cocktail uses and city prices on BevOry.",
  },
  ciroc: {
    description: "Ciroc is a French vodka made from fine French grapes rather than grain or potatoes. It is five-times distilled, with the final distillation at Maison Villevert in southern France.",
    story: "Ciroc was created by Jean-Sebastien Robicquet, whose background links wine-growing and distillation in France. The brand leans into grape spirit, citrus freshness and a flavoured-vodka range built for club and cocktail serves.",
    tastingNotes: [
      { title: "Grape Spirit", description: "Clean grape sweetness, citrus peel and light orchard fruit define the core vodka." },
      { title: "Fresh Finish", description: "The finish is smooth, bright and lightly fruity rather than grain-heavy." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled with soda, tonic, lemonade or in fruit-forward vodka cocktails." },
      { subheading: "Food", description: "Pair with sushi, tandoori prawns, fried momos, chilli paneer or citrus salad." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["sushi", "tandoori prawns", "fried momos", "chilli paneer", "citrus salad"] }],
    whyChoose: "Ciroc stands out for its French grape base and polished, fruit-led vodka style.",
    faqs: [
      { question: "What is Ciroc made from?", answer: "Ciroc is made from fine French grapes." },
      { question: "How many times is Ciroc distilled?", answer: "Ciroc is distilled five times, with the final distillation at Maison Villevert." },
    ],
    finalVerdict: "Ciroc is a sleek vodka choice for chilled highballs, fruit cocktails and polished party serves.",
    metaTitle: "Ciroc Vodka Guide | BevOry",
    metaDescription: "Explore Ciroc French grape vodka notes, five-time distillation, pairings and city prices on BevOry.",
  },
  kahlua: {
    description: "Kahlua is a Mexican rum and coffee liqueur created in 1936. The original expression combines rum with 100% Arabica coffee beans and is a staple in coffee cocktails.",
    story: "Kahlua built its identity around Mexico, coffee and rum, becoming one of the best-known coffee liqueurs in the world. It remains closely associated with the White Russian, Black Russian, Espresso Martini and Frozen Mudslide.",
    tastingNotes: [
      { title: "Coffee And Rum", description: "Roasted coffee, brown sugar, vanilla and gentle rum sweetness lead the aroma." },
      { title: "Dessert Finish", description: "Mocha, caramel and coffee bitterness give the palate a rich, smooth finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use in White Russians, Espresso Martinis, coffee cocktails or pour over ice cream." },
      { subheading: "Food", description: "Pair with tiramisu, chocolate cake, gulab jamun, vanilla ice cream or salted brownies." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tiramisu", "chocolate cake", "gulab jamun", "vanilla ice cream", "salted brownies"] }],
    whyChoose: "Kahlua is the coffee liqueur to keep handy for creamy cocktails, espresso drinks and dessert serves.",
    faqs: [
      { question: "Where is Kahlua from?", answer: "Kahlua was created in Mexico in 1936." },
      { question: "What is Kahlua made with?", answer: "Kahlua Original combines rum and 100% Arabica coffee beans." },
    ],
    finalVerdict: "Kahlua is a dependable coffee liqueur for cocktails that need sweetness, roast and dessert depth.",
    metaTitle: "Kahlua Coffee Liqueur Guide | BevOry",
    metaDescription: "Explore Kahlua coffee liqueur notes, Mexican origin, cocktail serves and city prices on BevOry.",
  },
  dalwhinnie: {
    description: "Dalwhinnie is a Highland single malt Scotch whisky from one of Scotland's highest and coldest distilleries. Dalwhinnie 15 Year Old is known for heather honey, clean malt and gentle smoky warmth.",
    story: "Dalwhinnie is often presented as an accessible introduction to single malt because its profile is smooth, aromatic and lightly smoky. The cold Highland setting supports a crisp style with honeyed sweetness and restrained peat.",
    tastingNotes: [
      { title: "Heather Honey", description: "A crisp aromatic nose carries heather, honey, soft malt and a light touch of peat." },
      { title: "Gentle Smoke", description: "Vanilla, citrus fruit, malted bread and smooth smoky warmth shape the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, lightly chilled or with a small splash of still water." },
      { subheading: "Food", description: "Pair with smoked trout, roast chicken, paneer tikka, shortbread or honey cake." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked trout", "roast chicken", "paneer tikka", "shortbread", "honey cake"] }],
    whyChoose: "Dalwhinnie is a gentle Highland malt for drinkers who want honey, malt and restrained smoke.",
    faqs: [
      { question: "What is Dalwhinnie 15 known for?", answer: "Dalwhinnie 15 is known for heather honey, clean malt, gentle spice and smooth smoky warmth." },
      { question: "Where is Dalwhinnie from?", answer: "Dalwhinnie is a Highland single malt Scotch whisky from Scotland." },
    ],
    finalVerdict: "Dalwhinnie is a calm Highland pour for honeyed malt, soft smoke and comforting food pairings.",
    metaTitle: "Dalwhinnie Single Malt Guide | BevOry",
    metaDescription: "Explore Dalwhinnie 15 whisky notes, Highland style, serving tips, pairings and city prices on BevOry.",
  },
  glenkinchie: {
    description: "Glenkinchie is a Lowland single malt Scotch whisky from East Lothian, near Edinburgh. Diageo positions it as the Lowland Home of Johnnie Walker, adding a floral note to the blend.",
    story: "Glenkinchie sits in the Four Corners distillery story for Johnnie Walker alongside Caol Ila, Clynelish and Cardhu. Its visitor experience and garden near Edinburgh underline the distillery's Lowland identity rather than a heavy peat message.",
    tastingNotes: [
      { title: "Lowland Floral", description: "Fresh flowers, cut grass, orchard fruit and light cereal sweetness shape the nose." },
      { title: "Creamy Malt", description: "The palate is soft and creamy, with citrus, vanilla and a clean malt finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a tulip glass, or lengthen carefully with chilled soda for a lighter drink." },
      { subheading: "Food", description: "Pair with grilled fish, malai tikka, herb chicken, apple tart or young cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled fish", "malai tikka", "herb chicken", "apple tart", "young cheddar"] }],
    whyChoose: "Glenkinchie is a light Lowland malt for drinkers who prefer floral freshness over peat or heavy sherry.",
    faqs: [
      { question: "Where is Glenkinchie made?", answer: "Glenkinchie is made in East Lothian in Scotland's Lowlands." },
      { question: "What is Glenkinchie's style?", answer: "Glenkinchie is light, floral and creamy, with orchard fruit and clean malt notes." },
    ],
    finalVerdict: "Glenkinchie is a bright Lowland whisky for gentle sipping and lighter food pairings.",
    metaTitle: "Glenkinchie Single Malt Guide | BevOry",
    metaDescription: "Explore Glenkinchie Lowland whisky notes, floral style, serving ideas and city prices on BevOry.",
  },
  altamura: {
    description: "Altamura is an Italian vodka from Altamura Distilleries in Puglia. It is made exclusively from 100% Altamura durum wheat sourced from the Altamura region and nearby Puglian communes.",
    story: "Altamura Distilleries built its vodka around the same regional wheat identity associated with Pane di Altamura PDO bread. The result is a vodka with a stronger cereal signature than many neutral grain spirits.",
    tastingNotes: [
      { title: "Durum Wheat", description: "Soft nutty aromas, gentle spice and cereal sweetness open the glass." },
      { title: "Creamy Finish", description: "Vanilla, lemon, grapefruit and a faint aniseed note finish clean and warming." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve freezer-cold neat, in a vodka Martini or with soda and grapefruit peel." },
      { subheading: "Food", description: "Pair with burrata, smoked salmon, tandoori prawns, sushi or chilli paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["burrata", "smoked salmon", "tandoori prawns", "sushi", "chilli paneer"] }],
    whyChoose: "Altamura stands apart for its Puglian durum wheat base and fuller, savoury vodka texture.",
    faqs: [
      { question: "Where is Altamura vodka from?", answer: "Altamura vodka is from Puglia in southern Italy." },
      { question: "What is Altamura vodka made from?", answer: "It is made from 100% Altamura durum wheat." },
    ],
    finalVerdict: "Altamura is a polished Italian vodka for drinkers who want clean spirit with real wheat character.",
    metaTitle: "Altamura Vodka Guide | BevOry",
    metaDescription: "Explore Altamura Italian vodka notes, Puglia wheat, serving ideas and city prices on BevOry.",
  },
  altano: {
    description: "Altano is a Douro DOC wine range from Symington Family Estates in Portugal. It covers red, white, reserve and organic wines made from traditional Portuguese grape varieties.",
    story: "Symington Family Estates began producing Douro table wines in 1999 from vineyards long associated with port. Altano draws on family-owned Douro quintas, including sites in Cima Corgo and Douro Superior.",
    tastingNotes: [
      { title: "Douro Reds", description: "Touriga Nacional, Touriga Franca and other Douro grapes bring plum, berry fruit, spice and ripe tannins." },
      { title: "Fresh Whites", description: "Viosinho, Codega do Larinho and Gouveio bring citrus, tropical fruit and a clean mineral edge." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled and reds slightly cool in medium red-wine glasses." },
      { subheading: "Food", description: "Pair reds with lamb chops or rogan josh; pair whites with tandoori fish, roast chicken or goat cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb chops", "rogan josh", "tandoori fish", "roast chicken", "goat cheese"] }],
    whyChoose: "Altano is a strong entry into Douro table wine from one of Portugal's leading wine families.",
    faqs: [
      { question: "Who makes Altano wine?", answer: "Altano is made by Symington Family Estates." },
      { question: "Where is Altano wine produced?", answer: "Altano comes from the Douro region of northern Portugal." },
    ],
    finalVerdict: "Altano gives Douro structure, native grapes and everyday food flexibility in one clear range.",
    metaTitle: "Altano Douro Wine Guide | BevOry",
    metaDescription: "Explore Altano Douro wine notes, Symington vineyards, grape varieties and city prices on BevOry.",
  },
  "anakena-birdman": {
    description: "Anakena Birdman is a Chilean wine line from Anakena, a brand whose identity draws on Rapa Nui culture. The Birdman name refers to Tangata Manu, the birdman figure from Rapa Nui belief.",
    story: "Anakena's origins are linked to Alto Cachapoal near the Andes, with volcanic soils and a modern Chilean wine style. The Birdman range keeps the format accessible through varietal wines such as Cabernet Sauvignon, Sauvignon Blanc, Chardonnay and Merlot.",
    tastingNotes: [
      { title: "Birdman Reds", description: "Cabernet Sauvignon and Merlot lean into berry fruit, soft tannin and a smooth table-wine finish." },
      { title: "Birdman Whites", description: "Sauvignon Blanc and Chardonnay bring tropical fruit, citrus, herbaceous lift and bright acidity." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Sauvignon Blanc or Chardonnay chilled; serve Cabernet or Merlot slightly cool." },
      { subheading: "Food", description: "Pair reds with seekh kebab, mushroom tikka or grilled lamb; pair whites with fish tikka, salads or shellfish." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["seekh kebab", "mushroom tikka", "grilled lamb", "fish tikka", "shellfish"] }],
    whyChoose: "Anakena Birdman is a practical Chilean range for drinkers who want clear varietal wines with easy food matching.",
    faqs: [
      { question: "What does Anakena Birdman refer to?", answer: "Birdman refers to Tangata Manu, a birdlike figure from Rapa Nui belief." },
      { question: "Which styles are in the Anakena Birdman range?", answer: "The range includes varietal wines such as Cabernet Sauvignon, Sauvignon Blanc, Chardonnay and Merlot." },
    ],
    finalVerdict: "Anakena Birdman is a useful Chilean wine pick for casual dinners and mixed red-white preferences.",
    metaTitle: "Anakena Birdman Wine Guide | BevOry",
    metaDescription: "Explore Anakena Birdman Chilean wine notes, varietal styles, pairings and city prices on BevOry.",
  },
};
