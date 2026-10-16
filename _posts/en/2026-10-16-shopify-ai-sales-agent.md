---
title: "An AI sales assistant on Shopify, outside the US, today"
date: 2026-10-16 11:00:00 +0200
categories: Integrations
related: [agentic-commerce, pim, shopify]
---

[Shopify's Agentic Storefronts](/en/blog/agentic-commerce/) bring products into ChatGPT, Copilot and Gemini, but for now purchases only work with buyers in the United States. If you sell in Italy or elsewhere in Europe, you don't have to wait. The same building blocks (an AI-readable catalog, cart, checkout) can already be used to build **your own sales agent**, on your site or on WhatsApp, with the usual Shopify checkout.

### How it works

The flow is simple:

1. The customer writes in the chat widget or on WhatsApp: *"I'm looking for a gift for my mother, she loves cooking, budget 60 euros"*.
2. An **AI model** (Claude, GPT) understands the request and decides which tools to use: search the catalog, read the policies, check available variants.
3. The tools query **your Shopify store** and return real products, prices and inventory.
4. The agent suggests 2-3 products, answers questions (sizes, shipping times, returns) and creates the **cart**.
5. The customer opens the link and pays in the **standard Shopify checkout**.

Step 5 is the key: payment stays with the store. Local payment methods, cards, VAT, shipping and discounts already work, with no new integration. The agent never touches payment data.

### The tools you need

| Component | Tool | What it's for |
|---|---|---|
| Catalog and cart | The store's **MCP server** or the **Storefront API** | Product search, variant details, cart creation |
| Checkout | The Shopify cart checkout URL | Payment happens on the store, as always |
| AI model | **Claude** or **OpenAI** API with *tool use* | Understanding the request and deciding which tools to call |
| Backend | A small server (**Cloudflare Worker**, or a Shopify app with an *app proxy*) | Keeping API keys safe, limiting abuse, logging |
| Interface | Chat widget as a **theme app extension** | Turned on from the theme editor, without editing theme code |
| Extra channel | **WhatsApp Business Platform** (Cloud API) | The same agent, on the channel many European customers use most |
| Real-time data | **ERP** and back-office integration | Reliable inventory: the agent must not suggest out-of-stock products |
| Order status | **Customer Account API** | "Where's my order?" with the customer signed in |
| Measurement | Cart attribute (e.g. `source: agent`) | Recognizing agent-driven orders in the admin |

#### MCP or Storefront API?

Every Shopify store exposes an **MCP server** (Model Context Protocol, the standard AI models use to call external tools) at `https://{store}.myshopify.com/api/mcp`, with no authentication needed for catalog search. It's the quickest way to start: the model gets ready-made tools such as product search and cart management.

One caveat: Shopify is moving these tools to the new **Universal Commerce Protocol** (UCP). Developers in the community report a new endpoint (`/api/ucp/mcp`) and renamed tools. Before building on it, check the tools available on your store with a `tools/list` call. If you need more stability, the **Storefront API (GraphQL)** does the same things and is versioned: you write two or three tools by hand (search products, product details, create cart) and the model uses them the same way.

### What you get

- **A sales assistant that's always available**, knows the whole catalog and answers at night too.
- **Fewer questions for customer service**: shipping, returns, sizes, compatibility.
- **Natural-language search**: *"a light rain jacket that packs into a suitcase"* works even if no product contains those words.
- **Valuable data**: conversations tell you what customers look for and what they can't find.

### The minimum project

You don't need everything at once. A realistic first project:

1. A chat widget on the site (theme app extension).
2. A Cloudflare Worker that calls the AI model and the store's tools.
3. Three tools: search products, product details, create cart.
4. A system prompt with the brand's tone and the main policies.

It's a few days of work. WhatsApp, ERP, order status and metrics come later, once the first data shows they're worth it.

### Rules and privacy

In the EU these aren't details:

- **Transparency (AI Act)**: customers must know they're talking to an AI system, not a person.
- **GDPR**: update your privacy policy, choose providers with data processing agreements and consider where data is processed. Many AI model providers offer EU processing or zero data retention.
- **No payment data in the chat**: with Shopify checkout the issue doesn't come up.
- **Clear limits**: the agent doesn't invent discounts, doesn't promise delivery times it can't guarantee, and hands off to a person when needed.

### Meanwhile: getting found by external assistants

Until checkout inside ChatGPT and Gemini reaches Europe, AI assistants already **recommend products** and send traffic to your site. To show up:

- **Google Merchant Center**, connected through Shopify's *Google & YouTube* app: AI Mode and AI Overviews draw on Google Shopping products, and the feed has new attributes designed for natural-language questions.
- **Microsoft Merchant Center**, through Shopify's Microsoft channel, to appear in Copilot and Bing.
- Complete schema.org **structured data** (`Product`, `Offer`) on product pages.
- A **`robots.txt`** that doesn't block assistant crawlers (`OAI-SearchBot`, `PerplexityBot`, `Google-Extended`).

It's work you need anyway: when Agentic Storefronts arrive here too, a well-kept catalog will start ahead.

### In short

"Official" agentic commerce hasn't reached Europe yet, but the technology to build it has. A sales agent on your own store is a contained project, uses the Shopify checkout you already have and immediately gives you data on how customers look for products. The hard part isn't the AI: it's **catalog data** and **integrations** with business systems. If you want to assess it for your store, [get in touch](/en/contact/).

*Information current as of October 2026. Shopify's AI tools change often: always check the [official documentation](https://shopify.dev/docs/agents).*
