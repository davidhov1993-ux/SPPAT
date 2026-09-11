const fs = require('fs')

let content = fs.readFileSync('scripts/prerender.mjs', 'utf8')

const siteUrlCode = `const SITE_URL = 'https://sppat.nl'

`

content = content.replace('const template = ', siteUrlCode + 'const template = ')

const ogTagsCode = `const absoluteUrl = SITE_URL + (page.url.endsWith('/') ? page.url : page.url + '/')
    const ogTags = \`
    <link rel="canonical" href="\${absoluteUrl}" />
    <meta property="og:title" content="\${escape(page.title)}" />
    <meta property="og:description" content="\${escape(page.description)}" />
    <meta property="og:url" content="\${absoluteUrl}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    \`
    html = html.replace('</head>', ogTags + '</head>')
`

content = content.replace('const target = page.url ===', ogTagsCode + '    const target = page.url ===')

fs.writeFileSync('scripts/prerender.mjs', content)
console.log('Done prerender')
