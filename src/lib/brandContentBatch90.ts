import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_90 = [
  ["imo-kuro", "Imo Kuro", "Japan", "Shochu", "pending-imo-kuro"],
  ["impact-blue", "Impact Blue", "India", "Indian Whisky", "pending-impact-blue"],
  ["impact-red", "Impact Red", "India", "Rum", "pending-impact-red"],
  ["imperial", "Imperial", "India", "Indian Whisky", "pending-imperial"],
  ["indian-honey", "Indian Honey", "India", "Indian Spirits", "pending-indian-honey"],
  ["indiosa", "Indiosa", "India", "Wine", "pending-indiosa"],
  ["infinitus", "Infinitus", "Spain", "Wine", "pending-infinitus"],
  ["innate-reserve", "Innate Reserve", "India", "Indian Whisky", "pending-innate-reserve"],
  ["ipl-tango", "IPL Tango", "India", "Gin", "pending-ipl-tango"],
  ["iq", "IQ", "India", "Gin", "pending-iq"],
] as const;

export const BRAND_LOGOS_BATCH_90: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_90: Record<string, string[]> = {
  "imo-kuro": [
    "https://en.www.kirishima.co.jp/products/imo/kuro-kirishima/",
    "https://en.www.kirishima.co.jp/brand/kuro-kirishima/",
    "https://www.bevory.in/gurgaon/product/imo-kuro-kirishima-686072f",
  ],
  "impact-blue": [
    "https://www.livcheers.com/kota/liquor/impact-blue-classic-whisky-750ml",
    "https://www.bevory.in/gurgaon/product/impact-blue-classic-whisky-452d336",
  ],
  "impact-red": [
    "https://www.livcheers.com/jaipur/liquor/impact-red-xxx-rum-750ml",
    "https://www.bevory.in/gurgaon/product/impact-red-xxx-rum-8083d82",
  ],
  imperial: [
    "https://nsearchives.nseindia.com/corporate/gthakur_23072025212640_Press_Release.pdf",
    "https://www.pernod-ricard.com/en/media/pernod-ricard-india-sell-its-imperial-blue-business-division-tilaknagar-industries",
    "https://www.bevory.in/gurgaon/product/imperial-blue-52e13e2",
  ],
  "indian-honey": [
    "https://hermesdistil.com/indian-honey/",
    "https://www.quickcompany.in/trademarks/4130165-indian-honey-shot-label",
    "https://www.bevory.in/gurgaon/product/indian-honey-shot-4f800ee",
  ],
  indiosa: [
    "https://www.livcheers.com/goa/liquor/indi-osa-chenin-blanc-wine-750ml",
    "https://www.vivino.com/en/indiosa-chenin-blanc/w/7214226",
    "https://www.bevory.in/gurgaon/product/indiosa-indi-osa-chenin-blanc-wine-1efc936",
  ],
  infinitus: [
    "https://familiamartinezbujanda.com/tienda/cosecheros-y-criadores/infinitus/infinitus-gewurztraminer/",
    "https://www.bevory.in/gurgaon/product/infinitus-blanco-gewurztraminer-a927e8b",
  ],
  "innate-reserve": [
    "https://www.bevory.in/gurgaon/product/innate-reserve-innate-reverse-faf78c9",
    "https://www.bevory.in/gurgaon/brand/innate-reserve",
  ],
  "ipl-tango": [
    "https://www.livcheers.com/thane/liquor/ipl-tango-indian-premium-liquor-orange-flavoured-gin-1000ml",
    "https://www.livcheers.com/thane/brand/ipl-tango",
    "https://www.bevory.in/gurgaon/product/ipl-tango-indian-premium-liquor-orange-flavoured-gin-fa13f93",
  ],
  iq: [
    "https://mohanmeakin.com/gin/",
    "https://www.bevory.in/gurgaon/product/iq-london-dry-gin-488b7fe",
  ],
};

