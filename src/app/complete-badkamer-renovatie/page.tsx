import { H1, H2, H3 } from "@/components/Typography";
import { MediaSlot } from "@/components/MediaSlot";

import { CtaAnchor } from "@/components/CtaComponents"
import Link from "next/link"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Badkamerrenovatie van A tot Z | SPPAT",
  description: "Complete badkamer laten renoveren? SPPAT verzorgt het project van sloop en techniek tot tegelwerk, sanitair en afwerking. Werkzaam in heel Nederland.",
  alternates: { canonical: "https://www.sppat.nl/complete-badkamer-renovatie" },
};

export default function Badkamers() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-12 gap-x-4">
      {/* Hero Section */}
      <section className="col-span-1 md:col-span-12 relative w-full mb-space-xl">
        <div className="w-full relative px-0">
          <MediaSlot mediaId="BADK-01" className="w-full aspect-[4/5] md:aspect-[16/9] object-cover" />
        </div>
        <div className="p-space-md md:absolute md:bottom-0 md:left-0 bg-[#F7F7F5] md:col-span-6 lg:col-span-5 max-w-2xl md:border-t md:border-r border-[#E5E5E5] -mt-10 md:mt-0 relative z-10">
          <H1>Complete Badkamerrenovatie van A tot Z</H1>
          <p className="mt-space-sm text-base md:text-lg text-[#1A1A1A] font-inter">
            Een complete badkamerrenovatie is een technisch project waarin veel onderdelen van elkaar afhankelijk zijn. Leidingen, afvoer, elektra, wanden, vloer, waterdichting, tegelverdeling en sanitair moeten uiteindelijk één kloppend geheel vormen.
          </p>
          <p className="mt-space-xs text-base md:text-lg text-[#1A1A1A] font-inter">
            SPPAT kan de complete uitvoering van A tot Z verzorgen, zodat het project als één samenhangende verbouwing wordt aangepakt.
          </p>
          <div className="mt-space-md">
            <Link href="/contact/" className="bg-[#1A1A1A] text-white px-6 py-3 font-space uppercase tracking-wider text-sm hover:bg-black transition-colors inline-block">
              Project bespreken
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section: Eén gecoördineerde uitvoering */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0">
        <div className="col-span-1 md:col-span-8 md:col-start-3">
          <H2>Eén gecoördineerde uitvoering voor uw complete verbouwing</H2>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Afhankelijk van de bestaande situatie en het ontwerp kan een complete renovatie onder meer bestaan uit:
          </p>
          <ul className="mt-space-xs list-disc list-inside font-inter text-[#1A1A1A] space-y-1">
            <li>demontage en verwijdering van de bestaande badkamer;</li>
            <li>aanpassingen aan waterleidingen en afvoer;</li>
            <li>elektrotechnische werkzaamheden;</li>
            <li>bouwkundige aanpassingen en ondergrondvoorbereiding;</li>
            <li>voorbereiden en uitvlakken van vloer en wanden;</li>
            <li>waterdichting van relevante natte zones;</li>
            <li>inbouwtechniek, bijvoorbeeld een inbouwreservoir of inbouwkranen;</li>
            <li>douchegoot, nis of andere geïntegreerde details;</li>
            <li>vloer- en wandtegelwerk;</li>
            <li>plaatsing en aansluiting van sanitair;</li>
            <li>verlichting en LED waar onderdeel van het project;</li>
            <li>voegen, kitten en eindafwerking.</li>
          </ul>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            De exacte scope wordt per badkamer bepaald.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl relative px-5 md:px-0">
        <div className="col-span-1 md:col-span-10 md:col-start-2 relative">
          <H2 className="mb-space-lg text-center">Onze A tot Z werkwijze</H2>
          
          <div className="relative">
            {/* The Blueprint Line */}
            <div className="absolute left-[20px] md:left-[33%] top-0 bottom-0 w-[1px] bg-[#E5E5E5] z-0"></div>
            
            <div className="space-y-space-md relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="col-span-1 md:col-span-4 pl-10 md:pl-0 md:text-right md:pr-8">
                  <H3 className="text-xl">1. Bestaande situatie en wensen</H3>
                </div>
                <div className="col-span-1 md:col-span-8 pl-10 md:pl-8">
                  <p className="font-inter text-[#1A1A1A]">We bekijken wat er aanwezig is, wat behouden blijft en wat moet veranderen.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="col-span-1 md:col-span-4 pl-10 md:pl-0 md:text-right md:pr-8">
                  <H3 className="text-xl">2. Technische voorbereiding</H3>
                </div>
                <div className="col-span-1 md:col-span-8 pl-10 md:pl-8">
                  <p className="font-inter text-[#1A1A1A]">Indeling, leidingwerk, afvoer, elektra en bouwkundige consequenties worden in samenhang bekeken.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="col-span-1 md:col-span-4 pl-10 md:pl-0 md:text-right md:pr-8">
                  <H3 className="text-xl">3. Ondergrond en natte zones</H3>
                </div>
                <div className="col-span-1 md:col-span-8 pl-10 md:pl-8">
                  <p className="font-inter text-[#1A1A1A]">De basis wordt geschikt gemaakt voor de gekozen afwerking. In natte zones krijgt waterbeheersing bijzondere aandacht.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="col-span-1 md:col-span-4 pl-10 md:pl-0 md:text-right md:pr-8">
                  <H3 className="text-xl">4. Tegelwerk en detaillering</H3>
                </div>
                <div className="col-span-1 md:col-span-8 pl-10 md:pl-8">
                  <p className="font-inter text-[#1A1A1A]">Tegelverdeling, snijlijnen, voegen, hoeken, nissen en aansluitingen worden als onderdeel van het totaalbeeld uitgevoerd.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="col-span-1 md:col-span-4 pl-10 md:pl-0 md:text-right md:pr-8">
                  <H3 className="text-xl">5. Sanitair en afwerking</H3>
                </div>
                <div className="col-span-1 md:col-span-8 pl-10 md:pl-8">
                  <p className="font-inter text-[#1A1A1A]">Na het tegelwerk volgen de zichtbare onderdelen en de uiteindelijke afwerking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Grid: Technical Construction */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0">
        <div className="col-span-1 md:col-span-5 md:col-start-3">
          <H2>De onzichtbare techniek bepaalt de levensduur</H2>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Een badkamer kan direct na oplevering mooi ogen, terwijl de echte kwaliteit voor een groot deel verborgen zit. Denk aan de ondergrond, aansluitingen, afvoer, waterdichting en de opbouw onder het tegelwerk.
          </p>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            SPPAT behandelt die onderdelen niet als bijzaak. Ze vormen de basis waarop de zichtbare afwerking moet functioneren.
          </p>
          <div className="mt-space-md flex flex-col gap-2">
            <Link href="/kennisbank/#waterdichting" className="font-space uppercase text-sm tracking-wider underline hover:no-underline">Waterdichting uitgelegd →</Link>
            <Link href="/tegelwerk/#badkamer" className="font-space uppercase text-sm tracking-wider underline hover:no-underline">Badkamer alleen laten tegelen →</Link>
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-6 md:col-start-8 mt-space-md md:mt-0 order-first md:order-last">
          <div className="aspect-[4/5] relative w-full md:px-0">
            {/* Mobile: Inset Evidence image */}
            <div className="w-full h-full md:mx-0 border-y border-[#E5E5E5] md:border-none">
              <MediaSlot mediaId="BADK-02" className="w-full h-full object-cover aspect-[4/5]" />
            </div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0">
        <div className="col-span-1 md:col-span-6 md:col-start-1 order-first md:order-first">
          <div className="aspect-[3/2] relative w-full md:mx-0 border-y border-[#E5E5E5] md:border-none mb-space-md md:mb-0">
             <MediaSlot mediaId="BADK-03" className="w-full h-full object-cover aspect-[3/2]" />
          </div>
        </div>
        <div className="col-span-1 md:col-span-5 md:col-start-8 mt-space-md md:mt-0 order-last md:order-last">
          <H2>Volledige vrijheid in materiaalkeuze</H2>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            De materiaalinkoop kan worden afgestemd op het project. SPPAT kan materialen verzorgen, u kunt zelf sanitair en tegels aanschaffen, of we combineren beide. Zo blijft de keuzevrijheid bij u, terwijl de technische uitvoerbaarheid onderdeel blijft van het gesprek.
          </p>
          
          <div className="mt-space-xl" id="mogelijkheden">
            <H3>Mogelijkheden binnen een complete badkamer</H3>
            <p className="mt-space-xs font-inter text-[#1A1A1A]">
              Afhankelijk van ontwerp en situatie kunnen onder meer worden geïntegreerd:
            </p>
            <ul className="mt-space-xs list-disc list-inside font-inter text-[#1A1A1A] space-y-1">
              <li>inloopdouche;</li>
              <li>douchegoot;</li>
              <li>bad;</li>
              <li>wandcloset / inbouwreservoir;</li>
              <li>inbouwnis;</li>
              <li>betegeld inspectieluik;</li>
              <li>vloerverwarming als onderdeel van het project;</li>
              <li>grootformaat tegels;</li>
              <li>mozaïekaccenten;</li>
              <li>natuursteen;</li>
              <li>LED-verlichting;</li>
              <li>maatwerkdetails in het tegelwerk.</li>
            </ul>
            <p className="mt-space-sm font-inter text-[#1A1A1A]">
              Deze lijst beschrijft mogelijkheden, geen vaste standaardopbouw.
            </p>
          </div>
        </div>
      </section>

      {/* Toiletrenovatie Grid */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0" id="toiletrenovatie">
        <div className="col-span-1 md:col-span-8 md:col-start-3">
          <H2>Complete Toiletrenovatie</H2>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Een toiletruimte is compact, maar technisch niet eenvoudig. Juist doordat alles dicht bij elkaar komt, vallen maatvoering, tegelverdeling, aansluitingen en afwerking extra op.
          </p>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            SPPAT kan de complete toiletrenovatie verzorgen: van demontage en technische aanpassingen tot tegelwerk, sanitair en eindafwerking.
          </p>
          
          <H3 className="mt-space-lg">Wat kan onderdeel zijn van de renovatie?</H3>
          <ul className="mt-space-xs list-disc list-inside font-inter text-[#1A1A1A] space-y-1">
            <li>demontage;</li>
            <li>water- en afvoeraanpassingen;</li>
            <li>inbouwreservoir en wandcloset;</li>
            <li>elektra en verlichting waar nodig;</li>
            <li>voorbereiding van vloer en wanden;</li>
            <li>tegelwerk;</li>
            <li>fonteintje en kraan;</li>
            <li>nis of andere compacte maatwerkoplossing;</li>
            <li>voegen, kitten en eindafwerking.</li>
          </ul>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            De exacte werkzaamheden worden per ruimte bepaald.
          </p>

          <H3 className="mt-space-lg">Veel kwaliteit op weinig vierkante meters</H3>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            In een kleine ruimte bepalen lijnen en verhoudingen sterk hoe rustig het eindresultaat oogt. De positie van voegen, hoeken, sanitair en eventuele nissen verdient daarom vooraf aandacht.
          </p>

          <H3 className="mt-space-lg">Toilet als onderdeel van een groter project</H3>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Wordt het toilet samen met de badkamer of ander tegelwerk aangepakt? Dan kunnen de werkzaamheden als onderdeel van een groter renovatieproject worden besproken.
          </p>
          
          <div className="mt-space-md">
            <Link href="/contact/" className="bg-[#1A1A1A] text-white px-6 py-3 font-space uppercase tracking-wider text-sm hover:bg-black transition-colors inline-block">
              Project bespreken
            </Link>
          </div>
        </div>
      </section>

      
      {/* FAQ Section */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0">
        <div className="col-span-1 md:col-span-8 md:col-start-3">
          <H2>Veelgestelde vragen</H2>
          <div className="mt-space-md flex flex-col gap-space-sm">
            <div className="border-b border-[#E5E5E5] pb-space-sm">
              <H3>Kan SPPAT de complete badkamer uitvoeren?</H3>
              <p className="mt-2 font-inter text-[#1A1A1A]">Ja. Complete badkamerrenovatie wordt als A-Z-dienst aangeboden. De exacte werkzaamheden worden per project bepaald.</p>
            </div>
            <div className="border-b border-[#E5E5E5] pb-space-sm">
              <H3>Kan ik mijn eigen tegels en sanitair kopen?</H3>
              <p className="mt-2 font-inter text-[#1A1A1A]">Ja. Materialen kunnen door SPPAT worden verzorgd, door u worden aangeschaft of gecombineerd worden ingekocht.</p>
            </div>
            <div className="border-b border-[#E5E5E5] pb-space-sm">
              <H3>Doet SPPAT ook alleen het tegelwerk?</H3>
              <p className="mt-2 font-inter text-[#1A1A1A]">Ja. Voor tegelwerk zonder complete renovatie is er de aparte dienst Badkamer tegelen.</p>
            </div>
            <div className="border-b border-[#E5E5E5] pb-space-sm">
              <H3>Werkt SPPAT alleen in Almere?</H3>
              <p className="mt-2 font-inter text-[#1A1A1A]">Nee. SPPAT voert projecten uit in heel Nederland.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0">
        <div className="col-span-1 md:col-span-8 md:col-start-3 text-center border-y border-[#E5E5E5] py-space-xl">
          <H2>Gerealiseerde Badkamers</H2>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Bekijk echte SPPAT-projecten voor een beeld van de afwerking en verschillende toepassingen.
          </p>
          <div className="mt-space-md">
            <Link href="/projecten/" className="font-space uppercase text-sm tracking-wider underline hover:no-underline">Bekijk projecten →</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="col-span-1 md:col-span-12 mb-space-xl">
        <CtaAnchor title="Start uw badkamerrenovatie" mediaId="BADK-CTA" link="/contact/">
          <p>
            Stuur foto&apos;s van de huidige badkamer, globale maten of een plattegrond en voorbeelden van wat u mooi vindt. Daarmee kan het eerste gesprek direct over uw eigen situatie gaan.
          </p>
        </CtaAnchor>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Kan SPPAT de complete badkamer uitvoeren?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ja. Complete badkamerrenovatie wordt als A-Z-dienst aangeboden. De exacte werkzaamheden worden per project bepaald."
                }
              },
              {
                "@type": "Question",
                "name": "Kan ik mijn eigen tegels en sanitair kopen?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ja. Materialen kunnen door SPPAT worden verzorgd, door u worden aangeschaft of gecombineerd worden ingekocht."
                }
              },
              {
                "@type": "Question",
                "name": "Doet SPPAT ook alleen het tegelwerk?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ja. Voor tegelwerk zonder complete renovatie is er de aparte dienst Badkamer tegelen."
                }
              },
              {
                "@type": "Question",
                "name": "Werkt SPPAT alleen in Almere?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nee. SPPAT voert projecten uit in heel Nederland."
                }
              }
            ]
          })
        }}
      />
    </main>
  )
}
