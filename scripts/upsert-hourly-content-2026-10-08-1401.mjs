import "dotenv/config";
import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { PrismaClient } from "@prisma/client";

const publishedAt = "2026-10-08T08:31:30.981Z";

export const posts = [
  {
    id: "news-japan-brewers-price-collusion-investigation-october-2026",
    title: "Japan Probes Major Brewers Over Suspected Price Collusion",
    slug: "japan-brewers-price-collusion-investigation-october-2026",
    excerpt:
      "Japan's competition watchdog has inspected major brewers over suspected price collusion. Suntory confirms an inspection and says it will cooperate.",
    cover_emoji: "news",
    category: "News",
    tags: ["Japan beer industry", "Asahi", "Kirin", "Sapporo", "Suntory", "competition investigation"],
    meta_title: "Japan Brewer Price-Collusion Investigation | BevOry",
    meta_description:
      "Japan investigates Asahi, Kirin, Sapporo and Suntory over suspected price collusion. Read the confirmed events, company response and consumer context.",
    selection_note:
      "A developing international competition story reported on 7-8 October, supported by a first-party Suntory statement; allegation language is preserved throughout.",
    source_links: [
      "https://www.channelnewsasia.com/east-asia/japan-raid-beer-giants-anti-monopoly-prices-6438606",
      "https://www.suntory.co.jp/note/detail/261007_008195.html",
      "https://www.abc.net.au/news/2026-10-08/japan-raids-biggest-beer-brewers-over-price-collusion-claims/107241114",
    ],
    content: String.raw`
<p><strong>Japan's Fair Trade Commission has inspected major brewers as part of an investigation into suspected price collusion.</strong> Asahi Breweries, Kirin Brewery, Sapporo Breweries and Suntory are under investigation, according to <a href="https://www.channelnewsasia.com/east-asia/japan-raid-beer-giants-anti-monopoly-prices-6438606" target="_blank" rel="noopener noreferrer">AFP's report published by CNA</a>. The searches took place on 7 October.</p>

<h2>Suntory Confirms An Inspection</h2>
<p>In its <a href="https://www.suntory.co.jp/note/detail/261007_008195.html" target="_blank" rel="noopener noreferrer">7 October statement</a>, Suntory Holdings says Suntory was inspected over suspected violations of Japan's anti-monopoly law relating to alcohol trading. The company says it will cooperate fully with the investigation.</p>

<h2>What Investigators Are Examining</h2>
<p>The AFP report describes suspicions of coordinated wholesale beer-price increases. <a href="https://www.abc.net.au/news/2026-10-08/japan-raids-biggest-beer-brewers-over-price-collusion-claims/107241114" target="_blank" rel="noopener noreferrer">ABC's 8 October coverage</a> also reports the investigation and says the four companies separately expressed their intention to cooperate.</p>
<p>The distinction matters: an investigation is not a finding that the companies broke the law. The confirmed event is the inspection; alleged coordination is what authorities are examining.</p>

<h2>What Beer Buyers Should Take From The News</h2>
<p>Our reading is that this story concerns commercial pricing conduct in Japan. It should not be treated as a notice of changed Indian retail prices, a product recall or an immediate shortage in Indian shops.</p>
<p>For a purchase in Mumbai, Delhi or Bengaluru, compare the exact beer, pack size and local listing. For the investigation itself, follow subsequent findings and company statements. A familiar brand name makes the story relevant to drinkers, but it does not turn an allegation into a verdict.</p>
`.trim(),
  },
  {
    id: "news-lofted-spirits-nick-smith-master-distiller-2026",
    title: "Lofted Spirits Names Nick Smith Master Distiller",
    slug: "lofted-spirits-nick-smith-master-distiller-2026",
    excerpt:
      "Nick Smith takes production leadership at Lofted Spirits while Steve Nally becomes Master Distiller Emeritus; Bardstown also marks its millionth barrel.",
    cover_emoji: "news",
    category: "News",
    tags: ["Lofted Spirits", "Nick Smith", "Steve Nally", "Bardstown Bourbon Company", "Green River Whiskey"],
    meta_title: "Nick Smith Named Lofted Spirits Master Distiller | BevOry",
    meta_description:
      "Lofted Spirits appoints Nick Smith as master distiller. Read Steve Nally's new role, the brands involved and Bardstown's million-barrel milestone.",
    selection_note:
      "A 7 October company announcement with named production responsibilities and a dated milestone, adding a distinct bourbon-industry story to the regulatory news.",
    source_links: [
      "https://kybourbon.com/industry-news/kybourbon-lofted-spirits-elevates-nick-smith-to-master-distiller/",
    ],
    content: String.raw`
<p><strong>Lofted Spirits has named Nick Smith master distiller, with responsibility for production at Bardstown Bourbon Company, Green River Whiskey and Lofted Custom Spirits.</strong> The company announced the appointment on 7 October in a <a href="https://kybourbon.com/industry-news/kybourbon-lofted-spirits-elevates-nick-smith-to-master-distiller/" target="_blank" rel="noopener noreferrer">release carried by the Kentucky Distillers' Association</a>. Steve Nally moves into the role of Master Distiller Emeritus.</p>

<h2>A Handover Between Longtime Colleagues</h2>
<p>Smith joined Bardstown Bourbon Company in 2016 after beginning his distilling career at Jim Beam. He has worked alongside Nally for the past decade. Nally will continue as an ambassador for Lofted Spirits and Kentucky bourbon.</p>
<p>The appointment connects a familiar production team with a wider leadership remit. Its scope includes the company's own whiskey brands and its custom spirits business, rather than a single newly launched bottle.</p>

<h2>Bardstown Reaches A Million-Barrel Milestone</h2>
<p>The same announcement says Bardstown Bourbon Company has filled its one millionth barrel since distillation began in September 2016.</p>
<p>That is a cumulative production milestone. It is not a million bottles sold, nor a statement that every barrel has reached the same age or is ready for release. Barrel filling, maturation and a finished bottle are different stages of whiskey production.</p>

<h2>How To Read The News As A Bourbon Drinker</h2>
<p>A master-distiller appointment tells you who is responsible for production. By itself, it does not describe a particular whiskey's grain recipe, barrel selection or bottling strength, and it is not a tasting score.</p>
<p>For followers of Bardstown and Green River, Smith's promotion is a useful name to recognise in future releases. When choosing a bottle, keep the expression's age, proof and stated production details in view. The people behind a whiskey matter; the liquid still deserves its own assessment.</p>
`.trim(),
  },
  {
    id: "guide-bottled-in-bond-bourbon-meaning-india",
    title: "Bottled-in-Bond Bourbon: Age, Proof And Serving Explained",
    slug: "bottled-in-bond-bourbon-meaning-india",
    excerpt:
      "Bottled-in-bond bourbon means more than 100 proof. Understand the four-year minimum, distilling-season rule and how it differs from straight bourbon.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["bottled-in-bond meaning", "100 proof bourbon", "straight bourbon", "Evan Williams", "bourbon India"],
    meta_title: "Bottled-in-Bond Bourbon Meaning & Serving | BevOry",
    meta_description:
      "Decode bottled-in-bond bourbon: four-year minimum, 100 proof and one distilling season. Find serving tips, Indian pairings and city prices on BevOry.",
    selection_note:
      "A focused American-whiskey label guide, chosen after the live catalogue showed an existing bourbon-versus-Scotch article; no duplicate broad comparison is added.",
    source_links: [
      "https://www.ecfr.gov/current/title-27/chapter-I/subchapter-A/part-5/subpart-F/section-5.88",
      "https://www.ecfr.gov/current/title-27/chapter-I/subchapter-A/part-5/subpart-I/section-5.143",
      "https://bottledinbond.heavenhilldistillery.com/",
      "https://heavenhilldistillery.com/ew-bottled-in-bond.php/1000",
    ],
    content: String.raw`
<p><strong>Bottled-in-bond bourbon is American bourbon that meets additional rules for production, ageing and bottling strength.</strong> It is bottled at exactly 100 US proof, or 50% ABV, and must be at least four years old. The term tells you more than the alcohol strength alone.</p>

<h2>What The Label Guarantees</h2>
<p>Under <a href="https://www.ecfr.gov/current/title-27/chapter-I/subchapter-A/part-5/subpart-F/section-5.88" target="_blank" rel="noopener noreferrer">27 CFR 5.88</a>, bonded spirits must come from the same distiller, distillery and distilling season, using the same class of materials. The rule also sets the four-year storage minimum and exactly 50% ABV at bottling. For American products, the label identifies the distillery and the production and bottling plant numbers.</p>
<p>One distilling season means January-June or July-December, as <a href="https://bottledinbond.heavenhilldistillery.com/" target="_blank" rel="noopener noreferrer">Heaven Hill's bottled-in-bond guide</a> explains. It does not mean the whiskey must come from only one barrel.</p>

<h2>Straight Bourbon Is A Different Claim</h2>
<p>American bourbon must use a grain mash containing at least 51% corn and be stored in new charred oak. Straight bourbon has a minimum two-year ageing requirement. The <a href="https://www.ecfr.gov/current/title-27/chapter-I/subchapter-A/part-5/subpart-I/section-5.143" target="_blank" rel="noopener noreferrer">US whisky standards</a> set out those distinctions.</p>
<p>So straight bourbon alone does not promise four years of ageing, a single distilling season or 100 proof. Equally, a bottle marked 100 proof is not automatically bottled-in-bond. Strength is only one part of the bonded designation.</p>

<h2>What 100 Proof Does Not Mean</h2>
<p>It means 50% alcohol by volume, not 100% alcohol. It is also not a score for quality or a guarantee that the whiskey will taste sweeter, smoother or better than another bourbon. Start with the specific expression's flavours and the way you plan to serve it.</p>

<h2>A Concrete Bottle Example</h2>
<p><a href="https://heavenhilldistillery.com/ew-bottled-in-bond.php/1000" target="_blank" rel="noopener noreferrer">Evan Williams Bottled-in-Bond</a> is a four-year-old, 100-proof bourbon. Its producer describes caramel, vanilla and oak aromas, followed by citrus and black pepper on the palate, with a long, warm, dry finish. Those notes belong to this expression, not to every bonded whiskey.</p>

<h2>Serving And Indian Food Pairings</h2>
<p>Begin with a small neat pour in a tulip-shaped tasting glass. Add a few drops of water and taste again; the Evan Williams serving suggestion also takes this approach. For an everyday bonded bourbon, a rocks glass or a measured Old Fashioned is another practical option.</p>
<p>Our pairing suggestions for a caramel-and-spice bourbon are mutton seekh kebabs, mushroom tikka, grilled lamb chops, roasted almonds and 70% dark chocolate. Keep the chilli moderate at first so you can judge the match.</p>

<h2>Comparing Prices In India</h2>
<p>On BevOry, select Mumbai, Delhi, Gurgaon, Bengaluru or your own city. Match the exact bonded expression and bottle size. Do not substitute a price for the same brand's standard bottling: the labels describe different buying choices.</p>
`.trim(),
  },
].map((post) => ({
  ...post,
  author: "BevOry Editorial Team",
  cover_image_url: null,
  linked_product_id: null,
  linked_brand: null,
  notify_users: false,
  is_published: true,
  is_featured: post.category === "News",
  published_at: publishedAt,
  reviewed_by: "BevOry Editorial Team",
  facts_last_reviewed: "2026-10-08",
}));

