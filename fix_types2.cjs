const fs = require('fs');
let types = fs.readFileSync('src/content/types.ts', 'utf8');
types = types.replace(/cards\?: Card\[\]/, "cards?: Card[]; mediaId?: string");
fs.writeFileSync('src/content/types.ts', types);

let hub = fs.readFileSync('src/pages/TegelwerkHubPage.tsx', 'utf8');
hub = hub.replace(/technicalProof.mediaId as string/g, "technicalProof.mediaId!");
hub = hub.replace(/asymmetrical.mediaId as string/g, "asymmetrical.mediaId!");
fs.writeFileSync('src/pages/TegelwerkHubPage.tsx', hub);

['src/pages/SpecialisatiesNestedPage.tsx', 'src/pages/TegelwerkServicePage.tsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\(section.mediaId as string\)/g, 'section.mediaId!');
  fs.writeFileSync(file, content);
});

