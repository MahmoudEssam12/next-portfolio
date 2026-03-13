# Fullstack Web Developer Portfolio

A [Next.js](https://nextjs.org/) portfolio site bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Live: [nextessam.vercel.app](https://nextessam.vercel.app)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (React 18) |
| Styling | Sass (SCSS), Bootstrap 5, React-Bootstrap |
| Animation | Framer Motion, GSAP, react-tsparticles |
| UI | react-icons, react-multi-carousel, react-scroll |
| Contact | EmailJS via server-side API route (`/api/send-email`) |
| SEO | Open Graph, Twitter Cards, JSON-LD structured data, `robots.txt`, `sitemap.xml` |
| Linting | ESLint 9 flat config (`eslint.config.mjs`) with `eslint-config-next` |

---

## Prerequisites

- **Node.js** 18.x or later (LTS recommended)
- **Yarn** 1.x — this project enforces Yarn as the sole package manager (`packageManager` field in `package.json`). Do **not** use npm.

---

## Development Setup

### 1. Install dependencies

```bash
yarn install
```

### 2. Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Production URL used for canonical links, Open Graph, and the sitemap |
| `EMAILJS_SERVICE_ID` | EmailJS service ID (server-side only) |
| `EMAILJS_TEMPLATE_ID` | EmailJS template ID (server-side only) |
| `EMAILJS_USER_ID` | EmailJS public key (server-side only) |
| `EMAILJS_PRIVATE_KEY` | EmailJS private/access token (optional, server-side only) |

> **Never commit `.env.local`** — it is already in `.gitignore`.

### 3. Run the development server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000). The app uses **Fast Refresh**: edits to pages and components update in the browser without a full reload.

### 4. Other scripts

| Command | Description |
|---------|-------------|
| `yarn build` | Production build (output in `.next`) |
| `yarn start` | Run production server (run after `build`) |
| `yarn lint` | Run ESLint via flat config (`eslint.config.mjs`) |

---

## Project Structure

```
├── public/
│   ├── robots.txt       # Crawler rules
│   └── sitemap.xml      # Sitemap for search engines
├── src/
│   ├── pages/
│   │   ├── _app.js      # App wrapper, global layout, GTM & viewport meta
│   │   ├── _document.js # HTML document: lang, charset, theme-color, fonts, meta
│   │   ├── index.js     # Home page with OG, Twitter Card & JSON-LD SEO
│   │   └── api/
│   │       └── send-email.js  # Server-side EmailJS proxy
│   ├── components/
│   │   ├── scss/        # Component-scoped SCSS modules (*.module.scss)
│   │   └── *.js         # UI components (Header, Navbar, Projects, HireMe…)
│   └── styles/
│       └── globals.scss # Global styles (imported in _app.js)
├── .env.example         # Template for required env vars
├── eslint.config.mjs    # ESLint 9 flat config
├── next.config.js       # Next.js configuration
└── package.json
```

- **New pages**: Add a file under `src/pages/` (e.g. `src/pages/about.js` → `/about`).
- **New API routes**: Add under `src/pages/api/` (e.g. `src/pages/api/contact.js` → `/api/contact`).
- **New components**: Add under `src/components/`; keep component-specific styles in `src/components/scss/*.module.scss`.

---

## SEO

The site includes several SEO improvements out of the box:

- **`robots.txt`** and **`sitemap.xml`** in `public/` for search-engine crawlers.
- **Open Graph** and **Twitter Card** meta tags on the home page for rich link previews.
- **JSON-LD** structured data (`Person` schema) for Google Knowledge Graph.
- **Canonical URL** derived from `NEXT_PUBLIC_SITE_URL`.
- Improved `<meta>` descriptions, keywords, `lang="en"`, `charset`, `theme-color`, and font preconnect hints.

---

## Best Practices for Development

1. **Use the `src` directory**  
   Keep all app code under `src/` (pages, components, styles). Next.js is already configured for this.

2. **Styling**  
   - Global rules and variables: `src/styles/globals.scss`  
   - Component styles: SCSS modules in `src/components/scss/` (e.g. `Header.module.scss`) and import in the component.

3. **Environment variables**  
   Use `.env.local` for secrets (EmailJS keys). Only prefix with `NEXT_PUBLIC_` for values that must be available in the browser. Never commit `.env.local`. See `.env.example` for the full list.

4. **Server-side email**  
   The contact form sends messages through the `/api/send-email` API route, keeping EmailJS credentials on the server. No secrets are exposed to the client.

5. **Linting**  
   Run `yarn lint` before committing. The project uses ESLint 9 with the flat config format (`eslint.config.mjs`) and `eslint-config-next` (core-web-vitals).

6. **Package manager**  
   Use **Yarn** exclusively. The `packageManager` field in `package.json` enforces this, and `package-lock.json` is gitignored.

7. **Production check**  
   Before deploying, run `yarn build` and fix any build or lint errors.

8. **Assets**  
   Put images in `public/` and reference them as `/image.png`. Use `next/image` when possible for optimization.

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js Deployment](https://nextjs.org/docs/deployment) — e.g. [Vercel](https://vercel.com)
