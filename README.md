# Notes

A simple, static blog on mathematics, language modelling, and generative
modelling. No build step — plain HTML/CSS, deployed via GitHub Pages.

- White background, black text; follows system dark mode
  (`prefers-color-scheme`) by default, with a manual toggle in the header
  (persisted via `localStorage`).
- Math is rendered with [KaTeX](https://katex.org) (loaded from a CDN,
  `$...$` for inline, `$$...$$` for display).
- Every post ends with a "Cite this" block (plain-text citation + BibTeX),
  since posts are meant to be citable.
- Post lists are in chronological order (oldest first).

## Structure

```
index.html                              home page, lists categories
assets/style.css                        shared styling (light/dark)
assets/cite.js                          "copy BibTeX" button behaviour
assets/theme.js                         dark/light toggle behaviour
mathematics/index.html                  post list for the Mathematics category
mathematics/linear-algebra-fundamentals.html
mathematics/eigenvalues-and-defectiveness.html
```

## Adding a post

1. Copy an existing post (e.g. `mathematics/linear-algebra-fundamentals.html`)
   to `mathematics/your-slug.html`.
2. Update the `<title>`, `<h1>`, date, and body content.
3. Update the "Cite this" block at the bottom (title, URL, year, BibTeX key).
4. Add a link to it in `mathematics/index.html`, in chronological order.

Adding a new top-level category (e.g. `language-modelling/`) means copying
the `mathematics/` folder's pattern and linking it from the root
`index.html`.

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
