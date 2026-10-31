---
title: "A robust mega menu on Shopify: objects, not string comparisons"
date: 2026-10-31 18:00:00 +0100
categories: Ecommerce
related: [shopify-theme-architecture, dawn-horizon, shopify-popular-themes]
reading_time: 12
audience: dev
---

The mega menu is one of the most requested components in a Shopify theme, and one of the most fragile. Many implementations, paid themes included, decide which panel to show by **comparing a menu item's title with a string** typed into the theme settings. It works on launch day; then someone renames "Women" to "Women & Accessories", or enables a second language, and the panel disappears without an error.

This article describes a different architecture: each mega menu item is a **theme block** that owns its data as **real objects**, namely a navigation menu (`link_list`) for the columns and nested blocks for the banners. No item is looked up by name, so there is nothing to keep in sync.

### The pattern to avoid

The most common version looks like this: the main menu comes from Navigation, the panels are header section blocks with a "Menu item title" text field, and the code pairs them at runtime.

{% raw %}
```liquid
{%- for link in linklists['main-menu'].links -%}
  {%- assign title = link.title | downcase | strip -%}
  <li>
    <a href="{{ link.url }}">{{ link.title }}</a>
    {%- for block in section.blocks -%}
      {%- assign target = block.settings.menu_item | downcase | strip -%}
      {%- if target == title -%}
        {% render 'mega-panel', block: block, link: link %}
      {%- endif -%}
    {%- endfor -%}
  </li>
{%- endfor -%}
```
{% endraw %}

The problem is not the syntax but the model:

- **The link is a string copied in two places.** The title lives in Navigation, its copy in the theme editor. Whoever edits one has no way of knowing the other exists.
- **Translations break it.** With Translate & Adapt the link title and the block text are translated separately. A single difference in one language (an accent, a capital letter, a synonym) and the panel disappears in that market only.
- **It fails silently.** No error, no warning in the editor: the item just becomes a plain link. The problem surfaces when a customer reports it.
- **`link.handle` does not help.** It is the title turned into a handle, so it changes with the title and has the same limits.
- **`linklists['main-menu']` is a string too.** If the menu is duplicated or renamed, the header goes empty.
- **Quadratic cost.** Every item scans every block. With ten items it is negligible, but it is a symptom of data living in the wrong place.

Normalising strings with `downcase` and `strip` softens some cases, but two independent values still have to be kept identical by hand.

### The object model

The idea is to invert the dependency: instead of starting from the menu and searching for the right panel, start from the **block**, which already holds everything it needs.

{% include diagrams/mega-menu-model.html %}

Each top-level item is a block with:

- the item's **label and link**;
- a **`link_list`** setting, i.e. a reference to a menu created in Navigation. The menu's first level becomes the column headings, the second level the links;
- zero or more **nested banner blocks**, each with image, text and link.

Merchants manage links where they always do, in Navigation, with Translate & Adapt for translations. In the theme editor they pick the menu from a selector and upload images: no text to retype identically. If they rename the menu or an item, the reference stays valid, because it points to the object, not to the name.

The price is one Navigation menu per panel ("Mega · Women", "Mega · Men", …). In return each panel is independent, can be reordered by dragging its block, and can be built, previewed and published without touching the others.

{% raw %}
### File structure

With **theme blocks** (the `blocks/` folder introduced with Horizon) each piece has its own file and schema:[^blocks]

```text
sections/header.liquid
blocks/_mega-menu-item.liquid
blocks/_mega-menu-banner.liquid
assets/mega-menu.css
assets/mega-menu.js
```

The leading underscore makes the blocks **private**: they appear only where a section or block declares them explicitly, not in the editor's general picker. That is the point: a mega menu banner makes no sense outside the mega menu.

### The header section

The section only declares which blocks it accepts and loads the component's CSS and JavaScript:

```liquid
{{ 'mega-menu.css' | asset_url | stylesheet_tag }}
<script src="{{ 'mega-menu.js' | asset_url }}" type="module" defer></script>

<nav class="mega-menu" aria-label="{{ 'general.navigation' | t }}">
  <mega-menu>
    <ul class="mega-menu__list">
      {% content_for 'blocks' %}
    </ul>
  </mega-menu>
</nav>

{% schema %}
{
  "name": "Header",
  "blocks": [{ "type": "_mega-menu-item" }]
}
{% endschema %}
```

