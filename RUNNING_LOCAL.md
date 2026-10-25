# Running this site locally

**Jekyll** site with a small **npm/esbuild** step that bundles the JS (every `_js/*.js` is an entry).

## Requirements

- Ruby 3.x+ (on macOS: `brew install ruby`, then put `/opt/homebrew/opt/ruby/bin` first on your `PATH`)
- Bundler 2.6.9 (`gem install bundler -v 2.6.9`)
- Node 22 + npm

## Setup

```bash
bundle install
npm install
```

## Run (two terminals)

```bash
# 1 — rebuild the JS bundles on change (_js/*.js → assets/js/)
npm run watch

# 2 — serve the site
bundle exec jekyll serve --livereload
```

Open http://127.0.0.1:4000 (Italian) and http://127.0.0.1:4000/en/ (English).

`assets/js/` is generated and git-ignored: run `npm run build` at least once,
otherwise pages render but without any JS (animations, cookie banner, blog filter; the contact form falls back to a plain POST).

Google Tag Manager and Sentry load only in production builds
(`JEKYLL_ENV=production bundle exec jekyll build`).

## Notes

- The WebGPU lab (`/lab/`) needs a WebGPU-capable browser (recent Chrome/Edge/Safari),
  on `127.0.0.1`/`localhost` (secure context), not a LAN IP.
- Deploy is automatic on push to `master` (`.github/workflows/jekyll.yml`): the workflow
  runs `npm ci && npm run build`, then the Jekyll build.
