# EdUHK Capstone Project Platform

Minimal static site for showcasing capstone project work.

The first framework uses simple top-level pages:

- Home
- Projects
- About Us

The home page is intentionally light. Project stories and public background information live in their own sections. Technical setup is kept in maintainer documentation, not in the public navigation.

## Stack

- Astro
- TypeScript
- Tailwind CSS
- Markdown content collections
- Cloudflare Pages
- Cloudflare R2 for hosted project videos

## Local Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

The static output is generated in `dist/`.

## Content

Project and cohort records live in Markdown:

- `src/content/cohorts/*.md`
- `src/content/projects/*.md`

Update the Markdown files, commit the change, and push to the main branch.
Cloudflare Pages will build and deploy the site automatically.

## Cloudflare Pages Setup

Cloudflare Pages currently uses:

- Project: `capstonecrac-github-io`
- URL: `https://capstonecrac-github-io.pages.dev/`
- Build command: `pnpm build`
- Build output directory: `dist`

The current `pages.dev` URL is for testing only. Before production launch,
university domain support is needed for:

- `capstonecrac.edu.hk` for the main Cloudflare Pages site.
- `media.capstonecrac.edu.hk` for the Cloudflare R2 video bucket.
