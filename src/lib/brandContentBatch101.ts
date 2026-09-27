import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_101 = [
  ["man", "Man", "India", "Beverages", "pending-man"],
  ["mannara", "Mannara", "Italy", "Wine", "pending-mannara"],
  ["mar-rose", "Mar Rose", "Spain", "Rose Wine", "pending-mar-rose"],
  ["marchesi", "Marchesi", "Italy", "Wine", "pending-marchesi"],
  ["marianne", "Marianne", "South Africa", "Wine", "pending-marianne"],
  ["marquise", "Marquise", "India", "Sparkling Wine", "pending-marquise"],
  ["masai", "Masai", "India", "Beer", "pending-masai"],
  ["master-doctor", "Master Doctor", "India", "Brandy", "pending-master-doctor"],
  ["masters-imperial", "Masters Imperial", "India", "Whisky", "pending-masters-imperial"],
  ["mc-glenn", "Mc Glenn", "India", "Blended Scotch", "pending-mc-glenn"],
] as const;

export const BRAND_LOGOS_BATCH_101: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_101: Record<string, string[]> = {
  man: [
    "https://manwines.com/",
    "https://manwines.com/our-wines/",
    "https://manwines.com/wp-content/uploads/2022/10/man_fact_sauvignonblanc_22.pdf",
    "https://www.bevory.in/agra/brand/man",
  ],
  mannara: [
    "https://www.vivino.com/en/wineries/mannara",
    "https://www.vivino.com/IT/en/mannara-pinot-grigio-rose/w/9821047",
    "https://marche.com.br/produtos/vinho-italiano-mannara-pinot-grigio-rose-750ml",
    "https://www.bevory.in/agra/brand/mannara",
  ],
  "mar-rose": [
    "https://ruiztorres.com/productos/vinos-blancos-y-otros/mar-rose-vino-semidulce/",
    "https://bodegasbordoy.es/en/mares-rosado-joven/",
    "https://www.bevory.in/agra/brand/mar-rose",
  ],
  marchesi: [
    "https://marchesibarolo.com/it/storia/",
    "https://www.produttoridelgavi.com/en/history",
    "https://www.consorziogavi.com/gavi-docg-2/",
    "https://www.bevory.in/agra/brand/marchesi",
  ],
  marianne: [
    "https://marianne-wines.co.za/our-winery/wines/sauvignon-blanc",
    "https://shop.mariannewines.com/products-page/rose/",
    "https://www.vinetowine.co.za/listings/marianne",
    "https://www.bevory.in/agra/brand/marianne",
  ],
  marquise: [
    "https://www.chateauindage.in/marquise-de-pompadour.html",
    "https://www.iprconsultant.com/TRADEMARK/1370/CLASS_33.pdf",
    "https://stockdiscovery.s3.amazonaws.com/insight/india/12151/Annual%20Report/AR-25.pdf",
    "https://www.bevory.in/agra/brand/marquise",
  ],
  masai: [
    "https://cdnc.heyzine.com/files/uploaded/4e2a0aade0c3603b9c75d776928e7769c3cfe4df-2.pdf",
    "https://www.bevory.in/agra/brand/masai",
  ],
  "master-doctor": [
    "https://mycorporateinfo.com/trademark/masters-doctor-brandy/1527634",
    "https://www.indiafilings.com/search/masters-doctor-brandy-tm-492687",
    "https://www.bevory.in/agra/brand/master-doctor",
  ],
  "masters-imperial": [
    "https://csdindia.gov.in/productdetails.aspx?Id=79316&catid=5",
    "https://tsbcl.nic.in/open_record.php?ID=249",
    "https://awards.kyoorius.com/2014/advertising/third-drink-philosophy/index.html",
    "https://www.bevory.in/agra/brand/masters-imperial",
  ],
  "mc-glenn": [
    "https://www.livcheers.com/hyderabad/liquor/mc-glenn-blended-scotch-whisky-750ml",
    "https://www.quickcompany.in/company/imperial-distillers-and-vintners-private-limited",
    "https://tonique.in/price-list/",
    "https://www.bevory.in/agra/brand/mc-glenn",
  ],
};

