---
title: "Ecommerce migrations: what they are, when you need one and how long they take"
date: 2026-10-15 19:00:00 +0200
categories: Ecommerce
reading_time: 7
---

A **migration** is moving an online store from one platform, technology or system to another, bringing along products, customers, orders, content and Google rankings. It's one of the most delicate projects an ecommerce business can take on: done well, it opens years of growth; done badly, it costs sales and traffic for months.

This article covers the types of migration, how to tell whether you really need one, and how to estimate the timeline.

### The most common types of migration

- **Replatforming**: for example from Magento, WooCommerce or PrestaShop to Shopify. The most complete migration: theme, data, integrations and SEO.
- **Moving to Shopify Plus**: from Shopify to its enterprise plan, to unlock B2B, multiple stores, checkout customisation and automation.
- **Theme migration**: from an old theme (or a heavily modified, now fragile one) to a modern theme with sections and blocks that marketing manages on its own.
- **Platform-mandated migrations**: Shopify retired `checkout.liquid` in favour of *Checkout Extensibility*[^checkoutliquid], and Scripts in favour of *Shopify Functions*.[^scriptsend] Stores using the old technologies had to rebuild those customisations.
- **Going headless**: the store stays on Shopify, but the site is rebuilt with a separate frontend (Hydrogen, Next.js).
- **Migrating connected systems**: a new ERP, introducing a PIM, replacing a warehouse system. The store doesn't change, but every integration does.

### How to tell whether you need a migration

Answer yes or no to these questions. The more yeses, the more likely a migration is an investment rather than a cost.

**Costs and maintenance**

- Does most of your technical budget go into updates, fixes and hosting instead of new features?
- Is your platform, or its version, end-of-life or no longer receiving security updates?
- Does every plugin update risk breaking something?

**Performance and sales**

- Is the site slow, especially on mobile, with failing Core Web Vitals?
- Has the site had problems or slowdowns during traffic peaks (sales, Black Friday, campaigns)?
- Is your checkout conversion rate below your industry average?

**Team autonomy**

- Does marketing need a developer even to change a banner or build a landing page?
- Does launching a promotion, a new market or a new language take weeks?

**Growth**

- Do you need features your current platform doesn't offer, or offers only with heavy development (international selling, B2B, subscriptions, multi-store)?
- Are integrations with the ERP, warehouse or marketplaces fragile, manual or undocumented?
- Has the developer or agency who knew the system moved on?

#### When **not** to migrate

- If the problem is **content** (photos, copy, product range) or **marketing**, changing platform won't fix it.
- If the problem is **one specific thing** (a slow plugin, a heavy theme), fixing that is often enough: an optimisation costs far less than a migration.
- If it's the **wrong time**: never plan a launch in the weeks before sales, Black Friday or Christmas.
- If nobody in the company can give the project **time**: a migration needs decisions, content and testing from the client side too.

### The phases of a migration

{% include diagrams/migration-timeline.html %}

1. **Analysis**: an inventory of everything that exists (products, data, pages, URLs, integrations, apps, customisations) and decisions on what to bring, what to rebuild and what to drop. This phase prevents more surprises than any other.
2. **Design**: the structure of the new site, the buying experience, the visuals. It can be a redesign or an adaptation of the existing design.
3. **Theme development**: building the new store, its editable sections and any special features.
4. **Integrations**: connecting the ERP, warehouse, PIM, CRM, marketplaces and marketing tools.
5. **Data migration**: several import rehearsals, not just one. The final run happens shortly before launch, with up-to-date data.
6. **Testing**: test orders, payments, shipping, emails, taxes, translations, performance, and a check of every redirect.
7. **Go-live**: the actual switch, ideally on a low-traffic day and time.
8. **Post-launch support**: two to four weeks of close monitoring of sales, errors and Google rankings.

### What moves and what doesn't

| Data | Migrated? | Notes |
| --- | --- | --- |
| Products, variants, images | Yes | The perfect moment to clean up the catalogue and complete the data |
| Customers | Yes | **Passwords can't be transferred**[^passwords] for security reasons: customers receive an invitation to activate their new account |
| Order history | Usually | Useful for support and the customer area; imported with dedicated tools |
| Reviews | Yes | Depends on the reviews app you choose |
| Pages, blog, content | Yes | Often worth rewriting, not just copying |
| URLs and SEO rankings | Yes, with **redirects** | Every old address must lead to the matching new page |
| Gift cards and loyalty points | It depends | Check case by case |
| Plugins and customisations | No, they're rebuilt | A chance to drop whatever is no longer needed |

**SEO is the most delicate part.** Without a complete redirect map, Google finds missing pages and organic traffic can collapse. With a well-built map, the dip is small and temporary.

### How long a migration takes: a tool to estimate it

Every project is different, but duration almost always depends on the same factors. Score your project on each row and add up the points.

| Factor | 0 points | 1 point | 2 points |
| --- | --- | --- | --- |
| Products and variants | Under 500 | 500 – 5,000 | Over 5,000 |
| Theme and design | Ready-made theme, customised | Custom theme on an existing design | New design and custom theme |
| Integrations | None, or ready-made apps only | 1–2 custom integrations | ERP, PIM or 3+ integrations |
| Languages and markets | One | 2–3 | 4 or more |
| Special features (B2B, subscriptions, configurators, bundles) | None | One | More than one |
| Data and URLs to preserve | Products only | Also customers, orders, reviews | Large history and many indexed pages |
| Content and decisions on the company side | Ready | Partly to prepare | To create from scratch |

| Score | Complexity | Indicative duration |
| --- | --- | --- |
| 0–3 | Simple | 4–8 weeks |
| 4–7 | Medium | 2–4 months |
| 8–10 | High | 4–6 months |
| 11–14 | Enterprise | 6–12 months |

Some rules of thumb for reading the result:

- **Add a 15–20% buffer**: every migration uncovers something that wasn't in the inventory.
- **The most underestimated factor is the last one**: copy, photos and decisions delayed on the company side stretch timelines more than any technical problem.
- **Integrations weigh more than the theme**: a theme is visible and quick to fix, an ERP integration must be tested with real data and edge cases.
- **Not all launch dates are equal**: if the estimate lands close to peak season, bring the launch forward or push it back.

### How to reduce time and risk

- **Phased launch**: first the store with the essential features, then secondary integrations and advanced features. You start benefiting from the new platform sooner.
- **Freeze content** on the old site in the final weeks, so you don't migrate twice.
- **Fewer customisations, more standard**: question every feature that exists "because that's how we did it". The new platform often already offers it in a different way.
- **One point of contact** on the company side, with the authority to decide.
- **A rollback plan**: know in advance what to do if something goes wrong on launch day.

### In short

A migration is worth it when the current platform costs more than it returns: in maintenance, lost sales or opportunities you can't seize. You decide by looking at the signals, you estimate by looking at the complexity factors, and you deliver with a thorough inventory, repeated data rehearsals and special care for SEO.

[^checkoutliquid]: Shopify Changelog, [The checkout.liquid theme file is being deprecated](https://changelog.shopify.com/posts/the-checkout-liquid-theme-file-is-being-deprecated).
[^scriptsend]: Shopify.dev Changelog, [Shopify Scripts will be deprecated on June 30, 2026](https://shopify.dev/changelog/shopify-scripts-will-be-deprecated-on-june-30-2026).
[^passwords]: Shopify Help Center, [Importing and exporting customers](https://help.shopify.com/en/manual/customers/import-export-customers): customer passwords can't be migrated from another store.
