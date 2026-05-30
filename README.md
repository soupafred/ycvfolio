# ycvfolio

Personal portfolio and CV site — built with Nuxt 4, server-rendered, deployed on Vercel.

## Stack

| Layer | Package | Version |
|---|---|---|
| Framework | Nuxt | 4.x |
| UI | Nuxt UI + Tailwind CSS | 4.x / 4.x |
| Content | Nuxt Content (Markdown) | 3.x |
| State | Pinia | 3.x |
| i18n | @nuxtjs/i18n | 10.x |
| Testing | Vitest | 4.x |
| Deploy | Vercel | — |

## Features

- Multilingual (i18n)
- Markdown-driven pages (About, Terms, etc.)
- Image optimization via Nuxt Image
- Device-aware rendering
- Vercel Speed Insights

---

## Development

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

```bash
pnpm test       # run all tests
pnpm build      # production build
pnpm preview    # preview production build locally
```

## Deployment

Deployed on Vercel. Every push to `release/dev` triggers a preview deployment.
Production is promoted manually.

---

## Changelog

| Date | Description |
|---|---|
| 2026-05-30 | Initial project setup — Nuxt 4, Nuxt UI, content config |
