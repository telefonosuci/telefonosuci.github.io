# CLAUDE.md

Personal site (IT/EN) on **GitHub Pages**, built with **Jekyll** + a small **esbuild** step for JS.
Setup and run commands: see [RUNNING_LOCAL.md](RUNNING_LOCAL.md). Deploy: push to `master` → [.github/workflows/jekyll.yml](.github/workflows/jekyll.yml).

## Principles

- **Modular first.** One component = one Liquid include + one SCSS partial (+ one JS module if it moves). Content and config in `_data/` / `_config.yml`, never hardcoded in templates.
- **Server-rendered by default.** Every page must be fully readable with JS disabled. JS only enhances.
- **No new dependencies** without asking. Native HTML/CSS before JS.
- Code, comments and commit messages in English. Site copy in IT and EN.

## Structure

| Path | Role |
|---|---|
| `_layouts/` | `base` → `default` / `post` |
| `_includes/components/` | Reusable components, params via `include.*` |
| `_includes/home/` | Homepage sections (compose components) |
| `_data/i18n.yml` | UI strings per language; load with `{% include i18n.html %}` → `t` |
| `_data/*.yml` | Structured content (e.g. `home.yml`) |
| `_posts/{it,en}/` | Posts; lang, layout, permalink set via `defaults` in `_config.yml` |
| `en/` | English pages; Italian at root. Pair translations with the same `ref:` |
| `_js/*.js` | esbuild entries, one per loaded script → `assets/js/` (generated, git-ignored) |
| `_js/{motion,ui,lib}/` | Modules imported by the entries; never loaded directly |

## Components (Liquid)

- File `_includes/components/<name>.html`, starting with a `{%- comment -%}` block that documents params (required/optional).
- Root element: BEM block class + `data-component-name="<name>"`.
- Behaviour is declared with `data-*` attributes (`data-reveal`, `data-banner-scene`, …), never by selecting on CSS classes from JS.
- Config from Liquid (i18n strings, `_config.yml` values) reaches JS through `data-*` attributes on the component, never Liquid inside `<script>`. No inline scripts.
- Page-specific entries load from the include itself with `{% include script.html name="<entry>" %}` (handles path and cache-busting).

## SCSS — 7-1 + BEM

- Entry point: [assets/css/style.scss](assets/css/style.scss). Order: abstracts → vendors → base → layout → components → pages → themes. New partial = new `@use` line in the right group.
- `abstracts/` emits no CSS: `_variables` (container, `$breakpoints`, `$z-layers`, `$header-clearance`), `_functions` (`z()`), `_mixins` (`below()`, `visually-hidden`, `scroll-shadows`). Partials load all of it with `@use "../abstracts" as *`. Only `@use`, never `@import`.
- **Always BEM** (`.block`, `.block__element`, `.block--modifier`), one block per partial, partial name = block name. A list wrapper may share the partial with its item (`.cards`/`.card`, `.chips`/`.chip`). Nest with `&__` / `&--`; no nesting by tag or descendant chains.
- Only exception: `.prose` (markdown-generated content) may style bare tags; same for the Markdown body of a component (e.g. `.card p:last-child`), with a comment.
- No magic numbers for shared concerns: media queries only via `@include below(sm|md|lg)`, z-index only via `z(header|floating|overlay)`. Add a key to the map instead of a bare value.
- Runtime design tokens are CSS custom properties in `themes/_default.scss` (`--accent`, `--tint`, `--glass`, `--code-bg`, …). No hardcoded colours in components; a new colour = a new token. Sass variables only for compile-time values.
- `layout/` = page skeleton (`.wrap`, `.section`, `.site-header`, `.site-nav`, `.site-footer`). `pages/` = blocks used by one page only; once reused, move it to `components/`.

## JS

- Every `_js/*.js` file is an esbuild entry (`npm run build`, glob in `package.json`); shared imports become hashed chunks in `assets/js/chunks/`. Add an entry = add a file, nothing else to configure.
- `_js/site.js`: loaded on every page by `_layouts/base.html`; calls the `_js/ui/` modules. Each `ui` module exports one default function that looks up its `data-*` hook and returns early if absent.
- `_js/motion.js` + `_js/motion/`: GSAP, one module per `data-*` attribute, all skipped under `prefers-reduced-motion`.
- `_js/lib/`: shared code — `env` (dpr, reduced motion, pointer), `math` (`ease`, `prog`), `canvas` (`fit`, `onResize`, `loopWhileVisible`), `parcel` (palette + top-down drawing), `parcel-story` (banner timeline + playback). Reuse before writing a new rAF/resize loop.
- Canvas scenes (`hero-bg`, `banner-<scene>`, `error-page`, `lab-parcel`) are their own entries, loaded only by the include that needs them. They must render a static frame under reduced motion and pause off screen.
- ES modules, no framework, no globals (except what third parties require, e.g. `window.disqus_config`).

## React islands (planned)

Goal: some components written in React, while Jekyll keeps rendering the full HTML.

- **Liquid stays the source of the markup.** The include renders a complete, usable static fallback; React replaces/enhances it on the client.
- Mount point contract: `<div data-island="<name>" data-props='{{ include.props | jsonify }}'>…static fallback…</div>`.
- Sources in `_js/islands/<name>.jsx`; one entry `_js/islands.js` that finds `[data-island]` and **lazy-imports** (`import()`) only the islands on the page. The build already uses `--splitting --format=esm`, so each island becomes its own chunk.
- Use `createRoot`, not `hydrateRoot`: Jekyll's HTML is not React's SSR output, so hydration would mismatch.
- Hydrate on visibility (`IntersectionObserver`) or idle unless the island is above the fold.
- Island styles still live in `_sass/components/` with BEM — no CSS-in-JS, no CSS modules.
- Props are data only (from `_data/` or front matter); i18n strings passed in via props from `t`, not duplicated in JS.
- Add `react`/`react-dom` and the islands build step only when the first island is actually introduced; the CI workflow already runs `npm ci && npm run build`.

## Checks before finishing

- `npm run build && bundle exec jekyll build` succeeds with no Sass warnings.
- Both `/` and `/en/` render; new UI strings exist in both languages in `_data/i18n.yml`.
- No horizontal scroll at 360px width.
