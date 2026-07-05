# Content Guide

The public site is generated from Markdown content collections.

## Cohorts

Edit cohort display rules in `src/content/cohorts/*.md`.

```md
---
cohortId: "coh3"
year: "2025-2026"
status: "Current"
count: 10
displayMode: "full"
publiclyVisible: true
order: 1
---
```

Use `publiclyVisible: false` for cohorts that should stay hidden until public data is ready.

## Projects

Each project is a Markdown file in `src/content/projects/`.

```md
---
title: "Project Title"
author: "Author Name"
year: "2025-2026"
cohortId: "coh3"
order: 1
detailLevel: "full"
hasVideo: true
summary: "Short public project description."
cover:
  src: "/media/projects/project-name/cover.jpg"
  alt: "Project cover image"
video:
  src: "https://pub-example.r2.dev/project-demo.mp4"
  type: "video/mp4"
  caption: "Demo walkthrough"
gallery:
  - src: "/media/projects/project-name/01-home.jpg"
    alt: "Home screen"
    title: "Home Screen"
    caption: "Entry point for the app."
---

Longer public project story goes here.

[Video: Inline demo video placed inside the project story](https://pub-example.r2.dev/project-demo.mp4)
```

Use `detailLevel: "preview"` for upcoming projects that should appear in the Projects page preview panel without generating a full detail page.

`order` is optional. If it is omitted, the site sorts by the Markdown filename. If two projects use the same `order`, the filename is used as a stable tie-breaker.

## Current Display Rules

- `2025-2026` is visible as Current with 10 full project cards.
- `2026-2027` is visible as Upcoming with 8 preview cards.
- `2024-2025` and `2023-2024` are hidden until public project data and display depth are confirmed.
- The `▸ Video` chip appears when `hasVideo` is `true`.
- Project order is `order` first, then filename.

## Maintenance Flow

```text
edit src/content/cohorts/*.md
edit src/content/projects/*.md
pnpm build
git add .
git commit -m "Update project content"
git push
```

Do not add internal email wording, private operational notes, or non-public support descriptions to Markdown frontmatter or public body copy.
