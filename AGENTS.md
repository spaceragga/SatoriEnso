# AGENTS.md

Satori Enso: studio site. Node >= 22.18, Next.js 16 static export, TypeScript, Tailwind CSS 4.

UI copy is Russian by default and English on the same URL. README, rules, and commits are English. Local dev is `docker compose` on port 3010. Production is `out/` on hoster.by.

Implement the smallest change. Commits and pull requests only when asked.
Details: `.cursor/rules/` (`agent-efficiency`, `git-pr-workflow`, `satori-enso`, `i18n`, `site-assembly`, `frontend-components`, `architecture-principles`).

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
