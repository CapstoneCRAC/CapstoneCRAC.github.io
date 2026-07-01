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
- GitHub Pages and GitHub Actions

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

Update the Markdown files, commit the change, and push to the main branch. When GitHub Pages is configured to use GitHub Actions, `.github/workflows/deploy.yml` will build and deploy the site.

## GitHub Pages Setup

Before final deployment, update these values in `astro.config.mjs`:

- `site`: the GitHub Pages site URL, such as `https://username.github.io`
- `base`: the repository path, such as `/repo-name`

For a repository named `username.github.io`, `base` can remain `/`.
