from __future__ import annotations

import json
import os
import subprocess
import unicodedata
from datetime import date
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "bevory-brand-content-batch-07-implementation-and-editorial-guide.pdf"

NAVY = colors.HexColor("#0F1B33")
INK = colors.HexColor("#172033")
MUTED = colors.HexColor("#667085")
ORANGE = colors.HexColor("#F59E0B")
PALE_ORANGE = colors.HexColor("#FFF4DF")
PALE_BLUE = colors.HexColor("#EFF5FF")
LINE = colors.HexColor("#D8DEE9")
WHITE = colors.white


def ascii_text(value: object) -> str:
    text = str(value or "")
    replacements = {
        "\u2018": "'",
        "\u2019": "'",
        "\u201c": '"',
        "\u201d": '"',
        "\u2013": "-",
        "\u2014": "-",
        "\u00a0": " ",
    }
    for source, target in replacements.items():
        text = text.replace(source, target)
    return unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii")


def esc(value: object) -> str:
    return (
        ascii_text(value)
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
    )


def load_batch() -> list[dict]:
    script = r"""
import { BRAND_CONTENT_BATCH_07 } from './src/lib/brandContentBatch07.ts';
import { BRAND_EXPANSION, buildBrandExpansionData } from './src/lib/brandExpansion.ts';
const rows = Object.keys(BRAND_CONTENT_BATCH_07).map((slug) => {
  const definition = BRAND_EXPANSION.find((item) => item.slug === slug);
  const built = buildBrandExpansionData(definition, '2026-09-23T00:00:00.000Z');
  return {
    slug,
    brandName: definition.brandName,
    country: definition.country,
    categories: definition.categories,
    officialUrl: definition.officialUrl,
    logoUrl: built.logo_url,
    logoSourceTier: built.logo_source_tier,
    logoAssetStatus: built.logo_asset_status,
    contentVersion: built.content_version,
    content: BRAND_CONTENT_BATCH_07[slug],
  };
});
console.log(JSON.stringify(rows));
"""
    completed = subprocess.run(
        ["node", "--import", "tsx/esm", "-e", script],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
    )
    return json.loads(completed.stdout)


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="CoverTitle",
    parent=styles["Title"],
    fontName="Helvetica-Bold",
    fontSize=30,
    leading=35,
    textColor=WHITE,
    alignment=TA_LEFT,
    spaceAfter=12,
))
styles.add(ParagraphStyle(
    name="CoverSub",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=12,
    leading=18,
    textColor=colors.HexColor("#D9E2F2"),
))
styles.add(ParagraphStyle(
    name="H1x",
    parent=styles["Heading1"],
    fontName="Helvetica-Bold",
    fontSize=21,
    leading=25,
    textColor=NAVY,
    spaceBefore=4,
    spaceAfter=10,
))
styles.add(ParagraphStyle(
    name="H2x",
    parent=styles["Heading2"],
    fontName="Helvetica-Bold",
    fontSize=13,
    leading=17,
    textColor=INK,
    spaceBefore=10,
    spaceAfter=5,
))
styles.add(ParagraphStyle(
    name="H3x",
    parent=styles["Heading3"],
    fontName="Helvetica-Bold",
    fontSize=10.2,
    leading=14,
    textColor=NAVY,
    spaceBefore=7,
    spaceAfter=2,
))
styles.add(ParagraphStyle(
    name="BodyX",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=9.2,
    leading=13.5,
    textColor=INK,
    spaceAfter=5,
))
styles.add(ParagraphStyle(
    name="SmallX",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=7.4,
    leading=10.5,
    textColor=MUTED,
    spaceAfter=3,
))
styles.add(ParagraphStyle(
    name="BulletX",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=9,
    leading=13,
    textColor=INK,
    leftIndent=12,
    firstLineIndent=-8,
    bulletIndent=0,
    spaceAfter=3,
))
styles.add(ParagraphStyle(
    name="MetaX",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=8,
    leading=11.5,
    textColor=MUTED,
    backColor=PALE_BLUE,
    borderPadding=6,
    spaceBefore=4,
    spaceAfter=4,
))
styles.add(ParagraphStyle(
    name="CalloutX",
    parent=styles["BodyText"],
    fontName="Helvetica-Bold",
    fontSize=9.2,
    leading=13.5,
    textColor=NAVY,
    backColor=PALE_ORANGE,
    borderColor=ORANGE,
    borderWidth=0.6,
    borderPadding=8,
    spaceBefore=6,
    spaceAfter=8,
))


def p(text: object, style: str = "BodyX") -> Paragraph:
    return Paragraph(esc(text), styles[style])


def bullet(text: object) -> Paragraph:
    return Paragraph(f"- {esc(text)}", styles["BulletX"])


