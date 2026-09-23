# BevOry implementation ledger — 2026-09-23

This ledger records the BevOry work requested between 2026-09-20 and
2026-09-23. Git commits are cumulative snapshots: the current `HEAD` contains
the changes from every commit listed below, even when the latest commit's own
diff is small.

## Committed application work

| Requested area | Repository state | Main commits |
| --- | --- | --- |
| Wine Universe | City and non-city routes, catalogue search, style/price/region/rating/taste filters, saved searches, favourites, compare, price/value/taste views, Indian food pairings, educational links, information-only disclosure, CollectionPage and ItemList schema | `9f25156` |
| Home wine discovery | Wine Collection section and Wine Universe entry point, plus the refreshed Brand Spotlight layout and priority ordering | `9f25156`, `6b3bdd0` |
| Fixed public header | Compact non-home heading, location selector and one universal search field below the top row on all public pages | `9f25156` |
| oRy AI launcher | User-supplied circular mark, `oRy AI` label only, and temporary navigation back to the city homepage | `9f25156` |
| Official brand-logo pipeline | Sequential official-domain crawler, exact identity checks, original preservation, Q95 WebP derivative generation, S3 upload metadata, provenance fields and previous-URL rollback data | `541c5a1`, `55fdaa3` |
| Brand expansion | Expanded editorial brand catalogue, richer brand pages and resilient brand asset resolution | `738a8fd`, `6b3bdd0` |
| Product media migration | Private S3 inventory/upload/apply pipeline, deterministic 3840-pixel masters, validation gates and first-party `/media/` delivery | `042944f`, `c5c897b`, `fdecb1c` |
| Q95 WebP derivatives | S3 derivative generator, retained originals, manifest safety gates, reversible database apply and backup creation | `3ce8879`, `f83db9f` |
| Product/category presentation | Responsive headers, compact product cards, aligned image frames, local-price behaviour and progressive catalogue loading | `034c2ad`, `25de7d9`, `bb6ab1c`, `bdce10b`, `cba1ead`, `6fd2a00` |
| Mobile crawler rendering | ChatGPT in-app browser no longer receives the SEO-only document; normal app hydration is preserved while true crawlers retain server SEO output | `7ae00a0`, `32f7da6` |
| Performance and database safeguards | Smaller catalogue payloads, pagination, bounded image work, cold-start reduction, database optimisation tooling and crawler memory protection | `d0b71f8`, `e95c63b`, `5b295f5`, `f83db9f` |
| Legal and disclosure pages | Terms, Privacy Policy, Disclaimer, Cookie Policy, IP Policy, Grievance Redressal, Community Guidelines, source disclosure and responsible-drinking content | `aae900a`, `f3c5fb4` |
| Cocktail and editorial localisation | Cocktail and article normalisers, ml-first quantities, India-oriented editorial helpers and content-quality tests | `3ce8879` |
| SEO and sitemap system | City-first canonical routes, product catalogue SEO, image sitemaps, crawl controls, sitemap generator/auditor and Wine Universe metadata | `1c6d5e0`, `c3037fe`, `4faee6b`, `9f25156` |
| Cloudflare/S3 delivery fallback | Cloudflare media caching route and private Lightsail-to-S3 streaming path while CloudFront verification remains blocked | `42d7f19`, `3b2e612` |

## Verified locally on 2026-09-23

- Latest remote `main` was pulled and the local work was rebased on top.
- Header and Brand Spotlight conflicts were resolved while retaining the newer
  1120px layout, the single-search header, Wine Universe and oRy AI behaviour.
- ESLint completed without errors for the integrated files.
- The full production build completed successfully.
- Vitest: 27 files passed, 258 tests passed, and the two phone-OTP integration
  tests were skipped because that external provider/test service is not active.

## Not yet a live-production claim

The code is committed, but the following require credentials, account approval,
database access or a production deployment and therefore cannot be represented
as completed merely by a Git commit:

- Push the local commits to `origin/main` and deploy the new application image.
- Run the official-logo crawler with `--apply`, verify every brand individually,
  upload accepted Q95 WebP assets, and confirm that no visible brand falls back
  to a placeholder.
- Complete the catalogue image database cutover only after every corresponding
  private S3 object is reachable through the first-party media route; retained
  PNG/JPEG masters must not be deleted.
- Create the CloudFront distribution after AWS removes the account-verification
  restriction, then validate OAC, cache headers, HTTPS and origin access.
- Regenerate/audit the production sitemap after data cutover and confirm its
  submission and indexing status in Google Search Console.
- Smoke-test the deployed homepage, Wine Universe, category, brand, product,
  legal and media routes on desktop and mobile.