export const BRAND_CONTENT_BATCH_101: Record<string, BrandPublicContent> = {
  man: {
    description: "Man is a mixed beverage shelf on BevOry, led by names such as Good Day Mango Soju, Cecilia Beretta rose spumante and Disco Panda Mango Tango. It sits across sake-style fruit drinks, sparkling wine and beer rather than one single house style.",
    story: "The strongest producer story around the Man name comes from MAN Family Wines in South Africa, founded by Jose Conde with Tyrrel and Philip Myburgh in 2001. The shorter Man shelf is mixed, so the clearest guide is the bottle name in front of you.",
    tastingNotes: [
      { title: "Mixed Shelf", description: "Expect mango-led sweetness in Good Day soju, fizzy fruit in Mango Tango and bright red-fruit freshness in rose spumante." },
      { title: "Wine Reference", description: "MAN Family Wines leans on Cape Coast grapes such as Sauvignon Blanc, Chenin Blanc, Chardonnay, Pinotage and Syrah." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve soju and beer well chilled; pour sparkling rose in a flute or tulip glass." },
      { subheading: "Food", description: "Pair fruit soju with Korean fried chicken, rose spumante with tandoori prawns, and mango beer with spicy fries." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["Korean fried chicken", "tandoori prawns", "spicy fries", "paneer chilli", "prawn tempura"] }],
    whyChoose: "Man is useful when you want a lighter, fruit-friendly pour rather than a heavy spirit.",
    faqs: [
      { question: "What drinks appear under Man?", answer: "The shelf includes Good Day Mango Soju, Cecilia Beretta rose spumante and Disco Panda Mango Tango." },
      { question: "Is Man the same as MAN Family Wines?", answer: "MAN Family Wines has its own South African wine identity; this Man shelf contains a mixed set of bottle names." },
    ],
    finalVerdict: "Man is a casual discovery shelf for chilled, easy-drinking bottles across fruit soju, sparkling wine and beer.",
    metaTitle: "Man Beverage Guide | BevOry",
    metaDescription: "Explore Man bottle styles, soju, sparkling wine and beer pairings, serving ideas and city prices on BevOry.",
  },
  mannara: {
    description: "Mannara is an Italian wine label seen across Pinot Grigio, Pinot Grigio Rose and Merlot. The wines sit in an approachable Italian style, with white, rose and red options for everyday food pairing.",
    story: "Mannara appears in international wine catalogues as an Italian winery name with bottlings from regions such as Terre Siciliane and Veneto-linked Pinot Grigio styles. Its strength is simple varietal labelling: the grape name tells the drinker what to expect.",
    tastingNotes: [
      { title: "Pinot Grigio", description: "Pear, citrus, green apple and a dry, clean finish make the white crisp and light." },
      { title: "Rose And Merlot", description: "The rose brings strawberry and red apple freshness, while Merlot moves toward plum, cherry and soft tannin." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Pinot Grigio and rose chilled; pour Merlot slightly cool in a red-wine glass." },
      { subheading: "Food", description: "Pair with grilled prawns, Caesar salad, veg pizza, chicken tikka or mushroom pasta." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["grilled prawns", "Caesar salad", "veg pizza", "chicken tikka", "mushroom pasta"] }],
    whyChoose: "Mannara is a straightforward Italian pick when you want clear grape character without heavy oak.",
    faqs: [
      { question: "What Mannara wines are on BevOry?", answer: "The key bottles are Mannara Pinot Grigio, Pinot Grigio Rose and Merlot." },
      { question: "Is Mannara Pinot Grigio Rose dry?", answer: "It is generally presented as a light Italian rose style with fresh fruit and crisp acidity." },
    ],
    finalVerdict: "Mannara is a relaxed Italian wine range for chilled starters, pizzas and easy dinners.",
    metaTitle: "Mannara Italian Wine Guide | BevOry",
    metaDescription: "Explore Mannara Pinot Grigio, rose and Merlot notes, food pairings, serving styles and city prices.",
  },
  "mar-rose": {
    description: "Mar Rose is a Spanish rose wine label associated with semi-sweet rosado styles. The closest verified producer reference is Mar Rose Vino Semidulce from Bodegas Ruiz Torres in Extremadura.",
    story: "Bodegas Ruiz Torres describes Mar Rose as a 100% Tempranillo rosado from Sierra de Guadalupe in Caceres, Extremadura, grown around 800 metres on slate soils. The wine uses cool stainless-steel handling to keep red-fruit aromas bright.",
    tastingNotes: [
      { title: "Tempranillo Rose", description: "Strawberry, red berries and a light candy note sit over fresh acidity." },
      { title: "Soft Sweetness", description: "A smooth, semi-sweet palate makes the finish gentle rather than sharp." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a white-wine glass." },
      { subheading: "Food", description: "Pair with chilli chicken, pizza, paneer tikka, pasta in tomato sauce or fruit chaat." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli chicken", "pizza", "paneer tikka", "tomato pasta", "fruit chaat"] }],
    whyChoose: "Mar Rose works for drinkers who like rose wine with red-fruit aroma and a softer semi-sweet edge.",
    faqs: [
      { question: "What grape is Mar Rose made from?", answer: "The verified Mar Rose Vino Semidulce reference uses Tempranillo." },
      { question: "How should Mar Rose be served?", answer: "Serve it chilled with snacks, pizza, white meats or mildly spicy Indian starters." },
    ],
    finalVerdict: "Mar Rose is a chilled Spanish rosado for easy snacks and fruit-forward sipping.",
    metaTitle: "Mar Rose Rosado Guide | BevOry",
    metaDescription: "Explore Mar Rose rosado notes, Tempranillo style, serving ideas, pairings and city prices on BevOry.",
  },
  marchesi: {
    description: "Marchesi is an Italian wine shelf covering bottles such as Marchesi di Barolo Dolcetto d'Alba, Marchesi di Barolo Gavi and Marchesi Mazzei Badiola Toscana. The range moves from Piedmont reds and Gavi whites to Tuscan red blends.",
    story: "Marchesi di Barolo traces its heritage to the historic cellars in Barolo, where modern dry Barolo took shape in the 19th century. The Gavi connection points to Piedmont's Cortese grape, while Marchesi Mazzei brings Tuscany into the same BevOry shelf through Badiola IGT Toscana.",
    tastingNotes: [
      { title: "Piedmont Styles", description: "Dolcetto d'Alba gives cherry, violet and almond-edged tannin; Gavi brings lemon, green apple and mineral freshness." },
      { title: "Tuscan Red", description: "Badiola leans toward red cherry, plum, herbs and soft oak spice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Gavi chilled; pour Dolcetto and Tuscan reds slightly cool in medium red-wine glasses." },
      { subheading: "Food", description: "Pair Gavi with tandoori fish, Dolcetto with kebabs, and Tuscan red with lamb chops or mushroom risotto." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "seekh kebabs", "lamb chops", "mushroom risotto", "aged pecorino"] }],
    whyChoose: "Marchesi gives one doorway into classic Italian regions: Piedmont whites, Alba reds and Tuscan dinner wines.",
    faqs: [
      { question: "Which Marchesi wines are on BevOry?", answer: "Key bottles include Marchesi di Barolo Dolcetto d'Alba, Marchesi di Barolo Gavi and Marchesi Mazzei Badiola Toscana." },
      { question: "What is Gavi made from?", answer: "Gavi is made from Cortese, the white grape associated with the Gavi DOCG area in Piedmont." },
    ],
    finalVerdict: "Marchesi is a strong Italian choice when the meal needs bright Gavi, cherry-led Dolcetto or a Tuscan red.",
    metaTitle: "Marchesi Italian Wine Guide | BevOry",
    metaDescription: "Explore Marchesi Italian wines, Gavi, Dolcetto and Tuscan red notes, pairings and city prices.",
  },
  marianne: {
    description: "Marianne is a South African wine estate from the Simonsberg-Paarl side of the Cape Winelands. BevOry carries Marianne Rose and Marianne Sauvignon Blanc, both suited to chilled, food-led drinking.",
    story: "Marianne Wine Estate works with Cape fruit and a French-leaning cellar philosophy. Its Sauvignon Blanc is made in a Blanc Fume style with Sauvignon Blanc and Semillon, using stainless steel, French oak and acacia for texture.",
    tastingNotes: [
      { title: "Sauvignon Blanc", description: "Elderflower, yellow peach, grapefruit, lime and vanilla sit over a textured, dry palate." },
      { title: "Rose", description: "Cinsault, Grenache, Shiraz and Mourvedre bring rose petal, cranberry, raspberry, orange and white peach." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve both wines chilled; let the Sauvignon Blanc warm slightly in the glass if it feels too tight." },
      { subheading: "Food", description: "Pair Sauvignon Blanc with seafood and chevin; match rose with tandoori prawns, mezze or chicken malai tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "goat cheese toast", "chicken malai tikka", "mezze platter", "grilled fish"] }],
    whyChoose: "Marianne is a Cape estate pick for drinkers who like textured whites and elegant dry rose.",
    faqs: [
      { question: "Where is Marianne wine from?", answer: "Marianne Wine Estate is in South Africa's Cape Winelands, near Stellenbosch and Simonsberg-Paarl." },
      { question: "What is Marianne Sauvignon Blanc's style?", answer: "It is a warm-climate Blanc Fume style with Sauvignon Blanc, Semillon and oak-acacia texture." },
    ],
    finalVerdict: "Marianne is a polished South African wine choice for seafood, starters and warm-weather meals.",
    metaTitle: "Marianne Wine Estate Guide | BevOry",
    metaDescription: "Explore Marianne Sauvignon Blanc and Rose notes, Cape wine style, pairings and city prices on BevOry.",
  },
  marquise: {
    description: "Marquise is represented by Marquise De Pompadour, an Indian sparkling brut wine from Chateau Indage. The label is tied to Narayangaon in Maharashtra and the older Indage sparkling-wine tradition.",
    story: "Trade-mark material for Marquise De Pompadour describes a methode champenoise sparkling white wine bottled by Indage India Limited at Narayangaon, Maharashtra. Chateau Indage positions Marquise De Pompadour as a sparkling brut.",
    tastingNotes: [
      { title: "Sparkling Brut", description: "Green apple, citrus, white flowers and light biscuit notes make the wine crisp and festive." },
      { title: "Fine Bubbles", description: "A dry finish, lively mousse and bright acidity keep it refreshing with snacks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a flute or tulip glass." },
      { subheading: "Food", description: "Pair with tandoori fish, fried prawns, cheese straws, veg cutlets or salted cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "fried prawns", "cheese straws", "veg cutlets", "salted cashews"] }],
    whyChoose: "Marquise De Pompadour is an Indian sparkling brut for celebrations, starters and crisp aperitif pours.",
    faqs: [
      { question: "What is Marquise De Pompadour?", answer: "It is an Indian sparkling brut wine associated with Chateau Indage." },
      { question: "Where is Marquise De Pompadour linked to?", answer: "Historical label material links it with Indage India Limited at Narayangaon, Maharashtra." },
    ],
    finalVerdict: "Marquise is a classic Indian sparkling choice for chilled festive pours and savoury snacks.",
    metaTitle: "Marquise Sparkling Wine Guide | BevOry",
    metaDescription: "Explore Marquise De Pompadour sparkling brut notes, serving ideas, pairings and city prices.",
  },
  masai: {
    description: "Masai is an Indian strong beer label led by Masai Super Strong Beer. It is positioned around the familiar Indian strong-beer promise of strength, smoothness and a cold, easy pour.",
    story: "Masai Super Strong appears in Indian beverage material as a beer built to bridge strength and smoothness. The BevOry bottle is a 650ml format, placing it in the large-bottle beer shelf popular across Indian retail.",
    tastingNotes: [
      { title: "Strong Lager", description: "Malt sweetness, grain, mild hop bitterness and a firm beer body shape the profile." },
      { title: "Cold Finish", description: "The finish is crisp enough for spicy snacks, with a fuller weight than light lager." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve very cold in a clean beer mug or straight from a chilled bottle." },
      { subheading: "Food", description: "Pair with chicken tikka, masala peanuts, chilli potato, seekh kebab or fish fry." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "masala peanuts", "chilli potato", "seekh kebab", "fish fry"] }],
    whyChoose: "Masai is for drinkers who want a stronger beer style with spicy Indian bar snacks.",
    faqs: [
      { question: "What type of beer is Masai?", answer: "Masai Super Strong Beer sits in the Indian strong lager style." },
      { question: "What food suits Masai beer?", answer: "Spicy fried snacks, kebabs, fish fry and masala peanuts work well with its cold, malty profile." },
    ],
    finalVerdict: "Masai is a straightforward strong beer for chilled pours and spicy snack plates.",
    metaTitle: "Masai Super Strong Beer Guide | BevOry",
    metaDescription: "Explore Masai Super Strong Beer notes, serving ideas, spicy pairings and city prices on BevOry.",
  },
  "master-doctor": {
    description: "Master Doctor is an Indian brandy label led by Master Doctor Brandy. The name is linked with Tilaknagar Industries Limited under Class 33 potable liquors.",
    story: "Master's Doctor Brandy dates back to an older Indian liquor era rather than the recent craft wave. The brand sits in the practical Indian brandy shelf, where fruit, oak sweetness and warm spice matter most.",
    tastingNotes: [
      { title: "Indian Brandy", description: "Raisin, caramel, dried fruit and gentle spice shape the warm aroma." },
      { title: "Smooth Serve", description: "Soft sweetness and a rounded finish make it suitable for water, soda or a warm winter-style pour." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a small snifter, with warm water, soda, or over one large ice cube." },
      { subheading: "Food", description: "Pair with mutton pepper fry, chicken roast, plum cake, dark chocolate or salted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton pepper fry", "chicken roast", "plum cake", "dark chocolate", "salted almonds"] }],
    whyChoose: "Master Doctor is a familiar Indian brandy choice for warm, fruit-led sipping and simple mixed serves.",
    faqs: [
      { question: "Who is linked with Master Doctor Brandy?", answer: "Master's Doctor Brandy is linked with Tilaknagar Industries Limited." },
      { question: "How should Master Doctor Brandy be served?", answer: "Serve it neat, with warm water, soda, or over ice depending on the season." },
    ],
    finalVerdict: "Master Doctor Brandy is a warm Indian brandy for simple serves and rich snacks.",
    metaTitle: "Master Doctor Brandy Guide | BevOry",
    metaDescription: "Explore Master Doctor Brandy notes, Tilaknagar context, serving ideas, pairings and city prices.",
  },
  "masters-imperial": {
    description: "Masters Imperial is an Indian whisky label led by Master's Imperial Premium Whisky. It appears in common 180ml and 750ml formats, making it a practical whisky for everyday city retail.",
    story: "Masters Imperial has appeared in Indian alcohol marketing as a budget whisky name aimed at standing out in a crowded shelf. Its identity is practical: whisky for everyday highballs, soda serves and savoury snacks.",
    tastingNotes: [
      { title: "Premium Whisky", description: "Caramel, toasted grain, vanilla and light oak give the whisky a rounded opening." },
      { title: "Mixer-Friendly Finish", description: "Warm spice and soft sweetness keep the finish easy with soda, water or cola." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, water, cola, ginger ale or over ice." },
      { subheading: "Food", description: "Pair with tandoori chicken, bhuna mutton, masala peanuts, paneer tikka or kebab rolls." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "bhuna mutton", "masala peanuts", "paneer tikka", "kebab rolls"] }],
    whyChoose: "Masters Imperial is a practical Indian whisky for highballs, spicy snacks and straightforward sipping.",
    faqs: [
      { question: "What is Masters Imperial?", answer: "Masters Imperial is an Indian whisky label led by Master's Imperial Premium Whisky." },
      { question: "What sizes are common for Masters Imperial?", answer: "The common BevOry formats are 180ml and 750ml." },
    ],
    finalVerdict: "Masters Imperial is an everyday whisky for simple mixers and bold Indian food.",
    metaTitle: "Masters Imperial Whisky Guide | BevOry",
    metaDescription: "Explore Masters Imperial Whisky notes, serving ideas, food pairings and city prices on BevOry.",
  },
  "mc-glenn": {
    description: "Mc Glenn is a blended Scotch whisky label sold in India as Mc Glenn Blended Scotch Whisky. The name is connected with Imperial Distillers and Vintners Private Limited in Class 33 Scotch whisky.",
    story: "Mc Glenn sits in the India-facing blended Scotch shelf, where approachable malt, honey and soft spice are more important than single-distillery identity. The key BevOry bottle is a 750ml format.",
    tastingNotes: [
      { title: "Blended Scotch", description: "Malt, honey, citrus and vanilla lead into caramel and gentle spice." },
      { title: "Clean Finish", description: "A soft, creamy body and crisp finish make it easy for highballs." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, with ice, soda, ginger ale, or in a whisky highball." },
      { subheading: "Food", description: "Pair with seekh kebab, smoked cheese, pepper chicken, salted almonds or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["seekh kebab", "smoked cheese", "pepper chicken", "salted almonds", "dark chocolate"] }],
    whyChoose: "Mc Glenn is an approachable blended Scotch for drinkers who want honeyed malt and easy mixers.",
    faqs: [
      { question: "What type of whisky is Mc Glenn?", answer: "Mc Glenn is sold as a blended Scotch whisky." },
      { question: "How should Mc Glenn be served?", answer: "It works neat, on ice, with soda, ginger ale, or as a highball." },
    ],
    finalVerdict: "Mc Glenn is a soft blended Scotch for casual pours, highballs and savoury snacks.",
    metaTitle: "Mc Glenn Blended Scotch Guide | BevOry",
    metaDescription: "Explore Mc Glenn Blended Scotch notes, serving ideas, pairings and city prices on BevOry.",
  },
};
