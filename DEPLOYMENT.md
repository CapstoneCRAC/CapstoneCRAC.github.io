# Deployment

## Cloudflare Pages

This site is deployed by Cloudflare Pages from the `main` branch of
`CapstoneCRAC/CapstoneCRAC.github.io`.

Cloudflare Pages settings:

- Project: `capstonecrac-github-io`
- Production branch: `main`
- Build command: `pnpm build`
- Build output directory: `dist`
- Current Pages URL: `https://capstonecrac-github-io.pages.dev/`

The current `pages.dev` URL is for testing only and should not be treated as
the production link. Before public launch, university domain support is needed
for:

- Main site custom domain: `capstonecrac.edu.hk`
- R2 media/video bucket subdomain: `media.capstonecrac.edu.hk`

## Build Locally

```bash
pnpm install
pnpm build
```

## Common Fixes

- If links are broken after changing domains, check `site` and `base` in `astro.config.mjs`.
- If Actions cannot detect pnpm, make sure `pnpm-lock.yaml` is committed.
- If videos do not load, confirm the Markdown `video.src` points to the correct Cloudflare R2 URL.
