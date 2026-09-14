# SPPAT --- FINAL SERVICES / SEO / DESIGN IMPLEMENTATION SPEC

**Status:** PM / Product Owner / Tech Lead approved for content & design
implementation.

## 1. Product decision

The commercial service architecture is frozen for the current build. Add
exactly two service pages: `/tegelwerk/inloopdouche-tegelen/` and
`/tegelwerk/vloerverwarming-en-tegelen/`. Do not create standalone URLs
for visgraat, woonkamer, hal, nis, douchewand, douchevloer, egaliseren,
voegen, kitwerk, tegelplinten, verstek or ontkoppeling without a new
product/SEO decision.

## 2. Canonical commercial tree

``` text
BADKAMERS
├── /complete-badkamer-renovatie/
│   └── /complete-badkamer-renovatie/almere/
└── /complete-toilet-renovatie/

TEGELWERK
├── /tegelwerk/
├── /tegelwerk/vloer-tegelen/
├── /tegelwerk/wand-tegelen/
├── /tegelwerk/badkamer-tegelen/
├── /tegelwerk/inloopdouche-tegelen/ [NEW]
├── /tegelwerk/keuken-tegelen/
├── /tegelwerk/balkon-tegelen/
└── /tegelwerk/vloerverwarming-en-tegelen/ [NEW]

SPECIALISATIES
├── /specialisaties/
├── /specialisaties/grootformaat-tegels/
├── /specialisaties/mozaiek-zetten/
├── /specialisaties/natuursteen/
└── /specialisaties/keramisch-parket/
```

## 3. SEO intent map

  ------------------------------------------------------------------------------------------
  URL                                        Primary keyword         Boundary
  ------------------------------------------ ----------------------- -----------------------
  `/complete-badkamer-renovatie/`            badkamer renovatie      Full A--Z bathroom
                                                                     execution; not
                                                                     tile-only.

  `/complete-badkamer-renovatie/almere/`     badkamer renovatie      Local landing; not a
                                             Almere                  national duplicate.

  `/complete-toilet-renovatie/`              toilet renovatie        Complete WC renovation.

  `/tegelwerk/`                              tegelwerk               Commercial hub.

  `/tegelwerk/vloer-tegelen/`                vloertegels leggen      Floor installation;
                                                                     heating contextual.

  `/tegelwerk/wand-tegelen/`                 wandtegels zetten       General wall
                                                                     installation.

  `/tegelwerk/badkamer-tegelen/`             badkamer laten tegelen  Tile/wet-room scope
                                                                     when installation work
                                                                     is already arranged.

  `/tegelwerk/inloopdouche-tegelen/`         inloopdouche tegelen    Shower wet-zone
                                                                     construction and
                                                                     tiling.

  `/tegelwerk/keuken-tegelen/`               keuken achterwand       Backsplash + kitchen
                                             tegelen                 floor.

  `/tegelwerk/balkon-tegelen/`               balkon tegelen          Exterior tiling.

  `/tegelwerk/vloerverwarming-en-tegelen/`   vloerverwarming en      Heating/tile interface;
                                             tegels                  system installation
                                                                     claim gated.

  `/specialisaties/`                         tegel specialisaties    Specialization hub.

  `/specialisaties/grootformaat-tegels/`     grootformaat tegels     XXL.
                                             leggen                  

  `/specialisaties/mozaiek-zetten/`          mozaïek tegelzetter     Mosaic precision.

  `/specialisaties/natuursteen/`             natuursteen leggen      Natural stone.

  `/specialisaties/keramisch-parket/`        keramisch parket leggen Wood-look ceramic;
                                                                     visgraat stays
                                                                     subordinate.
  ------------------------------------------------------------------------------------------

## 4. Existing-page corrections

### Complete Badkamer Renovatie

Keep A--Z positioning: demolition → installation → substrate →
waterproofing → tiling → finishing. Required internal links: Bathroom
Tiling, Walk-in Shower, XXL/Mosaic/Natural Stone, Projects, Contact. Do
not publish unconfirmed duration/material-supply claims.

### Badkamer Renovatie Almere

Keep local intent. Do not label any image/project as Almere without
verified provenance. Duration and Sppat underfloor-heating installation
remain gated.

### Complete Toilet Renovatie

Use real compact WC proof: wall-hung WC, concealed cistern, wall/floor
alignment, niche/ledge where available. Link to Wall Tiling, Mosaic
where relevant, Projects, Contact.

### Tegelwerk Hub

Must contain seven child services. Hero must show a real large tiled
living floor/kitchen/hall, not another bathroom. Restore contextual
anchors to Grootformaat, Natuursteen and Mozaïek. Keep hub copy concise
so it does not compete with child pages.

### Vloer Tegelen

Sections: preparation/flatness, leveling, heating interface,
movement/decoupling context, edges/plinths, patterns, proof. Link to
Underfloor Heating + Tiles, XXL, Ceramic Parquet, Projects.

