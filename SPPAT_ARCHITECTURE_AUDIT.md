# SPPAT — Architecture, Content & UX Consolidation Audit

Status: working source of truth for architecture-cleanup branch
Date: 2026-09-15

## 1. Core diagnosis

The current implementation exposes an SEO/content taxonomy as if it were customer-facing information architecture. `Tegelwerk` and `Specialisaties` overlap semantically, while several child pages contain only a hero, one or two short sections and a CTA. This creates thin pages, oversized whitespace and repetitive generic templates. The correct fix is consolidation before visual polishing.

Customer-facing architecture and indexable SEO architecture do not need to be identical.

## 2. Final customer-facing architecture

### Primary navigation

- Badkamers
  - Complete badkamer renovatie → `/complete-badkamer-renovatie/`
  - Toilet renovatie → `/complete-toilet-renovatie/`
- Tegelwerk → `/tegelwerk/`
  - Badkamer tegelen → `/tegelwerk/badkamer-tegelen/`
  - Vloertegels leggen → `/tegelwerk/vloer-tegelen/`
  - Grootformaat / XXL → `/specialisaties/grootformaat-tegels/`
  - Natuursteen → `/specialisaties/natuursteen/`
- Projecten → `/projecten/`
- Over ons → `/over-ons/`
- Contact → `/contact/`
- Primary CTA: Project bespreken → `/contact/`

`Specialisaties` is removed as a customer-facing top-level category. The existing `/specialisaties/...` URLs may remain where a genuinely independent page is retained, but the user does not need to understand this implementation taxonomy.

### Secondary / contextual architecture

- `/complete-badkamer-renovatie/almere/` — local landing page; not primary navigation.
- `/kennisbank/` and four articles — footer + contextual internal links; not primary navigation.
- Merged topics remain discoverable as substantial sections on `/tegelwerk/`.

## 3. URL decisions

| Current URL | Decision | Destination / role | Reason |
|---|---|---|---|
| `/` | KEEP + REBUILD | Home | Core commercial entry; remove duplicate `Tegel Specialisaties` product framing. |
| `/complete-badkamer-renovatie/` | KEEP + REBUILD | Core service | Distinct high-value turnkey intent; must be one of the richest pages. |
| `/complete-badkamer-renovatie/almere/` | KEEP + FACT-CHECK | Local landing | Distinct local intent; remove from global navigation/footer prominence. |
| `/complete-toilet-renovatie/` | KEEP + REBUILD | Core service | Distinct project scope and intent. |
| `/tegelwerk/` | KEEP + EXPAND | Central tegelwerk pillar | Becomes the consolidated hub for applications + specialist materials. |
| `/tegelwerk/badkamer-tegelen/` | KEEP + REBUILD | Service | Distinct intent from turnkey renovation: tile-only bathroom work. |
| `/tegelwerk/vloer-tegelen/` | KEEP + REBUILD | Service | Distinct standalone floor project intent. |
| `/tegelwerk/wand-tegelen/` | MERGE | `/tegelwerk/` | Current content is technique-level information, not enough independent commercial value. |
| `/tegelwerk/keuken-tegelen/` | MERGE | `/tegelwerk/` | Current page is too thin; kitchen becomes a substantial application section. |
| `/tegelwerk/balkon-tegelen/` | MERGE | `/tegelwerk/` | Current page has one substantive section; preserve outdoor-tiling content in pillar. |
| `/specialisaties/` | MERGE | `/tegelwerk/` | Duplicate hub/category. |
| `/specialisaties/grootformaat-tegels/` | KEEP + REBUILD | Specialist service | Technically distinct, strong specialist intent. |
| `/specialisaties/mozaiek-zetten/` | MERGE | `/tegelwerk/` | One substantive section; preserve as specialist section. |
| `/specialisaties/natuursteen/` | KEEP + REBUILD | Specialist service | Distinct material, installation chemistry and maintenance requirements. |
| `/specialisaties/keramisch-parket/` | MERGE | `/tegelwerk/` | Current page too thin; preserve as specialist floor section. |
| `/kennisbank/` | KEEP / SECONDARY | Knowledge hub | Useful supporting authority and internal-link destination. |
| `/kennisbank/waterdichting-badkamer-kimband/` | KEEP / SECONDARY | Article | Distinct educational intent. |
| `/kennisbank/tegel-lippage-voorkomen/` | KEEP / SECONDARY | Article | Distinct educational intent. |
| `/kennisbank/onzichtbaar-luik-badkamer/` | KEEP / SECONDARY | Article | Distinct educational intent. |
| `/kennisbank/epoxyvoeg-vs-cementvoeg/` | KEEP / SECONDARY | Article | Distinct educational intent. |
| `/projecten/` | KEEP + REBUILD | Portfolio hub | Current source data has no projects; must not claim recent completed work until verified cases are wired in. |
| `/over-ons/` | KEEP + REBUILD | Trust page | Currently extremely thin and lacks verified company facts. |
| `/contact/` | KEEP + COMPLETE | Conversion | Must use verified contact/business details only. |

