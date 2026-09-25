# SPPAT — Media Review Mapping V2

Status: **LOCAL VISUAL REVIEW**. This is not final production approval.

## Non-negotiable source rule

- **Every visual on Home must come from `media/` only.** This includes hero, capability images, technical proof, selected-work cards and CTA image.
- Primary service presentation on Badkamers, Almere, Tegelwerk and Specialisaties uses curated `media/` assets.
- `special-references/` is used only for explicitly technical/process illustration.
- `references/Новая папка*` folders are treated as grouped real project series.
- `references/Новая папка 6/` is empty, therefore Project 06 is provisional for local review only.

## Exact mapping

### Home `/`

| ID | Selected asset | Role | Status |
|---|---|---|---|
| HOME-01 | `assets/home/home-01-hero.jpg` | Main hero, 16:9 desktop, 4:5 mobile | review-selected |
| HOME-02 | `assets/home/home-02-badkamers.jpg` | Badkamers capability, portrait emphasis | review-selected |
| HOME-03 | `assets/home/home-03-tegelwerk.jpg` | Tegelwerk/floor capability, wide perspective | review-selected |
| HOME-04 | `assets/home/home-04-tech.jpg` | Technical proof strip | review-selected |
| HOME-PROJECT-A | `assets/home/home-project-a.jpg` | Selected-work visual A | review-selected |
| HOME-PROJECT-B | `assets/home/home-project-b.jpg` | Selected-work visual B | review-selected |
| HOME-PROJECT-C | `assets/home/home-project-c.jpg` | Selected-work visual C | review-selected |
| HOME-CTA | `assets/home/home-cta.jpg` | CTA Anchor image, if CTA supports image | review-selected |

**Important:** no asset on Home may be replaced by anything from `references/`, `special-references/` or project folders.

### Badkamers `/complete-badkamer-renovatie/`

| ID | Selected asset | Role |
|---|---|---|
| BADK-01 | `assets/services/badk-01-hero.jpg` | Main completed-bathroom hero |
| BADK-02 | `assets/services/badk-02-concealed.jpg` | Concealed system / technical layer |
| BADK-03 | `assets/services/badk-03-finish.jpg` | Niche / 45° finish precision |
| BADK-TOILET | `assets/services/badk-toilet.jpg` | Only if existing toilet section already has a media slot |
| BADK-CTA | `assets/services/badk-cta.jpg` | CTA Anchor image if existing CTA implementation supports image |

`BADK-02` is technical illustration, not project evidence.

### Almere

`ALM-01 → assets/services/alm-01.jpg`

Do not claim the pictured bathroom is located in Almere.

### Tegelwerk `/tegelwerk/`

- `TEGEL-01 → assets/services/tegel-01-hero.jpg` — main tiled-floor hero.
- `TEGEL-02 → assets/services/tegel-02-xxl.jpg` — large-format craft/detail.
- `TEGEL-03 → assets/services/tegel-03-parket.jpg` — ceramic parquet / wood-look tile.

Do not add images to the typographic application index if the approved design has none.

### Specialisaties `/specialisaties/`

The intro is typography-led. **Do not add an image hero.**

- `SPEC-02 → assets/specialisaties/spec-02-xxl.jpg`
- `SPEC-03 → assets/specialisaties/spec-03-mosaic.jpg`
- `SPEC-04A → assets/specialisaties/spec-04a-stone-texture.jpg`
- `SPEC-04B → assets/specialisaties/spec-04b-stone-edge.jpg`
- `SPEC-05 → assets/specialisaties/spec-05-parket.jpg`

Natuursteen is a diptych: texture + precise mitered edge.

### Over ons `/over-ons/`

- `ABOUT-01 → assets/about/about-01-process.jpg` — process/craft hero.
- `ABOUT-02 → assets/about/about-02-tech-strip.jpg` — horizontal technical-integrity strip.

### Kennisbank `/kennisbank/`

- `KB-WATERDICHTING → assets/knowledge/kb-waterdichting.jpg`
- `KB-LIPPAGE → assets/knowledge/kb-lippage.jpg`
- `KB-INSPECTIELUIK → assets/knowledge/kb-inspectieluik-temp.jpg` — **PROVISIONAL. This does not actually show an inspection hatch. Replace later.**
- `KB-EPOXY-CEMENT → assets/knowledge/kb-epoxy-cement.jpg`

Do not describe the provisional inspectieluik visual as an inspection hatch in alt text.

## Projecten `/projecten/`

### Project 01 — `references/Новая папка/`
Use all 3 as a portrait-sequence archetype.

### Project 02 — `references/Новая папка 2/`
Use all 5 as a portrait-sequence / rich-series archetype.

### Project 03 — `references/Новая папка 3/`
Use `p03-01` as dominant contextual image, `p03-02` and `p03-03` as support/detail.

### Project 04 — `references/Новая папка 4/`
Use `p04-01` as dominant wide kitchen/floor view. Use the remaining selected files as supporting views. This is the richest floor/interior series.

### Project 05 — `references/Новая папка 5/`
Use `p05-01` as dominant wide interior/stair view and the other 3 as supporting images.

### Project 06
The intended `references/Новая папка 6/` folder is empty.

For local review only:

`PROJECT-06-TEMP-01 → assets/projects/project-06/p06-temp-01.jpeg`

Mark internally:

`status: provisional`

`NOT FOR PRODUCTION — PROJECT 06 SERIES MISSING`

Do not invent additional project metadata.

## Developer implementation rules

1. Copy `assets/` into an appropriate `public/images/` location.
2. Keep one centralized media config. Do not scatter filenames across page components.
3. Use these exact assignments. Do not choose substitute images.
4. Preserve existing approved page compositions and responsive behavior.
5. Use `object-fit: cover`; tune `object-position` per breakpoint rather than changing layout.
6. If the implementation already has prepared responsive image handling, generate derivatives from these selected source files only.
7. Home provenance safeguard: every `HOME-*` record must have `origin: "media"`; warn in development if not.
8. `KB-INSPECTIELUIK` and `PROJECT-06-TEMP-01` must remain clearly provisional in internal config.
9. No provenance/status labels in production-facing UI. Dev-only QA labels are fine.
10. Run build + lint, then visually inspect all 9 pages at 1440 / 1024 / 834 / 390.

## Review philosophy

This pass is deliberately complete enough to judge the site locally. Do not search stock, generate new images or redesign around weak images. Weak slots will be replaced after the owner sees them in context.