There is no loop over the menu and no comparison: `content_for 'blocks'` renders the blocks in the order set in the editor.

### The item block

This is the core of the component. The schema declares the data as Shopify types, not free text:

```liquid
{% schema %}
{
  "name": "Mega menu item",
  "settings": [
    { "type": "text", "id": "label", "label": "Label" },
    { "type": "url", "id": "link", "label": "Item link" },
    { "type": "link_list", "id": "menu", "label": "Column menu",
      "info": "First level = columns, second level = links" },
    { "type": "range", "id": "columns", "label": "Columns per row",
      "min": 2, "max": 6, "step": 1, "default": 4 }
  ],
  "blocks": [{ "type": "_mega-menu-banner" }],
  "presets": [{ "name": "Mega menu item" }]
}
{% endschema %}
```

The markup follows the **disclosure navigation** pattern: the item link goes to the category page, a separate button opens the panel.[^apg] The item stays navigable without JavaScript and the button has a single job.

```liquid
{%- liquid
  assign menu = block.settings.menu
  assign panel_id = 'MegaPanel-' | append: block.id
  assign has_panel = false
  if menu.links.size > 0 or block.blocks.size > 0
    assign has_panel = true
  endif

  assign active = false
  for column in menu.links
    if column.active or column.child_active
      assign active = true
      break
    endif
  endfor
-%}

<li class="mega-menu__item" data-mega-item {{ block.shopify_attributes }}>
  <a class="mega-menu__link"
     href="{{ block.settings.link | default: '#' }}"
     {% if active %}aria-current="true"{% endif %}>
    {{- block.settings.label | escape -}}
  </a>

  {%- if has_panel -%}
    <button class="mega-menu__toggle" type="button"
            aria-expanded="false" aria-controls="{{ panel_id }}"
            data-mega-toggle hidden>
      <span class="visually-hidden">{{ block.settings.label | escape }}</span>
      {{- 'icon-caret.svg' | inline_asset_content -}}
    </button>

    <div class="mega-menu__panel" id="{{ panel_id }}"
         style="--mega-columns: {{ block.settings.columns }}">
      <div class="mega-menu__columns">
        {%- for column in menu.links -%}
          <div class="mega-menu__column">
            <a class="mega-menu__heading" href="{{ column.url }}"
               {% if column.current %}aria-current="page"{% endif %}>
              {{- column.title | escape -}}
            </a>
            {%- if column.links.size > 0 -%}
              <ul class="mega-menu__links">
                {%- for child in column.links -%}
                  <li>
                    <a class="mega-menu__sublink" href="{{ child.url }}"
                       {% if child.current %}aria-current="page"{% endif %}>
                      {{- child.title | escape -}}
                    </a>
                  </li>
                {%- endfor -%}
              </ul>
            {%- endif -%}
          </div>
        {%- endfor -%}
      </div>

      {%- if block.blocks.size > 0 -%}
        <div class="mega-menu__banners">{% content_for 'blocks' %}</div>
      {%- endif -%}
    </div>
  {%- endif -%}
</li>
```

A few details that make the difference:

- **Active state comes from Shopify.** `link.active`, `link.child_active` and `link.current` are computed by the platform for the current page.[^link] There is no need to compare `request.path` with URLs by hand.
- **The panel exists only if it has content.** A block with no menu and no banners becomes a plain link, with no button opening an empty panel.
- **Ids derive from `block.id`**, which is stable and unique: no ids built with `handleize` on the label.
- **The column count is a setting** passed as a custom property, not a class to pick among `cols-3`, `cols-4`, ….
- **`block.shopify_attributes`** on the root element lets the editor select the block by clicking it in the preview.

### The banner block

Each banner is a nested block with its own data. The image is an `image` object, so Shopify generates the size variants by itself:

