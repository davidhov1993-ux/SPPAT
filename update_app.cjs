const fs = require('fs')
let content = fs.readFileSync('src/App.tsx', 'utf8')

if (!content.includes('const SITE_URL')) {
  content = content.replace('const pages = pageData as Page[]', 'const SITE_URL = "https://sppat.nl"\nconst pages = pageData as Page[]')
}

// Inside useEffect, replace canonical logic
content = content.replace(/let canonical = document\.querySelector\('link\[rel="canonical"\]'\)[\s\S]*?canonical\.setAttribute\('href', page\.url\)/, `let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    const absoluteUrl = SITE_URL + (page.url.endsWith('/') ? page.url : page.url + '/')
    canonical.setAttribute('href', absoluteUrl)`)

fs.writeFileSync('src/App.tsx', content)
console.log('Done app')
