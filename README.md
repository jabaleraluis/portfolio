# My Personal Portfolio

A personal web-development portfolio built with Astro. The homepage presents an introduction, professional overview, technology highlights, project area, and contact section, with a shared navigation, footer, theme control, and scroll-based interactions.

## Features

- Single-page homepage with `Home`, `About`, `Projects`, and `Contact` sections.
- Light and dark themes persisted in browser local storage.
- Responsive navigation menu with active-section tracking.
- Scroll-reveal animations powered by ScrollReveal.
- Scroll-to-top control.
- Shared layout with SEO description metadata, Poppins font loading, Remix Icon icons, navigation, and footer.

## Stack

| Area | Technology |
| --- | --- |
| Framework | Astro `^7.2.0` |
| Runtime | Node.js `>=22.12.0` |
| Package manager | pnpm |
| Language | JavaScript (ES modules) and Astro components |
| Styling | CSS |
| Animation | ScrollReveal `^4.0.9` |

## Requirements

- Node.js `>=22.12.0`
- pnpm

## Quick Start

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Astro prints the local development URL in the terminal.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Astro development server. |
| `pnpm build` | Create a production build. |
| `pnpm preview` | Preview the production build locally. |
| `pnpm astro` | Run the Astro CLI. |

Build and preview locally:

```bash
pnpm build
pnpm preview
```

## Project Structure

```text
src/
├── components/
│   ├── structure/     # Navigation, footer, theme toggle, scroll-up control
│   └── global.astro   # Shared document metadata and global resources
├── layouts/
│   └── Layout.astro   # Shared page shell
├── pages/             # Homepage, standalone pages, and 404 page
├── scripts/           # Theme, navigation, scroll, and reveal behavior
└── styles/            # Global and page styles
```

## Configuration

`astro.config.mjs` defines the `@components` and `@layouts` import aliases. The matching TypeScript path mappings are maintained in `tsconfig.json`.
