export const mediaMapping: Record<string, {
  mediaId: string;
  src?: string;
  alt: string;
  status: "approved" | "gap" | "provisional";
  desktopSrc?: string;
  tabletSrc?: string;
  mobileSrc?: string;
  objectPosition?: string;
}> = {
  // HOME
  // Owner correction: all Home visuals use the existing public/media library.
  "HOME-HERO": {"mediaId": "HOME-HERO", "src": "/media/экстра-крупный_формат.jpg", "alt": "Badkamer met inloopdouche, grote wandtegels en een zwevend wastafelblad", "status": "approved", "objectPosition": "55% 52%"},
  "HOME-BADK": {"mediaId": "HOME-BADK", "src": "/media/дизайн_тропик.jpg", "alt": "Badkamer met groene wandtegels en houtlook afwerking", "status": "approved"},
  "HOME-TEGEL": {"mediaId": "HOME-TEGEL", "src": "/media/большая_гостиная-60х120см.jpg", "alt": "Doorlopende tegelvloer met lange voeglijnen in een woonruimte", "status": "approved"},
  "HOME-TECH": {"mediaId": "HOME-TECH", "src": "/media/лазер-идеальный_шов.jpg", "alt": "Levelingclips en laserlijn bij een tegelvoeg", "status": "approved"},
  // Existing media-review assignment for the final CTA; no repeated hero.
  "HOME-CTA": {"mediaId": "HOME-CTA", "src": "/media/120х60_раковина.jpg", "alt": "Wastafelblad van keramische platen met een wandkraan", "status": "approved"},

  "HOME-PA-DOM": {"mediaId": "HOME-PA-DOM", "src": "/media/дизайн_ванная_7х19см-раковина(из_керамогранита).jpg", "alt": "Badkamer met grote wandtegels en een wastafelblad van keramiek", "status": "approved"},

  "HOME-PB-DOM": {"mediaId": "HOME-PB-DOM", "src": "/media/ванная-ниша-лед-мозаика-120ъ60см.jpeg", "alt": "Badkamer met verlichte nis en mozaïekaccenten", "status": "approved"},

  "HOME-PC-DOM": {"mediaId": "HOME-PC-DOM", "src": "/media/раковина(из_широкоформатной плитки).jpg", "alt": "Keramisch wastafelblad met donkere wand en houtstructuur", "status": "approved"},

  // BADKAMERS
  "BADK-HERO": {"mediaId": "BADK-HERO", "src": "/media/душевая_премиум-120х60.jpg", "alt": "Badkamer met inloopdouche, nis en wastafelmeubel", "status": "approved"},
  "BADK-TECH": {"mediaId": "BADK-TECH", "src": "/production/SPPAT-SVC-substrate-detail-desktop.webp", "desktopSrc": "/production/SPPAT-SVC-substrate-detail-desktop.webp", "tabletSrc": "/production/SPPAT-SVC-substrate-detail-tablet.webp", "mobileSrc": "/production/SPPAT-SVC-substrate-detail-mobile.webp", "alt": "Voorbereiding van een vloer voor tegelwerk", "status": "approved"},
  "BADK-DETAILS": {"mediaId": "BADK-DETAILS", "src": "/media/ниша-запил-45-мозаика.jpg", "alt": "Betegelde nis met verlichting en afgewerkte tegelranden", "status": "approved"},
  "BADK-OPT-1": {"mediaId": "BADK-OPT-1", "src": "/media/ниша-2.jpg", "alt": "Betegelde inbouwnis met strakke lijnen", "status": "approved"},
  "BADK-OPT-2": {"mediaId": "BADK-OPT-2", "src": "/media/душевой_спад.jpg", "alt": "Inloopdouche met douchegoot en afschot", "status": "approved"},
  "BADK-OPT-3": {"mediaId": "BADK-OPT-3", "src": "/media/экстра-крупный_формат.jpg", "alt": "Grootformaat tegels in een moderne badkamer", "status": "approved"},
  "BADK-TOILET": {"mediaId": "BADK-TOILET", "src": "/media/дуалет-раковина-ниша-лед.jpg", "alt": "Complete toiletrenovatie met inbouwreservoir", "status": "approved"},

  // ALMERE
  "ALM-HERO": {"mediaId": "ALM-HERO", "src": "/media/ванная-ниша-лед-мозаика-120ъ60см.jpeg", "alt": "Badkamer met verlichte nis en mozaïekaccenten", "status": "approved"},

  // TEGELWERK
  "TEGEL-HERO": {"mediaId": "TEGEL-HERO", "src": "/media/большая_гостиная-60х120см.jpg", "alt": "Doorlopende tegelvloer met lange voeglijnen in een woonruimte", "status": "approved", "objectPosition": "50% 60%"},
  "TEGEL-PREM-A": {"mediaId": "TEGEL-PREM-A", "src": "/media/раковина(из_широкоформатной плитки).jpg", "alt": "Keramisch wastafelblad en aansluiting op wandmaterialen", "status": "approved"},
  "TEGEL-PREM-B": {"mediaId": "TEGEL-PREM-B", "src": "/media/под_паркет(ламинат).jpg", "alt": "Houtlook tegels met lange planklijnen en smalle voegen", "status": "approved"},

  // SPECIALISATIES
  "SPEC-XXL": {"mediaId": "SPEC-XXL", "src": "/media/120х60_раковина.jpg", "alt": "Grote keramische platen en een zwevend wastafelblad", "status": "approved"},
  "SPEC-MOZ": {"mediaId": "SPEC-MOZ", "src": "/media/mozaik1.jpg", "alt": "Mozaïektegels met een regelmatig raster", "status": "approved"},
  "SPEC-PARKET": {"mediaId": "SPEC-PARKET", "src": "/media/под_паркет(ламинат).jpg", "alt": "Keramische plankvloer met houtstructuur", "status": "approved"},

  "SPEC-STONE-A": {"mediaId": "SPEC-STONE-A", "src": "/media/хз_что_с_этим_делать.jpg", "alt": "Detail van natuursteen met poriën en aders", "status": "approved"},

  "SPEC-STONE-B": {"mediaId": "SPEC-STONE-B", "src": "/media/подрез_45.jpg", "alt": "Verstekhoek in een natuurstenen afwerking", "status": "approved"},

  // PROJECTEN
  "P01-1": { mediaId: "P01-1", src: "/references/Новая папка/WhatsApp Image 2025-02-26 at 18.20.13.jpeg", alt: "Betegelde trap met natuursteenpatroon onder een raam", status: "approved" },
  "P01-2": { mediaId: "P01-2", src: "/references/Новая папка/WhatsApp Image 2025-02-26 at 18.20.16.jpeg", alt: "Hal met tegelvloer en een betegelde trap", status: "approved" },
  "P01-3": { mediaId: "P01-3", src: "/references/Новая папка/WhatsApp Image 2025-05-30 at 21.24.01 (4).jpeg", alt: "Woonruimte met doorlopende marmerlook tegelvloer", status: "approved" },

  "P02-1": { mediaId: "P02-1", src: "/references/Новая папка 2/WhatsApp Image 2025-05-30 at 21.24.08.jpeg", alt: "Badkamer met vrijstaand bad, wandcloset en marmerlook tegels", status: "approved" },
  "P02-2": { mediaId: "P02-2", src: "/references/Новая папка 2/WhatsApp Image 2025-05-30 at 21.24.08 (1).jpeg", alt: "Wandcloset en zwarte handdoekradiator tussen marmerlook wanden", status: "approved" },
  "P02-3": { mediaId: "P02-3", src: "/references/Новая папка 2/WhatsApp Image 2025-05-30 at 21.24.08 (2).jpeg", alt: "Inloopdouche met grote wandtegels en zwarte kraan", status: "approved" },
  "P02-4": { mediaId: "P02-4", src: "/references/Новая папка 2/WhatsApp Image 2025-05-30 at 21.24.08 (3).jpeg", alt: "Badkamerdeur met aansluitende vloer- en wandtegels", status: "approved" },
  "P02-5": { mediaId: "P02-5", src: "/references/Новая папка 2/WhatsApp Image 2025-05-30 at 21.24.09.jpeg", alt: "Betegelde badkamerwand met zwarte handdoekradiator", status: "approved" },

  "P03-DOM": { mediaId: "P03-DOM", src: "/references/Новая папка 3/WhatsApp Image 2025-02-26 at 18.20.06.jpeg", alt: "Badkamer met ligbad, wandcloset en marmerlook wandtegels", status: "approved" },
  "P03-INS": { mediaId: "P03-INS", src: "/references/Новая папка 3/WhatsApp Image 2025-05-30 at 21.24.02 (5).jpeg", alt: "Handdoekradiator en wandcloset bij een marmerlook tegelwand", status: "approved" },
  "P03-EVI": { mediaId: "P03-EVI", src: "/references/Новая папка 3/WhatsApp Image 2025-05-30 at 21.24.01 (6).jpeg", alt: "Wastafelmeubel en ligbad met doorlopende wandbetegeling", status: "approved" },

  "P04-DETA": { mediaId: "P04-DETA", src: "/references/Новая папка 4/WhatsApp Image 2025-05-30 at 21.24.04 (2).jpeg", alt: "Hal met tegelvloer, witte deuren en zwarte omlijsting", status: "approved" },
  "P04-DETB": { mediaId: "P04-DETB", src: "/references/Новая папка 4/WhatsApp Image 2025-05-30 at 21.24.04 (4).jpeg", alt: "Doorlopende tegelvloer tussen keuken en trap", status: "approved" },
  "P04-CONT": { mediaId: "P04-CONT", src: "/references/Новая папка 4/WhatsApp Image 2025-05-30 at 21.24.03 (6).jpeg", alt: "Keuken met witte bovenkasten, donkere achterwand en tegelvloer", status: "approved" },
  "P04-E1": { mediaId: "P04-E1", src: "/references/Новая папка 4/WhatsApp Image 2025-02-26 at 18.20.07.jpeg", alt: "Tegelvloer bij de trap en glazen binnendeuren", status: "approved" },
  "P04-E2": { mediaId: "P04-E2", src: "/references/Новая папка 4/WhatsApp Image 2025-05-30 at 21.24.04 (3).jpeg", alt: "Keuken met tegelvloer en uitzicht naar het raam", status: "approved" },
  "P04-E3": { mediaId: "P04-E3", src: "/references/Новая папка 4/WhatsApp Image 2025-05-30 at 21.24.04 (6).jpeg", alt: "Tegelvloer bij een brede doorgang tussen kamers", status: "approved" },
  "P04-E4": { mediaId: "P04-E4", src: "/references/Новая папка 4/WhatsApp Image 2025-05-30 at 21.24.04 (7).jpeg", alt: "Betegelde entree met donkere wandpanelen", status: "approved" },
  "P04-E5": { mediaId: "P04-E5", src: "/references/Новая папка 4/WhatsApp Image 2025-05-30 at 21.24.02 (4).jpeg", alt: "Ruimte met marmerlook vloertegels en plafondverlichting", status: "approved" },

  "P05-DOM": { mediaId: "P05-DOM", src: "/references/Новая папка 5/WhatsApp Image 2025-05-30 at 21.24.07 (6).jpeg", alt: "Betegelde trap en vloer in een lichte hal", status: "approved" },
  "P05-INS": { mediaId: "P05-INS", src: "/references/Новая папка 5/WhatsApp Image 2025-05-30 at 21.24.07 (1).jpeg", alt: "Gebogen trap met tegelafwerking en metalen leuning", status: "approved" },
  "P05-E1": { mediaId: "P05-E1", src: "/references/Новая папка 5/WhatsApp Image 2025-05-30 at 21.24.07 (4).jpeg", alt: "Doorlopende tegelvloer tussen zitruimte en eetkamer", status: "approved" },
  "P05-E2": { mediaId: "P05-E2", src: "/references/Новая папка 5/WhatsApp Image 2025-05-30 at 21.24.07 (9).jpeg", alt: "Eetkamer met tegelvloer en een gebogen raampartij", status: "approved" },

  "MW-01": { mediaId: "MW-01", src: "/references/ванная-1.jpeg", alt: "Badkamer met goudkleurig mozaïek en wit sanitair", status: "approved" },
  "MW-02": { mediaId: "MW-02", src: "/references/ванная-туалет.jpeg", alt: "Ligbad en wandcloset bij donkere marmerlook wandtegels", status: "approved" },
  "MW-03": { mediaId: "MW-03", src: "/references/ванная.JPG", alt: "Ingebouwd ligbad tijdens de afwerking van een badkamer", status: "approved" },
  "MW-04": { mediaId: "MW-04", src: "/references/вання-120х60.jpeg", alt: "Badkamer met ligbad, ronde spiegel en verlichte nis", status: "approved" },
  "MW-05": { mediaId: "MW-05", src: "/references/вання.jpeg", alt: "Badkamer met wandcloset, wastafel en marmerlook wandtegels", status: "approved" },
  "MW-06": { mediaId: "MW-06", src: "/references/душ с туалетом.JPG", alt: "Betegelde doucheruimte met inbouwdelen tijdens de afwerking", status: "approved" },
  "MW-07": { mediaId: "MW-07", src: "/references/душевая_туалет_раковина.jpeg", alt: "Compacte badkamer met douche, wandcloset en wastafel", status: "approved" },
  "MW-08": { mediaId: "MW-08", src: "/references/кухня.jpeg", alt: "Keuken met houten kasten en een betegelde achterwand", status: "approved" },
  "MW-09": { mediaId: "MW-09", src: "/references/калидор_60х60.jpeg", alt: "Hal met tegelvloer en witte schuifdeuren", status: "approved" },
  "MW-10": { mediaId: "MW-10", src: "/references/джакузи.JPG", alt: "Hoekbad met houtlook tegels en donkere wandnis", status: "approved" },
  "MW-11": { mediaId: "MW-11", src: "/references/душ-большой формат-3х1,5м.jpg", alt: "Douchewand met grootformaat marmerlook platen", status: "approved" },
  "MW-12": { mediaId: "MW-12", src: "/references/душевая кабинка.jpg", alt: "Glazen douchecabine met marmerlook wandtegels", status: "approved" },
  "MW-13": { mediaId: "MW-13", src: "/references/душевой спад.jpg", alt: "Betegelde douchevloer met een afvoer langs de wand", status: "approved" },

  // OVER ONS
  "ABOUT-01": { mediaId: "ABOUT-01", src: "/images/raw/Generated Image September 10, 2026 - 11_53PM.jpg", alt: "Handen met een getande lijmkam die tegellijm op een wand verdelen", objectPosition: "50% 50%", status: "approved" },

  // KENNISBANK
  "KB-WATERDICHTING": {"mediaId": "KB-WATERDICHTING", "src": "/images/raw/Generated Image September 10, 2026 - 8_27PM.jpg", "alt": "Waterdichting bij de aansluiting tussen wand en vloer", "status": "approved"},
  "KB-LIPPAGE": {"mediaId": "KB-LIPPAGE", "src": "/media/лазер-идеальный_шов.jpg", "alt": "Levelingclip en laserlijn bij een tegelvoeg", "status": "approved"},
  "KB-INSPECTIELUIK": { mediaId: "KB-INSPECTIELUIK", alt: "Inspectieluik", status: "gap" },
  "KB-EPOXY": {"mediaId": "KB-EPOXY", "src": "/media/запил-45-1.jpg", "alt": "Kruising van voegen tussen tegels", "status": "approved"},
};
