import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_113 = [
  ["suntory-toki", "Suntory Toki", "Japan", "Whisky", "brand-expansion-suntory-toki"],
  ["hakushu", "Hakushu", "Japan", "Whisky", "brand-expansion-hakushu"],
  ["ao", "Ao", "Japan", "Whisky", "brand-expansion-ao"],
  ["kakubin", "Kakubin", "Japan", "Whisky", "brand-expansion-kakubin"],
  ["knob-creek", "Knob Creek", "United States", "Bourbon", "brand-expansion-knob-creek"],
  ["basil-haydens", "Basil Hayden's", "United States", "Bourbon", "brand-expansion-basil-haydens"],
  ["gentleman-jack", "Gentleman Jack", "United States", "Whisky", "brand-expansion-gentleman-jack"],
  ["courvoisier", "Courvoisier", "France", "Cognac", "brand-expansion-courvoisier"],
  ["hornitos", "Hornitos", "Mexico", "Tequila", "brand-expansion-hornitos"],
  ["casamigos", "Casamigos", "Mexico", "Tequila", "brand-expansion-casamigos"],
] as const;

export const BRAND_LOGOS_BATCH_113: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_113: Record<string, string[]> = {
  "suntory-toki": [
    "https://house.suntory.com/toki-whisky",
    "https://www.suntory.com/news/article/mt_items/14674E.pdf",
  ],
  hakushu: [
    "https://www.suntory.com/factory/hakushu/introduction/",
    "https://www.suntory.co.jp/whisky/hakushu/digital_p/index.html",
  ],
  ao: [
    "https://house.suntory.com/ao-whisky/ao-world-whisky",
    "https://www.suntoryglobalspirits.com/news/beam-suntory-announces-global-launch-world-blended-whisky-suntory-world-whisky-ao-exclusive",
  ],
  kakubin: [
    "https://www.suntory.co.jp/whisky/kakubin/product/kaku.html",
  ],
  "knob-creek": [
    "https://www.beamdistilling.com/our-brands/knob-creek-bourbon",
    "https://www.knobcreek.com/",
  ],
  "basil-haydens": [
    "https://www.beamdistilling.com/our-brands/basil-haydens-bourbon",
    "https://www.basilhaydenbourbon.com/",
  ],
  "gentleman-jack": [
    "https://pressroom.jackdaniels.com/products/",
    "https://static.jackdaniels.com/JD_FlavorWheel_Booklet.pdf",
  ],
  courvoisier: [
    "https://www.courvoisier.com/en-us/heritage/",
    "https://www.courvoisier.com/en-us/maison-courvoisier/",
  ],
  hornitos: [
    "https://www.hornitostequila.com/about-us",
    "https://www.hornitostequila.com/blog/what-is-tequila-made-from",
  ],
  casamigos: [
    "https://www.casamigos.com/en-us/our-story",
    "https://www.diageo.com/en/our-business/our-history",
  ],
};

