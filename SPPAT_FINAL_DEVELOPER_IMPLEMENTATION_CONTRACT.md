# SPPAT --- FINAL DEVELOPER IMPLEMENTATION CONTRACT

**Status:** APPROVED FOR IMPLEMENTATION\
**Authority:** PM / Product Owner / Tech Lead final handoff\
**Design basis:** "The Anatomy of Precision" + FINAL DESIGN
SPECIFICATION REV.5 with the overrides below\
**Scope now:** Navigation, breadcrumbs, footer, Projects hub, six
representative project cases, media integration, two new service pages,
responsive integration, existing-page corrections and internal linking.\
**Deferred until launch-hardening:** live form transport, privacy/legal
completion, CI/release hardening, telemetry, security hardening and
other launch-only work unless required to keep the current build
functional.

## 0. EXECUTION RULE

Implement this contract in the existing SPPAT codebase. Do not redesign
the site, invent business facts, create additional commercial pages,
change approved URLs, or make independent product/SEO decisions.

This document is the integration authority for this implementation pass.
Where older files conflict: 1. **URLs / navigation / hierarchy:** this
contract + final IA. 2. **Service intent/content:** final Services spec.
3. **Project copy:** final Case Studies R1. 4. **Media
source/provenance:** final Projects & Media spec. 5.
**Presentation/layout:** Design REV.5, except where this contract
explicitly overrides it.

Do not run old one-off `.cjs` content-injection scripts. Do not run
destructive Markdown→JSON extraction while the known Almere source drift
remains unresolved.

## 1. FINAL COMMERCIAL ROUTES

### Badkamers

-   `/complete-badkamer-renovatie/`
-   `/complete-badkamer-renovatie/almere/`
-   `/complete-toilet-renovatie/`

### Tegelwerk

-   `/tegelwerk/`
-   `/tegelwerk/vloer-tegelen/`
-   `/tegelwerk/wand-tegelen/`
-   `/tegelwerk/badkamer-tegelen/`
-   `/tegelwerk/inloopdouche-tegelen/`
-   `/tegelwerk/keuken-tegelen/`
-   `/tegelwerk/balkon-tegelen/`
-   `/tegelwerk/vloerverwarming-en-tegelen/`

### Specialisaties

-   `/specialisaties/`
-   `/specialisaties/grootformaat-tegels/`
-   `/specialisaties/mozaiek-zetten/`
-   `/specialisaties/natuursteen/`
-   `/specialisaties/keramisch-parket/`

### Other

-   `/projecten/`
-   `/projecten/:slug/`
-   `/kennisbank/` + retain the exact four existing article URLs
-   `/over-ons/`
-   `/contact/`

Do **not** create `/badkamers/`, `/diensten/`,
`/tegelwerk/woonkamer-vloer-tegelen/`,
`/complete-badkamer-renovatie/inloopdouche-realiseren/`, a standalone
visgraat URL, or any other extra commercial route in this pass.

## 2. GLOBAL NAVIGATION

Desktop:
`SPPAT | Badkamers ▾ | Tegelwerk ▾ | Specialisaties ▾ | Projecten | Over ons | Contact | [Project bespreken]`

-   Keep compact architectural text-list dropdowns; no decorative menu
    cards/icons.
-   Badkamers: Complete badkamer renovatie; Complete toilet renovatie;
    subordinate Badkamer renovatie Almere; hub/action points to
    `/complete-badkamer-renovatie/`.
-   Tegelwerk: exactly seven child services; hub/action points to
    `/tegelwerk/`.
-   Specialisaties: exactly four child specializations; hub/action
    points to `/specialisaties/`.
-   Active parent remains active on descendant routes.
-   Around 1024px tighten spacing before switching to mobile navigation.
-   Below 1024px use the REV.5 full-screen modal/drill-down navigation.
    Category tap opens second level with `← Terug`, `Overzicht`, then
    children. Background non-interactive; Escape closes; focus trapped
    and restored to trigger.

