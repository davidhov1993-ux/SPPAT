# SPPAT — FINAL CORRECTION SPECIFICATION

Status: **AUTHORIZED FOR ONE CONTROLLED IMPLEMENTATION PASS**
Controller basis: Final Content Spec + Final Design Spec + Media Mapping V2 + Audit V2.1
Baseline implementation commit observed by Audit V2.1: `adf97597506a15f22d4c0fc3dba40ab2a5f00eb8`

This specification resolves the current implementation defects in one pass. It is not a redesign brief.

**PHASE AUTHORIZATION:** this document explicitly closes the read-only Audit V2 phase and authorizes the single Final Correction Implementation pass. If `SPPAT_PROJECT_STATE.md` still says `FINAL READ-ONLY AUDIT V2`, update only its current-phase/next-gate status to `FINAL CORRECTION IMPLEMENTATION` before code changes. Do not alter locked project decisions.

---

# 0. AUTHORITY AND NON-NEGOTIABLE RULES

Use this order of authority:

1. `docs/SPPAT_FINAL_WEBSITE_CONTENT_9PAGES_FINAL.md`
2. `docs/SPPAT_FINAL_DESIGN_SPECIFICATION.md`
3. `docs/SPPAT_MEDIA_REVIEW_MAPPING_V2.md`
4. this correction specification
5. existing code

Additional factual overrides already established by the media review:

- Project 06 is NOT verified yet. Its verified project folder is missing/empty.
- `KB-03 INSPECTIELUIK` is a media gap/provisional local-review visual.
- Home must use `media/`-origin curated assets only.
- Developer must not choose substitute photographs.

Exactly 9 public content pages remain:

1. `/`
2. `/complete-badkamer-renovatie/`
3. `/complete-badkamer-renovatie/almere/`
4. `/tegelwerk/`
5. `/specialisaties/`
6. `/projecten/`
7. `/over-ons/`
8. `/contact/`
9. `/kennisbank/`

Do not create project detail routes or knowledge article routes.

---

# 1. CONFIRMED AUDIT DEFECTS TO FIX

Audit V2.1 confirms:

## BLOCKERS

### B-01 Home horizontal overflow
Current document widths exceed viewport at all audited widths:
- 1440
- 1024
- 834
- 390

Known source defect:
`md:left-[110%] md:w-[200%]` in Home Core Capabilities.

Fix root geometry. Do NOT hide the defect with global `overflow-x:hidden`.

### B-02 Home media does not match final approved mapping
Current Home uses stale generated/service media.

The current four Home assignments are wrong.

### B-03 Home Selected Projects has no imagery
The approved design requires visual project cards:
- desktop: 2–3 selected-work visuals;
- mobile: horizontal scroll-snap.

### B-04 CTA-Anchor is a placeholder
Current CTA-Anchor:
- gray background;
- fixed `40vh/60vh`;
- generic white card;
- no final architectural image.

This contradicts the approved CTA system.

### B-05 Project provenance is wrong
Current Project 02 / 04 / 05 use generic service imagery while marked `verified-sppat`.

This must be corrected to the real grouped project-series folders.

### B-06 Content has been severely abridged
The consolidated 9-page architecture was intended to preserve approved copy from former child pages.

Current implementation omits substantial approved content from:
- Tegelwerk;
- Specialisaties;
- Kennisbank;
- Contact;
and omits the visible Badkamers FAQ.

Content must be restored from the authoritative Content Spec.

## RESPONSIVE DEFECTS

Confirmed overflow:
- Home: 1440 / 1024 / 834 / 390
- Badkamers: 390
- Specialisaties: 390
- Projecten: 1440 / 1024 / 834

Projecten also uses absolute translated details escaping the intended parent.

---

# 2. PRE-FLIGHT: DO THIS BEFORE EDITING SOURCE

## 2.1 Read authoritative files
Read completely:
- `AGENTS.md`
- `SPPAT_PROJECT_STATE.md`
- all three canonical docs under `docs/`
- this correction spec

## 2.2 Asset pre-flight
Before any code edit, verify the exact canonical selected files are available.

### Home required sources
The approved original Home choices are:

- `HOME-01` source: `public/media/экстра-крупный_формат.jpg`
- `HOME-02` source: `public/media/дизайн_тропик.jpg`
- `HOME-03` source: `public/media/большая_гостиная-60х120см.jpg`
- `HOME-04` source: `public/media/лазер-идеальный_шов.jpg`

