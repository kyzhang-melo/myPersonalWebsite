# Project Documentation for AI Agents

## Project Overview

This is a **personal website** project containing two distinct parts:

1. **Root Static Page** (`index.html`): A standalone HTML/CSS portfolio page in Chinese, featuring a personal profile with sections for bio, AI portfolio projects, and video sharing.

2. **Next.js Application** (`my-app/`): A modern React-based web application built with Next.js 16, currently in template state and ready for development.

The project belongs to Kaiyuan Zhang (张开源), an AI creator and Ph.D. graduate from Xi'an Jiaotong University.

---

## Technology Stack

### Root Static Page
- Pure HTML5 + CSS3
- Responsive design with CSS Grid and Flexbox
- No build process required

### Next.js Application (`my-app/`)
| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | React framework with App Router |
| React | 19.2.3 | UI library |
| React DOM | 19.2.3 | DOM rendering |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first CSS |
| ESLint | 9.x | Code linting |
| Geist Font | - | Vercel's default font family |

---

## Project Structure

```
myPersonalWebsite/
├── index.html              # Static portfolio page (Chinese)
├── README.md               # Project description
├── AGENTS.md               # This file
└── my-app/                 # Next.js application
    ├── app/                # App Router directory
    │   ├── layout.tsx      # Root layout component
    │   ├── page.tsx        # Home page (default template)
    ├── globals.css         # Global styles with Tailwind
    ├── favicon.ico         # Site favicon
    ├── public/             # Static assets
    │   ├── next.svg
    │   ├── vercel.svg
    │   └── ...
    ├── package.json        # Dependencies and scripts
    ├── next.config.ts      # Next.js configuration
    ├── tsconfig.json       # TypeScript configuration
    ├── eslint.config.mjs   # ESLint flat config
    ├── postcss.config.mjs  # PostCSS configuration
    └── .next/              # Build output (gitignored)
```

---

## Build and Development Commands

### Root Static Page
No build required. Open `index.html` directly in a browser or serve via any static file server.

### Next.js Application

All commands should be run from the `my-app/` directory:

```bash
cd my-app

# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

---

## Code Style Guidelines

### TypeScript
- Strict mode enabled (`strict: true` in tsconfig.json)
- Use ES2017 target
- Path alias `@/*` maps to project root (`./*`)
- Module resolution: `bundler`

### ESLint Configuration
- Uses new ESLint 9 flat config format (`eslint.config.mjs`)
- Extends Next.js core web vitals and TypeScript rules
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

### Tailwind CSS v4
- Uses new `@import "tailwindcss"` syntax
- PostCSS plugin: `@tailwindcss/postcss`
- Theme configuration via `@theme inline` in CSS
- Supports dark mode via `prefers-color-scheme`
- Default font: Geist (sans) and Geist Mono

---

## App Router Structure

The Next.js app uses the **App Router** pattern (app directory):

- **`app/layout.tsx`**: Root layout with Geist font setup, metadata, and HTML structure
- **`app/page.tsx`**: Home page component (currently shows default Next.js template)
- **`app/globals.css`**: Global styles including Tailwind imports and CSS variables

### Path Aliases
- `@/*` resolves to files relative to the project root

---

## Testing Instructions

Currently, the project does not have any test framework configured. To add testing:

```bash
# Example: Add Jest or Vitest for unit testing
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

# Example: Add Playwright for E2E testing
npm install --save-dev @playwright/test
```

---

## Deployment

### Static HTML Page (Root)
Can be deployed to any static hosting service (GitHub Pages, Netlify, Vercel, etc.).

### Next.js Application
Optimized for deployment on **Vercel** (creators of Next.js):

```bash
# Using Vercel CLI
vercel --prod
```

Or configure Git integration for automatic deployments on push.

Build output directory: `my-app/.next/`

---

## Development Notes

### Current State
- The root `index.html` is a complete, styled portfolio page in Chinese
- The `my-app/` directory contains a fresh Next.js 16 installation with default template
- The Next.js app has not been customized yet - it still shows the create-next-app starter page

### Migration Path
If merging the static HTML into the Next.js app:
1. Copy content from `index.html` to `app/page.tsx`
2. Convert inline styles to Tailwind classes or CSS modules
3. Update `layout.tsx` metadata (currently has placeholder title "Create Next App")

### Language
- Root page: Chinese (zh-CN)
- Next.js app: English (currently), can be changed in `layout.tsx` (`lang="en"`)

---

## Security Considerations

- No sensitive environment variables are currently used
- `.env*` files are gitignored by default
- Keep dependencies updated: `npm audit fix`
- ESLint helps catch common security issues in React code

---

## Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [React 19 Docs](https://react.dev/)
