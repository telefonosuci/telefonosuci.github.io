---
title: "Shopify Checkout Blocks: customising checkout without writing code"
date: 2026-10-31 15:00:00 +0100
categories: Ecommerce
related: [shopify-functions, shopify, shopify-releases]
reading_time: 10
---

Checkout is the most delicate page of a store: every extra element can raise order value or make customers abandon the cart. For years, customising it on Shopify meant editing `checkout.liquid` (Plus only) or pasting scripts into the thank-you page's "Additional scripts". Both paths are now closed: checkout is extended only through **apps**, using **checkout UI extensions** and **Shopify Functions**.

**Checkout Blocks** is Shopify's free app that makes this model available without developers: content, fields and offers are added to checkout, and rules for discounts, payments and shipping are created, all from the admin.[^fnapp] This guide covers what it does, on which plans, how to use it and when a custom extension is the better choice.

### Where it comes from

| Period | Milestone |
|---|---|
| **Until 2022** | Checkout is customised with `checkout.liquid` (Plus only) and scripts on post-purchase pages. |
| **2022–2023** | **Checkout Extensibility** arrives: checkout UI extensions, Shopify Functions, pixels in Customer events, a visual checkout editor. |
| **2023** | Shopify launches **Checkout Blocks**: an app that generates extensions and functions without code. |
| **August 2024** | `checkout.liquid` stops working for the information, shipping and payment pages (Plus). |
| **August 2025** | Script-based Thank you and Order status pages are retired for Plus stores. |
| **August 2026** | Same retirement for every other plan: whatever lived in "Additional scripts" has to move to apps and pixels. |

### Where blocks can go

The first question is always the plan. The three checkout steps proper can be customised only on **Shopify Plus**; the post-purchase pages on **every plan**.

{% include diagrams/checkout-pages.html %}

For a non-Plus store, then, Checkout Blocks is mostly about improving the **Thank you** and **Order status** pages: post-purchase messages, fields to collect information, offers for the next order. Every customer sees these pages, and they are often left empty.

### How it works

Checkout Blocks is a generator. What is configured in the admin becomes, under the hood, the same two things a developer would write:

{% include diagrams/checkout-blocks.html %}

- **Blocks** are checkout UI extensions: visible components, placed where the checkout editor allows.
- **Functions** are logic Shopify runs while calculating the cart: they decide which discounts apply, which methods are shown, whether the order can proceed.

Both accept **conditions**: cart value, products or collections in the cart, customer tags, country or market, language, quantity. A block or rule activates only when its conditions are true.

### Blocks

| Block | Typical use |
|---|---|
| **Content** (text, image, banner) | Delivery times, return policy, seasonal notices |
| **Icons and trust badges** | Secure payment, free returns, support |
| **Custom fields** (text, choice, checkbox, date) | Tax ID, VAT number, preferred delivery date, gift message |
| **Product offers** (upsell) | An accessory or complementary product added in one click |
| **Dynamic content** | A different message for B2B customers, per country or above a threshold |

Custom fields save data on the order (attributes or metafields), so it shows in the admin and is available to Flow, emails and back-office integrations.

The usual common sense applies: few blocks, short copy, no distractions before the pay button. A checkout upsell works when the product is inexpensive and clearly related to what is in the cart; otherwise it fits better on the Thank you page, once the purchase is done.

### Functions without code

| Rule | Examples |
|---|---|
| **Discounts** | Tiered discount on the order total, free shipping above a threshold for certain markets, free gift above an amount |
| **Payment customisation** | Hide cash on delivery above an amount, show bank transfer only to B2B customers, reorder methods |
| **Delivery customisation** | Hide express shipping for bulky products, rename a method with expected delivery times |
| **Validation** | Minimum or maximum quantity per product, block PO boxes, minimum order value for wholesale |

Before Checkout Blocks, each of these rules required a third-party app or a custom function. Many of them are now a form in the admin.

### Setting it up

1. Install **Checkout Blocks** from the Shopify App Store.
2. Create a block or rule in the app, choosing content and conditions.
3. Open the **checkout editor** (Settings → Checkout → Customize) and drag the block where it should appear.
4. Test checkout with a cart that meets the conditions and one that does not.
5. Publish.

Function-based rules have no position: they are enabled from the app and act on the whole checkout.

