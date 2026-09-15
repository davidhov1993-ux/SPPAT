const fs = require('fs');
let content = fs.readFileSync('scripts/verify.mjs', 'utf8');

content = content.replace(
  "function check(id, message, fn) { try { fn(); records.push({id, status:'PASS', message}) } catch (error) { records.push({id,status:'FAIL',message:error.message}); } }",
  "function check(id, message, fn) { try { fn(); records.push({id, status:'PASS', message}) } catch (error) { if(error.message && error.message.startsWith('BLOCKED')) { records.push({id, status:'BLOCKED', message:error.message}) } else { records.push({id,status:'FAIL',message:error.message}); } } }"
);

fs.writeFileSync('scripts/verify.mjs', content);