### Wand Tegelen

Sections: substrate/verticality, laser alignment, tile distribution,
corners/dilatation, niches/penetrations, proof. Use frontal/near-frontal
imagery where joint geometry is readable.

### Badkamer Tegelen

Keep distinct from complete renovation. Customer has
plumbing/installation arranged; Sppat handles tile/wet-room scope. Link
upward to Complete Bathroom and sideways to Walk-in Shower, XXL and
Mosaic.

### Keuken Tegelen

Keep backsplash/floor, socket cut-outs, worktop junction and
joint-maintenance content. Epoxy-grout company claim remains gated.

### Balkon Tegelen

Keep drainage/slope, exterior build-up, movement and frost/weather
content. Standard Sppat drainage/decoupling system remains gated. If no
verified exterior project exists, do not fake portfolio proof.

### Specialisaties Hub

Mandatory H2: `Onze expertisegebieden`. Exactly four specialization
cards.

### Grootformaat

Keep flatness, handling, double bonding, leveling/lippage, shower
application, cuts/edges. Maximum Sppat slab format remains gated.

### Mozaïek

Keep substrate, mat transitions, adhesive/mesh, niches/curves,
grout/detail. Macro proof only if verified Sppat mosaic work exists.

### Natuursteen

Keep calibration, material sensitivity, vein layout, wet-room
maintenance. Do not label ceramic marble-look as natural stone.
Impregnation by Sppat remains gated.

### Keramisch Parket

Keep long-tile curvature, wildverband, offset, joint color, heating
compatibility. Add visgraat as a subsection/semantic cluster, not a new
URL.

## 5. NEW --- Inloopdouche Tegelen

**URL:** `/tegelwerk/inloopdouche-tegelen/`\
**SEO Title:**
`Inloopdouche Tegelen | Afschot, Waterdichting & Afwerking | Sppat`\
**Meta:**
`Laat uw inloopdouche vakkundig tegelen met aandacht voor waterdichting, afschot, douchegoot, voegverdeling en strakke wand-vloeraansluitingen.`\
**Primary:** `inloopdouche tegelen`\
**Secondary:** `douchevloer tegelen`, `douchewand tegelen`,
`inloopdouche betegelen`, `afschot douchegoot`\
**H1:** `Inloopdouche Vakkundig Tegelen`

Required H2: 1. Waterdichting onder het tegelwerk 2. Afschot naar de
douchegoot 3. Tegelverdeling, nissen en aansluitingen 4. Grootformaat of
mozaïek in de douche 5. Een inloopdouche als onderdeel van een complete
renovatie

FAQ: suitable tiles; slope/drain; XXL suitability; whether Sppat can
tile only the shower zone (answer must match business scope).

Visuals: real completed shower hero with readable floor/drain geometry;
technical detail of drain/wall-floor junction/niche; XXL-vs-mosaic
comparison only if real assets support it.

Links: Bathroom Tiling, Complete Bathroom, XXL, Mosaic, waterproofing
knowledge article, Projects, Contact.

## 6. NEW --- Vloerverwarming & Tegelen

**URL:** `/tegelwerk/vloerverwarming-en-tegelen/`\
**SEO Title:**
`Vloerverwarming & Tegels | Voorbereiding en Tegelvloer | Sppat`\
**Meta:**
`Tegels laten leggen op vloerverwarming? Lees hoe ondergrond, sleuven, lijm, dilatatie en het opstookprotocol samen een stabiele tegelvloer vormen.`\
**Primary:** `vloerverwarming en tegels`\
**Secondary:** `tegels op vloerverwarming`, `vloerverwarming tegelen`,
`tegelvloer vloerverwarming`\
**H1:** `Tegels op Vloerverwarming`

Critical scope rule: until business confirmation, say Sppat tiles
over/prepares for compatible underfloor heating. Do NOT state that Sppat
installs electric or water-fed systems itself.

Required H2: 1. Waarom tegels goed combineren met vloerverwarming 2. Een
stabiele en vlakke ondergrond 3. Sleuven, lijm en spanningen in de vloer
4. Opstook- en afkoelprotocol 5. Tegelformaat en legplan

FAQ: direct tiling; restart timing; XXL suitability;
`Installeert Sppat ook de vloerverwarming? [BUSINESS INPUT REQUIRED]`.

Visuals: real large floor first. Heating-layer technical imagery only if
verified/available. Never fabricate a Sppat installation photo.

Links: Floor Tiling, XXL, Ceramic Parquet, Projects, Contact.

## 7. Media/design contract

Use exact source filenames from `SPPAT_PROJECTS_MEDIA_DESIGN_FINAL.md`
before export. Every commercial page gets: one Hero slot, one real Proof
slot, one Detail slot where content warrants it.

