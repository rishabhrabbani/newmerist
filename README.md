# MERIST Trust Foundation

A modern, responsive website for **MERIST Trust Foundation** — built with [Next.js](https://nextjs.org), React, and CSS Modules.

## 🌐 Live Pages

| Route | Description |
|-------|-------------|
| Home | Hero banner, impact statistics |
| Organisation | Team members, government approval |
| Our Mission | Core mission and features |
| Programs | Gallery, news & updates |
| Contact | Get in touch form |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone https://github.com/your-username/meristrust.git
cd meristrust
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **UI Library:** React 19
- **Styling:** CSS Modules + Tailwind CSS 4
- **Linting:** ESLint with Next.js config
- **Language:** JavaScript (JSX)

## 📁 Project Structure

```
meristrust/
├── public/
│   └── images/          # Static assets (logo, gallery, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── GovApproval.jsx
│   │   ├── Impact.jsx
│   │   ├── Gallery.jsx
│   │   ├── Team.jsx
│   │   ├── News.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── DonateModal.jsx
│   ├── pages/
│   │   ├── _app.js      # App wrapper
│   │   └── index.js     # Main entry (SPA-style routing)
│   └── styles/          # CSS Modules
│       └── navbar.module.css
├── package.json
└── README.md
```

## ✨ Features

- Single-page navigation with smooth scroll-to-top
- Responsive design with mobile hamburger menu
- Donate modal for quick contributions
- Optimized images via `next/image`
- Modular component architecture

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Run production server |
| `npm run lint` | Run ESLint checks |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📄 License

This project is private and maintained by the MERIST Trust Foundation.

## 🚢 Deployment

The easiest way to deploy is via [Vercel](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.
