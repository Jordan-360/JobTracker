# Decisions Log

A running record of technical decisions for the Job Tracker project:
what was decided, why, and what alternatives were considered.

---

## 2026-08-14 — React over Angular

**Decision:** Use React (with Vite) instead of Angular.
**Why:** Already have demonstrable Angular experience from the Pierce
County internship. React is more commonly requested in job postings,
and this project is a chance to build real React fluency. The app's
scope (list, form, filter) doesn't need Angular's DI/module machinery.
**Alternatives considered:** Angular (rejected — no new skill signal,
more overhead than the project needs).

## 2026-08-14 — Vite as build tool

**Decision:** Use Vite for dev server + bundling.
**Why:** Current standard for React projects (Create React App is
effectively deprecated). Fast HMR during development. Already used on
my portfolio site, so no new tooling to learn.
**Alternatives considered:** Create React App (rejected — outdated),
Next.js (rejected — no need for SSR/routing at this scale).

## 2026-08-14 — localStorage over a database

**Decision:** Persist data in the browser via localStorage, with a
JSON export/import feature as a manual backup layer.
**Why:** Single user, small dataset, no auth or multi-device
requirement. A database solves problems this project doesn't have.
Export/import offsets localStorage's main weakness (tied to one
browser).
**Alternatives considered:** Full backend + database (rejected —
unjustified complexity for a single-user tool). No backup mechanism
at all (rejected — too risky given localStorage is wiped by clearing
browser data).

## 2026-08-14 — Status as a fixed enum, not free text

**Decision:** `status` field is one of: Applied, Interviewing, Offer,
Rejected — not a free text field.
**Why:** Keeps data clean and makes filtering/sorting reliable.
Defined as a constant in `data/statusOptions.js`.

## 2026-08-14 — Skipped `features/`, `services/`, `context/` folders

**Decision:** Flat structure — `components/`, `hooks/`, `data/`,
`utils/` only.
**Why:** This is effectively a single-feature app (track job
applications). `features/` folders earn their keep with multiple
distinct feature areas, which this doesn't have. No backend means
no `services/`. State is simple enough for useState, so no
`context/`/store needed yet.
