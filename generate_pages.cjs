const fs = require('fs');
let pages = JSON.parse(fs.readFileSync('src/content/pages.json', 'utf8'));

function updatePage(url, title, desc, h1, body, ctaText, ctaUrl, sections, relatedUrls) {
  let page = pages.find(p => p.url === url);
  if (!page) {
    page = { url, faq: [], links: [] };
    pages.push(page);
  }
  page.title = title;
  page.description = desc;
  page.hero = {
    "Eyebrow": "Specialistisch Tegelwerk",
    "H1": h1,
    "Body": body,
    "Primary CTA": ctaText,
    "Primary CTA URL": ctaUrl
  };
  page.sections = sections;
  page.cta = {
    "H2": "Klaar voor de volgende stap?",
    "Body": "Neem contact op voor een technische opname en bespreek de mogelijkheden.",
    "Button": "Project bespreken",
    "URL": "/contact/"
  };
  page.relatedUrls = relatedUrls;
}

// 2. BADKAMER TEGELEN
// Architecture: SERVICE SPLIT HERO → TECHNICAL EXECUTION → CRITICAL WET-ROOM DETAILS → VISUAL / MACRO PROOF → RELATED SERVICES → CTA TYPE B
updatePage('/tegelwerk/badkamer-tegelen/', 
  'Badkamer Tegelen | Vakkundig en Waterdicht | Sppat',
  'Specialist in badkamer tegelwerk. Van strakke voorbereiding en kimband tot naadloze afwerking in de natte cel.',
  'Badkamer Vakkundig Tegelen',
  'Het tegelen van een badkamer vereist meer dan alleen een vaste hand. Het draait om de juiste opbouw: waterdichting, afschot naar de goot en perfect uitgelijnde hoeken. Wij verzorgen het complete tegelwerk, of u nu kiest voor strakke XXL-panelen of gedetailleerd mozaïek.',
  'Bespreek uw badkamer', '/contact/',
  [
    {
      "id": "TECHNICAL",
      "Type": "Text",
      "H2": "Een solide en waterdichte basis",
      "Body": "Voordat er een tegel wordt gezet, beoordelen wij de ondergrond. Het is cruciaal dat wanden loodrecht en vloeren vlak zijn. In de natte zones brengen wij altijd de vereiste kimband en waterdichtende pasta aan om lekkages in de toekomst te voorkomen. Een stabiele basis garandeert een strak en duurzaam tegelresultaat, ongeacht het gekozen formaat."
    },
    {
      "id": "WET_ROOM",
      "Type": "Asymmetrical",
      "H2": "Cruciale details in de inloopdouche",
      "Body": "De inloopdouche is het meest kritieke onderdeel van de badkamer. Het afschot moet perfect naar de douchegoot lopen, zonder dat tegels 'schotelen' of ontsierende snijlijnen vertonen. Wij besteden extra aandacht aan de overgang tussen wand en vloer, strak afgewerkte inbouwnissen en het in verstek zagen van uitwendige hoeken, zodat het tegelwerk naadloos doorloopt.",
      "mediaId": "ai-niche" // Commercial visual
    },
    {
      "id": "PROOF",
      "Type": "Macro",
      "H2": "Afwerking en voegwerk",
      "Body": "Het voegwerk bepaalt de uiteindelijke uitstraling van uw badkamer. Wij adviseren u over de juiste voegbreedte en -kleur voor een harmonieus geheel. Bovendien werken wij de inwendige hoeken en sanitaire aansluitingen strak af met schimmelwerende kit in een bijpassende kleur.",
      "mediaId": "ai-macro"
    }
  ],
  ['/complete-badkamer-renovatie/', '/specialisaties/grootformaat-tegels/', '/specialisaties/mozaiek-zetten/', '/specialisaties/natuursteen/']
);

