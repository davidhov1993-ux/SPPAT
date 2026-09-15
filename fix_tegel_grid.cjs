const fs = require('fs');
let css = fs.readFileSync('src/App.css', 'utf8');

css = css.replace(/@media \(min-width: 769px\) and \(max-width: 1024px\)/g, '@media (min-width: 431px) and (max-width: 834px)');
css = css.replace(/@media \(max-width: 768px\)/g, '@media (max-width: 430px)');

fs.writeFileSync('src/App.css', css);
