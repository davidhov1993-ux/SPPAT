import { H1, H2 } from "@/components/Typography";
import { MediaSlot } from "@/components/MediaSlot";
import { CtaMonument } from "@/components/CtaComponents";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gerealiseerde Projecten | Badkamers & Tegelwerk | SPPAT",
  description: "Bekijk een selectie van gerealiseerde SPPAT-projecten: badkamers, tegelvloeren en details van uitgevoerd tegelwerk.",
  alternates: { canonical: "https://www.sppat.nl/projecten" },
};

export default function ProjectenPage() {
  return (
    <main className="w-full overflow-hidden">
      {/* Hub Intro */}
      <section className="px-5 md:px-10 pt-space-xl pb-space-lg border-b border-[#E5E5E5] grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-start-2 md:col-span-9">
          <H1>Gerealiseerde Projecten</H1>
          <p className="mt-space-sm max-w-prose text-lg">
            Hier laten we het werk spreken. De portfolio toont zes afzonderlijke, geverifieerde SPPAT-projectgroepen. Foto&apos;s die niet aantoonbaar tot één projectserie behoren, mogen daarnaast als losse werkbeelden worden getoond zonder er een fictieve case van te maken.
          </p>
        </div>
      </section>

      {/* PROJECT 01 - Archetype Beta: 2 or 3 vertical 4:5 images staggered. Text anchored to lowest. */}
      <section className="py-space-xl px-5 md:px-10 border-b border-[#E5E5E5]">
        <H2 className="mb-space-md">Project 01</H2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          <div className="col-span-1 md:col-span-4 flex flex-col">
            <MediaSlot mediaId="PROJ-01-A" className="w-full aspect-[4/5] object-cover" />
            <p className="mt-space-sm text-sm text-[#1A1A1A] max-w-sm hidden md:block">
              Een selectie beelden van één gerealiseerd SPPAT-project. Bekijk het geheel en de details van de zichtbare afwerking.
            </p>
          </div>
          <div className="col-span-1 md:col-span-4 md:mb-space-lg">
            <MediaSlot mediaId="PROJ-01-B" className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="col-span-1 md:col-span-4 mt-space-sm md:mt-0">
             <MediaSlot mediaId="PROJ-01-C" className="w-full aspect-[4/5] object-cover" />
             <p className="mt-space-sm text-sm text-[#1A1A1A] md:hidden">
              Een selectie beelden van één gerealiseerd SPPAT-project. Bekijk het geheel en de details van de zichtbare afwerking.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT 02 - Archetype Delta: 1 massive portrait image with typography running alongside. */}
      <section className="py-space-xl px-5 md:px-10 border-b border-[#E5E5E5]">
        <H2 className="mb-space-md">Project 02</H2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-1 md:col-span-7">
            <MediaSlot mediaId="PROJ-02-A" className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="col-span-1 md:col-span-4 md:col-start-9 flex flex-col justify-start mt-space-md md:mt-0 pt-space-md md:border-t border-[#E5E5E5]">
            <p className="text-base text-[#1A1A1A]">
              Een selectie beelden van één gerealiseerd SPPAT-project, met aandacht voor het totale vlak en zichtbare detaillering.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT 03 - Archetype Alpha: 1 dominant 16:9 + 1 inset 1:1 detail bottom-right. Mobile horizontal scroll for details. */}
      <section className="py-space-xl px-5 md:px-10 border-b border-[#E5E5E5]">
        <H2 className="mb-space-md">Project 03</H2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 relative">
          <div className="col-span-1 md:col-span-10 relative">
            <MediaSlot mediaId="PROJ-03-A" className="w-full aspect-[4/5] md:aspect-[16/9] object-cover" />
            <p className="mt-space-sm text-sm text-[#1A1A1A]">
              Een afzonderlijke serie uit het gerealiseerde werk van SPPAT.
            </p>
          </div>
          
          <div className="col-span-1 md:col-span-4 md:absolute md:bottom-0 md:right-0 md:transform md:-translate-y-12 md:translate-x-6 z-10 hidden md:block">
            <MediaSlot mediaId="PROJ-03-B" className="w-full aspect-square object-cover shadow-2xl" />
          </div>
        </div>
        
        {/* Mobile scroll snap for secondary images */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 mt-space-md md:mt-32 md:grid md:grid-cols-12 pr-5 md:pr-0 pb-4 md:pb-0 hide-scrollbar">
          <div className="snap-center min-w-[80vw] md:min-w-0 md:col-span-4 md:hidden">
            <MediaSlot mediaId="PROJ-03-B" className="w-full aspect-square object-cover" />
          </div>
          <div className="snap-center min-w-[80vw] md:min-w-0 md:col-span-4 md:col-start-2">
            <MediaSlot mediaId="PROJ-03-C" className="w-full aspect-[4/5] object-cover" />
          </div>
        </div>
      </section>

      {/* PROJECT 04 - Archetype Gamma (Wait, we only have PROJ-04-A right now. So Delta or Beta variant is safer, we use a clean portrait display) */}
      <section className="py-space-xl px-5 md:px-10 border-b border-[#E5E5E5]">
        <H2 className="mb-space-md">Project 04</H2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-1 md:col-span-7">
            <MediaSlot mediaId="PROJ-04-A" className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="col-span-1 md:col-span-4 md:col-start-9 flex flex-col justify-start mt-space-md md:mt-0 pt-space-md md:border-t border-[#E5E5E5]">
            <p className="text-base text-[#1A1A1A]">
              Een compacte projectserie uit het gerealiseerde werk van SPPAT.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT 05 - Archetype Delta (1 image) */}
      <section className="py-space-xl px-5 md:px-10 border-b border-[#E5E5E5]">
        <H2 className="mb-space-md">Project 05</H2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-1 md:col-span-7 md:col-start-6 order-last md:order-first">
            <MediaSlot mediaId="PROJ-05-A" className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="col-span-1 md:col-span-4 md:col-start-2 flex flex-col justify-start mt-space-md md:mt-0 pt-space-md md:border-t border-[#E5E5E5] order-first md:order-last">
            <p className="text-base text-[#1A1A1A]">
              Een compacte projectserie uit het gerealiseerde werk van SPPAT.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT 06 - Archetype Alpha variant */}
      <section className="py-space-xl px-5 md:px-10 border-b border-[#E5E5E5]">
        <H2 className="mb-space-md">Project 06</H2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 relative">
          <div className="col-span-1 md:col-span-10 relative">
            <MediaSlot mediaId="PROJ-06-A" className="w-full aspect-[4/5] md:aspect-[16/9] object-cover" />
            <p className="mt-space-sm text-sm text-[#1A1A1A]">
              Een compacte projectserie uit het gerealiseerde werk van SPPAT.
            </p>
          </div>
          
          <div className="col-span-1 md:col-span-4 md:absolute md:bottom-0 md:right-0 md:transform md:translate-y-8 md:translate-x-4 z-10 hidden md:block">
            <MediaSlot mediaId="PROJ-06-B" className="w-full aspect-square object-cover shadow-2xl border border-white" />
          </div>
        </div>
        
        {/* Mobile scroll snap */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 mt-space-md md:hidden pr-5 pb-4 hide-scrollbar">
          <div className="snap-center min-w-[80vw]">
            <MediaSlot mediaId="PROJ-06-B" className="w-full aspect-square object-cover" />
          </div>
        </div>
      </section>

      {/* Meer werk en details */}
      <section className="py-space-xl px-5 md:px-10">
        <H2 className="mb-space-md">Meer werk en details</H2>
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-1 md:col-span-8">
            <p className="text-base text-[#1A1A1A]">
              Losse geverifieerde SPPAT-foto&apos;s mogen in één aanvullende beeldsectie worden opgenomen. Deze worden niet als afzonderlijk &quot;project&quot; benoemd wanneer de projectcontext ontbreekt.
            </p>
            <p className="text-base text-[#1A1A1A] mt-space-sm font-bold">
              Een vergelijkbaar niveau voor uw project?
            </p>
            <p className="text-base text-[#1A1A1A]">
              Vertel ons wat u wilt realiseren en stuur eventueel referentiebeelden mee.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaMonument title="PROJECT BESPREKEN" link="/contact/" />
    </main>
  );
}
