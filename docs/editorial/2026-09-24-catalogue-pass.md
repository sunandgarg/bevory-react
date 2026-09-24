# Catalogue Pass: 24 September 2026

## Status

Not complete and not published. A fresh read-only API snapshot contained 1,857 distinct record IDs. This is a catalogue-row count, not a verified count of independent brands.

- 238 guides are authored locally, including 20 new full guides in batch 18.
- 1,619 catalogue rows remain outside the authored set.
- All 238 local guides pass the public-field structural and prohibited-language audit.
- 89 local guides match the captured live public fields; 149 differ or are absent.
- 1,755 live rows have public-field issues, including old template language or wrong field counts.
- 1,438 live rows have no logo URL; 1,739 have no country or flag URL.
- 198 earlier guides still need complete source-by-source factual revalidation. Structural checks do not substitute for that review.
- 48 local logo follow-ups remain. Image identity checks do not establish licensing rights.
- All 34 distinct flag URLs used by the local guides returned decodable images.

## Full Guides Added

Bowmore, Bruichladdich, Buffalo Trace, Bulleit, Campari, Cointreau, Ciroc, Kahlua, Dalwhinnie, Glenkinchie, Lagavulin, Oban, Highland Park, Kilchoman, Teremana, Teacher's, Royal Green, Royal Stag, BeeYoung and Bad Monkey.

Each has description, story, two tasting notes, two serving notes, specific food pairings, whyChoose, two FAQs, finalVerdict and metadata. Notes are attached to named expressions where appropriate. No prices, strengths, awards or availability claims were invented. Research URLs are in `BRAND_SOURCES_BATCH_18`, separate from public fields.

Royal Green's official pages give conflicting launch dates; the date was omitted. Glenkinchie's official page describes 1825 history but also shows 1837 branding; its guide uses the verified place and building history instead of asserting one founding date. Bruichladdich is explicitly unpeated, distinguished from the distillery's peated Port Charlotte and Octomore labels. Food pairings are editorial suggestions, not claims of first-hand tasting.

## Logo Work

Nineteen new-guide assets were fetched, decoded and visually matched. Official assets were used for Bruichladdich, Kilchoman, BeeYoung and Bad Monkey; fifteen are Livcheers assets. The Highland Park Livcheers path failed. An official Edrington logo was located, but a direct fetch did not yield a decodable image, so it was not marked verified.

Seventeen earlier working assets were visually matched and their verification status repaired: Sula, Fratelli, Grover, Magic Moments, Bacardi, Johnnie Walker, Virgin Hills, Glenfiddich, Old Monk, Macallan, Bira, Breezer, Amrut, Jack Daniel's, Dewar's, Glenmorangie and McDowell's. Their text was left unchanged.

## Safeguards

- Whole-catalogue auditing now checks nested values, old template language, missing country/flag/logo fields and possible identity issues.
- Numeric names and category/region names are only review candidates. No row was deleted, merged, renamed or assigned an invented origin by the audit.
- Incomplete snapshots and duplicate record IDs stop the audit rather than producing a misleading completion count.
- Brand expansion refuses to generate fallback template copy for an unauthored brand.
- Existing enrichment protection and idempotent updates remain in place.

## Verification And Publication

Thirty targeted tests pass. Vite production build and script/server TypeScript checks pass. The pnpm wrapper initially attempted a dependency reinstall and stopped without a TTY; direct installed-tool entry points were used instead, without reinstalling dependencies.

This pass did not run the database-dependent full test suite, publish a release, modify the production database or commit files. The prior deployment attempt was blocked by expired AWS credentials and rejected SSH keys. Production authentication needs to be restored and rechecked before deployment.

After access is restored: back up the database, deploy tested source, apply `brands:expand`, regenerate the affected prerendered pages, and compare live API and HTML with local content. Do not run `db:setup`, `prisma db push`, seed or destructive schema operations as an editorial deployment shortcut.

## Generated Review Files

- `reports/brand-progress.md`: every local guide and every remaining catalogue row.
- `reports/brand-progress.json`: exact public-field differences, asset follow-ups and identity-review candidates.
- `reports/batch-18-public-content.json`: complete consumer-facing copy for the twenty new guides.

Reports are generated review artifacts and are ignored by Git; the audit code, authored guides and this checkpoint are source files. No ranking, indexing or AI-detector outcome is guaranteed by these checks.
