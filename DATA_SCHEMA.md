# Data Schema

## Cohort

| Field | Required | Description |
|---|---|---|
| `id` | Yes | Stable machine id, for example `coh3`. |
| `label` | Yes | Human label, for example `Coh3`. |
| `year` | Yes | Academic year text. |
| `involvement` | Yes | Summary of cohort relationship to the project. |
| `studentCount` | No | Number when confirmed, otherwise `null`. |
| `studentCountStatus` | Yes | Status note for missing or confirmed counts. |
| `platformDisplayPlan` | Yes | How the cohort should appear on the platform. |

## Project

| Field | Required | Description |
|---|---|---|
| `id` | Yes | Stable URL slug. Do not change after publishing. |
| `year` | Yes | Academic year. |
| `cohortId` | Yes | Must match a cohort `id`. |
| `order` | Yes | Display order within the cohort/year. |
| `student` | Yes | Student or team name. |
| `studentSubmittedVideo` | Yes | `true` when a CP video exists. |
| `title` | Yes | Project title. |
| `description` | Yes | Short project description. |

Future optional fields can include `coverImage`, `screenshots`, `videoUrl`, `slidesUrl`, `demoUrl`, `githubUrl`, `supervisor`, and `learningOutcomes`.
