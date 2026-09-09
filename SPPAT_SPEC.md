Отличное замечание по поводу /privacyverklaring/ и плейсхолдеров. Действительно,
если отдать это без уточнений, ИИ-разработчик может начать галлюцинировать
юридические тексты или выведет служебные пометки прямо на экран пользователю.

Твоя директива для Codex составлена идеально: она жестко ограничивает его зону
ответственности (только код и верстка) и защищает контент от самодеятельности.

Вот итоговый, полностью готовый промпт, который ты можешь скопировать и
отправить Codex одним сообщением. Я убрал Privacyverklaring из футера в
спецификации, чтобы всё было абсолютно консистентно.

Скопируй и отправь Codex следующий текст:

Implement the attached SPPAT — FINAL WEBSITE CONTENT & SEO SPECIFICATION in the
existing Vite + React + TypeScript project. This specification is the source of
truth. Do not rewrite, summarize, improve, shorten or invent website copy. Do
not change the approved URLs, page hierarchy, navigation, SEO titles, meta
descriptions, headings, CTAs or internal links. Your task is implementation, not
copywriting or SEO research.

Important:

- Preserve all existing project assets and reference folders.
- Build every page defined in the specification.
- Implement responsive mobile/tablet/desktop behavior.
- Use reusable React components where appropriate.
- Implement routing for every approved URL.
- Implement per-page SEO title and meta description.
- Implement all specified internal links.
- Implement header, mobile navigation, footer, CTA blocks, forms, cards, FAQ
  and project grid structures.
- Use the visual requirements in the specification to determine image
  placement, but do not invent fake Sppat projects.
- Do not display [BUSINESS INPUT REQUIRED: ...] text to website visitors. If a
  specific sentence relies entirely on unconfirmed business input, omit that
  sentence from the UI for now.
- Do not fabricate missing business information.
- Keep missing business data centralized so it can be filled later.
- Do not invent testimonials, ratings, prices, guarantees, certifications,
  company history or project results.
- /privacyverklaring/ is referenced but has no approved content yet. Do not
  invent privacy copy. Keep it out of public navigation until content is
  supplied.
- Do not delete or overwrite existing reference images/assets unnecessarily.

The website must feel premium, modern and highly polished, but remain extremely
clear and intuitive. Mobile-first. Avoid a generic contractor-template
appearance.

Before changing files, inspect the existing project briefly. Then implement. Do
not send me a plan and do not ask for approval between steps.

At completion:

1.  run the production build;
2.  fix implementation/build errors;
3.  verify all approved routes;
4.  report only:
    - what was implemented;
    - files created/changed;
    - anything that remains blocked specifically because business data or real
      project assets are missing.

================================================== SPPAT — FINAL WEBSITE CONTENT & SEO SPECIFICATION

GLOBAL SPECIFICATION

Brand Name: Sppat Primary Language: Dutch (NL) Service Area: Almere &
Netherlands

HEADER Logo Text: Sppat Main Navigation:

- Badkamers (Target: /complete-badkamer-renovatie/)
- Tegelwerk (Target: /tegelwerk/)
- Projecten (Target: /projecten/)
- Over ons (Target: /over-ons/)
- Contact (Target: /contact/) Header CTA: Project bespreken (Target:
  /contact/) Mobile Navigation: Identical to desktop.

FOOTER Column 1: Sppat [ADDRESS] [PHONE] [EMAIL] KVK: [KVK] BTW: [BTW]

Column 2: Diensten

- Complete badkamer renovatie (Target: /complete-badkamer-renovatie/)
- Toilet renovatie (Target: /complete-toilet-renovatie/)
- Vloertegels leggen (Target: /tegelwerk/vloer-tegelen/)
- Wandtegels zetten (Target: /tegelwerk/wand-tegelen/)

Column 3: Specialisaties

- Grootformaat tegels (Target: /specialisaties/grootformaat-tegels/)
- Mozaïek zetten (Target: /specialisaties/mozaiek-zetten/)
- Natuursteen (Target: /specialisaties/natuursteen/)
- Keramisch parket (Target: /specialisaties/keramisch-parket/)

Column 4: Informatie

- Projecten (Target: /projecten/)
- Over ons (Target: /over-ons/)
- Kennisbank (Target: /kennisbank/)
- Contact (Target: /contact/)

GLOBAL CTA VOCABULARY Primary conversion button: Project bespreken Secondary
information button: Bekijk projecten Contact button: Neem contact op Form submit
button: Aanvraag versturen

FORMS & MICROCOPY Form Labels:

- Naam
- E-mailadres
- Telefoonnummer
- Postcode
- Type project
- Korte omschrijving van uw project
- Upload referentie of plattegrond (Optioneel)

Dropdown Values (Type project):

- Badkamer renovatie
- Toilet renovatie
- Tegelwerk
- Anders

Upload Text: Bladeren of sleep bestand hierheen (Max 10MB) Validation/Error
Text: Er is iets misgegaan. Controleer de rood gemarkeerde velden en probeer het
opnieuw. Success Text: Bedankt voor uw aanvraag. Wij nemen binnen [BUSINESS
INPUT REQUIRED: response time] contact met u op. Privacy Consent: Ik ga akkoord
met de verwerking van mijn gegevens conform de privacyverklaring. Required
Fields: Gemarkeerd met \*

FINAL SITE STRUCTURE

/ /complete-badkamer-renovatie/ /complete-badkamer-renovatie/almere/
/complete-toilet-renovatie/ /tegelwerk/ /tegelwerk/badkamer-tegelen/
/tegelwerk/vloer-tegelen/ /tegelwerk/wand-tegelen/ /tegelwerk/keuken-tegelen/
/tegelwerk/balkon-tegelen/ /specialisaties/ /specialisaties/grootformaat-tegels/
/specialisaties/mozaiek-zetten/ /specialisaties/natuursteen/
/specialisaties/keramisch-parket/ /projecten/ /kennisbank/
/kennisbank/waterdichting-badkamer-kimband/ /kennisbank/tegel-lippage-voorkomen/
/kennisbank/onzichtbaar-luik-badkamer/ /kennisbank/epoxyvoeg-vs-cementvoeg/
/over-ons/ /contact/

PAGE SPECIFICATIONS

PAGE: Home URL: /

SEO Title: Premium Badkamer Renovatie & Luxe Tegelwerk | Sppat Meta Description:
Complete badkamer renovaties en high-end tegelwerk in Almere en heel Nederland.
Van sloop tot naadloze afwerking met grootformaat tegels of mozaïek. Primary
Keyword: badkamer renovatie Secondary Semantics: luxe tegelwerk, badkamer
verbouwen Search Intent: Service

HERO Eyebrow: Sppat — Almere & Nederland H1: Premium Badkamer Renovatie &
Technisch Tegelwerk Body: Wij voeren complete renovaties uit met een
compromisloze focus op detail. Van de eerste sloopwerkzaamheden tot de perfect
uitgelijnde voeg. Gespecialiseerd in complexe indelingen, grootformaat tegels en
onzichtbare afwerkingen. Primary CTA: Project bespreken Primary CTA URL:
/contact/ Visual: Brede overzichtsfoto van een high-end, strak afgewerkte
badkamer met grootformaat tegels en inbouwdetails. ALT: strak afgewerkte premium
badkamer met grootformaat tegels en inbouwnissen

SECTION 2 Type: Cards H2: Onze Expertise Card 1 Title: Complete Badkamer
Renovatie Card 1 Body: Turnkey uitvoering van uw project. Wij verzorgen
sloopwerk, leidingwerk, waterdichting, stucwerk en de volledige afmontage.
Card 1 CTA: Lees meer Card 1 CTA URL: /complete-badkamer-renovatie/ Card 2
Title: Premium Tegelwerk Card 2 Body: Vloeren, wanden en keukens. Strak
tegelwerk vereist een perfecte ondergrond en wiskundige precisie. Card 2 CTA:
Lees meer Card 2 CTA URL: /tegelwerk/ Card 3 Title: Specialisaties Card 3 Body:
Naadloos XXL-tegelwerk, perfect uitgelijnd mozaïek en de verwerking van
natuurlijk steen. Card 3 CTA: Lees meer Card 3 CTA URL: /specialisaties/

