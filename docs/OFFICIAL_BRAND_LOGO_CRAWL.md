# Official brand logo crawl

`pnpm brands:logos` is intentionally strict. It does not treat Livcheers,
search-result pages, marketplaces, or a CDN mirror as an official source.
The default run is sequential: one brand is resolved, downloaded, converted,
and recorded before the next brand starts. Set `BRAND_LOGO_CONCURRENCY` only
when you explicitly want bounded parallel processing.

The preferred input is a JSON map of verified brand names (or slugs) to the
brand's HTTPS homepage:

```json
{
  "Bombay Sapphire": "https://www.bombaysapphire.com/",
  "Blue Moon": "https://www.bluemoonbrewingcompany.com/"
}
```

Run a dry run first:

```sh
pnpm brands:logos -- --domains-file config/official-brand-domains.json
```

The optional `--wikidata` flag can discover an exact-name Wikidata entity's
official-website property, but the crawler still requires the website itself to
publish a same-domain Organization/Brand logo. Ambiguous or missing matches
are reported and left unchanged.

With AWS and database credentials available, apply the verified results:

```sh
pnpm brands:logos -- --domains-file config/official-brand-domains.json --apply
```

To remove the existing Livcheers-provenance copies for brands that still have
no verified first-party source, add `--quarantine-unverified`. The old URLs are
preserved in `logo_previous_url` and are not deleted from S3:

```sh
pnpm brands:logos -- --wikidata --quarantine-unverified --apply
```

For every accepted logo the script:

- keeps the downloaded original in the private `brand-logo-originals/` prefix;
- writes a Q95 WebP derivative under `migrated-images/brand-spotlights/`;
- sets immutable cache metadata and records source URL, source page, evidence,
  dimensions, and the previous BevOry URL in `brand_spotlights`;
- never claims that identity verification is a copyright licence. `image_license_status`
  remains `unverified` unless a separate rights review has documented permission.
