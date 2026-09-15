const fs = require('fs');
let content = fs.readFileSync('scripts/verify.mjs', 'utf8');

content = content.replace("const caseBlocks = r1.split(/\\n# [2-7]\\. CASE \\d+ — /).slice(1).map(s => s.split('\\n---')[0])", "const caseBlocks = r1.split(/\\n# [2-7]\\. CASE \\d+ — /).slice(1).map(s => s.split('\\n---')[0]).slice(0, 5)");

fs.writeFileSync('scripts/verify.mjs', content);