SECTION 3 Type: Text + Image H2: Uitvoering zonder concessies Body: Een
hoogwaardig eindresultaat begint achter de tegels. Wij besteden maximale
aandacht aan het uitvlakken van wanden, zorgvuldige waterdichting en het exact
berekenen van afschot. Onze focus ligt op een vlakke afwerking zonder storende
hoogteverschillen (lippage) en een duurzaam eindresultaat. CTA: Bekijk onze
projecten CTA URL: /projecten/ Visual: Macro-foto van een perfecte tegelvoeg of
een detail van een strakke nis met LED-integratie. ALT: detailopname van perfect
uitgelijnde tegelvoegen en een ingebouwde nis

FINAL CTA H2: Klaar om uw project te bespreken? Body: Deel uw ideeën,
referentiebeelden of plattegrond met ons. Wij denken technisch met u mee en
zorgen voor een vlekkeloze uitvoering. Button: Project bespreken URL: /contact/

PAGE: Complete Badkamer Renovatie URL: /complete-badkamer-renovatie/

SEO Title: Complete Badkamer Renovatie | Turnkey & Premium Afwerking Meta
Description: Uw badkamer verbouwen van A tot Z. Sppat verzorgt sloop,
leidingwerk, waterdichting en luxe tegelwerk. Vraag een offerte aan voor uw
complete renovatie. Primary Keyword: badkamer renovatie Secondary Semantics:
badkamer verbouwen, turnkey badkamer, luxe badkamer installateur Search Intent:
Service

HERO Eyebrow: Turnkey Projecten H1: Complete Badkamer Renovatie Body: Wij nemen
de volledige technische uitvoering van uw nieuwe badkamer uit handen. Van het
strippen van de oude ruimte tot de laatste kitrand. Eén aanspreekpunt,
compromisloze kwaliteit en een eindresultaat dat klopt tot op de millimeter.
Primary CTA: Project bespreken Primary CTA URL: /contact/ Visual: Voor/na of een
indrukwekkende overzichtsfoto van een recent opgeleverde badkamer. ALT: compleet
gerenoveerde luxe badkamer met inloopdouche en strak tegelwerk

SECTION 2 Type: List H2: Van sloop tot oplevering Body: Een badkamer verbouwen
is een aaneenschakeling van technische disciplines. Wij voeren alle stappen in
eigen beheer of onder strikte regie uit. Bullets:

- Demontage en afvoer van bestaand sanitair
- Frezen en verleggen van leidingwerk en elektra
- Wanden en vloeren lasernauwkeurig uitvlakken
- Professionele waterdichting in natte zones
- Installatie van inbouwreservoirs (Geberit) en onzichtbare luiken
- Aanleggen van (elektrische) vloerverwarming
- Premium tegelwerk en voegwerk
- Afmontage van sanitair, kranen en LED-verlichting

SECTION 3 Type: Text + Internal Links H2: Welke tegels kiest u voor uw badkamer?
Body: Het tegelwerk bepaalt de uiteindelijke uitstraling van de ruimte. Wij zijn
gespecialiseerd in het verwerken van complexe materialen. Of u nu kiest voor de
naadloze look van grootformaat tegels, de detaillering van mozaïek, of de
organische uitstraling van natuursteen, wij streven naar een technisch en
visueel hoogwaardige verwerking. Visual: Detailfoto van een overgang tussen
vloer en wand in een inloopdouche. ALT: strakke overgang van vloertegels naar
wandtegels in inloopdouche

FAQ Question: Hoe lang duurt een complete badkamer renovatie? Answer: [BUSINESS
INPUT REQUIRED: average duration of a complete bathroom renovation].

Question: Installeren jullie ook inbouwkranen en nissen? Answer: Ja.
Inbouwkranen, regendouches uit het plafond en op maat gemaakte nissen (eventueel
met LED-profielen) behoren tot onze standaard werkzaamheden bij luxe renovaties.

Question: Regelen jullie ook het leidingwerk? Answer: Ja, bij een complete
renovatie passen wij al het benodigde leidingwerk en de afvoeren aan op het
nieuwe ontwerp.

INTERNAL LINKS Anchor: grootformaat tegels Target URL:
/specialisaties/grootformaat-tegels/ Placement: Section 3 Body

Anchor: mozaïek Target URL: /specialisaties/mozaiek-zetten/ Placement: Section 3
Body

Anchor: natuursteen Target URL: /specialisaties/natuursteen/ Placement:
Section 3 Body

FINAL CTA H2: Start uw renovatie Body: Heeft u een ontwerp of referentiebeelden?
Wij vertalen uw idee naar een technisch perfecte badkamer. Button: Project
bespreken URL: /contact/

PAGE: Badkamer Renovatie Almere URL: /complete-badkamer-renovatie/almere/

SEO Title: Badkamer Renovatie Almere | Premium Kwaliteit | Sppat Meta
Description: Zoekt u een specialist voor een complete badkamer renovatie in
Almere? Sppat levert turnkey maatwerk, van leidingwerk tot luxe tegelwerk.
Primary Keyword: badkamer renovatie almere Secondary Semantics: badkamer
verbouwen almere, badkamer installateur almere Search Intent: Local Service

HERO Eyebrow: Lokaal Vakmanschap H1: Badkamer Renovatie in Almere Body:
Gevestigd in Almere, levert Sppat hoogwaardige badkamer renovaties in de hele
regio. Wij verzorgen het complete traject: van het eerste breekwerk tot de
installatie van uw inbouwkranen en het zetten van grootformaat tegels. Primary
CTA: Project bespreken Primary CTA URL: /contact/ Visual: Foto van een in Almere
opgeleverd project (indien beschikbaar), anders een sterke referentiefoto. ALT:
luxe badkamer renovatie uitgevoerd in almere

SECTION 2 Type: Text H2: Uw lokale specialist voor complexe projecten Body: Of u
nu woont in Almere Poort, Duin of Haven, wij kennen de lokale bouwstijlen. Wij
onderscheiden ons door niet te kiezen voor de makkelijkste weg, maar voor de
technisch beste oplossing. Rechte wanden, perfect afschot in uw inloopdouche en
tegelwerk zonder hoogteverschillen. CTA: Bekijk projecten CTA URL: /projecten/

SECTION 3 Type: Text + Internal Links H2: Tegelwerk in uw badkamer in Almere
Body: Het tegelwerk bepaalt de uiteindelijke uitstraling van de ruimte. Wij zijn
gespecialiseerd in het verwerken van complexe materialen. Of u nu kiest voor de
naadloze look van grootformaat tegels, de detaillering van mozaïek, of de
organische uitstraling van natuursteen, wij streven naar een technisch en
visueel hoogwaardige verwerking.

FAQ Question: Hoe lang duurt een complete badkamer renovatie? Answer: [BUSINESS
INPUT REQUIRED: average duration of a complete bathroom renovation].

Question: Installeren jullie ook inbouwkranen en nissen? Answer: Ja.
Inbouwkranen, regendouches uit het plafond en op maat gemaakte nissen (eventueel
met LED-profielen) behoren tot onze standaard werkzaamheden bij luxe renovaties.

Question: Regelen jullie ook het leidingwerk? Answer: Ja, bij een complete
renovatie passen wij al het benodigde leidingwerk en de afvoeren aan op het
nieuwe ontwerp.

INTERNAL LINKS Anchor: grootformaat tegels Target URL:
/specialisaties/grootformaat-tegels/ Placement: Section 3 Body

Anchor: mozaïek Target URL: /specialisaties/mozaiek-zetten/ Placement: Section 3
Body

