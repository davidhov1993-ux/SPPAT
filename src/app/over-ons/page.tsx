import { H1, H2 } from "@/components/Typography";
import { MediaSlot } from "@/components/MediaSlot";
import { CtaMonument } from "@/components/CtaComponents";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over SPPAT | 35 Jaar Ervaring in Renovatie & Tegelwerk",
  description: "Maak kennis met SPPAT: 35 jaar ervaring, complete badkamerrenovaties en professioneel tegelwerk voor klanten in heel Nederland.",
  alternates: { canonical: "https://www.sppat.nl/over-ons" },
};

export default function OverOnsPage() {
  return (
    <main className="w-full">
      {/* Hero Overlap */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-x-4 px-5 md:px-0 pt-space-xl relative mb-space-xl">
        <div className="col-span-1 md:col-span-8 md:col-start-5 relative z-0">
          <MediaSlot mediaId="ABOUT-01" className="w-full aspect-[4/5] md:aspect-[16/9] object-cover" />
        </div>
        <div className="col-span-1 md:col-span-6 md:absolute md:bottom-10 md:left-10 z-10 bg-[#F7F7F5] p-space-md -mt-10 md:mt-0 relative">
          <H1>Betrouwbaarheid in Techniek en Uitvoering</H1>
          <p className="mt-space-sm text-lg text-[#1A1A1A]">
            SPPAT richt zich op complete badkamerrenovaties en professioneel tegelwerk in heel Nederland. Met 35 jaar ervaring kijken we verder dan alleen de zichtbare afwerking.
          </p>
          <p className="mt-space-xs text-lg text-[#1A1A1A]">
            Een goed eindresultaat ontstaat wanneer ontwerp, techniek, voorbereiding en uitvoering op elkaar aansluiten.
          </p>
        </div>
      </section>

      {/* Company Content */}
      <section className="px-5 md:px-0 py-space-lg grid grid-cols-1 md:grid-cols-12 gap-x-4">
        <div className="col-span-1 md:col-span-8 md:col-start-3 text-[#1A1A1A] space-y-space-md">
          
          <div>
            <H2>Verantwoordelijkheid voor het totaalplaatje</H2>
            <p className="mt-space-xs text-lg">
              Bij een complete badkamer kunnen verschillende werkzaamheden binnen één project worden samengebracht. Daardoor kan bij iedere stap rekening worden gehouden met wat daarna komt: van leidingwerk en ondergrond tot tegelverdeling en uiteindelijke montage.
            </p>
          </div>

          <div>
            <H2>35 jaar praktijkervaring</H2>
            <p className="mt-space-xs text-lg">
              Ervaring is voor ons geen marketinggetal op zichzelf. Het betekent vooral herkennen waar een project technisch gevoelig wordt, vooruitdenken over aansluitingen en begrijpen dat fouten in de voorbereiding later moeilijk te verbergen zijn.
            </p>
          </div>

        </div>
      </section>

      {/* Technical Integrity Strip */}
      <section className="w-full my-space-lg border-y border-[#E5E5E5] md:border-none">
        <MediaSlot mediaId="ABOUT-02" className="w-full aspect-[4/3] md:aspect-[21/9] object-cover" />
      </section>

      <section className="px-5 md:px-0 py-space-lg grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl">
        <div className="col-span-1 md:col-span-8 md:col-start-3 text-[#1A1A1A] space-y-space-md">
          
          <div>
            <H2>Van voorbereiding tot eindafwerking in heel Nederland</H2>
            <p className="mt-space-xs text-lg">
              SPPAT werkt voor klanten in heel Nederland. De focus ligt op complete badkamers, tegelwerk en specialistische tegeltoepassingen.
            </p>
          </div>

          <div>
            <H2>Materialen: flexibel geregeld</H2>
            <p className="mt-space-xs text-lg">
              Wilt u zelf tegels en sanitair kiezen en inkopen? Dat kan. Wilt u dat SPPAT materialen verzorgt? Dat kan eveneens. Ook een combinatie is mogelijk.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="col-span-1 md:col-span-12 w-full mt-space-xl">
        
          <CtaMonument title="Kennismaken met SPPAT?" link="/contact/" />
      </section>
    </main>
  );
}
