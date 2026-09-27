import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_106 = [
  ["neon", "Neon", "India", "Vodka", "pending-neon"],
  ["nepal-tiger", "Nepal Tiger", "Nepal", "Beers", "pending-nepal-tiger"],
  ["niccolo", "Niccolo", "Italy", "Sparkling Wine", "pending-niccolo"],
  ["nice", "Nice", "United Kingdom", "Wine", "pending-nice"],
  ["nigori-sake", "Nigori Sake", "Japan", "Sake", "pending-nigori-sake"],
  ["nine-lives", "Nine Lives", "Scotland", "Blended Scotch", "pending-nine-lives"],
  ["no-label", "No Label", "India", "Mead", "pending-no-label"],
  ["noble", "Noble", "United States", "Wine", "pending-noble"],
  ["noumin", "Noumin", "Japan", "White Wine", "pending-noumin"],
  ["nvs-royal", "Nvs Royal", "India", "Made in India Whisky", "pending-nvs-royal"],
] as const;

export const BRAND_LOGOS_BATCH_106: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_106: Record<string, string[]> = {
  neon: [
    "https://blueoceanbeverages.com/products.html?category=Vodka",
    "https://neonvodka.co.uk/",
    "https://www.bevory.in/agra/brand/neon",
  ],
  "nepal-tiger": [
    "https://tigersbrewery.com/nepal-tiger-strong/",
    "https://newbusinessage.prixacdn.net/epaper/pdf/June_2023_eqlq8YW.pdf",
    "https://www.bevory.in/agra/brand/nepal-tiger",
  ],
  niccolo: [
    "https://www.livcheers.com/nagpur/liquor/niccolo-santino-prosecco-wine-750-750ml",
    "https://www.niccoloprosecco.com.au/",
    "https://www.bevory.in/agra/brand/niccolo",
  ],
  nice: [
    "https://catalog.lwc.co.uk/brands/Nice.html",
    "https://nicewines.orderport.net/product-details/0233/nice-sauvignon-blanc",
    "https://www.bevory.in/agra/brand/nice",
  ],
  "nigori-sake": [
    "https://wismettacsake.com/collections/aizu-homare-collection/branch-arizona",
    "https://shop.donquijotehawaii.com/store/don-quijote/products/243386-homare-nigorizake-aladdin-bottle-nigori-sake-300-ml",
    "https://www.bevory.in/agra/brand/nigori-sake",
  ],
  "nine-lives": [
    "https://www.livcheers.com/indore/liquor/nine-lives-blended-scotch-750ml",
    "https://www.bevory.in/agra/brand/nine-lives",
  ],
  "no-label": [
    "https://boredbev.com/our-portfolio/",
    "https://www.brewer-world.com/anant-gupta-and-vinayak-malhotra-co-founders-at-no-label/",
    "https://www.bevory.in/agra/brand/no-label",
  ],
  noble: [
    "https://noblevines.com/wines/446-chardonnay/",
    "https://noblevines.com/Wines/",
    "https://www.bevory.in/agra/brand/noble",
  ],
  noumin: [
    "https://cocowine.com/ds/p3716en/",
    "https://cocowine.com/docs/ds/3716en.pdf",
    "https://nipponnaturals.com/noumin-dry/",
  ],
  "nvs-royal": [
    "https://www.nvgroup.co.in/collections/other-brands",
    "https://www.nvgroup.co.in/pages/about-us",
    "https://www.livcheers.com/delhi/liquor/nvs-royal-envy-exclusive-prem-whiskey-750ml",
  ],
};

