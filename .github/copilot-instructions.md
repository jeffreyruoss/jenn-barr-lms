# Jenn Barr Beauty Education - AI Coding Instructions

## Project Overview
Static SPA landing page for a beauty education platform. Deploys to **GitHub Pages** - no backend.

## Tech Stack
- **Vite + React 19 + TypeScript** (strict mode)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin
- **Framer Motion** for animations
- **Lucide React** for icons
- **React Router DOM** for routing structure

## Commands
```bash
npm run dev      # Start dev server
npm run build    # TypeScript check + Vite build
npm run lint     # ESLint
npm run preview  # Preview production build
```

## Architecture
```
src/
├── components/
│   ├── layout/     # Header, Footer
│   ├── sections/   # Hero, CourseGrid, Community, AboutJenn, Newsletter
│   └── ui/         # Reusable: Button, CourseCard
├── data/           # Mock data (courses.ts) - no backend
├── pages/          # Page components (LandingPage.tsx)
```

## Design System
| Token | Hex | Usage |
|-------|-----|-------|
| `blush` | #FCE4EC | Primary backgrounds |
| `rose-gold` | #B76E79 | CTAs, accents |
| `charcoal` | #2D2D2D | Text |
| `cream` | #FAFAFA | Page background |

**Typography:** Playfair Display (headers) + Inter (body) via Google Fonts in `index.html`

## Key Patterns

### Framer Motion Scroll Animations
Use `whileInView` for scroll-triggered animations:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

### Component Structure
- Sections receive no props - they fetch from `src/data/`
- UI components are reusable with typed props
- Mobile-first responsive design using Tailwind breakpoints

### GitHub Pages Deployment
`vite.config.ts` must include `base: '/jenn-barr-lms/'` for asset paths to work.

## Constraints
- **No backend calls** - all data mocked in `src/data/`
- **Static images** - use Unsplash URLs or `/public` assets
- **SPA routing** - may need 404.html redirect for GitHub Pages deep links
