# BevOry Brand Editorial Master Prompt

Standing instruction for this chat until the user changes or revokes it. Keep all work local. Do not commit, push, write to the production database, or deploy until the user explicitly instructs it. Future brand requests continue in batches of 30 unless the user changes the batch size. Report every unfinished item; end each completed batch with the requested red STOP bar.

## Batch workflow

1. Select 30 existing catalogue identities and inspect the whole batch before editing.
2. Record which brands already have logo URLs. Preserve those URLs; do not replace or re-upload them merely because a new candidate exists.
3. For blank logo fields only, research an exact brand logo and verify its identity and reachability before adding its URL. Leave unresolved logos blank and report them.
4. Research brand facts, write all public fields below, check every claim and keep research/audit notes outside public fields.
5. Verify the content contract, banned phrases, logo-preservation behavior, typechecks and relevant tests. Report local status and remaining work without claiming publication.

## Five non-negotiable laws

1. **Public UI persona:** `description`, `story`, `tastingNotes`, `howToEnjoy`, `pairingIdeas`, `whyChoose`, `faqs` and `finalVerdict` are consumer-facing. Never put database instructions, scraper commentary or editorial guardrails into them. Never use: "BevOry does not fill missing technical facts with estimates", "Adults can compare like with like", "Availability is not assumed across India", "Read the individual label before buying", "Keep the exact record separate" or "Editorial guardrail".
2. **Silent omission:** If a technical detail is unavailable or varies by expression, omit it without explaining the absence. Do not say "The producer does not publish", "No tasting notes found in reviewed material" or "Style label remains at whisky". For a broad portfolio, describe its range without transferring one expression's facts to another.
3. **Real, specific facts:** Use verifiable geography, history, owners/founders and production details when supported. Never invent prices, ABV, awards, ingredients, production methods, availability or tasting claims. Never describe an unpeated whisky as peated or smoky without expression-specific evidence.
4. **Distinct writing:** Avoid repeated templates and generic filler. Banned terms/phrases include "symphony", "testament", "delve", "nestled", "embark", "elevate your senses", "dance on the palate", "rich tapestry", "whether you're", "A brand can contain more than one style", "Start with the individual bottle" and "Check BevOry for reviewed city-level prices and availability before relying on a local listing". Keep any city-price call to action short and natural.
5. **Specific food pairings:** Use plausible Indian and global dishes, such as galouti kebabs, mutton seekh, paneer tikka, tandoori prawns, rogan josh, dark chocolate, salted almonds and aged cheddar, as appropriate to the drink. Avoid generic "meats and cheese".

## Exact public data contract

```ts
export type BrandPublicNote = {
  title?: string;
  subheading?: string;
  description: string;
};

export type BrandPublicPairing = {
  title: string;
  items: string[];
};

export type BrandPublicFaq = {
  question: string;
  answer: string;
};

export type BrandPublicContent = {
  description: string; // 2-3 sentences: what it is, creator/estate, origin, core style
  story: string; // 2-3 sentences: historical/cultural facts, founders, terroir, philosophy
  tastingNotes: BrandPublicNote[]; // 2 consumer-friendly flavour callouts
  howToEnjoy: BrandPublicNote[]; // 2 notes: serving and food
  pairingIdeas: BrandPublicPairing[]; // specific Indian and global dishes
  whyChoose: string; // 1 standout sentence
  faqs: BrandPublicFaq[]; // 2 high-intent questions and concise answers
  finalVerdict: string; // 1 consumer-focused conclusion
  metaTitle: string; // max 60 characters: "[Brand Name] [Category] Guide | BevOry"
  metaDescription: string; // max 155 characters, compelling snippet with city-price CTA
};
```

The Charosa example in the user's attached prompt is a quality benchmark, not permission to reuse its facts or prose for other brands. The original user-supplied text is preserved in the chat attachment; this local file is the operating checklist.
