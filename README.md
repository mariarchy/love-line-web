# Love Line Web

Landing site for the Love Line phone matching service.

## Stack

- **Next.js 14** (App Router) — single codebase, API routes, server components, easy deploy (e.g. Vercel).
- **TypeScript** — type safety and maintainability.
- **Tailwind CSS** — design tokens (love-line palette), responsive layout.
- **Prisma** — type-safe Postgres read-only access (schema mirrored from backend).
- **Framer Motion** — lightweight animations (date reveal).
- **shadcn-style UI** — minimal `Input` and patterns; add more from [shadcn/ui](https://ui.shadcn.com) as needed.

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Environment**

   Copy `.env.example` to `.env` and set your Postgres URL:

   ```bash
   cp .env.example .env
   # Edit .env and set DATABASE_URL
   ```

3. **Database**

   This app **reads** from the same Postgres database as the **love-line** backend. The backend owns the schema (participants, matches, etc.). Do **not** run `prisma db push` or migrations from this repo — they would conflict with the backend.

   - Point `DATABASE_URL` at the same DB as the backend (see [docs/LOCAL_DEV_WITH_BACKEND.md](docs/LOCAL_DEV_WITH_BACKEND.md)).
   - Run `npx prisma generate` after cloning or after pulling backend schema changes. Optionally run `npx prisma db pull` to refresh the Prisma schema from the DB.
   - Seed data using the **backend** repo (e.g. `pnpm run db:seed` in love-line).

4. **Napkin images (locale-specific toll-free numbers)**

   The landing page shows a different napkin image by region (US/CA vs UK). Add:

   - `public/images/napkin-us.png` — US/CA toll-free number
   - `public/images/napkin-uk.png` — UK toll-free number

   Region is inferred from `Accept-Language` and, on Vercel, `x-vercel-ip-country`.

5. **Run dev server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Pages

- **`/`** — Landing: video, copy, napkin image (by locale), vintage phone, phone lookup (reveal date/time/name), link to letter.
- **`/letter`** — Letter to participants (“before your date”); layout and content unchanged from original.

## API

- **`POST /api/lookup`** — Body: `{ "phone": "..." }`. Returns `{ ok: true, dateTime, dateName }` or `{ ok: false, error }`. Looks up participant by phone (E.164) in the shared DB, then their match’s `scheduledAt` and the match’s name.

## Conventions

- **Components** — Reusable UI in `components/`; shadcn-style primitives in `components/ui/`.
- **Server vs client** — Use server components by default; add `"use client"` only where needed (forms, animations, browser APIs).
- **Styles** — Global design tokens in `app/globals.css` and Tailwind theme; page-specific CSS (e.g. letter) in route folders.
- **Data** — Prisma in `lib/db.ts` (read-only mirror of backend tables); single instance in dev to avoid connection exhaustion. Backend (love-line) owns schema and migrations.
- **Running with the backend** — See [docs/LOCAL_DEV_WITH_BACKEND.md](docs/LOCAL_DEV_WITH_BACKEND.md) for Prisma vs Kysely and connecting both apps to the same DB locally.
- **Scaling** — Add features (calendar, email, “we’re not really strangers” widget) as new routes and API routes; keep landing and letter minimal.

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start dev server         |
| `npm run build`| Production build         |
| `npm run start`| Start production server  |
| `npm run lint` | Run ESLint               |
| `db:generate`  | Generate Prisma client (run after clone or schema changes) |
| `db:pull`      | Pull schema from DB to refresh `prisma/schema.prisma` (backend owns DB) |

## Legacy static files

Original static files (`index.html`, `letter.html`, `styles.css`, `letter.css`, root `assets/`) are still in the repo. The app is served by Next.js; you can remove the old HTML/CSS and keep `assets/` as a backup or delete once you’re happy with the app.
