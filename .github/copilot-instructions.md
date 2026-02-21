# Vibe Coding Presentation — Copilot Instructions

This file gives AI coding assistants (GitHub Copilot, Claude, Cursor, Windsurf, etc.) full
context to help you build a beautiful slide presentation using this framework. Read this before
making any changes.

---

## What This Project Is

A React-based slide-deck framework — like PowerPoint or Canva, but built in code. You can:

- Add, remove, and reorder slides by editing `src/App.jsx`
- Create new slides by adding a `.jsx` file inside `src/slides/`
- Customize the theme in `src/index.css`
- Deploy to GitHub Pages with `npm run deploy`

Starter slide templates are in `src/slides/template/` — copy one and customise it.

---

## Core Architecture

```
App.jsx            ← registers the slides array → passes to <Deck>
components/
  Deck.jsx         ← presentation shell: renders one slide at a time,
                      handles keyboard nav (←/→/Space), progress bar
  Slide.jsx        ← base slide wrapper: sets background, padding,
                      optional animated title, scrollable inner content
slides/
  *.jsx            ← individual slide components (one file = one slide)
  template/        ← starter templates to copy & customise
src/index.css      ← Tailwind v4 theme tokens (colors, fonts)
public/            ← static images referenced by slides
```

### Data flow

```
App.jsx
  const slides = [<HeroSlide />, <MySlide />, ...]
      ↓ slides prop
  <Deck slides={slides}>
      ↓ slides[currentSlide]
  Each slide component (uses <Slide> wrapper internally)
```

---

## Design System

### Theme Colors (Tailwind v4 `@theme` tokens — defined in `src/index.css`)

| Token                  | Value     | Purpose                                   |
|------------------------|-----------|-------------------------------------------|
| `--color-background`   | `#0a0a0a` | Page/slide background (near-black)        |
| `--color-foreground`   | `#ededed` | Default body text (near-white)            |
| `--color-primary`      | `#00e5ff` | Cyan — main accent, CTAs, highlights      |
| `--color-secondary`    | `#bf00ff` | Purple — secondary accent, gradient end   |
| `--color-accent`       | `#00ff9d` | Green — success, positive emphasis        |
| `--color-muted`        | `#1f1f1f` | Muted card/section backgrounds            |

Use them as Tailwind classes:

```jsx
text-primary   bg-primary   border-primary
text-secondary bg-secondary
bg-background  text-foreground
```

For transparent variants use the `/` opacity modifier: `bg-primary/10`, `border-primary/20`.

### Gradient text (canonical pattern)

```jsx
<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
    highlighted word
</span>
```

### Card / glass backgrounds

```jsx
// Subtle glass card
className="bg-white/5 border border-white/10 rounded-xl"

// Coloured tint card
className="bg-primary/5 border border-primary/20 rounded-2xl"

// Dark opaque card
className="bg-slate-900/80 border border-slate-800 rounded-xl"
```

### Glow effects

```jsx
// Image/card glow (box-shadow)
className="shadow-[0_0_80px_-20px_rgba(0,229,255,0.4)]"

// Ambient background blob (absolutely-positioned, pointer-events-none)
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
```

---

## Component API

### `<Slide>` — base wrapper for every slide

```jsx
import Slide from '../components/Slide';

// Props:
//   title     (optional string)  — animated gradient <h1> above children
//   className (optional string)  — extra CSS classes on the outer wrapper
//   children                     — your slide content

// Option A: let Slide render the title
<Slide title="My Slide Title">
    <p className="text-slate-300">Content here.</p>
</Slide>

// Option B: full custom layout (most slides use this)
<Slide className="!p-4 md:!p-8 overflow-y-auto">
    <div className="max-w-[1400px] mx-auto">
        {/* custom layout */}
    </div>
</Slide>
```

**Important:** When using a custom layout, always add `overflow-y-auto` to `<Slide className>` so
tall content scrolls instead of clipping, and wrap inner content in a `max-w-[1400px]` div.

### `<Deck>` — you never need to edit this

Automatically:

- Renders `slides[currentSlide]`
- Handles `ArrowLeft`, `ArrowRight`, `Space` keyboard navigation
- Shows an animated progress bar at the bottom
- Shows a `current / total` slide counter

---

## Animation Patterns (Framer Motion)

Import: `import { motion } from 'framer-motion';`

### Fade in from below (most common)

```jsx
<motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
>
```

### Fade in from side

```jsx
<motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.1 }}
>
```

### Staggered list (increment `delay` by item index)

```jsx
{items.map((item, i) => (
    <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 + i * 0.1 }}
    >
```

