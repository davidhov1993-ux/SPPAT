SPPAT — FINAL DESIGN CORRECTION & IMPLEMENTATION SPECIFICATION

Status: Design Specification — Ready for Media Matching
Design System: "The Anatomy of Precision / The Continuous Blueprint"
Role: Senior Art Director / UX/UI Architect

==================================================

1.  CREATIVE CONCEPT & VISUAL PRINCIPLES
    ==================================================

"The Continuous Blueprint" The website functions as a living architectural
document. The design relies on a continuous 1px structural grid (#E5E5E5) that
travels through the pages, acting as a physical framework from which typography
and imagery hang.

Visual Principles:

  - Evidence over Emotion: Imagery serves as technical proof. No lifestyle
    clichés.
  - Architectural Asymmetry: Elements align to the grid but intentionally span
    unequal columns to create tension and guide the eye diagonally.
  - Materiality: The interface itself is stark and neutral (#F7F7F5 background,
    #1A1A1A text), allowing the textures of concrete, ceramic, stone, and steel
    in the photography to provide all visual warmth and depth.

================================================== 2. TYPOGRAPHY SYSTEM

Typography is a deliberate design material, contrasting technical precision with
high readability.

Typeface 1: Space Grotesk (The Technical Layer)

  - Role: Display headings (H1, H2), numerical data, process steps, metadata,
    and navigation.
  - Characteristics: Geometric, engineered, slightly brutalist. Communicates
    measurement and precision.

Typeface 2: Inter (The Editorial Layer)

  - Role: Body copy, long-form reading, secondary descriptions.
  - Characteristics: Highly legible, neutral, Swiss-style clarity.

Responsive Scale (Fluid clamp() values):

  - H1 (Display): clamp(2.5rem, 5vw, 4.5rem) | Space Grotesk | Tracking: -0.03em
    | Line-height: 1.05
  - H2 (Section): clamp(2rem, 4vw, 3.5rem) | Space Grotesk | Tracking: -0.02em |
    Line-height: 1.1
  - H3 (Subsection): clamp(1.25rem, 2vw, 1.5rem) | Space Grotesk | Tracking: 0em
    | Line-height: 1.2
  - Body: clamp(1rem, 1.1vw, 1.125rem) | Inter | Line-height: 1.6
  - Meta/Caption: 0.875rem | Space Grotesk | Uppercase | Tracking: 0.05em

Rule: Apply word-break: keep-all; overflow-wrap: break-word; to all headings to
prevent arbitrary hyphenation of Dutch compound words.

================================================== 3. SPACING & STRUCTURAL RHYTHM

Whitespace is not empty; it is structural.

  - space-xs: 8px (Micro-rhythm: between H3 and paragraph).
  - space-sm: 24px (Component rhythm: between list items).
  - space-md: 64px desktop / 48px mobile (Inner padding of technical blocks).
  - space-lg: 120px desktop / 80px mobile (Standard transition between distinct
    semantic sections).
  - space-xl: 160px desktop / 100px mobile (Architectural breathing room, used
    to isolate major proof sections).

The Blueprint Line: 1px solid #E5E5E5. Used to draw continuous vertical axes
down the page or to cap major horizontal sections. Never used to draw closed
boxes around paragraphs.

================================================== 4. MOBILE ART DIRECTION (390px)

Mobile is a distinct compositional canvas. We do not use a generic 1-column
"Image/Text" stack.

  - Edge-to-Edge Bleed: Used ONLY for establishing Hero images and wide
    architectural panoramas to maximize screen impact.
  - Inset Evidence: Technical macro photos and detail shots are inset by 20px on
    both sides, often bordered by a 1px top/bottom line, treating them as
    inserted technical figures rather than background art.
  - Interlocking Typography: Text blocks intentionally overlap the bottom 15% of
    edge-to-edge images (using negative margins and a solid background color) to
    maintain the "Continuous Blueprint" connection.
  - Horizontal Detail Strips: Where multiple detail images exist (e.g.,
    Projecten, Specialisaties), they are placed in a horizontal CSS scroll-snap
    container (overflow-x: auto), allowing the user to swipe through evidence
    without creating endless vertical scroll fatigue.

================================================== 5. CTA COMPOSITION SYSTEM

Eliminate repetitive centered blocks. Use contextual conversion endings:

  - CTA-Anchor (Visual Integration): The CTA text and button are integrated into
    the negative space of the final architectural image on the page. (Used on
    Home, Badkamers).
  - CTA-Monument (Typographic Close): A massive, full-width H2 ("PROJECT
    BESPREKEN") in Space Grotesk, spanning 12 columns, with a simple arrow. Acts
    as a brutalist architectural footer transition. No images. (Used on
    Tegelwerk, Specialisaties).
  - CTA-Brief (Technical Prompt): A compact, 4-column technical intake prompt
    sitting alongside the final paragraph of a service page, bounded by
    blueprint lines. (Used on Kennisbank, Over Ons).

================================================== 6. EXACTLY 9 PUBLIC PAGES & COMPOSITIONS

There are exactly 9 public content pages. No additional routes may be created.

6.1 HOME (/)

Narrative: Premium positioning → Core Routing → Technical Proof → Real Evidence.

1.  Hero: Edge-to-edge bleed image (16:9). H1 typography block is inset,
    anchored to the bottom-left grid, overlapping the image.
2.  Core Capabilities (Interlocking Split):
      - Desktop: Badkamers gets a dominant portrait image (cols 1-5). Tegelwerk
        gets a wide landscape image (cols 7-12) that sits lower on the Y-axis.
        Typography for both sits in the negative space between them.
      - Mobile: Badkamers image bleeds edge-to-edge. Tegelwerk image is inset.
        Typography interlocks.
3.  Technical Proof:
      - Desktop: A horizontal detail strip. A 12-column wide, but short
        (e.g., 40vh) panoramic macro shot of technical precision, interrupting
        the page flow. Text sits above it.
4.  Selected Projects:
      - Desktop: 2-3 projects using the Archetype Alpha (see Projecten).
      - Mobile: Horizontal scroll-snap strip of project cards.
5.  Final CTA: CTA-Anchor.

6.2 BADKAMERS (/complete-badkamer-renovatie/)

Narrative: A-Z capability, process, and finishing.

1.  Hero: Edge-to-edge bleed image.
2.  The Process (Timeline):
      - Desktop: A continuous 1px vertical blueprint line runs down column 4.
        Process steps (Demolition to Finishing) hang off this line into
        columns 5-10.
      - Mobile: Vertical line runs down the left edge (20px in).
3.  Technical Construction:
      - Desktop: Text cols 1-5. Image cols 7-12 (Portrait 4:5).
      - Mobile: Inset Evidence image FIRST, text SECOND.
4.  Details & Finishing (inc. Toilet):
      - Desktop: Image cols 1-6 (Landscape 3:2). Text cols 8-12.
5.  Final CTA: CTA-Anchor.

6.3 BADKAMERRENOVATIE ALMERE (/complete-badkamer-renovatie/almere/)

Narrative: Local SEO landing page, visually connected but condensed.

1.  Hero:
      - Composition: Standard 50/50 split (Text cols 1-5, Image cols 7-12). No
        overlap to differentiate from the main Badkamers page.
2.  Local Tech & Tiling:
      - Composition: Typography-led. Cols 3-10.
3.  CTA:
      - Composition: Centered typographic block.

6.4 TEGELWERK (/tegelwerk/)

Narrative: Comprehensive index of applications, leading to premium capabilities.

1.  Hero Overlap:
      - Composition: Image cols 3-12. Text cols 1-5 overlapping top-left.
2.  Intro & Applications (The Typographic Index):
      - Composition: Intro text cols 1-5. Applications (Vloertegels, Wandtegels,
        Keuken, Balkon, Badkamer) listed in cols 7-12. Each application is an H3
        with a short description, separated by 1px borders. NO images here to
        ensure fast scanning.
      - Mobile: 1-column typographic list.
3.  Premium Capabilities (XXL & Natuursteen):
      - Composition: 7/5 Split. Text cols 1-6. Image cols 8-12.
4.  Premium Capabilities (Mozaïek & Keramisch Parket):
      - Composition: 5/7 Split. Image cols 1-5. Text cols 7-12.
5.  Final CTA: CTA-Monument.

6.5 SPECIALISATIES (/specialisaties/)

Narrative: Material-driven editorial feature.

1.  Hero: Typography-led intro. Max 8 cols. No hero image.
2.  Material Compositions (Editorial Variation):
      - XXL: Massive full-bleed 16:9 image. Typography overlaid in a stark white
        box.
      - Mozaïek: A tight, 4-column portrait image (macro detail) paired with
        a 6-column text block. High negative space.
      - Natuursteen: A diptych. Two 4:5 portrait images side-by-side (cols 1-5
        and 6-10), text below.
      - Keramisch Parket: Wide floor perspective (cols 3-12) with typography
        anchored to the left blueprint line (cols 1-4), overlapping the image.
3.  Final CTA: CTA-Monument.

6.6 PROJECTEN (/projecten/)

Narrative: The Evidence Layer. All six verified project series exist inside this
single page. There are NO individual project pages (/projecten/:slug/).

  - Hub Intro: Typography only. 1px bottom border.
  - Project Series Archetypes (Applied to sections within this single page):
      - Archetype Alpha (The Panorama): 1 dominant 16:9 image (cols 1-10) + 1
        inset 1:1 detail overlapping the bottom-right edge (cols 9-12).
      - Archetype Beta (The Portrait Sequence): 2 or 3 vertical 4:5 images in a
        staggered horizontal row. Text anchored to the lowest image.
      - Archetype Gamma (The Technical Diptych): 50/50 split of two extreme
        macro details (cols 1-6, 7-12), followed by a wide contextual shot.
      - Archetype Delta (The Monolith - for 2 images): 1 massive portrait image
        (cols 1-7) with typography running vertically alongside it (cols 9-12).
  - Mobile Behavior: Archetypes Alpha and Gamma use horizontal scroll-snap for
    secondary images. Beta and Delta use vertical stacking with inset images.
  - Final CTA: CTA-Monument.

6.7 OVER ONS (/over-ons/)

Narrative: Trust and technical discipline.

1.  Hero Overlap: Image cols 5-12. Text cols 1-6 overlapping bottom-left.
2.  Company Content: Centered reading column (cols 3-10). space-lg vertical
    rhythm.
3.  Technical Integrity: A 12-column wide, short horizontal image strip
    (process/workmanship) interrupting the text flow.
4.  Final CTA: CTA-Brief.

6.8 CONTACT (/contact/)

Narrative: Pure utility and conversion.

1.  Split Utility Layout:
      - Desktop: No Hero image. space-xl top padding. Left (cols 1-5): H1,
        Intro, Direct Contact Info (Phone, Email, KVK). Right (cols 7-12):
        Contact Form.
      - Mobile: 1-column stack. TEXT FIRST / FORM SECOND.

6.9 KENNISBANK (/kennisbank/)

Narrative: One continuous editorial/technical page containing 4 topics. There
are NO separate article pages.

1.  Hero: Typography only. Cols 3-10. space-xl top padding.
2.  The Index (Sticky): Desktop only. Cols 1-3 contain a sticky list of the 4
    topics. Clicking scrolls to the section.
3.  The Articles (Topic Sections):
      - Composition: Cols 5-12. Each of the 4 topics is a section within this
        single page.
      - Rhythm: Each topic starts with a 1px top border, space-lg top padding,
        H2, text, and ONE technical macro image (16:9, spanning cols 5-12).
      - Mobile: The sticky index disappears. The page becomes a standard
        vertical scroll of the 4 topic sections. Images crop to 4:3.
4.  Final CTA: CTA-Brief.

================================================== 7. NAVIGATION & FOOTER

Desktop Header (1440/1024):

  - Sppat | Badkamers | Tegelwerk | Specialisaties | Projecten | Over ons |
    Contact | [Project bespreken]
  - Clean, flat links. Space Grotesk, 14px, uppercase. Active state: 1px #1A1A1A
    underline.

Mobile Navigation (834/390):

  - Accessible modal menu. Large Space Grotesk typography. Focus trapped inside
    when open. Escape closes.

Breadcrumbs:

  - Desktop: HOME / CATEGORY / PAGE. Space Grotesk, 12px, uppercase.
  - Mobile: ← CATEGORY. Clean wrapping, no horizontal scroll.

Footer:

  - 4 Columns (Desktop), 2x2 (Tablet), 1 Column (Mobile).
  - DIENSTEN | TEGELWERK | SPPAT | CONTACT.
  - Verified business data only. No placeholders.

================================================== 8. MEDIA WORKFLOW & REQUIREMENTS

The Design Specification defines MEDIA IDs and visual requirements only.

After design approval, a separate media-selection step will match actual SPPAT
photographs to each MEDIA ID.

The developer will receive the final approved mapping: MEDIA ID → final image
file

The developer implements that mapping and does not make art-direction or
photo-selection decisions.

| Media ID      | Page           | Position       | Visual Need / Subject Category                                                       | Geometry / Composition                          | Authenticity                      | Desktop Role              | Mobile Role             |
| :------------ | :------------- | :------------- | :----------------------------------------------------------------------------------- | :---------------------------------------------- | :-------------------------------- | :------------------------ | :---------------------- |
| **HOME-01**   | Home           | Hero           | Premium completed space establishing architectural scale.                            | Wide perspective, strong depth.                 | Illustrative/reference acceptable | Edge-to-edge bleed (16:9) | Edge-to-edge (4:5)      |
| **HOME-02**   | Home           | Core Cap 1     | Complete bathroom context.                                                           | Portrait orientation, balanced composition.     | Illustrative/reference acceptable | 5-col portrait            | Edge-to-edge (4:5)      |
| **HOME-03**   | Home           | Core Cap 2     | Large tiled floor context.                                                           | Landscape or wide perspective.                  | Illustrative/reference acceptable | 6-col landscape           | Inset (4:3)             |
| **HOME-04**   | Home           | Tech Proof     | Technical precision/process detail showing alignment, measurement or joint accuracy. | Strong linear geometry, macro focus.            | Technical/process image           | 12-col horizontal strip   | Inset (16:9)            |
| **BADK-01**   | Badkamers      | Hero           | Complete A-Z bathroom renovation scope.                                              | Wide perspective.                               | Illustrative/reference acceptable | Edge-to-edge bleed (16:9) | Edge-to-edge (4:5)      |
| **BADK-02**   | Badkamers      | Tech Split     | Invisible quality (substrate, waterproofing, or concealed systems).                  | Macro or process detail.                        | Technical/process image           | 5-col portrait            | Inset (4:5)             |
| **BADK-03**   | Badkamers      | Finish Split   | Finishing precision (niche, flush plate, or edge detail).                            | Close detail, strong lighting.                  | Illustrative/reference acceptable | 5-col portrait            | Inset (4:5)             |
| **ALM-01**    | Almere         | Hero           | Local landing premium bathroom.                                                      | Medium interior.                                | Illustrative/reference acceptable | 6-col landscape           | Stacked (4:5)           |
| **TEGEL-01**  | Tegelwerk      | Hero           | Tiling scale (living floor flowing into kitchen/hall).                               | Deep perspective, focus on floor plane.         | Illustrative/reference acceptable | Edge-to-edge bleed (16:9) | Edge-to-edge (4:5)      |
| **TEGEL-02**  | Tegelwerk      | Premium A      | XXL slab installation or Natural stone detail.                                       | Close detail, material texture dominant.        | Verified SPPAT preferred          | 5-col portrait            | Inset (4:5)             |
| **TEGEL-03**  | Tegelwerk      | Premium B      | Curved mosaic wall or wood-look joint.                                               | Close detail, pattern/joint dominant.           | Illustrative/reference acceptable | 5-col portrait            | Inset (4:5)             |
| **SPEC-01**   | Specialisaties | Hero           | Intersection of two premium materials.                                               | Abstract detail, vertical intersection line.    | Illustrative/reference acceptable | Full-bleed (16:9)         | Edge-to-edge (4:5)      |
| **SPEC-02**   | Specialisaties | XXL            | Material scale and seamlessness.                                                     | Massive surface area, minimal joints.           | Illustrative/reference acceptable | Full-bleed (16:9)         | Edge-to-edge (4:5)      |
| **SPEC-03**   | Specialisaties | Mosaic         | Material precision and grid alignment.                                               | Macro detail, curved or niche application.      | Illustrative/reference acceptable | 4-col portrait            | Inset (1:1)             |
| **SPEC-04**   | Specialisaties | Stone          | Organic texture vs precise installation.                                             | Close detail showing material pores/veins.      | Illustrative/reference acceptable | Diptych (4:5)             | Horizontal scroll strip |
| **SPEC-05**   | Specialisaties | Parket         | Flatness and joint quality of long tiles.                                            | Low-angle floor perspective.                    | Illustrative/reference acceptable | 10-col landscape          | Inset (4:3)             |
| **PROJ-REAL** | Projecten      | Galleries      | Real evidence of SPPAT craftsmanship.                                                | Varies based on source material.                | Verified SPPAT required           | Archetype system          | Archetype system        |
| **ABOUT-01**  | Over Ons       | Hero           | Craftsmanship, human element, or technical planning.                                 | Process focus (e.g., hands, tools, blueprints). | Technical/process image           | Edge-to-edge bleed (16:9) | Edge-to-edge (4:5)      |
| **KB-INLINE** | Kennisbank     | Topic Sections | Close technical/material image that clearly communicates specific technical subject. | Macro detail, grid-breaking composition.        | Technical/process image           | 7-col offset landscape    | Inset (4:3)             |

================================================== 9. DEFINITION OF DONE

The implementation is complete when:

1.  Exactly 9 approved public routes exist. No individual project detail routes
    or knowledge article routes exist.
2.  The Typography system (Space Grotesk + Inter) is implemented with fluid
    scaling and correct hyphenation rules.
3.  The Spacing system (space-xs to space-xl) dictates all margins/padding. No
    arbitrary whitespace exists.
4.  Mobile (390px) utilizes edge-to-edge, inset, and horizontal scroll-snap
    behaviors as specified, rather than a generic 1-column stack.
5.  Projecten utilizes the flexible Archetype system with verified real
    photography within the single /projecten/ page.
6.  The developer has implemented the final approved MEDIA ID → final image file
    mapping without making independent photo-selection decisions.
7.  No public provenance labels, fake business data, or empty placeholders
    remain.
8.  The final build passes visual QA at 1440, 1024, 834, and 390 breakpoints.
