# Fullstack Web Developer Portfolio

A [Next.js](https://nextjs.org/) portfolio site bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 12 (React 18) |
| Styling | Sass (SCSS), Bootstrap 5, React-Bootstrap |
| Animation | Framer Motion, GSAP, react-tsparticles |
| UI | react-icons, react-multi-carousel, react-scroll |
| Contact | EmailJS (emailjs-com) |

---

## Prerequisites

- **Node.js** 14.x or 16.x (LTS recommended)
- **npm** or **yarn**

---

## Development Setup

### 1. Install dependencies

```bash
npm install
# or
yarn install
```

### 2. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000). The app uses **Fast Refresh**: edits to pages and components update in the browser without a full reload.

### 3. Other scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Production build (output in `.next`) |
| `npm run start` | Run production server (run after `build`) |
| `npm run lint` | Run ESLint (Next.js core-web-vitals config) |

---

## Project Structure

```
src/
├── pages/           # Next.js routes & API
│   ├── _app.js      # App wrapper, global layout & styles
│   ├── _document.js # HTML document, fonts, meta
│   ├── index.js     # Home page
│   └── api/         # API routes (e.g. api/hello.js)
├── components/      # Reusable UI components
│   ├── scss/        # Component-scoped SCSS modules (*.module.scss)
│   └── *.js / *.jsx # Components (e.g. Header, Navbar, Projects)
└── styles/
    └── globals.scss # Global styles (imported in _app.js)
```

- **New pages**: Add a file under `src/pages/` (e.g. `src/pages/about.js` → `/about`).
- **New API routes**: Add under `src/pages/api/` (e.g. `src/pages/api/contact.js` → `/api/contact`).
- **New components**: Add under `src/components/`; keep component-specific styles in `src/components/scss/*.module.scss`.

---

## Best Practices for Development

1. **Use the `src` directory**  
   Keep all app code under `src/` (pages, components, styles). Next.js is already configured for this.

2. **Styling**  
   - Global rules and variables: `src/styles/globals.scss`  
   - Component styles: SCSS modules in `src/components/scss/` (e.g. `Header.module.scss`) and import in the component.

3. **Environment variables**  
   For keys (e.g. EmailJS): use `.env.local` and prefix with `NEXT_PUBLIC_` only for client-exposed values. Do not commit `.env.local`. Add `.env.example` with placeholder keys for other developers.

4. **Linting**  
   Run `npm run lint` (or `yarn lint`) before committing. The project uses `eslint-config-next` (core-web-vitals).

5. **Production check**  
   Before deploy, run `npm run build` and fix any build or lint errors.

6. **Assets**  
   Put images in `public/` and reference them as `/image.png`. Use `next/image` when possible for optimization.

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js Deployment](https://nextjs.org/docs/deployment) — e.g. [Vercel](https://vercel.com)
