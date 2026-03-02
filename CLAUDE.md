# Workerbase

Cloudflare Worker app: Hono + Hono JSX + Hotwire (Turbo & Stimulus) + Tailwind CSS v4.

## Stack

- **Runtime**: Cloudflare Workers (`nodejs_compat`)
- **Framework**: Hono with JSX (`hono/jsx`)
- **Client**: Hotwire — Turbo for navigation, Stimulus for JS behavior
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Build**: Vite 7 + `@cloudflare/vite-plugin` + `vite-ssr-components`
- **Package manager**: bun
- **Entry**: `src/entrypoint.tsx`
- **Layout**: `src/renderer.tsx` (jsxRenderer, shared HTML shell)
- **Client entry**: `src/client/app.ts` (Stimulus app + Turbo)

## Commands

| Command | Purpose |
|---------|---------|
| `bun run dev` | Local dev (Vite + Wrangler) |
| `bun run build` | Build |
| `bun run deploy` | Build + deploy to Cloudflare |
| `bun run cf-typegen` | Generate TS types from wrangler bindings |

Run `bun run cf-typegen` after changing bindings in `wrangler.jsonc`.

## Conventions

- JSX via `hono/jsx` (tsconfig: `jsxImportSource: "hono/jsx"`)
- Server-rendered HTML, enhanced with Turbo & Stimulus (no SPA)
- Stimulus controllers go in `src/client/`
- Tailwind utility classes directly in JSX — no separate CSS files beyond `styles.css`
- Domain: `workerbase.o-ren.dev`

## Cloudflare Workers

Knowledge of Workers APIs may be outdated. Retrieve current docs before any Workers/KV/R2/D1/DO/Queues/Vectorize/AI/Agents task.

- Docs: https://developers.cloudflare.com/workers/
- Limits: product's `/platform/limits/` page
- Errors: https://developers.cloudflare.com/workers/observability/errors/
- Node.js compat: https://developers.cloudflare.com/workers/runtime-apis/nodejs/
