# Shadab — Animated Portfolio (React + Tailwind CSS)

## Run it
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Edit content
Everything (name, links, experience, projects, skills) is in **`src/data.js`**.
- Set your LinkedIn URL in `profile.linkedin`.
- Your resume is served from `public/resume.pdf` — replace it when you update it.

## Structure
- `src/components/Hero.jsx` — animated headline, typewriter, orbiting tech badges
- `src/components/Sections.jsx` — About (count-up stats), Experience timeline, Projects (filter + tilt cards), Skills marquee, Contact
- `src/components/Motion.jsx` — reusable animations: Reveal, Counter, Typewriter, Tilt, Magnetic
- `src/components/Chrome.jsx` — navbar w/ active section, scroll progress bar, cursor glow
- `src/index.css` — Tailwind v4 theme: colors, fonts, keyframes

No animation library needed — everything uses Tailwind + IntersectionObserver.
Respects `prefers-reduced-motion`.

## Deploy
Push to GitHub, then import on Vercel or Netlify (build: `npm run build`, output: `dist`).
