---
title: "Shopify Messaging: email, SMS and WhatsApp marketing from the Shopify admin"
date: 2026-10-31 12:00:00 +0100
categories: Ecommerce
related: [shopify-search-discovery, shopify]
reading_time: 10
---

For years Shopify's native app for direct marketing was **Shopify Email**: newsletters and a few automations, free up to a threshold. The same app is now called **Shopify Messaging** and sends campaigns and automations over **email**, **SMS** and **WhatsApp** from a single panel.[^fnmain]

For many stores it is the simplest alternative to platforms such as Klaviyo or Omnisend: no contact sync, no separate account, one bill with Shopify. This guide covers what it does, what each channel costs, how consent works and where it stops.

### What it does, in one line

The app has no address book of its own. It uses the **customers** and **segments** already in the admin, sends messages over three channels and records what happens next.

{% include diagrams/messaging-overview.html %}

The main advantage is the first layer: orders, subscriptions and behaviour already live in Shopify, so a segment such as "bought at least once in the last six months and clicked the last email" needs no integration.

### The three channels compared

| Channel | Typical use | Cost | Availability |
|---|---|---|---|
| **Email** | Newsletters, launches, automations | 10,000 emails a month free, then from $1 per 1,000 | All paid plans |
| **SMS** | Short, time-sensitive promotions | Per message, by country (Italy: $0.075) | 10 countries, Italy included |
| **WhatsApp** | Campaigns with images and buttons | Per message, by country (Italy: $0.126 marketing) | Many countries, not the United States |

The app requires a paid plan (Basic, Grow, Advanced or Plus), the Online Store channel and a payment provider. Stores on a free trial can build campaigns and send tests to themselves, but not to subscribers.[^fnreq]

### Email

Email is still the main channel, and the one with the most favourable cost model:[^fnemail]

- **10,000 free emails** per calendar month, shared across all campaigns; unused emails do not carry over.
- Above the threshold: **$1 per 1,000** up to 300,000, then $0.65 up to 750,000, then $0.55.
- **Abandoned checkout** emails are always free and do not count toward the 10,000. Other automations do.
- Counting is per recipient: a campaign to 8,000 subscribers uses 8,000 emails.

The editor is block-based, with ready-made templates and the option to code a template. **Sidekick**, the admin's AI assistant, writes subject lines and copy, suggests send times and edits the layout from a description. **Campaign Autopilot** recommends campaigns and automations, which go out only after the merchant approves them.

### SMS

SMS can be sent to customers in **Canada, Denmark, Finland, Italy, Luxembourg, Poland, Portugal, Sweden, the United Kingdom and the United States**. Spain and Austria have been paused since autumn 2026: new recipients in these two countries cannot be added.[^fnsmsreq]

| Country | Price per SMS |
|---|---|
| United States | $0.012 |
| Poland | $0.041 |
| Portugal | $0.045 |
| United Kingdom | $0.06 |
| Sweden | $0.072 |
| **Italy** | **$0.075** |
| Denmark | $0.08 |

Three details affect the real cost:[^fnsmsprice]

- A message over the character limit is **split and billed as several SMS**.
- Automated messages are charged too: subscription confirmations, double opt-in, replies to keywords such as INFO or HELP.
- Up to **25 test SMS** a week are free.

Shopify bans whole product categories from SMS, including alcohol, CBD, firearms, gambling and crypto. A wine shop, for example, has to use other channels.

### WhatsApp

WhatsApp campaigns follow Meta's rates, which distinguish two kinds of message:[^fnwa]

| Type | When it applies | Italy |
|---|---|---|
| **Marketing** | Campaigns, subscription confirmations, keyword replies | $0.126 |
| **Service** | Replies to customer questions | $0.03, with 1,000 free messages a month per account |

A WhatsApp marketing message in Italy costs almost twice an SMS, but it carries images, buttons and product links, and it is read in the same app where the customer already messages the store. WhatsApp campaigns cannot be sent to customers in the United States.

Messaging covers the **outbound** side, meaning campaigns. Conversational selling, with an assistant that answers and leads to checkout, is a different topic, handled by separate apps and agents.

### Consent, channel by channel

Each channel has its own subscription status. A newsletter subscriber is not automatically subscribed to SMS, and no marketing message goes to anyone who has not consented to that channel.

{% include diagrams/messaging-consent.html %}

There are only a few settings to check:[^fncontact]

- **Email checkbox at checkout.** Preselection can follow the regions Shopify recommends or regions chosen by hand. For customers in the European Union it should stay **unticked**: under the GDPR a pre-ticked box is not valid consent.
- **Double opt-in.** The customer confirms by clicking a link in an email. It is off by default and applies only to new subscriptions; in Germany Shopify adds a mandatory confirmation.
- **SMS or WhatsApp checkbox.** A single checkbox at checkout, with the channel (SMS or WhatsApp) set per region. Checkout must ask for a phone number.
- **Legal copy.** For SMS, the terms of service must state message frequency, costs, how to opt out and contact details; the privacy policy must name the service providers.

One special case: the **abandoned checkout** email automation can be extended to all customers, subscribed or not. In Europe this choice is worth reviewing with whoever handles privacy, since an abandoned cart does not always amount to marketing consent.

### Automations

