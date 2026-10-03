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
  const actualHref = href || link || "/contact/";
  return (
    <div className="cta-anchor">
      {mediaId ? (
        <MediaSlot 
          mediaId={mediaId} 
          aspectRatio="auto" 
          className="cta-anchor-image w-full aspect-[4/5] md:aspect-[16/9]"
        />
      ) : (
        null
      )}
      <div className="cta-anchor-copy">
         <H2 className="mb-space-sm">{title || "Project bespreken"}</H2>
         {children && <div className="mb-space-md font-inter text-[#1A1A1A]">{children}</div>}
         <Link href={actualHref} className="inline-block mt-4 uppercase font-space text-[14px] tracking-widest border-b border-[#1A1A1A] pb-1 hover:text-[#555] transition-colors">
           Project bespreken
         </Link>
      </div>
    </div>
  );
}

export function CtaMonument({ href, link, title }: CtaProps) {
  const actualHref = href || link || "/contact/";
  return (
    <div className="cta-monument w-full py-space-lg md:py-space-xl border-t border-blueprint mt-space-lg min-w-0">
      <Link href={actualHref} className="group flex justify-between items-center gap-4 w-full min-w-0">
         <h2 className="font-space text-[clamp(2rem,6vw,6rem)] leading-[1.05] tracking-tight uppercase min-w-0 break-words whitespace-normal">
           {title || "Project Bespreken"}
         </h2>
         <span aria-hidden="true" className="text-4xl md:text-8xl font-space transition-transform group-hover:translate-x-1 flex-shrink-0">→</span>
      </Link>
    </div>
  );
}

export function CtaBrief({ href, link, title }: CtaProps) {
  const actualHref = href || link || "/contact/";
  return (
    <div className="border-y border-blueprint py-space-md mt-space-lg w-full md:col-span-4">
       <H2 className="mb-space-xs text-xl md:text-2xl">{title || "Project bespreken?"}</H2>
       <Link href={actualHref} className="inline-block uppercase font-space text-[14px] tracking-widest border-b border-[#1A1A1A] pb-1">
         Project bespreken
       </Link>
    </div>
  );
}
