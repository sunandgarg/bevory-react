import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_79 = [
  ["downing-street", "Downing Street", "India", "Made in India Whisky", "pending-downing-street"],
  ["dragon-frost", "Dragon Frost", "Czech Republic", "Beers", "pending-dragon-frost"],
  ["dram-bell", "Dram Bell", "Scotland", "Blended Scotch", "pending-dram-bell"],
  ["dreolino", "Dreolino", "Italy", "Wine", "pending-dreolino"],
  ["dsp", "DSP", "India", "Made in India Whisky", "pending-dsp"],
  ["dudies", "Dudies", "Australia", "Wine", "pending-dudies"],
  ["duport-napoleon", "Duport Napoleon", "France", "Brandy", "pending-duport-napoleon"],
  ["duprais", "Duprais", "France", "Wine", "pending-duprais"],
  ["duque-de-sevilla", "Duque De Sevilla", "Spain", "Wine", "pending-duque-de-sevilla"],
  ["duval-lerou", "Duval Lerou", "France", "Champagne", "pending-duval-lerou"],
] as const;

export const BRAND_LOGOS_BATCH_79: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_79: Record<string, string[]> = {
  "downing-street": [
    "https://www.yugmarg.com/edition/2023/07/27/pages.pdf",
    "https://www.hptax.gov.in/public/notifications/174358661167ed05335dfec.pdf",
    "https://www.bevory.in/agra/brand/downing-street",
  ],
  "dragon-frost": [
    "https://www.livcheers.com/delhi/liquor/dragon-frost-650ml",
    "https://www.youngpioneertours.com/alcohol-in-bhutan-a-cultural-craft-beverage-guide/",
    "https://www.bevory.in/agra/brand/dragon-frost",
  ],
  "dram-bell": [
    "https://www.ardentalcobev.com/whisky",
    "https://www.prnewswire.com/in/news-releases/kevin-pietersen-unveils-the-exquisite-blended-scotch-whisky-dram-bell-by-ardent-alcobev-302371198.html",
    "https://www.bevory.in/agra/brand/dram-bell",
  ],
  dreolino: [
    "https://dreolino.it/en",
    "https://www.dreolino.it/download/DREOLINO_CATALOGO_ENG.pdf",
    "https://www.bevory.in/agra/brand/dreolino",
  ],
  dsp: [
    "https://www.quickcompany.in/trademarks/2754815-dsp-director-s-special-fine-whisky",
    "https://www.livcheers.com/nashik/liquor/dsp-black-deluxe-whisky-180ml",
    "https://www.bevory.in/agra/brand/dsp",
  ],
  dudies: [
    "https://www.vivino.com/US/en/dudies-semillon-sauvignon-blanc/w/9585420",
    "https://www.livcheers.com/liquor/dudies-shiraz-cabernet-750ml",
    "https://www.bevory.in/agra/brand/dudies",
  ],
  "duport-napoleon": [
    "https://sarakku.in/price/duport-napoleon-vsop-fine-spirit/",
    "https://www.scribd.com/document/804564952/Mrp-Proster-Ifl",
    "https://www.bevory.in/agra/brand/duport-napoleon",
  ],
  duprais: [
    "https://www.duprais.com/en/",
    "https://www.duprais.com/en/our-wines/",
    "https://www.duprais.com/en/who-are-we/",
  ],
  "duque-de-sevilla": [
    "https://www.empresia.es/distintivo/duque-de-sevilla/oepm/m-0840873/",
    "https://www.vivino.com/US/en/bodegas-aragonesas-duque-de-sevilla-crianza/w/1621123",
    "https://www.bevory.in/agra/brand/duque-de-sevilla",
  ],
  "duval-lerou": [
    "https://www.duval-leroy.com/",
    "https://www.champagne.fr/en/visit-champagne/directory-champagne-producers/champagne-duval-leroy",
    "https://www.livcheers.com/gurgaon/brand/duval-lerou",
  ],
};