### Scale entrance

```jsx
<motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8 }}
>
```

### Hover lift

```jsx
<motion.div whileHover={{ scale: 1.05, translateY: -4 }}>
```

---

## Icons (Lucide React)

Package: `lucide-react@0.469.0` — already installed.

```jsx
import { Zap, Shield, Rocket, Brain, Code2, Users, TrendingUp, Quote, Github } from 'lucide-react';

<Zap size={20} className="text-yellow-400" />
<Brain size={32} className="text-primary" />
```

Common sizes: `12` · `14` · `16` · `18` · `20` · `24` · `32` · `36` · `48`

Browse all icons at https://lucide.dev/icons/

---

## How to Create a New Slide

### Step 1 — Create the file

```
src/slides/MyTopicSlide.jsx
```

Naming convention: `<PascalCaseTopic>Slide.jsx`

### Step 2 — Pick a starter template

Copy one of the files from `src/slides/template/`:

| Template file         | Best for                                     |
|-----------------------|----------------------------------------------|
| `TitleSlide.jsx`      | Cover slide, section divider, announcement   |
| `ContentSlide.jsx`    | 4 key points with icon cards                 |
| `TwoColumnSlide.jsx`  | Image left + bullets/text right              |
| `QuoteSlide.jsx`      | Expert quote, powerful statement             |
| `StatsSlide.jsx`      | Research numbers, product metrics            |

### Step 3 — Register in `src/App.jsx`

```jsx
// 1. Import at the top of App.jsx
import MyTopicSlide from './slides/MyTopicSlide';

// 2. Add to the slides array — order = presentation order
const slides = [
    <HeroSlide />,
    <MyTopicSlide />,   // ← insert here
    <ClosingSlide />,
];
```

---

## Slide Layout Patterns (copy-paste ready)

### 1. Full-screen hero (centered)

```jsx
<Slide className="text-center items-center justify-center">
    <div className="flex flex-col items-center gap-8 relative z-10">
        {/* content */}
    </div>
    {/* ambient blobs */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />
    </div>
</Slide>
```

### 2. Header + icon-card grid (most common layout)

```jsx
<Slide className="!p-4 md:!p-8 overflow-y-auto">
    <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-6">
        {/* Header */}
        <div className="text-center"> ... </div>
        {/* 4-column grid (2 on mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full"> ... </div>
    </div>
</Slide>
```

### 3. Two-column (image + text)

```jsx
<Slide className="!p-4 md:!p-8 overflow-y-auto">
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div> {/* Image */} </motion.div>
        <motion.div> {/* Text content */} </motion.div>
    </div>
</Slide>
```

### 4. Three-column tool/feature cards

```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
    {items.map((item, i) => (
        <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-5 rounded-2xl border border-white/10 bg-white/5"
        >
        </motion.div>
    ))}
</div>
```

---

## Eyebrow Badge

Small pill label above the headline — shows source, speaker, topic, or date:

```jsx
<motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest"
>
    Speaker Name · Source · Year
</motion.div>
```

---

## Images

Place images in the `/public` folder and reference by filename only:

```jsx
<img src="my-image.png" alt="Description" className="w-full rounded-2xl" />
```

Polished image container:

```jsx
<div className="bg-slate-900 rounded-3xl border-2 border-primary/20 shadow-[0_0_80px_-20px_rgba(0,229,255,0.3)] overflow-hidden">
    <img src="my-image.png" alt="..." className="w-full h-auto block" />
</div>
```

---

## Do & Don't

### ✅ Do

- Keep each slide's data in a `const` array at the top of the component
- Use `motion.div` with `initial` / `animate` / `transition` for every visible element
- Use responsive classes: `text-sm md:text-base`, `grid-cols-2 md:grid-cols-4`
- Add `overflow-y-auto` to `<Slide>` when content might overflow the screen height
- Use staggered `delay` (index × 0.1 s) to animate lists in sequence

### ❌ Don't

- Don't use `useState` or `useEffect` inside slides — they are stateless display components
- Don't put slide content directly inside `<Deck>` — it only accepts a `slides` prop
- Don't hard-code pixel colours; use the `text-primary` / `bg-primary` tokens instead
- Don't modify `Deck.jsx` or `Slide.jsx` unless changing framework-level behaviour

---

## Deployment

```bash
# 1. Update homepage in package.json
"homepage": "https://<your-username>.github.io/<repo-name>"

# 2. Update base in vite.config.js
base: '/<repo-name>/'

# 3. Deploy
npm run deploy
```

The `deploy` script runs `npm run build` first, then pushes `dist/` to the `gh-pages` branch.
