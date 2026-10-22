import "dotenv/config";
import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { PrismaClient } from "@prisma/client";

const cycleAt = "2026-10-22T07:27:00.288Z";
const reviewedAt = "2026-10-22";

export const posts = [
  {
    id: "news-brewdog-west-ham-boleyn-brew-oat-lager-2026",
    title: "BrewDog and West Ham Unveil Fan-Created Boleyn Brew",
    slug: "brewdog-west-ham-boleyn-brew-oat-lager-2026",
    excerpt: "West Ham supporters helped shape Boleyn Brew, a 4.5% oat lager from BrewDog. Its UK matchday debut is planned for 24 October.",
    cover_emoji: "news",
    category: "News",
    tags: ["BrewDog", "West Ham United", "Boleyn Brew", "oat lager", "beer launch"],
    meta_title: "BrewDog and West Ham Launch Boleyn Brew | BevOry",
    meta_description: "West Ham fans helped create BrewDog's 4.5% Boleyn Brew oat lager. See its style, online cans, London Stadium debut and India availability caveat.",
    selection_note: "A 21 October beer announcement from both the producer's parent company and the football club, with specific style, ABV and UK launch details.",
    source_links: [
      "https://ir.tilray.com/news-releases/news-release-details/west-ham-united-fc-and-brewdog-unveil-boleyn-brew-fan-created",
      "https://clubcast.whufc.com/en/news/west-ham-united-and-brewdog-launch-boleyn-brew",
    ],
    content: String.raw`
<p><strong>BrewDog and West Ham United have unveiled Boleyn Brew, a fan-created 4.5% oat lager.</strong> Supporters helped choose the beer's style, flavour direction, name and branding. The <a href="https://ir.tilray.com/news-releases/news-release-details/west-ham-united-fc-and-brewdog-unveil-boleyn-brew-fan-created" target="_blank" rel="noopener noreferrer">21 October announcement from BrewDog parent Tilray Brands</a> says limited-edition cans are available online in the UK, with the first London Stadium pours planned for Saturday's match against Southampton.</p>

<h2>What Is Boleyn Brew?</h2>
<p>It is an oat lager rather than an IPA or a stout. BrewDog describes tropical fruit and citrus notes on a smooth, bready lager base. Those are the maker's tasting notes, not a claim that every drinker will detect the same flavours. The declared strength is 4.5% alcohol by volume. "Oat lager" is the style named in this release; shoppers should still read the specific can's label for its final packaging and serving details.</p>
<p>The name refers to the Boleyn Ground, West Ham's former home. The can artwork features the Boleyn Gates. In the <a href="https://clubcast.whufc.com/en/news/west-ham-united-and-brewdog-launch-boleyn-brew" target="_blank" rel="noopener noreferrer">club's account of the project</a>, supporters took part in consultations on the beer and voted after a shortlist of names was prepared. That makes this a football-club collaboration shaped by fans, not simply a standard lager with a club logo added afterward.</p>

<h2>When And Where Is It Available?</h2>
<p>The release says cans went on sale online on 21 October while stocks last. The beer is scheduled for its matchday debut at London Stadium on 24 October, at BrewDog's container bar near Bridge 2 and at the BrewDog Deck. That is a UK launch plan. Neither announcement confirms Indian distribution, an Indian importer, a local retail price or availability in any Indian city. A UK online listing should not be presented as a Mumbai, Delhi or Gurgaon shelf offer.</p>

<h2>How Does It Fit The Partnership?</h2>
<p>Boleyn Brew follows Claret &amp; Brew, the earlier West Ham-branded beer released in November 2025. The new beer goes further by involving supporters in the style and naming decisions. BrewDog is the club's official beer partner, so the stadium launch is part of that ongoing relationship rather than an unrelated one-off label.</p>
<p>For an adult curious about the style, expect a lager foundation with the fruit and citrus notes the brewer reports. Try a small chilled pour first and assess the balance yourself. A light lager can suit salty snacks or grilled food, but those are serving ideas, not producer specifications. The buying facts to retain are the exact 4.5% ABV, the limited UK launch and the absence of a confirmed India release.</p>
`.trim(),
  },
  {
    id: "guide-pilsner-vs-lager-india-beer-choice-2026",
    title: "Pilsner vs Lager: How To Choose A Beer In India",
    slug: "pilsner-vs-lager-india-beer-choice-2026",
    excerpt: "A pilsner is a type of lager, usually with a clearer hop and bitter edge. Learn what the labels mean before comparing beers and local prices.",
    cover_emoji: "guide",
    category: "Guides",
    tags: ["pilsner vs lager", "beer styles India", "German Pils", "Czech pilsner", "beer buying guide"],
    meta_title: "Pilsner vs Lager: Beer Guide India | BevOry",
    meta_description: "All pilsners are lagers, but not all lagers are pilsners. Compare Czech and German pils styles, bitterness, ABV labels and local beer prices.",
    selection_note: "A distinct high-intent style comparison based on current Brewers Association and BJCP guidelines, with practical label and city-price checks for India.",
    source_links: [
      "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/",
      "https://styles.bjcp.org/bjcp-2021-beer/2/2a-international-pale-lager",
      "https://www.bjcp.org/style/2021/5/pale-bitter-european-beer/",
      "https://www.bjcp.org/style/2021/3/",
    ],
    content: String.raw`
<p><strong>A pilsner is a type of lager; "lager" is the larger beer family.</strong> If you are comparing two pale beers in an Indian shop, the useful difference is usually flavour: a pilsner commonly has a more noticeable hop and bitter edge, while a broadly labelled pale lager may be gentler. Neither word guarantees a particular strength, price or quality.</p>

<h2>Why Are The Names Different?</h2>
<p>The <a href="https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/" target="_blank" rel="noopener noreferrer">Brewers Association's beer-style guidelines</a> place pilsener styles inside the lager family, alongside several other pale, amber and dark lagers. "Lager" describes a broad brewing family. "Pilsner" or "Pils" points to a narrower pale style. That is why a shelf can contain both a bottle marked lager and another marked pilsner without the second one being a different fermentation family.</p>

<h2>What Does A Regular Pale Lager Taste Like?</h2>
<p>There is no single flavour for every beer labelled lager. As a useful reference, the <a href="https://styles.bjcp.org/bjcp-2021-beer/2/2a-international-pale-lager" target="_blank" rel="noopener noreferrer">Beer Judge Certification Program's international pale lager guide</a> describes a highly carbonated, refreshing beer with restrained flavours, light malt and a crisp finish. It also notes that some beers in this broad category are confusingly labelled "Pilsner." Read the maker's description and taste the actual beer rather than assuming a label settles the style.</p>

<h2>What Does A Pilsner Add?</h2>
<p>The BJCP's <a href="https://www.bjcp.org/style/2021/5/pale-bitter-european-beer/" target="_blank" rel="noopener noreferrer">German Pils guidance</a> describes a drier, crisper beer with pronounced hop character and lingering bitterness. Its <a href="https://www.bjcp.org/style/2021/3/" target="_blank" rel="noopener noreferrer">Czech lager guidance</a> describes Czech Premium Pale Lager as fuller and more rounded, with richer malt alongside the hops. These are style descriptions, not promises that all products sold in India follow competition guidelines exactly. They do explain why two pilsners can taste different from each other.</p>

<h2>Does Pilsner Mean Stronger Beer?</h2>
<p>No. Bitterness, alcohol strength and body are separate things. A more bitter beer can still have a lower ABV than a sweeter-tasting one. Check the percentage printed on each bottle or can instead of using "pilsner" as a strength shortcut. Also compare the same pack volume: the price for one 330 ml can is not directly comparable with a 500 ml can or a 650 ml bottle.</p>

<h2>Which Should You Buy?</h2>
<p>Choose a pilsner when you want a crisp finish with more hop presence. Choose a softer pale lager when you prefer a milder profile. For food, a hop-led pilsner can cut through fried snacks or a salty starter; a gentle lager may be easier alongside lighter grilled dishes. These are pairing suggestions, not rules. Serve either cool in a clean glass and let the first few sips tell you whether its bitterness suits you.</p>
<p>For prices in Delhi, Mumbai, Gurgaon, Bengaluru or another city, match the exact brand, expression, size and location. Taxes and retail conditions vary, so an online price from another state is not a reliable local MRP. If the bottle only says "lager," do not assume it is a pilsner; use its own label and producer notes to find out more.</p>
`.trim(),
  },
].map((post) => ({
  ...post,
  author: "BevOry Editorial Team",
  cover_image_url: null,
  linked_product_id: null,
  linked_brand: null,
  notify_users: false,
  is_published: false,
  is_featured: false,
  published_at: null,
  reviewed_by: "BevOry Editorial Team",
  facts_last_reviewed: reviewedAt,
}));

