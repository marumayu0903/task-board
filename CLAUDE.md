# Task Board Project

## Git Operations Rule

**Every time code changes are made, push to GitHub immediately.**

### Workflow
1. Make code changes
2. Stage the relevant files: `git add <files>`
3. Commit with a clear message: `git commit -m "..."`
4. Push to GitHub: `git push`

Do not batch multiple unrelated changes into one commit. Each logical change gets its own commit and push.

### Commit Message Format
- `feat: <description>` — new feature
- `fix: <description>` — bug fix
- `refactor: <description>` — code restructuring
- `docs: <description>` — documentation update
- `chore: <description>` — maintenance / tooling

### Branch Strategy
- Work on `main` for small, incremental changes
- Create a feature branch for larger work: `git checkout -b feat/<name>`

## Project Overview

Task board application. (Update this section as the project evolves.)

## Development Commands

(Add commands here as the project is set up, e.g., `npm run dev`, `npm test`.)
