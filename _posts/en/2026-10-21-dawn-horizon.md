---
title: "Dawn and Horizon: Shopify's two reference themes compared"
date: 2026-10-21 09:00:00 +0200
categories: Ecommerce
related: [shopify, shopify-releases, migrations]
reading_time: 8
audience: dev
---

For four years **Dawn** was the starting point of almost every Shopify store: free, fast, open source, and the base of every official free theme. In 2025 Shopify introduced **Horizon**, which replaced it as the default theme for new stores. It is not a refreshed Dawn: it is a different architecture, built on a different idea of who should be able to change the store and how.

This article covers where the two themes come from, how they differ, the strengths of each, and why Shopify felt the need to start over.
{% raw %}
### The story of Dawn

Dawn was released on **29 June 2021**, together with **Online Store 2.0**[^os20], the biggest overhaul of Shopify themes up to that point. Online Store 2.0 introduced:

- **JSON templates**, which brought *sections* to every page (until then they were limited to the home page);
- **app blocks**, which let apps plug into the theme as draggable blocks, without touching the code;
- **dynamic sources**, to connect metafields directly from the editor.

Dawn was born as a **reference theme**: the model of how Shopify thinks a 2.0 theme should be written. Its stated principles are clear: **HTML first**, JavaScript only when needed, small components, mobile first, a deliberately limited feature set. The code is public on GitHub and quickly became the starting point for agencies and freelancers building custom themes, as well as the base of all official free themes (Refresh, Sense, Craft, Studio, Crave and the others are Dawn variants).

### The story of Horizon

Horizon was presented with the **Summer '25 Edition** (May 2025).[^summer25] More than a single theme, it is a **family**: one codebase that powers ten free themes with different styles (Horizon, Atelier, Dwell, Fabric, Heritage, Pitch, Ritual, Savor, Tinker and Vessel). Since then it has been the default theme for new stores.

The repository README sums up its principles in four points[^horizon]:

- **Web-native**: it makes full use of modern browser features, with *progressive enhancement* instead of polyfills.
- **Lean and fast**: features are excluded by default; a theme shouldn't support everything Shopify offers.
- **Server-rendered**: HTML is rendered by Shopify with Liquid; client-side JavaScript is only for async or on-demand rendering.
- **Functional, not pixel-perfect**: semantic markup and a result that works everywhere, even if it isn't pixel-identical on every browser.

So far it sounds like Dawn. The real difference is how the theme is built: Horizon is the first official theme designed **entirely around theme blocks**.

### The key difference: sections versus blocks

In **Dawn** the unit of composition is the **section**. Each section defines in its schema the blocks it accepts, and those blocks only exist inside it. The result:

- a "text" or "button" block has to be rewritten (or copied) in every section that needs it;
- nesting is very limited: section → block, and little else;
- the inner layout of a section is decided by the developer. The merchant can reorder blocks but cannot, for example, put two columns inside a section that wasn't built for them.

In **Horizon** the unit of composition is the **theme block**: a Liquid file in the `blocks/` folder, defined once at theme level and reusable in any section that accepts it.[^themeblocks]

```json
{
  "name": "Free section",
  "blocks": [{ "type": "@theme" }, { "type": "@app" }]
}
```

```liquid
{% content_for 'blocks' %}
```

Theme blocks can contain other blocks, so you can build nested structures: a **group** containing a column, containing an image and a text with a button. Sections become almost empty containers, and the merchant composes the layout from the editor. For the parts that must stay fixed (for example the price block on the product page) there are **static blocks**, which the developer places in code and the merchant can only configure.

### Other differences

