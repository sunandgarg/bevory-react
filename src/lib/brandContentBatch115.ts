import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_115 = [
  ["absolut", "Absolut", "Sweden", "Vodka", "brand-expansion-absolut"],
  ["amrut", "Amrut", "India", "Whisky", "brand-expansion-amrut"],
  ["bacardi", "Bacardi", "Cuba", "Rum", "brand-expansion-bacardi"],
  ["ballantines", "Ballantine's", "Scotland", "Blended Scotch", "brand-expansion-ballantines"],
  ["balvenie", "The Balvenie", "Scotland", "Single Malt", "brand-expansion-balvenie"],
  ["big-banyan", "Big Banyan", "India", "Wine", "brand-expansion-big-banyan"],
  ["bira", "Bira 91", "India", "Beer", "brand-expansion-bira"],
  ["black-dog", "Black Dog", "Scotland", "Blended Scotch", "brand-expansion-black-dog"],
  ["bombay-sapphire", "Bombay Sapphire", "United Kingdom", "Gin", "brand-expansion-bombay-sapphire"],
  ["bottega", "Bottega", "Italy", "Wine", "brand-expansion-bottega"],
] as const;

export const BRAND_LOGOS_BATCH_115: Record<string, string> = {
  absolut: "https://static.livcheers.com/static/content/images/brand/absolut.webp",
  amrut: "https://static.livcheers.com/static/content/images/brand/amrut.webp",
  bacardi: "https://static.livcheers.com/static/content/images/brand/bacardi.webp",
  ballantines: "https://static.livcheers.com/static/content/images/brand/ballantines.webp",
  balvenie: "https://static.livcheers.com/static/content/images/brand/balvenie.webp",
  "big-banyan": "https://bigbanyanwines.com/Images/Logo/Logo.svg",
  bira: "https://static.livcheers.com/static/content/images/brand/bira.webp",
  "black-dog": "https://static.livcheers.com/static/content/images/brand/black-dog.webp",
  "bombay-sapphire": "https://static.livcheers.com/static/content/images/brand/bombay-sapphire.webp",
};

export const BRAND_SOURCES_BATCH_115: Record<string, string[]> = {
  absolut: [
    "https://theabsolutcompany.com/our-brands/absolut-vodka/",
    "https://www.absolut.com/en-gb/absolut-one-source-story/",
  ],
  amrut: [
    "https://amrutdistilleries.com/story/",
  ],
  bacardi: [
    "https://www.bacardi.com/us/en/culture/this-is-our-story/",
    "https://www.bacardilimited.com/our-company/our-history/",
  ],
  ballantines: [
    "https://www.ballantines.com/en/whisky-guide/our-story/",
    "https://www.ballantines.com/en/whisky-guide/faqs/",
  ],
  balvenie: [
    "https://www.williamgrant.com/gb/brands/the-balvenie/",
    "https://www.thebalvenie.com/",
  ],
  "big-banyan": [
    "https://www.jdl.in/big-banyan-wines.php",
    "https://bigbanyanwines.com/our-story",
  ],
  bira: [
    "https://www.hptax.gov.in/public/notifications/174409640067f4cc90ca412.pdf",
  ],
  "black-dog": [
    "https://www.diageoindia.com/~/media/Files/D/Diageo-V2/Diageo-India/investors/financials/results-reports-and-presentations/usl_annual_report_2014-2015.pdf",
    "https://www.iwsc.net/results/detail/72910/black-dog-triple-gold-reserve-triple-matured--scotch-whisky",
  ],
  "bombay-sapphire": [
    "https://www.bombaysapphire.com/us/en/products/bombay-dry-gin/",
    "https://www.bombaysapphire.com/distillery/plan-your-visit/",
  ],
  bottega: [
    "https://www.bottegaspa.com/en/history/",
    "https://www.bottegaspa.com/en/",
  ],
};