```liquid
{%- assign image = block.settings.image -%}
{%- assign alt = image.alt | default: block.settings.heading -%}
<a class="mega-banner" href="{{ block.settings.link | default: '#' }}" {{ block.shopify_attributes }}>
  {%- if image -%}
    {{ image | image_url: width: 800 | image_tag:
       widths: '300, 400, 600, 800',
       sizes: '(min-width: 990px) 25vw, 100vw',
       loading: 'lazy',
       class: 'mega-banner__image',
       alt: alt }}
  {%- elsif request.design_mode -%}
    {{ 'image' | placeholder_svg_tag: 'mega-banner__image' }}
  {%- endif -%}
  {%- if block.settings.heading != blank -%}
    <span class="mega-banner__heading">{{ block.settings.heading | escape }}</span>
  {%- endif -%}
</a>

{% schema %}
{
  "name": "Banner",
  "settings": [
    { "type": "image_picker", "id": "image", "label": "Image" },
    { "type": "text", "id": "heading", "label": "Heading" },
    { "type": "url", "id": "link", "label": "Link" }
  ],
  "presets": [{ "name": "Banner" }]
}
{% endschema %}
```

`loading: 'lazy'` matters more than usual here: without it, every page of the store would download the images of every panel. It only works if the closed panel is hidden with `display: none`: the browser does not fetch a lazy image until its container is shown. With `visibility: hidden` or `opacity: 0` the image still takes up space below the header, counts as in the viewport and is downloaded straight away.

The placeholder appears only in `request.design_mode`: in the editor the merchant sees where the image will go, on the storefront a banner without an image shows only its heading.

### Behaviour

JavaScript does not decide **what** to show, because that is already in the markup. It only handles **when**: opening on click and hover, closing on Esc or when leaving the menu, keeping `aria-expanded` in sync. A custom element is enough:

```js
class MegaMenu extends HTMLElement {
  connectedCallback() {
    this.toggles = [...this.querySelectorAll('[data-mega-toggle]')];

    for (const toggle of this.toggles) {
      const item = toggle.closest('[data-mega-item]');
      toggle.hidden = false;
      toggle.addEventListener('click', () => this.toggle(toggle));
      // Short delay so panels don't flash while the pointer crosses the bar.
      item.addEventListener('pointerenter', (e) => {
        if (e.pointerType === 'mouse') this.timer = setTimeout(() => this.open(toggle), 100);
      });
      item.addEventListener('pointerleave', (e) => {
        if (e.pointerType !== 'mouse') return;
        clearTimeout(this.timer);
        this.close(toggle);
      });
    }

    this.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      const open = this.querySelector('[data-mega-toggle][aria-expanded="true"]');
      if (open) { this.close(open); open.focus(); }
    });

    // Moving focus to another item, or out of the menu, closes the open panel.
    this.addEventListener('focusin', (e) => this.closeAll(this.toggleOf(e.target)));
    this.addEventListener('focusout', (e) => !this.contains(e.relatedTarget) && this.closeAll());

    // Theme editor: selecting a block (or a banner inside it) opens its panel.
    document.addEventListener('shopify:block:select', (e) => {
      const toggle = this.toggleOf(e.target);
      if (toggle) this.open(toggle);
    });
    document.addEventListener('shopify:block:deselect', () => this.closeAll());
  }

  toggleOf(el) {
    return el.closest?.('[data-mega-item]')?.querySelector('[data-mega-toggle]') ?? null;
  }

  open(toggle) {
    this.closeAll(toggle);
    toggle.setAttribute('aria-expanded', 'true');
  }

  close(toggle) {
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle(toggle) {
    toggle.getAttribute('aria-expanded') === 'true' ? this.close(toggle) : this.open(toggle);
  }

  closeAll(except = null) {
    for (const t of this.toggles) if (t !== except) this.close(t);
  }
}

customElements.define('mega-menu', MegaMenu);
```

Two choices worth noting:

- **State lives in `aria-expanded`.** No `is-open` class to keep aligned: CSS reads the same attribute screen readers read, so the two cannot drift apart.
- **Editor events** (`shopify:block:select`) open the panel when the merchant selects a block or a banner in the sidebar.[^editor] Without them, editing a panel would mean keeping the mouse over the item while changing settings.

### The essential CSS

