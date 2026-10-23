---
title: "Agentic commerce on Shopify: what it is and how to get ready"
date: 2026-10-16 09:00:00 +0200
categories: Ecommerce
related: [shopify-ai-sales-agent, shopify, pim]
reading_time: 6
---

Until recently, the buying journey started on Google or social media and ended on the store's website. Today a growing share of searches happens inside an AI assistant: *"find me waterproof trail running shoes under 150 euros"*. The assistant compares products and, more and more often, takes the customer all the way to payment. This is **agentic commerce**: the customer hands part of the research and buying work to an AI agent.

Shopify has built dedicated infrastructure for it, yet few merchants know about it. Here's what it offers, how it works and what's worth doing right now.

### Agentic Storefronts: the sales channel for AI assistants

With the **Winter '26 Edition** (December 2025)[^winter26] Shopify introduced **Agentic Storefronts**: a sales channel, like Facebook or Google, that makes the store's products available to AI assistants. You manage it in the admin under *Settings → Sales channels* and, for eligible stores, it's **on by default**.

Supported channels, according to [Shopify's official documentation](https://www.shopify.com/blog/how-agentic-commerce-works) (updated June 2026):

- **ChatGPT**: products show up in conversations and the purchase is completed on the store's own site, opened in an in-app browser.
- **Microsoft Copilot**: products are visible through Shopify Catalog. Eligible stores can take payment directly inside Copilot (*Copilot Checkout*).
- **AI Mode in Google Search and the Gemini app**: native checkout inside the AI interface, currently for a selection of US stores.

You don't need apps or custom integrations. Shopify charges **no extra fees** on top of standard payment processing. The store stays the *merchant of record*: orders, payments, taxes, fraud checks and fulfillment run through Shopify, and orders land in the admin like those from any other channel.

### How it works behind the scenes

**Shopify Catalog** is the global index of products from every Shopify store. It takes data from the admin (titles, descriptions, variants, prices, availability) and normalizes it. It also uses machine learning and transaction signals to infer attributes that are missing. Every change to prices and inventory reaches all AI channels.

The second piece is the **Universal Commerce Protocol (UCP)**, an open standard developed by Shopify and Google and announced at NRF in New York in January 2026.[^ucp] It defines how an agent handles cart, checkout, payment and post-purchase with any store, with no separate integration for each platform. When the agent can't finish the purchase on its own, for example because the buyer needs a new payment method, the protocol hands control back to the buyer through an embedded checkout. Supporters include Microsoft, Amazon, Stripe, Visa and Mastercard.

### The catch: US buyers only, for now

Right now, purchases through Agentic Storefronts are available **only to buyers in the United States**, wherever the store is based.[^howagentic] ChatGPT and Copilot only require selling to the US. Google AI Mode and Gemini are limited to a selection of US-based stores. Shopify says stores will be ready by default when AI partners expand to other regions, but there's no date for Europe.

In practice:

- if you **also sell to the US**, the channel already affects you;
- if you sell **only in Italy or Europe**, you have a head start to get ready before the channel arrives here too.

You don't even have to wait: you can already build a sales agent on your own store, with the standard Shopify checkout. More on that in [an AI sales assistant on Shopify, outside the US, today](/en/blog/shopify-ai-sales-agent/).

### What to do now

AI assistants don't look at your theme or your lifestyle photos: they read **data**. A poorly described product is a product the agent won't recommend. Getting ready is mostly catalog work:

1. **Complete, structured product data.** Clear titles, descriptions that answer real questions (materials, sizes, compatibility, use), consistent variants and Shopify's standard **product category** filled in.
2. **Metafields for attributes.** Size, color, material, certifications: better as structured fields than buried in a paragraph of text.
3. **Accurate real-time prices and inventory.** If the catalog says "in stock" and the warehouse doesn't, the agent suggests a product you can't ship. This is where ERP and back-office integrations matter.
4. **Policies in place.** Returns, shipping, privacy and terms of service must be filled in: they're among the eligibility requirements.
5. **A machine-readable site.** Structured data (schema.org) on product pages and a `robots.txt` that doesn't block assistant crawlers. Shopify offers a free *agentic readiness audit* tool that checks exactly these points.
6. **Measure.** Traffic from AI channels has its own attribution in the admin. Keep an eye on it to see which products agents pick.

All of this already improves classic SEO and Google Shopping. It's not wasted effort, even if the agentic channel reaches your market later than expected.

### Not on Shopify? The Agentic Plan

Shopify also launched the **Shopify Agentic Plan**, for brands selling on other platforms (WooCommerce, Magento, custom or SAP-based systems) that want to be present in AI channels without replatforming.[^agplan] It lets them load products into Shopify Catalog and sell through Agentic Storefronts. There's no monthly subscription: you pay payment fees on sales, and the plan integrates with existing PIM, tax and order management systems. The same geographic limits apply.

<div class="tech" markdown="1">
<p class="eyebrow">Technical part · for developers</p>

### Building agents on Shopify commerce

The protocol is open on the other side too: anyone building an agent or assistant can use Shopify's **MCP servers** (Model Context Protocol, the standard AI models use to call external tools). From the [developer documentation](https://shopify.dev/docs/agents):

- **Catalog**: product search across all Shopify stores or within a single store;
- **Cart MCP** and **Checkout MCP**: build and edit the cart over the conversation and turn it into a checkout. Payment happens on the store's site, or directly if the agent has a high enough trust tier;
- **Order MCP** and webhooks: order status, fulfillment, returns and refunds;
- **UCP CLI** and a `ucp` *skill* for Claude Code, Cursor and VS Code, to speed up development.

</div>

For a brand, this means it can build **its own shopping assistant**, on its site or in an app, using the same building blocks as general-purpose assistants.

### In short

Agentic commerce doesn't replace the website: it extends it. Customers discover and choose inside the assistant, while the order, the payment and the relationship stay with the store. Shopify has made access almost automatic, and the real difference comes from **catalog data quality**. Outside the US the channel isn't open yet: now is the right time to get products, attributes and integrations in order, so you're not starting late when it arrives.

*Information current as of October 2026, based on official Shopify sources. Channels and availability change often: check your store's admin.*

[^winter26]: Shopify, [Winter '26 Edition: Agentic Storefronts](https://www.shopify.com/news/winter-26-edition-agentic-storefronts).
[^ucp]: [Universal Commerce Protocol](https://ucp.dev/), the protocol's official site.
[^howagentic]: Shopify, [How agentic commerce works](https://www.shopify.com/blog/how-agentic-commerce-works) (updated June 18, 2026).
[^agplan]: Shopify, [Millions of merchants can sell in AI chats](https://www.shopify.com/news/agentic-commerce-momentum) (March 24, 2026): Agentic plan announcement.
