const fs = require('fs')

let content = fs.readFileSync('src/pages/TegelwerkHubPage.tsx', 'utf8')

// Add imports
if (!content.includes('CtaTypeB')) {
  content = content.replace("import CtaArrow from '../components/CtaArrow'", "import CtaArrow from '../components/CtaArrow'\nimport CtaTypeB from '../components/CtaTypeB'\nimport StickyMobileCta from '../components/StickyMobileCta'\nimport HeroSplit from '../components/HeroSplit'")
}

// Replace StickyMobileCta block
content = content.replace(/\{\/\* STICKY MOBILE CTA BAR \*\/\}[\s\S]*?(?=<\/div>\s*<\/div>\s*\)\s*\})/, `<StickyMobileCta 
        isVisible={pastHero}
        label="Tegelwerk & Installatie"
      />\n    `)

// Replace CTA block
content = content.replace(/\{\/\* SECTION 4: CONCLUSION & CTA[^\}]*\}\s*<section className="tegel-hub-cta-section"[^>]*>[\s\S]*?<\/section>/, `<CtaTypeB 
        sectionNum="03 / CONTACT"
        title={cta?.H2 || 'Uw tegelproject bespreken?'}
        body={cta?.Body || 'Wij beoordelen de ondergrond en bespreken de mogelijkheden qua formaten en legverbanden.'}
        ctaUrl={cta?.URL || '/contact/'}
        ctaText={cta?.Button || 'Project bespreken'}
      />`)

// Replace Hero
content = content.replace(/\{\/\* SECTION 1: HERO[^\}]*\}\s*<section ref=\{heroRef\} className="tegel-hub-hero-section"[^>]*>[\s\S]*?<\/section>/, `<HeroSplit 
        ref={heroRef}
        eyebrow={hero.Eyebrow}
        title={hero.H1}
        body={hero.Body}
        ctaUrl={hero['Primary CTA URL']}
        ctaText={hero['Primary CTA'] || 'Project bespreken'}
        imageSrc="/media/Generated Image September 11, 2026 - 11_48AM.jpg"
        imageAlt={hero.ALT || 'Getegelde vloer in moderne woonruimte'}
      />`)

fs.writeFileSync('src/pages/TegelwerkHubPage.tsx', content)
console.log('Done hub')
