---
title: "Shopify themes: CSS and JavaScript architecture beyond sections and blocks"
date: 2026-10-29 11:00:00 +0100
categories: Ecommerce
related: [dawn-horizon, shopify-themes-merchant, shopify-popular-themes]
reading_time: 9
audience: dev
---

Anyone working on Shopify themes written by others soon notices an asymmetry. For markup, the platform offers a clear model: sections, blocks and snippets, each with its schema. For **CSS and JavaScript** it leaves much more freedom, and every theme uses it differently. When you need to add a feature, what you find is less a standard to follow and more the habits of whoever wrote the theme.

The **7-1** pattern for styles and consistent use of **BEM** are rare, and the way JavaScript modules are organised changes a lot from one theme to the next. This article looks at why that happens, what is good about it, what is missing, and how to write tidy code on a theme that doesn't enforce it.

{% raw %}
### What is standardised (and what is not)

Shopify has standardised **the part the merchant sees** very well:

- **sections** and **blocks** with a JSON `{% schema %}` the editor can read;
- reusable, nestable **theme blocks** (from Horizon onwards);
- **snippets** to reuse pieces of Liquid with `{% render %}`;
- **global settings** in `config/settings_schema.json`, **translations** in `locales/`.

That is a real component model, and it works well. It covers **markup and configuration**, though. For styles and scripts the platform provides few tools and no conventions:

- a **flat** `assets/` folder, with no subfolders;[^architecture]
- the `{% stylesheet %}` and `{% javascript %}` tags inside sections and blocks, which Shopify concatenates into a single file. They don't accept Liquid and are rarely used in the most popular themes;[^tags]
- no build pipeline: Shopify serves files as they are. Sass support in themes was deprecated years ago.

How to name classes, how to split files, how JavaScript components talk to each other: these decisions are left to whoever writes the theme.

### How the most popular themes handle it

**Dawn** has sensible conventions that are consistent within the theme:

- CSS split by file prefix: `base.css`, `component-*.css`, `section-*.css`, `template-*.css`. Each section loads the stylesheets it needs with `stylesheet_tag`;
- classes that are partly BEM-style (`.card__heading`, `.card--media`), alongside utility classes (`.full-unstyled-link`, `.gradient`) and global colour schemes (`.color-scheme-1`);
- JavaScript built on **custom elements** (`class CartDrawer extends HTMLElement`), without modules: files such as `global.js` and `constants.js` and a small shared pub/sub. Easy to read, even though everything lives in the global scope.

**Horizon** goes a step further: **ES modules** loaded through an import map, a shared base class for web components, and element references declared in the markup.[^horizon] It is the tidiest example Shopify has published and shows where things are heading. Still, it is Horizon's architecture, not a platform convention.

**Paid themes** vary the most. Every author has their own system, often with a private build, and sometimes the theme ships with an already compiled `theme.js` or `vendor.js`. That is an understandable choice for someone selling a product, but it makes things harder for whoever has to extend it.

In practice, moving from one theme to another, knowing how one is organised only partly helps with the next.

### The other side of the coin

This freedom has advantages too:

- **the barrier to entry is low.** HTML, CSS, JavaScript and Liquid are enough: no mandatory build, no framework to learn. Many theme developers started exactly this way;
- **Shopify doesn't impose fashions.** An official CSS or JS convention could age quickly, as happened with Sass. Relying on browser standards (custom elements, ES modules) is a choice that lasts;
- **authors can optimise.** Each theme can pick the loading strategy that suits its performance best, which matters more to the merchant than tidy code;
- **Horizon shows the ecosystem is moving** towards more modular structures, even without a written rule.

### Why it happens

The lack of a standard has structural reasons rather than anyone being at fault.

**1. The theme's customer is the merchant.** Theme Store requirements cover performance, accessibility, editor features and app compatibility. Those are the right priorities for whoever buys the theme; the internal organisation of the code comes second, because the merchant never sees it.

**2. There is no real extension point.** WordPress has **child themes**: custom code lives separately and survives updates to the parent theme. On Shopify you customise by editing the theme's files, and the customisations have to be carried over with every new version. Without an extension mechanism, designing code to be extended pays off less.

