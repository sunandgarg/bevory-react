from __future__ import annotations

from datetime import date
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "bevory-content-editorial-and-human-quality-handbook.pdf"

NAVY = colors.HexColor("#101C34")
INK = colors.HexColor("#172033")
MUTED = colors.HexColor("#667085")
ORANGE = colors.HexColor("#F59E0B")
PALE_ORANGE = colors.HexColor("#FFF4DF")
PALE_BLUE = colors.HexColor("#EFF5FF")
PALE_GREEN = colors.HexColor("#EBF7F1")
LINE = colors.HexColor("#D8DEE9")
WHITE = colors.white


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="CoverTitle",
    parent=styles["Title"],
    fontName="Helvetica-Bold",
    fontSize=29,
    leading=34,
    textColor=WHITE,
    alignment=TA_LEFT,
    spaceAfter=12,
))
styles.add(ParagraphStyle(
    name="CoverSub",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=11,
    leading=17,
    textColor=colors.HexColor("#D9E2F2"),
))
styles.add(ParagraphStyle(
    name="H1x",
    parent=styles["Heading1"],
    fontName="Helvetica-Bold",
    fontSize=21,
    leading=25,
    textColor=NAVY,
    spaceBefore=3,
    spaceAfter=9,
))
styles.add(ParagraphStyle(
    name="H2x",
    parent=styles["Heading2"],
    fontName="Helvetica-Bold",
    fontSize=13.5,
    leading=17,
    textColor=INK,
    spaceBefore=10,
    spaceAfter=5,
))
styles.add(ParagraphStyle(
    name="BodyX",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=9.25,
    leading=13.5,
    textColor=INK,
    spaceAfter=5,
))
styles.add(ParagraphStyle(
    name="BulletX",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=9.1,
    leading=13.2,
    textColor=INK,
    leftIndent=8,
    firstLineIndent=0,
    spaceAfter=3.2,
))
styles.add(ParagraphStyle(
    name="SmallX",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=7.6,
    leading=10.5,
    textColor=MUTED,
    spaceAfter=2,
))
styles.add(ParagraphStyle(
    name="CalloutX",
    parent=styles["BodyText"],
    fontName="Helvetica-Bold",
    fontSize=9.4,
    leading=14,
    textColor=NAVY,
    backColor=PALE_ORANGE,
    borderColor=ORANGE,
    borderWidth=0.7,
    borderPadding=8,
    spaceBefore=6,
    spaceAfter=8,
))
styles.add(ParagraphStyle(
    name="PassX",
    parent=styles["BodyText"],
    fontName="Helvetica-Bold",
    fontSize=9.1,
    leading=13,
    textColor=colors.HexColor("#146C43"),
    backColor=PALE_GREEN,
    borderPadding=7,
    spaceAfter=6,
))


def p(text: str, style: str = "BodyX") -> Paragraph:
    return Paragraph(escape(text), styles[style])


def rich(text: str, style: str = "BodyX") -> Paragraph:
    return Paragraph(text, styles[style])


def bullet(text: str) -> Paragraph:
    return Paragraph(f"- {escape(text)}", styles["BulletX"])


def bullets(story: list, items: list[str]) -> None:
    for item in items:
        story.append(bullet(item))