Merged URLs require permanent redirects on the production host once consolidation ships. Until redirect infrastructure is defined, do not delete historical route records blindly.

## 4. Tegelwerk pillar after consolidation

`/tegelwerk/` becomes a strong commercial page, not a card directory.

Recommended information order:

1. Hero — premium tegelwerk proposition.
2. Applications overview.
3. Badkamer tegelwerk — link to retained dedicated page.
4. Vloertegels — link to retained dedicated page.
5. Wandtegels — merged content: laser alignment, tile distribution, internal corners/dilatation.
6. Keuken — merged content: sockets/cut-outs, worktop junction, practical grout; contextual link to epoxy-vs-cement Kennisbank article.
7. Buiten/balkon — merged content: drainage, slope, full adhesive coverage, movement joints. Avoid presenting unverified SPPAT-specific systems as standard practice.
8. Specialist materials overview.
9. Grootformaat / XXL — short overview + link to retained dedicated page.
10. Mozaïek — merged content: substrate flatness, sheet transitions, adhesive choice, grout density.
11. Natuursteen — short overview + link to retained dedicated page.
12. Keramisch parket — merged content: tile bow, offset/lay pattern, grout colour.
13. Technical proof / process.
14. Project evidence where verified.
15. CTA.

This structure reuses the useful content already written instead of throwing it away or stretching it across weak pages.

## 5. Header

Desktop and mobile must expose the same conceptual hierarchy.

Top level:

`Badkamers | Tegelwerk | Projecten | Over ons | Contact | [Project bespreken]`

Badkamers submenu:
- Complete badkamer renovatie
- Toilet renovatie

Tegelwerk submenu:
- Alle tegelwerk
- Badkamer tegelen
- Vloertegels leggen
- Grootformaat / XXL
- Natuursteen

Do not expose `Specialisaties` as a top-level customer concept.

Active-state logic must treat nested pages as belonging to their parent top-level section, not only exact URL matches.

Mobile menu must provide the same children without forcing users through a separate taxonomy.

## 6. Footer

Footer is not a sitemap. It should contain a curated set of useful routes.

### Diensten
- Complete badkamer renovatie
- Toilet renovatie
- Tegelwerk

### Tegelwerk
- Badkamer tegelen
- Vloertegels leggen
- Grootformaat / XXL
- Natuursteen

### Sppat
- Projecten
- Over ons
- Kennisbank
- Contact

Remove the standalone `Badkamer Renovatie in Almere` promotional row from the global footer. The local page remains reachable contextually and through search.

Only render address, phone, email, KVK and BTW when verified business input exists.

## 7. Home

Current home incorrectly presents `Professioneel Tegelwerk` and `Tegel Specialisaties` as two sibling products. Consolidate to three primary service families:

1. Complete badkamer renovatie
2. Toilet renovatie
3. Professioneel tegelwerk

Specialist tile capabilities belong inside the Tegelwerk presentation, not as a fourth business line.

The current premium media bank (`SPPAT-VIS-*`) is appropriate for commercial home imagery. Do not replace it with reference/project archive imagery.

Remove jump-navigation concepts that depend on the obsolete `Specialisaties` split.

## 8. Content integrity / unsupported claims

`src/content/business-input.json` currently has null address, phone, email, KVK, BTW, response time and an empty `projects` array. It also explicitly requests confirmation for several operational facts. Therefore public copy must not silently turn these unknowns into SPPAT-specific guarantees.

Requires verification or neutral rewriting before publication:

- SPPAT's standard waterproofing systems.
- Whether SPPAT installs electric/water-based underfloor heating and under what scope.
- Standard use/recommendation of decoupling mats.
- Standard epoxy grout practice.
- Standard balcony systems/methodology.
- Maximum XXL formats handled.
- Whether natural-stone impregnation is included.
- Company founding/history/team size/experience claims.
- Response-time promise.
- Material procurement/showroom workflow.
- Claims that a shown image/project was completed in Almere unless provenance confirms it.

### Almere page

Current copy about local construction knowledge, district-specific expertise and district heating is too specific unless verified as actual SPPAT expertise. Rewrite as location/service coverage and generally applicable technical considerations, or verify the claims first.

Do not use an ALT such as `Badkamer renovatie uitgevoerd in Almere` unless the image is verified to be a SPPAT Almere project.

### Market pricing

