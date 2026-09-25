import { H1, H2, H3 } from "@/components/Typography";
import { MediaSlot } from "@/components/MediaSlot";
import { CtaMonument } from "@/components/CtaComponents";
import { BlueprintLine } from "@/components/BlueprintLine";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specialisaties & Materialen | SPPAT",
  description: "SPPAT is gespecialiseerd in het zetten van grootformaat tegels, precisie mozaïek, natuursteen en keramisch parket.",
  alternates: { canonical: "https://www.sppat.nl/specialisaties/" },
};

export default function Specialisaties() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-12 gap-x-4">
      {/* Intro - Typography Only */}
      <section className="col-span-1 md:col-span-12 px-5 md:px-0 mt-space-xl mb-space-xl text-center flex flex-col items-center">
        <span className="block text-sm uppercase tracking-widest mb-space-xs font-space text-[#1A1A1A]">Specialisaties</span>
        <H1 className="max-w-4xl mx-auto">Veeleisende Materialen Vragen om Specifieke Techniek</H1>
        <p className="mt-space-sm font-inter text-[#1A1A1A] max-w-2xl mx-auto">
          Niet elke tegel kan met dezelfde lijm en methode worden verwerkt. SPPAT heeft ruime ervaring met specifieke materialen die extra eisen stellen aan ondergrond, handling en afwerking.
        </p>
      </section>

      {/* XXL */}
      <section className="col-span-1 md:col-span-12 relative w-full mb-space-xl" id="grootformaat">
        <div className="w-full relative px-0">
          <MediaSlot mediaId="SPEC-02" className="w-full aspect-[4/5] md:aspect-[16/9] object-cover" bleedMobile={true} />
        </div>
        <div className="absolute bottom-0 left-0 md:bottom-[-2rem] md:left-8 bg-white p-space-md md:p-space-lg max-w-2xl border-t border-r border-[#E5E5E5] z-10">
          <H2>Grootformaat Tegels (XXL)</H2>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Tegels van 80x80cm, 120x120cm of zelfs kamerhoge platen geven een ruimtelijk effect doordat er minimale voegen zijn.
          </p>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            De verwerking hiervan vereist echter precisie: de ondergrond moet extreem vlak zijn om breuk en lippage te voorkomen. Er is speciale dubbele verlijming (buttering-floating) nodig voor 100% lijmdekking, en gereedschap op maat voor veilig transport en snijden.
          </p>
        </div>
      </section>

      {/* Mozaïek */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0" id="mozaiek">
        <div className="col-span-1 md:col-span-5 md:col-start-2 mb-space-md md:mb-0">
          <MediaSlot mediaId="SPEC-03" className="w-full aspect-[1/1] md:aspect-[4/5] object-cover" />
        </div>
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center">
          <H2>Mozaïek</H2>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Mozaïek (glas, keramiek of natuursteen) wordt vaak toegepast als accent, bijvoorbeeld in nissen of douchevloeren. Omdat de matjes flexibel zijn, volgen ze elke oneffenheid in de muur of vloer.
          </p>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Het geheim van strak mozaïekwerk is de voorbereiding: de ondergrond moet spiegelglad zijn. Daarnaast wordt voor glasmozaïek vaak witte lijm of een lijm-en-voeg-in-één (epoxy) gebruikt om kleurverschillen en schaduwen te voorkomen.
          </p>
        </div>
      </section>

      {/* Natuursteen */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0" id="natuursteen">
        <div className="col-span-1 md:col-span-8 md:col-start-3 mb-space-md">
          <H2>Natuursteen</H2>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Marmer, travertin, leisteen of hardsteen brengen een uniek karakter. Natuursteen leeft en heeft specifieke eigenschappen qua poreusheid en hardheid.
          </p>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Bij de verwerking is het cruciaal om vlekgevoeligheid te voorkomen. Dat betekent het gebruik van speciale natuursteenlijm en -kit (om &apos;randverkleuring&apos; tegen te gaan) en het eventueel impregneren van het oppervlak voor gebruik in natte ruimtes.
          </p>
        </div>
        
        {/* Diptych Desktop / Scroll Snap Mobile */}
        <div className="col-span-1 md:col-span-12 flex md:grid md:grid-cols-2 gap-4 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 w-[100vw] md:w-auto">
          <div className="flex-none w-[85vw] md:w-auto snap-center group">
            <MediaSlot mediaId="SPEC-04A" className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="flex-none w-[85vw] md:w-auto snap-center group">
            <MediaSlot mediaId="SPEC-04B" className="w-full aspect-[4/5] object-cover" />
          </div>
        </div>
      </section>

      {/* Keramisch Parket */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0" id="keramisch-parket">
        <div className="col-span-1 md:col-span-7 md:col-start-6 mb-space-md md:mb-0 order-first md:order-last">
           <MediaSlot mediaId="SPEC-05" className="w-full aspect-[4/3] md:aspect-[3/2] object-cover" />
        </div>
        <div className="col-span-1 md:col-span-5 md:col-start-1 flex flex-col justify-end order-last md:order-first pt-space-lg">
           <BlueprintLine className="mb-space-md" />
           <H2>Keramisch Parket</H2>
           <p className="mt-space-xs font-inter text-[#1A1A1A]">
             Tegels in houtlook combineren de uitstraling van hout met het gemak en de warmtegeleiding van keramiek. Omdat deze lange tegels tijdens het bakproces vaak een lichte bolling (kromming) krijgen, vereist het legpatroon aandacht.
           </p>
           <p className="mt-space-xs font-inter text-[#1A1A1A]">
             SPPAT adviseert vaak een onregelmatig wildverband (bijvoorbeeld maximaal 1/3e overlappend) en gebruikt waar nodig een levelling-systeem om de vloer toch perfect vlak te krijgen.
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