Anchor: natuursteen Target URL: /specialisaties/natuursteen/ Placement:
Section 3 Body

FINAL CTA H2: Start uw renovatie in Almere Body: Heeft u een ontwerp of
referentiebeelden? Wij vertalen uw idee naar een technisch perfecte badkamer.
Button: Project bespreken URL: /contact/

PAGE: Complete Toilet Renovatie URL: /complete-toilet-renovatie/

SEO Title: Complete Toilet Renovatie | Inbouw & Tegelwerk | Sppat Meta
Description: Laat uw toilet compleet renoveren. Wij verzorgen de installatie van
inbouwreservoirs, strak stucwerk en premium tegelwerk. Primary Keyword: toilet
renovatie Secondary Semantics: wc verbouwen, toiletruimte renoveren Search
Intent: Service

HERO Eyebrow: Turnkey Projecten H1: Complete Toilet Renovatie Body: Een kleine
ruimte vereist maximale precisie. Wij renoveren uw toiletruimte compleet,
inclusief het verleggen van leidingen, de installatie van het inbouwreservoir en
hoogwaardig tegelwerk. Primary CTA: Project bespreken Primary CTA URL: /contact/
Visual: Foto van een modern, zwevend toilet met strak tegelwerk op de
achterwand. ALT: modern zwevend toilet met inbouwreservoir en strak tegelwerk

SECTION 2 Type: List H2: Wat omvat een toilet renovatie? Body: Wij pakken de
ruimte vanaf de basis aan. Bullets:

- Verwijderen oud sanitair en tegels
- Installatie inbouwreservoir (bijv. Geberit)
- Leidingwerk aanpassen voor fontein
- Wanden uitvlakken
- Tegelwerk (vloer en wanden)
- Afmontage zwevend toilet en bedieningsplaat

FINAL CTA H2: Uw toiletruimte vernieuwen? Body: Wij zorgen voor een strakke,
moderne afwerking van uw toilet. Button: Project bespreken URL: /contact/

PAGE: Tegelwerk Hub URL: /tegelwerk/

SEO Title: Professioneel Tegelwerk | Vloeren, Wanden & Keukens | Sppat Meta
Description: Specialist in premium tegelwerk. Wij leggen vloertegels, wandtegels
en keukenachterwanden met wiskundige precisie. Bekijk onze diensten. Primary
Keyword: tegelwerk Secondary Semantics: tegelzetter, tegels leggen Search
Intent: Hub / Service

HERO Eyebrow: Precisie in elke ruimte H1: Professioneel Tegelwerk Body:
Tegelzetten is millimeterwerk. Wij verzorgen hoogwaardig tegelwerk voor vloeren,
wanden, keukens en balkons. Met de juiste voorbereiding, egalisatie en
verlijming leggen wij de basis voor een strak en duurzaam resultaat. Primary
CTA: Project bespreken Primary CTA URL: /contact/ Visual: Overzichtsfoto van een
strak getegelde woonkamervloer of keuken. ALT: strak gelegde tegelvloer in
moderne woonruimte

SECTION 2 Type: Cards H2: Waar kunnen wij u mee helpen? Card 1 Title:
Vloertegels leggen Card 1 Body: Strakke, vlakke vloeren voor uw woonkamer, hal
of keuken. Inclusief voorbereiding en egalisatie. Card 1 CTA: Lees meer Card 1
CTA URL: /tegelwerk/vloer-tegelen/ Card 2 Title: Wandtegels zetten Card 2 Body:
Perfect uitgelijnde wanden voor een ruimtelijk effect. Card 2 CTA: Lees meer
Card 2 CTA URL: /tegelwerk/wand-tegelen/ Card 3 Title: Badkamer tegelen Card 3
Body: Heeft u de installatie al geregeld en zoekt u puur een vakman voor het
tegelwerk in natte ruimtes? Card 3 CTA: Lees meer Card 3 CTA URL:
/tegelwerk/badkamer-tegelen/ Card 4 Title: Keuken tegelen Card 4 Body:
Hittebestendige en makkelijk te reinigen achterwanden en keukenvloeren. Card 4
CTA: Lees meer Card 4 CTA URL: /tegelwerk/keuken-tegelen/ Card 5 Title: Balkon
tegelen Card 5 Body: Vorstbestendig buitentegelwerk met de juiste afwatering.
Card 5 CTA: Lees meer Card 5 CTA URL: /tegelwerk/balkon-tegelen/

FINAL CTA H2: Uw tegelproject bespreken? Body: Wij vertalen uw wensen naar een
technisch perfect resultaat. Button: Project bespreken URL: /contact/

PAGE: Badkamer Tegelen URL: /tegelwerk/badkamer-tegelen/

SEO Title: Badkamer Laten Tegelen | Professionele Tegelzetter | Sppat Meta
Description: Zoekt u een tegelzetter voor uw badkamer? Wij verzorgen de
waterdichting, uitvlakking en het tegelwerk. Perfect afschot en strakke voegen
gegarandeerd. Primary Keyword: badkamer laten tegelen Secondary Semantics:
tegelzetter badkamer, badkamer betegelen Search Intent: Service

HERO Eyebrow: Tegelwerk in natte ruimtes H1: Badkamer Laten Tegelen Body: Heeft
u het leidingwerk en de installatie al in eigen beheer geregeld, maar zoekt u
een specialist voor de afwerking? Wij verzorgen het complete tegelwerk in uw
badkamer, inclusief de cruciale voorbereidingen zoals waterdichting en het
creëren van het juiste afschot. Focus op correct afschot en een strak
voegenspel. Primary CTA: Project bespreken Primary CTA URL: /contact/ Visual:
Vakman bezig met het zetten van tegels in doucheruimte. ALT: professionele
tegelzetter plaatst wandtegels in badkamer

SECTION 2 Type: List H2: Meer dan alleen tegels plakken Body: In een natte
ruimte is de voorbereiding net zo belangrijk als het zichtbare resultaat. Wij
zorgen voor: Bullets:

- Zorgvuldig uitvlakken van de wanden
- Aanbrengen van betrouwbare waterdichting in de hoeken en natte zones
- Berekenen en smeren van het juiste afschot naar de drain
- Gebruik van professionele lijm- en voegsystemen afgestemd op de ruimte

SECTION 3 Type: Text + Internal Links H2: Zoekt u een partij voor de héle
verbouwing? Body: Wilt u niet alleen tegelen, maar de volledige ruimte laten
strippen en opbouwen inclusief loodgieterswerk? Bekijk dan onze dienst voor
complete badkamer renovatie.

INTERNAL LINKS Anchor: complete badkamer renovatie Target URL:
/complete-badkamer-renovatie/ Placement: Section 3 Body

FINAL CTA H2: Uw badkamer professioneel laten tegelen? Body: Wij zorgen voor een
waterdichte en strakke afwerking. Button: Project bespreken URL: /contact/

PAGE: Vloer Tegelen URL: /tegelwerk/vloer-tegelen/

SEO Title: Vloertegels Leggen | Woonkamer, Hal & Keuken | Sppat Meta
Description: Laat uw vloertegels leggen door een specialist. Wij zorgen voor een
perfect geëgaliseerde ondervloer en strak tegelwerk zonder hoogteverschillen.
Primary Keyword: vloertegels leggen Secondary Semantics: tegelvloer leggen,
woonkamer tegels leggen Search Intent: Service

HERO Eyebrow: Vloerafwerking H1: Vloertegels Leggen Body: Een tegelvloer is een
investering voor het leven. Wij leggen vloertegels in woonkamers, keukens en
hallen met absolute precisie. Door een nauwkeurige werkwijze minimaliseren wij
de kans op struikelranden (lippage) voor een strakke vloer. Primary CTA: Project
bespreken Primary CTA URL: /contact/ Visual: Detail van een leveling systeem
(keggen en clips) op een pas gelegde tegelvloer. ALT: leveling systeem gebruikt
bij het leggen van strakke vloertegels