Use **one canonical navigation data model** for header, mobile menu,
footer and breadcrumbs. Do not maintain four independent hardcoded route
lists.

## 3. BREADCRUMBS

-   Child/service/specialization/project-detail/knowledge-detail pages:
    hierarchical breadcrumbs.
-   Desktop: full path such as
    `HOME / TEGELWERK / INLOOPDOUCHE TEGELEN`.
-   Below \~834px: compact `← [PARENT]`; no mandatory horizontal-scroll
    breadcrumb.
-   Never invent a hub URL just to make a breadcrumb prettier.

## 4. FOOTER

Four-column desktop footer; stacked mobile.

-   Sppat/company column: show only verified business/contact data
    already present in authoritative source. No fake
    phone/email/address/KVK/BTW/privacy values and no visible
    placeholders.
-   Badkamers & Tegelwerk: approved commercial links.
-   Specialisaties: four approved specialization links.
-   Informatie: Projecten, Over ons, Kennisbank, Contact.

Do not add a privacy route until actual policy/route is supplied.

## 5. PROJECTS --- CONTENT MODEL

The six CASE entities are **representative composite project cases**.
They communicate the user-confirmed 40+ years / 1,000+ project
experience without claiming that reference/AI media documents the exact
described historical job.

Never invent: - address/city/location; - client; - date; - duration; -
budget; - m²; - brand; - exact tile dimensions; - unsupported material
identity; - testimonial; - "recent opgeleverd".

Allowed provenance values: - `verified-sppat` - `licensed-reference` -
`illustrative-ai`

`licensed-reference` and `illustrative-ai` are not documentary project
proof.

## 6. FINAL SIX PROJECT CASES

Use the exact Dutch copy, SEO title/meta, H1/H2s, related links and CTA
from `SPPAT_PROJECT_CASE_STUDIES_FINAL_R1.md`.

Final slugs: - CASE-01 → `/projecten/complete-badkamer-inloopdouche/` -
CASE-02 → `/projecten/compacte-badkamer-maatwerk/` - CASE-03 →
`/projecten/grootformaat-tegelvloer-woonruimte/` - CASE-04 →
`/projecten/inloopdouche-technische-detaillering/` - CASE-05 →
`/projecten/complete-toiletrenovatie/` - CASE-06 →
`/projecten/keuken-leefruimte-tegelvloer/`

If the source file contains a different suggested slug for CASE-01 or
CASE-03, preserve the source slug rather than inventing a redirect;
verify against the source during implementation.

Each detail page:
`Breadcrumb → H1/Context → Hero → representative scope → 2–4 technical sections → visual/detail media → 2–4 relevant service links → CtaTypeB`

Tier A: 4--6 usable media maximum, without duplicating crops to fake
depth.\
Tier B: 2 usable media is sufficient; do not pad with empty sections.

## 7. FINAL MEDIA MAPPING

### CASE-01 --- Complete badkamer met inloopdouche --- Tier A

Visual source group: **PRJ-01 / large-format gray bathroom**. - Hero
master: `WhatsApp Image 2025-05-30 at 21.24.08.jpeg` - Supporting
overview/detail: other confirmed `21.24.08...` files from the same
PRJ-01 group only. - Preferred technical support candidate:
`WhatsApp Image 2025-05-30 at 21.24.08 (2).jpeg` - Desktop hero:
source-appropriate 3:2 if landscape; portrait source uses split 4:5. -
Mobile hero/card: 4:5 with focal point on the shower/tile geometry. - Do
not claim plumbing, electrical, waterproofing construction stage, brand
or exact material from the photo alone.

### CASE-02 --- Compacte badkamer met maatwerkdetails --- Tier B

No cross-project documentary composite is allowed. - Primary visual
candidate: `WhatsApp Image 2025-05-30 at 21.24.01 (5).jpeg`, only as a
**Project Type Visual / licensed-reference unless provenance is
explicitly verified**. - Do **not** pair it with an unrelated Feb-26
image and imply both document one job. - If no second coherent image
from the same source group is available, keep the page intentionally
Tier B with one primary reference visual plus a clearly separated
illustrative/detail module, or omit the second gallery slot. - Required
visual semantics: compact sanitary room / wall-niche-detail only where
actually visible. - Card: 4:3 desktop, 4:5 mobile. - Portrait hero:
split editorial 4:5.

