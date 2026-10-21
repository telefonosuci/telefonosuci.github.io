---
title: "Shopify Functions: what they are, how to use them, benefits and limits"
date: 2026-10-19 15:00:00 +0200
categories: Ecommerce
related: [shopify, shopify-releases, migrations]
reading_time: 11
audience: dev
---

For years, if you wanted to change cart or checkout logic on Shopify, you had two options: an app working "from the outside" with webhooks and APIs, or **Shopify Scripts**, small Ruby programs reserved for Plus stores. **Shopify Functions** replaced both for everything related to discounts, shipping, payments and validation: your own code running **inside Shopify's infrastructure**, at the exact moment the cart is calculated.

This guide explains what they are, where they come from, how to write one, when to use them and where they stop.
{% raw %}
### Where they come from

| Period | Milestone |
|---|---|
| **2016–2017** | **Shopify Scripts** (Script Editor) are born: Ruby, Plus only, legacy checkout only. |
| **June 2021** (Unite / Editions) | Shopify announces **Functions** alongside *Checkout Extensibility*: developer-written backend logic, compiled to WebAssembly. |
| **2022** | Developer preview and the first generally available APIs: **discounts** (product, order, shipping). |
| **2023** | **Delivery customization**, **payment customization**, **cart and checkout validation** and **cart transform** (bundles) arrive. |
| **2024** | **Fulfillment constraints**, **order routing** and pickup option generators are added. |
| **2025** | **Unified Discount API**: a single function can discount products, order and shipping. From April 2025 Scripts can no longer be edited or published. |
| **June 30, 2026** | **Scripts stop working**. Functions are the only way to customise this logic. |

The shift isn't just a change of language. Scripts were interpreted code tied to the old `checkout.liquid`. Functions are **WebAssembly** modules shipped inside an app, versioned with the app, and they work with the extensible checkout, Shop Pay, the cart APIs and headless channels.

### How they work

A function is a pure function: **it receives an input, returns an output**, and does nothing else.

1. Shopify needs to make a decision (which discounts to apply, which payment methods to show, whether the cart is valid…).
2. It runs the **GraphQL input query** you wrote and builds a JSON with only the requested data: cart lines, customer, address, metafields.
3. It passes that JSON to your WebAssembly module.
4. The module returns a JSON of **operations** ("apply 10% to these lines", "hide this payment method", "block checkout with this message").
5. Shopify applies the operations.

No server of your own, no network calls, no state. All in a few milliseconds, on every cart recalculation.

Functions are written in **Rust** (recommended by Shopify for performance) or **JavaScript/TypeScript** (compiled to Wasm with Javy). In theory any language that compiles to WebAssembly with WASI will do.

### Available APIs

Each function implements a specific **Function API**, which defines what input it can read and which operations it can return:

| Function API | What it does |
|---|---|
| **Discount** | Discounts on lines, subtotal and shipping, even combined in one function |
| **Delivery customization** | Renames, reorders or hides shipping options |
| **Payment customization** | Renames, reorders or hides payment methods; on Plus also B2B payment terms |
| **Cart and checkout validation** | Blocks the cart or checkout with an error message |
| **Cart transform** | Expands, merges or updates lines: the foundation of bundles |
| **Fulfillment constraints** | Decides which items must ship together or from a given location |
| **Order routing location rule** | Ranks the locations an order is fulfilled from |
| **Pickup point / local pickup generator** | Generates pickup options, including from external services |

### How to create a function

Functions live **inside an app**: public (App Store) or custom. The Shopify CLI flow looks like this.

**1. Create the app and the extension**

```bash
shopify app init
cd my-app
shopify app generate extension --template discount --flavor typescript
```

The CLI creates a folder in `extensions/` with three main files: configuration, input query and code.

**2. Configuration** (`shopify.extension.toml`)

```toml
api_version = "2025-10"

[[extensions]]
name = "VIP discount"
handle = "vip-discount"
type = "function"

  [[extensions.targeting]]
  target = "cart.lines.discounts.generate.run"
  input_query = "src/cart_lines_discounts_generate_run.graphql"
  export = "cart-lines-discounts-generate-run"
```

**3. The input query** (`.graphql`)

Ask only for what you need: less data means faster execution and less risk of hitting limits.

```graphql
query Input {
  cart {
    buyerIdentity {
      customer {
        hasTags(tags: ["VIP"]) { hasTag }
      }
    }
    lines {
      id
      merchandise {
        ... on ProductVariant {
          product { inAnyCollection(ids: ["gid://shopify/Collection/123"]) }
        }
      }
    }
  }
  discount {
    discountClasses
    metafield(namespace: "$app", key: "config") { jsonValue }
  }
}
```

**4. The code** (`.ts`)

```ts
import {
  DiscountClass,
  ProductDiscountSelectionStrategy,
  type CartInput,
  type CartLinesDiscountsGenerateRunResult,
} from "../generated/api";

export function cartLinesDiscountsGenerateRun(
  input: CartInput,
): CartLinesDiscountsGenerateRunResult {
  const isVip = input.cart.buyerIdentity?.customer?.hasTags
    .some((t) => t.hasTag);

  if (!isVip || !input.discount.discountClasses.includes(DiscountClass.Product)) {
    return { operations: [] };
  }

  const percentage = input.discount.metafield?.jsonValue?.percentage ?? 10;

  const targets = input.cart.lines
    .filter((l) => l.merchandise.__typename === "ProductVariant"
      && l.merchandise.product.inAnyCollection)
    .map((l) => ({ cartLine: { id: l.id } }));

  if (!targets.length) return { operations: [] };

  return {
    operations: [{
      productDiscountsAdd: {
        candidates: [{
          message: `VIP -${percentage}%`,
          targets,
          value: { percentage: { value: percentage } },
        }],
        selectionStrategy: ProductDiscountSelectionStrategy.First,
      },
    }],
  };
}
```

