import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_131 = [
  ["budweiser", "Budweiser", "United States", "Beer", "brand-expansion-budweiser"],
  ["captain-morgan", "Captain Morgan", "Jamaica", "Rum", "brand-expansion-captain-morgan"],
  ["carlsberg", "Carlsberg", "Denmark", "Beer", "brand-expansion-carlsberg"],
  ["clase-azul", "Clase Azul", "Mexico", "Tequila", "brand-expansion-clase-azul"],
  ["glengrant", "The Glen Grant", "Scotland", "Single Malt Scotch Whisky", "brand-expansion-glengrant"],
  ["hardys", "Hardys", "Australia", "Wine", "brand-expansion-hardys"],
  ["jura", "Jura", "Scotland", "Single Malt Scotch Whisky", "brand-expansion-jura"],
  ["louis-jadot", "Louis Jadot", "France", "Wine", "brand-expansion-louis-jadot"],
  ["nikka", "Nikka", "Japan", "Japanese Whisky", "brand-expansion-nikka"],
  ["gekkeikan", "Gekkeikan", "Japan", "Sake", "brand-expansion-gekkeikan"],
] as const;

export const BRAND_LOGOS_BATCH_131: Record<string, string> = {
  budweiser: "https://static.livcheers.com/static/content/images/brand/budweiser.webp",
  gekkeikan: "https://www.gekkeikan.com/lib/img/common/header/img_logo.svg",
};

export const BRAND_SOURCES_BATCH_131: Record<string, string[]> = {
  budweiser: [
    "https://www.anheuser-busch.com/newsroom/Budweiser-150th-Anniversary-American-Summer-Campaign",
    "https://www.anheuser-busch.com/newsroom/fifth-generation-brewmaster-and-five-other-Budweiser-Brewing-Experts-Spotlighted-in-New-Track-Your-Bud-TV-Campaign",
  ],
  "captain-morgan": [
    "https://www.captainmorgan.com/en/history-of-rum",
    "https://www.captainmorgan.com/en/how-is-rum-made",
  ],
  carlsberg: ["https://carlsberggroup.com/who-we-are/about-the-carlsberg-group/our-rich-heritage/"],
  "clase-azul": [
    "https://claseazul.com/our-story/our-story-chapter-8",
    "https://jobs.claseazul.com/content/OUR-ESSENCE/?locale=en_US",
  ],
  glengrant: ["https://www.theglengrant.com/our-story/"],
  hardys: ["https://hardyswines.com/pages/us-canada"],
  jura: [
    "https://www.jurawhisky.com/en-us/distillery/",
    "https://www.whyteandmackayltd.com/our-brands/jura/",
  ],
  "louis-jadot": [
    "https://www.louisjadot.com/en/maison/our-story",
    "https://lovejadot.com/about-louis-jadot/",
  ],
  nikka: [
    "https://www.nikka.com/en/story/history/",
    "https://www.nikka.com/en/story/founder/",
  ],
  gekkeikan: ["https://us.gekkeikan.com/about/history/"],
};

