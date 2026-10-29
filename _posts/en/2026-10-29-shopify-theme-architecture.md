---
title: "Shopify themes and code architecture: a point of view"
date: 2026-10-29 11:00:00 +0100
categories: Ecommerce
related: [dawn-horizon, shopify-themes-merchant, shopify-popular-themes]
reading_time: 9
audience: dev
---

Working on Shopify themes written by others, there is something I notice often. For markup, the platform offers a clear model: sections, blocks and snippets, each with its schema. For **CSS and JavaScript** it leaves much more freedom, and every theme uses it differently. When I need to add a feature, what I find is less a standard to follow and more the habits of whoever wrote the theme.

In the themes I have worked on, I have rarely found the **7-1** pattern for styles or consistent use of **BEM**, and the way JavaScript modules are organised changes a lot from one theme to the next. I admit it sometimes frustrates me. This article is a personal point of view: I try to understand why things are this way, what is good about it, what I would like to see, and how I work in the meantime.

{% raw %}
### What is standardised (and what is not)

Shopify has standardised **the part the merchant sees** very well:

- **sections** and **blocks** with a JSON `{% schema %}` the editor can read;
- reusable, nestable **theme blocks** (from Horizon onwards);
- **snippets** to reuse pieces of Liquid with `{% render %}`;
- **global settings** in `config/settings_schema.json`, **translations** in `locales/`.

That is a real component model, and it works well. It covers **markup and configuration**, though. For styles and scripts the platform provides few tools and no conventions:

- a **flat** `assets/` folder, with no subfolders;[^architecture]
- the `{% stylesheet %}` and `{% javascript %}` tags inside sections and blocks, which Shopify concatenates into a single file. They don't accept Liquid and, in my experience, are rarely used;[^tags]
- no build pipeline: Shopify serves files as they are. Sass support in themes was deprecated years ago.

How to name classes, how to split files, how JavaScript components talk to each other: these decisions are left to whoever writes the theme.

### How the most popular themes handle it

**Dawn** has sensible conventions that are consistent within the theme:

- CSS split by file prefix: `base.css`, `component-*.css`, `section-*.css`, `template-*.css`. Each section loads the stylesheets it needs with `stylesheet_tag`;
- classes that are partly BEM-style (`.card__heading`, `.card--media`), alongside utility classes (`.full-unstyled-link`, `.gradient`) and global colour schemes (`.color-scheme-1`);
- JavaScript built on **custom elements** (`class CartDrawer extends HTMLElement`), without modules: files such as `global.js` and `constants.js` and a small shared pub/sub. Easy to read, even though everything lives in the global scope.

**Horizon** goes a step further: **ES modules** loaded through an import map, a shared base class for web components, and element references declared in the markup.[^horizon] It is the tidiest example Shopify has published and, I think, a sign of where things are heading. Still, it is Horizon's architecture, not a platform convention.

**Paid themes** vary the most. Every author has their own system, often with a private build, and sometimes the theme ships with an already compiled `theme.js` or `vendor.js`. That is an understandable choice for someone selling a product, but it makes things harder for whoever has to extend it.

In practice, when I move from one theme to another, what I learned about how one is organised only partly helps with the next.

### The other side of the coin

Before criticising, it is fair to say this freedom has advantages too:

- **the barrier to entry is low.** HTML, CSS, JavaScript and Liquid are enough: no mandatory build, no framework to learn. Many theme developers started exactly this way;
- **Shopify doesn't impose fashions.** An official CSS or JS convention could age quickly, as happened with Sass. Relying on browser standards (custom elements, ES modules) is a choice that lasts;
- **authors can optimise.** Each theme can pick the loading strategy that suits its performance best, which matters more to the merchant than tidy code;
- **Horizon shows the ecosystem is moving** towards more modular structures, even without a written rule.

### Why I think it happens

That said, I believe the lack of a standard has structural reasons rather than anyone being at fault.

