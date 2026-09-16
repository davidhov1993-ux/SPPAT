SPPAT — FINAL DEVELOPER DESIGN & IMPLEMENTATION BLUEPRINT

STATUS: IMPLEMENTATION READY DESIGN SYSTEM: "The Anatomy of Precision" ROLE:
Senior Art Director / Visual & Experience Architect

This document is the exhaustive, single source of truth for the frontend
implementation of the consolidated SPPAT architecture. It supersedes all
previous design revisions, UX instructions, and legacy page structures.

Do not make independent architectural, UX, or visual decisions. Do not invent
content, data, or media. Implement exactly as specified below.

PAGE-BY-PAGE SPECIFICATIONS

1. HOME

1. Page purpose: Router and primary proof layer establishing premium
   positioning.
1. User objective: Understand SPPAT's quality level, choose between Badkamers
   or Tegelwerk, and see real proof of competence.
1. Exact section order: 1. Hero → 2. Core Capabilities → 3. Technical Proof
   → 4. Selected Projects → 5. Final CTA.
1. Section purpose:
   - Hero: Immediate premium positioning + clear proposition.
   - Core Capabilities: Give the visitor the simplest possible commercial
     choice (Badkamers vs. Tegelwerk).
   - Technical Proof: Demonstrate that quality comes from invisible technical
     execution.
   - Selected Projects: Quick proof + route to /projecten/.
   - Final CTA: Drive conversion.
1. Exact composition/layout:
   - Hero: Hero Overlap. Image spans 12 cols. Text block overlaps bottom-left
     (6 cols).
   - Core Capabilities: ONE compact architectural section. 2-column grid (6
     cols each). Each column contains an H2, short intro, and a 4:5 image. No
     cards, no drop shadows, no boxes.
   - Technical Proof: Typography-led intro (max 8 cols) followed by a
     centered 10-column breakout image (16:9).
   - Selected Projects: Approximately 2–3 distinct PROJECT PREVIEWS. Each
     preview must correspond to ONE verified coherent project series from
     /projecten/. The preview may use one strong hero photograph or a
     restrained 2-image composition from the same project. Projects must
     remain visually distinguishable from each other. Do NOT combine into one
     undifferentiated masonry wall.
   - Final CTA: CTA Type A (Asymmetrical split, text left, image right).
1. Content hierarchy: H1 (Proposition) → H2 (Capabilities) → H2 (Technical
   Philosophy) → H2 (Proof) → H2 (Conversion).
1. Legacy KEEP: Existing Home copy, existing high-quality Hero and Technical
   Proof imagery.
1. Legacy MERGE: N/A.
1. Legacy MOVE: N/A.
1. Legacy CONDENSE: N/A.
1. Legacy REMOVE: The old 4-service card structure. Do not include Toilet or
   Specialisaties as equal Homepage destinations.
1. Visual role:
   - Hero: Premium finished bathroom interior.
   - Capabilities: 1x Bathroom, 1x Large tiled floor.
   - Tech Proof: Macro precision detail (e.g., laser on joint).
   - Projects: Real SPPAT project photography.
1. Required aspect ratio: Hero (16:9), Capabilities (4:5), Tech Proof (16:9),
   Projects (Mixed), CTA (4:5).
1. Media category: COMMERCIAL MEDIA for Hero/Capabilities/Proof. VERIFIED SPPAT
   WORK or RETOUCHED VERIFIED SPPAT WORK for Projects.
1. Desktop composition (1440/1024): 12-column grid. Overlaps active.
1. Tablet composition (834): Core Capabilities stack or use tight 2-col.
   Projects become 2-col.
1. Mobile composition (390): 1-column stack. Hero: Text FIRST, Image SECOND
   (cropped to 4:5). Capabilities: Text FIRST, Image SECOND.
1. CTA behavior: CTA Type A.
1. Internal-link behavior: Route directly to /complete-badkamer-renovatie/,
   /tegelwerk/, /projecten/, and /contact/.
