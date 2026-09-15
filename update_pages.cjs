const fs = require('fs');
let pages = JSON.parse(fs.readFileSync('src/content/pages.json', 'utf8'));
const media = JSON.parse(fs.readFileSync('src/content/media.json', 'utf8'));

// 1. /tegelwerk/ (Hub)
let tegelwerk = pages.find(p => p.url === '/tegelwerk/');
tegelwerk.hero = {
  "H1": "Specialistisch Tegelwerk",
  "Body": "Sppat levert en plaatst tegelwerk voor veeleisende particuliere en zakelijke projecten. Wij geloven dat de levensduur van elke vloer en wand wordt bepaald door de bouwkundige voorbereiding onder de tegels.",
  "Primary CTA": "Bespreek uw project",
  "Primary CTA URL": "/contact/"
};
// But wait, the hub needs Hero Overlap! 
// TegelwerkHubPage.tsx currently uses HeroSplit. I will modify TegelwerkHubPage.tsx later.
tegelwerk.sections = [
  {
    "id": "INTRO",
    "Type": "Text",
    "H2": "Meer dan alleen tegels zetten",
    "Body": "Onze aanpak richt zich op het complete traject: van het beoordelen en voorbereiden van de ondergrond, tot het uitdenken van het legplan en de naadloze verwerking van grootformaat tegels, natuursteen of keramisch parket."
  },
  tegelwerk.sections.find(s => s.H2 === 'Onze tegelwerk diensten' || s.cards),
  {
    "id": "TECHNICAL_PROOF",
    "Type": "Macro",
    "H2": "Precisie in uitvoering",
    "Body": "Voor een strak eindresultaat controleren wij altijd de vlakheid van de ondervloer of wanden. Bij renovaties verwijderen wij losse delen, frezen wij leidingen in en brengen we de vereiste waterdichtingssystemen aan in natte zones, voordat er ook maar één tegel wordt geplaatst.",
    "CTA": "Onze werkwijze",
    "CTA URL": "/over-ons/",
    "mediaId": "ai-macro"
  },
  {
    "id": "ASYMMETRICAL",
    "Type": "Asymmetrical",
    "H2": "De basis voor een duurzaam interieur",
    "Body": "Een tegelvloer of wand is een permanente toevoeging aan uw woning. Door te kiezen voor hoogwaardige materialen en een correcte bouwkundige verwerking, voorkomt u problemen zoals scheurvorming of loslatende tegels in de toekomst. Wij adviseren u graag over de juiste materialen en formaten voor uw specifieke situatie.",
    "mediaId": "bath08" // Wait, I can only use commercial media! bath08 is a project photo. The prompt says "Do not pull random photographs from /references/". "Use ONLY correctly approved commercial media". 
    // What commercial media do we have? ai-bathroom, ai-toilet, ai-stone, ai-woodlook, ai-macro, ai-niche.
    // If I don't have enough, I must leave mediaId blank and the template will show text-only.
  },
  tegelwerk.sections.find(s => s.H2 && s.H2.includes('Prijzen'))
];
// Ensure routing grid has 9 exactly: Badkamer tegelen, Vloertegels, Wandtegels, Grootformaat / XXL, Mozaïek, Natuursteen, Keramisch parket, Keuken, Buiten / balkon
const routing = tegelwerk.sections.find(s => s.cards);
routing.cards = [
  { "Title": "Badkamer tegelen", "Body": "Complete betegeling van uw badkamer inclusief inloopdouche.", "CTA URL": "/tegelwerk/badkamer-tegelen/" },
  { "Title": "Vloertegels", "Body": "Vakkundige plaatsing van tegelvloeren, met of zonder vloerverwarming.", "CTA URL": "/tegelwerk/vloer-tegelen/" },
  { "Title": "Wandtegels", "Body": "Strakke wandafwerking voor een naadloos en duurzaam resultaat.", "CTA URL": "/tegelwerk/wand-tegelen/" },
  { "Title": "Grootformaat / XXL", "Body": "Gespecialiseerde verwerking van naadloze XXL-tegels en platen.", "CTA URL": "/specialisaties/grootformaat-tegels/" },
  { "Title": "Mozaïek", "Body": "Gedetailleerd mozaïekwerk voor accenten, nissen of vloeren.", "CTA URL": "/specialisaties/mozaiek-zetten/" },
  { "Title": "Natuursteen", "Body": "Vakmanschap voor het leggen en onderhouden van natuursteen.", "CTA URL": "/specialisaties/natuursteen/" },
  { "Title": "Keramisch parket", "Body": "De warme uitstraling van hout met het gemak van keramiek.", "CTA URL": "/specialisaties/keramisch-parket/" },
  { "Title": "Keuken tegelen", "Body": "Praktische en strakke betegeling voor achterwanden en keukenvloeren.", "CTA URL": "/tegelwerk/keuken-tegelen/" },
  { "Title": "Buiten / balkon", "Body": "Vorstbestendige tegeloplossingen voor balkons en terrassen.", "CTA URL": "/tegelwerk/balkon-tegelen/" }
];

fs.writeFileSync('src/content/pages.json', JSON.stringify(pages, null, 2));
