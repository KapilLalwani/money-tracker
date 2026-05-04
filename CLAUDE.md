# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Start dev server:**
```bash
npx vite --port 3000
```
> `npm start` is broken — `package.json` still has the old `react-scripts start` script. Use `npx vite` directly until that is updated.

**Build for production:**
```bash
npx vite build
```

**Lint:**
```bash
npx eslint .
```

There are no tests configured in this project.

## Architecture

This is a **single-page, client-side only** React app with no routing, no backend, and no persistence. All data lives in component state and is lost on refresh.

### Entry point flow
`index.html` → `src/main.jsx` (mounts at `#root`) → `src/App.jsx`

### Code structure

The app is split into four components. State management uses only `useState` — no context, no external state library.

| File | Responsibility |
|------|---------------|
| `src/App.jsx` | Holds `transactions[]` state; passes it down and wires components together |
| `src/Summary.jsx` | Receives `transactions`, computes `totalIncome`, `totalExpenses`, `balance`, renders summary cards |
| `src/TransactionForm.jsx` | Owns its own form state (`description`, `amount`, `type`, `category`); calls `onAdd(transaction)` prop on submit |
| `src/TransactionList.jsx` | Owns filter state (`filterType`, `filterCategory`); receives `transactions` and renders the filtered table |

The core data model: `{ id, description, amount: number, type: "income"|"expense", category, date: "YYYY-MM-DD" }`

### Known issues
- A `.delete-btn` CSS class is defined in `App.css` but no delete feature exists in the UI
- No input validation beyond empty-field checks
