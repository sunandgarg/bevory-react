import { Link } from "react-router-dom";
import LegalPage, { LEGAL_EMAIL, LegalContact } from "@/components/legal/LegalPage";

const IntellectualPropertyPolicy = () => (
  <LegalPage
    title="IP, Trademark & Image Rights Policy"
    description="BevOry's ownership boundaries, product-reference practices, and notice-and-takedown process for copyright, trademark, image, and related rights."
  >
    <p>
      BevOry respects copyright, trademark, design, database, personality, privacy, and other rights. This policy explains
      what BevOry claims, what it does not claim, and how a rights holder or affected person can request review. It is a
      practical notice-and-takedown process under applicable Indian law; it is not an admission that any reported use is
      unlawful and does not replace a court or statutory remedy.
    </p>

    <h2>1. BevOry material and third-party material</h2>
    <p>
      BevOry owns or is authorised to use certain original software, interface design, selection and arrangement,
      original written material, BevOry logos, and operational data. You may not copy or commercially exploit those
      elements except as allowed by the <Link to="/terms">Terms & Conditions</Link> or with written permission.
    </p>
    <p>
      BevOry does <strong>not</strong> claim ownership of every product name, company name, bottle design, label,
      trademark, photograph, video, creator work, public record, or User Content displayed on the Service. Those rights
      may belong to brands, photographers, agencies, creators, users, public bodies, or other parties. A file being
      stored on BevOry-controlled infrastructure does not by itself mean BevOry created it or owns every underlying
      right.
    </p>

    <h2>2. Descriptive product and trademark references</h2>
    <p>
      Product names, marks, packaging, bottle shapes, and other identifiers may be used to describe, identify, compare,
      review, organise, or discuss the referenced product. Unless expressly stated, such reference does not mean that a
      rights holder sponsors, authorises, certifies, licenses, partners with, or endorses BevOry. BevOry does not permit
      users to suggest an affiliation that does not exist or use another party's mark as their own identity.
    </p>
    <p>
      BevOry's category-card artwork uses original, brand-neutral bottle designs created as visual classification
      devices. It uses general category cues without copying a named label or displaying a brand name or logo. The
      artwork is not a statement that any product is "best", "top", most popular, or preferred. Separate catalogue
      product images and marks remain subject to their own provenance and third-party rights.
    </p>

    <h2>3. Images, videos, metadata, and public information</h2>
    <p>
      Images and videos may originate from contributors, creators, product or retailer materials, public sources, or
      other records. Product facts and public prices may not be protected in the same way as creative expression, but
      photographs, label art, compilations, and videos can carry separate rights. We may resize, cache, reformat, crop,
      or obscure media for delivery, identification, safety, or interface consistency; that technical processing does
      not create ownership of the underlying work.
    </p>
    <p>
      If provenance is incomplete or disputed, we may add attribution, replace or restrict the material, request proof,
      or remove it while reviewing the issue. BevOry cannot guarantee that every contributor accurately described
      ownership. Rights holders should use the notice process below rather than assuming that a listing reflects a
      commercial relationship.
    </p>

    <h2>4. User Content</h2>
    <p>
      Contributors retain rights they lawfully hold but grant the operational licence stated in our Terms. By uploading
      media or text, a contributor represents that the submission and BevOry's permitted use do not infringe or violate
      another person's rights. Do not upload material merely because it is available online. Give attribution where a
      licence requires it, disclose edits that could mislead, and retain records of permission.
    </p>

    <h2>5. What a rights notice must include</h2>
    <p>
      Email <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a> with the subject <strong>"Rights Notice"</strong>. A
      complete notice should include:
    </p>
    <ol>
      <li>your full name, role, organisation (if any), email, phone, and a reliable means to contact you;</li>
      <li>
        identification of the copyright work, trademark, design, image/personality right, confidential information, or
        other right concerned, including registration details where relevant;
      </li>
      <li>each exact BevOry URL and a clear description or screenshot locating the disputed material;</li>
      <li>
        the legal and factual basis of the claim, the territory concerned, and why the use is not authorised, licensed,
        descriptive, permitted by law, or otherwise lawful;
      </li>
      <li>
        evidence that you own the right or are authorised to act, such as a registration, assignment, licence chain,
        original file record, agency authorisation, or official domain correspondence;
      </li>
      <li>the precise remedy requested: removal, restriction, attribution, correction, replacement, or contact; and</li>
      <li>
        a good-faith statement that the information is accurate and that you are the rights holder or authorised to act,
        signed physically or electronically.
      </li>
    </ol>
    <p>
      Do not send passwords, OTPs, or unrelated identity documents. Redact information that is not needed. A vague
      brand-wide demand, search-result screenshot without URLs, or unsupported assertion may delay review because we
      cannot identify the material or claimant's authority.
    </p>

    <h2>6. Review and interim action</h2>
    <p>
      We aim to acknowledge a complete grievance within 24 hours. We may ask questions, contact the uploader or source,
      examine licences and context, and take proportionate interim action where there is a credible risk. Depending on
      the facts and applicable law, we may remove or disable access, obscure a label, replace an image, add attribution
      or context, correct metadata, geo-restrict material, preserve it as evidence, or decline the request.
    </p>
    <p>
      An interim restriction is not a finding of infringement. A refusal is not a declaration that the material is
      lawful. Statutory response periods for particular court orders, government notices, or categories of unlawful
      content may be shorter than our ordinary complaint process and will control where applicable. We may preserve
      removed content and associated records for at least 180 days where intermediary law requires it, or longer when a
      valid legal hold or proceeding applies.
    </p>

    <h2>7. Response or counter-notice</h2>
    <p>
      If your content is restricted, you may respond with the relevant URL, your contact information, proof of your
      rights or permission, and a clear explanation of why the material was misidentified or is lawfully used. Include
      any licence, source record, consent, public-domain basis, or other supporting evidence. We may forward the
      substance of a notice or response between the affected parties, with unnecessary personal data redacted, where
      reasonably necessary to resolve the claim.
    </p>
    <p>
      We may restore, replace, or keep content restricted after considering both sides and any binding legal process.
      Complex ownership disputes may require the parties to obtain a court order; BevOry is not a tribunal and cannot
      conclusively decide title. A complainant or affected user may use our
      <Link to="/grievance-redressal"> grievance and appeal channel</Link>, and any Grievance Appellate Committee or
      other remedy available under applicable law remains unaffected.
    </p>

    <h2>8. Trademark, passing-off, and listing complaints</h2>
    <p>
      A trademark complaint should explain the exact mark, registration and classes if registered, territory, allegedly
      confusing use, and why the context is not a legitimate descriptive reference. If the concern is instead an
      inaccurate name, bottle, size, price, category, or claim, identify authoritative correction evidence. BevOry may
      preserve an accurate nominative product reference while correcting confusion about affiliation.
    </p>

    <h2>9. Privacy, impersonation, and intimate or manipulated imagery</h2>
    <p>
      If media exposes private information, impersonates you, or depicts nudity, sexual conduct, or manipulated intimate
      imagery, clearly mark the subject <strong>"Urgent Image/Impersonation Complaint"</strong>, provide each URL, state
      your relationship to the depicted person, and include only the verification needed to assess the request. We
      prioritise categories subject to accelerated legal timelines, including taking reasonable and practicable
      measures to remove or disable access within two hours where the current Indian intermediary rules require it.
      Contact police or emergency services directly for imminent danger.
    </p>

    <h2>10. Repeat and abusive conduct</h2>
    <p>
      We may restrict accounts that repeatedly infringe rights or repeatedly submit material without authority. We may
      also reject or escalate notices that are knowingly false, forged, abusive, intended to suppress lawful criticism,
      or disclose another person's data without justification. Parties remain responsible for statements made in a
      notice or response and for consequences under applicable law.
    </p>

    <h2>11. Contact</h2>
    <LegalContact purpose="copyright, trademark, image-rights, impersonation, and takedown notices" />
  </LegalPage>
);

export default IntellectualPropertyPolicy;
