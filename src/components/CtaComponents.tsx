import Link from 'next/link';
import { H2 } from './Typography';

interface CtaProps {
  href?: string;
  link?: string;
  title?: string;
}

export function CtaAnchor({ href, link, title, children }: CtaProps & { children?: React.ReactNode }) {
  const actualHref = href || link || "/contact";
  return (
    <div className="relative w-full h-[40vh] md:h-[60vh] bg-[#E5E5E5] flex items-end justify-start p-space-md md:p-space-xl mt-space-xl">
      {/* Placeholder for negative space integration */}
      <div className="bg-[#F7F7F5] p-space-md border border-blueprint max-w-xl">
         <H2 className="mb-space-sm">{title || "Project bespreken"}</H2>
         {children && <div className="mb-space-md font-inter text-[#1A1A1A]">{children}</div>}
         <Link href={actualHref} className="inline-block mt-4 uppercase font-space text-[14px] tracking-widest border-b border-[#1A1A1A] pb-1 hover:text-[#555] transition-colors">
           Naar contact 
         </Link>
      </div>
    </div>
  );
}

export function CtaMonument({ href, link, title }: CtaProps) {
  const actualHref = href || link || "/contact";
  return (
    <div className="w-full col-span-12 py-space-lg md:py-space-xl border-t border-blueprint mt-space-lg md:mt-space-xl">
      <Link href={actualHref} className="group flex justify-between items-center w-full">
         <h2 className="font-space text-[clamp(2.5rem,6vw,6rem)] leading-[0.9] tracking-tight uppercase transition-transform group-hover:translate-x-4">
           {title || "Project Bespreken"}
         </h2>
         <span className="text-4xl md:text-8xl font-space transition-transform group-hover:translate-x-4">→</span>
      </Link>
    </div>
  );
}

export function CtaBrief({ href, link, title }: CtaProps) {
  const actualHref = href || link || "/contact";
  return (
    <div className="border border-blueprint p-space-md mt-space-lg w-full md:col-span-4">
       <H2 className="mb-space-xs text-xl md:text-2xl">{title || "Project bespreken?"}</H2>
       <p className="font-inter text-base mb-space-sm">
         Heeft u plannen? Stuur foto&apos;s en afmetingen om het gesprek concreet te maken.
       </p>
       <Link href={actualHref} className="inline-block uppercase font-space text-[14px] tracking-widest border-b border-[#1A1A1A] pb-1">
         Naar contact
       </Link>
    </div>
  );
}
