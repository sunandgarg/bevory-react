# Production Deployment

Last verified: 2026-09-20

## Public endpoints

- Primary site: `https://bevory.in`
- Secondary domain: `https://www.bevory.in` (permanently redirects to the apex domain)
- API origin: `https://api.bevory.in`
- Standby Pages project: `https://bevory.pages.dev` (not bound to the production custom domains)

## Topology

- Cloudflare proxies the apex and `www` hostnames to AWS Lightsail. Requests to
  `bevory.in/api/*` first pass through the `bevory-edge` Worker, which adds the
  private origin-verification header before forwarding them to the DNS-only API
  origin.
- AWS Lightsail instance `bevory-api-prod` runs Caddy and the combined
  React/Node.js application with Docker Compose. Node serves the built frontend,
  API, and pre-rendered SEO route documents. Only Caddy publishes ports 80 and
  443.
- Caddy validates, but never supplies, the private origin-verification header.
  Direct API-origin requests without it return 404, including requests sent to
  the Lightsail IP with a forged `Host: bevory.in` header.
- The `bevory` Cloudflare Pages project remains available as a rollback artifact,
  but its custom domains are inactive and it is not in the production request
  path.
- Lightsail database `bevory-mysql-prod` runs private MySQL 8.4.
- S3 bucket `bevory-uploads-091199627263-ap-south-1` blocks all public access,
  uses AES256 encryption, and has versioning enabled.
- IAM user `bevory-production-uploader` is limited to the uploads bucket.
- AWS Budget `Bevory-Monthly-Budget` is set to USD 25/month with actual and
  forecast alerts.

## DNS

`bevory.in` is delegated to Cloudflare nameservers:

- `aliza.ns.cloudflare.com`
- `kellen.ns.cloudflare.com`

The apex and `www` records are proxied CNAMEs to `api.bevory.in`. `api` points
directly to the attached Lightsail static IP and remains DNS-only so the Worker
can reach the application origin. The active Worker route is
`bevory.in/api/*`; public API traffic must use the apex domain.

## Expected base cost

- Lightsail 1 GB instance: USD 7/month
- Lightsail 1 GB managed MySQL: USD 15/month
- Cloudflare Pages: free plan
- S3 and CloudFront: usage based

The expected fixed base is USD 22/month before storage, delivery, taxes, and
other usage.

## Verification

The following production checks passed on 2026-09-20:

- The apex is proxied by Cloudflare to AWS and redirects `/` to `/gurgaon`.
- `www` permanently redirects to the equivalent apex URL.
- `/api/health` reaches MySQL through the Cloudflare Worker and Caddy and
  reports 50,475 records.
- Direct API requests without the verification secret return 404, including a
  direct-IP request carrying the production hostname.
- Phone OTP is not configured in production; email/password and Google OAuth
  are the verified sign-in methods.
- Administrator sign-in, session validation, and an admin-only status endpoint
  work through the production domain.
- Public catalog reads and the party-planner endpoint work.
- The production catalogue contains all 30 supported cities, 18 active
  categories, 121 active subcategories, 1,818 active brands, 5,991 active
  products, and 40,065 positive city-specific size prices. Of those prices,
  37,981 are public and 2,084 are retained for review.
- Kolkata contributed 1,147 unique positive prices: 1,103 public and 44
  review-only, with no duplicate city/product/volume keys, orphaned product
  references, or products missing an identity-verified image. Snapshot
  `bevory-mysql-pre-kolkata-20260920-0159` was available before the write.
- The Lucknow, Udaipur, Noida, Kanpur, and Asansol batch contributed 5,846
  unique positive prices: 5,215 public and 631 review-only, with no duplicate
  city/product/volume keys, orphaned product references, or products missing an
  identity-verified image.
- The rollback snapshot `bevory-mysql-pre-final-five-20260920-0123` was
  `available` before the final five-city production write.
- The Jaipur, Jodhpur, Kota, Mumbai, Thane, Ghaziabad, and Agra batch
  contributed 9,304 unique positive prices: 8,528 public and 776 review-only,
  with no duplicate city/product/volume keys, orphaned product references, or
  products missing an identity-verified image.
- The Gwalior, Mysore, Jabalpur, Hyderabad, Warangal, Pune, Nashik, Nagpur,
  Indore, and Bhopal batch contributed 12,247 positive prices: 11,796 public and
  451 review-only, with no duplicate city/product/volume keys or orphaned
  product references.
