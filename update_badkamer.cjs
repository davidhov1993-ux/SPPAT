const fs = require('fs')

let content = fs.readFileSync('src/pages/BadkamerRenovatiePage.tsx', 'utf8')

// Add imports
if (!content.includes('CtaTypeA')) {
  content = content.replace("import CtaArrow from '../components/CtaArrow'", "import CtaArrow from '../components/CtaArrow'\nimport CtaTypeA from '../components/CtaTypeA'\nimport StickyMobileCta from '../components/StickyMobileCta'\nimport HeroSplit from '../components/HeroSplit'")
}

// Replace StickyMobileCta block
content = content.replace(/\{\/\* STICKY MOBILE CTA BAR \*\/\}[\s\S]*?(?=<\/div>\s*\)\s*\})/, `<StickyMobileCta 
        isVisible={pastHero}
        label="Complete Badkamer Renovatie"
      />\n    `)

// Replace CTA block
content = content.replace(/\{\/\* SECTION 5: CTA[^\}]*\}\s*<section className="badkamer-cta-section"[^>]*>[\s\S]*?<\/section>/, `<CtaTypeA 
        sectionNum="03 / CONTACT"
        title="Start uw renovatie"
        subtitle={cta?.H2 || 'Klaar voor de volgende stap?'}
        lead={cta?.Body || 'Neem contact op voor een technische opname. Wij beoordelen de haalbaarheid van uw wensen en zorgen voor een perfecte uitvoering.'}
        ctaUrl={cta?.URL || '/contact/'}
        ctaText={cta?.Button || 'Project bespreken'}
        imageSrc="/media/Generated Image September 10, 2026 - 7_58PM(1).jpg"
        imageAlt="Gerenoveerde badkamer met verfijnd tegelwerk en op maat gemaakte elementen"
      />`)

// Replace Hero
content = content.replace(/\{\/\* SECTION 1: HERO[^\}]*\}\s*<section ref=\{heroRef\} className="badkamer-hero-section"[^>]*>[\s\S]*?<\/section>/, `<HeroSplit 
        ref={heroRef}
        eyebrow={hero.Eyebrow}
        title={hero.H1}
        body={hero.Body}
        ctaUrl={hero['Primary CTA URL']}
        ctaText={hero['Primary CTA']}
        imageSrc="/media/Generated Image September 10, 2026 - 7_57PM(1).jpg"
        imageAlt={hero.ALT || 'Overzichtsfoto van een compleet gerenoveerde badkamer met inloopdouche'}
      />`)

fs.writeFileSync('src/pages/BadkamerRenovatiePage.tsx', content)
console.log('Done badkamer')
