# BevOry Content Generation Policy

Use this policy for future BevOry brand, product, city, category, guide, cocktail, and SEO content.

## Editorial standard

- Write original, human-reviewed content in clear Indian English.
- Answer the page intent immediately, then add useful context, comparisons, steps, and FAQs where relevant.
- Vary sentence length and paragraph shape naturally. Do not add deliberate spelling mistakes, awkward wording, or fake personal experience.
- Do not write prompts or instructions intended to fool AI detectors. Quality is measured by accuracy, usefulness, originality, and human review.
- Do not copy competitor wording or publish generic filler.

## Verification standard

- Use verified BevOry catalogue data and trustworthy official or first-party information.
- Never invent prices, city availability, ABV, age statements, origin, awards, ingredients, production claims, tasting claims, or legal claims.
- Keep provenance and `checked_at` details internally for changing claims.
- Never reuse a price from another city. City-specific values must come from that city’s verified record.
- If a fact is unknown, preserve the page but label the value explicitly as `Not verified`, `Not listed`, `Pending verification`, or `Not applicable`.

## Complete-field rule

- Every published field required by the page template must have a value.
- Every table column that applies to the page must contain a visible value; blank cells, `null`, `undefined`, empty strings, and placeholder text are not publishable.
- Use a truthful status value when data is unavailable. Never fill a missing field with an estimate presented as fact.
- For a city-price table, use `Not listed in <city>` when the product has no verified price in that city.
- For a product detail table, use `Not verified` when the field requires label or first-party confirmation.
- `Not applicable` is allowed only when the field genuinely does not apply to that record.

## SEO and page quality

- Use one clear canonical URL per page and preserve redirects when records merge.
- Keep titles concise, descriptions useful, and keywords natural.
- Use descriptive headings, short paragraphs, bullets, semantic tables, relevant internal links, and visible FAQs when they help the reader.
- Use only valid schema for the page type. Do not create duplicate pages only to increase URL count.
- Use descriptive image alt text, explicit image dimensions, responsive formats, and lazy loading below the fold.

## Beverage safety

- Show city and date context for prices and availability.
- Do not imply delivery, legality, availability, or a recommended drinking quantity without verified support.
- Include responsible-drinking and applicable legal-age context where relevant.

## Publication gate

1. Select the canonical record and page intent.
2. Collect and record verified facts and their check times.
3. Generate the complete field set.
4. Fill unavailable fields with an explicit truthful status.
5. Run metadata, link, duplicate, claim, schema, and accessibility checks.
6. Perform human editorial review.
7. Preview mobile and desktop layouts.
8. Publish content, canonical, sitemap, redirects, and cache changes together.

This policy is the working content-generation rule for this BevOry conversation. It does not promise a ranking score or an AI-detector result.
