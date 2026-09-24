# Product batch 33 — source and identity review

Thirty existing product slugs receive editorial details in `src/lib/productContentBatch33.ts`. Sensory language paraphrases maker notes or describes the named flavour/style. It is not a lab result, a city price check, or a stock claim.

| Group | Records | Primary sources |
| --- | ---: | --- |
| Jodhpur | 7 | [Jodhpur range and production](https://jodhpurgin.com/), [core gin](https://jodhpurgin.com/products/jodhpur-gin/), [Baori](https://jodhpurgin.com/products/jodhpur-baori/), [Beveland producer catalogue](https://www.beveland.com/catalogo/beveland-catalogue-2023.pdf) |
| 1800 Tequila | 6 | [Tequila production and casks](https://www.1800tequila.com/pages/tequila-facts), [Milenio](https://www.1800tequila.com/products/milenio), [Coconut](https://www.1800tequila.com/products/coconut), [Cristalino](https://www.1800tequila.com/products/cristalino), [range](https://www.1800tequila.com/collections/all-products) |
| SVEDKA | 9 | [Official vodka, flavours and serving recipes](https://svedka.com/), [brand's Cucumber Lime launch announcement](https://www.prnewswire.com/news-releases/svedka-vodka-redefines-flavor-innovation-with-the-introduction-of-cucumber-lime-300210486.html) |
| Bira 91 | 7 | [B9 Beverages company portfolio](https://drive.altiusinvestech.com/docs/CompanyDeck/Bira91_%28B9_Beverages_Ltd.%29_Company_Deck.pdf), [Bira 91 official range post](https://www.linkedin.com/posts/bira-91_internationalbeerday-makeplay-makeplaywithflavors-activity-7093218884329086979-0jrI), [Himachal Pradesh excise brand registry](https://www.hptax.gov.in/public/notifications/174409640067f4cc90ca412.pdf) |
| Tuborg | 1 | [Carlsberg India Tuborg Strong](https://www.carlsbergindia.com/products/tuborg/tuborg-strong/), [Tuborg brand history](https://www.tuborg.com/en/frequently-asked-questions/) |

## Identity and publication checks

- Jodhpur is *inspired by* India, but its producer says the gin is made in England. It must not be presented as Indian-made. `jodhpur-gin-36cd66a` and `jodhpur-london-dry-gin-da7a339` likely represent the same core gin. The two Spicy slugs may also be duplicate products.
- The 1800 Silver slug is an older naming for a clear tequila style; confirm the photographed label before equating it to today's Blanco. The two Coconut slugs may describe the same liquid.
- SVEDKA Cucumber Lime is not present in the current official online range. Confirm its bottle and market before live publication; no claim of current availability is made.
- Bira 91 White, Superfresh White and White Pint may be overlapping liquid with different labels or pack sizes. Original Strong may overlap Boom. Compare SKUs and canonicalise confirmed duplicates.
- The Bira sensory profiles are conservative style-led descriptions; the maker's publicly available detailed tasting notes were limited. Verify packaging and exact recipe before treating them as certified producer notes.
- Exact long product names cannot always fit `Price, Taste & Review | BevOry` under 60 characters; the title helper preserves the name and shortens the suffix where needed.
- Pushing this content to GitHub is not proof that the production site has deployed or that a search engine has indexed the pages.
