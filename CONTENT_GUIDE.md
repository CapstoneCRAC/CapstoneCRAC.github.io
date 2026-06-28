# Content Guide

The current JSON source remains at `src/data/capstone-platform-content.json`.

The Markdown demo shows the proposed admin-friendly workflow:

- Edit `src/content/projects/demo-markdown-project.md`.
- Put media in `public/media/projects/markdown-demo/`.
- The Examples page automatically lists Markdown projects.
- Each project appears at `/examples/project-file-name/`.

## Markdown Project Example

```md
---
title: "Mandarin Pronunciation App"
student: "Luo Xiangyu"
year: "2025-2026"
video:
  src: "/media/projects/project-name/video.mp4"
  type: "video/mp4"
gallery:
  - src: "/media/projects/project-name/01-home.jpg"
    alt: "Home screen"
    title: "Home Screen"
    caption: "Entry point for the app."
---

Project description goes here.
```

## Add A Project

1. Add a new object to `projects`.
2. Use a stable lowercase `id`, such as `2026-2027-09-project-name`.
3. Fill in `year`, `cohortId`, `order`, `student`, `studentSubmittedVideo`, `title`, and `description`.
4. Run `pnpm build` before publishing.

## Current Display Rules

- Coh3 projects are treated as current example records.
- Coh4 projects are treated as upcoming records.
- Coh1 and Coh2 are kept at cohort level until full counts and display rules are confirmed.
- Video badges appear when `studentSubmittedVideo` is `true`.

## Maintenance Flow

```text
edit src/data/capstone-platform-content.json
pnpm build
git add .
git commit -m "Update project content"
git push
```