1. Business-input dependencies: Real project photography for the Selected
   Projects section. Do NOT invent project metadata.
1. Implementation notes: Ensure 1px structural lines separate major sections
   where appropriate.

1. BADKAMERS (/complete-badkamer-renovatie/)

1. Page purpose: Comprehensive A–Z commercial page for complete sanitary
   renovations.
1. User objective: Understand that SPPAT handles the entire complex process
   from demolition to final kitrand.
1. Exact section order: 1. Hero → 2. Intro/Process → 3. Technical Construction
   → 4. Details & Finishing (includes Toilet renovation) → 5. FAQ/Decision
   Support → 6. Final CTA.
1. Section purpose: Prove A-Z capability without becoming an encyclopedia.
1. Exact composition/layout:
   - Hero: Hero Overlap.
   - Intro/Process: Typography-led, max 8 cols centered. Structural
     numbered/bulleted list with 1px top borders separating items. No
     injected images.
   - Technical Construction: Asymmetrical Split. Text left (6 cols), Image
     right (5 cols).
   - Details & Finishing: Asymmetrical Split (Reversed). Image left (5 cols),
     Text right (6 cols). Toilet renovation is integrated here as a compact
     capability subsection. Do NOT create another internal mini-page or large
     standalone Toilet block.
   - FAQ: Typography-led, max 8 cols.
   - Final CTA: CTA Type A.
1. Content hierarchy: H1 → H2 (Process) → H2 (Construction) → H2
   (Finishing/Toilet) → H2 (Costs/FAQ) → H2 (Conversion).
1. Legacy KEEP: Core propositions, process lists. Existing pricing information
   may be retained as SOURCE MATERIAL only.
1. Legacy MERGE: Integrate /complete-toilet-renovatie/ content naturally into
   Details & Finishing.
1. Legacy MOVE: N/A.
1. Legacy CONDENSE: Toilet renovation pitch.
1. Legacy REMOVE: Standalone toilet commercial pitches and redundant technical
   deep-dives (move to Kennisbank).
1. Visual role:
   - Hero: Wide complete bathroom.
   - Tech Construction: Waterproofing/Geberit macro.
   - Finishing: Niche/Toilet macro.
1. Required aspect ratio: Hero (16:9), Splits (4:5), CTA (4:5).
1. Media category: COMMERCIAL MEDIA.
1. Desktop composition (1440/1024): Asymmetrical splits active.
1. Tablet composition (834): Splits stack IMAGE FIRST / TEXT SECOND.
1. Mobile composition (390): 1-column stack. Splits: IMAGE FIRST / TEXT SECOND
   (visual context must precede technical explanation). Process: Typography
   stack.
1. CTA behavior: CTA Type A.
1. Internal-link behavior: Contextual links to Tegelwerk (for tile-specifics)
   and Contact.
1. Business-input dependencies: Duration, fixed prices, material supply
   conditions. UNVERIFIED PRICING MUST NOT BE PUBLISHED.
1. Implementation notes: Use space-md between process list items, separated
   by 1px #E5E5E5 borders.

1. TEGELWERK (/tegelwerk/)

1. Page purpose: One comprehensive tiling page consolidating all applications
   and specializations.
1. User objective: Verify SPPAT can handle complex materials and critical
   environments.
1. Exact section order: 1. Hero → 2. Intro/Preparation → 3. Applications → 4.
   Premium/Specialist Capabilities → 5. Final CTA.
1. Section purpose: Fast scanning of basic applications, deep visual proof for
   premium materials.
