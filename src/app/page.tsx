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
          <MediaSlot mediaId="HOME-01" className="w-full aspect-[4/5] md:aspect-[16/9] object-cover" bleedMobile={true} />
        </div>
        <div className="relative -mt-4 md:mt-0 mx-5 md:mx-0 md:absolute md:bottom-[-2rem] md:left-4 md:bottom-[-2rem] md:left-4 lg:left-8 bg-[#F7F7F5] p-space-md w-auto md:col-span-8 lg:col-span-6 max-w-full md:max-w-3xl border-t border-r border-[#E5E5E5] z-10">
          <span className="block text-sm uppercase tracking-widest mb-space-xs font-space text-[#1A1A1A]">SPPAT — Nederland</span>
          <H1>Complete Badkamerrenovaties & Technisch Tegelwerk</H1>
          <p className="mt-space-sm text-base md:text-lg text-[#1A1A1A] font-inter max-w-xl">
            Een hoogwaardige badkamer of tegelvloer begint niet bij de laatste tegel, maar bij alles wat daaronder gebeurt. SPPAT realiseert complete badkamerrenovaties en professioneel tegelwerk met aandacht voor voorbereiding, techniek, maatvoering en afwerking.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-4 mt-space-xl mb-space-xl px-5 md:px-0">
        
        {/* Badkamers (Image Col 1-4, Text Col 5-10) */}
        <div className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 md:gap-x-4 mb-space-lg">
          <div className="col-span-1 md:col-span-4 relative mb-space-sm md:mb-0">
            <MediaSlot mediaId="HOME-02" className="w-full h-full object-cover aspect-[4/5]" bleedMobile={true} />
          </div>
          <div className="col-span-1 md:col-span-6 md:col-start-5 md:flex md:flex-col md:justify-center md:-ml-8 md:mt-8 z-10">
            <div className="bg-[#F7F7F5] md:p-space-md md:border border-[#E5E5E5]">
              <H2>Turnkey Badkamerrenovatie van A tot Z</H2>
              <p className="mt-space-xs font-inter text-[#1A1A1A]">
                Een complete badkamer bestaat uit meerdere disciplines die precies op elkaar moeten aansluiten. SPPAT kan het volledige renovatieproject uitvoeren: van demontage en technische aanpassingen tot ondergrondvoorbereiding, tegelwerk, sanitair, verlichting en eindafwerking.
              </p>
              <p className="mt-space-xs font-inter text-[#1A1A1A]">
                Dat maakt het mogelijk om de ruimte als één project te benaderen in plaats van als een verzameling losse werkzaamheden.
              </p>
              <div className="mt-space-sm">
                <Link href="/complete-badkamer-renovatie/" className="font-space uppercase text-sm tracking-wider underline hover:no-underline">
                  Complete badkamerrenovatie →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tegelwerk (Text Col 2-7, Image Col 6-12) */}
        <div className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 md:gap-x-4 mt-space-md md:mt-space-xl">
          <div className="col-span-1 md:col-span-7 md:col-start-6 relative mb-space-sm md:mb-0 order-1 md:order-2">
            <MediaSlot mediaId="HOME-03" className="w-full h-full object-cover aspect-[4/3] md:aspect-[16/9]" bleedMobile={true} />
          </div>
          <div className="col-span-1 md:col-span-6 md:col-start-2 md:flex md:flex-col md:justify-center md:-mr-12 md:mt-12 z-10 order-2 md:order-1">
            <div className="bg-[#F7F7F5] md:p-space-md md:border border-[#E5E5E5]">
              <H2>Professioneel Tegelwerk voor Elke Ruimte</H2>
              <p className="mt-space-xs font-inter text-[#1A1A1A]">
                SPPAT verzorgt vloer- en wandtegelwerk voor badkamers, toiletten, keukens, woonruimtes en balkons. Daarbij gaat het niet alleen om het plaatsen van tegels, maar ook om de voorbereiding, verdeling, lijnen, aansluitingen en details die het eindbeeld bepalen.
              </p>
              <div className="mt-space-sm flex flex-col gap-2 font-space uppercase text-sm tracking-wider">
                <Link href="/tegelwerk/#vloertegels" className="hover:underline">Vloertegels →</Link>
                <Link href="/tegelwerk/#wandtegels" className="hover:underline">Wandtegels →</Link>
                <Link href="/tegelwerk/#keuken" className="hover:underline">Keuken →</Link>
                <Link href="/tegelwerk/#balkon" className="hover:underline">Balkon →</Link>
                <Link href="/tegelwerk/#badkamer" className="hover:underline">Badkamer →</Link>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Technical Proof - 12-column short horizontal interruption */}
      <section className="col-span-1 md:col-span-12 my-space-xl px-5 md:px-0 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4">
          <div className="col-span-1 md:col-span-12 relative w-full aspect-[4/3] md:aspect-[21/9] flex items-center justify-center overflow-hidden">
            <MediaSlot mediaId="HOME-04" className="absolute inset-0 w-full h-full object-cover" bleedMobile={true} />
            <div className="relative z-10 bg-[#F7F7F5] p-space-md max-w-2xl text-center shadow-sm m-5 md:m-0 border border-[#E5E5E5]">
              <H2>Kwaliteit begint onder de tegels</H2>
              <p className="mt-space-xs font-inter text-[#1A1A1A] mb-2">
                Een strak eindresultaat wordt voor een groot deel bepaald voordat de tegel wordt geplaatst. De vlakheid en stabiliteit van de ondergrond, aansluitingen, afschot in natte zones en een passende waterdichting hebben direct invloed op het uiteindelijke tegelwerk.
              </p>
              <p className="mt-space-xs font-inter text-[#1A1A1A]">
                Daarom kijkt SPPAT niet alleen naar wat zichtbaar wordt, maar naar het complete technische geheel waarop de afwerking moet worden gebouwd.
              </p>
              <div className="mt-space-sm flex flex-col md:flex-row justify-center gap-4 md:gap-6 font-space uppercase text-sm tracking-wider">
                <Link href="/kennisbank/#waterdichting" className="hover:underline">Waterdichting in de badkamer →</Link>
                <Link href="/kennisbank/#lippage" className="hover:underline">Lippage bij tegelwerk →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialisaties */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mt-space-lg mb-space-xl px-5 md:px-0">
        <div className="col-span-1 md:col-span-6">
          <H2>Specialisaties in Veeleisende Materialen</H2>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Sommige materialen vragen extra aandacht bij voorbereiding, handling, verdeling en afwerking. SPPAT werkt ook met grootformaat tegels, mozaïek, natuursteen en keramisch parket.
          </p>
        </div>
        <div className="col-span-1 md:col-span-5 md:col-start-8 mt-space-sm md:mt-0 flex flex-col justify-center gap-4 font-space uppercase text-sm tracking-wider">
          <Link href="/specialisaties/#grootformaat" className="hover:underline border-b border-[#E5E5E5] pb-2">Grootformaat / XXL →</Link>
          <Link href="/specialisaties/#mozaiek" className="hover:underline border-b border-[#E5E5E5] pb-2">Mozaïek →</Link>
          <Link href="/specialisaties/#natuursteen" className="hover:underline border-b border-[#E5E5E5] pb-2">Natuursteen →</Link>
          <Link href="/specialisaties/#keramisch-parket" className="hover:underline border-b border-[#E5E5E5] pb-2">Keramisch parket →</Link>
        </div>
      </section>
      
      {/* 35 Jaar Ervaring */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0">
        <div className="col-span-1 md:col-span-8 md:col-start-3 text-center">
          <H2>35 Jaar Ervaring in Bouwtechniek</H2>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            35 jaar ervaring betekent vooral dat een project niet alleen vanuit de zichtbare afwerking wordt bekeken. Een badkamer, vloer of tegelwand is een opeenvolging van keuzes die elkaar beïnvloeden. SPPAT combineert praktische bouwervaring met aandacht voor technisch tegelwerk en verzorgde detaillering.
          </p>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="col-span-1 md:col-span-12 mb-space-xl max-w-[1440px] mx-auto w-full px-5 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 border-t border-[#E5E5E5] pt-space-lg mb-space-md">
          <div className="col-span-1 md:col-span-8 md:col-start-3 text-center">
            <H2>Gerealiseerde Projecten</H2>
            <p className="mt-space-xs font-inter text-[#1A1A1A]">
              Het eindresultaat moet niet alleen worden beschreven, maar ook zichtbaar zijn. Bekijk een selectie van echte SPPAT-projecten en afzonderlijke details van uitgevoerd tegel- en renovatiewerk.
            </p>
          </div>
        </div>
        
        {/* Horizontal scroll on mobile, 3 cols on desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:grid md:grid-cols-3 -mx-5 px-5 md:mx-0 md:px-0 w-[calc(100%+40px)] md:w-full pb-4 md:pb-0 hide-scrollbar">
          <div className="flex-none w-[85vw] md:w-auto snap-center">
            <MediaSlot mediaId="HOME-PROJECT-A" className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="flex-none w-[85vw] md:w-auto snap-center">
            <MediaSlot mediaId="HOME-PROJECT-B" className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="flex-none w-[85vw] md:w-auto snap-center">
            <MediaSlot mediaId="HOME-PROJECT-C" className="w-full aspect-[4/5] object-cover" />
          </div>
        </div>

        <div className="text-center mt-space-md">
           <Link href="/projecten/" className="inline-block bg-transparent border border-[#1A1A1A] text-[#1A1A1A] px-6 py-3 font-space uppercase tracking-wider text-sm hover:bg-[#E5E5E5] transition-colors">
            Bekijk projecten
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="col-span-1 md:col-span-12 mb-space-xl">
        <CtaAnchor title="Klaar om uw project concreet te maken?" mediaId="HOME-CTA">
          <p>
            Heeft u al een ontwerp, foto&apos;s, een plattegrond of alleen een idee? Stuur door wat u heeft. Met foto&apos;s van de huidige situatie, globale afmetingen en uw wensen kan het gesprek direct concreter beginnen.
          </p>
        </CtaAnchor>
      </section>

    </main>
  )
}
