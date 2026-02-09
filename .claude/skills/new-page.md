# Skill: new-page

Create a new content page for the website.

## Usage

```
/new-page <name> [title]
```

Examples:
- `/new-page publications` - Creates page with title "Publications"
- `/new-page cv "Curriculum Vitae"` - Creates page with custom title

## Steps

1. **Parse arguments**
   - First arg: folder name (lowercase, kebab-case)
   - Second arg (optional): page title (defaults to capitalized folder name)

2. **Create content file** at `content/<name>/index.md`:
   ```toml
   +++
   title = "<Title>"
   description = ""
   template = "page.html"
   +++

   Content goes here...
   ```

3. **Add to navigation** in `config.toml`:
   - Find `nav_links` array
   - Add new entry: `{ label = "<Title>", path = "@/<name>/index.md", short_path = "/<name>" }`

4. **Remind user**:
   - Add a description for SEO
   - Add content to the page
   - Run `npm run dev` to preview
   - Consider committing when ready

## Output

After creating, display:
- Path to new file
- Navigation entry added
- Next steps reminder