1. Exact composition/layout:
   - Hero: Hero Overlap.
   - Intro/Prep: Typography-led, max 8 cols centered.
   - Applications: Typography-led architectural grid (2 columns). 1px top
     borders per item. NO dedicated images.
   - Premium/Specialist: TWO major visual compositions:
     - PREMIUM COMPOSITION A: Asymmetrical Split. Primary visual evidence:
       XXL / Grootformaat. Within the accompanying content hierarchy,
       include Natural Stone where relevant as a material/technical
       capability.
     - PREMIUM COMPOSITION B: Asymmetrical Split (Reversed). Primary visual
       evidence: Mosaic / precision detail. Within the accompanying content
       hierarchy, include Ceramic Parquet / Wood-look as another specialist
       capability.
   - Final CTA: CTA Type B (Typography only, centered, bordered).
1. Content hierarchy: H1 → H2 (Prep) → H2 (Applications) → H2 (Premium A: XXL &
   Stone) → H2 (Premium B: Mosaic & Wood-look) → H2 (Conversion). All four
   capabilities must remain clearly discoverable in typography.
1. Legacy KEEP: Core propositions. Existing pricing information as SOURCE
   MATERIAL only.
1. Legacy MERGE: XXL, Mosaic, Natural Stone, Wood-look into the Premium
   section.
1. Legacy MOVE: N/A.
1. Legacy CONDENSE: Floors, Walls, Kitchens, Balconies into short typographic
   blocks in the Applications section.
1. Legacy REMOVE: 5 separate application pages, 4 separate specialization
   pages, Specialisaties Hub.
1. Visual role:
   - Hero: Large tiled living floor.
   - Premium A: XXL joint/scale.
   - Premium B: Mosaic/precision detail.
1. Required aspect ratio: Hero (16:9), Premium Splits (4:5).
1. Media category: COMMERCIAL MEDIA. For XXL, use the 1.5x3m slab photo
   (REFERENCE / UNVERIFIED REAL MEDIA until proven, then RETOUCHED VERIFIED
   SPPAT WORK).
1. Desktop composition (1440/1024): Applications in 2-col grid. Premium in
   asymmetrical splits.
1. Tablet composition (834): Applications 1-col or tight 2-col. Premium splits
   stack IMAGE FIRST.
1. Mobile composition (390): 1-column stack. Applications: List vertically.
   Premium Splits: IMAGE FIRST / TEXT SECOND.
1. CTA behavior: CTA Type B. NO CTA IMAGE.
1. Internal-link behavior: Link to Badkamers and Contact.
1. Business-input dependencies: Maximum XXL format, specific stone systems,
   epoxy standards. UNVERIFIED PRICING MUST NOT BE PUBLISHED.
1. Implementation notes: Do not turn the Applications section into a
   service-card catalogue. It must be strictly typographic. Do not force
   Natural Stone or Wood-look to have dedicated imagery.

1. PROJECTEN (/projecten/)

1. Page purpose: The evidence layer. Driven entirely by real photography.
1. User objective: See undeniable proof of craftsmanship and architectural
   taste.
1. Exact section order: 1. Typography Intro → 2. Project Series Galleries → 3.
   Final CTA.
1. Section purpose: Editorial architectural case presentation.
1. Exact composition/layout:
   - Intro: Max 8 cols centered. space-xl top padding.
   - Project Series: Asymmetrical masonry galleries grouped by project. Mixed
     aspect ratios based on source. 1px divider between distinct projects.
   - Final CTA: CTA Type B.
1. Content hierarchy: H1 → Project Title (if verified) → H2 (Conversion).
1. Legacy KEEP: Existing real project photography.
1. Legacy MERGE: N/A.
1. Legacy MOVE: N/A.
1. Legacy CONDENSE: N/A.
1. Legacy REMOVE: Fake filters (Alle/Badkamers/Tegelwerk), tags, categories,
   and fake metadata.
1. Visual role: Real project photos grouped logically.
1. Required aspect ratio: Mixed (preserve original strong crops, do not force
   identical cards).
1. Media category: VERIFIED SPPAT WORK or RETOUCHED VERIFIED SPPAT WORK ONLY.
1. Desktop composition (1440/1024): Masonry grids utilize 12 columns.
1. Tablet composition (834): Grids reduce to 2 columns.
1. Mobile composition (390): 1-column stack. Preserve editorial photographic
   rhythm.
