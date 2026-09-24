# Product batch 32 — source and identity review

Thirty existing product slugs receive editorial details in `src/lib/productContentBatch32.ts`. Sensory descriptions are editorial interpretations of producer tasting notes, not laboratory measurements. Bottle label and local price records remain authoritative for a specific variant and city.

| Slug group | Records | Primary producer sources |
| --- | ---: | --- |
| Planteray (legacy `plantation-` slugs) | 7 | [Stiggins](https://planterayrum.com/product/stiggins-fancy-pineapple/), [Barbados XO](https://planterayrum.com/product/barbados-xo/), [Barbados 5 Years](https://planterayrum.com/product/five-years/), [Isle of Fiji](https://planterayrum.com/product/isle-of-fiji/), [Xaymaca](https://planterayrum.com/product/xaymaca/), [Original Dark](https://planterayrum.com/product/original-dark/), [Three Stars](https://planterayrum.com/product/three-stars/) |
| Diplomático (`ron-diplomatico-`) | 6 | [Distillery process](https://www.rondiplomatico.com/our-story/), [Ambassador](https://www.rondiplomatico.com/product/ambassador/), [Single Vintage](https://www.rondiplomatico.com/es/product/single-vintage/), [Reserva Exclusiva](https://www.rondiplomatico.com/product/reserva-exclusiva/). Distillery Collection still identities also corroborated by the [2017 brand launch release](https://www.prweb.com/releases/diplom_tico_rum_launches_the_distillery_collection/prweb14825233.htm). |
| Corralejo | 6 | [Estate range](https://casacorralejo.com/collections/tequila-corralejo), [Añejo](https://casacorralejo.com/products/tequila-corralejo-anejo-750-ml), [1821 Extra Añejo](https://casacorralejo.com/products/tequila-corralejo-extra-anejo-1821-750-ml), [Triple Destilado](https://casacorralejo.com/products/tequila-corralejo-triple-destilado-reposado-750-ml), [production overview](https://corralejotequila.com/blogs/news/what-makes-a-tequila-premium). |
| Greater Than | 6 | [Nao Spirits house and range](https://naospirits.com/), [Broken Bat card](https://naospirits.com/pdf/GT-Broken-Bat.pdf), [Punk Gin card](https://naospirits.com/pdf/Punk-Gin_InfoCard.pdf), [No Sleep card](https://naospirits.com/pdf/GT-no-sleep.pdf). |
| Samsara | 5 | [About and botanicals](https://www.samsaragin.com/pages/about), [producer tasting notes](https://www.samsaragin.com/pages/tasting-notes). |

## Catalogue identity issues to resolve

- The two Corralejo Reposado slugs may refer to the same liquid, as may the two Greater Than Broken Bat slugs. The content does not claim a distinct recipe. Compare original SKUs/bottle sizes, then consolidate or canonicalise duplicates.
- `ron-diplomatico-reserva-dark-rum-b4c9ad1` has a generic legacy name. The copy assumes the photographed bottle is Reserva Exclusiva; verify its label before publishing this record live.
- `corralejo-1821-anejo-f5cb6cb` omits *Extra* in the legacy slug. The maker classifies 1821 as Extra Añejo, matured 36 months.
- Planteray replaced Plantation as the brand name; old slugs remain to preserve existing URLs.
- Long exact product names cannot always fit the requested `Price, Taste & Review | BevOry` suffix within 60 characters. The content helper uses a shorter suffix or the name alone where needed.
- These editorial records do not verify city stock, current prices, or label changes. No deployment or search indexing is implied by this batch.
