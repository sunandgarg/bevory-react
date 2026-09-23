// Producer-checked editorial copy. See docs/editorial/product-batch-01-sources.md.
export type ProductTastingNotes = { nose: string; palate: string; finish: string };
export type ProductServingGuide = { glassware: string; idealTemperature: string; recommendation: string };
export type ProductPublicDetail = {
  productName: string;
  category: string;
  shortOverview: string;
  craftStory: string;
  tastingNotes: ProductTastingNotes;
  servingGuide: ProductServingGuide;
  foodPairings: string[];
  whyBuyThis: string;
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const PRODUCT_BATCH_CONTENT: Record<string, ProductPublicDetail> = {
  "johnnie-walker-black-label-6e8300f": {
    productName: "Johnnie Walker Black Label", category: "12-Year-Old Blended Scotch Whisky",
    shortOverview: "Black Label brings a measured thread of smoke to an otherwise fruit-and-vanilla-led Scotch. Its 12-year minimum age statement makes it a useful reference point for blended whisky.",
    craftStory: "Johnnie Walker blends malt and grain whiskies from across Scotland, each aged at least 12 years. The final balance draws on sweet, fruity and smoky component whiskies rather than a single distillery's style.",
    tastingNotes: { nose: "Vanilla, orange peel and orchard fruit sit over a restrained wisp of smoke.", palate: "Rounded and moderately full, opening sweet before dried fruit, malt and warming spice arrive.", finish: "Medium-long, with soft oak and gentle smoke after the fruit fades." },
    servingGuide: { glassware: "Tulip whisky glass or highball glass", idealTemperature: "Cool room temperature (18–20°C)", recommendation: "Taste a small pour neat first; add a few drops of water, or build a highball with chilled soda and orange peel." },
    foodPairings: ["mutton seekh kebab", "tandoori mushrooms", "smoked paneer tikka", "dark chocolate with orange", "roasted masala peanuts"],
    whyBuyThis: "Choose it when you want Scotch smoke as an accent, not the whole conversation.",
    faqs: [{ question: "Is Black Label a single malt?", answer: "No. It is a blend of Scotch malt and grain whiskies, all aged for at least 12 years." }, { question: "Does Black Label taste strongly smoky?", answer: "Smoke is noticeable but balanced by sweet fruit, vanilla and malt; it is not an Islay-style peat blast." }],
    metaTitle: "Johnnie Walker Black Label Price, Taste & Review | BevOry", metaDescription: "Explore Black Label's fruit, vanilla and gentle smoke, with Indian food pairings. Check indicative city prices on BevOry."
  },
  "johnnie-walker-red-label-721d6b0": {
    productName: "Johnnie Walker Red Label", category: "Blended Scotch Whisky",
    shortOverview: "Red Label is Johnnie Walker's lively, mixable Scotch, built for long drinks rather than hushed tasting rituals. Its brisk spice and light smoke stand up to ice and soda.",
    craftStory: "The blend draws on Scotch whiskies from several distilleries, including Cardhu and Caol Ila. Malt and grain components are combined for a brighter, punchier profile than the older Black Label expression.",
    tastingNotes: { nose: "Fresh citrus, grain sweetness and pepper lead, with faint smoke behind them.", palate: "Lean and energetic; sweet malt gives way to pepper, citrus zest and a smoky edge.", finish: "Short to medium, warm and peppery with a dry smoky trace." },
    servingGuide: { glassware: "Tall highball glass", idealTemperature: "Chilled over ice (about 6–10°C)", recommendation: "Pour over ice and lengthen with soda; a lemon wedge keeps the brisk finish fresh." },
    foodPairings: ["chicken tikka", "masala peanuts", "pepper paneer skewers", "seekh kebab", "chilli garlic mushrooms"],
    whyBuyThis: "Its assertive pepper-and-smoke profile stays present in a simple Scotch highball.",
    faqs: [{ question: "Is Red Label meant for mixing?", answer: "Its bright, peppery profile is particularly suited to soda, ice and simple highballs." }, { question: "Is it the same as Black Label?", answer: "No. Black Label carries a 12-year age statement and a rounder, deeper profile; Red Label is brisker and more direct." }],
    metaTitle: "Johnnie Walker Red Label Price, Taste & Review | BevOry", metaDescription: "Red Label brings pepper, citrus and light smoke to a highball. See Indian snack pairings and indicative city prices on BevOry."
  },
  "johnnie-walker-double-black-90f3091": {
    productName: "Johnnie Walker Double Black", category: "Smoky Blended Scotch Whisky",
    shortOverview: "Double Black turns up the smoke and spice of Johnnie Walker's familiar house style. It is fuller and darker in flavour than Black Label without becoming a single-malt peat specialist.",
    craftStory: "The Scottish blend is assembled to emphasise smoky malt character and oak depth. The producer describes peat smoke, dried fruit and orange zest as defining features of this expression.",
    tastingNotes: { nose: "Sweet smoke, clove and orange peel come forward before darker fruit.", palate: "Fuller-bodied and warming, with peat smoke, dried fruit, vanilla and a snap of citrus zest.", finish: "Longer and drier than Black Label, leaving smoky oak and spice." },
    servingGuide: { glassware: "Tulip whisky glass or sturdy rocks glass", idealTemperature: "Cool room temperature (18–20°C)", recommendation: "Start neat, then try a few drops of water; one large ice cube softens the smoke without burying it." },
    foodPairings: ["lamb rogan josh", "smoky baingan bharta", "mutton seekh", "chargrilled paneer", "70% dark chocolate"],
    whyBuyThis: "It offers a clear step up in smoke for drinkers who find Black Label too gentle.",
    faqs: [{ question: "Is Double Black older than Black Label?", answer: "Double Black does not carry Black Label's 12-year age statement; its distinction is its more smoke-forward style." }, { question: "How should I serve it?", answer: "Neat in a tulip glass is a good starting point; add a little water if the smoke feels intense." }],
    metaTitle: "Johnnie Walker Double Black Price, Taste & Review | BevOry", metaDescription: "Taste Double Black's peat smoke, orange zest and spice. Find Indian pairing ideas and indicative city prices on BevOry."
  },
  "johnnie-walker-green-label-162089f": {
    productName: "Johnnie Walker Green Label", category: "15-Year-Old Blended Malt Scotch Whisky",
    shortOverview: "Green Label is the all-malt member of the Johnnie Walker core range. Its 15-year minimum maturation and mix of regional malt styles bring herbs, wood and measured peat together.",
    craftStory: "Unlike the brand's malt-and-grain blends, Green Label contains single malts only. Its malts come from four Scottish whisky regions and mature for at least 15 years before blending.",
    tastingNotes: { nose: "Green fruit and soft florals meet dry woodland herbs.", palate: "Rounded malt sweetness develops into cedar-like wood, oak and lightly earthy spice.", finish: "Long, dry and gently peaty, with wood and herbal notes lingering." },
    servingGuide: { glassware: "Glencairn or tulip whisky glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Serve neat; a few drops of spring water can open the herbal and smoky notes." },
    foodPairings: ["tandoori lamb chops", "mushroom galouti", "smoked chicken tikka", "aged cheddar", "dark chocolate"],
    whyBuyThis: "The blend gives a malt-led tour of Scottish styles without grain whisky in the mix.",
    faqs: [{ question: "Is Green Label a single malt?", answer: "No. It is a blended malt: single malt whiskies from more than one Scottish distillery, with no grain whisky." }, { question: "Is every component 15 years old?", answer: "The stated minimum maturation for the malts in Green Label is 15 years." }],
    metaTitle: "Johnnie Walker Green Label Price, Taste & Review | BevOry", metaDescription: "Explore Green Label's herbal malt, oak and gentle peat, plus Indian pairings. Check indicative city prices on BevOry."
  },
  "johnnie-walker-blue-label-cabf46d": {
    productName: "Johnnie Walker Blue Label", category: "Luxury Blended Scotch Whisky",
    shortOverview: "Blue Label is the range's rare-cask, special-occasion blend, layered rather than aggressively smoky. Sweetness and soft fruit lead towards its long, controlled smoke.",
    craftStory: "Johnnie Walker says only one in 10,000 casks is selected for Blue Label, with some stocks drawn from closed Scottish distilleries. The blend is built from those reserves for depth and a notably polished texture.",
    tastingNotes: { nose: "Soft dried fruit, orange and honeyed sweetness sit above a distant smoky note.", palate: "Velvety and layered, moving from sweet malt and fruit into cocoa, oak spice and restrained smoke.", finish: "Long and warming, with smoke fading slowly into oak and dark chocolate." },
    servingGuide: { glassware: "Glencairn or crystal tulip glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Pour a small measure neat and take time over it; only a few drops of spring water if desired." },
    foodPairings: ["galouti kebab", "slow-cooked mutton rogan josh", "roasted almonds", "70% dark chocolate", "smoked paneer"],
    whyBuyThis: "Its appeal is the seamless progression from soft sweetness to long smoke, not sheer peat intensity.",
    faqs: [{ question: "Does Blue Label have an age statement?", answer: "No age statement appears on the standard Blue Label; cask selection and blending define it." }, { question: "Should I mix Blue Label with cola?", answer: "For this collector-positioned blend, taste it neat first so the layered flavour is not masked." }],
    metaTitle: "Johnnie Walker Blue Label Price, Taste & Review | BevOry", metaDescription: "Blue Label brings layered fruit, cocoa and long smoke. Explore Indian food pairings and indicative city prices on BevOry."
  },
  "chivas-regal-12-yr-fb454e2": {
    productName: "Chivas Regal 12 Year", category: "12-Year-Old Blended Scotch Whisky",
    shortOverview: "Chivas 12 leans into honey, orchard fruit and a creamy texture rather than smoke. It is an approachable Speyside-hearted blended Scotch.",
    craftStory: "Strathisla single malt sits at the heart of the blend alongside Strathclyde grain whisky and other Scottish components. Each whisky is matured for at least 12 years before the Chivas blending team brings them together.",
    tastingNotes: { nose: "Heather honey, wild herbs and crisp orchard fruit.", palate: "Round and creamy, with honey, vanilla, hazelnut and butterscotch replacing the smoke some expect from Scotch.", finish: "Medium-long and gently sweet, with warm cereal and nutty traces." },
    servingGuide: { glassware: "Tulip whisky glass or highball glass", idealTemperature: "Cool room temperature (18–20°C)", recommendation: "Try neat for its honeyed texture, or use chilled soda and a lemon peel for a lighter serve." },
    foodPairings: ["malai chicken tikka", "paneer malai tikka", "cashew pulao", "honey-glazed carrots", "toasted hazelnuts"],
    whyBuyThis: "A credible choice for drinkers who prefer soft honey and fruit to a smoky Scotch profile.",
    faqs: [{ question: "Is Chivas 12 smoky?", answer: "Smoke is not the focus; the producer highlights honey, orchard fruit, vanilla and hazelnut." }, { question: "What does the 12 mean?", answer: "The youngest whisky in the blend has matured for at least 12 years." }],
    metaTitle: "Chivas Regal 12 Year Price, Taste & Review | BevOry", metaDescription: "Chivas 12 is creamy with honey, orchard fruit and hazelnut. Find Indian pairings and indicative city prices on BevOry."
  },
  "dewars-white-label-223c673": {
    productName: "Dewar's White Label", category: "Blended Scotch Whisky",
    shortOverview: "Dewar's White Label is an easy-going Scotch with heather honey, pear and toffee in the foreground. A faint smoky edge keeps its sweetness in check.",
    craftStory: "First blended in 1899, White Label combines malt and grain whiskies from Scotland. Dewar's describes a blend of up to thirty whiskies, drawing on reserves from its five distilleries.",
    tastingNotes: { nose: "Bright citrus, pear and heather honey.", palate: "Soft and moderately light, with vanilla fudge, toffee, toasted oak and a faint smoky thread.", finish: "Medium, with herbal freshness and honeyed sweetness." },
    servingGuide: { glassware: "Highball or rocks glass", idealTemperature: "Cool room temperature or chilled over ice", recommendation: "A highball with chilled soda and lemon keeps its pear-and-honey profile clear." },
    foodPairings: ["chicken malai tikka", "paneer tikka", "roasted cashews", "pepper chicken", "apple tart"],
    whyBuyThis: "It makes a Scotch-and-soda with fruit and honey still visible after dilution.",
    faqs: [{ question: "Is White Label a single malt?", answer: "No. It is a blended Scotch made from malt and grain whiskies." }, { question: "Does it have strong peat smoke?", answer: "No. Any smoke is light; citrus, pear, honey and toffee lead the profile." }],
    metaTitle: "Dewar's White Label Price, Taste & Review | BevOry", metaDescription: "Discover Dewar's White Label: pear, honey, toffee and light smoke. See Indian pairings and indicative city prices on BevOry."
  },
  "glenfiddich-15-years-a667cce": {
    productName: "Glenfiddich 15 Years", category: "Speyside Single Malt Scotch Whisky",
    shortOverview: "Glenfiddich 15 is a richer, darker-fruited step beyond the distillery's pear-led 12-year-old. Its Solera vat brings the cask influences into a notably even whole.",
    craftStory: "At Glenfiddich in Dufftown, Speyside, the malt matures in Spanish sherry and American bourbon casks, with new American oak used in the process. The whiskies are brought together in Glenfiddich's Solera vat, a method devised by malt master David Stewart.",
    tastingNotes: { nose: "Heather blossom, vanilla fudge and dark fruit.", palate: "Smooth and weighty, with marzipan, sherry-soaked fruit, oak, cinnamon and ginger.", finish: "Long and warming, with sweet spice and mellow oak." },
    servingGuide: { glassware: "Glencairn whisky glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Serve neat, pausing between sips; a few drops of spring water can lift the fruit and spice." },
    foodPairings: ["galouti kebab", "mutton rogan josh", "fig and walnut tart", "paneer with caramelised onion", "70% dark chocolate"],
    whyBuyThis: "Its Solera-married sherry, bourbon and new-oak flavours give more depth without relying on peat.",
    faqs: [{ question: "Is Glenfiddich 15 smoky?", answer: "It is not a peat-led malt; sherry fruit, marzipan and warming spice are its clearer signatures." }, { question: "What is the Solera vat?", answer: "It is Glenfiddich's marrying vessel, used to bring whiskies from different cask types into a consistent 15-year-old expression." }],
    metaTitle: "Glenfiddich 15 Years Price, Taste & Review | BevOry", metaDescription: "Glenfiddich 15 offers sherry fruit, marzipan and spice. Explore Indian pairings and indicative city prices on BevOry."
  },
  "glenfiddich-the-glenfiddich-12-yrs-f1a8da8": {
    productName: "Glenfiddich 12 Years", category: "Speyside Single Malt Scotch Whisky",
    shortOverview: "Glenfiddich 12 is a fruit-first Speyside malt whose pear note is unusually easy to recognise. Its light sweetness and subtle oak make it a clear introduction to single malt.",
    craftStory: "Distilled at Glenfiddich in Dufftown, the malt matures in American bourbon and Spanish sherry oak casks. Glenfiddich then marries the whisky in oak tuns before bottling.",
    tastingNotes: { nose: "Fresh pear and orchard blossom above a light malty sweetness.", palate: "Soft and balanced, moving from ripe pear to vanilla, creamy malt and quiet oak.", finish: "Long and gently warming, with sweet malt and a faint oak note." },
    servingGuide: { glassware: "Glencairn whisky glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Try neat first to catch the pear aroma; add only a few drops of water if you want a softer sip." },
    foodPairings: ["malai paneer tikka", "tandoori prawns", "roasted cashews", "pear and walnut salad", "mild chicken korma"],
    whyBuyThis: "The distinct pear note gives beginners an honest sensory marker rather than an abstract promise of smoothness.",
    faqs: [{ question: "Is Glenfiddich 12 peated?", answer: "It is not presented as a peated whisky; pear, vanilla and soft oak define its usual profile." }, { question: "Which casks shape it?", answer: "Glenfiddich identifies American bourbon and Spanish sherry oak casks, followed by marrying in oak tuns." }],
    metaTitle: "Glenfiddich 12 Years Price, Taste & Review | BevOry", metaDescription: "Taste Glenfiddich 12's pear, vanilla and soft oak. Find Indian pairing ideas and indicative city prices on BevOry."
  },
  "glenlivet-the-glenlivet-12-yrs-753ffe9": {
    productName: "The Glenlivet 12 Years", category: "Speyside Single Malt Scotch Whisky",
    shortOverview: "The Glenlivet 12 is bright and fruit-led, with pineapple standing out against its creamy finish. It offers a different Speyside fruit signature from Glenfiddich's pear.",
    craftStory: "The Glenlivet's tall copper stills and water from Josie's Well contribute to its distillery character in Speyside. The 12-year-old Double Oak expression uses European oak followed by American oak maturation.",
    tastingNotes: { nose: "Summer fruit, pineapple and a light floral lift.", palate: "Smooth and balanced, with juicy pineapple, orchard fruit and a vanilla-tinged creaminess.", finish: "Long, creamy and softly fruity rather than smoky." },
    servingGuide: { glassware: "Glencairn or tulip whisky glass", idealTemperature: "Room temperature (18–20°C)", recommendation: "Pour neat and let it rest a minute; a few drops of water can brighten its tropical fruit." },
    foodPairings: ["tandoori prawns", "malai paneer tikka", "fish amritsari", "pineapple chaat", "mild cashew chicken"],
    whyBuyThis: "It makes pineapple and cream tangible tasting cues in a classic 12-year-old Speyside malt.",
    faqs: [{ question: "Is The Glenlivet 12 smoky?", answer: "The official profile centres on fruit and a creamy finish, not peat smoke." }, { question: "Is it aged in two woods?", answer: "The Double Oak expression is matured with European and American oak influences." }],
    metaTitle: "The Glenlivet 12 Years Price, Taste & Review | BevOry", metaDescription: "The Glenlivet 12 brings pineapple, vanilla and a creamy finish. Explore Indian pairings and indicative city prices on BevOry."
  },
  "jameson-irish-whiskey-16d7006": {
    productName: "Jameson Irish Whiskey", category: "Blended Irish Whiskey",
    shortOverview: "Jameson Original balances light grain whisky with the creamy spice of Irish pot-still whiskey. Nutty sweetness and a soft sherry note make it notably easy to mix.",
    craftStory: "John Jameson began distilling in Dublin in 1780; today's Jameson is made at Midleton in County Cork. Malted and unmalted barley pot-still whiskey and grain whiskey are triple distilled, then matured in oak, including bourbon and sherry casks.",
    tastingNotes: { nose: "Light florals, toasted grain and vanilla with a faint sherry-fruit edge.", palate: "Creamy and gently spicy, with nuts, vanilla and sweet grain giving way to orchard fruit.", finish: "Medium and soft, leaving toasted wood and light spice." },
    servingGuide: { glassware: "Rocks glass or highball glass", idealTemperature: "Cool room temperature or chilled over ice", recommendation: "Taste neat first; for a long serve, add ice, ginger ale and a wedge of lime." },
    foodPairings: ["chicken tikka", "paneer pakora", "roasted cashews", "mushroom pepper fry", "apple crumble"],
    whyBuyThis: "Its pot-still spice adds character without making the whiskey difficult to drink.",
    faqs: [{ question: "Is Jameson Scotch?", answer: "No. Jameson is Irish whiskey produced at Midleton, County Cork." }, { question: "Is Jameson Original smoky?", answer: "Smoke is not a defining note; grain, nuts, vanilla and gentle spice are more prominent." }],
    metaTitle: "Jameson Irish Whiskey Price, Taste & Review | BevOry", metaDescription: "Jameson balances vanilla, nuts and pot-still spice. Explore Indian pairings and indicative city prices on BevOry."
  },
  "jameson-black-barrel-ff059e6": {
    productName: "Jameson Black Barrel", category: "Blended Irish Whiskey",
    shortOverview: "Black Barrel takes Jameson's familiar smoothness in a darker, more caramel-and-oak direction. The extra charred-cask influence makes it particularly good in an Old Fashioned.",
    craftStory: "At Midleton, triple-distilled Irish pot-still and grain whiskeys are blended after maturation across bourbon, sherry and double-charred barrels. Those casks bring intensified vanilla, toasted wood and spice.",
    tastingNotes: { nose: "Vanilla, caramel and toasted oak over soft fruit.", palate: "Rounder and richer than Jameson Original, moving from toffee to dark fruit and warm baking spice.", finish: "Medium-long, with sweet charred oak and spice lingering." },
    servingGuide: { glassware: "Rocks glass or tulip whisky glass", idealTemperature: "Cool room temperature (18–20°C)", recommendation: "Sip neat or over a large cube; its caramel depth also suits a restrained Old Fashioned." },
    foodPairings: ["mutton seekh kebab", "tandoori mushrooms", "chocolate mousse", "roasted pecans", "pepper chicken"],
    whyBuyThis: "Double-charred barrel character gives a clear reason to choose it over Jameson Original.",
    faqs: [{ question: "What makes Black Barrel different?", answer: "Its cask mix includes double-charred barrels, adding more vanilla, caramel and toasted oak." }, { question: "Is it a single malt?", answer: "No. It blends Irish pot-still and grain whiskeys." }],
    metaTitle: "Jameson Black Barrel Price, Taste & Review | BevOry", metaDescription: "Black Barrel layers caramel, toasted oak and spice. See Indian food pairings and indicative city prices on BevOry."
  },
  "jack-daniels-old-no-7-ad07e62": {
    productName: "Jack Daniel's Old No. 7", category: "Tennessee Whiskey",
    shortOverview: "Old No. 7 is the familiar Jack Daniel's profile: caramel, vanilla and wood over a mellow corn-led base. It works neat but has the backbone for cola and other simple long drinks.",
    craftStory: "Made in Lynchburg, Tennessee, from corn, rye, malted barley and limestone spring water, it is distilled and mellowed through sugar-maple charcoal. It then matures in new charred American white oak barrels.",
    tastingNotes: { nose: "Vanilla, caramel and light fruit over toasted wood.", palate: "Medium-bodied, with sweet corn, caramel and vanilla yielding to mild oak and rye spice.", finish: "Medium, warming and woody with a final caramel note." },
    servingGuide: { glassware: "Rocks glass or highball glass", idealTemperature: "Cool room temperature or chilled over ice", recommendation: "Try neat before adding ice; cola or soda works when a longer drink is wanted." },
    foodPairings: ["tandoori chicken", "barbecue paneer", "mutton seekh", "roasted peanuts", "caramelised banana"],
    whyBuyThis: "Its charcoal-mellowed sweetness makes the brand's signature style easy to identify in a glass.",
    faqs: [{ question: "Is Old No. 7 bourbon?", answer: "It is sold as Tennessee whiskey, made with a bourbon-like grain base and new charred oak, then charcoal-mellowed." }, { question: "Where is it made?", answer: "The Jack Daniel Distillery makes it in Lynchburg, Tennessee." }],
    metaTitle: "Jack Daniel's Old No. 7 Price, Taste & Review | BevOry", metaDescription: "Old No. 7 brings caramel, vanilla and toasted oak. Find Indian food pairings and indicative city prices on BevOry."
  },
  "jack-daniels-gentleman-jack-832cdad": {
    productName: "Jack Daniel's Gentleman Jack", category: "Double-Mellowed Tennessee Whiskey",
    shortOverview: "Gentleman Jack is Jack Daniel's softer-textured Tennessee whiskey, with apple and vanilla ahead of firmer oak. Its double charcoal mellowing is the point of difference.",
    craftStory: "Introduced in 1988, it is made in Lynchburg from the distillery's corn, rye and barley-malt recipe. It passes through sugar-maple charcoal before and after oak maturation, rather than only once.",
    tastingNotes: { nose: "Polished apple, sweet fruit and gentle spice.", palate: "Silky and light-to-medium in weight, with vanilla, ripe apple peel and mild caramel.", finish: "A quick sweetness gives way to a longer, lightly dry apple-and-wood fade." },
    servingGuide: { glassware: "Tulip whisky glass or rocks glass", idealTemperature: "Cool room temperature (18–20°C)", recommendation: "Serve neat to notice the softer texture; one large cube suits a slower, cooler pour." },
    foodPairings: ["malai chicken tikka", "paneer with apple chutney", "roasted almonds", "mild seekh kebab", "apple tart"],
    whyBuyThis: "The second charcoal-mellowing step makes its texture and apple sweetness visibly different from Old No. 7.",
    faqs: [{ question: "How is Gentleman Jack different from Old No. 7?", answer: "Gentleman Jack is charcoal-mellowed twice, before and after maturation, for a softer profile." }, { question: "Is it strongly smoky?", answer: "No. Apple, vanilla and gentle wood lead its profile." }],
    metaTitle: "Jack Daniel's Gentleman Jack Price, Taste & Review | BevOry", metaDescription: "Gentleman Jack offers apple, vanilla and a soft double-mellowed texture. See pairings and indicative city prices on BevOry."
  },
  "jack-daniels-tennessee-honey-0e1a65c": {
    productName: "Jack Daniel's Tennessee Honey", category: "Honey Whiskey Liqueur",
    shortOverview: "Tennessee Honey combines Jack Daniel's whiskey with honey liqueur for a sweeter, lower-proof serve. It is closer to a flavoured liqueur than a dry sipping whiskey.",
    craftStory: "The Lynchburg distillery uses Old No. 7 Tennessee Whiskey as the base, then mingles it with a proprietary honey liqueur. The whiskey's charcoal-mellowed character remains beneath the pronounced honey sweetness.",
    tastingNotes: { nose: "Honeycomb, vanilla and a faint oak note.", palate: "Viscous and distinctly sweet, with honey syrup, vanilla and soft whiskey spice.", finish: "Medium, sweet and warming, with honey lingering longest." },
    servingGuide: { glassware: "Small rocks glass", idealTemperature: "Well chilled (6–10°C)", recommendation: "Serve over ice with a squeeze of lemon; avoid adding more syrup to an already sweet spirit." },
    foodPairings: ["spicy chicken wings", "chilli paneer", "salted peanuts", "apple jalebi", "dark chocolate"],
    whyBuyThis: "The honey sweetness offers an accessible option for people who find dry whiskey too sharp.",
    faqs: [{ question: "Is Tennessee Honey straight whiskey?", answer: "No. It combines Jack Daniel's Tennessee Whiskey with honey liqueur." }, { question: "How sweet is it?", answer: "Honey is the leading flavour, so it is appreciably sweeter than Old No. 7." }],
    metaTitle: "Jack Daniel's Tennessee Honey Price, Taste & Review | BevOry", metaDescription: "Tennessee Honey mixes whiskey warmth with honey sweetness. Explore spicy Indian pairings and indicative city prices on BevOry."
  },
  "jim-beam-jim-beam-71942ec": {
    productName: "Jim Beam Original", category: "Kentucky Straight Bourbon Whiskey",
    shortOverview: "Jim Beam Original is a classic corn-led Kentucky bourbon, with vanilla and caramel ahead of light oak spice. Its familiar profile makes it a practical baseline for bourbon cocktails.",
    craftStory: "The Beam family has made whiskey in Kentucky for generations. The Original uses a grain mash and limestone-filtered water, then spends at least four years in new charred American white oak barrels.",
    tastingNotes: { nose: "Vanilla, sweet corn and caramel with a light toasted-oak edge.", palate: "Medium-bodied, initially sweet and rounded before grain, oak and gentle spice appear.", finish: "Medium and warm, leaving vanilla and dry oak." },
    servingGuide: { glassware: "Rocks glass or highball glass", idealTemperature: "Cool room temperature or chilled over ice", recommendation: "Try it over a large cube, or use it in an Old Fashioned with a light hand on the sugar." },
    foodPairings: ["tandoori chicken", "barbecue paneer", "mutton seekh", "roasted corn chaat", "pecan tart"],
    whyBuyThis: "Its vanilla-caramel core makes bourbon's new-charred-oak style easy to understand.",
    faqs: [{ question: "Is Jim Beam Original a bourbon?", answer: "Yes. It is Kentucky straight bourbon matured in new charred oak barrels." }, { question: "How does it compare with Scotch?", answer: "It is generally sweeter and more vanilla-led than many malt-forward or smoky Scotch whiskies." }],
    metaTitle: "Jim Beam Original Price, Taste & Review | BevOry", metaDescription: "Jim Beam Original brings vanilla, caramel and oak. See Indian pairings and indicative city prices on BevOry."
  },
  "jim-beam-double-oak-5a1727f": {
    productName: "Jim Beam Double Oak", category: "Double-Barrelled Kentucky Bourbon",
    shortOverview: "Double Oak pushes Jim Beam's caramel-and-vanilla profile towards toasted wood and deeper spice. It is a useful step for drinkers who want more barrel character than the Original.",
    craftStory: "The bourbon first matures in fresh charred American white oak, then moves to a second charred oak barrel. Both stages take place within Jim Beam's Kentucky bourbon-making tradition.",
    tastingNotes: { nose: "Caramel and vanilla meet toasted wood.", palate: "Fuller and darker than the Original, with toffee, caramel and firm spiced oak.", finish: "Smooth and lingering, with oak spice outlasting the sweetness." },
    servingGuide: { glassware: "Rocks or tulip whisky glass", idealTemperature: "Cool room temperature (18–20°C)", recommendation: "Sip neat or over one large cube; it also gives an Old Fashioned a pronounced oak backbone." },
    foodPairings: ["mutton ghee roast", "chargrilled chicken tikka", "smoked paneer", "roasted pecans", "dark chocolate brownie"],
    whyBuyThis: "A second charred barrel produces a clear, savoury oak contrast to the sweeter base bourbon.",
    faqs: [{ question: "What does Double Oak mean here?", answer: "The whiskey matures in one new charred oak barrel and then a second charred oak barrel." }, { question: "Is it sweeter than Jim Beam Original?", answer: "It retains caramel sweetness but adds more pronounced toasted and spiced oak." }],
    metaTitle: "Jim Beam Double Oak Price, Taste & Review | BevOry", metaDescription: "Double Oak adds toasted wood, toffee and spice to Jim Beam. Find Indian pairings and indicative city prices on BevOry."
  },
  "bacardi-white-rum-185434b": {
    productName: "Bacardí White Rum", category: "White Rum",
    shortOverview: "Bacardí Superior is a dry, light-bodied white rum designed to let lime and mint remain clear in cocktails. Its almond and fruit notes are quieter than the sweet aroma suggests.",
    craftStory: "Don Facundo Bacardí Massó developed the original style in 1862. The rum is aged in American white oak and charcoal-filtered for its clear colour and clean, mixable profile.",
    tastingNotes: { nose: "Light almond, fruit and a little lime zest.", palate: "Smooth and creamy at first, then vanilla and delicate fruit settle into a dry line.", finish: "Short, crisp and clean with a trace of almond." },
    servingGuide: { glassware: "Highball or Collins glass", idealTemperature: "Chilled over ice (6–10°C)", recommendation: "Use fresh lime, mint and soda for a Mojito, or lime and measured sugar for a Daiquiri." },
    foodPairings: ["coastal rava-fried fish", "tandoori prawns", "cucumber chaat", "malai paneer tikka", "lime-and-chilli corn"],
    whyBuyThis: "Its dry finish keeps classic rum cocktails bright instead of syrupy.",
    faqs: [{ question: "Is Bacardí White Rum sweet?", answer: "It smells gently fruity but is deliberately dry in the glass." }, { question: "Why is it clear if it sees oak?", answer: "The rum is oak-aged and then charcoal-filtered, which removes colour as well as refining flavour." }],
    metaTitle: "Bacardí White Rum Price, Taste & Review | BevOry", metaDescription: "Bacardí White Rum is light, dry and ideal for Mojitos. Explore Indian pairings and indicative city prices on BevOry."
  },
  "bacardi-gold-rum-cec7865": {
    productName: "Bacardí Gold Rum", category: "Gold Rum",
    shortOverview: "Bacardí Gold offers more toasted oak and ginger warmth than the brand's white rum. It remains dry enough for citrus-led long drinks.",
    craftStory: "Bacardí's rum makers develop Gold's colour and flavour in toasted oak barrels. A proprietary charcoal blend helps shape its mellow, lightly wooded character.",
    tastingNotes: { nose: "Toasted nuts, butter and dry vanilla.", palate: "Round and gently toasted, with almond, ginger root, soft oak and a little sweetness.", finish: "Medium, dry-leaning and slightly sweet, with oak and ginger remaining." },
    servingGuide: { glassware: "Highball or rocks glass", idealTemperature: "Chilled over ice (6–10°C)", recommendation: "Try a Cuba Libre with fresh lime and cola; keep the cola measured so the rum's toasted notes remain." },
    foodPairings: ["tandoori chicken", "chilli garlic prawns", "pepper paneer", "roasted almonds", "caramelised pineapple"],
    whyBuyThis: "It brings a little barrel warmth to a rum-and-cola without the heaviness of a dark rum.",
    faqs: [{ question: "Is Gold the same as White Rum?", answer: "No. Gold has more toasted oak, almond and ginger character; White Rum is lighter and drier." }, { question: "What cocktail suits it?", answer: "A lime-forward Cuba Libre is a natural fit for its oak and vanilla notes." }],
    metaTitle: "Bacardí Gold Rum Price, Taste & Review | BevOry", metaDescription: "Bacardí Gold layers toasted oak, almond and ginger. See Indian food pairings and indicative city prices on BevOry."
  },
  "bombay-sapphire-bombay-sapphire-b3804be": {
    productName: "Bombay Sapphire", category: "London Dry Gin",
    shortOverview: "Bombay Sapphire balances juniper with citrus and a layered botanical spice rather than driving only the pine note. Its relatively delicate profile is easy to recognise in a clean gin and tonic.",
    craftStory: "Ten botanicals, including juniper, lemon peel, coriander seed, cubeb berries and grains of paradise, are used in Bombay Sapphire's vapour-infusion distillation. Passing alcohol vapour through the botanicals draws out their aromatics without boiling them in the spirit.",
    tastingNotes: { nose: "Juniper and lemon peel rise first, followed by coriander and a faint peppery spice.", palate: "Light and clean, with citrus, pine and warm cubeb-and-coriander notes held in balance.", finish: "Medium and dry, with citrus peel and botanical spice." },
    servingGuide: { glassware: "Balloon gin glass or highball", idealTemperature: "Chilled over ice (4–8°C)", recommendation: "Use cold tonic, plenty of ice and a simple lemon wedge; too many garnishes obscure the botanicals." },
    foodPairings: ["tandoori prawns", "malai paneer tikka", "cucumber chaat", "coastal fried fish", "lemon-coriander chicken"],
    whyBuyThis: "Vapour infusion gives it a botanical profile that stays clear and controlled in a tonic.",
    faqs: [{ question: "What botanicals are in Bombay Sapphire?", answer: "The producer lists ten, including juniper, lemon peel, coriander, cubeb berries and grains of paradise." }, { question: "Is Bombay Sapphire sweet?", answer: "No. It is a dry gin; citrus and spice give aroma without making it sugary." }],
    metaTitle: "Bombay Sapphire Price, Taste & Review | BevOry", metaDescription: "Bombay Sapphire combines juniper, lemon and botanical spice. Explore Indian pairings and indicative city prices on BevOry."
  },
  "tanqueray-tanqueray-dd6b75e": {
    productName: "Tanqueray London Dry", category: "London Dry Gin",
    shortOverview: "Tanqueray London Dry puts juniper firmly in front, with coriander and angelica adding dry, herbal structure. It makes a distinctly gin-led tonic or Martini.",
    craftStory: "Charles Tanqueray developed the London Dry style that carries his name. The producer identifies juniper, coriander, angelica and liquorice among its defining botanicals and describes the gin as four-times distilled.",
    tastingNotes: { nose: "Piney juniper, peppery coriander and aromatic angelica.", palate: "Brisk and dry, moving from juniper to herbal spice and a mild liquorice sweetness.", finish: "Medium, clean and floral-herbal rather than fruity." },
    servingGuide: { glassware: "Highball or chilled Martini glass", idealTemperature: "Chilled over ice (4–8°C)", recommendation: "For a gin and tonic, use firm ice and a lime wedge; for a Martini, keep the vermouth modest." },
    foodPairings: ["tandoori prawns", "cucumber chaat", "hariyali chicken tikka", "paneer with coriander chutney", "fried fish with lime"],
    whyBuyThis: "Choose it when you want the juniper to remain unmistakable after tonic is added.",
    faqs: [{ question: "Is Tanqueray London Dry citrus-flavoured?", answer: "No. Its core profile is juniper and herbs; fresh citrus is commonly added as a garnish." }, { question: "What is the best simple serve?", answer: "A cold gin and tonic with lime lets its juniper and coriander lead." }],
    metaTitle: "Tanqueray London Dry Price, Taste & Review | BevOry", metaDescription: "Tanqueray London Dry leads with juniper and coriander. See Indian pairings and indicative city prices on BevOry."
  },
  "absolut-vodka-ed3ecef": {
    productName: "Absolut Vodka", category: "Swedish Vodka",
    shortOverview: "Absolut Original is not entirely flavourless: a quiet grain note and hint of dried fruit sit within a clean, full texture. Its restraint makes it a dependable base for citrus and savoury cocktails.",
    craftStory: "Absolut is produced and bottled in Åhus, southern Sweden. Swedish winter wheat and local well water feed a continuous distillation process; this is the brand's single-source production model.",
    tastingNotes: { nose: "Clean grain and a faint dried-fruit sweetness.", palate: "Fuller-bodied than a neutral first impression suggests, with wheat, soft fruit and a gentle warmth.", finish: "Medium and clean, leaving light grain and a dry edge." },
    servingGuide: { glassware: "Chilled small rocks glass or highball", idealTemperature: "Well chilled (4–8°C)", recommendation: "Serve cold with soda and lime, or use it in a properly diluted Vodka Martini." },
    foodPairings: ["tandoori prawns", "cucumber chaat", "paneer tikka", "smoked salmon blini", "masala olives"],
    whyBuyThis: "Its subtle wheat character gives a mixer-friendly vodka a recognisable identity.",
    faqs: [{ question: "Where is Absolut Vodka made?", answer: "It is produced and bottled in Åhus in southern Sweden." }, { question: "Does it taste of wheat?", answer: "A mild grain character is present, alongside a faint dried-fruit note." }],
    metaTitle: "Absolut Vodka Price, Taste & Review | BevOry", metaDescription: "Absolut Vodka has clean wheat and subtle dried-fruit notes. Explore Indian pairings and indicative city prices on BevOry."
  },
  "smirnoff-vodka-c704418": {
    productName: "Smirnoff Vodka", category: "Classic Vodka",
    shortOverview: "Smirnoff's classic vodka is a clean, dry spirit whose main strength is its unobtrusive role in mixed drinks. The profile stays crisp rather than creamy or richly grain-led.",
    craftStory: "The Smirnoff brand traces its founding to P. A. Smirnov in 1864. Its No. 21 classic expression is triple distilled and filtered ten times for a neutral, dry style; regional bottle labels should be checked for their exact specification.",
    tastingNotes: { nose: "A restrained grain note and light alcohol lift.", palate: "Light-bodied and neutral, with faint cereal sweetness before a dry turn.", finish: "Short, clean and dry, with little lingering flavour." },
    servingGuide: { glassware: "Highball or chilled Martini glass", idealTemperature: "Well chilled (4–8°C)", recommendation: "Use plenty of ice with soda and fresh lime; its neutral profile also suits a Moscow Mule." },
    foodPairings: ["cucumber chaat", "tandoori prawns", "salted cashews", "paneer tikka", "smoked fish"],
    whyBuyThis: "It keeps lime, ginger and other cocktail ingredients in focus rather than competing with them.",
    faqs: [{ question: "How is Smirnoff No. 21 made?", answer: "The producer says the No. 21 expression is distilled three times and filtered ten times." }, { question: "Is it a flavoured vodka?", answer: "The classic Smirnoff Vodka listing is unflavoured; check the exact bottle label for the expression." }],
    metaTitle: "Smirnoff Vodka Price, Taste & Review | BevOry", metaDescription: "Smirnoff's classic vodka is clean and dry for long drinks. See Indian pairings and indicative city prices on BevOry."
  },
  "jagermeister-liqueur-ab3981b": {
    productName: "Jägermeister", category: "German Herbal Liqueur",
    shortOverview: "Jägermeister is a bittersweet herbal liqueur, not a whiskey or a neutral shot. Its aromatic layers make more sense when tasted cold and slowly.",
    craftStory: "Produced in Germany, the original recipe draws on 56 herbs, roots and spices. The botanical mixture is matured in oak, while the precise recipe remains proprietary.",
    tastingNotes: { nose: "Sweet anise, dark herbs and baking spice over a soft oak background.", palate: "Dense and syrupy, beginning sweet before bitter herbs, roots and warming spice take over.", finish: "Long and bittersweet, with herbal spice and a dry oak trace." },
    servingGuide: { glassware: "Small chilled shot glass", idealTemperature: "Ice-cold, about −18°C", recommendation: "Keep the bottle chilled and pour a small measure; sip slowly to notice the bitter-herbal finish." },
    foodPairings: ["chilli chicken", "pepper mushroom fry", "mutton seekh", "dark chocolate truffles", "spiced orange peel"],
    whyBuyThis: "Its distinctive sweet-to-bitter transition makes it far more than a one-note party shot.",
    faqs: [{ question: "How many botanicals does Jägermeister use?", answer: "The producer states that the original liqueur uses 56 herbs, roots and spices." }, { question: "Should it be served warm?", answer: "The brand's signature serve is ice-cold, which reins in the sweetness and sharpens the herbal finish." }],
    metaTitle: "Jägermeister Price, Taste & Review | BevOry", metaDescription: "Jägermeister brings anise, herbs, spice and a bitter finish. Explore Indian pairings and indicative city prices on BevOry."
  },
  "kingfisher-premium-lager-can-a3c8534": {
    productName: "Kingfisher Premium Lager Can", category: "Indian Premium Lager Beer",
    shortOverview: "Kingfisher Premium is a crisp, easy-drinking lager designed for refreshment alongside spicy food. The can format protects it from light until pouring.",
    craftStory: "Kingfisher Premium belongs to United Breweries' Indian beer portfolio. As a lager, its character comes from fermented grain, hops and cold conditioning rather than wood maturation or distillation.",
    tastingNotes: { nose: "Light malt grain with a modest hop lift.", palate: "Light-bodied and briskly carbonated, with grain sweetness followed by mild bitterness.", finish: "Short, clean and refreshing, with a small hop bite." },
    servingGuide: { glassware: "Clean pilsner or lager glass", idealTemperature: "Cold (4–6°C)", recommendation: "Chill the can, then pour into a clean glass in one steady motion to form a modest head." },
    foodPairings: ["chicken tikka", "paneer pakora", "masala peanuts", "tandoori fish", "spicy potato wedges"],
    whyBuyThis: "Its restrained bitterness gives hot, salty Indian snacks room to lead.",
    faqs: [{ question: "Is Kingfisher Premium a strong beer?", answer: "The Premium Lager is distinct from Kingfisher Strong; check the can label for the local ABV." }, { question: "Why pour a canned lager into a glass?", answer: "Pouring releases aroma and lets the carbonation form a proper head." }],
    metaTitle: "Kingfisher Premium Lager Can Price, Taste & Review | BevOry", metaDescription: "Kingfisher Premium is a crisp lager for spicy Indian snacks. Explore tasting notes and indicative city prices on BevOry."
  },
  "kingfisher-ultra-417002d": {
    productName: "Kingfisher Ultra", category: "Indian Premium Lager Beer",
    shortOverview: "Kingfisher Ultra is a smoother, more polished lager than the brand's everyday Premium offering. It stays light and crisp rather than pushing hop bitterness.",
    craftStory: "Launched in India in 2009, Ultra is part of United Breweries' Kingfisher range. The brand highlights selected hops and a six-step filtration process for its smoother lager profile.",
    tastingNotes: { nose: "Clean malt with a restrained floral-hop impression.", palate: "Light and finely carbonated, with a soft grain sweetness and controlled bitterness.", finish: "Short, dry and crisp, leaving a faint hop note." },
    servingGuide: { glassware: "Clean pilsner glass", idealTemperature: "Cold (4–6°C)", recommendation: "Serve well chilled in a clean glass; avoid freezing it so the delicate aroma remains detectable." },
    foodPairings: ["malai paneer tikka", "tandoori prawns", "hara bhara kebab", "salted cashews", "fried fish"],
    whyBuyThis: "Its filtration-led smoothness makes it a sensible lager with less aggressively spiced food.",
    faqs: [{ question: "Is Kingfisher Ultra a witbier?", answer: "This Ultra listing refers to the premium lager; Kingfisher Ultra Witbier is a separate product." }, { question: "What distinguishes Ultra from Premium?", answer: "The brand highlights six-step filtration and selected hops for a smoother finish." }],
    metaTitle: "Kingfisher Ultra Price, Taste & Review | BevOry", metaDescription: "Kingfisher Ultra is a smooth, crisp premium lager. See Indian food pairings and indicative city prices on BevOry."
  },
  "heineken-beer-7284257": {
    productName: "Heineken Original", category: "Dutch Premium Lager Beer",
    shortOverview: "Heineken Original combines subtle fruit from its house yeast with a clear malt body and gentle hop bitterness. It is fuller-flavoured than many very light lagers while staying refreshing.",
    craftStory: "Heineken's brewing heritage dates to 1873 in the Netherlands. Its Original lager uses malted barley, hop extract, water and the proprietary Heineken A-Yeast, which helps create the familiar fruit note.",
    tastingNotes: { nose: "Soft malt with a subtle fruity, almost apple-like yeast note.", palate: "Crisp and moderately bodied, with malt sweetness balanced by restrained hop bitterness.", finish: "Short to medium, clean and softly bitter." },
    servingGuide: { glassware: "Pilsner or lager glass", idealTemperature: "Cold (4–6°C)", recommendation: "Pour cold into a clean glass and leave space for the head; a frozen glass can mute the fruit note." },
    foodPairings: ["tandoori chicken", "fish amritsari", "paneer pakora", "salted fries", "roasted masala peanuts"],
    whyBuyThis: "A-Yeast's subtle fruit gives this familiar lager a recognisable aroma beyond simple refreshment.",
    faqs: [{ question: "What gives Heineken its fruity note?", answer: "The brewer points to its proprietary A-Yeast as a contributor to the beer's subtle fruit character." }, { question: "Is Heineken Original a wheat beer?", answer: "No. It is a malted-barley lager." }],
    metaTitle: "Heineken Original Price, Taste & Review | BevOry", metaDescription: "Heineken Original balances subtle fruit, malt and soft bitterness. Find Indian pairings and indicative city prices on BevOry."
  },
  "sula-chenin-blanc-9b667c3": {
    productName: "Sula Chenin Blanc", category: "Off-Dry Indian White Wine",
    shortOverview: "Sula Chenin Blanc is an off-dry Nashik white with tropical fruit and a small honeyed edge. Its fruit-acid balance makes it welcoming without tasting like a dessert wine.",
    craftStory: "Sula makes this wine from Chenin Blanc grapes in Maharashtra's Nashik wine region. The house styles it off-dry, retaining a touch of sweetness to balance fresh acidity.",
    tastingNotes: { nose: "Ripe tropical fruit and a light honeyed note.", palate: "Light and juicy, with tropical fruit sweetness checked by refreshing acidity.", finish: "Medium, fruity and gently sweet, then clean." },
    servingGuide: { glassware: "White-wine glass", idealTemperature: "Chilled (8–10°C)", recommendation: "Chill without freezing; let the glass warm briefly if the fruit aroma seems muted." },
    foodPairings: ["Gujarati thali", "rava-fried fish", "paneer tikka", "vegetable quiche", "mild Thai curry"],
    whyBuyThis: "Its gentle sweetness has enough acidity to work with the sweet-sour contrasts of Indian food.",
    faqs: [{ question: "Is Sula Chenin Blanc dry?", answer: "No. Sula describes it as off-dry, meaning a little sweetness remains." }, { question: "Where is it made?", answer: "It comes from Sula's wine production in the Nashik region of Maharashtra." }],
    metaTitle: "Sula Chenin Blanc Price, Taste & Review | BevOry", metaDescription: "Sula Chenin Blanc is off-dry with tropical fruit and honey. Explore Indian pairings and indicative city prices on BevOry."
  },
  "sula-sauvignon-blanc-a253b4c": {
    productName: "Sula Sauvignon Blanc", category: "Dry Indian White Wine",
    shortOverview: "Sula Sauvignon Blanc is a dry, brisk Nashik white with green fruit and bell-pepper character. Its acidity makes it especially useful with herb-led starters.",
    craftStory: "Sula's classic Sauvignon Blanc is made from Sauvignon Blanc grapes in the Nashik wine region. Its fresh, fruit-and-green profile is distinct from the oak-influenced Source Sauvignon Blanc Reserve.",
    tastingNotes: { nose: "Green apple, guava and freshly cut bell pepper.", palate: "Light and lively, with tart green fruit, tropical guava and clean acidity.", finish: "Medium, crisp and lightly herbal." },
    servingGuide: { glassware: "White-wine glass", idealTemperature: "Chilled (8–10°C)", recommendation: "Serve chilled with a simple starter; avoid over-icing, which suppresses the green-fruit aroma." },
    foodPairings: ["hara bhara kebab", "paneer tikka", "tandoori prawns", "cucumber chaat", "grilled asparagus"],
    whyBuyThis: "The guava-and-bell-pepper profile is a clear Indian Sauvignon Blanc signature that works with green chutney.",
    faqs: [{ question: "Is this the Reserve bottling?", answer: "No. This is Sula's classic Sauvignon Blanc; The Source Sauvignon Blanc Reserve is a separate wine." }, { question: "Is it a sweet white wine?", answer: "It is presented as a refreshing, dry style rather than an off-dry wine." }],
    metaTitle: "Sula Sauvignon Blanc Price, Taste & Review | BevOry", metaDescription: "Sula Sauvignon Blanc brings guava, green apple and fresh acidity. Find Indian pairings and indicative city prices on BevOry."
  },
  "sula-shiraz-cabernet-556e61d": {
    productName: "Sula Shiraz Cabernet", category: "Indian Red Wine Blend",
    shortOverview: "Sula Shiraz Cabernet is a dark-fruited Nashik red designed for food, with pepper and mocha behind the fruit. The blend has enough structure for spiced grilled dishes.",
    craftStory: "Sula's published blend is predominantly Shiraz with a smaller share of Cabernet Sauvignon. Made in the Nashik wine region, it brings the plush fruit of Shiraz together with Cabernet's firmer frame; proportions can vary by release.",
    tastingNotes: { nose: "Blackberry, dark plum and ripe cherry with pepper and a light mocha edge.", palate: "Medium-bodied, fruit-forward and gently tannic, moving from black fruit to olive and warm spice.", finish: "Medium, with pepper, dark fruit and mild drying tannin." },
    servingGuide: { glassware: "Medium-bowled red-wine glass", idealTemperature: "Slightly cool (16–18°C)", recommendation: "Open shortly before the meal and taste; a brief swirl is usually enough for this approachable red." },
    foodPairings: ["mutton rogan josh", "chicken tikka masala", "mutton ghee roast", "rajma masala", "tandoori chicken"],
    whyBuyThis: "Its black fruit and pepper are particularly well matched to tomato-rich and grilled Indian dishes.",
    faqs: [{ question: "Which grapes are in Sula Shiraz Cabernet?", answer: "It blends Shiraz and Cabernet Sauvignon; check the bottle for the release-specific proportions." }, { question: "Should I serve it at warm room temperature?", answer: "No. About 16–18°C keeps the fruit fresh and the alcohol in balance." }],
    metaTitle: "Sula Shiraz Cabernet Price, Taste & Review | BevOry", metaDescription: "Sula Shiraz Cabernet brings blackberry, pepper and mocha. See Indian food pairings and indicative city prices on BevOry."
  },
};