1. CTA behavior: CTA Type B.
1. Internal-link behavior: A project may link to Badkamers or Tegelwerk ONLY
   when that relationship is explicitly verified in the supplied project data.
   If not verified, DO NOT create a service link. The developer must never
   infer project classification from photographs.
1. Business-input dependencies: Real project assets. If metadata (location,
   scope) is missing, omit it cleanly. Do not render placeholders.

1. OVER ONS (/over-ons/)

1. Page purpose: Compact trust and technical discipline page.
1. User objective: Understand SPPAT's ethos ("focus on the invisible").
1. Exact section order: 1. Hero / Workmanship Visual → 2. Concise Company /
   Approach Content → 3. Technical Integrity / Working Principles → 4. Final
   CTA.
1. Section purpose: Build credibility through working methods, not fabricated
   history.
1. Exact composition/layout:
   - Hero: Hero Overlap.
   - Content: Typography-led, max 8 cols centered. space-lg vertical rhythm.
   - Final CTA: CTA Type B.
1. Content hierarchy: H1 → H2 (Approach) → H2 (Principles) → H2 (Conversion).
1. Legacy KEEP: Existing Over Ons copy.
1. Legacy MERGE: N/A.
1. Legacy MOVE: N/A.
1. Legacy CONDENSE: N/A.
1. Legacy REMOVE: Empty galleries, placeholder team sections, fabricated
   history.
1. Visual role: Strong workmanship visual (e.g., hands with a spirit level).
1. Required aspect ratio: Hero (16:9).
1. Media category: COMMERCIAL MEDIA.
1. Desktop composition (1440/1024): Standard overlap and centered reading
   column.
1. Tablet composition (834): Standard scaling.
1. Mobile composition (390): 1-column stack. Hero: Text FIRST, Image SECOND.
1. CTA behavior: CTA Type B.
1. Internal-link behavior: Link to Contact.
1. Business-input dependencies: Years of experience, team size (if provided).
1. Implementation notes: Keep it compact. No decorative gallery required.

1. CONTACT (/contact/)

1. Page purpose: Simple project-intake utility.
1. User objective: Frictionless lead capture.
1. Exact section order: 1. Direct Info & Form.
1. Section purpose: Conversion.
1. Exact composition/layout:
   - Desktop: 12-column grid. space-xl top padding. NO Hero image.
   - If business details exist: Left (cols 1-5): H1, Intro, Direct Info.
     Right (cols 7-12): Contact Form.
   - If business details are missing: Left (cols 1-5): H1, Intro. Right
     (cols 7-12): Contact Form.
1. Content hierarchy: H1 → Intro → Form.
1. Legacy KEEP: Existing form structure and contact copy.
1. Legacy MERGE: N/A.
1. Legacy MOVE: N/A.
1. Legacy CONDENSE: N/A.
1. Legacy REMOVE: Hero images, fake maps, fake office photos, fake "TBD"
   placeholders.
1. Visual role: NONE.
1. Required aspect ratio: N/A.
1. Media category: N/A.
1. Desktop composition (1440/1024): Side-by-side split.
1. Tablet composition (834): Stacks TEXT/INTRO FIRST / FORM SECOND.
1. Mobile composition (390): 1-column stack. TEXT/INTRO FIRST / FORM SECOND.
1. CTA behavior: The form itself is the CTA. No additional component.
1. Internal-link behavior: N/A.
1. Business-input dependencies: Phone, Email, KvK, BTW, Address, Form Endpoint.
   Privacy/legal wording is a BUSINESS / LEGAL INPUT GATE.
1. Implementation notes: The page must look intentional and balanced even if
   business data is unavailable. Do not render empty icons. The form must
   support a concise consent statement without requiring a privacy-page
   hyperlink. If final public legal wording is not approved, mark internally
   [BUSINESS / LEGAL INPUT REQUIRED] and do not expose it publicly. Do NOT
   invent a Privacy Policy route.

