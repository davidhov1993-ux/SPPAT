const fs = require('fs');
let hub = fs.readFileSync('src/pages/TegelwerkHubPage.tsx', 'utf8');

// I need to find pricingSection in pages.sections and render it.
let extra = `
      {/* 5.5 PRICING INTERLUDE */}
      {pricingSection && (
        <section className="pricing-section tegel-pricing-section" aria-label={pricingSection.H2 || "Prijzen in de tegelbranche"}>
          <div className="container">
            <div className="tegel-pricing-grid">
              <div className="tegel-pricing-container">
                <h2>{pricingSection.H2}</h2>
                <p className="lead tegel-pricing-lead">
                  {pricingSection.Body}
                </p>
                {pricingSection.bullets && pricingSection.bullets.length > 0 && (
                  <ul className="tegel-spec-list">
                    {pricingSection.bullets.map((bullet, idx) => {
                      const match = bullet.match(/^(.*?):(.*)$/)
                      return (
                        <li key={idx} className="tegel-spec-item">
                          <span className="tegel-spec-bullet" aria-hidden="true">—</span>
                          <p>
                            {match ? (
                              <>
                                <strong>{match[1]}:</strong><RichText text={match[2]} links={page.links || []} />
                              </>
                            ) : (
                              <RichText text={bullet} links={page.links || []} />
                            )}
                          </p>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
`;

hub = hub.replace('{/* 6. RELATED COMPLETE PROJECT CONTEXT (Included as Related Links) */}', extra + '\n      {/* 6. RELATED COMPLETE PROJECT CONTEXT (Included as Related Links) */}');
fs.writeFileSync('src/pages/TegelwerkHubPage.tsx', hub);
