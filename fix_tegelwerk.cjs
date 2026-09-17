const fs = require('fs');

let code = fs.readFileSync('src/pages/TegelwerkPage.tsx', 'utf8');

const xxlReplacement = `
            <div className="col-span-6">
              <img 
                src="/references/e5168e84-d907-4e2e-ad01-71bf3ecb6bcf.JPG" 
                alt="Grootformaat tegels 1.5 x 3m (referentiebeeld)"
                style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
`;

// Replace the XXL image part in Premium A
code = code.replace(/<div className="col-span-6">\s*<img\s*src="\/production\/SPPAT-PROJ-01-bath08-1-hero-desktop\.webp"[\s\S]*?<\/div>/, xxlReplacement);

// Premium B: Mozaïek + Keramisch parket. Preferred: `/media/Generated Image September 10, 2026 - 7_02PM.jpg`
const premiumBReplacement = `
            <div className="col-start-7 col-span-6">
              <img 
                src="/media/Generated Image September 10, 2026 - 7_02PM.jpg" 
                alt="Precisie in mozaïek en keramisch parket"
                style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
`;

code = code.replace(/<div className="col-start-7 col-span-6">\s*<img\s*src="\/media\/Generated Image September 11, 2026 - 11_36AM\.jpg"[\s\S]*?<\/div>/, premiumBReplacement);

fs.writeFileSync('src/pages/TegelwerkPage.tsx', code);
