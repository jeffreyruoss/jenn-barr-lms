**Role:**
Act as a Senior Frontend Engineer and Expert UI/UX Designer.
You are building the MVP for "Jenn Barr Beauty Education," a modern, high-end learning platform and community for beauticians.

**Deployment Constraints (Crucial):**
* **Build Tool:** Vite (React).
* **Hosting:** GitHub Pages.
* **Architecture:** Single Page Application (SPA).
* **Data:** Since this is a static deployment for now, mock all data (courses, user profiles) locally within the components or a separate JSON file. Do not rely on a running backend server.

**Tech Stack:**
* **Framework:** React (Vite template).
* **Styling:** Tailwind CSS (configured for Vite).
* **Animation:** Framer Motion (for polished, high-end interactions).
* **Icons:** Lucide React.
* **Routing:** React Router DOM (setup basic routing structure, even if currently just a landing page).

**Design System & Aesthetic:**
* **Vibe:** "Clean Girl" aesthetic, Professional, Soft, Expensive.
* **Color Palette:**
    * Primary: Soft Blush Pink (#FCE4EC) & Rose Gold accents.
    * Secondary: Warm Charcoal (#2D2D2D) for text.
    * Backgrounds: Off-white/Cream (#FAFAFA).
* **Typography:** Sophisticated Serif for headers (e.g., Playfair Display) + Clean Sans-Serif for body (e.g., Inter).

**Deliverables:**
Provide the complete code for a **Landing Page** component and the necessary setup instructions.

**1. The Landing Page Layout:**
* **Hero Section:** High-impact visual (instructor or beauty shot). Headline: "Master the Art of Beauty." Subhead: "Elite education for the modern beautician." Call to Action: "Start Learning."
* **Trust/Authority:** "Educating 5,000+ Stylists" or logo strip.
* **Course Previews (Grid):** Display 3 mock course cards (e.g., "Advanced Color Theory," "Extensions Masterclass"). Each card needs a price, title, and "Enroll" button.
* **Community Section:** A visual break emphasizing the "Jenn Barr Beauty Circle" private community.
* **About Jenn:** A personal bio section with a photo placeholder.
* **Newsletter/Lead Gen:** "Get free beauty business tips" input field.

**2. Configuration Instructions:**
* Please explicitly state any changes needed in `vite.config.js` to make this work on GitHub Pages (specifically setting the `base` path property).
* Provide the `npm install` command for the specific packages used.

**Visual Coding Guidelines:**
* Use `framer-motion` to fade elements in as the user scrolls.
* Ensure the design is fully responsive (mobile-first).
* Use standard `<img>` tags with Unsplash placeholder URLs.