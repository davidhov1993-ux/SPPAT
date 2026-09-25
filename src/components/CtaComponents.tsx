import Link from 'next/link';
import { H2 } from './Typography';
import { MediaSlot } from './MediaSlot';

interface CtaProps {
  href?: string;
  link?: string;
  title?: string;
  mediaId?: string;
}

export function CtaAnchor({ href, link, title, mediaId, children }: CtaProps & { children?: React.ReactNode }) {
  const actualHref = href || link || "/contact";
  return (
    <div className="w-full mt-space-xl col-span-4 md:col-span-12 relative flex flex-col md:block">
      {mediaId ? (
        <MediaSlot 
          mediaId={mediaId} 
          aspectRatio="auto" 
          bleedMobile={true} 
          className="w-full aspect-[4/5] md:aspect-[21/9]" 
        />
      ) : (
        <div className="w-full bg-[#E5E5E5] aspect-[4/5] md:aspect-[21/9] -mx-[20px] md:mx-0 w-[100vw] md:w-auto"></div>
      )}
      <div className="bg-[#F7F7F5] p-space-md border border-blueprint w-[90%] md:w-auto md:max-w-[400px] -mt-16 md:-mt-0 md:absolute md:bottom-space-lg md:left-space-lg mx-auto md:mx-0 z-10 relative shadow-sm">
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
    <div className="w-full col-span-4 md:col-span-12 py-space-lg md:py-space-xl border-t border-blueprint mt-space-lg md:mt-space-xl min-w-0">
      <Link href={actualHref} className="group flex justify-between items-center w-full min-w-0">
         <h2 className="font-space text-[clamp(2.5rem,6vw,6rem)] leading-[0.9] tracking-tight uppercase transition-transform group-hover:translate-x-2 md:group-hover:translate-x-4 min-w-0 break-words whitespace-normal max-w-[85%]">
           {title || "Project Bespreken"}
         </h2>
         <span className="text-4xl md:text-8xl font-space transition-transform group-hover:translate-x-2 md:group-hover:translate-x-4 flex-shrink-0 ml-2 md:ml-4">→</span>
      </Link>
    </div>
  );
}

export function CtaBrief({ href, link, title }: CtaProps) {
  const actualHref = href || link || "/contact";
  return (
    <div className="border-y border-blueprint py-space-md mt-space-lg w-full md:col-span-4">
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
