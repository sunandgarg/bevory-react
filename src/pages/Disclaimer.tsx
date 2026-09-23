import { Link } from "react-router-dom";
import LegalPage, { LegalContact } from "@/components/legal/LegalPage";

const Disclaimer = () => (
  <LegalPage
    title="Disclaimer"
    description="Important limits and qualifications for BevOry's alcohol product, price, review, planning, health, and third-party information."
  >
    <p>
      Please read this Disclaimer before relying on any content on BevOry. It supplements the
      <Link to="/terms"> Terms & Conditions</Link>. Nothing here excludes a warranty, duty, remedy, or liability that
      applicable law does not permit us to exclude.
    </p>

    <h2>1. Information service only—no alcohol transaction</h2>
    <p>
      BevOry is an independent information, comparison, discovery, education, review, and planning service. BevOry
      does <strong>not</strong> sell, supply, deliver, import, distribute, warehouse, procure, broker, or take title to
      alcoholic beverages; operate a marketplace; verify licences for a transaction; accept orders; collect alcohol
      payments; or act as the agent of a consumer, retailer, manufacturer, brand, government body, or delivery service.
      No page creates an offer, quotation, reservation, purchase right, or promise that alcohol is lawfully available.
    </p>
    <p>
      Treat messages, calls, accounts, or payment requests claiming that BevOry will deliver alcohol as potentially
      fraudulent. Do not pay them or disclose OTPs. Report suspected impersonation through our
      <Link to="/grievance-redressal"> Grievance Redressal page</Link> and, where appropriate, to your bank, platform,
      cybercrime authority, or police.
    </p>

    <h2>2. Prices, taxes, and availability</h2>
    <p>
      Displayed prices may come from public excise lists, public catalogues, retailers, contributors, or historical
      records. They may be delayed, incomplete, wrongly transcribed, applicable to another city, retailer, batch,
      package, vintage, or bottle size, or may include or exclude taxes, deposits, duties, service fees, or promotions.
      A product may be out of stock, restricted, discontinued, relabelled, or unlawful to supply in your location.
    </p>
    <p>
      Prices are indicative comparisons, not live quotes, maximum retail price verification, investment information,
      purchase advice, or price guarantees. Confirm the exact product, volume, batch, final payable price, seller's
      licence, and lawful availability directly with an authorised local retailer or relevant excise authority before
      making any decision. BevOry is not responsible for a retailer's price, stock, refusal, product, or conduct.
    </p>

    <h2>3. Product details and imagery</h2>
    <p>
      Names, categories, origin, age statements, ABV, tasting notes, ingredients, awards, packaging, bottle shapes,
      labels, and images are for identification and general information. Packaging and specifications change, and
      images may be representative, cropped, obscured, reformatted, user-supplied, or associated with a different
      edition or size. The physical product label and official producer information control.
    </p>
    <p>
      We make reasonable correction efforts but do not represent that every entry is complete, current, original,
      authorised by a rights holder, or free of error. Rights holders may submit a documented notice under our
      <Link to="/intellectual-property"> IP, Trademark & Image Rights Policy</Link>.
    </p>

    <h2>4. No affiliation, sponsorship, endorsement, or disparagement</h2>
    <p>
      Product and company names, trademarks, trade dress, packaging, and images belong to their respective owners.
      Unless expressly stated on a specific page, their appearance is descriptive and nominative: it does not imply
      that a rights holder sponsors, certifies, licenses, partners with, or endorses BevOry. Likewise, comparison,
      ordering, an omitted listing, correction, or user opinion is not a statement that BevOry endorses or disparages a
      business or product. Search and category order may reflect data availability, relevance, freshness, or automated
      rules, and is not necessarily a quality or sales ranking.
    </p>

    <h2>5. Reviews, ratings, creators, and third-party opinions</h2>
    <p>
      Reviews, ratings, comments, videos, and creator material may express the contributor's opinion and not BevOry's.
      Taste is subjective. We do not guarantee that a reviewer bought a product, that every conflict or incentive was
      disclosed, or that an opinion is representative. We may moderate apparent abuse, but publication is not
      verification, adoption, professional advice, or endorsement. Report suspected manipulation or unlawful content
      under the <Link to="/community-guidelines">Community & Review Guidelines</Link>.
    </p>

    <h2>6. Health, nutrition, allergy, and dependency warning</h2>
    <p>
      BevOry is not a doctor, dietitian, pharmacist, toxicologist, addiction counsellor, or emergency service. Content
      is not medical, nutritional, diagnostic, treatment, or sobriety advice. Alcohol use involves serious short- and
      long-term risks. It may be unsafe during pregnancy; while driving or operating machinery; with medication,
      illness, or mental-health conditions; or for a person with dependency risk. "Low alcohol", "light", "organic",
      or similar product language does not mean safe or healthy.
    </p>
    <p>
      Allergen, ingredient, sugar, calorie, vegan, gluten, contamination, and dietary statements may be missing or
      inaccurate and recipes can change. Never rely on BevOry for an allergy or medical decision. Read the physical
      label, contact the producer, and consult an appropriately qualified healthcare professional. For a suspected
      poisoning, severe reaction, loss of consciousness, breathing difficulty, or other emergency, contact local
      emergency services immediately.
    </p>

    <h2>7. Responsible drinking and legal-age restrictions</h2>
    <p>
      BevOry's 25+ gate is a conservative platform rule, not proof that a person can lawfully buy or consume alcohol.
      Legal age and alcohol rules differ between Indian states and territories and may change. Prohibition, dry days,
      licence conditions, transport limits, and venue rules may apply. You are responsible for the law in the place
      where you access, possess, serve, transport, purchase, or consume a product. Never supply alcohol to a minor,
      pressure anyone to drink, drink and drive, or use our content to evade law. See our
      <Link to="/responsible-drinking"> Responsible Drinking & Age Policy</Link>.
    </p>

    <h2>8. Party Planner and quantity estimates</h2>
    <p>
      Party Planner output is a rough logistics estimate based on inputs and assumptions. It is not a recommended
      quantity to consume or serve, a safe-consumption limit, a shopping list, event-management advice, or evidence of
      compliance with alcohol, venue, employment, health, or licensing law. Actual needs vary widely. Hosts and venues
      remain responsible for legal service, attendance and age checks, refusing intoxicated persons, non-alcoholic
      options, food and water, trained staff where appropriate, safe transport, and emergency arrangements.
    </p>

    <h2>9. Cocktails and instructional content</h2>
    <p>
      Recipes, techniques, storage suggestions, glassware information, and educational articles are general content.
      Measurements, alcohol strength, allergens, food-safety needs, equipment hazards, and fire risks vary. Follow
      manufacturer instructions, use appropriate supervision, and do not perform flammable, high-pressure, sharp-tool,
      or other hazardous techniques without the required expertise and safety controls.
    </p>

    <h2>10. AI-generated answers</h2>
    <p>
      oRy AI and AI-assisted Party Planner output is generated automatically using page context and selected BevOry
      catalogue records. It can misunderstand a question, omit context, or produce an inaccurate or outdated answer.
      It is not a statement from a producer, retailer, regulator, doctor, lawyer, or other professional. Verify prices,
      availability, ingredients, allergens, alcohol strength, serving information, and legal requirements using the
      physical label and an appropriate authoritative source. Do not submit sensitive or confidential information.
    </p>

    <h2>11. External links, embeds, and services</h2>
    <p>
      Links and embeds may lead to websites and services we do not control, including Google and YouTube. We do not
      warrant their identity, legality, security, accessibility, privacy practices, representations, products, or
      continued availability. A link is provided for convenience or attribution and is not an endorsement. Review the
      third party's current terms and use independent judgment before interacting or sharing information.
    </p>

    <h2>12. Availability, security, and technical limitations</h2>
    <p>
      The Service may be interrupted, delayed, changed, contain broken links, display cached information, or behave
      differently across devices. No online service can be guaranteed error-free, continuously available, or immune
      from malicious activity. Keep independent records of information important to you and use appropriate device,
      account, and network security.
    </p>

    <h2>13. No professional advice or reliance guarantee</h2>
    <p>
      BevOry content is general information and is not legal, tax, excise, medical, nutritional, financial, safety,
      licensing, investment, procurement, or other professional advice. You should obtain advice from a suitably
      qualified professional or authority for your circumstances. Any action you take based on the Service is at your
      own judgment and risk, subject always to rights and remedies that applicable law does not allow us to exclude.
    </p>

    <h2>14. Corrections and contact</h2>
    <p>
      If you identify an inaccurate price, product record, unsafe statement, impersonation, rights concern, or other
      material issue, send the exact URL, a description, reliable supporting evidence, and your requested correction.
      We may request clarification and will assess the report in context; receipt does not mean the claim is accepted.
    </p>
    <LegalContact purpose="correction requests and disclaimer questions" />
  </LegalPage>
);

export default Disclaimer;
