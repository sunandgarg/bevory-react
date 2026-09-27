import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_84 = [
  ["glacir", "Glacir", "India", "Vodka", "pending-glacir"],
  ["glen-garvie", "Glen Garvie", "Scotland", "Blended Scotch", "pending-glen-garvie"],
  ["glen-surge", "Glen Surge", "Scotland", "Blended Scotch", "pending-glen-surge"],
  ["glen-victory", "Glen Victory", "Scotland", "Blended Scotch", "pending-glen-victory"],
  ["glendog", "Glendog", "Scotland", "Blended Scotch", "pending-glendog"],
  ["glenfield", "Glenfield", "Scotland", "Blended Scotch", "pending-glenfield"],
  ["glenlee", "Glenlee", "Scotland", "Blended Scotch", "pending-glenlee"],
  ["glenlee-the", "The Glenlee", "Scotland", "Blended Scotch", "pending-glenlee-the"],
  ["glenmaster", "Glenmaster", "Scotland", "Single Malts", "pending-glenmaster"],
  ["glenreidh", "Glenreidh", "Scotland", "Blended Scotch", "pending-glenreidh"],
] as const;

export const BRAND_LOGOS_BATCH_84: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_84: Record<string, string[]> = {
  glacir: [
    "https://www.livcheers.com/hubli-dharwad/liquor/glacir-premium-vodka-700ml",
    "https://www.bevory.in/gurgaon/product/glacir-premium-vodka-064c63c",
  ],
  "glen-garvie": [
    "https://lacasadelacana.com/products/whisky-glen-garvie-0-7l",
    "https://www.spiritradar.com/whisky-db/glen-garvie-3yo-finest-scotch-whisky-40-percent-700ml/",
    "https://www.bevory.in/gurgaon/product/glen-garvie-blended-scotch-whisky-45383c4",
  ],
  "glen-surge": [
    "https://liquorsai.com/bangalore/liquor/glen-surge-blended-scotch-whisky",
    "https://www.bevory.in/gurgaon/product/glen-surge-blended-scotch-whisky-bc6c16e",
  ],
  "glen-victory": [
    "https://www.whiskybase.com/whiskies/whisky/103016/glen-victory-scotch-whisky",
    "https://www.bevory.in/gurgaon/product/glen-victory-blended-scotch-whisky-7e40510",
    "https://www.bevory.in/gurgaon/product/glen-victory-glen-victory-7e0e269",
  ],
  glendog: [
    "https://drinksbuff.com/spirits/glendog-blended-scotch-whisky/",
    "https://www.liquorvaultgoa.com/product/glendog-whisky-750ml/",
    "https://www.bevory.in/gurgaon/product/glendog-glendog-blended-scotch-whisky-a93be2e",
  ],
  glenfield: [
    "https://d2e1hu1ktur9ur.cloudfront.net/wp-content/uploads/2025/05/price-list-.pdf",
    "https://www.bevory.in/gurgaon/product/glenfield-glenfield-blended-scotch-whisky-2e334bd",
  ],
  glenlee: [
    "https://aceospirits.co.uk/product/the-glenlee/",
    "https://www.masterofmalt.com/whiskies/the-glenlee/the-glenlee-blended-whisky/",
    "https://www.bevory.in/gurgaon/brand/glenlee",
  ],
  "glenlee-the": [
    "https://aceospirits.co.uk/product/the-glenlee/",
    "https://www.masterofmalt.com/whiskies/the-glenlee/the-glenlee-blended-whisky/",
    "https://www.bevory.in/gurgaon/brand/glenlee-the",
  ],
  glenmaster: [
    "https://www.livcheers.com/delhi/liquor/glenmaster-classic-750ml",
    "https://www.livcheers.com/delhi/brand/glenmaster",
    "https://www.bevory.in/gurgaon/product/glenmaster-classic-66a3431",
  ],
  glenreidh: [
    "https://beveragetradenetwork.com/en/brands/whisky-5/united-kingdom-230/glenreidh-reserve--10708.htm",
    "https://www.bevory.in/gurgaon/product/glenreidh-glenreidh-reserve-blended-scotch-whisky-53524aa",
  ],
};