The current content includes 2026 market price ranges and percentage cost splits. These are time-sensitive external-market claims. They must either be supported by maintained sources and clearly framed as external indications, or removed from evergreen core sales pages. They must not look like SPPAT quotations.

## 9. Projects

Current implementation is internally inconsistent:

- `business-input.json` has `projects: []`.
- `/projecten/` copy refers to recent/completed work.
- the source router only explicitly handles `/projecten/`, not project-detail URLs.

Required correction:

1. Portfolio hub must not claim `recent opgeleverd` unless cases are verified.
2. Restore the approved project case architecture only from verified project/media mapping.
3. Add project-detail routing only for cases that actually exist in the project registry.
4. Never invent location, date, duration, budget, square metres, material brand/system, tile size or testimonial.
5. Reference/real archive is allowed for Projects according to internal provenance mapping; commercial pages use dedicated premium site media.
6. Remove public labels such as `Referentiebeeld` and `Illustratief beeld (AI)`; provenance remains internal.

## 10. Kennisbank

Preserve approved Kennisbank REV.2 behavior:

- Hub: one assigned real/reference laser image `AEAB080F-23E5-4856-8806-039B4F1FEF85.JPG`.
- Four article routes: no assigned inline media.
- No placeholders or empty media slots on articles.
- Articles remain typography-led.
- Kennisbank is secondary navigation, not a primary commercial category.

## 11. Media architecture

### Commercial/service/specialisation pages
Use dedicated premium bank under `/media`, including `SPPAT-VIS-*` and deliberately assigned generated/site assets.

### Projects
Use verified real/reference project archive according to case provenance mapping.

### Kennisbank
Use only its approved assignment above.

### Rules
- No public provenance labels.
- No generic fallback image such as `README.jpg` in production UI.
- No image should be selected merely because a template expects a slot.
- No destructive crop that removes the feature the section is explaining.
- If no suitable asset exists, record a missing-media requirement rather than using unrelated evidence.

## 12. Design diagnosis

The largest visual problem is not simply spacing. Thin pages are being stretched into premium editorial templates. Large whitespace then becomes dead space rather than intentional whitespace.

Correct hierarchy of fixes:

1. consolidate thin pages;
2. ensure every retained page has enough useful content and a distinct user intent;
3. map relevant media;
4. apply the approved Anatomy of Precision grid/typography system;
5. perform responsive QA.

Do not solve a one-section page by adding arbitrary spacer height, oversized section min-heights or decorative media.

Retained commercial pages should have purposeful visual rhythm: hero → evidence/content → relevant technical visual → proof/project → CTA. Repetition of the exact same text-left/tall-image-right composition across every page is not acceptable.

## 13. Known implementation defects

- Header currently has no desktop dropdowns and only exact-path active state.
- Mobile navigation exposes only top-level routes.
- Footer exposes the obsolete `Specialisaties` taxonomy and a globally promoted Almere link.
- Home has a fourth `Tegel Specialisaties` service that duplicates Tegelwerk.
- Home jump links preserve the same obsolete split.
- Tegelwerk hub uses hard-coded generated filenames and `README.jpg` as a fallback asset.
- Generic service/specialisation templates create repetitive sparse pages.
- Source router has no project-detail route handling.
- Project data is empty while portfolio language implies completed work.
- Business facts are still unconfirmed while some public copy is written as company-specific fact.

## 14. Acceptance criteria for the rebuild

A page is not complete merely because it renders.

For every retained route verify:

- clear unique user intent;
- sufficient useful content;
- no duplicated sibling-page purpose;
- correct H1/title/description;
- verified business claims only;
- appropriate hero/media assignment;
- no placeholder/fallback/internal provenance labels;
- sensible section rhythm without artificial whitespace;
- contextual internal links;
- correct breadcrumb/parent relationship;
- CTA appropriate to the page;
- desktop 1440/1024 and tablet/mobile 834/390 behavior;
- keyboard navigation and visible-on-focus skip link;
- no broken links to merged routes after redirects are implemented;
- no SEO page is forced into global navigation merely because it is indexable.

## 15. Implementation order

1. Finalize consolidated `pages.json` content and verified facts.
2. Implement Header + mobile hierarchy.
3. Implement curated Footer.
4. Rebuild Home service taxonomy.
5. Expand `/tegelwerk/` with merged content.
6. Rebuild retained commercial pages.
7. Restore verified Projects architecture.
8. Preserve/fix Kennisbank REV.2.
9. Complete media mapping and missing-media inventory.
10. Remove obsolete template/fallback behavior.
11. Add production redirect rules for merged URLs.
12. Build/lint/browser QA at all breakpoints.

No further page proliferation is permitted without demonstrating a distinct user intent and enough unique content to justify a standalone page.
