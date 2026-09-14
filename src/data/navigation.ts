export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  {
    label: 'Badkamers',
    href: '/complete-badkamer-renovatie/',
    children: [
      { label: 'Complete badkamer renovatie', href: '/complete-badkamer-renovatie/' },
      { label: 'Complete toilet renovatie', href: '/complete-toilet-renovatie/' },
      { label: 'Badkamer renovatie Almere', href: '/complete-badkamer-renovatie/almere/' },
    ]
  },
  {
    label: 'Tegelwerk',
    href: '/tegelwerk/',
    children: [
      { label: 'Overzicht Tegelwerk', href: '/tegelwerk/' },
      { label: 'Vloer tegelen', href: '/tegelwerk/vloer-tegelen/' },
      { label: 'Wand tegelen', href: '/tegelwerk/wand-tegelen/' },
      { label: 'Badkamer tegelen', href: '/tegelwerk/badkamer-tegelen/' },
      { label: 'Inloopdouche tegelen', href: '/tegelwerk/inloopdouche-tegelen/' },
      { label: 'Keuken tegelen', href: '/tegelwerk/keuken-tegelen/' },
      { label: 'Balkon tegelen', href: '/tegelwerk/balkon-tegelen/' },
      { label: 'Vloerverwarming en tegelen', href: '/tegelwerk/vloerverwarming-en-tegelen/' },
    ]
  },
  {
    label: 'Specialisaties',
    href: '/specialisaties/',
    children: [
      { label: 'Onze expertisegebieden', href: '/specialisaties/' },
      { label: 'Grootformaat tegels', href: '/specialisaties/grootformaat-tegels/' },
      { label: 'Mozaïek zetten', href: '/specialisaties/mozaiek-zetten/' },
      { label: 'Natuursteen', href: '/specialisaties/natuursteen/' },
      { label: 'Keramisch parket', href: '/specialisaties/keramisch-parket/' },
    ]
  },
  {
    label: 'Projecten',
    href: '/projecten/',
  },
  {
    label: 'Over ons',
    href: '/over-ons/',
  },
  {
    label: 'Contact',
    href: '/contact/',
  }
];

export const footerLinks = {
  badkamers: mainNav.find(n => n.label === 'Badkamers')?.children || [],
  tegelwerk: mainNav.find(n => n.label === 'Tegelwerk')?.children || [],
  specialisaties: mainNav.find(n => n.label === 'Specialisaties')?.children || [],
  informatie: [
    { label: 'Projecten', href: '/projecten/' },
    { label: 'Over ons', href: '/over-ons/' },
    { label: 'Kennisbank', href: '/kennisbank/' },
    { label: 'Contact', href: '/contact/' },
  ]
};
