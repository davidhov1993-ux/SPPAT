import { H1, H2 } from "@/components/Typography";
import { MediaSlot } from "@/components/MediaSlot";
;
import { CtaBrief } from "@/components/CtaComponents";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kennisbank | Badkamertechniek & Tegelwerk | SPPAT",
  description: "Praktische uitleg over waterdichting, lippage, betegelde inspectieluiken en voegmaterialen bij badkamer- en tegelwerk.",
  alternates: { canonical: "https://www.sppat.nl/kennisbank" },
};



export default function KennisbankPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="grid grid-cols-4 md:grid-cols-12 px-5 md:px-10 pt-space-xl pb-space-lg">
        <div className="col-span-4 md:col-span-8 md:col-start-3">
          <H1>Kennisbank: Techniek achter de afwerking</H1>
          <p className="mt-space-sm text-lg">
            Een mooi tegelvlak is het zichtbare eindpunt van een technische opbouw. In de Kennisbank leggen we onderwerpen uit die invloed hebben op de kwaliteit, levensduur en afwerking van badkamer- en tegelprojecten.
          </p>
        </div>
      </section>

      {/* Main Content with Sticky Index */}
      <section className="grid grid-cols-4 md:grid-cols-12 px-5 md:px-10">
        {/* Sticky Index (Desktop Only) */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="sticky top-20 flex flex-col gap-4 text-sm font-space tracking-widest uppercase">
            <a href="#waterdichting" className="hover:underline">Waterdichting</a>
            <a href="#lippage" className="hover:underline">Tegel Lippage</a>
            <a href="#inspectieluik" className="hover:underline">Inspectieluik</a>
            <a href="#epoxy-vs-cement" className="hover:underline">Epoxy vs. Cement</a>
          </div>
        </div>

        {/* The Articles */}
        <div className="col-span-4 md:col-span-12 lg:col-span-8 lg:col-start-5">
          {/* Article 1 */}
          <article id="waterdichting" className="border-t border-[#E5E5E5] pt-space-lg mb-space-xl">
            <H2>Waterdichting in de Badkamer: Wat Gebeurt er Onder de Tegels?</H2>
            <div className="mt-space-sm prose prose-lg max-w-none mb-space-md font-inter text-[#1A1A1A]">
              <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Zijn tegels waterdicht?</h3>
              <p>
                Tegels zelf kunnen zeer weinig water opnemen, maar een betegeld oppervlak bestaat ook uit voegen, hoeken, doorvoeren en aansluitingen. Daarom wordt de bescherming tegen vocht niet uitsluitend aan de zichtbare tegelafwerking overgelaten.
              </p>
              <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Natte zones vragen extra aandacht</h3>
              <p>
                Met name rond douche en bad krijgt de onderliggende opbouw te maken met regelmatige waterbelasting. Welke waterdichtingsoplossing geschikt is, hangt af van ondergrond, systeem en situatie.
              </p>
              <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Wat doet kimband?</h3>
              <p>
                Kimband wordt binnen bepaalde waterdichtingssystemen gebruikt om kwetsbare aansluitingen, bijvoorbeeld tussen wand en vloer, mee op te nemen in de afdichtingslaag. Het is onderdeel van een systeem en geen los wondermiddel.
              </p>
              <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Doorvoeren en details</h3>
              <p>
                Leidingen, kranen, afvoeren, nissen en andere onderbrekingen verdienen specifieke aandacht. De exacte oplossing hoort bij de gekozen technische opbouw.
              </p>
              <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Wat betekent dit voor uw renovatie?</h3>
              <p>
                Vraag bij een badkamerproject niet alleen welke tegel wordt gebruikt, maar ook hoe de natte zones technisch worden opgebouwd.
              </p>
              <div className="mt-space-sm mt-6">
                <Link href="/complete-badkamer-renovatie/" className="font-space uppercase text-sm tracking-wider hover:underline text-[#1A1A1A] font-bold">Complete badkamerrenovatie →</Link>
              </div>
            </div>
            <MediaSlot mediaId="KB-WATERDICHTING" className="w-full aspect-[4/3] md:aspect-[16/9] object-cover" />
          </article>

          {/* Article 2 */}
          <article id="lippage" className="border-t border-[#E5E5E5] pt-space-lg mb-space-xl">
            <H2>Tegel Lippage: Hoogteverschillen Beperken</H2>
            <div className="mt-space-sm prose prose-lg max-w-none mb-space-md font-inter text-[#1A1A1A]">
              <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Wat is lippage?</h3>
              <p>
                Lippage is het zichtbare of voelbare hoogteverschil tussen de randen van aangrenzende tegels. Een beperkte tolerantie kan samenhangen met producteigenschappen en de toepassing, maar storende verschillen kunnen het eindbeeld sterk beïnvloeden.
              </p>
              <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Waardoor ontstaat het?</h3>
              <p>Mogelijke factoren zijn:</p>
              <ul className="list-disc list-inside">
                <li>onvoldoende vlakke ondergrond;</li>
                <li>maat- of vormtoleranties van de tegel;</li>
                <li>langwerpige of grote formaten;</li>
                <li>gekozen legpatroon;</li>
                <li>plaatsing en lijmbed;</li>
                <li>combinatie van meerdere factoren.</li>
              </ul>
              <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Waarom grootformaat extra aandacht vraagt</h3>
              <p>
                Naarmate tegels groter worden, wordt vlakheid van de ondergrond steeds belangrijker en kunnen kleine afwijkingen over een groter vlak doorwerken.
              </p>
              <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Levelingsystemen</h3>
              <p>
                Een levelingsysteem kan tijdens plaatsing helpen bij het onderling positioneren van tegels. Het vervangt echter geen geschikte ondergrond of correcte voorbereiding.
              </p>
              <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Praktische conclusie</h3>
              <p>
                Lippage wordt niet opgelost door één hulpmiddel. Een goed resultaat begint bij de combinatie van ondergrond, tegel, patroon en uitvoering.
              </p>
              <div className="mt-space-sm mt-6">
                <Link href="/specialisaties/#grootformaat" className="font-space uppercase text-sm tracking-wider hover:underline text-[#1A1A1A] font-bold">Grootformaat tegels →</Link>
              </div>
            </div>
            <MediaSlot mediaId="KB-LIPPAGE" className="w-full aspect-[4/3] md:aspect-[16/9] object-cover" />
          </article>

          {/* Article 3 */}
          <article id="inspectieluik" className="border-t border-[#E5E5E5] pt-space-lg mb-space-xl">
            <H2>Het Onzichtbare, Betegelde Inspectieluik</H2>
            <div className="mt-space-sm prose prose-lg max-w-none mb-space-md font-inter text-[#1A1A1A]">
              <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Techniek bereikbaar houden</h3>
              <p>
                Inbouwreservoirs, afsluiters en andere technische onderdelen kunnen onderhoud of inspectie nodig hebben. Ze volledig onbereikbaar wegwerken is daarom niet altijd verstandig.
              </p>
              <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Waarom een betegeld luik?</h3>
              <p>
                Een betegeld inspectieluik kan de toegang behouden terwijl de zichtzijde aansluit bij het omliggende tegelwerk.
              </p>
              <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Waar zit de moeilijkheid?</h3>
              <p>
                Het luik moet niet alleen openen. Ook voeglijnen, maatvoering, constructie en omliggende tegels moeten logisch op elkaar aansluiten.
              </p>
              <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Niet iedere situatie is hetzelfde</h3>
              <p>
                Afmeting, systeem, tegelgewicht en benodigde toegang bepalen welke oplossing geschikt is.
              </p>
              <div className="mt-space-sm mt-6">
                <Link href="/complete-badkamer-renovatie/" className="font-space uppercase text-sm tracking-wider hover:underline text-[#1A1A1A] font-bold">Complete badkamerrenovatie →</Link>
              </div>
            </div>
            <MediaSlot mediaId="KB-INSPECTIELUIK" className="w-full aspect-[4/3] md:aspect-[16/9] object-cover" />
          </article>

          {/* Article 4 */}
          <article id="epoxy-vs-cement" className="border-t border-[#E5E5E5] pt-space-lg mb-space-xl">
            <H2>Epoxyvoeg vs. Cementvoeg</H2>
            <div className="mt-space-sm prose prose-lg max-w-none mb-space-md font-inter text-[#1A1A1A]">
              <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Cementgebonden voeg</h3>
              <p>
                Cementgebonden voegmortel is een veelgebruikte oplossing voor tegelwerk. Er bestaan verschillende producten voor verschillende voegbreedtes en toepassingen.
              </p>
              <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Epoxyvoeg</h3>
              <p>
                Epoxyvoeg is gebaseerd op hars en heeft andere eigenschappen en verwerking dan een traditionele cementgebonden voeg. Het materiaal kan interessant zijn waar specifieke eisen aan belasting, reiniging of vochtbestendigheid gelden.
              </p>
              <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Is epoxy altijd beter?</h3>
              <p>
                Nee. &quot;Sterker&quot; of &quot;duurder&quot; betekent niet automatisch dat het voor iedere ruimte de beste keuze is. Tegeltype, toepassing, uitstraling, verwerking en onderhoud spelen mee.
              </p>
              <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Wat bepaalt de keuze?</h3>
              <ul className="list-disc list-inside">
                <li>ruimte en belasting;</li>
                <li>type tegel;</li>
                <li>gewenste voegbreedte en uitstraling;</li>
                <li>onderhoud;</li>
                <li>technische eisen van het project.</li>
              </ul>
              <p className="mt-space-xs">
                De uiteindelijke keuze moet aansluiten bij de daadwerkelijke toepassing en productvoorschriften.
              </p>
              <div className="mt-space-sm mt-6">
                <Link href="/tegelwerk/#keuken" className="font-space uppercase text-sm tracking-wider hover:underline text-[#1A1A1A] font-bold">Keuken tegelwerk →</Link>
              </div>
            </div>
            <MediaSlot mediaId="KB-EPOXY" className="w-full aspect-[4/3] md:aspect-[16/9] object-cover" />
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 md:px-10 pb-space-xl flex justify-end">
        <div className="w-full md:w-1/3">
          <CtaBrief title="Uw project bespreken?" link="/contact/" />
        </div>
      </section>
    </main>
  );
}