def table(headers: list[str], rows: list[list[str]], widths: list[float]) -> Table:
    data = [[p(value, "SmallX") for value in headers]]
    data.extend([[p(value, "SmallX") for value in row] for row in rows])
    result = Table(data, colWidths=widths, repeatRows=1, hAlign="LEFT")
    result.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, PALE_BLUE]),
        ("BOX", (0, 0), (-1, -1), 0.5, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.35, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    return result


def draw_page(canvas, doc) -> None:
    page = canvas.getPageNumber()
    width, height = A4
    if page == 1:
        canvas.saveState()
        canvas.setFillColor(NAVY)
        canvas.rect(0, 0, width, height, fill=1, stroke=0)
        canvas.setFillColor(ORANGE)
        canvas.rect(0, height - 15 * mm, width, 3 * mm, fill=1, stroke=0)
        canvas.restoreState()
        return

    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.line(18 * mm, 14 * mm, width - 18 * mm, 14 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 7.5)
    canvas.drawString(18 * mm, 9 * mm, "BevOry Content Editorial Handbook")
    canvas.drawRightString(width - 18 * mm, 9 * mm, f"Page {page}")
    canvas.restoreState()


def build() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=18 * mm,
        leftMargin=18 * mm,
        topMargin=20 * mm,
        bottomMargin=35 * mm,
        title="BevOry Content Editorial and Human-Quality Handbook",
        author="BevOry Editorial System",
        subject="Consolidated content research, writing, SEO, logo and QA standards",
    )
    story: list = []

    story.append(Spacer(1, 37 * mm))
    story.append(p("BevOry", "CoverSub"))
    story.append(Spacer(1, 5 * mm))
    story.append(p("Content Editorial and Human-Quality Handbook", "CoverTitle"))
    story.append(p("The consolidated writing, research, SEO, logo and quality rules established across the BevOry work", "CoverSub"))
    story.append(Spacer(1, 18 * mm))
    story.append(p("For brand pages, product pages, city-price pages, guides, articles, cocktails and supporting metadata", "CoverSub"))
    story.append(Spacer(1, 6 * mm))
    story.append(p(f"Prepared {date.today().isoformat()} | Internal editorial operating standard", "CoverSub"))
    story.append(PageBreak())

    story.append(p("1. Editorial objective", "H1x"))
    story.append(p(
        "BevOry content must read like a carefully edited Indian beverage catalogue: factual, specific, useful, locally aware and easy to scan. It should answer the reader's question without hype, expose no internal instructions, and never manufacture missing information.",
    ))
    story.append(p(
        "The goal is not to make machine-written text look human by adding errors. The goal is to produce publishable editorial work whose facts, structure, wording and judgment hold up to human review.",
        "CalloutX",
    ))
    story.append(p("Non-negotiable principles", "H2x"))
    bullets(story, [
        "Accuracy outranks word count, keyword count and publishing speed.",
        "Every public field is written for a consumer, never for a developer, database operator or AI system.",
        "Every factual claim must be supported internally even though citations are not printed in public brand or product copy.",
        "Unknown information is omitted or represented honestly; it is never guessed.",
        "Brand-level facts and bottle-level facts remain separate.",
        "City prices stay attached to the exact city, product and variant record.",
        "No page may promise rankings, traffic, availability, delivery or a national price that BevOry cannot verify.",
    ])
    story.append(p("What 'humanised' means at BevOry", "H2x"))
    story.append(table(
        ["Use", "Avoid"],
        [
            ["Specific producers, places, ingredients and methods", "Generic praise and interchangeable filler"],
            ["Short edited paragraphs with varied rhythm", "Repetitive templates and identical sentence openings"],
            ["Real Indian serving and food context", "Forced local references that do not fit the drink"],
            ["Clear uncertainty boundaries", "Confident guesses or invented precision"],
            ["Natural search language", "Keyword stuffing or deliberate misspellings"],
            ["Consumer judgment grounded in facts", "Claims that a page is perfect, ultimate or guaranteed to rank"],
        ],
        [82 * mm, 82 * mm],
    ))
    story.append(PageBreak())

    story.append(p("2. Research and source hierarchy", "H1x"))
    story.append(p("Research is completed before prose is drafted. The writer gathers only the facts needed for the fields being published and stores the supporting evidence in internal audit data."))
    story.append(p("Required source order", "H2x"))
    story.append(table(
        ["Priority", "Source", "Use"],
        [
            ["1", "Official producer or brand", "Ownership, origin, history, ingredients, production and current range"],
            ["2", "Livcheers", "Catalogue names, brand logos, variants and market-facing details missing from the official source"],
            ["3", "Reputable specialist or retailer", "A narrow missing fact when neither primary route answers it"],
            ["4", "BevOry database", "Existing canonical identifiers, categories, city prices and variant relationships"],
        ],
        [18 * mm, 55 * mm, 91 * mm],
    ))
    story.append(p("Fact rules", "H2x"))
    bullets(story, [
        "Never invent prices, ABV, awards, vintages, age statements, ingredients, production methods, ownership or availability.",
        "Use the current official bottle or expression when a claim applies only to one product.",
        "Do not transfer one expression's tasting notes, cask type, age or proof to the whole brand.",
        "When sources conflict, prefer the official current source and flag the conflict internally for review.",
        "Record the page consulted, access date, source tier and supported field in the internal source snapshot.",
        "Do not publish source citations in consumer fields when the page design requires clean catalogue copy; keep provenance in the audit layer.",
        "Historical claims must name a real date, person, place or event when verified. Otherwise keep the history concise.",
    ])
    story.append(p("Internal audit objects", "H2x"))
    story.append(table(
        ["Object", "Required purpose"],
        [
            ["field_audit", "Shows which public fields are complete, verified, omitted or awaiting review"],
            ["source_snapshot", "Retains the evidence path and the facts supported by each source"],
            ["logo_audit", "Records logo URL, source tier, format, identity status and verification time"],
            ["content_version", "Identifies the editorial batch and enables later refreshes"],
        ],
        [45 * mm, 119 * mm],
    ))
    story.append(PageBreak())

    story.append(p("3. Public UI persona boundary", "H1x"))
    story.append(p("The following fields are printed directly on the live site. They must always sound like a beverage editor speaking to a consumer."))
    story.append(p("Public fields", "H2x"))
    bullets(story, [
        "description",
        "story",
        "tasting_notes",
        "how_to_enjoy",
        "pairing_ideas",
        "why_choose",
        "faqs",
        "final_verdict",
        "meta_title and meta_description",
    ])
    story.append(p("Never expose in public copy", "H2x"))
    bullets(story, [
        "Editorial guardrail, database, record, exact product record, internal wiki or portfolio-level description.",
        "What to compare, do not infer, keep separate, source suggests or according to references.",
        "Instructions for editors, developers, import scripts, SEO systems or database administrators.",
        "Research caveats disguised as tasting notes.",
        "Source URLs, source rankings or logo-verification commentary.",
    ])
    story.append(p("Field-specific persona rules", "H2x"))
    story.append(table(
        ["Field", "Public purpose"],
        [
            ["Description", "State what the brand or product is, who makes it, where it is from and its market context"],
            ["Story", "Give a verified historical, cultural, geographical or production fact"],
            ["Tasting notes", "Describe actual aromas, flavours, body, texture and finish only"],
            ["How to enjoy", "Give temperature, glassware, mixer, dilution and serving guidance"],
            ["Pairings", "Name specific dishes rather than generic food groups"],
            ["Why choose", "Explain the practical consumer reason without sales hype"],
            ["FAQ", "Answer a real search question in one direct, standalone response"],
            ["Final verdict", "Summarise the drinker's fit, not the data-management process"],
        ],
        [42 * mm, 122 * mm],
    ))
    story.append(PageBreak())

    story.append(p("4. Brand-page writing standard", "H1x"))
    story.append(p("Every brand page must be complete enough to stand on its own while remaining honest about differences between individual bottles."))
    story.append(p("Required brand fields", "H2x"))
    story.append(table(
        ["Field", "Acceptance rule"],
        [
            ["name and slug", "Canonical display name and stable readable slug; no UUID slug on the public page"],
            ["category", "Correct primary beverage family and verified subcategory where available"],
            ["country and flag", "Origin country plus the correct flag asset; do not infer from ownership alone"],
            ["description", "Two or three compact sentences with identity, maker, origin and range"],
            ["story", "Consumer-facing history or production culture, never an editorial note"],
            ["tasting_notes", "Real sensory families supported by the range; no guardrails as list items"],
            ["how_to_enjoy", "Practical serve plus specific food use"],
            ["pairing_ideas", "Specific Indian or relevant international dishes"],
            ["why_choose", "Distinct reason to explore this brand"],
            ["faqs", "At least two useful entity or selection questions with direct answers"],
            ["final_verdict", "Short consumer summary without database language"],
            ["SEO metadata", "Unique title and description within length limits"],
            ["logo", "Verified authentic asset with source tier and fallback status"],
        ],
        [45 * mm, 119 * mm],
    ))
    story.append(p("Brand-level content constraints", "H2x"))
    bullets(story, [
        "Do not describe every bottle as if it tastes the same.",
        "When the range spans styles, organise tasting notes by style or expression family.",
        "Use exact grape varieties, base ingredients, stills, casks or production methods only when verified.",
        "Mention the parent company only when current and relevant.",
        "End with city-level price discovery on BevOry only where the wording remains natural.",
    ])
    story.append(PageBreak())

    story.append(p("5. Product, variant and city-page standard", "H1x"))
    story.append(p("Product content is expression-specific. Variant and price data must preserve the relationship between the product, bottle size and selected city."))
    story.append(p("Required product behaviour", "H2x"))
    bullets(story, [
        "Reuse an existing brand and product when importing a new city. Create a new record only for a genuinely new entity or variant.",
        "Treat bottle size as a variant, not as a duplicate brand or duplicate base product.",
        "On a city product page, show only the selected city's price.",
        "If a product exists but the selected city has no verified price, keep the product visible and display a neutral no-price state rather than an error.",
        "Never copy a price from another city to fill a gap.",
        "Keep canonical city slugs readable and use redirects when replacing old state-based or malformed URLs.",
        "Avoid publishing thin near-duplicate pages whose only change is an empty location name; add genuinely useful local context and correct canonical signals.",
    ])
    story.append(p("Product content fields", "H2x"))
    story.append(table(
        ["Field group", "Rule"],
        [
            ["Identity", "Exact product name, brand, category, subcategory and expression"],
            ["Variant", "Bottle size, package type and declared strength only when verified"],
            ["Price", "City-specific amount, currency, verification state and update date"],
            ["Description", "Expression-specific identity and production facts"],
            ["Tasting", "Aroma, palate, texture and finish for that bottle or expression"],
            ["Serve and pair", "Practical glassware, mixer and specific dishes"],
            ["Images", "Authentic product packshot with useful alt text and stable dimensions"],
            ["SEO", "Unique city/product/variant title, description, canonical URL and structured data"],
        ],
        [45 * mm, 119 * mm],
    ))
    story.append(p("Price wording", "H2x"))
    story.append(p("Use 'Price not currently available in this city' or a similarly neutral message. Do not say the product is unavailable unless stock availability has actually been verified."))
    story.append(PageBreak())

    story.append(p("6. Human-quality writing rules", "H1x"))
    story.append(p("Human-quality writing is the result of specificity, restraint and editing. It cannot be proven by an AI detector, and BevOry does not optimise prose to fool one."))
    story.append(p("Composition rules", "H2x"))
    bullets(story, [
        "Answer the search intent in the first sentence.",
        "Use short paragraphs and vary sentence length without becoming choppy.",
        "Prefer concrete nouns: producer, village, valley, grape, grain, botanical, oven, still, fermenter and cask.",
        "Use active verbs and direct constructions.",
        "Give one brand-specific angle rather than repeating the same compliments across pages.",
        "Use sensory vocabulary only when it says something precise about aroma, palate, texture or finish.",
        "Use Indian food, climate, city and serving context where it genuinely helps the reader.",
        "Edit repeated transitions, repeated sentence openings and templated conclusions across a batch.",
        "Remove any sentence that could be pasted onto ten unrelated brands without changing its meaning.",
        "Omit uncertain facts rather than hiding uncertainty behind polished wording.",
    ])
    story.append(p("Banned filler and AI-style language", "H2x"))
    story.append(table(
        ["Do not use", "Reason"],
        [
            ["testament, symphony, ultimate, nestled", "Inflated language without information"],
            ["whether you're, delve, embark", "Predictable template phrasing"],
            ["harmonious blend", "Generic sensory filler"],
            ["perfect for any occasion", "Unverifiable and interchangeable"],
            ["check the bottle for details", "Avoids doing the required editorial work"],
            ["a brand can contain more than one style", "Boilerplate that does not help this brand's reader"],
        ],
        [62 * mm, 102 * mm],
    ))
    story.append(p("Explicitly rejected techniques", "H2x"))
    bullets(story, [
        "Deliberate spelling mistakes or awkward grammar to appear human.",
        "Prompts or rewriting patterns intended to bypass AI detectors.",
        "Invented anecdotes, first-hand tasting claims, visits or personal experience.",
        "Artificial slang, over-familiar jokes or exaggerated party language on factual catalogue pages.",
    ])
    story.append(PageBreak())

    story.append(p("7. SEO, GEO and search-intent standard", "H1x"))
    story.append(p("Search optimisation follows usefulness and entity clarity. It does not justify false facts, doorway pages, duplicated city copy or unreadable keyword repetition."))
    story.append(p("Page-level rules", "H2x"))
    bullets(story, [
        "Use the exact brand, product, category, city and bottle size naturally where they define the page.",
        "Write a unique meta title of no more than 60 characters where practical.",
        "Write a unique meta description of no more than 155 to 160 characters.",
        "Use one clear H1 that matches the page's primary entity and intent.",
        "Answer price, origin, style, serving and pairing questions in extractable sentences.",
        "Use concise FAQs only when they add information already supported by the page.",
        "Add Product, Brand, Breadcrumb, Article or FAQ structured data only when the visible page supports it.",
        "Use canonical URLs, clean readable slugs and one-hop redirects from retired URLs.",
        "Include indexable pages in the correct sitemap; keep filters indexable only when they have durable search value and unique content.",
        "Use internal links between brand, product, variant, city, category and relevant guide pages.",
    ])
    story.append(p("Search-query handling", "H2x"))
    bullets(story, [
        "Use observed query wording to discover missing pages, FAQs and aliases.",
        "Map common misspellings to search aliases or redirects; do not intentionally misspell polished public copy.",
        "Prioritise queries already earning impressions before creating speculative long-tail pages.",
        "Do not claim that any optimisation guarantees a ranking or a traffic target.",
    ])
    story.append(p("AI citation readiness", "H2x"))
    bullets(story, [
        "Keep factual sentences compact enough to stand alone when quoted.",
        "Name the entity in the answer instead of relying on pronouns.",
        "Separate verified facts from editorial serving suggestions.",
        "Keep dates, places, producers and technical terms consistent across pages.",
        "Use update timestamps and content versions so facts can be refreshed.",
    ])
    story.append(PageBreak())

    story.append(p("8. Logo, image and visual-content rules", "H1x"))
    story.append(p("Every image must help the reader identify the real brand or bottle. Decorative substitutions and AI-generated product or brand assets are not acceptable."))
    story.append(p("Logo source order", "H2x"))
    story.append(table(
        ["Priority", "Asset source", "Acceptance"],
        [
            ["1", "Official brand or producer", "Correct current identity and directly usable asset"],
            ["2", "Livcheers static brand asset", "Exact brand match and successful image response"],
            ["3", "Verified third party", "Authentic identity with clear provenance"],
        ],
        [18 * mm, 65 * mm, 81 * mm],
    ))
    story.append(p("Image checks", "H2x"))
    bullets(story, [
        "Confirm the URL returns successfully and the response is an image, not an error page.",
        "Confirm the logo or packshot belongs to the exact brand or expression.",
        "Prefer SVG for logos when officially available; otherwise use a sharp WebP or other efficient modern format.",
        "Use product images that show the complete bottle or package without destructive cropping.",
        "Store width and height or an aspect ratio to prevent layout shift.",
        "Use descriptive alt text that names the brand, expression and package where relevant.",
        "Lazy-load below-the-fold media, but do not lazy-load the primary above-the-fold product image.",
        "Retain logo source tier, verification state and verification timestamp internally.",
        "Migrate remote assets to BevOry-controlled storage when rights and operational readiness are confirmed.",
    ])
    story.append(p("Country flags", "H2x"))
    story.append(p("Show the verified country of origin using a consistent flag asset. Ownership location, importer location and bottling location must not silently replace the product's stated origin."))
    story.append(PageBreak())

    story.append(p("9. Automated and editorial checks", "H1x"))
    story.append(p("A content batch is not complete when the prose is written. It is complete only after data, language, SEO, asset and rendering checks pass."))
    story.append(table(
        ["Gate", "Check", "Failure condition"],
        [
            ["Completeness", "Every required front-end field has a usable value", "Blank, placeholder or internal note reaches the UI"],
            ["Identity", "Brand/product/category/city/variant relationships are correct", "Duplicate entity or wrong parent relationship"],
            ["Facts", "Claims match retained evidence", "Invented or expression-transferred claim"],
            ["Persona", "Public copy addresses consumers only", "Database, editorial or engineering language appears"],
            ["Human quality", "Specific, varied and edited prose", "Boilerplate, hype or repeated template sentences"],
            ["Metadata", "Titles/descriptions are unique and within limits", "Truncation, duplication or keyword stuffing"],
            ["URLs", "Stable readable slug, canonical and redirects", "UUID public slug, loop or multi-hop redirect"],
            ["Prices", "Selected city shows its own verified price only", "Cross-city leakage or invented fallback price"],
            ["Logos", "Working authentic image URL and audit fields", "Broken URL, incorrect identity or emoji substitute"],
            ["Images", "Correct fit, alt text, dimensions and loading strategy", "Crop, shift, blank asset or missing alt"],
            ["Schema", "Structured data matches visible content", "Hidden or unsupported structured claims"],
            ["Code", "Focused tests, type check, build and diff check pass", "Regression or compile/build failure"],
            ["Rendering", "Desktop and mobile pages have no clipping or overlap", "Unreadable, broken or unstable layout"],
        ],
        [28 * mm, 68 * mm, 68 * mm],
    ))
    story.append(p("Blocked-language scan", "H2x"))
    bullets(story, [
        "Scan public fields for editorial guardrail, database, internal wiki, exact product record, what to compare and do not infer.",
        "Scan for banned filler such as testament, symphony, ultimate, nestled, delve and embark.",
        "Scan for raw HTML, unresolved placeholders, source URLs and developer comments.",
        "Review repeated sentence openings and suspiciously identical descriptions across the batch.",
    ])
    story.append(PageBreak())

    story.append(p("10. Publishing workflow and acceptance checklist", "H1x"))
    story.append(p("Recommended workflow", "H2x"))
    bullets(story, [
        "1. Inventory the exact records and fields that need content.",
        "2. Reuse existing canonical brands and products before creating anything new.",
        "3. Research official sources, then fill narrow gaps through Livcheers or a reputable third party.",
        "4. Save internal source, field and logo audit data.",
        "5. Draft public copy using the persona and field rules in this handbook.",
        "6. Edit the batch for repetition, inflated language, unsupported specificity and Indian relevance.",
        "7. Verify logos, images, country flags, slugs, city prices, canonical URLs and metadata.",
        "8. Run automated content tests, TypeScript, production build and diff checks.",
        "9. Apply the content to a safe database environment and inspect representative live pages.",
        "10. Deploy, verify sitemap/canonical behaviour and schedule a factual refresh.",
    ])
    story.append(p("Final acceptance questions", "H2x"))
    bullets(story, [
        "Can a consumer understand the entity and its relevance from the first paragraph?",
        "Does every sentence add a verified fact, a useful sensory detail or practical guidance?",
        "Would any sentence still make sense if pasted onto an unrelated brand? If yes, rewrite or remove it.",
        "Are brand claims separated from bottle-specific claims?",
        "Are all public fields free from internal instructions and source commentary?",
        "Are prices and variants tied to the correct city and bottle size?",
        "Are logo and product images authentic, working and visually stable?",
        "Do metadata, canonicals, schema, internal links and sitemap entries match the visible page?",
        "Has a human reviewed the final batch for tone, accuracy and repetition?",
    ])
    story.append(p("Release decision", "H2x"))
    story.append(p(
        "PASS only when required fields are complete, claims are supported, public copy is consumer-facing, city prices are isolated correctly, authentic assets render, and code checks succeed. Otherwise hold the affected record for correction rather than silently publishing partial or fabricated content.",
        "PassX",
    ))
    story.append(p("Scope note", "H2x"))
    story.append(p("This handbook consolidates the writing and verification requirements established throughout the BevOry task history. It is an editorial and engineering standard, not a guarantee of rankings, traffic, legal compliance in every jurisdiction or AI-detector outcomes."))

    doc.build(story, onFirstPage=draw_page, onLaterPages=draw_page)


if __name__ == "__main__":
    build()
    print(OUTPUT)