SECTION 2 Type: Text H2: Voorbereiding is het halve werk Body: Een strakke vloer
begint bij de ondergrond. Wij beoordelen de dekvloer, brengen waar nodig een
primer aan en egaliseren de vloer voor een spiegelgladde basis. Bij complexe
ondervloeren of vloerverwarming beoordelen wij of ontkoppeling nodig is om
spanningen en scheurvorming te voorkomen. [BUSINESS INPUT REQUIRED: Bevestig
standaard gebruik ontkoppelingsmatten bij vloerverwarming].

FINAL CTA H2: Een nieuwe tegelvloer realiseren? Body: Wij leggen de basis voor
uw interieur met strak en duurzaam vloertegelwerk. Button: Project bespreken
URL: /contact/

PAGE: Wand Tegelen URL: /tegelwerk/wand-tegelen/

SEO Title: Wandtegels Zetten | Strakke Wanden & Perfecte Voegen | Sppat Meta
Description: Professioneel wandtegels laten zetten. Voor een premium resultaat
is een vlakke ondergrond en exacte uitlijning cruciaal. Bespreek uw project met
Sppat. Primary Keyword: wandtegels zetten Secondary Semantics: wand tegelen,
wandtegels badkamer, tegels op muur plaatsen Search Intent: Service

HERO Eyebrow: Verticale Precisie H1: Wandtegels Zetten Body: Het tegelen van
wanden vraagt om een strakke planning en een perfecte uitlijning. Zwaartekracht,
ongelijkmatige muren en complexe hoeken maken dit tot specialistisch werk. Wij
verzorgen wandtegelwerk waarbij het voegenspel naadloos doorloopt en het
eindresultaat visueel in balans is. Primary CTA: Project bespreken Primary CTA
URL: /contact/ Visual: Zijaanzicht van een strak getegelde wand waarbij de
vlakheid van de tegels goed zichtbaar is. ALT: strak afgewerkte tegelwand met
perfect uitgelijnde voegen

SECTION 2 Type: List H2: Uitvlakken en voorbereiden Body: Een strakke tegelwand
begint bij de ondergrond. Bestaande muren zijn zelden perfect recht of waterpas.
Een professionele voorbereiding richt zich op het creëren van een spiegelgladde
basis. Bullets:

- Beoordeling van de draagkracht van de muur.
- Het uitvlakken of stucen van onregelmatigheden.
- [BUSINESS INPUT REQUIRED: Bevestig standaard gebruik van specifieke primers
  of voorstrijkmiddelen voor wanden].
- Het bepalen van de exacte startlijn om smalle, esthetisch storende
  snijstukken bij het plafond of de vloer te voorkomen.

SECTION 3 Type: Text H2: Aandacht voor hoeken en overgangen Body: De kwaliteit
van wandtegelwerk is het best zichtbaar in de details. Uitwendige hoeken, nissen
en de overgang naar het plafond vereisen precisie. Afhankelijk van de gekozen
tegel en het ontwerp, kan er gewerkt worden met in verstek gezaagde randen of
hoogwaardige afwerkprofielen. CTA: Bekijk onze projecten CTA URL: /projecten/

FAQ Question: Kunnen jullie over bestaande wandtegels heen tegelen? Answer: Dit
is in sommige gevallen technisch mogelijk, mits de bestaande tegels vastzitten
en de muur het extra gewicht kan dragen. Bij complete renovaties geven wij er
echter de voorkeur aan om de ruimte tot op het casco te strippen voor het beste
resultaat.

Question: Hoe zorgen jullie dat de voegen van de vloer doorlopen in de wand?
Answer: Dit vereist een zorgvuldig legplan vooraf. Als de vloer- en wandtegels
exact dezelfde maatvoering hebben, meten wij de ruimte vooraf uit zodat de
lijnen visueel ononderbroken doorlopen.

FINAL CTA H2: Uw wanden professioneel laten tegelen? Body: Wij vertalen uw
wensen naar een technisch en esthetisch hoogwaardig resultaat. Button: Project
bespreken URL: /contact/

PAGE: Keuken Tegelen URL: /tegelwerk/keuken-tegelen/

SEO Title: Keuken Achterwand & Vloer Tegelen | Maatwerk | Sppat Meta
Description: Uw keuken achterwand of keukenvloer laten tegelen? Wij leveren
strak maatwerk rondom stopcontacten en kasten voor een hoogwaardige afwerking.
Primary Keyword: keuken achterwand tegelen Secondary Semantics: keukenvloer
tegelen, tegels keuken plaatsen Search Intent: Service

HERO Eyebrow: Keuken Tegelwerk H1: Keuken Achterwand & Vloer Tegelen Body: De
keuken is een intensief gebruikte ruimte waar esthetiek en functionaliteit
samenkomen. Of het nu gaat om een robuuste tegelvloer of een hittebestendige,
strakke achterwand: wij verzorgen tegelwerk dat perfect aansluit op uw
keukenopstelling. Primary CTA: Project bespreken Primary CTA URL: /contact/
Visual: Detailopname van een strak getegelde keukenachterwand, met een perfect
uitgesneden tegel rondom een stopcontact. ALT: strak getegelde keuken achterwand
met precisie uitsnede rondom stopcontact

SECTION 2 Type: List H2: Maatwerk rondom uw apparatuur Body: Het tegelen van een
achterwand in de keuken vereist precisie. De ruimte tussen het werkblad en de
bovenkastjes is beperkt en wordt vaak onderbroken door stopcontacten,
schakelaars en afzuigkappen. Bullets:

- Exacte uitsnedes rondom inbouwdozen en stopcontacten.
- Naadloze aansluiting op het werkblad.
- Rekening houden met hittebestendigheid achter kookplaten.
- Toepassing van voegwerk dat bestand is tegen vocht en vet.

SECTION 3 Type: Text + Internal Links H2: Een solide basis voor uw keuken Body:
Een keukenvloer moet bestand zijn tegen intensief gebruik. Bij het leggen van
vloertegels in de keuken is de aansluiting met de kastenwand en kookeilanden
essentieel. Wij zorgen voor een vlakke vloer die visueel rust brengt in de
ruimte.

FAQ Question: Tegelen jullie de achterwand voor of na het plaatsen van de
keuken? Answer: In de meeste gevallen wordt de achterwand getegeld nadat de
keuken (inclusief het werkblad) is geplaatst. Dit zorgt voor de strakste
aansluiting tussen het blad en de tegels.

Question: Welk voegmiddel is geschikt voor een keukenachterwand? Answer: Voor
keukens is een vuil- en vetafstotend voegmiddel belangrijk. [BUSINESS INPUT
REQUIRED: Bevestig of Sppat standaard epoxy of een specifiek gecoat
cementvoegsel adviseert voor keukens].

INTERNAL LINKS Anchor: vloertegels leggen Target URL: /tegelwerk/vloer-tegelen/
Placement: Section 3 Body

FINAL CTA H2: Uw keukenproject bespreken? Body: Deel uw keukenontwerp met ons
voor een naadloze afwerking van uw vloer en wanden. Button: Project bespreken
URL: /contact/

PAGE: Balkon Tegelen URL: /tegelwerk/balkon-tegelen/

SEO Title: Balkon Tegelen | Buitentegelwerk & Afwatering | Sppat Meta
Description: Laat uw balkon professioneel tegelen. Buitentegelwerk vereist
specifieke aandacht voor weersinvloeden, vorst en een correcte waterafvoer.
Primary Keyword: balkon tegelen Secondary Semantics: buitentegels leggen balkon,
balkonvloer tegelen Search Intent: Service

