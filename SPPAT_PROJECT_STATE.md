# SPPAT PROJECT STATE

## BASELINE
Baseline implementation commit:
`adf97597506a15f22d4c0fc3dba40ab2a5f00eb8`

Important:
repository cleanup subsequently changed `tsconfig.json` to exclude `audit/`.
That change is not yet considered an accepted implementation change and must be included in the next source snapshot / git diff.

## AUTHORITY ORDER
1. `docs/SPPAT_FINAL_WEBSITE_CONTENT_9PAGES_FINAL.md`
2. `docs/SPPAT_FINAL_DESIGN_SPECIFICATION.md`
3. `docs/SPPAT_MEDIA_REVIEW_MAPPING_V2.md`
4. this file
5. existing code

## LOCKED DECISIONS
- Exactly 9 public content pages.
- No redesign phase is authorized.
- Developer does not independently select photography.
- Home uses only the approved curated Home/service media mapping.
- Project 01–05 are verified project groups.
- Project 06 is a media gap until verified photography is supplied.
- KB inspectieluik is a media gap until an accurate visual is supplied.
- Content must not be deleted to solve layout problems.

## CURRENT PHASE
FINAL CORRECTION IMPLEMENTATION.

NO application implementation corrections are authorized yet.

## CONFIRMED BASELINE DEFECTS
See `SPPAT_BASELINE_AUDIT_FINDINGS.md`.

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
1. Final visual QA and deployment.
2. Upload `SPPAT_AUDIT_V2_FULL.zip` to the project controller.
3. Controller produces ONE consolidated `SPPAT_FINAL_CORRECTION_SPEC.md`.
4. Only then does one controlled implementation pass begin.
5. Repeat 36 screenshots and perform final acceptance.
