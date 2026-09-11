const fs = require('fs')
let content = fs.readFileSync('src/pages/TegelwerkHubPage.tsx', 'utf8')

// Replace '/media/SPPAT-VIS-023.jpg' with '/media/README.jpg'
content = content.replace("'/media/SPPAT-VIS-023.jpg',", "'/media/README.jpg',")

fs.writeFileSync('src/pages/TegelwerkHubPage.tsx', content)
console.log('Fixed Image Mapping')
