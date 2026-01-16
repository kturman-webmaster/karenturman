# Karen Turman Website - Project Context

## Project Overview

Static portfolio website built with Zola (Rust-based static site generator) for Karen Turman, a French professor and international dance instructor. Deployed via GitHub Actions to GitHub Pages.

**Base URL:** https://karenturman.com
**Tech Stack:** Zola 0.22+, SCSS, vanilla JavaScript, Font Awesome 7.0.1

---

## Configuration Details

- **Config file:** `config.toml`
- **Base URL:** https://karenturman.com
- **Build command:** `zola build`
- **Output directory:** `public/` (gitignored)
- **Deployment:** GitHub Actions (`.github/workflows/main.yml`)
- **Target branch:** `gh-pages`

---

## Key Template Files

- `templates/_base.html` - Main layout template
- `templates/index.html` - Homepage
- `templates/page.html` - Standard pages
- `templates/about.html` - About page
- `templates/_macros.html` - Reusable components (social icons)
- `templates/shortcodes/image.html` - Image shortcode with WebP support
- `static/main.js` - External JavaScript (theme toggle, sidebar toggle)

---

## Content Structure

- Bilingual (French/English)
- 5 main sections: Teaching, Research, Dance Research, Dance Teaching, Resources
- Navigation defined in `config.toml` under `extra.nav_links`

---

## Known Issues

- No current issues after optimizations
- All builds passing successfully

---

## Quick Start for Development

1. Review PROJECT_TASKS.md for current priorities
2. Run `zola build` to verify current state
3. Make changes
4. Test locally with `zola serve`
5. Update PROJECT_CHANGE_LOG.md when tasks are completed
