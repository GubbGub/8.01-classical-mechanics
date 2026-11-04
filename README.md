# 8.01 · Classical Mechanics

My self-paced run through [MIT OpenCourseWare 8.01SC Classical Mechanics](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/) (Fall 2016), and the simulations I build from it.

**Live tracker:** https://gubbgub.github.io/8.01-classical-mechanics/

## What's here

| Path | What it is |
| --- | --- |
| `index.html` | The tracker page |
| `course-data.js` | All 37 lessons, readings and 12 problem sets, generated from the OCW course download |
| `progress.js` | What I've finished. The public page reads this file. |
| `projects.js` | The projects listed on the page |
| `sims/` | One folder per simulation or project |
| `publish.sh` | Commits and pushes changes |

## Updating progress (MacBook)

1. Open the live page with `?edit` at the end of the address once. Edit mode stays on in that browser.
2. Check things off. A red bar shows when the website is behind.
3. Press **Save progress.js** and pick this folder's `progress.js` the first time. (Chrome writes it directly; Safari downloads it, so move it here.)
4. In Terminal, from this folder: `./publish.sh`

## Adding a project

1. Put it in `sims/<name>/` (code, a README, and a preview image or GIF).
2. Add an entry to `projects.js`.
3. `./publish.sh "Add <name> sim"`

---

Independent self-study, not affiliated with or endorsed by MIT. Course materials © MIT OpenCourseWare, CC BY-NC-SA 4.0.
