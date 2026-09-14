# SPPAT — Technical Architecture, Product Quality and Delivery Audit

**Audience:** Technical Lead, Project Manager, Product Owner and implementation team  
**Audit date:** 12 September 2026  
**Repository:** `/Users/david/projects/web/SPPAT`  
**Audited HEAD:** `fc47074` — `Hotfix: Redesign Heroes to Architectural Overlap layout`  
**Assessment:** **NO-GO for a production lead-generation launch; suitable for a controlled stakeholder preview.**

## 1. Executive assessment

SPPAT is a Dutch-language marketing website for bathroom renovation, toilet renovation and specialist tile installation. The implementation contains 23 content routes, static prerendering, responsive React templates, shared navigation and a contact interface. It has a coherent visual direction, a small runtime dependency surface and substantial approved editorial content.

The central business workflow is incomplete. Visitors are repeatedly directed to `/contact/`, but its submit button is disabled because no delivery endpoint is configured. No phone number or email address is published as a fallback. More importantly, populating the endpoint setting would not implement delivery: the handler logs the payload and simulates a successful submission after 1.5 seconds without making a network request. This is a latent silent-lead-loss defect.

The release pipeline currently accepts a build that fails the repository's content-verification script. An extended diagnostic run found four failed assertions: three missing contextual anchors on `/tegelwerk/` and a missing approved section heading on `/specialisaties/`. The deployment workflow runs neither verification nor lint.

Browser inspection confirmed a tablet layout failure on the specializations hub, very large blank hero areas on all five tilework service pages, raw Markdown visible on the Almere landing page, and incorrect mobile dialog focus behavior. CSS spacing variables are defined only within a mobile media query but used outside it. The site also has unresolved business identity, privacy content, portfolio authenticity and production-domain decisions.

The recommended delivery approach is to stabilize the existing architecture and complete the operational conversion path. A framework migration is not justified by the evidence. Static hosting remains appropriate for this content footprint, provided form processing is supplied by a separately operated endpoint or suitable service.

| Dimension | Assessment | Explanation |
|---|---|---|
| Business conversion | Blocked | Disabled form; no contact fallback; simulated submission handler |
| Content coverage | Substantial, incomplete acceptance | 23 routes; four verification failures; Almere source drift |
| Buildability | Passing locally | TypeScript compilation, Vite build and prerender succeed |
| Maintainability | Moderate risk | Broad optional content types, positional section access, duplicated CTA implementations, CSS overrides |
| Responsive quality | Failing in a confirmed breakpoint range | Specialization rows collapse at tablet widths |
| Accessibility | Remediation required | Dialog focus, hidden focusable CTA and accent text contrast defects |
| Search readiness | Partial | Static metadata exists; sitemap and structured data absent; production origin unverified |
| Security assurance | Incomplete | Small current server attack surface; dependency advisory audit could not complete |
| Operations | Incomplete | No lead delivery monitoring, application telemetry, documented rollback or operational ownership |
| Production readiness | No-go | Core conversion and release acceptance gates remain unresolved |

These are qualitative assessments, not invented numerical maturity scores or measured conversion rates.

## 2. Scope, method and confidence

### 2.1 What was inspected

- Application bootstrap and route dispatch, all 13 page-template files, shared components and content types.
- `pages.json`, business configuration, the current implementation specification, earlier specification and design/content instructions.
- Both global CSS files, TypeScript and ESLint configuration, package manifest and lockfile.
- Prerendering, content extraction, content verification and GitHub Pages deployment workflow.
- Newly generated production HTML for all 23 approved routes and `404.html`.
- Asset existence, internal route targets, metadata, H1 counts, content presence, FAQ presence and contextual link presence.
- Browser DOM geometry for all 23 production-preview routes at 390, 834 and 1440 CSS pixels: **69 route/width checks**.
- Selected visual and interaction checks: desktop homepage, tablet specializations hub, mobile contact form, menu opening, native FAQ disclosure, unknown route handling, narrow 320px homepage and service hero behavior.
- Regeneration of the Markdown-derived content into temporary files to compare against the committed JSON without overwriting application content.

### 2.2 What the audit does not establish

Production hosting, DNS ownership, TLS configuration, production HTTP status codes, cache headers, search indexing, Search Console, real traffic, conversion performance, field Core Web Vitals, email delivery and any private business systems were not verified. The canonical domain `https://sppat.nl` is embedded in source, but an external retrieval attempt did not succeed; that does not establish domain downtime.

`npm audit` could not reach the npm registry because DNS/network access failed. Dependency vulnerability status is **unknown**, not clean. No authenticated security assessment or penetration test was performed. No real lead, uploaded customer file or outbound message was submitted.

The browser sweep used the available in-app browser. It is not a Safari/Firefox/Android/iOS compatibility certification. The sweep verifies coarse geometry and rendering, not every visual state, screen-reader announcement, zoom level or language-specific line-break case. No Lighthouse score, CrUX data, LCP, INP or CLS measurement is claimed.

### 2.3 Evidence classifications

- **Confirmed:** directly observed in repository source, generated artifacts or browser state.
- **Conditional defect:** implementation is demonstrably incorrect when a currently disabled or future path is activated.
- **Risk:** plausible failure supported by architecture, but not reproduced as a current incident.
- **Unverified:** external state or specialist validation was unavailable.

Source paths below are relative to the audited repository root. The accompanying `route-audit.json` contains per-route evidence and asset measurements. Existing untracked user media was preserved; application code was not changed by this audit.

## 3. Architecture and execution model

### 3.1 Technology inventory

| Technology | Locked version | Role |
|---|---:|---|
| React | 19.2.8 | Component rendering and interactive state |
| React DOM | 19.2.8 | Browser hydration and server rendering |
| TypeScript | 6.0.3 | Static compilation checks |
| Vite | 8.2.2 | Development server and production bundling |
| ESLint | 10.10.0 | Static lint checks |
| vite-plugin-image-optimizer | 2.0.3 | Build-time image optimization |
| sharp | 0.35.4 | Native image processing dependency |
| Node.js used for audit | 22.18.0 | Local build and scripts |
| GitHub Actions Node setting | 22 | CI runtime major version |

There are only two direct runtime dependencies: React and React DOM. The lockfile contains 237 package entries including its root entry; this is not a count of vulnerabilities or necessarily the number installed on one platform.

`package.json` still identifies the package as `almere`, version `0.0.0`, and declares it private. The name/version do not affect browser functionality, but they do not provide useful release identity.

### 3.2 Build and request flow

```text
SPPAT_IMPLEMENTATION.md
    └─ optional/manual Python extraction ─► src/content/pages.json
                                                │
React templates + business-input.json + CSS ──────┤
                                                ▼
                     tsc -b → vite build → prerender.mjs
                                                │
                            23 HTML routes + 404.html
                            one JS bundle + one CSS bundle
                            copied/optimized public assets
                                                │
                                     GitHub Pages artifact
                                                │
                         browser loads prerendered route HTML
                                                │
                     hydrateRoot if route marker matches
                     createRoot if marker missing/mismatched
```

The application is best described as a **statically prerendered React site with document navigation**. It does not implement a client-side router. Ordinary anchor navigation loads a new document. `App` resolves `window.location.pathname`, normalizes a trailing slash and selects a page from a JSON array.

