import { Link } from "react-router-dom";
import LegalPage, { LegalContact } from "@/components/legal/LegalPage";

const PrivacyPolicy = () => (
  <LegalPage
    title="Privacy Policy"
    description="How BevOry collects, uses, discloses, retains, and protects personal data, and the choices available to users."
  >
    <p>
      This Privacy Policy explains how the operator of BevOry handles personal data when you visit or use
      <strong> bevory.in</strong> and related services. It applies to visitors, account holders, contributors, and
      people who contact us. It does not govern independent websites, retailers, brands, Google, YouTube, Twilio, or
      other third parties that publish their own privacy terms.
    </p>
    <p>
      This policy is intended to meet applicable Indian privacy and information-technology requirements and to support
      rights under India's Digital Personal Data Protection framework as relevant provisions become applicable. A
      reference to a right means the right to the extent it applies to you under law; this policy does not reduce any
      non-waivable right.
    </p>

    <h2>1. Who is responsible and how to contact us</h2>
    <p>
      The operator publishing the Service under the BevOry name determines the purposes and means of the processing
      described here. The current public operator-contact channel is the BevOry Grievance Desk below. BevOry does not
      publish a separate incorporated-entity name, postal service address, or individually named grievance officer on
      this page; if applicable law requires additional particulars, we will publish them when confirmed.
    </p>
    <LegalContact purpose="privacy requests and grievances" />

    <h2>2. Personal data we collect</h2>
    <h3>Information you provide</h3>
    <ul>
      <li>
        <strong>Account and identity data:</strong> name or profile name, email address, phone number, account ID,
        password hash, authentication method, age-gate confirmation, and profile preferences.
      </li>
      <li>
        <strong>Policy acceptance records:</strong> the Terms and Privacy Policy version accepted, a server-recorded
        acceptance time, the authentication channel used, and a bounded history of later renewed acceptances.
      </li>
      <li>
        <strong>Google sign-in data:</strong> if you choose Google sign-in, the verified email, Google subject
        identifier, name, and profile image made available within the requested sign-in scopes. BevOry does not receive
        your Google password.
      </li>
      <li>
        <strong>Content and activity:</strong> ratings, reviews, comments, favourites, selected and saved locations,
        recent searches, comparison choices, notification preferences, and other features you use while signed in.
      </li>
      <li>
        <strong>Communications:</strong> support messages, error reports, rights requests, legal notices, grievance
        records, attachments, and records needed to investigate or respond.
      </li>
      <li>
        <strong>Phone verification:</strong> phone number, one-time-code request and verification status, timestamps,
        and anti-abuse signals. Do not send us an OTP issued to you except through the designated verification field.
      </li>
    </ul>

    <h3>Information collected through use of the Service</h3>
    <ul>
      <li>
        <strong>Device and request data:</strong> IP address, date and time, requested URL, response status, browser,
        device and operating-system information, referrer, language, approximate region inferred from a request, and
        network or security events.
      </li>
      <li>
        <strong>Necessary browser storage:</strong> age confirmation, privacy choice, selected city, authentication
        session, and interface state. The primary end-user keys are listed in our <Link to="/cookie-policy">Cookie & Local Storage
        Policy</Link>.
      </li>
      <li>
        <strong>Optional analytics:</strong> if you select "Allow analytics", Google Analytics may receive page views,
        interactions, device/browser data, approximate location, and pseudonymous identifiers. Advertising storage,
        ad user data, ad personalisation, and Google signals are configured as denied or disabled by BevOry.
      </li>
      <li>
        <strong>Media interactions:</strong> when you choose to play or open YouTube content, YouTube may receive your
        device and request data under its own terms. Some pages use YouTube's privacy-enhanced embed domain; this reduces
        certain storage before playback but does not make YouTube processing part of BevOry's control.
      </li>
    </ul>

    <h3>Information from others</h3>
    <p>
      We may receive authentication data from Google; delivery and fraud metadata from Twilio; network and security
      information from Cloudflare and hosting providers; public product, excise, and catalogue information; and reports
      about User Content from rights holders, authorities, or other users. We may combine it with BevOry records to
      authenticate accounts, correct listings, prevent abuse, or respond to a claim.
    </p>
    <p>
      BevOry does not process payment-card or bank information for alcohol purchases because BevOry does not sell or
      take payment for alcohol. Do not submit government identifiers, health records, financial credentials, or other
      sensitive material unless we specifically request it through a secure channel for a lawful reason.
    </p>

    <h2>3. Why we process personal data</h2>
    <p>Depending on the feature and applicable law, we process data to:</p>
    <ul>
      <li>create, authenticate, secure, and administer accounts;</li>
      <li>provide city-aware discovery, saved items, reviews, comparisons, notifications, and requested support;</li>
      <li>operate, debug, measure, protect, and improve the Service and its accessibility;</li>
      <li>detect spam, fraud, credential abuse, unlawful activity, security incidents, and Terms violations;</li>
      <li>moderate User Content, resolve disputes, enforce agreements, and protect users or third-party rights;</li>
      <li>comply with valid legal duties, court orders, and lawful government requests;</li>
      <li>send service messages and, only where lawfully permitted, communications you requested; and</li>
      <li>produce aggregated or de-identified statistics that are not intended to identify an individual.</li>
    </ul>
    <p>
      We rely on your consent where consent is required, including for optional Google Analytics. We also process data
      where necessary to provide a feature you request, comply with law, respond to emergencies, or for another lawful
      basis or legitimate use recognised by applicable law. You may withdraw consent, but withdrawal does not make
      earlier lawful processing invalid and may prevent us from providing a consent-dependent feature.
    </p>

    <h2>4. When we disclose personal data</h2>
    <p>We do not sell personal data and do not provide it for cross-context behavioural advertising. We may disclose:</p>
    <ul>
      <li>
        <strong>To infrastructure providers:</strong> Amazon Web Services (application infrastructure, database,
        backups, and object storage) and Cloudflare (DNS, content delivery, caching, traffic management, and security).
      </li>
      <li>
        <strong>To feature providers you use:</strong> Google for optional Analytics and Google OAuth sign-in; Twilio
        for phone OTP messaging; and YouTube/Google for videos you choose to load or open.
      </li>
      <li>
        <strong>To professional advisers and contractors:</strong> only where reasonably needed and subject to duties of
        confidentiality or data protection appropriate to their role.
      </li>
      <li>
        <strong>For legal and safety reasons:</strong> to an authority, court, affected party, or rights holder when we
        reasonably believe disclosure is required by law, necessary to respond to valid process, or proportionate to
        protect safety, security, rights, or the Service. We may challenge overbroad demands where appropriate.
      </li>
      <li>
        <strong>For a genuine business transition:</strong> to a prospective or actual successor in a merger,
        financing, reorganisation, or transfer of the Service, with suitable confidentiality safeguards and subject to
        applicable notice or consent requirements.
      </li>
      <li><strong>At your direction:</strong> where you ask or validly consent to a specific disclosure.</li>
    </ul>
    <p>
      Public reviews, ratings, display names, and other content you intentionally publish can be viewed, copied, or
      shared by others. Do not put private information in public content.
    </p>

    <h2>5. International and cross-border processing</h2>
    <p>
      BevOry is operated for users in India, but providers such as AWS, Cloudflare, Google, Twilio, and YouTube may
      process or support data from India and other countries where they or their subprocessors operate. Those countries
      may have different privacy laws. Where required, we use provider agreements, access controls, encryption in
      transit, data-location choices where available, and other reasonable safeguards, and will observe any applicable
      Indian restriction on transfers to particular countries or territories.
    </p>

    <h2>6. Retention</h2>
    <p>
      We keep personal data only as long as reasonably necessary for the purpose described, including to provide an
      account, comply with law, secure the Service, resolve disputes, or establish and defend legal claims. Retention
      depends on the data and context:
    </p>
    <ul>
      <li>
        account and profile data generally remains while the account is active and is queued for deletion or
        de-identification after a verified deletion request, subject to legal, security, and backup exceptions;
      </li>
      <li>
        authentication tokens expire according to their configured lifetime; local session data remains on your device
        until sign-out, expiry, deletion, or browser cleanup;
      </li>
      <li>
        OTPs are short-lived; related request, delivery, and anti-abuse records may be retained for security and audit,
        and Twilio applies its own documented retention practices;
      </li>
      <li>
        request and security logs are normally kept for a limited operational period and may be preserved longer when
        connected to an incident, complaint, legal hold, or enforcement matter;
      </li>
      <li>
        User Content remains until removed, the relevant account is deleted, or it is no longer needed. Where content
        is removed following a complaint or legal process, associated records may be preserved for at least the period
        required by applicable intermediary law, including 180 days where that rule applies;
      </li>
      <li>
        grievance, rights-request, and legal-notice records are kept for a reasonable period after closure to show how
        the matter was handled and meet limitation, audit, or legal requirements; and
      </li>
      <li>
        optional Analytics data is retained under BevOry's Google Analytics configuration and Google's processing
        terms; aggregated reports may outlast the underlying event-level retention.
      </li>
    </ul>
    <p>
      Encrypted or access-restricted backups rotate on a schedule and may retain deleted records temporarily. We may
      retain de-identified data where we take reasonable measures not to re-identify it. When a fixed period has not
      been set, we apply necessity, sensitivity, user expectation, legal risk, and available deletion controls.
    </p>

    <h2>7. Your rights and choices</h2>
    <p>Subject to applicable law, identity verification, and lawful exceptions, you may:</p>
    <ul>
      <li>request a summary of personal data being processed and information about its processing;</li>
      <li>ask us to correct inaccurate data, complete incomplete data, or update outdated data;</li>
      <li>request erasure where retention is no longer required or another legal exception does not apply;</li>
      <li>withdraw consent and change optional Analytics through the "Privacy choices" link in either footer;</li>
      <li>object or complain about a specific use where applicable law gives you that right;</li>
      <li>seek grievance redressal and, where legally available, nominate another individual to exercise rights; and</li>
      <li>appeal or approach the relevant authority or grievance appellate mechanism where applicable.</li>
    </ul>
    <p>
      Send a request through the <Link to="/grievance-redressal">Grievance Redressal process</Link>. State the right you
      wish to exercise and identify the account or interaction concerned. To protect users, we may request reasonable
      verification, clarify scope, or decline a request where the law permits—for example, where we cannot verify the
      requester, must retain evidence, or another person's rights would be harmed. We will explain a refusal where
      required. We do not charge for ordinary requests unless law permits a reasonable fee for manifestly unfounded or
      excessive requests.
    </p>

    <h2>8. Security and personal-data breaches</h2>
    <p>
      We use measures appropriate to the nature and risk of the data, including encrypted transport, restricted
      production access, authentication controls, network protection, managed infrastructure, logging, backups, and
      updates. No internet service, transmission, or storage system is completely secure. You should use a unique
      password, safeguard OTPs and devices, sign out of shared devices, and tell us promptly about suspected misuse.
    </p>
    <p>
      If we confirm a personal-data breach, we will contain and assess it, preserve necessary evidence, and notify
      affected individuals and competent authorities when and in the form required by applicable law. A public security
      report should not include exploit details or another person's data; email the Grievance Desk first so we can
      coordinate safe remediation.
    </p>

    <h2>9. Automated features</h2>
    <p>
      Search ordering, recommendations, spam detection, rate limits, and moderation queues may use automated rules or
      signals. These features help organise content or flag risk; they are not intended to make decisions producing
      legal or similarly significant effects about you. You may ask for review of an account or moderation action using
      the grievance process.
    </p>

    <h2>10. Adults-only service</h2>
    <p>
      BevOry is restricted by policy to people who pass its 25+ gate and are legally eligible in their location. We do
      not knowingly solicit personal data from minors. If you believe a minor provided data, contact us with sufficient
      information to locate it. We will investigate and remove or restrict the data where required. The age gate does
      not replace parental controls or legal age verification by a licensed seller.
    </p>
    <p>
      Legal policies, privacy choices, rights-request channels, grievance information, safety notices, and contact
      details remain publicly accessible without passing the age gate so that any affected person can understand or
      exercise their rights. That limited access does not permit a minor to use BevOry's alcohol-discovery features.
    </p>

    <h2>11. Third-party links and embeds</h2>
    <p>
      Independent services control their own data practices. Before using a Google sign-in flow, playing a YouTube
      video, following an external link, or contacting a listed third party, review its privacy information. BevOry is
      not responsible for another controller's choices merely because its content or link appears on the Service.
    </p>

    <h2>12. Changes to this policy</h2>
    <p>
      We may update this policy for legal, operational, security, or feature changes. We will post the revised policy
      and update the date above. If a change materially affects how we use existing personal data, we will provide a
      prominent notice, account communication, or renewed consent where required. Earlier versions may be requested
      from the Grievance Desk where reasonably available.
    </p>

    <h2>13. Questions and complaints</h2>
    <p>
      Contact the BevOry Grievance Desk first so we can investigate. Include "Privacy Request" or "Privacy Grievance"
      in the subject, the relevant account email or phone, the issue and requested outcome, and supporting dates or
      screenshots. Do not send passwords, OTPs, or unnecessary identity documents by ordinary email.
    </p>
    <LegalContact purpose="privacy questions, rights requests, and complaints" />
  </LegalPage>
);

export default PrivacyPolicy;
