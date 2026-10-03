import { H1, H2 } from "@/components/Typography";
import { MediaSlot } from "@/components/MediaSlot";
import Link from "next/link";
import styles from "./about.module.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over SPPAT | 35 Jaar Ervaring in Renovatie & Tegelwerk",
  description: "Maak kennis met SPPAT: 35 jaar ervaring, complete badkamerrenovaties en professioneel tegelwerk voor klanten in heel Nederland.",
  alternates: { canonical: "https://www.sppat.nl/over-ons/" },
};

export default function OverOnsPage() {
  return (
    <main className={styles.page}>
      {/* Hero Overlap */}
      <section className={styles.hero}>
        <MediaSlot mediaId="ABOUT-01" className={styles.heroImage} priority />
        <div className={styles.heroCopy}>
          <H1>Betrouwbaarheid in Techniek en Uitvoering</H1>
          <p className="mt-space-sm text-lg text-[#1A1A1A] font-inter">
            SPPAT richt zich op <Link href="/complete-badkamer-renovatie/" className={styles.contextLink}>complete badkamerrenovaties</Link> en <Link href="/tegelwerk/" className={styles.contextLink}>professioneel tegelwerk</Link> in heel Nederland. Met 35 jaar ervaring kijken we verder dan alleen de zichtbare afwerking.
          </p>
          <p className="mt-space-xs text-lg text-[#1A1A1A] font-inter">
            Een goed eindresultaat ontstaat wanneer ontwerp, techniek, voorbereiding en uitvoering op elkaar aansluiten.
          </p>
        </div>
      </section>

      {/* Company Content */}
      <section className={styles.reading}>
        <div className={styles.readingCopy}>
          
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
            <Link href="/projecten/" className={`${styles.contextLink} mt-space-sm inline-block font-space text-sm uppercase tracking-wider`}>Bekijk projecten</Link>
          </div>

        </div>
      </section>

      <section className={styles.closing}>
        <div className={styles.closingCopy}>
          <div>
            <H2>Van voorbereiding tot eindafwerking in heel Nederland</H2>
            <p className="mt-space-xs text-lg font-inter">
              SPPAT werkt voor klanten in heel Nederland. De focus ligt op complete badkamers, tegelwerk en specialistische tegeltoepassingen.
            </p>
          </div>
          <div>
            <H2>Materialen: flexibel geregeld</H2>
            <p className="mt-space-xs text-lg font-inter">
              Wilt u zelf tegels en sanitair kiezen en inkopen? Dat kan. Wilt u dat SPPAT materialen verzorgt? Dat kan eveneens. Ook een combinatie is mogelijk.
            </p>
          </div>
        </div>
        <aside className={styles.brief} aria-labelledby="about-contact">
          <H2 id="about-contact">Kennismaken met SPPAT?</H2>
          <Link href="/contact/" className={`${styles.contextLink} font-space text-sm uppercase tracking-wider`}>Project bespreken</Link>
        </aside>
      </section>
    </main>
  );
}
