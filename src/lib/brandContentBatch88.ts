import type { BrandPublicContent } from "./brandContentBatch01.js";

export const BRAND_IDENTITIES_BATCH_88 = [
  ["henri", "Henri", "France", "Liqueur", "pending-henri"],
  ["hermosa", "Hermosa", "Argentina", "Wine", "pending-hermosa"],
  ["hh", "HH", "India", "Gin", "pending-hh"],
  ["hidden-treasure", "Hidden Treasure", "India", "Indian Whisky", "pending-hidden-treasure"],
  ["high-blend", "High Blend", "India", "Indian Whisky", "pending-high-blend"],
  ["highbury", "Highbury", "India", "Indian Whisky", "pending-highbury"],
  ["highbury-classic", "Highbury Classic", "India", "Indian Whisky", "pending-highbury-classic"],
  ["highmen", "Highmen", "India", "Indian Whisky", "pending-highmen"],
  ["hillfort", "Hillfort", "India", "Indian Whisky", "pending-hillfort"],
  ["hobsons", "Hobsons", "India", "Brandy", "pending-hobsons"],
] as const;

export const BRAND_LOGOS_BATCH_88: Record<string, string> = {};

export const BRAND_SOURCES_BATCH_88: Record<string, string[]> = {
  henri: [
    "https://www.pastishenribardouin.com/en/",
    "https://www.distilleries-provence.com/en/content/6-the-distillery",
    "https://famillebourgeois-sancerre.com/en",
    "https://famillebourgeois-sancerre.com/wp-content/uploads/2024/03/Henri-Bourgeois-Pouilly-Fume-EN-6.pdf",
    "https://www.bevory.in/gurgaon/product/henri-bardouin-pastis-liqueur-cdaaab4",
  ],
  hermosa: [
    "https://www.livcheers.com/liquor/hermosa-chardonnay-750ml",
    "https://www.bevory.in/gurgaon/product/hermosa-chardonnay-0980497",
    "https://www.bevory.in/gurgaon/product/hermosa-merlot-385a58d",
    "https://www.bevory.in/gurgaon/product/hermosa-sauvignon-blanc-cb59b37",
  ],
  hh: [
    "https://www.bevory.in/gurgaon/product/hh-dry-gin-b32bb6a",
    "https://www.bevory.in/gurgaon/brand/hh",
  ],
  "hidden-treasure": [
    "https://drinksbuff.com/spirits/hidden-treasure-premium-whisky/",
    "https://mansionz.in/products/hidden-treasure-blended-whisky-1",
    "https://www.bevory.in/gurgaon/product/hidden-treasure-premium-whisky-97cb69f",
  ],
  "high-blend": [
    "https://www.bevory.in/gurgaon/product/high-blend-high-blend-premium-whisky-extra-special-888743c",
    "https://www.bevory.in/gurgaon/brand/high-blend",
  ],
  highbury: [
    "https://www.livcheers.com/delhi/liquor/highbury-classic-superior-grain-whisky-750ml",
    "https://www.whiskybase.com/whiskies/whisky/157435",
    "https://www.bevory.in/gurgaon/product/highbury-classic-superior-grain-whisky-345374f",
  ],
  "highbury-classic": [
    "https://www.livcheers.com/delhi/liquor/highbury-classic-superior-grain-whisky-750ml",
    "https://www.whiskybase.com/whiskies/whisky/157435",
    "https://www.bevory.in/gurgaon/product/highbury-classic-whisky-9ebf8e9",
  ],
  highmen: [
    "https://www.zaubacorp.com/HIGHMAN-DISTILLERS-AND-BOTTLERS-PRIVATE-LIMITED-U74999CH2019PTC042492",
    "https://www.bevory.in/gurgaon/product/highmen-highmen-whisky-2f47d14",
  ],
  hillfort: [
    "https://associatedalcohols.com/wp-content/uploads/Press-Release-Launch-of-Premium-Blended-Malt-whiskey-HILLFORT.pdf",
    "https://bsmedia.business-standard.com/_media/bs/data/announcements/bse/06092024/df8b353a-8c55-410d-bbe6-f7a04d503283.pdf",
    "https://www.bevory.in/gurgaon/product/hillfort-premium-blended-malt-whisky-865b901",
  ],
  hobsons: [
    "https://www.livcheers.com/mysore/liquor/hobsons-xr-pure-french-grape-brandy-750ml",
    "https://tsbcl.nic.in/open_record.php?ID=249",
    "https://www.bevory.in/gurgaon/product/hobsons-xr-pure-french-grape-brandy-be15bde",
  ],
};

