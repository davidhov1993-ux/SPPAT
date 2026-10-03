# SPPAT PROJECT STATE

## BASELINE
Baseline implementation commit:
`adf97597506a15f22d4c0fc3dba40ab2a5f00eb8`

Important:
repository cleanup subsequently changed `tsconfig.json` to exclude `audit/`.
That change is not yet considered an accepted implementation change and must be included in the next source snapshot / git diff.

## AUTHORITY ORDER
1. Current owner instructions in the conversation.
2. `docs/SPPAT_FINAL_MASTER.txt` (unchanged copy of the supplied master).
3. This file, for implementation progress only.
4. Existing code. Earlier content/design/media documents are historical references.

## OWNER CLARIFICATIONS — 2026-10-01
- Correct discrepancies in the existing implementation; retain compliant typography, content and components.
- Use five projects from `public/references/Новая папка` and `Новая папка 2` through `Новая папка 5` (3/5/3/8/4 images).
- Photos directly in `public/references/` are individual references. Do not fabricate a sixth project; do not duplicate HEIC/JPG pairs.
- Portfolio references to six projects must become five.
- Contact details, business identifiers and form delivery are outside the current pass.
- Work in resumable stages. The owner requested Over ons immediately after the Home pass.

## LOCKED DECISIONS
- Exactly 9 public content pages.
- No redesign phase is authorized.
- Developer does not independently select photography.
- Home uses only the approved curated Home/service media mapping.
- Project 01–05 are verified project groups.
- No sixth project is authorized in the current scope.
- KB inspectieluik is a media gap until an accurate visual is supplied.
- Content must not be deleted to solve layout problems.

## CURRENT PHASE
FINAL CORRECTION IMPLEMENTATION — authorized by the current owner request.

Starting HEAD: `a47db7512ffdfddb5d53cee4da70a0ea54b9f162`.
Eight files already had uncommitted changes when this task began. Those edits have not been reverted.

### Home checkpoint
- Existing fonts and approved copy preserved; corrected hero clipping, overlapping capabilities, image-slot sizing, tablet CTA overflow and mobile menu focus handling.
- HOME-01–04 now use the master-assigned sources. The CTA reuses HOME-01 rather than an unrelated photograph.
- Laser derivatives are in `public/images/processed/`. The actual source needs 90 degrees clockwise for upright orientation; the master's counter-clockwise direction produces an upside-down image. Originals are unchanged.
- Added Home canonical URL and eager hero loading.
- Lint and typecheck passed. Production export passed with `npm run build -- --webpack`; Turbopack's PostCSS worker port was blocked by the execution environment.
- Development screenshots and measurements at all four widths: `audit/master-stage-1/`. Last measured pass had no document overflow, broken images or text-box intersections. All 20 Home headings/paragraphs retained.
- Final production screenshots were blocked by automatic approval review reporting a usage limit. They have NOT been completed. This is not final visual acceptance.

### Over ons checkpoint
- Scope: `src/app/over-ons/page.tsx`, `src/app/over-ons/about.module.css`, and About entries in `src/config/mediaData.ts`.
- Existing title, description, H1 and all body copy retained. Canonical normalized to `/over-ons/`.
- Replaced the unmapped hero with the master-assigned process illustration. No SPPAT worker/authorship claim is made.
- Owner correction: the unapproved reuse of ABOUT-01 in a second image strip has been removed, together with the ABOUT-02 mapping and unused strip CSS. Only the assigned hero image remains; no replacement image or empty placeholder has been introduced. All approved copy is retained.
- Replaced fixed-vh/absolute text positioning with content-sized grid overlap; added scoped image ratios, reading-column spacing and a compact CTA beside the closing copy.
- Removed the About page's generic CTA sentence not present in its approved copy; button now says `Project bespreken`.
- Added approved internal service links and `Bekijk projecten`.
- `npm run build -- --webpack`, `npm run lint`, and `npx tsc --noEmit` passed. Lint has two existing unused-import warnings on Contact, which was not edited.
- All 11 original About headings/paragraphs were checked for preservation. The approved CTA heading is now rendered locally instead of through the generic CTA component.
- Four-width browser verification is pending explicit permission to retry after automatic approval review rejected the preceding browser launch due to a usage limit. No new About screenshots or visual acceptance claims exist yet.

## CONFIRMED BASELINE DEFECTS
Historical baseline only: see `SPPAT_BASELINE_AUDIT_FINDINGS.md`. This is not a fresh audit of the current implementation.

Critical known defects include:
- Home horizontal overflow at every breakpoint.
- Home actual media mapping does not match the approved final Home mapping.
- Home Selected Projects imagery is missing.
- CTA-Anchor implementation is a gray fixed-vh placeholder, not the approved image-integrated CTA.
- Project 02 / 04 / 05 currently use generic service imagery while marked verified SPPAT.
- Badkamers mobile overflow.
- Specialisaties mobile overflow.
- Projecten desktop/tablet overflow.
- Audit V1 did not trigger below-fold lazy image loading before screenshots.

## ACCEPTANCE STATE
No public page is finally accepted.

Build/lint success is not visual acceptance.
Previous agent statements saying "QA passed" are not acceptance evidence.

## NEXT GATE
1. Finish the requested Over ons verification and the outstanding Home production capture.
2. Continue by owner-selected page. Compare existing code first; change only actual discrepancies.
3. Repair Projecten media IDs: current page keys and mapping keys differ. Connect all five owner-confirmed folders and individual references.
4. Specialisaties hero visibility remains contradictory in the master; a text-only intro was proposed but not explicitly approved. Inspectieluik still has no assigned image; do not substitute unrelated media.
5. Final copy/SEO/link audit, lint/typecheck/build, and all 36 full-page screenshots. No other page has received final visual acceptance.
