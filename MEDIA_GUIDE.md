# Media Guide

## Current Approach

Project videos are stored in Cloudflare R2, not in this GitHub repository. Markdown project records should reference R2-hosted video URLs after the team confirms the media can be public.

## Recommended File Organization

```text
public/media/
  covers/
  screenshots/
  slides/
```

Use lowercase filenames with hyphens:

```text
2025-2026-cvc-champ-cover.jpg
2025-2026-cvc-champ-screen-01.jpg
```

## Image Storage Decision

Use the repository as the image source for now.

The preferred storage approach is:

1. Keep project images in the repo.
2. Use Astro's image pipeline for optimization.
3. Avoid adding external storage unless the repo becomes too large later.

This keeps the first public version simple: no extra storage provider, no new
credentials, and no separate media deployment flow.

## Astro Image Pipeline

When adding project covers or screenshots, prefer Astro image handling instead
of serving original large files directly.

Use `astro:assets` and the `<Image />` component where practical so Astro can
generate optimized image output such as responsive sizes and modern formats.

Target workflow for later image work:

1. Place source images in a project-specific folder.
2. Import images into the relevant Astro component or page.
3. Render them through Astro's `<Image />` component.
4. Check the generated build output before committing large media changes.

For this project scale, the expected pattern is several images per project
across a few dozen projects. After Astro optimization, this should usually stay
small enough for the GitHub repo and GitHub Pages workflow.

Do not add video files to `public/media/`. Keep the repository for source code,
Markdown, covers, screenshots, and small approved images only.

## Video Handling

Use Cloudflare R2 for approved videos. In project Markdown:

```yaml
video:
  src: "https://pub-example.r2.dev/example-video.mp4"
  type: "video/mp4"
  caption: "Demo walkthrough"
```

When the Cloudflare Pages site has an R2-backed `/videos/...` route, prefer:

```yaml
video:
  src: "/videos/example-video.mp4"
  type: "video/mp4"
```

Do not download, rehost, or publish student media unless the team has confirmed that it may appear on the public platform.
