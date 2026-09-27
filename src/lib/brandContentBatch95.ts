import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_95 = [
  ["kingsmill", "Kingsmill", "Scotland", "Gin", "pending-kingsmill"],
  ["knight-rider", "Knight Rider", "India", "Vodka", "pending-knight-rider"],
  ["knockout", "Knockout", "India", "Beer", "pending-knockout"],
  ["kohinoor", "Kohinoor", "India", "Rum", "pending-kohinoor"],
  ["kolt", "Kolt", "India", "Beer", "pending-kolt"],
  ["konigs", "Konigs", "India", "Beer", "pending-konigs"],
  ["kotsberg", "Kotsberg", "India", "Beer", "pending-kotsberg"],
  ["kremlin", "Kremlin", "Russia", "Vodka", "pending-kremlin"],
  ["kruro", "Kruro", "India", "Vodka", "pending-kruro"],
  ["l74", "L74", "India", "Cider", "pending-l74"],
] as const;

export const BRAND_LOGOS_BATCH_95: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_95: Record<string, string[]> = {
  kingsmill: [
    "https://www.livcheers.com/bangalore/liquor/kingsmill-pink-gin-1000ml",
    "https://www.bevory.in/hubli-dharwad/product/kingsmill-pink-gin-59bc8c5",
  ],
  "knight-rider": [
    "https://whiskeyprice.in/hyderabad/simple/knight-rider-ultra-premium-lemon-vodka",
    "https://delhiexcise.gov.in/pdf/IL_PriceList.pdf",
    "https://www.bevory.in/kolkata/product/knight-rider-ultra-premium-classic-vodka-13bbb0f",
  ],
  knockout: [
    "https://www.tapintoyourbeer.com/beer/en/knock-out",
    "https://www.quickcompany.in/trademarks/2116086-knock-out-heavy-weight-punch-strong-beer",
    "https://www.bevory.in/mysore/product/knockout-high-punch-strong-beer-fac4848",
  ],
  kohinoor: [
    "https://kohinoorindianrum.com/",
    "https://nsearchives.nseindia.com/annual_reports/AR_24512_RADICO_2023_2024_15072024205438.pdf",
    "https://www.bevory.in/mumbai/product/kohinoor-the-kohinoor-reserve-indian-dark-rum-bd3dd2b",
  ],
  kolt: [
    "https://kals.co.in/",
    "https://www.quickcompany.in/trademarks/2321554-kolt-premium-strong-beer",
    "https://www.bevory.in/lucknow/product/kolt-classic-superior-strong-beer-d71bdc4",
  ],
  konigs: [
    "https://montecruz.in/search",
    "https://www.bevory.in/goa/product/konigs-premium-pilsner-beer-1067cd0",
  ],
  kotsberg: [
    "https://www.brewer-world.com/when-quality-is-top-notch-palate-becomes-inconsequential-devans-modern-breweries/",
    "https://results.brusselsbeerchallenge.com/en/2022/26426-kotsberg-finest-pils-beer",
    "https://www.bevory.in/gurgaon/product/kotsberg-premium-pils-beer-87ab9fc",
  ],
  kremlin: [
    "https://twofriends.in/pdf/kremlin-award-vodka-classic-information-sheet.pdf",
    "https://www.bevory.in/mumbai/product/kremlin-award-classic-vodka-589164a",
    "https://www.bevory.in/faridabad/product/kremlin-award-grand-premium-vodka-31ce3a2",
  ],
  kruro: [
    "https://liquorsai.com/bangalore/liquor/kruro-vodka",
    "https://www.bevory.in/faridabad/product/kruro-vodka-54f163b",
  ],
  l74: [
    "https://l74.life/",
    "https://www.business-standard.com/content/press-releases-ani/l74-cider-bags-india-s-first-ever-gold-at-international-cider-challenge-london-uk-124092701240_1.html",
    "https://www.bevory.in/goa/product/l74-apple-cider-399b8f2",
  ],
};