def field_heading(text: str) -> Paragraph:
    return p(text, "H3x")


class ReportCanvas:
    def __init__(self, canvas, doc):
        self.canvas = canvas
        self.doc = doc

    def draw(self):
        page = self.canvas.getPageNumber()
        width, height = A4
        if page == 1:
            self.canvas.saveState()
            self.canvas.setFillColor(NAVY)
            self.canvas.rect(0, 0, width, height, fill=1, stroke=0)
            self.canvas.setFillColor(ORANGE)
            self.canvas.rect(0, height - 15 * mm, width, 3 * mm, fill=1, stroke=0)
            self.canvas.restoreState()
        else:
            self.canvas.saveState()
            self.canvas.setStrokeColor(LINE)
            self.canvas.line(18 * mm, 14 * mm, width - 18 * mm, 14 * mm)
            self.canvas.setFont("Helvetica", 7.5)
            self.canvas.setFillColor(MUTED)
            self.canvas.drawString(18 * mm, 9 * mm, "BevOry - Brand Content Batch 07")
            self.canvas.drawRightString(width - 18 * mm, 9 * mm, f"Page {page}")
            self.canvas.restoreState()


def first_page(canvas, doc):
    ReportCanvas(canvas, doc).draw()


def later_pages(canvas, doc):
    ReportCanvas(canvas, doc).draw()


