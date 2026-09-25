export interface MediaAsset {
  mediaId: string;
  src: string;
  alt: string;
  desktopSrc?: string;
  tabletSrc?: string;
  mobileSrc?: string;
  objectPosition?: string;
  status: 'approved' | 'provisional' | 'gap' | 'review-selected';
  sourceClass?: 'verified-sppat' | 'standalone-sppat' | 'technical-process' | 'reference' | 'generated' | 'temporary';
  origin?: string;
  notes?: string;
}

export const mediaMapping: Record<string, MediaAsset> = {
  "HOME-01": {
    mediaId: "HOME-01",
    src: "/images/curated/home/home-01-hero.jpg",
    alt: "Complete badkamerrenovatie en tegelwerk sfeerbeeld",
    objectPosition: "55% 52%",
    origin: "media",
    status: "approved"
  },
  "HOME-02": {
    mediaId: "HOME-02",
    src: "/images/curated/home/home-02-badkamers.jpg",
    alt: "Badkamer met tegelwerk en sanitair",
    objectPosition: "80% 50%",
    origin: "media",
    status: "approved"
  },
  "HOME-03": {
    mediaId: "HOME-03",
    src: "/images/curated/home/home-03-tegelwerk.jpg",
    alt: "Keuken met tegelvloer",
    objectPosition: "55% 60%",
    origin: "media",
    status: "approved"
  },
  "HOME-04": {
    mediaId: "HOME-04",
    src: "/images/curated/home/home-04-tech.jpg",
    alt: "Vakmanschap en technische voorbereiding",
    objectPosition: "center",
    origin: "media",
    status: "approved"
  },
  "HOME-PROJECT-A": {
    mediaId: "HOME-PROJECT-A",
    src: "/images/curated/home/home-project-a.jpg",
    alt: "HOME-PROJECT-A visual",
    origin: "media",
    status: "approved"
  },
  "HOME-PROJECT-B": {
    mediaId: "HOME-PROJECT-B",
    src: "/images/curated/home/home-project-b.jpg",
    alt: "HOME-PROJECT-B visual",
    origin: "media",
    status: "approved"
  },
  "HOME-PROJECT-C": {
    mediaId: "HOME-PROJECT-C",
    src: "/images/curated/home/home-project-c.jpg",
    alt: "HOME-PROJECT-C visual",
    origin: "media",
    status: "approved"
  },
  "HOME-CTA": {
    mediaId: "HOME-CTA",
    src: "/images/curated/home/home-cta.jpg",
    alt: "HOME-CTA visual",
    origin: "media",
    status: "approved"
  },
  "BADK-01": {
    mediaId: "BADK-01",
    src: "/images/curated/services/badk-01-hero.jpg",
    alt: "Premium badkamer met inloopdouche",
    objectPosition: "52% 50%",
    origin: "media",
    status: "approved"
  },
  "BADK-02": {
    mediaId: "BADK-02",
    src: "/images/curated/services/badk-02-concealed.jpg",
    alt: "Voorbereiding van de vloer voor tegelwerk",
    origin: "special-references",
    status: "approved"
  },
  "BADK-03": {
    mediaId: "BADK-03",
    src: "/images/curated/services/badk-03-finish.jpg",
    alt: "Detail van nis in badkamer",
    origin: "media",
    status: "approved"
  },
  "BADK-TOILET": {
    mediaId: "BADK-TOILET",
    src: "/images/curated/services/badk-toilet.jpg",
    alt: "Toilet renovatie",
    origin: "media",
    status: "approved"
  },
  "BADK-CTA": {
    mediaId: "BADK-CTA",
    src: "/images/curated/services/badk-cta.jpg",
    alt: "BADK-CTA visual",
    origin: "media",
    status: "approved"
  },
  "ALM-01": {
    mediaId: "ALM-01",
    src: "/images/curated/services/alm-01.jpg",
    alt: "Badkamer met douche en wandcloset",
    origin: "media",
    status: "approved"
  },
  "TEGEL-01": {
    mediaId: "TEGEL-01",
    src: "/images/curated/services/tegel-01-hero.jpg",
    alt: "Brede tegelvloer doorlopend in de ruimte",
    objectPosition: "center bottom",
    origin: "media",
    status: "approved"
  },
  "TEGEL-02": {
    mediaId: "TEGEL-02",
    src: "/images/curated/services/tegel-02-xxl.jpg",
    alt: "Grootformaat tegels in inloopdouche",
    origin: "media",
    status: "approved"
  },
  "TEGEL-03": {
    mediaId: "TEGEL-03",
    src: "/images/curated/services/tegel-03-parket.jpg",
    alt: "Keramisch parket met lange voegen",
    origin: "media",
    status: "approved"
  },
  "SPEC-02": {
    mediaId: "SPEC-02",
    src: "/images/curated/specialisaties/spec-02-xxl.jpg",
    alt: "Grootformaat keramische platen wand",
    origin: "media",
    status: "approved"
  },
  "SPEC-03": {
    mediaId: "SPEC-03",
    src: "/images/curated/specialisaties/spec-03-mosaic.jpg",
    alt: "Mozaïek detail",
    objectPosition: "center",
    origin: "media",
    status: "approved"
  },
  "SPEC-04A": {
    mediaId: "SPEC-04A",
    src: "/images/curated/specialisaties/spec-04a-stone-texture.jpg",
    alt: "Natuursteen met open poriën",
    origin: "media",
    status: "approved"
  },
  "SPEC-04B": {
    mediaId: "SPEC-04B",
    src: "/images/curated/specialisaties/spec-04b-stone-edge.jpg",
    alt: "Detail van stenen hoek met textuur",
    origin: "media",
    status: "approved"
  },
  "SPEC-05": {
    mediaId: "SPEC-05",
    src: "/images/curated/specialisaties/spec-05-parket.jpg",
    alt: "Keramisch parket voeglijnen",
    origin: "media",
    status: "approved"
  },
  "ABOUT-01": {
    mediaId: "ABOUT-01",
    src: "/images/curated/about/about-01-process.jpg",
    alt: "Vakmanschap met tegel en lijmkam",
    origin: "media",
    status: "approved"
  },
  "ABOUT-02": {
    mediaId: "ABOUT-02",
    src: "/images/curated/about/about-02-tech-strip.jpg",
    alt: "Vakmanschap technische strip",
    objectPosition: "center",
    origin: "media",
    status: "approved"
  },
  "KB-WATERDICHTING": {
    mediaId: "KB-WATERDICHTING",
    src: "/images/curated/knowledge/kb-waterdichting.jpg",
    alt: "KB-WATERDICHTING visual",
    origin: "special-references",
    status: "approved"
  },
  "KB-LIPPAGE": {
    mediaId: "KB-LIPPAGE",
    src: "/images/curated/knowledge/kb-lippage.jpg",
    alt: "KB-LIPPAGE visual",
    origin: "media",
    status: "approved"
  },
  "KB-INSPECTIELUIK": {
    mediaId: "KB-INSPECTIELUIK",
    src: "/images/curated/knowledge/kb-inspectieluik-temp.jpg",
    alt: "KB-INSPECTIELUIK visual",
    origin: "media",
    status: "provisional"
  },
  "KB-EPOXY-CEMENT": {
    mediaId: "KB-EPOXY-CEMENT",
    src: "/images/curated/knowledge/kb-epoxy-cement.jpg",
    alt: "KB-EPOXY-CEMENT visual",
    origin: "media",
    status: "approved"
  },
  "PROJECT-01-01": {
    mediaId: "PROJECT-01-01",
    src: "/images/curated/projects/project-01/p01-01.jpeg",
    alt: "PROJECT-01-01 visual",
    origin: "project-series",
    status: "approved"
  },
  "PROJECT-01-02": {
    mediaId: "PROJECT-01-02",
    src: "/images/curated/projects/project-01/p01-02.jpeg",
    alt: "PROJECT-01-02 visual",
    origin: "project-series",
    status: "approved"
  },
  "PROJECT-01-03": {
    mediaId: "PROJECT-01-03",
    src: "/images/curated/projects/project-01/p01-03.jpeg",
    alt: "PROJECT-01-03 visual",
    origin: "project-series",
    status: "approved"
  },
  "PROJECT-02-01": {
    mediaId: "PROJECT-02-01",
    src: "/images/curated/projects/project-02/p02-01.jpeg",
    alt: "PROJECT-02-01 visual",
    origin: "project-series",
    status: "approved"
  },
  "PROJECT-02-02": {
    mediaId: "PROJECT-02-02",
    src: "/images/curated/projects/project-02/p02-02.jpeg",
    alt: "PROJECT-02-02 visual",
    origin: "project-series",
    status: "approved"
  },
  "PROJECT-02-03": {
    mediaId: "PROJECT-02-03",
    src: "/images/curated/projects/project-02/p02-03.jpeg",
    alt: "PROJECT-02-03 visual",
    origin: "project-series",
    status: "approved"
  },
  "PROJECT-02-04": {
    mediaId: "PROJECT-02-04",
    src: "/images/curated/projects/project-02/p02-04.jpeg",
    alt: "PROJECT-02-04 visual",
    origin: "project-series",
    status: "approved"
  },
  "PROJECT-02-05": {
    mediaId: "PROJECT-02-05",
    src: "/images/curated/projects/project-02/p02-05.jpeg",
    alt: "PROJECT-02-05 visual",
    origin: "project-series",
    status: "approved"
  },
  "PROJECT-03-01": {
    mediaId: "PROJECT-03-01",
    src: "/images/curated/projects/project-03/p03-01.jpeg",
    alt: "PROJECT-03-01 visual",
    origin: "project-series",
    status: "approved"
  },
  "PROJECT-03-02": {
    mediaId: "PROJECT-03-02",
    src: "/images/curated/projects/project-03/p03-02.jpeg",
    alt: "PROJECT-03-02 visual",
    origin: "project-series",
    status: "approved"
  },
  "PROJECT-03-03": {
    mediaId: "PROJECT-03-03",
    src: "/images/curated/projects/project-03/p03-03.jpeg",
    alt: "PROJECT-03-03 visual",
    origin: "project-series",
    status: "approved"
  },
  "PROJECT-04-01": {
    mediaId: "PROJECT-04-01",
    src: "/images/curated/projects/project-04/p04-01.jpeg",
    alt: "PROJECT-04-01 visual",
    origin: "project-series",
    status: "approved"
  },
  "PROJECT-04-02": {
    mediaId: "PROJECT-04-02",
    src: "/images/curated/projects/project-04/p04-02.jpeg",
    alt: "PROJECT-04-02 visual",
    origin: "project-series",
    status: "approved"
  },
  "PROJECT-04-03": {
    mediaId: "PROJECT-04-03",
    src: "/images/curated/projects/project-04/p04-03.jpeg",
    alt: "PROJECT-04-03 visual",
    origin: "project-series",
    status: "approved"
  },
  "PROJECT-04-04": {
    mediaId: "PROJECT-04-04",
    src: "/images/curated/projects/project-04/p04-04.jpeg",
    alt: "PROJECT-04-04 visual",
    origin: "project-series",
    status: "approved"
  },
  "PROJECT-04-05": {
    mediaId: "PROJECT-04-05",
    src: "/images/curated/projects/project-04/p04-05.jpeg",
    alt: "PROJECT-04-05 visual",
    origin: "project-series",
    status: "approved"
  },
  "PROJECT-04-06": {
    mediaId: "PROJECT-04-06",
    src: "/images/curated/projects/project-04/p04-06.jpeg",
    alt: "PROJECT-04-06 visual",
    origin: "project-series",
    status: "approved"
  },
  "PROJECT-05-01": {
    mediaId: "PROJECT-05-01",
    src: "/images/curated/projects/project-05/p05-01.jpeg",
    alt: "PROJECT-05-01 visual",
    origin: "project-series",
    status: "approved"
  },
  "PROJECT-05-02": {
    mediaId: "PROJECT-05-02",
    src: "/images/curated/projects/project-05/p05-02.jpeg",
    alt: "PROJECT-05-02 visual",
    origin: "project-series",
    status: "approved"
  },
  "PROJECT-05-03": {
    mediaId: "PROJECT-05-03",
    src: "/images/curated/projects/project-05/p05-03.jpeg",
    alt: "PROJECT-05-03 visual",
    origin: "project-series",
    status: "approved"
  },
  "PROJECT-05-04": {
    mediaId: "PROJECT-05-04",
    src: "/images/curated/projects/project-05/p05-04.jpeg",
    alt: "PROJECT-05-04 visual",
    origin: "project-series",
    status: "approved"
  },
  "PROJECT-06-TEMP-01": {
    mediaId: "PROJECT-06-TEMP-01",
    src: "/images/curated/projects/project-06/p06-temp-01.jpeg",
    alt: "PROJECT-06-TEMP-01 visual",
    origin: "references",
    status: "approved"
  },
};
