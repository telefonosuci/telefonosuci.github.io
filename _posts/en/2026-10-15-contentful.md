---
title: "Contentful: what it is, when to use it and how it compares"
date: 2026-10-15 12:00:00 +0200
categories: Stack
---

**Contentful** is a cloud (SaaS) *headless* CMS, one of the most popular among enterprises. Like Strapi it manages content and delivers it through APIs, but there's nothing to install: infrastructure, global CDN, security and scaling are handled by Contentful. It positions itself as a *composable content platform*: a single place where content lives, feeding the website, apps, ecommerce and other channels.

### How it works

- **Space**: the container for a project, with its data model, content and media.
- **Environments**: isolated copies of a space (for example production and testing) to try model changes without touching production.
- **Content model**: content types (*Blog Post*, *Landing Page*, *Hero Banner*) and their fields, with validations and references between entries.
- **Entries and Assets**: the actual content and media files. Images are resized and converted on the fly by the **Images API**.
- **APIs**:
  - *Content Delivery API* to read published content (served from a CDN);
  - *Content Preview API* to read drafts;
  - *Content Management API* to create and edit content from code (migrations, imports);
  - *GraphQL Content API*.
- **App Framework**: extensions to the web app, for example to pick a Shopify product right inside an entry.

### Typical use cases

- **Multi-brand, multi-country corporate sites**: many sites, many languages, a single place to manage content.
- **Composable commerce**: Shopify (or commercetools) for catalogue and checkout, Contentful for landing pages, editorial and campaigns, Next.js as the frontend.
- **Content for mobile apps**: copy, banners and configuration that can change without shipping a new app version.
- **Structured editorial teams**: roles, granular permissions, approval workflows and scheduled publishing.
- **Reusable content**: the same block (say, a promotional banner) used across dozens of pages and updated once.

### Advantages

- **No infrastructure**: reliability and performance are guaranteed by the platform, with a global CDN.
- **A structured data model**: content is clean, reusable data, not HTML tied to one page.
- **Environments and migrations**: the model evolves like code, with migration scripts and test environments.
- **Built for enterprises**: SSO, roles, audit, SLAs, compliance.
- **An integration ecosystem** for commerce, DAM, translation, analytics.
- **SDKs** for many languages and very thorough documentation.

### Disadvantages

- **Cost**: the free plan is limited, and paid plans are expensive and grow with users, records, locales and environments.
- **Platform limits**: the number of content types, fields, records and API calls depends on the plan.
- **Lock-in**: the data model and content live on the platform; they can be exported, but migrating takes work.
- **A less visual editing experience**: without a configured preview, editors fill in fields without seeing the final page. Contentful has added visual tools, but they must be wired into the frontend.
- **Modelling takes care**: a poorly designed content model (too tied to layout, or too fragmented) is hard to fix later.

### Comparison with alternatives

| | Contentful | Strapi | Sanity | Storyblok | Hygraph |
| --- | --- | --- | --- | --- | --- |
| Model | SaaS | Open source, self-hosted or cloud | SaaS (open source studio) | SaaS | SaaS |
| Strength | Enterprise, governance | Control and cost | Flexible, customisable editor | Visual editor | GraphQL and content federation |
| Visual editing | With setup | Limited | With setup | Native | Limited |
| APIs | REST, GraphQL | REST, GraphQL | GROQ, GraphQL | REST, GraphQL | GraphQL |
| Cost | High | Free + hosting | Medium, usage-based | Medium | Medium |

- **Contentful vs Strapi**: Contentful removes all the operational work and offers enterprise governance; Strapi is free, modifiable, and the data stays with you. The choice often comes down to budget and in-house skills.
- **Contentful vs Sanity**: Sanity has an editor (Sanity Studio) that's fully customisable in React and a very powerful query language (GROQ); Contentful is more rigid but more turnkey.
- **Contentful vs Storyblok**: Storyblok is built around a visual editor that marketers love; Contentful is stronger on governance and structured content for many channels.

### When to choose it (and when not)

**Yes**, when there's a lot of content, spread across channels, markets and languages, managed by a team with different roles, and the company would rather pay for a service than run servers.

**No**, for a small site or blog (the cost and complexity aren't justified), on a tight budget (Strapi or a static site is better), or if marketing mainly wants to build pages visually (consider Storyblok, or a Shopify theme).
