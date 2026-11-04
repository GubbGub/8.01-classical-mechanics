#!/bin/sh
# Push whatever changed (usually progress.js) to GitHub. The site updates about a minute later.
# Usage, from this folder in Terminal:  ./publish.sh            or  ./publish.sh "Finished Week 1"
cd "$(dirname "$0")" || exit 1
msg="${1:-Progress update $(date +%Y-%m-%d)}"
git add -A
if git diff --cached --quiet; then
  echo "Nothing new to publish."
  exit 0
fi
git commit -m "$msg" && git push && echo "Published. Live in about a minute: https://gubbgub.github.io/8.01-classical-mechanics/"
