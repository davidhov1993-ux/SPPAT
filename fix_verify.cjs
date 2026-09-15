const fs = require('fs');
let content = fs.readFileSync('scripts/verify.mjs', 'utf8');

content = content.replace("const expectedCases = caseBlocks.map(block => block.match(/\\*\\*Suggested slug:\\*\\* `(.*?)`/)[1])", "const expectedCases = caseBlocks.map(block => `/projecten/${block.match(/\\*\\*Suggested slug:\\*\\* \\`(.*?)\\`/)[1]}/`)");

fs.writeFileSync('scripts/verify.mjs', content);
