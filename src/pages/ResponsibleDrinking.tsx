import { Link } from "react-router-dom";
import LegalPage, { LegalContact } from "@/components/legal/LegalPage";

const ResponsibleDrinking = () => (
  <LegalPage
    title="Responsible Drinking & Age Policy"
    description="BevOry's adult-access rule, responsible-drinking standards, health warnings, and expectations for users and contributors."
  >
    <p>
      BevOry provides alcohol-related information for eligible adults. This policy describes who may use the Service
      and the safety standards we expect. It is not proof of legal eligibility, a substitute for local law, or a safe
      drinking limit. Abstaining is always a valid choice and, for some people and situations, the only safe choice.
    </p>

    <h2>1. Conservative 25+ access rule</h2>
    <ul>
      <li>You must be at least 18 and meet the legal drinking age in every location relevant to your conduct.</li>
      <li>BevOry additionally applies a conservative platform gate of 25 years or older.</li>
      <li>
        If the law where you are located sets a higher age, prohibits alcohol, restricts alcohol information, or makes
        your intended conduct unlawful, that law controls and you must not use BevOry to evade it.
      </li>
      <li>
        The gate is based on your confirmation and is not government-ID verification. It does not authorise a purchase,
        service, possession, transport, or consumption that would otherwise be unlawful.
      </li>
    </ul>
    <p>
      Do not access the Service for a minor, share adult-only content with a minor, misstate age or location, or use
      BevOry to identify alcohol for an ineligible person. Parents and guardians should use device-level controls where
      appropriate.
    </p>

    <h2>2. No sale, supply, or delivery</h2>
    <p>
      BevOry does not sell, supply, deliver, procure, broker, or accept payment for alcohol. A product page or price is
      informational and never an invitation or authorisation to transact. Only deal with appropriately licensed local
      sellers, verify current law and identification requirements, and report anyone impersonating BevOry to request
      an order or payment.
    </p>

    <h2>3. Core safety expectations</h2>
    <ul>
      <li>Never drink and drive, ride, operate machinery, swim, work at height, or undertake safety-critical activity.</li>
      <li>Never pressure another person to drink or treat abstention as a problem.</li>
      <li>Do not supply alcohol to a minor, an intoxicated person, or anyone to whom supply is unlawful.</li>
      <li>Avoid rapid consumption, drinking games, unknown mixtures, unattended drinks, and combining alcohol with drugs.</li>
      <li>Use food, water, pacing, non-alcoholic choices, and a safe transport plan—but do not treat them as making intoxication safe.</li>
      <li>Do not use appearance, body size, coffee, a shower, or a calculator as proof that someone is fit to drive.</li>
    </ul>

    <h2>4. Health, pregnancy, medication, and dependency</h2>
    <p>
      Alcohol can cause poisoning, accidents, violence, impaired consent, dependency, organ damage, cancer risk, and
      mental-health harm. It may interact dangerously with medicines or health conditions. Do not rely on BevOry to
      decide whether alcohol is safe for you. Seek advice from a qualified healthcare professional, especially if you
      are pregnant or trying to become pregnant, take medication, have a medical or mental-health condition, have a
      history of dependency, or cannot reliably control use.
    </p>
    <p>
      If someone is unconscious, cannot be awakened, is breathing abnormally, is repeatedly vomiting, has a seizure,
      or may have alcohol poisoning, contact local emergency services immediately and do not leave the person alone.
      BevOry cannot provide emergency support. If alcohol is causing harm or loss of control, contact a qualified
      addiction professional or a trusted local treatment service; do not use product-discovery content as support.
    </p>

    <h2>5. Allergies and product composition</h2>
    <p>
      Alcohol products can contain allergens, sulphites, grains, dairy, eggs, nuts, flavourings, colourants, or other
      ingredients not fully recorded on BevOry. Recipes and production can change. Read the physical label and consult
      the producer or a qualified professional. An image, category, tasting note, or filter is not an allergy or dietary
      assurance.
    </p>

    <h2>6. Events and Party Planner</h2>
    <p>
      Party Planner estimates logistics; they are not targets or recommended consumption. An organiser remains
      responsible for applicable licences and dry-day rules, lawful purchase and transport, checking eligibility,
      trained service where appropriate, refusing intoxicated guests, protecting consent and safety, providing food,
      water and meaningful alcohol-free choices, arranging safe transport, and responding to emergencies. Plan for
      less alcohol rather than treating an estimate as a minimum.
    </p>

    <h2>7. Content and community standards</h2>
    <p>
      Users and creators must not glorify dangerous consumption, target minors, encourage unlawful supply, present
      alcohol as necessary for status or success, promote driving after drinking, make unsupported health claims, or
      conceal a commercial incentive. Educational discussion and genuine product opinion remain permitted when lawful
      and consistent with the <Link to="/community-guidelines">Community & Review Guidelines</Link>. We may restrict or
      remove content that creates a safety or legal risk.
    </p>

    <h2>8. Location-specific responsibility</h2>
    <p>
      Indian alcohol laws vary substantially by state and territory and can change, including age thresholds,
      prohibition, dry days, possession and transport limits, and public-consumption rules. A selected city only helps
      organise information; it does not establish your real location or legal eligibility. Check the current official
      rules and obtain professional advice where needed.
    </p>

    <h2>9. Report a concern</h2>
    <p>
      Report content that appears to target minors, facilitate unlawful supply, encourage dangerous conduct, or make a
      harmful health claim. Include the URL and enough detail to assess it. In an emergency, contact local emergency
      services instead of waiting for a BevOry response.
    </p>
    <LegalContact purpose="age, responsible-drinking, and safety reports" />
  </LegalPage>
);

export default ResponsibleDrinking;
