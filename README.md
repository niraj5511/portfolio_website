# Niraj Bhusal — Portfolio Website

Personal portfolio of Niraj Bhusal, a Computer Engineering graduate from Nepal. Built with React and Vite.

Live: [bhusalniraj.com.np](https://bhusalniraj.com.np)

## Pages

| Route | Description |
|---|---|
| `/` | Home: Hero, About, Skills, Education, Projects, Experience, Contact |
| `/projects` | All projects, with category filters (Machine Learning, Web Apps, Tools) |
| `/cgpacalculator` | CGPA Calculator for Pokhara University students |
| `*` | 404 page |

## Features

- Light and dark theme. The choice is saved in `localStorage`; the system setting is used until then.
- Typed text animation in the hero (Typed.js) and a particles background.
- Tilt effect on project cards (vanilla-tilt). It is disabled on touch devices, where tap-to-reveal is used instead.
- Contact form sending messages through [Web3Forms](https://web3forms.com).
- Scroll-to-top button and scroll position handling between routes.

## CGPA Calculator

A tool for Pokhara University students at `/cgpacalculator`.

- Add semesters, subjects, credits and grades.
- Per-semester SGPA and overall CGPA (CGPA = total honor points ÷ total credits).
- Autofill subjects and credits from the department curriculum (Computer Engineering, Software Engineering).
- Export the result as a PDF marksheet (jsPDF + jspdf-autotable).

Curriculum data lives in `src/data/`. To add a department, create a new curriculum file with the same shape as `ceCurriculum.js` and register it in `src/pages/CgpaCalculator.jsx`.

## Tech Stack

- React 19
- Vite
- React Router
- Typed.js, vanilla-tilt
- jsPDF, jspdf-autotable
- ESLint
- gh-pages for deployment

## Getting Started

Requires Node.js and npm.

```bash
git clone https://github.com/niraj5511/portfolio_website.git
cd portfolio_website
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and publish `dist/` to the `gh-pages` branch |

## Project Structure

```
portfolio_website/
├── public/              # Static files: CNAME, 404.html, sitemap.xml, robots.txt, og-image.png
├── src/
│   ├── assets/          # Images
│   ├── components/      # Page sections (Hero, About, Skills, ...) with their CSS
│   ├── context/         # ThemeContext (light/dark)
│   ├── data/            # Curriculum data for the CGPA calculator
│   ├── pages/           # Home, ProjectsPage, CgpaCalculator, NotFound
│   ├── utils/           # Helpers (e.g. touch device detection)
│   ├── App.jsx          # Routes
│   └── main.jsx         # Entry point
├── index.html
└── vite.config.js
```

## Deployment

Hosted on GitHub Pages with a custom domain (`public/CNAME`).

```bash
npm run deploy
```

`public/404.html` is used so direct links to routes like `/projects` work on GitHub Pages.

## Adding a Project

Projects are defined in two places and both need the same entry:

1. `src/components/Work.jsx` (home page section)
2. `src/pages/ProjectsPage.jsx` (set `category` to `ml`, `web` or `tool`)

Put the project image in `src/assets/` and import it at the top of each file.

## Contact

- Website: [bhusalniraj.com.np](https://bhusalniraj.com.np)
- GitHub: [@niraj5511](https://github.com/niraj5511)