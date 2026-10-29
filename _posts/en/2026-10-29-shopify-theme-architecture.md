---
title: "Shopify themes: beyond sections and blocks, no architecture"
date: 2026-10-29 11:00:00 +0100
categories: Ecommerce
related: [dawn-horizon, shopify-themes-merchant, shopify-popular-themes]
reading_time: 8
audience: dev
---

If you work on Shopify themes written by someone else, sooner or later you notice something. Markup has a clear model: sections, blocks and snippets, each with its schema. **CSS and JavaScript** have nothing of the kind. Every theme organises styles and scripts its own way, and when you need to add a feature there is no standard to follow, only the habits of whoever wrote the theme.

I have never seen a Shopify theme that really follows the **7-1** pattern for styles or uses **BEM** consistently. I haven't seen one whose JavaScript modules are organised in a way you would recognise from one theme to the next, either. This article tries to explain why that happens and how to work with it without adding more mess.

{% raw %}
### What is standardised (and what is not)

Shopify has standardised **the part the merchant sees** very well:

- **sections** and **blocks** with a JSON `{% schema %}` the editor can read;
- reusable, nestable **theme blocks** (from Horizon onwards);
- **snippets** to reuse pieces of Liquid with `{% render %}`;
- **global settings** in `config/settings_schema.json`, **translations** in `locales/`.

That is a real component model, but it only covers **markup and configuration**. For styles and scripts the platform offers little:

- a **flat** `assets/` folder, with no subfolders;[^architecture]
- the `{% stylesheet %}` and `{% javascript %}` tags inside sections and blocks, which Shopify concatenates into a single file. They don't accept Liquid, and almost no theme uses them;[^tags]
- no build pipeline: Shopify serves files as they are. Sass support in themes was deprecated years ago.

Everything else (how to name classes, how to split files, how JavaScript components talk to each other) is up to whoever writes the theme.

### How the most popular themes handle it

**Dawn** has conventions, but they are its own:

- CSS split by file prefix: `base.css`, `component-*.css`, `section-*.css`, `template-*.css`. Each section loads the stylesheets it needs with `stylesheet_tag`;
- classes that are partly BEM-style (`.card__heading`, `.card--media`), mixed with utility classes (`.full-unstyled-link`, `.gradient`) and global colour schemes (`.color-scheme-1`);
- JavaScript built on **custom elements** (`class CartDrawer extends HTMLElement`), but without modules: everything is global, with files such as `global.js`, `constants.js` and a small shared pub/sub.

**Horizon** goes a step further: **ES modules** loaded through an import map, a shared base class for web components, and element references declared in the markup.[^horizon] It is the tidiest example Shopify has published, but it is still **Horizon's architecture**, not a platform standard. Themes built on it can follow it; the others don't.

**Paid themes** vary the most. Every author has their own system, often with a private build. The theme ships with a compiled, minified `theme.js` or `vendor.js` and no sources. Adding code there means writing "next to" an opaque bundle.

The practical result: if you move from a store on Dawn to one on a premium theme tomorrow, what you know about how the code is organised is almost useless.

### Why it happens

It isn't laziness on the part of theme developers. There are structural reasons.

**1. The theme's customer is the merchant, not the developer.** Theme Store requirements cover performance, accessibility, editor features and app compatibility. Nobody checks how the CSS or JavaScript is organised, because the merchant never sees it.

**2. The platform has no extension point.** WordPress has **child themes**: your code lives separately and survives updates to the parent theme. Shopify doesn't: to customise, you edit the theme's files, and when the author releases a new version your customisations have to be carried over by hand. If nobody extends the code cleanly, the theme author has no reason to design it for extension.

**3. Flat structure and no build.** With no subfolders in `assets/` and no official compile step, 7-1 or a module hierarchy can only exist **outside** the theme, with your own build. Many don't bother, and those who do don't ship the sources.

**4. The editor writes to the same repository.** `config/settings_data.json` and the JSON templates are changed by the merchant from the editor. The theme is shared between code and content, which discourages organising it like a proper software project.

### How to work with it without adding chaos

Since you can't change the theme, it pays to set rules for **your own** code. These are the ones I use.

**Follow the theme's conventions, not yours.** If the theme uses custom elements and `component-*.css` files, your component does the same. A second style inside the same theme is worse than a style you don't like.

**Use a prefix as a namespace.** Folders are flat, so a prefix is the only way to tell your files apart from the theme's:

```text
snippets/acme-size-guide.liquid
blocks/acme-size-guide.liquid
assets/acme-size-guide.css
assets/acme-size-guide.js
```

Use the same prefix for CSS classes (`.acme-size-guide`, `.acme-size-guide__table`) and custom elements (`<acme-size-guide>`). When a theme update arrives, you can see at once what is yours and what needs carrying over.

**A component brings its own files.** The block or section loads its own CSS and JS, instead of adding lines to `base.css` or `global.js`:

```liquid
{{ 'acme-size-guide.css' | asset_url | stylesheet_tag }}
<script src="{{ 'acme-size-guide.js' | asset_url }}" type="module" defer></script>

<acme-size-guide class="acme-size-guide">
  …
</acme-size-guide>
```

Fewer theme files touched means fewer conflicts at the next update.

**Leave the theme's global files alone if you can.** When you can't (a hook in `theme.liquid`, an event to emit from the cart), mark the change with a recognisable comment, for example `{% comment %} acme: … {% endcomment %}`, so a search finds it.

**Communicate through events, not globals.** If the theme exposes events (Dawn's pub/sub, Horizon's events), listen to those. For your own components, dispatch a `CustomEvent` on `document` with prefixed names (`acme:size-guide:open`) instead of reading or changing the theme's global objects.

**If you want 7-1 and modules, keep them outside the theme.** Put the sources in a separate folder (`src/styles/` with the 7-1 structure, `src/scripts/` with ES modules) and compile into `assets/` with esbuild or Vite, with flat, prefixed output. Two things to watch:

- add the sources folder to `.shopifyignore`, so Shopify CLI doesn't try to upload it;
- if you use the GitHub integration, remember that Shopify doesn't run builds: the compiled files must be committed, or generated by a CI job that publishes them.

**Write the rules down.** A `README` in the theme repository with the prefix, naming conventions, a list of the theme files you changed and the build command. It is the simplest thing to do and the one most often missing.
{% endraw %}

### In short

- Shopify has a clear component model for **markup and configuration** (sections, blocks, snippets, schema), but **no standard for CSS and JavaScript**.
- Every theme has its own architecture: home-grown conventions in Dawn, ES modules and web components in Horizon, private builds and minified code in many paid themes.
- The causes are structural: the customer is the merchant, there are no child themes, `assets/` is flat, there is no official build.
- Until the platform changes, you set the standard yourself: **the theme's conventions, a prefix as a namespace, self-contained components, events instead of globals, sources and build outside the theme, written rules**.

[^architecture]: Shopify.dev, [Theme architecture](https://shopify.dev/docs/storefronts/themes/architecture).
[^tags]: Shopify.dev, [stylesheet](https://shopify.dev/docs/api/liquid/tags/stylesheet) and [javascript](https://shopify.dev/docs/api/liquid/tags/javascript).
[^horizon]: [Shopify/horizon](https://github.com/Shopify/horizon) and [Shopify/dawn](https://github.com/Shopify/dawn) on GitHub.
