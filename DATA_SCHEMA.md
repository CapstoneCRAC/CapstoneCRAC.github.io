# Data Schema

Public content is stored as Astro Markdown collections.

## Cohort Markdown

Location: `src/content/cohorts/*.md`

| Field | Required | Description |
|---|---|---|
| `cohortId` | Yes | Stable machine id, for example `coh3`. |
| `year` | Yes | Year range, for example `2025-2026`. |
| `status` | Yes | `Current`, `Upcoming`, or `Past`. |
| `count` | Yes | Public project count when known, otherwise `null`. |
| `displayMode` | Yes | `full`, `preview`, or `topics`. |
| `publiclyVisible` | Yes | `true` only when this cohort should render publicly. |
| `order` | Yes | Display order on the Projects page. |

## Project Markdown

Location: `src/content/projects/*.md`

| Field | Required | Description |
|---|---|---|
| filename | Yes | Stable URL slug. Do not change after publishing. |
| `title` | Yes | Project title. |
| `author` | Yes | Author or team name. |
| `year` | Yes | Year range. |
| `cohortId` | Yes | Must match a cohort `cohortId`. |
| `order` | No | Optional manual display order within the cohort/year. If omitted, filename order is used. Duplicate values are resolved by filename. |
| `detailLevel` | Yes | `full` generates a detail page; `preview` appears only in listing panels. |
| `hasVideo` | Yes | `true` when a public video is available. |
| `summary` | Yes | Short public project description. |
| `cover` | No | Optional cover image with `src` and `alt`. |
| `video` | No | Optional hosted video file metadata. |
| `gallery` | No | Optional gallery entries with `src`, `alt`, `title`, and optional `caption`. |

Do not put internal email wording, project-support notes, or non-public operational comments in these Markdown files.
