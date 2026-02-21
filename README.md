# Vibe Coding Presentation

A fully interactive slide deck about **AI-assisted development (Vibe Coding)** — built with React, Vite, and Tailwind CSS. No Canva, no PowerPoint. Just code and AI.

---

## 🍴 Use This as Your Own Presentation Template

This repo is designed to be **forked** as a starting point for any presentation deck. The design system, animation patterns, and AI agent context are all wired up — you just add your content.

### Quickstart

1. **[Fork this repository](https://github.com/davidgrcias/vibe-coding-presentation/fork)** on GitHub
2. Clone your fork and install dependencies:
   ```bash
   git clone https://github.com/<your-username>/<your-fork>.git
   cd <your-fork>
   npm install
   npm run dev
   ```
3. Update the `homepage` in `package.json` and `base` in `vite.config.js` to match your repo name
4. Open the project in your AI editor (Cursor, Windsurf, VS Code + Copilot)
5. Start vibe coding — the AI already has full context from [`.github/copilot-instructions.md`](.github/copilot-instructions.md)

### Starter Slide Templates

Ready-to-copy templates live in [`src/slides/template/`](src/slides/template/):

| File | Best for |
|------|---------|
| [`TitleSlide.jsx`](src/slides/template/TitleSlide.jsx) | Cover slide, section divider, announcement |
| [`ContentSlide.jsx`](src/slides/template/ContentSlide.jsx) | 4 key points with icon cards |
| [`TwoColumnSlide.jsx`](src/slides/template/TwoColumnSlide.jsx) | Image left + text/bullets right |
| [`QuoteSlide.jsx`](src/slides/template/QuoteSlide.jsx) | Full-screen expert quote or bold statement |
| [`StatsSlide.jsx`](src/slides/template/StatsSlide.jsx) | Large-number metrics / research findings |

### Vibe Coding Workflow

1. Open your AI editor on this repo
2. Prompt your AI assistant: *"Create a new slide about [your topic]. Use the `TwoColumnSlide` pattern from `src/slides/template/` and follow the instructions in `.github/copilot-instructions.md`."*
3. The AI generates a complete slide with the right design tokens, animations, and layout
4. Register the slide in `src/App.jsx` — it's live in your deck

> The [`.github/copilot-instructions.md`](.github/copilot-instructions.md) file contains the full PRD/PDD:
> architecture, design system, component API, animation patterns, and conventions.
> AI tools read this automatically, so every prompt you write has full project context.

---

## Features

- 🚀 Smooth animated slide transitions powered by [Framer Motion](https://www.framer.com/motion/)
- ⌨️  Keyboard navigation (`←` / `→` / `Space`)
- 📊 Progress bar & slide counter
- 🎨 Dark, polished design with a Tailwind v4 custom theme
- 🧩 Modular slide components — easy to add, remove, or reorder

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the dev server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Deploy to GitHub Pages |

## Project Structure

```
src/
├── components/
│   ├── Deck.jsx        # Presentation shell (nav, progress bar, keyboard)
│   └── Slide.jsx       # Base slide wrapper with animation defaults
├── slides/             # Individual slide components (one file per slide)
└── App.jsx             # Slide registry — import and order slides here
```

## Creating a New Slide

The fastest way is to copy a starter template:

```bash
cp src/slides/template/ContentSlide.jsx src/slides/MyTopicSlide.jsx
```

Then open the file, replace the content variables at the top, and register it in `src/App.jsx`:

```jsx
// src/App.jsx — add your import and slide in the right position
import MyTopicSlide from './slides/MyTopicSlide';

const slides = [
  <HeroSlide />,
  <MyTopicSlide />,   // ← new slide goes here
  <ClosingSlide />
];
```

Available templates in [`src/slides/template/`](src/slides/template/):
`TitleSlide` · `ContentSlide` · `TwoColumnSlide` · `QuoteSlide` · `StatsSlide`

Or write one from scratch using the `<Slide>` component:

```jsx
// src/slides/MySlide.jsx
import React from 'react';
import Slide from '../components/Slide';

const MySlide = () => (
  <Slide title="My Awesome Slide">
    <p className="text-slate-300">Your content here.</p>
  </Slide>
);

export default MySlide;
```

## Deployment

The project deploys automatically to **GitHub Pages** via the `deploy` script:

```bash
npm run deploy
```

Live demo: <https://davidgrcias.github.io/vibe-coding-presentation>

## Tech Stack

- [React 19](https://react.dev)
- [Vite 6](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev)

