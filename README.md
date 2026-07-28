# blockcore-website

The static website for [Blockcore](https://www.blockcore.net) — _Decentralizing Everything_.

Hand-written HTML and CSS. No framework, no build step, no dependencies. What is
in the repository is exactly what the browser receives.

---

## Local preview

The site is plain static files, so any web server will do. Do not open
`index.html` with `file://` — the font, stylesheets and JSON-LD all resolve
against a real origin.

```bash
python -m http.server 4321
```

Then open <http://127.0.0.1:4321/>.

Any equivalent works, for example `npx serve .` or the VS Code Live Server
extension.

---

## Structure

```
index.html                 The landing page — the whole site
404.html                   Not-found page served by GitHub Pages
CNAME                      Custom domain: www.blockcore.net
.nojekyll                  Disables Jekyll so files are served as-is
robots.txt                 Crawl policy + sitemap pointer
sitemap.xml                Single-URL sitemap

assets/css/main.css        Entry point; imports the four files below in order
assets/css/tokens.css      Design tokens — colour, type scale, spacing, motion
assets/css/base.css        Reset, typography, patterns, accessibility
assets/css/layout.css      Container, 12-column grid, sections, stacks
assets/css/components.css  Header, buttons, cards, features, footer, ...

assets/js/main.js          Mobile nav, scroll state, scroll reveals, year stamp
assets/fonts/              Self-hosted Inter variable font (SIL OFL)
assets/img/                Logo and favicon

.github/workflows/deploy.yml   Builds nothing, publishes everything
```

### Editing rules

- **`tokens.css` is the single source of truth.** No other stylesheet declares a
  raw colour, radius, or duration. Change a token and the whole site follows.
- **Corners are square.** `--radius` is `0` and must stay `0`.
- **One accent colour.** `#FF3000` marks the single most important thing in any
  view. If everything is red, nothing is.
- **Structure is drawn, not implied.** Hierarchy comes from 4px/2px borders and
  type weight, never from shadows.
- Icons live in a single inline SVG sprite at the top of each page and are
  referenced with `<use href="#i-name">`.

---

## Deployment

Every push to `main` publishes the repository root to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). There is no
build step — the workflow uploads the working tree and deploys it.

You can also trigger a deploy manually from the **Actions** tab
(_Deploy to GitHub Pages_ → **Run workflow**).

### One-time repository setup

1. **Settings → Pages → Build and deployment → Source: `GitHub Actions`.**
   This is required. If Source is left on "Deploy from a branch", the workflow
   will fail.
2. **DNS:** point `www.blockcore.net` at GitHub Pages with a `CNAME` record:

   | Type    | Name  | Value                  |
   | ------- | ----- | ---------------------- |
   | `CNAME` | `www` | `block-core.github.io` |

   To also serve the apex domain, add GitHub's `A`/`AAAA` records for
   `blockcore.net` as documented in
   [Managing a custom domain](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).

3. Once DNS has propagated, enable **Settings → Pages → Enforce HTTPS**.

The `CNAME` file in this repository must keep matching the domain configured in
Settings → Pages, otherwise GitHub will reset one of them on the next deploy.

---

## Accessibility and performance notes

- Light mode only, by design. `color-scheme` is pinned to `light`.
- Text sits at black on white (21:1); `#FF3000` is used for large or bold text
  and for non-text indicators only.
- Every interactive element has a visible `#FF3000` focus ring, and every
  target is at least 24px tall.
- All motion is disabled under `prefers-reduced-motion: reduce`, including the
  marquee and the scroll reveals.
- Scroll reveals are gated behind a `has-js` class, so the page is fully
  readable if JavaScript fails to load.
- The Inter variable font is self-hosted: no third-party origin is contacted
  when the page loads.

Both pages validate cleanly against the
[W3C Nu validator](https://validator.w3.org/nu/).

---

## Licence

Code is MIT — see [LICENSE](LICENSE).
The Inter font is licensed under the SIL Open Font License; see
[`assets/fonts/Inter-LICENSE.txt`](assets/fonts/Inter-LICENSE.txt).