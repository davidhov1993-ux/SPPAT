const fs = require('fs')
let content = fs.readFileSync('src/App.css', 'utf8')

// Replace .tegel-img-16-9 and .tegel-img-1-1 with strictly enforced rules
content = content.replace(/\.tegel-img-16-9 \{[\s\S]*?\}/, `.tegel-img-16-9 {
  aspect-ratio: 16 / 9;
  object-fit: cover;
  width: 100%;
}`)

content = content.replace(/\.tegel-img-1-1 \{[\s\S]*?\}/, `.tegel-img-1-1 {
  aspect-ratio: 1 / 1;
  object-fit: cover;
  width: 100%;
}`)

fs.writeFileSync('src/App.css', content)
console.log('Fixed App.css')
