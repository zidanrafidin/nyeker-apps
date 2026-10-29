const ITEMS = ['Tanpa tulang', 'Level pedas 1–5', 'Dimasak hari ini', 'Diantar panas', 'Order lewat WhatsApp']

function Row({ items }) {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 font-display text-xl uppercase tracking-wide text-cream md:text-2xl">
            {item}
          </span>
          <span className="inline-block h-2.5 w-2.5 rotate-45 bg-kuning" aria-hidden="true" />
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="relative z-20 -rotate-1 overflow-hidden border-y-[3px] border-hitam bg-merah py-3">
      <div className="flex w-max animate-marquee">
        <Row items={ITEMS} />
        <Row items={ITEMS} aria-hidden="true" />
      </div>
    </div>
  )
}