HERO Eyebrow: Buitentegelwerk H1: Balkon Tegelen Body: Tegelwerk in de
buitenlucht wordt blootgesteld aan extreme temperatuurschommelingen, vorst en
regen. Een balkon tegelen is daarom fundamenteel anders dan binnenwerk. Het
vereist een technische opbouw die vochtschade en losvriezende tegels voorkomt.
Primary CTA: Project bespreken Primary CTA URL: /contact/ Visual: Strak getegeld
balkon met een subtiele afschotlijn voor waterafvoer. ALT: professioneel
getegeld balkon met vorstbestendige tegels

SECTION 2 Type: List H2: Bescherming tegen de elementen Body: Buitentegelwerk
dat niet correct is opgebouwd, zal na enkele winters scheuren of loslaten. Een
professionele uitvoering richt zich op vochtregulatie en spanningsverdeling.
Bullets:

- Afschot: Het creëren van een lichte helling zodat regenwater direct naar de
  afvoer of dakgoot loopt.
- Ontkoppeling en drainage: [BUSINESS INPUT REQUIRED: Bevestig of Sppat
  standaard drainagematten/ontkoppelingsmatten gebruikt bij balkons].
- Weersbestendige materialen: Gebruik van lijm en voegmiddel die bestand zijn
  tegen vorst en hitte.

FAQ Question: Welke tegels zijn geschikt voor een balkon? Answer: Voor
buitengebruik zijn keramische tegels met een lage wateropname (minder dan 0,5%)
en een antislip-afwerking de beste keuze. Natuursteen is mogelijk, maar vereist
specifiek onderhoud.

Question: Waarom laten tegels op een balkon soms los? Answer: Dit gebeurt
meestal wanneer vocht onder de tegel dringt en vervolgens bevriest (uitzet). Een
correcte verlijming zonder holle ruimtes en een goede afwatering voorkomen dit
probleem.

FINAL CTA H2: Uw balkon voorzien van hoogwaardig tegelwerk? Body: Wij zorgen
voor een strakke buitenruimte die bestand is tegen het Nederlandse klimaat.
Button: Project bespreken URL: /contact/

PAGE: Specialisaties Hub URL: /specialisaties/

SEO Title: Tegel Specialisaties | Grootformaat, Mozaïek & Natuursteen Meta
Description: Sppat is gespecialiseerd in complex tegelwerk. Ontdek onze
expertise in grootformaat (XXL) tegels, mozaïek, natuursteen en keramisch
parket. Primary Keyword: tegel specialisaties Secondary Semantics: complex
tegelwerk, luxe tegels zetten Search Intent: Hub

HERO Eyebrow: High-end materialen H1: Specialisaties in Tegelwerk Body: Bepaalde
materialen en formaten vereisen specifieke technische kennis, speciaal
gereedschap en chemische expertise. Wij hebben ons toegelegd op het verwerken
van de meest veeleisende tegelsoorten. Primary CTA: Bekijk projecten Primary CTA
URL: /projecten/ Visual: Collage of split-screen van een XXL tegel en een detail
van mozaïek. ALT: contrast tussen grootformaat tegels en gedetailleerd
mozaiekwerk

SECTION 2 Type: Cards H2: Expertise gebieden Card 1 Title: Grootformaat Tegels
Card 1 Body: Naadloze afwerking met XXL keramische platen voor een ruimtelijk
effect. Card 1 CTA: Lees meer Card 1 CTA URL:
/specialisaties/grootformaat-tegels/ Card 2 Title: Mozaïek Zetten Card 2 Body:
Millimeterwerk en perfecte uitlijning voor exclusieve badkamers en nissen.
Card 2 CTA: Lees meer Card 2 CTA URL: /specialisaties/mozaiek-zetten/ Card 3
Title: Natuursteen Card 3 Body: Vakkundige verwerking van marmer, travertin en
hardsteen. Card 3 CTA: Lees meer Card 3 CTA URL: /specialisaties/natuursteen/
Card 4 Title: Keramisch Parket Card 4 Body: De warme uitstraling van hout met de
duurzaamheid van keramiek. Card 4 CTA: Lees meer Card 4 CTA URL:
/specialisaties/keramisch-parket/

FINAL CTA H2: Een project met exclusieve materialen? Body: Wij hebben de
technische kennis in huis om uw ontwerp perfect uit te voeren. Button: Project
bespreken URL: /contact/

PAGE: Grootformaat Tegels URL: /specialisaties/grootformaat-tegels/

SEO Title: Grootformaat Tegels Leggen | XXL Tegelzetter Specialist Meta
Description: Specialist in het naadloos leggen van grootformaat (XXL) tegels.
Wij streven naar maximaal vlak tegelwerk met minimale voeglijnen. Vraag een
offerte aan. Primary Keyword: grootformaat tegels leggen Secondary Semantics:
XXL tegels badkamer plaatsen, keramische platen zetten, tegel lippage voorkomen
Search Intent: Niche Service

HERO Eyebrow: XXL Tegelwerk H1: Grootformaat Tegels Leggen Body: Grootformaat
tegels (zoals 120x120cm of kamerhoge platen) creëren een ongeëvenaarde,
ruimtelijke en luxe uitstraling met minimale voegen. Het verwerken van deze
XXL-tegels is echter topsport en vereist een absolute specialist om breuk, holle
klanken en hoogteverschillen te voorkomen. Wij streven naar maximaal vlak
tegelwerk met minimale voeglijnen. Primary CTA: Project bespreken Primary CTA
URL: /contact/ Visual: Badkamer of woonkamer met kamerhoge, naadloos geplaatste
marmerlook tegels. ALT: luxe badkamer met kamerhoge marmerlook grootformaat
tegels naadloos gezet

SECTION 2 Type: Text H2: Waarom XXL tegels zetten millimeterwerk is Body: Hoe
groter de tegel, hoe kleiner de foutmarge. Een hoogwaardige verwerking van
XXL-tegels vereist specifieke technieken. Afhankelijk van de situatie en de
ondergrond passen professionals methoden toe zoals dubbele verlijming
(buttering-floating) voor maximale hechting, en leveling systemen om
hoogteverschillen tijdens het drogen te voorkomen. [BUSINESS INPUT REQUIRED:
Bevestig welke specifieke protocollen Sppat standaard hanteert bij XXL tegels].

SECTION 3 Type: Text H2: Grootformaat in de badkamer Body: XXL tegels zijn
ideaal voor de badkamer vanwege het minimale aantal voegen, wat schoonmaken
eenvoudig maakt. In inloopdouches snijden wij de tegels diagonaal
(envelop-snede) of werken we met een subtiele afschotlijn naar een onzichtbare
drain, zodat het water perfect wegloopt zonder de strakke look te verstoren.

FINAL CTA H2: Grootformaat tegels in uw project? Body: Wij zorgen voor een
strakke, naadloze verwerking van uw XXL tegels. Button: Project bespreken URL:
/contact/

PAGE: Mozaïek Zetten URL: /specialisaties/mozaiek-zetten/

SEO Title: Mozaïek Tegelzetter Specialist | Perfecte Voegen & Uitlijning Meta
Description: Exclusief mozaïek tegelwerk voor uw badkamer of wellness. Wij
garanderen onzichtbare mat-overgangen en perfect uitgelijnde voegen. Primary
Keyword: mozaïek tegelzetter Secondary Semantics: glasmozaïek badkamer plaatsen,
mozaïek nis maken, uitlijning mozaïek tegels Search Intent: Niche Service

HERO Eyebrow: Exclusief detailwerk H1: Professionele Mozaïek Tegelzetter Body:
Mozaïek is de kroon op uw badkamer. Van glasmozaïek in een nis tot natuursteen
mozaïek op een ronde douchewand. Het vereist een timmermansoog om de matjes zo
te plaatsen dat de overgangen onzichtbaar zijn en het lijnen- en voegenspel
ononderbroken doorloopt. Onze focus ligt op onzichtbare mat-overgangen en een
perfect uitgelijnd voegenspel. Primary CTA: Project bespreken Primary CTA URL:
/contact/ Visual: Close-up van een perfect uitgelichte nis bekleed met
glasmozaïek. ALT: luxe ingebouwde shampoo nis bekleed met glasmozaiek

