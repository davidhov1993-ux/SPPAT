const fs = require('fs');
let hub = fs.readFileSync('src/pages/TegelwerkHubPage.tsx', 'utf8');
hub = hub.replace(/text=\{technicalProof\.Body\}/g, 'text={technicalProof.Body as string}');
hub = hub.replace(/text=\{asymmetrical\.Body\}/g, 'text={asymmetrical.Body as string}');
fs.writeFileSync('src/pages/TegelwerkHubPage.tsx', hub);
