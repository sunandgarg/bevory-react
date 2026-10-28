# Crawler access rollback snapshot (2026-10-29)

Baseline before the crawler-access change:

- `public/robots.txt`: commit `883f398` (restore from that revision if needed).
  The deployed file was also copied to
  `/opt/bevory/robots.txt.pre-crawler-2026-10-29` before replacement.
- Cloudflare zone: `bevory.in`, Free plan.
- Custom WAF rule `ed536877bcfd4f2d868fc6e17b556e9e`, name
  `Block high-volume Ahrefs and headless crawler traffic`, was Active, action
  Block, first in execution order. Its expression was:
  `(http.request.uri.path eq "/api/query" or starts_with(http.request.uri.path, "/media/")) and (http.user_agent contains "AhrefsBot" or http.user_agent contains "HeadlessChrome")`
- No Cloudflare rate-limiting rules were configured.
- Bot Fight Mode and AI Labyrinth were off. Super Bot Fight Mode was unavailable
  on the Free plan. AI Search, Agent, and Training policies were Allow; every
  listed individual AI/archiver crawler block was off. Bot Preference Sync was
  on. Browser Integrity Check was on; HTTP DDoS protection was always active.
- Worker routes were `bevory.in/api/*` and `bevory.in/media/*`. The Worker adds
  an origin-verification header required by the API and media origin.
- The pre-change API image is tagged `bevory-api:pre-crawler-20261029` on the
  Lightsail host. The new image permits public GET/HEAD only for allowlisted
  image keys; all `/api/*` origin verification remains in place.

Current changes: the WAF rule is Disabled; the `bevory.in/media/*` Worker route
was removed, leaving `bevory.in/api/*`; public media is served directly by the
same origin after its allowlist and method checks. The new robots file is mounted
into the API container. A new behavior-based rate-limit rule,
`8ceed8ea08e745f982eb0373eda2a0e7`, blocks requests from one IP after
30 `POST /api/query` requests in 10 seconds, for 10 seconds, regardless of
user agent. To roll back, disable this rate-limit rule, restore the prior API
image and the media Worker route **together**, then reactivate the named WAF
rule only if needed.
Restore `public/robots.txt` from commit `883f398` and remove its compose bind
mount to return to the previous robots behavior. Never remove the `/api/*`
Worker route without first replacing and testing API origin verification.