export const BRAND_CONTENT_BATCH_88: Record<string, BrandPublicContent> = {
  henri: {
    description: "Henri on BevOry brings together French drinks led by Henri Bardouin Pastis and Henri Bourgeois Loire Valley wines. The pastis is made by Distilleries et Domaines de Provence in Forcalquier, while the wine side points to the Bourgeois family of Chavignol in Sancerre.",
    story: "Henri Bardouin Pastis comes from Haute-Provence and uses a broad spice-and-botanical register built around anise, liquorice and herbs from the Lure Mountain area. Henri Bourgeois carries a separate Loire identity, with Sauvignon Blanc from Sancerre and Pouilly-Fume at the centre.",
    tastingNotes: [
      { title: "Provence Pastis", description: "Star anise, liquorice, cardamom, tonka bean and dry herbal spice create a deep aperitif profile." },
      { title: "Loire Sauvignon", description: "Citrus, kiwi, white flowers and a flinty finish shape the Pouilly-Fume style." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Dilute pastis slowly with chilled water; serve Pouilly-Fume cold in a white-wine glass." },
      { subheading: "Food", description: "Pair pastis with olives and fried seafood; pair Loire whites with tandoori fish, goat cheese or prawns." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["olives", "fried calamari", "tandoori fish", "goat cheese", "butter garlic prawns"] }],
    whyChoose: "Henri is a useful French landing page for drinkers comparing herbal aperitif depth with crisp Loire Sauvignon Blanc.",
    faqs: [
      { question: "What is Henri Bardouin Pastis?", answer: "Henri Bardouin is a French pastis from Distilleries et Domaines de Provence in Forcalquier." },
      { question: "What wine style is Henri Bourgeois known for?", answer: "Henri Bourgeois is closely tied to Sauvignon Blanc from Sancerre and Pouilly-Fume in the Loire Valley." },
    ],
    finalVerdict: "Henri suits drinkers who want either a serious Provençal pastis or mineral French Sauvignon Blanc.",
    metaTitle: "Henri Liqueur & Wine Guide | BevOry",
    metaDescription: "Explore Henri Bardouin pastis and Henri Bourgeois wine notes, serving ideas, pairings and city prices.",
  },
  hermosa: {
    description: "Hermosa is a wine brand listed on BevOry through Merlot, Chardonnay and Sauvignon Blanc routes. Livcheers places Hermosa Chardonnay under Argentina, with medium-full body and classic ripe-fruit Chardonnay cues.",
    story: "Hermosa works as a simple varietal-led wine page for shoppers comparing red and white styles by grape. The range covers soft Merlot, richer Chardonnay and brighter Sauvignon Blanc, making it easy to choose by meal rather than label detail.",
    tastingNotes: [
      { title: "Chardonnay", description: "Ripe apple, pear, pineapple, vanilla and a creamy texture carry the white-wine side." },
      { title: "Merlot And Sauvignon", description: "Merlot brings plum and soft tannin, while Sauvignon Blanc leans citrusy and fresh." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve Chardonnay and Sauvignon Blanc chilled; pour Merlot slightly cool in a medium red-wine glass." },
      { subheading: "Food", description: "Pair Chardonnay with butter chicken or prawns, Sauvignon Blanc with salads, and Merlot with kebabs." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["butter chicken", "butter garlic prawns", "green salad", "mutton seekh", "mushroom tikka"] }],
    whyChoose: "Hermosa is an easy wine choice when you want familiar grape names and food-friendly styles.",
    faqs: [
      { question: "Which Hermosa wines are listed on BevOry?", answer: "BevOry lists Hermosa Merlot, Chardonnay and Sauvignon Blanc routes." },
      { question: "How should Hermosa Chardonnay be served?", answer: "Serve it chilled in a white-wine glass with creamy dishes, seafood or mild tandoori snacks." },
    ],
    finalVerdict: "Hermosa is a practical varietal wine page for choosing between creamy white, crisp white and soft red styles.",
    metaTitle: "Hermosa Wine Guide | BevOry",
    metaDescription: "Explore Hermosa Merlot, Chardonnay and Sauvignon Blanc notes, serving tips, pairings and city prices.",
  },
  hh: {
    description: "HH is an Indian dry gin label listed on BevOry in 180 ml and 750 ml routes. It sits in the clear-spirit shelf for drinkers looking for juniper-led gin, tonic serves and citrus-friendly cocktails.",
    story: "HH keeps the gin search simple: a dry gin page for highballs, G&Ts and quick cocktail use. Its shorter brand name also helps shoppers who remember shelf initials more easily than a full label.",
    tastingNotes: [
      { title: "Dry Gin Core", description: "Juniper, citrus peel, coriander seed and light herbal spice give the gin a clean profile." },
      { title: "Tonic Ready", description: "A dry, brisk finish keeps the flavour bright with tonic water and lime." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with chilled tonic, soda, lime or cucumber in a tall glass packed with ice." },
      { subheading: "Food", description: "Pair with tandoori prawns, chilli chicken, paneer tikka, nachos or lemon salad." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori prawns", "chilli chicken", "paneer tikka", "nachos", "lemon salad"] }],
    whyChoose: "HH is a direct Indian dry gin option for tonic-led drinking and quick citrus cocktails.",
    faqs: [
      { question: "What is HH Dry Gin?", answer: "HH Dry Gin is an Indian gin listed on BevOry in 180 ml and 750 ml formats." },
      { question: "What mixer works with HH gin?", answer: "Tonic water, soda, lime and cucumber suit its dry gin profile." },
    ],
    finalVerdict: "HH is best for simple G&Ts, ice-heavy highballs and spicy snacks.",
    metaTitle: "HH Dry Gin Guide | BevOry",
    metaDescription: "Explore HH Dry Gin notes, tonic serves, food pairings, bottle sizes and city prices on BevOry.",
  },
  "hidden-treasure": {
    description: "Hidden Treasure is an Indian premium whisky listed on BevOry in 180 ml and 750 ml formats. Public retail references describe Hidden Treasure as a blended whisky made for neat pours, ice or a preferred mixer.",
    story: "Hidden Treasure belongs to India's premium whisky shelf, where approachable blends are built for both home bars and party pours. The name gives the bottle a richer cue while the serve remains simple: soda, ice, water or ginger ale.",
    tastingNotes: [
      { title: "Soft Blend", description: "Caramel, honey, vanilla and light cereal grain give the whisky an easy opening." },
      { title: "Warm Finish", description: "Toasted oak, pepper and mild dried fruit sit on a smooth mixer-friendly close." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat for a first sip, over ice, with soda or with ginger ale." },
      { subheading: "Food", description: "Pair with chicken tikka, mutton seekh, masala peanuts, paneer pakora or smoked cheese." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken tikka", "mutton seekh", "masala peanuts", "paneer pakora", "smoked cheese"] }],
    whyChoose: "Hidden Treasure is a smooth Indian whisky choice for relaxed pours and city-price comparison.",
    faqs: [
      { question: "What is Hidden Treasure Premium Whisky?", answer: "Hidden Treasure Premium Whisky is an Indian blended whisky listed on BevOry." },
      { question: "How should Hidden Treasure be served?", answer: "It works neat, on ice, with soda, water or ginger ale." },
    ],
    finalVerdict: "Hidden Treasure is a casual premium whisky for highballs, ice pours and savoury snacks.",
    metaTitle: "Hidden Treasure Whisky Guide | BevOry",
    metaDescription: "Explore Hidden Treasure Premium Whisky notes, serving ideas, snack pairings and city prices.",
  },
  "high-blend": {
    description: "High Blend is an Indian premium whisky label listed on BevOry through High Blend Premium Whisky Extra Special. It sits in the blended Indian whisky category, with grain sweetness and mild oak spice built for mixed serves.",
    story: "High Blend uses classic Indian whisky language: premium, extra special and easy to pour with soda or water. The brand page is useful for shoppers who search the full label or remember only the High Blend name.",
    tastingNotes: [
      { title: "Grain Sweetness", description: "Honey, caramel, cereal and vanilla bring a rounded blended-whisky start." },
      { title: "Light Oak", description: "Pepper, toasted wood and faint citrus make the finish clean with mixers." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, water, ice, cola or ginger ale in a highball glass." },
      { subheading: "Food", description: "Pair with tandoori chicken, chilli paneer, egg bhurji, masala fries or peanuts." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["tandoori chicken", "chilli paneer", "egg bhurji", "masala fries", "peanuts"] }],
    whyChoose: "High Blend is a straightforward Indian whisky for simple mixers and quick local comparison.",
    faqs: [
      { question: "What is High Blend?", answer: "High Blend is listed on BevOry as an Indian premium whisky label." },
      { question: "Which High Blend product appears on BevOry?", answer: "BevOry shows High Blend Premium Whisky Extra Special in a 750 ml route." },
    ],
    finalVerdict: "High Blend is best treated as an easy highball whisky for casual drinking and spicy snacks.",
    metaTitle: "High Blend Whisky Guide | BevOry",
    metaDescription: "Explore High Blend Premium Whisky notes, serving ideas, pairings and city prices on BevOry.",
  },
  highbury: {
    description: "Highbury is an Indian whisky brand listed through Highbury Classic Superior Grain Whisky. Livcheers identifies the 750 ml expression as a blended Indian whisky, while whisky catalogues describe it as superior grain whisky blended with imported malts.",
    story: "Highbury sits in the modern Indian grain-whisky lane, where smoother grain spirit and malt influence are positioned above basic party whisky. BevOry routes show 180 ml, 750 ml and 1 litre formats across the Highbury Classic listings.",
    tastingNotes: [
      { title: "Superior Grain", description: "Toffee, honey, cereal grain and vanilla create a soft, polished profile." },
      { title: "Imported Malt Touch", description: "Light oak, spice and faint dried fruit add structure without heavy smoke." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat for a small taste, then with soda, water, ice or ginger ale." },
      { subheading: "Food", description: "Pair with mutton seekh, tandoori chicken, paneer tikka, roasted chana or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["mutton seekh", "tandoori chicken", "paneer tikka", "roasted chana", "aged cheddar"] }],
    whyChoose: "Highbury is useful for drinkers comparing smoother grain-led Indian whisky with malt influence.",
    faqs: [
      { question: "What type of whisky is Highbury?", answer: "Highbury is listed as a blended Indian grain whisky on BevOry." },
      { question: "What does Highbury Classic taste like?", answer: "Expect toffee, honey, grain sweetness, light oak and gentle spice." },
    ],
    finalVerdict: "Highbury is a polished Indian whisky for soda serves, kebabs and full-bottle comparison.",
    metaTitle: "Highbury Whisky Guide | BevOry",
    metaDescription: "Explore Highbury Classic whisky notes, superior grain style, pairings and city prices on BevOry.",
  },
  "highbury-classic": {
    description: "Highbury Classic is an Indian whisky label centred on Superior Grain Whisky and Classic Whisky routes. Livcheers lists Highbury Classic Superior Grain Whisky as blended Indian whisky with 180 ml, 375 ml and 750 ml formats.",
    story: "Highbury Classic's name points to an accessible premium style rather than a heavy single-malt profile. Its grain-whisky base and imported-malt cue make it a practical bottle for people moving up from regular mixer whisky.",
    tastingNotes: [
      { title: "Classic Sweetness", description: "Toffee, honey, vanilla and toasted grain give the whisky a rounded opening." },
      { title: "Gentle Spice", description: "Soft oak, pepper and light dried fruit keep the finish balanced." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, still water, a large ice cube or ginger ale." },
      { subheading: "Food", description: "Pair with galouti kebabs, chicken tikka, masala peanuts, mushroom tikka or smoked paneer." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "chicken tikka", "masala peanuts", "mushroom tikka", "smoked paneer"] }],
    whyChoose: "Highbury Classic gives shoppers a smooth grain-led whisky profile across useful bottle sizes.",
    faqs: [
      { question: "Is Highbury Classic an Indian whisky?", answer: "Yes, Highbury Classic is listed on BevOry as an Indian whisky brand." },
      { question: "How should Highbury Classic be served?", answer: "Serve it with soda, water, ice or ginger ale, especially with spicy snacks." },
    ],
    finalVerdict: "Highbury Classic is a dependable Indian whisky for smoother highballs and food-led evenings.",
    metaTitle: "Highbury Classic Whisky Guide | BevOry",
    metaDescription: "Explore Highbury Classic whisky notes, bottle sizes, serving ideas and city prices on BevOry.",
  },
  highmen: {
    description: "Highmen is an Indian whisky label listed on BevOry through a 750 ml Highmen Whisky route. Company records surface Highman Distillers and Bottlers Private Limited in Chandigarh, giving the name a northern Indian spirits context.",
    story: "Highmen fits the local Indian whisky shelf where simple brand recall and a strong name matter at the counter. The bottle is best approached as a mixer-friendly whisky for soda, water and ice rather than a technical malt-led expression.",
    tastingNotes: [
      { title: "Easy Whisky", description: "Caramel, cereal grain, honey and mild vanilla shape the opening." },
      { title: "Spiced Close", description: "Pepper, toasted oak and a light warming finish suit highballs." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve with soda, water, ice, cola or ginger ale in a tall glass." },
      { subheading: "Food", description: "Pair with chicken seekh, chilli potato, paneer pakora, masala peanuts or kebab rolls." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["chicken seekh", "chilli potato", "paneer pakora", "masala peanuts", "kebab rolls"] }],
    whyChoose: "Highmen is a practical Indian whisky page for straightforward mixed serves and local bottle searches.",
    faqs: [
      { question: "What is Highmen Whisky?", answer: "Highmen Whisky is listed on BevOry as an Indian whisky in 750 ml format." },
      { question: "What mixer suits Highmen?", answer: "Soda, water, cola, ginger ale and ice suit its easy whisky profile." },
    ],
    finalVerdict: "Highmen is a simple Indian whisky for highballs, snacks and no-fuss serving.",
    metaTitle: "Highmen Whisky Guide | BevOry",
    metaDescription: "Explore Highmen Whisky notes, serving ideas, Indian snack pairings and city prices on BevOry.",
  },
  hillfort: {
    description: "Hillfort is an Indian premium blended malt whisky launched by Associated Alcohols and Breweries Limited. Company announcements position Hillfort as a premium blended malt whisky and BevOry lists it in 375 ml and 750 ml routes.",
    story: "Associated Alcohols announced Hillfort in 2024 as part of its proprietary premium portfolio. The label language highlights Heritage Reserve, carefully matured select malts and a richer Indian whisky positioning.",
    tastingNotes: [
      { title: "Malt Richness", description: "Wood-smoked honey, vanilla, cinnamon and black cardamom give Hillfort a warm malt nose." },
      { title: "Heritage Reserve", description: "Toffee, toasted oak, dried fruit and soft spice build through the finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat, with a splash of water, over one large cube or as a premium soda highball." },
      { subheading: "Food", description: "Pair with galouti kebabs, spiced mutton, tandoori mushrooms, dark chocolate or aged cheddar." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["galouti kebabs", "spiced mutton", "tandoori mushrooms", "dark chocolate", "aged cheddar"] }],
    whyChoose: "Hillfort is for drinkers who want a newer Indian premium blended malt with richer spice and oak.",
    faqs: [
      { question: "Who launched Hillfort whisky?", answer: "Hillfort was launched by Associated Alcohols and Breweries Limited." },
      { question: "What style is Hillfort?", answer: "Hillfort is positioned as a premium blended malt whisky." },
    ],
    finalVerdict: "Hillfort brings a richer premium-malt direction to Indian whisky searches and food pairing.",
    metaTitle: "Hillfort Whisky Guide | BevOry",
    metaDescription: "Explore Hillfort Premium Blended Malt Whisky notes, AABL origin, pairings and city prices.",
  },
  hobsons: {
    description: "Hobsons is an Indian brandy label listed on BevOry through Hobsons XR Pure French Grape Brandy. Livcheers describes the 750 ml bottle as a premium French-grape brandy with ripe grape, floral, caramel and oak notes.",
    story: "Hobsons XR sits in India's upgraded brandy space, where grape-brandy language and French cues separate it from everyday deluxe brandy. Telangana retail listings also show Hobsons XR Pure French Grape Brandy across multiple bottle sizes.",
    tastingNotes: [
      { title: "French Grape Style", description: "Ripe grape, floral lift, caramel and toffee give the brandy a smooth centre." },
      { title: "Oak And Vanilla", description: "Vanilla, toasted oak and mild spice carry the lingering finish." },
    ],
    howToEnjoy: [
      { subheading: "Serve", description: "Serve neat in a brandy glass, over ice, with warm water or with ginger ale." },
      { subheading: "Food", description: "Pair with pepper chicken, roast mutton, plum cake, dark chocolate or roasted almonds." },
    ],
    pairingIdeas: [{ title: "Pairings", items: ["pepper chicken", "roast mutton", "plum cake", "dark chocolate", "roasted almonds"] }],
    whyChoose: "Hobsons is a stronger brandy choice for drinkers who want grape fruit, caramel and oak warmth.",
    faqs: [
      { question: "What is Hobsons XR?", answer: "Hobsons XR Pure French Grape Brandy is a brandy listed on BevOry in 750 ml format." },
      { question: "How should Hobsons brandy be served?", answer: "Serve it neat, on ice, with warm water or with ginger ale." },
    ],
    finalVerdict: "Hobsons XR is a rich brandy for slow sipping, dessert pairings and warm evening serves.",
    metaTitle: "Hobsons Brandy Guide | BevOry",
    metaDescription: "Explore Hobsons XR Pure French Grape Brandy notes, serving ideas, pairings and city prices.",
  },
};
