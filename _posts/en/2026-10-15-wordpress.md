---
title: "WordPress: what it is, when to use it and how it compares"
date: 2026-10-15 10:00:00 +0200
categories: Stack
reading_time: 5
---

**WordPress** is the most widely used open source CMS (Content Management System) in the world: it powers a huge share of the web, from personal blogs to editorial portals. It's written in PHP, uses a MySQL/MariaDB database and runs on practically any hosting. Don't confuse it with **WordPress.com**, the managed hosting service run by Automattic: here we're talking about **WordPress.org**, the software you install yourself.

### How it works

- **Core**: handles users, content (posts, pages, media), menus and permalinks.
- **Block editor (Gutenberg)**: content is built from blocks (text, images, columns, buttons). With **block themes** and *Full Site Editing*, headers, footers and templates are edited in the editor too.
- **Themes**: define the look. They're customised with a *child theme* so changes survive updates.
- **Plugins**: add features. There are tens of thousands in the official directory.
- **Hooks**: the system of *actions* and *filters* that lets themes and plugins plug into the core without modifying it.
- **API**: content can also be read by other systems, so WordPress can act as the "content store" for a site or app built with other technologies (*headless* mode).

### Typical use cases

- **Company and service websites** that the client wants to update on their own.
- **Blogs and magazines**, including many authors and editorial roles.
- **Ecommerce** with **WooCommerce**, especially when the shop is part of a content-rich site.
- **Multilingual sites** with plugins such as WPML or Polylang.
- **Memberships and online courses** (with dedicated subscription and LMS plugins).
- **Headless backend**: editors keep the admin they know, the frontend is built in Next.js or Astro.
- **Networks of sites** with *WordPress Multisite*, for example one site per location or brand.

### Advantages

- **Free and open source**: no licence, no lock-in. Your data is yours.
- **A vast ecosystem**: for almost any need there's already a plugin or theme.
- **Easy for editors**: lots of people already know it, so training is minimal.
- **Plenty of developers and hosting options** at every price point.
- **Solid SEO**, with mature plugins like Yoast or Rank Math.
- **Extremely flexible**: with custom post types and custom fields (ACF) it becomes a CMS for structured data.

### Disadvantages

- **Security**: being the most popular CMS, it's also the most attacked. Core, themes and plugins must be kept up to date; most vulnerabilities come from third-party plugins.
- **Performance**: heavy themes and too many plugins slow the site down. You need caching, good hosting and discipline.
- **Uneven plugin quality**: compatibility, support and code aren't always up to standard. An update can break things.
- **Technical debt**: after years of plugins added "just this once", sites become hard to maintain.
- **Maintenance is on you**: backups, updates and monitoring aren't done by anyone else (unless you pay for managed hosting).

### Comparison with alternatives

| | WordPress | Shopify | Strapi / Contentful | Webflow | Jekyll / Astro |
| --- | --- | --- | --- | --- | --- |
| Type | Traditional open source CMS | SaaS ecommerce platform | Headless CMS | SaaS site builder | Static site generators |
| Hosting | Your responsibility | Included | Self-hosted / SaaS | Included | Any static host |
| Visual editor | Yes (blocks) | Yes (sections) | No, content only | Yes, very advanced | No |
| Ecommerce | With WooCommerce | Native, complete | Must be integrated | Basic | Must be integrated |
| Maintenance | Medium-high | Minimal | Medium / minimal | Minimal | Minimal |
| Best for | Content sites and SMBs | Selling online | Multichannel content | Polished marketing sites | Fast, secure sites |

- **WordPress vs Shopify**: if the heart of the project is selling, Shopify is sturdier and needs less maintenance. If the heart is content and the shop is secondary, WordPress + WooCommerce may be enough.
- **WordPress vs headless CMSs**: Strapi and Contentful separate content from presentation and suit multiple channels (site, app) better. WordPress is quicker to start and editors already know it. A middle ground is running WordPress headless.
- **WordPress vs Webflow**: Webflow gives more visual control and less maintenance, but it's a closed service with recurring costs and a smaller ecosystem.
- **WordPress vs static sites**: for a site that rarely changes, a static generator is faster, safer and almost free to host, but whoever updates content must be comfortable with Markdown and Git (or a headless CMS).

### When to choose it (and when not)

**Yes**, for content sites, blogs and company websites the client wants to run on their own, when you need a broad ecosystem on a modest budget, and when someone will take care of updates.

**No**, if the project is mainly an ecommerce that needs to scale (Shopify is better), if content must feed several channels (a headless CMS is better), or if nobody will maintain it: an abandoned WordPress quickly becomes a security problem.
