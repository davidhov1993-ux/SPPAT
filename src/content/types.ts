export type Link = { anchor: string; url: string; placement: string }
export type Card = { Title: string; Body?: string; CTA?: string; 'CTA URL': string }
export type Block = { id?: string; Type?: string; Eyebrow?: string; H1?: string; H2?: string; H3?: string; Lead?: string; Body?: string; CTA?: string; 'CTA URL'?: string; 'Primary CTA'?: string; 'Primary CTA URL'?: string; Button?: string; URL?: string; Visual?: string; ALT?: string; bullets?: string[]; cards?: Card[]; Filters?: string }
export type Page = { name: string; url: string; title: string; description: string; hero: Block; sections: Block[]; links: Link[]; faq: {question: string; answer: string}[]; cta?: Block }
export type Project = { title: string; location: string; services: string[]; image: string; alt: string; category: 'Badkamers' | 'Tegelwerk' | 'Specialisaties' }
