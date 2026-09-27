import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_104 = [
  ["monte-azul", "Monte Azul", "Mexico", "Tequila", "pending-monte-azul"],
  ["montenero", "Montenero", "Italy", "Red Wine", "pending-montenero"],
  ["montepulciano", "Montepulciano", "Italy", "Red Wine", "pending-montepulciano"],
  ["montgolfier", "Montgolfier", "France", "Red Wine", "pending-montgolfier"],
  ["montras", "Montras", "Chile", "Red Wine", "pending-montras"],
  ["morgan-bay", "Morgan Bay", "Australia", "White Wine", "pending-morgan-bay"],
  ["morgon", "Morgon", "France", "Red Wine", "pending-morgon"],
  ["moulin", "Moulin", "France", "Wine", "pending-moulin"],
  ["mounts", "Mounts", "India", "Beers", "pending-mounts"],
  ["mounts-6000", "Mounts 6000", "India", "Beers", "pending-mounts-6000"],
] as const;

export const BRAND_LOGOS_BATCH_104: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_104: Record<string, string[]> = {
  "monte-azul": [
    "https://www.livcheers.com/bangalore/brand/monte-azul",
    "https://maximumbev.com/shop/product/monte-azul-blanco/6093211360935e091871b60b",
    "https://www.bevory.in/agra/brand/monte-azul",
  ],
  montenero: [
    "https://montenerowine.it/en",
    "https://www.vivino.com/US/en/montenero-it-merlot/w/7053797",
    "https://www.bevory.in/agra/brand/montenero",
  ],
  montepulciano: [
    "https://www.umanironchi.com/vini-e-territori/abruzzo/podere-montepulciano-dabruzzo-doc",
    "https://umanironchi.com/",
    "https://www.bevory.in/agra/brand/montepulciano",
  ],
  montgolfier: [
    "https://www.evino.com.br/product/montgolfier-vdf-merlot-2021-327781.html",
    "https://www.bevory.in/agra/brand/montgolfier",
  ],
  montras: [
    "https://montgras.cl/lineas/",
    "https://montgras.cl/wp-content/uploads/2022/11/2020-MontGras-DAY-ONE-Cabernet-Sauvignon-ENG.pdf",
    "https://www.bevory.in/agra/brand/montras",
  ],
  "morgan-bay": [
    "https://www.cellardoor.co/on/demandware.static/-/Sites-twe-master-catalog/default/dw34e89a60/Morgans%20Bay%20tasting%20note%20-%20NV%20Chardonnay.pdf",
    "https://www.bevory.in/agra/brand/morgan-bay",
  ],
  morgon: [
    "https://www.albert-bichot.com/en",
    "https://www.bevory.in/agra/brand/morgon",
  ],
  moulin: [
    "https://boutique.daumas-gassac.com/fr/6-sas-moulin-de-gassac",
    "https://www.daumas-gassac.com/fr/vin/merlot/",
    "https://www.bevory.in/agra/brand/moulin",
  ],
  mounts: [
    "https://associatedalcohols.com/wp-content/uploads/AABL_Investor-Presentation_Overview.pdf",
    "https://www.bevory.in/agra/brand/mounts",
  ],
  "mounts-6000": [
    "https://associatedalcohols.com/wp-content/uploads/AABL_Investor-Presentation_Overview.pdf",
    "https://www.bevory.in/agra/brand/mounts-6000",
  ],
};