export const BRAND_CONTENT_BATCH_90: Record<string, BrandPublicContent> = {
  "imo-kuro": {
    description: "Imo Kuro on BevOry points to Kuro Kirishima, a Japanese honkaku sweet-potato shochu from Kirishima Shuzo in Miyazaki. The official Kirishima profile ties it to black koji brewing, Kyushu-grown sweet potatoes and Japanese rice koji.",
    story: "Kirishima Shuzo dates Kuro Kirishima's roots to founder Kichisuke Enatsu's 1916 black-koji shochu work. The modern Kuro Kirishima style became known for rounded sweetness, a crisp finish and broad food compatibility across Japanese and richer meat-led meals.",
    tastingNotes: [
      { title: "Sweet Potato Shochu", description: "Earthy sweet potato, steamed rice, mellow grain and gentle umami give the spirit its centre." },
      { title: "Black Koji Finish", description: "A rounded sweetness moves into a sharp, dry close that stays clean with food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve on the rocks, with chilled water, with warm water, or lengthened with soda." },
      { subheading: "Food", description: "Pair with yakitori, pork gyoza, tandoori mushrooms, miso eggplant or grilled chicken tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["yakitori", "pork gyoza", "tandoori mushrooms", "miso eggplant", "chicken tikka"] }],
    whyChoose: "Imo Kuro is a serious Japanese shochu page for drinkers who want sweet-potato depth without heavy sweetness.",
    faqs: [
      { question: "What is Imo Kuro Kirishima made from?", answer: "Kuro Kirishima is made with Kyushu-grown sweet potatoes and Japanese rice koji." },
      { question: "How should Imo Kuro be served?", answer: "It works on the rocks, with soda, with chilled water or with warm water." },
    ],
    finalVerdict: "Imo Kuro brings clean Miyazaki sweet-potato shochu character to food-led drinking.",
    metaTitle: "Imo Kuro Shochu Guide | BevOry",
    metaDescription: "Explore Imo Kuro Kirishima shochu notes, black koji style, serving ideas, pairings and city prices.",
  },
  "impact-blue": {
    description: "Impact Blue is an Indian whisky brand listed on BevOry through Impact Blue Classic Whisky. The catalogue places it in the blended Indian whisky shelf with 180 ml and 750 ml formats.",
    story: "Impact Blue is built for everyday Indian whisky occasions where smoothness, mixer flexibility and bottle-size choice matter. Its Classic Whisky route gives shoppers a direct landing page for local whisky searches without confusing it with Scotch-only labels.",
    tastingNotes: [
      { title: "Classic Whisky", description: "Caramel, vanilla, dried fruit and light spice create a soft whisky profile." },
      { title: "Mellow Finish", description: "Toffee sweetness and gentle oak spice make it suitable for soda, water or cola." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour with chilled water, soda, cola or over ice in a short glass." },
      { subheading: "Food", description: "Pair with tandoori chicken, masala peanuts, seekh kebab, chilli paneer or spicy chips." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "masala peanuts", "seekh kebab", "chilli paneer", "spicy chips"] }],
    whyChoose: "Impact Blue is a straightforward Indian whisky choice for mixed serves and familiar bar snacks.",
    faqs: [
      { question: "What is Impact Blue Classic Whisky?", answer: "It is an Indian blended whisky route listed on BevOry in 180 ml and 750 ml formats." },
      { question: "What mixer suits Impact Blue?", answer: "Soda, chilled water, cola and plenty of ice are easy matches." },
    ],
    finalVerdict: "Impact Blue works best as a simple Indian whisky pour for soda, cola and spicy snacks.",
    metaTitle: "Impact Blue Whisky Guide | BevOry",
    metaDescription: "Explore Impact Blue Classic Whisky notes, mixers, bottle formats, pairings and city prices.",
  },
  "impact-red": {
    description: "Impact Red is an Indian rum brand listed on BevOry through Impact Red XXX Rum. The product route sits in the dark rum shelf, with a 750 ml listing for cola, lime and party serves.",
    story: "Impact Red follows the familiar Indian XXX rum lane: dark colour, sweet spice, easy mixing and strong snack compatibility. It is built for drinkers who want a bolder rum serve without moving into imported sipping rum territory.",
    tastingNotes: [
      { title: "Dark Rum Style", description: "Caramel, vanilla, roasted nut and dark chocolate notes shape the aroma." },
      { title: "Spiced Sweetness", description: "Toffee, mild oak and soft spice carry the finish into cola-friendly territory." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Mix with cola, ginger ale, lime soda or pour over ice with a lime wedge." },
      { subheading: "Food", description: "Pair with pepper chicken, pork chilli, paneer tikka, barbecue wings or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pepper chicken", "pork chilli", "paneer tikka", "barbecue wings", "dark chocolate"] }],
    whyChoose: "Impact Red is a direct dark-rum option for cola highballs and spicy Indian starters.",
    faqs: [
      { question: "What style is Impact Red?", answer: "Impact Red is listed as an Indian dark rum under the XXX rum route on BevOry." },
      { question: "How should Impact Red be mixed?", answer: "Use cola, lime soda, ginger ale or ice with a squeeze of fresh lime." },
    ],
    finalVerdict: "Impact Red is a practical dark rum for bold mixers, easy cocktails and late-evening snacks.",
    metaTitle: "Impact Red Rum Guide | BevOry",
    metaDescription: "Explore Impact Red XXX Rum notes, mixers, food pairings, serving ideas and city prices.",
  },
  imperial: {
    description: "Imperial on BevOry is anchored by Imperial Blue, the Indian whisky brand launched by Seagram and later built by Pernod Ricard India. Tilaknagar Industries announced an agreement in July 2025 to acquire the Imperial Blue business from Pernod Ricard India.",
    story: "Imperial Blue has more than 25 years of brand heritage in India and was described by Tilaknagar Industries as the country's third-largest whisky brand by volume. BevOry product routes show 90 ml, 180 ml, 375 ml and 750 ml bottle formats for city-level comparison.",
    tastingNotes: [
      { title: "Indian Whisky", description: "Grain spirit, light malt, vanilla, caramel and gentle wood spice define the familiar profile." },
      { title: "Mixer Friendly", description: "A smooth, sweet-spiced finish keeps it easy with water, soda and cola." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour over ice, lengthen with soda or mix with cola for a simple whisky highball." },
      { subheading: "Food", description: "Pair with chicken tikka, mutton seekh, masala peanuts, dal makhani or grilled paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "mutton seekh", "masala peanuts", "dal makhani", "grilled paneer"] }],
    whyChoose: "Imperial is a useful BevOry page for shoppers comparing one of India's biggest whisky labels by bottle size and city.",
    faqs: [
      { question: "Is Imperial linked to Imperial Blue?", answer: "Yes, the BevOry Imperial page is anchored by Imperial Blue whisky listings." },
      { question: "Who acquired Imperial Blue from Pernod Ricard India?", answer: "Tilaknagar Industries announced an agreement to acquire the Imperial Blue business in 2025." },
    ],
    finalVerdict: "Imperial is a mass Indian whisky reference point for straightforward mixed drinks and familiar snacks.",
    metaTitle: "Imperial Blue Whisky Guide | BevOry",
    metaDescription: "Explore Imperial Blue whisky notes, Indian brand history, mixers, pairings and city prices.",
  },
  "indian-honey": {
    description: "Indian Honey is an Indian spirit from Hermes Distillery Private Limited in Karnataka. The official Hermes page describes it as a clear, premium honey-led spirit passed through anise seeds and secret ingredients from a copper cauldron.",
    story: "The Indian Honey trademark record names Hermes Distillery Private Limited at Yadrav, Belagavi, Karnataka, and shows use dating to 2017. Hermes positions the drink as a chilled after-dinner shot with clear colour, grain aroma and a smooth finish.",
    tastingNotes: [
      { title: "Honey And Anise", description: "Honeyed sweetness, anise, clean grain and soft herbal warmth shape the drink." },
      { title: "Clear Finish", description: "A smooth, satisfying close keeps the spirit suited to chilled shots." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled as a shot, over ice, or with soda and a lemon twist." },
      { subheading: "Food", description: "Pair with honey chilli potato, cheese corn balls, chicken tikka, jalebi rabri or salted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["honey chilli potato", "cheese corn balls", "chicken tikka", "jalebi rabri", "salted almonds"] }],
    whyChoose: "Indian Honey stands out for its honey-anise character and chilled-shot personality.",
    faqs: [
      { question: "Who makes Indian Honey?", answer: "Indian Honey is associated with Hermes Distillery Private Limited in Karnataka." },
      { question: "How is Indian Honey usually served?", answer: "Serve it chilled as an after-dinner shot or over ice with soda." },
    ],
    finalVerdict: "Indian Honey is a sweet, anise-touched Indian spirit for chilled shots and dessert-side pours.",
    metaTitle: "Indian Honey Spirits Guide | BevOry",
    metaDescription: "Explore Indian Honey notes, Hermes Distillery origin, serving ideas, pairings and city prices.",
  },
  indiosa: {
    description: "Indiosa is an Indian wine brand listed on BevOry through Indi Osa Chenin Blanc Wine. Livcheers and Vivino place the wine in Nashik, Maharashtra, with Chenin Blanc as the grape.",
    story: "Nashik's high-altitude vineyard belt has become India's most visible wine region, especially for fresh white varieties. Indiosa fits that shelf with a 750 ml Chenin Blanc aimed at crisp, tropical-fruited drinking.",
    tastingNotes: [
      { title: "Nashik Chenin", description: "Floral notes, honey, citrus blossom and tropical fruit lead the aroma." },
      { title: "Fresh White Wine", description: "Green apple, melon, guava and balanced acidity create a clean finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a white-wine glass, especially with spicy or lightly creamy dishes." },
      { subheading: "Food", description: "Pair with tandoori fish, paneer tikka, Thai green curry, prawn koliwada or goat cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "paneer tikka", "Thai green curry", "prawn koliwada", "goat cheese"] }],
    whyChoose: "Indiosa is a clean Indian Chenin Blanc choice for spicy food and chilled white-wine service.",
    faqs: [
      { question: "Where is Indiosa Chenin Blanc from?", answer: "It is listed as an Indian Chenin Blanc from Nashik, Maharashtra." },
      { question: "What food pairs with Indiosa Chenin Blanc?", answer: "Tandoori fish, paneer tikka, Thai green curry and prawn starters work well." },
    ],
    finalVerdict: "Indiosa is a crisp Nashik white for tropical fruit, bright acidity and Indian food pairings.",
    metaTitle: "Indiosa Chenin Blanc Guide | BevOry",
    metaDescription: "Explore Indiosa Chenin Blanc notes, Nashik origin, serving tips, pairings and city prices.",
  },
  infinitus: {
    description: "Infinitus is a Spanish wine label from Familia Martinez Bujanda's Cosecheros y Criadores range. The BevOry route focuses on Infinitus Blanco Gewurztraminer, a dry aromatic white from Castilla-La Mancha.",
    story: "The official product sheet places the Gewurztraminer vineyards above 900 metres in Castilla-La Mancha and identifies the wine under Vino de la Tierra de Castilla. The style is young, fresh and built around floral aromatics rather than oak weight.",
    tastingNotes: [
      { title: "Gewurztraminer Aromatics", description: "Rose petal, jasmine, ripe fruit and gentle spice give the wine its perfume." },
      { title: "Dry White Finish", description: "Fresh balance and light sweetness help clear the palate after spicy food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a white-wine glass at 8-10 C." },
      { subheading: "Food", description: "Pair with chilli chicken, Thai curry, blue cheese, paneer tikka or spicy pork ribs." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli chicken", "Thai curry", "blue cheese", "paneer tikka", "spicy pork ribs"] }],
    whyChoose: "Infinitus is a strong pick when you want an aromatic Spanish white for spice-heavy food.",
    faqs: [
      { question: "What grape is Infinitus Blanco made from?", answer: "The BevOry listing is for Infinitus Blanco Gewurztraminer." },
      { question: "Where is Infinitus Gewurztraminer from?", answer: "It comes from Castilla-La Mancha under Vino de la Tierra de Castilla." },
    ],
    finalVerdict: "Infinitus is a fragrant Spanish Gewurztraminer for spicy meals and chilled white-wine pours.",
    metaTitle: "Infinitus Gewurztraminer Guide | BevOry",
    metaDescription: "Explore Infinitus Gewurztraminer notes, Castilla origin, serving ideas and city prices.",
  },
  "innate-reserve": {
    description: "Innate Reserve is an Indian whisky brand listed on BevOry through the Innate Reverse product route. The catalogue places it in the made-in-India whisky shelf with 180 ml, 375 ml and 750 ml formats.",
    story: "Innate Reserve is built around a reserve-style whisky identity for value-led Indian whisky searches. The product route is useful for shoppers comparing everyday bottle sizes before choosing a local listing.",
    tastingNotes: [
      { title: "Reserve Whisky", description: "Caramel, vanilla, toasted grain and mild spice create a rounded whisky profile." },
      { title: "Easy Finish", description: "A soft, sweet-spiced close makes it suitable for water, soda or cola." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, chilled water, cola or over ice in a rocks glass." },
      { subheading: "Food", description: "Pair with tandoori chicken, masala papad, dal makhani, seekh kebab or salted cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "masala papad", "dal makhani", "seekh kebab", "salted cashews"] }],
    whyChoose: "Innate Reserve is a practical Indian whisky page for familiar mixed serves and multiple bottle sizes.",
    faqs: [
      { question: "What is Innate Reserve on BevOry?", answer: "It is an Indian whisky brand page linked to the Innate Reverse product listing." },
      { question: "Which sizes are listed for Innate Reserve?", answer: "BevOry routes show 180 ml, 375 ml and 750 ml formats." },
    ],
    finalVerdict: "Innate Reserve is an everyday Indian whisky option for soda, cola and spicy food.",
    metaTitle: "Innate Reserve Whisky Guide | BevOry",
    metaDescription: "Explore Innate Reserve whisky notes, bottle formats, mixers, pairings and city prices.",
  },
  "ipl-tango": {
    description: "IPL Tango is an Indian gin brand listed on BevOry through Indian Premium Liquor and Orange Flavoured Gin routes. Livcheers identifies the orange expression as a flavoured gin with juniper, orange and spices.",
    story: "IPL Tango sits in the accessible Indian gin shelf, covering both a London Dry-style route and a citrus-led orange gin route. The brand works for shoppers who want a simple G&T bottle or a brighter orange highball.",
    tastingNotes: [
      { title: "Orange Gin", description: "Orange peel, sweet citrus, juniper and light spice give the flavoured expression its lift." },
      { title: "Dry Gin Route", description: "The standard route leans cleaner, with juniper and citrus for tonic-based serves." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with tonic, soda, orange slice, lime or grapefruit juice over plenty of ice." },
      { subheading: "Food", description: "Pair with tandoori prawns, chicken tikka, chilli paneer, peri-peri fries or citrus salad." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "chicken tikka", "chilli paneer", "peri-peri fries", "citrus salad"] }],
    whyChoose: "IPL Tango is useful when you want Indian gin with both classic tonic and orange-flavoured options.",
    faqs: [
      { question: "What IPL Tango products are listed on BevOry?", answer: "BevOry shows a standard Indian Premium Liquor gin route and an orange flavoured gin route." },
      { question: "What botanicals are noted for IPL Tango Orange Gin?", answer: "Livcheers lists juniper, orange and spices for the orange flavoured gin." },
    ],
    finalVerdict: "IPL Tango is an easy Indian gin page for orange highballs, G&Ts and spicy party snacks.",
    metaTitle: "IPL Tango Gin Guide | BevOry",
    metaDescription: "Explore IPL Tango gin notes, orange flavour, tonic serves, pairings and city prices.",
  },
  iq: {
    description: "IQ is an Indian gin page on BevOry tied to IQ London Dry Gin. Mohan Meakin's official gin list includes I.Q. London Dry Gin alongside IQ Cucumber London Dry Gin and IQ Pink Gin.",
    story: "Mohan Meakin is one of India's old beverage houses, with roots in Solan and works listed at Mohan Nagar, Ghaziabad. The IQ range gives the company a modern gin shelf beside its older Big Ben London Gin name.",
    tastingNotes: [
      { title: "London Dry Profile", description: "Juniper, citrus peel, coriander and dry spice shape a classic gin character." },
      { title: "Clean Highball", description: "A crisp, lightly herbal finish works well with tonic, soda and lime." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with tonic water, soda, lime, cucumber or a grapefruit wedge over ice." },
      { subheading: "Food", description: "Pair with tandoori prawns, hara bhara kebab, chicken momos, cucumber salad or goat cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "hara bhara kebab", "chicken momos", "cucumber salad", "goat cheese"] }],
    whyChoose: "IQ is a crisp Indian gin choice from Mohan Meakin for classic tonic serves.",
    faqs: [
      { question: "Who lists IQ London Dry Gin?", answer: "Mohan Meakin's official gin page lists I.Q. London Dry Gin." },
      { question: "How should IQ gin be served?", answer: "Serve it with tonic, soda, lime, cucumber or grapefruit over ice." },
    ],
    finalVerdict: "IQ is a clean Indian gin page for G&Ts, citrus highballs and lighter snacks.",
    metaTitle: "IQ London Dry Gin Guide | BevOry",
    metaDescription: "Explore IQ London Dry Gin notes, Mohan Meakin context, tonic serves and city prices.",
  },
};
