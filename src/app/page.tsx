import Link from 'next/link';
import { H1, H2 } from "@/components/Typography";
import { MediaSlot } from "@/components/MediaSlot";
import { businessData } from "@/config/businessData";
import styles from './home.module.css';

export const metadata = {
  alternates: { canonical: 'https://www.sppat.nl/' },
};

export default function Home() {
  const whatsappTarget = businessData.telephone ? `https://wa.me/${businessData.telephone.replace(/\D/g, '')}` : "https://wa.me/";

  return (
    <main className={styles.page}>

      {/* 2. Hero */}
      <section className={styles.hero}>
        <MediaSlot mediaId="HOME-HERO" className={styles.heroImage} priority />
        <div className={styles.heroCopy}>
          <div>
            <span className="block text-sm uppercase tracking-widest mb-space-xs font-space text-[#1A1A1A]">SPPAT — Nederland</span>
            <H1 className="mb-space-sm">Complete Badkamer<wbr className={styles.compoundBreak} />renovaties & Technisch Tegelwerk</H1>
            <p className="mb-space-xs font-inter text-[#1A1A1A]">
              Een hoogwaardige badkamer of tegelvloer begint niet bij de laatste tegel, maar bij alles wat daaronder gebeurt. SPPAT realiseert complete badkamerrenovaties en professioneel tegelwerk met aandacht voor voorbereiding, techniek, maatvoering en afwerking.
            </p>
            <p className="mb-space-md font-inter text-[#1A1A1A]">
              Van sloop en installatiewerk tot waterdichting, tegelwerk, sanitair en de laatste details: bij een complete renovatie kan het volledige project als één geheel worden uitgevoerd.
            </p>
            <div className={`${styles.actions} font-space uppercase text-[14px] tracking-wider`}>
              <Link href="/contact/" className="bg-[#1A1A1A] text-white px-6 py-3 hover:bg-black transition-colors text-center">Project bespreken</Link>
              <Link href="/projecten/" className="bg-transparent border border-[#1A1A1A] text-[#1A1A1A] px-6 py-3 hover:bg-[#E5E5E5] transition-colors text-center">Bekijk projecten</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities */}
      <section className={`${styles.section} ${styles.capabilities}`}>
        {/* Badkamers Image: cols 1-5, portrait 4:5, top aligned */}
        <div className={styles.bathImage}>
          <MediaSlot mediaId="HOME-BADK" className="w-full aspect-[4/5]" />
        </div>

        {/* Badkamers text stays in flow beneath its image. */}
        <div className={styles.bathCopy}>
          <div>
            <H2>Turnkey Badkamer<wbr className={styles.compoundBreak} />renovatie van A tot Z</H2>
            <p className="mt-space-xs font-inter text-[#1A1A1A]">
              Een complete badkamer bestaat uit meerdere disciplines die precies op elkaar moeten aansluiten. SPPAT kan het volledige renovatieproject uitvoeren: van demontage en technische aanpassingen tot ondergrondvoorbereiding, tegelwerk, sanitair, verlichting en eindafwerking.
            </p>
            <p className="mt-space-xs font-inter text-[#1A1A1A]">
              Dat maakt het mogelijk om de ruimte als één project te benaderen in plaats van als een verzameling losse werkzaamheden.
            </p>
            <div className="mt-space-sm">
              <Link href="/complete-badkamer-renovatie/" className="font-space uppercase text-sm tracking-wider underline hover:no-underline font-bold">
                Complete badkamerrenovatie →
              </Link>
            </div>
          </div>
        </div>

        {/* Tegelwerk text occupies the negative space above the lower image. */}
        <div className={styles.tileCopy}>
          <div>
            <H2>Professioneel Tegelwerk voor Elke Ruimte</H2>
            <p className="mt-space-xs font-inter text-[#1A1A1A]">
              SPPAT verzorgt vloer- en wandtegelwerk voor badkamers, toiletten, keukens, woonruimtes en balkons. Daarbij gaat het niet alleen om het plaatsen van tegels, maar ook om de voorbereiding, verdeling, lijnen, aansluitingen en details die het eindbeeld bepalen.
            </p>
            <div className="mt-space-sm flex flex-col gap-2 font-space uppercase text-sm tracking-wider font-bold">
              <Link href="/tegelwerk/#vloertegels" className="hover:underline">Vloertegels →</Link>
              <Link href="/tegelwerk/#wandtegels" className="hover:underline">Wandtegels →</Link>
              <Link href="/tegelwerk/#keuken" className="hover:underline">Keuken →</Link>
              <Link href="/tegelwerk/#balkon" className="hover:underline">Balkon →</Link>
              <Link href="/tegelwerk/#badkamer" className="hover:underline">Badkamer →</Link>
            </div>
          </div>
        </div>

        {/* Tegelwerk image: cols 7-12, staggered below the bathroom image. */}
        <div className={styles.tileImage}>
          <MediaSlot mediaId="HOME-TEGEL" className="w-full object-cover aspect-[4/3] md:aspect-[16/9]" />
        </div>
      </section>

      {/* 4. Technical Proof */}
      <section className={styles.section}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-md">
          <div className="col-span-1 md:col-span-8 md:col-start-3">
             <H2>Kwaliteit begint onder de tegels</H2>
             <p className="mt-space-xs font-inter text-[#1A1A1A]">
               Een strak eindresultaat wordt voor een groot deel bepaald voordat de tegel wordt geplaatst. De vlakheid en stabiliteit van de ondergrond, aansluitingen, afschot in natte zones en een passende waterdichting hebben direct invloed op het uiteindelijke tegelwerk.
             </p>
             <p className="mt-space-xs font-inter text-[#1A1A1A]">
               Daarom kijkt SPPAT niet alleen naar wat zichtbaar wordt, maar naar het complete technische geheel waarop de afwerking moet worden gebouwd.
             </p>
             <div className="mt-space-sm flex flex-col md:flex-row gap-4 md:gap-6 font-space uppercase text-sm tracking-wider font-bold">
               <Link href="/kennisbank/#waterdichting" className="hover:underline">Waterdichting in de badkamer →</Link>
               <Link href="/kennisbank/#lippage" className="hover:underline">Lippage bij tegelwerk →</Link>
             </div>
          </div>
        </div>
        {/* Mobile MUST be inset 20px, NOT edge-to-edge */}
        <div className={styles.technicalImage}>
           <MediaSlot mediaId="HOME-TECH" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* 5. Specialisaties Bridge */}
      <section className={`${styles.section} grid grid-cols-1 md:grid-cols-12 gap-x-4 border-t border-[#E5E5E5] pt-space-xl`}>
        <div className="col-span-1 md:col-span-5 mb-space-md md:mb-0">
          <H2>Specialisaties in Veeleisende Materialen</H2>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Sommige materialen vragen extra aandacht bij voorbereiding, handling, verdeling en afwerking. SPPAT werkt ook met grootformaat tegels, mozaïek, natuursteen en keramisch parket.
          </p>
        </div>
        <div className="col-span-1 md:col-span-6 md:col-start-7 flex flex-col justify-center font-space uppercase text-sm tracking-wider font-bold">
          <div className="flex flex-col border-t border-[#E5E5E5]">
            <Link href="/specialisaties/#grootformaat" className="py-4 border-b border-[#E5E5E5] hover:underline flex justify-between">
              <span>Grootformaat / XXL</span><span>→</span>
            </Link>
            <Link href="/specialisaties/#mozaiek" className="py-4 border-b border-[#E5E5E5] hover:underline flex justify-between">
              <span>Mozaïek</span><span>→</span>
            </Link>
            <Link href="/specialisaties/#natuursteen" className="py-4 border-b border-[#E5E5E5] hover:underline flex justify-between">
              <span>Natuursteen</span><span>→</span>
            </Link>
            <Link href="/specialisaties/#keramisch-parket" className="py-4 border-b border-[#E5E5E5] hover:underline flex justify-between">
              <span>Keramisch parket</span><span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Gerealiseerde Projecten */}
      <section className={`${styles.section} border-t border-[#E5E5E5] pt-space-xl`}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-md">
          <div className="col-span-1 md:col-span-8 md:col-start-3 text-center">
            <H2>Gerealiseerde Projecten</H2>
            <p className="mt-space-xs font-inter text-[#1A1A1A]">
              Het eindresultaat moet niet alleen worden beschreven, maar ook zichtbaar zijn. Bekijk een selectie van echte SPPAT-projecten en afzonderlijke details van uitgevoerd tegel- en renovatiewerk.
            </p>
          </div>
        </div>

        {/* Horizontal scroll on mobile */}
        <div className={styles.projects}>

          {/* Project A */}
          <div className={styles.project}>
            <div className={styles.projectImages}>
              <div className={styles.projectMain}>
                <MediaSlot mediaId="HOME-PA-DOM" className="w-full aspect-[4/3] md:aspect-[16/9] object-cover" />
              </div>
            </div>
          </div>

          {/* Project B */}
          <div className={styles.project}>
            <div className={styles.projectImages}>
              <div className={styles.projectMain}>
                <MediaSlot mediaId="HOME-PB-DOM" className="w-full aspect-[4/3] md:aspect-[16/9] object-cover" />
              </div>
            </div>
          </div>

          {/* Project C */}
          <div className={styles.project}>
            <div className={styles.projectImages}>
              <div className={styles.projectMain}>
                <MediaSlot mediaId="HOME-PC-DOM" className="w-full aspect-[4/3] md:aspect-[16/9] object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-space-md">
           <Link href="/projecten/" className="inline-block bg-transparent border border-[#1A1A1A] text-[#1A1A1A] px-6 py-3 font-space uppercase tracking-wider text-sm hover:bg-[#E5E5E5] transition-colors">
            Bekijk projecten
          </Link>
        </div>
      </section>

      {/* 7. 35 Jaar Ervaring */}
      <section className={`${styles.section} grid grid-cols-1 md:grid-cols-12 gap-x-4 border-t border-[#E5E5E5] pt-space-xl`}>
        <div className="col-span-1 md:col-span-8 md:col-start-3 text-center">
          <H2>35 Jaar Ervaring in Bouwtechniek</H2>
          <p className="mt-space-xs font-inter text-[#1A1A1A] mb-2">
            35 jaar ervaring betekent vooral dat een project niet alleen vanuit de zichtbare afwerking wordt bekeken. Een badkamer, vloer of tegelwand is een opeenvolging van keuzes die elkaar beïnvloeden.
          </p>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            SPPAT combineert praktische bouwervaring met aandacht voor technisch tegelwerk en verzorgde detaillering.
          </p>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className={styles.hero}>
        <div className={`${styles.cta} col-span-full`}>
          <MediaSlot
            mediaId="HOME-CTA"
            className={styles.ctaImage}
          />
          <div className={styles.ctaCopy}>
            <H2 className="mb-space-sm">Klaar om uw project concreet te maken?</H2>
            <p className="mb-space-md font-inter text-[#1A1A1A]">
              Heeft u al een ontwerp, foto&apos;s, een plattegrond of alleen een idee? Stuur door wat u heeft. Met foto&apos;s van de huidige situatie, globale afmetingen en uw wensen kan het gesprek direct concreter beginnen.
            </p>
            <div className={`${styles.actions} font-space uppercase text-sm tracking-wider`}>
              <Link href="/contact/" className="bg-[#1A1A1A] text-white px-6 py-3 hover:bg-black transition-colors text-center inline-block">
                Project bespreken
              </Link>
              <a href={whatsappTarget} target="_blank" rel="noopener noreferrer" className="bg-transparent border border-[#1A1A1A] text-[#1A1A1A] px-6 py-3 hover:bg-[#E5E5E5] transition-colors text-center inline-block">
                Stuur een WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
