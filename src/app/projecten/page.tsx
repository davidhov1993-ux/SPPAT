import { H1, H2 } from "@/components/Typography";
import { MediaSlot } from "@/components/MediaSlot";
import { CtaMonument } from "@/components/CtaComponents";
import { Metadata } from "next";
import { mediaMapping } from "@/config/mediaData";

export const metadata: Metadata = {
  title: "Gerealiseerde Projecten | SPPAT",
  description: "Bekijk gerealiseerde SPPAT projecten. Van complete badkamerrenovaties tot grootformaat tegelvloeren en strak maatwerk.",
  alternates: { canonical: "https://www.sppat.nl/projecten/" },
};

export default function Projecten() {
  const showProject06 = process.env.NODE_ENV === 'development' || mediaMapping["PROJECT-06-TEMP-01"]?.status === "approved";

  return (
    <main className="grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl">
      {/* Intro */}
      <section className="col-span-1 md:col-span-12 px-5 md:px-0 mt-space-xl mb-space-xl text-center">
        <H1>Gerealiseerde Projecten</H1>
        <p className="mt-space-sm font-inter text-[#1A1A1A] max-w-2xl mx-auto">
          De portfolio toont afzonderlijke, geverifieerde SPPAT-projectgroepen.
        </p>
      </section>

      {/* PROJECT 01 - Archetype Beta (3 images) */}
      <section className="col-span-1 md:col-span-12 py-space-xl px-5 md:px-0 border-b border-[#E5E5E5] w-full">
        <H2 className="mb-space-md">Project 01</H2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end w-full">
          <div className="col-span-1 md:col-span-4 flex flex-col w-full">
            <MediaSlot mediaId="PROJECT-01-01" className="w-full aspect-[4/5] object-cover" />
            <p className="mt-space-sm text-sm text-[#1A1A1A] max-w-sm hidden md:block">
              Een selectie beelden van één gerealiseerd SPPAT-project. Bekijk het geheel en de details van de zichtbare afwerking.
            </p>
          </div>
          <div className="col-span-1 md:col-span-4 md:mb-space-lg w-full">
            <MediaSlot mediaId="PROJECT-01-02" className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="col-span-1 md:col-span-4 mt-space-sm md:mt-0 w-full">
             <MediaSlot mediaId="PROJECT-01-03" className="w-full aspect-[4/5] object-cover" />
             <p className="mt-space-sm text-sm text-[#1A1A1A] md:hidden">
              Een selectie beelden van één gerealiseerd SPPAT-project. Bekijk het geheel en de details van de zichtbare afwerking.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT 02 - Archetype: Dominant + 4 supporting strip */}
      <section className="col-span-1 md:col-span-12 py-space-xl px-5 md:px-0 border-b border-[#E5E5E5] w-full">
        <H2 className="mb-space-md">Project 02</H2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
          <div className="col-span-1 md:col-span-7 w-full">
            <MediaSlot mediaId="PROJECT-02-01" className="w-full aspect-[4/5] md:aspect-[3/4] object-cover" />
            <p className="mt-space-sm text-base text-[#1A1A1A] max-w-lg hidden md:block">
              Een selectie beelden van één gerealiseerd SPPAT-project, met aandacht voor het totale vlak en zichtbare detaillering.
            </p>
          </div>
          <div className="col-span-1 md:col-span-5 flex flex-row overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 gap-4 w-[100vw] -mx-5 px-5 md:w-auto md:mx-0 md:px-0 pb-4 md:pb-0">
            <div className="flex-none w-[75vw] md:w-auto snap-center"><MediaSlot mediaId="PROJECT-02-02" className="w-full aspect-[4/5] object-cover" /></div>
            <div className="flex-none w-[75vw] md:w-auto snap-center"><MediaSlot mediaId="PROJECT-02-03" className="w-full aspect-[4/5] object-cover" /></div>
            <div className="flex-none w-[75vw] md:w-auto snap-center"><MediaSlot mediaId="PROJECT-02-04" className="w-full aspect-[4/5] object-cover" /></div>
            <div className="flex-none w-[75vw] md:w-auto snap-center"><MediaSlot mediaId="PROJECT-02-05" className="w-full aspect-[4/5] object-cover" /></div>
          </div>
          <p className="mt-space-sm text-base text-[#1A1A1A] md:hidden col-span-1">
            Een selectie beelden van één gerealiseerd SPPAT-project, met aandacht voor het totale vlak en zichtbare detaillering.
          </p>
        </div>
      </section>

      {/* PROJECT 03 - Archetype Alpha */}
      <section className="col-span-1 md:col-span-12 py-space-xl px-5 md:px-0 border-b border-[#E5E5E5] w-full">
        <H2 className="mb-space-md">Project 03</H2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 relative w-full">
          <div className="col-span-1 md:col-span-10 relative w-full">
            <MediaSlot mediaId="PROJECT-03-01" className="w-full aspect-[4/5] md:aspect-[16/9] object-cover" />
            <p className="mt-space-sm text-sm text-[#1A1A1A]">
              Een afzonderlijke serie uit het gerealiseerde werk van SPPAT.
            </p>
          </div>
          
          <div className="col-span-1 md:col-span-4 md:absolute md:bottom-0 md:right-0 md:transform md:-translate-y-12 md:-translate-x-4 z-10 hidden md:block">
            <MediaSlot mediaId="PROJECT-03-02" className="w-full aspect-square object-cover shadow-2xl" />
          </div>
        </div>
        
        {/* Mobile scroll snap for secondary images */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 mt-space-md md:mt-32 md:grid md:grid-cols-12 w-[100vw] -mx-5 px-5 md:w-auto md:mx-0 md:px-0 pb-4 md:pb-0 hide-scrollbar">
          <div className="snap-center min-w-[80vw] md:min-w-0 md:col-span-4 md:hidden">
            <MediaSlot mediaId="PROJECT-03-02" className="w-full aspect-square object-cover" />
          </div>
          <div className="snap-center min-w-[80vw] md:min-w-0 md:col-span-4 md:col-start-2">
            <MediaSlot mediaId="PROJECT-03-03" className="w-full aspect-[4/5] object-cover" />
          </div>
        </div>
      </section>

      {/* PROJECT 04 - 1 dominant + 5 supporting */}
      <section className="col-span-1 md:col-span-12 py-space-xl px-5 md:px-0 border-b border-[#E5E5E5] w-full">
        <H2 className="mb-space-md">Project 04</H2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
          <div className="col-span-1 md:col-span-8 w-full mb-space-md md:mb-0">
            <MediaSlot mediaId="PROJECT-04-01" className="w-full aspect-[4/3] md:aspect-[16/9] object-cover" />
            <p className="mt-space-sm text-base text-[#1A1A1A] max-w-lg hidden md:block">
              Uitgebreide projectserie met vloer- en interieurwerk.
            </p>
          </div>
          <div className="col-span-1 md:col-span-4 md:row-span-2 flex flex-row overflow-x-auto snap-x snap-mandatory hide-scrollbar md:flex-col gap-4 w-[100vw] -mx-5 px-5 md:w-auto md:mx-0 md:px-0 pb-4 md:pb-0 h-full">
            <div className="flex-none w-[70vw] md:w-full snap-center"><MediaSlot mediaId="PROJECT-04-02" className="w-full aspect-[4/5] object-cover" /></div>
            <div className="flex-none w-[70vw] md:w-full snap-center"><MediaSlot mediaId="PROJECT-04-03" className="w-full aspect-[4/5] object-cover" /></div>
            <div className="flex-none w-[70vw] md:w-full snap-center"><MediaSlot mediaId="PROJECT-04-04" className="w-full aspect-[4/5] object-cover" /></div>
          </div>
          <div className="col-span-1 md:col-span-8 grid grid-cols-2 gap-4">
            <MediaSlot mediaId="PROJECT-04-05" className="w-full aspect-[4/5] object-cover" />
            <MediaSlot mediaId="PROJECT-04-06" className="w-full aspect-[4/5] object-cover" />
          </div>
        </div>
      </section>

      {/* PROJECT 05 - 1 dominant + 3 supporting */}
      <section className="col-span-1 md:col-span-12 py-space-xl px-5 md:px-0 border-b border-[#E5E5E5] w-full">
        <H2 className="mb-space-md">Project 05</H2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
          <div className="col-span-1 md:col-span-7 w-full order-last md:order-first">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <MediaSlot mediaId="PROJECT-05-02" className="w-full aspect-[4/5] object-cover hidden md:block" />
              <MediaSlot mediaId="PROJECT-05-03" className="w-full aspect-[4/5] object-cover hidden md:block" />
            </div>
            <MediaSlot mediaId="PROJECT-05-04" className="w-full aspect-[16/9] object-cover hidden md:block" />
          </div>
          <div className="col-span-1 md:col-span-5 flex flex-col justify-start order-first md:order-last w-full mb-space-md md:mb-0">
            <MediaSlot mediaId="PROJECT-05-01" className="w-full aspect-[3/4] object-cover" />
            <p className="mt-space-sm text-base text-[#1A1A1A]">
              Een projectserie uit het gerealiseerde werk van SPPAT.
            </p>
          </div>
          
          <div className="col-span-1 flex overflow-x-auto snap-x snap-mandatory gap-4 mt-space-md md:hidden w-[100vw] -mx-5 px-5 pb-4 hide-scrollbar order-last">
             <div className="flex-none w-[75vw] snap-center"><MediaSlot mediaId="PROJECT-05-02" className="w-full aspect-[4/5] object-cover" /></div>
             <div className="flex-none w-[75vw] snap-center"><MediaSlot mediaId="PROJECT-05-03" className="w-full aspect-[4/5] object-cover" /></div>
             <div className="flex-none w-[75vw] snap-center"><MediaSlot mediaId="PROJECT-05-04" className="w-full aspect-[4/5] object-cover" /></div>
          </div>
        </div>
      </section>

      {/* PROJECT 06 */}
      {showProject06 && (
        <section className="col-span-1 md:col-span-12 py-space-xl px-5 md:px-0 border-b border-[#E5E5E5] w-full">
          <H2 className="mb-space-md">Project 06</H2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 relative w-full">
            <div className="col-span-1 md:col-span-10 relative w-full">
              <MediaSlot mediaId="PROJECT-06-TEMP-01" className="w-full aspect-[4/5] md:aspect-[16/9] object-cover" />
              <p className="mt-space-sm text-sm text-[#1A1A1A]">
                Een compacte projectserie uit het gerealiseerde werk van SPPAT.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="col-span-1 md:col-span-12 w-full mt-space-xl">
        <CtaMonument title="PROJECT BESPREKEN" link="/contact/" />
      </section>
    </main>
  );
}
