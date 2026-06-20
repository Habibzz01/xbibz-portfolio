# XBIBZ Portfolio

A faithful recreation of the original portfolio website using **Next.js + React + TypeScript + Tailwind**.

## Features
- ✅ Dark theme, exact visual match to original screenshot
- ✅ Responsive + mobile friendly (with status bar simulation)
- ✅ Smooth scrolling navigation
- ✅ Project cards with hover effects
- ✅ Detailed project modal (click any project card)
- ✅ Copy-to-clipboard for email & code snippets
- ✅ Framer Motion animations
- ✅ Sonner toast notifications
- ✅ Fully functional "Lihat Proyek", About, Skills & Contact sections

## Tech Stack
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide Icons
- Sonner (toasts)

## Run Locally

```bash
cd xbibz-portfolio
npm install
npm run dev
```

Open http://localhost:3000

## Deploy with Cloudflare Tunnel (Free & Easy)

This is the recommended deployment method for quick public access.

### 1. Install Cloudflare Tunnel (cloudflared)

**macOS:**
```bash
brew install cloudflared
```

**Linux (Ubuntu/Debian):**
```bash
# Download latest
wget -q https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
sudo dpkg -i cloudflared-linux-amd64.deb
```

**Windows:**
Download from: https://github.com/cloudflare/cloudflared/releases

### 2. Build & Start Production Server

```bash
cd xbibz-portfolio
npm run build
npm start
```

The server runs on `http://localhost:3000`

### 3. Expose using Cloudflare Tunnel

Open a **new terminal** and run:

```bash
cloudflared tunnel --url http://localhost:3000
```

You will get a public HTTPS URL like:
```
https://random-word-1234.trycloudflare.com
```

Copy the URL and share it instantly! It will stay up as long as both terminals are running.

### 4. (Optional) Make it permanent

Create a named tunnel if you want:
- Go to https://dash.cloudflare.com → Zero Trust → Tunnels
- Create a tunnel
- Follow the instructions (one-time setup)

## Customization

- Edit `app/page.tsx` for content
- Change colors in `app/globals.css`
- Update contact email in the Contact section
- Replace project images / logos in the `image` field of each project

## Project Structure

```
app/
├── layout.tsx       # Fonts, metadata, Toaster
├── globals.css      # All styling
└── page.tsx         # Main website
```

## Ready for Production

The site is already optimized:
- Static generation
- Fast image handling
- Mobile-first

Enjoy your portfolio! 🚀

Made for XBIBZ. — Data Scientist & Security Enthusiast.
