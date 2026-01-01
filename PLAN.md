# Jenn Barr Beauty Education - Development Plan

## Project Overview
Building an MVP landing page for "Jenn Barr Beauty Education" - a modern, high-end learning platform and community for beauticians. The design follows a "Clean Girl" aesthetic with a professional, soft, and expensive feel.

---

## Phase 1: Project Setup & Configuration

### 1.1 Install Dependencies
```bash
npm install tailwindcss @tailwindcss/vite framer-motion lucide-react react-router-dom
```

### 1.2 Configure Tailwind CSS
- Update `vite.config.ts` to include Tailwind plugin
- Update `index.css` with Tailwind directives and custom fonts

### 1.3 Configure Vite for GitHub Pages
- Set `base` property in `vite.config.ts` to `/jenn-barr-lms/` (repository name)

### 1.4 Add Google Fonts
- Add Playfair Display (headers) and Inter (body) fonts to `index.html`

---

## Phase 2: Design System Setup

### 2.1 Color Palette (Tailwind Config)
| Token | Color | Usage |
|-------|-------|-------|
| `blush` | #FCE4EC | Primary - backgrounds, accents |
| `rose-gold` | #B76E79 | Accents, CTAs, highlights |
| `charcoal` | #2D2D2D | Primary text |
| `cream` | #FAFAFA | Page backgrounds |
| `white` | #FFFFFF | Cards, sections |

### 2.2 Typography
- **Headers:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

### 2.3 Spacing & Layout
- Container max-width: 1280px
- Section padding: 80px-120px vertical
- Mobile-first responsive breakpoints

---

## Phase 3: Component Architecture

### 3.1 Folder Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── CourseGrid.tsx
│   │   ├── Community.tsx
│   │   ├── AboutJenn.tsx
│   │   └── Newsletter.tsx
│   └── ui/
│       ├── Button.tsx
│       └── CourseCard.tsx
├── data/
│   └── courses.ts
├── pages/
│   └── LandingPage.tsx
├── App.tsx
├── main.tsx
└── index.css
```

### 3.2 Components to Build

| Component | Description | Animations |
|-----------|-------------|------------|
| `Header` | Logo + navigation (minimal for MVP) | Fade in on load |
| `Hero` | Full-width hero with headline, subhead, CTA | Staggered fade-in |
| `TrustBar` | "5,000+ Stylists" stat or logo strip | Fade in on scroll |
| `CourseGrid` | 3-column grid of course cards | Cards fade in staggered |
| `CourseCard` | Image, title, price, enroll button | Hover lift effect |
| `Community` | Visual section for "Beauty Circle" | Parallax or fade |
| `AboutJenn` | Photo + bio text | Fade in on scroll |
| `Newsletter` | Email input + CTA button | Subtle entrance |
| `Footer` | Simple footer with links | None |

---

## Phase 4: Mock Data

### 4.1 Courses Data (`src/data/courses.ts`)
```typescript
export const courses = [
  {
    id: 1,
    title: "Advanced Color Theory",
    description: "Master the science behind perfect color matching",
    price: 299,
    image: "unsplash-url-1"
  },
  {
    id: 2,
    title: "Extensions Masterclass",
    description: "From basics to advanced installation techniques",
    price: 399,
    image: "unsplash-url-2"
  },
  {
    id: 3,
    title: "Business of Beauty",
    description: "Build and scale your salon empire",
    price: 249,
    image: "unsplash-url-3"
  }
];
```

---

## Phase 5: Implementation Order

### Step 1: Foundation (30 min)
- [x] Read prompt and create plan
- [ ] Install dependencies
- [ ] Configure Tailwind CSS
- [ ] Configure Vite for GitHub Pages
- [ ] Add Google Fonts to index.html
- [ ] Set up base styles in index.css

### Step 2: Layout Components (20 min)
- [ ] Create Header component
- [ ] Create Footer component
- [ ] Set up React Router structure
- [ ] Create LandingPage wrapper

### Step 3: UI Components (15 min)
- [ ] Create Button component (reusable)
- [ ] Create CourseCard component

### Step 4: Section Components (45 min)
- [ ] Hero section with Framer Motion animations
- [ ] TrustBar section
- [ ] CourseGrid section (using mock data)
- [ ] Community section
- [ ] AboutJenn section
- [ ] Newsletter section

### Step 5: Polish & Responsive (20 min)
- [ ] Test all breakpoints (mobile, tablet, desktop)
- [ ] Add scroll-triggered animations
- [ ] Fine-tune spacing and typography
- [ ] Add hover states and micro-interactions

### Step 6: Deployment Prep (10 min)
- [ ] Verify base path configuration
- [ ] Test production build locally
- [ ] Document deployment steps in README

---

## Phase 6: Key Framer Motion Patterns

### Scroll-triggered Fade In
```typescript
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```

### Staggered Children
```typescript
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
```

---

## Phase 7: Image Assets (Unsplash Placeholders)

| Usage | Suggested Search | Dimensions |
|-------|------------------|------------|
| Hero | "beauty salon professional" | 1920x1080 |
| Course 1 | "hair coloring salon" | 800x600 |
| Course 2 | "hair extensions" | 800x600 |
| Course 3 | "salon business" | 800x600 |
| About Jenn | "professional woman portrait" | 600x800 |
| Community | "women networking event" | 1200x800 |

---

## Deployment Notes

### GitHub Pages Configuration
1. In `vite.config.ts`, set:
   ```typescript
   export default defineConfig({
     base: '/jenn-barr-lms/',
     // ... other config
   })
   ```

2. Build command: `npm run build`

3. Deploy to GitHub Pages via GitHub Actions or manually push `dist/` folder

---

## Success Criteria
- [ ] Landing page loads with smooth animations
- [ ] All sections visible and properly styled
- [ ] Fully responsive on mobile/tablet/desktop
- [ ] Course cards display mock data correctly
- [ ] Newsletter form has working input (no backend needed)
- [ ] Builds successfully for GitHub Pages deployment