export const BRAND_CONTENT_BATCH_95: Record<string, BrandPublicContent> = {
  kingsmill: {
    description: "Kingsmill is a Scottish pink gin label tracked in India through Kingsmill Pink Gin. The 1000 ml expression is a flavoured gin built around juniper, citrus peel, pink peppercorns, elderflower, rhubarb and raspberries.",
    story: "Kingsmill sits in the modern pink-gin shelf, where fruit and botanicals soften the classic dry gin frame. Its Scottish identity and berry-led profile make it useful for drinkers comparing fruitier gin-and-tonic options.",
    tastingNotes: [
      { title: "Pink Gin Fruit", description: "Raspberry, strawberry, rhubarb and citrus peel sit over a juniper-led gin base." },
      { title: "Soft Spice", description: "Pink peppercorn and elderflower add a light floral spice without making the drink heavy." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with chilled tonic, soda or lime cordial over plenty of ice in a Copa glass." },
      { subheading: "Food", description: "Pair with tandoori prawns, goat cheese toast, berry salad, lemon chicken or chilli paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "goat cheese toast", "berry salad", "lemon chicken", "chilli paneer"] }],
    whyChoose: "Kingsmill Pink Gin is a fruit-forward gin for drinkers who want berry freshness with a proper juniper spine.",
    faqs: [
      { question: "What botanicals are associated with Kingsmill Pink Gin?", answer: "Kingsmill Pink Gin is associated with juniper, lemon peel, orange peel, pink peppercorns, elderflower, rhubarb and raspberries." },
      { question: "What mixer suits Kingsmill Pink Gin?", answer: "Chilled tonic, soda and lime cordial work well with its berry-citrus profile." },
    ],
    finalVerdict: "Kingsmill is a bright pink gin choice for tonic serves, citrus mixers and spicy seafood snacks.",
    metaTitle: "Kingsmill Pink Gin Guide | BevOry",
    metaDescription: "Explore Kingsmill Pink Gin botanicals, tonic serves, berry notes, food pairings and city prices on BevOry.",
  },
  "knight-rider": {
    description: "Knight Rider is an Indian vodka brand represented by Ultra Premium Classic Vodka and flavoured orange vodka variants. Public excise records also show Knight Rider Premium Vodka in Indian retail lists.",
    story: "Knight Rider belongs to India's flavoured and classic vodka shelf, where citrus mixers, chilled shots and party highballs drive most serves. The brand is best compared by variant because classic, orange and lemon styles drink differently.",
    tastingNotes: [
      { title: "Classic Vodka", description: "Clean neutral spirit, light grain sweetness and a brisk finish suit chilled mixing." },
      { title: "Citrus Variants", description: "Orange and lemon expressions bring sharper peel, fruit sweetness and a brighter mixer profile." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled with soda and lime, orange juice, cranberry juice or tonic over ice." },
      { subheading: "Food", description: "Pair with peri-peri fries, chilli chicken, paneer tikka, lemon prawns or fruit chaat." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["peri-peri fries", "chilli chicken", "paneer tikka", "lemon prawns", "fruit chaat"] }],
    whyChoose: "Knight Rider is a flexible Indian vodka pick for clean mixers and citrus-led party drinks.",
    faqs: [
      { question: "What Knight Rider variants are tracked?", answer: "BevOry tracks Knight Rider Classic Vodka and orange vodka variants in 750 ml formats." },
      { question: "How should Knight Rider vodka be served?", answer: "Serve it chilled with soda, tonic, cranberry juice, orange juice or lime." },
    ],
    finalVerdict: "Knight Rider is an easy Indian vodka choice for chilled serves, citrus mixers and spicy party food.",
    metaTitle: "Knight Rider Vodka Guide | BevOry",
    metaDescription: "Explore Knight Rider vodka notes, citrus mixers, food pairings and city prices on BevOry.",
  },
  knockout: {
    description: "Knockout is an Indian strong beer brand associated with Anheuser-Busch InBev India. BevOry tracks Knockout High Punch Strong Beer in a 650 ml format.",
    story: "Knockout built its identity around regional strong beer drinking, with punchy branding and a heavier malt profile. Trademark records for Knock Out Heavy Weight Punch Strong Beer place the label in the beer class and connect it with AB InBev India.",
    tastingNotes: [
      { title: "Strong Lager Malt", description: "Toasted grain, malt sweetness and a fuller body give Knockout its strong-beer weight." },
      { title: "Firm Finish", description: "A mild hop bite and higher perceived warmth suit spicy, salty food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve very cold in a tall beer glass, pouring gently to control foam." },
      { subheading: "Food", description: "Pair with chicken 65, fish fry, masala peanuts, chilli paneer or tandoori wings." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken 65", "fish fry", "masala peanuts", "chilli paneer", "tandoori wings"] }],
    whyChoose: "Knockout is for strong-beer drinkers who want a colder, fuller pour with spicy snacks.",
    faqs: [
      { question: "What type of beer is Knockout?", answer: "Knockout is an Indian strong beer tracked by BevOry through Knockout High Punch Strong Beer." },
      { question: "Who is associated with Knockout beer?", answer: "Trademark records connect Knock Out strong beer with Anheuser-Busch InBev India." },
    ],
    finalVerdict: "Knockout is a familiar strong beer option for cold serves, fried starters and bold Indian spice.",
    metaTitle: "Knockout Beer Guide | BevOry",
    metaDescription: "Explore Knockout strong beer notes, chilled serving tips, spicy pairings and city prices on BevOry.",
  },
  kohinoor: {
    description: "Kohinoor is an Indian dark rum brand from Radico Khaitan, led by The Kohinoor Reserve Indian Dark Rum. The brand is positioned as a luxury rum with a diamond-inspired bottle and an Indian heritage story.",
    story: "Radico Khaitan introduced The Kohinoor Reserve as a small-batch Indian dark rum made with fresh cane juice spirit during the North Indian winter season. It is aimed at premium rum drinkers in India and global travel retail.",
    tastingNotes: [
      { title: "Dark Rum Depth", description: "Molasses, cane sweetness, caramel, dried fruit and oak spice shape the rum's dark profile." },
      { title: "Polished Finish", description: "Warm spice, cocoa and toasted sugar carry into a smooth, slow finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a rocks glass, over one large cube, or with a restrained splash of ginger ale." },
      { subheading: "Food", description: "Pair with pork vindaloo, galouti kebabs, dark chocolate, grilled pineapple or rum cake." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pork vindaloo", "galouti kebabs", "dark chocolate", "grilled pineapple", "rum cake"] }],
    whyChoose: "Kohinoor is a premium Indian dark rum for drinkers who want cane richness, oak and polished packaging.",
    faqs: [
      { question: "Who makes Kohinoor rum?", answer: "The Kohinoor Reserve Indian Dark Rum is from Radico Khaitan." },
      { question: "How should Kohinoor dark rum be served?", answer: "Serve it neat, over one large cube, or with a small splash of ginger ale." },
    ],
    finalVerdict: "Kohinoor is a polished Indian dark rum for slow sipping, rich food and after-dinner pours.",
    metaTitle: "Kohinoor Rum Guide | BevOry",
    metaDescription: "Explore Kohinoor Indian dark rum notes, serving ideas, rich food pairings and city prices on BevOry.",
  },
  kolt: {
    description: "Kolt is an Indian beer brand from KALS Breweries Private Limited in Tamil Nadu. BevOry tracks Kolt Classic Superior Strong Beer in a 650 ml format.",
    story: "KALS Group lists Kolt among its beer brands, alongside a wider Indian beverage portfolio that includes brandy, rum and beer. Trademark records for Kolt Premium Strong Beer show KALS Breweries as proprietor and place the mark in the beer class.",
    tastingNotes: [
      { title: "Strong Beer Malt", description: "Caramel malt, toasted grain and a full body give Kolt its classic strong-beer frame." },
      { title: "Bitter-Sweet Close", description: "A touch of hop bitterness balances the malt sweetness and keeps the finish crisp." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve well chilled in a clean beer glass, with the bottle cold from start to finish." },
      { subheading: "Food", description: "Pair with chicken lollipop, mutton pepper fry, masala fries, paneer 65 or salted cashews." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken lollipop", "mutton pepper fry", "masala fries", "paneer 65", "salted cashews"] }],
    whyChoose: "Kolt is a Tamil Nadu-linked strong beer for drinkers who like malt weight and cold, spicy snacks.",
    faqs: [
      { question: "Who makes Kolt beer?", answer: "Kolt is associated with KALS Breweries Private Limited." },
      { question: "What Kolt beer is tracked on BevOry?", answer: "BevOry tracks Kolt Classic Superior Strong Beer, commonly seen in a 650 ml format." },
    ],
    finalVerdict: "Kolt is a strong Indian beer for chilled pours, fried starters and fuller malt flavour.",
    metaTitle: "Kolt Beer Guide | BevOry",
    metaDescription: "Explore Kolt strong beer notes, serving tips, Indian snack pairings and city prices on BevOry.",
  },
  konigs: {
    description: "Konigs is a Goa-linked premium pilsner beer tracked by BevOry through Konigs Premium Pilsner Beer. The brand appears in a 325 ml bottle format in Goa.",
    story: "Konigs sits in Goa's local beer scene, where compact pilsner bottles are part of beach bars, shacks and easy seafood meals. Monte Cruz Beverages lists Konigs in its beer portfolio, giving the label a clear Goa beverage context.",
    tastingNotes: [
      { title: "Pilsner Snap", description: "Pale malt, light grain sweetness and clean carbonation give Konigs a crisp lager feel." },
      { title: "Coastal Finish", description: "A dry, refreshing close suits hot weather, seafood and salty snacks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve cold in a slim pilsner glass or straight from a chilled bottle." },
      { subheading: "Food", description: "Pair with Goan fish fry, recheado prawns, calamari, peri-peri fries or cafreal chicken." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["Goan fish fry", "recheado prawns", "calamari", "peri-peri fries", "cafreal chicken"] }],
    whyChoose: "Konigs is a crisp Goa pilsner for seafood, beach-weather drinking and lighter beer sessions.",
    faqs: [
      { question: "What is Konigs beer?", answer: "Konigs is a premium pilsner beer tracked in Goa in a 325 ml bottle format." },
      { question: "What food suits Konigs pilsner?", answer: "Goan seafood, fried prawns, calamari and peri-peri fries suit its crisp lager profile." },
    ],
    finalVerdict: "Konigs is a clean Goa pilsner for chilled bottles, seafood plates and relaxed coastal meals.",
    metaTitle: "Konigs Pilsner Guide | BevOry",
    metaDescription: "Explore Konigs premium pilsner notes, Goa seafood pairings, serving tips and city prices on BevOry.",
  },
  kotsberg: {
    description: "Kotsberg is an Indian pilsner beer from DeVANS Modern Breweries. The brand is linked to the company's Kotputli brewery in Rajasthan and appears on BevOry as Kotsberg Premium Pils Beer.",
    story: "DeVANS has described the Kotsberg name as a nod to Kotputli and the German word for mountain, tied to a hillock near the brewery. Kotsberg Finest Pils Beer also appears in Brussels Beer Challenge records under DeVANS Modern Breweries.",
    tastingNotes: [
      { title: "Pilsner Malt", description: "Pale malt, grain sweetness and a clean golden-lager profile define the core style." },
      { title: "Crisp Bitter Edge", description: "A light hop bitterness and dry finish keep the beer refreshing with salty food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve cold in a tall pilsner glass, letting the beer form a small white head." },
      { subheading: "Food", description: "Pair with tandoori fish, chilli potato, chicken tikka, nachos or fried prawns." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "chilli potato", "chicken tikka", "nachos", "fried prawns"] }],
    whyChoose: "Kotsberg is a crisp Indian pilsner with a clear DeVANS brewing lineage and food-friendly bite.",
    faqs: [
      { question: "Who makes Kotsberg beer?", answer: "Kotsberg is made by DeVANS Modern Breweries." },
      { question: "What style is Kotsberg Premium Pils?", answer: "It is a pilsner-style beer with pale malt, clean carbonation and a crisp finish." },
    ],
    finalVerdict: "Kotsberg is a refreshing Indian pilsner for chilled pours, seafood and spicy starters.",
    metaTitle: "Kotsberg Pilsner Guide | BevOry",
    metaDescription: "Explore Kotsberg pilsner notes, DeVANS context, food pairings and city prices on BevOry.",
  },
  kremlin: {
    description: "Kremlin is a Russian vodka brand tracked in India through Kremlin Award Classic Vodka and Grand Premium Vodka. BevOry records show 700 ml formats for both expressions.",
    story: "Kremlin Award sits in the premium vodka lane, where neutral spirit clarity, cold service and cocktail flexibility matter most. The Classic and Grand Premium labels give drinkers two nearby options to compare by smoothness and mixer use.",
    tastingNotes: [
      { title: "Classic Vodka", description: "Clean grain spirit, light mineral texture and a crisp finish suit chilled drinking." },
      { title: "Premium Pour", description: "The Grand Premium expression leans smoother, with softer heat and a rounder mid-palate." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve freezer-cold in small glasses, or mix with soda, tonic, cranberry juice or lime." },
      { subheading: "Food", description: "Pair with smoked salmon, tandoori prawns, potato wedges, pickled cucumber or chilli paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["smoked salmon", "tandoori prawns", "potato wedges", "pickled cucumber", "chilli paneer"] }],
    whyChoose: "Kremlin is a cold-service vodka option for clean sipping, highballs and sharp citrus cocktails.",
    faqs: [
      { question: "What Kremlin vodka expressions are tracked?", answer: "BevOry tracks Kremlin Award Classic Vodka and Kremlin Award Grand Premium Vodka." },
      { question: "How should Kremlin vodka be served?", answer: "Serve it freezer-cold, or mix with soda, tonic, lime or cranberry juice." },
    ],
    finalVerdict: "Kremlin is a polished vodka pick for cold shots, crisp highballs and seafood snacks.",
    metaTitle: "Kremlin Vodka Guide | BevOry",
    metaDescription: "Explore Kremlin Award vodka notes, chilled serves, cocktail mixers and city prices on BevOry.",
  },
  kruro: {
    description: "Kruro is an Indian vodka label tracked by BevOry through Kruro Vodka in a 750 ml format. The brand sits in the clean, neutral vodka shelf for chilled mixers and uncomplicated party serves.",
    story: "Kruro is best approached as a straightforward vodka brand rather than a heavily flavoured spirit. Its value is in cold service, soda-led long drinks and fruit-juice mixers that keep the profile crisp.",
    tastingNotes: [
      { title: "Neutral Base", description: "Clean spirit, light grain sweetness and a crisp finish define the vodka's main profile." },
      { title: "Mixer Ready", description: "The flavour stays restrained enough for citrus, soda, tonic and juice-based drinks." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled with soda and lime, tonic, orange juice or cranberry juice over ice." },
      { subheading: "Food", description: "Pair with chilli prawns, peri-peri fries, lemon chicken, paneer chilli or salted makhana." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chilli prawns", "peri-peri fries", "lemon chicken", "paneer chilli", "salted makhana"] }],
    whyChoose: "Kruro is a simple Indian vodka for clean mixers, cold pours and quick highballs.",
    faqs: [
      { question: "What is Kruro Vodka?", answer: "Kruro Vodka is an Indian vodka tracked by BevOry in a 750 ml bottle format." },
      { question: "What should I mix with Kruro?", answer: "Soda, lime, tonic, orange juice and cranberry juice all suit its neutral vodka style." },
    ],
    finalVerdict: "Kruro is a no-fuss vodka for chilled mixers, citrus serves and casual party food.",
    metaTitle: "Kruro Vodka Guide | BevOry",
    metaDescription: "Explore Kruro Vodka notes, cold mixers, Indian snack pairings and city prices on BevOry.",
  },
  l74: {
    description: "L74 is an Indian craft cider brand by Wild Harvest Brewing, also presented through Prohibition Brewing Co. Its range includes apple, citrus and coffee ciders made from fruit with no added sugar.",
    story: "The L74 name comes from the longitude link between Goa and Nashik, two places tied to the founders' cider journey. The brand won recognition at the International Cider Challenge 2024, including medals for coffee, apple and citrus cider variants.",
    tastingNotes: [
      { title: "Apple Cider", description: "Fresh apple, gentle acidity, dry fruit sweetness and lively carbonation shape the core cider profile." },
      { title: "Flavoured Ciders", description: "Citrus brings bright peel and tang, while coffee adds roast, bittersweet depth and dessert-like lift." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve chilled in a stemmed glass or cider glass, letting the carbonation stay lively." },
      { subheading: "Food", description: "Pair with pork vindaloo, Goan fish fry, apple salad, roast chicken or caramel pudding." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pork vindaloo", "Goan fish fry", "apple salad", "roast chicken", "caramel pudding"] }],
    whyChoose: "L74 is a rare Indian craft cider choice for drinkers who want fruit, fizz and a dry finish.",
    faqs: [
      { question: "Who makes L74 cider?", answer: "L74 Craft Ciders are produced by Wild Harvest Brewing, with Prohibition Brewing Co. tied to the cider range." },
      { question: "What L74 cider variants are known?", answer: "The range includes apple, citrus and coffee cider styles." },
    ],
    finalVerdict: "L74 is a fresh Indian cider option for chilled pours, Goan food and lighter fruit-led drinking.",
    metaTitle: "L74 Cider Guide | BevOry",
    metaDescription: "Explore L74 craft cider notes, apple and citrus styles, food pairings and city prices on BevOry.",
  },
};
