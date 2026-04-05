#!/bin/bash
# ============================================================
#  deploy.sh — Safe page deployer for page-builder
#
#  Usage:
#    ./deploy.sh SLUG /path/to/target-repo
#    ./deploy.sh SLUG /path/to/target-repo main
#    ./deploy.sh SLUG /path/to/target-repo gh-pages
#
#  What it does:
#    1. Finds the output folder for SLUG (auto-detects model A/B/C)
#    2. Copies index.html + images/ + styles/ to the target repo
#    3. Shows exactly what will be committed (git status)
#    4. Asks for explicit confirmation before committing
#    5. Commits and pushes
#
#  What it NEVER does:
#    - Never touches the page-builder project files
#    - Never runs git add . or git add -A
#    - Never pushes without explicit confirmation
#    - Never assumes the target repo or branch
# ============================================================

set -e  # Exit immediately if any command fails

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
BOLD='\033[1m'
RESET='\033[0m'

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# ── Argument validation ──────────────────────────────────────────────────────

if [ -z "$1" ] || [ -z "$2" ]; then
  echo ""
  echo -e "${RED}ERROR: Missing arguments.${RESET}"
  echo ""
  echo "  Usage: ./deploy.sh SLUG /path/to/target-repo [branch]"
  echo ""
  echo "  Example:"
  echo "    ./deploy.sh reticlear-us /home/user/repos/reticlear-us"
  echo "    ./deploy.sh reticlear-us /home/user/repos/reticlear-us gh-pages"
  echo ""
  exit 1
fi

SLUG="$1"
TARGET_DIR="$2"
BRANCH="${3:-main}"

# ── Find the output folder for this slug ─────────────────────────────────────