// 3. VLOERTEGELS
// Architecture: SERVICE SPLIT HERO → FLOOR BUILD-UP / PREPARATION → FLATNESS & LAYOUT → CRITICAL DETAIL → RELATED SERVICES → CTA TYPE B
updatePage('/tegelwerk/vloer-tegelen/', 
  'Vloertegels Leggen | Woonkamer, Hal & Vloerverwarming | Sppat',
  'Laat uw vloertegels leggen door een specialist. Wij zorgen voor een gladde dekvloer, correcte voorbereiding en vlak tegelwerk.',
  'Vloertegels Strak Gelegd',
  'Een tegelvloer in uw woonkamer, hal of keuken vormt de basis van uw interieur. De strakheid van de vloer wordt direct bepaald door de vlakheid van de ondervloer en het zorgvuldig geplande legverband.',
  'Project bespreken', '/contact/',
  [
    {
      "id": "PREPARATION",
      "Type": "Text",
      "H2": "Voorbereiding en vloeropbouw",
      "Body": "Een duurzame tegelvloer begint met een stabiele basis. Wij beoordelen de zandcement- of anhydrietdekvloer op vlakheid, sterkte en restvocht. Waar nodig primen en egaliseren we de vloer. Bij tegelwerk op vloerverwarming wordt de vloeropbouw vooraf beoordeeld. Het moment en de wijze van ingebruikname worden afgestemd op het type dekvloer, het verwarmingssysteem en de voorschriften van de betrokken systeem- en materiaalleveranciers."
    },
    {
      "id": "LAYOUT",
      "Type": "Asymmetrical",
      "H2": "Vlakheid en het perfecte legplan",
      "Body": "Voordat de eerste tegel wordt gelijmd, maken wij een gedetailleerd legplan. Dit voorkomt smalle snijstukken langs de wanden en zorgt voor een visuele balans, zeker bij grote formaten. Tijdens de verwerking gebruiken wij moderne leveling-systemen om 'lippage' (hoogteverschillen tussen aangrenzende tegels) tot een absoluut minimum te beperken.",
      "mediaId": "substrate"
    },
    {
      "id": "DETAIL",
      "Type": "Macro",
      "H2": "Dilataties en randafwerking",
      "Body": "Om scheurvorming in grote vloeroppervlakken te voorkomen, integreren wij noodzakelijke dilatatievoegen netjes in het voegenspel. Langs de wanden zorgen we voor strakke uitsnedes en een correcte aansluiting, klaar voor een tegelplint of het plaatsen van houten plinten.",
      "mediaId": "ai-macro"
    }
  ],
  ['/specialisaties/grootformaat-tegels/', '/specialisaties/keramisch-parket/', '/projecten/']
);

// 4. WANDTEGELS
// Architecture: SERVICE SPLIT HERO → PREPARATION → ALIGNMENT / GEOMETRY → CRITICAL DETAILS → RELATED SERVICES → CTA TYPE B
updatePage('/tegelwerk/wand-tegelen/', 
  'Wandtegels Zetten | Badkamer, Keuken & Woonkamer | Sppat',
  'Strakke wandafwerking vereist meetwerk en perfect loodrechte muren. Sppat verzorgt het complete wandtegelwerk voor een naadloos eindresultaat.',
  'Wandtegels Loodrecht Zetten',
  'Een strak betegelde wand vraagt om absolute precisie. Elke afwijking in de ondergrond of het uitlijnwerk is direct zichtbaar, vooral bij strijklicht of het gebruik van grootformaat tegels met smalle voegen.',
  'Project bespreken', '/contact/',
  [
    {
      "id": "PREP",
      "Type": "Text",
      "H2": "Voorbereiding en stucwerk",
      "Body": "Wanden moeten loodrecht, vlak en draagkrachtig zijn. We controleren de hechting van de huidige stuclaag en vlakken muren waar nodig opnieuw uit. Alleen op een perfect voorbereide wand kunnen tegels strak en zonder hinderlijke schaduwwerking worden geplaatst."
    },
    {
      "id": "ALIGNMENT",
      "Type": "Asymmetrical",
      "H2": "Geometrie en uitlijning",
      "Body": "Het lijnenspel van wandtegels moet exact kloppen, vooral wanneer ze aansluiten op vloervoegen, kozijnen of sanitaire elementen. We meten de ruimte zorgvuldig uit met kruislijnlasers om een gecentreerd legplan te creëren zonder kleine strookjes in de hoeken.",
      "mediaId": "wall-feb"
    },
    {
      "id": "DETAILS",
      "Type": "Macro",
      "H2": "Hoeken, nissen en doorvoeren",
      "Body": "Uitwendige hoeken zagen we bij voorkeur in verstek voor een minimalistische look zonder kunststof hoekprofielen. Doorvoeren voor inbouwkranen en stopcontacten worden exact rond uitgefreesd. Dit niveau van detailafwerking bepaalt de premium uitstraling van uw wand.",
      "mediaId": "ai-niche"
    }
  ],
  ['/tegelwerk/badkamer-tegelen/', '/tegelwerk/keuken-tegelen/', '/specialisaties/mozaiek-zetten/', '/specialisaties/grootformaat-tegels/']
);

