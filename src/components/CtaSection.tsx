import type { Block } from '../content/types'

interface CtaProps {
  block: Block
  className?: string
}

export function CtaTypeA({ block, className = '' }: CtaProps) {
  const url = block.URL || block['CTA URL'] || '/contact/'
  const buttonLabel = block.Button || block.CTA || 'Project bespreken'

  return (
    <section className={`cta-type-a ${className}`} aria-label="Afsluitende actie">
      <div className="container cta-a-inner">
        <span className="eyebrow">Sppat</span>
        <h2>{block.H2}</h2>
        {block.Body && <p className="cta-body">{block.Body}</p>}
        <div className="cta-a-action">
          <a href={url} className="btn">
            {buttonLabel}
            <span className="btn-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export function CtaTypeB({ block, className = '' }: CtaProps) {
  const url = block.URL || block['CTA URL'] || '/contact/'
  const buttonLabel = block.Button || block.CTA || 'Project bespreken'

  return (
    <section className={`cta-type-b ${className}`} aria-label="Afsluitende actie">
      <div className="container cta-b-inner">
        <div className="cta-b-text">
          <span className="eyebrow">Vakkennis &amp; Uitvoering</span>
          <h2>{block.H2}</h2>
          {block.Body && <p className="cta-body">{block.Body}</p>}
        </div>
        <div className="cta-b-action">
          <a href={url} className="btn">
            {buttonLabel}
            <span className="btn-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export function CtaTypeC({ className = '' }: { className?: string }) {
  return (
    <aside className={`cta-type-c ${className}`} aria-label="Direct contact opnemen">
      <span className="eyebrow">Technisch Advies</span>
      <h3>Vrijblijvende Opname</h3>
      <p>Heeft u vragen over de haalbaarheid of technische detaillering van uw project?</p>
      <a href="/contact/" className="text-link">
        Project bespreken
        <span className="btn-arrow" aria-hidden="true">↗</span>
      </a>
    </aside>
  )
}