`scripts/prerender.mjs` loads the React app through Vite's SSR module loader and uses `renderToString` once per page. This is build-time server rendering, not a continuously running SSR production server. Each output document has a `data-route` marker. `src/main.tsx` hydrates when this marker matches the normalized current route; otherwise it renders client-side.

### 3.3 Architectural strengths

1. Content and primary navigation are available in generated HTML before JavaScript executes.
2. React's normal string rendering provides escaping; no `dangerouslySetInnerHTML` or `eval` was found in application source.
3. Document navigation keeps routing operationally simple and avoids client router lifecycle complexity.
4. Static hosting reduces server operations for the content layer.
5. Route normalization and a custom 404 view exist.
6. Common header, footer, hero and CTA primitives reduce some duplication.
7. Image compression is integrated into the build, rather than relying solely on manual preparation.
8. The repository already has meaningful editorial acceptance checks that can become a release gate.

### 3.4 Architectural weaknesses

**All-route payload:** `App.tsx` statically imports every template and the complete content JSON. The browser receives content for all 23 routes, although it displays only one. This is acceptable at small scale but weakens payload isolation and makes every copy change invalidate the common script.

**Broad optional schema:** `Block` mixes heroes, cards, content sections, links and CTA variants in one type with many optional properties. `pageData as Page[]` asserts a shape rather than validating it. Incorrect JSON can reach rendering without runtime schema validation.

