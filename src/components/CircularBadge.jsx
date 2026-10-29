/**
 * Stiker bulat berputar dengan teks melingkar — stempel ala label produk.
 */
export default function CircularBadge({ text, className = '' }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      <div className="relative h-full w-full animate-spin-slow">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs>
            <path id="badge-circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
          </defs>
          <text className="fill-current font-display uppercase" style={{ fontSize: '10.5px', letterSpacing: '0.08em' }}>
            <textPath href="#badge-circle">{text}</textPath>
          </text>
        </svg>
      </div>
    </div>
  )
}
