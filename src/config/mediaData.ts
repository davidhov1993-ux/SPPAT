export interface MediaAsset {
  mediaId: string;
  src: string;
  alt: string;
  desktopSrc?: string;
  tabletSrc?: string;
  mobileSrc?: string;
  objectPosition?: string;
  status: 'approved' | 'provisional' | 'gap';
  sourceClass?: 'verified-sppat' | 'standalone-sppat' | 'technical-process' | 'reference' | 'generated' | 'temporary';
  notes?: string;
}

export const mediaMapping: Record<string, MediaAsset> = {
  "HOME-01": {
    mediaId: "HOME-01",
    src: "/images/raw/Generated Image September 10, 2026 - 7_57PM.jpg",
    alt: "Complete badkamerrenovatie en tegelwerk sfeerbeeld",
    objectPosition: "55% 52%",
    status: "approved",
    sourceClass: "generated",
    notes: "Neutral WB, restrained contrast. Do not caption as SPPAT work."
  },
  "HOME-02": {
    mediaId: "HOME-02",
    objectPosition: "80% 50%",
    src: "/images/production/SPPAT-SVC-bath-feb-card-desktop.webp",
    desktopSrc: "/images/production/SPPAT-SVC-bath-feb-card-desktop.webp",
    tabletSrc: "/images/production/SPPAT-SVC-bath-feb-card-tablet.webp",
    mobileSrc: "/images/production/SPPAT-SVC-bath-feb-card-mobile.webp",
    alt: "Badkamer met tegelwerk en sanitair",
    status: "approved",
    sourceClass: "standalone-sppat",
  },
  "HOME-03": {
    mediaId: "HOME-03",
    src: "/images/production/SPPAT-SVC-kitchen-card-desktop.webp",
    desktopSrc: "/images/production/SPPAT-SVC-kitchen-card-desktop.webp",
    tabletSrc: "/images/production/SPPAT-SVC-kitchen-card-tablet.webp",
    mobileSrc: "/images/production/SPPAT-SVC-kitchen-card-mobile.webp",
    objectPosition: "55% 60%",
    alt: "Keuken met tegelvloer",
    status: "approved",
    sourceClass: "standalone-sppat",
  },
  "HOME-04": {
    mediaId: "HOME-04",
    src: "/images/raw/Generated Image September 10, 2026 - 11_53PM.jpg",
    alt: "Vakmanschap en technische voorbereiding",
    objectPosition: "center",
    status: "approved",
    sourceClass: "generated",
    notes: "Replaced from KB-LASER per user request."
  },
  "BADK-01": {
    mediaId: "BADK-01",
    src: "/images/production/SPPAT-SVC-ai-bathroom-hero-desktop.webp",
    desktopSrc: "/images/production/SPPAT-SVC-ai-bathroom-hero-desktop.webp",
    tabletSrc: "/images/production/SPPAT-SVC-ai-bathroom-hero-tablet.webp",
    mobileSrc: "/images/production/SPPAT-SVC-ai-bathroom-hero-mobile.webp",
    objectPosition: "52% 50%",
    alt: "Premium badkamer met inloopdouche",
    status: "approved",
    sourceClass: "generated"
  },
  "BADK-02": {
    mediaId: "BADK-02",
    src: "/images/production/SPPAT-SVC-substrate-detail-desktop.webp",
    desktopSrc: "/images/production/SPPAT-SVC-substrate-detail-desktop.webp",
    tabletSrc: "/images/production/SPPAT-SVC-substrate-detail-tablet.webp",
    mobileSrc: "/images/production/SPPAT-SVC-substrate-detail-mobile.webp",
    alt: "Voorbereiding van de vloer voor tegelwerk",
    status: "approved",
    sourceClass: "technical-process"
  },
  "BADK-TOILET": {
    mediaId: "BADK-TOILET",
    src: "/images/production/SPPAT-SVC-compact-card-desktop.webp",
    alt: "Toilet renovatie",
    status: "provisional",
    sourceClass: "temporary"
  },
  "BADK-03": {
    mediaId: "BADK-03",
    src: "/images/production/SPPAT-SVC-ai-niche-detail-desktop.webp",
    desktopSrc: "/images/production/SPPAT-SVC-ai-niche-detail-desktop.webp",
    tabletSrc: "/images/production/SPPAT-SVC-ai-niche-detail-tablet.webp",
    mobileSrc: "/images/production/SPPAT-SVC-ai-niche-detail-mobile.webp",
    alt: "Detail van nis in badkamer",
    status: "approved",
    sourceClass: "generated"
  },
  "ALM-01": {
    mediaId: "ALM-01",
    src: "/images/production/SPPAT-SVC-compact-card-desktop.webp",
    desktopSrc: "/images/production/SPPAT-SVC-compact-card-desktop.webp",
    tabletSrc: "/images/production/SPPAT-SVC-compact-card-tablet.webp",
    mobileSrc: "/images/production/SPPAT-SVC-compact-card-mobile.webp",
    alt: "Badkamer met douche en wandcloset",
    status: "approved",
    sourceClass: "standalone-sppat"
  },
  "TEGEL-01": {
    mediaId: "TEGEL-01",
    src: "/images/raw/Generated Image September 11, 2026 - 11_48AM.jpg",
    objectPosition: "center bottom",
    alt: "Brede tegelvloer doorlopend in de ruimte",
    status: "approved",
    sourceClass: "generated"
  },
  "TEGEL-02": {
    mediaId: "TEGEL-02",
    src: "/images/production/SPPAT-PROJ-01-bath08-2-detail-desktop.webp",
    desktopSrc: "/images/production/SPPAT-PROJ-01-bath08-2-detail-desktop.webp",
    tabletSrc: "/images/production/SPPAT-PROJ-01-bath08-2-detail-tablet.webp",
    mobileSrc: "/images/production/SPPAT-PROJ-01-bath08-2-detail-mobile.webp",
    alt: "Grootformaat tegels in inloopdouche",
    status: "approved",
    sourceClass: "verified-sppat"
  },
  "TEGEL-03": {
    mediaId: "TEGEL-03",
    src: "/images/production/SPPAT-SVC-ai-woodlook-detail-desktop.webp",
    desktopSrc: "/images/production/SPPAT-SVC-ai-woodlook-detail-desktop.webp",
    tabletSrc: "/images/production/SPPAT-SVC-ai-woodlook-detail-tablet.webp",
    mobileSrc: "/images/production/SPPAT-SVC-ai-woodlook-detail-mobile.webp",
    alt: "Keramisch parket met lange voegen",
    status: "approved",
    sourceClass: "generated"
  },
  "SPEC-01": {
    mediaId: "SPEC-01",
    src: "/images/raw/Generated Image September 10, 2026 - 10_46PM.jpg",
    alt: "Natuursteenblad gecombineerd met donkere wand en hout",
    status: "approved",
    sourceClass: "generated"
  },
  "SPEC-02": {
    mediaId: "SPEC-02",
    src: "/images/raw/Generated Image September 10, 2026 - 10_26PM.jpg",
    alt: "Grootformaat keramische platen wand",
    status: "approved",
    sourceClass: "generated"
  },
  "SPEC-03": {
    mediaId: "SPEC-03",
    src: "/images/raw/mozaik1.jpg",
    objectPosition: "center",
    alt: "Mozaïek detail",
    status: "approved",
    sourceClass: "reference"
  },
  "SPEC-04A": {
    mediaId: "SPEC-04A",
    src: "/images/raw/Generated Image September 11, 2026 - 2_05PM.jpg",
    alt: "Natuursteen met open poriën",
    status: "approved",
    sourceClass: "generated"
  },
  "SPEC-04B": {
    mediaId: "SPEC-04B",
    src: "/images/raw/Generated Image September 10, 2026 - 7_29PM.jpg",
    alt: "Detail van stenen hoek met textuur",
    status: "approved",
    sourceClass: "generated"
  },
  "SPEC-05": {
    mediaId: "SPEC-05",
    src: "/images/production/SPPAT-SVC-ai-woodlook-hero-desktop.webp",
    desktopSrc: "/images/production/SPPAT-SVC-ai-woodlook-hero-desktop.webp",
    mobileSrc: "/images/production/SPPAT-SVC-ai-woodlook-detail-mobile.webp",
    alt: "Keramisch parket voeglijnen",
    status: "approved",
    sourceClass: "generated"
  },
  "ABOUT-02": {
    mediaId: "ABOUT-02",
    src: "/images/raw/Generated Image September 10, 2026 - 11_53PM.jpg",
    alt: "Vakmanschap technische strip",
    objectPosition: "center",
    status: "approved",
    sourceClass: "generated"
  },
  "ABOUT-01": {
    mediaId: "ABOUT-01",
    src: "/images/raw/Generated Image September 10, 2026 - 11_53PM.jpg",
    alt: "Vakmanschap met tegel en lijmkam",
    status: "approved",
    sourceClass: "generated"
  },
  "KB-01 WATERDICHTING": {
    mediaId: "KB-01 WATERDICHTING",
    src: "/images/raw/Generated Image September 10, 2026 - 8_27PM.jpg",
    alt: "Waterdichting in natte cel hoek",
    status: "approved",
    sourceClass: "generated"
  },
  "KB-02 LIPPAGE": {
    mediaId: "KB-02 LIPPAGE",
    src: "/images/raw/Generated Image September 10, 2026 - 8_27PM (1).jpg",
    alt: "Laserlijn en levelingsysteem op tegelwerk",
    status: "approved",
    sourceClass: "generated"
  },
  "KB-03 INSPECTIELUIK": {
    mediaId: "KB-03 INSPECTIELUIK",
    src: "/images/raw/Generated Image September 11, 2026 - 11_16AM.jpg",
    alt: "Tijdelijk beeld voor inspectieluik",
    status: "gap",
    sourceClass: "temporary",
    notes: "NOT FOR PRODUCTION — MEDIA GAP"
  },
  "KB-04 EPOXY/CEMENT": {
    mediaId: "KB-04 EPOXY/CEMENT",
    src: "/images/raw/Generated Image September 11, 2026 - 11_16AM.jpg",
    alt: "Kruising van tegelvoegen",
    status: "approved",
    sourceClass: "generated"
  },
  "KB-INLINE": {
    mediaId: "KB-INLINE",
    src: "/images/raw/Generated Image September 10, 2026 - 8_27PM.jpg",
    alt: "Waterdichting in natte cel hoek",
    status: "approved",
    sourceClass: "generated"
  },
  "PROJ-01-A": {
    mediaId: "PROJ-01-A",
    src: "/images/production/SPPAT-PROJ-01-bath08-hero-desktop.webp",
    desktopSrc: "/images/production/SPPAT-PROJ-01-bath08-hero-desktop.webp",
    tabletSrc: "/images/production/SPPAT-PROJ-01-bath08-hero-tablet.webp",
    mobileSrc: "/images/production/SPPAT-PROJ-01-bath08-hero-mobile.webp",
    alt: "Complete badkamer renovatie overzicht",
    status: "approved",
    sourceClass: "verified-sppat"
  },
  "PROJ-01-B": {
    mediaId: "PROJ-01-B",
    src: "/images/production/SPPAT-PROJ-01-bath08-1-hero-desktop.webp",
    desktopSrc: "/images/production/SPPAT-PROJ-01-bath08-1-hero-desktop.webp",
    tabletSrc: "/images/production/SPPAT-PROJ-01-bath08-1-hero-tablet.webp",
    mobileSrc: "/images/production/SPPAT-PROJ-01-bath08-1-hero-mobile.webp",
    alt: "Detail van badkamer inloopdouche",
    status: "approved",
    sourceClass: "verified-sppat"
  },
  "PROJ-01-C": {
    mediaId: "PROJ-01-C",
    src: "/images/production/SPPAT-PROJ-01-bath08-2-hero-desktop.webp",
    desktopSrc: "/images/production/SPPAT-PROJ-01-bath08-2-hero-desktop.webp",
    tabletSrc: "/images/production/SPPAT-PROJ-01-bath08-2-hero-tablet.webp",
    mobileSrc: "/images/production/SPPAT-PROJ-01-bath08-2-hero-mobile.webp",
    alt: "Detail van wastafel en spiegel",
    status: "approved",
    sourceClass: "verified-sppat"
  },
  "PROJ-03-A": {
    mediaId: "PROJ-03-A",
    src: "/images/production/SPPAT-PROJ-03-floor07-9-hero-desktop.webp",
    desktopSrc: "/images/production/SPPAT-PROJ-03-floor07-9-hero-desktop.webp",
    tabletSrc: "/images/production/SPPAT-PROJ-03-floor07-9-hero-tablet.webp",
    mobileSrc: "/images/production/SPPAT-PROJ-03-floor07-9-hero-mobile.webp",
    alt: "Grootformaat vloertegels overzicht",
    status: "approved",
    sourceClass: "verified-sppat"
  },
  "PROJ-03-B": {
    mediaId: "PROJ-03-B",
    src: "/images/production/SPPAT-PROJ-03-floor07-4-card-desktop.webp",
    desktopSrc: "/images/production/SPPAT-PROJ-03-floor07-4-card-desktop.webp",
    tabletSrc: "/images/production/SPPAT-PROJ-03-floor07-4-card-tablet.webp",
    mobileSrc: "/images/production/SPPAT-PROJ-03-floor07-4-card-mobile.webp",
    alt: "Detail van vloertegels aansluiting",
    status: "approved",
    sourceClass: "verified-sppat"
  },
  "PROJ-03-C": {
    mediaId: "PROJ-03-C",
    src: "/images/production/SPPAT-PROJ-03-floor07-6-card-desktop.webp",
    desktopSrc: "/images/production/SPPAT-PROJ-03-floor07-6-card-desktop.webp",
    tabletSrc: "/images/production/SPPAT-PROJ-03-floor07-6-card-tablet.webp",
    mobileSrc: "/images/production/SPPAT-PROJ-03-floor07-6-card-mobile.webp",
    alt: "Vloertegel patroon",
    status: "approved",
    sourceClass: "verified-sppat"
  },
  "PROJ-06-A": {
    mediaId: "PROJ-06-A",
    src: "/images/production/SPPAT-PROJ-06-res04-4-hero-desktop.webp",
    alt: "Complete renovatie tegelwerk",
    status: "gap",
    sourceClass: "temporary",
    notes: "NOT FOR PRODUCTION — VERIFIED PROJECT MEDIA MISSING"
  },
  "PROJ-06-B": {
    mediaId: "PROJ-06-B",
    src: "/images/production/SPPAT-PROJ-06-res03-6-card-desktop.webp",
    alt: "Detail tegelwerk rand",
    status: "gap",
    sourceClass: "temporary",
    notes: "NOT FOR PRODUCTION — VERIFIED PROJECT MEDIA MISSING"
  },
  "PROJ-02-A": {
    mediaId: "PROJ-02-A",
    src: "/images/production/SPPAT-SVC-ai-bathroom-hero-desktop.webp",
    alt: "Tijdelijk beeld voor Project 02",
    status: "approved",
    sourceClass: "verified-sppat",
  },
  "PROJ-04-A": {
    mediaId: "PROJ-04-A",
    src: "/images/production/SPPAT-SVC-bath-feb-card-desktop.webp",
    alt: "Tijdelijk beeld voor Project 04",
    status: "approved",
    sourceClass: "verified-sppat",
  },
  "PROJ-05-A": {
    mediaId: "PROJ-05-A",
    src: "/images/production/SPPAT-SVC-kitchen-card-desktop.webp",
    alt: "Tijdelijk beeld voor Project 05",
    status: "approved",
    sourceClass: "verified-sppat",
  }
}
