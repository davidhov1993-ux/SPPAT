SPPAT — FINAL KENNISBANK DESIGN SPECIFICATION — REV.2

Status: Production Ready
Scope: Kennisbank Hub (/kennisbank/) and 4 Nested Article Pages.
Design System: "The Anatomy of Precision"
Role: Senior Art Director

This specification finalizes the Kennisbank section. It translates the approved
SEO content into a premium, architectural reading experience. It strictly avoids
blog clichés (no dates, authors, tags, or reading times) and relies entirely on
typography, grid alignment, and structural whitespace to maintain the brand's
technical authority.

1. GLOBAL EDITORIAL RULES & COMPONENTS

1.1 Typography & Reading Width

To prevent "walls of text" and ensure optimal readability (60–75 characters per
line):

- Reading Column: All article body text, lists, and H2s are constrained to a
  maximum width of 8 columns on desktop (grid-column: 3 / 11).
- Vertical Rhythm:
  - margin-bottom: var(--spacing-sm) (32px) for paragraphs and list items.
  - margin-top: var(--spacing-lg) (120px Desktop / 64px Mobile) before any
    new H2 to create clear sectional pauses.
- Hyphenation: word-break: keep-all; overflow-wrap: break-word; enforced on
  all headings.

1.2 Component Reuse

- Breadcrumbs: Placed at the very top of the page content. Format: HOME /
  KENNISBANK / [ARTICLE TITLE].