export const BRAND_CONTENT_BATCH_84: Record<string, BrandPublicContent> = {
  glacir: {
    description: "Glacir is a vodka label listed through Glacir Premium Vodka in 700 ml format. It sits in the clean, neutral vodka lane for chilled shots, soda mixers and savoury cocktails.",
    story: "Glacir's name leans into cold-serve vodka cues: clear liquid, icy texture and simple cocktail utility. The 700 ml premium vodka listing makes it a practical bottle for home bars and group pours.",
    tastingNotes: [
      { title: "Clean Core", description: "Neutral grain, light citrus and a cool mineral feel shape the palate." },
      { title: "Mixer Finish", description: "A crisp finish keeps it easy with soda, tonic, cranberry or tomato-based serves." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled, with soda and lime, tonic, cranberry juice or in a Bloody Mary." },
      { subheading: "Food", description: "Pair with tandoori prawns, chilli chicken, fries, sushi rolls or cucumber salad." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "chilli chicken", "fries", "sushi rolls", "cucumber salad"] }],
    whyChoose: "Glacir is a straightforward premium vodka for cold serves and simple party cocktails.",
    faqs: [
      { question: "What is Glacir Premium Vodka?", answer: "Glacir is listed as a premium vodka in 700 ml format." },
      { question: "Which cocktails suit Glacir?", answer: "Vodka soda, cranberry vodka, tonic highballs and Bloody Mary-style serves suit its clean profile." },
    ],
    finalVerdict: "Glacir is a practical vodka pick for chilled pours, mixers and snack-friendly cocktails.",
    metaTitle: "Glacir Vodka Guide | BevOry",
    metaDescription: "Explore Glacir Premium Vodka notes, chilled serves, cocktail ideas, food pairings and city prices.",
  },
  "glen-garvie": {
    description: "Glen Garvie is a blended Scotch whisky listed on BevOry in 700 ml format. The whisky sits in the approachable Scotch lane, where malt sweetness, grain whisky smoothness and light oak are the core cues.",
    story: "Glen Garvie appears in international retail and whisky listings as a young blended Scotch whisky. Its style is made for neat trial pours, ice, ginger ale and soda highballs rather than heavy peat or cask-strength intensity.",
    tastingNotes: [
      { title: "Soft Scotch", description: "Honey, malt biscuit, pear and vanilla create a mellow first sip." },
      { title: "Light Oak", description: "Toasted grain, gentle spice and a short clean finish keep it easy to mix." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with ice, soda, water or ginger ale in a tall glass." },
      { subheading: "Food", description: "Pair with chicken tikka, cheese toast, salted almonds, fish fingers or paneer pakora." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "cheese toast", "salted almonds", "fish fingers", "paneer pakora"] }],
    whyChoose: "Glen Garvie is a friendly blended Scotch for highballs and casual whisky drinking.",
    faqs: [
      { question: "What type of whisky is Glen Garvie?", answer: "Glen Garvie is listed as a blended Scotch whisky." },
      { question: "How should Glen Garvie be served?", answer: "Serve it over ice, with soda, with water or with ginger ale." },
    ],
    finalVerdict: "Glen Garvie is best for drinkers who want a light, mixer-friendly Scotch profile.",
    metaTitle: "Glen Garvie Scotch Guide | BevOry",
    metaDescription: "Explore Glen Garvie Blended Scotch notes, highball serves, food pairings and city prices.",
  },
  "glen-surge": {
    description: "Glen Surge is a blended Scotch whisky listed through a 1 litre bottle format. It is positioned as a smooth, approachable blend for larger-format buying and casual whisky serves.",
    story: "Glen Surge belongs to the value-driven Scotch aisle where reliable texture and easy mixing matter most. The 1 litre listing makes the bottle useful for gatherings, highballs and shared food spreads.",
    tastingNotes: [
      { title: "Malt And Grain", description: "Cereal sweetness, honey, apple and soft vanilla give the blend its easy centre." },
      { title: "Gentle Spice", description: "Light oak, pepper and toasted grain carry into a mild finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, water, ice or ginger ale." },
      { subheading: "Food", description: "Pair with mutton seekh, masala peanuts, chicken wings, grilled paneer or chips." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "masala peanuts", "chicken wings", "grilled paneer", "chips"] }],
    whyChoose: "Glen Surge is a practical large-format Scotch page for easy mixed serves.",
    faqs: [
      { question: "What is Glen Surge?", answer: "Glen Surge is listed as a blended Scotch whisky in 1 litre format." },
      { question: "What mixer suits Glen Surge?", answer: "Soda, water, ice and ginger ale suit its smooth blended profile." },
    ],
    finalVerdict: "Glen Surge works well for group-friendly Scotch highballs and spicy snacks.",
    metaTitle: "Glen Surge Scotch Guide | BevOry",
    metaDescription: "Explore Glen Surge Blended Scotch notes, 1 litre format, serving ideas and city prices.",
  },
  "glen-victory": {
    description: "Glen Victory is a Scotch whisky label listed through blended Scotch and Glen Victory bottle routes. The page centres on approachable Scotch character rather than a single-malt distillery story.",
    story: "Glen Victory appears in whisky-rating and retail references as a Scotch whisky label. Its Indian listings make it relevant for shoppers comparing 700 ml and 750 ml Scotch-style bottles by city.",
    tastingNotes: [
      { title: "Classic Blend", description: "Malt biscuit, honey, apple and vanilla give the whisky a soft profile." },
      { title: "Clean Finish", description: "Light oak, cereal and gentle pepper keep the finish simple and dry." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat for a first pour, then with ice, soda or water." },
      { subheading: "Food", description: "Pair with tandoori chicken, fried fish, paneer tikka, salted nuts or mushroom toast." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "fried fish", "paneer tikka", "salted nuts", "mushroom toast"] }],
    whyChoose: "Glen Victory is a clean blended-Scotch option for simple pours and local comparison.",
    faqs: [
      { question: "What type of whisky is Glen Victory?", answer: "Glen Victory is listed as a Scotch whisky with blended Scotch routes on BevOry." },
      { question: "Is Glen Victory heavily smoky?", answer: "The listing points to an approachable blended profile, not a heavy peat-led style." },
    ],
    finalVerdict: "Glen Victory is a straightforward Scotch page for mixed serves, ice pours and snack pairings.",
    metaTitle: "Glen Victory Scotch Guide | BevOry",
    metaDescription: "Explore Glen Victory Scotch whisky notes, serving ideas, food pairings and city prices.",
  },
  glendog: {
    description: "Glendog is a blended Scotch whisky listed in 750 ml format. The bottle sits in the balanced Scotch lane, built around malt, grain whisky, soft oak and easy drinkability.",
    story: "Glendog appears in Indian pricing and retail references as a blended Scotch whisky. Its role is practical: a Scotch bottle for drinkers moving beyond local whisky into lighter imported blends.",
    tastingNotes: [
      { title: "Balanced Blend", description: "Honey, malt, apple, vanilla and caramel give the whisky a rounded opening." },
      { title: "Mild Oak", description: "Toast, pepper and cereal notes create a smooth, snack-friendly finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with ice, water, soda or ginger ale." },
      { subheading: "Food", description: "Pair with kebab rolls, chicken tikka, cheese pakora, roasted cashews or barbecue wings." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["kebab rolls", "chicken tikka", "cheese pakora", "roasted cashews", "barbecue wings"] }],
    whyChoose: "Glendog is a smooth blended Scotch page for easy highballs and richer snacks.",
    faqs: [
      { question: "What is Glendog?", answer: "Glendog is listed as a blended Scotch whisky in 750 ml format." },
      { question: "How should Glendog be served?", answer: "Serve it over ice, with water, soda or ginger ale." },
    ],
    finalVerdict: "Glendog is a relaxed Scotch choice for mixed drinks and casual food-led evenings.",
    metaTitle: "Glendog Scotch Guide | BevOry",
    metaDescription: "Explore Glendog Blended Scotch notes, serving ideas, Indian pairings and city prices.",
  },
  glenfield: {
    description: "Glenfield is a blended Scotch whisky listed on BevOry in 700 ml format. Duty-free price references also identify Glenfield as a blended Scotch whisky.",
    story: "Glenfield sits in the export-style blended Scotch space: accessible, oak-touched and made for consistent serves. The page is useful for shoppers comparing lesser-known Scotch labels by bottle size and city.",
    tastingNotes: [
      { title: "Mellow Malt", description: "Light malt, honey, pear and vanilla create a soft profile." },
      { title: "Dry Finish", description: "Cereal, oak spice and a clean finish make it mixer-friendly." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, water, ice or in a simple whisky highball." },
      { subheading: "Food", description: "Pair with fish tikka, paneer rolls, chicken popcorn, salted almonds or cheese toast." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fish tikka", "paneer rolls", "chicken popcorn", "salted almonds", "cheese toast"] }],
    whyChoose: "Glenfield is for drinkers who want an uncomplicated blended Scotch for highballs.",
    faqs: [
      { question: "What type of whisky is Glenfield?", answer: "Glenfield is listed as a blended Scotch whisky." },
      { question: "What food pairs with Glenfield?", answer: "Lightly spiced snacks, fish, paneer rolls and salted nuts pair naturally." },
    ],
    finalVerdict: "Glenfield is a clean, easy Scotch choice for casual mixed serves.",
    metaTitle: "Glenfield Scotch Guide | BevOry",
    metaDescription: "Explore Glenfield Blended Scotch notes, highball serves, food pairings and city prices.",
  },
  glenlee: {
    description: "Glenlee is a blended Scotch whisky page tied to The Glenlee, a 70 cl Scotch blend. The whisky is matured for three years in a mix of American oak and casks from Spain.",
    story: "The Glenlee comes from Aceo Spirits, a Scottish spirits company known for Scotch whisky brands and independent bottling work. Its house style is approachable, with oak sweetness and enough body for ginger ale or soda serves.",
    tastingNotes: [
      { title: "Oak Sweetness", description: "Honey, vanilla, dried fruit and malt biscuit come through first." },
      { title: "Spanish Cask Touch", description: "Raisin, gentle spice and soft oak add roundness to the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, over ice, or long with ginger ale in a tall glass." },
      { subheading: "Food", description: "Pair with tandoori chicken, pork ribs, mushroom tikka, fruit cake or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "pork ribs", "mushroom tikka", "fruit cake", "aged cheddar"] }],
    whyChoose: "Glenlee is a Scotch blend with useful cask detail and a naturally highball-friendly profile.",
    faqs: [
      { question: "Who makes The Glenlee?", answer: "The Glenlee is associated with Aceo Spirits in Scotland." },
      { question: "How is Glenlee whisky matured?", answer: "The Glenlee blend is matured for three years in American oak and casks from Spain." },
    ],
    finalVerdict: "Glenlee is a polished blended Scotch for easy sipping, ginger ale and oak-sweet food pairings.",
    metaTitle: "Glenlee Scotch Guide | BevOry",
    metaDescription: "Explore Glenlee Blended Scotch notes, cask maturation, serving ideas and city prices.",
  },
  "glenlee-the": {
    description: "The Glenlee is a blended Scotch whisky from Aceo Spirits, listed on BevOry in 700 ml format. It is matured for three years in American oak and Spanish casks, giving it a smooth, lightly sherried style.",
    story: "Aceo Spirits presents The Glenlee as an accessible Scotch blend for everyday drinking and long mixed serves. The brand's suggested ginger ale serve fits its honeyed, fruit-led whisky profile.",
    tastingNotes: [
      { title: "Honeyed Blend", description: "Malt, honey, orchard fruit and vanilla make the whisky soft and approachable." },
      { title: "Cask Spice", description: "Raisin, baking spice and mellow oak add depth without heavy smoke." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, over ice, with soda, or with ginger beer or ginger ale." },
      { subheading: "Food", description: "Pair with chicken tikka, lamb sliders, smoked paneer, apple tart or roasted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "lamb sliders", "smoked paneer", "apple tart", "roasted almonds"] }],
    whyChoose: "The Glenlee offers clear Scotch provenance and an easy, ginger-ale-friendly profile.",
    faqs: [
      { question: "What is The Glenlee?", answer: "The Glenlee is a blended Scotch whisky associated with Aceo Spirits." },
      { question: "What mixer suits The Glenlee?", answer: "Ginger ale, ginger beer, soda and water suit its honeyed Scotch style." },
    ],
    finalVerdict: "The Glenlee is a smooth blended Scotch for approachable sipping and relaxed long drinks.",
    metaTitle: "The Glenlee Scotch Guide | BevOry",
    metaDescription: "Explore The Glenlee Blended Scotch notes, oak cask style, mixer ideas and city prices.",
  },
  glenmaster: {
    description: "Glenmaster is listed through Glenmaster Classic, a Scotch whisky bottle in 750 ml format. Public retail copy describes it as a matured malt whisky style built around honey, vanilla and spice.",
    story: "Glenmaster Classic sits in the Scotch category for drinkers looking for a richer step up from everyday blends. The bottle is best read as a smooth classic Scotch serve for neat pours, ice and highballs.",
    tastingNotes: [
      { title: "Classic Malt", description: "Honey, vanilla, malted barley and citrus give the whisky a rounded opening." },
      { title: "Oak Spice", description: "Gentle wood, spice and a lingering warm finish add structure." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, with a splash of water, over ice or as a soda highball." },
      { subheading: "Food", description: "Pair with smoked chicken, paneer tikka, grilled prawns, salted almonds or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked chicken", "paneer tikka", "grilled prawns", "salted almonds", "dark chocolate"] }],
    whyChoose: "Glenmaster is a Scotch page for drinkers who prefer honeyed malt and mellow oak.",
    faqs: [
      { question: "What is Glenmaster Classic?", answer: "Glenmaster Classic is listed as a Scotch whisky in 750 ml format." },
      { question: "How should Glenmaster be served?", answer: "Serve it neat, with water, on ice or with soda." },
    ],
    finalVerdict: "Glenmaster is a smooth Scotch choice for malt-led drinking and savoury snacks.",
    metaTitle: "Glenmaster Scotch Guide | BevOry",
    metaDescription: "Explore Glenmaster Classic notes, Scotch style, serving ideas, food pairings and city prices.",
  },
  glenreidh: {
    description: "Glenreidh is a blended Scotch whisky label listed through Glenreidh Reserve. Beverage trade references describe it as a blend designed for full-bodied flavour and cocktail versatility.",
    story: "Glenreidh Reserve is positioned as a premium malt-and-grain Scotch blend for both sipping and mixed drinks. Its Indian listing gives shoppers a 750 ml Reserve bottle to compare by city.",
    tastingNotes: [
      { title: "Full-Bodied Blend", description: "Malt sweetness, baked apple, vanilla and caramel build a rounded profile." },
      { title: "Cocktail Finish", description: "Oak spice, cereal and a smooth finish make it flexible in long drinks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, on ice, with soda or in a whisky sour-style cocktail." },
      { subheading: "Food", description: "Pair with galouti kebabs, roast chicken, cheese toast, masala peanuts or apple pie." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "roast chicken", "cheese toast", "masala peanuts", "apple pie"] }],
    whyChoose: "Glenreidh is a blended Scotch for drinkers who want both sipping weight and cocktail flexibility.",
    faqs: [
      { question: "What is Glenreidh Reserve?", answer: "Glenreidh Reserve is listed as a blended Scotch whisky in 750 ml format." },
      { question: "Can Glenreidh be used in cocktails?", answer: "Yes. Its smooth blended profile works in highballs and whisky sour-style drinks." },
    ],
    finalVerdict: "Glenreidh is a versatile blended Scotch for neat pours, highballs and richer Indian snacks.",
    metaTitle: "Glenreidh Scotch Guide | BevOry",
    metaDescription: "Explore Glenreidh Reserve Blended Scotch notes, cocktail serves, pairings and city prices.",
  },
};