Automations start from a customer action and send a message on the chosen channel. The available ones cover the common cases:[^fnauto]

| Automation | Triggers when |
|---|---|
| Welcome | The customer subscribes |
| Abandoned cart | Products are added but checkout is not started |
| Abandoned checkout | Checkout is started but the order is not completed |
| Browse abandonment | Products are viewed but not added to the cart |
| Upsell and follow-up | After a purchase |
| Win-back | A customer has not bought for a while |

For a custom automation, or one that involves a third-party app, the route is **Shopify Flow**, which connects store events, conditions and actions across apps.

### What it really costs

An example with 10,000 recipients in Italy, one campaign a month:

| Channel | Monthly cost |
|---|---|
| Email | $0 (within the free 10,000) |
| SMS | $750 |
| WhatsApp marketing | $1,260 |

Email stays negligible even with large lists: 50,000 sends a month cost $40. SMS and WhatsApp grow linearly with the list, so they work best on targeted segments (recent customers, people who clicked, open carts), leaving mass communication to email.

### When it is enough and when it is not

| Situation | Is Shopify Messaging enough? |
|---|---|
| Newsletters, launches, standard automations | **Yes** |
| Lists up to a few tens of thousands of contacts | **Yes**, at very low cost |
| SMS and WhatsApp in Italy, managed in the same panel | **Yes** |
| Complex flows with many branches and conditions | Partly: with Shopify Flow |
| Predictive analytics (purchase likelihood, expected customer value) | No: dedicated platforms |
| Data from several stores, a mobile app or an external CRM | No |
| Detailed per-contact reports | Limited |

Dedicated platforms cost more and need a data sync, but they offer finer segmentation and fuller analytics. Switching makes sense when direct marketing becomes a significant share of revenue and someone manages it continuously.

<div class="tech" markdown="1">
<p class="eyebrow">Technical part · for developers</p>

#### Sending domain

Out of the box, Shopify sends from an already authenticated `shopifyemail.com` subdomain. To send from your own domain (`news@store.com`), connect the domain in the admin and add the DNS records it lists:[^fndeliv]

```text
; exact values provided by the Shopify admin
<selector>._domainkey.store.com   CNAME   <provided by Shopify>   ; DKIM
<subdomain>.store.com             CNAME   <provided by Shopify>   ; SPF / return path
_dmarc.store.com                  TXT     "v=DMARC1; p=none; rua=mailto:dmarc@store.com"
```

A DMARC policy of `p=none` collects reports without blocking anything; after a few weeks of clean reports it can move to `quarantine`. Gmail and Yahoo require spam complaints to stay below 0.3%; Shopify sets 0.1% as the target.

For segments above 1,000 subscribers **smart delivery** is on by default and skips people who have not engaged for a while. List cleaning (invalid addresses, unsubscribes, spam complaints) is always on.

#### Segments

Segments use Shopify's customer query language, the same as the Customers page:

```sql
email_subscription_status = 'SUBSCRIBED'
AND customer_added_date > -6m
AND number_of_orders > 0
AND shopify_email.clicked() = true
```

#### Collecting consent in the theme

The standard newsletter form in Online Store 2.0 themes already creates a customer subscribed to email:

{% raw %}
```liquid
{%- form 'customer', class: 'newsletter' -%}
  <input type="hidden" name="contact[tags]" value="newsletter">
  <input type="email" name="contact[email]" required
         autocomplete="email" placeholder="{{ 'newsletter.label' | t }}">
  <button>{{ 'newsletter.button_label' | t }}</button>
{%- endform -%}
```
{% endraw %}

For SMS and WhatsApp, consent is collected at checkout, or with a form that explicitly records SMS consent.
</div>

### In short

- **Shopify Messaging**, formerly Shopify Email, sends campaigns and automations over **email**, **SMS** and **WhatsApp** from the admin, using the customers and segments already there.
- **Email**: 10,000 free sends a month, then from $1 per 1,000; abandoned checkout always free.
- **SMS** in 10 countries including Italy ($0.075 per message); **WhatsApp** at Meta's rates ($0.126 marketing in Italy).
- **Consent is separate per channel**; in Europe checkboxes must stay unticked and double opt-in is worth considering.
- It is enough for most small and mid-size stores; predictive analytics and very elaborate flows need dedicated platforms.

*Prices in US dollars, checked against the Shopify Help Center in October 2026.*

[^fnmain]: Shopify Help Center, [Shopify Messaging](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging).
[^fnreq]: Shopify Help Center, [Requirements for Shopify Messaging](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/requirements).
[^fnemail]: Shopify Help Center, [Email pricing](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/email/pricing).
[^fnsmsreq]: Shopify Help Center, [SMS requirements](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/sms/requirements).
[^fnsmsprice]: Shopify Help Center, [SMS pricing](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/sms/pricing).
[^fnwa]: Shopify Help Center, [WhatsApp pricing](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/whatsapp/pricing).
[^fncontact]: Shopify Help Center, [Customer contact information](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/customer-contact-information).
[^fnauto]: Shopify Help Center, [Marketing automations](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/marketing-automations); Shopify App Store, [Shopify Messaging](https://apps.shopify.com/shopify-messaging).
[^fndeliv]: Shopify Help Center, [Email deliverability](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/email/deliverability).
