# Portfolio Website Plan

> Reference: https://iyansr.id/
> Stack: TanStack Start + React 19 + Tailwind CSS v4 + TypeScript

---

## Tech Stack (Already Set Up)

- **Framework**: TanStack Start v1.132.0
- **Router**: TanStack Router (file-based routing)
- **UI**: React 19.2.0
- **Styling**: Tailwind CSS v4.1.18
- **Build**: Vite 7.1.7
- **Language**: TypeScript 5.7.2

## Additional Dependencies to Install

| Package | Purpose |
|---------|---------|
| `motion` (framer-motion) | Advanced animations (BlurFade, staggered reveals, expand/collapse) |
| `lenis` | Smooth scrolling |
| `gsap` | Timeline-based animation (Lenis integration) |
| `ogl` | WebGL animated background (DarkVeil effect) |
| `class-variance-authority` | Component variant system (Shadcn-style) |
| `tailwind-merge` | Merging Tailwind classes safely |
| `clsx` | Conditional class names |
| `react-markdown` | Blog post rendering |
| `rehype-pretty-code` | Code syntax highlighting for blog |
| `remark-gfm` | GitHub Flavored Markdown support |
| `gray-matter` | Frontmatter parsing for blog posts |
| `@fontsource-variable/inter` | Primary font |
| `@fontsource-variable/jetbrains-mono` | Monospace font |

---

## Design System

### Color Scheme (OKLCH)

Dark mode primary (like reference):

```
--background: oklch(0 0 0)           /* Pure black */
--foreground: oklch(1 0 0)           /* Pure white */
--muted: oklch(0.23 0 0)             /* Dark gray */
--muted-foreground: oklch(0.72 0 0)  /* Light gray text */
--border: oklch(0.26 0 0)            /* Subtle border */
--primary: oklch(1 0 0)              /* White */
--accent: oklch(0.32 0 0)            /* Accent gray */
```

Light mode:

```
--background: oklch(0.99 0 0)        /* Almost white */
--foreground: oklch(0 0 0)           /* Black */
--muted: oklch(0.97 0 0)             /* Light gray */
--muted-foreground: oklch(0.44 0 0)  /* Medium gray */
--border: oklch(0.92 0 0)            /* Light border */
--primary: oklch(0 0 0)              /* Black */
```

### Typography

- **Sans-serif**: Inter Variable
- **Monospace**: JetBrains Mono Variable
- **Font smoothing**: antialiased

### Design Patterns

- **Glassmorphism cards**: `bg-background/30 backdrop-blur-xl border border-muted/75`
- **Gradient text**: `bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent`
- **Hover effects**: `hover:shadow-lg transition-all duration-300 ease-out`
- **Border radius**: `rounded-lg` (0.5rem)

---

## Layout Structure

```
<RootLayout>
  ├── <DarkVeil />              // Fixed WebGL animated background
  ├── <AppDock />               // Floating bottom navigation (macOS-style)
  └── <ContentContainer>        // max-w-2xl mx-auto, centered
        └── <Outlet />          // Page content
</RootLayout>
```

- Content container: `max-w-2xl mx-auto py-12 sm:py-24 px-6`
- Background: Fixed, z-index -10, 75% opacity

---

## Pages & Routing

### 1. Homepage (`/`)

Single-page with multiple sections, each animated with BlurFade stagger:

#### Section: Hero
- Avatar (112px circle) on the right
- Name with gradient text on the left
- Subtitle/tagline
- CTA button (e.g., "Contact Me" / "Book a Call")

#### Section: About
- Short bio paragraph
- `prose` typography, `text-muted-foreground`

#### Section: Work Experience
- Expandable cards with:
  - Company logo avatar
  - Job title + company name (link)
  - Location + date range
  - Technology badges (small pills)
  - Expandable description (click chevron to reveal)
  - Smooth height animation on expand/collapse

#### Section: Projects
- Section header with Badge + heading + subtitle
- 2-column grid (1 col mobile)
- Project cards with:
  - Image/video preview (h-40)
  - Title + date
  - "Open Source" badge (conditional)
  - Description (markdown)
  - Technology tags
  - Action links (Website, Repository)

#### Section: Open Source (optional - TBD)
- GitHub contributions list
- PR/Issue cards with state badges
- "View More" link to dedicated page

#### Section: Blog Posts (optional - TBD)
- 2-column grid of post cards
- Featured image + title + date + summary
- "View More" link to blog page

### 2. Blog Page (`/blog`) - Optional
- Full list of blog posts
- Same PostCard component
- Markdown content from local files

### 3. Blog Post Page (`/blog/$slug`) - Optional
- Full blog post rendering
- Syntax highlighting for code blocks
- Markdown with GFM support

### 4. Open Source Page (`/open-source`) - Optional
- Full list of GitHub contributions
- Fetched from GitHub API

---