### Benefits

- **Free** for the core features and built by Shopify: it follows platform updates.
- **No code and no app to maintain.** Whoever runs the store makes the changes, with no releases.
- **Safe and fast.** Blocks and functions run inside Shopify's infrastructure, compatible with Shop Pay and checkout upgrades.
- **Built-in conditions.** The same block can show different content per market, customer or cart.
- **Replaces many small apps**: trust badges, extra fields, payment hiders, minimum quantities.

### Limits

- **Checkout proper is Plus only.** Other plans can work only on post-purchase pages.
- **Fixed positions and styling.** Blocks go only where the editor allows and follow checkout branding: no free CSS, no custom layouts.
- **No external data.** Blocks do not call external APIs and conditions use Shopify data only: showing a loyalty balance from a CRM needs a custom extension.
- **Closed set of rules.** Conditions and actions are those the app provides; more complex logic needs a hand-written function.
- **Some advanced features are paid** or Plus-only; the scope changes over time and should be checked on the app listing.
- **Tracking lives elsewhere.** Pixels and conversions do not go through Checkout Blocks but through Shopify's **Customer events**.

### Checkout Blocks or a custom extension?

| Need | Tool |
|---|---|
| Copy, banners, badges, fields, simple upsells | **Checkout Blocks** |
| Hide or rename methods, discounts and validation with standard rules | **Checkout Blocks** |
| Data from an external system (loyalty, store availability, quotes) | Custom **checkout UI extension** with a backend |
| Discount or validation logic outside the app's rules | Custom **Shopify Function** |
| Tracking pixels and conversions | **Customer events** (web pixels) |

<div class="tech" markdown="1">
<p class="eyebrow">Technical part · for developers</p>

#### When the app is not enough

A custom block is a **checkout UI extension** inside an app (public or custom). It is created with the Shopify CLI:

```bash
shopify app generate extension --template checkout_ui
```

The configuration declares the **target**, that is where the block can appear:

```toml
api_version = "2025-10"

[[extensions]]
name = "Loyalty points"
handle = "loyalty-points"
type = "ui_extension"

  [[extensions.targeting]]
  module = "./src/Checkout.jsx"
  target = "purchase.checkout.block.render"

  [extensions.capabilities]
  network_access = true
```

`purchase.checkout.block.render` is a dynamic target: the block is placed from the editor, just like Checkout Blocks ones. For post-purchase pages, use `purchase.thank-you.block.render` or `customer-account.order-status.block.render`.

Since `2025-10`, extensions use Preact and Polaris web components:

```jsx
import "@shopify/ui-extensions/preact";
import { render } from "preact";
import { useEffect, useState } from "preact/hooks";

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [points, setPoints] = useState(null);
  const customer = shopify.buyerIdentity?.customer?.value;

  useEffect(() => {
    if (!customer) return;
    fetch(`https://loyalty.example.com/points/${encodeURIComponent(customer.id)}`)
      .then((r) => r.json())
      .then((d) => setPoints(d.points));
  }, [customer?.id]);

  if (points === null) return null;

  return (
    <s-banner heading="Loyalty programme" tone="info">
      With this order your balance reaches {points} points.
    </s-banner>
  );
}
```

Extensions run in an isolated environment (a web worker): no DOM access, no CSS, only the components Shopify provides. Network access (`network_access`) must be requested in the configuration and approved by Shopify for public apps. The block is light to write, but it needs an app, a backend and a release cycle: for static content or standard rules, Checkout Blocks remains the cheaper choice.

Logic (discounts, methods, validation) follows the [Shopify Functions](/en/blog/shopify-functions/) model instead.
</div>

### Summary

- **Checkout Blocks** is Shopify's free app for customising checkout and post-purchase pages **without code**.
- It generates two things: **blocks** (checkout UI extensions) for what customers see, **Functions** for discounts, payments, shipping and validation.
- Checkout proper can be customised only on **Plus**; **Thank you** and **Order status** on every plan, and that is where non-Plus stores get the most value.
- It covers most common needs; **external data** or **non-standard logic** require a custom extension or function.
- With `checkout.liquid` and Additional scripts gone, it is the natural starting point for any checkout customisation.

[^fnapp]: Shopify App Store, [Shopify Checkout Blocks](https://apps.shopify.com/checkout-blocks).
