# Vibe Coding Presentation

A fully interactive slide deck about **AI-assisted development (Vibe Coding)** — built with React, Vite, and Tailwind CSS. No Canva, no PowerPoint. Just code and AI.

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

1. Create `src/slides/MySlide.jsx` using the `<Slide>` component.
2. Import it in `src/App.jsx` and add `<MySlide />` to the `slides` array.

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