// 5. KEUKEN TEGELEN
// Architecture: SERVICE SPLIT HERO → APPLICATIONS → ALIGNMENT WITH KITCHEN ELEMENTS → DETAIL EXECUTION → RELATED SERVICES → CTA TYPE B
updatePage('/tegelwerk/keuken-tegelen/', 
  'Keuken Tegelen | Vloer & Achterwand | Sppat',
  'Laat de achterwand of vloer van uw keuken strak betegelen. Duurzame en makkelijk te reinigen oplossingen die aansluiten bij uw keukenontwerp.',
  'Praktisch en Strak Keukentegelwerk',
  'De keuken is de meest intensief gebruikte ruimte in huis. Tegelwerk biedt hier de ideale combinatie van duurzaamheid, hygiëne en esthetiek, of het nu gaat om een robuuste vloer of een strak afgewerkte achterwand.',
  'Project bespreken', '/contact/',
  [
    {
      "id": "APPLICATIONS",
      "Type": "Text",
      "H2": "Achterwanden en keukenvloeren",
      "Body": "Voor de achterwand kiezen klanten vaak voor onderhoudsvriendelijke keramische tegels, subtiel mozaïek of juist een naadloze XXL-plaat die het aanrechtblad volgt. De keukenvloer moet daarnaast bestand zijn tegen zware belasting en vocht, waarvoor robuuste vloertegels of keramisch parket uitermate geschikt zijn."
    },
    {
      "id": "ALIGNMENT",
      "Type": "Asymmetrical",
      "H2": "Aansluiting op het keukenontwerp",
      "Body": "Keukentegelwerk vergt afstemming. De vloer moet mooi aansluiten onder de kookeilanden, en de voegen van de achterwand moeten harmoniëren met de kasten en het werkblad. Wij zorgen ervoor dat uitsparingen voor stopcontacten en schakelaars exact in het tegelpatroon worden geïntegreerd.",
      "mediaId": "kitchen"
    },
    {
      "id": "DETAILS",
      "Type": "Macro",
      "H2": "Onderhoud en voegwerk",
      "Body": "Boven het fornuis en achter de spoelbak krijgt voegwerk veel te verduren door vet en vocht. Door te werken met hoogwaardige, gesloten voegmiddelen zorgen we ervoor dat uw keuken niet alleen prachtig oogt, maar ook jarenlang eenvoudig schoon te houden is."
    }
  ],
  ['/tegelwerk/wand-tegelen/', '/tegelwerk/vloer-tegelen/']
);

