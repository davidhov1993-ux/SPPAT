const fs = require('fs');
const oldPages = JSON.parse(fs.readFileSync('src/content/pages.json', 'utf8'));
const newPages = JSON.parse(fs.readFileSync('src/content/pages_new.json', 'utf8'));

// 1. Append the 2 new service routes
const inloop = newPages.find(p => p.url === '/tegelwerk/inloopdouche-tegelen/');
const vloerverwarming = newPages.find(p => p.url === '/tegelwerk/vloerverwarming-en-tegelen/');
if (inloop) oldPages.push(inloop);
if (vloerverwarming) oldPages.push(vloerverwarming);

// 2. Update Tegelwerk hub cards to include the 7 children
let tegelHub = oldPages.find(p => p.url === '/tegelwerk/');
if (tegelHub) {
  let section = tegelHub.sections.find(s => s.H2 === 'Onze tegelwerk diensten');
  if (section) {
    // Only append the missing ones, keep existing ones exactly as they are
    const newCards = [
      {
        "Title": "Inloopdouche tegelen",
        "Body": "Precisiewerk met watermanagement, perfect afschot en waterdichting.",
        "CTA": "Lees meer",
        "CTA URL": "/tegelwerk/inloopdouche-tegelen/"
      },
      {
        "Title": "Vloerverwarming en tegelen",
        "Body": "Vakkundige opbouw en afwerking van tegelwerk op vloerverwarming.",
        "CTA": "Lees meer",
        "CTA URL": "/tegelwerk/vloerverwarming-en-tegelen/"
      }
    ];
    newCards.forEach(c => {
      if (!section.cards.some(existing => existing['CTA URL'] === c['CTA URL'])) {
        section.cards.push(c);
      }
    });
  }
}

// 3. Update Specialisaties hub cards
// Wait, the Specialisaties hub already has all 4 children! I shouldn't rewrite them!
// The contract says: "Specialisaties hub visibly includes Onze expertisegebieden and all four children."
// Let's check if it already has all four in HEAD.

// 4. Contextual links for Grootformaat, Natuursteen and Mozaïek
['/specialisaties/grootformaat-tegels/', '/specialisaties/natuursteen/', '/specialisaties/mozaiek-zetten/'].forEach(url => {
  let p = oldPages.find(page => page.url === url);
  if (p) {
    if (!p.links) p.links = [];
    if (!p.links.some(existing => existing.anchor === 'Meer over tegelwerk')) {
      p.links.push({
        "placement": "SECTION 3",
        "anchor": "Meer over tegelwerk",
        "url": "/tegelwerk/"
      });
    }
  }
});

fs.writeFileSync('src/content/pages.json', JSON.stringify(oldPages, null, 2));
