# Karen Turman Website - Project Tasks

## Completed Tasks

### ✅ 1. Tailwind CSS v4 Migration (Completed: 2026-01-16)
**Goal:** Transition from SCSS to Tailwind CSS v4.0 for better maintainability and modern CSS tooling

**Current state:**
- Single SCSS file: `sass/style.scss` (2,856 lines)
- Zola's built-in SCSS compilation
- CSS variable-based theming with `[data-theme="dark"]`

**Target state:**
- Tailwind CSS v4.0 with npm build step
- Preserve existing theme toggle functionality
- Convert SCSS to Tailwind-compatible CSS
- Enable gradual template migration to Tailwind utilities

**Implementation Phases:**

**Phase 1: Setup Foundation (2-3 hours)**
- [x] Create plan and add to PROJECT_TASKS.md
- [ ] Create feature branch: `tailwind-integration`
- [ ] Create `package.json` with Tailwind dependencies
- [ ] Create `css/` directory structure
- [ ] Update `.gitignore` with Node.js entries
- [ ] Install npm dependencies

**Phase 2: CSS Migration (8-12 hours)**
- [ ] Read and analyze `sass/style.scss`
- [ ] Create `css/main.css` with Tailwind import
- [ ] Convert CSS custom properties to `@theme` block
- [ ] Convert all SCSS to standard CSS (flatten nesting)
- [ ] Preserve all animations, gradients, pseudo-elements
- [ ] Test CSS build: `npm run css:build`

**Phase 3: Zola Configuration (30 min)**
- [ ] Update `config.toml`: set `compile_sass = false`
- [ ] Update `templates/_base.html`: change CSS reference to `css/generated.css`

**Phase 4: GitHub Actions (1 hour)**
- [ ] Update `.github/workflows/main.yml` with Node.js setup
- [ ] Add Tailwind CSS build step to workflow
- [ ] Test deployment pipeline

**Phase 5: Testing & Verification**
- [ ] Visual regression testing at all breakpoints
- [ ] Theme toggle functionality testing
- [ ] Animation and hover effect verification
- [ ] Cross-browser testing
- [ ] Performance testing (Lighthouse)
- [ ] Deploy to test branch
- [ ] Verify on GitHub Pages
- [ ] Merge to main if successful

**Timeline:**
- Foundation phase: 11-17 hours
- Optional template migration: 30-55 hours (future work)

**Success Criteria:**
- Site looks identical (pixel-perfect)
- Theme toggle works without changes
- All animations and effects preserved
- Build time ≤ 2 minutes
- CSS file size ≤ current + 20%

**Reference:**
- Plan saved at: `/home/john/.claude/plans/glowing-waddling-hanrahan.md`
- Zolarwind template: https://github.com/thomasweitzel/zolarwind
- Tailwind v4: https://tailwindcss.com/blog/tailwindcss-v4

### ✅ 2. SEO Improvements (Completed: 2026-01-16)
**Goal:** Improve search engine visibility and discoverability

**Completed:**
- ✅ Enabled RSS/Atom feed generation (`generate_feeds = true`)
- ✅ Auto-generated atom.xml, sitemap.xml, robots.txt by Zola
- ✅ Added JSON-LD structured data (Person schema)
- ✅ Added Open Graph meta tags for social sharing
- ✅ Added Twitter Card meta tags
- ✅ Added meta descriptions to all pages
- ✅ Template block system for consistent meta tags

### ✅ 3. Contact Form (Completed: 2026-01-16)
**Goal:** Add professional contact form for visitor inquiries

**Completed:**
- ✅ Created dedicated `/contact` page
- ✅ Integrated Web3Forms backend (free tier: 250 submissions/month)
- ✅ Implemented honeypot spam protection
- ✅ Added comprehensive form styling (139 lines CSS)
- ✅ Dark mode support using existing CSS custom properties
- ✅ Responsive design (breakpoints: 500px, 700px)
- ✅ Added to site navigation (sidebar and top nav)
- ✅ Accessible design with proper labels and HTML5 validation
- ✅ Theme-aware styling matching site aesthetic

**User Action Required:**
- Obtain Web3Forms access key from https://web3forms.com/
- Replace `YOUR-ACCESS-KEY-HERE` in `content/contact/index.md:11`

**Reference:**
- Plan saved at: `/home/john/.claude/plans/glowing-waddling-hanrahan.md`
- Web3Forms docs: https://docs.web3forms.com/

---

## Next Steps (Prioritized)

### LOW PRIORITY

#### 1. Build & Deployment Enhancements
**Tasks:**
- [ ] Add image compression to build pipeline
- [ ] Implement cache busting for CSS/JS assets
- [ ] Add pre-commit hooks for validation
- [ ] Document deployment process in README
- [ ] Consider adding staging environment

---

#### 2. Additional Features (Nice-to-have)
**Tasks:**
- [ ] Implement search functionality (currently `build_search_index = false` in config)
- [ ] Consider adding blog section
- [ ] Add print stylesheet