find_output_folder() {
  local slug="$1"

  # Search all JSON files for a matching 'slug' field
  for json_file in "$SCRIPT_DIR"/data/*.json; do
    if [ -f "$json_file" ]; then
      json_slug=$(python3 -c "import json,sys; d=json.load(open('$json_file')); print(d.get('slug',''))" 2>/dev/null)
      if [ "$json_slug" = "$slug" ]; then
        model=$(python3 -c "import json,sys; d=json.load(open('$json_file')); print(d.get('page_model','A').upper())" 2>/dev/null)
        case "$model" in
          B) model_dir="model-b" ;;
          C) model_dir="model-c" ;;
          *) model_dir="model-a" ;;
        esac
        echo "$SCRIPT_DIR/output/$model_dir/$slug"
        return 0
      fi
    fi
  done

  # Fallback: try direct folder search
  for model_dir in model-a model-b model-c; do
    if [ -d "$SCRIPT_DIR/output/$model_dir/$slug" ]; then
      echo "$SCRIPT_DIR/output/$model_dir/$slug"
      return 0
    fi
  done

  return 1
}

SOURCE_DIR=$(find_output_folder "$SLUG")

if [ -z "$SOURCE_DIR" ] || [ ! -d "$SOURCE_DIR" ]; then
  echo ""
  echo -e "${RED}ERROR: No output folder found for slug '${SLUG}'.${RESET}"
  echo ""
  echo "  Expected one of:"
  echo "    $SCRIPT_DIR/output/model-a/$SLUG/"
  echo "    $SCRIPT_DIR/output/model-b/$SLUG/"
  echo "    $SCRIPT_DIR/output/model-c/$SLUG/"
  echo ""
  echo "  Run 'node generator.js $SLUG' first to generate the page."
  echo ""
  exit 1
fi

# ── Validate source files ─────────────────────────────────────────────────────

if [ ! -f "$SOURCE_DIR/index.html" ]; then
  echo ""
  echo -e "${RED}ERROR: index.html not found in ${SOURCE_DIR}${RESET}"
  echo "  Run 'node generator.js $SLUG' first."
  echo ""
  exit 1
fi

# ── Validate target directory ─────────────────────────────────────────────────

if [ ! -d "$TARGET_DIR" ]; then
  echo ""
  echo -e "${RED}ERROR: Target directory does not exist: ${TARGET_DIR}${RESET}"
  echo ""
  echo "  The target must be an existing git repository."
  echo "  Clone it first: git clone REPO_URL $TARGET_DIR"
  echo ""
  exit 1
fi

if [ ! -d "$TARGET_DIR/.git" ]; then
  echo ""
  echo -e "${RED}ERROR: Target directory is not a git repository: ${TARGET_DIR}${RESET}"
  echo ""
  echo "  The target must be a git repository with a remote configured."
  echo ""
  exit 1
fi

# ── Show deployment plan ──────────────────────────────────────────────────────

echo ""
echo -e "${BOLD}  ══════════════════════════════════════════${RESET}"
echo -e "${BOLD}   PAGE BUILDER — Safe Deploy              ${RESET}"
echo -e "${BOLD}  ══════════════════════════════════════════${RESET}"
echo ""
echo -e "  ${CYAN}Slug   :${RESET} $SLUG"
echo -e "  ${CYAN}Source :${RESET} $SOURCE_DIR"
echo -e "  ${CYAN}Target :${RESET} $TARGET_DIR"
echo -e "  ${CYAN}Branch :${RESET} $BRANCH"
echo ""

# Show remote of target repo
TARGET_REMOTE=$(cd "$TARGET_DIR" && git remote -v 2>/dev/null | head -1 || echo "  (no remote configured)")
echo -e "  ${CYAN}Remote :${RESET} $TARGET_REMOTE"
echo ""

# List files that will be deployed
echo -e "  ${BOLD}Files that will be deployed:${RESET}"
echo -e "  ${GREEN}  ✓${RESET}  index.html"
if [ -d "$SOURCE_DIR/images" ]; then
  IMAGE_COUNT=$(ls "$SOURCE_DIR/images/"*.webp 2>/dev/null | wc -l | tr -d ' ')
  echo -e "  ${GREEN}  ✓${RESET}  images/ ($IMAGE_COUNT WebP file(s))"
  ls "$SOURCE_DIR/images/"*.webp 2>/dev/null | while read f; do
    fname=$(basename "$f")
    size=$(du -sh "$f" 2>/dev/null | cut -f1)
    echo -e "         images/$fname  ($size)"
  done
fi
if [ -d "$SOURCE_DIR/styles" ]; then
  STYLE_COUNT=$(ls "$SOURCE_DIR/styles/"*.css 2>/dev/null | wc -l | tr -d ' ')
  echo -e "  ${GREEN}  ✓${RESET}  styles/ ($STYLE_COUNT CSS file(s))"
  ls "$SOURCE_DIR/styles/"*.css 2>/dev/null | while read f; do
    fname=$(basename "$f")
    size=$(du -sh "$f" 2>/dev/null | cut -f1)
    echo -e "         styles/$fname  ($size)"
  done
fi
echo ""

# ── Confirmation ──────────────────────────────────────────────────────────────

echo -e "  ${YELLOW}⚠  This will copy files to the target repo and push to '$BRANCH'.${RESET}"
echo ""
echo -e "  ${BOLD}Type 'yes' to continue, anything else to cancel:${RESET}"
echo -n "  > "
read -r CONFIRM

if [ "$CONFIRM" != "yes" ]; then
  echo ""
  echo "  Cancelled. No files were changed."
  echo ""
  exit 0
fi

# ── Copy files to target repo ─────────────────────────────────────────────────

echo ""
echo "  Copying files..."

# Copy index.html
cp "$SOURCE_DIR/index.html" "$TARGET_DIR/index.html"
echo -e "  ${GREEN}✓${RESET}  Copied index.html"

# Copy images/ folder
if [ -d "$SOURCE_DIR/images" ]; then
  mkdir -p "$TARGET_DIR/images"
  cp -r "$SOURCE_DIR/images/." "$TARGET_DIR/images/"
  echo -e "  ${GREEN}✓${RESET}  Copied images/"
fi

# Copy styles/ folder
if [ -d "$SOURCE_DIR/styles" ]; then
  mkdir -p "$TARGET_DIR/styles"
  cp -r "$SOURCE_DIR/styles/." "$TARGET_DIR/styles/"
  echo -e "  ${GREEN}✓${RESET}  Copied styles/"
fi

# ── Git operations in TARGET repo ─────────────────────────────────────────────

echo ""
echo "  Running git in target repo..."
cd "$TARGET_DIR"

# Checkout or create branch
git fetch origin "$BRANCH" 2>/dev/null || true
git checkout "$BRANCH" 2>/dev/null || git checkout -b "$BRANCH"

# Stage ONLY the deployed files — never git add . or git add -A
git add index.html
if [ -d "images" ]; then
  git add images/
fi
if [ -d "styles" ]; then
  git add styles/
fi

# Show what is staged
echo ""
echo -e "  ${BOLD}Staged files (git status):${RESET}"
git status --short
echo ""

# Commit
git commit -m "Deploy: $SLUG landing page" 2>/dev/null || {
  echo -e "  ${YELLOW}Nothing to commit — files are already up to date.${RESET}"
  echo ""
  exit 0
}

# Push
echo "  Pushing to origin/$BRANCH..."
git push origin "$BRANCH"

# ── Done ──────────────────────────────────────────────────────────────────────

echo ""
echo -e "${BOLD}  ══ DEPLOY COMPLETE ══${RESET}"
echo -e "  ${GREEN}✓${RESET}  $SLUG pushed to $BRANCH"
echo -e "  ${GREEN}✓${RESET}  Remote: $TARGET_REMOTE"
echo ""
echo "  Only index.html, images/, and styles/ were pushed."
echo "  The page-builder project was not touched."
echo ""
