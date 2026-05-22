# 🤖 Moe-Kyaw-Aung-Portfolio V6

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-V6-b87333?style=for-the-badge&logo=android&logoColor=white)
![Status](https://img.shields.io/badge/Status-Live-4CAF50?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/Dev-moe-kyawaung/Dev-moe-kyawaung.github.io?style=for-the-badge&color=b87333)

**🌐 Live Site → [dev-moe-kyawaung.github.io/Moe-Kyaw-Aung-Portfolio-V6/]([https://dev-moe-kyawaung.github.io](https://dev-moe-kyawaung.github.io/Moe-Kyaw-Aung-Portfolio-V6/))**

*Android Senior Developer · Kotlin · Jetpack Compose · Firebase · REST APIs*  
*Tachileik, Myanmar 🇲🇲*

</div>

---

## 👤 About

This is the **Version 6** of my personal portfolio website — built as a production-ready, single-page application with a **Glasspunk / Transparent** design aesthetic using a **Graphite & Copper** color palette.

```
Name    : Moe Kyaw Aung
Role    : Android Senior Developer | Full Stack Developer
Stack   : Kotlin · Jetpack Compose · Firebase · REST APIs · Azure DevOps
Location: Tachileik, Shan State, Myanmar
Email   : moekyawaung@asia.com
Phone   : +95 988 9000 889
GitHub  : github.com/Dev-moe-kyawaung
Gravatar: gravatar.com/moekyawaung2026
```

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#1c1c1e` | Page background (warm charcoal) |
| `--bg-secondary` | `#2c2c2e` | Card surfaces |
| `--copper` | `#b87333` | Primary accent |
| `--copper-light` | `#d4956a` | Hover states, highlights |
| `--cream` | `#f5f0e8` | Primary text |
| `--glass-bg` | `rgba(44,44,46,0.55)` | Glassmorphism panels |
| `--glass-blur` | `blur(18px)` | Backdrop filter |

**Typography:**
- Display: [Syne](https://fonts.google.com/specimen/Syne) (headings, nav brand)
- Mono: [Space Mono](https://fonts.google.com/specimen/Space+Mono) (labels, tags, code)
- Body: [Outfit](https://fonts.google.com/specimen/Outfit) (paragraphs)
- Myanmar: [Noto Sans Myanmar](https://fonts.google.com/noto/specimen/Noto+Sans+Myanmar)

---

## 📁 Project Structure

```
Dev-moe-kyawaung.github.io/
│
├── index.html                  # Main portfolio (single-page)
│
├── assets/
│   ├── css/
│   │   ├── variables.css       # CSS custom properties / design tokens
│   │   ├── base.css            # Reset, typography, utilities
│   │   ├── components.css      # Reusable component styles
│   │   ├── sections.css        # Section-specific styles
│   │   ├── animations.css      # Keyframes & transitions
│   │   └── responsive.css      # Media queries / breakpoints
│   │
│   ├── js/
│   │   ├── main.js             # App entry point & init
│   │   ├── cursor.js           # Custom cursor effect
│   │   ├── preloader.js        # Preloader logic
│   │   ├── theme.js            # Dark/Light mode toggle
│   │   ├── nav.js              # Navigation & mobile menu
│   │   ├── animations.js       # Scroll-triggered animations
│   │   ├── counter.js          # Animated stats counter
│   │   ├── carousel.js         # Testimonials carousel
│   │   ├── lightbox.js         # Image lightbox gallery
│   │   ├── accordion.js        # FAQ accordion
│   │   ├── parallax.js         # Parallax scrolling
│   │   ├── forms.js            # Contact & newsletter forms
│   │   └── skills.js           # Skill bar animations
│   │
│   └── images/
│       ├── avatar.webp          # Profile photo (from Gravatar)
│       ├── og-image.png         # Open Graph social preview
│       └── favicon.ico          # Browser favicon
│
├── components/
│   ├── hero.html               # Hero section snippet
│   ├── about.html              # About section snippet
│   ├── projects.html           # Projects section snippet
│   ├── certificates.html       # Certificates section snippet
│   ├── github.html             # GitHub section snippet
│   └── contact.html            # Contact section snippet
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD pipeline
│
├── .gitignore                  # Git ignore rules
├── LICENSE                     # MIT License
├── CHANGELOG.md                # Version history
├── CONTRIBUTING.md             # Contribution guide
└── README.md                   # This file
```

---

## 🚀 Features

### Interactive
| Feature | Implementation |
|---|---|
| 🖱️ Custom Cursor | CSS + RAF smooth-follow animation |
| 🌓 Dark / Light Mode | CSS `data-theme` attribute toggle |
| 📱 Responsive Hamburger | Pure CSS + JS transition |
| ✨ Scroll Fade-in | `IntersectionObserver` API |
| 📊 Stats Counter | `requestAnimationFrame` animation |
| 🖼️ Image Lightbox | Custom modal with keyboard support |
| 💬 Testimonial Carousel | Touch/click with auto-advance |
| ❓ FAQ Accordion | CSS `max-height` transition |
| 🗺️ Parallax Bands | `scroll` event + `backgroundPositionY` |
| 📬 Contact Form | Client-side validation with ARIA |
| 📧 Newsletter Form | Email regex validation |
| ⬆️ Back to Top | `scroll` threshold + smooth scroll |
| ⏳ Preloader | CSS animation + `window.onload` |
| 📌 Sticky CTA Bar | Fixed bottom bar with quick links |

### Sections
- **Hero** — Animated gradient background with floating orbs & profile card
- **Stats** — Animated counter (5+ yrs, 30+ apps, 22 repos, 100% satisfaction)
- **About** — Animated skill bars, Myanmar language bio, career details
- **Projects** — 6 real GitHub repos with live links
- **Experience** — Timeline with career history
- **Certificates** — 8 credentials with icons
- **GitHub** — Live profile card, 6 repo cards, contribution chart
- **Organizations** — 6 tech communities
- **Links Collection** — All profiles, Gravatar, social, mail collection
- **Gallery** — 8-image lightbox grid
- **Testimonials** — Auto-advancing carousel with dots
- **FAQ** — 6-question accordion
- **Contact** — Validated form + Google Maps embed
- **Newsletter** — Email subscription form
- **Social** — All platform links

---

## 🛠️ Tech Stack

```
Frontend     → HTML5 · CSS3 · Vanilla JavaScript (ES6+)
Fonts        → Google Fonts (Syne, Space Mono, Outfit, Noto Sans Myanmar)
Icons        → Font Awesome 6.5
Images       → picsum.photos (placeholders) · Gravatar · GitHub Avatars
Maps         → Google Maps Embed API
CI/CD        → GitHub Actions → GitHub Pages
Hosting      → GitHub Pages (free, HTTPS, custom domain ready)
```

---

## ⚡ Quick Start

### Option 1 — Use directly (no build needed)
```bash
# Clone the repository
git clone https://github.com/Dev-moe-kyawaung/Dev-moe-kyawaung.github.io.git

# Open in browser
open index.html
# or
npx serve .
```

### Option 2 — Live Server (VS Code)
1. Install **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. Visit `http://localhost:5500`

---

## 🌐 Deployment

This site auto-deploys to **GitHub Pages** on every push to `main` via GitHub Actions.

**Manual deploy:**
```bash
git add .
git commit -m "feat: update portfolio content"
git push origin main
# → Auto-deploys in ~30 seconds
```

**Custom Domain** (optional):
1. Add `CNAME` file with your domain: `echo "yourdomain.com" > CNAME`
2. Configure DNS `A` records to GitHub Pages IPs
3. Enable HTTPS in repo Settings → Pages

---

## 🔧 Customization Guide

### Update personal info
Edit `index.html` — search for these markers:

```html
<!-- PROFILE: update name, role, location -->
<!-- CONTACT: update email, phone, social links -->
<!-- PROJECTS: add/remove project cards -->
<!-- CERTS: update certificate list -->
<!-- STATS: update counter targets -->
```

### Change color theme
In `assets/css/variables.css` (or the `:root` block in `index.html`):
```css
:root {
  --copper:      #b87333;  /* Change accent color here */
  --bg-primary:  #1c1c1e;  /* Change background here */
  --cream:       #f5f0e8;  /* Change text color here */
}
```

### Add a new project card
```html
<article class="project-card glass-card fade-in">
  <img src="YOUR_IMAGE" alt="Project name" class="project-thumb" />
  <div class="project-tags">
    <span class="project-tag">Kotlin</span>
  </div>
  <h3 class="project-title">Your Project Name</h3>
  <p class="project-desc">Brief description of the project...</p>
  <div class="project-links">
    <a href="GITHUB_URL" class="project-link">
      <i class="fa-brands fa-github"></i> GitHub
    </a>
  </div>
</article>
```

---

## 📸 Screenshots

| Section | Preview |
|---|---|
| Hero | Animated gradient + floating orbs + profile card |
| Projects | Glass cards with real GitHub repo links |
| GitHub | Live avatar, repo cards, contribution chart |
| Gallery | 8-image lightbox grid |
| Contact | Validated form + Google Maps |

---

## 📜 Version History

| Version | Date | Highlights |
|---|---|---|
| V6 | May 2026 | Glasspunk design · Graphite & Copper · Full interactive suite |
| V5 | Jan 2026 | Dark mode · GitHub integration |
| V4 | Sep 2025 | Jetpack Compose section · Firebase showcase |
| V3 | Apr 2025 | Responsive overhaul · Accessibility pass |
| V2 | Nov 2024 | Projects gallery · Contact form |
| V1 | Apr 2024 | Initial launch |

Full changelog: [CHANGELOG.md](./CHANGELOG.md)

---

## 🤝 Connect

| Platform | Link |
|---|---|
| 🐙 GitHub | [github.com/Dev-moe-kyawaung](https://github.com/Dev-moe-kyawaung) |
| 👤 Gravatar | [gravatar.com/moekyawaung2026](https://gravatar.com/moekyawaung2026) |
| 👤 Gravatar Alt | [gravatar.com/moekyawaung13721](https://gravatar.com/moekyawaung13721) |
| 📧 Email | [moekyawaung@asia.com](mailto:moekyawaung@asia.com) |
| 📱 Phone | +95 988 9000 889 |
| 💼 LinkedIn | linkedin.com/in/moekyawaung |
| ✈️ Telegram | t.me/moekyawaung |

---

## 📄 License

```
MIT License

Copyright (c) 2026 Moe Kyaw Aung

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software.
```

Full license: [LICENSE](./LICENSE)

---

<div align="center">

**Built with ❤️ from Tachileik, Myanmar 🇲🇲**

[![GitHub stars](https://img.shields.io/github/stars/Dev-moe-kyawaung/Dev-moe-kyawaung.github.io?style=social)](https://github.com/Dev-moe-kyawaung/Dev-moe-kyawaung.github.io/stargazers)

*"Clean code is not written by following a set of rules. It is crafted by a developer who cares."*

</div>
