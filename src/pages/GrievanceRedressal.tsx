import { Link } from "react-router-dom";
import LegalPage, { LEGAL_EMAIL, LegalContact } from "@/components/legal/LegalPage";

const GrievanceRedressal = () => (
  <LegalPage
    title="Grievance Redressal & Legal Contact"
    description="How to submit privacy, content, account, safety, intellectual-property, correction, and legal grievances to BevOry."
  >
    <p>
      This page is BevOry's central channel for user complaints, privacy requests, account appeals, safety reports,
      content grievances, correction requests, rights notices, and legal correspondence. It is intended to support
      applicable Indian grievance and intermediary requirements without limiting any statutory remedy.
    </p>

    <h2>1. Current grievance contact</h2>
    <LegalContact purpose="all grievances and legal correspondence" />
    <p>
      The public role responsible for intake is the <strong>BevOry Grievance Desk</strong>. BevOry does not currently
      publish a separate incorporated-entity name, postal service address, or individually named officer on this page.
      A role-based desk does not replace additional officer particulars if applicable law requires them; this page will
      be updated once those particulars are formally confirmed. Email is the fastest current channel. Sending email
      does not constitute formal service of court process unless BevOry expressly acknowledges service or law requires
      otherwise.
    </p>

    <h2>2. Choose a clear subject</h2>
    <ul>
      <li><strong>Privacy Request</strong> — access, correction, erasure, withdrawal, nomination, or privacy complaint.</li>
      <li><strong>Account Appeal</strong> — sign-in, suspension, impersonation, or unauthorised access.</li>
      <li><strong>Content Grievance</strong> — unlawful, harmful, defamatory, deceptive, or rule-violating content.</li>
      <li><strong>Urgent Image/Impersonation Complaint</strong> — intimate, sexual, morphed, or impersonation media.</li>
      <li><strong>Rights Notice</strong> — copyright, trademark, design, image, or other intellectual-property claim.</li>
      <li><strong>Data Correction</strong> — product, price, bottle size, location, brand, or attribution correction.</li>
      <li><strong>Security Report</strong> — suspected vulnerability, breach, phishing, or BevOry impersonation.</li>
      <li><strong>Legal Notice</strong> — court, authority, law-enforcement, or counsel correspondence.</li>
    </ul>

    <h2>3. Information to include</h2>
    <p>To help us act without unnecessary delay, provide:</p>
    <ol>
      <li>your name, reliable email and phone, and relationship to the person, account, work, or organisation concerned;</li>
      <li>each exact URL, account identifier, content description, city, product, or other locator;</li>
      <li>the nature of the complaint, relevant policy or legal basis, and why action is requested;</li>
      <li>dates, screenshots, correspondence, public records, registration details, or other proportionate evidence;</li>
      <li>the outcome sought—correction, restriction, deletion, account restoration, response, or another remedy; and</li>
      <li>a statement that the information is accurate and that you are affected or authorised to act.</li>
    </ol>
    <p>
      Share only information needed for the complaint. Do not email passwords, OTPs, full payment credentials, or
      unredacted government documents unless we specifically request a secure verification method. We may ask for
      proportionate identity or authority verification before disclosing account data or acting on another person's
      behalf.
    </p>

    <h2>4. Special instructions by request type</h2>
    <h3>Privacy and account requests</h3>
    <p>
      Identify the email or phone used for BevOry and the specific right or account action requested. We may require
      in-account confirmation or other verification. Explain any safety reason that prevents you from using the account
      channel. See the <Link to="/privacy-policy">Privacy Policy</Link> for scope and lawful exceptions.
    </p>

    <h3>Rights and image notices</h3>
    <p>
      Include ownership or agency evidence, each URL, the protected material, territory, legal basis, and requested
      remedy. The complete requirements and counter-notice process are in the
      <Link to="/intellectual-property"> IP, Trademark & Image Rights Policy</Link>.
    </p>

    <h3>Price and product corrections</h3>
    <p>
      State the product, size, city, displayed information, observation date, and an authoritative current source such
      as an official excise record, producer page, dated licensed-retailer evidence, or clear package image. A retailer
      quote may differ without proving that the database record was unlawful or fabricated.
    </p>

    <h3>Urgent safety and illegal-content reports</h3>
    <p>
      Put <strong>URGENT</strong> in the subject only for imminent safety risk or a category subject to accelerated legal
      treatment. If someone faces immediate danger, contact local emergency services or police first. BevOry is not an
      emergency responder and email is not continuously monitored in real time.
    </p>

    <h2>5. Intake and response targets</h2>
    <p>
      We aim to acknowledge a sufficiently identifiable grievance within 24 hours and to resolve an ordinary grievance
      within 7 days, subject to evidence, complexity, and any shorter or longer period required by law. Where the
      current Indian intermediary rules apply, BevOry will endeavour to follow category-specific timelines, including:
    </p>
    <ul>
      <li>up to 36 hours for qualifying complaints concerning specified unlawful information;</li>
      <li>
        reasonable and practicable measures to remove or disable access within 2 hours for qualifying complaints by
        an affected individual involving nudity, sexual conduct, impersonation, or artificially morphed imagery; and
      </li>
      <li>
        up to 3 hours to remove or disable access where a qualifying court order or authorised government notice
        requires that accelerated action.
      </li>
    </ul>
    <p>
      These are handling targets or statutory categories where applicable, not a promise that every email fits that
      category or will be decided in the complainant's favour. Time may be needed to verify authority, locate content,
      prevent harm to another person's rights, or comply with procedural law. We may take interim action while review
      continues.
    </p>

    <h2>6. How we assess a grievance</h2>
    <p>
      We may review the content and surrounding context, account and security records, source and licence information,
      applicable policies, law, public interest, and evidence from affected parties. We may request clarification,
      consolidate duplicates, redact unnecessary data, contact the uploader or source, consult an adviser, or refer a
      matter to a competent authority. Outcomes may include no action, explanation, correction, attribution, warning,
      de-ranking, restriction, removal, account action, restoration, or another proportionate remedy.
    </p>
    <p>
      Restriction does not admit liability; refusal does not conclusively determine legality. BevOry is not a court and
      may be unable to decide genuinely contested ownership, defamation, contractual, or commercial facts without an
      authoritative order. We will give reasons where appropriate and legally permitted, but may withhold details that
      would expose security controls, another person's data, confidential material, or a protected investigation.
    </p>

    <h2>7. Preservation and disclosure</h2>
    <p>
      We may preserve reported or removed content and associated records where reasonably needed for investigation,
      security, dispute defence, or legal compliance. Where applicable intermediary rules require preservation after
      removal or loss of registration, the minimum period may be 180 days. Preservation does not mean content remains
      public. We disclose records only as described in the Privacy Policy, with valid authority or consent, or where
      reasonably necessary and lawful to protect rights and safety.
    </p>

    <h2>8. Review and appeal</h2>
    <p>
      If you disagree with an outcome, reply to the decision with <strong>"Request for Review"</strong>, explain the
      specific error, and provide new or overlooked evidence. A different reviewer may assess it where practical. Where
      the Information Technology Rules provide a right to appeal to a Grievance Appellate Committee, you may use that
      mechanism within the statutory period. Court, regulator, consumer-forum, Data Protection Board, police, and other
      remedies remain available to the extent applicable; using our internal process does not waive them.
    </p>

    <h2>9. Abuse of the process</h2>
    <p>
      Do not submit knowingly false claims, forged documents, threats, repetitive mass notices, requests intended to
      suppress lawful criticism, or another person's personal data without justification. We may prioritise genuine
      risk, ask a bulk complainant to consolidate URLs, restrict abusive correspondence, preserve evidence, and take
      lawful action. Good-faith mistakes will be handled proportionately.
    </p>

    <h2>10. Send a grievance</h2>
    <p>
      Email <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a> or use the published phone number for an initial contact.
      Written email with URLs and evidence is preferred because it creates an auditable record. If a complaint is made
      by phone, we may ask you to confirm it in writing.
    </p>
    <LegalContact purpose="grievances, requests, appeals, and legal correspondence" />
  </LegalPage>
);

export default GrievanceRedressal;
