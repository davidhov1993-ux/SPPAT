const fs = require('fs')
let content = fs.readFileSync('src/App.tsx', 'utf8')

// Add imports
content = content.replace("import SpecialisatiesPage from './pages/SpecialisatiesPage'", "import SpecialisatiesHubPage from './pages/SpecialisatiesHubPage'\nimport SpecialisatiesNestedPage from './pages/SpecialisatiesNestedPage'\nimport ToiletRenovatiePage from './pages/ToiletRenovatiePage'")

// Update routing logic
content = content.replace(/if \(\s*page\.url\.startsWith\('\/complete-badkamer-renovatie'\) \|\|\s*page\.url === '\/complete-toilet-renovatie\/'\s*\) \{\s*return <CommercialPage page=\{page\} \/>\s*\}/, `if (page.url === '/complete-toilet-renovatie/') {
    return <ToiletRenovatiePage page={page} />
  }
  if (page.url.startsWith('/complete-badkamer-renovatie')) {
    return <CommercialPage page={page} />
  }`)

content = content.replace(/if \(page\.url\.startsWith\('\/specialisaties\/'\)\) \{\s*return <SpecialisatiesPage page=\{page\} \/>\s*\}/, `if (page.url === '/specialisaties/') {
    return <SpecialisatiesHubPage page={page} />
  }
  if (page.url.startsWith('/specialisaties/')) {
    return <SpecialisatiesNestedPage page={page} />
  }`)

fs.writeFileSync('src/App.tsx', content)
console.log('Routes updated')
