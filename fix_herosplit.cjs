const fs = require('fs')
let content = fs.readFileSync('src/components/HeroSplit.tsx', 'utf8')
content = content.replace('ctaUrl\n}, ref)', 'ctaUrl,\n  imageClassName = "almere-hero-img"\n}, ref)')
fs.writeFileSync('src/components/HeroSplit.tsx', content)
