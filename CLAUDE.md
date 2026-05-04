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
All logic lives in a single monolithic component: **`src/App.jsx`**. There is no component decomposition, no context, and no external state library. State is managed entirely via `useState`:

- `transactions[]` — the core data model; each entry has `{ id, description, amount, type, category, date }`
- `description`, `amount`, `type`, `category` — controlled form inputs
- `filterType`, `filterCategory` — filter state for the transaction table

Derived values (totalIncome, totalExpenses, balance) are computed inline on each render from the `transactions` array.

### Known bugs (intentional — this is a teaching repo)
- `amount` is stored as a **string**, so financial calculations produce string concatenation instead of numeric addition
- A `.delete-btn` CSS class is defined in `App.css` but no delete feature exists in the UI
- No input validation beyond empty-field checks
