# Sabbir Ahamed – Portfolio

A modern, responsive personal portfolio built with Next.js and Tailwind CSS. It showcases projects, achievements, services, testimonials, and an animated hero with interactive particles. Deployed on Vercel.

## ✨ Features
- Animated hero with rotating titles and interactive particles
- Projects slider (mobile/tablet/desktop optimized)
- Awards & Publications with tabs and smooth scrolling
- Services, About, and Testimonials pages
- Contact form integrated with EmailJS
- Custom scrollbars and hover-reveal behavior
- Vercel Speed Insights integrated
- SEO basics via `<Head>` and favicon

## 🧰 Tech Stack
- Framework: Next.js (React 18)
- Styling: Tailwind CSS
- Animations: Framer Motion
- Sliders: Swiper
- Particles: tsparticles / react-tsparticles
- Icons: react-icons
- Contact: emailjs-browser

## 🚀 Quick Start

Prerequisites:
- Node.js 16+ and npm

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
components/    # UI components (sliders, header, layout, etc.)
pages/         # Next.js routes (home, about, services, work, contact, etc.)
public/        # Static assets (images, favicon)
styles/        # Global styles (Tailwind)
```

## 🖼️ Favicon
Favicon is configured in `pages/_app.js` and stored in `public/` as `favicon.svg` with an ICO fallback.

## 🌐 Deploy
This project works great on Vercel. After pushing to GitHub:
- Import the repo in Vercel
- Framework preset: Next.js
- Environment variables: add EmailJS keys if using the contact form

## 🧩 Notes
- The project uses `@next/font` (Next 13). You can migrate to `next/font` via the official codemod if you upgrade Next.
- Line endings are normalized to LF using `.gitattributes` and `.editorconfig`.

## 📄 License
This repository is for personal portfolio use. Feel free to reference structure and ideas; please do not reuse content or identity.
