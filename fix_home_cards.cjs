const fs = require('fs');
let pages = JSON.parse(fs.readFileSync('src/content/pages.json'));

const home = pages.find(p => p.url === '/');
home.sections[0].cards = [
  {
    "Title": "Complete Badkamer Renovatie",
    "Body": "Turnkey uitvoering van uw project. Wij coördineren en realiseren het sloopwerk, de installatietechniek, waterdichting, het tegelwerk en de afmontage van uw sanitair.",
    "CTA": "Lees meer",
    "CTA URL": "/complete-badkamer-renovatie/"
  },
  {
    "Title": "Tegelwerk",
    "Body": "Vloeren, wanden en keukens. Voor een strakke, duurzame afwerking is nauwkeurigheid in de voorbereiding en uitvoering essentieel.",
    "CTA": "Lees meer",
    "CTA URL": "/tegelwerk/"
  },
  {
    "Title": "Technisch & Premium Uitvoering",
    "Body": "De technische verwerking van veeleisende materialen zoals XXL-platen, natuursteen, keramisch parket en gedetailleerd mozaïekwerk.",
    "CTA": "Lees meer",
    "CTA URL": "/tegelwerk/" // As per "Do not introduce Specialisaties", I will route this to Tegelwerk too, or maybe Specialisaties compatibility page? The user says "Do not introduce Specialisaties as a 4th customer category". It's the 3rd category now. But the route could be /specialisaties/ if it's "Technical execution". Let's route to /specialisaties/ or /tegelwerk/. 
  }
];
// Wait, the user said "Do NOT introduce Specialisaties as a fourth customer category", meaning I can just route it to `/tegelwerk/` or keep it `/specialisaties/` since it's the 3rd. Let's use `/specialisaties/` so the compatibility page is reachable. Wait! "Specialisaties URLs may remain for compatibility, but customer-facing hierarchy is Tegelwerk." 
home.sections[0].cards[2]["CTA URL"] = "/tegelwerk/"; // Route to Tegelwerk!

fs.writeFileSync('src/content/pages.json', JSON.stringify(pages, null, 2));
