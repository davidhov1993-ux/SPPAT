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
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl pt-space-xl px-5 md:px-0">
        <div className="col-span-1 md:col-span-10 md:col-start-3 relative md:order-last">
          <MediaSlot mediaId="TEGEL-HERO" className="w-full aspect-[4/3] md:aspect-[16/9] object-cover" />
        </div>
        <div className="col-span-1 md:col-span-5 md:col-start-1 bg-[#F7F7F5] p-space-md md:p-space-lg z-10 md:absolute md:top-10 md:left-0 border-[#E5E5E5] md:border-r md:border-b -mt-16 md:-mt-0 relative mx-5 md:mx-0">
          <H1>Professioneel Tegelwerk & Installatie</H1>
          <p className="mt-space-sm font-inter text-[#1A1A1A] text-lg">
            Goed tegelwerk is meer dan tegels recht naast elkaar plaatsen. De kwaliteit begint bij de ondergrond en wordt zichtbaar in de verdeling, voeglijnen, snedes, hoeken, aansluitingen en overgang naar andere materialen.
          </p>
          <p className="mt-space-xs font-inter text-[#1A1A1A] text-lg">
            SPPAT verzorgt professioneel tegelwerk voor verschillende ruimtes en toepassingen in heel Nederland.
          </p>
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
           <MediaSlot mediaId="TEGEL-PREM-B" className="w-full aspect-[4/5] md:aspect-[3/2] object-cover" />
        </div>
      </section>

      {/* Long-form Consolidated Service Content */}
      
      {/* Typographic Index */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0">
        <div className="col-span-1 md:col-span-5 order-last md:order-first md:mt-16 xl:mt-32">
           <H2>Onze tegelwerkdiensten</H2>
           <p className="mt-space-sm font-inter text-[#1A1A1A]">
             Een goed eindresultaat vraagt om specialisatie. SPPAT voert tegelwerk uit voor verschillende toepassingen, waarbij elke situatie een eigen technische aanpak vereist.
           </p>
        </div>
        <div className="col-span-1 md:col-span-7 order-first md:order-last mb-space-md md:mb-0">
          <ul className="flex flex-col border-t border-[#E5E5E5]">
            <li className="flex flex-col border-b border-[#E5E5E5] py-4">
              <div className="flex items-center gap-4">
                <span className="text-[#666666] font-space text-sm">01</span>
                <a href="#vloertegels" className="font-space text-lg hover:underline uppercase tracking-wider text-[#1A1A1A]">Vloertegels leggen</a>
              </div>
              <p className="mt-2 text-sm font-inter text-[#1A1A1A] ml-8">Voor woonruimtes, hallen, keukens, badkamers en andere vloeren.</p>
            </li>
            <li className="flex flex-col border-b border-[#E5E5E5] py-4">
              <div className="flex items-center gap-4">
                <span className="text-[#666666] font-space text-sm">02</span>
                <a href="#wandtegels" className="font-space text-lg hover:underline uppercase tracking-wider text-[#1A1A1A]">Wandtegels zetten</a>
              </div>
              <p className="mt-2 text-sm font-inter text-[#1A1A1A] ml-8">Voor badkamers, toiletten, keukens en andere betegelde wanden.</p>
            </li>
            <li className="flex flex-col border-b border-[#E5E5E5] py-4">
              <div className="flex items-center gap-4">
                <span className="text-[#666666] font-space text-sm">03</span>
                <a href="#keuken" className="font-space text-lg hover:underline uppercase tracking-wider text-[#1A1A1A]">Keuken tegelen</a>
              </div>
              <p className="mt-2 text-sm font-inter text-[#1A1A1A] ml-8">Achterwanden, spatwanden en vloeren met aandacht voor uitsparingen en aansluitingen.</p>
            </li>
            <li className="flex flex-col border-b border-[#E5E5E5] py-4">
              <div className="flex items-center gap-4">
                <span className="text-[#666666] font-space text-sm">04</span>
                <a href="#balkon" className="font-space text-lg hover:underline uppercase tracking-wider text-[#1A1A1A]">Balkon tegelen</a>
              </div>
              <p className="mt-2 text-sm font-inter text-[#1A1A1A] ml-8">Buitentegelwerk waarbij ondergrond, waterafvoer en weersbelasting onderdeel zijn van de beoordeling.</p>
            </li>
            <li className="flex flex-col border-b border-[#E5E5E5] py-4">
              <div className="flex items-center gap-4">
                <span className="text-[#666666] font-space text-sm">05</span>
                <a href="#badkamer" className="font-space text-lg hover:underline uppercase tracking-wider text-[#1A1A1A]">Badkamer tegelen</a>
              </div>
              <p className="mt-2 text-sm font-inter text-[#1A1A1A] ml-8">Voor projecten waarbij u de renovatie zelf organiseert maar het tegelwerk professioneel wilt laten uitvoeren.</p>
            </li>
          </ul>
        </div>
      </section>

<section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0">
        <div className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl" id="vloertegels">
          <div className="col-span-1 md:col-span-6 md:col-start-2 mb-space-md md:mb-0">
            <BlueprintLine className="mb-space-md" />
            <H2>Vloertegels Leggen</H2>
            <p className="mt-space-sm font-inter text-[#1A1A1A]">
              Een tegelvloer bepaalt de basis van een ruimte. Het resultaat hangt direct samen met de vlakheid van de ondergrond, de verdeling van de tegels en de eigenschappen van het gekozen materiaal.
            </p>
            <H3 className="mt-space-md text-xl">De ondergrond bepaalt de kwaliteit</H3>
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
            <div className="mt-space-sm mt-4">
              <span className="font-space uppercase text-sm tracking-wider text-[#666666] mr-4">Context:</span>
              <a href="/kennisbank/#lippage" className="font-space uppercase text-sm tracking-wider hover:underline text-[#1A1A1A] font-bold">
                Lippage voorkomen →
              </a>
            </div>
          </div>
          <div className="col-span-1 md:col-span-4 md:col-start-9 md:pt-16">
            <MediaSlot mediaId="TEGEL-VLOER" className="w-full aspect-square object-cover" />
          </div>
        </div>

        <div className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl" id="wandtegels">
          <div className="col-span-1 md:col-span-5 md:col-start-2 mb-space-md md:mb-0 order-last md:order-first md:pt-16">
            <MediaSlot mediaId="TEGEL-WAND" className="w-full aspect-[4/3] md:aspect-[3/2] object-cover" />
          </div>
          <div className="col-span-1 md:col-span-6 md:col-start-7 order-first md:order-last">
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
        </div>

        <div className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl" id="keuken">
          <div className="col-span-1 md:col-span-6 md:col-start-2 mb-space-md md:mb-0">
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
            <div className="mt-space-sm mt-4">
              <span className="font-space uppercase text-sm tracking-wider text-[#666666] mr-4">Verdieping:</span>
              <a href="/kennisbank/#epoxy-vs-cement" className="font-space uppercase text-sm tracking-wider hover:underline text-[#1A1A1A] font-bold">
                Epoxyvoeg vs. cementvoeg →
              </a>
            </div>
          </div>
          <div className="col-span-1 md:col-span-4 md:col-start-9 md:pt-16">
            <MediaSlot mediaId="TEGEL-KEUKEN" className="w-full aspect-[4/3] object-cover" />
          </div>
        </div>

        <div className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl" id="balkon">
          <div className="col-span-1 md:col-span-5 md:col-start-2 mb-space-md md:mb-0 order-last md:order-first md:pt-16">
            <MediaSlot mediaId="TEGEL-BALKON" className="w-full aspect-square md:aspect-[4/3] object-cover" />
          </div>
          <div className="col-span-1 md:col-span-6 md:col-start-7 order-first md:order-last">
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
        </div>

        <div className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl" id="badkamer">
          <div className="col-span-1 md:col-span-6 md:col-start-2 mb-space-md md:mb-0">
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
            <div className="mt-space-sm mt-4">
              <a href="/complete-badkamer-renovatie/" className="font-space uppercase text-sm tracking-wider hover:underline text-[#1A1A1A] font-bold border-b border-[#1A1A1A] pb-1">
                Bekijk complete badkamerrenovatie →
              </a>
            </div>
          </div>
          <div className="col-span-1 md:col-span-4 md:col-start-9 md:pt-16">
            <MediaSlot mediaId="TEGEL-BADK" className="w-full aspect-[4/5] object-cover" />
          </div>
        </div>
      </section>

      
      {/* Formaten in de praktijk */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0">
        <div className="col-span-1 md:col-span-8 md:col-start-3">
          <H2>Formaten in de praktijk</H2>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Het tegelformaat beïnvloedt de verdeling, snijlijnen en het ritme van een vlak. In het uitgevoerde werk van SPPAT zijn onder meer toepassingen met 7×19 cm, 40×40 cm, 60×120 cm en 120×60 cm zichtbaar. Welke verdeling passend is, hangt af van ruimte, ondergrond, tegel en ontwerp.
          </p>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 mt-space-md hide-scrollbar pb-4 md:grid md:grid-cols-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0">
            <div className="flex-none w-[60vw] md:w-auto snap-center">
              <MediaSlot mediaId="TEGEL-FORMAT-7X19" className="w-full aspect-square object-cover" caption="7x19 cm" />
            </div>
            <div className="flex-none w-[60vw] md:w-auto snap-center">
              <MediaSlot mediaId="TEGEL-FORMAT-40X40" className="w-full aspect-square object-cover" caption="40x40 cm" />
            </div>
            <div className="flex-none w-[60vw] md:w-auto snap-center">
              <MediaSlot mediaId="TEGEL-FORMAT-60X120" className="w-full aspect-square object-cover" caption="60x120 cm" />
            </div>
            <div className="flex-none w-[60vw] md:w-auto snap-center">
              <MediaSlot mediaId="TEGEL-FORMAT-120X60" className="w-full aspect-square object-cover" caption="120x60 cm" />
            </div>
          </div>
        </div>
      </section>

      {/* Verstek / 45° afwerking */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0">
        <div className="col-span-1 md:col-span-8 md:col-start-3">
          <H2>Verstek / 45° afwerking</H2>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Bij geschikte tegels kan een zichtbare buitenhoek in verstek worden uitgevoerd, waarbij de tegelranden onder 45° worden voorbereid. Of deze afwerking passend is, hangt af van materiaal, dikte, randkwaliteit en ontwerp. Het is een detailoplossing, geen vaste standaard voor ieder project.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-space-md">
            <div>
              <MediaSlot mediaId="TEGEL-45-PROCESS" className="w-full aspect-[4/3] object-cover" caption="Proces: voorbereiding" />
            </div>
            <div>
              <MediaSlot mediaId="TEGEL-45-RESULT" className="w-full aspect-[4/3] object-cover" caption="Resultaat: afgewerkte buitenhoek" />
            </div>
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
