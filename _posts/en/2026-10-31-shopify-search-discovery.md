---
title: "Shopify Search & Discovery: filters, search and recommendations without third-party apps"
date: 2026-10-31 10:00:00 +0100
categories: Ecommerce
related: [shopify, shopify-themes-merchant, shopify-theme-architecture]
reading_time: 10
---

In a store with a few dozen products, the menu is enough. As the catalogue grows, customers stop browsing and start **searching and filtering**: if search does not find "sneakers" because the product is called "trainers", or there is no size filter, the sale is lost before the product page is even reached.

**Search & Discovery** is Shopify's free app for exactly this layer: **filters**, **synonyms and boosts** in search, **product recommendations** and **analytics** on what customers look for.[^fnhelp] This guide covers what it does, how to set it up, when a third-party app is worth adding and what matters on the theme side.

### What it does, in one line

The app holds no products and renders no pages. It reads the data already in the catalogue, adds rules, and leaves the display to the **theme**.

{% include diagrams/search-discovery.html %}

This split explains most real-world issues: a filter that "doesn't work" usually comes from incomplete product data (first layer) or a theme that does not support native filtering (third layer), not from the app.

### The four areas

| Area | What is configured | Where it shows |
|---|---|---|
| **Filters** | Which filters appear, in what order, with which labels and groupings | Collection pages and search results |
| **Search** | Synonyms and products pushed to the top for given terms | Search and predictive search |
| **Recommendations** | Related and complementary products | Product page, cart (if the theme supports it) |
| **Analytics** | Top searches, searches with no results, clicks, conversions | Admin only |

### Filters

Filters are built from data products already have:

- **Availability** and **price**, present by default.
- **Product type**, **vendor** and **tags**.
- **Variant options**: size, colour, material.
- Product and variant **metafields**: for example "fit", "season", "compatible with".
- **Category metafields**, the ones Shopify suggests from the standard taxonomy (colour, fabric, neckline…).

For each filter the label shown to customers and its position in the list can be set. Two features solve very common problems:

- **Value grouping.** If the catalogue contains "Blue", "Navy" and "Midnight blue", they can be merged under a single "Blue" value without touching the products.
- **Swatches.** With category metafields or metaobjects, the colour filter shows a coloured dot or an image instead of plain text.

Filter quality depends entirely on data quality. A "Material" filter based on a metafield filled in on only 40% of products hides the other 60% as soon as a customer uses it. Before enabling a filter, check that the field is complete and consistent; if the catalogue comes from a PIM or an ERP, the rule belongs there.

### Search: synonyms and boosts

Shopify search matches the query against title, type, vendor, tags, variants and other product fields. Search & Discovery adds two levers.

**Synonyms.** A synonym group tells the engine that several words are equivalent: searching for any of them returns the results of all of them.

| Group | Why |
|---|---|
| sneakers, trainers, running shoes | Customer vocabulary differs from the catalogue's |
| hoodie, hooded sweatshirt, pullover | Regional and brand terms |
| tshirt, t-shirt, tee | Spelling variants |

Some practical caveats: synonyms do not apply to exact SKU and barcode matches, and a multi-word synonym behaves like a phrase search, so word order matters. Themes with their own search features may conflict with synonyms that contain spaces.

**Boosts.** A boost ties a product to a term: searching "gift" puts the Christmas box first. Use them sparingly: a boost forgotten after a campaign keeps pushing a product that may be sold out or out of season.

### Product recommendations

There are two kinds, with different logic:

| Type | Where it comes from | Example |
|---|---|---|
| **Related** | Computed automatically by Shopify (purchases, descriptions, collections), with manual overrides | Other jackets similar to the one being viewed |
| **Complementary** | Picked by hand in the app | The jacket suggests a belt and a waterproofing spray |

Related products work well on large catalogues with sales history. Complementary ones take manual work, but they are the ones that raise average order value, because they suggest what is bought **together**, not what is bought **instead**. On a large catalogue, start with the best sellers.

Recommendations only appear if the theme has a block or section that shows them (usually "Related products" and "Complementary products" on the product page).

### Analytics

The analytics section is the most underrated part of the app. The most useful reports:

- **Searches with no results.** Each entry is a customer request left unanswered: a missing synonym, a product not carried, or an idea for the assortment.
- **Searches with few clicks.** The engine finds something, but not what the customer wanted: a signal for a boost or for better titles and descriptions.
- **Top searches.** They tell what to feature on the homepage and in the menu.

A monthly review of these three reports, turned into new synonyms and boosts, is often the improvement with the best effort-to-result ratio.

### Benefits

- **Free and native.** No cost, no external scripts, no impact on store performance.
- **Works with Online Store 2.0 themes** out of the box: recent themes (Dawn, Horizon and updated premium themes) already support filters and recommendations.
- **One source of data.** Filters, search and recommendations use the same products, metafields and markets as the rest of the store, with no syncing.
- **Available headless too.** Filters and recommendations are exposed through the Storefront API.