### CASE-03 --- Grootformaat tegelvloer in woonruimte --- Tier A

Visual source group: **PRJ-02 / large residential tiled floor + curved
stair**. - Hero: `WhatsApp Image 2025-05-30 at 21.24.07 (9).jpeg` -
Support: `...21.24.07 (1).jpeg`, `...21.24.07 (4).jpeg`,
`...21.24.07 (6).jpeg` - Use only as one coherent PRJ-02 visual story. -
Do not infer natural stone vs ceramic from appearance. - Desktop hero:
3:2; listing 4:3; mobile 4:5; technical crop may use 1:1 only when the
detail survives.

### CASE-04 --- Inloopdouche met technische detaillering --- Tier B

Do not fabricate a documentary project from unrelated real + AI
assets. - Primary project-type visual candidate:
`WhatsApp Image 2025-02-26 at 18.19.50.jpeg` only with neutral
provenance semantics. -
`Generated Image September 10, 2026 - 6_57PM.jpg` is **illustrative-ai**
and may appear only in a visibly separate
explanatory/technical-reference module. - It must not appear inside a
project gallery as though it were a macro photograph from the same
job. - Never label it "Real Proof". - If no coherent second project
image exists, keep the project intentionally minimal.

### CASE-05 --- Complete toiletrenovatie --- Tier B

-   `Generated Image September 10, 2026 - 6_53PM.jpg` may be used as
    **illustrative-ai / Visual Reference**.
-   `WhatsApp Image 2025-05-30 at 21.24.01 (5).jpeg` may support
    sanitary-room visuals only after provenance classification; it must
    not be presented as the same documented project merely because it
    visually fits.
-   Prefer a clear separation between representative case copy and
    visual reference rather than a fake two-image project gallery.
-   Portrait visual: split editorial 4:5; mobile 4:5.

### CASE-06 --- Keuken en leefruimte met doorlopende tegelvloer --- Tier A conditional

Visual source group: **PRJ-03 / light stone floor, kitchen, halls**. -
Hero candidate: `WhatsApp Image 2025-05-30 at 21.24.04 (4).jpeg` -
Support candidates: `...21.24.03 (6).jpeg`, `...21.24.04 (3).jpeg`,
`...21.24.04 (6).jpeg`, `...21.24.04 (7).jpeg`, `...21.24.05 (6).jpeg` -
IMPORTANT: the original media spec marks PRJ-03 as one coherent case
**only after grouping confirmation**. Until confirmed, treat these as
visual references/candidates, not documentary evidence of one job. - Do
not imply Sppat supplied/installed cabinetry. - Do not infer natural
stone from appearance.

### Media integrity rule

Never combine two unrelated real-photo groups into a gallery that
implies one historical project. CASE copy is composite; media provenance
remains explicit internally and neutral externally. Do not expose
technical internal labels if they make the public UX awkward; the public
page instead needs the representative-case disclosure at `/projecten/`
and no false documentary captions.

## 8. `/projecten/` DESIGN

Implement REV.5 "Editorial Portfolio": - text-led intro/H1 +
representative-case disclosure; - no filters/tags/categories UI; -
CASE-01 featured; - remaining cases asymmetric editorial layout at
desktop; - primary cards 4:3; one controlled 4:5 feature allowed; -
\~834px: deliberate 2-column grid, not squeezed 12-column remnants; -
mobile: one column, 4:5, image first then title; - no fake metadata.
Secondary metadata appears only when fact is confirmed.

Do not use a Pinterest masonry effect, six identical cards, decorative
badges, or large accidental blank areas.

## 9. PROJECT DETAIL DESIGN

Landscape source: - desktop hero 3:2 full visual; - mobile 4:5 or 3:4
depending focal subject.