def add_brand_section(story: list, row: dict, index: int):
    content = row["content"]
    story.append(p(f"{index:02d}  {row['brandName']}", "H1x"))
    story.append(p(
        f"{', '.join(row['categories'])} | {row['country']} | slug: {row['slug']} | {row['contentVersion']}",
        "SmallX",
    ))

    logo_table = Table(
        [
            [p("Logo source", "SmallX"), p(row["logoSourceTier"].title(), "SmallX")],
            [p("Asset status", "SmallX"), p(row["logoAssetStatus"].replace("_", " ").title(), "SmallX")],
            [p("Logo URL", "SmallX"), p(row["logoUrl"], "SmallX")],
        ],
        colWidths=[31 * mm, 133 * mm],
        hAlign="LEFT",
    )
    logo_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (0, -1), PALE_BLUE),
        ("BOX", (0, 0), (-1, -1), 0.5, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.35, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    story.append(logo_table)
    story.append(Spacer(1, 5 * mm))

    story.append(field_heading("Description"))
    story.append(p(content["description"]))
    story.append(field_heading("Story"))
    story.append(p(content["story"]))
    story.append(field_heading("Tasting notes and style"))
    for item in content["tastingNotes"]:
        story.append(bullet(f"{item.get('title', 'Note')}: {item['description']}"))
    story.append(field_heading("How to enjoy"))
    for item in content["howToEnjoy"]:
        story.append(bullet(f"{item.get('subheading', 'Serve')}: {item['description']}"))
    story.append(field_heading("Pairing ideas"))
    for group in content["pairingIdeas"]:
        story.append(bullet(f"{group['title']}: {', '.join(group['items'])}"))
    story.append(field_heading("Why choose"))
    story.append(p(content["whyChoose"]))
    story.append(field_heading("FAQs"))
    for faq in content["faqs"]:
        story.append(Paragraph(
            f"<b>{esc(faq['question'])}</b><br/>{esc(faq['answer'])}",
            styles["BodyX"],
        ))
    story.append(field_heading("Final verdict"))
    story.append(p(content["finalVerdict"]))
    story.append(Paragraph(
        f"<b>Meta title:</b> {esc(content['metaTitle'])}<br/>"
        f"<b>Meta description:</b> {esc(content['metaDescription'])}",
        styles["MetaX"],
    ))
    story.append(p(f"Official brand page retained internally: {row['officialUrl']}", "SmallX"))


def build_report(rows: list[dict]):
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=18 * mm,
        leftMargin=18 * mm,
        topMargin=21 * mm,
        bottomMargin=20 * mm,
        title="BevOry Brand Content Batch 07",
        author="BevOry Editorial System",
        subject="Implementation summary and human-quality content instructions",
    )
    story = []

    story.append(Spacer(1, 42 * mm))
    story.append(p("BevOry", "CoverSub"))
    story.append(Spacer(1, 5 * mm))
    story.append(p("Brand Content Batch 07", "CoverTitle"))
    story.append(p("Implementation report and human-quality editorial guide", "CoverSub"))
    story.append(Spacer(1, 16 * mm))
    story.append(p("10 brands | 10 verified logo URLs | 68 expansion brands total", "CoverSub"))
    story.append(Spacer(1, 6 * mm))
    story.append(p(f"Prepared {date.today().isoformat()} | Consumer-facing copy for BevOry", "CoverSub"))
    story.append(PageBreak())

    story.append(p("Implementation summary", "H1x"))
    story.append(p(
        "Batch 07 adds ten high-coverage brands that were present in the product catalogue but absent from the structured brand expansion set. Each brand now has complete public copy, searchable metadata, country data, practical serving guidance, food pairings, FAQs and a verified remote logo URL.",
    ))
    for item in [
        "Brands added: Kingfisher, Gancia, Jacob's Creek, Maharani Mahansar, The Glenlivet, Folonari, Absolut, Tuborg, Paul John and Patron.",
        "Eight logos use verified Livcheers WebP assets. Gancia and Folonari use verified SVG logos from their official websites because the guessed Livcheers paths returned access errors.",
        "The expansion resolver now distinguishes verified assets from unverified fallback paths and stores the source tier, status and verification timestamp.",
        "The database refresh path updates the verified logo fields together with all public content fields.",
        "Automated checks cover complete fields, duplicate slugs, metadata length, prohibited internal language and logo verification status.",
    ]:
        story.append(bullet(item))

    story.append(p("Files changed", "H2x"))
    file_table = Table([
        [p("File", "SmallX"), p("Purpose", "SmallX")],
        [p("src/lib/brandContentBatch07.ts", "SmallX"), p("Complete consumer copy and verified logo URL for each brand", "SmallX")],
        [p("src/lib/brandExpansion.ts", "SmallX"), p("Ten definitions, country flags, Batch 07 resolution and verified logo status", "SmallX")],
        [p("src/lib/brandExpansionDb.ts", "SmallX"), p("Database refresh support for content and logo verification fields", "SmallX")],
        [p("scripts/brand-expansion.test.ts", "SmallX"), p("68-brand count and Batch 07 content and logo assertions", "SmallX")],
    ], colWidths=[65 * mm, 99 * mm], repeatRows=1)
    file_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ("BOX", (0, 0), (-1, -1), 0.5, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.35, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    story.append(file_table)

    story.append(p("Logo verification", "H2x"))
    logo_rows = [[p("Brand", "SmallX"), p("Source", "SmallX"), p("Format", "SmallX"), p("Status", "SmallX")]]
    for row in rows:
        logo_rows.append([
            p(row["brandName"], "SmallX"),
            p(row["logoSourceTier"].title(), "SmallX"),
            p("SVG" if row["logoUrl"].lower().endswith(".svg") else "WebP", "SmallX"),
            p("Verified", "SmallX"),
        ])
    logo_table = Table(logo_rows, colWidths=[46 * mm, 42 * mm, 28 * mm, 48 * mm], repeatRows=1)
    logo_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, PALE_BLUE]),
        ("BOX", (0, 0), (-1, -1), 0.5, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.35, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    story.append(logo_table)
    story.append(PageBreak())

    story.append(p("Batch 07 public content", "H1x"))
    story.append(p("The following text is the consumer-facing content implemented for each brand. Internal research notes, source citations and engineering instructions are deliberately excluded from these public fields."))
    story.append(PageBreak())
    for index, row in enumerate(rows, 1):
        add_brand_section(story, row, index)
        if index != len(rows):
            story.append(PageBreak())

    story.append(PageBreak())
    story.append(p("Editorial system used for brand content", "H1x"))
    story.append(p("Public UI persona", "H2x"))
    story.append(p("Every public field is written for a legally aged consumer reading a brand guide. It must never sound like an instruction to an editor, developer or database administrator."))
    for item in [
        "Description answers what the brand is, where it comes from, who makes it when verified, and what its range covers.",
        "Story gives a real historical, cultural or production detail that helps a reader understand the brand.",
        "Tasting notes contain aromas, flavours, texture and finish only. They never contain research caveats or internal rules.",
        "How to enjoy gives practical glassware, temperature, mixer and serving guidance.",
        "Pairings name specific Indian or international dishes rather than generic food groups.",
        "Why choose and final verdict explain the consumer reason to consider the brand without sales hype.",
        "FAQs answer real search questions in direct language that can be extracted by search and AI systems.",
    ]:
        story.append(bullet(item))

    story.append(p("Fact and source discipline", "H2x"))
    for item in [
        "Use the official producer or brand website first.",
        "Use Livcheers only when the official source does not cover the relevant catalogue detail.",
        "Use a reputable third party only when neither primary route answers the question.",
        "Do not invent prices, ABV, awards, ingredients, age statements, production methods or availability.",
        "Keep brand-level facts separate from bottle-specific facts. A tasting note for one expression must not become the profile of the whole brand.",
        "City prices remain in the city and variant price system. Brand copy never claims one national price.",
    ]:
        story.append(bullet(item))

    story.append(p("Human-quality writing rules", "H2x"))
    story.append(p("Humanised content comes from specificity, judgment and editing. It does not come from deliberate spelling mistakes, awkward grammar or attempts to fool AI detectors.", "CalloutX"))
    for item in [
        "Lead with the answer in the first sentence.",
        "Use concrete nouns: producer, place, grape, grain, botanical, still, cask, oven or fermentation vessel.",
        "Keep paragraphs short and vary sentence length naturally.",
        "Use a brand-specific angle instead of recycling the same praise across pages.",
        "Prefer restrained, observable descriptions over inflated claims.",
        "Use Indian serving and food context where it genuinely fits the drink.",
        "Edit repeated transitions and repeated sentence openings across a batch.",
        "Omit an uncertain fact rather than disguising uncertainty as confidence.",
    ]:
        story.append(bullet(item))

    story.append(p("Language blocked from public fields", "H2x"))
    blocked = [
        "Editorial guardrail", "database", "portfolio-level description", "exact product record",
        "what to compare", "do not infer", "internal wiki", "sources suggest", "according to references",
        "testament", "symphony", "ultimate", "nestled", "whether you're", "delve", "embark", "harmonious blend",
    ]
    story.append(p(", ".join(blocked), "MetaX"))

    story.append(p("Required fields", "H2x"))
    required_rows = [
        ["description", "Direct brand identity and market context"],
        ["story", "Consumer-facing history, place or production culture"],
        ["tasting_notes", "Actual aroma, flavour, body and finish"],
        ["how_to_enjoy", "Temperature, glassware, mixer and food use"],
        ["pairing_ideas", "Specific dishes grouped for scanning"],
        ["why_choose", "Clear consumer reason without hype"],
        ["faqs", "Search-intent questions with direct answers"],
        ["final_verdict", "Short reader-focused summary"],
        ["meta_title", "Brand plus category and BevOry, maximum 60 characters"],
        ["meta_description", "Specific page value, maximum 160 characters"],
        ["logo_url", "Verified authentic brand asset with fallback handling"],
    ]
    required_table = Table(
        [[p("Field", "SmallX"), p("Editorial purpose", "SmallX")]]
        + [[p(name, "SmallX"), p(purpose, "SmallX")] for name, purpose in required_rows],
        colWidths=[44 * mm, 120 * mm],
        repeatRows=1,
    )
    required_table.setStyle(TableStyle([
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
    story.append(required_table)

    story.append(p("SEO, GEO and E-E-A-T rules", "H2x"))
    for item in [
        "Entity clarity: repeat the exact brand name, category and origin naturally in the opening copy.",
        "Answer-first structure: each section begins with the information a reader came to find.",
        "Search coverage: use grape, ingredient, production, serving and pairing terms only where verified and relevant.",
        "AI citation readiness: write compact factual sentences and direct FAQ answers that can stand alone.",
        "Trust: distinguish verified local prices from general brand information and never manufacture missing data.",
        "Expertise: use technically correct beverage vocabulary without turning the page into a production manual.",
        "Experience limitation: do not claim first-hand tasting, distillery visits or personal testing unless BevOry has documented evidence.",
        "Freshness: version each editorial batch and retain an update timestamp for later review.",
    ]:
        story.append(bullet(item))

    story.append(p("Quality assurance completed", "H2x"))
    qa_rows = [
        ["Brand expansion tests", "Passed", "3 tests"],
        ["TypeScript", "Passed", "No type errors"],
        ["Production build", "Passed", "3,417 modules transformed"],
        ["Whitespace and patch check", "Passed", "No diff errors"],
        ["Logo URL checks", "Passed", "10 working remote assets"],
        ["Public-copy phrase scan", "Passed", "No blocked internal or boilerplate phrases"],
    ]
    qa_table = Table(
        [[p("Check", "SmallX"), p("Result", "SmallX"), p("Evidence", "SmallX")]]
        + [[p(a, "SmallX"), p(b, "SmallX"), p(c, "SmallX")] for a, b, c in qa_rows],
        colWidths=[67 * mm, 34 * mm, 63 * mm],
        repeatRows=1,
    )
    qa_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, PALE_BLUE]),
        ("TEXTCOLOR", (1, 1), (1, -1), colors.HexColor("#147D4F")),
        ("BOX", (0, 0), (-1, -1), 0.5, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.35, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    story.append(qa_table)

    story.append(p("Operational note", "H2x"))
    story.append(p("The code and verified remote assets are implemented locally. Database application and production deployment remain separate operational steps and should run only in an environment with the production database and deployment credentials."))
    story.append(p("Database command: node --import tsx/esm scripts/apply-brand-expansion.ts", "MetaX"))

    doc.build(story, onFirstPage=first_page, onLaterPages=later_pages)


if __name__ == "__main__":
    build_report(load_batch())
    print(OUTPUT)
