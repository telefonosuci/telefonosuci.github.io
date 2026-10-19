---
title: "Managing Shopify releases: themes, apps, catalogue and promotions"
date: 2026-10-19 09:00:00 +0200
categories: Ecommerce
related: [shopify, migrations, pimcore-shopify]
reading_time: 13
audience: dev
---

On Shopify, theme code is easy to manage: you work on unpublished themes, use Git, and publish with one click. The trouble starts when a release isn't just about the theme. A new product page that reads a new metafield, an app that must be updated at the same moment, prices and discounts that need to go live at midnight: none of this **lives in the theme**, and Shopify has no staging environments like a traditional platform.

This guide sorts the problem out: what gets released, with which methods, which ones Shopify recommends, and how to coordinate them in a real go-live.
{% raw %}
### The problem: four things with different lifecycles

A Shopify release touches four layers, and each one behaves differently:

| Layer | Where it lives | Versionable? | Has environments? | Rollback |
|---|---|---|---|---|
| **Theme** | The store's theme library (max 20 themes) | Yes, with Git | Yes, every unpublished theme is an "environment" | Easy: republish the previous theme |
| **Apps and extensions** | Partner Dashboard / Dev Dashboard, global to the app | Yes, with *app versions* | Only if you use separate apps per environment | Yes, release a previous version |
| **Structural data** (metafield and metaobject definitions, menus, markets) | The store, single and shared | Not natively | No | Manual |
| **Commercial state** (products, prices, discounts, collections) | The store, single and shared | No | No | Manual, or automatic only with Launchpad |

Themes can be duplicated, data can't. **An unpublished theme reads the same catalogue, the same prices and the same apps as the live theme.** That's why "one theme per environment" works well for code but isn't enough for a full release: staging already sees production data, and any new data you create is immediately visible to production too.

Every strategy below exists to deal with this asymmetry.

### Managing the theme

#### 1. Theme per environment (environment themes)

The most common method. The store keeps three fixed themes:

- **Live**: the published theme.
- **Staging** (or *QA*): unpublished, receives the code ready for release, shared through its preview link.
- **Development**: each developer's local theme, created by `shopify theme dev` (it's a hidden *development theme* and doesn't take a slot in the library).

With Shopify CLI, environments are declared in `shopify.theme.toml`:

```toml
[environments.staging]
store = "my-store"
theme = "142857142857"   # staging theme id

[environments.production]
store = "my-store"
theme = "142857000000"   # live theme id
```

```bash
shopify theme push -e staging
shopify theme push -e production --allow-live
```

The CI token is generated with the **Theme Access** app and passed through the `SHOPIFY_CLI_THEME_TOKEN` variable, never written in the file.

**When to use it**: small teams, one release at a time, few developers.

#### 2. Theme per branch (branch-per-theme)

This is the method **recommended by Shopify** with its native **GitHub integration**: from the theme library you connect a repository branch to a theme. Sync is two-way: a push to the branch updates the theme, and changes the merchant makes in the editor become commits on the branch.

The typical setup:

- `main` connected to the **live** theme.
- `staging` connected to the **staging** theme.
- Feature branches are worked on locally with `shopify theme dev` and reach `staging` through a pull request.

A popular variant in larger teams is **preview themes per pull request**: CI creates an unpublished theme for each PR and posts the preview link as a comment.

```bash
# when the PR is opened
shopify theme push --unpublished --theme "PR-${PR_NUMBER}" --json
# when the PR is closed
shopify theme delete --theme "PR-${PR_NUMBER}" --force
```

Watch the limit of **20 themes** per store: cleaning up when the PR closes is not optional.

**Important rule**: a theme is updated either by the GitHub integration or by the CLI, never both. If CI pushes to a theme connected to GitHub, the two flows overwrite each other.

#### 3. Release theme (blue-green)

For big releases (redesigns, a new product page, campaigns) you prepare a **dedicated theme** for the release, for example *"Release 2026-11 Black Friday"*. You finish it, test it with the preview link and **publish** it at go-live. The previous live theme stays in the library: rolling back means republishing it.

It's *blue-green deployment* applied to Shopify: two complete versions, with traffic switched from one to the other in an instant.

#### The real enemy: merchant settings

Part of the theme **isn't code**: it's content the merchant edits in the editor.

- `config/settings_data.json` (global theme settings)
- `templates/*.json` (sections and blocks of each page)
- `sections/*.json` (section groups, such as header and footer)
- `locales/*.json` (text edited under *Edit theme content*)

If you publish a theme prepared a week ago, you lose everything marketing changed on the live theme in the meantime. The fixes, simplest first:

1. **Exclude those files from code pushes**, so CI doesn't overwrite marketing's work:

   ```bash
   shopify theme push -e staging \
     --ignore "config/settings_data.json" --ignore "templates/*.json"
   ```