SECTION 2 Type: List H2: Het geheim van perfect mozaïek Body: Slecht gezet
mozaïek herkent u direct aan het 'blok-effect': u ziet precies waar het ene
matje stopt en het andere begint. Wij voorkomen dit door: Bullets:

- De ondergrond spiegelglad voor te bereiden (elke oneffenheid is zichtbaar
  bij mozaïek).
- De matjes handmatig te corrigeren voor een perfecte voegbreedte.
- Hoeken in verstek te zagen of af te werken met premium profielen.
- [BUSINESS INPUT REQUIRED: Bevestig of Sppat standaard epoxyvoeg gebruikt in
  natte ruimtes. Zo ja, voeg toe: Toepassing van hoogwaardig voegmiddel ter
  bescherming tegen vocht en verkleuring].

FINAL CTA H2: Exclusief mozaïek in uw badkamer? Body: Wij verzorgen het
detailwerk dat uw ruimte uniek maakt. Button: Project bespreken URL: /contact/

PAGE: Natuursteen URL: /specialisaties/natuursteen/

SEO Title: Natuursteen Leggen | Marmer, Travertin & Hardsteen | Sppat Meta
Description: Natuursteen vereist specifieke vakkennis. Wij plaatsen marmer,
travertin en hardsteen met aandacht voor kalibratie en de juiste verlijming.
Primary Keyword: natuursteen leggen Secondary Semantics: marmer badkamer
plaatsen, travertin vloer leggen, natuursteen tegelzetter Search Intent: Service

HERO Eyebrow: Organische Materialen H1: Natuursteen Leggen & Verwerken Body:
Natuursteen zoals marmer, travertin of Belgisch hardsteen geeft een ruimte een
uniek, organisch karakter. Omdat het een natuurproduct is, reageert het anders
op vocht, lijm en temperatuur dan keramiek. Het verwerken van natuursteen
vereist daarom specifieke materiaalkennis en precisie. Primary CTA: Project
bespreken Primary CTA URL: /contact/ Visual: Detailopname van een luxe badkamer
of vloer afgewerkt met marmer of travertin. ALT: luxe badkamer afgewerkt met
natuursteen marmer tegels

SECTION 2 Type: List H2: Vakmanschap in verwerking Body: Geen enkele natuursteen
tegel is exact hetzelfde. Dit vraagt om een tegelzetter die kan anticiperen op
de eigenschappen van het materiaal. Bullets:

- Dikteverschillen (Kalibratie): Natuursteen kan variëren in dikte. Dit wordt
  tijdens het leggen opgevangen door te werken met een dikbedlijm of door de
  ondergrond per tegel aan te passen.
- Vlekvorming voorkomen: Bepaalde soorten natuursteen zijn poreus of gevoelig
  voor zuren. Het gebruik van de verkeerde (zuurhoudende) lijm of kit kan
  onherstelbare vlekken in de steen veroorzaken.
- Legverband en tekening: Het vooraf uitleggen en selecteren van de tegels om
  een visueel kloppend patroon te creëren met de natuurlijke aderen van de
  steen.

SECTION 3 Type: Text H2: Onderhoud en bescherming Body: Om natuursteen, zeker in
natte ruimtes zoals de badkamer, mooi te houden, is bescherming essentieel.
[BUSINESS INPUT REQUIRED: Bevestig of Sppat het impregneren/sealen van
natuursteen standaard uitvoert als onderdeel van de oplevering].

FAQ Question: Kan natuursteen in de inloopdouche worden gebruikt? Answer: Ja,
maar het vereist zorgvuldige waterdichting, de juiste zuurvrije materialen en
regelmatig onderhoud (zoals impregneren) om de steen te beschermen tegen kalk en
shampoo.

Question: Is natuursteen geschikt voor vloerverwarming? Answer: Natuursteen is
een uitstekende warmtegeleider en werkt zeer goed in combinatie met
vloerverwarming.

FINAL CTA H2: Natuursteen in uw project integreren? Body: Wij hebben de
expertise in huis om uw natuursteen perfect te verwerken. Button: Project
bespreken URL: /contact/

PAGE: Keramisch Parket URL: /specialisaties/keramisch-parket/

SEO Title: Keramisch Parket Leggen | Houtlook Tegels | Sppat Meta Description:
Laat uw keramisch parket professioneel leggen. Wij creëren een warme houtlook
met de duurzaamheid van tegels. Ideaal voor vloerverwarming. Primary Keyword:
keramisch parket leggen Secondary Semantics: houtlook tegels leggen, keramisch
hout plaatsen Search Intent: Service

HERO Eyebrow: Houtlook Vloeren H1: Keramisch Parket Leggen Body: Keramisch
parket combineert de warme, natuurlijke uitstraling van een houten vloer met de
robuustheid en het onderhoudsgemak van tegels. Voor een realistisch resultaat is
de manier van leggen echter doorslaggevend. Wij verzorgen de professionele
installatie van houtlook tegels. Primary CTA: Project bespreken Primary CTA URL:
/contact/ Visual: Woonkamer met een strak gelegde keramisch parket vloer in
wildverband. ALT: woonkamer vloer voorzien van keramisch parket in houtlook

SECTION 2 Type: List H2: Een realistisch resultaat Body: Een houtlook tegelvloer
oogt pas echt als hout wanneer de details kloppen. Bullets:

- Wildverband: Door de tegels in een willekeurig patroon (wildverband) te
  leggen, voorkomen we een onnatuurlijk 'trap-effect' en bootsen we een echte
  houten plankenvloer na.
- Minimale voegbreedte: Hoe smaller de voeg, hoe realistischer de vloer.
- Kleur van de voeg: Door een voegkleur te kiezen die exact aansluit bij de
  tint van de tegel, valt de voeglijn visueel weg.

SECTION 3 Type: Text H2: Vlakheid bij lange tegels Body: Keramische planken zijn
vaak lang en smal (bijvoorbeeld 20x120cm). Tijdens het bakproces in de fabriek
ontstaat er altijd een lichte bolling in dergelijke tegels. Een professionele
tegelzetter weet hoe deze spanning verdeeld moet worden tijdens het leggen,
[BUSINESS INPUT REQUIRED: Bevestig of Sppat standaard leveling systemen gebruikt
bij keramisch parket] om hoogteverschillen te minimaliseren.

FAQ Question: Is keramisch parket geschikt voor vloerverwarming? Answer: Ja,
keramiek is een van de beste materialen om te combineren met vloerverwarming.
Het geleidt warmte efficiënt en houdt deze lang vast.

Question: Kan keramisch parket ook in de badkamer? Answer: Absoluut. Omdat het
keramiek is, is het volledig vochtbestendig en ideaal voor natte ruimtes.

FINAL CTA H2: Uw keramisch parket professioneel laten leggen? Body: Wij zorgen
voor een strakke vloer met een natuurlijke uitstraling. Button: Project
bespreken URL: /contact/

PAGE: Projecten URL: /projecten/

SEO Title: Portfolio & Projecten | Sppat Badkamers & Tegelwerk Meta Description:
Bekijk onze recent opgeleverde projecten. Van complete badkamer renovaties in
Almere tot high-end tegelwerk met grootformaat en mozaïek. Primary Keyword:
projecten sppat Search Intent: Trust / Conversion

HERO Eyebrow: Bewijs van vakmanschap H1: Onze Projecten Body: Kwaliteit laat
zich het best omschrijven door het te laten zien. Bekijk een selectie van onze
recent opgeleverde badkamers, toiletruimtes en tegelprojecten. Let op de
details, de strakke voegen en de naadloze afwerking. Primary CTA: Zelf een
project starten? Primary CTA URL: /contact/

