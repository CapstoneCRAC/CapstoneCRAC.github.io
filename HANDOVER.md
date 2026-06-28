# Handover Notes

## What The Maintainer Updates

- `src/data/capstone-platform-content.json` for project records.
- `public/media/` for static images, slides, and screenshots when approved.
- `astro.config.mjs` only when the hosting URL or GitHub repository name changes.

## Yearly Update Checklist

1. Add the new cohort to `cohorts`.
2. Add confirmed student project records to `projects`.
3. Mark whether each project has a submitted video.
4. Add approved media links or static files.
5. Run `pnpm build`.
6. Commit and push.

## Scope Reminder

This first version is a static showcase site. It does not include login, CMS editing, student self-submission, approval workflow, database backend, comments, voting, or live hosting of each student's project app.
