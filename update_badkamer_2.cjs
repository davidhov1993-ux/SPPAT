const fs = require('fs')
let content = fs.readFileSync('src/pages/BadkamerRenovatiePage.tsx', 'utf8')

// Replace StickyMobileCta block
content = content.replace(/\{\/\* MOBILE UI ADDITION[\s\S]*?(?=<\/div>\s*\)\s*\})/, `<StickyMobileCta 
        isVisible={pastHero}
        label="Complete Badkamer Renovatie"
      />\n    `)

// Replace CTA block
content = content.replace(/\{\/\* SECTION 7: CONCLUSION & CTA \*\/\}[\s\S]*?(?=\{\/\* MOBILE UI ADDITION|<StickyMobileCta)/, `<CtaTypeA 
        sectionNum="04 / CONTACT"
        title={cta?.H2 || 'Start uw renovatie'}
        lead={cta?.Body || 'Neem contact op voor een technische opname.'}
        ctaUrl={cta?.URL || '/contact/'}
        ctaText={cta?.Button || 'Project bespreken'}
        imageSrc="/media/Generated Image September 10, 2026 - 8_39PM(1).jpg"
        imageAlt="Sppat afgerond badkamerproject gereed voor gebruik"
      />\n\n      `)

fs.writeFileSync('src/pages/BadkamerRenovatiePage.tsx', content)
console.log('Done badkamer 2')
