# Karen Turman Website - Project Tasks

## Next Steps (Prioritized)

### HIGH PRIORITY

#### 1. SEO Improvements
**Goal:** Improve search engine visibility and discoverability

**Tasks:**
- [ ] Enable RSS/Atom feed generation in `config.toml` (add `generate_feed = true`)
- [ ] Create `templates/atom.xml` or use default feed template
- [ ] Note: RSS icon exists in `templates/_macros.html:4-5` but no feed configured
- [ ] Add sitemap.xml generation (may be automatic with Zola)
- [ ] Create `static/robots.txt`
- [ ] Add JSON-LD structured data for:
  - Person schema (Karen's profile)
  - BreadcrumbList for navigation
  - EducationalOrganization (if applicable)
- [ ] Add Open Graph meta tags for better social sharing
- [ ] Add Twitter Card meta tags
- [ ] Ensure all pages have proper meta descriptions

**Files to modify:**
- `config.toml`: Add feed settings
- `templates/_base.html`: Add structured data in `<head>`
- Create `static/robots.txt`

---

### MEDIUM PRIORITY

#### 2. Tailwind CSS v4 Migration (IN PROGRESS)
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

---

### LOW PRIORITY

#### 3. Build & Deployment Enhancements
**Tasks:**
- [ ] Add image compression to build pipeline
- [ ] Implement cache busting for CSS/JS assets
- [ ] Add pre-commit hooks for validation
- [ ] Document deployment process in README
- [ ] Consider adding staging environment

---

#### 4. Additional Features (Nice-to-have)
**Tasks:**
- [ ] Implement search functionality (currently `build_search_index = false` in config)
- [ ] Add contact form (consider static solution like Formspree)
- [ ] Consider adding blog section
- [ ] Add print stylesheet
