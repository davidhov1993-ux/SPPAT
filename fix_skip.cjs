const fs = require('fs');
let css = fs.readFileSync('src/App.css', 'utf8');
if (!css.includes('.skip-link:not(:focus)')) {
  css += `
/* SKIP LINK FIX */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px;
  z-index: 9999;
  transition: top 0.2s;
}
.skip-link:focus {
  top: 0;
}
.skip-link:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
`;
  fs.writeFileSync('src/App.css', css);
}
