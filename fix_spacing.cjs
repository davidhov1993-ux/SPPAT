const fs = require('fs')

function updateCSS(file) {
  let content = fs.readFileSync(file, 'utf8')
  
  if (file.includes('index.css')) {
    content = content.replace(/--spacing-xs:[^;]*;/g, '')
    content = content.replace(/--spacing-sm:[^;]*;/g, '')
    content = content.replace(/--spacing-md:[^;]*;/g, '')
    content = content.replace(/--spacing-lg:[^;]*;/g, '')
    content = content.replace(/--spacing-xl:[^;]*;/g, '')
    
    // Add 3xl and 4xl if missing
    if (!content.includes('--space-3xl')) {
      content = content.replace('--space-2xl: 80px;', '--space-2xl: 80px;\n    --space-3xl: 120px;\n    --space-4xl: 160px;')
    }
  }

  // Replace usages
  content = content.replace(/var\(--spacing-xs\)/g, 'var(--space-sm)')
  content = content.replace(/var\(--spacing-sm\)/g, 'var(--space-md)')
  content = content.replace(/var\(--spacing-md\)/g, 'var(--space-xl)')
  content = content.replace(/var\(--spacing-lg\)/g, 'var(--space-3xl)')
  content = content.replace(/var\(--spacing-xl\)/g, 'var(--space-4xl)')
  
  fs.writeFileSync(file, content)
}

updateCSS('src/index.css')
updateCSS('src/App.css')
console.log('Done fixing spacing')
