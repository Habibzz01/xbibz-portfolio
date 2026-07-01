# XBIBZ Portfolio

Modern portfolio website for XBIBZ — Data Scientist & Security Enthusiast.

Built with **Next.js 16 + React + TypeScript + Tailwind + Framer Motion**.

## ✨ Features
- Dark modern design matching the original
- Fully interactive project modals
- Smooth scrolling navigation
- Animations with Framer Motion
- Copy-to-clipboard functionality
- Fully responsive (mobile + desktop)
- Deployed via GitHub Actions

## 🚀 Live URL

**https://habibzz01.github.io/xbibz-portfolio/**

## 📦 Deployment (GitHub Pages + GitHub Actions)

This project is configured to deploy **automatically** to GitHub Pages using GitHub Actions.

### How it works:
- Every push to `main` triggers the workflow
- GitHub Actions builds the static Next.js site (`npm run build`)
- The `out/` folder is deployed to GitHub Pages

### Workflow file
Located at: `.github/workflows/deploy.yml`

### Important Notes
- Uses `output: "export"` (required for GitHub Pages)
- Fully functional client-side React app (modals, animations, etc. all work)
- GitHub Pages only supports static hosting

## 🛠️ Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
```

## Repository

- GitHub: https://github.com/Habibzz01/xbibz-portfolio
- Deployed with GitHub Actions

---

**Note**: The site is deployed as a static export. All interactivity (project modals, animations, navigation) works client-side. This is the standard and best way to host Next.js on GitHub Pages.
