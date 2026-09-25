import { H1, H2, H3 } from "@/components/Typography";
import { MediaSlot } from "@/components/MediaSlot";
import { CtaMonument } from "@/components/CtaComponents"
import Link from "next/link"

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professioneel Tegelwerk & Installatie | SPPAT",
  description: "Professioneel tegelwerk voor vloeren, wanden, badkamers, keukens en balkons. SPPAT werkt in heel Nederland, inclusief specialistische tegeltoepassingen.",
  alternates: { canonical: "https://www.sppat.nl/tegelwerk" },
};



export default function Tegelwerk() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-12 gap-x-4">
      {/* Hero Overlap */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl relative">
        <div className="col-span-1 md:col-span-10 md:col-start-3 relative w-full px-0">
          {/* Image cols 3-12 (Edge-to-edge bleed, 16:9 on desktop, edge-to-edge 4:5 on mobile) */}
          <MediaSlot mediaId="TEGEL-01" className="w-full aspect-[4/5] md:aspect-[16/9] object-cover" />
        </div>
        
        {/* Text cols 1-5 overlapping top-left */}
        <div className="bg-[#F7F7F5] p-space-md md:col-span-5 md:absolute md:top-12 md:left-4 border-b border-r border-[#E5E5E5] z-10 max-w-xl -mt-12 md:mt-0 relative">
          <H1>Professioneel Tegelwerk & Installatie</H1>
          <p className="mt-space-sm font-inter text-[#1A1A1A]">
            Goed tegelwerk is meer dan tegels recht naast elkaar plaatsen. De kwaliteit begint bij de ondergrond en wordt zichtbaar in de verdeling, voeglijnen, snedes, hoeken, aansluitingen en overgang naar andere materialen.
          </p>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            SPPAT verzorgt professioneel tegelwerk voor verschillende ruimtes en toepassingen in heel Nederland.
          </p>
        </div>
      </section>

      {/* Intro & Applications (The Typographic Index) */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-4 md:px-0">
        <div className="col-span-1 md:col-span-5 mb-space-lg md:mb-0">
          <H2>De basis voor een strak eindresultaat</H2>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Voor de eerste tegel wordt geplaatst, moet duidelijk zijn wat de ondergrond vraagt en hoe de tegelverdeling uitkomt. Een goede voorbereiding voorkomt dat problemen pas zichtbaar worden bij hoeken, deuren, nissen of het einde van een wand.
          </p>
        </div>
        
        {/* Applications cols 7-12 separated by 1px borders */}
        <div className="col-span-1 md:col-start-7 md:col-span-6 flex flex-col">
          <div className="border-t border-[#E5E5E5] py-space-sm" id="vloertegels">
            <H3>Vloertegels leggen</H3>
            <p className="mt-2 font-inter text-[#1A1A1A]">Voor woonruimtes, hallen, keukens, badkamers en andere vloeren.</p>
          </div>
          <div className="border-t border-[#E5E5E5] py-space-sm" id="wandtegels">
            <H3>Wandtegels zetten</H3>
            <p className="mt-2 font-inter text-[#1A1A1A]">Voor badkamers, toiletten, keukens en andere betegelde wanden.</p>
          </div>
          <div className="border-t border-[#E5E5E5] py-space-sm" id="keuken">
            <H3>Keuken tegelen</H3>
            <p className="mt-2 font-inter text-[#1A1A1A]">Achterwanden, spatwanden en vloeren met aandacht voor uitsparingen en aansluitingen.</p>
          </div>
          <div className="border-t border-[#E5E5E5] py-space-sm" id="balkon">
            <H3>Balkon tegelen</H3>
            <p className="mt-2 font-inter text-[#1A1A1A]">Buitentegelwerk waarbij ondergrond, waterafvoer en weersbelasting onderdeel zijn van de beoordeling.</p>
          </div>
          <div className="border-t border-b border-[#E5E5E5] py-space-sm" id="badkamer">
            <H3>Badkamer tegelen</H3>
            <p className="mt-2 font-inter text-[#1A1A1A]">Voor projecten waarbij u de renovatie zelf organiseert maar het tegelwerk professioneel wilt laten uitvoeren.</p>
          </div>
        </div>
      </section>

      {/* Premium Capabilities (XXL & Natuursteen): 7/5 Split */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-4 md:px-0 items-center">
        {/* Text cols 1-6 */}
        <div className="col-span-1 md:col-span-6 md:col-start-1 mb-space-md md:mb-0">
          <H2>Expertise in veeleisende materialen</H2>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Naast regulier tegelwerk werkt SPPAT met toepassingen waarbij formaat, materiaal of detaillering extra aandacht vraagt. Grootformaat, XXL tegels en natuursteen vergen specifieke voorbereiding en vakkennis.
          </p>
          <div className="mt-space-sm">
            <Link href="/specialisaties/" className="font-space-grotesk uppercase text-sm tracking-wider underline hover:no-underline">
              Bekijk specialisaties →
            </Link>
          </div>
        </div>
        {/* Image cols 8-12 */}
        <div className="col-span-1 md:col-span-5 md:col-start-8 relative">
          <div className="aspect-[4/5] relative md:mx-0 mx-5 border-y border-[#E5E5E5] md:border-none">
            <MediaSlot mediaId="TEGEL-02" className="w-full h-full object-cover aspect-[4/5]" />
          </div>
        </div>
      </section>

      {/* Premium Capabilities (Mozaïek & Keramisch Parket): 5/7 Split */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-4 md:px-0 items-center flex-col-reverse md:flex-row">
        {/* Image cols 1-5 */}
        <div className="col-span-1 md:col-span-5 md:col-start-1 relative order-2 md:order-1 mt-space-md md:mt-0">
          <div className="aspect-[4/5] relative md:mx-0 mx-5 border-y border-[#E5E5E5] md:border-none">
            <MediaSlot mediaId="TEGEL-03" className="w-full h-full object-cover aspect-[4/5]" />
          </div>
        </div>
        {/* Text cols 7-12 */}
        <div className="col-span-1 md:col-span-6 md:col-start-7 order-1 md:order-2">
          <H2>Oog voor de afwerking</H2>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Een nette tegelwand of vloer wordt uiteindelijk beoordeeld op details: de verdeling van het vlak, rechte lijnen, aansluitingen, hoeken, uitsparingen en de relatie tussen tegel en sanitair of interieur. Dit geldt zeker voor fijnmazig mozaïek en keramisch parket.
          </p>
          <div className="mt-space-sm flex flex-col gap-2 font-space-grotesk uppercase text-sm tracking-wider">
            <Link href="/projecten/" className="hover:underline">Bekijk projecten →</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="col-span-1 md:col-span-12 mb-space-xl">
        <CtaMonument />
      </section>
    </main>
  )
}
