# Karen Turman Website - Change Log

## Session: 2026-01-15

### Image Optimization
- Converted all images to WebP format (91.5% size reduction: ~7MB → ~649KB)
- Added responsive `<picture>` elements with fallbacks
- Implemented lazy loading

### Code Cleanup
- Removed unused jQuery.mmenu CSS dependency
- Removed debug code from templates
- Fixed protocol-relative URL for instant.page

### Security Hardening
- Added SRI integrity checks on CDN resources (ress.min.css, Font Awesome)
- Added `crossorigin="anonymous"` to all external resources

### JavaScript Extraction
- Externalized inline JS to `static/main.js` (theme toggle, sidebar)
- Removed unused code highlighting logic
- Improved browser caching

---

## Session: 2026-01-16

### Tailwind CSS v4 Migration
- Converted 2,856 lines SCSS to 3,287 lines Tailwind-compatible CSS
- Added npm build process (`package.json`, npm scripts)
- Updated GitHub Actions workflow to include Tailwind build step
- Preserved all functionality: themes, animations, responsive breakpoints

**Files:**
- Created: `css/main.css`, `package.json`, `static/css/generated.css`
- Modified: `config.toml` (disabled SCSS), `templates/_base.html`, `.github/workflows/main.yml`

### SEO Improvements
- Enabled RSS/Atom feeds in `config.toml`
- Added Open Graph and Twitter Card meta tags to `_base.html`
- Added JSON-LD structured data (Person schema)
- Added meta descriptions to all 6 content pages
- Updated `page.html` to use template blocks for meta tags

### Contact Form
- Created `/contact` page with Web3Forms integration
- Added honeypot spam protection
- Added 139 lines of form CSS with dark mode support
- Added Contact to navigation in `config.toml`

**Action Required:** Get Web3Forms access key and update `content/contact/index.md:11`

---

## Session: 2026-01-19

### Cache Busting
- Added `cachebust=true` parameter to CSS/JS URLs in `templates/_base.html`
- Zola now appends SHA-256 hash query parameters automatically
- Browser cache invalidates when file content changes

**Files Modified:** `templates/_base.html` (lines 62, 157)

### README Documentation
- Created comprehensive README.md
- Documented setup, development, build, deployment processes
- Added project structure and configuration notes

### Pre-commit Hooks
- Created `hooks/pre-commit` validation script
- Validates `npm run css:build` and `zola build` before commits
- Created `hooks/install.sh` installation script
- Updated README with setup instructions

**Usage:** Run `./hooks/install.sh` to install hook

---

## Quick Reference

### Major Changes by Impact
1. **Tailwind CSS v4 Migration** - New build process, npm required
2. **Image Optimization** - 91.5% size reduction, WebP format
3. **Contact Form** - New `/contact` page (needs Web3Forms key)
4. **SEO** - Meta tags, feeds, structured data
5. **Cache Busting** - Automatic versioning of CSS/JS
6. **Pre-commit Hooks** - Build validation before commits

### Current State
- Build: `npm run css:build && zola build`
- Dev: `npm run dev` or separate terminals for CSS watch + Zola server
- Deploy: Automatic via GitHub Actions on push to `main`
- All optimizations complete, site production-ready
