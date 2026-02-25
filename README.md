# Shadab Shaikh – Full Stack Developer Portfolio

A modern, responsive portfolio built with **React (Vite)**, **Tailwind CSS**, **React Router**, and **Framer Motion**.

## Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** (dark mode, custom theme)
- **React Router** (routing)
- **Framer Motion** (animations)

## Features

- Sticky navbar with smooth scroll links
- Dark / Light mode toggle (persisted in `localStorage`)
- Hero, About, Skills, Experience (timeline), Projects, Contact, Footer
- Glassmorphism-style cards and gradient backgrounds
- Responsive layout and typography (Outfit, JetBrains Mono)
- Section reveal animations and hover effects

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── about/
│   ├── contact/
│   ├── experience/
│   ├── footer/
│   ├── hero/
│   ├── layout/
│   ├── navbar/
│   ├── projects/
│   ├── skills/
│   └── ui/           # Button, SectionTitle
├── context/          # ThemeContext
├── pages/            # Home
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

- **Resume**: Add `public/resume.pdf` and the "Download Resume" button will link to it.
- **Projects**: Edit `github` and `live` URLs in `src/components/projects/Projects.jsx`.
- **Contact**: Replace the form `handleSubmit` with your backend or service (e.g. Formspree, API).
- **Social**: Update GitHub and LinkedIn URLs in `src/components/contact/Contact.jsx`.

## License

Private use. © Shadab Shaikh.