export const BRAND_CONTENT_BATCH_106: Record<string, BrandPublicContent> = {
  neon: {
    description: "Neon is a vodka label listed on BevOry through Neon Flavoured Vodka. The Indian catalogue context points toward a flavoured vodka made for chilled shots, soda serves and fruit-led party drinks.",
    story: "Blue Ocean Beverages is a Goa-based drinks company with vodka and ready-to-drink brands in its portfolio. Neon sits in the modern flavoured vodka space, where clean spirit, bright aroma and easy mixing matter more than oak or age.",
    tastingNotes: [
      { title: "Flavoured Vodka", description: "Clean spirit, soft fruit sweetness and light citrus lift shape the style." },
      { title: "Cold Finish", description: "The finish is crisp and simple, suited to soda, tonic and fresh lime." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled over ice with soda, tonic or lemonade; garnish with lime or orange." },
      { subheading: "Food", description: "Pair with peri-peri fries, chicken tikka, fried momos, chilli paneer or masala peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["peri-peri fries", "chicken tikka", "fried momos", "chilli paneer", "masala peanuts"] }],
    whyChoose: "Neon is a straightforward vodka choice for fruit-forward highballs and easy party pours.",
    faqs: [
      { question: "What Neon bottle is on BevOry?", answer: "BevOry carries Neon Flavoured Vodka in a 750ml format." },
      { question: "How should Neon Vodka be served?", answer: "Serve it very cold with soda, tonic, lemonade or a citrus garnish." },
    ],
    finalVerdict: "Neon works best as a chilled flavoured vodka for simple mixers and spicy snacks.",
    metaTitle: "Neon Vodka Guide | BevOry",
    metaDescription: "Explore Neon flavoured vodka notes, mixer ideas, food pairings and city prices on BevOry.",
  },
  "nepal-tiger": {
    description: "Nepal Tiger is a Nepali beer name linked with Tiger Brewery. BevOry lists Nepal Tiger Deluxe Beer in a 650ml format.",
    story: "Tiger Brewery presents Nepal Tiger Strong in 650ml, 500ml and 330ml sizes, made with barley malt, hops, water and yeast. The brand leans into Nepalese beer identity with a strong golden lager style.",
    tastingNotes: [
      { title: "Strong Lager", description: "Golden malt, light grain sweetness, herbal hops and a firm beer bite lead the profile." },
      { title: "Cold And Smooth", description: "The finish is fuller than a light lager but still clean enough for chilled drinking." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve cold in a tall beer glass, ideally around fridge temperature." },
      { subheading: "Food", description: "Pair with chicken momos, sukuti, chilli potato, tandoori chicken or peanut sadeko." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken momos", "sukuti", "chilli potato", "tandoori chicken", "peanut sadeko"] }],
    whyChoose: "Nepal Tiger is a strong lager pick for drinkers who like malt weight with mountain-food energy.",
    faqs: [
      { question: "What kind of beer is Nepal Tiger?", answer: "Nepal Tiger is listed as a strong lager-style beer." },
      { question: "What size is Nepal Tiger on BevOry?", answer: "BevOry lists Nepal Tiger Deluxe Beer in a 650ml bottle." },
    ],
    finalVerdict: "Nepal Tiger is a bold cold beer for momo nights, spicy snacks and stronger lager drinkers.",
    metaTitle: "Nepal Tiger Beer Guide | BevOry",
    metaDescription: "Explore Nepal Tiger beer notes, chilled serving ideas, momo pairings and city prices.",
  },
  niccolo: {
    description: "Niccolo is a sparkling wine entry on BevOry through Niccolo Santino Prosecco. The bottle sits in the Italian Prosecco style, built around lively bubbles, green apple and pear-like freshness.",
    story: "Prosecco is traditionally tied to north-eastern Italy and the Glera grape. BevOry's Niccolo Santino entry is best understood as a light sparkling wine for aperitif service, brunch and low-effort cocktails.",
    tastingNotes: [
      { title: "Prosecco Style", description: "Green apple, pear, citrus peel and white flowers lead the aroma." },
      { title: "Fresh Bubbles", description: "The palate is light, brisk and gently fruity, with a dry sparkling finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a flute or white-wine glass; use it in a Bellini or spritz." },
      { subheading: "Food", description: "Pair with bruschetta, prawn tempura, paneer tikka, sushi or lemon tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["bruschetta", "prawn tempura", "paneer tikka", "sushi", "lemon tart"] }],
    whyChoose: "Niccolo is an easy sparkling-wine choice when you want bright bubbles without Champagne weight.",
    faqs: [
      { question: "What Niccolo wine is listed on BevOry?", answer: "BevOry lists Niccolo Santino Prosecco Wine in a 750ml bottle." },
      { question: "How should Niccolo Prosecco be served?", answer: "Serve it well chilled as an aperitif, in a spritz, or with light starters." },
    ],
    finalVerdict: "Niccolo brings crisp Prosecco-style bubbles to brunch, starters and casual celebrations.",
    metaTitle: "Niccolo Prosecco Guide | BevOry",
    metaDescription: "Explore Niccolo Prosecco notes, sparkling wine serves, pairings and city prices.",
  },
  nice: {
    description: "Nice is a canned wine label represented on BevOry through Sauvignon Blanc and Malbec cans. The 187ml format makes it a single-serve wine option rather than a full-bottle dinner pour.",
    story: "UK trade listings show Nice across canned Sauvignon Blanc, Malbec, pale rose and fizz formats. The brand focuses on portable, portion-controlled wine in small cans, a useful format for picnics, events and casual drinking.",
    tastingNotes: [
      { title: "Sauvignon Blanc Can", description: "Green apple, citrus zest and fresh acidity drive the white wine style." },
      { title: "Malbec Can", description: "Dark fruit, soft tannin and a juicy red-wine finish make the Malbec easy to drink." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill the cans well; pour into a glass if you want the aroma to open up." },
      { subheading: "Food", description: "Pair Sauvignon Blanc with tandoori fish or goat cheese; pair Malbec with seekh kebab or veg pizza." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "goat cheese", "seekh kebab", "veg pizza", "peri-peri fries"] }],
    whyChoose: "Nice is a handy small-format wine pick when you want one measured serve instead of opening a bottle.",
    faqs: [
      { question: "What Nice wines are on BevOry?", answer: "BevOry lists Nice Sauvignon Blanc Can and Nice Malbec Can." },
      { question: "Should Nice canned wine be chilled?", answer: "Yes. Chill the cans well, especially the Sauvignon Blanc." },
    ],
    finalVerdict: "Nice is useful for compact wine serves, casual food and anyone avoiding a full 750ml bottle.",
    metaTitle: "Nice Canned Wine Guide | BevOry",
    metaDescription: "Explore Nice Sauvignon Blanc and Malbec cans, tasting notes, pairings and city prices.",
  },
  "nigori-sake": {
    description: "Nigori Sake is a Japanese cloudy sake style listed on BevOry through Homare Sake's Aladdin Bottle. The 300ml format makes it suited to small-table sharing and dessert-style sake service.",
    story: "Nigori means cloudy, referring to sake with fine rice solids left in suspension after coarse filtration. Homare's Aladdin Bottle Nigori sits in the approachable, lightly sweet Japanese sake space.",
    tastingNotes: [
      { title: "Cloudy Rice", description: "Creamy rice, melon, banana and gentle sweetness shape the aroma." },
      { title: "Soft Texture", description: "A milky body and low bitterness make the finish round, smooth and dessert friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill well, shake gently before pouring, and serve in a small sake cup or white-wine glass." },
      { subheading: "Food", description: "Pair with sushi, tempura, karaage, coconut pudding or malai tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["sushi", "tempura", "karaage", "coconut pudding", "malai tikka"] }],
    whyChoose: "Nigori Sake is the right pick when you want a creamy, lightly sweet Japanese rice drink.",
    faqs: [
      { question: "What does nigori mean?", answer: "Nigori is cloudy sake with fine rice solids left in the drink." },
      { question: "How should Nigori Sake be served?", answer: "Serve it chilled and gently shake the bottle before pouring." },
    ],
    finalVerdict: "Nigori Sake is a soft, cloudy sake for sushi, fried Japanese snacks and gentle desserts.",
    metaTitle: "Nigori Sake Guide | BevOry",
    metaDescription: "Explore Nigori Sake notes, cloudy sake style, chilled serving tips, pairings and city prices.",
  },
  "nine-lives": {
    description: "Nine Lives is a blended Scotch whisky entry on BevOry through Nine Lives Blended Scotch. The 750ml bottle sits in the approachable blended Scotch space for neat pours and highballs.",
    story: "The whisky is presented in Indian retail as a smooth blended Scotch made from malt and grain whiskies. Its role is straightforward: an easy-drinking Scotch option for soda, ice and casual whisky service.",
    tastingNotes: [
      { title: "Blended Scotch", description: "Caramel, light oak, cereal grain and soft orchard fruit make the aroma approachable." },
      { title: "Clean Finish", description: "The palate is light-bodied and smooth, with mild spice and a crisp close." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, over ice, or in a cold soda highball with a lemon peel." },
      { subheading: "Food", description: "Pair with chicken tikka, smoked paneer, masala peanuts, fish fingers or grilled mushrooms." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "smoked paneer", "masala peanuts", "fish fingers", "grilled mushrooms"] }],
    whyChoose: "Nine Lives is an accessible blended Scotch for highballs, ice serves and easy whisky evenings.",
    faqs: [
      { question: "What type of whisky is Nine Lives?", answer: "Nine Lives is listed as a blended Scotch whisky." },
      { question: "How should Nine Lives be served?", answer: "Try it over ice, with soda, or neat in a small whisky glass." },
    ],
    finalVerdict: "Nine Lives is a simple Scotch choice for soda highballs and familiar snack pairings.",
    metaTitle: "Nine Lives Scotch Guide | BevOry",
    metaDescription: "Explore Nine Lives blended Scotch notes, highball serves, snack pairings and city prices.",
  },
  "no-label": {
    description: "No Label is an Indian mead name associated with Bored Beverages. BevOry's remaining No Label row is tied to a 330ml mead format, a honey-fermented drink that sits near beer in casual drinking occasions.",
    story: "No Label emerged from India's small but growing mead scene, where honey replaces malted grain or grapes as the fermentation base. The brand identity leans young, experimental and flavour-led.",
    tastingNotes: [
      { title: "Honey Ferment", description: "Honeyed sweetness, light acidity and gentle fruit character lead the style." },
      { title: "Sparkling Feel", description: "The 330ml format suits a chilled, lightly fizzy pour with a clean finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a stemmed glass or small beer glass." },
      { subheading: "Food", description: "Pair with peri-peri fries, cheese toast, chicken wings, hummus platter or fruit tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["peri-peri fries", "cheese toast", "chicken wings", "hummus platter", "fruit tart"] }],
    whyChoose: "No Label is a good pick when you want something lighter than wine but more unusual than beer.",
    faqs: [
      { question: "What is No Label made from?", answer: "No Label is a mead-style drink, meaning honey is central to the fermentation base." },
      { question: "What size is No Label on BevOry?", answer: "The remaining BevOry row is linked with a 330ml mead format." },
    ],
    finalVerdict: "No Label is a chilled honey-fermented drink for snack tables and curious beer drinkers.",
    metaTitle: "No Label Mead Guide | BevOry",
    metaDescription: "Explore No Label mead notes, chilled serves, food pairings and city prices on BevOry.",
  },
  noble: {
    description: "Noble on BevOry brings together premium bottles carrying the Noble name across wine, tequila and vodka. The clearest wine identity is Noble Vines 446 Chardonnay from Monterey, California.",
    story: "Noble Vines names its wines after vine selections, with 446 Chardonnay drawn from Chardonnay selection 4 and vineyard block 46. BevOry also carries Casa Noble tequila and Beluga Noble vodka, so shoppers should match the exact bottle to the drinking occasion.",
    tastingNotes: [
      { title: "Noble Vines Chardonnay", description: "Pineapple, white peach, pear, honeysuckle and creamy oak define the 446 Chardonnay style." },
      { title: "Premium Spirits", description: "Casa Noble brings agave character, while Beluga Noble sits in a cleaner vodka style." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Chill Chardonnay lightly; serve tequila neat or in citrus cocktails; serve vodka cold." },
      { subheading: "Food", description: "Pair Chardonnay with butter chicken or creamy pasta; pair tequila with tacos and vodka with smoked fish or kebabs." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["butter chicken", "creamy pasta", "fish tacos", "smoked fish", "seekh kebab"] }],
    whyChoose: "Noble is useful when comparing polished wine and premium spirits under a similar naming cue.",
    faqs: [
      { question: "Which Noble wine appears on BevOry?", answer: "BevOry carries Noble Vines 446 Chardonnay." },
      { question: "Is Noble one single producer?", answer: "No. BevOry's Noble results include separate labels such as Noble Vines, Casa Noble and Beluga Noble." },
    ],
    finalVerdict: "Noble is best used as a careful comparison point across Chardonnay, tequila and vodka bottles.",
    metaTitle: "Noble Wine And Spirits Guide | BevOry",
    metaDescription: "Explore Noble Vines Chardonnay, Casa Noble tequila, Beluga Noble vodka and city prices.",
  },
  noumin: {
    description: "Noumin is a Japanese white wine entry on BevOry through Noumin Dry by Coco Farm & Winery. The wine blends cool-climate white grapes from Japanese regions such as Hokkaido, Yamagata and Nagano.",
    story: "Coco Farm's 2021 Noumin Dry combines Muller-Thurgau, Kerner, Chardonnay and Sauvignon Blanc, with vineyard sources across northern and central Japan. The name means farmer, reflecting a practical everyday dry white rather than a trophy bottle.",
    tastingNotes: [
      { title: "Japanese Dry White", description: "Grapefruit, kabosu citrus, fresh herbs, mint and flinty mineral notes lead the aroma." },
      { title: "Clean Palate", description: "Crisp acidity, gentle fruit and citrus-peel bitterness carry a precise dry finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a white-wine glass, around 8 to 10 degrees Celsius." },
      { subheading: "Food", description: "Pair with sashimi, grilled fish, tempura, lemon chicken or paneer malai tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["sashimi", "grilled fish", "tempura", "lemon chicken", "paneer malai tikka"] }],
    whyChoose: "Noumin Dry is a distinctive Japanese white for drinkers who like crisp, herbal and mineral wines.",
    faqs: [
      { question: "Who makes Noumin Dry?", answer: "Noumin Dry is made by Coco Farm & Winery in Japan." },
      { question: "Which grapes are used in Noumin Dry?", answer: "The 2021 wine blends Muller-Thurgau, Kerner, Chardonnay and Sauvignon Blanc." },
    ],
    finalVerdict: "Noumin is a precise Japanese white wine for seafood, tempura and clean citrus-led drinking.",
    metaTitle: "Noumin Dry Wine Guide | BevOry",
    metaDescription: "Explore Noumin Dry Japanese white wine notes, Coco Farm context, pairings and city prices.",
  },
  "nvs-royal": {
    description: "Nvs Royal is an Indian whisky entry tied to Royal Envy Exclusive Premium Whisky from NV Group. BevOry lists it in a 750ml format under Made in India Whisky.",
    story: "NV Group describes Royal Envy as a blended Indian whisky made with matured Scotch and Indian grain spirits. The brand sits in India's semi-premium whisky space, designed for soda, ice and familiar whisky occasions.",
    tastingNotes: [
      { title: "Indian Blend", description: "Caramel, vanilla, dried fruit, light oak and baking spice lead the aroma." },
      { title: "Warm Finish", description: "The palate is smooth and sweetly spiced, with pepper and oak on the close." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over ice, with soda, or with a small splash of water." },
      { subheading: "Food", description: "Pair with tandoori chicken, mutton seekh, paneer tikka, roasted almonds or pepper fry." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "mutton seekh", "paneer tikka", "roasted almonds", "pepper fry"] }],
    whyChoose: "Nvs Royal is a polished Indian whisky option for classic soda serves and bold snacks.",
    faqs: [
      { question: "Who makes Nvs Royal Envy?", answer: "Royal Envy is part of NV Group's whisky portfolio." },
      { question: "How should Nvs Royal be served?", answer: "Serve it with ice, soda or water, depending on how light you want the drink." },
    ],
    finalVerdict: "Nvs Royal is a smooth Indian whisky for soda highballs, grilled food and relaxed evenings.",
    metaTitle: "Nvs Royal Whisky Guide | BevOry",
    metaDescription: "Explore Nvs Royal Envy whisky notes, serving ideas, food pairings and city prices.",
  },
};
