# EduStream LMS

A full-stack Learning Management System (LMS) monorepo built with TypeScript, React/Vite frontend, and an Express API backend.

## Project Structure

```
/
├── artifacts/
│   ├── edustream/          # React + Vite frontend (preview path: /)
│   └── api-server/         # Express REST API (preview path: /api)
├── lib/
│   ├── db/                 # Drizzle ORM + PostgreSQL schema
│   ├── api-spec/           # OpenAPI spec (orval codegen)
│   ├── api-client-react/   # Generated React Query API client
│   └── api-zod/            # Generated Zod validators
└── pnpm-workspace.yaml
```

## How to Run

Dependencies are managed with **pnpm**. Install from the workspace root:

```bash
pnpm install
```

The three services are started via Replit workflows:
- **EduStream web** — `pnpm --filter @workspace/edustream run dev`
- **API Server** — `pnpm --filter @workspace/api-server run dev`

## Frontend (artifacts/edustream)

- **Stack**: React 18, Vite, TypeScript, Framer Motion, Wouter (routing), TanStack Query
- **Styling**: Custom CSS with design tokens (see `src/styles/variables.css`), plus Tailwind CSS
- **Theme**: Dark/light mode via `ThemeContext` — applies `data-theme="dark"` to `<html>`
- **Routes**:
  - `/` — Login page (landing + auth card)
  - `/signup` — Sign-up page
  - `/dashboard` — Student Dashboard (US21–US40)

### Dashboard Features (US21–US40)
- **Sidebar** (US21, US26): collapsible 280px → icon-only; mobile drawer
- **Header** (US22): sticky, greeting, search trigger, notifications, theme toggle, avatar
- **Course Summary** (US23): hero card with animated progress bar
- **Stats Cards** (US28): Active Courses, Completed, Learning Hours, Streak, Certificates
- **Recently Accessed** (US24): last 5 lessons with hover animations
- **Courses Table** (US31): sortable, with progress bars and status badges
- **Edit Modal** (US33–34, US40): pre-filled form, saves to local state
- **Delete Confirm** (US32, US36): danger dialog
- **Logout Confirm** (US25): dialog before sign-out
- **Search** (US39): animated overlay with live filtering
- **Empty States** (US38): friendly message + Browse Courses button
- **Toasts** (US35): reuses existing `ToastContext`

## API Server (artifacts/api-server)

- **Stack**: Express, TypeScript, Pino logger
- **Routes**: `/api/health` — health check
- **Database**: PostgreSQL via Drizzle ORM — schema in `lib/db/src/schema/index.ts`
- Requires `DATABASE_URL` environment variable

## Environment Variables / Secrets

| Variable | Where set | Purpose |
|---|---|---|
| `SESSION_SECRET` | Replit Secret | Session signing |
| `DATABASE_URL` | Replit Secret | PostgreSQL connection |
| `PORT` | Replit (auto) | Dev server port per artifact |
| `BASE_PATH` | Replit (auto) | Vite base path per artifact |

## Design Language

- **Background**: Dark charcoal (`#0a0f1e`) / Light (`#eef3fd`)
- **Primary gradient**: Blue `#3b82f6` → Purple `#7c3aed`
- **Cards**: Glassmorphism (`backdrop-filter: blur`) with `var(--card-bg-glass)`
- **Radius**: `var(--radius-lg)` = 28px, `--radius-md` = 18px, `--radius-sm` = 12px
- **Typography**: Poppins (headings, 600–800), Inter (body, 400–700)
- **Animations**: Framer Motion for page/component transitions; CSS keyframes for blobs

## User Preferences

- Maintain the existing CSS variable token system — do not introduce a different styling approach
- Reuse existing components before creating new ones
- Keep components under ~150 lines where practical
- Do not restructure or migrate the pnpm monorepo layout
