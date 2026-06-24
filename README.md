# Gabriel Rodriguez Portfolio 2026

A React and Vite portfolio site for Gabriel Rodriguez, focused on software development and embedded systems work. The app is currently structured as a single-page portfolio with navigation, an about section, and a projects section powered by local project data.
Its an upgraded veersion of a previous website using HTML,CSS, and JS now updated to use React for a modern framework.

## Tech Stack

- React 19
- Vite 8
- JavaScript / JSX
- ESLint

## Features

- Single-page React app rendered from `src/main.jsx`
- Top navigation with anchors for About, Projects, and Contact
- About section with Gabriel's role summary and social links
- Reusable project card component
- Projects section driven by `src/data/Projects.js`
- Static assets available through the `public` directory

## Project Structure

```text
webPorfolio2026/
  public/
    favicon.svg
    icons.svg
  src/
    components/
      AboutMe.jsx
      Navbar.jsx
      ProjectCard.jsx
      ProjectsSection.jsx
    data/
      Projects.js
    App.jsx
    main.jsx
    index.css
    App.css
  index.html
  package.json
  vite.config.js
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Current Status

As of June 24, 2026, the app is in an early portfolio buildout stage. The React app shell, navbar, about section, project card component, and projects section are implemented. The project compiles successfully with `npm run build`, and `npm run lint` passes.

The projects data currently uses placeholder project names, descriptions, image paths, and URLs. The navbar includes a Contact anchor, but there is not yet a rendered contact section in `App.jsx`. The global stylesheet files are present, but currently empty, so visual styling still needs to be added.

## Next Steps

- Replace placeholder project data with real project details
- Add real project images or screenshots
- Build and render a contact section
- Add responsive styling in `src/index.css` or `src/App.css`
- Restore or confirm required document metadata in `index.html`, such as viewport and favicon tags
