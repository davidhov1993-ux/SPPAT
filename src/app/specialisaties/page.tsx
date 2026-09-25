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
    <main className="grid grid-cols-1 md:grid-cols-12 gap-x-4">
      {/* Intro - Typography Only */}
      <section className="col-span-1 md:col-span-12 px-5 md:px-0 mt-space-xl mb-space-xl text-center flex flex-col items-center">
        <span className="block text-sm uppercase tracking-widest mb-space-xs font-space text-[#1A1A1A]">Specialisaties</span>
        <H1 className="max-w-4xl mx-auto">Specialisaties in Tegelwerk</H1>
        <p className="mt-space-sm font-inter text-[#1A1A1A] max-w-2xl mx-auto">
          Niet ieder materiaal laat zich op dezelfde manier verwerken. Formaat, gewicht, oppervlak, patroon en natuurlijke eigenschappen kunnen invloed hebben op voorbereiding, handling, verdeling en afwerking. SPPAT voert ook tegelwerk uit waarbij juist die details centraal staan.
        </p>
      </section>

      {/* XXL */}
      <section className="col-span-1 md:col-span-12 relative w-full mb-space-xl" id="grootformaat">
        <div className="w-full relative px-0">
          <MediaSlot mediaId="SPEC-02" className="w-full aspect-[4/5] md:aspect-[16/9] object-cover" bleedMobile={true} />
        </div>
        <div className="relative -mt-4 md:mt-0 mx-5 md:mx-0 md:absolute md:bottom-[-2rem] md:left-8 bg-white p-space-md md:p-space-lg w-auto max-w-full md:max-w-2xl border-t border-r border-[#E5E5E5] z-10">
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
          <div className="mt-space-sm flex gap-4 mt-6">
            <Link href="/tegelwerk/#badkamer" className="font-space uppercase text-sm tracking-wider hover:underline font-bold text-[#1A1A1A]">Badkamer tegelen →</Link>
            <Link href="/kennisbank/#lippage" className="font-space uppercase text-sm tracking-wider hover:underline font-bold text-[#1A1A1A]">Lippage uitgelegd →</Link>
          </div>
        </div>
      </section>

      {/* Mozaïek */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0" id="mozaiek">
        <div className="col-span-1 md:col-span-5 md:col-start-2 mb-space-md md:mb-0">
          <MediaSlot mediaId="SPEC-03" className="w-full aspect-[1/1] md:aspect-[4/5] object-cover" />
        </div>
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center">
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
        </div>
      </section>

      {/* Natuursteen */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 mb-space-xl px-5 md:px-0" id="natuursteen">
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
        </div>
        
        {/* Diptych Desktop / Scroll Snap Mobile */}
        <div className="col-span-1 md:col-span-12 flex md:grid md:grid-cols-2 gap-4 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 w-[calc(100%+40px)] md:w-auto">
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
             <Link href="/kennisbank/#lippage" className="font-space uppercase text-sm tracking-wider hover:underline font-bold text-[#1A1A1A]">Wat is lippage? →</Link>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="col-span-1 md:col-span-12 overflow-hidden w-full">
        <CtaMonument title="Uw project bespreken" />
      </section>

    </main>
  )
}
