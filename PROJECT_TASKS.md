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

#### 2. CSS/SCSS Refactoring
**Goal:** Improve maintainability by modularizing the 2,855-line monolithic stylesheet

**Current state:**
- Single file: `sass/style.scss` (2,855 lines)
- No modular organization
- Heavy nesting making specificity hard to track
- Some redundant rule definitions

**Proposed structure:**
```
sass/
├── style.scss           # Main import file
├── _variables.scss      # Colors, fonts, breakpoints
├── _base.scss          # Reset, typography, body styles
├── _layout.scss        # Grid, sidebar, main layout
├── _components.scss    # Buttons, cards, nav, etc.
├── _themes.scss        # Dark/light mode variables
└── _utilities.scss     # Helper classes
```

**Tasks:**
- [ ] Create modular SCSS file structure
- [ ] Extract CSS variables to `_variables.scss`
- [ ] Separate layout from components
- [ ] Reduce selector nesting depth
- [ ] Remove duplicate/redundant rules
- [ ] Document complex CSS with comments
- [ ] Test build and verify no regressions

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
