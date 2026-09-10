export interface PlaceholderProps {
  aspectRatio?: string
  className?: string
  alt?: string
}

export default function Placeholder({
  aspectRatio = '16 / 9',
  className = '',
  alt = ''
}: PlaceholderProps) {
  return (
    <div
      className={`media-placeholder ${className}`}
      style={{
        aspectRatio,
        backgroundColor: 'var(--color-surface)',
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}
      role="img"
      aria-label={alt ? `${alt} (placeholder)` : 'Visuele structuur placeholder'}
    >
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          stroke="var(--color-border)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="100"
          y1="0"
          x2="0"
          y2="100"
          stroke="var(--color-border)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}
