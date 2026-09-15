const fs = require('fs');
let content = fs.readFileSync('scripts/verify.mjs', 'utf8');
content = content.replace(
  "const failures=records.filter(r=>r.status==='FAIL')",
  "const failures=records.filter(r=>r.status==='FAIL'); const blocked=records.filter(r=>r.status==='BLOCKED'); for(const b of blocked) console.warn(b.id, b.message);"
);
content = content.replace(
  "console.log(`${records.length-failures.length}/${records.length} final-spec assertions PASS across ${routes.length} routes.`)",
  "console.log(`${records.length-failures.length-blocked.length}/${records.length} final-spec assertions PASS across ${routes.length} routes. ${blocked.length} BLOCKED.`); if (failures.length) process.exitCode = 1;"
);
content = content.replace("if(failures.length)process.exitCode=1", "");
fs.writeFileSync('scripts/verify.mjs', content);