**1. The theme's customer is the merchant.** Theme Store requirements cover performance, accessibility, editor features and app compatibility. Those are the right priorities for whoever buys the theme; the internal organisation of the code comes second, because the merchant never sees it.

**2. There is no real extension point.** WordPress has **child themes**: custom code lives separately and survives updates to the parent theme. On Shopify you customise by editing the theme's files, and the customisations have to be carried over with every new version. Without an extension mechanism, designing code to be extended pays off less.

**3. Flat structure and no official build.** With no subfolders in `assets/` and no compile step, 7-1 or a module hierarchy can only exist **outside** the theme, with a build of your own. It is doable, but it is an extra cost not everyone chooses to pay.

**4. Code and content live together.** `config/settings_data.json` and the JSON templates are changed by the merchant from the editor. The theme is a shared object, which makes it less natural to treat it as a classic software project.

### What I would like to see

Shopify doesn't need to impose 7-1 or BEM. A few smaller things would be enough for me:

- **subfolders in `assets/`**, or at least a recommended convention for keeping files in order;
- **official guidance** on naming and organising CSS and JS, even just as a recommendation, along the lines of what exists for accessibility;
- **a way to extend a theme without editing it**, something like child themes, which would make updates far less painful;
- **sources available** for paid themes, at least to licence holders.

### How I work in the meantime

Since I can't change the theme, I set rules for **my own** code. They are the ones that work for me, not the only possible ones.

**I follow the theme's conventions, not mine.** If the theme uses custom elements and `component-*.css` files, my component does the same. Two different styles in the same theme seem worse to me than a style I wouldn't have chosen.

**I use a prefix as a namespace.** Folders are flat, so a prefix is the simplest way to tell my files apart from the theme's:

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

**I touch the theme's global files only when needed.** When it can't be avoided (a hook in `theme.liquid`, an event to emit from the cart), I mark the change with a recognisable comment, for example `{% comment %} acme: … {% endcomment %}`, so a search finds it.

**I communicate through events.** If the theme exposes events (Dawn's pub/sub, Horizon's events), I listen to those. For my own components I dispatch a `CustomEvent` on `document` with prefixed names (`acme:size-guide:open`), instead of reading or changing the theme's global objects.

**If I want 7-1 and modules, I keep them outside the theme.** Sources live in a separate folder (`src/styles/` with the 7-1 structure, `src/scripts/` with ES modules) and I compile them into `assets/` with esbuild or Vite, with flat, prefixed output. Two things to watch:

- the sources folder goes in `.shopifyignore`, so Shopify CLI doesn't try to upload it;
- with the GitHub integration, Shopify doesn't run builds: compiled files must be committed, or generated by a CI job that publishes them.

**I write the rules down.** A `README` in the theme repository with the prefix, naming conventions, the list of theme files I changed and the build command. It is the simplest thing to do, and it helps whoever works on the theme after me.
{% endraw %}

### In short

- Shopify has a clear component model for **markup and configuration**, while for **CSS and JavaScript** it leaves almost complete freedom.
- Every theme uses that freedom its own way: home-grown conventions in Dawn, ES modules and web components in Horizon, private builds in many paid themes.
- The freedom has real advantages (low barrier, no imposed framework, room to optimise), but it makes extending other people's themes harder.
- In my view the causes are structural: focus on the merchant, no child themes, a flat `assets/`, no official build.
- Until the platform offers a few more conventions, my approach is: **the theme's conventions, a prefix as a namespace, self-contained components, events instead of globals, sources and build outside the theme, written rules**.

If you work on Shopify themes and have found a better way to organise the code, I would like to hear about it.

[^architecture]: Shopify.dev, [Theme architecture](https://shopify.dev/docs/storefronts/themes/architecture).
[^tags]: Shopify.dev, [stylesheet](https://shopify.dev/docs/api/liquid/tags/stylesheet) and [javascript](https://shopify.dev/docs/api/liquid/tags/javascript).
[^horizon]: [Shopify/horizon](https://github.com/Shopify/horizon) and [Shopify/dawn](https://github.com/Shopify/dawn) on GitHub.