const banned = /\b(?:symphony|testament|delve|nestled|embark|liquid gold|rich tapestry)\b|elevate your senses|dance on the palate|whether you['\u2019]re|information pending verification|BevOry has not assigned|verified ingredient statement is not stored|availability is not assumed|adults can compare like with like/i;
assert.equal(posts.length, 3);
assert.equal(new Set(posts.map((post) => post.slug)).size, posts.length);
assert.equal(new Set(posts.map((post) => post.id)).size, posts.length);
assert.equal(posts.filter((post) => post.category === "News").length, 2);
for (const post of posts) {
  for (const key of ["id", "title", "slug", "excerpt", "meta_title", "meta_description", "category", "author", "selection_note", "content"]) {
    assert.ok(typeof post[key] === "string" && post[key].trim(), `${post.slug}: empty ${key}`);
  }
  assert.ok(post.meta_title.length <= 60, `${post.slug}: meta title exceeds 60 characters`);
  assert.ok(post.meta_description.length <= 155, `${post.slug}: meta description exceeds 155 characters`);
  assert.ok(!banned.test([post.title, post.excerpt, post.meta_title, post.meta_description, post.content].join(" ")), `${post.slug}: prohibited public wording`);
  assert.ok(post.tags.length && post.tags.every((tag) => tag.trim()), `${post.slug}: missing tags`);
  assert.ok(post.source_links.length, `${post.slug}: missing sources`);
  assert.ok(post.content.includes("<h2>"), `${post.slug}: no article sections`);
  assert.ok(post.content.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length >= 200, `${post.slug}: incomplete body`);
  assert.ok(Number.isFinite(Date.parse(post.published_at)), `${post.slug}: invalid publication date`);
  for (const source of post.source_links) {
    assert.equal(new URL(source).protocol, "https:");
    assert.ok(post.content.includes(`href="${source}"`), `${post.slug}: source not cited in body`);
  }
}

if (process.argv.includes("--export")) {
  const path = new URL("../docs/editorial/hourly-posts-2026-10-08-1401.json", import.meta.url);
  await writeFile(path, JSON.stringify({
    automation_id: "bevory-hourly-alcohol-content-engine",
    cycle_at: publishedAt,
    publication_status: "prepared",
    posts,
  }, null, 2) + "\n");
  console.log(`Exported ${posts.length} complete posts to ${path.pathname}`);
} else if (process.argv.includes("--check")) {
  console.log(JSON.stringify({ validated: posts.length, posts: posts.map(({ title, slug }) => ({ title, slug })) }, null, 2));
} else {
  const prisma = new PrismaClient();
  try {
    const keys = posts.map((post) => `blog_posts:${post.id}`);
    const previous = await prisma.contentRecord.findMany({ where: { key: { in: keys } } });
    const now = new Date().toISOString();
    await prisma.$transaction(posts.map((post) => {
      const data = {
        ...post,
        created_at: previous.find((record) => record.recordId === post.id)?.data?.created_at ?? now,
        updated_at: now,
      };
      return prisma.contentRecord.upsert({
        where: { key: `blog_posts:${post.id}` },
        update: { data },
        create: { key: `blog_posts:${post.id}`, tableName: "blog_posts", recordId: post.id, data },
      });
    }));
    const saved = await prisma.contentRecord.findMany({ where: { key: { in: keys } } });
    assert.equal(saved.length, posts.length, "Not every post was saved");
    for (const post of posts) {
      const data = saved.find((record) => record.recordId === post.id)?.data;
      for (const [key, value] of Object.entries(post)) {
        assert.deepEqual(data?.[key], value, `${post.slug}: saved ${key} differs`);
      }
    }
    console.log(JSON.stringify({ saved: saved.length, verified: saved.length, slugs: posts.map((post) => post.slug) }, null, 2));
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}
