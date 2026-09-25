import { mediaMapping } from "@/config/mediaData";

interface MediaSlotProps {
  mediaId: string;
  aspectRatio?: "16:9" | "4:5" | "3:2" | "4:3" | "1:1" | "21:9" | "auto" | string;
  inset?: boolean;
  className?: string;
  bleedMobile?: boolean; // For edge-to-edge bleed on mobile
}

export function MediaSlot({
  mediaId,
  aspectRatio = "auto",
  inset = false,
  className = "",
  bleedMobile = false,
}: MediaSlotProps) {
  let aspectClass = "";
  if (aspectRatio !== "auto") {
      aspectClass = {
        "16:9": "aspect-[16/9]",
        "4:5": "aspect-[4/5]",
        "3:2": "aspect-[3/2]",
        "4:3": "aspect-[4/3]",
        "1:1": "aspect-square",
        "21:9": "aspect-[21/9]",
      }[aspectRatio] || `aspect-[${aspectRatio}]`;
  }

  const insetClass = inset ? "px-[20px] border-y border-[#E5E5E5] py-0" : "";
  const bleedClass = bleedMobile ? "w-[calc(100%+40px)] max-w-[100vw] -mx-[20px] md:mx-0 md:max-w-none md:w-auto" : "";

  const media = mediaMapping[mediaId];

  // Dev marker
  const isDev = process.env.NODE_ENV === 'development';
  const showDevMarker = isDev && media && (media.status === 'provisional' || media.status === 'gap');

  if (media && media.src) {
    return (
      <div 
        className={`relative ${insetClass} ${bleedClass} ${className} ${aspectClass}`}
        data-media-id={mediaId}
      >
        <picture className="block w-full h-full">
          {media.desktopSrc && <source media="(min-width: 1024px)" srcSet={media.desktopSrc} />}
          {media.tabletSrc && <source media="(min-width: 834px)" srcSet={media.tabletSrc} />}
          {media.mobileSrc && <source media="(max-width: 833px)" srcSet={media.mobileSrc} />}
          <img 
            src={media.src} 
            alt={media.alt} 
            className="w-full h-full object-cover block"
            style={{ objectPosition: media.objectPosition || "center" }}
            loading="lazy"
            data-media-id={mediaId}
          />
        </picture>
        {showDevMarker && (
          <div className="absolute top-2 left-2 bg-black text-white text-[10px] font-space tracking-widest uppercase px-2 py-1 z-20 pointer-events-none opacity-80 border border-white/20">
            {mediaId} · {media.status}
          </div>
        )}
      </div>
    );
  }

  // Fallback to geometric placeholder if no mapped media found
  return (
    <div 
      className={`relative bg-[#E5E5E5] flex items-center justify-center overflow-hidden ${insetClass} ${bleedClass} ${className} ${aspectClass}`}
      data-media-id={mediaId}
    >
      <span className="font-space text-[0.875rem] text-[#1A1A1A] uppercase opacity-50 tracking-[0.05em]">
        [MEDIA: {mediaId}]
      </span>
    </div>
  );
}