These must become the canonical Home logical assets:

- `public/images/curated/home/home-01-hero.jpg`
- `public/images/curated/home/home-02-badkamers.jpg`
- `public/images/curated/home/home-03-tegelwerk.jpg`
- `public/images/curated/home/home-04-tech.jpg`

Copy from the exact originals. Do not substitute.

Also locate the exact Media Mapping V2 handoff assets:
- `assets/home/home-project-a.jpg`
- `assets/home/home-project-b.jpg`
- `assets/home/home-project-c.jpg`
- `assets/home/home-cta.jpg`
- all `assets/services/*`
- all `assets/specialisaties/*`
- `assets/about/*`
- `assets/knowledge/*`

Locate them inside `handoff/` or the existing approved media handoff.

If ANY required canonical V2 asset cannot be found:
- do not guess;
- do not substitute;
- report the exact missing filenames before implementation.

### Project folders
Verify:
- `public/references/Новая папка/`
- `public/references/Новая папка 2/`
- `public/references/Новая папка 3/`
- `public/references/Новая папка 4/`
- `public/references/Новая папка 5/`

Project 06 verified folder is expected to remain missing/empty.

## 2.3 Repository checkpoint
The current Git history predates the Next.js implementation and Audit V2.1 shows most current Next files as untracked.

Before final corrections:

1. clean root-only scratch artifacts:
   - move `SPPAT_AUDIT_V2_1_RECOVERY_PROMPT.txt` to `handoff/audit/`;
   - move `public/Архив.zip` to `handoff/media-source/` if it is not referenced at runtime;
   - do not delete raw media/reference folders.

2. ensure `.gitignore` includes:
   - `node_modules/`
   - `.next/`
   - `audit/`
   - `handoff/`
   - `*.zip`

3. make one checkpoint commit of the CURRENT audited implementation before corrections:
   - message: `checkpoint: audited pre-final-correction`

After this checkpoint the working tree must be clean before implementation begins.

No temporary fix scripts may be left in repository root.

---

# 3. GLOBAL IMPLEMENTATION FOUNDATION