| | **Dawn** | **Horizon** |
|---|---|---|
| Year | 2021 (Online Store 2.0) | 2025 (Summer '25 Edition) |
| Unit of composition | Sections with their own blocks | Reusable, nestable theme blocks |
| Layout freedom for the merchant | Reordering sections and blocks | Free composition, groups, columns, per-block settings |
| JavaScript | Light custom elements, very little code | More structured web components, more client-side logic |
| Built-in features | Essentials | Richer (mega menu, quick add, more configurable filters and product cards) |
| AI in the editor | No | Block generation from a text description |
| Official derived themes | Refresh, Sense, Craft, Studio, Crave… | Atelier, Dwell, Fabric, Heritage, Pitch… |
| Update pace | Slow, now in maintenance | Frequent |
| External contributions | Open to issues and pull requests | Public repository, contributions not accepted |

An important detail for developers: the Horizon README explicitly states that **themes derived from Horizon cannot be submitted to the Theme Store**. For commercial themes Shopify points to the **Skeleton theme** as the base[^skeleton]; Horizon remains an excellent model to study, and a legitimate base for a custom theme on a single store.

### Dawn's strengths

- **Performance**: very little JavaScript, great Core Web Vitals scores even on mobile out of the box.
- **Readability**: the code is simple, linear, easy to understand and change. It is still one of the best ways to learn Liquid.
- **Maturity**: years of use, known bugs fixed, thousands of customisations documented by the community.
- **App compatibility**: many apps hook into Dawn's DOM (for example the variant selector) and take it for granted.
- **Predictability**: the merchant has less freedom, so it's harder to "break" the design.

### Horizon's strengths

- **Layout freedom without code**: merchants build complex pages from the editor, without asking the developer for a new section for every variation.
- **Reuse**: a block is written once and works everywhere. Less duplicated code, fewer inconsistencies between sections.
- **Fewer page builders**: many needs that used to require an external page builder app (with its weight on the frontend) are now covered by the theme.
- **Built-in AI**: blocks generated from a description ("a seasonal sale banner") right in the editor.
- **Modern features included**: more ready-made components, without buying a premium theme.
- **Aligned with the platform's future**: new theme features are designed and showcased on Horizon first.

### Why Horizon was needed

Dawn did well what it was built for, but over time structural limits emerged that an update couldn't fix.

**1. Merchants wanted to compose, not just reorder.** With Dawn, every request like "I want an image next to the text, but with two buttons" became a new section or a code change. Many stores answered by installing external **page builders**, which add scripts, slow down the site and tie content to a third-party app. Horizon brings that flexibility inside the theme, natively.

**2. The section model didn't scale.** Every section defining its own blocks means the same "button" written ten times, with ten slightly different schemas. Theme blocks (introduced in 2024) solve the problem, but a theme written around sections can't adopt them without a rewrite. A reference theme born with the new tools was needed.

**3. The gap with premium themes.** Dawn was deliberately minimal: mega menu, quick add and advanced product layouts required a paid theme or custom development. Horizon raises the baseline of the free theme.

**4. AI needs a composable structure.** To generate a piece of a page from a prompt, the system must produce a self-contained unit and insert it anywhere. A theme-level block is exactly that; a block tied to a single section is not. Horizon is also the technical base for AI in the editor and the store builder.

**5. An up-to-date reference for developers.** Since 2021 browsers have changed (container queries, `:has()`, popover, view transitions) and so have theme APIs. Horizon shows how Shopify thinks a theme should be written today.

### Horizon's limits

It's not all gain:

- **Performance**: more JavaScript and more nesting mean a heavier DOM. Several independent measurements put it behind Dawn on mobile, at least without optimisation.
- **App compatibility**: apps that relied on Dawn's structure (selectors, events, product form markup) may not work or may need an update.
- **Too much freedom**: a merchant can build pages that are off-brand. It takes discipline, or careful use of static blocks to lock critical parts.
- **More complex code**: deep customisation requires understanding the block hierarchy, presets and web components. The learning curve is steeper.
- **Youth**: early releases had editor bugs and odd mobile behaviour; updates are frequent, which is good but means keeping up with them.

### Which one to choose

| Situation | Choice |
|---|---|
| New store, the marketing team wants autonomy over pages | **Horizon** |
| New store with a custom design and a dedicated developer | **Horizon** as a reference, or the Skeleton theme as a clean base |
| Store on Dawn that works and converts well | **Stay on Dawn** until there's a redesign |
| Store on Dawn with a heavy external page builder | Consider **Horizon**: the page builder can often be removed |
| Mobile performance is the top priority, simple catalogue | **Dawn** is still very competitive |
| Theme to sell on the Theme Store | **Skeleton theme**, not Horizon |

Moving from Dawn to Horizon **is not an update: it's a migration**. Section settings and content don't carry over automatically, customisations must be rewritten as blocks and apps must be checked one by one. It's best done together with a redesign, not as a standalone operation.

### In short

- **Dawn** (2021) is the Online Store 2.0 reference theme: light, simple, built on **sections**. It's still a solid, fast base.
- **Horizon** (2025) is the new default theme: a family of ten themes built on reusable, nestable **theme blocks**, with AI built into the editor.
- Horizon answers a precise demand: **give merchants the freedom to compose pages without code and without external page builders**, and give developers a model based on block reuse.
- In return it brings more complexity, more JavaScript and some app compatibility issues.
- Rule of thumb: **new projects on Horizon, stable Dawn stores on Dawn until the next redesign.**
{% endraw %}

[^os20]: Shopify.dev, [Online Store 2.0](https://shopify.dev/docs/storefronts/themes/os20); [Shopify/dawn](https://github.com/Shopify/dawn) on GitHub.
[^summer25]: Shopify, [Summer '25 Edition](https://www.shopify.com/news/summer-25-edition-merchant).
[^horizon]: [Shopify/horizon](https://github.com/Shopify/horizon) on GitHub, README.
[^themeblocks]: Shopify.dev, [Theme blocks](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks).
[^skeleton]: [Shopify/skeleton-theme](https://github.com/Shopify/skeleton-theme) on GitHub.
