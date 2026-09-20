import { Link } from "react-router-dom";
import LegalPage, { LegalContact } from "@/components/legal/LegalPage";

const CommunityGuidelines = () => (
  <LegalPage
    title="Community & Review Guidelines"
    description="Rules for honest, safe, lawful reviews, ratings, comments, profiles, reports, and other contributions to BevOry."
  >
    <p>
      BevOry welcomes genuine adult opinions and useful corrections. These Guidelines apply to reviews, ratings,
      comments, profile information, uploaded media, reports, and other submissions. They supplement the
      <Link to="/terms"> Terms & Conditions</Link>. Publication is not endorsement by BevOry, and no user is entitled
      to publication, a particular ranking, or permanent availability.
    </p>

    <h2>1. Be genuine and relevant</h2>
    <ul>
      <li>Describe your own genuine experience or clearly identify information learned from another reliable source.</li>
      <li>Review the correct product, bottle size, batch, venue, or feature and distinguish fact from opinion.</li>
      <li>Explain useful context such as date, city, package, or serving method without exposing private information.</li>
      <li>Do not post a review solely to retaliate, threaten, obtain a benefit, or manipulate a dispute.</li>
      <li>Do not submit duplicate, coordinated, bought, fabricated, bot-generated, or mass-produced ratings.</li>
    </ul>
    <p>
      Taste is subjective and lawful criticism may be firm. A business cannot require us to remove a genuine negative
      opinion merely because it is unfavourable, and a reviewer cannot present an unverified accusation as established
      fact. We may request evidence or revise how a disputed factual claim is displayed.
    </p>

    <h2>2. Disclose incentives and relationships</h2>
    <p>
      Clearly disclose any free product, event invitation, payment, employment, agency, ownership, family relationship,
      affiliate arrangement, or other material connection that could affect credibility. Brand staff, retailers,
      agencies, creators, and competitors must not pose as independent consumers or ask others to do so. A disclosure
      does not automatically make content acceptable; the content must still be accurate, lawful, and relevant.
    </p>

    <h2>3. Alcohol safety</h2>
    <p>Do not submit content that:</p>
    <ul>
      <li>targets or depicts minors in an alcohol-promotion context;</li>
      <li>encourages rapid or excessive consumption, drinking games, unsafe mixtures, or drinking to intoxication;</li>
      <li>suggests alcohol improves health, pregnancy outcomes, driving, athletic ability, status, consent, or success;</li>
      <li>facilitates unlicensed sale, delivery, supply to minors, excise evasion, or prohibited-location activity;</li>
      <li>pressures a person to drink, ridicules abstention, or encourages driving or hazardous activity after alcohol; or</li>
      <li>gives dangerous medical, allergy, dependency, or emergency advice.</li>
    </ul>
    <p>See the <Link to="/responsible-drinking">Responsible Drinking & Age Policy</Link> for the full standard.</p>

    <h2>4. Respect people, privacy, and consent</h2>
    <ul>
      <li>Do not threaten, harass, bully, exploit, stalk, or discriminate against a person or protected group.</li>
      <li>Do not publish addresses, private phone numbers, financial data, IDs, OTPs, health records, or private messages.</li>
      <li>Do not impersonate another person, brand, authority, or BevOry representative.</li>
      <li>
        Do not upload intimate, sexual, secretly recorded, face-swapped, morphed, or otherwise privacy-invasive media
        without the legally required authority and consent.
      </li>
      <li>Do not encourage self-harm, violence, exploitation, or illegal conduct.</li>
    </ul>

    <h2>5. Respect intellectual property and confidentiality</h2>
    <p>
      Upload only material you created or are authorised to share. Do not copy a review, photograph, label artwork,
      article, database, paywalled text, trade secret, or confidential document merely because you found it online.
      Short quotation or descriptive reference may be permitted in some circumstances, but you are responsible for the
      legal basis, context, and attribution. Follow our <Link to="/intellectual-property">IP, Trademark & Image Rights
      Policy</Link>.
    </p>

    <h2>6. No spam, security abuse, or manipulation</h2>
    <ul>
      <li>No malware, phishing, credential requests, deceptive links, pyramid schemes, or unsolicited promotion.</li>
      <li>No scripts, bots, voting rings, fake accounts, review exchanges, or attempts to evade enforcement.</li>
      <li>No scraping, harvesting, model-training extraction, or database reproduction without written permission.</li>
      <li>No vulnerability exploitation or publication of active exploit details before safe remediation.</li>
      <li>No irrelevant keyword stuffing, repeated contact details, or commercial solicitations disguised as reviews.</li>
    </ul>

    <h2>7. Commercial and brand participation</h2>
    <p>
      Businesses may submit factual corrections and respond professionally where a feature permits. They may not
      suppress lawful criticism, reward only positive ratings, threaten reviewers, post unverifiable comparative claims,
      or misuse a competitor's listing. Any sponsored, affiliate, paid, gifted, or commissioned material must be
      prominently labelled in language an ordinary user can understand. Unless a specific item carries such a label,
      businesses should not assume that appearance or ordering was purchased.
    </p>

    <h2>8. Reviews are not product-safety reports or emergencies</h2>
    <p>
      A review is not the right channel for an urgent poisoning, tampering, counterfeit, threat, or medical emergency.
      Contact local emergency services, police, the seller, producer, excise authority, food-safety authority, or other
      competent body as appropriate. You may also send BevOry a documented report, but our review cannot replace an
      official investigation or product recall.
    </p>

    <h2>9. Moderation</h2>
    <p>
      BevOry may use automated signals and human review to prioritise, label, limit visibility, reject, edit for
      formatting or redaction, disable links, preserve, or remove content. Relevant factors include these Guidelines,
      context, evidence, risk, public interest, applicable law, repeat conduct, and whether a less restrictive measure
      addresses the concern. We may freeze ratings affected by suspected manipulation and exclude them from aggregates.
    </p>
    <p>
      Moderation is necessarily imperfect. The presence of content does not mean we reviewed, verified, or adopted it;
      the absence of content does not mean a claim was false. We are not obliged to resolve every private commercial
      dispute or adjudicate disputed ownership. Where appropriate, we may ask the parties for evidence or direct them to
      a competent authority.
    </p>

    <h2>10. Enforcement and account action</h2>
    <p>
      Depending on severity and history, action may include education, warning, content restriction or removal, loss of
      review privileges, rate limits, account suspension or termination, preservation of evidence, or referral to an
      authority where legally required or reasonably necessary for safety. Serious violations may result in immediate
      action without a prior warning. Attempts to evade a restriction may lead to broader enforcement.
    </p>

    <h2>11. Reports and appeals</h2>
    <p>
      A report should identify the exact URL or account, the specific rule or right involved, relevant date and context,
      reliable evidence, and the requested outcome. Do not submit mass or knowingly false reports. If BevOry acts on
      your content or account, you may request review with the decision details and supporting evidence through our
      <Link to="/grievance-redressal"> Grievance Redressal process</Link>. Any statutory appellate remedy remains
      available where applicable.
    </p>
    <LegalContact purpose="community reports, moderation questions, and appeals" />
  </LegalPage>
);

export default CommunityGuidelines;