### Limits

- **No per-customer personalisation.** Results are the same for everyone: no ranking based on browsing or past purchases.
- **Limited merchandising.** Collection order is controlled with standard sort options or by hand; there are no rules like "highest margin first" or "push sold-out items to the bottom per collection".
- **Search is barely tunable.** Fields cannot be weighted (for example title over tags), and typo tolerance cannot be fine-tuned.
- **No A/B testing** on filters, boosts or recommendations.
- **Data-dependent.** The app does not clean or normalise the catalogue: messy data means messy filters.

### When a third-party app is needed

| Situation | Is Search & Discovery enough? |
|---|---|
| Catalogue up to a few thousand products, clean data | **Yes** |
| Fixing synonyms and finding zero-result searches | **Yes** |
| Typo-tolerant search, field weighting, visual search | No: dedicated apps (Algolia, Klevu, Boost, Searchanise…) |
| Results personalised per customer or segment | No |
| Rule-based merchandising per collection, A/B tests | No |
| B2B with different catalogues and prices per company | Case by case |

Third-party apps usually replace the whole search and filter layer, with their own index to sync and often their own JavaScript on the storefront. The extra features should be weighed against the monthly cost and the performance impact.

<div class="tech" markdown="1">
<p class="eyebrow">Technical part · for developers</p>

#### Filters in the theme

In Online Store 2.0 themes, filters arrive precomputed in the Liquid object `collection.filters` (or `search.filters`). Each filter has a type (`list`, `price_range`, `boolean`) and a list of values with counts and URLs:

{% raw %}
```liquid
<form data-filter-form>
  {%- for filter in collection.filters -%}
    <details>
      <summary>{{ filter.label }}</summary>
      {%- case filter.type -%}
        {%- when 'list', 'boolean' -%}
          {%- for value in filter.values -%}
            <label>
              <input type="checkbox"
                     name="{{ value.param_name }}"
                     value="{{ value.value }}"
                     {% if value.active %}checked{% endif %}
                     {% if value.count == 0 and value.active == false %}disabled{% endif %}>
              {{ value.label }} ({{ value.count }})
            </label>
          {%- endfor -%}
        {%- when 'price_range' -%}
          <input type="number" name="{{ filter.min_value.param_name }}"
                 value="{{ filter.min_value.value | money_without_currency }}">
          <input type="number" name="{{ filter.max_value.param_name }}"
                 value="{{ filter.max_value.value | money_without_currency }}">
      {%- endcase -%}
    </details>
  {%- endfor -%}
  <button>Filter</button>
</form>
```
{% endraw %}

The form works without JavaScript: filters are plain URL parameters, which also makes filtered pages shareable.

```text
/collections/shoes?filter.v.availability=1
  &filter.v.option.size=42
  &filter.p.vendor=Acme
  &filter.p.m.custom.material=Leather
  &filter.v.price.gte=50&filter.v.price.lte=120
```

`filter.p.*` filters on the product, `filter.v.*` on the variant, `m.<namespace>.<key>` on a metafield. The theme's JavaScript only avoids the full page reload, usually with the Section Rendering API.

#### Recommendations

Recommendations load after the page, from the `/recommendations/products` endpoint, which returns a section's HTML directly:

```text
/recommendations/products?product_id=123456789
  &limit=4
  &intent=complementary
  &section_id=product-recommendations
```

`intent` is `related` (default) or `complementary`. Inside the section, `recommendations.products` holds the products.

#### Headless: Storefront API

```graphql
query {
  collection(handle: "shoes") {
    products(first: 24, filters: [
      { available: true }
      { variantOption: { name: "Size", value: "42" } }
      { productMetafield: { namespace: "custom", key: "material", value: "Leather" } }
    ]) {
      filters { id label type values { id label count input } }
      nodes { title handle }
    }
  }
  productRecommendations(productHandle: "trail-jacket", intent: COMPLEMENTARY) {
    title
    handle
  }
}
```

The `filters.values.input` field returns the JSON ready to send back in the next query: no need to rebuild filters by hand.
</div>

### Summary

- **Search & Discovery** is Shopify's free app for **filters**, **synonyms and boosts**, **recommendations** and **search analytics**.
- It holds no data and no pages: it reads the catalogue and lets the **theme** render. Good filters require **complete product data**.
- The **zero-result** and **low-click** search reports are the simplest source of continuous improvements.
- It is enough for most small and mid-sized stores; dedicated apps are needed for **personalisation**, **advanced search** and **rule-based merchandising**.
- On the theme side, filters are **URL parameters** and work without JavaScript.

[^fnhelp]: Shopify Help Center, [Shopify Search & Discovery](https://help.shopify.com/en/manual/online-store/search-and-discovery).
