import { H1, H2 } from "@/components/Typography";
import { MediaSlot } from "@/components/MediaSlot";
import Link from "next/link"

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Badkamerrenovatie Almere | Complete Uitvoering | SPPAT",
  description: "Badkamer renoveren in Almere? SPPAT verzorgt complete badkamerrenovaties en technisch tegelwerk. Van voorbereiding tot afwerking.",
  alternates: { canonical: "https://www.sppat.nl/complete-badkamer-renovatie/almere" },
};



export default function BadkamerrenovatieAlmere() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-12 gap-x-4">
      {/* Hero Section: 50/50 Split. No overlap. */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0 pt-space-xl">
        <div className="col-span-1 md:col-span-5 md:col-start-1 flex flex-col justify-center order-2 md:order-1 mt-space-md md:mt-0">
          <H1>Badkamerrenovatie in Almere</H1>
          <p className="mt-space-sm font-inter text-[#1A1A1A] text-lg">
            Woont u in Almere en wilt u uw badkamer volledig vernieuwen? SPPAT verzorgt complete badkamerrenovaties waarbij techniek, tegelwerk en afwerking als één project worden bekeken.
          </p>
          <p className="mt-space-xs font-inter text-[#1A1A1A] text-lg">
            Van een nieuwe indeling en installatiewerk tot waterdichting, tegelwerk en sanitair: de exacte scope wordt afgestemd op de bestaande woning en uw plannen.
          </p>
        </div>
        <div className="col-span-1 md:col-span-6 md:col-start-7 order-1 md:order-2">
          {/* 6-col landscape, Mobile: Stacked 4:5 */}
          <div className="aspect-[4/5] md:aspect-[3/2] relative w-full">
            <MediaSlot mediaId="ALM-01" className="w-full h-full object-cover aspect-[4/5] md:aspect-[3/2]" />
          </div>
        </div>
      </section>

      {/* Local Tech & Tiling: Typography-led cols 3-10 */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0">
        <div className="col-span-1 md:col-span-8 md:col-start-3">
          <div className="mb-space-lg">
            <H2>Complete uitvoering, lokaal besproken</H2>
            <p className="mt-space-xs font-inter text-[#1A1A1A]">
              Geen woning of badkamer is hetzelfde. Daarom beginnen we bij de bestaande situatie en het gewenste eindresultaat, niet bij een standaardpakket.
            </p>
            <div className="mt-space-sm">
              <Link href="/complete-badkamer-renovatie/" className="font-space uppercase text-sm tracking-wider underline hover:no-underline">
                Bekijk complete badkamerrenovatie →
              </Link>
            </div>
          </div>
          
          <div>
            <H2>Ook voor technisch tegelwerk</H2>
            <p className="mt-space-xs font-inter text-[#1A1A1A]">
              Wilt u niet de volledige ruimte laten verbouwen, maar wel professioneel tegelwerk laten uitvoeren? Bekijk dan de tegelwerkdiensten en specialisaties.
            </p>
            <div className="mt-space-sm">
              <Link href="/tegelwerk/" className="font-space uppercase text-sm tracking-wider underline hover:no-underline">
                Bekijk tegelwerk →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: Centered typographic block */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0 border-t border-[#E5E5E5] pt-space-xl">
        <div className="col-span-1 md:col-span-8 md:col-start-3 text-center">
          <H2>Uw badkamer in Almere bespreken?</H2>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Stuur foto&apos;s, globale maten en uw ideeën.
          </p>
          <div className="mt-space-md">
            <Link href="/contact/" className="bg-[#1A1A1A] text-white px-6 py-3 font-space uppercase tracking-wider text-sm hover:bg-black transition-colors inline-block">
              Project bespreken
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
