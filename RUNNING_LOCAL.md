# Running this site locally

This is a **Jekyll** site (Ruby) whose front-end assets (JS/CSS) are built with
**webpack** (Node). To run it locally you need both toolchains.

## Requirements

| Tool      | Version used / verified | Notes                                   |
| --------- | ----------------------- | --------------------------------------- |
| Ruby      | 4.0.x (Homebrew)        | macOS system Ruby (2.6) is too old      |
| Bundler   | 2.6.9                   | pinned in `Gemfile.lock` (`BUNDLED WITH`) |
| Node      | 22.x (works)            | `package.json` engines say 17.4.0, but 22 builds fine |
| npm       | 10.x                    |                                         |

## One-time setup

### 1. Install a modern Ruby (macOS / Homebrew)

The system Ruby that ships with macOS is 2.6 and cannot run current Jekyll.
Install Ruby with Homebrew:

```bash
brew install ruby
```

Homebrew installs it under `/opt/homebrew/opt/ruby` **without** linking it ahead
of the system Ruby. Put it first on your `PATH` so `ruby`, `gem`, and `bundle`
resolve to the new version. Add this to `~/.zshrc` (or run it per-shell):

```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
```

Verify:

```bash
ruby -v      # ruby 4.0.x ...
```

### 2. Install the Ruby gems (Jekyll & plugins)

The `Gemfile.lock` pins Bundler 2.6.9, so install that exact version first, then
the gems:

```bash
gem install bundler -v 2.6.9
bundle install
```

This installs Jekyll 4.x plus the plugins:
`jekyll-multiple-languages-plugin`, `jekyll-seo-tag`, `jekyll-redirect-from`.

### 3. Install the Node dependencies

```bash
npm install
```

## Running

The front-end assets must be built **before** (or alongside) serving the site —
Jekyll only serves what webpack has emitted.

### Build assets once

```bash
npm run build        # webpack --config webpack.config.js
```

Or rebuild on change while you work:

```bash
npm run watch        # webpack --env watch=true
```

### Serve the site

```bash
npm run dev          # bundle exec jekyll serve
```

Then open: **http://127.0.0.1:4000**

> If `bundle` resolves to the wrong Ruby, prefix the command:
> `PATH="/opt/homebrew/opt/ruby/bin:$PATH" bundle exec jekyll serve`

The site is multilingual: English at `/` and Italian at `/it/`.

## Typical workflow (two terminals)

```bash
# terminal 1 — rebuild assets on change
npm run watch

# terminal 2 — serve with live regeneration
npm run dev
```

## Stopping the server

If you started Jekyll detached (`jekyll serve --detach`):

```bash
pkill -f jekyll
```

A foreground `npm run dev` stops with `Ctrl+C`.

## Troubleshooting

- **`Could not find 'bundler' (2.6.9)`** — install the pinned Bundler:
  `gem install bundler -v 2.6.9`.
- **`jekyll not found` / gem errors on Ruby 2.6** — you're using macOS system
  Ruby. Make sure `/opt/homebrew/opt/ruby/bin` is first on your `PATH`.
- **Styles/JS missing** — run `npm run build`; Jekyll serves webpack's output,
  so assets must exist before serving.