Authorized shared files:
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/Typography.tsx`
- `src/components/MediaSlot.tsx`
- `src/components/CtaComponents.tsx`
- `src/components/BlueprintLine.tsx`
- `src/config/mediaData.ts`
- `src/config/businessData.ts`
- new shared components only when explicitly described here

## 3.1 Fix nested `<main>`
Root layout currently wraps every page inside a `<main id="main-content">`, while each page already renders its own `<main>`.

Change the root content wrapper to a neutral element such as:
`<div id="main-content" className="flex-grow">`

Each public page keeps exactly one semantic `<main>`.

## 3.2 Typography utility correctness
The Tailwind theme defines `font-space`, not `font-space-grotesk`.

Replace all invalid `font-space-grotesk` usage with `font-space`.

Keep:
- Space Grotesk for headings/nav/meta/technical labels;
- Inter for body.

Headings:
- no hyphenation;
- no document overflow;
- allow emergency wrapping of very long Dutch compound words only when required to prevent viewport overflow.

Do not solve text overflow by globally shrinking all typography.

## 3.3 Responsive grid convention
Use distinct responsive composition rather than desktop stacking.

Reference behavior:
- 390 mobile: 4-column logic, 20px side inset for standard content;
- 834 tablet: intentional tablet composition, do not trigger fragile desktop absolute layouts;
- 1024 compact desktop: 12-column architectural composition, tighter gutters;
- 1440 desktop: full 12-column composition.

Desktop-only absolute/art-directed overlaps should normally start at `lg` (1024), not `md` (768), unless explicitly safe at tablet width.

Do not use global `overflow-x:hidden` to conceal layout defects.

## 3.4 MediaSlot refactor
Refactor `MediaSlot` so:

- `className` is not duplicated on both outer and inner wrapper;
- aspect sizing has one source of truth;
- wrapper never creates height beyond the media;
- responsive source selection still works;
- `objectPosition` comes from centralized media config;
- add `data-media-id={mediaId}` to the outer wrapper and image for QA;
- approved images never disappear because of status;
- development marker shows only `provisional` or `gap`;
- no public marker in production;
- keep lazy loading.

Add optional configuration support for:
- `origin`;
- `productionAllowed` or equivalent.

For Home:
every `HOME-*` record must be `origin: "media"`.

For real Projects:
`sourceClass: "verified-sppat"` only when the source is actually derived from its verified project folder.

## 3.5 CTA system

### CTA-Anchor
Replace the placeholder implementation.

Requirements:
- no fixed `vh` height;
- no gray placeholder;
- receives a `mediaId`;
- image provides the architectural composition;
- text/card sits in real negative space, not over the primary focal subject;
- desktop: image-led composition with text integrated lower-left or lower-right according to crop;
- mobile: image edge-to-edge or full-width, text interlocks with approximately the lower 10–15% of the image;
- content height determines section height.

Use:
- Home: `HOME-CTA`
- Badkamers: `BADK-CTA`

### CTA-Monument
Keep the typographic idea but guarantee:
- no horizontal overflow at 390;
- heading may wrap naturally;
- arrow cannot force document width;
- no fixed minimum width;
- `min-w-0` where necessary.

### CTA-Brief
Do not use a closed paragraph box.
Use blueprint top/bottom or side rules consistent with the design system.

## 3.6 Header
Keep current navigation list.

Add:
- current-page active underline using pathname;
- correct focus state;
- existing modal focus trap;
- mobile menu at tablet/mobile widths as designed.

## 3.7 Breadcrumbs
Implement a small reusable Breadcrumb component for inner pages.

Desktop:
`HOME / CATEGORY / PAGE`

Mobile:
`← CATEGORY`

Do not render breadcrumbs on Home.

No horizontal overflow.

## 3.8 Footer and temporary business data
Footer must read business values from centralized config, never hardcode them.

Current example values are temporary.

Rules:
- development may show the temporary values for layout review;
- production must not display unverified temporary phone/email/KvK/BTW as verified business facts;
- structured data continues to omit unverified fields;
- no invented replacements.

---

# 4. CANONICAL MEDIA IMPLEMENTATION

## 4.1 Home exact mapping

Create/use these logical records:

### HOME-01
Source:
`public/images/curated/home/home-01-hero.jpg`
derived exactly from:
`public/media/экстра-крупный_формат.jpg`

Role:
Hero

Desktop:
16:9, edge-to-edge

Mobile:
4:5, edge-to-edge

### HOME-02
Source:
`public/images/curated/home/home-02-badkamers.jpg`
derived exactly from:
`public/media/дизайн_тропик.jpg`

Role:
Badkamers Core Capability

Desktop:
portrait

Mobile:
edge-to-edge 4:5

### HOME-03
Source:
`public/images/curated/home/home-03-tegelwerk.jpg`
derived exactly from:
`public/media/большая_гостиная-60х120см.jpg`

Role:
Tegelwerk Core Capability

Desktop:
wide/landscape

Mobile:
inset 4:3

### HOME-04
Source:
`public/images/curated/home/home-04-tech.jpg`
derived exactly from:
`public/media/лазер-идеальный_шов.jpg`

Role:
Technical Proof

Desktop:
short panoramic strip

Mobile:
inset 16:9

### HOME-PROJECT-A/B/C and HOME-CTA
Use the exact V2 handoff files:
- `assets/home/home-project-a.jpg`
- `assets/home/home-project-b.jpg`
- `assets/home/home-project-c.jpg`
- `assets/home/home-cta.jpg`

No references/project folders/knowledge images are allowed on Home.

## 4.2 Services
Replace stale independent mappings with exact V2 handoff assets:

Badkamers:
- `BADK-01 -> assets/services/badk-01-hero.jpg`
- `BADK-02 -> assets/services/badk-02-concealed.jpg`
- `BADK-03 -> assets/services/badk-03-finish.jpg`
- `BADK-TOILET -> assets/services/badk-toilet.jpg` only if a media slot is actually used
- `BADK-CTA -> assets/services/badk-cta.jpg`

Almere:
- `ALM-01 -> assets/services/alm-01.jpg`

Tegelwerk:
- `TEGEL-01 -> assets/services/tegel-01-hero.jpg`
- `TEGEL-02 -> assets/services/tegel-02-xxl.jpg`
- `TEGEL-03 -> assets/services/tegel-03-parket.jpg`

Do not independently choose raw/generated alternatives.

## 4.3 Specialisaties
Use exactly:
- `SPEC-02 -> assets/specialisaties/spec-02-xxl.jpg`
- `SPEC-03 -> assets/specialisaties/spec-03-mosaic.jpg`
- `SPEC-04A -> assets/specialisaties/spec-04a-stone-texture.jpg`
- `SPEC-04B -> assets/specialisaties/spec-04b-stone-edge.jpg`
- `SPEC-05 -> assets/specialisaties/spec-05-parket.jpg`

Do NOT render `SPEC-01` as a page hero.

## 4.4 Over ons
Use exactly:
- `ABOUT-01 -> assets/about/about-01-process.jpg`
- `ABOUT-02 -> assets/about/about-02-tech-strip.jpg`

They must not both point to the same generated image.

## 4.5 Kennisbank
Use exactly:
- `KB-01 WATERDICHTING -> assets/knowledge/kb-waterdichting.jpg`
- `KB-02 LIPPAGE -> assets/knowledge/kb-lippage.jpg`
- `KB-03 INSPECTIELUIK -> assets/knowledge/kb-inspectieluik-temp.jpg`
- `KB-04 EPOXY/CEMENT -> assets/knowledge/kb-epoxy-cement.jpg`

`KB-03`:
- status `gap` or `provisional`;
- local review allowed;
- production image must be suppressed until accurate replacement exists;
- alt must NOT falsely claim the temporary photo depicts an inspection hatch.

## 4.6 Projects — real evidence only

Never use generic service images inside `/projecten/`.

### Project 01
Source:
`references/Новая папка/`

Use all 3 approved files.

Archetype:
Beta portrait sequence.

### Project 02
Source:
`references/Новая папка 2/`

Use all 5 files.

Do not reduce to one image.

Composition:
- first approved file/order item becomes dominant contextual image;
- remaining four are supporting evidence;
- desktop: dominant image + supporting asymmetric strip;
- mobile: supporting images in horizontal scroll-snap.

### Project 03
Source:
`references/Новая папка 3/`

Use:
- `p03-01` dominant context;
- `p03-02`;
- `p03-03`.

Archetype:
Alpha.

Do not translate the overlapping detail outside the parent/container.
Reserve layout space for overlap instead of creating document overflow.

### Project 04
Source:
`references/Новая папка 4/`

Use:
- `p04-01` as dominant wide kitchen/floor view;
- every remaining approved file in that folder as smaller supporting views.

This is the richest floor/interior series.

Do not use the current bathroom service card.

### Project 05
Source:
`references/Новая папка 5/`

Use:
- `p05-01` dominant interior/stair view;
- other 3 approved files as support.

Do not use the current kitchen service card.

### Project 06
Verified series is missing.

Local development:
may show the existing temporary Project 06 visual with clear dev-only `GAP` status.

Production:
do not present temporary imagery as verified work.

Until verified Project 06 media is supplied:
- production may omit the Project 06 visual section;
- the portfolio intro must not claim there are “six verified project groups”.

Use neutral factual wording:
`De portfolio toont afzonderlijke, geverifieerde SPPAT-projectgroepen.`

This is a factual safety correction caused by the confirmed missing Project 06 source.

## 4.7 Project image resolution safeguard
Measure intrinsic source dimensions before generating web derivatives.

Do not enlarge weak source photography into huge desktop hero positions.

Rule:
- dominant positions only for sufficiently strong/high-resolution source;
- lower-resolution approved images remain supporting/detail sizes;
- this changes display role/size, not photo selection.

---

# 5. CONTENT INTEGRITY — RESTORE THE APPROVED 9-PAGE COPY

Do not summarize or rewrite approved copy.

Copy exact Dutch text from:
`docs/SPPAT_FINAL_WEBSITE_CONTENT_9PAGES_FINAL.md`

Layout may adapt, wording may not, except the explicitly authorized Project 06 factual correction above.

## 5.1 Home
Current main copy is mostly present.

Ensure all approved Home content exists:
- Hero
- Kwaliteit begint onder de tegels
- Turnkey Badkamerrenovatie van A tot Z
- Professioneel Tegelwerk voor Elke Ruimte
- Specialisaties in Veeleisende Materialen
- Gerealiseerde Projecten
- 35 Jaar Ervaring in Bouwtechniek
- Klaar om uw project concreet te maken?

Design order remains:
Hero -> Core Capabilities -> Technical Proof -> additional routing/proof -> Selected Projects -> CTA.

## 5.2 Badkamers
Restore/verify exact approved content including:
- full A-Z intro;
- coordinated scope;
- five process steps;
- technical construction;
- material choice;
- possibilities list;
- Complete Toiletrenovatie;
- Gerealiseerde Badkamers;
- Start uw badkamerrenovatie;
- visible FAQ.

The current JSON-LD FAQ must not exist without matching visible FAQ content.

Render the approved FAQ visibly and keep JSON-LD synchronized with the visible questions/answers.

## 5.3 Almere
Current page is structurally close.

Verify exact copy:
- Badkamerrenovatie in Almere
- Complete uitvoering, lokaal besproken
- Ook voor technisch tegelwerk
- Uw badkamer in Almere bespreken?

Do not claim the pictured bathroom is located in Almere.

## 5.4 Tegelwerk — MAJOR CONTENT RESTORATION
The current implementation omits much of the consolidated child-page copy.

Restore exact content for all of the following:

Top/index:
- Professioneel Tegelwerk & Installatie
- De basis voor een strak eindresultaat
- Onze tegelwerkdiensten
- Vloertegels leggen
- Wandtegels zetten
- Keuken tegelen
- Balkon tegelen
- Badkamer tegelen
- Expertise in veeleisende materialen
- Oog voor de afwerking
- Gerealiseerde Tegelprojecten
- Uw tegelproject bespreken?

Long-form consolidated sections:
- Vloertegels Leggen
  - Voorbereiding en egalisatie
  - Tegelverdeling
  - Verschillende toepassingen
  - Een nieuwe tegelvloer realiseren?
- Wandtegels Zetten
  - Eerst verdelen, daarna plaatsen
  - Details die het verschil maken
  - Uw wanden professioneel laten tegelen?
- Keuken Achterwand & Vloer Tegelen
  - Maatwerk rondom vaste elementen
  - Voegkeuze
  - Uw keuken voorzien van nieuw tegelwerk?
- Balkon Tegelen
  - Water moet weg kunnen
  - Afwerking aan randen en aansluitingen
  - Uw balkon voorzien van tegelwerk?
- Badkamer Vakkundig Laten Tegelen
  - Aandachtspunten in natte ruimtes
  - Complete renovatie nodig?
  - Alleen het tegelwerk bespreken?

Keep all legacy child URLs redirected to the correct section anchors.

Do not add arbitrary images to the typographic service index.

Long-form sections should be editorial text compositions with blueprint separators, not repetitive card boxes.

## 5.5 Specialisaties — MAJOR CONTENT RESTORATION
Keep the four visual editorial compositions, then integrate all approved detailed copy.

Required exact content:

Summary/material compositions:
- Grootformaat & XXL
- Mozaïek
- Natuursteen
- Keramisch parket
- Gerealiseerde Projecten
- Een specialistisch tegelproject bespreken?

Detailed consolidated content:
- Grootformaat & XXL Tegels Leggen
  - De ondergrond wordt belangrijker naarmate het formaat groeit
  - Minder voegen betekent niet minder voorbereiding
  - Grootformaat in badkamer en douche
  - Grootformaat tegels in uw project?
- Professioneel Mozaïek Zetten
  - Waar mozaïek sterk tot zijn recht komt
  - Aandacht voor overgang en lijnvoering
  - Mozaïek in uw project?
- Natuursteen Leggen
  - Eerst het materiaal begrijpen
  - Het legbeeld als geheel
  - Onderhoud
  - Natuursteen in uw project?
- Keramisch Parket Leggen
  - Patroon en verdeling
  - Ondergrond en vlakheid
  - Houtlook tegels professioneel laten leggen?

Do not turn them into separate public routes.

## 5.6 Projecten
Use exact approved short copy for Project 01–05.

Project groups must remain visually distinct.

Do not invent:
- locations;
- budget;
- dates;
- brands;
- duration;
- technical specifications.

`Meer werk en details` remains one separate section for standalone verified SPPAT work only.

## 5.7 Over ons
Verify exact approved copy:
- Betrouwbaarheid in Techniek en Uitvoering
- Verantwoordelijkheid voor het totaalplaatje
- 35 jaar praktijkervaring
- Van voorbereiding tot eindafwerking in heel Nederland
- Materialen: flexibel geregeld
- Kennismaken met SPPAT?

Current structure is broadly acceptable after canonical media replacement.

## 5.8 Contact — MAJOR CONTENT RESTORATION
Current H1 `Contact` is wrong.

Use exact approved content:

H1:
`Uw Project Bespreken`

Then:
- both approved intro paragraphs;
- `Wat kunt u meesturen?` heading and full six-item list;
- `Contactformulier` heading;
- exact approved labels/placeholders/helper/privacy copy;
- `Direct contact` heading.

Layout:
Desktop:
- left cols 1–5: H1, intro, What to send, Direct contact;
- right cols 7–12: form.

Mobile:
- text first;
- form second.

Do not invent response times.

### Contact form functionality
No submission backend/provider is confirmed.

Do not fake a successful submission.

This pass may:
- keep the UI and native/client-side validation;
- implement 10MB upload validation;
- preserve approved validation/success strings in code for later integration.

But do not show a success state unless data was actually submitted to a real configured endpoint.

Record form delivery integration as `OWNER DEPENDENCY` if no endpoint exists.

## 5.9 Kennisbank — MAJOR CONTENT RESTORATION
Current article copy is heavily abbreviated.

Restore the complete approved four technical topics on the single `/kennisbank/` page.

Required full article structure:

### Waterdichting in de Badkamer: Wat Gebeurt er Onder de Tegels?
- Zijn tegels waterdicht?
- Natte zones vragen extra aandacht
- Wat doet kimband?
- Doorvoeren en details
- Wat betekent dit voor uw renovatie?

### Tegel Lippage: Hoogteverschillen Beperken
- Wat is lippage?
- Waardoor ontstaat het?
- Waarom grootformaat extra aandacht vraagt
- Levelingsystemen
- Praktische conclusie

### Het Onzichtbare, Betegelde Inspectieluik
- Techniek bereikbaar houden
- Waarom een betegeld luik?
- Waar zit de moeilijkheid?
- Niet iedere situatie is hetzelfde

### Epoxyvoeg vs. Cementvoeg
- Cementgebonden voeg
- Epoxyvoeg
- Is epoxy altijd beter?
- Wat bepaalt de keuze?

Also preserve the approved brief topic introductions/index copy.

Desktop:
- sticky index cols 1–3;
- reading area cols 5–12.

Mobile:
- sticky index removed;
- coherent vertical article flow;
- images 4:3 inset.

No article detail routes.

---

# 6. PAGE-BY-PAGE COMPOSITION CORRECTIONS

# 6.1 HOME

## Hero
Desktop:
- HOME-01 full bleed 16:9;
- H1 block anchored lower-left;
- overlap image edge intentionally;
- text block maximum approximately half-to-two-thirds page width;
- never clip at right edge.

834:
- no wide desktop absolute positioning that exceeds viewport;
- H1 can interlock with image using negative vertical margin only.

390:
- HOME-01 4:5 edge-to-edge;
- text overlaps lower ~10–15%;
- buttons wrap vertically if needed;
- zero horizontal overflow.

## Core Capabilities
Delete the current:
`md:left-[110%] md:w-[200%]`.

Desktop:
- HOME-02 dominant portrait, cols 1–5;
- HOME-03 wide image, cols 7–12 and visually lower;
- typography occupies genuine negative space between/around images;
- the Badkamers text block must not cover the main subject of HOME-03;
- no element wider than its grid container.

834:
- use an intentional 8-column/tablet recomposition;
- no desktop absolute block carried down from 1024;
- images remain visually asymmetric.

390:
- HOME-02 edge-to-edge 4:5;
- its copy interlocks below/over lower edge;
- HOME-03 inset by 20px, 4:3;
- Tegelwerk copy follows as a connected composition.

## Technical Proof
HOME-04:
- desktop: wide short strip;
- mobile: inset 16:9;
- text above;
- no fixed viewport height.

## Selected Projects
Add:
- HOME-PROJECT-A
- HOME-PROJECT-B
- HOME-PROJECT-C

Desktop:
asymmetric 2–3 visual evidence composition.

Mobile:
horizontal scroll-snap cards.

## CTA
CtaAnchor with `HOME-CTA`.
No gray placeholder.

---

# 6.2 BADKAMERS

Keep:
Hero -> Process Timeline -> Technical Construction -> Details/Finishing/Toilet -> Project proof link -> CTA.

Fix:
- 390 horizontal overflow;
- canonical images;
- visible FAQ;
- CTA Anchor with `BADK-CTA`;
- no fixed `vh`.

Mobile timeline:
line approximately 20px from left;
steps flow naturally.

Technical:
mobile image first, text second.

Do not render BADK-TOILET unless it genuinely improves the existing toilet subsection.
It remains provisional if rendered.

---

# 6.3 ALMERE

Keep the current restrained layout.

Use canonical ALM-01.

Desktop:
text/image 50/50 split without overlap.

Mobile:
stacked, 4:5 visual.

No local provenance claim about photo.

---

# 6.4 TEGELWERK

Hero:
- retain overlap concept;
- canonical TEGEL-01;
- at 834 use tablet-safe composition, not squeezed desktop.

Application Index:
- text-only;
- all five services;
- no images;
- blueprint separators.

Premium:
- TEGEL-02 and TEGEL-03 exact canonical assets;
- preserve 7/5 and 5/7 asymmetry desktop;
- inset evidence on mobile.

Long-form consolidated service content:
- editorial text sequence;
- alternate reading-column offsets;
- blueprint top borders;
- do not turn every subsection into a card;
- no extra images required.

CTA:
CtaMonument with no overflow.

---

# 6.5 SPECIALISATIES

Intro:
typography only.
No SPEC-01 hero.

XXL:
SPEC-02 full-bleed 16:9 desktop;
white typography block;
mobile edge-to-edge 4:5.

Mozaïek:
SPEC-03 portrait desktop;
mobile 1:1 inset.

Natuursteen:
SPEC-04A + SPEC-04B diptych desktop.
Mobile:
horizontal scroll-snap strip, not compressed tiny side-by-side thumbnails.

Keramisch Parket:
SPEC-05 wide floor perspective desktop;
typography anchored to blueprint line;
mobile 4:3 inset.

Restore all detailed consolidated copy as described above.

Fix 390 horizontal overflow.

CTA Monument:
no overflow.

---

# 6.6 PROJECTEN

Remove geometry masking:
do not rely on `<main className="overflow-hidden">` to hide mistakes.

Project boundaries must be obvious.

Each project:
- H2 identifier;
- exact approved short copy;
- its own visual composition;
- blueprint separation.

Project 01:
3-image Beta sequence.

Project 02:
all 5 verified images.

Project 03:
dominant context + 2 support.
No `translate-x` outside parent.

Project 04:
p04-01 dominant + all remaining approved support.

Project 05:
p05-01 dominant + 3 support.

Project 06:
development local-review gap only until verified.

Mobile:
- preserve grouping;
- scroll-snap only for secondary images;
- primary image remains immediately associated with project heading/copy.

Desktop/tablet:
zero document overflow.

---

# 6.7 OVER ONS

Keep current structure:
Hero overlap -> company content -> technical strip -> remaining content -> CTA Brief.

Replace duplicate current media with:
ABOUT-01 and ABOUT-02 canonical distinct files.

CTA-Brief:
blueprint lines, no closed box.

---

# 6.8 CONTACT

Implement exact content restoration.

Keep utility layout.

At 390:
- no cramped two-column remnants;
- form controls full width;
- file upload label/helper do not overflow.

Do not publish fake success behavior.

---

# 6.9 KENNISBANK

Restore full content.

Use the four exact images.

Desktop:
sticky index.
Reading width controlled.

834:
index may remain compact if it does not squeeze article text; otherwise switch to non-sticky topic navigation.

390:
no sticky index;
4:3 inset figures;
all H2/H3 wrap cleanly.

KB-03 remains local review only until replaced.

CTA-Brief:
blueprint lines, no closed box.

---

# 7. RESPONSIVE ACCEPTANCE RULES

Test exactly:
- 1440
- 1024
- 834
- 390

For every route:

- `document.documentElement.scrollWidth === window.innerWidth`
  unless a deliberately local scroll-snap container scrolls internally;
- local horizontal scroll strips must not increase document width;
- no giant accidental blank regions;
- no fixed `vh` section used as a spacing substitute;
- no primary heading clipped;
- no text hidden by photography;
- image/text relationships remain visually connected;
- no project image visibly over-upscaled;
- CTA does not overflow;
- footer reaches normally;
- mobile menu works;
- no public dev/provenance label for approved media.

Do not solve horizontal overflow by applying `overflow-x:hidden` to `html`, `body`, or main page wrappers.

---

# 8. SEO / ROUTES / STRUCTURED DATA

Keep existing:
- exactly 9 sitemap routes;
- canonical metadata;
- existing redirect map to consolidated anchors.

Verify all 9 rendered browser titles contain `SPPAT` exactly once.

Keep LocalBusiness structured data free of temporary:
- phone;
- email;
- tax/VAT;
- other unverified business values.

Visible Badkamers FAQ and FAQ JSON-LD must match.

No project-detail routes.
No knowledge-article routes.

---

# 9. FILE CHANGE SCOPE

Authorized implementation files include:

- shared files listed in Section 3;
- all 9 current page files;
- `src/app/sitemap.ts` only if needed to preserve exactly 9 routes;
- `src/app/robots.ts` only if needed;
- `next.config.ts` only if redirect correction is required;
- `.gitignore`;
- approved curated image copies/derivatives under `public/images/`.

Do not delete raw media/reference source libraries during this pass.

WHOLE-FILE REWRITE AUTHORIZED ONLY IF NECESSARY for:
- `src/app/tegelwerk/page.tsx`
- `src/app/specialisaties/page.tsx`
- `src/app/kennisbank/page.tsx`
- `src/app/contact/page.tsx`

Reason:
the current files omit large portions of authoritative approved content.

For every other existing page/shared file:
prefer surgical edits.

---

# 10. IMPLEMENTATION SEQUENCE

Perform in this order:

1. pre-flight assets;
2. repository checkpoint;
3. shared/global fixes;
4. canonical media config;
5. Home;
6. Badkamers;
7. Almere;
8. Tegelwerk;
9. Specialisaties;
10. Projecten;
11. Over Ons;
12. Contact;
13. Kennisbank;
14. header/footer/breadcrumb final verification;
15. SEO/structured-data verification;
16. build/lint;
17. visual QA.

Do not run parallel subagents that independently edit overlapping shared/page files.

---

# 11. REQUIRED FINAL QA ARTIFACTS

Create outside repository:

`../SPPAT_FINAL_QA/`

Required:

## screenshots/
36 full-page screenshots:
9 routes × 1440/1024/834/390

Before each screenshot:
- scroll page to load lazy images;
- verify images loaded;
- return to top;
- capture full-page.

## reports/
Create:

### `final-layout-qa.md`
For every route/breakpoint:
- innerWidth
- document scrollWidth
- overflow delta
- failed images
- visible clipping

### `final-media-map.md`
For every MEDIA ID:
- configured source
- runtime source
- status
- source class
- origin
- page usage

### `content-integrity.md`
For every page:
- list all expected H1/H2/H3 from Content Spec;
- confirm PRESENT;
- list missing heading/copy if any.

Tegelwerk, Specialisaties and Kennisbank must have zero missing approved long-form sections.

### `project-provenance.md`
Confirm:
- Project 01 only group 01;
- Project 02 only group 02;
- Project 03 only group 03;
- Project 04 only group 04;
- Project 05 only group 05;
- Project 06 flagged unresolved;
- zero generic service images marked verified project evidence.

### `seo-qa.md`
Confirm:
- 9 routes;
- title once;
- canonical URLs;
- redirects;
- JSON-LD contains no temporary business data.

Package:
`../SPPAT_FINAL_QA.zip`

---

# 12. BUILD / LINT

Run:

```bash
npm run build
npm run lint
```

Both must pass with zero errors.

Do not auto-suppress lint rules merely to obtain green output.

---

# 13. FINAL REPORT

Return:

1. pre-flight asset result;
2. checkpoint commit hash;
3. exact files changed;
4. content sections restored;
5. exact Home media mapping;
6. exact project media mapping/counts;
7. all responsive overflow results;
8. build result;
9. lint result;
10. unresolved owner dependencies:
    - Project 06 verified media;
    - KB inspectieluik accurate media;
    - verified business contact data;
    - contact-form delivery endpoint, if still absent;
11. path to `../SPPAT_FINAL_QA.zip`.

Do NOT declare final acceptance.
The owner/controller will accept based on rendered QA.
