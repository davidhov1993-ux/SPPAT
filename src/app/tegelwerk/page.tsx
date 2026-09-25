import Link from 'next/link';
import { H1, H2, H3 } from "@/components/Typography";
import { MediaSlot } from "@/components/MediaSlot";
import { CtaMonument } from "@/components/CtaComponents";
import { BlueprintLine } from "@/components/BlueprintLine";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professioneel Tegelwerk & Installatie | SPPAT",
  description: "Professioneel tegelwerk voor vloeren, wanden, badkamers, keukens en balkons. SPPAT werkt in heel Nederland, inclusief specialistische tegeltoepassingen.",
  alternates: { canonical: "https://www.sppat.nl/tegelwerk/" },
};

export default function Tegelwerk() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-12 gap-x-4">
      {/* Hero Section */}
      <section className="col-span-1 md:col-span-12 relative w-full mb-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 px-5 md:px-0">
          <div className="col-span-1 md:col-span-10 relative">
            <MediaSlot mediaId="TEGEL-01" className="w-full aspect-[4/5] md:aspect-[21/9]" bleedMobile={true} />
            <div className="mt-space-md md:mt-0 md:absolute md:bottom-[-2rem] md:right-8 bg-[#F7F7F5] p-space-md md:p-space-lg max-w-xl border-t border-l border-[#E5E5E5] z-10 mx-auto md:mx-0 shadow-sm relative">
              <span className="block text-sm uppercase tracking-widest mb-space-xs font-space text-[#1A1A1A]">Tegelwerk</span>
              <H1>Professioneel Tegelwerk & Installatie</H1>
          <p className="mt-space-md text-lg font-inter text-[#1A1A1A]">
            Goed tegelwerk is meer dan tegels recht naast elkaar plaatsen. De kwaliteit begint bij de ondergrond en wordt zichtbaar in de verdeling, voeglijnen, snedes, hoeken, aansluitingen en overgang naar andere materialen.
          </p>
          <p className="mt-space-sm text-lg font-inter text-[#1A1A1A]">
            SPPAT verzorgt professioneel tegelwerk voor verschillende ruimtes en toepassingen in heel Nederland.
          </p>
        </div>
          </div>
        </div>
      </section>

      {/* Premium - 5/7 Asymmetry */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0">
        <div className="col-span-1 md:col-span-5 order-last md:order-first md:mt-16 xl:mt-32">
           <H2>Aandacht voor het materiaal</H2>
           <p className="mt-space-sm font-inter text-[#1A1A1A]">
             Keramisch parket vraagt om een andere verlijming dan een standaard wandtegel. Natuursteen vereist specifieke verwerking en voegmiddelen. Elk materiaal heeft zijn eigen technische voorwaarden om langdurig mooi te blijven.
           </p>
        </div>
        <div className="col-span-1 md:col-span-7 order-first md:order-last mb-space-md md:mb-0">
           <MediaSlot mediaId="TEGEL-03" className="w-full aspect-[4/5] md:aspect-[3/2] object-cover" />
        </div>
      </section>

      {/* Long-form Consolidated Service Content */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0">
        <div className="col-span-1 md:col-span-8 md:col-start-3 mb-space-xl" id="vloertegels">
          <BlueprintLine className="mb-space-md" />
          <H2>Vloertegels Leggen</H2>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Een strakke tegelvloer begint bij een stabiele, geschikte en voldoende vlakke basis. Daarna bepalen de tegelverdeling, voeglijnen en aansluitingen hoe rustig het eindresultaat oogt.
          </p>
          <H3 className="mt-space-md text-xl">Voorbereiding en egalisatie</H3>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Voor plaatsing wordt beoordeeld wat de bestaande ondergrond nodig heeft. Afhankelijk van de situatie kan voorbereiding of egalisatie nodig zijn.
          </p>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Bij vloerverwarming wordt de combinatie van ondergrond, verwarmingssysteem en gekozen afwerking als geheel bekeken. SPPAT biedt vloerverwarming niet als losse hoofdservice aan, maar kan deze binnen een passend renovatie- of tegelproject meenemen.
          </p>
          <H3 className="mt-space-md text-xl">Tegelverdeling</H3>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Vooraf nadenken over startpunt, zichtlijnen, deuren, wanden en snijstukken voorkomt een onrustig eindbeeld.
          </p>
          <H3 className="mt-space-md text-xl">Verschillende toepassingen</H3>
          <ul className="mt-space-xs font-inter text-[#1A1A1A] list-disc list-inside">
            <li>woonkamer;</li>
            <li>hal;</li>
            <li>keuken;</li>
            <li>badkamer;</li>
            <li>toilet;</li>
            <li>grotere doorlopende vloeren.</li>
          </ul>
          <div className="mt-space-sm">
            <span className="font-space uppercase text-sm tracking-wider text-[#666666] mr-4">Context:</span>
            <Link href="/kennisbank/#lippage" className="font-space uppercase text-sm tracking-wider hover:underline">
              Lippage voorkomen →
            </Link>
          </div>
        </div>

        <div className="col-span-1 md:col-span-8 md:col-start-4 mb-space-xl" id="wandtegels">
          <BlueprintLine className="mb-space-md" />
          <H2>Wandtegels Zetten</H2>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Bij wandtegelwerk vallen afwijkingen direct op. Voeglijnen, hoeken, nissen, kranen, stopcontacten en andere uitsparingen maken de verdeling van het tegelvlak bepalend voor het eindresultaat.
          </p>
          <H3 className="mt-space-md text-xl">Eerst verdelen, daarna plaatsen</H3>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Een goede indeling voorkomt onnodig smalle passtukken en helpt belangrijke lijnen logisch door te laten lopen.
          </p>
          <H3 className="mt-space-md text-xl">Details die het verschil maken</H3>
          <ul className="mt-space-xs font-inter text-[#1A1A1A] list-disc list-inside">
            <li>buiten- en binnenhoeken;</li>
            <li>aansluitingen op plafond en vloer;</li>
            <li>uitsparingen voor leidingwerk en elektra;</li>
            <li>nissen;</li>
            <li>aansluiting op sanitair;</li>
            <li>overgang tussen verschillende materialen.</li>
          </ul>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Welke technische afwerking wordt gekozen, hangt af van tegel, ondergrond en ontwerp.
          </p>
        </div>

        <div className="col-span-1 md:col-span-8 md:col-start-3 mb-space-xl" id="keuken">
          <BlueprintLine className="mb-space-md" />
          <H2>Keuken Achterwand & Vloer Tegelen</H2>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            In een keuken komt tegelwerk samen met werkbladen, kasten, stopcontacten, kranen en apparatuur. Daardoor zit de kwaliteit vaak juist in de kleine aansluitingen.
          </p>
          <H3 className="mt-space-md text-xl">Maatwerk rondom vaste elementen</H3>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Een goede tegelverdeling houdt rekening met:
          </p>
          <ul className="mt-space-xs font-inter text-[#1A1A1A] list-disc list-inside">
            <li>bovenkant werkblad;</li>
            <li>onderzijde bovenkasten;</li>
            <li>stopcontacten en schakelaars;</li>
            <li>kranen en leidingdoorvoeren;</li>
            <li>hoeken en eindpunten;</li>
            <li>zichtbare snijlijnen.</li>
          </ul>
          <H3 className="mt-space-md text-xl">Voegkeuze</H3>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Voegmateriaal en voegkleur beïnvloeden zowel uitstraling als onderhoud. Welke oplossing geschikt is, hangt af van toepassing, tegel en belasting.
          </p>
          <div className="mt-space-sm">
            <span className="font-space uppercase text-sm tracking-wider text-[#666666] mr-4">Verdieping:</span>
            <Link href="/kennisbank/#epoxy-vs-cement" className="font-space uppercase text-sm tracking-wider hover:underline">
              Epoxyvoeg vs. cementvoeg →
            </Link>
          </div>
        </div>

        <div className="col-span-1 md:col-span-8 md:col-start-4 mb-space-xl" id="balkon">
          <BlueprintLine className="mb-space-md" />
          <H2>Balkon Tegelen</H2>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Buitentegelwerk krijgt te maken met regen, temperatuurwisselingen en andere omstandigheden dan tegelwerk binnen. Daarom moet niet alleen naar de tegel worden gekeken, maar ook naar de bestaande constructie, ondergrond en waterafvoer.
          </p>
          <H3 className="mt-space-md text-xl">Water moet weg kunnen</H3>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Een balkon of buitenterras vraagt om een opbouw die past bij de specifieke situatie. Afschot, afvoer, aansluitingen en materiaalkeuze worden daarom vóór uitvoering beoordeeld.
          </p>
          <H3 className="mt-space-md text-xl">Afwerking aan randen en aansluitingen</H3>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Randen, dorpels, gevels en afvoeren zijn belangrijke details in buitentegelwerk. De oplossing is afhankelijk van de bestaande bouwsituatie.
          </p>
        </div>

        <div className="col-span-1 md:col-span-8 md:col-start-3 mb-space-xl" id="badkamer">
          <BlueprintLine className="mb-space-md" />
          <H2>Badkamer Vakkundig Laten Tegelen</H2>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Regelt u de verbouwing zelf en zoekt u een specialist voor het tegelwerk? SPPAT kan het vloer- en wandtegelwerk als afzonderlijk onderdeel uitvoeren.
          </p>
          <H3 className="mt-space-md text-xl">Aandachtspunten in natte ruimtes</H3>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Badkamertegelwerk vraagt om aandacht voor:
          </p>
          <ul className="mt-space-xs font-inter text-[#1A1A1A] list-disc list-inside">
            <li>geschikte en vlakke ondergronden;</li>
            <li>natte zones;</li>
            <li>aansluiting op douchegoot of put;</li>
            <li>afschot waar noodzakelijk;</li>
            <li>tegelverdeling;</li>
            <li>nissen en inbouwdelen;</li>
            <li>hoeken en aansluitingen;</li>
            <li>voeg- en kitdetails.</li>
          </ul>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            De exacte technische opbouw hangt af van de bestaande situatie en gekozen materialen.
          </p>
          <H3 className="mt-space-md text-xl">Complete renovatie nodig?</H3>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Wilt u dat ook sloop, installatiewerk, voorbereiding, sanitair en afwerking worden meegenomen?
          </p>
          <div className="mt-space-sm mt-space-md">
            <Link href="/complete-badkamer-renovatie/" className="font-space uppercase text-sm tracking-wider hover:underline border-b border-[#1A1A1A] pb-1">
              Bekijk complete badkamerrenovatie →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="col-span-1 md:col-span-12 overflow-hidden w-full">
        <CtaMonument title="Uw project bespreken" />
      </section>

    </main>
  )
}
