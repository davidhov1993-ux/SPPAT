# SPPAT --- FINAL INFORMATION ARCHITECTURE, NAVIGATION & INTERNAL LINKING SPEC

**Status:** PM / Product Owner / Tech Lead approved for implementation

## Final site tree

``` text
HOME /

BADKAMERS
├ Complete badkamer renovatie /complete-badkamer-renovatie/
│ └ Badkamer renovatie Almere /complete-badkamer-renovatie/almere/
└ Complete toilet renovatie /complete-toilet-renovatie/

TEGELWERK
├ Overzicht /tegelwerk/
├ Vloertegels leggen /tegelwerk/vloer-tegelen/
├ Wandtegels zetten /tegelwerk/wand-tegelen/
├ Badkamer tegelen /tegelwerk/badkamer-tegelen/
├ Inloopdouche tegelen /tegelwerk/inloopdouche-tegelen/
├ Keuken tegelen /tegelwerk/keuken-tegelen/
├ Balkon tegelen /tegelwerk/balkon-tegelen/
└ Vloerverwarming & tegelen /tegelwerk/vloerverwarming-en-tegelen/

SPECIALISATIES
├ Overzicht /specialisaties/
├ Grootformaat tegels /specialisaties/grootformaat-tegels/
├ Mozaïek zetten /specialisaties/mozaiek-zetten/
├ Natuursteen /specialisaties/natuursteen/
└ Keramisch parket /specialisaties/keramisch-parket/

PROJECTEN
├ /projecten/
└ /projecten/:slug/ — verified real projects only

KENNISBANK
├ /kennisbank/
└ retain exact four existing article URLs

OVER ONS /over-ons/
CONTACT /contact/
```

## Desktop header

`SPPAT | Badkamers ▾ | Tegelwerk ▾ | Specialisaties ▾ | Projecten | Over ons | Contact | [Project bespreken]`

Kennisbank stays secondary/contextual. Do not add Home, Diensten, or a
new `/badkamers/` hub.

### Badkamers dropdown

Complete badkamer renovatie\
Complete toilet renovatie\
Local subordinate link: Badkamer renovatie Almere\
Footer action: Bekijk badkamers → `/complete-badkamer-renovatie/`

### Tegelwerk dropdown

Vloertegels leggen\
Wandtegels zetten\
Badkamer tegelen\
Inloopdouche tegelen\
Keuken tegelen\
Balkon tegelen\
Vloerverwarming & tegelen\
Footer action: Alle tegelwerk diensten → `/tegelwerk/`

### Specialisaties dropdown

Grootformaat tegels\
Mozaïek zetten\
Natuursteen\
Keramisch parket\
Footer action: Alle specialisaties → `/specialisaties/`

Do not render every item as a decorative card. Use compact architectural
lists. Active parent must remain active on descendants.

## Mobile navigation

First level:

``` text
Badkamers >
Tegelwerk >
Specialisaties >
Projecten
Over ons
Contact
[Project bespreken]
```

Category tap opens a second level in the same navigation surface.
Include Back and Overzicht. No hover dependency. Menu scrolls on short
screens. Focus enters menu on open and returns to trigger on close.
Background must be non-interactive while modal menu is open.

## Breadcrumbs

Required on child services, specializations, project details and
knowledge articles.

Examples: - Home → Badkamers → Complete badkamer renovatie - Home →
Badkamers → Complete badkamer renovatie → Almere - Home → Tegelwerk →
Vloertegels leggen - Home → Tegelwerk → Inloopdouche tegelen - Home →
Specialisaties → Grootformaat tegels - Home → Projecten → \[verified
project title\] - Home → Kennisbank → \[article title\]

Do not invent `/badkamers/` for breadcrumb convenience. Badkamers may
resolve to `/complete-badkamer-renovatie/`.

## Footer

Column 1: Sppat + verified company/contact data only.

Column 2 --- Badkamers & Tegelwerk: Complete badkamer renovatie; Toilet
renovatie; Vloertegels; Wandtegels; Badkamer tegelen; Inloopdouche;
Keuken; Balkon; Vloerverwarming & tegelen.

Column 3 --- Specialisaties: Grootformaat; Mozaïek; Natuursteen;
Keramisch parket.

Column 4 --- Sppat: Projecten; Over ons; Kennisbank; Contact.

Never publish placeholder address/phone/email/KVK/BTW. Add privacy only
after approved route exists.

## Hub responsibilities

Home routes to the major pillars, proof and conversion; it is not an
exhaustive directory.

Tegelwerk hub exposes all seven approved tile services and contextual
routes to Grootformaat, Mozaïek, Natuursteen and Projecten.

Specialisaties exposes exactly four children and retains
`Onze expertisegebieden`.

Projecten contains verified real work only; no fake filters, locations
or categories.

Kennisbank supports commercial pages and stays outside the primary
header.

## Internal-link matrix

-   Complete Bathroom → Bathroom Tiling, Inloopdouche, relevant
    XXL/Mozaïek/Natuursteen, Projects.
-   Almere → Complete Bathroom + verified Almere project only if
    provenance exists.
-   Toilet → Wall Tiling, relevant Mosaic, Projects.
-   Tegelwerk Hub → all 7 tile services, Specialisaties, Projects.
-   Floor → Vloerverwarming, XXL, Keramisch Parket, Projects.
-   Wall → Bathroom, Kitchen, Mosaic, XXL.
-   Bathroom Tiling → Complete Bathroom, Inloopdouche, XXL, Mosaic,
    Projects.