- Internal Links: Contextual links to services (e.g., "complete badkamer
  renovatie") are styled as inline text links with an arrow (↗). Hover state:
  opacity 0.7, arrow translates X by 4px.
- Final CTA: Every article ends with <CtaTypeB /> (Centered, max 8 columns,
  bounded by 1px top/bottom #E5E5E5 borders, padding: var(--spacing-xl) 0).
- Business Input: Any text marked [BUSINESS INPUT REQUIRED] in the content
  source must remain hidden from the public UI until the data is supplied. Do
  not render empty gaps.

2. KENNISBANK HUB (/kennisbank/)

Concept: "The Academic Index." A high-contrast, structured entry point.

2.1 Hub Hero (Asymmetrical Split)

Because the assigned media is a portrait-oriented technical photograph, the
layout uses the Asymmetrical Split system rather than a full-bleed 16:9 overlap.
This preserves the vertical geometry of the laser line without destructive
cropping.

- Media: AEAB080F-23E5-4856-8806-039B4F1FEF85.JPG (Subject: Portrait-oriented
  beige tiled bathroom/work environment with a vertical green laser alignment
  line).
- Image Treatment: Apply the standard real-photography normalization (neutral
  white balance, controlled highlights, preserve material texture). Do not
  crop out the vertical laser line.
- Desktop (1440px): Text block (H1 + Intro) is left-aligned, spanning
  grid-column: 1 / 7. Image is right-aligned, spanning grid-column: 8 / 13.
  Image aspect ratio is strictly 4:5, object-fit: cover, object-position:
  center center.
- Tablet Landscape (1024px): Text block spans grid-column: 1 / 7. Image spans
  grid-column: 7 / 13. Aspect ratio 4:5.
- Tablet Portrait (834px) & Mobile (390px): Stacked layout. TEXT FIRST / IMAGE
  SECOND. Image aspect ratio 4:5.

2.2 Article Grid (The Index)

- Layout: 2-column strict grid. No standard UI cards, no drop shadows, no
  images.
- Desktop (1440px & 1024px): grid-template-columns: repeat(2, 1fr); gap:
  var(--spacing-md); placed within an 8 or 10-column centered wrapper to
  maintain elegance.
- Item Styling: Each of the 4 articles is a text block.
  - border-top: 1px solid #E5E5E5;
  - padding-top: var(--spacing-sm);
  - Contains the Article Title (H3) and an inline link (Lees artikel ↗).
- Tablet Portrait (834px) & Mobile (390px): Stacks to 1 column.

3. ARTICLE PAGE SYSTEM (REUSABLE TEMPLATE)

Concept: "The Editorial Reading Experience." Clean, authoritative, and visually
paced without the use of inline imagery.

3.1 Article Hero (Typography-Led)

- Layout: No hero image. This differentiates knowledge articles from
  commercial service pages.
- Desktop (1440px & 1024px): Breadcrumbs, H1, and Intro Body are centered,
  spanning grid-column: 3 / 11.
- Spacing: padding-top: var(--spacing-xl); padding-bottom: var(--spacing-lg);.

3.2 Editorial Content, Lists & Visual Pacing

Because there is no assigned inline media for the articles, the design relies
strictly on architectural typography and structural borders to prevent a
monotonous wall of text.

- Layout: Centered, grid-column: 3 / 11.
- Lists: Rendered as clean, structural indents. No decorative checkmarks.
  Standard bullet points with gap: var(--spacing-sm) between items.
- Sectional Pauses (The Visual Break): Every H2 acts as a major structural
  chapter.
  - Apply margin-top: var(--spacing-lg) to the H2.
  - Apply border-top: 1px solid #E5E5E5 directly above the H2.
  - Apply padding-top: var(--spacing-md) to the H2.
  - Result: This creates a deliberate, architectural horizontal line that
    breaks the reading flow exactly where an image would have been,
    maintaining the premium rhythm of the page.

3.3 Final CTA

- Layout: <CtaTypeB /> placed at the very bottom, immediately following the
  last paragraph.

4. ARTICLE-SPECIFIC MEDIA MAPPING

- /kennisbank/waterdichting-badkamer-kimband/ — NO ASSIGNED MEDIA
- /kennisbank/tegel-lippage-voorkomen/ — NO ASSIGNED MEDIA
- /kennisbank/onzichtbaar-luik-badkamer/ — NO ASSIGNED MEDIA
- /kennisbank/epoxyvoeg-vs-cementvoeg/ — NO ASSIGNED MEDIA

Developer Note: Do not insert placeholders, empty gray boxes, or fallback
imagery into the article bodies. Rely entirely on the typographic Sectional
Pauses defined in 3.2.

5. RESPONSIVE TRANSFORMATION RULES

The Kennisbank system must adapt flawlessly across the following breakpoints:

Desktop (~1440px)

- Grid: 12-column grid.
- Hub Hero: Asymmetrical Split. Text 1 / 7, Image 8 / 13 (Ratio 4:5).
- Article Reading Width: 8 columns (grid-column: 3 / 11).
- Article Sectional Pauses: 1px top border on all H2s.

Tablet Landscape (~1024px)

- Grid: 12-column grid maintained.
- Hub Hero: Asymmetrical Split. Text 1 / 7, Image 7 / 13 (Ratio 4:5).
- Article Reading Width: Expands to 10 columns (grid-column: 2 / 12) to
  maintain line length as the screen narrows.
- Hub Grid: Remains 2 columns.

Tablet Portrait (~834px)

- Grid: 12-column grid maintained, but content spans wider.
- Hub Hero: Stacks. TEXT FIRST / IMAGE SECOND. Image ratio 4:5, spanning full
  width of the content container.
- Article Reading Width: Becomes 100% of the content container (spanning 1
  / 13 with standard outer margins).
- Hub Grid: Collapses to 1 column.

Mobile (~390px)

- Grid: 1-column stack.
- Hub Hero: TEXT FIRST / IMAGE SECOND. Image ratio 4:5. object-fit: cover with
  object-position: center center (ensuring the vertical laser line remains
  visible).
- Breadcrumbs: Wrap cleanly to a single line: ← KENNISBANK (linking back to
  the hub) to prevent horizontal scrolling.
- Typography: H1 font size scales down via clamp() to prevent hyphenation.
- Spacing: All vertical rhythm tokens reduce to their mobile equivalents
  (e.g., --spacing-lg becomes 64px, --spacing-xl becomes 80px). Sectional
  borders on H2s remain intact to preserve pacing.
