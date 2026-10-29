---
title: "Shopify themes: a guide for store owners"
date: 2026-10-29 09:00:00 +0100
categories: Ecommerce
related: [dawn-horizon, shopify, shopify-releases]
reading_time: 13
---

The theme decides how your store looks, but also how fast it loads, how much you can change on your own and how much every change will cost you over the coming years. Yet many merchants pick one by looking only at the demo.

This article is for people who run a Shopify store without being developers. It explains how a theme is built, what **sections** and **blocks** are, how fonts and colours work, when it makes sense to buy a theme, when to have it customised and what is worth leaving to a developer.

### What a theme is

A theme is the set of files Shopify uses to build your store's pages: home, product, collection, cart, blog, information pages. Products, orders, customers and prices are **not** in the theme: they live in the admin. You can switch themes without losing your catalogue.

Two important things the theme does **not** control:

- **checkout**: it is customised from the checkout settings (logo, colours, fonts) and, for deeper changes, with apps and extensions. It does not depend on the theme;
- **notification emails** for order confirmation and shipping: you edit them under *Settings → Notifications*.

A store can hold up to **20 themes** in its library, but **only one is published**. The others are copies you can work on and preview without customers seeing them.

### How it is built: the structure of a theme

You do not need to open the code, but knowing what is inside helps you understand what you can ask for and what it costs. A modern theme (Online Store 2.0) has these folders:

| Folder | What it holds | Who touches it |
|---|---|---|
| `layout/` | The frame shared by every page (HTML head, loading of styles and scripts) | Developer |
| `templates/` | One file per page type (product, collection, page…): the list of sections and their settings | **You, from the editor** (usually without knowing it) |
| `sections/` | The large building blocks of a page: banner, product grid, testimonials | Developer builds them, you use them |
| `blocks/` | The small building blocks: text, button, image, price | Developer builds them, you use them |
| `snippets/` | Reused pieces of code (for example the product card) | Developer |
| `assets/` | CSS, JavaScript, icons, uploaded fonts | Developer |
| `config/` | The **theme settings** (colours, fonts, buttons) and the values you chose | You from the editor; the developer defines the list |
| `locales/` | Interface text in each language ("Add to cart", "Sold out") | You, with *Edit default theme content* or the Translate & Adapt app |

The theme language is called **Liquid**: HTML with placeholders that Shopify fills with your store's data (product name, price, images).

The rule to remember: **everything you do in the editor is saved as a setting**, not as code. That is why it is safe and reversible. Code changes are a different matter, as we will see when we talk about updates.

### Sections

A **section** is a horizontal band of the page: an image banner, a grid of featured products, a row of logos, an FAQ. In the editor (*Online Store → Themes → Customize*) you see them listed in the left column and you can:

- add, remove, reorder or temporarily hide them;
- change their settings: text, images, colours, spacing, number of products;
- use the same section several times on one page with different content.

Each page can hold up to **25 sections**. Header and footer are **section groups**: they appear on every page and you edit them once (announcement bar, menu, footer newsletter).

What you **cannot** do with a section: change its structure beyond what the developer planned. If the "image with text" section has no "video instead of image" option, you cannot add one from the editor.

### Blocks

**Blocks** are the elements inside a section: in a banner, the heading, the subheading and the two buttons are three blocks. You can add, remove and reorder them. A section can hold up to **50**.

There are several kinds of blocks, and it helps to tell them apart:

- **section blocks**: they exist only inside that section. This is the model of older themes such as Dawn;
- **theme blocks**: defined once and usable in every section that accepts them, even nested inside each other (a group containing two columns containing an image and text). This is the model of **Horizon** and the newest themes, and it gives you far more freedom to compose pages;[^horizon]
- **static blocks**: fixed in place by the developer. You can configure them but not move or delete them. They protect critical parts, for example the "add to cart" button;
- **app blocks**: blocks added by apps (reviews, payment badges, shipping estimates). You insert them from the editor like any other block, without touching code. There are also **app embeds**, which do not sit in a specific spot but run across the whole site (a chat, a cookie banner); you turn them on under *Theme settings → App embeds*.

If you buy a theme today, ask (or check in the demo) whether it supports theme blocks and nested groups: it is the difference between "I reorder what is there" and "I build the page I need".

### Templates: different pages for different products

Every page type has a **template**. You can create more than one: for example a "standard" product template and a "bundle" one, with different sections. Then you assign the template to the product from its page in the admin.