2. **Bring content over from live** before go-live:

   ```bash
   shopify theme pull --live --only "templates/*.json" \
     --only "sections/*.json" --only "config/settings_data.json"
   shopify theme push --theme "Release 2026-11" --only "templates/*.json" \
     --only "sections/*.json" --only "config/settings_data.json"
   ```

3. With the **GitHub integration** the problem shrinks: the merchant's changes on live become commits on `main`, and you just merge `main` into the release branch.

Either way, a **content freeze** helps: a few hours before go-live, marketing stops editing the live theme.

### Managing apps

Apps don't live in the theme and don't follow its environments. An app has **a single active version** for every store it's installed on, and its extensions (theme app extensions, checkout UI extensions, Shopify Functions for discounts and shipping) are released together with the app.

#### Separate apps per environment

This is the method **recommended by Shopify**: you create several apps (for example *Brand App Dev*, *Brand App Staging*, *Brand App*) connected to the same code, each with its own configuration file.

```bash
shopify app config link          # creates shopify.app.staging.toml
shopify app deploy --config staging
shopify app deploy --config production
```

The staging app is installed on a **development store** or on the staging store, the production app on the real store.

#### Separate deploy and release

`shopify app deploy` creates an **app version** and normally releases it straight away. To coordinate the app with the rest of the go-live, split the two steps:

```bash
shopify app deploy --no-release --version "2026-11-bf"
# ...at go-live
shopify app release --version "2026-11-bf"
```

Rolling back means releasing the previous version from the dashboard or with `shopify app release`.

#### The contract between theme and app

The theme uses the app's blocks (*app blocks*) in its JSON templates. If an app release renames or removes a block, the live theme loses it. The rules that keep you out of trouble:

- **App first, then theme.** The new app must work with the old theme too: add blocks and settings, don't remove them.
- Removals happen in a later release, once no theme uses them any more.

It's the same principle as with APIs: **backward compatibility**, always.

#### Third-party apps

App Store apps aren't versioned: they update when their developer decides. Their settings (rules, widgets, copy) are configured on the production store and apply immediately to every theme. If a campaign requires changing a third-party app's configuration, put it on the go-live checklist, with a time and an owner.

### Managing structural data: migrations

Metafield and metaobject definitions, menus, filters, markets: they're shared by every theme and have no versions. The method that works is to treat them like **database migrations**: scripts saved in the repository and run in order.

- **Idempotent scripts** on the GraphQL Admin API (`metafieldDefinitionCreate`, `metaobjectDefinitionCreate`, `metafieldsSet`): they can be rerun without causing damage.
- **Declarative definitions in the app**: for app-owned metafields and metaobjects, Shopify lets you declare them in `shopify.app.toml`, and they're created on deploy.

```toml
[product.metafields.app.badge]
type = "single_line_text_field"
name = "Promo badge"
```

- **Catalogue import and export** via files (tools like Matrixify) for bulk changes, with a backup export before every change.

#### Expand and contract

The most useful pattern for avoiding "all at once" releases is **expand and contract** (also called *parallel change*):

1. **Expand**: create the new field (e.g. metafield `custom.sizes_v2`) without touching the old one.
2. The **new theme reads both**, with a fallback:

   ```liquid
   {%- assign sizes = product.metafields.custom.sizes_v2.value
       | default: product.metafields.custom.sizes.value -%}
   ```

3. **Migrate the data** at your own pace, even days before go-live.
4. **Contract**: once no theme uses the old field, delete it.

This way data and theme no longer have to change at the same instant: the live theme ignores the new field, the new theme works with both.

### Managing commercial state: prices, discounts, products

Here there's a single principle: **the theme must not contain dates or prices**. The theme reads the store's state (`compare_at_price`, active discounts, tags, metafields), and a commercial release changes state, not code. That decouples campaigns from code releases.

The tools for scheduling commercial state:

| What | Native tool | Plan |
|---|---|---|
| Discounts (codes and automatic) | Start and end date and time on the discount | All |
| Product visibility | Scheduled publishing on the Online Store channel (or `publishablePublish` with `publishDate` via API) | All |
| Timed actions (tags, metafields, product status) | **Shopify Flow** with the *Scheduled time* trigger | All plans with Flow |
| Per-country prices | **Shopify Markets** price lists and catalogues | All (B2B on Plus) |
| Sales, price changes, theme publishing, discounts and products in one event, with automatic revert | **Launchpad** | Shopify Plus |

#### Launchpad (Shopify Plus)

It's the tool **Shopify built** for this problem. A Launchpad *event* groups, with a start and end date:

- publishing a **theme**;
- **sales** with price changes on products or collections;
- **discounts** to activate;
- **products** to publish or hide.

When the event ends, Launchpad **reverts** prices and the previous theme. For a Black Friday on Plus it's the simplest and least risky choice.

#### Without Plus

You combine the native tools:

- **Discounts** with start and end dates: no work needed.
- **Prices**: a script on the Admin API (`productVariantsBulkUpdate`) that saves the original price in a metafield, sets `compare_at_price` and the new price, plus a mirror script to revert. Or Flow, or an app for scheduled sales.
- **Theme**: scheduled publishing doesn't exist natively; use a scheduled CI job:

  ```yaml
  # .github/workflows/go-live.yml
  on:
    schedule:
      - cron: "0 23 27 11 *"   # 28 November, 00:00 Italian time
  jobs:
    publish:
      runs-on: ubuntu-latest
      steps:
        - run: npm i -g @shopify/cli
        - run: shopify theme publish --theme "$RELEASE_THEME_ID" --force
          env:
            SHOPIFY_CLI_THEME_TOKEN: ${{ secrets.THEME_TOKEN }}
            SHOPIFY_FLAG_STORE: my-store.myshopify.com
  ```

  GitHub Actions cron can start a few minutes late: for a to-the-minute go-live, publish the theme earlier and use a flag (see below).

#### Feature flags (dark launch)

This is the most robust method, and it works on every plan. New code goes to production **switched off**, inside the live theme, and is switched on by changing a piece of data:

```liquid
{%- if shop.metafields.release.black_friday.value -%}
  {% render 'bf-hero' %}
{%- else -%}
  {% render 'hero' %}
{%- endif -%}
```

The flag is a **shop metafield** (boolean). It's switched on by hand from the admin, by Flow at the chosen time, or with a `metafieldsSet` call. The advantages:

- the published theme is the same before and after: no lost merchant settings;
- rolling back means switching the flag off;
- prices, discounts and UI can change at the same moment, because they're all data.

For flags marketing needs to control from the editor, a theme setting (`settings.bf_active`) works too. Avoid date conditions in Liquid (`'now' | date`), though: pages are cached and the switch won't happen at the exact time.

### A staging store

All the methods above share one limit: you test against production data. For big projects (catalogue migrations, new apps, B2B, new markets) you need a separate **staging store**:

- on **Shopify Plus**, use one of the organisation's additional stores;
- otherwise, a **development store** created from the Partner Dashboard.

The catalogue is copied with an export and import (Matrixify or API scripts), apps are installed in their staging version, and the theme is uploaded with the CLI. The cost is keeping the two stores aligned: it's only worth it if data migrations are frequent or risky. For a store with one theme and a few apps, unpublished themes and feature flags are enough.

### Headless: Hydrogen and Oxygen

With **Hydrogen** hosted on **Oxygen** you get real environments for the frontend: every branch produces a preview deployment, and you can define *staging* and *production* environments with different variables. The data problem stays exactly the same, though: staging points at the same store, unless you connect it to a staging store.

### A full go-live: Black Friday example

A concrete example combining the methods, without Plus:

| When | What | Layer |
|---|---|---|
| **T-14** | Migration: new metafield definitions (expand), data filled in | Data |
| **T-10** | App: `shopify app deploy --no-release`, tested on staging | App |
| **T-7** | Theme: campaign code goes into the live theme, **behind a flag that's off** | Theme |
| **T-7** | QA with the flag on only in the staging theme (theme setting) | Theme |
| **T-3** | `shopify app release`: the new app is compatible with the current theme | App |
| **T-2** | Discounts created with start and end date and time | Commercial |
| **T-1** | Backup export of prices; price script ready and tested on a few products | Commercial |
| **T-0, 00:00** | Flow switches the flag on and publishes collections; discounts start; price script runs | All |
| **T+4** | Flag off, price revert script; discounts expire on their own | All |
| **T+7** | Contract: remove campaign code and old fields | Theme, data |

On **Shopify Plus**, the T-0 and T+4 rows become a single Launchpad event.

The **rollback** plan is written beforehand, one line per layer: theme (republish or switch off the flag), app (`shopify app release` of the previous version), prices (revert script or backup import), discounts (deactivate).

### Which method to choose

| Situation | Recommended method |
|---|---|
| Small team, one release at a time | Theme per environment (live, staging, dev) |
| Team with several developers and PRs | GitHub integration + preview themes per PR |
| Redesign or big release | Release theme (blue-green) + pulling content from live |
| Timed campaigns | Metafield feature flag + scheduled discounts + Flow |
| Campaigns on Shopify Plus | Launchpad |
| Custom apps | Separate apps per environment + `deploy --no-release` |
| New fields or data models | Idempotent migrations + expand and contract |
| Heavy migrations or B2B | Staging store |

### In short

- On Shopify **the theme has environments, data doesn't**. Every release strategy starts from here.
- The theme is managed with **themes per environment or per branch**, and the GitHub integration is the path Shopify recommends.
- Apps are released **before the theme**, backward compatible, with separate apps per environment.
- Data is changed with **versioned migrations** and the **expand and contract** pattern, so it doesn't have to change together with the theme.
- Prices and promotions **don't live in the theme**: they're scheduled with dated discounts, Flow, feature flags or Launchpad.
- The go-live becomes a series of small steps, each with its own rollback, instead of a single moment where everything has to work.
{% endraw %}
