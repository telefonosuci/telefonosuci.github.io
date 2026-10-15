---
title: "Pimcore and Shopify: how to integrate them and when it pays off"
date: 2026-10-15 18:00:00 +0200
categories: Integrations
---

**Pimcore** and **Shopify** are an increasingly common pairing for companies with many products, lots of data and several sales channels. Pimcore is where product data is created, enriched and approved; Shopify is where it's sold. This article explains what each one does, how they connect and what to expect from an integration project.

If PIMs are new to you, start with [PIM: what it is, what it's for and how it integrates with Shopify]({% post_url en/2026-10-15-pim %}).

### What Pimcore is

Pimcore is an open source platform for managing business data, born in Austria and built in PHP (Symfony). It brings together in a single system:

- **PIM**: product information management, with a fully customisable data model;
- **DAM**: management of images, videos and documents, with automatic generation of different formats and sizes;
- **MDM**: management of other "master" data beyond products (suppliers, stores, materials, designers);
- **CMS**: web pages and content, if needed;
- **Datahub**: the APIs and import/export tools Pimcore uses to talk to other systems.

Unlike "ready-made" PIMs, Pimcore is **shaped** around the company: product records, relationships, validation rules and approval workflows are designed to fit. That's its strength, and also why it requires a development project.

A note on licensing: in recent years Pimcore has changed the terms of its free edition (Community Edition). Before choosing, check which edition fits the size and use of your company.

### Why combine them

Shopify is excellent at selling: checkout, payments, international markets, apps, performance. But it wasn't built to manage very complex product data, cross-department approvals or thousands of technical documents. Pimcore is the opposite: excellent with data, not a sales platform.

Together you get:

- **One place where data is edited**, arriving on Shopify already complete, translated and approved.
- **Several Shopify stores fed from one source**: one store per country, per brand, or for B2B.
- **The same data outside Shopify too**: PDF catalogues, reseller portals, marketplaces, in-store screens.
- **Marketing free to work on Shopify** (pages, promotions, theme) without touching product data.

### How the integration works

{% include diagrams/pimcore-shopify.html %}

1. **In Pimcore** the product is created (often imported from the ERP), enriched by several departments and approved.
2. **The Datahub** exposes the product data through APIs, or signals that something changed.
3. **The integration service** is the heart of the project. It receives changes, queues them, translates them into Shopify's format and sends them to each store. If something goes wrong (an API limit, missing data) it retries and logs it, so no update is lost.
4. **Shopify** receives products, variants, images, translations and custom data.
5. Shopify's **webhooks** tell the integration service what happens on the store, for example that a product was published or that an update failed, so Pimcore can show the real status of every product on every channel.

#### Two sync strategies, together

- **Real time, on every change**: when a product is saved or approved in Pimcore, the update to Shopify starts immediately. Changes are live within seconds or minutes.
- **A periodic full check**: once a day (or week) the system compares Pimcore and Shopify and fixes any differences. It's the safety net that repairs whatever real-time sync missed.

#### What becomes what

| In Pimcore | In Shopify |
| --- | --- |
| Product class (e.g. "Shoe", "Sofa") | Product type, with its set of metafields |
| Product fields | Standard fields (title, description, price) and **metafields** |
| Variants (child objects of the product) | **Variants**, with at most three options per product |
| Dynamic attribute groups (classification store, object bricks) | **Metafields**, one namespace per group |
| Linked objects (materials, designers, certifications) | **Metaobjects**, shown in the theme as reusable blocks |
| DAM images | Product **media**, in the right format and size |
| Localised fields | Per-language translations in **Shopify Markets** |
| Categories | **Collections** |
| Approval status | Draft or published product |

### Example projects

**Technical lighting manufacturer.** 25,000 items with spec sheets, photometric files and per-country certifications. Pimcore manages the data and generates PDF catalogues; one Shopify store sells a 2,000-product selection to consumers, and a second Shopify B2B store shows installers and resellers the full catalogue with dedicated price lists. The same technical data, edited once, ends up in the catalogue, the consumer site and the B2B site.

**Fashion group with three brands.** A single Pimcore, three Shopify stores (one per brand) and five languages. The product team works in Pimcore, each brand has its own approval workflow, and the integration service decides which products go to which store. The three brands' ecommerce teams work independently on Shopify pages and campaigns.

**Food company.** Ingredients, nutritional values and allergens are regulated data, with different rules per country. Pimcore manages them with strict validation and approval workflows involving the quality team; only approved products reach Shopify, with the correct nutrition tables for each market, displayed in the theme via metaobjects.

**Configurable furniture.** Sofas with dozens of fabrics and finishes: the combinations far exceed what Shopify handles comfortably as variants. Pimcore holds the full configuration logic; Shopify receives the main models, and fabric and finish are chosen through a configurator in the theme that reads data from Pimcore.

### How long a project takes

As a rough guide, for a Pimcore → Shopify integration with an already defined data model:

| Scenario | Indicative duration |
| --- | --- |
| One store, one language, simple catalogue | 4–8 weeks |
| Several languages or markets, metafields and metaobjects, images from the DAM | 2–4 months |
| Several stores, B2B, per-channel publishing rules, configurators | 4–6 months or more |

If Pimcore still needs to be implemented from scratch (data model, ERP imports, approval workflows), add that time: designing the data model is often the longest part, and the most important one.

### Mistakes to avoid

- **Designing the Pimcore model without thinking about Shopify**: three options per product, variant structure and metafield limits must be considered from day one.
- **A point-to-point integration with no queue or logs**: it works as long as everything goes well. The first unlogged error becomes a wrong product online that nobody notices.
- **Syncing everything on every change**: with thousands of products you hit Shopify's API limits. Send only the differences.
- **Leaving Pimcore-owned data editable on Shopify**: it will be overwritten. Train the team on where each thing is edited.
- **Routing stock through Pimcore**: it must go from the ERP or warehouse straight to Shopify.
- **Oversized images**: the DAM keeps the originals, but Shopify should receive formats already optimised for the web.

### When it pays off (and when it doesn't)

**It pays off** if you have large or technical catalogues, regulated data, several brands or Shopify stores, channels beyond ecommerce, or approval processes across departments. In those cases Pimcore repays the investment in order, faster launches and fewer errors.

**It doesn't** if you have a simple catalogue and a single store: a lighter SaaS PIM (like Plytix or Akeneo) or a well-organised Shopify admin are faster and cheaper. Pimcore is a powerful tool, but choose it when the complexity is really there.
