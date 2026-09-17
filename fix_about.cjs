const fs = require('fs');

let code = fs.readFileSync('src/pages/AboutPage.tsx', 'utf8');

code = code.replace(/alt="Vakmanschap en precisie bij Sppat"/g, 'alt="Vakmanschap in tegelwerk"');
code = code.replace(/col-start-5 col-span-8/g, 'col-start-5 col-span-6');

fs.writeFileSync('src/pages/AboutPage.tsx', code);
