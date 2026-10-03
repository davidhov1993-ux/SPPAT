import { H1, H2 } from "@/components/Typography";
import { MediaSlot } from "@/components/MediaSlot";
import { CtaMonument } from "@/components/CtaComponents";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gerealiseerde Projecten | Badkamers & Tegelwerk | SPPAT",
  description: "Bekijk een selectie van gerealiseerde SPPAT-projecten: badkamers, tegelvloeren en details van uitgevoerd tegelwerk.",
  alternates: { canonical: "https://www.sppat.nl/projecten/" },
};

export default function Projecten() {
  return (
    <main data-page="projecten" className="w-full">
      {/* Intro */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-x-6 px-5 md:px-10 pt-space-xl pb-space-md mb-space-xl border-b border-blueprint">
        <div className="col-span-1 md:col-span-8 md:col-start-3">
          <H1>Gerealiseerde Projecten</H1>
          <p className="mt-space-sm font-inter text-[#1A1A1A] text-lg">
            Hier laten we het werk spreken. De portfolio toont vijf afzonderlijke, geverifieerde SPPAT-projectgroepen. Foto&apos;s die niet aantoonbaar tot één projectserie behoren, mogen daarnaast als losse werkbeelden worden getoond zonder er een fictieve case van te maken.
          </p>
        </div>
      </section>

      {/* Project 01: Archetype Beta (Portrait sequence) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-x-6 px-5 md:px-10 mb-space-xl" id="project-01">
        <div className="col-span-1 md:col-span-12 mb-space-md flex items-center justify-between border-b border-[#E5E5E5] pb-4">
          <H2>Project 01</H2>
          <span className="font-space text-sm tracking-widest text-[#666666]">01 / 05</span>
        </div>
        <div className="col-span-1 md:col-span-12 mb-4"><p className="font-inter text-[#1A1A1A]">Een selectie beelden van één gerealiseerd SPPAT-project. Bekijk het geheel en de details van de zichtbare afwerking.</p></div>
        <div className="col-span-1 md:col-span-12 project-beta grid grid-cols-1 md:grid-cols-3 gap-6">
          <MediaSlot mediaId="P01-1" className="w-full aspect-[4/5] object-cover" />
          <MediaSlot mediaId="P01-2" className="w-full aspect-[4/5] object-cover" />
          <MediaSlot mediaId="P01-3" className="w-full aspect-[4/5] object-cover" />
        </div>
      </section>

      {/* Project 02: 3 primary + 2 secondary */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-x-6 px-5 md:px-10 mb-space-xl" id="project-02">
        <div className="col-span-1 md:col-span-12 mb-space-md flex items-center justify-between border-b border-[#E5E5E5] pb-4">
          <H2>Project 02</H2>
          <span className="font-space text-sm tracking-widest text-[#666666]">02 / 05</span>
        </div>
        <div className="col-span-1 md:col-span-12 mb-4"><p className="font-inter text-[#1A1A1A]">Een selectie beelden van één gerealiseerd SPPAT-project, met aandacht voor het totale vlak en zichtbare detaillering.</p></div>
        <div className="col-span-1 md:col-span-12 project-beta grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          <MediaSlot mediaId="P02-1" className="w-full aspect-[4/5] md:aspect-square object-cover" />
          <MediaSlot mediaId="P02-2" className="w-full aspect-[4/5] md:aspect-square object-cover" />
          <MediaSlot mediaId="P02-3" className="w-full aspect-[4/5] md:aspect-square object-cover" />
        </div>
        <div className="col-span-1 md:col-span-8 md:col-start-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <MediaSlot mediaId="P02-4" className="w-full aspect-[4/5] object-cover" />
          <MediaSlot mediaId="P02-5" className="w-full aspect-[4/5] object-cover" />
        </div>
      </section>

      {/* Project 03: Alpha (Dominant + inset) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-x-6 px-5 md:px-10 mb-space-xl" id="project-03">
        <div className="col-span-1 md:col-span-12 mb-space-md flex items-center justify-between border-b border-[#E5E5E5] pb-4">
          <H2>Project 03</H2>
          <span className="font-space text-sm tracking-widest text-[#666666]">03 / 05</span>
        </div>
        <div className="col-span-1 md:col-span-12 mb-4"><p className="font-inter text-[#1A1A1A]">Een afzonderlijke serie uit het gerealiseerde werk van SPPAT.</p></div>
        <div className="col-span-1 md:col-span-9 relative mb-4 md:mb-0">
          <MediaSlot mediaId="P03-DOM" className="w-full aspect-[4/3] md:aspect-[16/9] object-cover" />
        </div>
        <div className="col-span-1 md:col-span-3 project-secondary">
          <MediaSlot mediaId="P03-INS" className="w-full aspect-[4/5] object-cover" />
          <MediaSlot mediaId="P03-EVI" className="w-full aspect-[4/5] object-cover" />
        </div>
      </section>

      {/* Project 04: Dominant + rail */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-x-6 px-5 md:px-10 mb-space-xl" id="project-04">
        <div className="col-span-1 md:col-span-12 mb-space-md flex items-center justify-between border-b border-[#E5E5E5] pb-4">
          <H2>Project 04</H2>
          <span className="font-space text-sm tracking-widest text-[#666666]">04 / 05</span>
        </div>
        <div className="col-span-1 md:col-span-12 mb-4"><p className="font-inter text-[#1A1A1A]">Een compacte projectserie uit het gerealiseerde werk van SPPAT.</p></div>
        <div className="col-span-1 md:col-span-12 mb-4">
          <MediaSlot mediaId="P04-CONT" className="w-full aspect-[4/3] md:aspect-[21/9] object-cover" />
        </div>
        <div className="project-rail col-span-1 md:col-span-12 flex overflow-x-auto snap-x snap-mandatory gap-4 hide-scrollbar pb-4 -mx-5 px-5 md:mx-0 md:px-0">
          <div className="flex-none w-[70vw] md:w-1/4 snap-center"><MediaSlot mediaId="P04-DETA" className="w-full aspect-[3/4] object-cover" /></div>
          <div className="flex-none w-[70vw] md:w-1/4 snap-center"><MediaSlot mediaId="P04-DETB" className="w-full aspect-[3/4] object-cover" /></div>
          <div className="flex-none w-[70vw] md:w-1/4 snap-center"><MediaSlot mediaId="P04-E1" className="w-full aspect-[3/4] object-cover" /></div>
          <div className="flex-none w-[70vw] md:w-1/4 snap-center"><MediaSlot mediaId="P04-E2" className="w-full aspect-[3/4] object-cover" /></div>
          <div className="flex-none w-[70vw] md:w-1/4 snap-center"><MediaSlot mediaId="P04-E3" className="w-full aspect-[3/4] object-cover" /></div>
          <div className="flex-none w-[70vw] md:w-1/4 snap-center"><MediaSlot mediaId="P04-E4" className="w-full aspect-[3/4] object-cover" /></div>
          <div className="flex-none w-[70vw] md:w-1/4 snap-center"><MediaSlot mediaId="P04-E5" className="w-full aspect-[3/4] object-cover" /></div>
        </div>
      </section>

      {/* Project 05: Landscape dominant + portrait supports + second context */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-x-6 px-5 md:px-10 mb-space-xl" id="project-05">
        <div className="col-span-1 md:col-span-12 mb-space-md flex items-center justify-between border-b border-[#E5E5E5] pb-4">
          <H2>Project 05</H2>
          <span className="font-space text-sm tracking-widest text-[#666666]">05 / 05</span>
        </div>
        <div className="col-span-1 md:col-span-12 mb-4"><p className="font-inter text-[#1A1A1A]">Een compacte projectserie uit het gerealiseerde werk van SPPAT.</p></div>
        <div className="col-span-1 md:col-span-8 mb-4 md:mb-0">
          <MediaSlot mediaId="P05-DOM" className="w-full aspect-[4/3] md:aspect-[3/2] object-cover" />
        </div>
        <div className="col-span-1 md:col-span-4 project-secondary">
          <MediaSlot mediaId="P05-INS" className="w-full aspect-[3/4] md:aspect-[4/5] object-cover" />
          <MediaSlot mediaId="P05-E1" className="w-full aspect-[3/4] md:aspect-[4/5] object-cover" />
        </div>
        <div className="col-span-1 md:col-span-12 mt-4">
          <MediaSlot mediaId="P05-E2" className="w-full aspect-[16/9] object-cover" />
        </div>
      </section>

      {/* Meer werk en details */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-x-6 px-5 md:px-10 mb-space-xl pt-space-lg border-t border-[#1A1A1A]">
        <div className="col-span-1 md:col-span-8 md:col-start-3 text-center mb-space-lg">
          <H2>Meer werk en details</H2>
        </div>
        
        {/* Editorial loose gallery */}
        <div className="col-span-1 md:col-span-12 columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          <MediaSlot mediaId="MW-01" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="MW-02" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="MW-03" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="MW-04" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="MW-05" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="MW-06" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="MW-07" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="MW-08" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="MW-09" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="MW-10" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="MW-11" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="MW-12" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="MW-13" className="w-full h-auto object-cover break-inside-avoid" />
        </div>
      </section>


      {/* Final CTA */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-6 mb-space-xl px-5 md:px-10 max-w-full mx-auto w-full border-t border-[#E5E5E5] pt-space-xl text-center">
        <div className="col-span-1 md:col-span-8 md:col-start-3">
          <H2>Een vergelijkbaar niveau voor uw project?</H2>
          <p className="mt-space-sm font-inter text-[#1A1A1A] mb-8">
            Vertel ons wat u wilt realiseren en stuur eventueel referentiebeelden mee.
          </p>
          <CtaMonument title="Project bespreken" link="/contact/" />
        </div>
      </section>
    </main>
  );
}
