# Production Deployment

Last verified: 2026-09-19

## Public endpoints

- Primary site: `https://bevory.in`
- Secondary domain: `https://www.bevory.in` (permanently redirects to the apex domain)
- API origin: `https://api.bevory.in`
- Standby Pages project: `https://bevory.pages.dev` (not bound to the production custom domains)

## Topology

- Cloudflare proxies the apex and `www` hostnames to Caddy on AWS Lightsail.
- AWS Lightsail instance `bevory-api-prod` runs Caddy and the combined
  React/Node.js application with Docker Compose. Node serves the built frontend,
  API, and pre-rendered SEO route documents. Only Caddy publishes ports 80 and
  443.
- Caddy supplies the private origin-verification header only for the apex host.
  Direct API-origin requests without it return 404.
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
directly to the attached Lightsail static IP and remains DNS-only. This keeps
Cloudflare at the public edge while Caddy owns the application origin.

## Expected base cost

- Lightsail 1 GB instance: USD 7/month
- Lightsail 1 GB managed MySQL: USD 15/month
- Cloudflare Pages: free plan
- S3 and CloudFront: usage based

The expected fixed base is USD 22/month before storage, delivery, taxes, and
other usage.

## Verification

The following production checks passed on 2026-09-19:

- The apex is proxied by Cloudflare to AWS and redirects `/` to `/gurgaon`.
- `www` permanently redirects to the equivalent apex URL.
- `/api/health` reaches MySQL through Caddy and reports 33,334 records.
- Direct API requests without the verification secret return 404.
- Phone OTP is not configured in production; email/password and Google OAuth
  are the verified sign-in methods.
- Administrator sign-in, session validation, and an admin-only status endpoint
  work through the production domain.
- Public catalog reads and the party-planner endpoint work.
- The production catalogue contains all 30 supported cities, 18 active
  categories, 121 active subcategories, 1,745 active brands, 5,220 active
  products, and 23,768 positive city-specific size prices. Of those prices,
  23,135 are public and 633 are retained for review.
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
- The adaptive Bevory favicon and logo render correctly in light and dark mode,
  and the production source contains no legacy third-party branding.
- `sitemap.xml` is an index for three XML shards containing 57,272 unique
  canonical URLs and 48,693 image entries, including 21,808 city product pages,
  23,135 exact city-and-size pages, city brand/category/subcategory pages, 11
  published guides, and 170 cocktails. Unpriced variants, free-form search, and
  arbitrary filter combinations remain intentionally `noindex, follow` to avoid
  thin and duplicate index bloat. A 16-way production crawl verified every URL,
  matching canonical, indexable robots directive, initial H1/title/description,
  and required JSON-LD type with zero failures.

## CloudFront status

The CloudFront origin access control `bevory-uploads-oac` exists, but AWS still
rejected a distribution creation attempt on 2026-09-19 because the account must
be verified by AWS Support. Case `178975941700756` tracks the request.
The case remains open and unassigned. The AWS account display name is now
`Bevory`; the console confirmed the rename from `cirkle.world` on 2026-09-19.
The S3 bucket remains private; do not make it public as a workaround. After AWS
removes the restriction, create the distribution using the existing private OAC,
apply a bucket policy scoped to that distribution ARN, point `media.bevory.in`
to the distribution, and verify an uploaded image end to end.

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
  --report /tmp/livcheers-import-report.json
```

Never commit `.env.production`, AWS access keys, database credentials, JWT
secrets, or the Pages origin-verification secret.
