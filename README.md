# 🎵 Events PWA

### Your music performances, organized. Discover artists, explore setlists, and never miss a show — installable on any device.

[![Build Status](https://img.shields.io/github/actions/workflow/status/markpawl/Events/ci.yml?branch=master&style=flat-square&label=build)](https://github.com/markpawl/Events/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Stars](https://img.shields.io/github/stars/markpawl/Events?style=flat-square)](https://github.com/markpawl/Events/stargazers)
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=flat-square)](https://events-two-khaki.vercel.app)

---

## 🖼️ It looks like this...

Click here to **[View Live Demo →](https://markpawl-events.vercel.app/)**

<img width="320" height="547" alt="Screenshot 2026-05-09 at 3 03 41 PM" src="https://github.com/user-attachments/assets/c59d46ee-dab0-4120-ab8c-4debc0ba06f2" />
<br/>

---

## ⚡ Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/markpawl/Events.git
cd Events

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. That's it — no API keys, no environment setup required.

---

## 📖 About the Project

Managing music performance data is surprisingly messy. Setlists change, artist lineups shift, and fan-facing apps often require a full backend just to update a song entry. **Events PWA** solves this by treating content as structured, file-based data that anyone can update — no backend, no database, no deployment pipeline required for content changes.

**The motivation:** This project was built to give music communities and small venues a lightweight, installable web app for tracking performances, without the overhead of a full CMS or server. By choosing a **file-based, modular data architecture**, contributors can add a new artist or setlist by following a simple template — making the project genuinely open to non-developer contributors.

**Why this stack?**

- **React** was chosen for its component model, which maps cleanly to the domain objects (Artist, Venue, SetList) and enables maximum UI reuse.
- **Vite** provides near-instant HMR during development and optimized production builds — critical for a PWA where load performance matters.
- **Bootstrap 5** delivers a responsive, accessible layout without writing custom CSS grid systems from scratch.
- **`vite-plugin-pwa`** handles the full PWA lifecycle (service worker, manifest, offline caching) declaratively, keeping the app installable on Android and iOS with minimal boilerplate.

---

## ✨ Key Features

- **📱 Progressive Web App (PWA)** — Fully offline-capable with a complete web manifest and icon set. Users can install the app directly from their browser on mobile and desktop.
- **🗂 Modular Data Schema** — Domain-driven folder structure for Songs, Events, and Artists. JS-based templates enforce data consistency and allow content updates without touching UI code.
- **🧩 Decoupled Component Architecture** — Reusable `Artist`, `Venue`, and `SetList` components are fully independent, making it easy to extend or restyle individual sections.
- **🌍 i18n Ready** — Structured to support multilingual content (German/English) through a centralized data layer — no runtime library required to get started.
- **⚡ Vite-Powered Builds** — Lightning-fast development server with Hot Module Replacement and optimized production output.
- **🎨 Bootstrap 5 + Bootstrap Icons** — Clean, responsive UI out of the box, with a comprehensive icon library for event and music-related UI elements.
- **🔍 ESLint Configured** — Enforced code quality with React-specific rules (`react-hooks`, `react-refresh`) for a maintainable codebase.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **UI Framework** | [React 18](https://react.dev/) |
| **Build Tool** | [Vite 5](https://vitejs.dev/) |
| **Styling** | [Bootstrap 5](https://getbootstrap.com/) + [Bootstrap Icons](https://icons.getbootstrap.com/) |
| **PWA** | [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) |
| **Linting** | [ESLint](https://eslint.org/) with React plugins |
| **Language** | JavaScript (ES Modules) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** `v18.0.0` or higher — [Download here](https://nodejs.org/)
- **npm** `v9.0.0` or higher (comes with Node.js)

Verify your versions:

```bash
node --version   # Should be >= 18.0.0
npm --version    # Should be >= 9.0.0
```

> No API keys or environment variables are required. The app is fully data-driven from local files.

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/markpawl/Events.git
cd Events
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

The app will be available at **http://localhost:5173**.

---

## 💻 Usage

### Development

```bash
npm run dev          # Start the Vite dev server with HMR
```

### Production Build

```bash
npm run build        # Compile and bundle for production
npm run preview      # Preview the production build locally
```

### Linting

```bash
npm run lint         # Run ESLint across all JS/JSX files
```

### PWA Asset Generation

```bash
npm run generate-pwa-assets   # Generate all PWA icons from public/logo.svg
```

### Adding Content

The project's core strength is its **contributor-friendly data layer**. To add a new artist or event:

1. Navigate to `src/artists/` or `src/songs/`
2. Copy an existing entry file as your template
3. Fill in the fields following the established schema
4. The new content will appear in the app automatically — no UI changes needed

```js
// Example: src/artists/new-artist.js (follow the existing template structure)
export const artist = {
  id: "artist-slug",
  name: "Artist Name",
  genre: "Genre",
  // ...other fields per the template
};
```

---

## 🗺️ Roadmap

The project is actively evolving. Here's what's planned:

- [ ] **Search & Filter** — Full-text search across events, artists, and setlists
- [ ] **User Favorites** — LocalStorage-based system to bookmark events and artists
- [ ] **Dynamic Routing** — Dedicated detail pages for each artist and event (React Router)
- [ ] **Dark Mode** — System-preference-aware theme toggle
- [ ] **GitHub Actions CI** — Automated lint + build checks on every pull request
- [ ] **Full i18n** — Complete German/English language toggle using `react-i18next`
- [ ] **CMS Integration** — Optional headless CMS (e.g., Contentlayer or Sanity) for teams who prefer a visual editor

Have an idea? [Open a feature request →](https://github.com/markpawl/Events/issues/new)

---

## 🤝 Contributing

Contributions make open source such a great place to learn, inspire, and create — and this project is designed with contributors in mind. Whether you're adding a new artist entry, fixing a bug, or proposing a new feature, **all contributions are warmly welcome**.

**How to contribute:**

1. **Fork** the repository
2. **Create** your feature branch: `git checkout -b feature/your-feature-name`
3. **Commit** your changes: `git commit -m 'feat: add some feature'`
4. **Push** to the branch: `git push origin feature/your-feature-name`
5. **Open a Pull Request**

For content-only contributions (new artists, events, or songs), you don't need deep React knowledge — just follow the templates in `src/artists/` and `src/songs/`.

Please read the [Contributor Guidelines](CONTRIBUTING.md) before submitting a PR. _(Coming soon)_

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

## 🙏 Acknowledgements

- [Vite PWA Plugin](https://vite-pwa-org.netlify.app/) for making PWA implementation approachable
- [Bootstrap](https://getbootstrap.com/) for the solid responsive foundation
- [Shields.io](https://shields.io/) for the status badges
- [Vercel](https://vercel.com/) for frictionless deployment

---

<div align="center">

Made with ❤️ by [markpawl](https://github.com/markpawl)

**[⬆ Back to top](#-events-pwa)**

</div>
