# Running this site locally

Plain **Jekyll** site: no Node/webpack step anymore.

## Requirements

- Ruby 3.x+ (on macOS: `brew install ruby`, then put `/opt/homebrew/opt/ruby/bin` first on your `PATH`)
- Bundler 2.6.9 (`gem install bundler -v 2.6.9`)

## Setup and run

```bash
bundle install
bundle exec jekyll serve --livereload
```

Open http://127.0.0.1:4000 (Italian) and http://127.0.0.1:4000/en/ (English).

Google Tag Manager and Sentry load only in production builds
(`JEKYLL_ENV=production bundle exec jekyll build`), so local browsing doesn't pollute analytics.

## Notes

- The WebGPU lab (`/lab/`) needs a WebGPU-capable browser (recent Chrome/Edge/Safari).
  WebGPU requires a secure context: `127.0.0.1` / `localhost` work, a LAN IP does not.
- Deploy happens automatically on push to `master` (`.github/workflows/jekyll.yml`).
