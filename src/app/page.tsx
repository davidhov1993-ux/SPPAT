import { H1, H2 } from "@/components/Typography";
import { MediaSlot } from "@/components/MediaSlot";

import { CtaAnchor } from "@/components/CtaComponents"
import Link from "next/link"

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Badkamerrenovaties & Professioneel Tegelwerk | SPPAT",
  description: "SPPAT realiseert complete badkamerrenovaties en professioneel tegelwerk in heel Nederland. 35 jaar ervaring, van voorbereiding en techniek tot nauwkeurige afwerking.",
  alternates: { canonical: "https://www.sppat.nl/" },
};



export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-12 gap-x-4">
      {/* Hero Section */}
      <section className="col-span-1 md:col-span-12 relative w-full mb-space-xl">
        <div className="w-full relative px-0">
          <MediaSlot mediaId="HOME-01" className="w-full aspect-[4/5] md:aspect-[16/9] object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 md:bottom-[-2rem] md:left-4 lg:left-8 bg-[#F7F7F5] p-space-md md:col-span-8 lg:col-span-6 max-w-3xl border-t border-r border-[#E5E5E5]">
          <span className="block text-sm uppercase tracking-widest mb-space-xs font-space-grotesk text-[#1A1A1A]">SPPAT — Nederland</span>
          <H1>Complete Badkamerrenovaties & Technisch Tegelwerk</H1>
          <p className="mt-space-sm text-base md:text-lg text-[#1A1A1A] font-inter max-w-xl">
            Een hoogwaardige badkamer of tegelvloer begint niet bij de laatste tegel, maar bij alles wat daaronder gebeurt. SPPAT realiseert complete badkamerrenovaties en professioneel tegelwerk met aandacht voor voorbereiding, techniek, maatvoering en afwerking.
          </p>
          <p className="mt-space-xs text-base md:text-lg text-[#1A1A1A] font-inter max-w-xl">
            Van sloop en installatiewerk tot waterdichting, tegelwerk, sanitair en de laatste details: bij een complete renovatie kan het volledige project als één geheel worden uitgevoerd.
          </p>
          <div className="mt-space-md flex flex-col md:flex-row gap-4">
            <Link href="/contact/" className="bg-[#1A1A1A] text-white px-6 py-3 font-space-grotesk uppercase tracking-wider text-sm hover:bg-black transition-colors">
              Project bespreken
            </Link>
            <Link href="/projecten/" className="border border-[#1A1A1A] text-[#1A1A1A] px-6 py-3 font-space-grotesk uppercase tracking-wider text-sm hover:bg-[#E5E5E5] transition-colors">
              Bekijk projecten
            </Link>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mt-space-xl mb-space-xl">
        {/* Badkamers (Cols 1-5) */}
        <div className="col-span-1 md:col-span-5 relative mb-space-lg md:mb-0">
          <div className="aspect-[4/5] relative">
            <MediaSlot mediaId="HOME-02" className="w-full h-full object-cover aspect-[4/5]" />
          </div>
          <div className="mt-space-sm md:absolute md:top-1/4 md:left-[110%] md:w-[200%] z-10 bg-[#F7F7F5] md:p-space-md md:border border-[#E5E5E5]">
            <H2>Turnkey Badkamerrenovatie van A tot Z</H2>
            <p className="mt-space-xs font-inter text-[#1A1A1A]">
              Een complete badkamer bestaat uit meerdere disciplines die precies op elkaar moeten aansluiten. SPPAT kan het volledige renovatieproject uitvoeren: van demontage en technische aanpassingen tot ondergrondvoorbereiding, tegelwerk, sanitair, verlichting en eindafwerking.
            </p>
            <p className="mt-space-xs font-inter text-[#1A1A1A]">
              Dat maakt het mogelijk om de ruimte als één project te benaderen in plaats van als een verzameling losse werkzaamheden.
            </p>
            <div className="mt-space-sm">
              <Link href="/complete-badkamer-renovatie/" className="font-space-grotesk uppercase text-sm tracking-wider underline hover:no-underline">
                Complete badkamerrenovatie →
              </Link>
            </div>
          </div>
        </div>

        {/* Tegelwerk (Cols 7-12) lower Y-axis */}
        <div className="col-span-1 md:col-start-7 md:col-span-6 md:mt-32 relative">
          <div className="aspect-[6/4] relative">
            <MediaSlot mediaId="HOME-03" className="w-full h-full object-cover aspect-[3/2]" />
          </div>
          <div className="mt-space-sm">
            <H2>Professioneel Tegelwerk voor Elke Ruimte</H2>
            <p className="mt-space-xs font-inter text-[#1A1A1A]">
              SPPAT verzorgt vloer- en wandtegelwerk voor badkamers, toiletten, keukens, woonruimtes en balkons. Daarbij gaat het niet alleen om het plaatsen van tegels, maar ook om de voorbereiding, verdeling, lijnen, aansluitingen en details die het eindbeeld bepalen.
            </p>
            <div className="mt-space-sm flex flex-col gap-2 font-space-grotesk uppercase text-sm tracking-wider">
              <Link href="/tegelwerk/#vloertegels" className="hover:underline">Vloertegels →</Link>
              <Link href="/tegelwerk/#wandtegels" className="hover:underline">Wandtegels →</Link>
              <Link href="/tegelwerk/#keuken" className="hover:underline">Keuken →</Link>
              <Link href="/tegelwerk/#balkon" className="hover:underline">Balkon →</Link>
              <Link href="/tegelwerk/#badkamer" className="hover:underline">Badkamer →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Proof */}
      <section className="col-span-1 md:col-span-12 mt-space-xl mb-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-md px-4 md:px-0">
          <div className="col-span-1 md:col-span-8 md:col-start-3 text-center">
            <H2>Kwaliteit begint onder de tegels</H2>
            <p className="mt-space-xs font-inter text-[#1A1A1A]">
              Een strak eindresultaat wordt voor een groot deel bepaald voordat de tegel wordt geplaatst. De vlakheid en stabiliteit van de ondergrond, aansluitingen, afschot in natte zones en een passende waterdichting hebben direct invloed op het uiteindelijke tegelwerk.
            </p>
            <p className="mt-space-xs font-inter text-[#1A1A1A]">
              Daarom kijkt SPPAT niet alleen naar wat zichtbaar wordt, maar naar het complete technische geheel waarop de afwerking moet worden gebouwd.
            </p>
            <div className="mt-space-sm flex justify-center gap-6 font-space-grotesk uppercase text-sm tracking-wider">
              <Link href="/kennisbank/#waterdichting" className="hover:underline">Waterdichting in de badkamer →</Link>
              <Link href="/kennisbank/#lippage" className="hover:underline">Lippage bij tegelwerk →</Link>
            </div>
          </div>
        </div>
        <div className="w-full relative px-5 md:px-0 border-y border-[#E5E5E5] md:border-none">
          <MediaSlot mediaId="HOME-04" className="w-full aspect-[4/3] md:aspect-[21/9] object-cover" />
        </div>
      </section>

      {/* Specialisaties */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mt-space-lg mb-space-xl px-4 md:px-0">
        <div className="col-span-1 md:col-span-6">
          <H2>Specialisaties in Veeleisende Materialen</H2>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Sommige materialen vragen extra aandacht bij voorbereiding, handling, verdeling en afwerking. SPPAT werkt ook met grootformaat tegels, mozaïek, natuursteen en keramisch parket.
          </p>
        </div>
        <div className="col-span-1 md:col-span-5 md:col-start-8 mt-space-sm md:mt-0 flex flex-col justify-center gap-4 font-space-grotesk uppercase text-sm tracking-wider">
          <Link href="/specialisaties/#grootformaat" className="hover:underline border-b border-[#E5E5E5] pb-2">Grootformaat / XXL →</Link>
          <Link href="/specialisaties/#mozaiek" className="hover:underline border-b border-[#E5E5E5] pb-2">Mozaïek →</Link>
          <Link href="/specialisaties/#natuursteen" className="hover:underline border-b border-[#E5E5E5] pb-2">Natuursteen →</Link>
          <Link href="/specialisaties/#keramisch-parket" className="hover:underline border-b border-[#E5E5E5] pb-2">Keramisch parket →</Link>
        </div>
      </section>
      
      {/* 35 Jaar Ervaring */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-4 md:px-0">
        <div className="col-span-1 md:col-span-8 md:col-start-3 text-center">
          <H2>35 Jaar Ervaring in Bouwtechniek</H2>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            35 jaar ervaring betekent vooral dat een project niet alleen vanuit de zichtbare afwerking wordt bekeken. Een badkamer, vloer of tegelwand is een opeenvolging van keuzes die elkaar beïnvloeden. SPPAT combineert praktische bouwervaring met aandacht voor technisch tegelwerk en verzorgde detaillering.
          </p>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-4 md:px-0">
        <div className="col-span-1 md:col-span-8 md:col-start-3 text-center border-t border-[#E5E5E5] pt-space-lg">
          <H2>Gerealiseerde Projecten</H2>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Het eindresultaat moet niet alleen worden beschreven, maar ook zichtbaar zijn. Bekijk een selectie van echte SPPAT-projecten en afzonderlijke details van uitgevoerd tegel- en renovatiewerk.
          </p>
          <div className="mt-space-md">
             <Link href="/projecten/" className="bg-transparent border border-[#1A1A1A] text-[#1A1A1A] px-6 py-3 font-space-grotesk uppercase tracking-wider text-sm hover:bg-[#E5E5E5] transition-colors">
              Bekijk projecten
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="col-span-1 md:col-span-12 mb-space-xl">
        <CtaAnchor title="Klaar om uw project concreet te maken?">
          <p>
            Heeft u al een ontwerp, foto&apos;s, een plattegrond of alleen een idee? Stuur door wat u heeft. Met foto&apos;s van de huidige situatie, globale afmetingen en uw wensen kan het gesprek direct concreter beginnen.
          </p>
        </CtaAnchor>
      </section>

    </main>
  )
}
