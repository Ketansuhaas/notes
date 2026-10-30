# Deep Learning Notes: Mathematics & Theory

A simple, static blog on mathematics and deep learning. No build step:
plain HTML/CSS, deployed via GitHub Pages.

- White background, black text; defaults to light mode, with a manual
  dark-mode toggle in the header (persisted via `localStorage`).
- Math is rendered with [KaTeX](https://katex.org) (loaded from a CDN,
  `$...$` for inline, `$$...$$` for display).
- Every post ends with a "Cite this" block (plain-text citation + BibTeX),
  since posts are meant to be citable.
- Post lists are in chronological order (oldest first).
- All posts live in one flat list on the home page (no category folders).
  Every post has one or more **tags** (`.tag` pills under the title and in
  list entries); the home page has a `.tag-filter` button row (plain
  vanilla JS, no build step) that shows/hides list items by `data-tags`.

## Structure

```
index.html                              home page: unified post list + tag filter
assets/style.css                        shared styling (light/dark, tags, tag-filter)
assets/cite.js                          "copy BibTeX" button behaviour
assets/theme.js                         dark/light toggle behaviour
posts/linear-algebra-fundamentals.html
posts/random-variables-and-notation.html
posts/...                               every post, flat, no subfolders
```

## Adding a post

1. Copy an existing post (e.g. `posts/linear-algebra-fundamentals.html`)
   to `posts/your-slug.html`.
2. Update the `<title>`, `<h1>`, date, breadcrumb, and body content.
3. Update the `<div class="tags">` under the post title.
4. Update the "Cite this" block at the bottom (title, URL, year, BibTeX key).
5. Add a `<li data-tags="...">` entry (with its own `.tags` pills) to
   `index.html`'s `#notes-list`, in chronological order. If any tag is new,
   add a button for it in `.tag-filter`.

## Running locally

No build step is needed; just serve the folder statically, e.g.:

```bash
python3 -m http.server 8000
```

then open http://localhost:8000.

## Deploying to GitHub Pages

Repo: https://github.com/Ketansuhaas/notes

1. In the repo settings, enable **Pages** → **Deploy from a branch** →
   branch `main`, folder `/ (root)`.
2. The site will be published at `https://ketansuhaas.github.io/notes/`.

## Cite this

Ketan Suhaas Saichandran, "Deep Learning Notes: Mathematics & Theory," 2026.
https://ketansuhaas.github.io/notes/

```bibtex
@misc{saichandran2026notes,
  author       = {Saichandran, Ketan Suhaas},
  title        = {Deep Learning Notes: Mathematics \& Theory},
  howpublished = {\url{https://ketansuhaas.github.io/notes/}},
  year         = {2026},
  note         = {Accessed: YYYY-MM-DD}
}
```