1. ALMERE LOCAL LANDING (/complete-badkamer-renovatie/almere/)

1. Page purpose: Supporting local organic landing page.
1. User objective: Verify local relevance + national capability.
1. Exact section order: Mirrors the Badkamers page structure but condensed.
1. Section purpose: SEO capture without duplicating the entire site
   architecture.
1. Exact composition/layout: Hero Overlap → Typography Intro → Technical Split
   → CTA Type A.
1. Content hierarchy: H1 → H2 → H2 → CTA.
1. Legacy KEEP: Existing Almere copy is SOURCE MATERIAL. Preserve useful
   generic content where compatible.
1. Legacy MERGE: N/A.
1. Legacy MOVE: N/A.
1. Legacy CONDENSE: N/A.
1. Legacy REMOVE: Claims of "Almere only" focus.
1. Visual role: Premium bathroom visual.
1. Required aspect ratio: Hero (16:9), Split (4:5), CTA (4:5).
1. Media category: COMMERCIAL MEDIA.
1. Desktop/Tablet/Mobile composition: Same as Badkamers.
1. CTA behavior: CTA Type A.
1. Internal-link behavior: Link to Contact.
1. Business-input dependencies: Any factual local claim requires verification
   before publication (local project history, neighborhoods served, local
   experience, etc.). Do NOT invent or preserve unsupported local claims merely
   because they exist in legacy copy. UNVERIFIED PRICING MUST NOT BE PUBLISHED.
1. Implementation notes: Treat as a supporting page, not a primary navigation
   hub. SPPAT serves the Netherlands; Almere is a supporting local SEO focus.

1. KENNISBANK (/kennisbank/ & Articles)

