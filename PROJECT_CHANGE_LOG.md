# Karen Turman Website - Change Log

## Completed Optimizations

### 1. Image Optimization (Session: 2026-01-15)
**Impact:** Reduced total image size from ~7MB to ~649KB (91.5% reduction)

**What was done:**
- Converted all images to WebP format using nix-shell with libwebp
- Added responsive picture elements with WebP/fallback support
- Implemented lazy loading on all images
- Updated image shortcode template (`templates/shortcodes/image.html`)
- Updated avatar references in `templates/_base.html` and `templates/index.html`

**File changes:**
- Created WebP versions of all images in `static/images/`:
  - `avatar.jpg`: 3.0MB → 51KB (98.3% reduction)
  - `headshot-1.jpg`: 2.8MB → 144KB (94.9% reduction)
  - `headshot-2.jpg`: 1.1MB → 64KB (94.2% reduction)
  - `dance-3.jpg`: 461KB → 224KB (51.4% reduction)
  - `dance-4.jpg`: 259KB → 116KB (55.2% reduction)
  - `dance-1.jpeg`: 41KB → 30KB
  - `dance-2.jpeg`: 31KB → 20KB

**Template updates:**
- `templates/shortcodes/image.html`: Now uses `<picture>` element with WebP source and fallback
- `templates/_base.html:35-42`: Avatar now uses picture element
- `templates/index.html:22-29`: Avatar now uses picture element

**Accessibility improvements:**
- Updated alt text in `content/dance-instruction/index.md:8`
- Updated alt text in `content/about/index.md:6`

---

### 2. Code Cleanup (Session: 2026-01-15)

**What was done:**
- Removed unused jQuery.mmenu CSS dependency from `templates/_base.html:20`
- Removed commented debug code block from `templates/page.html:39-56` (was displaying Tera context)
- Fixed protocol-relative URL: `//instant.page/5.1.0` → `https://instant.page/5.1.0` in `templates/_base.html:173`

**Note:** `templates/anchor-link.html` is intentionally blank - needed to suppress anchor link rendering even though `config.toml` has `insert_anchor_links = "none"`

---

### 3. Security Hardening (Session: 2026-01-15)
**Impact:** Enhanced security with SRI integrity checks on all CDN resources

**What was done:**
- Added SRI (Subresource Integrity) hashes to CDN resources:
  - `ress.min.css`: `sha384-lnvXb4jt0lfurlwpl/DgFKSL4Q/CX41Lz3OqIvzxbMPbVvubCu1MVoabK9Yzz7GB`
  - `Font Awesome 7.0.1`: `sha384-rWj9FmWWt3OMqd9vBkWRhFavvVUYalYqGPoMdL1brs/qvvqz88gvLShYa4hKNyqb`
  - `instant.page` already had SRI
- Added `crossorigin="anonymous"` to all external resources including Google Fonts
- Reviewed `| safe` filter usage - confirmed all instances are safe (site-controlled content only)

**File changes:**
- `templates/_base.html:16-25`: Added integrity and crossorigin attributes to CDN resources

**Google Fonts note:**
Google Fonts cannot use SRI because it dynamically generates CSS based on user agent. Added `crossorigin="anonymous"` for CORS security.

**CSP note:**
CSP via meta tag was tested but removed as it requires server-level configuration (GitHub Pages) or more permissive policies. SRI checks provide strong protection against CDN tampering.

---

### 4. JavaScript Extraction (Session: 2026-01-16)
**Impact:** Improved caching and maintainability by externalizing JavaScript

**What was done:**
- Created `static/main.js` containing:
  - Theme toggle function with localStorage persistence
  - Sidebar toggle function
  - Theme initialization based on user preference and system settings
- Removed ~60 lines of inline JavaScript from `templates/_base.html`
- Removed unused code syntax highlighting logic (was targeting pre/code elements but not used)
- Updated `templates/_base.html:118` to reference external script

**File changes:**
- Created `static/main.js` (40 lines)
- `templates/_base.html:118-120`: Replaced inline script with external reference

**Benefits:**
- Better browser caching (JS now cached separately from HTML)
- Cleaner template code
- Easier to maintain and update JavaScript logic

---

## Session History

- **2026-01-15:** Image optimization (WebP conversion, 91.5% size reduction), code cleanup, protocol URL fix, security hardening (SRI integrity checks), JavaScript extraction (externalized to static/main.js, removed unused code highlighting)
