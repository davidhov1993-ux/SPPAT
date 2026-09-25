import { H1, H2 } from "@/components/Typography";
import { MediaSlot } from "@/components/MediaSlot";
import { BlueprintLine } from "@/components/BlueprintLine";;
import { CtaMonument } from "@/components/CtaComponents";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tegel Specialisaties | Grootformaat, Mozaïek & Natuursteen | SPPAT",
  description: "Specialistisch tegelwerk door SPPAT: grootformaat en XXL tegels, mozaïek, natuursteen en keramisch parket.",
  alternates: { canonical: "https://www.sppat.nl/specialisaties" },
};



export default function SpecialisatiesPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="grid grid-cols-4 md:grid-cols-12 gap-4 pt-space-xl pb-space-lg px-5 md:px-10">
        <div className="col-span-4 md:col-span-8">
          <H1>Specialisaties in Tegelwerk</H1>
          <p className="mt-space-sm text-lg max-w-prose">
            Niet ieder materiaal laat zich op dezelfde manier verwerken. Formaat, gewicht, oppervlak, patroon en natuurlijke eigenschappen kunnen invloed hebben op voorbereiding, handling, verdeling en afwerking. SPPAT voert ook tegelwerk uit waarbij juist die details centraal staan.
          </p>
        </div>
      </section>

      

      {/* Material Compositions */}
      <section className="py-space-xl">
        {/* XXL */}
        <div id="grootformaat" className="relative mb-space-xl">
          <MediaSlot mediaId="SPEC-02" className="w-full aspect-[4/5] md:aspect-[16/9] object-cover" />
          <div className="md:absolute top-1/2 left-10 transform md:-translate-y-1/2 bg-[#F7F7F5] p-space-md md:max-w-xl z-10 -mt-10 mx-5 md:mt-0 md:mx-0 relative">
            <H2>Grootformaat & XXL</H2>
            <p className="mt-space-sm">
              Grote tegels en platen creëren een rustig beeld met minder voegen, maar maken vlakheid, handling en detaillering extra belangrijk.
            </p>
          </div>
        </div>

        {/* Mozaïek */}
        <div id="mozaiek" className="grid grid-cols-4 md:grid-cols-12 gap-4 px-5 md:px-10 mb-space-xl items-center">
          <div className="col-span-4 md:col-span-4">
            <MediaSlot mediaId="SPEC-03" className="w-full aspect-square md:aspect-[4/5] object-cover" />
          </div>
          <div className="col-span-4 md:col-span-6 md:col-start-6 mt-space-md md:mt-0">
            <H2>Mozaïek</H2>
            <p className="mt-space-sm">
              Veel kleine elementen maken iedere lijn en overgang zichtbaar. De ondergrond en aansluiting op omliggend tegelwerk verdienen daarom extra aandacht.
            </p>
          </div>
        </div>

        {/* Natuursteen */}
        <div id="natuursteen" className="grid grid-cols-4 md:grid-cols-12 gap-4 px-5 md:px-10 mb-space-xl">
          <div className="col-span-4 md:col-span-10 grid grid-cols-2 gap-4">
            <MediaSlot mediaId="SPEC-04A" className="w-full aspect-[4/5] object-cover" />
            <MediaSlot mediaId="SPEC-04B" className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="col-span-4 md:col-span-8 mt-space-md">
            <H2>Natuursteen</H2>
            <p className="mt-space-sm">
              Natuursteen heeft natuurlijke variatie en vraagt om een aanpak die past bij het specifieke materiaal en de toepassing.
            </p>
          </div>
        </div>

        {/* Keramisch parket */}
        <div id="keramisch-parket" className="grid grid-cols-4 md:grid-cols-12 px-5 md:px-10 mb-space-lg md:mb-space-xl relative">
          <div className="col-span-4 md:col-span-4 z-10 md:pt-space-xl relative">
            <BlueprintLine className="absolute left-0 top-0 bottom-0 hidden md:block" />
            <div className="bg-[#F7F7F5] p-space-md -mb-10 md:mb-0 relative z-20">
              <H2>Keramisch parket</H2>
              <p className="mt-space-sm">
                Houtlooktegels combineren het karakter van een plankvloer met keramiek. De manier van leggen is cruciaal voor een vlak en natuurlijk resultaat zonder ongewenste patronen of lippage.
              </p>
            </div>
          </div>
          <div className="col-span-4 md:col-span-10 md:-ml-[25%] md:col-start-3">
            <MediaSlot mediaId="SPEC-05" className="w-full aspect-[4/3] md:aspect-[3/1] object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaMonument title="PROJECT BESPREKEN" link="/contact/" />
    </main>
  );
}
