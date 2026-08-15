# Inter Smart Solutions

> A modern, responsive AI development company website built with Next.js 16 and Tailwind CSS v4.

**Live Demo:** [https://inter-smart-solution.vercel.app](https://inter-smart-solution.vercel.app)

Built as a take-home assignment showcasing modern web development practices, component architecture, and production-ready code quality.

---

## 🚀 Tech Stack

- **[Next.js 16.3.0](https://nextjs.org/)** - App Router, Server Components, Static Generation
- **[React 19](https://react.dev/)** - Latest React with modern hooks
- **[TypeScript 5](https://www.typescriptlang.org/)** - Full type safety
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first styling with custom theme tokens
- **[Poppins](https://fonts.google.com/specimen/Poppins)** - Google Font via next/font optimization
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Class Variance Authority](https://cva.style/)** - Component variant management
- **[clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Intelligent className merging
- **[Vercel](https://vercel.com/)** - Deployment platform

---

## ✨ Features

### Core Sections
- **Dynamic Header** - Scroll-aware navigation with hide-on-scroll behavior, mobile hamburger menu, and smooth state transitions
- **Hero Carousel** - Auto-playing slideshow with manual controls, smooth fade transitions, and 4 different slides
- **Services Section** - Expandable accordion cards (only one open at a time) with smooth animations
- **AI Development Process** - Interactive 7-step process with sliding window navigation (4 steps visible, then 3 remaining)
- **Contact Form** - Accessible form with localStorage persistence, success alerts, and responsive design
- **Recent Projects** - Asymmetric image layout showcasing AI project portfolio
- **Footer** - Multi-column links, social media integration, and legal information

### Technical Highlights
- **Zero Hydration Errors** - Implements professional hide-on-refresh pattern for scroll-dependent UI
- **Fully Accessible** - WCAG compliant with semantic HTML, ARIA labels, keyboard navigation, and screen reader support
- **Mobile-First Responsive** - Adapts seamlessly from 320px mobile to 4K displays
- **Performance Optimized** - Static generation, image optimization, minimal client-side JS
- **DRY Components** - Reusable Button, SectionHeader, and Alert components
- **Clean Architecture** - Server Components by default, client components only where needed

---

## 📁 Project Structure

```
inter-smart/
├── app/
│   ├── layout.tsx          # Root layout with font loading and metadata
│   ├── page.tsx            # Main page (Server Component)
│   └── globals.css         # Tailwind imports and custom theme tokens
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Scroll-aware navigation with mobile menu
│   │   └── Footer.tsx      # Multi-column footer with social links
│   │
│   ├── sections/
│   │   ├── Hero.tsx        # Auto-playing carousel with 4 slides
│   │   ├── ServicesSection.tsx      # Accordion cards for AI services
│   │   ├── ProcessSection.tsx       # 7-step sliding window navigation
│   │   ├── ContactSection.tsx       # Form with localStorage & validation
│   │   └── ProjectsSection.tsx      # Asymmetric project image grid
│   │
│   └── ui/
│       ├── Button.tsx      # Reusable button with variants (primary, large)
│       ├── SectionHeader.tsx        # Reusable section title + description
│       └── Alert.tsx       # Success/error alerts with CVA variants
│
├── lib/
│   ├── data/
│   │   ├── hero-slides.ts           # Hero carousel content
│   │   ├── process-steps.ts         # Development process steps
│   │   ├── services-data.ts         # AI services list
│   │   └── footer-data.ts           # Footer links & social media
│   │
│   └── utils.ts            # Utility functions (cn, showComingSoon)
│
├── public/
│   ├── images/             # Organized by section (hero, services, etc.)
│   └── icons/              # SVG icons (arrows, social media)
│
└── package.json            # Dependencies and scripts
```

---

## 🛠️ Setup & Installation

### Prerequisites

- **Node.js** 20+
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd inter-smart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 📦 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server (after build)
npm run start

# Lint code (ESLint)
npm run lint

# Type check (TypeScript)
npx tsc --noEmit
```

---

## 🚢 Deployment

This project is optimized for **Vercel** deployment:

1. Push code to GitHub
2. Import repository in [Vercel Dashboard](https://vercel.com/new)
3. Vercel auto-detects Next.js and deploys
4. Get instant production URL

**Build Output:** Static Site Generation (SSG) - All pages pre-rendered at build time for optimal performance.

---

## 🎨 Design System

### Color Tokens (Tailwind v4 Theme)
- `brand-navy`: Primary brand color (#182434)
- `brand-navy-dark`: Hover/active states (#131728)
- `surface-light`: Light backgrounds (#f1f1f1)
- `text-muted-light`: Muted text (#f6f6f6)
- `bg-contact`: Contact section background (#c9d6d6)
- `accent-line`: Section dividers (#0393B0)
- `form-border`: Form input borders (#2D4362)

### Typography
- **Font Family:** Poppins (400, 500, 600, 700)
- **Approach:** Mobile-first with responsive text sizes

### Custom Utilities
- `container-responsive`: Consistent container spacing across sections
- `section-title`, `section-description`, `section-accent-line`: Used via SectionHeader component

---

## ♿ Accessibility

- ✅ Semantic HTML (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`)
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ ARIA labels on interactive elements
- ✅ `aria-expanded` on accordions and mobile menu
- ✅ Keyboard navigation support
- ✅ Focus indicators preserved (no removal)
- ✅ Form labels with `htmlFor` and unique IDs
- ✅ Screen reader support via `sr-only` class
- ✅ Decorative images use `alt=""`
- ✅ Meaningful images have descriptive alt text

---

## 📱 Responsive Design

**Breakpoints:**
- **Mobile:** < 640px (default, mobile-first)
- **Tablet:** 640px - 1023px (sm, md)
- **Desktop:** 1024px+ (lg)
- **Large Desktop:** 1280px+ (xl, custom breakpoints)

**Key Responsive Features:**
- Header: Full navigation on desktop, hamburger menu on mobile
- Services: Side-by-side on desktop, stacked on mobile
- Process: 4-column grid on desktop, 2-column on mobile
- Contact: Two-column form on desktop, single column on mobile
- Footer: 3-column layout on desktop, stacked on mobile

---

## 🔧 Technical Decisions

### Why Next.js App Router?
- Server Components by default (better performance)
- Automatic static optimization
- Built-in Image optimization
- File-based routing

### Why Tailwind v4?
- Latest features with `@theme inline` syntax
- Custom utility definitions via `@utility`
- Zero-config setup with PostCSS
- Smaller bundle size

### Why Client Components Only Where Needed?
- **5 client components** (Header, Hero, Services, Process, Contact)
- All have legitimate interactivity requiring state
- Rest are Server Components for optimal performance

### Hydration Solution
Implements professional "hide-on-refresh" pattern:
- Navbar hidden when refreshing while scrolled
- Appears smoothly when user scrolls
- Zero hydration warnings, clean ESLint compliance
- Matches UX patterns used by major websites

---

## 📊 Performance

- ✅ **Lighthouse Score:** Optimized for 90+ scores
- ✅ **Static Generation:** Pre-rendered at build time
- ✅ **Image Optimization:** Next.js Image with proper dimensions
- ✅ **Minimal JavaScript:** Only 5 client components
- ✅ **Tree Shaking:** All dependencies actively used
- ✅ **No Layout Shift:** All images have width/height
- ✅ **Lazy Loading:** Below-the-fold images load on demand

---

## 🧪 Code Quality

- ✅ **TypeScript:** 100% type-safe, no `any` types
- ✅ **ESLint:** Zero errors, zero warnings
- ✅ **No Console Errors:** Clean runtime
- ✅ **DRY Principles:** Reusable components and utilities
- ✅ **Semantic HTML:** Proper element usage throughout
- ✅ **Clean Architecture:** Logical component separation

---

## 📝 Notes

- Form submissions save to `localStorage` (no backend integration)
- "Coming Soon" alerts for unimplemented features
- All external links open in new tabs with `rel="noopener noreferrer"`
- Smooth scrolling enabled via CSS for hash navigation
- Project uses placeholder content for demonstration

---

## 📄 License

This project was created as a take-home assignment for **Inter Smart Solutions**. All rights reserved.

---

## 👤 Author

Built with attention to detail, modern best practices, and production-ready code quality.

**Questions or feedback?** Feel free to reach out!
