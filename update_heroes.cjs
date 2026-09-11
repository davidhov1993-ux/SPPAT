const fs = require('fs')
let content = fs.readFileSync('src/App.css', 'utf8')

// HOMEPAGE HERO CSS UPDATE
content = content.replace(
  /\.home-hero-grid \{[\s\S]*?align-items: center;\s*\}/,
  `.home-hero-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--grid-gutter);
  min-height: 80vh; /* (desktop) */
}`
)
content = content.replace(
  /\.home-hero-text \{[\s\S]*?gap: var\(--space-sm\);\s*\}/,
  `.home-hero-text {
  grid-row: 1 / 2;
  grid-column: 1 / 7;
  align-self: end;
  background-color: var(--color-bg);
  padding: var(--space-xl);
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  margin-bottom: var(--space-lg); /* Push up a bit from bottom if desired, or let align-self: end handle it */
}`
)
content = content.replace(
  /\.home-hero-media \{[\s\S]*?\}/,
  `.home-hero-media {
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  width: 100%;
  height: 100%;
}`
)
content = content.replace(
  /\.home-hero-img \{[\s\S]*?display: block;\s*\}/,
  `.home-hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 70% center;
  display: block;
}`
)

// SERVICE HERO CSS UPDATE
content = content.replace(
  /\.service-hero-grid \{[\s\S]*?align-items: center;\s*\}/,
  `.service-hero-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--grid-gutter);
  min-height: 80vh;
}`
)
content = content.replace(
  /\.service-hero-text \{[\s\S]*?gap: var\(--space-sm\);\s*\}/,
  `.service-hero-text {
  grid-row: 1 / 2;
  grid-column: 1 / 7;
  align-self: end;
  background-color: var(--color-bg);
  padding: var(--space-xl);
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  margin-bottom: var(--space-lg);
}`
)
content = content.replace(
  /\.service-hero-media \{[\s\S]*?\}/,
  `.service-hero-media {
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  width: 100%;
  height: 100%;
}`
)

// Remove aspect-ratio from almere-hero-img and toilet-hero-img so they stretch to 100% height of 80vh container on desktop
// Actually let's just make them height: 100%
content = content.replace(/\.almere-hero-img \{[\s\S]*?display: block;\s*\}/, `.almere-hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
}`)
content = content.replace(/\.toilet-hero-img \{[\s\S]*?display: block;\s*\}/, `.toilet-hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}`)

fs.writeFileSync('src/App.css', content)
console.log('Heroes CSS updated')
