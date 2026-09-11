const fs = require('fs')

function fixFile(file) {
  let content = fs.readFileSync(file, 'utf8')
  
  // Replace keep-all and break-word with normal
  content = content.replace(/word-break:\s*keep-all;/g, 'word-break: normal;')
  content = content.replace(/overflow-wrap:\s*break-word;/g, 'overflow-wrap: normal;')
  
  fs.writeFileSync(file, content)
}

fixFile('src/index.css')
fixFile('src/App.css')
console.log('Fixed word-break')
