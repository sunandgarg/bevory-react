import { Link } from "react-router-dom";
import LegalPage, { LegalContact } from "@/components/legal/LegalPage";

const SourceDisclosure = () => (
  <LegalPage
    title="Source, Ranking & Commercial Disclosure"
    description="How BevOry sources price and product information, orders discovery results, selects representative category imagery, and labels commercial relationships."
  >
    <p>
      This disclosure explains how information can reach BevOry and what users should—and should not—infer from its
      display. It supplements our <Link to="/disclaimer">Disclaimer</Link>. BevOry aims to make useful distinctions
      visible, but catalogue scale, changing source material, and technical limits mean no record is guaranteed current.
    </p>

    <h2>1. Price and product source types</h2>
    <p>BevOry may compile or verify records using one or more of the following:</p>
    <ul>
      <li>official or publicly available state excise price lists, notifications, and government records;</li>
      <li>public producer, importer, distributor, or brand catalogues and product information;</li>
      <li>public information from licensed retailers or other market participants;</li>
      <li>dated observations, corrections, or supporting material submitted by users or businesses;</li>
      <li>historical BevOry catalogue records and manual editorial review; and</li>
      <li>technical checks that normalise city, category, volume, spelling, and duplicate records.</li>
    </ul>
    <p>
      The appearance of a source type does not mean that the source supplied or approved every field, or that BevOry
      has a commercial relationship with it. Public information can be copied incorrectly, withdrawn, or superseded.
      Images and creative media may have different rights and provenance from the factual product record; see our
      <Link to="/intellectual-property"> IP, Trademark & Image Rights Policy</Link>.
    </p>

    <h2>2. Update lag and local differences</h2>
    <p>
      Source publication, collection, review, import, correction, caching, and display do not happen simultaneously.
      A record can therefore lag the real market or remain visible after a price, tax, bottle, label, stock position,
      licence, or legal rule changes. Government schedules may state an approved or reference price while a specific
      lawful transaction differs because of date, package, retailer, duty, deposit, or other permitted factor.
    </p>
    <p>
      A selected city narrows information; it does not prove that a bottle is stocked, that every nearby jurisdiction
      follows the same rule, or that the displayed amount is payable today. Always verify the exact SKU, volume, current
      total, availability, and seller authority independently before acting.
    </p>

    <h2>3. Search, category, and discovery ordering</h2>
    <p>
      Depending on the page, ordering may consider query-text relevance, category and subcategory match, selected city,
      existence of a positive local price record, data completeness, freshness, availability of an image, editorial
      display settings, featured flags, popularity or interaction signals where available, and deterministic tie-breaks.
      Some pages may use only a subset of these inputs. Inputs and weights can change as the Service improves.
    </p>
    <p>
      Higher placement does not prove higher quality, sales, market share, safety, value, prestige, or legal availability.
      "Featured" can be an editorial content or interface setting and is not inherently a paid endorsement. Omission or
      lower placement is not criticism of a product, brand, or business.
    </p>

    <h2>4. Representative category imagery</h2>
    <p>
      Category cards use original, brand-neutral bottle artwork created for BevOry as a visual example of each
      category. The examples use general category cues such as bottle form, glass colour, liquid colour, closure, and
      packaging style, but do not reproduce a named product label or claim to depict a particular product. They are
      <strong> representative, not ranked</strong>, and do not state that any product is "best", "top", most popular,
      category-leading, recommended, or preferred over competitors.
    </p>
    <p>
      The category artwork contains no brand name or logo. Product and brand pages may separately contain third-party
      product material subject to the provenance and rights qualifications in our IP policy. Rights concerns can be
      submitted under the notice-and-takedown process.
    </p>

    <h2>5. Paid placement, sponsorship, and affiliate links</h2>
    <p>
      As of the effective date above, BevOry does not treat ordinary product/category placement as paid merely because
      it appears in discovery, and BevOry does not represent unlabeled links as affiliate recommendations. If a result,
      article, creator feature, link, or placement is paid, sponsored, gifted, commissioned, or generates an affiliate
      benefit for BevOry, we will aim to label that relationship clearly near the relevant content using terms such as
      "Sponsored", "Paid partnership", "Gifted", or "Affiliate link" as appropriate.
    </p>
    <p>
      A commercial relationship will not permit a partner to submit fabricated reviews, hide legally required
      disclosures, control independent user opinions, or describe advertising as an objective ranking. Commercial
      arrangements may change; the specific on-page disclosure controls for the item concerned.
    </p>

    <h2>6. User ratings and reviews</h2>
    <p>
      Ratings may be based on a limited or changing number of contributors and can be affected by subjective taste,
      selection bias, attempted manipulation, or moderation. An aggregate is not a scientific quality measure or a
      BevOry endorsement. We may exclude suspected fraudulent activity, remove content under the
      <Link to="/community-guidelines"> Community & Review Guidelines</Link>, or recalculate an aggregate.
    </p>

    <h2>7. Corrections and evidence</h2>
    <p>
      To request a correction, identify the exact URL, city, product and bottle size; quote the field at issue; provide
      the observed date; and attach or link a reliable current source. Useful evidence can include an official excise
      notification, producer specification, dated licensed-retailer material, or clear current packaging. We may ask
      questions, retain the existing record while evidence conflicts, or record source/date context instead of treating
      a local variation as a universal correction.
    </p>
    <p>
      For sponsorship disclosure concerns, identify the content and evidence of the material relationship. For rights
      complaints, use the separate documented process. Receipt of a correction request is not an admission that the
      original record was negligent, deceptive, or unlawful.
    </p>
    <LegalContact purpose="source questions, commercial-disclosure concerns, and catalogue corrections" />
  </LegalPage>
);

export default SourceDisclosure;
