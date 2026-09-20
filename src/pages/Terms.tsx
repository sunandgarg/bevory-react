import { Link } from "react-router-dom";
import LegalPage, { LegalContact } from "@/components/legal/LegalPage";

const Terms = () => (
  <LegalPage
    title="Terms & Conditions"
    description="The terms governing access to BevOry's adult beverage information, discovery, comparison, community, and planning features."
  >
    <p>
      These Terms & Conditions (the <strong>"Terms"</strong>) form a binding agreement between you and the operator of
      BevOry for your use of <strong>bevory.in</strong>, its related pages, accounts, content, tools, and services
      (together, the <strong>"Service"</strong>). In these Terms, "BevOry", "we", "us", and "our" refer to the
      operator publishing the Service under the BevOry name; "you" means each visitor, account holder, or contributor.
    </p>

    <h2>1. Acceptance and incorporated policies</h2>
    <p>
      By accessing or using the Service, creating an account, or submitting content, you confirm that you have read and
      agree to these Terms. Our <Link to="/privacy-policy">Privacy Policy</Link>, <Link to="/cookie-policy">Cookie &
      Local Storage Policy</Link>, <Link to="/disclaimer">Disclaimer</Link>, <Link to="/responsible-drinking">Responsible
      Drinking & Age Policy</Link>, <Link to="/intellectual-property">IP, Trademark & Image Rights Policy</Link>, and
      <Link to="/community-guidelines"> Community & Review Guidelines</Link> are incorporated by reference to the extent
      applicable. If you do not agree, do not use the Service.
    </p>
    <p>
      If you use the Service for an organisation, you represent that you have authority to bind it, and "you" includes
      that organisation. Nothing in these Terms limits a right or remedy that cannot lawfully be waived, including any
      mandatory consumer or data-protection right.
    </p>

    <h2>2. Adult eligibility and local law</h2>
    <ul>
      <li>
        You must be at least 18 and at or above the legal drinking age where you are located. BevOry applies a
        conservative 25+ access gate even where local law sets a lower age.
      </li>
      <li>
        You may not use alcohol-related portions of the Service where access to such material is unlawful, including
        where prohibition or other local restrictions apply.
      </li>
      <li>
        Legal policies, privacy controls, grievance and rights-request channels, safety notices, and contact details
        remain publicly accessible without age confirmation so affected people can understand and exercise their
        rights. That limited access does not authorise use of alcohol-discovery features by an ineligible person.
      </li>
      <li>
        Age confirmation is a gate, not identity verification. You must give truthful information and must not help a
        minor or an ineligible person bypass it.
      </li>
      <li>
        You alone are responsible for understanding and following local rules on possession, purchase, transport,
        service, advertising, and consumption of alcohol.
      </li>
    </ul>

    <h2>3. What BevOry is—and is not</h2>
    <p>
      BevOry is an adult-oriented informational service for discovering and comparing beverage products, indicative
      prices, bottle sizes, categories, brands, educational material, videos, reviews, and planning estimates. BevOry
      is <strong>not</strong> an alcohol seller, retailer, wholesaler, importer, distributor, delivery service,
      marketplace, auction platform, payment processor, procurement agent, or licensed alcohol intermediary. The Service does
      not accept alcohol orders, take title to alcohol, arrange fulfilment, collect alcohol-sale payments, or promise
      product availability.
    </p>
    <p>
      Any retailer, government source, brand, creator, venue, platform, or other third party referred to on the Service
      acts independently. Unless a page expressly states a verified commercial relationship, no listing, ranking,
      reference, image, link, or comparison creates a partnership, agency, franchise, sponsorship, endorsement, or
      representation authority.
    </p>

    <h2>4. Informational listings, prices, and availability</h2>
    <p>
      Prices and product records may be compiled from public excise materials, public catalogues, retailers, users,
      brands, or other sources. They may be delayed, incomplete, incorrectly matched, inclusive or exclusive of
      charges, applicable to a different bottle size, or unavailable in your city. Displayed prices are indicative,
      not quotations, offers, price guarantees, or recommendations to transact. Product names, packaging, ABV,
      ingredients, vintages, batch details, origin, and availability can change without notice. Verify the current
      price, lawful availability, sealed packaging, label, and seller credentials directly with a licensed local
      retailer or relevant authority before acting.
    </p>
    <p>
      We may correct, merge, reorder, suspend, or remove any listing without notice. We do not guarantee continuous
      coverage of any location, brand, retailer, product, or price source, or equal placement in search and discovery.
    </p>

    <h2>5. Accounts and authentication</h2>
    <ul>
      <li>Provide accurate, current information and maintain only accounts you are authorised to use.</li>
      <li>Protect your password, phone, email, session, and one-time codes; do not sell, share, or transfer an account.</li>
      <li>Tell us promptly if you suspect unauthorised access. You remain responsible for activity you authorise.</li>
      <li>
        Google sign-in and phone verification may depend on Google and Twilio. Their availability and separate terms
        are outside our control.
      </li>
      <li>
        We may require re-verification, reject a registration, limit functionality, or suspend an account where
        reasonably necessary for security, legal compliance, abuse prevention, or enforcement of these Terms.
      </li>
    </ul>
    <p>
      Subject to legal retention duties and legitimate security records, you may request account deletion through the
      <Link to="/grievance-redressal"> Grievance Redressal page</Link>. Deleting an account may not immediately remove
      de-identified data, lawful records, backups awaiting rotation, or content already used in a manner you authorised.
    </p>

    <h2>6. User content and feedback</h2>
    <p>
      "User Content" includes reviews, ratings, comments, profile details, reports, images, suggestions, and other
      material you submit. You retain any rights you lawfully hold. You grant BevOry a non-exclusive, worldwide,
      royalty-free, transferable and sublicensable licence to host, reproduce, store, adapt for formatting or safety,
      translate, publish, display, distribute, and communicate that User Content solely to operate, secure, improve,
      promote, and provide the Service and its archives. This licence lasts while the content is used on the Service;
      it may continue for lawful backups, evidence, moderation records, and uses already made before deletion. Feedback
      about the Service may be used without restriction or payment, without identifying you unless you consent.
    </p>
    <p>You represent and warrant that:</p>
    <ul>
      <li>you created or have all permissions needed to submit the User Content and grant this licence;</li>
      <li>it is based on a genuine experience where presented as a review and is not undisclosed paid promotion;</li>
      <li>it is not false, deceptive, defamatory, unlawfully threatening, obscene, privacy-invasive, or infringing;</li>
      <li>it does not expose another person's sensitive data or confidential information without lawful authority; and</li>
      <li>its submission and our permitted use do not breach law, contract, court order, or platform rules.</li>
    </ul>
    <p>
      We do not pre-approve every submission and do not adopt it as our own. We may label, refuse, edit for formatting,
      restrict, preserve, or remove User Content, but are not obliged to monitor all content. Moderation decisions may
      use automated signals and human review. See the <Link to="/community-guidelines">Community & Review Guidelines</Link>.
    </p>

    <h2>7. Limited licence and intellectual-property boundaries</h2>
    <p>
      Subject to these Terms, BevOry gives you a personal, limited, revocable, non-exclusive, non-transferable licence
      to access the Service for lawful, non-commercial use. BevOry owns or is authorised to use certain software,
      design, original text, databases, and BevOry branding. Other names, bottle designs, labels, product images,
      videos, trademarks, and user submissions may belong to their respective owners. Their appearance does not
      transfer rights to BevOry or to you and does not imply endorsement.
    </p>
    <p>You must not, except where applicable law expressly permits:</p>
    <ul>
      <li>copy, republish, sell, sublicense, mirror, frame, or commercially exploit the Service or its database;</li>
      <li>
        scrape, crawl, harvest, train a model on, or systematically extract content, prices, images, or account data
        without our prior written permission;
      </li>
      <li>reverse engineer, bypass access controls, defeat rate limits, or interfere with source attribution;</li>
      <li>remove rights notices or imply ownership, sponsorship, or official association that does not exist; or</li>
      <li>use any third-party mark or content beyond the rights independently available to you.</li>
    </ul>
    <p>
      Rights holders can use our <Link to="/intellectual-property">notice-and-takedown process</Link>. We may preserve
      disputed material and notices where reasonably needed to evaluate claims or comply with law.
    </p>

    <h2>8. Prohibited conduct</h2>
    <p>You must not use the Service to:</p>
    <ul>
      <li>facilitate unlawful alcohol sales, delivery, supply to minors, evasion of excise rules, or intoxicated driving;</li>
      <li>impersonate a person or business, manipulate ratings, submit fabricated reviews, or conceal paid promotion;</li>
      <li>upload malware, probe vulnerabilities, overload infrastructure, or access data without authorisation;</li>
      <li>harass, discriminate against, exploit, threaten, or dox another person;</li>
      <li>collect personal data or send spam without a lawful basis;</li>
      <li>make medical, safety, or legal claims likely to cause harm; or</li>
      <li>use the Service in a way that infringes rights, violates law, or exposes BevOry or another person to liability.</li>
    </ul>

    <h2>9. Health, allergies, and planning tools</h2>
    <p>
      BevOry content is not medical, nutritional, addiction-treatment, dietary, legal, financial, or professional
      advice. Alcohol can cause dependency, poisoning, injury, and long-term health harm and may be unsafe with
      medicines, pregnancy, health conditions, driving, machinery, or other activities. Product pages may omit or
      misstate allergens, ingredients, calories, sugar, additives, or contamination risks. Always read the physical
      label, consult the producer or licensed seller, and obtain advice from an appropriately qualified professional.
    </p>
    <p>
      Party Planner and serving estimates are approximate planning aids, not consumption targets, safety limits,
      purchasing advice, or proof that an event complies with licensing law. Hosts remain responsible for lawful
      service, refusing service to minors or intoxicated persons, food and water, safe transport, and emergency help.
    </p>

    <h2>10. Third-party services and external content</h2>
    <p>
      The Service may link to, embed, or interoperate with independent services such as Google or YouTube. A link or
      embed does not mean we control, verify, or endorse the third party. Your interaction is governed by that party's
      terms and privacy practices. We are not responsible for third-party availability, content, security, pricing,
      products, promises, or transactions. Exercise independent judgment before leaving BevOry or sharing information.
    </p>

    <h2>11. Service changes, enforcement, and termination</h2>
    <p>
      We may modify, test, restrict, discontinue, or introduce features; correct content; set usage limits; or conduct
      maintenance. We do not promise that any feature or content will remain available. We may warn, restrict, suspend,
      or terminate access where we reasonably believe there is a Terms breach, security risk, legal requirement, harm
      to others, or misuse. Where appropriate and lawful, we may give notice and an opportunity to appeal through the
      grievance process. You may stop using the Service at any time.
    </p>

    <h2>12. Disclaimers of warranty</h2>
    <p>
      To the fullest extent permitted by applicable law, the Service is provided <strong>"as is" and "as available"</strong>.
      BevOry disclaims implied warranties of merchantability, fitness for a particular purpose, non-infringement, title,
      accuracy, quiet enjoyment, and uninterrupted or secure operation. We do not warrant that information is current,
      that errors will be corrected, that content is safe or complete, or that the Service will meet your requirements.
      Statutory guarantees that cannot be excluded remain unaffected.
    </p>

    <h2>13. Limitation of liability</h2>
    <p>
      To the fullest extent permitted by law, BevOry and persons involved in operating the Service will not be liable
      for indirect, incidental, special, exemplary, punitive, or consequential loss; loss of profit, revenue, goodwill,
      opportunity, or data; or loss arising from reliance on prices, availability, product information, reviews,
      planning estimates, external links, unauthorised access, or service interruption. Where liability cannot be
      excluded, it will be limited to the minimum amount or remedy permitted by applicable law.
    </p>
    <p>
      Nothing in these Terms excludes or limits liability for fraud, wilful misconduct, death or personal injury caused
      by negligence, or any liability or consumer remedy that law does not permit the parties to exclude or limit.
    </p>

    <h2>14. Indemnity</h2>
    <p>
      To the extent permitted by law, you will indemnify and hold harmless BevOry and persons involved in operating the
      Service from third-party claims, losses, penalties, and reasonable legal costs caused by your unlawful conduct,
      material breach of these Terms, infringement through your User Content, or misuse of another person's account or
      data. This obligation does not cover loss caused by BevOry's own unlawful conduct and will be reduced to reflect
      any contribution by BevOry. We will provide reasonable notice of a covered claim and will not settle a claim in a
      way that admits your liability or imposes a non-monetary obligation on you without your consent.
    </p>

    <h2>15. Governing law and disputes</h2>
    <p>
      These Terms are governed by the laws of India, without giving effect to conflict-of-law rules. Before filing a
      claim, the parties should send written details and try in good faith to resolve the dispute for 30 days. Subject
      to any mandatory consumer forum, statutory tribunal, or venue right that cannot be waived, courts of competent
      jurisdiction in Delhi, India will have exclusive jurisdiction. You may always approach a regulator or authority
      where applicable law gives you that right.
    </p>

    <h2>16. Changes and general terms</h2>
    <p>
      We may update these Terms to reflect legal, safety, technical, or Service changes. The updated date will appear at
      the top. For material changes, we may provide a prominent notice or seek renewed acceptance where required. Your
      continued use after an effective update constitutes acceptance only to the extent permitted by law.
    </p>
    <p>
      If a provision is invalid, it will be enforced to the maximum lawful extent and the rest remains effective. A
      failure to enforce is not a waiver. You may not assign these Terms without written consent; we may assign them as
      part of a genuine reorganisation or transfer of the Service, subject to applicable law and your rights. These
      Terms and the incorporated policies are the entire agreement about the Service and do not create third-party
      beneficiary rights.
    </p>

    <h2>17. Notices and contact</h2>
    <p>
      Send legal notices, account concerns, complaints, and Terms questions with enough detail for us to identify the
      issue. The <Link to="/grievance-redressal">Grievance Redressal page</Link> explains the process and the additional
      information needed for rights or content complaints.
    </p>
    <LegalContact purpose="legal notices and Terms enquiries" />
  </LegalPage>
);

export default Terms;
