import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_107 = [
  ["nz", "NZ", "New Zealand", "Wine", "pending-nz"],
  ["o-sole", "O Sole", "Switzerland", "Red Wine", "pending-o-sole"],
  ["o-darling", "O'Darling", "India", "Made in India Whisky", "pending-o-darling"],
  ["oakwood-creek", "Oakwood Creek", "India", "Made in India Whisky", "pending-oakwood-creek"],
  ["oasis-london", "Oasis London", "India", "Vodka", "pending-oasis-london"],
  ["observatory", "Observatory", "Scotland", "Blended Scotch", "pending-observatory"],
  ["ochre", "Ochre", "India", "Rum", "pending-ochre"],
  ["old-blenders", "Old Blenders", "India", "Made in India Whisky", "pending-old-blenders"],
  ["old-captain", "Old Captain", "Netherlands", "Rum", "pending-old-captain"],
  ["old-castle", "Old Castle", "India", "Made in India Whisky", "pending-old-castle"],
] as const;

export const BRAND_LOGOS_BATCH_107: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_107: Record<string, string[]> = {
  nz: [
    "https://www.nzwine.com/en/media/story/white-wine-stats/",
    "https://www.bevory.in/agra/brand/nz",
  ],
  "o-sole": [
    "https://files.lunchgate.ch/gastrouploads/3043/menu/31d259574108.pdf",
    "https://files.lunchgate.ch/gastrouploads/3043/menu/63ceaf58c3b2.pdf",
    "https://www.bevory.in/agra/brand/o-sole",
  ],
  "o-darling": [
    "https://www.lvrspirits.com/o-darling-rare-and-lovely.php",
    "https://www.monde-selection.com/product/odarling-rare-distinguished-whisky/",
    "https://www.livcheers.com/reviews/o-darling-rare-disting-whisky",
  ],
  "oakwood-creek": [
    "https://www.kristalspirits.com/oakwood-creek/",
    "https://kosmosbrands.com/",
    "https://tsbcl.nic.in/open_record.php?ID=249",
  ],
  "oasis-london": [
    "https://www.livcheers.com/delhi/brand/oasis-london",
    "https://www.indiafilings.com/search/oasis-london-high-luxury-english-vodka-tm-6377307",
    "https://excise.delhi.gov.in/sites/default/files/important-news/list_of_indian_and_foreign_brands_registered_in_nct_of_delhi_with_price_for_the_year_2020-21.pdf",
  ],
  observatory: [
    "https://www.mitra.nl/product/the-observatory-20-yrs-whisky-overige-70cl",
    "https://www.cavesdelahalle.com/en/whisky-list.php",
    "https://www.bevory.in/agra/brand/observatory",
  ],
  ochre: [
    "https://ochrespirits.com/pages/our-spirits",
    "https://www.bevory.in/agra/brand/ochre",
  ],
  "old-blenders": [
    "https://d2e1hu1ktur9ur.cloudfront.net/wp-content/uploads/2025/05/price-list-.pdf",
    "https://www.bevory.in/agra/brand/old-blenders",
  ],
  "old-captain": [
    "https://www.verthemis.com/sales/caribbeans-rum",
    "https://www.urban-drinks.de/en/old-captain/",
    "https://www.livcheers.com/pune/liquor/old-captain-white-rum-700ml",
  ],
  "old-castle": [
    "https://www.livcheers.com/bangalore/brand/old-castle",
    "https://www.bseindia.com/HIS_ANN_RPT/HISTANNR/2006/UGAR_SUGAR_WORKS_LTD-530363-MARCH-2006.PDF",
    "https://www.indiafilings.com/search/old-castle-tm-940681",
  ],
};