- City availability is strict: a product size is returned only where that city
  has a price for it.
- All 3,841 products touched by the ten-city import have identity-verified source
  image URLs. Of the 1,268 brands used by that batch, 314 have verified logos and
  954 still have no verified authentic logo. Unverified logos were deliberately
  not guessed or generated. Remote catalogue images are not stored in Bevory's
  S3 bucket, and image reuse rights require review before migration.
- Source-conflict and anomalous prices are retained for administrator review but
  excluded from all public catalogue views and the sitemap.
- The optimized city catalogue endpoint returns Gurgaon’s 1,888 products and
  2,127 approved variants in one cacheable response.
- The Bangalore catalogue contains 1,764 public products and 1,788 approved
  variants. Fourteen source-conflict, price-anomaly, or size-anomaly variants
  are retained for review and hidden from public reads.
- The Hubli-Dharwad catalogue contains 1,464 public products and 1,491 approved
  variants. Sixty-six source-conflict or anomaly variants are retained for
  review and hidden from public reads.
- The Mangalore catalogue contains 1,527 public products and 1,569 approved
  variants. Twenty-seven source-conflict or anomaly variants are retained for
  review and hidden from public reads.
- Fifty malformed legacy Guide articles were reconstructed, 2,179 fragments
  were quarantined, and 11 evergreen articles were published after an encrypted
  S3 backup.
- Google OAuth completes end to end with the verified Bevory consent screen;
  only the current production client secret remains enabled.
- The restricted S3 identity can put, inspect, and delete an object; the test
  object was deleted afterward.
- The live `/gurgaon` page renders without browser console errors.
- The production dependency audit reports no known runtime vulnerabilities;
  the lint, build, and automated test suites pass. Database-backed phone OTP
  integration tests skip when `DATABASE_URL` is intentionally unavailable.
- Authentication and public-write endpoints are rate limited; public reviews
  enter moderation as unapproved; uploads are administrator-only, limited to
  one raster image, and capped at 5 MB.
- The adaptive Bevory favicon and logo render correctly in light and dark mode,
  and the production source contains no legacy third-party branding.
- `sitemap.xml` is an index for 5 XML shards containing 94,482 unique canonical
  URLs and 80,471 image entries. Product and exact-size city URLs are included
  only when a reviewed positive local price exists. Known products and sizes
  remain visible when another city lacks a price, but those thin local variants
  use `noindex, follow` and emit no Offer schema. Unknown products return HTTP
  404, while free-form search and arbitrary filter combinations remain
  `noindex, follow`. Sitemap audits default to two concurrent requests and
  support shard, offset, and limit controls so exhaustive checks do not overload
  the 1 GB origin.
- Fifteen representative live routes passed after deployment: the city landing,
  product, and exact-size page for each final-batch city returned HTTP 200 with
  matching canonical, indexable robots, initial metadata/H1, and the expected
  CollectionPage, ProductGroup, or Product schema.

## CloudFront status

The CloudFront origin access control `bevory-uploads-oac` exists, but AWS still
rejected a distribution creation attempt on 2026-09-19 because the account must
be verified by AWS Support. Case `178975941700756` tracks the request.
The case remained open with no AWS response visible on 2026-09-20. The AWS
account display name is now
`Bevory`; the console confirmed the rename from `cirkle.world` on 2026-09-19.
The S3 bucket remains private; do not make it public as a workaround. After AWS
removes the restriction, create the distribution using the existing private OAC,
apply a bucket policy scoped to that distribution ARN, point `media.bevory.in`
to the distribution, and verify an uploaded image end to end.

## Image ownership migration

The production database currently contains 6,434 image references representing
4,499 unique externally hosted files: 4,476 from Livcheers, 22 from Unsplash,
and one YouTube thumbnail. The idempotent migration command downloads each
source once and rejects private-network redirects and non-image responses. It
uses deterministic, non-generative Lanczos3 resampling to preserve the aspect
ratio while setting the longest edge to exactly 3,840 pixels, upscaling smaller
sources and downscaling larger ones. Images with alpha are stored as lossless
PNG; all others are stored as progressive JPEG at quality 95 with 4:4:4 chroma.
No synthetic detail is generated. Objects are uploaded privately under
`migrated-images/` with immutable cache headers. Repeated runs detect either the
`.png` or `.jpg` object key and do not upload it again.

