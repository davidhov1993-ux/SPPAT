const fs = require('fs')
let pages = JSON.parse(fs.readFileSync('src/content/pages.json', 'utf8'))

const almerePage = pages.find(p => p.url === '/complete-badkamer-renovatie/almere/')

almerePage.sections[0].Lead = "Of u nu woont in Almere Poort, Duin of Haven, wij kennen de lokale bouwstijlen. Wij onderscheiden ons door niet te kiezen voor de makkelijkste weg, maar voor de technisch beste oplossing. Rechte wanden, perfect afschot in uw inloopdouche en tegelwerk zonder hoogteverschillen."

almerePage.sections[1].Lead = "Het tegelwerk bepaalt de uiteindelijke uitstraling van de ruimte. Wij zijn gespecialiseerd in het verwerken van complexe materialen. Of u nu kiest voor de naadloze look van [grootformaat tegels](/specialisaties/grootformaat-tegels/), de detaillering van [mozaïek](/specialisaties/mozaiek-zetten/), of de organische uitstraling van [natuursteen](/specialisaties/natuursteen/), wij streven naar een technisch en visueel hoogwaardige verwerking."

almerePage.sections.push({
  id: "SECTION 4",
  H2: "Technische Precisie & Veelgestelde Vragen",
  Body: "De bouwkundige kwaliteit van een badkamer zit in het onzichtbare werk. Wij werken met gecertificeerde waterdichtingssystemen: kimband in alle aansluitingen, afdichtingspasta rondom doorvoeren en een uiterst vlakke voorbereiding van wand en vloer. Douchedrains en inbouwkranen worden op de millimeter nauwkeurig gepositioneerd zodat het tegelwerk naadloos aansluit op het afwateringssysteem."
})

almerePage.faq = [
  {
    question: "Installeren jullie ook inbouwkranen en nissen?",
    answer: "Ja. Inbouwkranen, regendouches uit het plafond en op maat gemaakte nissen (eventueel met LED-profielen) behoren tot onze standaard werkzaamheden bij luxe renovaties."
  },
  {
    question: "Regelen jullie ook het leidingwerk?",
    answer: "Ja, bij een complete renovatie passen wij al het benodigde leidingwerk en de afvoeren aan op het nieuwe ontwerp."
  }
]

fs.writeFileSync('src/content/pages.json', JSON.stringify(pages, null, 2))
console.log('Done almere data')
