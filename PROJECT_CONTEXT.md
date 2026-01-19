# Karen Turman Website - Project Context

## Project Overview

Static portfolio website for Karen Turman (French professor and international dance instructor).

**Live Site:** https://karenturman.com
**Repository:** GitHub (deployed via GitHub Actions to GitHub Pages)

---

## Tech Stack

- **Zola** v0.22.0+ (Rust-based static site generator)
- **Tailwind CSS** v4.0 (utility-first CSS framework)
- **Node.js** v20+ & npm (for Tailwind build)
- **GitHub Actions** (CI/CD)
- **GitHub Pages** (hosting)

---

## Build Process

### Local Development
```bash
npm run dev          # CSS watch + Zola server (recommended)
# OR
npm run css:watch    # Terminal 1
npm run server       # Terminal 2
```

### Production Build
```bash
npm run css:build    # Build Tailwind CSS → static/css/generated.css
zola build           # Build site → public/
```

### Deployment
- Push to `main` → GitHub Actions runs build → deploys to `gh-pages` branch
- GitHub Pages serves from `gh-pages` branch
- Workflow: `.github/workflows/main.yml`

---

## Project Structure

```
├── content/              # Markdown content (6 pages + contact)
├── css/main.css          # Tailwind CSS input (3,426 lines)
├── static/
│   ├── css/generated.css # Tailwind output (gitignored)
│   ├── images/           # WebP optimized images
│   └── main.js           # Theme toggle & sidebar JS
├── templates/            # Zola/Tera templates
├── hooks/                # Git hooks (pre-commit validation)
├── config.toml           # Zola configuration
└── public/               # Build output (gitignored)
```

---

## Key Features

- **Bilingual content** (French/English)
- **Theme system:** Light/dark mode toggle with localStorage persistence
- **SEO optimized:** Open Graph, Twitter Cards, JSON-LD, RSS feed
- **Cache busting:** SHA-256 hashes on CSS/JS assets (`cachebust=true`)
- **Contact form:** Web3Forms integration with honeypot spam protection
- **Performance:** WebP images (91.5% size reduction), lazy loading, minified CSS
- **Pre-commit hooks:** Validates builds before commits (`./hooks/install.sh`)

---

## Configuration Files

- `config.toml` - Site config, navigation, feeds, social links
- `package.json` - npm scripts, Tailwind dependencies
- `css/main.css` - Tailwind input with custom CSS and theme variables
- `.github/workflows/main.yml` - CI/CD pipeline

---

## Important Notes

### Contact Form Setup
- Uses Web3Forms (free tier: 250 submissions/month)
- Access key needed: Replace `YOUR-ACCESS-KEY-HERE` in `content/contact/index.md:11`
- Get key from: https://web3forms.com/

### Theme System
- CSS custom properties in `css/main.css`
- `[data-theme="dark"]` attribute for dark mode
- No JavaScript changes needed for new themed components

### Pre-commit Hook
- Optional but recommended: `./hooks/install.sh`
- Validates `npm run css:build` and `zola build` before commits
- Skip with: `git commit --no-verify`

---

## Quick Start for New Sessions

1. Read `PROJECT_TASKS.md` for current priorities
2. Check `PROJECT_CHANGE_LOG.md` for recent changes
3. Run `npm run dev` for local development
4. Make changes and test
5. Update change log when completing tasks
