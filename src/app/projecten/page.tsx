import { H1, H2 } from "@/components/Typography";
import { MediaSlot } from "@/components/MediaSlot";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gerealiseerde Projecten & Referenties | SPPAT",
  description: "Bekijk geverifieerde SPPAT-projecten, badkamers en tegelwerk. Echte praktijkvoorbeelden uit heel Nederland.",
  alternates: { canonical: "https://www.sppat.nl/projecten" },
};

export default function Projecten() {
  return (
    <main className="w-full">
      {/* Intro */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-x-4 px-5 md:px-0 pt-space-xl mb-space-xl">
        <div className="col-span-1 md:col-span-8 md:col-start-3">
          <H1>Uitgevoerd Werk</H1>
          <p className="mt-space-sm font-inter text-[#1A1A1A] text-lg">
            Hier laten we het werk spreken. De portfolio toont afzonderlijke, geverifieerde SPPAT-projectgroepen. Foto&apos;s die niet aantoonbaar tot één projectserie behoren, mogen daarnaast als losse werkbeelden worden getoond zonder er een fictieve case van te maken.
          </p>
          <p className="mt-space-xs font-inter text-[#666666] text-sm uppercase tracking-wider">
            Geen locaties, budgetten, data, materiaalmerken, projectduur of technische specificaties publiceren tenzij die later expliciet zijn bevestigd.
          </p>
        </div>
      </section>

      {/* Project 01: Archetype Beta (Portrait sequence) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-x-4 px-5 md:px-0 mb-space-xl" id="project-01">
        <div className="col-span-1 md:col-span-12 mb-space-md flex items-center justify-between border-b border-[#E5E5E5] pb-4">
          <H2>Project 01</H2>
          <span className="font-space text-sm tracking-widest text-[#666666]">01 / 05</span>
        </div>
        <div className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <MediaSlot mediaId="P01-01" className="w-full aspect-[4/5] object-cover" />
          <MediaSlot mediaId="P01-02" className="w-full aspect-[4/5] object-cover" />
          <MediaSlot mediaId="P01-03" className="w-full aspect-[4/5] object-cover" />
        </div>
      </section>

      {/* Project 02: 3 primary + 2 secondary */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-x-4 px-5 md:px-0 mb-space-xl" id="project-02">
        <div className="col-span-1 md:col-span-12 mb-space-md flex items-center justify-between border-b border-[#E5E5E5] pb-4">
          <H2>Project 02</H2>
          <span className="font-space text-sm tracking-widest text-[#666666]">02 / 05</span>
        </div>
        <div className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <MediaSlot mediaId="P02-01" className="w-full aspect-[4/5] md:aspect-square object-cover" />
          <MediaSlot mediaId="P02-02" className="w-full aspect-[4/5] md:aspect-square object-cover" />
          <MediaSlot mediaId="P02-03" className="w-full aspect-[4/5] md:aspect-square object-cover" />
        </div>
        <div className="col-span-1 md:col-span-8 md:col-start-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <MediaSlot mediaId="P02-04" className="w-full aspect-[4/5] object-cover" />
          <MediaSlot mediaId="P02-05" className="w-full aspect-[4/5] object-cover" />
        </div>
      </section>

      {/* Project 03: Alpha (Dominant + inset) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-x-4 px-5 md:px-0 mb-space-xl" id="project-03">
        <div className="col-span-1 md:col-span-12 mb-space-md flex items-center justify-between border-b border-[#E5E5E5] pb-4">
          <H2>Project 03</H2>
          <span className="font-space text-sm tracking-widest text-[#666666]">03 / 05</span>
        </div>
        <div className="col-span-1 md:col-span-9 relative mb-4 md:mb-0">
          <MediaSlot mediaId="P03-01" className="w-full aspect-[4/3] md:aspect-[16/9] object-cover" />
        </div>
        <div className="col-span-1 md:col-span-3 flex flex-col justify-end gap-4">
          <MediaSlot mediaId="P03-02" className="w-full aspect-[4/5] object-cover" />
          <MediaSlot mediaId="P03-03" className="w-full aspect-[4/5] object-cover" />
        </div>
      </section>

      {/* Project 04: Dominant + rail */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-x-4 px-5 md:px-0 mb-space-xl" id="project-04">
        <div className="col-span-1 md:col-span-12 mb-space-md flex items-center justify-between border-b border-[#E5E5E5] pb-4">
          <H2>Project 04</H2>
          <span className="font-space text-sm tracking-widest text-[#666666]">04 / 05</span>
        </div>
        <div className="col-span-1 md:col-span-12 mb-4">
          <MediaSlot mediaId="P04-01" className="w-full aspect-[4/3] md:aspect-[21/9] object-cover" />
        </div>
        <div className="col-span-1 md:col-span-12 flex overflow-x-auto snap-x snap-mandatory gap-4 hide-scrollbar pb-4 -mx-5 px-5 md:mx-0 md:px-0">
          <div className="flex-none w-[70vw] md:w-1/4 snap-center"><MediaSlot mediaId="P04-02" className="w-full aspect-[3/4] object-cover" /></div>
          <div className="flex-none w-[70vw] md:w-1/4 snap-center"><MediaSlot mediaId="P04-03" className="w-full aspect-[3/4] object-cover" /></div>
          <div className="flex-none w-[70vw] md:w-1/4 snap-center"><MediaSlot mediaId="P04-04" className="w-full aspect-[3/4] object-cover" /></div>
          <div className="flex-none w-[70vw] md:w-1/4 snap-center"><MediaSlot mediaId="P04-05" className="w-full aspect-[3/4] object-cover" /></div>
          <div className="flex-none w-[70vw] md:w-1/4 snap-center"><MediaSlot mediaId="P04-06" className="w-full aspect-[3/4] object-cover" /></div>
          <div className="flex-none w-[70vw] md:w-1/4 snap-center"><MediaSlot mediaId="P04-07" className="w-full aspect-[3/4] object-cover" /></div>
          <div className="flex-none w-[70vw] md:w-1/4 snap-center"><MediaSlot mediaId="P04-08" className="w-full aspect-[3/4] object-cover" /></div>
        </div>
      </section>

      {/* Project 05: Landscape dominant + portrait supports + second context */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-x-4 px-5 md:px-0 mb-space-xl" id="project-05">
        <div className="col-span-1 md:col-span-12 mb-space-md flex items-center justify-between border-b border-[#E5E5E5] pb-4">
          <H2>Project 05</H2>
          <span className="font-space text-sm tracking-widest text-[#666666]">05 / 05</span>
        </div>
        <div className="col-span-1 md:col-span-8 mb-4 md:mb-0">
          <MediaSlot mediaId="P05-01" className="w-full aspect-[4/3] md:aspect-[3/2] object-cover" />
        </div>
        <div className="col-span-1 md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4">
          <MediaSlot mediaId="P05-03" className="w-full aspect-[3/4] md:aspect-[4/5] object-cover" />
          <MediaSlot mediaId="P05-04" className="w-full aspect-[3/4] md:aspect-[4/5] object-cover" />
        </div>
        <div className="col-span-1 md:col-span-12 mt-4">
          <MediaSlot mediaId="P05-02" className="w-full aspect-[16/9] object-cover" />
        </div>
      </section>

      {/* Meer werk en details */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-x-4 px-5 md:px-0 mb-space-xl pt-space-lg border-t border-[#1A1A1A]">
        <div className="col-span-1 md:col-span-8 md:col-start-3 text-center mb-space-lg">
          <H2>Meer werk en details</H2>
          <p className="mt-space-sm font-inter text-[#1A1A1A] max-w-2xl mx-auto">
            Losse geverifieerde SPPAT-foto&apos;s mogen in één aanvullende beeldsectie worden opgenomen. Deze worden niet als afzonderlijk &quot;project&quot; benoemd wanneer de projectcontext ontbreekt.
          </p>
          <p className="mt-space-xs font-inter text-[#666666] text-sm uppercase tracking-wider">
            Illustratieve of stockbeelden horen niet in deze bewijssectie.
          </p>
        </div>
        
        {/* Editorial loose gallery */}
        <div className="col-span-1 md:col-span-12 columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          <MediaSlot mediaId="LOOSE-01" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="LOOSE-02" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="LOOSE-03" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="LOOSE-04" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="LOOSE-05" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="LOOSE-06" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="LOOSE-07" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="LOOSE-08" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="LOOSE-09" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="LOOSE-10" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="LOOSE-11" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="LOOSE-12" className="w-full h-auto object-cover break-inside-avoid" />
          <MediaSlot mediaId="LOOSE-13" className="w-full h-auto object-cover break-inside-avoid" />
        </div>
      </section>

    </main>
  );
}
