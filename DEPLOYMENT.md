# Deployment

## GitHub Pages

This repo includes `.github/workflows/deploy.yml`, based on the official Astro GitHub Pages workflow.

Before deployment:

1. Push this folder as the root of the GitHub repository.
2. In GitHub, open Settings > Pages.
3. Set the Pages source to GitHub Actions.
4. Update `astro.config.mjs` with the correct `SITE_URL` and `BASE_PATH`.
5. Commit the generated lockfile after `pnpm install`.

## Build Locally

```bash
pnpm install
pnpm build
```

## Common Fixes

- If links are broken under GitHub Pages, check `BASE_PATH`.
- If Actions cannot detect pnpm, make sure `pnpm-lock.yaml` is committed.
- If media links do not open for reviewers, check SharePoint permissions.
