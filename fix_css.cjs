const fs = require('fs');
let css = fs.readFileSync('src/App.css', 'utf8');

// 1. Remove HOTFIX blocks
css = css.replace(/\/\* =+ \n\s*HOTFIX: ARCHITECTURAL OVERLAP MEDIA QUERIES\n\s*=+ \*\/[\s\S]*?(?=\/\* =+ \n\s*HEADER DROPDOWN FIX)/, '');
css = css.replace(/\/\* HOTFIX: IMAGE THEN TEXT ORDERING FOR ALL MOBILE SECTIONS \(EXCEPT KENNISBANK\) \*\/[\s\S]*$/, '');

// 2. Change 1024px to 834px for the generic layout media queries
// We'll replace ALL @media (max-width: 1024px) with @media (max-width: 834px)
// But wait! Is there any @media (max-width: 1024px) that should stay 1024?
// User said: "1024: 12 columns / 24 gap... Asymmetrical Split remains side-by-side... 834: stacked transformation begins."
// So ALL stacking logic should move to 834. I'll just replace all of them.
css = css.replace(/@media \(max-width: 1024px\)/g, '@media (max-width: 834px)');

// 3. Fix home-hero-grid (Hero Overlap)
css = css.replace(/\.home-hero-text\s*{\s*order: 1;\s*width: 100%;\s*}/, '.home-hero-text {\n    order: 2;\n    width: 100%;\n  }');
css = css.replace(/\.home-hero-media\s*{\s*order: 2;\s*width: 100%;\s*}/, '.home-hero-media {\n    order: 1;\n    width: 100%;\n  }');
css = css.replace(/\.home-hero-img\s*{\s*aspect-ratio: 16 \/ 9;/, '.home-hero-img {\n    aspect-ratio: 4 / 5;');

// 4. Fix service-hero-grid (Service Split Hero)
css = css.replace(/\.service-hero-text\s*{\s*order: 1;\s*}/, '.service-hero-text {\n    order: 2;\n  }');
css = css.replace(/\.service-hero-media\s*{\s*width: 100%;\s*order: 2;\s*}/, '.service-hero-media {\n  width: 100%;\n    order: 1;\n  }');

// 5. Fix phase-2-text and badkamer-conclusion-text which had text order: 1 and media order: 2
css = css.replace(/\.phase-2-text\s*{\s*order: 1;\s*width: 100%;\s*}/, '.phase-2-text {\n    order: 2;\n    width: 100%;\n  }');
css = css.replace(/\.phase-2-media\s*{\s*order: 2;\s*width: 100%;\s*}/, '.phase-2-media {\n    order: 1;\n    width: 100%;\n  }');

css = css.replace(/\.badkamer-conclusion-text\s*{\s*order: 1;\s*width: 100%;\s*}/, '.badkamer-conclusion-text {\n    order: 2;\n    width: 100%;\n  }');
css = css.replace(/\.badkamer-conclusion-media\s*{\s*order: 2;\s*width: 100%;\s*}/, '.badkamer-conclusion-media {\n    order: 1;\n    width: 100%;\n  }');

// 6. Fix kb-hub-hero-text (already order 1, TEXT FIRST, keep it)

fs.writeFileSync('src/App.css', css);
