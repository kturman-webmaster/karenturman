# Project Patterns

Code patterns and conventions specific to this project.

## Tera Template Patterns

### Template Inheritance

Base template with blocks:
```html
{# _base.html #}
{% block title %}{{ config.title }}{% endblock title %}
{% block content %}{% endblock content %}
```

Child template overriding blocks:
```html
{# page.html #}
{% extends "_base.html" %}

{% block title %}{{ page.title }} | {{ config.title }}{% endblock title %}

{% block content %}
<article>{{ page.content | safe }}</article>
{% endblock content %}
```

### Common Tera Expressions

```html
{# Config access #}
{{ config.title }}
{{ config.base_url }}
{{ config.extra.avatar }}
{{ config.extra.nav_links }}

{# Page variables #}
{{ page.title }}
{{ page.content | safe }}
{{ page.description }}
{{ page.date }}

{# URL generation #}
{{ get_url(path="css/generated.css", cachebust=true) }}
{{ get_url(path=config.extra.avatar, trailing_slash=false) | safe }}

{# Conditionals #}
{% if page.description %}{{ page.description }}{% else %}{{ config.description }}{% endif %}

{# Loops #}
{% for link in config.extra.nav_links %}
  <a href="{{ get_url(path=link.path) }}">{{ link.label }}</a>
{% endfor %}

{# Filters #}
{{ page.summary | striptags | truncate(length=160) }}
{{ current_url | default(value=config.base_url) }}
```

### Macros (in _macros.html)

```html
{# Import macros #}
{% import "_macros.html" as macros %}

{# Use macro #}
{{ macros::social_icons() }}
```

---

## Shortcodes

### Image Shortcode

Usage in markdown content:
```markdown
{{ image(src="images/photo.jpg", alt="Description", caption="Optional caption", class="avatar") }}
```

Parameters:
- `src` - Path relative to `static/` (required)
- `alt` - Alt text (required for accessibility)
- `caption` - Optional figure caption
- `class` - Optional CSS class

Auto-converts to WebP with fallback. Adds lazy loading.

---

## Content File Format

```toml
+++
title = "Page Title"
description = "SEO description for this page"
template = "page.html"
+++

Markdown content goes here...

# Heading

Paragraph text.

{{ image(src="images/photo.jpg", alt="Description") }}
```

---

## CSS Custom Properties

### Core Theme Variables

```css
:root {
  /* Text */
  --text-color: hsla(0, 0%, 20%, 1.0);
  --text-color-light: hsla(0, 0%, 40%, 1.0);

  /* Backgrounds */
  --bg-color: white;
  --sidebar-bg: hsla(0, 0%, 100%, 0.9);
  --code-bg: hsla(0, 0%, 96%, 1.0);

  /* Borders & UI */
  --border-color: hsla(0, 0%, 70%, 1.0);
  --btn-bg: hsla(0, 0%, 60%, 1.0);
  --btn-hover: hsla(0, 0%, 50%, 1.0);
  --shadow-color: rgba(0, 0, 0, 0.1);

  /* Social icons */
  --social-bg: hsla(0, 0%, 95%, 1.0);
  --social-border: hsla(0, 0%, 90%, 1.0);
  --social-hover-bg: hsla(0, 0%, 100%, 1.0);
}
```

### Dark Theme Override

```css
[data-theme="dark"] {
  --text-color: hsla(0, 0%, 85%, 1.0);
  --text-color-light: hsla(0, 0%, 65%, 1.0);
  --bg-color: hsla(0, 0%, 8%, 1.0);
  --border-color: hsla(0, 0%, 25%, 1.0);
  /* ... etc */
}
```

### Using Theme Variables

```css
.my-component {
  color: var(--text-color);
  background: var(--bg-color);
  border: 1px solid var(--border-color);
}

/* Dark mode specific override (if needed) */
[data-theme="dark"] .my-component {
  box-shadow: 0 0 10px var(--shadow-color);
}
```

---

## Design Decisions

### Two-Breakpoint Responsive Strategy

This site uses a simplified two-breakpoint responsive approach:

| Breakpoint | Purpose | What changes |
|------------|---------|--------------|
| **960px** | Layout | Sidebar → hamburger menu, top nav hidden |
| **768px** | Content | Padding, typography, form layout |

**Screen sizes:**
- **Desktop (>960px):** Full sidebar visible, top navigation bar
- **Tablet (769px-960px):** Hamburger menu, content still at full width
- **Mobile (≤768px):** Hamburger menu, content gets `5vw` horizontal padding

**Rationale:**
- Simpler to maintain than 4+ breakpoints (was 900/700/500px)
- 960px for layout changes (when sidebar no longer fits)
- 768px for content formatting (iPad portrait width)
- Avoids complex `calc()` formulas
- Easier to reason about during development

**Implementation pattern:**
```css
/* Layout breakpoint - sidebar/navigation */
@media screen and (max-width: 960px) {
  .page-top .nav { display: none; }
}

/* Content breakpoint - padding/formatting */
@media screen and (max-width: 768px) {
  .content-article .article-content > p {
    padding: 0 5vw;
  }
}
```

---

## Responsive Breakpoints

```css
/* Layout changes (sidebar, navigation) */
@media screen and (max-width: 960px) { }

/* Content formatting (padding, typography) */
@media screen and (max-width: 768px) { }
```

Mobile-first is NOT used. Base styles are desktop, then override for smaller screens.

---

## Common CSS Patterns

### Hover Effect (lift)

```css
.interactive-element {
  transition: all 0.2s ease;
}

.interactive-element:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px var(--shadow-color);
}
```

### Font Stacks

```css
/* Headings / UI */
font-family: 'Ysabeau', 'LXGW Bright', sans-serif;

/* Body text */
font-family: 'STIX Two Text', 'Noto Serif SC', serif;

/* Script / decorative */
font-family: 'Dancing Script', cursive;
```

### Form Styling Pattern

```css
.form-input {
  width: 100%;
  padding: 0.75em 1em;
  color: var(--text-color);
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  transition: all 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--text-color);
}
```

---

## Navigation Config

In `config.toml`:

```toml
[extra]
nav_links = [
    { label = "Teaching", path = "@/teaching/index.md", short_path = "/teaching" },
    { label = "Research", path = "@/research/index.md", short_path = "/research" },
    # Add new pages here
]
```

---

## Adding a New Page

1. Create `content/pagename/index.md`:
   ```toml
   +++
   title = "Page Name"
   description = "SEO description"
   template = "page.html"
   +++

   Content here...
   ```

2. Add to navigation in `config.toml`:
   ```toml
   { label = "Page Name", path = "@/pagename/index.md", short_path = "/pagename" }
   ```

3. Build and test: `npm run dev`