**3. Flat structure and no official build.** With no subfolders in `assets/` and no compile step, 7-1 or a module hierarchy can only exist **outside** the theme, with a build of your own. It is doable, but it is an extra cost not everyone chooses to pay.

**4. Code and content live together.** `config/settings_data.json` and the JSON templates are changed by the merchant from the editor. The theme is a shared object, which makes it less natural to treat it as a classic software project.

### What is missing

Shopify doesn't need to impose 7-1 or BEM. A few smaller changes would be enough:

- **subfolders in `assets/`**, or at least a recommended convention for keeping files in order;
- **official guidance** on naming and organising CSS and JS, even just as a recommendation, along the lines of what exists for accessibility;
- **a way to extend a theme without editing it**, something like child themes, which would make updates far less painful;
- **sources available** for paid themes, at least to licence holders.

### How to work with it in the meantime

Since you can't change the theme, it pays to set rules for **your own** code. They are a starting point, not the only possible answer.

**Follow the theme's conventions, not yours.** If the theme uses custom elements and `component-*.css` files, the new component does the same. Two different styles in the same theme are worse than a style you wouldn't have chosen.

**Use a prefix as a namespace.** Folders are flat, so a prefix is the simplest way to tell added files apart from the theme's:

```text
snippets/acme-size-guide.liquid
blocks/acme-size-guide.liquid
assets/acme-size-guide.css
assets/acme-size-guide.js
```

Same prefix for CSS classes (`.acme-size-guide`, `.acme-size-guide__table`) and custom elements (`<acme-size-guide>`). When a theme update arrives, you can see at once what was added and what needs carrying over.

**Each component brings its own files.** The block or section loads its own CSS and JS, instead of adding lines to `base.css` or `global.js`:

```liquid
{{ 'acme-size-guide.css' | asset_url | stylesheet_tag }}
<script src="{{ 'acme-size-guide.js' | asset_url }}" type="module" defer></script>

<acme-size-guide class="acme-size-guide">
  …
</acme-size-guide>
```

Fewer theme files touched, fewer conflicts at the next update.

**Touch the theme's global files only when needed.** When it can't be avoided (a hook in `theme.liquid`, an event to emit from the cart), mark the change with a recognisable comment, for example `{% comment %} acme: … {% endcomment %}`, so a search finds it.

**Communicate through events.** If the theme exposes events (Dawn's pub/sub, Horizon's events), listen to those. For new components, dispatch a `CustomEvent` on `document` with prefixed names (`acme:size-guide:open`), instead of reading or changing the theme's global objects.

**Keep 7-1 and modules outside the theme.** Sources live in a separate folder (`src/styles/` with the 7-1 structure, `src/scripts/` with ES modules) and compile into `assets/` with esbuild or Vite, with flat, prefixed output. Two things to watch:

- the sources folder goes in `.shopifyignore`, so Shopify CLI doesn't try to upload it;
- with the GitHub integration, Shopify doesn't run builds: compiled files must be committed, or generated by a CI job that publishes them.

**Write the rules down.** A `README` in the theme repository with the prefix, naming conventions, the list of changed theme files and the build command. It is the simplest thing to do, and it helps whoever works on the theme next.
{% endraw %}

### In short

- Shopify has a clear component model for **markup and configuration**, while for **CSS and JavaScript** it leaves almost complete freedom.
- Every theme uses that freedom its own way: home-grown conventions in Dawn, ES modules and web components in Horizon, private builds in many paid themes.
- The freedom has real advantages (low barrier, no imposed framework, room to optimise), but it makes extending other people's themes harder.
- The causes are structural: focus on the merchant, no child themes, a flat `assets/`, no official build.
- Until the platform offers a few more conventions, the useful rules are: **the theme's conventions, a prefix as a namespace, self-contained components, events instead of globals, sources and build outside the theme, written rules**.

[^architecture]: Shopify.dev, [Theme architecture](https://shopify.dev/docs/storefronts/themes/architecture).
[^tags]: Shopify.dev, [stylesheet](https://shopify.dev/docs/api/liquid/tags/stylesheet) and [javascript](https://shopify.dev/docs/api/liquid/tags/javascript).
[^horizon]: [Shopify/horizon](https://github.com/Shopify/horizon) and [Shopify/dawn](https://github.com/Shopify/dawn) on GitHub.