The panel opens when the button before it has `aria-expanded="true"`. Before the custom element is registered, i.e. without JavaScript or while it loads, `:not(:defined)` enables a fallback based on `:hover` and `:focus-within`:

```css
.mega-menu__list { display: flex; gap: 1.5rem; position: relative; }

.mega-menu__panel {
  display: none;
  position: absolute;
  inset-inline: 0;
  top: 100%;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  padding: 2rem;
  background: rgb(var(--color-background));
}

.mega-menu__toggle[aria-expanded="true"] + .mega-menu__panel,
mega-menu:not(:defined) .mega-menu__item:is(:hover, :focus-within) > .mega-menu__panel {
  display: grid;
}

.mega-menu__columns {
  display: grid;
  grid-template-columns: repeat(var(--mega-columns, 4), minmax(0, 1fr));
  gap: 1.5rem;
}

.mega-menu__banners { display: grid; grid-auto-flow: column; gap: 1rem; }

@media (max-width: 989px) {
  .mega-menu__list { flex-direction: column; }
  .mega-menu__panel { position: static; grid-template-columns: 1fr; }
  .mega-menu__columns { grid-template-columns: 1fr; }
}
```

The closed panel uses `display: none` rather than `visibility: hidden`, for the reason above: it is what keeps the banners' lazy images from loading. The 100 ms delay on pointer enter, in the JavaScript, stops panels from flashing while the pointer crosses the bar on its way elsewhere. Below 990px the same markup becomes an accordion inside the drawer: one HTML, no second copy of the menu for mobile.

### Accessibility, briefly

- The item link **navigates**, the button **opens**: no links that sometimes navigate and sometimes don't.
- The button has `aria-expanded`, `aria-controls` and an accessible name (the item label).
- **Esc** closes the panel and returns focus to the button; tabbing out closes it.
- No `role="menu"` or `role="menuitem"`: they are meant for application menus and impose arrow-key navigation that website users do not expect.[^apg]
- `aria-current` on active items, computed by Shopify.

### When to use metaobjects

Metaobjects are the other way to model a mega menu as objects: a `mega_menu_panel` definition with fields for the link, the columns and the banners, picked in the section with a `metaobject_list` setting.[^metaobject] There is, however, no metafield type that points to a Navigation menu, so the columns must in turn be modelled as metaobjects with lists of links.

| Need | Solution |
|---|---|
| One theme, menu managed by the store team | **Theme blocks + `link_list`** |
| The same menu across themes, a headless site or an app | **Metaobjects** |
| A menu that changes per market or customer segment | **Metaobjects**, with one reference per market |
| Banners that also appear outside the menu (home, collections) | **Metaobjects** reused across sections |

Either way the principle is the same: a panel is data with an identity, not a string that has to match another string.
{% endraw %}

### Summary

- Choosing which panel to show by **comparing titles** ties two independent values with a manual copy: it breaks on a rename or a translation, and without errors.
- The object model starts from the **block**: each mega menu item holds a `link_list` reference for the columns and **nested banner blocks** for the images.
- **Private theme blocks** (`_mega-menu-item`, `_mega-menu-banner`) keep each piece's schema, markup and data in its own file.
- **Active state** comes from `link.active`, `link.child_active` and `link.current`; **ids** from `block.id`; **images** from `image_tag` with `loading: 'lazy'`.
- **JavaScript** only opens and closes, with state in `aria-expanded`; without JavaScript the menu stays navigable.
- For menus shared across themes, channels or markets, model the panels as **metaobjects**.

[^blocks]: Shopify.dev, [Theme blocks](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks).
[^apg]: W3C WAI-ARIA Authoring Practices, [Disclosure Navigation Menu](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/).
[^link]: Shopify.dev, [link](https://shopify.dev/docs/api/liquid/objects/link) and [linklist](https://shopify.dev/docs/api/liquid/objects/linklist).
[^editor]: Shopify.dev, [Integrate sections and blocks with the theme editor](https://shopify.dev/docs/storefronts/themes/best-practices/editor/integrate-sections-and-blocks).
[^metaobject]: Shopify.dev, [Input settings: metaobject](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#metaobject).