Do not change database URLs until CloudFront can read the private bucket and the
configured `IMAGE_PUBLIC_URL` works publicly. Use the phases below from the API
container. The upload phase leaves database URLs unchanged; the apply phase
writes a private S3 manifest before updating records in transactional batches.

```bash
# Inventory only; does not download, upload, or update data.
pnpm images:migrate

# Upload/optimize all images but retain the existing database URLs.
IMAGE_PUBLIC_URL=https://media.bevory.in pnpm images:migrate -- --upload-only

# Verify the CDN first, then atomically cut records over in batches.
IMAGE_PUBLIC_URL=https://media.bevory.in pnpm images:migrate -- --apply

# Regenerate SEO route documents so structured-data image URLs also use Bevory media.
pnpm sitemap
```

`IMAGE_MIGRATION_QUALITY` may override the JPEG quality from 90 through 100;
it defaults to 95. PNG output remains lossless. The 3,840-pixel long edge is
fixed so every migrated asset is produced consistently. Because Lanczos3 is a
traditional resampling filter rather than a generative enhancer, upscaled files
retain the character and limitations of their source pixels instead of adding
invented visual details. Production may continue to provide the paired
`S3_ACCESS_KEY_ID` and `S3_SECRET_ACCESS_KEY` variables. If both are omitted,
the migration uses the AWS SDK default credential chain, including an
authenticated local AWS profile or an attached instance role; providing only
one of the pair is rejected.

After the apply phase, rebuild and redeploy the API image so regenerated SEO
route documents ship with the application. Retain `image_source_url`,
`logo_source_url`, and source-page fields as provenance; they are not rendered
as public images. Storage relocation does not transfer copyright or reuse rights,
so the existing `image_license_status` review remains required.

## Operations

Deploy the application from `/opt/bevory` on the Lightsail instance:

```bash
sudo docker compose -f deploy/docker-compose.production.yml build api
sudo docker compose -f deploy/docker-compose.production.yml run --rm api pnpm db:setup
sudo docker compose -f deploy/docker-compose.production.yml up -d
```

Import one or more reviewed Livcheers city catalogues after copying the CSVs to
a temporary host directory. The importer is additive and idempotent and writes
a complete JSON exception report; remove the temporary CSVs after verification.

```bash
sudo docker compose -f deploy/docker-compose.production.yml run --rm \
  -v /opt/bevory/catalog-import:/catalog:ro api \
  pnpm catalog:import -- \
  --delhi /catalog/delhi.csv \
  --goa /catalog/goa.csv \
  --gurgaon /catalog/gurgaon.csv \
  --faridabad /catalog/faridabad.csv \
  --bangalore /catalog/bangalore.csv \
  --hubli-dharwad /catalog/hubli-dharwad.csv \
  --mangalore /catalog/mangalore.csv \
  --gwalior /catalog/gwalior.csv \
  --mysore /catalog/mysore.csv \
  --jabalpur /catalog/jabalpur.csv \
  --hyderabad /catalog/hyderabad.csv \
  --warangal /catalog/warangal.csv \
  --pune /catalog/pune.csv \
  --nashik /catalog/nashik.csv \
  --nagpur /catalog/nagpur.csv \
  --indore /catalog/indore.csv \
  --bhopal /catalog/bhopal.csv \
  --jaipur /catalog/jaipur.csv \
  --jodhpur /catalog/jodhpur.csv \
  --kota /catalog/kota.csv \
  --mumbai /catalog/mumbai.csv \
  --thane /catalog/thane.csv \
  --ghaziabad /catalog/ghaziabad.csv \
  --agra /catalog/agra.csv \
  --lucknow /catalog/lucknow.csv \
  --udaipur /catalog/udaipur.csv \
  --noida /catalog/noida.csv \
  --kanpur /catalog/kanpur.csv \
  --asansol /catalog/asansol.csv \
  --report /tmp/livcheers-import-report.json
```

The expanded sitemap writes one shard and one SEO bucket at a time. It uses a
larger temporary Node heap when generated on the 1 GB instance:

```bash
sudo docker compose -f deploy/docker-compose.production.yml run --rm --no-deps \
  --user root -e NODE_OPTIONS=--max-old-space-size=768 \
  -v /opt/bevory/public:/app/public api pnpm sitemap
```

Never commit `.env.production`, AWS access keys, database credentials, JWT
secrets, or the Worker origin-verification secret.
