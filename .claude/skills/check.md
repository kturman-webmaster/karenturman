# Skill: check

Run build validation to catch errors.

## Usage

```
/check
```

## Steps

1. **Run Tailwind CSS build**
   ```bash
   npm run css:build
   ```
   - Report success or failure
   - If error, show relevant output

2. **Run Zola build**
   ```bash
   zola build
   ```
   - Report success or failure
   - If error, show relevant output

3. **Report results**

   Success:
   ```
   ✓ Tailwind CSS build passed
   ✓ Zola build passed
   ✓ All checks passed
   ```

   Failure:
   ```
   ✗ [Which build] failed
   Error: [relevant error message]

   Suggestion: [how to fix based on error]
   ```

## Common Errors

- **Tailwind fails**: Check `css/main.css` syntax, ensure `npm install` was run
- **Zola fails**: Check TOML syntax in `config.toml` or content frontmatter, check template syntax

## Notes

- This is what the pre-commit hook runs
- Run this before committing to catch issues early
- See `.claude/TROUBLESHOOTING.md` for common fixes