export const BRAND_CONTENT_BATCH_79: Record<string, BrandPublicContent> = {
  "downing-street": {
    description: "Downing Street is an Indian premium whisky brand from NeuWorld Spirits. It is positioned around grain whisky blended with Scotch influence, with quart, pint and nip formats visible in northern Indian markets.",
    story: "NeuWorld Spirits introduced Downing Street alongside Royal Tribe in the premium and semi-premium whisky space. The brand has appeared across Delhi, Chandigarh, Punjab, Haryana, Himachal Pradesh, Rajasthan and Uttar Pradesh market references.",
    tastingNotes: [
      { title: "Premium Whisky Style", description: "Honey, cereal sweetness, light smoke and soft oak give the whisky a rounded highball profile." },
      { title: "Spiced Finish", description: "Gentle pepper, caramel and dried fruit notes hold through the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with ice, water or soda; use a tall glass for a lighter whisky highball." },
      { subheading: "Food", description: "Pair with tandoori chicken, mutton seekh, paneer tikka, masala peanuts or cheese toast." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "mutton seekh", "paneer tikka", "masala peanuts", "cheese toast"] }],
    whyChoose: "Downing Street is a polished Indian whisky page for drinkers comparing premium everyday blends.",
    faqs: [
      { question: "Who makes Downing Street whisky?", answer: "Downing Street is associated with NeuWorld Spirits in India." },
      { question: "How should Downing Street be served?", answer: "Serve it with ice, water or soda alongside spicy Indian snacks." },
    ],
    finalVerdict: "Downing Street is built for familiar whisky serves with enough oak and sweetness for snack-led evenings.",
    metaTitle: "Downing Street Whisky Guide | BevOry",
    metaDescription: "Explore Downing Street whisky notes, NeuWorld Spirits context, food pairings and city prices on BevOry.",
  },
  "dragon-frost": {
    description: "Dragon Frost is a strong ale listed on BevOry in a 650 ml bottle format. The listing places it in the beer category, where malt weight, sweetness and a firm finish matter more than hop delicacy.",
    story: "Dragon Frost sits in the high-strength beer lane for drinkers who want a bolder bottle than standard lager. Its public listings frame the beer around a dark malt profile and a colder, sharper brand personality.",
    tastingNotes: [
      { title: "Dark Malt", description: "Caramel, toffee, roasted nuts and dark malt lead the flavour." },
      { title: "Bitter Edge", description: "A warming body and lightly bitter finish keep the beer from feeling flat." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a tall beer glass." },
      { subheading: "Food", description: "Pair with chilli chicken, peri peri fries, chicken wings, paneer pakora or grilled sausages." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli chicken", "peri peri fries", "chicken wings", "paneer pakora", "grilled sausages"] }],
    whyChoose: "Dragon Frost is for drinkers who want a strong beer with malt sweetness and a firmer finish.",
    faqs: [
      { question: "What type of beer is Dragon Frost?", answer: "Dragon Frost is listed as a strong ale in 650 ml format." },
      { question: "What food pairs with Dragon Frost?", answer: "Spicy fried snacks, wings, pakoras and grilled sausages suit its fuller beer style." },
    ],
    finalVerdict: "Dragon Frost is a strong, snack-friendly beer page for colder serves and bolder food.",
    metaTitle: "Dragon Frost Beer Guide | BevOry",
    metaDescription: "Explore Dragon Frost strong ale notes, serving ideas, snack pairings and city prices on BevOry.",
  },
  "dram-bell": {
    description: "Dram Bell is a blended Scotch whisky from Ardent Alcobev, bottled in Scotland for the Indian market. The range includes Premium and Reserve expressions, with the Reserve carrying a five-year age statement.",
    story: "Ardent Alcobev launched Dram Bell in India with Kevin Pietersen as a marquee investor and brand ambassador. The whisky is presented as a bottled-in-origin Scotch range using Scottish malts and grains matured in American bourbon oak casks.",
    tastingNotes: [
      { title: "Premium Blend", description: "Honey, chocolate, cooked apple, caramel and toasted pecan create a warm, rounded profile." },
      { title: "Reserve Depth", description: "The Reserve style adds spiced fruit, nutty sweetness and a chocolate-led finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Drink neat, over a large cube, with soda, or as a Scotch highball." },
      { subheading: "Food", description: "Pair with galouti kebab, roast chicken, butter garlic prawns, dark chocolate or salted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebab", "roast chicken", "butter garlic prawns", "dark chocolate", "salted almonds"] }],
    whyChoose: "Dram Bell is a modern Scotch choice for Indian drinkers who want origin clarity and easy serving flexibility.",
    faqs: [
      { question: "Where is Dram Bell made?", answer: "Dram Bell is bottled in Scotland and sold for the Indian market by Ardent Alcobev." },
      { question: "What are the main Dram Bell expressions?", answer: "The range includes Dram Bell Premium and Dram Bell Reserve aged 5 years." },
    ],
    finalVerdict: "Dram Bell brings approachable Scotch richness to neat pours, highballs and food-led gatherings.",
    metaTitle: "Dram Bell Scotch Guide | BevOry",
    metaDescription: "Explore Dram Bell Scotch whisky notes, Ardent Alcobev story, pairings, serves and city prices.",
  },
  dreolino: {
    description: "Dreolino is a Tuscan wine estate in Rufina, Italy, with roots going back to 1939. Its range covers Chianti DOCG, Chianti Rufina DOCG organic, Tuscan red, white, rose and dessert wine styles.",
    story: "Four generations of the Tanini family have kept Dreolino focused on Chianti Rufina and Tuscan table wines. The estate works around the Rufina hills, where altitude, clay-limestone soils and cooler nights support Sangiovese-led wines with freshness.",
    tastingNotes: [
      { title: "Chianti Rufina", description: "Sour cherry, violet, dried herbs and firm acidity give the reds their classic Tuscan line." },
      { title: "Tuscan Whites", description: "The white and rose wines lean toward citrus, orchard fruit and a clean, dry finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve reds slightly cool in a red wine glass; serve whites and rose chilled." },
      { subheading: "Food", description: "Pair Chianti with lamb ragu, mushroom pizza, seekh kebab, tomato pasta or aged pecorino." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb ragu", "mushroom pizza", "seekh kebab", "tomato pasta", "aged pecorino"] }],
    whyChoose: "Dreolino is a good Tuscan pick when you want Sangiovese freshness and food-friendly acidity.",
    faqs: [
      { question: "Where is Dreolino from?", answer: "Dreolino is based in Rufina in Tuscany, Italy." },
      { question: "What wines does Dreolino make?", answer: "The range includes Chianti, Chianti Rufina, Tuscan red, white, rose and dessert wines." },
    ],
    finalVerdict: "Dreolino is a practical Tuscan wine page for Chianti lovers and Italian-food pairings.",
    metaTitle: "Dreolino Wine Guide | BevOry",
    metaDescription: "Explore Dreolino Chianti Rufina notes, Tuscan wine styles, food pairings and city prices on BevOry.",
  },
  dsp: {
    description: "DSP is Director's Special, an Indian whisky brand owned by United Spirits. The registered DSP Director's Special Fine Whisky mark traces its use back to 1987 in Indian trademark records.",
    story: "Director's Special began under Shaw Wallace and later became part of United Spirits after the Shaw Wallace acquisition. DSP Black extends the brand into a more deluxe Indian whisky segment.",
    tastingNotes: [
      { title: "Classic DSP", description: "Grain sweetness, caramel, light oak and warm spice make the whisky easy to mix." },
      { title: "DSP Black", description: "The Black style adds more body, toasted notes and a smoother finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with water, soda, ice or as a simple whisky highball." },
      { subheading: "Food", description: "Pair with chicken tikka, egg bhurji, masala peanuts, mutton seekh or paneer pakora." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "egg bhurji", "masala peanuts", "mutton seekh", "paneer pakora"] }],
    whyChoose: "DSP is one of India's familiar whisky names for straightforward pours and local price comparison.",
    faqs: [
      { question: "What does DSP stand for?", answer: "DSP is commonly used for Director's Special whisky." },
      { question: "Who owns DSP whisky?", answer: "DSP is associated with United Spirits in India." },
    ],
    finalVerdict: "DSP is a familiar Indian whisky choice for soda serves, everyday gatherings and spicy snacks.",
    metaTitle: "DSP Whisky Guide | BevOry",
    metaDescription: "Explore DSP Director's Special whisky notes, brand history, serving ideas and city prices on BevOry.",
  },
  dudies: {
    description: "Dudies is an Australian wine brand from South Australia, listed through Semillon Sauvignon Blanc, Shiraz Cabernet and Cabernet Merlot styles. Its wines are built around clean varietal blends rather than heavy oak or collector positioning.",
    story: "Dudies appears in Indian hotel lists and retail listings as an approachable Australian wine range. The white blends lean crisp and citrus-led, while the reds use South Australia's familiar Shiraz, Cabernet and Merlot structure.",
    tastingNotes: [
      { title: "White Blend", description: "Semillon Sauvignon Blanc shows lemon, green apple, melon, grass and crisp acidity." },
      { title: "Red Blends", description: "Shiraz Cabernet and Cabernet Merlot bring dark fruit, spice, oak and a fuller body." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled and reds slightly cool in standard wine glasses." },
      { subheading: "Food", description: "Pair whites with prawns or salads; pair reds with lamb chops, butter chicken, mushroom kebabs or cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["prawns", "green salad", "lamb chops", "butter chicken", "mushroom kebabs"] }],
    whyChoose: "Dudies is a useful page for comparing easy Australian white and red blends in Indian cities.",
    faqs: [
      { question: "Where is Dudies wine from?", answer: "Dudies is listed as an Australian wine brand from South Australia." },
      { question: "Which Dudies styles are common?", answer: "Common listings include Semillon Sauvignon Blanc, Shiraz Cabernet and Cabernet Merlot." },
    ],
    finalVerdict: "Dudies is an approachable Australian wine option for crisp whites, soft reds and casual dining.",
    metaTitle: "Dudies Wine Guide | BevOry",
    metaDescription: "Explore Dudies Australian wine notes, Semillon Sauvignon Blanc, Shiraz Cabernet and city prices.",
  },
  "duport-napoleon": {
    description: "Duport Napoleon is a VSOP fine spirit listed in India as an imported brandy-style bottle. The visible retail references show a 1 litre format under the Duport Napoleon VSOP Fine Spirit name.",
    story: "Duport Napoleon sits in the Napoleon and VSOP fine-spirit space, where brandy drinkers expect dried fruit, oak sweetness and a warm after-dinner style. Indian listings connect the bottle with Sonarys Co-brands distribution references.",
    tastingNotes: [
      { title: "Fruit And Oak", description: "Raisin, fig, caramel, vanilla and polished oak shape the brandy-style profile." },
      { title: "Warm Finish", description: "Nutmeg, dried orange peel and brown sugar carry the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a small snifter, over ice, or with soda for a lighter long drink." },
      { subheading: "Food", description: "Pair with plum cake, dark chocolate, mutton pepper fry, cheese toast or roasted cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["plum cake", "dark chocolate", "mutton pepper fry", "cheese toast", "roasted cashews"] }],
    whyChoose: "Duport Napoleon is for drinkers who want a warm VSOP-style bottle for slow pours and dessert pairings.",
    faqs: [
      { question: "What is Duport Napoleon?", answer: "Duport Napoleon is listed as a VSOP fine spirit in a brandy-style category." },
      { question: "How should Duport Napoleon be served?", answer: "Serve neat, on ice, or with soda depending on the occasion." },
    ],
    finalVerdict: "Duport Napoleon is a warm, dessert-friendly brandy-style pour for after-dinner drinking.",
    metaTitle: "Duport Napoleon Brandy Guide | BevOry",
    metaDescription: "Explore Duport Napoleon VSOP notes, serving ideas, dessert pairings and city prices on BevOry.",
  },
  duprais: {
    description: "Duprais is a Bordeaux wine label rooted in the Entre-deux-Mers area of France. Its range covers AOC Bordeaux red, white, rose and sweet white wines.",
    story: "The Duprais cellar was created in 1933 by a group of winegrowers. It works with Bordeaux traditions, thermo-regulated stainless steel tanks and oak barrels for selected wines, with ISO 9001 and ISO 14001 certification noted by the producer.",
    tastingNotes: [
      { title: "Bordeaux Red", description: "Merlot and Cabernet Sauvignon bring red fruit, blackcurrant, light oak and balanced tannins." },
      { title: "Bordeaux White", description: "Sauvignon Blanc and Semillon give citrus, pear, fruit jelly and fresh acidity across dry and sweet styles." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve reds at cool room temperature; serve white, rose and sweet white chilled." },
      { subheading: "Food", description: "Pair red with roast chicken or kebabs; pair white with seafood, paneer malai, salads or blue cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["roast chicken", "seekh kebab", "seafood pasta", "paneer malai", "blue cheese"] }],
    whyChoose: "Duprais is a compact Bordeaux page for comparing classic red, white, rose and sweet white styles.",
    faqs: [
      { question: "Where is Duprais from?", answer: "Duprais is rooted in Bordeaux's Entre-deux-Mers area in France." },
      { question: "What grapes are used in Duprais wines?", answer: "The red uses Merlot and Cabernet Sauvignon; the white uses Sauvignon Blanc and Semillon." },
    ],
    finalVerdict: "Duprais is a tidy Bordeaux choice for drinkers who want classic French food wines without fuss.",
    metaTitle: "Duprais Bordeaux Wine Guide | BevOry",
    metaDescription: "Explore Duprais Bordeaux red, white, rose and sweet wine notes, pairings and city prices on BevOry.",
  },
  "duque-de-sevilla": {
    description: "Duque De Sevilla is a Spanish wine brand connected with Bodegas Aragonesas and historical trademark records for wines. Indian listings include Duque De Sevilla Viura Chardonnay and Garnacha Tempranillo styles.",
    story: "The Duque De Sevilla name has appeared across Spanish wine and brandy trademark records for decades. Modern Indian listings focus on Spanish wine styles, especially white Viura Chardonnay and red Garnacha Tempranillo.",
    tastingNotes: [
      { title: "White Wine", description: "Viura Chardonnay brings citrus, apple, pear and a soft, dry finish." },
      { title: "Red Wine", description: "Garnacha Tempranillo shows red cherry, plum, spice and gentle tannins." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled and reds slightly cool in wine glasses." },
      { subheading: "Food", description: "Pair white with tandoori fish or salads; pair red with lamb kebabs, tomato pasta, chorizo or manchego." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "green salad", "lamb kebabs", "tomato pasta", "manchego"] }],
    whyChoose: "Duque De Sevilla is a useful Spanish wine page for comparing easy white and red table styles.",
    faqs: [
      { question: "What Duque De Sevilla wines are listed in India?", answer: "Listings include Viura Chardonnay and Garnacha Tempranillo styles." },
      { question: "What food pairs with Duque De Sevilla red wine?", answer: "Lamb kebabs, tomato pasta, chorizo and manchego cheese work well." },
    ],
    finalVerdict: "Duque De Sevilla is a simple Spanish wine choice for chilled whites, soft reds and tapas-style food.",
    metaTitle: "Duque De Sevilla Wine Guide | BevOry",
    metaDescription: "Explore Duque De Sevilla Spanish wine notes, Viura Chardonnay, Garnacha Tempranillo and city prices.",
  },
  "duval-lerou": {
    description: "Duval Lerou is represented by Duval Leroy Brut, a Champagne from the family-owned Duval-Leroy house founded in 1859 at Vertus in the Cote des Blancs. The 750 ml Brut listing brings the house's Chardonnay-led style into the Indian Champagne set.",
    story: "Duval-Leroy is one of the major houses of the Cote des Blancs and remains closely tied to Chardonnay-led Champagne. Carol Duval-Leroy has been central to the modern house story, with the family continuing the Vertus-based producer's direction.",
    tastingNotes: [
      { title: "Brut Champagne", description: "Green apple, lemon, pear, brioche and fine bubbles give the Brut a clean aperitif profile." },
      { title: "Chardonnay Drive", description: "Citrus freshness, chalky texture and toasted notes keep the finish precise." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a tulip glass rather than a narrow flute." },
      { subheading: "Food", description: "Pair with oysters, sushi, butter garlic prawns, chicken malai tikka or triple-cream cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["oysters", "sushi", "butter garlic prawns", "chicken malai tikka", "triple-cream cheese"] }],
    whyChoose: "Duval Lerou is a strong Champagne page for drinkers comparing proper French Brut bubbles in India.",
    faqs: [
      { question: "What Champagne is listed under Duval Lerou?", answer: "The page points to Duval Leroy Brut from the Duval-Leroy Champagne house in Vertus." },
      { question: "Where is Duval-Leroy based?", answer: "Duval-Leroy is based in Vertus in Champagne's Cote des Blancs." },
    ],
    finalVerdict: "Duval Lerou is a crisp, polished Champagne choice for seafood, celebrations and clean aperitif pours.",
    metaTitle: "Duval Lerou Champagne Guide | BevOry",
    metaDescription: "Explore Duval Lerou Brut Champagne notes, Vertus origin, serving ideas, pairings and city prices.",
  },
};