export const BRAND_CONTENT_BATCH_104: Record<string, BrandPublicContent> = {
  "monte-azul": {
    description: "Monte Azul is a tequila label listed on BevOry through Tequila Monte Azul Gold. The style points to a gold tequila made for chilled shots, Palomas and citrus-forward party cocktails.",
    story: "The Monte Azul name references the blue-agave landscape linked with tequila culture in Jalisco, Mexico. BevOry's current bottle is the Gold expression, so the guide stays focused on approachable agave character and cocktail use.",
    tastingNotes: [
      { title: "Gold Tequila", description: "Cooked agave, light caramel, citrus peel and peppery warmth shape the aroma." },
      { title: "Cocktail Finish", description: "A mellow, lightly sweet finish works well with lime, grapefruit and salt." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled, with lime and salt, in a Paloma, or in a simple tequila sunrise." },
      { subheading: "Food", description: "Pair with fish tacos, tandoori prawns, chicken quesadilla, nachos or chilli paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fish tacos", "tandoori prawns", "chicken quesadilla", "nachos", "chilli paneer"] }],
    whyChoose: "Monte Azul is an easy tequila pick for citrus cocktails and lively snack tables.",
    faqs: [
      { question: "What Monte Azul bottle is on BevOry?", answer: "The current BevOry listing is Tequila Monte Azul Gold in a 750ml format." },
      { question: "How should Monte Azul Gold be served?", answer: "Serve it chilled, with lime and salt, or in grapefruit and citrus-led cocktails." },
    ],
    finalVerdict: "Monte Azul Gold is best treated as a bright tequila for Palomas, shots and spicy food.",
    metaTitle: "Monte Azul Tequila Guide | BevOry",
    metaDescription: "Explore Monte Azul Gold tequila notes, citrus cocktail serves, food pairings and city prices.",
  },
  montenero: {
    description: "Montenero is an Italian red-wine name on BevOry through Montenero Merlot. The wider Montenero wine identity is tied to high-altitude vineyards and volcanic soil around Mount Etna.",
    story: "Montenero describes vineyards between 750 and 900 meters above sea level, where slow ripening and sharp temperature shifts shape the fruit. Its story is built around mountain wine, lava soil and a patient harvest rhythm.",
    tastingNotes: [
      { title: "Merlot", description: "Plum, black cherry, soft herbs and gentle spice give the wine a supple red-fruit core." },
      { title: "Mountain Freshness", description: "Fresh acidity and moderate tannin keep the finish clean rather than heavy." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a red-wine glass; avoid serving it too warm." },
      { subheading: "Food", description: "Pair with mushroom galouti, roast chicken, mutton kebab, pasta arrabbiata or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mushroom galouti", "roast chicken", "mutton kebab", "pasta arrabbiata", "aged cheddar"] }],
    whyChoose: "Montenero is for drinkers who want a soft Merlot profile with Italian red-wine freshness.",
    faqs: [
      { question: "What Montenero wine is listed on BevOry?", answer: "BevOry lists Montenero Merlot under Red Wine." },
      { question: "What food suits Montenero Merlot?", answer: "Mushrooms, roast chicken, mildly spiced kebabs, tomato pasta and firm cheeses work well." },
    ],
    finalVerdict: "Montenero Merlot is a flexible red for weeknight meals and lightly spiced Indian food.",
    metaTitle: "Montenero Merlot Guide | BevOry",
    metaDescription: "Explore Montenero Merlot notes, Italian red wine style, serving ideas, pairings and city prices.",
  },
  montepulciano: {
    description: "Montepulciano is listed on BevOry through Montepulciano d'Abruzzo from Umani Ronchi. It is an Italian red made from 100% Montepulciano grapes in Abruzzo.",
    story: "Umani Ronchi began in the Marche in the late 1950s and later expanded south into Abruzzo. Its Podere Montepulciano d'Abruzzo is vinified in stainless steel, with short maceration and a fresh, varietal style.",
    tastingNotes: [
      { title: "Abruzzo Red", description: "Plum, sour cherry and violet-edged red fruit give the wine a bright ruby profile." },
      { title: "Dry Finish", description: "Medium tannins, firm body and a savoury close make it useful with rich food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve around 16 to 18 degrees Celsius in a medium red-wine glass." },
      { subheading: "Food", description: "Pair with mutton rogan josh, roast chicken, pasta ragu, seekh kebab or grilled vegetables." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton rogan josh", "roast chicken", "pasta ragu", "seekh kebab", "grilled vegetables"] }],
    whyChoose: "Montepulciano d'Abruzzo is a dependable Italian red when you want cherry fruit, body and food-friendly tannin.",
    faqs: [
      { question: "Which grape is used in Montepulciano d'Abruzzo?", answer: "Umani Ronchi lists its Podere Montepulciano d'Abruzzo as 100% Montepulciano." },
      { question: "Where is this wine made?", answer: "It comes from Abruzzo on Italy's Adriatic side." },
    ],
    finalVerdict: "Montepulciano is a strong table-red choice for kebabs, roast meats and tomato-led dishes.",
    metaTitle: "Montepulciano Red Wine Guide | BevOry",
    metaDescription: "Explore Montepulciano d'Abruzzo notes, Umani Ronchi context, pairings and city prices.",
  },
  montgolfier: {
    description: "Montgolfier is a French red-wine label listed on BevOry through Montgolfier Merlot. The bottle sits in the soft, fruit-forward Merlot style for simple dinners and easy pours.",
    story: "The Montgolfier listing is tied to Vin de France Merlot, a broad French classification used for accessible varietal wines. Its strength is directness: clear Merlot fruit, soft structure and everyday usability.",
    tastingNotes: [
      { title: "French Merlot", description: "Red plum, cherry, blackcurrant and light spice give the wine a rounded profile." },
      { title: "Soft Structure", description: "Gentle tannins and a smooth finish make it easy to pour with casual food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly cool in a red-wine glass; open shortly before drinking." },
      { subheading: "Food", description: "Pair with chicken tikka, veg pizza, lamb patties, dal makhani or gouda." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "veg pizza", "lamb patties", "dal makhani", "gouda"] }],
    whyChoose: "Montgolfier Merlot is a straightforward French red for soft fruit and easy food pairing.",
    faqs: [
      { question: "What style is Montgolfier?", answer: "BevOry lists Montgolfier Merlot, a soft French red wine style." },
      { question: "Should Montgolfier Merlot be chilled?", answer: "A light chill helps the fruit stay fresh, especially in warm weather." },
    ],
    finalVerdict: "Montgolfier is a practical Merlot for relaxed dinners, pizzas and mildly spiced plates.",
    metaTitle: "Montgolfier Merlot Guide | BevOry",
    metaDescription: "Explore Montgolfier Merlot notes, French red wine style, food pairings and city prices.",
  },
  montras: {
    description: "Montras is the BevOry spelling used for a MontGras Day One Cabernet Sauvignon listing. The wine comes from Chile's MontGras portfolio and is tied to Maipo Valley Cabernet Sauvignon.",
    story: "MontGras presents Day One as a Gran Reserva line within a Chilean portfolio focused on vineyard detail and sustainability. The Cabernet Sauvignon tech sheet lists Maipo Valley fruit, stainless-steel fermentation and contact with French oak.",
    tastingNotes: [
      { title: "Maipo Cabernet", description: "Cherry, plum, violet hue, spice and herbal notes lead the aroma." },
      { title: "Oak-Touched Finish", description: "Juicy fruit, fresh acidity and polished texture carry a long, pleasant finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve slightly below room temperature in a large red-wine glass." },
      { subheading: "Food", description: "Pair with lamb chops, seekh kebab, pepper steak, mushroom biryani or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["lamb chops", "seekh kebab", "pepper steak", "mushroom biryani", "aged cheddar"] }],
    whyChoose: "Montras gives you Chilean Cabernet depth with Maipo fruit and grill-friendly structure.",
    faqs: [
      { question: "Is Montras connected to MontGras?", answer: "The BevOry product name points to MontGras Day One Cabernet Sauvignon." },
      { question: "What grape is in MontGras Day One Cabernet Sauvignon?", answer: "The 2020 technical sheet lists 100% Cabernet Sauvignon." },
    ],
    finalVerdict: "Montras is a bold Chilean red for grilled meats, kebabs and structured Cabernet drinkers.",
    metaTitle: "Montras Cabernet Sauvignon Guide | BevOry",
    metaDescription: "Explore Montras MontGras Day One Cabernet notes, Chilean style, pairings and city prices.",
  },
  "morgan-bay": {
    description: "Morgan Bay is an Australian wine label listed on BevOry through Morgan Bay Cellars Chardonnay. The wine is made in a South Eastern Australia style with ripe stone fruit and oak influence.",
    story: "Morgan Bay's Chardonnay note describes the range as approachable Australian wine built for broad food pairing. The Chardonnay uses French and American oak, giving the wine a creamy texture and nutty detail.",
    tastingNotes: [
      { title: "Australian Chardonnay", description: "Ripe peach, nectarine, lime-green freshness and hazelnut complexity shape the nose." },
      { title: "Creamy Palate", description: "Medium body, clean stone fruit and a soft, rich finish make the wine round but easy." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve lightly chilled in a white-wine glass, not ice cold." },
      { subheading: "Food", description: "Pair with butter chicken, grilled prawns, malai tikka, roast corn or creamy pasta." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["butter chicken", "grilled prawns", "malai tikka", "roast corn", "creamy pasta"] }],
    whyChoose: "Morgan Bay Chardonnay is a friendly Australian white for creamy dishes and seafood.",
    faqs: [
      { question: "What Morgan Bay wine is on BevOry?", answer: "BevOry lists Morgan Bay Cellars Chardonnay." },
      { question: "What does Morgan Bay Chardonnay taste like?", answer: "It shows ripe peach, nectarine, hazelnut and a creamy, soft finish." },
    ],
    finalVerdict: "Morgan Bay is a useful Chardonnay for drinkers who enjoy ripe fruit and gentle oak.",
    metaTitle: "Morgan Bay Chardonnay Guide | BevOry",
    metaDescription: "Explore Morgan Bay Chardonnay notes, Australian wine style, food pairings and city prices.",
  },
  morgon: {
    description: "Morgon is listed on BevOry through Morgon Albert Bichot, a red Burgundy-style Beaujolais cru wine. Morgon is made from Gamay and is known for more structure than lighter Beaujolais villages wines.",
    story: "Maison Albert Bichot is a Burgundy house with roots in Beaune and a portfolio that includes Morgon Les Charmes. Morgon, one of Beaujolais' crus, is valued for darker fruit, mineral grip and the ability to pair beyond aperitif snacks.",
    tastingNotes: [
      { title: "Cru Beaujolais", description: "Cherry, raspberry, violet, plum and light spice give the wine a fragrant red-fruit nose." },
      { title: "Gamay Structure", description: "Fresh acidity, fine tannin and a savoury mineral edge make the finish more serious than simple glou-glou reds." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve lightly chilled in a Burgundy glass to keep the fruit fresh." },
      { subheading: "Food", description: "Pair with roast chicken, pork momos, mushroom galouti, duck, charcuterie or paneer tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["roast chicken", "pork momos", "mushroom galouti", "duck", "paneer tikka"] }],
    whyChoose: "Morgon is a smart red-wine choice when you want Beaujolais fruit with extra depth.",
    faqs: [
      { question: "What grape is used for Morgon?", answer: "Morgon is a Beaujolais cru made from Gamay." },
      { question: "Who makes the Morgon listed on BevOry?", answer: "The listing is Morgon Albert Bichot." },
    ],
    finalVerdict: "Morgon is a bright but structured French red for poultry, mushrooms and lightly spiced dishes.",
    metaTitle: "Morgon Albert Bichot Guide | BevOry",
    metaDescription: "Explore Morgon Albert Bichot notes, Gamay style, serving ideas, pairings and city prices.",
  },
  moulin: {
    description: "Moulin is listed on BevOry through Moulin de Gassac Merlot, Syrah and Sauvignon wines. These are Languedoc wines from the Mas de Daumas Gassac family orbit, focused on freshness, varietal clarity and everyday drinking.",
    story: "Moulin de Gassac wines are produced in the Haute Vallee du Gassac near Aniane in southern France. The range includes single-varietal Merlot, Syrah and Sauvignon alongside broader Languedoc selections.",
    tastingNotes: [
      { title: "Merlot And Syrah", description: "Merlot brings black fruit and roundness, while Syrah adds darker spice and savoury depth." },
      { title: "Sauvignon", description: "The white style leans toward citrus, green notes and a dry, crisp finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Sauvignon chilled; serve Merlot and Syrah slightly cool in red-wine glasses." },
      { subheading: "Food", description: "Pair Sauvignon with fish tikka, Merlot with pizza, and Syrah with seekh kebab or lamb chops." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fish tikka", "pizza", "seekh kebab", "lamb chops", "brie"] }],
    whyChoose: "Moulin de Gassac is a flexible French range when one table needs both fresh white and soft red options.",
    faqs: [
      { question: "Which Moulin wines are on BevOry?", answer: "BevOry lists Moulin de Gassac Merlot, Syrah and Sauvignon." },
      { question: "Where is Moulin de Gassac from?", answer: "The wines come from the Languedoc area of southern France." },
    ],
    finalVerdict: "Moulin is a practical French wine range for mixed food tables and easy pours.",
    metaTitle: "Moulin De Gassac Wine Guide | BevOry",
    metaDescription: "Explore Moulin de Gassac Merlot, Syrah and Sauvignon notes, pairings and city prices.",
  },
  mounts: {
    description: "Mounts is an Indian beer listing tied to Mounts 6000 Super Strong Beer. It sits in the strong lager segment, with 500ml can and 650ml bottle formats appearing in brand-portfolio material.",
    story: "Associated Alcohols' Mount Everest Breweries portfolio material places Mount's 6000 beside Lemount Strong and Stok. The brand identity is built around a super-strong beer format for India's mainstream strong-beer market.",
    tastingNotes: [
      { title: "Strong Lager", description: "Grain, malt sweetness, light hop bitterness and a firm beer warmth lead the profile." },
      { title: "Cold Finish", description: "The finish is fuller than standard lager and works best when served very cold." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a beer mug or straight from a cold can or bottle." },
      { subheading: "Food", description: "Pair with chicken pakora, masala peanuts, fish fry, tandoori momos or chilli potato." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken pakora", "masala peanuts", "fish fry", "tandoori momos", "chilli potato"] }],
    whyChoose: "Mounts is a strong-beer pick for chilled serves and spicy Indian bar snacks.",
    faqs: [
      { question: "What is Mounts on BevOry?", answer: "It is linked to Mounts 6000 Super Strong Beer." },
      { question: "How should Mounts beer be served?", answer: "Serve it very cold with salty or spicy snacks." },
    ],
    finalVerdict: "Mounts is a cold strong lager choice for spicy snacks and casual beer occasions.",
    metaTitle: "Mounts Beer Guide | BevOry",
    metaDescription: "Explore Mounts 6000 strong beer notes, chilled serving ideas, pairings and city prices.",
  },
  "mounts-6000": {
    description: "Mounts 6000 is an Indian super-strong beer from the Mount Everest Breweries portfolio. BevOry lists Mount 6000 Super Strong Beer in 500ml and 650ml formats.",
    story: "Mount Everest Breweries portfolio material shows Mount's 6000 as a super-strong beer alongside Lemount Strong and Stok. The brand is built for India's high-strength lager shelf rather than craft-beer experimentation.",
    tastingNotes: [
      { title: "Super Strong Beer", description: "Malt sweetness, cereal grain, mild bitterness and a rounded body define the style." },
      { title: "Bold Cold Serve", description: "A cold pour keeps the finish crisp enough for fried and spicy snacks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve very cold in a tall glass or chilled beer mug." },
      { subheading: "Food", description: "Pair with egg bhurji, chicken lollipop, peanuts chaat, fried fish or spicy noodles." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["egg bhurji", "chicken lollipop", "peanuts chaat", "fried fish", "spicy noodles"] }],
    whyChoose: "Mounts 6000 is for drinkers who want a fuller Indian strong beer with snack-friendly malt weight.",
    faqs: [
      { question: "What size formats does Mounts 6000 appear in?", answer: "BevOry lists 500ml and 650ml formats for Mount 6000 Super Strong Beer." },
      { question: "What food works with Mounts 6000?", answer: "Fried fish, chicken lollipop, peanuts chaat and spicy noodles suit its strong lager profile." },
    ],
    finalVerdict: "Mounts 6000 is a straightforward strong beer for chilled serves and bold Indian snacks.",
    metaTitle: "Mounts 6000 Beer Guide | BevOry",
    metaDescription: "Explore Mounts 6000 strong beer notes, serving style, Indian snack pairings and city prices.",
  },
};
