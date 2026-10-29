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
- URLs mirror the breadcrumb: category folders are capitalized to match
  their display name (`Mathematics/`), and each post's filename is a slug
  of its own title, e.g. `Mathematics/rank-subspaces-and-projections.html`.

## Structure

```
index.html                                            home page, lists categories
assets/style.css                                      shared styling (light/dark)
assets/cite.js                                        "copy BibTeX" button behaviour
assets/theme.js                                       dark/light toggle behaviour
Mathematics/index.html                                post list for the Mathematics category
Mathematics/lines-planes-and-spheres-in-rn.html
Mathematics/rank-subspaces-and-projections.html
Mathematics/eigenvalues-eigenvectors-and-defectiveness.html
Mathematics/the-spectral-theorem.html
```

## Adding a post

1. Copy an existing post (e.g. `Mathematics/rank-subspaces-and-projections.html`)
   to `Mathematics/your-topic-slug.html`, where the slug matches the post title.
2. Update the `<title>`, `<h1>`, date, and body content.
3. Update the "Cite this" block at the bottom (title, URL, year, BibTeX key).
4. Add a link to it in `Mathematics/index.html`, in chronological order.

Adding a new top-level category (e.g. `Language-modelling/`) means copying
the `Mathematics/` folder's pattern and linking it from the root
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
