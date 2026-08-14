# Job Tracker — Project Context

## What this is

A self-directed React learning project: a simple job application tracker.
Single user, no backend — built to deepen React fundamentals and rebuild
production-style habits, not to ship fast or add unnecessary complexity.

## Tech stack

- React 19 + Vite
- Plain CSS (no framework/library)
- State: React's built-in useState/useContext (no Redux/Zustand — not needed at this scale)
- Persistence: browser localStorage, with JSON export/import as a manual backup layer
- No backend, no database — deliberate choice, not a gap

## Working agreement (IMPORTANT)

- I write the code myself. Do NOT generate full components, functions,
  or solutions unless I explicitly ask you to.
- Default mode: review, explain, point out bugs/issues, ask me
  leading questions — don't just hand me the fix.
- If I'm stuck and ask for a solution, explain the _reasoning_ first,
  then show minimal code, not a full rewrite.
- Flag anti-patterns and explain _why_, not just _what_.
- Favor Conventional Commits style for any commit message suggestions
  (feat:, fix:, chore:, docs:, refactor:).

## Folder structure

src/
components/ # UI pieces — JobTable, JobRow, JobForm, StatusBadge
hooks/ # custom hooks — useLocalStorage
data/ # constants — statusOptions.js (status enum values)
utils/ # pure helper functions — exportImport.js

## Data shape

One job entry:
{
id: string, // crypto.randomUUID()
jobTitle: string,
companyName: string,
status: string, // "Applied" | "Interviewing" | "Offer" | "Rejected"
dateApplied: string, // ISO date
postingLink: string, // link to the job posting
applicationLink: string, // link to the application on the company's own tracker
}

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — run ESLint
- `npx prettier --check src` — check formatting
- `npx prettier --write src` — auto-fix formatting

## Tooling already in place

- ESLint (flat config, React hooks + refresh rules) + eslint-config-prettier
- Prettier (.prettierrc — no semicolons, single quotes, 2-space tabs)
- Husky + lint-staged — auto-runs ESLint + Prettier on staged files before every commit

## Git workflow

- `main` stays stable/deployable
- Feature branches for actual work (feature/job-form, fix/date-bug), merged via PR
- Conventional Commits for all commit messages