**Strict checking not enabled:** the effective TypeScript configuration has no enabled `strict`, `strictNullChecks` or `noImplicitAny`. Compilation passing therefore does not establish null-safe content access. The meaning of `strict` is documented by [TypeScript](https://www.typescriptlang.org/tsconfig/strict.html).

**Positional coupling:** several templates access `sections[0]`, `[1]` and `[2]`. The bathroom process renders fixed bullet positions through index 6. Content ordering is effectively an undocumented API: adding, removing or moving a section can silently alter rendering or suppress content.

**String-dependent selection:** the tilework hub selects sections using exact Dutch H2 strings before falling back to array positions. Editorial changes can affect code behavior.

**Redundant template paths:** `CommercialPage` remains imported, but current approved bathroom routes are handled by earlier, more specific branches. No current approved page reaches its generic fallback. Confirm whether it is retained intentionally for future variants.

**Duplicated component identities:** `CtaSection.tsx` exports `CtaTypeA` and `CtaTypeB`, while separate `CtaTypeA.tsx` and `CtaTypeB.tsx` files implement different APIs and layouts. This increases reviewer ambiguity and styling cross-effects.

**Unsupported-route behavior:** if a new page is added to JSON without a matching render branch, it can receive valid metadata while `renderPage` returns `null`. Add exhaustive route/template validation at build time.

### 3.5 Recommended target architecture

Retain static rendering. Introduce a validated content model with explicit page-template identifiers, section discriminants and stable IDs. Make the canonical origin a single validated setting. Derive routing, prerender paths, sitemap and metadata from one route manifest.

Consolidate CTA variants under one explicit API. Extract sticky-CTA visibility into one hook, preferably using an observer rather than repeated scroll geometry work. Keep public configuration minimal; keep editorial review notes outside modules imported by the browser. Introduce route-level payload separation only after measurement demonstrates the benefit relative to implementation complexity.

## 4. Product structure and user journeys

The information architecture has seven functional groups: homepage; bathroom and toilet services; tilework hub and five service pages; specializations hub and four specialty pages; knowledge hub and four articles; portfolio; and company/contact pages.

### 4.1 Primary conversion journey

```text
Search / direct / referral
  → service, location or knowledge page
  → explanatory content and imagery
  → repeated “Project bespreken” CTA
  → contact form
  → BLOCKED: submit disabled, no alternate direct contact
```

This means the site can create interest but cannot currently complete its intended acquisition workflow. No claim about the amount of lost revenue can be made without traffic and funnel data.

### 4.2 Secondary trust journey

Visitors can navigate from service pages to `/projecten/`. The portfolio array is empty, so the page renders an intentional documentation-in-preparation state. Filters are conditionally hidden when there are no projects, which is good behavior. However, the site repeatedly offers project proof that the destination does not yet supply.

### 4.3 Technical education journey

The knowledge hub links to four articles. Article pages include contextual dossier navigation and contact CTAs. They currently have no rendered technical diagrams, named reviewer, published/updated date or source references. These are editorial credibility and maintainability opportunities; missing author/date fields alone are not proof of a search-ranking defect.

### 4.4 Navigation behavior

The header exposes Badkamers, Tegelwerk, Projecten, Over ons and Contact. Specializations, knowledge content and toilet renovation are discoverable through other links and the footer. Exact-path active-state matching means a child service route does not highlight its parent header category. This is a navigational orientation weakness, not broken routing.

There are no breadcrumbs, site search or language switcher. Search and multilingual support are not established requirements for a 23-page Dutch site; they should not be added solely for feature completeness. Breadcrumbs are a proportionate improvement for hierarchical service and article routes.

## 5. Route-by-route assessment

All 23 generated routes have one H1, a title and a meta description. The artifact-level link/asset scan found no nonexistent internal route destinations or missing referenced local assets. This does not mean every intended contextual link is present.

| Route | Template / content | Assessment and specific action |
|---|---|---|
| `/` | Homepage; two source sections; 10 image elements, six unique image URLs | Content checks pass. Interactive service image selection works through focus/mouse handlers. Long desktop hero pushes the in-content CTA below the first viewport. Header CTA remains available. |
| `/complete-badkamer-renovatie/` | Bespoke bathroom process page; three source sections; one FAQ | Rich process presentation and native FAQ. Fixed bullet indexing is fragile. Six images. Review image attribution and oversized hero composition. |
| `/complete-badkamer-renovatie/almere/` | Location landing page; three current sections; two FAQs | Raw Markdown is visible in the additional lead. Generated JSON diverges from source. New technical claims and FAQs need approval provenance. |
| `/complete-toilet-renovatie/` | Shared hero plus three sections and image CTA | Copy coverage passes. Same image is used in hero and CTA. Desktop hero has excessive vertical extent. |
| `/tegelwerk/` | Tilework hub; five service cards and pricing | Three approved inline anchors are absent. The paragraph is rendered as plain text rather than with the link-aware renderer. |
| `/tegelwerk/badkamer-tegelen/` | Tilework service; two sections | No real hero image; blank placeholder. Shared desktop hero sizing and missing spacing token defects. |
| `/tegelwerk/vloer-tegelen/` | Tilework service; two sections | Same shared defects; confirmed 1,680px placeholder at 1,440px viewport. |
| `/tegelwerk/wand-tegelen/` | Tilework service; two sections | Same shared defects; approved text is present. |
| `/tegelwerk/keuken-tegelen/` | Tilework service; two sections | Same shared defects; approved text is present. |
| `/tegelwerk/balkon-tegelen/` | Tilework service; one section | Same shared defects. Template supports an optional second section; it is absent in source. |
| `/specialisaties/` | Specializations hub; four illustrated service rows | Approved H2 `Onze expertisegebieden` is absent. Tablet rows collapse into narrow tracks. |
| `/specialisaties/grootformaat-tegels/` | Specialty detail; two sections | Text checks pass. Full-width image precedes heading/CTA; substantial desktop scroll before content. |
| `/specialisaties/mozaiek-zetten/` | Specialty detail; one section | Text checks pass. Same image-first hierarchy and provenance review requirement. |
| `/specialisaties/natuursteen/` | Specialty detail; two sections | Text checks pass. Confirm service-specific treatment/impregnation claims with owner. |
| `/specialisaties/keramisch-parket/` | Specialty detail; one section | Text checks pass. Confirm supported laying patterns as an editorial dependency. |
| `/kennisbank/` | Knowledge hub; four article cards | Content and destinations pass. No search is needed merely because it is a knowledge hub. |
| `/kennisbank/waterdichting-badkamer-kimband/` | Article; two sections | Text passes. Add approved technical diagrams and review metadata if available. |
| `/kennisbank/tegel-lippage-voorkomen/` | Article; three sections | Text passes. Strong candidate for a tolerance/installation diagram, subject to technical approval. |
| `/kennisbank/onzichtbaar-luik-badkamer/` | Article; two sections | Text passes. An approved service-access diagram would make the explanation more demonstrable. |
| `/kennisbank/epoxyvoeg-vs-cementvoeg/` | Article; two sections | Text passes. Consider a structured material comparison without inventing unsupported claims. |
| `/projecten/` | Dynamic portfolio component, currently empty | No project cards are rendered; no fabricated detail routes. Repeated proof-oriented CTAs lead to an empty portfolio. |
| `/over-ons/` | One explanatory section plus CTA | Text passes. Verified history, team, experience and identifiable contact information are missing. |
| `/contact/` | Form and regional information | Primary release blocker. Disabled submit; no delivery implementation; no phone/email fallback; unresolved privacy notice. |

`404.html` is generated separately with `noindex`. The unknown-route browser fallback renders a 404 heading and noindex metadata, but inherited homepage canonical metadata remains in the local fallback scenario. Production HTTP 404 behavior still requires a real hosting test.

## 6. Detailed findings register

**Priority definitions:** P0 = blocks core launch objective or creates a severe latent data-loss condition; P1 = should be resolved before public acceptance; P2 = planned hardening or optimization; P3 = cleanup. Priorities reflect this site's intended lead-generation launch, not universal security severity.

### F01 — No usable lead acquisition endpoint

**Priority:** P0. **Status:** Confirmed. **Owner:** Technical Lead + business owner.

`business-input.json` has `formEndpoint: null`, `phone: null` and `email: null`. `ContactForm.tsx:265` disables submission when the endpoint is falsy. Footer and contact detail rendering omit the null values. Browser inspection confirms a disabled submit button.

**Impact:** visitors cannot complete the intended inquiry workflow through the website. **Remediation:** implement and configure an approved submission destination, publish verified contact alternatives, and explain any intentionally unavailable state before the user enters a long form. **Acceptance:** a staging inquiry is durably accepted, can be traced to the receiving business workflow, and returns a truthful result to the user.

### F02 — Submission handler reports simulated success without delivery

**Priority:** P0. **Status:** Conditional defect. **Owner:** Backend/integration engineer + frontend engineer.

`ContactForm.tsx:55–81` creates `FormData`, logs the payload and schedules `setStatus('success')` after 1,500ms. There is no request to `business.formEndpoint` or another delivery API. Setting a nonempty endpoint merely enables the button; it does not change this handler.

**Impact:** once enabled, the UI can falsely reassure visitors that an inquiry was received. **Remediation:** replace the timer with a real submission contract, map successful durable acceptance to success, handle failure/timeout explicitly and prevent duplicate in-flight requests. **Acceptance:** success cannot occur without verified acceptance; offline, timeout, validation and server-error cases show recoverable errors and preserve user input.

### F03 — Privacy approval configuration is not enforced

**Priority:** P1, launch dependency. **Status:** Confirmed control gap. **Owner:** Product owner + appropriate privacy reviewer + engineer.

`privacyApproved: false` exists in configuration but is not read by the form. The checkbox references a privacy statement that has no approved public route or content. Earlier requirements explicitly prohibit inventing that content. Endpoint presence alone controls button availability.

**Impact:** a future configuration change can enable collection without resolving the documented privacy-content dependency. **Remediation:** obtain the approved notice and processing requirements, connect the correct destination, and define a coherent readiness gate. **Acceptance:** the user can access approved information before submission; deployment cannot enable an incomplete collection configuration. This audit identifies an implementation/readiness gap, not a legal compliance determination.

### F04 — Production deployment bypasses available acceptance checks

**Priority:** P1. **Status:** Confirmed. **Owner:** Technical Lead / DevOps.

`.github/workflows/deploy.yml` installs packages, builds and uploads `dist`. It does not run `npm run verify` or `npm run lint`. A push to `main` triggers deployment. The current build succeeds while verification fails.

**Remediation:** gate artifact publication on lint, build, route/content verification and targeted browser checks. Add pull-request validation and inspect branch/environment protection in GitHub. **Acceptance:** an intentionally missing required anchor causes the workflow to fail before deploy; a successful artifact is traceable to commit and check results.

### F05 — Three approved contextual links are missing on tilework hub

**Priority:** P1. **Status:** Confirmed by official verifier and independent scan. **Owner:** Frontend engineer.

Missing anchors on `/tegelwerk/`: `grootformaat tegels`, `natuursteen`, `mozaïek`, each assigned to `SECTION 3 Body`. The pricing section outputs `{pricingSection.Body}` directly, bypassing `RichText`. Footer links to these destinations do not satisfy the approved contextual-link placement.

**Acceptance:** the existing verification script passes all three anchors; the paragraph preserves approved wording and contains the intended destinations without duplicated visible syntax.

### F06 — Approved specialization section heading omitted

**Priority:** P1. **Status:** Confirmed. **Owner:** Frontend engineer / content owner.

`SpecialisatiesHubPage.tsx` reads the first section's cards but never renders its H2, `Onze expertisegebieden`. Individual card headings do not replace the missing approved heading under the current content contract.

**Acceptance:** restore the heading with the correct hierarchy, or explicitly approve a revised content contract and update the source and tests together. Do not weaken the test solely to hide the mismatch.

### F07 — Raw Markdown link syntax is visible on Almere page

**Priority:** P1. **Status:** Confirmed in browser. **Owner:** Frontend/content engineer.

`pages.json:169` stores a `Lead` containing `[grootformaat tegels](/specialisaties/grootformaat-tegels/)` and similar expressions. `RichText` is a literal substring linker, not a Markdown parser. The page visibly prints brackets and route syntax.

**Remediation:** normalize this content into the supported text/link representation, or introduce a deliberately restricted rich-text schema. **Acceptance:** rendered text has no Markdown artifacts and each approved anchor navigates correctly. Do not introduce unrestricted HTML rendering to solve this issue.

### F08 — Content extraction is not idempotent against current published source

**Priority:** P1. **Status:** Confirmed. **Owner:** Technical Lead + content owner.

A temporary regeneration from `SPPAT_IMPLEMENTATION.md` differs from committed JSON on the Almere page: it removes two `Lead` additions, the third section and both FAQs. Extraction is not part of `npm run build`, and manually patched JSON has become an additional content authority.

**Impact:** a routine extraction can erase reviewed work; a JSON-only change can bypass source approval. **Acceptance:** define the authoritative source and prove extraction produces an identical result or explicitly version an override layer. Include added claims, not just pre-existing passages, in editorial acceptance.

### F09 — Specialization rows collapse at tablet widths

**Priority:** P1. **Status:** Confirmed. **Owner:** Frontend engineer.

`App.css:2943` defines a 12-column `.spec-row`. Child spans apply only at `min-width:1025px`; the single-column override applies only at `max-width:767px`. Between those ranges, children auto-place into narrow tracks.

At 834px viewport, the row is 770px wide, but the first image wrapper measured approximately 36.5px and its text column 148.3px. Other text columns measured approximately 95.5–137.2px. The screenshot shows tiny image strips, heavily wrapped text and large unused horizontal space.

**Acceptance:** explicit layouts at 768, 834, 1024 and 1025px; readable text measure and useful image size; no clipping or accidental auto-placement. A scroll-width-only test will not catch this defect.

### F10 — Shared tilework hero placeholder becomes a 1,680px panel

**Priority:** P1. **Status:** Confirmed. **Owner:** Frontend engineer + design/content owner.

Five `TegelwerkServicePage` routes call `HeroSplit` without an image. `.hero-image-placeholder` is full width with `aspect-ratio:4/5`; the redesigned media container spans the entire 12-column grid. At 1440px viewport on `/tegelwerk/vloer-tegelen/`, the placeholder measured 1,680px high and the hero section 1,729px high. The in-content CTA sits approximately 1,552px below the document top.

**Impact:** an uninformative blank region dominates the page. **Acceptance:** either approved responsive imagery or an intentionally text-only hero with bounded height; no full-width portrait placeholder driving page geometry.

### F11 — Spacing variables exist only at mobile breakpoints

**Priority:** P1. **Status:** Confirmed. **Owner:** Frontend engineer.

`--space-3xl` and `--space-4xl` are declared only under `max-width:768px` in `index.css:87–88`, yet used outside that query in `App.css:522`, `2676`, `2748–2749` and `2822–2823`. At desktop, computed values are empty; the inspected service section's padding resolves to `0px`.

**Acceptance:** define base token values at root, override them per breakpoint deliberately and verify computed spacing across the component matrix. A global text search for a variable declaration is insufficient; scope matters.

### F12 — Mobile modal does not move or contain keyboard focus

**Priority:** P1. **Status:** Confirmed missing initial focus; absent containment logic. **Owner:** Frontend/accessibility engineer.

The menu has `role="dialog"` and `aria-modal="true"`. Opening it leaves focus on the original toggle outside the dialog. Main and footer become inert, but background header controls remain outside that protection. Escape handling and focus return on close exist, which is useful but incomplete.

**Acceptance:** initial focus enters the dialog; Tab and Shift+Tab remain within it; Escape closes; focus returns to the invoker; background controls are unavailable. These expectations follow the [W3C modal dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

### F13 — Hidden sticky CTA remains keyboard-focusable

**Priority:** P1. **Status:** Confirmed. **Owner:** Frontend/accessibility engineer.

`StickyMobileCta.tsx` sets `aria-hidden` but leaves a normal anchor in the DOM. CSS hides it with transform, opacity and pointer-events; these do not remove it from sequential keyboard focus. At mobile width, the hidden CTA anchor reports `tabIndex:0`.

**Acceptance:** hidden CTA descendants are not keyboard focus targets; showing the CTA restores normal operation. Check both initial state and hero-boundary transitions.

### F14 — Accent text contrast falls below normal-text AA threshold

**Priority:** P1. **Status:** Confirmed token calculation. **Owner:** Designer + frontend engineer.

The 12px eyebrow style uses `#9C6644` on `#F5F5F3`. Calculated contrast is **4.3746:1**, below the 4.5:1 normal-text threshold. Accent on white is approximately 4.7753:1, so not every accent combination fails. Primary text/background is approximately 18.14:1 and secondary text/background 6.14:1.

**Acceptance:** adjust the relevant foreground/background combination to exceed the required threshold without rounding 4.3746 up to a pass. Evaluate actual component combinations and states; decorative and disabled elements have different treatment. See [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

### F15 — Image attribution can imply unsupported completed-project provenance

**Priority:** P1 content acceptance. **Status:** Confirmed attribution text; provenance unverified. **Owner:** Business owner + content/design lead.

Many assets have generated-image filenames. The bathroom CTA uses alt text `Sppat afgerond badkamerproject gereed voor gebruik`, attributing the image to a completed Sppat project, although the business project array is empty and the inspected repository provides no associated proof record.

Filenames alone do not establish how every image was made. The actionable issue is absent provenance and explicit attribution without evidence. **Acceptance:** classify each image as verified work, licensed reference or illustration; record rights and approvals; ensure captions and alt text accurately describe its role.

### F16 — Business claims lack a resolved approval chain

**Priority:** P1 content acceptance. **Status:** Confirmed unresolved inputs. **Owner:** Business owner + PM.

The configuration lists 13 required confirmations, including turnaround time, material supply, underfloor heating, uncoupling membranes, epoxy grout, balcony systems, maximum XXL sizes, stone impregnation, waterproofing systems, portfolio, business history and response time. Added Almere copy refers to certified waterproofing systems and standard installation services while these confirmations remain unresolved.

**Acceptance:** link every company-specific claim to owner approval; distinguish generic technical guidance from Sppat's actual included service. General pricing content labelled 2026 needs an owner, source and refresh date; its market accuracy was not verified in this audit.

### F17 — Empty portfolio weakens evidence-based conversion

**Priority:** P1 business readiness. **Status:** Confirmed. **Owner:** Business owner + PM/content lead.

`business.projects` is empty. The conditional empty state avoids fabricated routes and false project cards, but numerous CTAs promise project evidence. **Acceptance:** publish a business-approved minimum set of documented projects, or approve a launch scope whose copy does not imply immediately available portfolio evidence. Establish permission to publish client-associated images and locations.

### F18 — File intake lacks a production security contract

**Priority:** P1 before uploads are enabled. **Status:** Conditional integration gap. **Owner:** Backend/integration engineer.

The client enforces only a 10MiB size check. The file chooser advertises PDF, JPG, JPEG, PNG, WebP and DWG, but drag-and-drop does not validate type, signature or extension. There is currently no receiving server, storage policy, malware handling or deletion mechanism in this repository.

**Acceptance:** define supported types and enforce size/type/content rules at the receiving boundary; use private storage, safe names, bounded retention and controlled download access; prevent submitted attachments from becoming executable public content. Rejections must preserve other form fields. These controls apply when implementing intake, not to an existing deployed upload backend that was never observed.

### F19 — Lead payload is logged in the browser

**Priority:** P1 before form activation. **Status:** Confirmed. **Owner:** Frontend engineer.

`console.log('Form Payload:', payload)` remains in the production bundle. It can include name, email, phone, project description and a File object. This is local console output, not evidence of third-party exfiltration. Remove it before activation; diagnostic logging should record request identifiers and outcomes, not raw lead contents.

### F20 — Canonical origin is duplicated and deployment origin unverified

**Priority:** P1 deployment readiness. **Status:** Confirmed duplication; deployment state unverified. **Owner:** Technical Lead / DevOps.

`https://sppat.nl` appears separately in `App.tsx` and the prerender script, while `business.siteUrl` is null. Vite's base and all internal assets/links assume domain-root deployment. No `CNAME` is present in inspected public output/configuration.

This can be correct on a configured root custom domain. It can fail on a repository-subpath Pages URL. **Acceptance:** identify the actual deployment URL, configure one origin/base contract, and test fresh loads and refreshes for nested routes on that destination. Absence of a CNAME file does not prove the GitHub custom domain is unset.

### F21 — Unknown-route metadata depends on fallback context

**Priority:** P2. **Status:** Confirmed in local preview. **Owner:** Frontend/DevOps.

The unknown path renders a 404 view and adds noindex, but retains the canonical inherited from the HTML fallback. The local observed canonical was `https://sppat.nl/`. Generated `404.html` instead declares `/404/` as canonical although it is emitted as a file.

**Acceptance:** define host-level 404 delivery, verify an actual HTTP 404 response, and avoid inherited success-page metadata on errors. Do not equate a 404 heading with a 404 response status.

### F22 — Search discovery and social metadata are incomplete

**Priority:** P2. **Status:** Confirmed artifact gaps. **Owner:** Frontend + SEO/content owner.

No sitemap, robots file, JSON-LD, Open Graph image or Twitter image is generated. OG title, description, URL, type and a Twitter large-image card declaration do exist. A large-image card without an image leaves previews dependent on consumer fallback behavior.

**Acceptance:** generate a sitemap from canonical approved routes, add appropriate crawl guidance and approved share imagery, and introduce factual structured data after business identity is verified. Missing robots.txt alone does not prohibit crawling, and structured data does not guarantee rich results. See [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

### F23 — Asset publication scope substantially exceeds rendered usage

**Priority:** P2. **Status:** Confirmed artifact inventory. **Owner:** Frontend/build engineer.

The build contains 99 image/SVG files. Only 29 are directly referenced by generated HTML; 70 files, totaling 7,467,673 bytes, are not directly referenced there. The latter include source/reference material and unused brand assets. They are still published because they live under `public`.

**Acceptance:** move nonpublic working references out of `public`, keep an asset manifest and publish only intentional resources. These bytes increase artifact scope; they are not all transferred on each page view. Check rights and metadata for every retained public file.

### F24 — Image delivery is compressed but not responsive

**Priority:** P2. **Status:** Confirmed. **Owner:** Frontend/build engineer.

Rendered image elements have no `srcset` and no explicit width/height pairs. CSS aspect ratios reserve space in many components, so missing dimensions are not by themselves proof of CLS. The optimizer recompresses images but does not implement a responsive image selection contract in JSX.

**Acceptance:** map image roles to bounded dimensions and responsive candidates, retain eager/high-priority loading for actual LCP candidates, and lazy-load below-fold media. Measure network and visual quality before imposing format or size changes.

### F25 — Global bundle and CSS increase coupling

**Priority:** P2. **Status:** Confirmed. **Owner:** Technical Lead.

One JS file is 304,967 bytes raw / 86,814 bytes using local gzip; one CSS file is 46,873 / 7,956 bytes. All route data and business review notes are included in the browser bundle. `App.css` is 3,172 lines with later hotfix overrides and repeated breakpoint behavior.

**Acceptance:** separate public content from internal review metadata; consolidate component rules and breakpoint contracts; introduce payload budgets. Route splitting is an optimization decision, not a reason to rewrite the site before fixing conversion.

### F26 — Content and type contracts are insufficiently enforced

**Priority:** P2. **Status:** Confirmed. **Owner:** Technical Lead.

Broad optional types, type assertions, positional arrays and non-null assertions allow content drift. The portfolio is currently an empty imported JSON array, so its future populated typing path has not been demonstrated. Project titles are also used as React keys, requiring uniqueness not enforced by the schema.

**Acceptance:** validate content at build time, introduce stable IDs and strict compiler settings incrementally, and test real populated project fixtures. Reject unsupported routes/templates explicitly.

### F27 — Verification coverage is narrow and text-oriented

**Priority:** P2. **Status:** Confirmed. **Owner:** QA + Technical Lead.

The verifier stops at its first assertion, matches exact HTML strings and checks asset paths only under `/assets` and `/references`, excluding the dominant `/media` directory. It verifies retained source content but does not reject arbitrary additions. It does not fully validate the new `Lead` field, current FAQ approval provenance, all social metadata, focus or responsive layout.

**Acceptance:** retain meaningful source contracts, report all failures, parse HTML semantically, include every public asset prefix, and add targeted interaction/layout tests. Do not substitute broad snapshot churn for useful assertions.

### F28 — No operational telemetry or lead-delivery monitoring

**Priority:** P2; delivery monitoring required when F01/F02 ship. **Status:** Confirmed repository absence. **Owner:** Technical Lead + PM.

No application error reporting, conversion events, real-user performance collection or lead-delivery monitoring is present in the inspected code. Hosting analytics outside the repository remain unknown.

**Acceptance:** define privacy-reviewed metrics and alert ownership. Distinguish form attempts, accepted inquiries and actual downstream receipt. An endpoint HTTP response alone is insufficient evidence that staff can act on a lead.

### F29 — External fonts are a runtime dependency

**Priority:** P2. **Status:** Confirmed. **Owner:** Frontend/brand owner.

`index.html` loads Inter and Inter Tight from Google Fonts, with preconnect and `display=swap`. This introduces external stylesheet/font requests and potential font-swap geometry. No bundled font assets are present.

**Acceptance:** make an explicit hosting/privacy/performance decision about fonts, define fallbacks and inspect blocked-font rendering. Self-hosting is an option; it is not assumed mandatory by this audit.

### F30 — Maintenance and release documentation is inadequate

**Priority:** P2/P3. **Status:** Confirmed. **Owner:** Technical Lead + PM.

The README is the Vite template. Numerous root-level `fix_*.cjs`, `update_*.cjs` and related patch scripts remain. There is no inspected onboarding runbook, deployment-origin contract, configuration inventory, incident procedure, lead integration contract or explicit release checklist.

**Acceptance:** replace template documentation, designate maintained scripts, archive one-off transformations outside normal workflows and document how to build, validate, deploy, roll back and update approved content.

## 7. Form implementation: technical specification for completion

### 7.1 Current field contract

| Field | Current requirement | Current implementation |
|---|---|---|
| Name | Required | Text input; browser required validation; name autocomplete |
| Email | Required | Email input; browser email validation; autocomplete |
| Phone | Optional | Tel input; no business-specific normalization |
| Postcode | Optional | Text input; postal-code autocomplete; no format validation |
| Project type | Required | Four fixed options: bathroom, toilet, tilework, other |
| Description | Required | Textarea; no maximum length |
| Reference attachment | Optional | One selected file; 10MiB client limit; advertised extension list |
| Privacy checkbox | Required | Controlled checkbox; no accessible policy destination |
| Submission | Disabled | Endpoint null; no backend request implemented |

Required browser validation runs before a valid submit event reaches the handler. Consequently, the custom privacy-error branch is not a complete error UX strategy. There are no explicit `aria-describedby` associations between file/consent errors and their controls, and the custom upload button is not included in the global focus-visible selector list.

### 7.2 Recommended request lifecycle

```text
idle → client validation → submitting
   → durable acceptance → success with receipt/reference
   → validation rejection → field errors, data retained
   → timeout/network/server failure → retryable error, data retained
```

Use a documented API contract: request schema, maximum field lengths, attachment rules, response schema, timeout policy and accepted content types. Treat returned server validation as authoritative. Use a stable request identifier or idempotency mechanism to reduce duplicate inquiries during retries. Disable repeated submission while in flight, and make retry behavior explicit after failure.

Implement abuse protection proportionate to a public inquiry form: server-side rate limits, bounded payload size and appropriate bot controls. Keep provider keys and mail credentials server-side. If a third-party form service is selected, document its limitations around attachments, retention, delivery notifications and failure visibility before implementation.

Define receipt semantics carefully: a successful UI state should mean the inquiry is durably accepted into a monitored process. Staff mailbox delivery may be asynchronous; if so, queue state and downstream failures need operational handling. Decide whether a confirmation email is in scope rather than adding it automatically.

Add explicit attachment removal, clearly state one-file support, preserve input after rejection and decide whether the successful form resets or displays a receipt view. Do not log raw content. No user-provided data should be sent by this audit itself.

## 8. Visual system, responsive behavior and interaction quality

### 8.1 Visual direction

The system uses a restrained architectural aesthetic: warm off-white background, dark text, brown accent, square corners, large typography, generous spacing, numbered sections and detail-focused imagery. The visual direction is coherent and relevant to renovation craftsmanship.

The dominant weakness is implementation consistency. Desktop overlap heroes and legacy split-layout assumptions coexist. Some pages are strongly image-led, while five service pages render blank panels. The design system needs component-level layout contracts rather than further isolated overrides.

### 8.2 Responsive contracts

Root tokens define a 1,440px maximum container, 48px desktop side margins and a 12-column conceptual grid. Tablet uses 32px margins and smaller spacing; mobile uses 20px margins. Actual page components frequently hardcode `repeat(12,1fr)` instead of using `--grid-cols`.

Media-query boundaries are inconsistent: 767/768 and 1024/1025 appear in different roles. Some component rules assume desktop or mobile without an explicit tablet state. Normalize the breakpoint vocabulary and test the exact boundary widths, not only popular device presets.

The 69-route browser sweep found no document-level horizontal overflow or clipped H1/H2/H3/paragraph bounding boxes at tested widths. This is a narrow positive finding. It does not invalidate the severe tablet card defect, which occupies too little width rather than too much. `body { overflow-x:hidden }` can also mask overflow symptoms and should not replace root-cause layout fixes.

### 8.3 Hero hierarchy and CTA visibility

At 1440px width, the homepage's first in-content CTA was approximately 1,132px below the top. On the tilework detail pages it was approximately 1,552px. At 390px, the homepage CTA began around 794px and the specializations hub CTA around 850px. These are DOM geometry observations, not user-study results.

The desktop header retains its own CTA, so the site is not completely actionless above the fold. Nevertheless, the hero consumes substantial attention before exposing a concise decision path. Reduce oversized padding, constrain image-driven row height and ensure the visible hierarchy serves the page's conversion intent.

### 8.4 Interaction inventory

- Homepage service imagery reacts to mouse entry and focus; content links remain ordinary anchors.
- Bathroom FAQ uses native `details/summary`, and opening the tested disclosure worked.
- Portfolio filtering exists in code but has no live data to exercise. Test all category/empty-category states before activation.
- Sticky CTAs appear after scroll passes the hero. The same scroll listener pattern is copied into several pages and performs geometry reads on every scroll event.
- Mobile menu supports close and Escape, but not a complete modal focus lifecycle.
- Smooth scrolling respects reduced-motion CSS. This is a useful existing accommodation.

Additional manual acceptance should cover 200%/400% zoom, keyboard-only use, forced colors, touch target spacing, browser autofill, virtual keyboard behavior, safe-area insets and short-height landscape screens. These were not certified during this audit.

## 9. Accessibility review

Existing strengths include document language `nl`, a main landmark, labeled primary navigation, visible native controls, labels associated with form inputs, autocomplete attributes, aria-expanded on the menu toggle, required attributes, status/alert regions, lazy images with alt text, reduced-motion handling and native FAQ disclosure.

The highest-priority accessibility work is F12–F14: modal focus, hidden sticky-link focusability and insufficient contrast of small accent text. Add a skip-to-main link: `id="main"` exists, but no skip navigation was found. Review the upload zone's role/button and nested hidden file input with assistive technology, add a visible focus style to the custom zone and associate field errors programmatically.

Do not treat an accessibility-tree snapshot or a passing automated scan as WCAG conformance. Acceptance needs manual keyboard and screen-reader tests, including menu cycles, invalid form states and sticky CTA transitions. Alt text must be accurate to the visual and its provenance; an SEO-oriented or unsupported business attribution is not an acceptable substitute.

## 10. SEO, metadata and editorial governance

### 10.1 What works

Generated route HTML has a title, description and canonical. Every audited route has one H1. Titles range from 41 to 61 characters; descriptions range from 120 to 158 characters. These lengths are descriptive measurements, not fixed search-engine acceptance thresholds. Approved content is largely rendered statically, and native anchor destinations are crawlable.

Static canonical declarations are preferable to relying exclusively on client mutation. Google describes canonical handling and JavaScript indexing behavior in its [JavaScript SEO documentation](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

### 10.2 Gaps and risks

- Three required contextual links are absent even though their destinations exist.
- The specialization hub loses an approved heading.
- The canonical base must match the actual public origin.
- No generated sitemap or structured data was found.
- Social metadata declares a large image card without supplying its image.
- Technical articles have no explicit reviewer/date/source model.
- The portfolio provides no verified work examples.
- Business facts are incomplete; do not generate LocalBusiness fields from assumptions.
- Several additions exist outside the stated source-of-truth pipeline.
- There is no crawl/index/404/redirect validation against the actual production host.

### 10.3 Content approval model

Maintain explicit records for source copy, approved revisions, technical reviewer, business owner, image provenance and review date. Market indications and service-specific claims need refresh ownership. The current checks confirm many retained passages but do not prevent unapproved additions; approval and rendering correctness are separate dimensions.

Resolve the status of `SPPAT_SPEC.md`, `SPPAT_IMPLEMENTATION.md`, `SPPAT_SEO_CONTENT_BASE.md` and `design.md`. The latter two are duplicate design/content guidance in the inspected state. Document precedence and archive superseded versions to reduce conflicting instructions.

## 11. Performance and asset economics

### 11.1 Measured build artifact sizes

| Artifact | Bytes | Interpretation |
|---|---:|---|
| Total `dist` | 11,739,900 | Published artifact size, not per-page transfer |
| Images/SVGs | 11,037,439 | 99 files across public output |
| JavaScript | 304,967 raw / 86,814 local gzip | One shared bundle |
| CSS | 46,873 raw / 7,956 local gzip | One shared stylesheet |
| Directly HTML-referenced image/SVG files | 29 | Distinct referenced files across routes |
| Image/SVG files not directly referenced by generated HTML | 70 / 7,467,673 bytes | Candidate publication-scope cleanup |
| Source page JSON | 55,421 | All-route content source imported by browser |

Gzip values were calculated locally and do not establish what encoding or compression the production host serves. Font bytes and HTTP overhead are not included.

The optimizer reports approximately 82% savings for the image set it processed. This is a meaningful improvement, but the entire public image collection remains in the artifact.

### 11.2 Route image payload envelope

Unique referenced image-file bytes per page include approximately 584KB on the homepage, 857KB on the bathroom page, 519KB on the Almere page, 771KB on the tilework hub and 728KB on the specializations hub. These figures sum unique image files referenced by the page, including lazy content; they are not measurements of initial viewport network transfer.

Image candidates should be sized by rendered role and device density. Avoid loading every desktop crossfade candidate at high resolution when only one is visible. Preserve useful caching and ensure below-fold imagery remains deferred. Measure the actual network waterfall before choosing the final optimization strategy.

### 11.3 Performance acceptance targets

Use field targets of LCP ≤2.5 seconds, INP ≤200ms and CLS ≤0.1 at the 75th percentile, with mobile and desktop considered separately. These are the established [Core Web Vitals](https://web.dev/articles/vitals) targets; this audit did not measure them for SPPAT.

Before traffic exists, use repeatable laboratory tests against production builds under documented network/CPU settings. Capture hero resource timing, font behavior, script execution cost and layout stability. Do not set a release claim of “fast” from localhost page appearance.

## 12. Security and data protection engineering

The current public content layer has no observed database, authentication system, admin API, payment flow or application backend. This limits several classes of server-side exposure. It does not establish security of hosting accounts, supply chain, third-party services or the future form endpoint.

Normal React text rendering avoids direct HTML insertion. No client storage or analytics SDK was found in source. Browser-delivered business notes are present in the production bundle; these are editorial notes rather than demonstrated credentials, but they should be removed from public configuration.

Review actual hosting headers for CSP, frame restrictions, MIME sniffing protection and referrer policy. The repository does not establish their production values. A strict policy must account for Google Fonts and any future form origin. Static hosting capabilities constrain how these headers can be configured; verify the chosen host before promising a policy.

Run a network-enabled dependency advisory audit and maintain an update process. Lockfile reproducibility is useful but does not certify absence of known vulnerabilities. Pin action revisions according to the team's supply-chain policy, use least-privilege deployment tokens and review environment protection. Existing workflow permissions include read-only contents plus Pages/id-token permissions needed by the chosen deployment mechanism; no evidence of arbitrary broad repository-write permissions was found there.

Create an inventory for public assets. Reference photos under `public` become accessible even when not linked by the UI. Evaluate metadata and publication rights; this audit did not extract EXIF or establish the rights status of those files.

The future inquiry endpoint must have independent server-side validation, abuse controls, private attachment handling, secrets management, retention decisions and operational monitoring. Browser validation and a checkbox are not substitutes for that design.

## 13. Build, CI/CD and operations

### 13.1 Executed checks

| Check | Result | Important limit |
|---|---|---|
| `npm run build` | Pass | Rebuilds local `dist`; does not run content verification |
| `npm run lint` | Pass | No browser/a11y/layout assurance |
| `npm run verify` | Fail | Stops at first missing tilework anchor |
| Diagnostic collect-all verifier | Four assertions fail | Temporary wrapper retained original checks; not a replacement passing test |
| Independent route/artifact scan | 23 routes inspected | No broken referenced local asset or internal route destination found |
| Browser route/width sweep | 69 combinations render one H1 | Coarse geometry only; confirmed tablet issue requires child-width inspection |
| Browser warning/error sample | No entries returned in sampled production sweep | Not exhaustive logging coverage |
| Temporary content regeneration | Drift on Almere page | Current manual additions would be removed |
| npm advisory audit | Unavailable | Registry DNS/network request failed |
| Production-host verification | Unavailable | Domain deployment and headers remain unverified |

The collect-all diagnostic also checked 132 source body/list passages. Its emitted success-style summary comes from the original script and must not be interpreted as a pass: the wrapper collected four failures instead of throwing on the first one.

### 13.2 Required delivery pipeline

```text
pull request
  → dependency install from lockfile
  → lint + type checks
  → deterministic content validation
  → production build + prerender
  → HTML, route, asset and metadata checks
  → targeted responsive/accessibility/interaction checks
  → preview review and business-content sign-off
  → protected merge/deployment
  → production smoke check + lead-delivery check
```

Artifact checks must operate on the just-built output. Verify all route assets, including `/media`. Add a populated-portfolio fixture and a mocked submission endpoint to test state transitions without transmitting customer data. Add narrow tests for the real observed failures rather than hundreds of low-value implementation snapshots.

### 13.3 Operational requirements

Document deployment origin, DNS owner, hosting administrator, form provider, secrets location, retention owner, alert recipient and rollback process. Keep release-to-commit traceability. A rollback procedure should describe how to redeploy a known-good content artifact and how to handle form-provider incidents independently of the static site.

GitHub Pages can serve the static site, but cannot by itself execute this missing application submission handler on a server. The integration must exist elsewhere or use a purpose-built service. Do not assume publishing the frontend completes the form backend.

## 14. Prioritized delivery backlog and estimates

Estimates are rough engineering effort in person-days for an engineer familiar with this stack. They are planning assumptions, not commitments. They exclude waiting for business facts, approved photography, legal/privacy review, hosting access or third-party procurement. Workstream ranges overlap and should not be summed as if every finding were independent.

| Workstream | Findings | Accountable owner | Effort range | Exit criteria |
|---|---|---|---:|---|
| Real lead intake and truthful feedback | F01–F03, F18–F19 | TL + integration engineer | 3–6 days | Durable staging delivery; validation/errors; approved data handling; no payload logs |
| Content fidelity and reproducibility | F05–F08 | TL + content owner | 1–2 days | Four verifier failures fixed; no Markdown leak; deterministic regeneration |
| Responsive and accessibility repair | F09–F14 | Frontend lead | 2–4 days | Tablet grid, hero sizing, spacing, focus and contrast checks pass |
| Deployment acceptance gates | F04, F20–F21, F27 | TL / DevOps / QA | 1.5–3 days | Protected passing checks; actual-host route and 404 validation |
| Business content and portfolio | F15–F17 | PM + business owner | Engineering 0.5–2 days; content lead time unknown | Verified identity, approved claims, rights/provenance and agreed portfolio launch scope |
| Search and asset hygiene | F22–F24, F29 | Frontend + content owner | 1.5–3 days | Canonical sitemap, share assets, public asset scope and image strategy |
| Maintainability, telemetry and handover | F25–F26, F28, F30 | TL + PM | 2–4 days | Schema, component ownership, monitoring and runbook |

### 14.1 Suggested sequencing

**Stage A — Unblock a truthful product:** settle the conversion contract and domain, resolve business/privacy dependencies, fix the form implementation and add verified contact alternatives. Avoid a public acquisition launch while the CTA destination cannot act on inquiries.

**Stage B — Reach implementation acceptance:** repair the four content assertions, visible Markdown, tablet layout, large blank heroes, missing desktop tokens and keyboard defects. Add the corresponding checks to CI.

**Stage C — Validate the actual release environment:** deploy a candidate to the intended origin, test every route by direct load/refresh, verify canonical and status behavior, exercise staging-safe lead delivery, and obtain business approval of claims and images.

**Stage D — Improve and operate:** responsive assets, factual structured data, social previews, performance instrumentation, content governance, cleanup and operational handover.

Stages A and B can overlap as team capacity permits. There is no defensible calendar launch date until the business-content and delivery-provider dependencies have owners and response dates. A provisional engineering plan of roughly two to four weeks for one primary engineer is reasonable for the combined stabilization scope, but external approvals may dominate elapsed time.

### 14.2 Critical path

```text
Verified business identity + approved data-processing requirements
  → chosen form destination and attachment policy
  → integration implementation
  → staging delivery / failure tests
  → actual-domain deployment verification
  → business acceptance
  → production launch
```

In parallel: content-source reconciliation → visual/a11y repairs → automated acceptance gates. A visually polished page does not remove the integration dependency.

## 15. Ownership and decisions required

| Decision / dependency | Owner | Required output |
|---|---|---|
| Intended public domain and Pages hosting mode | Business owner + TL | Approved canonical origin, root/subpath decision and access owner |
| Verified phone, email, address and registration details | Business owner | Approved public business record |
| Inquiry destination and staff response process | Business owner + PM | Receiving system, responsible person, operating expectations |
| Form/attachment processing requirements | Appropriate reviewer + TL | Approved notice, supported file types, retention and processor decision |
| Portfolio launch scope | Business owner + PM | Approved project set or explicit alternative launch content |
| Image provenance | Content/design owner | Image register with source, rights, role and permitted attribution |
| Technical service claims | Business owner / technical reviewer | Confirmation of installation methods, scope, inclusions and limits |
| Source-of-truth precedence | TL + content owner | Canonical source and regeneration/override policy |
| Release gate ownership | TL + QA | Required checks and protected deploy approval |
| Post-launch monitoring | PM + TL | Event definitions, alert owner and incident response path |

Do not substitute developer assumptions for missing business facts. PM should track each unresolved input as a dependency with an owner, due date, consequence and escalation path.

## 16. Definition of done for production acceptance

1. Every critical CTA leads to an operational, truthful conversion path with a verified alternative contact route.
2. A valid inquiry is durably accepted; validation, timeout, rejection and retry states are tested; no simulated success remains.
3. Privacy content and processing configuration are approved and accessible before collection is enabled.
4. All 23 route artifacts build and the existing content verifier passes without suppressing requirements to conceal regressions.
5. Almere content has one approved source and regenerates deterministically; visible Markdown is eliminated.
6. Tablet specializations rows, shared service hero height and desktop spacing tokens are corrected.
7. Mobile menu focus lifecycle and sticky CTA focus state pass keyboard tests; affected small text meets contrast requirements.
8. Every live image has approved provenance and appropriate alt text; no illustrative asset is presented as a verified project without evidence.
9. Business identity, service-specific claims and portfolio launch state receive explicit owner acceptance.
10. Actual hosting origin, nested direct loads, refresh behavior, asset paths, canonical tags and HTTP 404 behavior are verified.
11. CI blocks a known content or interaction regression before deployment.
12. Dependency advisory review completes in a network-enabled environment, with accepted remediation or documented disposition.
13. Production monitoring, lead-receipt ownership and rollback procedure are documented and exercised proportionately.
14. Browser/device QA covers supported environments and key breakpoints; performance claims are backed by measurements.

## 17. Post-launch measurement plan

Define a small funnel: eligible page visit → CTA activation → contact view → form start → submission attempt → accepted inquiry → downstream receipt → qualified inquiry. Aggregate by landing page and channel where permitted and technically reliable. Do not record raw names, email addresses, free-text descriptions or attachment contents in analytics.

Track failed submission rate, acceptance-to-receipt discrepancies, time to first staff action and successful inquiry volume. Establish targets only after a baseline and a business response commitment exist. Do not invent a conversion target from this repository audit.

For content and search, track indexed canonical routes, meaningful search landing pages, 404s and navigation to the contact workflow. For engineering, track deployment failures, content check failures, client errors and field performance by template. Assign a person who reviews these metrics and can act; unowned dashboards are not an operating model.

## 18. Handover summary for each audience

**Technical Lead:** retain the static architecture, repair the conversion handler, introduce deterministic content contracts and make the existing checks mandatory. Prioritize the confirmed CSS breakpoint/sizing and focus defects before structural optimization. Treat origin configuration and form operations as explicit system boundaries. Reduce duplicated CTA and content-shape ambiguity after the release blockers are closed.

**Project Manager:** the project has substantial frontend output but is not business-complete. Track business facts, privacy approval, inquiry destination, image provenance and portfolio proof separately from engineering tasks. Do not measure readiness by route count or successful builds alone. Schedule acceptance around operational inquiry delivery and verified content, with the critical path and owners above.

**Release decision:** preserve the current site as a reviewable candidate, complete the P0/P1 work and production validation, then release against the explicit acceptance checklist. The evidence supports targeted stabilization and integration work; it does not support declaring the site production-ready today.

## Appendix A — Key evidence locations

| Location | Evidence |
|---|---|
| `src/components/ContactForm.tsx:55` | Submission lifecycle begins |
| `src/components/ContactForm.tsx:76` | Raw payload logging |
| `src/components/ContactForm.tsx:79` | Simulated success timer |
| `src/components/ContactForm.tsx:265` | Endpoint-only submit disabling |
| `src/content/business-input.json` | Null contact details, endpoint, privacy flag, empty portfolio and unresolved confirmations |
| `src/components/Header.tsx` | Mobile modal, inert handling, Escape and focus-return implementation |
| `src/components/StickyMobileCta.tsx` | Hidden focusable anchor |
| `src/components/RichText.tsx` | Literal anchor insertion; no Markdown parser |
| `src/content/pages.json:169` | Markdown-bearing Almere lead |
| `src/pages/TegelwerkHubPage.tsx` | Plain pricing paragraph bypassing links |
| `src/pages/SpecialisatiesHubPage.tsx` | Cards rendered without approved section H2 |
| `src/pages/TegelwerkServicePage.tsx` | Shared hero called without image |
| `src/index.css:87` | Mobile-scoped large spacing variables |
| `src/App.css:2676` | Unscoped usage of mobile-only token |
| `src/App.css:2943` | Specialization row grid |
| `src/App.css:2969` | Desktop-only child placement |
| `src/App.css:2986` | Mobile-only row override |
| `src/App.tsx` | Conditional route resolution and canonical origin |
| `src/main.tsx` | Route-aware hydration fallback |
| `scripts/prerender.mjs` | HTML and metadata generation |
| `scripts/verify.mjs` | Existing editorial acceptance contract |
| `scripts/extract-content.py` | Markdown extraction and regeneration behavior |
| `.github/workflows/deploy.yml` | Build/deploy without lint or verification gates |
| `tsconfig.app.json` | Strict family not enabled |
| `audit/route-audit.json` | Per-route counts, missing content/anchors, assets and payload totals |

## Appendix B — Reproduction commands

Run from the repository root. Build rewrites the generated `dist` directory.

```sh
npm run lint
npm run build
npm run verify
npm run preview -- --host 127.0.0.1 --port 4173
```

Expected current verification failure: `Internal anchor: /tegelwerk/: grootformaat tegels`. Fixing only this first assertion does not establish completion; the diagnostic run found two more missing anchors and the missing specialization H2.

For tablet reproduction, open `/specialisaties/` at 834px width and scroll to the expertise rows. For the blank hero, open `/tegelwerk/vloer-tegelen/` at 1440px. For the content rendering issue, open `/complete-badkamer-renovatie/almere/` and inspect the additional paragraph in the tilework section. For menu focus, open the menu with a keyboard and verify where focus remains.

Do not run `scripts/extract-content.py` against the working source until the Almere source-of-truth discrepancy is resolved; the audit tested extraction using redirected temporary output files.
