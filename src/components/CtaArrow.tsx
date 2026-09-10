export default function CtaArrow({ className = 'btn-arrow' }: { className?: string }) {
  return (
    <span className={className} aria-hidden="true">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="2.5" y1="9.5" x2="9.5" y2="2.5" />
        <polyline points="4.5 2.5 9.5 2.5 9.5 7.5" />
      </svg>
    </span>
  )
}