const banned = /\b(?:symphony|testament|delve|nestled|embark|liquid gold|rich tapestry)\b|elevate your senses|dance on the palate|whether you['\u2019]re/i;
assert.equal(posts.length, 2);
assert.equal(posts.filter((post) => post.category === "News").length, 1);
assert.equal(new Set(posts.map((post) => post.slug)).size, posts.length);
for (const post of posts) {
  for (const key of ["id", "title", "slug", "excerpt", "meta_title", "meta_description", "category", "author", "selection_note", "content"]) {
    assert.ok(typeof post[key] === "string" && post[key].trim(), `${post.slug}: empty ${key}`);
  }
  assert.ok(post.meta_title.length <= 60, `${post.slug}: meta title too long`);
  assert.ok(post.meta_description.length <= 155, `${post.slug}: meta description too long`);
  assert.ok(post.tags.length && post.tags.every(Boolean), `${post.slug}: missing tags`);
  assert.ok(post.content.includes("<h2>"), `${post.slug}: missing sections`);
  assert.ok(post.content.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length >= 300, `${post.slug}: body under 300 words`);
  assert.ok(!banned.test([post.title, post.excerpt, post.meta_title, post.meta_description, post.content].join(" ")), `${post.slug}: banned wording`);
  for (const source of post.source_links) {
    assert.equal(new URL(source).protocol, "https:");
    assert.ok(post.content.includes(`href="${source}"`), `${post.slug}: source not cited in body`);
  }
}

if (process.argv.includes("--export")) {
  const path = new URL("../docs/editorial/hourly-posts-2026-10-22-1300.json", import.meta.url);
  await writeFile(path, JSON.stringify({
    automation_id: "bevory-hourly-alcohol-content-engine",
    cycle_at: cycleAt,
    publication_status: "prepared_not_published",
    publication_blockers: ["The configured local MySQL tunnel at 127.0.0.1:3308 is closed."],
    posts,
  }, null, 2) + "\n");
  console.log(`Exported ${posts.length} validated drafts to ${path.pathname}`);
} else if (process.argv.includes("--check")) {
  console.log(JSON.stringify({ validated: posts.length, slugs: posts.map((post) => post.slug) }));
} else {
  const prisma = new PrismaClient();
  try {
    const publishPosts = posts.map((post) => ({ ...post, is_published: true, is_featured: post.category === "News", published_at: cycleAt }));
    const keys = publishPosts.map((post) => `blog_posts:${post.id}`);
    const previous = await prisma.contentRecord.findMany({ where: { key: { in: keys } } });
    const now = new Date().toISOString();
    await prisma.$transaction(publishPosts.map((post) => {
      const data = { ...post, created_at: previous.find((record) => record.recordId === post.id)?.data?.created_at ?? now, updated_at: now };
      return prisma.contentRecord.upsert({
        where: { key: `blog_posts:${post.id}` },
        update: { data },
        create: { key: `blog_posts:${post.id}`, tableName: "blog_posts", recordId: post.id, data },
      });
    }));
    const saved = await prisma.contentRecord.findMany({ where: { key: { in: keys } } });
    assert.equal(saved.length, publishPosts.length);
    for (const post of publishPosts) {
      const data = saved.find((record) => record.recordId === post.id)?.data;
      for (const [key, value] of Object.entries(post)) assert.deepEqual(data?.[key], value, `${post.slug}: saved ${key} differs`);
    }
    console.log(JSON.stringify({ saved: saved.length, verified: saved.length, slugs: publishPosts.map((post) => post.slug) }));
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}