Target and type names change between API versions: `shopify app function typegen` regenerates the types from the schema and the query, and the compiler tells you straight away if something doesn't line up.

**5. Test locally and release**

```bash
shopify app function run      # runs the function against a JSON input
shopify app dev               # installs it on the development store
shopify app deploy            # creates a new app version
```

**6. Activate the function on the store**

A deployed function does nothing until it is **attached to a store object**: a discount, a payment customization, a validation. You do it from the admin (if the app has a UI) or via the Admin API:

```graphql
mutation {
  discountAutomaticAppCreate(automaticAppDiscount: {
    title: "VIP discount"
    functionHandle: "vip-discount"
    discountClasses: [PRODUCT]
    startsAt: "2026-11-01T00:00:00Z"
    metafields: [{
      namespace: "$app", key: "config", type: "json",
      value: "{\"percentage\": 15}"
    }]
  }) {
    userErrors { field message }
  }
}
```

**Metafields** on the object are the standard way to configure the function without redeploying code: the same module can power ten different discounts, each with its own parameters.

### Typical use cases

**Discounts**
- Tiered discounts (3 items -10%, 5 items -15%) on a collection.
- Prices reserved for tagged customers, a segment or a B2B company.
- "Buy X, get Y" with rules native discounts don't cover.
- Free shipping above a threshold, but only for certain countries or products.

**Shipping**
- Hide express couriers for bulky or hazardous products.
- Hide standard delivery to islands or remote areas.
- Rename options to show estimated delivery times.

**Payments**
- Hide cash on delivery above a certain amount or for new customers.
- Show bank transfer only to B2B customers.
- Reorder methods to push the one with the lowest fees.

**Validation**
- Minimum or maximum quantities per product (anti-scalper limits on drops).
- Block disallowed combinations (refrigerated products with standard shipping).
- Enforce a minimum order value for wholesale customers.

**Bundles and cart**
- A "gift box" bundle that shows as one item in the cart and deducts the individual components from inventory.
- Accessories added as a line linked to the main product.

**Logistics**
- Ship together items that can't be split.
- Fulfil from the nearest warehouse or the one with the most stock.

### Benefits

- **They run inside Shopify.** No server to maintain, no hosting costs, no scaling worries on Black Friday.
- **They are fast and predictable.** WebAssembly with hard limits: Shopify guarantees low execution times even under load.
- **They work everywhere.** Online checkout, Shop Pay, cart via the Storefront API, headless, in many cases POS too.
- **They are versioned.** They live in the app, ship with `shopify app deploy`, and you roll back by releasing a previous version.
- **They are configurable.** With metafields the merchant changes parameters without touching code.
- **They're no longer Plus-only.** Functions inside a public app work on every plan. (**Custom apps** with functions, however, remain Plus-only.)
- **They're easy to test.** They are pure functions: JSON in, JSON out. A unit test is a fixture file and an `expect`.

### Limits

- **No network, no state.** A function can't call an external API or remember anything between runs. Data must come from the input query: metafields on products, customers, the shop or the function's own object. (Some APIs offer read-only network access, reserved for Enterprise plans.)
- **Tight resource limits.** Around **11 million instructions** per run (scaled for very large carts), a compiled module of a few **hundred KB**, capped input and output sizes and a maximum input query cost. JavaScript logic with many dependencies hits them quickly: one reason Shopify recommends Rust.
- **Only what the API allows.** Each Function API has a closed set of operations. You can't, for example, change a shipping rate's price with a delivery customization: you can only hide, rename or move it.
- **Limited number of active functions.** There are caps per type (for example a maximum number of active payment or delivery customizations per store): a "one function per rule" strategy doesn't scale, a configurable function does.
- **You need an app.** Even for a simple rule you have to create, deploy and maintain an app, with its own release cycle.
- **Remote debugging.** In production you can't drop in a `console.log` on the fly: you work with execution logs in the Partner/Dev Dashboard and with `shopify app function replay`, which replays a real run locally.
- **Evolving APIs.** Targets and operation names change between versions (the 2025 unified Discount API is one example): bumping `api_version` means reading the changelog.

### Functions, Flow or a traditional app?

| Need | Tool |
|---|---|
| Decide **during** cart or checkout (price, options, blocking) | **Shopify Functions** |
| React **after** an event (order created, customer tagged) | **Shopify Flow** or webhooks |
| Show UI in checkout (fields, banners, upsells) | **Checkout UI extensions** |
| Logic that needs real-time external data | App with a backend syncing data into **metafields**, then read by the function |
| Simple discounts (percentage, code, basic BXGY) | **Native discounts**, no code |

The most common pattern in real projects is that last mix: a backend (or an ERP, or a PIM) updates metafields with price lists, thresholds and rules; the function reads them and decides in real time, without ever leaving Shopify.

### In short

- Shopify Functions are **WebAssembly modules** that customise discount, shipping, payment, validation, bundle and logistics logic.
- Announced in **2021**, mature since **2023**, and since **June 30, 2026** the only replacement for the now-retired **Shopify Scripts**.
- They're written in **Rust or JavaScript**, live inside an **app**, read data through a **GraphQL query** and return **operations**.
- They're fast, scalable, versioned and work on every channel, but they have **no network and no state** and tight resource limits.
- The rule of thumb: **the function decides, metafields configure it, a backend keeps them up to date.**
{% endraw %}