## Components to Build

### Core UI Components (Shadcn-style)

| Component | Description |
|-----------|-------------|
| `Avatar` | Image with fallback, circular |
| `Badge` | Small label with variants (default, secondary, outline, lime) |
| `Button` | Button with size/variant props |
| `Card` | Container with Header, Content, Footer |
| `Tooltip` | Hover tooltip (for dock icons) |

### Animation Components

| Component | Description |
|-----------|-------------|
| `BlurFade` | Blur + fade + slide reveal animation (InView triggered) |
| `BlurFadeText` | Per-character text reveal with blur effect |

### Layout Components

| Component | Description |
|-----------|-------------|
| `DarkVeil` | WebGL animated background (OGL + GLSL shaders) |
| `AppDock` | Floating macOS-style dock navigation with magnification |
| `SmoothScroll` | Lenis smooth scroll wrapper with GSAP |

### Section Components

| Component | Description |
|-----------|-------------|
| `HeroSection` | Avatar + name + tagline + CTA |
| `AboutSection` | Bio paragraph |
| `ExperienceSection` | Work experience list |
| `ExperienceCard` | Expandable work experience card |
| `ProjectsSection` | Projects grid |
| `ProjectCard` | Project showcase card |
| `OpenSourceSection` | GitHub contributions (optional) |
| `ContributionCard` | PR/Issue card (optional) |
| `BlogSection` | Blog posts grid (optional) |
| `PostCard` | Blog post preview card |

---

## Animation System

### BlurFade
- **Trigger**: InView (scroll detection)
- **Hidden state**: `{ y: -6, opacity: 0, filter: 'blur(6px)' }`
- **Visible state**: `{ y: 0, opacity: 1, filter: 'blur(0px)' }`
- **Stagger delay**: `0.04 * index`

### Dock Magnification
- **Default icon size**: 40px
- **Magnified size**: 60px
- **Distance range**: 140px
- **Spring config**: `{ mass: 0.1, stiffness: 150, damping: 12 }`

### Experience Card Expand
- **Animation**: Height 0 → auto, opacity 0 → 1
- **Duration**: 0.7s
- **Easing**: `[0.16, 1, 0.3, 1]`
- **Chevron rotation**: 0° → 90°

### Smooth Scrolling
- **Library**: Lenis + GSAP ticker
- **Duration**: 2s

---

## Implementation Order

### Phase 1: Foundation
1. Install additional dependencies
2. Set up design system (CSS variables, OKLCH colors, fonts)
3. Build utility functions (`cn()` for class merging)
4. Create base UI components (Avatar, Badge, Button, Card, Tooltip)

### Phase 2: Layout & Navigation
5. Build DarkVeil WebGL background
6. Build AppDock floating navigation
7. Set up Lenis smooth scrolling
8. Update root layout with new structure

### Phase 3: Animation System
9. Build BlurFade component
10. Build BlurFadeText component
11. Integrate stagger animation system

### Phase 4: Homepage Sections
12. Hero section (avatar + name + tagline + CTA)
13. About section (bio)
14. Work Experience section (expandable cards)
15. Projects section (grid cards)
16. Open Source section (if applicable)
17. Blog Posts section (if applicable)

### Phase 5: Additional Pages (Optional)
18. Blog listing page
19. Blog post detail page
20. Open Source contributions page

### Phase 6: Polish
21. Responsive design testing & fixes
22. Performance optimization
23. SEO meta tags
24. Favicon & OG images
25. Dark/Light mode toggle (if both modes needed)

---

## Data Structure

### Personal Info (to be filled)

```typescript
const PERSONAL = {
  name: "???",
  nickname: "???",
  title: "???",
  tagline: "???",
  about: "???",
  avatar: "???",
  cta: {
    label: "???",
    href: "???"
  },
  socials: {
    github: "???",
    linkedin: "???",
    twitter: "???",
    email: "???"
  }
};
```

### Experience (to be filled)

```typescript
interface Experience {
  company: string;
  companyUrl: string;
  title: string;
  dates: string;
  location: string;
  description: string;
  technologies: string[];
  logo?: string;
}
```

### Projects (to be filled)

```typescript
interface Project {
  title: string;
  href?: string;
  dates: string;
  active: boolean;
  openSource?: boolean;
  description: string;
  technologies: string[];
  links?: { type: string; href: string; icon: React.ReactNode }[];
  image?: string;
  video?: string;
}
```

---

## Open Questions (Waiting for User Input)

- [ ] Personal info (name, title, bio, avatar)
- [ ] Work experience details
- [ ] Projects to showcase
- [ ] GitHub username (for open source section)
- [ ] Want blog section? Content source?
- [ ] Contact method (Book a Call, email, form?)
- [ ] Social media links
- [ ] Dark mode only or dark + light mode?
- [ ] WebGL background: same complexity or simpler alternative?