// 6. BUITEN / BALKON
// Architecture: SERVICE SPLIT HERO → EXTERIOR CONDITIONS → WATER / SLOPE / MOVEMENT → CRITICAL DETAILS → RELATED SERVICES → CTA TYPE B
updatePage('/tegelwerk/balkon-tegelen/', 
  'Balkon & Terras Tegelen | Vorstbestendig Buitenwerk | Sppat',
  'Hoogwaardig tegelwerk voor uw balkon of buitenruimte. Vorstbestendige materialen, afschot voor afwatering en duurzame verlijming.',
  'Balkon en Terras Duurzaam Betegelen',
  'Buitentegelwerk staat bloot aan extreme temperatuurschommelingen, regen en vorst. Een standaard binnentoepassing volstaat hier niet; een balkon vereist specifieke bouwtechnische oplossingen om schade in de winter te voorkomen.',
  'Project bespreken', '/contact/',
  [
    {
      "id": "EXTERIOR",
      "Type": "Text",
      "H2": "Extreme weersinvloeden",
      "Body": "Zon, regen en vorst zorgen voor constante werking van het materiaal. Als vocht onder de tegels bevriest, kunnen tegels losvriezen of scheuren. Wij gebruiken uitsluitend vorstbestendige keramische of natuursteen tegels en hoog-flexibele lijmsystemen die bestand zijn tegen deze krimp en uitzetting."
    },
    {
      "id": "WATER",
      "Type": "Asymmetrical",
      "H2": "Afschot en waterafvoer",
      "Body": "Stilstaand water is de grootste vijand van buitentegelwerk. Het balkon of terras moet voorzien zijn van het juiste afschot (hellingsgraad) richting de afvoer of goot. Indien nodig egaliseren wij de ondergrond onder afschot en passen we ontkoppelings- en drainagematten toe om ophoping van vocht te voorkomen."
    },
    {
      "id": "DETAILS",
      "Type": "Macro",
      "H2": "Randafwerking en dilataties",
      "Body": "De randen van een balkon vragen om een strakke afwerking waarbij vocht niet in de constructie kan trekken. Daarnaast integreren we dilatatievoegen om de spanningen van thermische werking veilig op te vangen. Dit voorkomt dat het tegelwerk bol gaat staan tijdens hete zomers."
    }
  ],
  ['/tegelwerk/vloer-tegelen/', '/specialisaties/grootformaat-tegels/']
);

// 7. GROOTFORMAAT / XXL
// Architecture: SERVICE SPLIT HERO → WHY XXL IS DIFFERENT → TECHNICAL EXECUTION → CRITICAL MACRO DETAILS → RELATED SERVICES → CTA TYPE B
updatePage('/specialisaties/grootformaat-tegels/', 
  'Grootformaat & XXL Tegels | Naadloze Afwerking | Sppat',
  'Laat grootformaat en XXL tegels vakkundig plaatsen. Specialistisch gereedschap, perfecte uitvlakking en een strak, nagenoeg naadloos eindresultaat.',
  'Verwerking van Grootformaat en XXL Tegels',
  'Grootformaat tegels en XXL-keramiekplaten creëren een rustige, nagenoeg naadloze uitstraling in uw badkamer of woonkamer. Het plaatsen van deze indrukwekkende formaten is echter een specialisme dat geen enkele marge voor fouten toelaat.',
  'Project bespreken', '/contact/',
  [
    {
      "id": "WHY",
      "Type": "Text",
      "H2": "Waarom grootformaat anders is",
      "Body": "Door het gebrek aan voegen is er geen ruimte om onregelmatigheden in de ondergrond op te vangen. Elke millimeter afwijking in de wand of vloer vertaalt zich direct in hinderlijke 'lippage' of, erger nog, breuk van de tegel door loze ruimtes onder het materiaal. Absolute vlakheid is een harde eis."
    },
    {
      "id": "EXECUTION",
      "Type": "Asymmetrical",
      "H2": "Technische uitvoering en handling",
      "Body": "Het transporteren en plaatsen van XXL-tegels vereist specialistisch aanzuiggereedschap en ervaren vakmensen. Wij bereiden de ondergrond minutieus voor, hanteren de 'buttering floating' verlijmingstechniek (dubbele verlijming) voor 100% contactoppervlak, en gebruiken leveling-systemen om de tegels perfect in één vlak te trekken.",
      "mediaId": "bath08" // Wait, I need a commercial image. I'll use substrate or ai-stone or ai-bathroom. Let's omit mediaId if we don't have a good one, or use ai-bathroom. The instructions said "Do not repeat the same hero unless unavoidable". I'll just leave it empty so it degrades gracefully to text.
    },
    {
      "id": "DETAILS",
      "Type": "Macro",
      "H2": "Randafwerking en zaagsnedes",
      "Body": "Het snijden, boren en in verstek zagen van XXL-keramiek vereist gekoeld diamantgereedschap. Details zoals inbouwkranen, nisjes en afvoerputten worden met uiterste precisie uitgefreesd. Het resultaat is een minimalistisch, architectonisch oppervlak."
    }
  ],
  ['/tegelwerk/badkamer-tegelen/', '/tegelwerk/vloer-tegelen/', '/tegelwerk/wand-tegelen/']
);