export const BRAND_CONTENT_BATCH_131: Record<string, BrandPublicContent> = {
  budweiser: {
    description: "Budweiser is an American-style lager from Anheuser-Busch, first introduced in 1876 by Adolphus Busch. It is brewed with barley malt, rice, hops, yeast and water, with beechwood ageing used for its clean, steady lager character.",
    story: "Budweiser was built as a national beer for the United States rather than a small regional lager. Its red bowtie, St. Louis brewing base and long-running sports presence have made it one of the most recognisable beer names in the world.",
    tastingNotes: [
      { title: "Classic Lager", description: "Light malt, soft grain, mild hop bitterness and crisp carbonation keep the flavour clean and easy to read." },
      { title: "Cold Finish", description: "Rice lightens the body, giving the beer a dry finish that works best straight from the fridge." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve very cold in a pilsner glass, chilled bottle or can; avoid heavy glassware that warms the beer too fast." },
      { subheading: "Food", description: "Pair with masala peanuts, chicken wings, pepperoni pizza, aloo tikki sliders or grilled corn." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["masala peanuts", "chicken wings", "pepperoni pizza", "aloo tikki sliders", "grilled corn"] }],
    whyChoose: "Budweiser is the familiar lager pick when crisp refreshment matters more than heavy malt or hop intensity.",
    faqs: [
      { question: "When was Budweiser introduced?", answer: "Budweiser was introduced in 1876 by Adolphus Busch." },
      { question: "What gives Budweiser its light body?", answer: "Budweiser uses rice alongside barley malt, which helps keep the lager clean and light-bodied." },
    ],
    finalVerdict: "Budweiser is a cold, crisp American lager for easy drinking with spicy bar snacks.",
    metaTitle: "Budweiser Beer Guide | BevOry",
    metaDescription: "Explore Budweiser lager, beechwood ageing, tasting notes, food pairings and city prices on BevOry.",
  },
  "captain-morgan": {
    description: "Captain Morgan is a global rum brand in Diageo's portfolio, best known for Original Spiced Gold and easy mixed drinks. Its flavour profile is built around Caribbean rum, molasses depth and warm spice rather than dry sipping austerity.",
    story: "The brand takes its name from Henry Morgan, the Welsh privateer linked to Caribbean seafaring lore. In modern bars, Captain Morgan is less about quiet tasting flights and more about cola, ginger ale, lime and party-friendly rum serves.",
    tastingNotes: [
      { title: "Spiced Rum", description: "Vanilla, brown sugar, clove, cinnamon and caramel sit over a rounded molasses base." },
      { title: "Mixer Ready", description: "The sweetness and spice hold up well with cola, ginger ale, pineapple juice and fresh lime." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Mix with cola and lime, build with ginger ale over ice, or shake into a tropical punch." },
      { subheading: "Food", description: "Pair with peri-peri chicken, barbecue ribs, chilli cheese toast, caramel popcorn or grilled pineapple." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["peri-peri chicken", "barbecue ribs", "chilli cheese toast", "caramel popcorn", "grilled pineapple"] }],
    whyChoose: "Captain Morgan is a reliable spiced rum for uncomplicated highballs and sweet-spiced party cocktails.",
    faqs: [
      { question: "Who owns Captain Morgan?", answer: "Captain Morgan is part of Diageo's global spirits portfolio." },
      { question: "What is Captain Morgan best mixed with?", answer: "Cola, ginger ale, pineapple juice and lime are the most natural mixers for its spiced style." },
    ],
    finalVerdict: "Captain Morgan is the bottle to reach for when rum drinks need spice, sweetness and speed.",
    metaTitle: "Captain Morgan Rum Guide | BevOry",
    metaDescription: "Explore Captain Morgan spiced rum, tasting notes, mixer ideas, food pairings and city prices on BevOry.",
  },
  carlsberg: {
    description: "Carlsberg is a Danish beer brand founded by J.C. Jacobsen in Copenhagen in 1847. The brewery became known not just for lager, but for brewing science through the Carlsberg Laboratory and its work on yeast and pH.",
    story: "J.C. Jacobsen built Carlsberg on a hill outside Copenhagen with access to better storage and flowing water. The brewery later grew into an international beer group while keeping its Danish pilsner identity at the centre.",
    tastingNotes: [
      { title: "Danish Pilsner", description: "Clean malt, grassy hops, light grain sweetness and brisk carbonation give the beer its crisp pilsner shape." },
      { title: "Balanced Bitterness", description: "The finish is dry and lightly bitter, making it easy with salty or fried food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve cold in a tall pilsner glass with a firm foam collar." },
      { subheading: "Food", description: "Pair with fish fry, chicken pakora, prawn crackers, Margherita pizza or salted cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fish fry", "chicken pakora", "prawn crackers", "Margherita pizza", "salted cashews"] }],
    whyChoose: "Carlsberg is a clean pilsner choice with a proper brewing heritage behind the label.",
    faqs: [
      { question: "Who founded Carlsberg?", answer: "J.C. Jacobsen founded Carlsberg in Copenhagen in 1847." },
      { question: "What style is Carlsberg best known for?", answer: "Carlsberg is best known for Danish-style pilsner and pale lager." },
    ],
    finalVerdict: "Carlsberg is a crisp, restrained lager that works well with fried snacks and seafood.",
    metaTitle: "Carlsberg Beer Guide | BevOry",
    metaDescription: "Explore Carlsberg Danish pilsner, Copenhagen history, tasting notes, pairings and city prices on BevOry.",
  },
  "clase-azul": {
    description: "Clase Azul México is a luxury tequila and mezcal house founded by Arturo Lomelí, known for Mexican craft, hand-finished decanters and agave spirits. Its tequila identity is strongly tied to Jalisco and the blue-agave Reposado bottle that made the brand famous.",
    story: "Clase Azul presents the decanter as part of the experience, not just packaging. The brand uses Mexican artisanship as a central language, from painted ceramic forms to limited editions built around regional craft traditions.",
    tastingNotes: [
      { title: "Reposado Style", description: "Cooked agave, vanilla, caramel, soft oak and baking spice create the plush house profile." },
      { title: "Sweet Spice", description: "The palate is rounded and dessert-leaning, with a smooth finish suited to slow sipping." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour neat in a tequila glass or small tulip; skip heavy mixers if you want the cask sweetness to show." },
      { subheading: "Food", description: "Pair with duck tacos, mole chicken, paneer tikka, churros or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["duck tacos", "mole chicken", "paneer tikka", "churros", "dark chocolate"] }],
    whyChoose: "Clase Azul is for drinkers who want a polished tequila pour with strong visual craft and a soft, sweet oak profile.",
    faqs: [
      { question: "What is Clase Azul famous for?", answer: "Clase Azul is famous for luxury Mexican agave spirits and its hand-finished ceramic decanters." },
      { question: "What does Clase Azul Reposado taste like?", answer: "It leans toward cooked agave, vanilla, caramel, gentle oak and warm baking spice." },
    ],
    finalVerdict: "Clase Azul is a showpiece tequila for slow sipping and rich food pairings.",
    metaTitle: "Clase Azul Tequila Guide | BevOry",
    metaDescription: "Explore Clase Azul tequila, Mexican craft, tasting notes, serving ideas, pairings and city prices on BevOry.",
  },
  glengrant: {
    description: "The Glen Grant is a Speyside single malt Scotch whisky from Rothes, founded in 1840 by brothers John and James Grant. The distillery is known for a light, elegant style shaped by tall slender pot stills and water-cooling purifiers.",
    story: "James 'The Major' Grant expanded the distillery in the 19th century and left a clear mark on its equipment, gardens and house style. The result is a Speyside whisky name associated with orchard fruit, clarity and approachable ageing.",
    tastingNotes: [
      { title: "Orchard Fruit", description: "Green apple, pear, lemon peel and honeyed malt lead the lighter side of the whisky." },
      { title: "Gentle Oak", description: "Vanilla, almond and soft spice add structure without turning the whisky heavy." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip neat in a tulip glass or add a few drops of water to open the fruit and malt." },
      { subheading: "Food", description: "Pair with smoked chicken, almond biscotti, apple tart, malai tikka or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked chicken", "almond biscotti", "apple tart", "malai tikka", "aged cheddar"] }],
    whyChoose: "The Glen Grant is a strong Speyside pick for drinkers who prefer clean fruit over smoke.",
    faqs: [
      { question: "Where is The Glen Grant made?", answer: "The Glen Grant is made in Rothes in Scotland's Speyside region." },
      { question: "Who founded The Glen Grant?", answer: "Brothers John and James Grant founded The Glen Grant distillery in 1840." },
    ],
    finalVerdict: "The Glen Grant is a graceful Speyside malt for fruit-forward whisky drinkers.",
    metaTitle: "The Glen Grant Whisky Guide | BevOry",
    metaDescription: "Explore The Glen Grant Speyside whisky, Rothes history, tasting notes, pairings and city prices on BevOry.",
  },
  hardys: {
    description: "Hardys is an Australian wine brand founded by Thomas Hardy after he arrived in South Australia in 1850 and bought Bankside land in 1853. Its range spans regional Australian Chardonnay, Shiraz, Cabernet Sauvignon, Riesling and sparkling wines.",
    story: "Thomas Hardy built the business from Adelaide and McLaren Vale roots, later expanding through Tintara and family leadership. The brand still leans on multi-regional blending, Australian varietal character and broad global reach.",
    tastingNotes: [
      { title: "Australian Reds", description: "Shiraz and Cabernet styles often show black fruit, plum, spice, soft tannin and oak sweetness." },
      { title: "Fresh Whites", description: "Chardonnay and Riesling expressions move from citrus and stone fruit to cleaner floral acidity." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled, sparkling wine well chilled, and medium-bodied reds slightly cool in a proper wine glass." },
      { subheading: "Food", description: "Pair Shiraz with seekh kebabs, Cabernet with roast lamb, and Chardonnay with butter chicken or grilled prawns." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["seekh kebabs", "roast lamb", "butter chicken", "grilled prawns", "aged cheddar"] }],
    whyChoose: "Hardys works when you want recognisable Australian wine styles across red, white and sparkling bottles.",
    faqs: [
      { question: "Who founded Hardys wines?", answer: "Thomas Hardy founded the Hardys wine business in South Australia." },
      { question: "What grapes is Hardys known for?", answer: "Hardys is known across Australian Shiraz, Cabernet Sauvignon, Chardonnay, Riesling and sparkling wine styles." },
    ],
    finalVerdict: "Hardys is a practical Australian wine name for everyday meals and mixed-table drinking.",
    metaTitle: "Hardys Wine Guide | BevOry",
    metaDescription: "Explore Hardys Australian wine, Thomas Hardy history, grape styles, pairings and city prices on BevOry.",
  },
  jura: {
    description: "Jura is an island single malt Scotch whisky made at Jura Distillery in the Inner Hebrides. Whisky has been made on Jura since 1810, when Archibald Campbell established the distillery originally called Small Isles.",
    story: "The distillery closed in the early 20th century and was later rebuilt as part of the island's revival. Jura's remote setting, one road and small community give the whisky a clear island identity without making every bottle heavily peated.",
    tastingNotes: [
      { title: "Island Malt", description: "Honey, citrus, malt, pear and gentle coastal notes shape the core style." },
      { title: "Cask Finish", description: "Bourbon and wine-cask expressions add vanilla, dried fruit, spice and rounded sweetness." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip neat in a tulip glass, then add a small splash of water for the sweeter cask notes." },
      { subheading: "Food", description: "Pair with smoked fish, tandoori prawns, roast pork, lemon tart or salted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked fish", "tandoori prawns", "roast pork", "lemon tart", "salted almonds"] }],
    whyChoose: "Jura is a good island malt for drinkers who want coastal character without aggressive smoke.",
    faqs: [
      { question: "Where is Jura whisky made?", answer: "Jura whisky is made on the island of Jura in Scotland's Inner Hebrides." },
      { question: "When was Jura Distillery founded?", answer: "Jura traces its distillery history to 1810." },
    ],
    finalVerdict: "Jura is a balanced island single malt with honeyed malt, citrus and gentle coastal grip.",
    metaTitle: "Jura Whisky Guide | BevOry",
    metaDescription: "Explore Jura island single malt, distillery history, tasting notes, pairings and city prices on BevOry.",
  },
  "louis-jadot": {
    description: "Louis Jadot is a Burgundy wine house founded in Beaune in 1859 by Louis Henry Denis Jadot. The house works across estate vineyards and négociant wines, with Pinot Noir and Chardonnay at the centre of its Côte d'Or identity.",
    story: "The Jadot family had been purchasing Premier and Grand Cru vineyards before the house took its current name. Today the producer is known for a light-handed Burgundy approach, restrained oak and wines that aim to express village, Premier Cru and Grand Cru origin.",
    tastingNotes: [
      { title: "Red Burgundy", description: "Pinot Noir bottlings show red cherry, raspberry, earth, soft spice and fine tannin." },
      { title: "White Burgundy", description: "Chardonnay styles range from citrus and apple to hazelnut, cream and mineral length." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled in Burgundy stems; pour reds slightly cool and give structured bottles air." },
      { subheading: "Food", description: "Pair Pinot Noir with duck, mushroom galouti, roast chicken or grilled salmon; pair Chardonnay with prawns or creamy pasta." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["duck", "mushroom galouti", "roast chicken", "grilled salmon", "creamy pasta"] }],
    whyChoose: "Louis Jadot is a dependable Burgundy name when appellation character and classic Pinot Noir or Chardonnay matter.",
    faqs: [
      { question: "Where is Louis Jadot from?", answer: "Louis Jadot is based in Beaune in Burgundy, France." },
      { question: "When was Louis Jadot founded?", answer: "Maison Louis Jadot was founded in 1859 by Louis Henry Denis Jadot." },
    ],
    finalVerdict: "Louis Jadot is a classic Burgundy choice for drinkers who want graceful Pinot Noir and Chardonnay.",
    metaTitle: "Louis Jadot Wine Guide | BevOry",
    metaDescription: "Explore Louis Jadot Burgundy wine, Beaune history, Pinot Noir, Chardonnay pairings and city prices on BevOry.",
  },
  nikka: {
    description: "Nikka is a Japanese whisky house founded by Masataka Taketsuru, who established Dai Nippon Kaju in 1934 and completed Yoichi Distillery that same year. The company later added Miyagikyo Distillery in 1969, giving Nikka two distinct Japanese malt bases.",
    story: "Taketsuru studied whisky-making in Scotland, trained at Longmorn and Hazelburn, and returned to Japan with the notes that shaped his distilling career. Nikka's range now covers Yoichi, Miyagikyo, Coffey Grain, blended malts and blended whiskies.",
    tastingNotes: [
      { title: "Yoichi Weight", description: "Yoichi-led whisky often brings malt depth, orchard fruit, gentle smoke, spice and coastal firmness." },
      { title: "Miyagikyo Polish", description: "Miyagikyo contributes softer fruit, floral notes, honey and a more refined texture." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip neat, add a little water, or build a Japanese highball with hard ice and chilled soda." },
      { subheading: "Food", description: "Pair with yakitori, pork gyoza, tandoori mushrooms, miso eggplant or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["yakitori", "pork gyoza", "tandoori mushrooms", "miso eggplant", "dark chocolate"] }],
    whyChoose: "Nikka is a serious Japanese whisky choice for drinkers who want both history and blending range.",
    faqs: [
      { question: "Who founded Nikka Whisky?", answer: "Masataka Taketsuru founded Nikka's predecessor company in 1934." },
      { question: "What are Nikka's main malt distilleries?", answer: "Nikka's key malt distilleries are Yoichi in Hokkaido and Miyagikyo in Sendai." },
    ],
    finalVerdict: "Nikka brings Japanese whisky history, precise blending and highball-friendly flavour into one house.",
    metaTitle: "Nikka Whisky Guide | BevOry",
    metaDescription: "Explore Nikka Japanese whisky, Taketsuru history, Yoichi, Miyagikyo, tasting notes and city prices on BevOry.",
  },
  gekkeikan: {
    description: "Gekkeikan is a Japanese sake producer founded in 1637 by Jiemon Okura in Fushimi, just south of Kyoto. Fushimi's soft, high-quality water remains central to the brand's sake identity.",
    story: "The company began as Kasagiya and later adopted the Gekkeikan name, meaning crown of laurel, in 1905. It also invested heavily in sake research, including the Okura Sake Brewing Research Institute in 1909.",
    tastingNotes: [
      { title: "Classic Sake", description: "Rice sweetness, steamed grain, melon, soft acidity and a clean finish define the approachable house style." },
      { title: "Warm Or Chilled", description: "Depending on the bottle, Gekkeikan can feel round and mellow warm or fresher and cleaner chilled." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a small wine glass, gently warmed in a tokkuri, or with sushi and izakaya-style snacks." },
      { subheading: "Food", description: "Pair with sushi, tempura prawns, chicken yakitori, steamed momos or miso-glazed mushrooms." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["sushi", "tempura prawns", "chicken yakitori", "steamed momos", "miso-glazed mushrooms"] }],
    whyChoose: "Gekkeikan is a historic Fushimi sake name with clean rice flavour and flexible serving styles.",
    faqs: [
      { question: "Where is Gekkeikan from?", answer: "Gekkeikan is from Fushimi, south of Kyoto in Japan." },
      { question: "When was Gekkeikan founded?", answer: "Gekkeikan traces its brewing history to 1637." },
    ],
    finalVerdict: "Gekkeikan is an easy sake starting point for Japanese food, light Asian snacks and warm service.",
    metaTitle: "Gekkeikan Sake Guide | BevOry",
    metaDescription: "Explore Gekkeikan sake from Fushimi, Kyoto, tasting notes, serving styles, pairings and city prices on BevOry.",
  },
};
