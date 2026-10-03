import { H1, H2 } from "@/components/Typography";
import { MediaSlot } from "@/components/MediaSlot";
import { CtaMonument } from "@/components/CtaComponents";
import { BlueprintLine } from "@/components/BlueprintLine";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tegel Specialisaties | Grootformaat, Mozaïek & Natuursteen | SPPAT",
  description: "Specialistisch tegelwerk door SPPAT: grootformaat en XXL tegels, mozaïek, natuursteen en keramisch parket.",
  alternates: { canonical: "https://www.sppat.nl/specialisaties/" },
};

export default function Specialisaties() {
  return (
    <main data-page="specialisaties" className="grid grid-cols-1 md:grid-cols-12 gap-x-6">
      {/* Intro - Typography Only */}
      <section className="col-span-1 md:col-span-12 px-5 md:px-10 mt-space-xl mb-space-xl text-center flex flex-col items-center">
        <span className="block text-sm uppercase tracking-widest mb-space-xs font-space text-[#1A1A1A]">Specialisaties</span>
        <H1 className="max-w-4xl mx-auto">Specialisaties in Tegelwerk</H1>
        <p className="mt-space-sm font-inter text-[#1A1A1A] max-w-2xl mx-auto">
          Niet ieder materiaal laat zich op dezelfde manier verwerken. Formaat, gewicht, oppervlak, patroon en natuurlijke eigenschappen kunnen invloed hebben op voorbereiding, handling, verdeling en afwerking.</p>
        <p className="mt-space-xs max-w-2xl">SPPAT voert ook tegelwerk uit waarbij juist die details centraal staan.
        </p>
      </section>

      <section className="material-index"><div><H2>Grootformaat &amp; XXL</H2><p className="mt-space-sm">Grote tegels en platen creëren een rustig beeld met minder voegen, maar maken vlakheid, handling en detaillering extra belangrijk.</p>
          <div className="mt-space-sm flex flex-wrap gap-6"><Link href="/specialisaties/#grootformaat" className="font-space text-sm uppercase tracking-wider underline underline-offset-4">Bekijk grootformaat tegels →</Link></div></div><div><H2>Mozaïek</H2><p className="mt-space-sm">Veel kleine elementen maken iedere lijn en overgang zichtbaar. De ondergrond en aansluiting op omliggend tegelwerk verdienen daarom extra aandacht.</p>
          <div className="mt-space-sm flex flex-wrap gap-6"><Link href="/specialisaties/#mozaiek" className="font-space text-sm uppercase tracking-wider underline underline-offset-4">Bekijk mozaïek →</Link></div></div><div><H2>Natuursteen</H2><p className="mt-space-sm">Natuursteen heeft natuurlijke variatie en vraagt om een aanpak die past bij het specifieke materiaal en de toepassing.</p>
          <div className="mt-space-sm flex flex-wrap gap-6"><Link href="/specialisaties/#natuursteen" className="font-space text-sm uppercase tracking-wider underline underline-offset-4">Bekijk natuursteen →</Link></div></div><div><H2>Keramisch parket</H2><p className="mt-space-sm">Houtlooktegels combineren het karakter van een plankvloer met keramiek. Het legbeeld wordt sterk bepaald door patroon, voegverdeling en vlakheid.</p>
          <div className="mt-space-sm flex flex-wrap gap-6"><Link href="/specialisaties/#keramisch-parket" className="font-space text-sm uppercase tracking-wider underline underline-offset-4">Bekijk keramisch parket →</Link></div></div></section>

      {/* XXL */}
      <section className="material-xxl col-span-1 md:col-span-12 mb-space-xl" id="grootformaat">
        <div className="w-full relative px-0">
          <MediaSlot mediaId="SPEC-XXL" className="w-full aspect-[4/5] md:aspect-[16/9] object-cover"  />
        </div>
        <div className="material-xxl-copy">
          <H2>Grootformaat & XXL Tegels Leggen</H2>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Grootformaat tegels en keramische platen kunnen een ruimte een rustig, architectonisch karakter geven. Tegelijk worden afwijkingen in ondergrond, lijnen en aansluitingen sneller zichtbaar.
          </p>
          <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">De ondergrond wordt belangrijker naarmate het formaat groeit</h3>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Grote formaten vragen om een ondergrond die geschikt is voor de gekozen tegel en toepassing. Voor uitvoering wordt daarom gekeken naar vlakheid, stabiliteit, formaat, ruimte en gewenste verdeling.
          </p>
          <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Minder voegen betekent niet minder voorbereiding</h3>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Juist doordat er minder voegen zijn, krijgen positie en maat van iedere plaat meer visuele invloed.
          </p>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">Aandachtspunten kunnen zijn:</p>
          <ul className="mt-space-xs font-inter text-[#1A1A1A] list-disc list-inside">
            <li>positionering van snijlijnen;</li>
            <li>aansluiting op nissen en inbouwdelen;</li>
            <li>buitenhoeken;</li>
            <li>doorvoeren;</li>
            <li>douchegoot en vloeropbouw;</li>
            <li>overgang naar andere materialen.</li>
          </ul>

          <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Grootformaat in badkamer en douche</h3>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Grootformaat kan ook in natte ruimtes worden toegepast wanneer materiaal, ondergrond en technische opbouw daarvoor geschikt zijn.
          </p>
          <div className="mt-space-sm flex flex-wrap gap-6">
            <Link href="/tegelwerk/#badkamer" className="font-space uppercase text-sm tracking-wider hover:underline font-bold text-[#1A1A1A]">Badkamer tegelen →</Link>
            <Link href="/kennisbank/#lippage" className="font-space uppercase text-sm tracking-wider hover:underline font-bold text-[#1A1A1A]">Lippage uitgelegd →</Link>
          </div>
        <h3 className="mt-space-md mb-space-sm">Grootformaat tegels in uw project?</h3>
          <Link href="/contact/" className="font-space text-sm uppercase tracking-wider underline underline-offset-4">Project bespreken →</Link>
        </div>
      </section>

      {/* Mozaïek */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-6 mb-space-xl px-5 md:px-10" id="mozaiek">
        <div className="col-span-1 md:col-span-4 md:col-start-2 mb-space-md md:mb-0">
          <MediaSlot mediaId="SPEC-MOZ" className="w-full aspect-square md:aspect-[4/5] object-cover" />
        </div>
        <div className="col-span-1 md:col-span-6 md:col-start-7 flex flex-col justify-center">
          <H2>Professioneel Mozaïek Zetten</H2>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Mozaïek bestaat uit kleine elementen, maar vraagt juist daardoor veel controle over het totale vlak. Kleine afwijkingen in ondergrond of aansluiting kunnen over een groter oppervlak zichtbaar worden.
          </p>
          <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Waar mozaïek sterk tot zijn recht komt</h3>
          <ul className="mt-space-xs font-inter text-[#1A1A1A] list-disc list-inside">
            <li>douchevloeren;</li>
            <li>nissen;</li>
            <li>accentwanden;</li>
            <li>gebogen of bijzondere vlakken waar het gekozen mozaïek voor geschikt is;</li>
            <li>combinaties met grotere tegelformaten.</li>
          </ul>
          <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Aandacht voor overgang en lijnvoering</h3>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Bij matten of losse elementen moet het patroon als één geheel blijven lezen. Ook de overgang naar omliggende tegels, profielen, hoeken en sanitair bepaalt het eindbeeld.
          </p>
        <h3 className="mt-space-md mb-space-sm">Mozaïek in uw project?</h3>
          <Link href="/contact/" className="font-space text-sm uppercase tracking-wider underline underline-offset-4">Project bespreken →</Link>
        </div>
      </section>

      {/* Natuursteen */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-6 mb-space-xl px-5 md:px-10" id="natuursteen">
        <div className="stone-diptych">
          <MediaSlot mediaId="SPEC-STONE-A" className="aspect-[4/5]" />
          <MediaSlot mediaId="SPEC-STONE-B" className="aspect-[4/5]" />
        </div>
        <div className="col-span-1 md:col-span-8 md:col-start-3 mb-space-md">
          <H2>Natuursteen Leggen</H2>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Natuursteen is geen volledig uniform fabrieksproduct. Kleur, structuur en eigenschappen kunnen per steensoort en partij verschillen. Juist die variatie maakt het materiaal bijzonder en vraagt om aandacht vóór en tijdens de verwerking.
          </p>
          <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Eerst het materiaal begrijpen</h3>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            De geschikte verwerking hangt af van de gekozen steensoort, formaat, ondergrond en ruimte. Daarom worden lijm-, voeg-, onderhouds- en eventuele beschermingskeuzes niet als één universele standaard gepresenteerd.
          </p>
          <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Het legbeeld als geheel</h3>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Bij natuursteen is niet alleen maatvoering belangrijk. Ook de natuurlijke tekening en verdeling van de elementen hebben invloed op het visuele resultaat.
          </p>
          <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Onderhoud</h3>
          <p className="mt-space-xs font-inter text-[#1A1A1A]">
            Onderhoud is afhankelijk van de specifieke steensoort en afwerking. Volg daarom altijd het advies dat past bij het daadwerkelijk gekozen materiaal.
          </p>
        <h3 className="mt-space-md mb-space-sm">Natuursteen in uw project?</h3>
          <Link href="/contact/" className="font-space text-sm uppercase tracking-wider underline underline-offset-4">Project bespreken →</Link>
        </div>

        </section>

      {/* Keramisch Parket */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-6 mb-space-xl px-5 md:px-10 relative" id="keramisch-parket">
        <div className="col-span-1 md:col-span-10 md:col-start-3 md:order-last relative z-0">
           <MediaSlot mediaId="SPEC-PARKET" className="w-full aspect-[4/3] md:aspect-[21/9] object-cover" />
        </div>
        <div className="material-parket-copy">
           <BlueprintLine className="mb-space-md hidden md:block" />
           <H2>Keramisch Parket Leggen</H2>
           <p className="mt-space-xs font-inter text-[#1A1A1A]">
             Keramisch parket combineert de uitstraling van houten planken met een keramische vloer. Door de langwerpige vorm hebben vlakheid, patroon en voegverdeling veel invloed op het eindbeeld.
           </p>
           <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Patroon en verdeling</h3>
           <p className="mt-space-xs font-inter text-[#1A1A1A]">
             De gekozen planklengte, ruimte en gewenste uitstraling bepalen welk legbeeld passend is. De verdeling wordt daarom vooraf bekeken in plaats van pas tijdens het leggen te ontstaan.
           </p>
           <h3 className="font-space uppercase tracking-widest text-sm text-[#1A1A1A] mt-6 mb-2 font-bold">Ondergrond en vlakheid</h3>
           <p className="mt-space-xs font-inter text-[#1A1A1A]">
             Langwerpige tegels kunnen producttoleranties hebben. Een geschikte ondergrond en doordachte plaatsing helpen zichtbare hoogteverschillen te beperken.
           </p>
           <div className="mt-space-sm mt-6">
             <span className="font-space uppercase text-sm tracking-wider text-[#666666] mr-4">Verdieping:</span>
             <a href="/kennisbank/#lippage" className="font-space uppercase text-sm tracking-wider hover:underline font-bold text-[#1A1A1A]">Wat is lippage? →</a>
           </div>
        <h3 className="mt-space-md mb-space-sm">Houtlook tegels professioneel laten leggen?</h3>
          <Link href="/contact/" className="font-space text-sm uppercase tracking-wider underline underline-offset-4">Project bespreken →</Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="col-span-1 md:col-span-12 overflow-hidden w-full">
        <div className="service-close">
          <H2>Gerealiseerde Projecten</H2>
          <Link href="/projecten/" className="mt-space-sm inline-block font-space uppercase text-sm underline underline-offset-4">Bekijk projecten →</Link>
          <H2 className="mt-space-lg">Een specialistisch tegelproject bespreken?</H2>
        </div>
        <CtaMonument title="Project bespreken" />
      </section>

    </main>
  )
}