SECTION 2 Type: Dynamic Grid H2: Recent opgeleverd Filters: Alle | Badkamers |
Tegelwerk | Specialisaties Card Template:

- Image: [PROJECT IMAGES]
- Title: [PROJECT TITLE]
- Location: [PROJECT LOCATION]
- Tags: [PROJECT SERVICES]
- Link: /projecten/[slug]/

FINAL CTA H2: Geïnspireerd door ons werk? Body: Wij vertalen uw ideeën naar een
vergelijkbaar hoogwaardig resultaat. Button: Project bespreken URL: /contact/

PAGE: Kennisbank Hub URL: /kennisbank/

SEO Title: Kennisbank | Technisch Advies over Tegelwerk & Renovaties Meta
Description: Lees technische artikelen over badkamer renovaties, waterdichting,
tegel lippage en voegwerk. Kennis en expertise van Sppat. Primary Keyword:
kennisbank tegelwerk Search Intent: Informational Hub

HERO H1: Kennisbank Body: Inzicht in de techniek achter een premium afwerking.
Hier delen wij onze kennis over veelvoorkomende problemen en de oplossingen die
wij toepassen.

SECTION 2 Type: Grid Card 1 Title: Waterdichting Badkamer: Het Belang van
Kimband & Pasta Card 1 CTA URL: /kennisbank/waterdichting-badkamer-kimband/
Card 2 Title: Tegel Lippage Voorkomen: Oorzaken & Oplossingen Card 2 CTA URL:
/kennisbank/tegel-lippage-voorkomen/ Card 3 Title: Onzichtbaar Inspectieluik in
de Badkamer Card 3 CTA URL: /kennisbank/onzichtbaar-luik-badkamer/ Card 4 Title:
Epoxyvoeg vs. Cementvoeg: Wat is de beste keuze? Card 4 CTA URL:
/kennisbank/epoxyvoeg-vs-cementvoeg/

PAGE: Kennisbank - Waterdichting URL:
/kennisbank/waterdichting-badkamer-kimband/

SEO Title: Waterdichting Badkamer: Het Belang van Kimband & Pasta Meta
Description: Lekkage in de badkamer voorkomen? Lees waarom een 100%
waterdichting met kimband en pasta cruciaal is voordat het tegelwerk begint.
Primary Keyword: waterdichting badkamer kimband Search Intent: Informational

HERO H1: Waterdichting in de badkamer: Waarom kimband onmisbaar is

SECTION 2 Type: Text H2: De onzichtbare bescherming Body: Een veelgemaakte fout
bij badkamer renovaties is de aanname dat tegels en voegmiddel 100% waterdicht
zijn. Dat zijn ze niet. Vocht kan door microscheurtjes in de voeg dringen.
Zonder de juiste voorbereiding leidt dit tot schimmel, loslatende tegels en
ernstige lekkages naar onderliggende verdiepingen.

SECTION 3 Type: Text H2: Hoe wij waterdichting toepassen Body: Voordat het
tegelwerk in natte zones (zoals de inloopdouche) begint, is een waterdicht
membraan cruciaal. In de professionele bouw wordt hiervoor vaak gewerkt met
kimband (een flexibele wapeningsband voor hoeken) in combinatie met een
waterdichte pasta. [BUSINESS INPUT REQUIRED: Bevestig of Sppat specifiek
kimband+pasta gebruikt, of een ander waterdichtingssysteem zoals
bouwplaten/doek].

SECTION 4 Type: Text + Internal Links H2: Zekerheid bij uw renovatie Body: Bij
een complete badkamer renovatie door Sppat is deze professionele waterdichting
standaard inbegrepen. Wij nemen geen risico's met vocht. Visual: Detailfoto van
blauwe of grijze waterdichtingspasta en kimband in de hoek van een douche, klaar
om getegeld te worden. ALT: professionele waterdichting met kimband in de hoeken
van een inloopdouche

INTERNAL LINKS Anchor: complete badkamer renovatie Target URL:
/complete-badkamer-renovatie/ Placement: Section 4 Body

FINAL CTA H2: Uw badkamer waterdicht en strak gerenoveerd? Body: Wij verzorgen
de complete technische uitvoering. Button: Project bespreken URL: /contact/

PAGE: Kennisbank - Lippage URL: /kennisbank/tegel-lippage-voorkomen/

SEO Title: Tegel Lippage Voorkomen: Oorzaken & Oplossingen | Kennisbank Meta
Description: Wat is tegel lippage en hoe voorkomt een professional
hoogteverschillen tussen tegels? Lees alles over vlakke ondergronden en leveling
systemen. Primary Keyword: tegel lippage voorkomen Search Intent: Informational

HERO H1: Tegel Lippage: Hoogteverschillen in tegelwerk voorkomen Body: Een van
de meest storende fouten in tegelwerk is 'lippage'. Dit is de technische term
voor een ongewenst hoogteverschil tussen twee aangrenzende tegels. Het zorgt
niet alleen voor een slordig visueel resultaat met schaduwwerking, maar kan op
vloeren ook een struikelgevaar vormen en snelle slijtage van de tegelranden
veroorzaken.

SECTION 2 Type: List + Internal Links H2: Hoe ontstaat lippage? Body:
Hoogteverschillen ontstaan zelden door de tegel zelf, maar vrijwel altijd door
de voorbereiding of de legmethode. De meest voorkomende oorzaken zijn: Bullets:

- Een onvlakke ondergrond: Als de dekvloer of wand bobbels of kuilen bevat,
  volgen de tegels deze contouren.
- Bolling in de tegel: Vooral bij grootformaat tegels en langwerpige tegels
  (zoals keramisch parket) ontstaat tijdens het bakproces een lichte kromming.
- Verkeerde lijmverdeling: Als de tegellijm niet gelijkmatig is aangebracht,
  kan een tegel tijdens het droogproces ongelijk wegzakken.

SECTION 3 Type: List H2: Hoe professionals een vlak resultaat bereiken Body: Om
een strakke vloer of wand op te leveren, worden in de professionele
tegelzetterij diverse methoden toegepast: Bullets:

- Egaliseren en uitvlakken: De basis moet spiegelglad zijn voordat de eerste
  tegel wordt geplaatst.
- Leveling systemen: Dit zijn clips en keggen (of draaidoppen) die tijdens het
  leggen tussen de tegels worden geplaatst. Ze trekken aangrenzende tegels op
  exact hetzelfde niveau en houden ze daar totdat de lijm volledig is
  uitgehard.
- Buttering-floating (Dubbele verlijming): Door zowel de ondergrond als de
  achterkant van de tegel in te smeren met lijm, ontstaat een massief lijmbed
  zonder luchtbellen, wat ongelijk inzakken voorkomt.

INTERNAL LINKS Anchor: grootformaat tegels Target URL:
/specialisaties/grootformaat-tegels/ Placement: Section 2 Bullets

FINAL CTA H2: Zeker zijn van strak tegelwerk? Body: Bij Sppat ligt de focus op
een hoogwaardige, vlakke afwerking van elk project. Button: Project bespreken
URL: /contact/ Visual: Close-up van een leveling systeem (keg en clip) dat twee
grote vloertegels op gelijke hoogte houdt. ALT: leveling systeem voorkomt
hoogteverschil tussen vloertegels

PAGE: Kennisbank - Onzichtbaar Luik URL: /kennisbank/onzichtbaar-luik-badkamer/

SEO Title: Onzichtbaar Inspectieluik in de Badkamer | Kennisbank Meta
Description: Toegang tot leidingwerk zonder het design van uw badkamer te
verstoren? Lees hoe een onzichtbaar, betegeld inspectieluik wordt gerealiseerd.
Primary Keyword: onzichtbaar luik badkamer Search Intent: Informational

