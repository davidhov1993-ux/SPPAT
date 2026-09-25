# SPPAT — BASELINE AUDIT FINDINGS

Status: controller review of baseline commit `adf97597506a15f22d4c0fc3dba40ab2a5f00eb8`

This document records only defects that are already confirmed from the audit package, source snapshots, approved design specification, and project media decisions.

## A. BLOCKERS

### A1 — Home horizontal overflow
Confirmed at every audited width:
- 1440 viewport -> 1831 document width
- 1024 viewport -> 1294 document width
- 834 viewport -> 1048 document width
- 390 viewport -> 469 document width

Confirmed source cause in `src/app/page.tsx`:
`md:left-[110%] md:w-[200%]` on the Badkamers Core Capabilities typography block.

This is not approved asymmetry. It creates document overflow and clipped composition.

### A2 — Home media mapping is not the final approved mapping
Current `mediaData.ts` still maps:
- HOME-01 -> `Generated Image September 10, 2026 - 7_57PM.jpg`
- HOME-02 -> `SPPAT-SVC-bath-feb-card-*`
- HOME-03 -> `SPPAT-SVC-kitchen-card-*`
- HOME-04 -> `Generated Image September 10, 2026 - 11_53PM.jpg`

The approved project media decisions fixed Home to the curated media set:
- HOME-01 -> `экстра-крупный_формат.jpg`
- HOME-02 -> `дизайн_тропик.jpg`
- HOME-03 -> `большая_гостиная-60х120см.jpg`
- HOME-04 -> `лазер-идеальный_шов.jpg`

Home must not independently substitute service/reference/project imagery.

### A3 — Home Selected Projects has no project imagery
The approved Design Specification requires:
- Desktop: 2–3 selected projects using the approved project archetype system.
- Mobile: horizontal scroll-snap project cards.

The current Home implementation renders only heading, paragraph and button. No selected-project media is rendered.

### A4 — CTA-Anchor is not the approved CTA-Anchor
Approved design:
CTA text/button integrated into negative space of the final architectural image.

Current shared component:
- gray placeholder background
- `h-[40vh] md:h-[60vh]`
- no architectural image
- generic floating white card

This affects Home and Badkamers.

### A5 — Project 02 / 04 / 05 provenance is wrong in code
Current `mediaData.ts` maps:
- PROJ-02-A -> service AI bathroom hero
- PROJ-04-A -> service bathroom card
- PROJ-05-A -> service kitchen card

They are marked `sourceClass: "verified-sppat"`.

This is a serious provenance defect. Project 02, 04 and 05 already have verified real project-series folders in the approved media workflow. Generic service imagery must not masquerade as project evidence.

## B. MAJOR RESPONSIVE / LAYOUT DEFECTS

### B1 — Home overflows horizontally on 1440 / 1024 / 834 / 390
Confirmed by DOM metrics and screenshot dimensions.

### B2 — Badkamers overflows horizontally at 390
390 viewport -> 433 document width.
The shared CTA-Anchor is one confirmed contributor.

### B3 — Specialisaties overflows horizontally at 390
390 viewport -> 410 document width.

### B4 — Projecten has desktop/tablet overflow
- 1440 -> internal scroll width ~1473
- 1024 -> ~1057
- 834 -> ~867

The current absolute overlapping detail plus positive X translation is a confirmed contributor.

### B5 — Shared CTA uses viewport-fixed heights
`CtaAnchor` uses:
`h-[40vh] md:h-[60vh]`

This is incompatible with the approved content-driven CTA-Anchor composition and previously caused spacing problems elsewhere.

## C. AUDIT-V1 LIMITATION

### C1 — Blank gray media below the fold cannot be trusted
`MediaSlot` sets every image to `loading="lazy"`.

The V1 Puppeteer audit:
- navigates to the page
- waits at the top
- takes a full-page screenshot
- does not scroll through the page before capture

Therefore below-the-fold images may remain unloaded. Gray blocks in the V1 screenshots do NOT automatically prove a broken asset.

A final evidence pass must scroll through each page first, wait for image decoding/loading, return to the top, then capture.

## D. PRODUCTION BLOCKERS ALREADY KNOWN

- `KB-03 INSPECTIELUIK` remains a real media gap.
- Project 06 remains a real verified-project media gap.
- Temporary contact/KvK/BTW values are still visible and must be replaced before production launch.
- Temporary business values must never be published as verified structured data.

## E. PAGES THAT CURRENTLY LOOK STRUCTURALLY CLOSER TO TARGET

These are NOT accepted yet, but V1 shows fewer obvious structural defects:
- Almere
- Contact
- Kennisbank
- Over Ons

They still require final loaded-image screenshots and spec comparison before acceptance.

## NEXT ACTION

No implementation changes yet.

Run one final READ-ONLY Audit V2 that:
1. fully loads lazy media by scrolling;
2. captures the same 36 screenshots;
3. snapshots ALL relevant source files and canonical docs;
4. records current git diff, including the cleanup change to `tsconfig.json`.

After Audit V2, the controller will produce ONE consolidated `SPPAT_FINAL_CORRECTION_SPEC.md`.