export const BRAND_CONTENT_BATCH_115: Record<string, BrandPublicContent> = {
  absolut: {
    description: "Absolut is a Swedish vodka made in Ahus from winter wheat and water drawn from a local deep well. The brand sits in Pernod Ricard's portfolio and is known for a clean original vodka plus flavoured bottles such as Citron and Peppar.",
    story: "Lars Olsson Smith launched Absolut Rent Brannvin in 1879 with continuous distillation at the heart of the idea. Modern Absolut keeps production close to southern Sweden, with wheat sourced from nearby farms around Skane.",
    tastingNotes: [
      { title: "Original Vodka", description: "Clean grain, soft wheat sweetness and a dry finish make the unflavoured vodka suited to soda, tonic and chilled serves." },
      { title: "Flavoured Range", description: "Citron brings lemon peel brightness, while Peppar works in savoury drinks with tomato, chilli and black pepper." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a vodka soda, Martini or mule; keep citrus and soda crisp rather than sugary." },
      { subheading: "Food", description: "Pair with smoked salmon, dill potatoes, chilli paneer, lemon-pepper prawns or salted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked salmon", "dill potatoes", "chilli paneer", "lemon-pepper prawns", "salted almonds"] }],
    whyChoose: "Absolut is a reliable Swedish wheat vodka for clean highballs, citrus cocktails and savoury party food.",
    faqs: [
      { question: "Where is Absolut vodka made?", answer: "Absolut is produced in Ahus, Sweden." },
      { question: "What is Absolut vodka made from?", answer: "The original vodka uses winter wheat and local deep-well water." },
    ],
    finalVerdict: "Choose Absolut when you want a crisp vodka that stays neat in both simple soda serves and sharper cocktails.",
    metaTitle: "Absolut Vodka Guide | BevOry",
    metaDescription: "Explore Absolut vodka from Sweden, tasting notes, cocktail serves, food pairings and city prices on BevOry.",
  },
  amrut: {
    description: "Amrut is an Indian whisky producer from Bengaluru, Karnataka, founded by JN Radhakrishna Rao Jagdale in 1948. The brand is best known internationally for Indian single malt shaped by warm-climate maturation.",
    story: "Amrut began soon after Indian independence and later moved into single malt at a time when Indian whisky was rarely discussed globally as malt whisky. Bengaluru's heat accelerates oak interaction, so cask choice and timing matter strongly across the range.",
    tastingNotes: [
      { title: "Unpeated Malt", description: "Barley sweetness, tropical fruit, honey and firm oak spice sit at the centre of the classic style." },
      { title: "Peated Expressions", description: "Peated releases add smoke, roasted nuts and darker spice without turning every Amrut bottle into the same flavour." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Taste neat in a tulip glass first, then add a few drops of water to open the cask influence." },
      { subheading: "Food", description: "Pair with mutton seekh, smoked paneer, pepper chicken, roasted almonds or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "smoked paneer", "pepper chicken", "roasted almonds", "dark chocolate"] }],
    whyChoose: "Amrut gives Indian single malt a clear Bengaluru signature: ripe barley, active oak and bold texture.",
    faqs: [
      { question: "Where is Amrut whisky made?", answer: "Amrut is made by Amrut Distilleries in Bengaluru, Karnataka." },
      { question: "Is every Amrut whisky smoky?", answer: "No. Amrut makes both unpeated and peated single malt expressions." },
    ],
    finalVerdict: "Amrut is a serious Indian malt choice for drinkers who want local climate, barley and oak to show clearly.",
    metaTitle: "Amrut Whisky Guide | BevOry",
    metaDescription: "Explore Amrut Indian whisky from Bengaluru, single malt notes, serving ideas, pairings and city prices on BevOry.",
  },
  bacardi: {
    description: "Bacardi is a rum brand founded by Don Facundo Bacardi Masso in Santiago de Cuba in 1862. Its range runs from light Carta Blanca for cocktails to oak-aged and flavoured expressions.",
    story: "Don Facundo refined rum through lighter distillation and charcoal filtration when many rums were heavier and rougher. The bat emblem came from the original distillery and remains central to the brand's Cuban-founded identity.",
    tastingNotes: [
      { title: "Carta Blanca", description: "Light cane sweetness, soft vanilla and a clean finish make it a classic Mojito and Daiquiri base." },
      { title: "Aged Range", description: "Oak-aged bottles move toward caramel, dried fruit, baking spice and a rounder sipping profile." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use Carta Blanca with lime and mint, or pour aged Bacardi over ice in a rocks glass." },
      { subheading: "Food", description: "Pair Mojitos with fish tacos, Goan prawn fry, grilled pineapple, chicken skewers or salted plantain chips." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fish tacos", "Goan prawn fry", "grilled pineapple", "chicken skewers", "salted plantain chips"] }],
    whyChoose: "Bacardi remains one of the easiest rum families to match with fresh citrus cocktails and casual food.",
    faqs: [
      { question: "Where did Bacardi start?", answer: "Bacardi was founded in Santiago de Cuba in 1862." },
      { question: "Which Bacardi works best for Mojitos?", answer: "Bacardi Carta Blanca is the classic light rum choice for Mojitos and Daiquiris." },
    ],
    finalVerdict: "Bacardi is strongest when the bottle matches the serve: light rum for lime-led cocktails, aged rum for slower pours.",
    metaTitle: "Bacardi Rum Guide | BevOry",
    metaDescription: "Explore Bacardi rum history, Carta Blanca notes, cocktail serves, food pairings and city prices on BevOry.",
  },
  ballantines: {
    description: "Ballantine's is a blended Scotch whisky house that began with George Ballantine's Edinburgh grocery shop in 1827. Now produced by Chivas Brothers, it blends malt and grain whiskies from several Scottish regions.",
    story: "George Ballantine built the business by selling and blending whisky before the family name became a global Scotch label. Finest remains the approachable core bottle, while 17 Year Old and older blends carry the range into richer territory.",
    tastingNotes: [
      { title: "Finest", description: "Honey, apple, vanilla and soft grain make the core blend bright enough for highballs." },
      { title: "Aged Blends", description: "Older releases bring more baked fruit, oak polish and spice from longer maturation." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Finest with soda and ice, or drink aged Ballantine's neat from a small whisky glass." },
      { subheading: "Food", description: "Pair with chicken tikka, mushroom galouti, cheddar toast, salted cashews or apple tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "mushroom galouti", "cheddar toast", "salted cashews", "apple tart"] }],
    whyChoose: "Ballantine's gives blended Scotch drinkers a light, fruit-led style that works neatly in long drinks.",
    faqs: [
      { question: "Who founded Ballantine's?", answer: "George Ballantine founded the business in Edinburgh in 1827." },
      { question: "Is Ballantine's a single malt?", answer: "No. Ballantine's is known for blended Scotch whisky." },
    ],
    finalVerdict: "Ballantine's is a dependable blended Scotch when you want honeyed fruit, soda-friendly balance and easy food pairing.",
    metaTitle: "Ballantine's Scotch Guide | BevOry",
    metaDescription: "Explore Ballantine's blended Scotch, tasting notes, highball serves, food pairings and city prices on BevOry.",
  },
  balvenie: {
    description: "The Balvenie is a Speyside single malt whisky made in Dufftown by William Grant & Sons. The distillery is known for traditional floor maltings, an on-site cooperage and a resident coppersmith.",
    story: "William Grant built The Balvenie close to Glenfiddich in Dufftown, creating a second Speyside distillery under the family name. Its rare-craft identity is practical rather than decorative: barley, malt, copper and casks all remain visible parts of production.",
    tastingNotes: [
      { title: "Honeyed Malt", description: "Orchard fruit, honey, vanilla and gentle oak give many Balvenie releases a rounded Speyside warmth." },
      { title: "Sherry Cask Accent", description: "Sherry-influenced bottles add raisin, spice, toasted nuts and a richer finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour neat in a tulip glass and let it rest before adding water drop by drop." },
      { subheading: "Food", description: "Pair with galouti kebabs, roast chicken, walnut cake, aged cheddar or honey-glazed nuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "roast chicken", "walnut cake", "aged cheddar", "honey-glazed nuts"] }],
    whyChoose: "The Balvenie suits drinkers who want Speyside malt shaped by hands-on barley and cask work.",
    faqs: [
      { question: "Where is The Balvenie made?", answer: "The Balvenie is made in Dufftown, Speyside, Scotland." },
      { question: "What makes The Balvenie production distinctive?", answer: "The distillery keeps traditional floor maltings, coopers and a coppersmith connected to its production." },
    ],
    finalVerdict: "The Balvenie is a polished Speyside malt for slow sipping, soft spice and rich Indian starters.",
    metaTitle: "The Balvenie Whisky Guide | BevOry",
    metaDescription: "Explore The Balvenie Speyside single malt, floor maltings, tasting notes, pairings and city prices on BevOry.",
  },
  "big-banyan": {
    description: "Big Banyan is an Indian wine brand from John Distilleries, made around Bengaluru with a range of red, white, rose and dessert wines. Its portfolio includes Shiraz, Merlot, Cabernet Sauvignon, Chardonnay, Chenin Blanc and Sauvignon Blanc.",
    story: "The brand takes its name from the large banyan tree near Bengaluru, close to the winery setting. John Distilleries built the label around Indian vineyards and Italian winemaking guidance from Lucio Matricardi.",
    tastingNotes: [
      { title: "Red Wines", description: "Shiraz and Cabernet Sauvignon lean into dark berry fruit, pepper and food-friendly tannin." },
      { title: "White Wines", description: "Chardonnay, Chenin Blanc and Sauvignon Blanc bring tropical fruit, citrus and chilled-table freshness." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve whites chilled, pour rose cold, and give fuller reds a broad glass at cool room temperature." },
      { subheading: "Food", description: "Pair Shiraz with lamb seekh; take Chardonnay or Chenin Blanc toward tandoori fish, malai tikka or paneer starters." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb seekh", "tandoori fish", "malai tikka", "paneer starters", "mushroom kebabs"] }],
    whyChoose: "Big Banyan gives Indian wine drinkers familiar grape varieties in a Bengaluru-rooted format.",
    faqs: [
      { question: "Who makes Big Banyan wine?", answer: "Big Banyan is part of the John Distilleries portfolio." },
      { question: "Which grape varieties does Big Banyan make?", answer: "The range includes Shiraz, Merlot, Cabernet Sauvignon, Chardonnay, Chenin Blanc and Sauvignon Blanc." },
    ],
    finalVerdict: "Big Banyan is an easy Indian-wine pick when dinner needs a clear red, white or rose option.",
    metaTitle: "Big Banyan Wine Guide | BevOry",
    metaDescription: "Explore Big Banyan Indian wines, grape styles, serving tips, food pairings and city prices on BevOry.",
  },
  bira: {
    description: "Bira 91 is an Indian beer brand from B9 Beverages with wheat beer, lager and strong beer variants. Familiar listings include Bira White, Blonde, Gold and Boom.",
    story: "Bira 91 entered India's beer scene by pushing wheat beer and modern lager branding beyond the usual strong-lager shelf. The range now gives drinkers different textures, from soft wheat to crisper lager and higher-strength pours.",
    tastingNotes: [
      { title: "White", description: "Soft wheat, citrus and low bitterness make Bira White the gentler, refreshing side of the range." },
      { title: "Blonde And Gold", description: "Blonde drinks crisper and maltier, while Gold and Boom move toward stronger, fuller beer styles." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve cold in a clean beer glass, with enough room for foam and aroma." },
      { subheading: "Food", description: "Pair White with chilli prawns or malai tikka; match Blonde with pakora, fries, burgers or masala peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli prawns", "malai tikka", "pakora", "burgers", "masala peanuts"] }],
    whyChoose: "Bira 91 works when you want Indian beer options beyond one standard lager style.",
    faqs: [
      { question: "Who makes Bira 91?", answer: "Bira 91 is made by B9 Beverages." },
      { question: "Are Bira White and Bira Blonde the same beer?", answer: "No. White is wheat-led, while Blonde is a lager-style beer." },
    ],
    finalVerdict: "Bira 91 is best chosen by mood: White for soft wheat refreshment, Blonde or Gold for a sharper beer table.",
    metaTitle: "Bira 91 Beer Guide | BevOry",
    metaDescription: "Explore Bira 91 White, Blonde, Gold and Boom styles, snack pairings and city prices on BevOry.",
  },
  "black-dog": {
    description: "Black Dog is a blended Scotch whisky label in the United Spirits and Diageo India portfolio. Its Indian range includes Black Reserve and Triple Gold Reserve, both positioned around polished Scotch blending.",
    story: "The brand's name is linked to Sir Walter Millard and nineteenth-century whisky trade history. In India, Black Dog became a familiar imported-Scotch name through United Spirits' premium whisky portfolio.",
    tastingNotes: [
      { title: "Black Reserve", description: "Malt sweetness, vanilla, oak and soft spice give the core blend a rounded Scotch profile." },
      { title: "Triple Gold Reserve", description: "Richer dried fruit, honeyed grain and warm spice make this expression fuller in the glass." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Taste neat first, then add water, one large cube or chilled soda for a longer drink." },
      { subheading: "Food", description: "Pair with tandoori chicken, mushroom kebabs, galouti kebabs, smoked almonds or mature cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "mushroom kebabs", "galouti kebabs", "smoked almonds", "mature cheddar"] }],
    whyChoose: "Black Dog offers a rounded blended Scotch style that feels familiar on Indian premium-whisky shelves.",
    faqs: [
      { question: "Is Black Dog Scotch whisky?", answer: "Yes. Black Dog is a blended Scotch whisky label." },
      { question: "Who sells Black Dog in India?", answer: "Black Dog sits in the United Spirits portfolio under Diageo India." },
    ],
    finalVerdict: "Black Dog is a dependable blended Scotch for soda, ice or a slow neat pour beside smoky snacks.",
    metaTitle: "Black Dog Scotch Guide | BevOry",
    metaDescription: "Explore Black Dog blended Scotch, Reserve styles, tasting notes, food pairings and city prices on BevOry.",
  },
  "bombay-sapphire": {
    description: "Bombay Sapphire is an English gin made at Laverstoke Mill in Hampshire. The classic gin uses vapour infusion to extract flavour from ten botanicals including juniper, citrus peel, cubeb and grains of paradise.",
    story: "The brand's modern distillery at Laverstoke Mill connects gin production with botanical display and visitor-led education. Vapour infusion keeps the botanicals lifted and aromatic rather than heavy or oily.",
    tastingNotes: [
      { title: "Juniper And Citrus", description: "Piney juniper, lemon peel and orange peel make the first impression bright and dry." },
      { title: "Dry Spice", description: "Cubeb, cassia and grains of paradise add peppery warmth under the citrus." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Build with dry tonic, plenty of ice and a lemon or lime wedge; use a chilled Martini for a sharper serve." },
      { subheading: "Food", description: "Pair with tandoori prawns, coriander paneer, cucumber chaat, grilled fish or salted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "coriander paneer", "cucumber chaat", "grilled fish", "salted almonds"] }],
    whyChoose: "Bombay Sapphire is a bright, citrus-spiced gin that makes a clean tonic without needing heavy garnish.",
    faqs: [
      { question: "Where is Bombay Sapphire made?", answer: "Bombay Sapphire is made at Laverstoke Mill in Hampshire, England." },
      { question: "How many botanicals are in Bombay Sapphire?", answer: "The classic Bombay Sapphire gin uses ten botanicals." },
    ],
    finalVerdict: "Bombay Sapphire is a crisp gin-and-tonic choice for citrus, spice and seafood-friendly drinking.",
    metaTitle: "Bombay Sapphire Gin Guide | BevOry",
    metaDescription: "Explore Bombay Sapphire gin, ten botanicals, tonic serves, food pairings and city prices on BevOry.",
  },
  bottega: {
    description: "Bottega is an Italian wine, grappa and liqueur producer based in Veneto. The modern company was founded in 1977 by Aldo Bottega and Rosina Zambon, with Prosecco becoming a major part of the portfolio from the 1990s.",
    story: "The Bottega family history reaches back to vineyard work near Refrontolo in the Prosecco Superiore DOCG area. Il Vino dei Poeti Prosecco, introduced in 1992, helped move the house from distillation into a wider wine identity.",
    tastingNotes: [
      { title: "Prosecco", description: "Glera gives the sparkling wines pear, green apple, white flowers and a clean, frothy finish." },
      { title: "Grappa And Liqueurs", description: "The distilling side brings grape-skin intensity, citrus sweetness and dessert-friendly texture across selected bottles." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Prosecco well chilled in a white-wine glass or flute; pour grappa in a small tulip glass after food." },
      { subheading: "Food", description: "Pair bubbles with fried prawns, paneer crostini, tomato bruschetta, mushroom risotto or fruit tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fried prawns", "paneer crostini", "tomato bruschetta", "mushroom risotto", "fruit tart"] }],
    whyChoose: "Bottega is a flexible Italian name for chilled Prosecco, aperitivo snacks and after-dinner grappa.",
    faqs: [
      { question: "Where is Bottega from?", answer: "Bottega is from Veneto in northern Italy." },
      { question: "When did Bottega launch Prosecco?", answer: "Bottega introduced Il Vino dei Poeti Prosecco in 1992." },
    ],
    finalVerdict: "Bottega works from aperitif to dessert when you choose the right bottle for the moment.",
    metaTitle: "Bottega Wine Guide | BevOry",
    metaDescription: "Explore Bottega Prosecco, grappa and Italian wine styles, pairings, serving tips and city prices on BevOry.",
  },
};
