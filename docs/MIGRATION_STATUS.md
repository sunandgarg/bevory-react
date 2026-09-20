# Migration Status

Last updated: 2026-09-20

## Summary

Bevory is live at `https://bevory.in`. Cloudflare proxies the production domain
to the combined React/Node.js application on AWS Lightsail; Caddy routes the
frontend, pre-rendered SEO documents, and `/api/*`. Prisma persists application
data in Lightsail Managed MySQL, and uploads use a private encrypted S3 bucket.

The application no longer depends on the previous backend. The production
catalogue, authentication, administration, Google OAuth, city-specific prices,
Guide content, DNS, TLS, budget alerts, and private object storage are deployed
and verified.

## Current Status

| Area | Status | Verification |
| --- | --- | --- |
| Cloudflare edge and DNS | Complete | Apex is proxied to AWS; `www` permanently redirects to the apex |
| Cloudflare Pages fallback | Standby | Project remains available, but production custom domains are inactive |
| AWS Lightsail API | Complete | Container health check and public `/api/health` pass |
| Lightsail Managed MySQL | Complete | Prisma schema, seed, catalogue, and live health checks pass |
| Catalogue import | Complete | 30 cities, 18 active categories, 121 active subcategories, 1,818 active brands, 5,991 active products, and 37,981 public price variants |
| City availability | Complete | The global product and known-size catalogue remains visible in every supported city; only approved local price records are shown as prices |
| Product images | Reachable external sources | All 1,038 products referenced by Kolkata have verified images; 207 of 463 used brands have verified logos and 256 remain unset rather than guessed |
| Guide recovery | Complete | 50 articles reconstructed, 2,179 fragments quarantined, and 11 evergreen articles published |
| 25+ compliance UI | Complete | The configurable 25+ gate is mounted globally across public, auth, and admin routes |
| Authentication | Complete except phone OTP | Email/password, sessions, admin authorization, and Google OAuth pass; the phone OTP provider is not configured in production |
| S3 uploads | Infrastructure complete | Bucket is private, encrypted, versioned, and restricted to the production uploader; it currently contains the encrypted Guide backup, not the catalogue images |
| CloudFront media CDN | Blocked by AWS | Existing OAC is ready, but AWS still rejects distribution creation until account verification |

## Import Exceptions

- The Kolkata import processed 1,153 source rows. It wrote 1,147 positive city
  prices, skipped six explicitly price-missing rows, and produced zero errors.
  Of those prices, 1,103 are public and 44 remain review-only across 1,038
  canonical products and 463 canonical brands.
- The independent Kolkata audit found zero duplicate city/product/volume keys,
  zero orphaned product references, and zero products missing an
  identity-verified image. Snapshot
  `bevory-mysql-pre-kolkata-20260920-0159` was available before the write.

- The final Lucknow, Udaipur, Noida, Kanpur, and Asansol import processed 5,898
  source rows. It wrote 5,846 positive city prices, skipped 52 explicitly
  price-missing rows, and produced zero import errors.
- Of those prices, 5,215 are public and 631 remain review-only. Public/review
  totals are: Asansol 1,034/90, Kanpur 987/226, Lucknow 1,149/40, Noida
  981/219, and Udaipur 1,064/56.
- The independent audit found zero duplicate city/product/volume keys, zero
  orphaned product references, and zero products missing an identity-verified
  image. The batch reused or added 835 canonical brands and 1,818 canonical
  products rather than creating city-specific copies.
- Snapshot `bevory-mysql-pre-final-five-20260920-0123` was available before the
  production write.
- One mislabeled Lucknow 375 ml source row was merged into the exact London High
  product identified by its Livcheers URL and linked family ID. Its original
  `Magic Moments` source label remains in audit metadata.
- Of the 835 brands used by this batch, 282 have a verified first-party logo.
  The other 553 remain unset; no generated or uncertain logo was inserted.

- The Jaipur, Jodhpur, Kota, Mumbai, Thane, Ghaziabad, and Agra import processed
  9,318 source rows. It accepted 9,305 positive rows, skipped 13 explicitly
  price-missing rows, selected one duplicate by evidence quality, and wrote
  9,304 unique city prices with zero import errors.
- Of the seven-city prices, 8,528 are public and 776 remain review-only. Public
  and review-only totals are: Agra 1,120/44, Ghaziabad 1,092/56, Jaipur 990/153,
  Jodhpur 998/89, Kota 915/178, Mumbai 1,918/120, and Thane 1,495/136.
- The seven-city audit found zero duplicate city/product/volume keys, zero
  orphaned product references, and zero products missing an identity-verified
  image. Twelve truncated Thane card labels were normalized to existing exact
  product identities while retaining the original source labels in metadata.
- Of the 1,141 brands used in this batch, 314 have a verified first-party logo.
  The other 827 remain unset; no generated or uncertain logo was inserted.

- The ten-city import processed 12,396 source rows. It wrote 12,247 positive
  city prices, skipped 149 explicitly price-missing rows, and produced zero
  import errors.
