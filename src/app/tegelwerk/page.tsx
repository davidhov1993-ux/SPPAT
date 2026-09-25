import { H1, H2, H3 } from "@/components/Typography";
import { MediaSlot } from "@/components/MediaSlot";
import { CtaMonument } from "@/components/CtaComponents";
import { BlueprintLine } from "@/components/BlueprintLine";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tegelwerk & Tegelzetter | SPPAT",
  description: "Professioneel tegelwerk voor badkamer, woonkamer, keuken en balkon. Van grootformaat vloertegels tot strakke wandtegels.",
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
              <H1>Precisie in Vloer- en Wandtegels</H1>
              <p className="mt-space-sm font-inter text-[#1A1A1A]">
                Goed tegelwerk herkent u aan de rust in het eindbeeld. Dat is geen toeval, maar het resultaat van doordachte verdeling, voorbereiding en strakke lijnen. SPPAT verzorgt vloer- en wandtegelwerk voor uiteenlopende ruimtes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Index - Text Only */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0">
        <div className="col-span-1 md:col-span-8 md:col-start-3">
          <BlueprintLine className="mb-space-md" />
          <ul className="flex flex-col gap-space-sm font-space uppercase text-sm md:text-base tracking-wider">
            <li className="flex items-center gap-4"><span className="text-gray-400">01</span> <a href="#vloertegels" className="hover:underline">Vloertegels leggen</a></li>
            <li className="flex items-center gap-4"><span className="text-gray-400">02</span> <a href="#wandtegels" className="hover:underline">Wandtegels zetten</a></li>
            <li className="flex items-center gap-4"><span className="text-gray-400">03</span> <a href="#keuken" className="hover:underline">Keuken tegelen</a></li>
            <li className="flex items-center gap-4"><span className="text-gray-400">04</span> <a href="#balkon" className="hover:underline">Balkon tegelen</a></li>
            <li className="flex items-center gap-4"><span className="text-gray-400">05</span> <a href="#badkamer" className="hover:underline">Badkamer tegelen</a></li>
          </ul>
          <BlueprintLine className="mt-space-md" />
        </div>
      </section>

      {/* Premium - 7/5 Asymmetry */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0">
        <div className="col-span-1 md:col-span-7 mb-space-md md:mb-0">
           <MediaSlot mediaId="TEGEL-02" className="w-full aspect-[4/5] md:aspect-[3/2] object-cover" />
        </div>
        <div className="col-span-1 md:col-span-5 md:mt-16 xl:mt-32">
           <H2>Voorbereiding is zichtbaar in de afwerking</H2>
           <p className="mt-space-sm font-inter text-[#1A1A1A]">
             Een strakke tegelvloer ligt op een strakke ondergrond. Voordat de eerste tegel wordt geplaatst, beoordeelt SPPAT de dekvloer, de stabiliteit en de eventuele noodzaak tot egaliseren of ontkoppelen. Vooral bij grootformaat tegels en complexe patronen is deze voorbereiding bepalend voor het eindresultaat.
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
           <MediaSlot mediaId="TEGEL-03" className="w-full aspect-[4/5] md:aspect-[3/2] object-cover" />
        </div>
      </section>

      {/* Long-form Consolidated Service Content */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0">
        <div className="col-span-1 md:col-span-8 md:col-start-3 mb-space-xl" id="vloertegels">
          <BlueprintLine className="mb-space-md" />
          <H2>Vloertegels leggen</H2>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Een tegelvloer bepaalt de basis van uw interieur. Bij vloertegels—van strakke betonlook tot warm keramisch parket—draait het om verdeling en vlakheid.
          </p>
          <H3 className="mt-space-md">Voorbereiding en ondervloer</H3>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Het leggen begint bij de ondervloer. Is de zandcementdekvloer vlak genoeg? Moet er worden geëgaliseerd? Zeker bij grootformaat tegels (vanaf 60x60cm en groter) is een zuivere, vlakke ondergrond cruciaal om lippage (hoogteverschillen tussen tegels) te voorkomen.
          </p>
          <H3 className="mt-space-md">Vloerverwarming en ontkoppeling</H3>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Tegels zijn ideaal in combinatie met vloerverwarming vanwege hun hoge warmtegeleiding. Bij kritische ondergronden (zoals hout of bij sterke temperatuurschommelingen) wordt een ontkoppelingsmat geadviseerd om scheurvorming in het tegelwerk op te vangen.
          </p>
        </div>

        <div className="col-span-1 md:col-span-8 md:col-start-4 mb-space-xl" id="wandtegels">
          <BlueprintLine className="mb-space-md" />
          <H2>Wandtegels zetten</H2>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Wandtegels beschermen natte ruimtes en vormen een sterke visuele wandafwerking. 
          </p>
          <H3 className="mt-space-md">Zichtlijnen en verdeling</H3>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            De positie van de eerste tegel is de belangrijkste. Waar komt de snijtegel? Hoe lopen de voegen door rond een raam of nis? SPPAT meet de ruimte vooraf uit zodat smalle, storende tegelstrookjes in de hoeken worden vermeden.
          </p>
          <H3 className="mt-space-md">Hoekafwerking</H3>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Uitwendige hoeken kunnen worden afgewerkt met een tegelprofiel (bijvoorbeeld RVS of kleur-gecoat aluminium) of in verstek worden gezaagd (jolly). Verstekzagen geeft een strakke, exclusieve uitstraling doordat het patroon van de tegel de hoek om lijkt te vouwen.
          </p>
        </div>

        <div className="col-span-1 md:col-span-8 md:col-start-3 mb-space-xl" id="keuken">
          <BlueprintLine className="mb-space-md" />
          <H2>Keuken tegelen</H2>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            In de keuken gaat het vaak om de achterwand (spatwand) en de vloer. 
          </p>
          <H3 className="mt-space-md">Achterwand en werkblad</H3>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            De wand tussen aanrecht en bovenkastjes beschermt tegen vet en vocht. Hier wordt vaak gekozen voor handvorm tegeltjes, mozaïek of juist één grote, naadloze plaat keramiek. De aansluiting met het werkblad moet strak en vloeistofdicht worden afgekit.
          </p>
        </div>

        <div className="col-span-1 md:col-span-8 md:col-start-4 mb-space-xl" id="balkon">
          <BlueprintLine className="mb-space-md" />
          <H2>Balkon tegelen</H2>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Buiten tegelwerk vereist totaal andere technieken dan binnen.
          </p>
          <H3 className="mt-space-md">Weersinvloeden en vocht</H3>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Een balkon heeft te maken met vorst, hitte en regen. Als er vocht onder de tegels komt dat vervolgens bevriest, vriezen de tegels los.
          </p>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Daarom is afschot (zodat water wegloopt), de juiste drainagemat, hoogwaardige flexibele buitenlijm en epoxy of vorstbestendige voeg noodzakelijk. SPPAT bekijkt of uw balkon technisch geschikt is voor verlijmd keramiek of dat een tegeldrager-systeem beter is.
          </p>
        </div>

        <div className="col-span-1 md:col-span-8 md:col-start-3 mb-space-xl" id="badkamer">
          <BlueprintLine className="mb-space-md" />
          <H2>Badkamer tegelen</H2>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Wanneer u geen complete verbouwing nodig heeft, maar alleen nieuw tegelwerk, voert SPPAT ook losse tegelopdrachten in de badkamer uit. 
          </p>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Houd er wel rekening mee dat de waterdichting (kimband, pasta) van de natte cel gegarandeerd moet zijn. Als het bestaande leidingwerk of de dekvloer niet voldoet, wordt dit vooraf besproken om lekkages in de toekomst te voorkomen.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="col-span-1 md:col-span-12 overflow-hidden w-full">
        <CtaMonument title="Uw project bespreken" />
      </section>

    </main>
  )
}
