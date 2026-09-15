const fs = require('fs');
const mediaJson = JSON.parse(fs.readFileSync('src/content/media.json', 'utf8'));
const referenceIds = mediaJson.filter(m => m.provenance === 'licensed-reference').map(m => m.id);

let mediaTs = fs.readFileSync('src/data/media.ts', 'utf8');

// Replace any occurrence of a referenceId with undefined
referenceIds.forEach(id => {
  const regex = new RegExp(`'${id}'`, 'g');
  mediaTs = mediaTs.replace(regex, 'undefined');
});

fs.writeFileSync('src/data/media.ts', mediaTs);
console.log(referenceIds.join(', '));