Portrait source: - desktop split editorial layout with 4:5 media; -
mobile 4:5; - never destructively force portrait into 16:9.

Tier A may use full-width visual breaks and diptychs only where
genuinely different source images exist. Tier B must look intentional
with minimal material. Do not clone/crop one photo multiple ways to
simulate evidence.

Related services: 2--4 relevant inline links only.\
Final CTA: existing `<CtaTypeB />`.

## 10. NEW SERVICE PAGE --- INLOOPDOUCHE

Route: `/tegelwerk/inloopdouche-tegelen/`

Use the exact approved Services copy/SEO intent. Design: existing
service family + REV.5 Hero Overlap, but do not create a new visual
language.

Media: - Hero: `Generated Image September 10, 2026 - 6_50PM.jpg` →
`illustrative-ai`; desktop 3:2/16:9 only if source supports it; mobile
4:5. - Technical reference:
`Generated Image September 10, 2026 - 6_57PM.jpg` → `illustrative-ai`;
1:1. - Real/reference support candidate:
`WhatsApp Image 2025-05-30 at 21.24.08 (2).jpeg`; describe only visible
shower/tile work. Do not claim drain/waterproofing/plumbing scope from
the image.

Visual narrative:
`water management → geometry → drainage → waterproofing → precision finish`

Do not use a universal `min-height:70vh` if it creates a giant blank
hero. Hero height is content/media-driven and must pass
390/834/1024/1440 visual QA.

## 11. NEW SERVICE PAGE --- VLOERVERWARMING & TEGELEN

Route: `/tegelwerk/vloerverwarming-en-tegelen/`

Exact site-wide technical wording: \> Bij tegelwerk op vloerverwarming
wordt de vloeropbouw vooraf beoordeeld. Het moment en de wijze van
ingebruikname worden afgestemd op het type dekvloer, het
verwarmingssysteem en de voorschriften van de betrokken systeem- en
materiaalleveranciers.

Do not universally prescribe the old `opstook- en afkoelprotocol`.

Media: - Finished-floor contextual hero may use
`WhatsApp Image 2025-05-30 at 21.24.07 (9).jpeg`, but it demonstrates
finished tiled-floor context, **not** proof of heating installation. -
`WhatsApp Image 2025-05-30 at 21.24.06 (6).jpeg` (and 6/7/8 set if
needed) may illustrate **substrate preparation only**. - Alt/caption
must not say or imply "vloerverwarming installatie". - Current supplied
photo set does not reliably prove an installed underfloor-heating
system. If an actual heating-system visual is required, use a clearly
illustrative technical visual or omit it.

Visual narrative:
`substrate → floor system → tile compatibility → movement/thermal behavior → finished surface`

## 12. EXISTING SERVICE MEDIA INTEGRATION

Apply the approved media allocations without changing page intent: -
Home: AI `6_50PM` hero/support; AI `6_57PM` technical macro;
real-project module only after provenance confirmation. - Complete
Badkamer: AI `6_50PM` illustrative main visual; PRJ-01/BATH-08 or Feb
`18.20.06` only under correct provenance; never add "Almere" to
ALT/caption unless location confirmed. - Complete Toilet: AI `6_53PM`
illustrative; `21.24.01 (5)` only under correct provenance. - Tegelwerk
hub: preferred `21.24.07 (9)`, alternate `(4)`. - Vloertegels:
PRJ-02/PRJ-03 suitable floor visuals. - Keuken: approved candidates
`21.24.02 (3)`, `21.24.03 (6)`, `21.24.02 (8)`; do not imply cabinetry
scope. - Grootformaat: PRJ-01/BATH-08 set or Feb `18.19.50`; do not
invent exact tile dimensions. - Keramisch parket: do not use wood-look
candidates as factual ceramic proof until material is confirmed. -
Visgraat: no supplied asset proves herringbone; do not fake one.

Fix the existing five tile-service heroes so no giant blank media
placeholder remains.

## 13. IMAGE TREATMENT

No global CSS contrast/saturation filter.

