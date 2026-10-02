# Sabbir Ahamed – Portfolio

A modern, responsive single-page portfolio built with Next.js (App Router) and Tailwind CSS. One scrolling landing page covers the hero, about, experience, skills, projects, achievements, services, and contact. Deployed on Vercel.

## ✨ Features
- Single landing page with smooth-scrolling section nav and scroll-spy highlighting
- Animated hero with rotating titles and interactive particles
- Work experience timeline, grouped skills, featured + older projects
- Problem-solving stats, competitions, certifications, and publications
- Contact form integrated with EmailJS
- Old routes (`/about`, `/projects`, ...) redirect to their section anchors
- Vercel Speed Insights integrated
- SEO via the Metadata API, JSON-LD, `sitemap.js`, and `robots.js`

## 🧰 Tech Stack
- Framework: Next.js 16 App Router (React 19)
- Styling: Tailwind CSS
- Animations: Framer Motion
- Particles: @tsparticles/react + @tsparticles/slim
- Icons: react-icons
- Contact: emailjs-browser
<!--
## 🚀 Quick Start

Prerequisites:
- Node.js 20.9+ and npm

Install dependencies and run the dev server:

```powershell
npm install
npm run dev
```

Then open http://localhost:3000

Build and start production server:

```powershell
npm run build
npm start
```

Run linter:

```powershell
npm run lint
```


## 🔐 Environment Variables (Contact Form)
Create a `.env.local` in the project root for EmailJS keys:

```
# EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

You can obtain these from https://www.emailjs.com/ and wire them in the contact form component.

## 📁 Project Structure (high level)
```
src/
  app/                  # App Router: layout.js (metadata, fonts), page.js, globals.css, sitemap.js, robots.js
  components/
    layout/             # Header, Nav, Socials, TopLeftImg
    sections/           # One component per landing-page section (Hero, About, Experience, ...)
    ui/                 # Shared building blocks (Section, SectionHeading, ParticlesContainer, ...)
  data/                 # Site content (profile, experience, skills, projects, achievements, services, nav)
  hooks/                # useActiveSection (scroll-spy)
  lib/                  # Framer Motion variants
public/                 # Static assets (images, CV, favicon)
```

To update content, edit the files in `src/data/`.

## 🖼️ Favicon
Favicon is configured via `metadata.icons` in `src/app/layout.js` and stored in `public/` as `favicon.svg` with an ICO fallback.

## 🌐 Deploy
This project works great on Vercel. After pushing to GitHub:
- Import the repo in Vercel
- Framework preset: Next.js
- Environment variables: add EmailJS keys if using the contact form

## 🧩 Notes
- Line endings are normalized to LF using `.gitattributes` and `.editorconfig`.
-->
## 📄 License
This repository is for personal portfolio use. Feel free to reference structure and ideas; please do not reuse content or identity.