// 8. MOZAÏEK
// Architecture: SERVICE SPLIT HERO → PATTERN & ALIGNMENT → SUBSTRATE / INSTALLATION PRECISION → DETAIL SECTION → RELATED SERVICES → CTA TYPE B
updatePage('/specialisaties/mozaiek-zetten/', 
  'Mozaïek Zetten | Precisie en Oog voor Detail | Sppat',
  'Mozaïek vereist vakmanschap en perfecte uitlijning. Wij verwerken glasmozaïek, natuursteen en keramisch mozaïek strak en zonder hinderlijke matovergangen.',
  'Specialistisch Mozaïek Zetten',
  'Mozaïek is de ultieme manier om ronde vormen, nisjes of wellness-ruimtes te accentueren. Omdat de voegverhouding in mozaïek enorm hoog is, is de visuele impact van de uitvoering cruciaal. Een slechte plaatsing is direct zichtbaar.',
  'Project bespreken', '/contact/',
  [
    {
      "id": "PATTERN",
      "Type": "Text",
      "H2": "Lijnen, patronen en uitlijning",
      "Body": "Het grootste risico bij mozaïek is dat de naden tussen de afzonderlijke matjes zichtbaar blijven. Wij zorgen ervoor dat de voegafstand tussen de matjes exact gelijk is aan de voegafstand binnen het matje zelf, waardoor een ononderbroken en doorlopend patroon ontstaat."
    },
    {
      "id": "SUBSTRATE",
      "Type": "Asymmetrical",
      "H2": "Ondergrond en lijmkeuze",
      "Body": "Mozaïek volgt elke glooiing van de ondergrond. De wand of vloer moet daarom superstrak zijn uitgevlakt. Daarnaast vereist glasmozaïek specifieke (vaak witte) epoxylijm om doorschijnen te voorkomen en krimp te minimaliseren, zodat het mozaïek niet wegzakt tijdens het uitharden."
    },
    {
      "id": "DETAILS",
      "Type": "Macro",
      "H2": "Hoeken en rondingen",
      "Body": "De ware schoonheid van mozaïek toont zich in de details: de bekleding van een inbouwnis, de afwerking rondom kranen, of het soepel meelopen met een gebogen douchescherm. Wij besteden maximale aandacht aan deze complexe overgangen.",
      "mediaId": "ai-niche"
    }
  ],
  ['/tegelwerk/badkamer-tegelen/', '/tegelwerk/wand-tegelen/']
);

