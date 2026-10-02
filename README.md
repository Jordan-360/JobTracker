# 📋 Job Tracker

> **Your job search, organized.** A clean, fast, zero-backend job application tracker built as a hands-on React learning project.

---

## ✨ Features

| Feature                 | Description                                                                |
| ----------------------- | -------------------------------------------------------------------------- |
| ➕ **Add Applications** | Log job title, company, status, date, and both posting & application links |
| 🏷️ **Status Tracking**  | Four lifecycle stages: `Applied` → `Interviewing` → `Offer` / `Rejected`   |
| ✏️ **Inline Editing**   | Edit any row directly in the table — no page navigation                    |
| 🗑️ **Delete Entries**   | Remove applications you no longer want to track                            |
| 💾 **Auto-Persistence** | Everything saves to `localStorage` automatically — no account needed       |
| 📤 **JSON Export**      | Back up your data as a `.json` file at any time                            |
| 📥 **JSON Import**      | Restore or transfer your data from a previously exported file              |

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-Plain-1572B6?style=flat-square&logo=css3&logoColor=white)

- **React 19** — UI layer with `useState` / `useContext` (no Redux — not needed at this scale)
- **Vite 8** — lightning-fast dev server and build tool
- **Plain CSS** — zero framework dependencies, hand-rolled styles
- **localStorage** — browser-native persistence, no backend required
- **ESLint + Prettier** — enforced code style on every save
- **Husky + lint-staged** — pre-commit hooks keep the repo clean automatically

---

## 📁 Project Structure

```
src/
├── components/
│   ├── JobForm.jsx         # Add-application form
│   ├── JobTable.jsx        # Table wrapper
│   ├── JobRow.jsx          # Individual row with edit/delete
│   └── StatusBadge.jsx     # Colored status pill
├── hooks/
│   └── useLocalStorage.js  # Persistent state hook
├── utils/
│   └── exportImport.js     # JSON export & import helpers
├── data/
│   └── statusOptions.js    # Status enum values
├── App.jsx
├── App.css
└── index.css
```

---

## 🗂️ Data Shape

Each job application is stored as a plain object:

```js
{
  id: string,              // crypto.randomUUID()
  jobTitle: string,
  companyName: string,
  status: string,          // "Applied" | "Interviewing" | "Offer" | "Rejected"
  dateApplied: string,     // ISO date (YYYY-MM-DD)
  postingLink: string,     // URL to the original job posting
  applicationLink: string  // URL to your submission on the company's portal
}
```

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/Jordan-360/jobtracker.git
cd jobtracker

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser — that's it.

---

## 📜 Available Scripts

| Command                    | Description                          |
| -------------------------- | ------------------------------------ |
| `npm run dev`              | Start the Vite dev server with HMR   |
| `npm run build`            | Production build to `dist/`          |
| `npm run preview`          | Preview the production build locally |
| `npm run lint`             | Run ESLint across the project        |
| `npx prettier --check src` | Check formatting without writing     |
| `npx prettier --write src` | Auto-fix all formatting              |

---

## 🔄 Status Lifecycle

```
📨 Applied  ──►  🎙️ Interviewing  ──►  🎉 Offer
                                  └──►  ❌ Rejected
```

---

## 💡 Design Decisions

- **No backend** — deliberately. For a single-user personal tool, `localStorage` + JSON export covers every real need without the complexity of auth, a database, or a server.
- **No state library** — React's built-in `useState` is the right tool at this scale. Adding Redux or Zustand here would be engineering for the sake of engineering.
- **No CSS framework** — writing plain CSS reinforces fundamentals and keeps the bundle tiny.
- **Custom `useLocalStorage` hook** — state persists transparently; components treat it exactly like `useState`.

---

## 🧰 Tooling

| Tool            | Purpose                                                                     |
| --------------- | --------------------------------------------------------------------------- |
| **ESLint**      | Catches bugs and enforces React best practices (hooks rules, refresh rules) |
| **Prettier**    | Consistent formatting — no semicolons, single quotes, 2-space indent        |
| **Husky**       | Runs lint-staged on every `git commit`                                      |
| **lint-staged** | Only lints/formats files that are staged, keeping commits fast              |

---

## 🗺️ Roadmap

- [ ] Filter / sort applications by status or date
- [ ] Search bar across all fields
- [ ] Notes / comments field per application
- [ ] Stats dashboard (application count by status, applications per week)
- [ ] Dark mode

---

## 📝 License

This project is for personal/educational use. Feel free to fork and adapt it for your own job search.

---

<p align="center">Built to learn React — and to actually land a job. 🚀</p>
