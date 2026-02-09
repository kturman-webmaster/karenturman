# Claude Session Guide

Personal website for Karen Turman (French professor and international dance instructor).

**Live Site:** https://karenturman.com

## Tech Stack

- **Zola** v0.22.0+ (Rust-based static site generator)
- **Tailwind CSS** v4.0 (utility-first CSS framework)
- **Node.js** v20+ & npm (for Tailwind build)
- **GitHub Actions** (CI/CD) → **GitHub Pages** (hosting)

## Instructions

### Git Workflow

User manages all commits. You remind and suggest, never commit.

**After significant work:**
1. Run `git status` and `git log --oneline -5` to check state
2. Write commit message to `temp_commit_message.txt` (always first)
3. Display message and remind: "You may want to commit these changes"

**Format:** Imperative mood, 50 char title, explain why/what in body.

**Skip for:** Trivial changes. **Never:** Run git commands or skip temp file.

### Session Workflow

1. Check `.claude/ROADMAP.md` for current priorities
2. Make changes incrementally
3. Test with `npm run dev` before finishing
4. Update `.claude/SESSION_LOG.md` when completing significant work
5. Wait for user to request commits

## Quick Start

```bash
npm install        # First time only
npm run dev        # Start dev server (CSS watch + Zola)
```

Site runs at `http://127.0.0.1:1111`

## Build & Deploy

```bash
npm run css:build  # Build Tailwind CSS
zola build         # Build site → public/
```

Deployment is automatic: push to `main` → GitHub Actions → `gh-pages` branch

## Project Structure

```
├── content/              # Markdown content (7 pages)
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

## Key Features

- **Bilingual content** (French/English)
- **Theme system:** Light/dark mode with localStorage persistence
- **SEO:** Open Graph, Twitter Cards, JSON-LD, RSS feed
- **Cache busting:** SHA-256 hashes on CSS/JS assets
- **Contact form:** Web3Forms with honeypot spam protection
- **Performance:** WebP images (91.5% reduction), lazy loading, minified CSS

## Common Tasks

| Task | How |
|------|-----|
| Add/edit content | Modify files in `content/` |
| Change styles | Edit `css/main.css`, run `npm run css:build` |
| Update navigation | Edit `nav_links` in `config.toml` |
| Theme colors | CSS custom properties in `css/main.css` with `[data-theme="dark"]` variants |

## Pre-commit Hook

Install build validation (recommended):
```bash
./hooks/install.sh
```

Skip temporarily: `git commit --no-verify`

## Skills

Custom commands for common tasks:

- `/new-page <name> [title]` - Create a new content page and add to navigation
- `/wrap-up` - End-of-session tasks (update session log, create commit message)
- `/check` - Run build validation (Tailwind + Zola)

## Documentation

See `.claude/` for detailed docs:
- **ROADMAP.md** - Completed tasks & remaining work
- **SESSION_LOG.md** - History of previous Claude sessions
- **TROUBLESHOOTING.md** - Common issues and fixes
- **PATTERNS.md** - Code patterns (Tera, CSS, content files)
- **skills/** - Skill definitions
