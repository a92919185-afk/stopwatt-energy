# DEPLOY.md — How to Push a Page to Git
## The ONLY correct way. No exceptions.

---

## ⚠️ THE RULE THAT OVERRIDES EVERYTHING ELSE

> **NEVER run raw git commands to deploy a page.**
> **ALWAYS use `deploy.sh`. That is the only correct method.**

`deploy.sh` is a script that makes wrong deploys **physically impossible**:
- It only copies `index.html` + `images/` — nothing else can get through
- It never touches the page-builder project files
- It never runs `git add .` or `git add -A`
- It shows exactly what will be committed and asks for explicit confirmation before pushing
- It works in the **target repo**, never in the page-builder repo

---

## The command

```bash
./deploy.sh SLUG /path/to/target-repo [branch]
```

**Arguments:**

| Argument | Required | Example |
|----------|----------|---------|
| `SLUG` | Yes | `reticlear-us` |
| `/path/to/target-repo` | Yes | `/home/user/repos/reticlear-us` |
| `branch` | No (defaults to `main`) | `gh-pages` |

---

## Real example

Owner says: *"sobe o reticlear-us pro git"*

```bash
./deploy.sh reticlear-us /home/user/repos/reticlear-us
```

The script will:
1. Find `output/model-a/reticlear-us/` automatically
2. Show the target remote URL — you confirm it is correct
3. List every file that will be pushed
4. Ask you to type `yes` before doing anything
5. Copy only `index.html` and `images/` to the target repo
6. Run `git add index.html` and `git add images/` — nothing else
7. Commit and push to the branch

---

## What the script pushes — always exactly this

```
target-repo/
├── index.html
└── images/
    ├── hero.webp
    ├── lab.webp
    ├── science.webp
    └── og-cover.webp
```

Nothing else. Ever.

---

## Before running deploy.sh — 3 things to confirm with the owner

| Question | Why |
|----------|-----|
| Which slug? | e.g. `reticlear-us` |
| What is the path to the target repo? | The git repo where the page lives, NOT the page-builder folder |
| Which branch? | Usually `main` or `gh-pages` |

**The target repo is a SEPARATE repository from the page-builder.**
The page-builder lives at `/mnt/c/Users/Vinicius/Desktop/page-builder/`.
That is the source. You never push from here directly to a live site.

---

## Why raw git commands are forbidden for deployment

Every past mistake happened because of raw git commands:

| Mistake | Cause | Consequence |
|---------|-------|-------------|
| Full project pushed publicly | `git add .` in the page-builder directory | Build tools, data files, all pages exposed |
| Wrong repo updated | Assumed the remote without checking | Live campaign page overwritten |
| Multiple pages pushed at once | `git add output/` | Unexpected pages deployed |

`deploy.sh` makes all three impossible by design.

---

## If the owner gives you a GitHub URL instead of a local path

```bash
# Clone the target repo first
git clone https://github.com/user/repo-name /home/user/repos/repo-name

# Then deploy
./deploy.sh reticlear-us /home/user/repos/repo-name main
```

---

## If deploy.sh fails

Read the error message. Do NOT attempt to fix it with raw git commands.
Common fixes:

| Error | Fix |
|-------|-----|
| "No output folder found" | Run `node generator.js SLUG` first |
| "Target directory does not exist" | Clone the target repo first |
| "Not a git repository" | The path is wrong — confirm with owner |
| "Nothing to commit" | Files already up to date — no action needed |

---

## The page-builder .gitignore also protects you

The `output/` folder is listed in `.gitignore` for the page-builder repo.
This means that even if someone accidentally runs `git add .` inside the page-builder directory,
the generated pages will not be staged. The protection works at two levels:
1. `deploy.sh` controls what goes into the target repo
2. `.gitignore` prevents the page-builder repo from ever staging output files
