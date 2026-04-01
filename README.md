# DANIEL_DEV_SYS_v1.0

> Personal portfolio of Daniel Campuzano — Frontend Engineer specializing in fast, precise, and visually engineered interfaces.

[![Live Demo](https://img.shields.io/badge/Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](portfolio-v1-navy-pi.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-EF0070?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)

---

## About the Developer

I'm Daniel Campuzano, a Frontend Engineer with 5+ years building interfaces that are both visually precise and technically sound. My background in computer science (Técnico en Informática) gave me the systems thinking that shapes how I approach frontend work — I care as much about what's happening under the hood as I do about pixel-level accuracy.

My stack of choice is **React, Next.js, TypeScript, and Tailwind**. I build components that are clean, scalable, and maintainable by design — not by accident. Lately I've integrated AI tooling like **Claude Code and Cursor** into my daily workflow, which has meaningfully raised both the quality and pace of what I ship.

I'm open to **freelance projects and remote full-time positions**. If you're building something worth building, let's talk.

---

## About this Portfolio

This portfolio is itself a demonstration of frontend craft. It's built to be the kind of project you can inspect, not just look at — every interaction is intentional, every animation has purpose, and the code behind it is the same quality I bring to production work.

The design language is a dark cyberpunk/terminal aesthetic: sharp edges, neon cyan, CRT scanlines, and motion that feels physical. No templates, no UI kits — built from scratch.

### Notable UI/UX Features

- **Terminal boot loader** — full-screen initialization sequence on first load, gated via `sessionStorage` so it only runs once per session
- **Particle canvas** — 72 animated nodes with proximity-based links, rendered via Canvas API in a `requestAnimationFrame` loop
- **ScrambleText** — character-by-character glitch reveal effect with randomized unlock probability per frame
- **3D image with RGB aberration** — mouse-tracking 3D perspective transform on the portrait with an SVG `feColorMatrix` filter for chromatic aberration on hover
- **Custom neon cursor** — replaces the native cursor on pointer devices; inner dot + spring-animated outer ring that responds to hover and click state
- **Scroll progress bar** — 2px fixed bar driven by Framer Motion's `useScroll`, with neon glow
- **`RevealOnScroll`** — reusable animation primitive: scroll-triggered fade + directional slide, with `prefers-reduced-motion` support
- **`StaggerGrid`** — reusable stagger wrapper with configurable delay and viewport margin; used across all sections
- **IntersectionObserver nav tracking** — active section state derived from element visibility, not scroll position
- **CRT scanline overlay** — CSS `repeating-linear-gradient` + `phosphor-flicker` keyframe on a fixed overlay
- **Responsive layout** — desktop uses a fixed 288px sidebar; mobile uses a sticky top header + fixed bottom nav

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16.2.1 |
| UI Library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 (PostCSS, CSS `@theme` block — no config file) |
| Animations | Framer Motion 12 |
| Icons | Material Symbols Outlined (Google Fonts) |
| Fonts | Space Grotesk + Inter (Google Fonts) |
| Deployment | Vercel |

---

## Project Structure

```
portfolio-v1/
├── app/
│   ├── globals.css          # Design tokens, keyframes, utility classes
│   ├── layout.tsx           # Root layout — fonts, metadata, global components
│   └── page.tsx             # Home page — section composition
├── components/
│   ├── animations/
│   │   ├── RevealOnScroll.tsx   # Scroll-triggered fade + slide primitive
│   │   ├── ScrambleText.tsx     # Glitch text reveal effect
│   │   └── StaggerGrid.tsx      # Staggered child animation wrapper
│   ├── BioSection.tsx       # About section with 3D portrait
│   ├── BootLoader.tsx       # Terminal boot sequence overlay
│   ├── BottomNav.tsx        # Mobile bottom navigation
│   ├── ContactForm.tsx      # Mobile contact form
│   ├── ContactSection.tsx   # Terminal-styled contact links
│   ├── Footer.tsx           # Footer + ambient desktop overlays
│   ├── HeroSection.tsx      # Hero with particle canvas
│   ├── NeonCursor.tsx       # Custom animated cursor
│   ├── ProjectsSection.tsx  # Project cards grid
│   ├── ScrollProgress.tsx   # Scroll-linked progress bar
│   ├── SideNav.tsx          # Desktop side navigation
│   ├── StackSection.tsx     # Tech stack showcase
│   └── TopHeader.tsx        # Mobile sticky header
└── public/
    ├── daniel.jpg
    ├── tailorai.png
    └── nuestrosplanes.png
```

---

## Getting Started

```bash
npm install
npm run dev      # Development server — http://localhost:3000
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
```

---

## Projects Showcased

### Tailor AI — `SAAS`
AI-powered resume optimizer. Upload a CV and paste a job description — Gemini analyzes both, identifies keyword gaps, generates an ATS-optimized version, and returns an ATS score. Includes per-user usage history and credit-based pricing via Stripe.

**Stack:** Next.js 16 · Gemini API · Firebase · Stripe · Puppeteer

[![Demo](https://img.shields.io/badge/Live-000?style=flat-square&logo=vercel)](https://tailor-ai-pi.vercel.app)
[![Repo](https://img.shields.io/badge/Repo-181717?style=flat-square&logo=github)](https://github.com/TioDanx/tailor-ai)

---

### Nuestros Planes — `PWA`
Private planning app built for two. Activities move through states (todo → confirmed → done), with maps, countdowns, photo galleries, and star reviews. Features real-time sync, push notifications, `.ics` calendar export, and full PWA installability.

**Stack:** Next.js 16 · React 19 · Firebase · Framer Motion · Cloudinary

[![Demo](https://img.shields.io/badge/Live-000?style=flat-square&logo=vercel)](https://franteamomuchomucho.vercel.app)
[![Repo](https://img.shields.io/badge/Repo-181717?style=flat-square&logo=github)](https://github.com/TioDanx/franteamomuchomucho)

---

## Contact

| Channel | Link |
|---|---|
| Email | [danicampu56@gmail.com](mailto:danicampu56@gmail.com) |
| LinkedIn | [daniel-campuzano-7149552b7](https://www.linkedin.com/in/daniel-campuzano-7149552b7) |
| GitHub | [TioDanx](https://github.com/TioDanx) |

---

<p align="center">
  <sub>© 2026 Daniel Campuzano — Built from scratch, shipped with precision.</sub>
</p>
