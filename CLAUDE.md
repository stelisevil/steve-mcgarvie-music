# Steve McGarvie Music

A portfolio and resource site for Steve McGarvie — music educator, composer, and choir director. Features information about choirs, private tuition, and musical arrangements, plus gated rehearsal materials for choir members (audio tracks behind a password).

## Commands

```bash
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # Type-check + production build
npm run lint      # ESLint
npm run preview   # Preview production build
```

## Environment Variables

Required in `.env`:

```
VITE_DATO_TOKEN=        # DatoCMS GraphQL API token
VITE_SUPABASE_URL=      # Supabase project URL
VITE_SUPABASE_ANON_KEY= # Supabase anon key
```

## Stack

- React 19 + TypeScript (strict) + Vite 7
- React Router v7 (`BrowserRouter` in `main.tsx`, routes in `src/components/Body/`)
- Tailwind CSS v4 (via `@tailwindcss/vite` — no `tailwind.config.js`)
- React Hook Form + Yup for all forms
- DatoCMS (GraphQL via `src/services/getDato.ts`)
- Supabase for choir audio file storage (`src/services/getChoirTracks.ts`) and password auth
- react-h5-audio-player for audio playback

## Project Structure

```
src/
├── components/   # Reusable UI primitives (Button, TextInput, FormLayout, etc.)
├── pages/        # Page-level components, each in its own folder with index.tsx
├── services/     # getDato.ts (CMS), getChoirTracks.ts (Supabase storage)
├── utils/        # supabaseClient.ts, useClickOutside hook
├── App.tsx       # Root layout: Header + Body (router) + Footer
└── main.tsx      # Entry point, BrowserRouter setup
```

## Conventions

- Each component and page lives in its own folder (`ComponentName/index.tsx`)
- All forms use React Hook Form + Yup — do not introduce other form patterns
- TypeScript strict mode is on — no `any`, no unused locals/params
- Tailwind v4 utility-first — no custom CSS classes unless unavoidable
- Data fetching lives in `src/services/`, not inside components
