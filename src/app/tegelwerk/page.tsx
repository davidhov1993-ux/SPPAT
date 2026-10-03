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
    <main data-page="tegelwerk" className="grid grid-cols-1 md:grid-cols-12 gap-x-6">
      {/* 1. Hero */}
      <section className="tile-hero col-span-1 md:col-span-12 mb-space-xl">
        <div className="tile-hero-image">
          <MediaSlot mediaId="TEGEL-HERO" priority className="w-full aspect-[4/5] md:aspect-[16/9] object-cover" />
        </div>
        <div className="tile-hero-copy">
          <H1>Professioneel Tegelwerk & Installatie</H1>
          <p className="mt-space-sm font-inter text-[#1A1A1A] text-lg">
            Goed tegelwerk is meer dan tegels recht naast elkaar plaatsen. De kwaliteit begint bij de ondergrond en wordt zichtbaar in de verdeling, voeglijnen, snedes, hoeken, aansluitingen en overgang naar andere materialen.
          </p>
          <p className="mt-space-xs font-inter text-[#1A1A1A] text-lg">
            SPPAT verzorgt professioneel tegelwerk voor verschillende ruimtes en toepassingen in heel Nederland.
          </p>
        </div>
      </section>

      {/* 2. Intro + Typographic Index */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-6 mb-space-xl px-5 md:px-10">
        <div className="col-span-1 md:col-span-5 mt-space-md md:mt-0 flex flex-col">
           <H2>De basis voor een strak eindresultaat</H2>
           <p className="mt-space-sm font-inter text-[#1A1A1A]">
             Voor de eerste tegel wordt geplaatst, moet duidelijk zijn wat de ondergrond vraagt en hoe de tegelverdeling uitkomt. Een goede voorbereiding voorkomt dat problemen pas zichtbaar worden bij hoeken, deuren, nissen of het einde van een wand.
           </p>
        </div>
        <div className="col-span-1 md:col-span-6 md:col-start-7 mt-space-md md:mt-0">
          <H2 className="mb-space-sm">Onze tegelwerkdiensten</H2>
          <ul className="flex flex-col border-t border-[#E5E5E5]">
            <li className="flex flex-col border-b border-[#E5E5E5] py-4">
              <div className="flex items-center gap-4">
                <span className="text-[#666666] font-space text-sm">01</span>
                <h3><a href="#vloertegels" className="font-space text-lg hover:underline uppercase tracking-wider text-[#1A1A1A]">Vloertegels leggen</a></h3>
              </div>
              <p className="mt-2 text-sm font-inter text-[#1A1A1A] ml-8">Voor woonruimtes, hallen, keukens, badkamers en andere vloeren.</p>
              <Link href="/tegelwerk/#vloertegels" className="ml-8 mt-2 font-space text-sm underline underline-offset-4">Meer over vloertegels →</Link>
            </li>
            <li className="flex flex-col border-b border-[#E5E5E5] py-4">
              <div className="flex items-center gap-4">
                <span className="text-[#666666] font-space text-sm">02</span>
                <h3><a href="#wandtegels" className="font-space text-lg hover:underline uppercase tracking-wider text-[#1A1A1A]">Wandtegels zetten</a></h3>
              </div>
              <p className="mt-2 text-sm font-inter text-[#1A1A1A] ml-8">Voor badkamers, toiletten, keukens en andere betegelde wanden.</p>
              <Link href="/tegelwerk/#wandtegels" className="ml-8 mt-2 font-space text-sm underline underline-offset-4">Meer over wandtegels →</Link>
            </li>
            <li className="flex flex-col border-b border-[#E5E5E5] py-4">
              <div className="flex items-center gap-4">
                <span className="text-[#666666] font-space text-sm">03</span>
                <h3><a href="#keuken" className="font-space text-lg hover:underline uppercase tracking-wider text-[#1A1A1A]">Keuken tegelen</a></h3>
              </div>
              <p className="mt-2 text-sm font-inter text-[#1A1A1A] ml-8">Achterwanden, spatwanden en vloeren met aandacht voor uitsparingen en aansluitingen.</p>
              <Link href="/tegelwerk/#keuken" className="ml-8 mt-2 font-space text-sm underline underline-offset-4">Meer over keuken tegelwerk →</Link>
            </li>
            <li className="flex flex-col border-b border-[#E5E5E5] py-4">
              <div className="flex items-center gap-4">
                <span className="text-[#666666] font-space text-sm">04</span>
                <h3><a href="#balkon" className="font-space text-lg hover:underline uppercase tracking-wider text-[#1A1A1A]">Balkon tegelen</a></h3>
              </div>
              <p className="mt-2 text-sm font-inter text-[#1A1A1A] ml-8">Buitentegelwerk waarbij ondergrond, waterafvoer en weersbelasting onderdeel zijn van de beoordeling.</p>
              <Link href="/tegelwerk/#balkon" className="ml-8 mt-2 font-space text-sm underline underline-offset-4">Meer over balkons →</Link>
            </li>
            <li className="flex flex-col border-b border-[#E5E5E5] py-4">
              <div className="flex items-center gap-4">
                <span className="text-[#666666] font-space text-sm">05</span>
                <h3><a href="#badkamer" className="font-space text-lg hover:underline uppercase tracking-wider text-[#1A1A1A]">Badkamer tegelen</a></h3>
              </div>
              <p className="mt-2 text-sm font-inter text-[#1A1A1A] ml-8">Voor projecten waarbij u de renovatie zelf organiseert maar het tegelwerk professioneel wilt laten uitvoeren.</p>
              <Link href="/tegelwerk/#badkamer" className="ml-8 mt-2 font-space text-sm underline underline-offset-4">Meer over badkamer tegelen →</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* 3. Premium A */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-6 mb-space-xl px-5 md:px-10">
        <div className="col-span-1 md:col-span-6 order-last md:order-first mt-space-md md:mt-0 flex flex-col justify-center">
           <H2>Expertise in veeleisende materialen</H2>
           <p className="mt-space-sm font-inter text-[#1A1A1A]">
             Naast regulier tegelwerk werkt SPPAT met toepassingen waarbij formaat, materiaal of detaillering extra aandacht vraagt:
           </p>
           <ul className="mt-space-xs font-inter text-[#1A1A1A] list-disc list-inside mb-4">
             <li>grootformaat en XXL;</li>
             <li>mozaïek;</li>
             <li>natuursteen;</li>
             <li>keramisch parket.</li>
           </ul>
        </div>
        <div className="col-span-1 md:col-span-5 md:col-start-8 order-first md:order-last">
           <MediaSlot mediaId="TEGEL-PREM-A" className="w-full aspect-[4/5] object-cover" />
        </div>
      </section>

      {/* 4. Premium B */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-6 mb-space-xl px-5 md:px-10">
        <div className="col-span-1 md:col-span-5 mb-space-md md:mb-0">
           <MediaSlot mediaId="TEGEL-PREM-B" className="w-full aspect-[4/5] object-cover" />
        </div>
        <div className="col-span-1 md:col-span-6 md:col-start-7 flex flex-col justify-center">
           <H2>Oog voor de afwerking</H2>
           <p className="mt-space-sm font-inter text-[#1A1A1A]">
             Een nette tegelwand of vloer wordt uiteindelijk beoordeeld op details: de verdeling van het vlak, rechte lijnen, aansluitingen, hoeken, uitsparingen en de relatie tussen tegel en sanitair of interieur.
           </p>
           <div>
             <Link href="/specialisaties/" className="font-space uppercase text-sm tracking-wider underline hover:no-underline font-bold">Bekijk specialisaties →</Link>
           </div>
        </div>
      </section>

      {/* 5. Closing Content: Consolidated sections */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-6 mb-space-xl px-5 md:px-10" id="vloertegels">
        <div className="col-span-1 md:col-span-8 md:col-start-3">
          <BlueprintLine className="mb-space-md" />
          <H2>Vloertegels Leggen</H2>
          <p className="mt-space-sm">Een strakke tegelvloer begint bij een stabiele, geschikte en voldoende vlakke basis. Daarna bepalen de tegelverdeling, voeglijnen en aansluitingen hoe rustig het eindresultaat oogt.</p>
          <H3 className="mt-space-md mb-space-xs">Voorbereiding en egalisatie</H3>
          <p className="mt-space-sm">Voor plaatsing wordt beoordeeld wat de bestaande ondergrond nodig heeft. Afhankelijk van de situatie kan voorbereiding of egalisatie nodig zijn.</p>
          <p className="mt-space-sm">Bij vloerverwarming wordt de combinatie van ondergrond, verwarmingssysteem en gekozen afwerking als geheel bekeken. SPPAT biedt vloerverwarming niet als losse hoofdservice aan, maar kan deze binnen een passend renovatie- of tegelproject meenemen.</p>
          <H3 className="mt-space-md mb-space-xs">Tegelverdeling</H3>
          <p className="mt-space-sm">Vooraf nadenken over startpunt, zichtlijnen, deuren, wanden en snijstukken voorkomt een onrustig eindbeeld.</p>
          <H3 className="mt-space-md mb-space-xs">Verschillende toepassingen</H3>
          <ul className="mt-space-xs list-disc pl-5"><li>woonkamer;</li><li>hal;</li><li>keuken;</li><li>badkamer;</li><li>toilet;</li><li>grotere doorlopende vloeren.</li></ul>
          <H3 className="mt-space-md mb-space-xs">Een nieuwe tegelvloer realiseren?</H3>
          <div className="mt-space-sm flex flex-wrap gap-6"><Link href="/contact/" className="font-space text-sm uppercase tracking-wider underline underline-offset-4">Project bespreken →</Link><Link href="/kennisbank/#lippage" className="font-space text-sm uppercase tracking-wider underline underline-offset-4">Lippage voorkomen →</Link></div>
        </div>
      </section>

      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-6 mb-space-xl px-5 md:px-10" id="wandtegels">
        <div className="col-span-1 md:col-span-8 md:col-start-3">
          <BlueprintLine className="mb-space-md" />
          <H2>Wandtegels Zetten</H2>
          <p className="mt-space-sm">Bij wandtegelwerk vallen afwijkingen direct op. Voeglijnen, hoeken, nissen, kranen, stopcontacten en andere uitsparingen maken de verdeling van het tegelvlak bepalend voor het eindresultaat.</p>
          <H3 className="mt-space-md mb-space-xs">Eerst verdelen, daarna plaatsen</H3>
          <p className="mt-space-sm">Een goede indeling voorkomt onnodig smalle passtukken en helpt belangrijke lijnen logisch door te laten lopen.</p>
          <H3 className="mt-space-md mb-space-xs">Details die het verschil maken</H3>
          <ul className="mt-space-xs list-disc pl-5"><li>buiten- en binnenhoeken;</li><li>aansluitingen op plafond en vloer;</li><li>uitsparingen voor leidingwerk en elektra;</li><li>nissen;</li><li>aansluiting op sanitair;</li><li>overgang tussen verschillende materialen.</li></ul>
          <p className="mt-space-sm">Welke technische afwerking wordt gekozen, hangt af van tegel, ondergrond en ontwerp.</p>
          <H3 className="mt-space-md mb-space-xs">Uw wanden professioneel laten tegelen?</H3>
          <div className="mt-space-sm flex flex-wrap gap-6"><Link href="/contact/" className="font-space text-sm uppercase tracking-wider underline underline-offset-4">Project bespreken →</Link></div>
        </div>
      </section>

      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-6 mb-space-xl px-5 md:px-10" id="keuken">
        <div className="col-span-1 md:col-span-8 md:col-start-3">
          <BlueprintLine className="mb-space-md" />
          <H2>Keuken Achterwand &amp; Vloer Tegelen</H2>
          <p className="mt-space-sm">In een keuken komt tegelwerk samen met werkbladen, kasten, stopcontacten, kranen en apparatuur. Daardoor zit de kwaliteit vaak juist in de kleine aansluitingen.</p>
          <H3 className="mt-space-md mb-space-xs">Maatwerk rondom vaste elementen</H3>
          <p className="mt-space-sm">Een goede tegelverdeling houdt rekening met:</p>
          <ul className="mt-space-xs list-disc pl-5"><li>bovenkant werkblad;</li><li>onderzijde bovenkasten;</li><li>stopcontacten en schakelaars;</li><li>kranen en leidingdoorvoeren;</li><li>hoeken en eindpunten;</li><li>zichtbare snijlijnen.</li></ul>
          <H3 className="mt-space-md mb-space-xs">Voegkeuze</H3>
          <p className="mt-space-sm">Voegmateriaal en voegkleur beïnvloeden zowel uitstraling als onderhoud. Welke oplossing geschikt is, hangt af van toepassing, tegel en belasting.</p>
          <div className="mt-space-sm flex flex-wrap gap-6"><Link href="/kennisbank/#epoxy-vs-cement" className="font-space text-sm uppercase tracking-wider underline underline-offset-4">Epoxyvoeg vs. cementvoeg →</Link></div>
          <H3 className="mt-space-md mb-space-xs">Uw keuken voorzien van nieuw tegelwerk?</H3>
          <div className="mt-space-sm flex flex-wrap gap-6"><Link href="/contact/" className="font-space text-sm uppercase tracking-wider underline underline-offset-4">Project bespreken →</Link></div>
        </div>
      </section>

      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-6 mb-space-xl px-5 md:px-10" id="balkon">
        <div className="col-span-1 md:col-span-8 md:col-start-3">
          <BlueprintLine className="mb-space-md" />
          <H2>Balkon Tegelen</H2>
          <p className="mt-space-sm">Buitentegelwerk krijgt te maken met regen, temperatuurwisselingen en andere omstandigheden dan tegelwerk binnen. Daarom moet niet alleen naar de tegel worden gekeken, maar ook naar de bestaande constructie, ondergrond en waterafvoer.</p>
          <H3 className="mt-space-md mb-space-xs">Water moet weg kunnen</H3>
          <p className="mt-space-sm">Een balkon of buitenterras vraagt om een opbouw die past bij de specifieke situatie. Afschot, afvoer, aansluitingen en materiaalkeuze worden daarom vóór uitvoering beoordeeld.</p>
          <H3 className="mt-space-md mb-space-xs">Afwerking aan randen en aansluitingen</H3>
          <p className="mt-space-sm">Randen, dorpels, gevels en afvoeren zijn belangrijke details in buitentegelwerk. De oplossing is afhankelijk van de bestaande bouwsituatie.</p>
          <H3 className="mt-space-md mb-space-xs">Uw balkon voorzien van tegelwerk?</H3>
          <div className="mt-space-sm flex flex-wrap gap-6"><Link href="/contact/" className="font-space text-sm uppercase tracking-wider underline underline-offset-4">Project bespreken →</Link></div>
        </div>
      </section>

      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-6 mb-space-xl px-5 md:px-10" id="badkamer">
        <div className="col-span-1 md:col-span-8 md:col-start-3">
          <BlueprintLine className="mb-space-md" />
          <H2>Badkamer Vakkundig Laten Tegelen</H2>
          <p className="mt-space-sm">Regelt u de verbouwing zelf en zoekt u een specialist voor het tegelwerk? SPPAT kan het vloer- en wandtegelwerk als afzonderlijk onderdeel uitvoeren.</p>
          <H3 className="mt-space-md mb-space-xs">Aandachtspunten in natte ruimtes</H3>
          <p className="mt-space-sm">Badkamertegelwerk vraagt om aandacht voor:</p>
          <ul className="mt-space-xs list-disc pl-5"><li>geschikte en vlakke ondergronden;</li><li>natte zones;</li><li>aansluiting op douchegoot of put;</li><li>afschot waar noodzakelijk;</li><li>tegelverdeling;</li><li>nissen en inbouwdelen;</li><li>hoeken en aansluitingen;</li><li>voeg- en kitdetails.</li></ul>
          <p className="mt-space-sm">De exacte technische opbouw hangt af van de bestaande situatie en gekozen materialen.</p>
          <H3 className="mt-space-md mb-space-xs">Complete renovatie nodig?</H3>
          <p className="mt-space-sm">Wilt u dat ook sloop, installatiewerk, voorbereiding, sanitair en afwerking worden meegenomen?</p>
          <div className="mt-space-sm flex flex-wrap gap-6"><Link href="/complete-badkamer-renovatie/" className="font-space text-sm uppercase tracking-wider underline underline-offset-4">Bekijk complete badkamerrenovatie →</Link></div>
          <H3 className="mt-space-md mb-space-xs">Alleen het tegelwerk bespreken?</H3>
          <div className="mt-space-sm flex flex-wrap gap-6"><Link href="/contact/" className="font-space text-sm uppercase tracking-wider underline underline-offset-4">Project bespreken →</Link></div>
        </div>
      </section>

      {/* 6. Closing Elements */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-6 mb-space-xl px-5 md:px-10">
        <div className="col-span-1 md:col-span-8 md:col-start-3 text-center pt-space-xl border-t border-[#E5E5E5]">


           <H2>Gerealiseerde Tegelprojecten</H2>
           <div className="mt-space-sm mb-space-xl">
             <Link href="/projecten/" className="inline-block bg-[#1A1A1A] text-white px-6 py-3 font-space uppercase tracking-wider text-sm hover:bg-black transition-colors border border-[#1A1A1A]">
               Bekijk projecten
             </Link>
           </div>

           <H2>Uw tegelproject bespreken?</H2>
           <p className="mt-space-sm font-inter text-[#1A1A1A]">
             Stuur foto&apos;s van de ruimte, globale maten en indien mogelijk het type of formaat tegel dat u wilt gebruiken.
           </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="col-span-1 md:col-span-12 overflow-hidden w-full mb-space-xl">
        <CtaMonument title="Project bespreken" />
      </section>

    </main>
  )
}
