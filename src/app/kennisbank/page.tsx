import { H1, H2 } from "@/components/Typography";
import { MediaSlot } from "@/components/MediaSlot";
;
import { CtaBrief } from "@/components/CtaComponents";

import { Metadata } from "next";

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
        <div className="hidden md:block col-span-3">
          <div className="sticky top-20 flex flex-col gap-4 text-sm font-space tracking-widest uppercase">
            <a href="#waterdichting" className="hover:underline">Waterdichting</a>
            <a href="#lippage" className="hover:underline">Tegel Lippage</a>
            <a href="#inspectieluik" className="hover:underline">Inspectieluik</a>
            <a href="#epoxy-vs-cement" className="hover:underline">Epoxy vs. Cement</a>
          </div>
        </div>

        {/* The Articles */}
        <div className="col-span-4 md:col-span-8 md:col-start-5">
          {/* Article 1 */}
          <article id="waterdichting" className="border-t border-[#E5E5E5] pt-space-lg mb-space-xl">
            <H2>Waterdichting in de Badkamer</H2>
            <div className="mt-space-sm prose prose-lg max-w-none mb-space-md">
              <p>
                Tegels zelf kunnen zeer weinig water opnemen, maar een betegeld oppervlak bestaat ook uit voegen, hoeken, doorvoeren en aansluitingen. Daarom wordt de bescherming tegen vocht niet uitsluitend aan de zichtbare tegelafwerking overgelaten.
              </p>
              <p>
                Natte zones rond douche en bad vragen extra aandacht. Kimband wordt binnen waterdichtingssystemen gebruikt om kwetsbare aansluitingen, bijvoorbeeld tussen wand en vloer, af te dichten.
              </p>
            </div>
            <MediaSlot mediaId="KB-WATERDICHTING" className="w-full aspect-[4/3] md:aspect-[16/9] object-cover" />
          </article>

          {/* Article 2 */}
          <article id="lippage" className="border-t border-[#E5E5E5] pt-space-lg mb-space-xl">
            <H2>Tegel Lippage: Hoogteverschillen Beperken</H2>
            <div className="mt-space-sm prose prose-lg max-w-none mb-space-md">
              <p>
                Lippage is het zichtbare of voelbare hoogteverschil tussen de randen van aangrenzende tegels. Het ontstaat door een onvoldoende vlakke ondergrond, toleranties van de tegel, en het gekozen legpatroon.
              </p>
              <p>
                Levelingsystemen kunnen helpen, maar ze vervangen geen geschikte ondergrond of correcte voorbereiding. Grootformaat tegels vragen extra aandacht qua vlakheid.
              </p>
            </div>
            <MediaSlot mediaId="KB-LIPPAGE" className="w-full aspect-[4/3] md:aspect-[16/9] object-cover" />
          </article>

          {/* Article 3 */}
          <article id="inspectieluik" className="border-t border-[#E5E5E5] pt-space-lg mb-space-xl">
            <H2>Het Onzichtbare, Betegelde Inspectieluik</H2>
            <div className="mt-space-sm prose prose-lg max-w-none mb-space-md">
              <p>
                Inbouwreservoirs, afsluiters en andere technische onderdelen hebben soms onderhoud nodig. Een betegeld inspectieluik kan de toegang behouden terwijl de zichtzijde aansluit bij het omliggende tegelwerk.
              </p>
              <p>
                Voeglijnen, maatvoering, en de constructie moeten perfect op elkaar aansluiten voor een onzichtbaar resultaat.
              </p>
            </div>
            <MediaSlot mediaId="KB-INSPECTIELUIK" className="w-full aspect-[4/3] md:aspect-[16/9] object-cover" />
          </article>

          {/* Article 4 */}
          <article id="epoxy-vs-cement" className="border-t border-[#E5E5E5] pt-space-lg mb-space-xl">
            <H2>Epoxyvoeg vs. Cementvoeg</H2>
            <div className="mt-space-sm prose prose-lg max-w-none mb-space-md">
              <p>
                Cementgebonden voegmortel is een veelgebruikte oplossing voor tegelwerk. Epoxyvoeg is gebaseerd op hars en heeft specifieke eigenschappen en verwerking, interessant waar eisen aan reiniging of vochtbestendigheid hoog zijn.
              </p>
              <p>
                Is epoxy altijd beter? Nee. De keuze hangt af van ruimte, type tegel, gewenste voegbreedte en onderhoud.
              </p>
            </div>
            <MediaSlot mediaId="KB-EPOXY-CEMENT" className="w-full aspect-[4/3] md:aspect-[16/9] object-cover" />
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