-   Inloopdouche → Bathroom Tiling, Complete Bathroom, XXL, Mosaic,
    Waterdichting article, Projects.
-   Kitchen → Wall, Floor, relevant Project.
-   Balcony → verified relevant Project only.
-   Vloerverwarming → Floor, XXL, Keramisch Parket, relevant Project.
-   Grootformaat → Bathroom, Inloopdouche, Floor, Projects, Lippage
    article.
-   Mozaïek → Bathroom, Inloopdouche, Projects.
-   Natuursteen → Bathroom/Floor where relevant, Projects.
-   Keramisch Parket → Floor, Vloerverwarming, Projects.
-   Project detail → only services/specializations actually
    demonstrated.
-   Knowledge article → only directly relevant commercial pages.
-   Every commercial leaf → Contact.

## Project-detail data contract

Each verified project should carry:

``` text
slug
title
verified_location? optional
verified_scope[]
related_service_urls[]
related_specialization_urls[]
hero_media
gallery_media[]
technical_details[]
```

Never infer natural stone from marble-look ceramic, underfloor heating
from a tiled floor, complete renovation from a completed-room photo, or
location without verification.

## Kennisbank relationships

Waterdichting → Badkamer Tegelen / Inloopdouche / Complete Bathroom\
Lippage → Grootformaat / Vloertegels\
Onzichtbaar inspectieluik → Complete Bathroom / Toilet where relevant\
Epoxy vs cementvoeg → Kitchen / Bathroom where relevant

## Routing rules

Keep approved URLs stable. New service URLs are exactly: -
`/tegelwerk/inloopdouche-tegelen/` -
`/tegelwerk/vloerverwarming-en-tegelen/`

Project details: `/projecten/:slug/`.

No `/badkamers/`, no `/diensten/`, no duplicate URL for one search
intent. Keep trailing slash behavior consistent.

## Navigation implementation model

Do not independently hardcode Header, Mobile Menu, Footer and breadcrumb
copies. Use one canonical navigation hierarchy containing label, URL,
parent, nav visibility, footer visibility, breadcrumb label and order.
Desktop/mobile/active-parent behavior must consume that hierarchy.

## Designer tasks

1.  Design 3 desktop dropdowns.
2.  Design hierarchical mobile navigation.
3.  Design parent/child active states.
4.  Design compact breadcrumbs.
5.  Redesign footer as secondary site map.
6.  Keep 7 Tegelwerk items scannable without generic card overload.
7.  Preserve approved architectural visual language and restrained
    structural borders.
8.  No decorative icon for every menu item.
9.  No navigation imagery unless explicitly approved later.
10. Test 390, 834, 1024, 1440.
11. No horizontal overflow or content obstruction.
12. Project-detail return path must be obvious using the shared system.

## Frontend tasks

1.  Create canonical navigation data.
2.  Render desktop dropdowns from it.
3.  Render mobile hierarchy from it.
4.  Implement parent active matching.
5.  Generate breadcrumbs from route hierarchy.
6.  Rebuild footer links from approved IA.
7.  Include both new service routes.
8.  Add `/projecten/:slug/` when verified project data is ready.
9.  Keep current static/document-navigation architecture; no router
    migration required.
10. Do not use old one-off `.cjs` scripts.
11. Add all destinations to route/prerender verification.
12. No nav item may target a placeholder/nonexistent route.

## Acceptance tests

### SEO / structure

-   Every commercial page is reachable logically from header/dropdown or
    parent hub.
-   No important service remains footer-only.
-   Tegelwerk links to all 7 children.
-   Specialisaties links to all 4 children.
-   Badkamers exposes complete bathroom, toilet and subordinate Almere.
-   Breadcrumbs match hierarchy.
-   Project links use verified scope only.
-   Kennisbank links contextually to commercial pages.
-   One canonical destination for Inloopdouche.
-   One canonical destination for Vloerverwarming.
-   Existing approved URLs are not renamed for aesthetics.

### UX / responsive

At 390 / 834 / 1024 / 1440: - no nav-caused horizontal overflow; -
readable labels; - no hover-only dependency; - visible keyboard focus; -
mobile focus enters and returns correctly; - background is
non-interactive while modal menu is open; - Escape closes overlays where
applicable; - active top-level category works on child pages; -
breadcrumbs wrap cleanly; - header CTA does not crowd navigation; -
hidden sticky CTA is not focusable.

### Integrity

Navigation/footer/project cards may not introduce invented locations,
company history, project facts, service capabilities, placeholder
company data, fake filters/categories, or an unapproved privacy route.

## PM / Tech Lead approval

**APPROVED IA FOR IMPLEMENTATION.**

Final primary header:

`Badkamers | Tegelwerk | Specialisaties | Projecten | Over ons | Contact | Project bespreken`

The product hierarchy is now:

**Badkamers = complete renovation products**\
**Tegelwerk = application services**\
**Specialisaties = advanced material/technique expertise**\
**Projecten = verified proof**\
**Kennisbank = supporting expertise/SEO**\
**Over ons = trust**\
**Contact = conversion**

Next work package: integrate verified case studies into `/projecten/`
and `/projecten/:slug/`, then perform site-wide visual/content QA.
Launch hardening remains deferred.
