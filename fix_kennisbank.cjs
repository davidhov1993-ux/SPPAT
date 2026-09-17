const fs = require('fs');
let code = fs.readFileSync('src/pages/KennisbankPage.tsx', 'utf8');

const heroReplacement = `
        <section className="hero page-hero" aria-label="Kennisbank introductie">
          <div className="container">
            <div className="grid-12" style={{ alignItems: 'center' }}>
              <div className="article-hero-content col-span-7">
                {hero.Eyebrow && (
                  <p className="eyebrow">
                    <span aria-hidden="true">—</span>
                    {hero.Eyebrow}
                  </p>
                )}
                <h1>{hero.H1}</h1>
                {hero.Body && <p className="lead">{hero.Body}</p>}
              </div>
              <div className="col-start-8 col-span-5">
                <picture>
                  <source srcSet="/production/SPPAT-KB-LASER-hero-desktop.webp" media="(min-width: 1024px)" />
                  <source srcSet="/production/SPPAT-KB-LASER-hero-tablet.webp" media="(min-width: 834px)" />
                  <img src="/production/SPPAT-KB-LASER-hero-mobile.webp" alt="Precisie met laseruitlijning" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} loading="lazy" />
                </picture>
              </div>
            </div>
          </div>
        </section>
`;

code = code.replace(/<section className="hero page-hero"[^>]*>[\s\S]*?<\/section>/, heroReplacement);
fs.writeFileSync('src/pages/KennisbankPage.tsx', code);
