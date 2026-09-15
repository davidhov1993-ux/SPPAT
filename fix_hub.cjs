const fs = require('fs');
let hub = fs.readFileSync('src/pages/TegelwerkHubPage.tsx', 'utf8');
hub = hub.replace(/mediaId=\{technicalProof.mediaId\!\}/g, 'mediaId={technicalProof.mediaId as string}');
hub = hub.replace(/mediaId=\{asymmetrical.mediaId\!\}/g, 'mediaId={asymmetrical.mediaId as string}');
fs.writeFileSync('src/pages/TegelwerkHubPage.tsx', hub);

['src/pages/SpecialisatiesNestedPage.tsx', 'src/pages/TegelwerkServicePage.tsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/mediaId=\{section.mediaId\!\}/g, 'mediaId={section.mediaId as string}');
  fs.writeFileSync(file, content);
});