export const BRAND_CONTENT_BATCH_107: Record<string, BrandPublicContent> = {
  nz: {
    description: "NZ is a New Zealand wine entry on BevOry covering Chardonnay, Rose, Merlot and Sauvignon Blanc. The clearest country cue is New Zealand's cool-climate white-wine strength, led internationally by Sauvignon Blanc.",
    story: "New Zealand Winegrowers notes Sauvignon Blanc as the country's dominant exported white wine, while Chardonnay remains widely planted and stylistically important. BevOry's NZ entries sit across white, rose and red bottles, so this guide treats NZ as a country-led wine shelf rather than one estate.",
    tastingNotes: [
      { title: "Sauvignon Blanc", description: "Lime, passion fruit, green herbs and sharp acidity define the classic New Zealand white style." },
      { title: "Chardonnay And Merlot", description: "Chardonnay brings citrus and stone fruit, while Merlot moves toward plum, soft tannin and red-fruit warmth." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Sauvignon Blanc and rose chilled; serve Merlot slightly cool in a red-wine glass." },
      { subheading: "Food", description: "Pair Sauvignon Blanc with tandoori fish or goat cheese; pair Merlot with seekh kebab, mushrooms or tomato pasta." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "goat cheese", "seekh kebab", "mushroom galouti", "tomato pasta"] }],
    whyChoose: "NZ is a useful wine shelf when you want crisp whites, easy rose and soft red options from a New World country.",
    faqs: [
      { question: "What NZ wines are listed on BevOry?", answer: "BevOry lists NZ Chardonnay, Rose, Merlot and Sauvignon Blanc wines." },
      { question: "What is New Zealand best known for in wine?", answer: "New Zealand is especially known for bright, aromatic Sauvignon Blanc." },
    ],
    finalVerdict: "NZ works well for drinkers who want fresh white-wine energy with a few red and rose options.",
    metaTitle: "NZ Wine Guide | BevOry",
    metaDescription: "Explore NZ Sauvignon Blanc, Chardonnay, Merlot and Rose notes, pairings and city prices.",
  },
  "o-sole": {
    description: "O Sole is a red-wine entry on BevOry through O Sole Mio Merlot. The strongest external listings point to O Sole Mio Merlot del Ticino, a Merlot from Switzerland's Italian-speaking Ticino region.",
    story: "Ticino is closely associated with Merlot, a grape that performs well in the canton south of the Alps. O Sole Mio uses an Italian phrase, but the wine context points to Swiss Merlot rather than a broad Italian table wine.",
    tastingNotes: [
      { title: "Ticino Merlot", description: "Red plum, black cherry, soft herbs and gentle spice shape the glass." },
      { title: "Supple Finish", description: "Medium body and rounded tannins keep the wine smooth enough for relaxed dinners." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a red-wine glass and give it a few minutes after pouring." },
      { subheading: "Food", description: "Pair with mushroom risotto, lamb seekh, grilled chicken, dal makhani or aged gouda." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mushroom risotto", "lamb seekh", "grilled chicken", "dal makhani", "aged gouda"] }],
    whyChoose: "O Sole is a soft Merlot choice for drinkers who want red fruit without heavy tannin.",
    faqs: [
      { question: "What O Sole wine is on BevOry?", answer: "BevOry lists O Sole Mio Merlot in a 750ml bottle." },
      { question: "What food suits O Sole Merlot?", answer: "Mushrooms, grilled chicken, lamb seekh, dal makhani and firm cheeses work well." },
    ],
    finalVerdict: "O Sole is a smooth Merlot-style red for easy dinners and gently spiced food.",
    metaTitle: "O Sole Merlot Guide | BevOry",
    metaDescription: "Explore O Sole Mio Merlot notes, Ticino-style red wine pairings and city prices.",
  },
  "o-darling": {
    description: "O'Darling is an Indian whisky from LVR Spirits, listed on BevOry as O'Darling Rare & Distinguished Whisky. The producer describes it with a malty, sweet nose, toffee caramel and a hint of oak.",
    story: "LVR Spirits positions O'Darling in the smoother Indian whisky space, with a name built around easy recall and everyday gifting. Monde Selection lists O'Darling Rare & Distinguished Whisky as an Indian spirits entry with a 2025 Gold Quality Award.",
    tastingNotes: [
      { title: "Sweet Malt", description: "Toffee, caramel, soft malt and light oak lead the aroma." },
      { title: "Gentle Spice", description: "The palate stays smooth and rounded, with mild warmth through the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over ice, with water, or in a chilled soda highball." },
      { subheading: "Food", description: "Pair with tandoori chicken, mutton seekh, paneer tikka, masala peanuts or caramel pudding." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "mutton seekh", "paneer tikka", "masala peanuts", "caramel pudding"] }],
    whyChoose: "O'Darling is a friendly Indian whisky for sweet malt, easy soda serves and familiar party snacks.",
    faqs: [
      { question: "Who makes O'Darling whisky?", answer: "O'Darling Rare & Distinguished Whisky is associated with LVR Spirits." },
      { question: "What does O'Darling taste like?", answer: "Producer tasting copy highlights malty sweetness, toffee caramel and a hint of oak." },
    ],
    finalVerdict: "O'Darling is a smooth Indian whisky for highballs, ice serves and bold snack pairings.",
    metaTitle: "O'Darling Whisky Guide | BevOry",
    metaDescription: "Explore O'Darling Indian whisky notes, serving ideas, food pairings and city prices.",
  },
  "oakwood-creek": {
    description: "Oakwood Creek is an Indian whisky from Kristal Spirits India. The brand blends Scotch aged in oak barrels with Indian grain spirits for an oak-led whisky profile.",
    story: "Kristal Spirits presents Oakwood Creek around woody, vintage-style cues and the use of handpicked Scotch. The whisky is listed in Indian retail in 180ml, 375ml and 750ml formats.",
    tastingNotes: [
      { title: "Oak And Grain", description: "Vanilla, toasted oak, caramel and grain sweetness give the whisky its core shape." },
      { title: "Warm Spice", description: "The finish is smooth and warming, with pepper and soft wood spice." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with ice, soda or a small splash of water." },
      { subheading: "Food", description: "Pair with pepper chicken, galouti kebab, smoked paneer, roasted almonds or chocolate cake." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pepper chicken", "galouti kebab", "smoked paneer", "roasted almonds", "chocolate cake"] }],
    whyChoose: "Oakwood Creek is for drinkers who want Indian whisky with visible oak sweetness and Scotch-style depth.",
    faqs: [
      { question: "Who makes Oakwood Creek?", answer: "Oakwood Creek is marketed by Kristal Spirits India." },
      { question: "What is Oakwood Creek's style?", answer: "It blends oak-aged Scotch character with Indian grain spirits." },
    ],
    finalVerdict: "Oakwood Creek is a solid soda-and-ice whisky for oak, caramel and spicy Indian food.",
    metaTitle: "Oakwood Creek Whisky Guide | BevOry",
    metaDescription: "Explore Oakwood Creek Indian whisky notes, oak style, serving ideas and city prices.",
  },
  "oasis-london": {
    description: "Oasis London is an Indian vodka label tied to Oasis London High Triple Distilled Luxury English Vodka. BevOry lists plain, orange and green-apple variants across 180ml and 750ml formats.",
    story: "Public trademark material links Oasis London High Luxury English Vodka with Omsons Marketing Pvt. Ltd. Delhi excise records also list Oasis London High Triple Distilled Luxury English Vodka and Green Apple.",
    tastingNotes: [
      { title: "Plain Vodka", description: "Clean grain spirit, neutral aroma and a smooth finish suit simple mixers." },
      { title: "Flavoured Vodka", description: "Orange and green apple variants add bright fruit sweetness for chilled long drinks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve cold with soda, tonic, lemonade or fresh citrus." },
      { subheading: "Food", description: "Pair with fried momos, chilli paneer, chicken tikka, sushi or masala fries." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fried momos", "chilli paneer", "chicken tikka", "sushi", "masala fries"] }],
    whyChoose: "Oasis London is a practical Indian vodka range for plain highballs and fruit-flavoured party serves.",
    faqs: [
      { question: "What Oasis London variants are on BevOry?", answer: "BevOry lists plain vodka plus orange and green-apple flavoured variants." },
      { question: "How should Oasis London be served?", answer: "Serve it chilled with soda, tonic, lemonade or citrus." },
    ],
    finalVerdict: "Oasis London is an easy vodka pick for cold mixers, flavoured serves and spicy snacks.",
    metaTitle: "Oasis London Vodka Guide | BevOry",
    metaDescription: "Explore Oasis London vodka notes, plain and flavoured serves, pairings and city prices.",
  },
  observatory: {
    description: "Observatory is a 20-year whisky listing on BevOry under blended Scotch. European whisky retailers list The Observatory 20 Yrs as a 70cl whisky at 40% ABV.",
    story: "The name leans into an old-world Scotch presentation, with age statement as the main buying cue. BevOry's Observatory entry should be read as a mature whisky option rather than a broad multi-bottle range.",
    tastingNotes: [
      { title: "Mature Whisky", description: "Dried fruit, vanilla, polished oak and soft malt drive the aroma." },
      { title: "Long Finish", description: "The palate is rounded and mellow, with gentle spice and oak through the close." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a tulip glass, then add a few drops of water if needed." },
      { subheading: "Food", description: "Pair with roasted almonds, dark chocolate, lamb chops, blue cheese or walnut cake." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["roasted almonds", "dark chocolate", "lamb chops", "blue cheese", "walnut cake"] }],
    whyChoose: "Observatory is a mature whisky choice for slower sipping and oak-led flavour.",
    faqs: [
      { question: "What Observatory whisky is listed on BevOry?", answer: "BevOry lists Observatory 20 Yrs Whisky in a 700ml format." },
      { question: "How should Observatory 20 Yrs be served?", answer: "Serve it neat, with optional drops of water to open the aroma." },
    ],
    finalVerdict: "Observatory is best kept for neat pours, quiet sipping and rich food pairings.",
    metaTitle: "Observatory 20 Yrs Whisky Guide | BevOry",
    metaDescription: "Explore Observatory 20 Yrs whisky notes, neat serving tips, pairings and city prices.",
  },
  ochre: {
    description: "Ochre is an Indian spirits house with gin, vodka, rum and future agave and whisky expressions. BevOry currently lists Ochre Nutty Berry Rum in a 750ml bottle.",
    story: "Ochre's own spirits catalogue describes Nutty Berry Rum as a cane-spirit expression with strawberry, blueberry, raspberry and hazelnut notes. The brand presents itself with modern Indian design and flavour-led releases.",
    tastingNotes: [
      { title: "Nutty Berry Rum", description: "Strawberry, blueberry, raspberry and hazelnut sit over warm cane-spirit sweetness." },
      { title: "Controlled Sweetness", description: "The finish is fruity and rounded without becoming heavy." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over ice, with soda, or in a berry-lime rum highball." },
      { subheading: "Food", description: "Pair with pork chilli, chocolate tart, berry cheesecake, peri-peri wings or spiced nuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pork chilli", "chocolate tart", "berry cheesecake", "peri-peri wings", "spiced nuts"] }],
    whyChoose: "Ochre is a flavour-forward Indian rum choice when you want fruit, nutty depth and cocktail flexibility.",
    faqs: [
      { question: "What Ochre rum is on BevOry?", answer: "BevOry lists Ochre Nutty Berry Rum in a 750ml format." },
      { question: "What does Ochre Nutty Berry Rum taste like?", answer: "Ochre highlights strawberry, blueberry, raspberry and a hazelnut finish." },
    ],
    finalVerdict: "Ochre Nutty Berry Rum is a modern Indian rum for berry-led highballs and dessert pairings.",
    metaTitle: "Ochre Rum Guide | BevOry",
    metaDescription: "Explore Ochre Nutty Berry Rum notes, serving ideas, dessert pairings and city prices.",
  },
  "old-blenders": {
    description: "Old Blenders is an Indian whisky listing on BevOry through Old Blenders Ultra Premium Whisky. Public price-list material places it in the local Indian whisky shelf.",
    story: "The brand appears in Indian retail records across multiple bottle-size codes, with BevOry showing a 750ml listing. Its practical role is an everyday Indian whisky for ice, soda and familiar snack pairings.",
    tastingNotes: [
      { title: "Indian Whisky", description: "Caramel, grain, light malt and soft oak create a familiar whisky profile." },
      { title: "Mixer Finish", description: "The finish is warming and straightforward, suited to soda and water." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with ice and soda, or with a splash of water." },
      { subheading: "Food", description: "Pair with chicken pakora, paneer tikka, masala peanuts, pepper fry or seekh kebab." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken pakora", "paneer tikka", "masala peanuts", "pepper fry", "seekh kebab"] }],
    whyChoose: "Old Blenders is a simple Indian whisky for classic highballs and spicy bar food.",
    faqs: [
      { question: "What Old Blenders bottle is on BevOry?", answer: "BevOry lists Old Blenders Ultra Premium Whisky in a 750ml format." },
      { question: "How should Old Blenders be served?", answer: "Serve it over ice with soda or water." },
    ],
    finalVerdict: "Old Blenders is a no-fuss Indian whisky for chilled soda serves and snack-heavy evenings.",
    metaTitle: "Old Blenders Whisky Guide | BevOry",
    metaDescription: "Explore Old Blenders Indian whisky notes, serving ideas, snack pairings and city prices.",
  },
  "old-captain": {
    description: "Old Captain is a Caribbean rum range listed on BevOry through Brown Rum and White Rum. External brand material describes blends of molasses-based Caribbean rums, including Jamaica, Trinidad & Tobago and Barbados components.",
    story: "Verthemis presents Old Captain as a Caribbean rum family covering white, brown, spiced and five-year Dominican expressions. BevOry's Indian listings focus on 700ml Brown Rum and White Rum bottles.",
    tastingNotes: [
      { title: "White Rum", description: "Light fruit, sugarcane sweetness and a clean dry finish make it useful for Mojitos and Daiquiris." },
      { title: "Brown Rum", description: "Apricot, plum, caramel and warm spice give the darker expression more body." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use White Rum in lime cocktails; serve Brown Rum with cola, ginger ale or ice." },
      { subheading: "Food", description: "Pair with jerk chicken, Goan sausage, fried fish, chilli prawns or chocolate brownie." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["jerk chicken", "Goan sausage", "fried fish", "chilli prawns", "chocolate brownie"] }],
    whyChoose: "Old Captain gives cocktail-friendly white rum and richer brown rum under one recognisable name.",
    faqs: [
      { question: "Which Old Captain rums are on BevOry?", answer: "BevOry lists Old Captain Brown Rum and Old Captain White Rum." },
      { question: "What is Old Captain Rum made from?", answer: "External brand material describes molasses-based Caribbean rum blends." },
    ],
    finalVerdict: "Old Captain is a versatile rum pick for Mojitos, cola serves and spicy coastal food.",
    metaTitle: "Old Captain Rum Guide | BevOry",
    metaDescription: "Explore Old Captain White and Brown Rum notes, cocktail serves, pairings and city prices.",
  },
  "old-castle": {
    description: "Old Castle is an Indian whisky linked with The Ugar Sugar Works in public company material. BevOry lists Old Castle Premium Whisky in a 750ml format.",
    story: "A Ugar Sugar Works annual report names Old Castle Regular and Premium Brand Whisky among its potable alcohol brands. Trademark material also connects Old Castle whisky with The Ugar Sugar Works Limited in Maharashtra.",
    tastingNotes: [
      { title: "Premium Whisky", description: "Light malt, grain sweetness, caramel and gentle oak define the aroma." },
      { title: "Easy Finish", description: "The palate is mild and smooth, with soft spice and a clean close." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with ice, soda or water; keep the pour simple." },
      { subheading: "Food", description: "Pair with tandoori chicken, mutton kebab, masala peanuts, smoked paneer or pepper mushrooms." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "mutton kebab", "masala peanuts", "smoked paneer", "pepper mushrooms"] }],
    whyChoose: "Old Castle is a classic Indian whisky choice for relaxed soda serves and hearty snacks.",
    faqs: [
      { question: "Who is linked with Old Castle whisky?", answer: "Public company and trademark material links Old Castle whisky with The Ugar Sugar Works Limited." },
      { question: "What Old Castle bottle is on BevOry?", answer: "BevOry lists Old Castle Premium Whisky in a 750ml format." },
    ],
    finalVerdict: "Old Castle is an approachable Indian whisky for highballs, ice and spice-forward food.",
    metaTitle: "Old Castle Whisky Guide | BevOry",
    metaDescription: "Explore Old Castle Premium Whisky notes, Ugar Sugar Works context, pairings and city prices.",
  },
};
