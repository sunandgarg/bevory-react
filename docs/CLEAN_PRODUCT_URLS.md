# Clean product URLs

Implemented 27 September 2026. Product database IDs and stored slugs remain unchanged.

- Public category/search cards and product detail navigation use a suffix-free slug when it uniquely identifies one active product nationally.
- Both the stored slug and the public slug resolve to the same product record. Existing URLs permanently redirect to the clean URL, preserving city, size and query parameters.
- Duplicate names keep their existing identifiers. The resolver never picks the first arbitrary match.
- Consolidated-product redirects remain supported. Editorial content still uses stable stored keys.
- Origin HTML, client metadata, structured-data URLs and future sitemap generation use the public URL. oRy AI resolves the same alias.
- The route index is cached for five minutes, invalidated after product mutations, and built from a narrow identity-only database query. A city cannot independently claim an ambiguous national slug.

Audit: 5,991 stored products, 4,210 active products; 4,081 unambiguous clean slugs and 129 active records retaining their suffix due to name collisions. The live SEO index and database produced identical mappings for all 4,210 active records.

Existing sitemap staging: 45 child files plus index, 133,085 URLs, 72,199 URL changes, zero duplicates, maximum 3,000 URLs per child. Dates, image URLs and page eligibility are preserved. XML was parsed with xmllint; representative live URLs are checked after deployment, not all 133,085 pages.

`scripts/clean-product-sitemap-urls.ts` stages a URL-only rewrite in a new directory; it refuses to overwrite the source or an existing destination. The generator also emits clean URLs for subsequent builds.

Rollback: restore the previous application image together with the original sitemap archive. No database migration or record restoration is required. Browser-cached pages can require a hard refresh.

Remaining: duplicate-name records need identity review before they can safely share or receive distinct human-readable slugs. This change does not merge products or alter city prices.