HERO H1: Het onzichtbare inspectieluik: Techniek achter het design Body: In een
moderne, luxe badkamer wordt leidingwerk en techniek zoveel mogelijk weggewerkt
in de muren. Denk aan inbouwreservoirs, sifons van vrijstaande baden of
verdeelblokken voor vloerverwarming. Toch moet deze techniek bereikbaar blijven
voor eventueel onderhoud. Een standaard wit plastic luikje verstoort het
zorgvuldig ontworpen tegelwerk. De oplossing is een onzichtbaar, betegeld
inspectieluik.

SECTION 2 Type: List H2: Hoe werkt een betegeld luik? Body: Een onzichtbaar luik
wordt opgebouwd uit een speciaal frame dat in de wand wordt geïntegreerd.
Bullets:

- Naadloze integratie: Het deurtje van het luik wordt bekleed met exact
  dezelfde tegels als de rest van de wand.
- Voeglijnen: Het frame wordt zo geplaatst dat de randen van het luik precies
  samenvallen met de natuurlijke voeglijnen van het tegelwerk.
- Magnetisch of push-to-open: Het luik bevat geen zichtbare handgrepen, maar
  opent door een magnetisch systeem of een drukmechanisme.

SECTION 3 Type: Text + Internal Links H2: Planning tijdens de ruwbouw Body: Een
onzichtbaar luik kan niet achteraf worden geplaatst. Het vereist nauwkeurige
planning tijdens de opbouw van de wanden en het bepalen van het tegelplan. Bij
een complete badkamer renovatie wordt de positie van de techniek en de luiken
vooraf uitgetekend, zodat het eindresultaat visueel ononderbroken is.

INTERNAL LINKS Anchor: complete badkamer renovatie Target URL:
/complete-badkamer-renovatie/ Placement: Section 3 Body

FINAL CTA H2: Oog voor detail in uw nieuwe badkamer? Body: Wij integreren
noodzakelijke techniek zonder concessies te doen aan het design. Button: Project
bespreken URL: /contact/ Visual: Foto van een deels geopend, betegeld
inspectieluik in een strakke badkamerwand. ALT: onzichtbaar betegeld
inspectieluik in moderne badkamerwand

PAGE: Kennisbank - Epoxyvoeg vs Cementvoeg URL:
/kennisbank/epoxyvoeg-vs-cementvoeg/

SEO Title: Epoxyvoeg vs. Cementvoeg: Wat is de beste keuze? | Kennisbank Meta
Description: Wat is het verschil tussen epoxy en cementgebonden voegmiddel?
Ontdek welke voeg de beste bescherming biedt tegen vocht, vuil en schimmel.
Primary Keyword: epoxyvoeg vs cementvoeg Search Intent: Informational

HERO H1: Epoxyvoeg vs. Cementvoeg: Een technische vergelijking Body: Het
voegwerk is vaak de zwakste schakel in een betegelde ruimte. Waar tegels zelf
ondoordringbaar zijn, kan een verkeerd gekozen voeg na verloop van tijd vocht
opnemen, verkleuren of schimmelen. In de professionele tegelzetterij wordt
grofweg gewerkt met twee soorten voegmiddel: traditionele cementvoegen
en 2-componenten epoxyvoegen.

SECTION 2 Type: List H2: De traditionele keuze Body: Cementvoegen worden het
meest toegepast. Ze zijn relatief eenvoudig te verwerken en geschikt voor
ruimtes zoals woonkamers, hallen en slaapkamers. Bullets:

- Voordelen: Makkelijk aan te brengen, breed beschikbaar in vele kleuren,
  kostenefficiënt.
- Nadelen: Cement is van nature poreus. Zonder speciale coatings of regelmatig
  onderhoud kan het in natte ruimtes (zoals de inloopdouche) vocht en vuil
  opnemen, wat kan leiden tot schimmelvorming of verkleuring door
  schoonmaakmiddelen.

SECTION 3 Type: List + Internal Links H2: Maximale bescherming voor natte
ruimtes Body: Een epoxyvoeg bestaat uit twee componenten (een hars en een
verharder) die vlak voor gebruik worden gemengd. Bullets:

- Voordelen: Epoxy is 100% waterdicht, extreem hard, krimpvrij en bestand
  tegen zuren en chemicaliën. Omdat het niet poreus is, krijgen vuil en
  schimmel geen kans om zich te hechten. Dit maakt het bijzonder geschikt voor
  inloopdouches, zwembaden en mozaïek tegelwerk.
- Nadelen: Het materiaal is duurder en de verwerking vereist specifieke
  vakkennis en snelheid, omdat het materiaal snel uithardt en lastig te
  verwijderen is als het eenmaal op de tegel zit.

SECTION 4 Type: Text H2: Welke voeg kiest u? Body: Voor droge ruimtes volstaat
een hoogwaardige cementvoeg. Voor natte cellen, intensief belaste keukens of
exclusief mozaïekwerk biedt epoxy de meest duurzame en hygiënische oplossing op
lange termijn. [BUSINESS INPUT REQUIRED: Bevestig of Sppat standaard epoxy
adviseert/toepast in natte zones].

INTERNAL LINKS Anchor: mozaïek tegelwerk Target URL:
/specialisaties/mozaiek-zetten/ Placement: Section 3 Bullets

FINAL CTA H2: Advies over de juiste materialen voor uw project? Body: Wij denken
technisch met u mee voor een resultaat dat mooi is én blijft. Button: Project
bespreken URL: /contact/ Visual: Macro-foto van een strakke, schone voeg tussen
twee tegels in een natte ruimte. ALT: detailopname van een schone en waterdichte
tegelvoeg in een douche

PAGE: Over Ons URL: /over-ons/

SEO Title: Over Sppat | Premium Aannemer & Tegelzetter Meta Description: Sppat
staat voor compromisloze kwaliteit in badkamer renovaties en tegelwerk. Ontdek
onze werkwijze en visie op technisch perfecte afwerking. Primary Keyword: over
sppat Search Intent: Trust / Informational

HERO Eyebrow: Onze Visie H1: Kwaliteit zit in de details Body: Sppat is
opgericht vanuit één duidelijke overtuiging: een verbouwing moet in één keer
goed, technisch perfect en visueel strak worden uitgevoerd. Wij zijn geen
prijsvechters, maar vakmensen die eigenaarschap nemen over het eindresultaat.
[BUSINESS INPUT REQUIRED: Any specific factual company history or team details
required for the /over-ons/ page].

SECTION 2 Type: Text H2: Van idee naar realiteit Body: U heeft een visie, een
referentiebeeld of een architectuurtekening. Onze taak is om dat esthetische
idee te vertalen naar een bouwbare, technische realiteit. Dat betekent dat we
meedenken over de onzichtbare zaken: waar plaatsen we de inspectieluiken? Hoe
lossen we het afschot op zonder de grote tegels te breken? Hoe zorgen we dat de
nis exact uitlijnt met de voeg van de wandtegel? Die focus op het onzichtbare,
maakt het zichtbare resultaat premium.

FINAL CTA H2: Kennis maken met Sppat? Body: Wij bespreken graag de mogelijkheden
voor uw aankomende project. Button: Neem contact op URL: /contact/

PAGE: Contact URL: /contact/

SEO Title: Contact & Offerte Aanvragen | Sppat Meta Description: Bespreek uw
renovatie of tegelproject met Sppat. Vul het formulier in, deel uw ideeën en wij
nemen contact op voor een technische opname. Primary Keyword: contact sppat
Search Intent: Conversion

HERO H1: Project Bespreken

SECTION 2 Type: Form H2: Vertel ons over uw project Body: Vul het onderstaande
formulier in. Hoe meer details u deelt (zoals afmetingen, gewenste materialen of
referentiefoto's), hoe beter wij ons kunnen voorbereiden op ons eerste contact.
[DEVELOPER NOTE: Inject Global Form here]

SECTION 3 Type: Text H3: Direct contact Body: Telefoon: [PHONE] E-mail: [EMAIL]
Werkgebied: Almere en heel Nederland.