1. Page purpose: Supporting editorial / technical layer.
1. User objective: Deep dive into technical construction choices.
1. Exact section order: Hub → Articles.
1. Section purpose: Education and trust building.
1. Exact composition/layout:
   - Hub: Asymmetrical split. Text (cols 1-7), Image (cols 8-13, 4:5 ratio).
   - Articles: Typography only. Max 8 cols. H2s act as visual breaks
     (border-top: 1px solid #E5E5E5, margin-top: space-lg). NO inline media.
1. Content hierarchy: H1 → H2s.
1. Legacy KEEP: Existing approved visual language and technical copy.
1. Legacy MERGE: N/A.
1. Legacy MOVE: N/A.
1. Legacy CONDENSE: N/A.
1. Legacy REMOVE: N/A.
1. Visual role: Hub: Technical precision / laser alignment visual.
1. Required aspect ratio: Hub Image (4:5).
1. Media category: EXISTING MEDIA — PROVENANCE TO BE VERIFIED. Do not make an
   authorship claim.
1. Desktop/Tablet/Mobile composition: Standard typography scaling.
1. CTA behavior: CTA Type B.
1. Internal-link behavior: Link back to relevant commercial parent page
   (/complete-badkamer-renovatie/ or /tegelwerk/).
1. Business-input dependencies: N/A.
1. Implementation notes: Do not turn Kennisbank into another service-navigation
   system.

APPENDICES

A. FINAL SITEMAP

Main Commercial Navigation:

- / (Home)
- /complete-badkamer-renovatie/ (Nav label: Badkamers)
- /tegelwerk/
- /projecten/
- /over-ons/
- /contact/

Supporting (Excluded from main header nav):

- /complete-badkamer-renovatie/almere/
- /kennisbank/
  - /kennisbank/waterdichting-badkamer-kimband/
  - /kennisbank/tegel-lippage-voorkomen/
  - /kennisbank/onzichtbaar-luik-badkamer/
  - /kennisbank/epoxyvoeg-vs-cementvoeg/

B. COMPLETE LEGACY → NEW MIGRATION MAP

- /complete-toilet-renovatie/ → MERGED into /complete-badkamer-renovatie/
- /tegelwerk/vloer-tegelen/ → CONDENSED into /tegelwerk/ (Applications)
- /tegelwerk/wand-tegelen/ → CONDENSED into /tegelwerk/ (Applications)
- /tegelwerk/keuken-tegelen/ → CONDENSED into /tegelwerk/ (Applications)
- /tegelwerk/balkon-tegelen/ → CONDENSED into /tegelwerk/ (Applications)
- /tegelwerk/badkamer-tegelen/ → CONDENSED into /tegelwerk/ (Applications)
- /specialisaties/ (Hub) → REMOVED
- /specialisaties/grootformaat-tegels/ → MERGED into /tegelwerk/ (Premium A)
- /specialisaties/mozaiek-zetten/ → MERGED into /tegelwerk/ (Premium B)
- /specialisaties/natuursteen/ → MERGED into /tegelwerk/ (Premium A)
- /specialisaties/keramisch-parket/ → MERGED into /tegelwerk/ (Premium B)

C. COMPONENTS TO KEEP

- Hero Overlap System
- Asymmetrical Splits (6/5 cols)
- 1px Structural Lines (#E5E5E5)
- Typography System
- Spacing Tokens (space-xs to space-xl)
- Breadcrumbs

D. COMPONENTS TO MODIFY

- Header/Navigation: Flatten to the 5 core links + CTA. Remove complex
  dropdowns.
- Footer: Consolidate to match the new 6-page architecture. Remove 15+ legacy
  links.
- Cards: Replace generic service cards with Typographic Architectural Grids
  (1px top borders, no boxes).

E. COMPONENTS / PATTERNS TO RETIRE

- 50/50 mechanical zigzag sections.
- Generic service cards with drop shadows.
- "01/02/03" numbered layout templates for every service.
- Public provenance labels ("AI", "Referentiebeeld").
- Permanently visible "Naar hoofdinhoud" skip links. (NOTE: A skip-to-content
  link must remain available for keyboard users and become visible on focus.
  Do not degrade accessibility).
- Project filters (Alle/Badkamers/Tegelwerk).

F. FINAL MEDIA SLOT INVENTORY

Do NOT invent filenames. A separate repository-level media mapping will be
performed after this blueprint.

| Page           | Section           | Visual Role                        | Required Composition | Preferred Media Source | Provenance Requirement                                                                             |
| :------------- | :---------------- | :--------------------------------- | :------------------- | :--------------------- | :------------------------------------------------------------------------------------------------- |
| **Home**       | Hero              | Premium finished bathroom interior | 16:9                 | Existing               | COMMERCIAL MEDIA                                                                                   |
| **Home**       | Core Cap 1        | Bathroom                           | 4:5                  | Existing               | COMMERCIAL MEDIA                                                                                   |
| **Home**       | Core Cap 2        | Tiled floor                        | 4:5                  | Existing               | COMMERCIAL MEDIA                                                                                   |
| **Home**       | Tech Proof        | Macro precision detail             | 16:9                 | Existing               | COMMERCIAL MEDIA                                                                                   |
| **Home**       | Selected Projects | Real work previews                 | Mixed                | Real SPPAT             | VERIFIED SPPAT WORK                                                                                |
| **Home**       | CTA A             | Contextual                         | 4:5                  | Existing               | COMMERCIAL MEDIA                                                                                   |
| **Badkamers**  | Hero              | Wide complete bathroom             | 16:9                 | Existing               | COMMERCIAL MEDIA                                                                                   |
| **Badkamers**  | Tech Split        | Waterproofing/Geberit macro        | 4:5                  | Existing               | COMMERCIAL MEDIA                                                                                   |
| **Badkamers**  | Finish Split      | Niche/Toilet macro                 | 4:5                  | Existing               | COMMERCIAL MEDIA                                                                                   |
| **Badkamers**  | CTA A             | Contextual                         | 4:5                  | Existing               | COMMERCIAL MEDIA                                                                                   |
| **Tegelwerk**  | Hero              | Large tiled living floor           | 16:9                 | Existing               | COMMERCIAL MEDIA                                                                                   |
| **Tegelwerk**  | Premium A         | XXL joint/scale                    | 4:5                  | 1.5x3m slab photo      | REFERENCE / UNVERIFIED REAL MEDIA (Gate: Must be verified to become RETOUCHED VERIFIED SPPAT WORK) |
| **Tegelwerk**  | Premium B         | Mosaic/precision detail            | 4:5                  | Existing               | COMMERCIAL MEDIA                                                                                   |
| **Projecten**  | Masonry Grid      | Real work series                   | Mixed                | Real SPPAT             | VERIFIED SPPAT WORK                                                                                |
| **Over Ons**   | Hero              | Workmanship (hands/level)          | 16:9                 | Existing               | COMMERCIAL MEDIA                                                                                   |
| **Kennisbank** | Hub               | Tech precision / laser alignment   | 4:5                  | Existing (Green Laser) | EXISTING MEDIA — PROVENANCE TO BE VERIFIED                                                         |

G. MEDIA PROVENANCE CATEGORIES & REAL PROJECT RULES

Do not assume every real/reference photograph is verified SPPAT work. Do NOT
infer provenance from filename, folder, visual appearance, or metadata
assumptions. Use these exact internal media categories:

- A. VERIFIED SPPAT WORK: Confirmed as actual SPPAT work. May be used as
  project/workmanship evidence.
- B. COMMERCIAL MEDIA: Generated or curated commercial imagery. May be used on
  commercial pages. Must never be presented as completed SPPAT work.
- C. REFERENCE / UNVERIFIED REAL MEDIA: Real photography whose provenance has
  not yet been confirmed. May NOT be presented publicly as completed SPPAT
  work until verified.
- D. RETOUCHED VERIFIED SPPAT WORK: Verified SPPAT photography professionally
  corrected without falsifying the actual installation.

Projecten & Home Selected Projects Rules:

- Use ONLY Category A or D.
- Group photographs into coherent project/object series.
- Do NOT force identical cards.
- Do NOT invent metadata (names, locations, dates). If missing, omit cleanly.

H. CTA MATRIX

- CTA TYPE A (Commercial / Contextual): Asymmetrical composition. Text left,
  contextual image right (4:5).
  - Used on: Home, Badkamers, Almere.
- CTA TYPE B (Typography Only): Centered/restrained editorial composition.
  Max 8 cols. 1px top/bottom borders. No image.
  - Used on: Tegelwerk, Projecten, Over Ons, Kennisbank.
- CONTACT: Uses its own form-based conversion composition.

I. RESPONSIVE ACCEPTANCE MATRIX

- 1440px / 1024px: 12-col grid. Max reading width 7-8 cols. Overlaps active.
  Asymmetrical splits active.
- 834px (Tablet): Splits stack IMAGE FIRST / TEXT SECOND (except abstract
  intros). Masonry becomes 2-col.
- 390px (Mobile): 1-col stack. No horizontal overflow. Intentional image crops
  (4:5) using object-position to protect subjects.
  - Home Hero: Text FIRST, Image SECOND.
  - Technical Intro/Proof: Text FIRST, Image SECOND.
  - Service Technical Splits: Image FIRST, Text SECOND. (Visual context must
    materially help comprehension).
  - Process Lists: Typography stack. No injected images.
  - Contact: Intro FIRST, Form SECOND.
  - CTA Type A: Text FIRST, Image SECOND.

J. NAVIGATION SPECIFICATION

- Desktop: Badkamers | Tegelwerk | Projecten | Over ons | Contact | [Project
  bespreken]
- Mobile: Accessible modal. Focus trapped. Escape to close. No complex
  dropdowns.

K. FOOTER SPECIFICATION

- Restrained footer aligned with the compact architecture.
- Primary/supporting destinations only.
- Verified business data only.
- NO placeholders for missing KvK, BTW, or Privacy Policy. Do not invent legal
  routes.

L. CONTENT CONSOLIDATION MATRIX

- KEEP: Core propositions, technical proof, decision support, process lists.
- MERGE: Toilet into Badkamers. Specialisaties into Tegelwerk.
- CONDENSE: Basic applications (Floors, Walls, Kitchens, Balconies) into
  typography-led lists on Tegelwerk.
- REMOVE: Duplicate explanations, filler text, fake statistics, standalone
  application/specialization pages.

M. IMPLEMENTATION ORDER

- PHASE 1 — AUDIT / PRESERVE: Inspect existing components, design tokens,
  current CSS. Identify reusable page structures and existing media usage.
- PHASE 2 — ARCHITECTURE CONSOLIDATION: Navigation, footer, routes/page
  consolidation. Remove obsolete commercial hierarchy from the UX.
- PHASE 3 — PAGE IMPLEMENTATION: Home, Badkamers, Tegelwerk, Projecten, Over
  Ons, Contact.
- PHASE 4 — SUPPORTING PAGES: Almere, Kennisbank.
- PHASE 5 — MEDIA MAPPING / CONTENT GATES: Map approved existing assets,
  verify provenance, integrate real project series, verify business-dependent
  content.
- PHASE 6 — QA: Responsive, navigation, media, content, build, accessibility,
  broken routes/assets. (Modify global CSS/tokens ONLY where the approved
  composition actually requires it. Do NOT refactor the design system for
  cleanliness).

N. DEVELOPER DO-NOT-TOUCH LIST

- Do NOT redesign the brand or visual identity.
- Do NOT invent new URLs or alter the SEO strategy.
- Do NOT write new Dutch copy.
- Do NOT mass-generate imagery to fill space.
- Do NOT replace working media without reason.
- Do NOT restore obsolete hubs or service taxonomies.
- Do NOT infer project classification from photographs.

O. BUSINESS / LEGAL INPUT GATES

If the following are missing, omit them from the UI entirely. Do NOT render
placeholders, "TBD", or empty icons. Internal markers must NEVER appear in the
public UI.

- [BUSINESS INPUT REQUIRED] text blocks.
- Phone, Email, Address, KvK, BTW.
- Form Endpoint.
- Privacy/Legal Wording: The form must support a concise consent statement
  without requiring a privacy-page hyperlink. Final public legal wording must
  be explicitly approved. If not approved, mark internally [BUSINESS / LEGAL
  INPUT REQUIRED]. Do NOT invent a Privacy Policy route.
- Project metadata (names, locations, budgets).
- Pricing: UNVERIFIED PRICING MUST NOT BE PUBLISHED.
- Almere Claims: Any factual local claim requires verification before
  publication.

P. DEFINITION OF DONE

- All routes render without errors.
- Architecture matches Section A exactly (6 primary destinations).
- No floating content or arbitrary whitespace.
- Responsive matrix (1440, 1024, 834, 390) passes visual QA and explicit
  stacking rules.
- No public provenance labels exist.
- No fake business or project data exists.
- Build passes (npm run build) with no missing assets.
- Every public Projecten image has verified provenance.
- Every Home Selected Project belongs to one verified project series.
- No reference/unverified media is presented as SPPAT work.
- No unverified pricing is public.
- No unverified Almere factual claim is public.
- No unapproved legal/privacy wording is public.
- Toilet exists only inside Badkamers.
- All four Tegelwerk specialist capabilities remain discoverable without
  creating four repetitive service sections.
- Existing design components/tokens are reused wherever suitable.
- No unnecessary global CSS refactor was performed.
- Keyboard accessibility, including skip-to-content behavior, remains
  functional.
