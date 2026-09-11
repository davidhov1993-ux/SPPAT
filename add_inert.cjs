const fs = require('fs')

let content = fs.readFileSync('src/components/Header.tsx', 'utf8')

if (!content.includes('document.getElementById(\'main\')')) {
  const insertIndex = content.indexOf('  useEffect(() => {')
  
  if (insertIndex > -1) {
    // There is already a useEffect, just find a place to put it
    const effectStr = `  useEffect(() => {
    const mainEl = document.getElementById('main')
    const footerEl = document.querySelector('.site-footer')
    if (open) {
      if (mainEl) mainEl.setAttribute('inert', '')
      if (footerEl) footerEl.setAttribute('inert', '')
      document.body.style.overflow = 'hidden'
    } else {
      if (mainEl) mainEl.removeAttribute('inert')
      if (footerEl) footerEl.removeAttribute('inert')
      document.body.style.overflow = ''
    }
    
    return () => {
      if (mainEl) mainEl.removeAttribute('inert')
      if (footerEl) footerEl.removeAttribute('inert')
      document.body.style.overflow = ''
    }
  }, [open])

`
    content = content.replace('  const [open, setOpen] = useState(false)', '  const [open, setOpen] = useState(false)\n\n' + effectStr)
  }
}

fs.writeFileSync('src/components/Header.tsx', content)
console.log('Added inert')
