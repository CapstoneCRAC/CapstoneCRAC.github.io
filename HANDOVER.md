# Handover Notes

## What The Maintainer Updates

- `src/content/cohorts/*.md` for public cohort display rules.
- `src/content/projects/*.md` for project records.
- `public/media/` for static images, slides, and screenshots when approved.
- `astro.config.mjs` only when the hosting URL or GitHub repository name changes.

## Yearly Update Checklist

1. Add or update the cohort Markdown file in `src/content/cohorts/`.
2. Add confirmed project Markdown files in `src/content/projects/`.
3. Mark whether each project has a submitted video.
4. Set `detailLevel` to `full` or `preview`.
5. Add approved media links or static files.
6. Run `pnpm build`.
7. Commit and push.

## Scope Reminder

This first version is a static showcase site. It does not include login, CMS editing, author self-submission, approval workflow, database backend, comments, voting, or live hosting of each project app.
