# BevOry Remaining Work

This is the release checklist for the next commit and deployment window. It records work that is intentionally not claimed as live.

## Ready Locally

- [x] Product pagination is set to 15 records per fetch with progressive loading.
- [x] Brand expansion content is implemented for 38 planned brands.
- [x] Brand directory can show active brands before city-level products or prices exist.
- [x] Explore Categories cards use a compact responsive grid.
- [x] Public desktop pages use a centered 1120px frame for a more proportionate desktop layout.
- [x] Wine Universe routes and interactive discovery experience are implemented.
- [x] The fixed public header uses one universal search row across public pages.
- [x] The oRy AI launcher uses the supplied circular mark and links to the city homepage.
- [x] The sequential official-logo and reversible Q95 WebP/S3 pipelines are implemented.

## Database And Media

- [ ] Start or connect the configured MySQL database at `127.0.0.1:3308`.
- [ ] Run `npm run brands:expand` and verify the created and updated record counts.
- [ ] Retrieve each brand logo from a first-party or rights-cleared asset source.
- [ ] Verify logo identity, dimensions, and rights before inserting it.
- [ ] Upload verified logo derivatives to S3 and apply first-party `bevory.in/media/` URLs.
- [ ] Re-run the image audit and confirm no unverified logo is published.

## Release And Cloud

- [x] Fetch and rebase onto the latest remote `main`.
- [x] Run lint, production build, and the full database-independent test suite (258 passed; two phone-OTP integration tests skipped).
- [x] Commit the integrated Wine Universe, header, oRy AI and logo-pipeline changes.
- [ ] Push `main` and deploy the current release to AWS.
- [ ] Restart and health-check the API and frontend services.
- [ ] Confirm CloudFront, S3, DNS, cache headers, and HTTPS after deployment.
- [ ] Verify `/sitemap.xml`, robots, representative city/category/product/brand URLs, and Search Console submission status.
- [ ] Recheck production pagination, category card sizing, desktop alignment, and mobile layout.

## Acceptance Checks

- No duplicate brand records or duplicate products are created.
- Missing local prices remain blank without hiding the product or showing an error state.
- Every visible product image has a stable aspect ratio and first-party URL where approved.
- Desktop content remains centered and readable without changing the existing type or color system.
- No deployment is described as complete until production smoke checks pass.