It is a powerful and often ignored tool: before asking for a custom page, check whether an alternative template is enough.

### Dynamic content: metafields

If each product has its own information (materials, care instructions, a size guide, a video), do not type it by hand in the editor. Create **metafields** (*Settings → Custom data*), fill them in on the product page and connect them to block settings with the **Connect dynamic source** button. One template then shows the right data for every product.

For structured, reusable content (authors, ingredients, store locations) there are **metaobjects**. They are the right way to manage content without duplicating it.

### Theme settings: colours and fonts

In the editor, the gear icon opens the **theme settings**: they apply to the whole site. The most important are colours and typography.

#### Colour schemes

Recent themes use **colour schemes**: named sets of colours (background, text, buttons, borders), for example "Light", "Dark", "Accent". Each section picks a scheme. Change a colour in the scheme and it changes everywhere that scheme is used.

Practical tip: define 3-4 schemes that match your brand and use only those. Picking colours by hand section by section leads to an inconsistent site that is hard to maintain.

#### Fonts

Typography settings usually have two or three roles: **headings**, **body**, sometimes **buttons** or **menu**. For each you pick a font from Shopify's **font picker**, which draws on a library provided by Shopify:

- **system** fonts (already on the customer's device): the fastest, nothing to download;
- **open source** fonts (many of the ones you know from Google Fonts) and some families with a **commercial licence** already included, hosted by Shopify.

What to know:

- **Your brand font is probably not there.** If you use a purchased (or custom-designed) font, the picker will not show it. A developer has to load it into the theme, and you need a valid **web licence**: a desktop licence for print and graphics is not enough.
- **Every weight is one more file.** Regular, medium, bold, italic: each one is downloaded. Two families with two weights each is a good limit.
- **Sizes** are usually set with a percentage scale (for example headings at 120%). Always check the result on mobile.
- **Alphabets and accents**: if you sell in languages with special characters (Polish, Czech, Greek), check that the font supports all of them.

### Buying a theme: when and how

In Shopify's **Theme Store** you find free themes (made by Shopify, such as Horizon and its variants) and paid themes from independent developers. The price is **one-off**, the licence covers one store, and updates are included.

A paid theme makes sense when:

- you need a feature that free themes lack or do poorly (complex mega menus, advanced filters, lookbooks, product pages with many variants, B2B, pre-orders);
- you want to launch quickly with a polished design without hiring a designer;
- you need **support**: the theme developer answers for problems in their code.

How to choose:

1. **Start from your catalogue, not the demo.** Demos have professional photos and 12 products. Think about yours: how many variants, how many photos, how much text, how many collections.
2. **Preview the theme** on your store with your own products. It is free with no time limit; you pay only when you publish.
3. **Check the demo's performance** with [PageSpeed Insights](https://pagespeed.web.dev/), especially on mobile.
4. **Read recent reviews** and look at the date of the last update: a theme untouched for a year is a warning sign.
5. **Check the apps you use** (reviews, subscriptions, filters): do they work with the theme? Do they have app blocks?
6. **Be wary of themes sold outside the Theme Store.** Theme Store themes go through Shopify's review for quality, accessibility and performance; themes downloaded elsewhere do not, and sometimes contain poor code or worse.

### What you can do yourself

With the editor and the admin, without touching code, you can do much more than people think:

- compose and reorder sections and blocks on every page;
- create alternative templates for products, collections and pages;
- set colours, fonts, button style, favicon, logo;
- edit menus, header, footer, announcement bar;
- change interface text (*Edit default theme content* or Translate & Adapt) and translate the store;
- connect metafields and metaobjects to blocks;
- add and configure app blocks from installed apps;
- prepare a redesign on an **unpublished copy** and preview it before publishing.

Three habits that prevent almost every problem:

- **Duplicate the theme before major changes** (*Actions → Duplicate*). It is your backup.
- **Work on a copy** and publish when you are done; do not edit the live theme during a campaign.
- **Check on mobile**: most customers buy from their phone. The editor has a mobile preview at the top.

#### Be careful with "Custom Liquid" and "Edit code"

Many themes have a **Custom Liquid** section where you can paste code. It is handy for a tracking pixel or a small widget, but it is real code: if you copy a snippet from a forum you can break the page or slow it down. The same goes for **Edit code** in the theme menu. If you do not know what a line does, do not paste it into the published theme.

### Updates: why code should be touched with care

When the theme developer releases a new version, an update notice appears in the theme library. Shopify creates a **new copy** of the updated theme and carries over your editor **settings**.

**Code changes do not carry over.** If someone edited the theme's files, those changes do not move to the new version: they have to be redone by hand. The more the code has been changed, the more each update costs, until you stop updating and end up stuck on an old theme, with no fixes and none of Shopify's new features.

That is why a good developer, whenever possible, adds **new sections and blocks** instead of editing existing ones, and keeps a list of changes. Ask for it explicitly.

### What is worth giving to a developer

| Need | Yourself | Developer |
|---|---|---|
| Change text, images, order of sections | ✓ | |
| New pages using existing sections | ✓ | |
| Colours, library fonts, logo | ✓ | |
| Brand font with its own licence | | ✓ |
| A section or block the theme does not have | | ✓ |
| Showing custom data (metafields) where the theme does not support it | | ✓ |
| Product logic: bundles, personalisation, variant rules | | ✓ |
| Speed problems, scripts left behind by uninstalled apps | | ✓ |
| Integrations with external systems (ERP, PIM, CRM) | | ✓ |
| Accessibility and technical SEO (structured data, heading structure) | | ✓ |
| Fully custom theme | | ✓ |

Rule of thumb: **if the editor offers the option, it is yours; if you have to open the code, it belongs to the developer.** A good Shopify developer does not just "make the change work": they build it as a configurable section or block, so that afterwards you manage it from the editor.

### Bought, customised or custom-built?

| Situation | Choice |
|---|---|
| New store, small budget, simple catalogue | **Free theme** (Horizon or its variants) |
| You need a specific feature or a polished design right away | **Paid theme** from the Theme Store |
| The theme fits 80%, two or three things are missing | **Paid theme + custom sections** from a developer |
| Brand with a strong identity, agency design, special requirements | **Custom theme**, starting from a clean base |
| The current theme is full of edits, slow and no longer updatable | **Rebuild, do not patch**: new theme and migration |

A custom theme costs much more up front, but it is the right choice when the changes to a bought theme would be so many that it could no longer be updated. In that case you pay twice: first for the theme, then for whoever takes it apart.

<div class="tech" markdown="1">
<p class="eyebrow">Technical part · for developers</p>

#### A section's schema

Every section or block declares its settings in a `{% raw %}{% schema %}{% endraw %}` tag, in JSON. This schema is what generates the controls in the editor sidebar:

```json
{
  "name": "Banner",
  "settings": [
    { "type": "image_picker", "id": "image", "label": "Image" },
    { "type": "color_scheme", "id": "color_scheme", "label": "Color scheme", "default": "scheme-1" }
  ],
  "blocks": [{ "type": "@theme" }, { "type": "@app" }],
  "presets": [{ "name": "Banner" }]
}
```

Global settings live in `config/settings_schema.json` (definition) and `config/settings_data.json` (the merchant's chosen values). Fonts use the `font_picker` type, which returns a font object from Shopify's library. In Liquid you load it with the `font_face` filter:

```liquid
{% raw %}{{ settings.type_body_font | font_face: font_display: 'swap' }}{% endraw %}
```

A brand font is not in the library: it goes into `assets/` with its own `@font-face`, and it is worth replacing the `font_picker` with a `select` setting so the merchant is not shown a picker that has no effect.

To keep updates possible: new features in new files (`sections/`, `blocks/`, `snippets/`), edits to theme files kept to a minimum and documented, and the theme under version control with the GitHub integration or Shopify CLI.[^cli]
</div>

### In short

- The theme controls the look and experience of the store, **not** the catalogue, checkout or emails.
- **Sections** are the large building blocks of a page, **blocks** the small ones inside sections. Themes built on **theme blocks** (such as Horizon) let you compose much more.
- **Colours and fonts** are managed once in the theme settings. Shopify library fonts are ready to use; a brand font needs a developer and a web licence.
- **Preview themes with your own products** before buying, and prefer the Theme Store.
- Everything you do in the editor is safe and survives updates. **Code changes do not**: have them done by a developer who builds configurable sections and blocks.

[^horizon]: For the differences between the two reference themes see [Dawn and Horizon](/en/blog/dawn-horizon/).
[^cli]: Shopify.dev, [Theme architecture](https://shopify.dev/docs/storefronts/themes/architecture) and [Shopify CLI for themes](https://shopify.dev/docs/storefronts/themes/tools/cli).
