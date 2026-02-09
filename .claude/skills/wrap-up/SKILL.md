# Skill: wrap-up

End-of-session tasks to document work and prepare for commit.

## Usage

```
/wrap-up
```

## Steps

1. **Check git state**
   ```bash
   git status
   git log --oneline -5
   ```

2. **Summarize work done this session**
   - Review what was accomplished
   - Note any pending items or issues

3. **Update SESSION_LOG.md**
   - Add new session entry to `.claude/SESSION_LOG.md`
   - Format:
     ```markdown
     ## Session: YYYY-MM-DD

     ### Summary
     Brief description of what was done.

     ### Changes
     - Item 1
     - Item 2

     ### Notes
     Any pending items or things to remember.
     ```

4. **Create commit message**
   - Write to `temp_commit_message.txt`
   - Follow format: imperative title, why/this commit body
   - Display message to user

5. **Remind user**
   - "You may want to commit these changes"
   - Mention any uncommitted work
   - Note if there are pending tasks in ROADMAP.md

## Important

- Never run git commit directly
- Always write commit message to temp_commit_message.txt first
- Let user manage the actual commit
