# Running this site locally

**Jekyll** site with a small **npm/esbuild** step that bundles the GSAP animations.

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
# 1 — rebuild the JS bundle on change (_js/ → assets/js/motion.js)
npm run watch

# 2 — serve the site
bundle exec jekyll serve --livereload
```

Open http://127.0.0.1:4000 (Italian) and http://127.0.0.1:4000/en/ (English).

`assets/js/motion.js` is generated and git-ignored: run `npm run build` at least once,
otherwise the homepage works but without animations.

Google Tag Manager and Sentry load only in production builds
(`JEKYLL_ENV=production bundle exec jekyll build`).

## Notes

- The WebGPU lab (`/lab/`) needs a WebGPU-capable browser (recent Chrome/Edge/Safari),
  on `127.0.0.1`/`localhost` (secure context), not a LAN IP.
- Deploy is automatic on push to `master` (`.github/workflows/jekyll.yml`): the workflow
  runs `npm ci && npm run build`, then the Jekyll build.
