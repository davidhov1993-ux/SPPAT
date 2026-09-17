const fs = require('fs');

let code = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

const projectsReplacement = `
          <div className="projects-grid">
            {/* PRJ-01 */}
            <article className="project-preview grid-12" style={{ marginBottom: 'var(--space-xl)', alignItems: 'center' }}>
              <div className="col-span-7">
                <a href="/projecten/#project-01">
                  <picture>
                    <source srcSet="/production/SPPAT-PROJ-01-bath08-1-hero-desktop.webp" media="(min-width: 1024px)" />
                    <source srcSet="/production/SPPAT-PROJ-01-bath08-1-hero-tablet.webp" media="(min-width: 834px)" />
                    <img src="/production/SPPAT-PROJ-01-bath08-1-hero-mobile.webp" alt="Grootformaat badkamer project" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} loading="lazy" />
                  </picture>
                </a>
              </div>
              <div className="col-start-9 col-span-4">
                <h3 className="card-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Project 01 — Complete Badkamer</h3>
                <p className="card-body">Grootformaat tegelwerk & inloopdouche.</p>
                <a href="/projecten/#project-01" className="text-link" style={{ marginTop: '1rem' }}>
                  Bekijk project <CtaArrow />
                </a>
              </div>
            </article>

            {/* PRJ-02 */}
            <article className="project-preview grid-12" style={{ marginBottom: 'var(--space-xl)', alignItems: 'center' }}>
              <div className="col-span-4 order-md-2" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 className="card-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Project 02 — Vloer & Woonruimte</h3>
                <p className="card-body">Grote tegelvloer en afwerking van de trapopgang.</p>
                <a href="/projecten/#project-02" className="text-link" style={{ marginTop: '1rem' }}>
                  Bekijk project <CtaArrow />
                </a>
              </div>
              <div className="col-start-6 col-span-7">
                <a href="/projecten/#project-02">
                  <picture>
                    <source srcSet="/production/SPPAT-PROJ-03-floor07-9-hero-desktop.webp" media="(min-width: 1024px)" />
                    <source srcSet="/production/SPPAT-PROJ-03-floor07-9-hero-tablet.webp" media="(min-width: 834px)" />
                    <img src="/production/SPPAT-PROJ-03-floor07-9-hero-mobile.webp" alt="Tegelvloer project" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} loading="lazy" />
                  </picture>
                </a>
              </div>
            </article>
          </div>
`;

// Replace everything between <div className="projects-grid grid-12"> and <div style={{ marginTop: 'var(--space-md)' }}>
const startIndex = code.indexOf('<div className="projects-grid grid-12">');
const endIndex = code.indexOf('<div style={{ marginTop: \'var(--space-md)\' }}>');
if (startIndex !== -1 && endIndex !== -1) {
  code = code.substring(0, startIndex) + projectsReplacement + '\n          ' + code.substring(endIndex);
}

fs.writeFileSync('src/pages/HomePage.tsx', code);