Ratios: desktop hero 16:9 or 3:2; editorial 4:3 or 3:2; cards 4:3; macro
1:1 or 4:3; mobile hero dedicated \~4:5 crop. Do not blindly center-crop
desktop images.

Permitted: exposure, white balance, mild perspective/lens correction,
crop, minor temporary-distraction cleanup that does not alter
workmanship. Forbidden: changing tile geometry/joints, inventing
niches/drains/fixtures/materials, deceptive AI extension, or presenting
reference/AI imagery as completed Sppat work.

## 8. Internal-link system

-   Complete Bathroom → Bathroom Tiling → Walk-in Shower → relevant
    Specializations → Projects.
-   Tegelwerk Hub → all seven tile services → Specialisaties Hub.
-   Floor → Underfloor Heating + Tiles → XXL / Ceramic Parquet.
-   Wall → Bathroom / Kitchen → Mosaic / XXL.
-   Bathroom Tiling → Complete Bathroom / Walk-in Shower → XXL / Mosaic.
-   Walk-in Shower → Bathroom Tiling / Complete Bathroom → XXL / Mosaic
    → Waterproofing article.
-   Kitchen → Wall / Floor.
-   Underfloor Heating + Tiles → Floor → XXL / Ceramic Parquet.
-   Every commercial leaf → relevant verified Project(s) → Contact.

## 9. Business gates retained

Do not invent: average bathroom duration; material/sanitary supply
model; electric heating installation; water-fed heating installation;
standard decoupling mats; standard epoxy grout; balcony
drainage/decoupling system; maximum XXL format; natural-stone
impregnation; standard waterproofing system; project
location/provenance; company history/team; response time.

## 10. Designer implementation tasks

1.  Design the two NEW pages using the approved service-page system; no
    new visual concept.
2.  Fix existing tile-service heroes so no giant blank media placeholder
    remains.
3.  Assign approved real media to proof slots using the project/media
    MD.
4.  Define mobile crop for every hero.
5.  Keep family resemblance without making every page mechanically
    identical.
6.  Structural 1px borders only where they reveal hierarchy.
7.  Use only approved CTA compositions.
8.  Specialisaties must visibly include `Onze expertisegebieden`.
9.  Tegelwerk Hub must accommodate seven destinations without becoming a
    generic card catalogue.
10. No fake metadata, locations, testimonials, statistics, guarantees or
    business facts.

## 11. Implementation tasks

1.  Add both new routes to authoritative content source + route
    manifest.
2.  Add both to Tegelwerk hub.
3.  Restore contextual links from Tegelwerk to Grootformaat,
    Natuursteen, Mozaïek.
4.  Preserve scope separation: complete renovation vs tile-only
    bathroom.
5.  Add contextual cross-links from section 8.
6.  Keep business-gated statements unresolved in source data, not
    hardcoded as facts.
7.  Do not run destructive Markdown→JSON extraction until known Almere
    source drift is resolved.
8.  Do not use old one-off `.cjs` scripts to inject content.

## 12. Acceptance tests --- current phase

### Route/content

-   Every approved service URL resolves locally/prerendered.
-   Exactly one H1 per page.
-   Title/meta/canonical present.
-   Tegelwerk links to all seven child services.
-   Specialisaties links to all four specialization pages.
-   No service card points to nonexistent URL.
-   New breadcrumb: `Home → Tegelwerk → [service]`.

### SEO

-   Unique primary intent per page.
-   `badkamer renovatie` ≠ `badkamer laten tegelen`.
-   One canonical destination for `vloerverwarming en tegels`.
-   One canonical destination for `inloopdouche tegelen`.
-   Visgraat remains under Keramisch Parket.
-   Tegelwerk contextual links to XXL/Natuursteen/Mozaïek exist.
-   `Onze expertisegebieden` exists.
-   No `[BUSINESS INPUT REQUIRED]` is visible publicly.

### Visual

-   No blank/oversized hero placeholder.
-   Hero subject survives 390/834/1440 widths.
-   Mobile crop preserves the technical subject.
-   Real work is not materially falsified.
-   Reference/AI is never presented as Sppat work.
-   Ceramic marble-look is not factual proof of natural stone.

### Product

-   Complete-renovation pages sell complete renovation.
-   Tile pages sell tile scope.
-   Specialization pages sell material/technique expertise.
-   Projects provide proof, not duplicate service copy.
-   Every commercial leaf routes to relevant proof and
    `Project bespreken`.

## 13. PM / Tech Lead approval

**APPROVED for the current site-building phase.** The service catalogue
is structurally complete for content/design implementation with exactly
two additions: **Inloopdouche Tegelen** and **Vloerverwarming &
Tegelen**. No further commercial service pages should be added during
implementation without a new product/SEO review.

After execution: finalize real Project case-study content → final
information architecture/navigation → site-wide visual integration.
Form/privacy/CI/security/release hardening remains intentionally
deferred to the final launch stage.
