const fs = require('fs');
let css = fs.readFileSync('src/App.css', 'utf8');

// Fix the stacking for service-content-layout
css = css.replace(/@media \(max-width: 767px\)/, '@media (max-width: 834px)');
// Wait, max-width: 767px has multiple things: .project-hero-grid, .spec-hub-hero-container.
// I can just change it to 834px.
// And I need to enforce IMAGE FIRST for .service-content-layout.
let extraCSS = `
@media (max-width: 834px) {
  .service-content-layout {
    display: flex;
    flex-direction: column;
  }
  .service-content-layout .service-detail-media {
    order: 1;
    width: 100%;
  }
  .service-content-layout .service-content-block {
    order: 2;
    width: 100%;
  }
}
`;
fs.writeFileSync('src/App.css', css + extraCSS);