export const BRAND_CONTENT_BATCH_113: Record<string, BrandPublicContent> = {
  "suntory-toki": {
    description: "Suntory Toki is a blended Japanese whisky from the House of Suntory. It brings together malt and grain whiskies from Yamazaki, Hakushu and Chita for a clean, highball-friendly style.",
    story: "Toki was built to show the modern side of Suntory whisky while staying connected to the company's three Japanese distilleries. The name means time in Japanese, a neat fit for a blend that joins heritage with a lighter drinking style.",
    tastingNotes: [
      { title: "Green Fruit", description: "Green apple, honey, basil and light citrus give Toki its bright opening." },
      { title: "Soft Spice", description: "Gentle vanilla, white pepper and toasted grain keep the finish crisp and dry." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Build a Japanese highball with plenty of ice, chilled soda and a lemon or grapefruit twist." },
      { subheading: "Food", description: "Pair with chicken yakitori, tempura prawns, chilli paneer or salted edamame." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken yakitori", "tempura prawns", "chilli paneer", "salted edamame", "ginger chicken"] }],
    whyChoose: "Suntory Toki is a smart pick for crisp whisky highballs and lighter Japanese-style serves.",
    faqs: [
      { question: "What is Suntory Toki?", answer: "Suntory Toki is a blended Japanese whisky made with components from Yamazaki, Hakushu and Chita." },
      { question: "How should Suntory Toki be served?", answer: "It is especially suited to a cold highball with soda, ice and a citrus twist." },
    ],
    finalVerdict: "Suntory Toki works best when you want Japanese whisky freshness without a heavy, oak-led profile.",
    metaTitle: "Suntory Toki Whisky Guide | BevOry",
    metaDescription: "Explore Suntory Toki whisky notes, distillery blend, highball serves, pairings and city prices.",
  },
  hakushu: {
    description: "Hakushu is Suntory's single malt whisky from Hakushu Distillery in Hokuto, Yamanashi Prefecture. Founded in 1973, the distillery is known for its forest setting at the foot of the Southern Japan Alps.",
    story: "Suntory built Hakushu 50 years after Yamazaki to create a different malt character shaped by mountain air, clear water and varied distillation. The distillery uses wooden washbacks, different still shapes and varied cask types to produce a wide range of malt styles.",
    tastingNotes: [
      { title: "Forest Freshness", description: "Green herbs, orchard fruit, mint and clean citrus sit at the front of the whisky." },
      { title: "Gentle Smoke", description: "Light smoke, vanilla and soft oak add structure without hiding the fresh malt." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a tulip glass, with a splash of water, or as a mineral highball." },
      { subheading: "Food", description: "Pair with tandoori fish, grilled mushrooms, chicken yakitori or herbed paneer tikka." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori fish", "grilled mushrooms", "chicken yakitori", "herbed paneer tikka", "smoked almonds"] }],
    whyChoose: "Hakushu is for drinkers who want Japanese single malt with green, herbal lift and restrained smoke.",
    faqs: [
      { question: "Where is Hakushu whisky made?", answer: "Hakushu is made at Hakushu Distillery in Hokuto, Yamanashi Prefecture, Japan." },
      { question: "When was Hakushu Distillery founded?", answer: "Suntory established Hakushu Distillery in 1973." },
    ],
    finalVerdict: "Hakushu brings a mountain-forest side of Japanese whisky that feels fresh, precise and food-friendly.",
    metaTitle: "Hakushu Whisky Guide | BevOry",
    metaDescription: "Explore Hakushu Japanese whisky, forest distillery history, tasting notes, pairings and city prices.",
  },
  ao: {
    description: "Ao is Suntory's blended world whisky, created from whiskies sourced across the five major whisky-making regions. The blend connects Japanese, Scotch, Irish, Canadian and American whisky styles under one Suntory label.",
    story: "Chief blender Shinji Fukuyo developed Ao to show how regional whisky characters can be joined through Suntory blending. Its name means blue in Japanese, pointing to the oceans that link those whisky regions.",
    tastingNotes: [
      { title: "Layered Grain", description: "Vanilla, cereal sweetness, orchard fruit and honeyed malt give Ao its broad middle." },
      { title: "World Whisky Finish", description: "Oak spice, gentle smoke and a dry grain note bring several whisky traditions into one finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Pour neat first, then try it over ice or as a tall highball with chilled soda." },
      { subheading: "Food", description: "Pair with butter garlic prawns, seekh kebabs, karaage chicken or smoked cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["butter garlic prawns", "seekh kebabs", "karaage chicken", "smoked cheese", "roasted cashews"] }],
    whyChoose: "Ao is useful when you want one whisky to show several global styles in a single glass.",
    faqs: [
      { question: "What type of whisky is Ao?", answer: "Ao is a blended world whisky from Suntory." },
      { question: "Which regions are represented in Ao?", answer: "Ao draws on the five major whisky-making regions: Japan, Scotland, Ireland, Canada and the United States." },
    ],
    finalVerdict: "Ao is a polished world whisky for drinkers who enjoy blended complexity without heavy smoke.",
    metaTitle: "Ao World Whisky Guide | BevOry",
    metaDescription: "Explore Ao world whisky notes, Suntory blending, serving ideas, food pairings and city prices.",
  },
  kakubin: {
    description: "Kakubin is a Japanese blended whisky from Suntory, famous for its square bottle and highball culture in Japan. The current whisky balances Yamazaki and Hakushu bourbon-cask components for sweetness, body and a dry finish.",
    story: "Kakubin became one of Suntory's most recognisable everyday whiskies because it works neatly with soda. Its highball identity comes from a flavour design that keeps enough body after dilution.",
    tastingNotes: [
      { title: "Sweet Grain", description: "Honey, vanilla, light malt and soft orchard fruit make the opening easy and rounded." },
      { title: "Dry Finish", description: "A crisp, dry ending keeps the whisky sharp enough for soda and food." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Make a cold highball with ice, whisky and sparkling water; stir lightly to keep the bubbles alive." },
      { subheading: "Food", description: "Pair with karaage chicken, spicy peanuts, pork gyoza or tandoori chicken wings." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["karaage chicken", "spicy peanuts", "pork gyoza", "tandoori chicken wings", "fried tofu"] }],
    whyChoose: "Kakubin is built for refreshing Japanese highballs that still taste like whisky.",
    faqs: [
      { question: "What does Kakubin mean?", answer: "Kakubin refers to Suntory's square-bottle Japanese blended whisky." },
      { question: "How is Kakubin usually served?", answer: "Kakubin is commonly served as a highball with ice and sparkling water." },
    ],
    finalVerdict: "Kakubin is the easygoing Suntory whisky to choose for cold highballs and fried snacks.",
    metaTitle: "Kakubin Whisky Guide | BevOry",
    metaDescription: "Explore Kakubin Japanese whisky notes, highball style, serving tips, pairings and city prices.",
  },
  "knob-creek": {
    description: "Knob Creek is a Kentucky bourbon from Beam Distilling Co. in Clermont, Kentucky. Created by Booker Noe in 1992, it belongs to Jim Beam's Small Batch Bourbon Collection and is known for a fuller pre-Prohibition-inspired style.",
    story: "Booker Noe made Knob Creek as a bolder alternative to lighter modern bourbons. The brand sits beside Booker's, Baker's and Basil Hayden in Beam's small-batch family.",
    tastingNotes: [
      { title: "Caramel Oak", description: "Deep caramel, toasted oak, vanilla and roasted nuts give Knob Creek its classic bourbon weight." },
      { title: "Rye Spice", description: "Pepper, baking spice and a dry barrel note keep the finish firm." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Sip neat, add one large cube, or use in an Old Fashioned when you want bourbon to stay prominent." },
      { subheading: "Food", description: "Pair with galouti kebabs, barbecue ribs, smoked paneer or pecan pie." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "barbecue ribs", "smoked paneer", "pecan pie", "salted almonds"] }],
    whyChoose: "Knob Creek is a strong choice for drinkers who want robust Kentucky bourbon with real oak grip.",
    faqs: [
      { question: "Who created Knob Creek?", answer: "Knob Creek was created by Booker Noe as part of Jim Beam's Small Batch Bourbon Collection." },
      { question: "Where is Knob Creek made?", answer: "Knob Creek is produced by Beam Distilling Co. in Clermont, Kentucky." },
    ],
    finalVerdict: "Knob Creek is the bourbon to pour when you want caramel, oak and spice to stand up in the glass.",
    metaTitle: "Knob Creek Bourbon Guide | BevOry",
    metaDescription: "Explore Knob Creek bourbon history, tasting notes, cocktail serves, pairings and city prices.",
  },
  "basil-haydens": {
    description: "Basil Hayden's is a high-rye Kentucky straight bourbon from Beam Distilling Co. in Clermont, Kentucky. Created in 1992 by sixth-generation Jim Beam master distiller Booker Noe, it offers a lighter, spicier entry into Beam's small-batch range.",
    story: "The brand draws inspiration from Basil Hayden Sr., a farmer-distiller whose rye-forward style influenced the Old Grand-Dad line. Booker Noe brought that idea into the modern small-batch collection with a more polished, approachable bourbon.",
    tastingNotes: [
      { title: "Light Spice", description: "Rye spice, tea, citrus peel and black pepper sit over a lean bourbon base." },
      { title: "Soft Sweetness", description: "Vanilla, honey and gentle caramel keep the palate smooth and easy to sip." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, with one cube, or in a lighter Old Fashioned with restrained sugar." },
      { subheading: "Food", description: "Pair with chicken tikka, mutton seekh, aged cheddar or honey-glazed nuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "mutton seekh", "aged cheddar", "honey-glazed nuts", "grilled corn"] }],
    whyChoose: "Basil Hayden's is a gentle high-rye bourbon for drinkers who like spice without heavy barrel weight.",
    faqs: [
      { question: "What style is Basil Hayden's?", answer: "Basil Hayden's is a high-rye Kentucky straight bourbon." },
      { question: "Who created Basil Hayden's bourbon?", answer: "Booker Noe created Basil Hayden's in 1992 for Beam's small-batch collection." },
    ],
    finalVerdict: "Basil Hayden's is a clean, easy bourbon for rye-spice fans and lighter whiskey cocktails.",
    metaTitle: "Basil Hayden's Bourbon Guide | BevOry",
    metaDescription: "Explore Basil Hayden's bourbon notes, Beam history, serving ideas, pairings and city prices.",
  },
  "gentleman-jack": {
    description: "Gentleman Jack is a Tennessee whiskey from Jack Daniel Distillery in Lynchburg, Tennessee. It is charcoal mellowed twice, once before ageing and once after, giving it a softer profile than Old No. 7.",
    story: "Jack Daniel's signature charcoal mellowing is central to Tennessee whiskey, and Gentleman Jack uses that process a second time after maturation. The result is a smoother, more polished member of the Jack Daniel's family.",
    tastingNotes: [
      { title: "Sweet Oak", description: "Vanilla, light oak, maple sweetness and banana-like fruit lead the aroma." },
      { title: "Double Mellowed", description: "The palate is soft and rounded, with caramel, toasted wood and a clean finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve over one large cube, with ginger ale, or in a gentle whiskey sour." },
      { subheading: "Food", description: "Pair with barbecue chicken, pepper fry, smoked nuts or dark chocolate brownies." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["barbecue chicken", "pepper fry", "smoked nuts", "dark chocolate brownies", "grilled sausages"] }],
    whyChoose: "Gentleman Jack is for drinkers who want Jack Daniel's character in a smoother, softer pour.",
    faqs: [
      { question: "What makes Gentleman Jack different?", answer: "Gentleman Jack is charcoal mellowed twice, before and after ageing." },
      { question: "Where is Gentleman Jack made?", answer: "Gentleman Jack is made at Jack Daniel Distillery in Lynchburg, Tennessee." },
    ],
    finalVerdict: "Gentleman Jack is a mellow Tennessee whiskey for easy sipping and smooth mixed drinks.",
    metaTitle: "Gentleman Jack Whisky Guide | BevOry",
    metaDescription: "Explore Gentleman Jack notes, double mellowing, serving ideas, pairings and city prices.",
  },
  courvoisier: {
    description: "Courvoisier is a Cognac house based in Jarnac, in France's Cognac region. Felix Courvoisier established Maison Courvoisier in 1828 after the Courvoisier and Gallois families moved from wine and spirits trading into Cognac.",
    story: "Courvoisier's identity links Jarnac production with Parisian polish and a long export history. The house changed ownership over time and entered a new chapter when Campari Group acquired it in 2024.",
    tastingNotes: [
      { title: "Fruit And Florals", description: "Apricot, pear, orange blossom and dried grape fruit give Courvoisier its aromatic lift." },
      { title: "Cask Warmth", description: "Vanilla, toasted almond, oak spice and soft caramel round the Cognac finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a tulip glass, over one large cube, or in a Sidecar." },
      { subheading: "Food", description: "Pair with galouti kebabs, roast duck, dark chocolate or almond tart." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "roast duck", "dark chocolate", "almond tart", "aged gouda"] }],
    whyChoose: "Courvoisier gives Cognac drinkers a Jarnac house with fruit, oak and cocktail versatility.",
    faqs: [
      { question: "Where is Courvoisier Cognac based?", answer: "Courvoisier is based in Jarnac in France's Cognac region." },
      { question: "Who founded Maison Courvoisier?", answer: "Felix Courvoisier established Maison Courvoisier in 1828." },
    ],
    finalVerdict: "Courvoisier is a reliable Cognac choice for neat pours, classic cocktails and rich food pairings.",
    metaTitle: "Courvoisier Cognac Guide | BevOry",
    metaDescription: "Explore Courvoisier Cognac history, tasting notes, serving ideas, pairings and city prices.",
  },
  hornitos: {
    description: "Hornitos is a 100% agave tequila brand from the Sauza family story in Jalisco, Mexico. Don Francisco Javier Sauza launched it in 1950 on Mexican Independence Day, building its identity around reposado-style barrel resting.",
    story: "The name Hornitos refers to the small ovens Don Cenobio Sauza used to cook agave pinas more gently. Hornitos later became tied to a fresher, agave-forward tequila style with a strong Mexican independence theme.",
    tastingNotes: [
      { title: "Fresh Agave", description: "Plata styles show cooked agave, lime zest and a crisp herbal snap." },
      { title: "Barrel Rested", description: "Reposado and aged styles add vanilla, pepper, caramel and light oak." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Use Plata in a Margarita or Paloma; serve Reposado over ice with a grapefruit peel." },
      { subheading: "Food", description: "Pair with tandoori prawns, chicken tacos, chilli paneer or roasted corn." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "chicken tacos", "chilli paneer", "roasted corn", "fresh guacamole"] }],
    whyChoose: "Hornitos is a Sauza-linked tequila for drinkers who want clean agave and easy cocktail structure.",
    faqs: [
      { question: "When was Hornitos launched?", answer: "Hornitos was launched in 1950 by Don Francisco Javier Sauza." },
      { question: "What does Hornitos mean?", answer: "Hornitos refers to small ovens used for cooking agave pinas." },
    ],
    finalVerdict: "Hornitos is a practical tequila for fresh agave cocktails, spicy snacks and relaxed sipping.",
    metaTitle: "Hornitos Tequila Guide | BevOry",
    metaDescription: "Explore Hornitos tequila history, agave notes, cocktail serves, food pairings and city prices.",
  },
  casamigos: {
    description: "Casamigos is a tequila and mezcal brand created by friends and later acquired by Diageo. Its tequila range is built for a smooth, approachable agave profile, while its mezcal uses Espadin agave from Oaxaca.",
    story: "The brand began as a private tequila project between George Clooney, Rande Gerber and Mike Meldman before growing into a global celebrity-backed spirits label. Its name combines casa and amigos, pointing to the friendship story behind the brand.",
    tastingNotes: [
      { title: "Smooth Agave", description: "Casamigos tequila leans toward cooked agave, vanilla, citrus and gentle spice." },
      { title: "Mezcal Smoke", description: "The mezcal brings roasted Espadin agave, light smoke, cocoa and earthy sweetness." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve tequila neat, in a Margarita, or with soda and grapefruit; pour mezcal slowly in a copita." },
      { subheading: "Food", description: "Pair with fish tacos, butter garlic prawns, paneer tikka or dark chocolate." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["fish tacos", "butter garlic prawns", "paneer tikka", "dark chocolate", "grilled pineapple"] }],
    whyChoose: "Casamigos is built for drinkers who want a soft, polished introduction to tequila and mezcal.",
    faqs: [
      { question: "Who founded Casamigos?", answer: "Casamigos was founded by George Clooney, Rande Gerber and Mike Meldman." },
      { question: "What agave is used for Casamigos Mezcal?", answer: "Casamigos Mezcal is made with 100% Espadin agave from Oaxaca." },
    ],
    finalVerdict: "Casamigos is an easygoing agave brand for Margaritas, neat tequila pours and gentle mezcal serves.",
    metaTitle: "Casamigos Tequila Guide | BevOry",
    metaDescription: "Explore Casamigos tequila and mezcal notes, founders, serving ideas, pairings and city prices.",
  },
};