- Of the imported prices, 11,796 are public and 451 are retained with
  `requires_review=true`. The batch contains no duplicate city/product/volume
  keys, orphaned product references, or products missing a verified image.
- Public/review totals by city are: Bhopal 558/137, Gwalior 530/26, Hyderabad
  1,377/25, Indore 545/5, Jabalpur 563/6, Mysore 1,479/112, Nagpur 1,727/34,
  Nashik 1,708/22, Pune 1,826/82, and Warangal 1,483/2.
- The review queue preserves source conflicts and anomalies instead of silently
  publishing them: 252 price conflicts, 76 price anomalies, 91 category review
  rows, 21 metadata review rows, 5 identity review rows, 4 quality review rows,
  and 3 size anomalies. Warning classes can overlap on one source row.
- The importer resolved four blank Pune category cells only from exact matching
  product identities in other supplied city files. Those records remain
  review-only because the source explicitly requested category review.
- Of the 1,268 brands used in this batch, 954 do not yet have an authentic,
  identity-verified logo. They remain without a logo; no AI-generated or
  uncertain asset was inserted.

- Ten source rows were excluded because they contain no positive INR price:
  three Goa rows, one Gurgaon row, three Hubli-Dharwad rows, and three Mangalore
  rows.
- 182 source-conflict or anomaly price rows remain stored with
  `requires_review=true`. Public catalogue, product, comparison, favorite,
  brand, party-planner, and sitemap reads exclude them until an administrator
  approves the values.
- The Bangalore source added 1,802 rows with zero rejected rows. Fourteen
  conflict, price-anomaly, or size-anomaly variants remain review-only; its
  multi-category and category-conflict warnings are retained in the restricted
  production report.
- Hubli-Dharwad added 1,557 positive city prices: 1,491 are approved and public,
  while 66 are retained for review. Its public catalogue has 1,464 products.
- Mangalore added 1,596 positive city prices: 1,569 are approved and public,
  while 27 are retained for review. Its public catalogue has 1,527 products.
- Blank category cells in both new sources were resolved only from verified
  existing product taxonomy. Explicitly missing prices were not inferred.
- Product images remain externally linked as requested. Their identity is
  verified, but reuse rights must be confirmed before copying them to S3.

Production audit reports are stored with restricted permissions in
`/opt/bevory/reports`. The pre-repair Guide backup is encrypted in S3 at
`s3://bevory-uploads-091199627263-ap-south-1/backups/blog/blog-posts-before-repair-2026-09-19T04-18-15-288Z.json`.

## Remaining External Blocker

AWS still returns `Your account must be verified before you can add new
CloudFront resources` when creating the approved distribution. AWS Support case
`178975941700756` is open and remains unassigned. The private
bucket must not be made public as a workaround. Once AWS verifies the account,
create the distribution with OAC `bevory-uploads-oac`, scope the bucket policy
to its ARN, and then attach `media.bevory.in`.

The AWS account display name was changed from `cirkle.world` to `Bevory` on
2026-09-19. The console confirmed the change; AWS may take several hours to
propagate the new name across all services.

## Verification Record

- Production build and all frontend, server, and script TypeScript checks pass.
- The 40 focused importer tests and four server-side SEO tests pass. The wider
  database-independent suite passes; the two phone-OTP integration tests need
  the local MySQL test service on port 3308 and were not rerun in this pass.
- ESLint: zero errors; 20 retained advisory warnings.
- Gurgaon catalogue: 1,888 products and 2,127 approved variants, with zero
  missing product images.
- Gurgaon catalogue response was reduced from 3.77 MB to 1.61 MB decoded and
  from 335 KB to 174 KB compressed by excluding private import metadata.
- The compatibility query API now honours requested field projections. A
  category lookup that previously expanded to about 8.9 MB now returns only
  1.6-2.8 KB decoded, depending on the requested public fields.
- The live Guide API returns exactly 11 published reconstructed articles.
- Desktop and 390 x 844 mobile browser checks show no horizontal overflow or
  console errors.
- Service worker v6 fetches route documents network-first so compliance changes
  are not hidden behind stale HTML.
- `sitemap.xml` indexes 21 compliant shards containing 405,471 unique
  canonical URLs and 391,460 image entries: 179,730 city product pages, 205,110
  known city-and-size pages, city brand and taxonomy pages, 17 published guides,
  and 170 cocktails. Known sizes remain indexable when a city price is missing;
  the page says the price is unavailable and emits no Offer schema.
- `pnpm sitemap:audit` validates sitemap structure globally and supports safe
  shard, offset, and limit runs. Its production default is two concurrent
  requests to protect the 1 GB origin; representative live routes are checked
  after every deployment.
- The five final city landing pages plus one product and exact-size page per city
  passed live HTTP, canonical, robots, metadata, H1, and JSON-LD checks after the
  final image was deployed.
- Free-text search, sorting, price ranges, and arbitrary filter combinations are
  `noindex, follow`; only stable subcategory landing pages are indexable to avoid
  duplicate and effectively infinite faceted URL combinations.
- Lightsail exposes only TCP ports 80 and 443; temporary SSH access was closed.
