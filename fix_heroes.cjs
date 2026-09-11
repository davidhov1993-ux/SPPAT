const fs = require('fs')
let content = fs.readFileSync('src/App.css', 'utf8')

// Append mobile fixes at the end of the file
content += `

/* ==================================================
   HOTFIX: ARCHITECTURAL OVERLAP MEDIA QUERIES
   ================================================== */
@media (max-width: 1024px) {
  .home-hero-grid,
  .service-hero-grid {
    display: flex !important;
    flex-direction: column !important;
    min-height: auto !important;
  }
  
  .home-hero-media,
  .service-hero-media {
    order: 2 !important; 
  }
  
  .home-hero-text,
  .service-hero-text {
    order: 1 !important;
    width: 100% !important;
    padding: var(--space-md) !important;
  }

  .home-hero-img,
  .almere-hero-img,
  .toilet-hero-img {
    height: auto !important;
    aspect-ratio: 4 / 3 !important;
  }
}

@media (max-width: 767px) {
  .home-hero-img,
  .almere-hero-img,
  .toilet-hero-img {
    aspect-ratio: 1 / 1 !important;
  }
}
`

fs.writeFileSync('src/App.css', content)
console.log('Fixed mobile overlapping')
