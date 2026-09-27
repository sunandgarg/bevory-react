import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_118 = [
  ["four-seasons", "Four Seasons", "India", "Wine", "brand-expansion-four-seasons"],
  ["vallonne", "Vallonne", "India", "Wine", "brand-expansion-vallonne"],
  ["charosa", "Charosa", "India", "Wine", "brand-expansion-charosa"],
  ["suntory-toki", "Suntory Toki", "Japan", "Blended Whisky", "brand-expansion-suntory-toki"],
  ["hakushu", "Hakushu", "Japan", "Single Malt", "brand-expansion-hakushu"],
  ["ao", "Suntory Ao", "Japan", "World Whisky", "brand-expansion-ao"],
  ["kakubin", "Suntory Kakubin", "Japan", "Blended Whisky", "brand-expansion-kakubin"],
  ["knob-creek", "Knob Creek", "United States", "Bourbon", "brand-expansion-knob-creek"],
  ["basil-haydens", "Basil Hayden", "United States", "Bourbon", "brand-expansion-basil-haydens"],
  ["gentleman-jack", "Gentleman Jack", "United States", "Tennessee Whiskey", "brand-expansion-gentleman-jack"],
] as const;

export const BRAND_LOGOS_BATCH_118: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_118: Record<string, string[]> = {
  "four-seasons": [
    "https://www.diageoindia.com/en/news-and-media/press-releases/2019/usl-enters-into-a-share-purchase-agreement-for-the-sale-of-equity-shares-in-four-seasons",
  ],
  vallonne: [
    "https://www.vallonnevineyards.com/",
    "https://www.thewinesofindia.com/vallonn-vineyards",
  ],
  charosa: [
    "https://charosavineyards.com/",
    "https://www.indianwineacademy.com/item_2_587.aspx",
  ],
  "suntory-toki": [
    "https://house.suntory.com/products",
    "https://founders.beamsuntory.com/dna/hoswhiskey",
  ],
  hakushu: [
    "https://www.suntory.com/factory/hakushu/introduction/",
    "https://www.suntory.com/factory/hakushu-sanctuary/",
  ],
  ao: [
    "https://house.suntory.com/ao-whisky/ao-world-whisky",
    "https://www.suntoryglobalspirits.com/en-in/our-brands/whiskey",
  ],
  kakubin: [
    "https://www.suntory.com.tw/alcohol/kakubin/about.php",
    "https://house.suntory.com/products",
  ],
  "knob-creek": [
    "https://www.knobcreek.com/single-barrel-experience",
    "https://founders.beamsuntory.com/dna/knobcreek",
  ],
  "basil-haydens": [
    "https://www.basilhaydenbourbon.com/whiskies",
    "https://founders.beamsuntory.com/dna/basilhayden",
  ],
  "gentleman-jack": [
    "https://pressroom.jackdaniels.com/products/",
    "https://pressroom.jackdaniels.com/wp-content/uploads/2015/01/Gentleman-Jack-Fact-Sheet2.pdf",
  ],
};