Allowed non-destructive treatment: - straighten/perspective
correction; - crop; - neutral white balance; - exposure/highlight/shadow
correction; - moderate contrast/clarity; - lens correction; - mild noise
reduction/sharpening; - crop phone UI/status bars; - crop incidental
bags/tools only where architectural evidence remains intact.

Forbidden: - AI replacement of tile/grout/furniture/sanitary
ware/walls/floors/doors/lighting; - generative reconstruction/expansion
used as evidence; - changing material color/pattern; - removing
workmanship defects; - adding niches/drains/LED/fixtures; - compositing
separate projects into one supposed project.

## 14. RESPONSIVE CONTRACT

Validate at approximately **390 / 834 / 1024 / 1440px**.

-   1440: 12-col architectural system; editorial asymmetry allowed.
-   1024: retain grid but tighten header; hero overlap text may widen;
    no navigation collision.
-   \<1024: mobile/tablet modal navigation.
-   834: Projecten 2-column; service proof sections deliberately
    recompose, not mechanically squeeze.
-   390: one column; project cards 4:5; macros 1:1; focal points
    explicitly set.
-   Never use universal hero heights that create blank areas.
-   Portrait media remains portrait-led.
-   Text overlay only where contrast/readability is robust; otherwise
    use adjacent caption/text.
-   No horizontal overflow.

## 15. REQUIRED SOURCE/COMPONENT CHANGES

Preserve existing architecture where possible: - Vite + React +
TypeScript. - Existing reusable components (`HeroSplit`, CTA components,
`StickyMobileCta`, `RichText`) should be reused/refined rather than
duplicated. - Extend the canonical content/navigation data rather than
hardcoding page-specific duplicates. - Add the two new service routes to
authoritative content source + route manifest/prerender list. - Add all
six project-detail routes to the authoritative route/prerender system. -
Tegelwerk hub links to all seven children. - Specialisaties hub visibly
includes `Onze expertisegebieden` and all four children. - Restore
contextual Tegelwerk links to Grootformaat, Natuursteen and Mozaïek. -
Preserve scope separation: complete renovation ≠ tile-only bathroom. -
No raw Markdown syntax may render on the Almere page. - Do not solve
deferred business-input gates by inventing values.

## 16. ACCEPTANCE GATE FOR THIS IMPLEMENTATION PASS

Implementation is complete only when: - all approved routes resolve and
prerender; - exactly one H1 per page; - title/meta/canonical are present
using existing SEO architecture; - seven Tegelwerk child links work; -
four Specialisaties links work; - six project cases exist; - no
nonexistent service URL is linked; - new breadcrumbs resolve
correctly; - no fake location/date/budget/m²/brand/material/business
fact appears; - representative-case disclosure is present on
`/projecten/`; - AI/reference media is never presented as exact Sppat
documentary proof; - no project gallery combines unrelated sources as
one historical job; - old universal heating/cooling protocol wording is
removed; - no blank/oversized hero placeholder remains; -
390/834/1024/1440 layouts are visually coherent; - mobile crops preserve
the technical subject; - no global image filter is applied; - no visible
`[BUSINESS INPUT REQUIRED]` placeholders; - no raw Markdown leakage; -
existing design identity remains intact.

## 17. OUT OF SCOPE --- DO NOT DERAIL THIS PASS

Do not turn this implementation into launch hardening. Unless necessary
to avoid breaking existing behavior, defer: - production form
endpoint/transport; - privacy-policy drafting; - KVK/BTW/contact-data
invention; - CI/security/telemetry overhaul; - unrelated performance
refactors; - broad schema redesign; - full-site redesign.

After this implementation passes its build/visual/content checks, stop
and report: 1. files changed; 2. routes added/changed; 3. media mappings
actually implemented; 4. any media source that could not be located
exactly; 5. unresolved provenance/business gates; 6. build/verification
results; 7. screenshots/visual QA findings at 390/834/1024/1440.

Do not silently substitute another image when an exact required filename
cannot be found. Report the missing asset instead.