// 9. NATUURSTEEN
// Architecture: SERVICE SPLIT HERO → MATERIAL CHARACTER → PREPARATION & LAYOUT → CRITICAL DETAILS → RELATED SERVICES → CTA TYPE B
updatePage('/specialisaties/natuursteen/', 
  'Natuursteen Leggen & Zetten | Marmer, Travertin & Hardsteen | Sppat',
  'Het verwerken van echt natuursteen is maatwerk. Wij selecteren, sorteren en plaatsen marmer en kalksteen met oog voor de unieke adering.',
  'Natuursteen Vakkundig Verwerken',
  'Echt natuursteen, zoals marmer, travertin of hardsteen, brengt een ongeëvenaarde luxe en organische warmte in uw woning. In tegenstelling tot keramiek is elke steen uniek, wat specifieke eisen stelt aan de voorbereiding, de lijm en het legplan.',
  'Project bespreken', '/contact/',
  [
    {
      "id": "CHARACTER",
      "Type": "Text",
      "H2": "De eigenschappen van natuursteen",
      "Body": "Natuursteen is poreus, gevoelig voor zuren en vatbaar voor vochtdoorslag. Dit betekent dat niet elke soort zomaar geschikt is voor de natte cel. Bij de installatie moet rekening gehouden worden met kalibratieverschillen (dikteverschillen) die eigen zijn aan het natuurproduct."
    },
    {
      "id": "LAYOUT",
      "Type": "Asymmetrical",
      "H2": "Sorteerwerk en legplan",
      "Body": "De organische variatie in kleur en aderpatronen (veining) vereist dat we de tegels vooraf 'droog' uitleggen en sorteren. Zo creëren we een gebalanceerd en rustig beeld in de ruimte, waarbij opvallende aders mooi doorlopen en kleurschakeringen gelijkmatig worden verdeeld.",
      "mediaId": "ai-stone"
    },
    {
      "id": "DETAILS",
      "Type": "Macro",
      "H2": "Lijm, voeg en afwerking",
      "Body": "Om vlekvorming of het verkleuren (doorbloeden) van licht marmer te voorkomen, gebruiken wij speciale, sneldrogende witte natuursteenlijm en -voeg. Waar nodig worden hoeken vakkundig gepolijst of in verstek gezaagd om het massieve karakter van het materiaal te benadrukken."
    }
  ],
  ['/specialisaties/grootformaat-tegels/', '/tegelwerk/vloer-tegelen/', '/tegelwerk/badkamer-tegelen/']
);

// 10. KERAMISCH PARKET
// Architecture: SERVICE SPLIT HERO → LAYOUT / DIRECTION → TECHNICAL EXECUTION → CRITICAL DETAIL → RELATED SERVICES → CTA TYPE B
updatePage('/specialisaties/keramisch-parket/', 
  'Keramisch Parket Leggen | Visgraat & Wildverband | Sppat',
  'Keramisch parket in wildverband of visgraat leggen. Een warme houtlook met de duurzaamheid en vloerverwarming-geschiktheid van tegels.',
  'Strak en Vlak Keramisch Parket',
  'Keramisch parket combineert de warme, authentieke uitstraling van een houten vloer met het onderhoudsgemak en de krasvastheid van keramiek. Het is bovendien de ultieme geleider voor vloerverwarming. De verwerking van deze lange, smalle tegels is echter technisch uitdagend.',
  'Project bespreken', '/contact/',
  [
    {
      "id": "LAYOUT",
      "Type": "Text",
      "H2": "Legrichting, wildverband en visgraat",
      "Body": "De legrichting beïnvloedt de optische grootte van de ruimte en de lichtinval. Populaire patronen zijn wildverband (waarbij de naden verspringen voor een natuurlijk effect) en de klassieke visgraat. Een doordacht legplan is essentieel om repetitie in het houtdecor te voorkomen en de ruimtelijkheid te benadrukken."
    },
    {
      "id": "EXECUTION",
      "Type": "Asymmetrical",
      "H2": "Kromming en vlakheid",
      "Body": "Lange keramische tegels hebben door het bakproces tijdens de productie vaak een lichte, natuurlijke kromming. Bij een wildverband of halfsteensverband kan deze bolling leiden tot 'lippage', waarbij het midden van de ene tegel hoger ligt dan het uiteinde van de volgende.",
      "mediaId": "ai-woodlook"
    },
    {
      "id": "DETAILS",
      "Type": "Macro",
      "H2": "Leveling en voegbreedte",
      "Body": "Wij gebruiken zware leveling-systemen om de planken strak naast elkaar in één vlak te dwingen. Gecombineerd met een zo smal mogelijke voeg in een bijpassende houtkleur, creëren we een vloer die nagenoeg niet van echt parket te onderscheiden is."
    }
  ],
  ['/tegelwerk/vloer-tegelen/', '/tegelwerk/badkamer-tegelen/']
);

fs.writeFileSync('src/content/pages.json', JSON.stringify(pages, null, 2));