export const BRAND_CONTENT_BATCH_118: Record<string, BrandPublicContent> = {
  "four-seasons": {
    description: "Four Seasons is an Indian wine label formerly owned by United Spirits Limited. In 2019, United Spirits agreed to sell Four Seasons Wines Limited and its associated brands to Grover Zampa Vineyards Limited and Quintela Assets Limited.",
    story: "The label belongs to the Maharashtra wine story, where Indian wineries built familiar red, white and sparkling bottles for a wider domestic audience. Its move into the Grover Zampa orbit placed it beside one of India's established wine producers.",
    tastingNotes: [
      { title: "Reds", description: "Look for ripe dark fruit, soft oak spice and a fuller dinner-table texture in the red wines." },
      { title: "Whites And Sparkling", description: "White and sparkling bottles lean toward fresher fruit, clean acidity and chilled aperitif service." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites and sparkling wines well chilled; pour reds slightly cool in a medium wine glass." },
      { subheading: "Food", description: "Pair whites with tandoori fish or paneer tikka; serve reds with mushroom pepper fry, lamb kebabs or roast chicken." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "paneer tikka", "mushroom pepper fry", "lamb kebabs", "roast chicken"] }],
    whyChoose: "Four Seasons is a familiar Indian wine name for drinkers comparing lighter chilled styles with food-ready reds.",
    faqs: [
      { question: "Is Four Seasons an Indian wine brand?", answer: "Yes. Four Seasons Wines Limited was an Indian wine business associated with United Spirits before the 2019 sale agreement." },
      { question: "Who bought Four Seasons Wines?", answer: "Grover Zampa Vineyards Limited and Quintela Assets Limited agreed to buy Four Seasons Wines Limited from United Spirits." },
    ],
    finalVerdict: "Four Seasons works as a practical Indian wine pick when the table needs both chilled bottles and reds.",
    metaTitle: "Four Seasons Wine Guide | BevOry",
    metaDescription: "Explore Four Seasons Indian wine, red and white styles, serving tips, pairings and city prices on BevOry.",
  },
  vallonne: {
    description: "Vallonne is a boutique wine estate in Kavnai near Igatpuri, within Maharashtra's Nashik wine belt. Shailendra Pai established the winery in 2009, giving India one of its early small-estate wine names.",
    story: "The vineyards sit near Mukhne Dam, west of Nashik city, in a wetter Igatpuri landscape that differs from Dindori and Niphad. Vallonne built its identity around estate scale, site character and restaurant-friendly bottles.",
    tastingNotes: [
      { title: "Reds", description: "Ripe berries, gentle oak, spice and a savoury finish suit richer food." },
      { title: "Whites", description: "Fresh citrus, stone fruit and bright acidity make the chilled bottles crisp and food-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill whites to 8-10C and serve reds slightly cool in a broad wine glass." },
      { subheading: "Food", description: "Pair whites with tandoori prawns or fish tikka; match reds with pepper chicken, mushroom galouti or lamb chops." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "fish tikka", "pepper chicken", "mushroom galouti", "lamb chops"] }],
    whyChoose: "Vallonne gives Indian wine drinkers a boutique Igatpuri alternative to larger Nashik producers.",
    faqs: [
      { question: "Where is Vallonne Vineyards?", answer: "Vallonne is in Kavnai near Igatpuri, Maharashtra, close to Nashik wine country." },
      { question: "Who founded Vallonne?", answer: "Shailendra Pai established Vallonne Vineyards in 2009." },
    ],
    finalVerdict: "Vallonne is strongest when paired with food that lets its small-estate reds and chilled whites speak clearly.",
    metaTitle: "Vallonne Wine Guide | BevOry",
    metaDescription: "Explore Vallonne wines from Igatpuri near Nashik, tasting notes, pairings and city prices on BevOry.",
  },
  charosa: {
    description: "Charosa Vineyards is an Indian wine estate in Charosa village within Nashik's Dindori region. The range is known for Reserve Tempranillo alongside Cabernet Sauvignon, Shiraz, Viognier and other varietal wines.",
    story: "Charosa helped make Tempranillo part of India's premium red-wine conversation rather than relying only on Cabernet and Shiraz. Its Nashik setting gives the wines warm fruit, acidity and enough structure for Indian dining.",
    tastingNotes: [
      { title: "Reserve Tempranillo", description: "Ripe red berries, vanilla, cocoa, coconut and soft tannin give the red its dinner-ready shape." },
      { title: "Selection Viognier", description: "Apricot, peach, floral notes and clean acidity make the white aromatic and fresh." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled; let Reserve reds breathe in a wide glass at cool room temperature." },
      { subheading: "Food", description: "Pair Viognier with paneer tikka or tandoori fish; match Reserve Tempranillo with mutton rogan josh or grilled lamb." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["paneer tikka", "tandoori fish", "mutton rogan josh", "grilled lamb", "aged gouda"] }],
    whyChoose: "Charosa stands out in Nashik for a Tempranillo-led red that feels different from the usual Indian wine shelf.",
    faqs: [
      { question: "Where is Charosa wine made?", answer: "Charosa wine is made in Charosa village in the Dindori region of Nashik, Maharashtra." },
      { question: "What is Charosa known for?", answer: "Charosa is especially known for its Reserve Tempranillo." },
    ],
    finalVerdict: "Charosa is the Nashik pick when you want aromatic whites and a Spanish-grape red with Indian food.",
    metaTitle: "Charosa Wine Guide | BevOry",
    metaDescription: "Explore Charosa wines from Nashik, Reserve Tempranillo notes, pairings and city prices on BevOry.",
  },
  "suntory-toki": {
    description: "Suntory Toki is a Japanese blended whisky from the House of Suntory. It brings together whisky from Hakushu, Yamazaki and Chita, with a style built for cold, sparkling highballs.",
    story: "Toki means time, and the bottle presents Suntory blending in a modern, easy-drinking format. The blend highlights Chita grain whisky with Hakushu malt freshness and Yamazaki depth.",
    tastingNotes: [
      { title: "Highball Core", description: "Green apple, citrus, basil-like freshness and light vanilla lift easily through soda." },
      { title: "Soft Finish", description: "Chita grain whisky keeps the mouthfeel gentle, clean and lightly sweet." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Build in a chilled highball glass with clear ice, one part whisky and cold soda." },
      { subheading: "Food", description: "Pair with chicken yakitori, chilli paneer, tempura prawns, salted edamame or karaage." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken yakitori", "chilli paneer", "tempura prawns", "salted edamame", "karaage"] }],
    whyChoose: "Suntory Toki is the bottle to choose when Japanese whisky needs to feel bright, cold and social.",
    faqs: [
      { question: "Is Suntory Toki a single malt?", answer: "No. Suntory Toki is a blended whisky made with malt and grain whiskies." },
      { question: "How should Suntory Toki be served?", answer: "It is best known as a Japanese highball with cold soda and ice." },
    ],
    finalVerdict: "Toki is a highball-first Japanese whisky that turns light fruit and grain softness into refreshment.",
    metaTitle: "Suntory Toki Whisky Guide | BevOry",
    metaDescription: "Explore Suntory Toki Japanese whisky, highball serves, tasting notes, pairings and city prices on BevOry.",
  },
  hakushu: {
    description: "Hakushu is a Japanese single malt whisky made at Suntory's Hakushu Distillery in Yamanashi. Established in 1973, the distillery sits in a forested setting at the foot of the Southern Japan Alps.",
    story: "Suntory built Hakushu half a century after Yamazaki, creating a second malt distillery with a greener, mountain-forest identity. The whisky is known for fresh herbal tones, gentle smoke and crisp fruit.",
    tastingNotes: [
      { title: "Forest Freshness", description: "Mint, green apple, pear and fresh herbs give Hakushu its cool aromatic lift." },
      { title: "Light Smoke", description: "A measured smoky thread sits behind citrus, cereal and clean oak." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Taste neat first, then try a forest-style highball with chilled soda and plenty of ice." },
      { subheading: "Food", description: "Pair with tandoori fish, grilled asparagus, chicken yakitori, smoked paneer or lemon sushi rolls." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "grilled asparagus", "chicken yakitori", "smoked paneer", "lemon sushi rolls"] }],
    whyChoose: "Hakushu is a Japanese single malt for drinkers who prefer green freshness over heavy oak.",
    faqs: [
      { question: "Where is Hakushu whisky made?", answer: "Hakushu is made at Suntory's Hakushu Distillery in Yamanashi, Japan." },
      { question: "When was Hakushu Distillery established?", answer: "Suntory established Hakushu Distillery in 1973." },
    ],
    finalVerdict: "Hakushu brings mountain herbs, orchard fruit and light smoke into a clean Japanese malt style.",
    metaTitle: "Hakushu Whisky Guide | BevOry",
    metaDescription: "Explore Hakushu Japanese single malt, forest notes, highball serves, pairings and city prices on BevOry.",
  },
  ao: {
    description: "Suntory Ao is a world blended whisky from the House of Suntory. It blends whiskies from five major whisky-making regions: Japan, Scotland, Ireland, Canada and the United States.",
    story: "Ao means blue, a reference to the ocean connecting the countries behind the blend. Suntory's blending team uses the style to show different whisky climates and grain traditions in one glass.",
    tastingNotes: [
      { title: "Fruit And Vanilla", description: "Pineapple, vanilla, creamy sweetness and gentle oak open the whisky." },
      { title: "Smoke And Spice", description: "Cinnamon spice, light smoke and woody depth give the finish more range than a simple blend." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a tulip glass or lengthen with soda when you want a lighter whisky table." },
      { subheading: "Food", description: "Pair with smoked chicken, galouti kebabs, yakitori, roasted almonds or cinnamon apple tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked chicken", "galouti kebabs", "yakitori", "roasted almonds", "cinnamon apple tart"] }],
    whyChoose: "Suntory Ao is useful when you want a single bottle that shows world whisky through a Japanese blending lens.",
    faqs: [
      { question: "What is Suntory Ao?", answer: "Suntory Ao is a world blended whisky made with whiskies from five major whisky regions." },
      { question: "What does Ao mean?", answer: "Ao means blue, referring to the ocean connecting the countries in the blend." },
    ],
    finalVerdict: "Suntory Ao is a layered world blend with enough fruit, spice and smoke to hold a mixed table.",
    metaTitle: "Suntory Ao Whisky Guide | BevOry",
    metaDescription: "Explore Suntory Ao world whisky, five-region blending, tasting notes, pairings and city prices on BevOry.",
  },
  kakubin: {
    description: "Suntory Kakubin is a Japanese blended whisky first created in 1937. Its name refers to the square bottle, and the whisky is closely tied to Japan's everyday whisky highball culture.",
    story: "Founder Shinjiro Torii pursued a Japanese whisky character at Yamazaki before Kakubin became one of the country's most familiar whisky bottles. The serve is simple: whisky, ice and soda in a tall glass.",
    tastingNotes: [
      { title: "Highball Style", description: "Light malt, citrus, honey and vanilla give Kakubin a clean base for soda." },
      { title: "Gentle Oak", description: "Soft oak and mild spice keep the finish dry enough for food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use a tall chilled glass, plenty of ice, Kakubin and cold soda, then stir lightly." },
      { subheading: "Food", description: "Pair with karaage, masala fries, chicken katsu, chilli tofu or grilled corn." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["karaage", "masala fries", "chicken katsu", "chilli tofu", "grilled corn"] }],
    whyChoose: "Kakubin is the Japanese whisky pick for a crisp, food-friendly highball.",
    faqs: [
      { question: "When was Suntory Kakubin created?", answer: "Suntory Kakubin was created in 1937." },
      { question: "Why is it called Kakubin?", answer: "The name refers to its square bottle." },
    ],
    finalVerdict: "Kakubin is at its best as a cold highball beside fried, salty and lightly spicy food.",
    metaTitle: "Suntory Kakubin Whisky Guide | BevOry",
    metaDescription: "Explore Suntory Kakubin Japanese whisky, highball style, tasting notes and city prices on BevOry.",
  },
  "knob-creek": {
    description: "Knob Creek is a Kentucky straight bourbon from the Jim Beam family. Booker Noe created the brand in 1992 as part of Beam's small-batch collection, with a fuller pre-Prohibition bourbon style in mind.",
    story: "The brand takes its name from Knob Creek, an area linked to Abraham Lincoln's Kentucky childhood. In the glass, it is built for bolder oak, caramel and rye spice than lighter everyday bourbon.",
    tastingNotes: [
      { title: "Caramel And Oak", description: "Deep caramel, toasted oak, vanilla and roasted nuts give the bourbon weight." },
      { title: "Rye Spice", description: "Pepper, cinnamon and dry wood bring a firmer finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, over one large cube, or in an Old Fashioned where the bourbon can stay prominent." },
      { subheading: "Food", description: "Pair with barbecue ribs, mutton seekh, smoked paneer, pecan pie or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["barbecue ribs", "mutton seekh", "smoked paneer", "pecan pie", "aged cheddar"] }],
    whyChoose: "Knob Creek is for bourbon drinkers who want deeper oak, caramel and spice in the glass.",
    faqs: [
      { question: "Who created Knob Creek?", answer: "Booker Noe created Knob Creek as part of Beam's small-batch bourbon collection." },
      { question: "What style is Knob Creek?", answer: "Knob Creek is Kentucky straight bourbon with a fuller, oak-forward profile." },
    ],
    finalVerdict: "Knob Creek is a sturdy bourbon for ice, classic cocktails and smoky food.",
    metaTitle: "Knob Creek Bourbon Guide | BevOry",
    metaDescription: "Explore Knob Creek bourbon, Booker Noe history, oak-rich notes, pairings and city prices on BevOry.",
  },
  "basil-haydens": {
    description: "Basil Hayden is a Kentucky straight bourbon from the Jim Beam small-batch family. It is known for a high-rye style that keeps the whiskey lighter, spicy and easy to approach.",
    story: "Booker Noe created Basil Hayden as part of the small-batch collection, drawing on the name of early Kentucky distiller Meredith Basil Hayden Sr. The brand keeps a softer proof and a refined profile compared with heavier Beam bourbons.",
    tastingNotes: [
      { title: "High-Rye Spice", description: "Pepper, mint, cinnamon and gentle rye grain give the bourbon a clean spicy lift." },
      { title: "Light Sweetness", description: "Honey, vanilla, citrus peel and soft oak keep the body smooth and restrained." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, on ice, or in a lighter Old Fashioned with minimal sugar." },
      { subheading: "Food", description: "Pair with chicken tikka, roasted cashews, charcuterie, apple tart or mild cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "roasted cashews", "charcuterie", "apple tart", "mild cheddar"] }],
    whyChoose: "Basil Hayden is a softer bourbon for drinkers who want rye spice without heavy barrel weight.",
    faqs: [
      { question: "Is Basil Hayden high rye?", answer: "Yes. Basil Hayden is known for a high-rye bourbon style." },
      { question: "Who makes Basil Hayden?", answer: "Basil Hayden belongs to the Jim Beam small-batch bourbon family." },
    ],
    finalVerdict: "Basil Hayden is an approachable high-rye bourbon for neat pours and lighter whiskey cocktails.",
    metaTitle: "Basil Hayden Bourbon Guide | BevOry",
    metaDescription: "Explore Basil Hayden bourbon, high-rye spice, serving ideas, pairings and city prices on BevOry.",
  },
  "gentleman-jack": {
    description: "Gentleman Jack is a Tennessee whiskey from Jack Daniel's Distillery in Lynchburg. It is charcoal mellowed twice, once before ageing and once after, creating a softer take on Jack Daniel's whiskey.",
    story: "Jack Daniel's introduced Gentleman Jack in 1988 as a gentler whiskey within the Lynchburg family. It uses the same Tennessee whiskey foundation of corn, rye, malted barley and iron-free cave spring water.",
    tastingNotes: [
      { title: "Soft Fruit", description: "Apple, pear, mandarin and light banana sit over the whiskey's sweeter side." },
      { title: "Vanilla And Toast", description: "Caramel, vanilla, almond and soft toasted oak keep the finish rounded." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, over ice, or lengthened with ginger ale when you want a mellow highball." },
      { subheading: "Food", description: "Pair with barbecue chicken, paneer tikka, pecan pie, smoked almonds or apple crumble." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["barbecue chicken", "paneer tikka", "pecan pie", "smoked almonds", "apple crumble"] }],
    whyChoose: "Gentleman Jack is the smoother Jack Daniel's option when you want a softer Tennessee whiskey pour.",
    faqs: [
      { question: "How is Gentleman Jack different from Old No. 7?", answer: "Gentleman Jack is charcoal mellowed twice, before and after ageing." },
      { question: "Where is Gentleman Jack made?", answer: "Gentleman Jack is made at Jack Daniel Distillery in Lynchburg, Tennessee." },
    ],
    finalVerdict: "Gentleman Jack is built for drinkers who like Jack Daniel's sweetness with a softer finish.",
    metaTitle: "Gentleman Jack Whiskey Guide | BevOry",
    metaDescription: "Explore Gentleman Jack Tennessee whiskey, double mellowing, tasting notes and city prices on BevOry.",
  },
};
