const fs = require('fs');
let hub = fs.readFileSync('src/pages/TegelwerkHubPage.tsx', 'utf8');

if (!hub.includes('const pricingSection = page.sections.find(s => s.H2 && s.H2.includes("Prijzen"))')) {
  hub = hub.replace('const asymmetrical = page.sections.find(s => s.id === \'ASYMMETRICAL\')', 'const asymmetrical = page.sections.find(s => s.id === \'ASYMMETRICAL\')\n  const pricingSection = page.sections.find(s => s.H2 && s.H2.includes("Prijzen"))');
  fs.writeFileSync('src/pages/TegelwerkHubPage.tsx', hub);
}
