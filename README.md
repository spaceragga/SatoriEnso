# Satori Enso

A web studio named after two Zen ideas: sudden, intuitive grasp (Satori) and the circle of wholeness left slightly open (Enso). The work follows the name. Understand the task, then ship one whole product people can use and keep changing. One precise move, without the extra noise.

Satori Enso builds and repairs web and mobile products. A new site, shop, or app. A feature added to something that already runs: payments, booking, an account, an admin, a second language, a map, an integration. A fix in production, then monthly care so the product is not left alone.

Based in Minsk. Work is remote. The site is Russian at `/` and English at `/en/`. This repository is the studio site.

## Stack

- Node.js >= 22.18
- Next.js 16 (App Router) and React 19
- TypeScript and Tailwind CSS 4
- Static export (`output: 'export'`). Production is the `out/` folder, not a Node server

## Local development

Docker Desktop shows this app as its own group, `satori-enso`.

```bash
docker compose up --build
```

Open http://localhost:3010. The project directory is mounted into the container. Webpack polls for changes, so edits show up on Windows without recreating the container. Port 3010 keeps this site off Nechto’s port 3000. Override it with `WEB_PORT` (see `.env.example`).

Without Docker, on Node >= 22.18:

```bash
npm install
npm run dev
```

That serves http://localhost:3000.

## Production

```bash
npm run build
```

Upload the contents of `out/` to the site root on hoster.by Unix shared hosting. HTTPS redirect is configured in the hosting panel. Do not run `next start` there.

## Checks

```bash
npm run typecheck
npm run lint
```
