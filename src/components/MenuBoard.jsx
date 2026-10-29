import { MENU, PHOTOS, waLink } from '../data.js'
import PhotoSlot from './PhotoSlot.jsx'

function formatPrice(n) {
  return 'Rp ' + n.toLocaleString('id-ID')
}

export default function MenuBoard() {
  return (
    <section id="menu" className="bg-cream pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-[3px] border-hitam pb-5">
          <div>
            <h2 className="font-display text-4xl uppercase text-hitam sm:text-5xl md:text-6xl">
              Papan menu
            </h2>
            <p className="mt-2 font-body text-lg text-hitam/70">
              Semua ceker tanpa tulang. Klik pesan, langsung kebuka di WhatsApp.
            </p>
          </div>
          <span className="rounded-full border-[3px] border-hitam bg-hitam px-4 py-1.5 font-body text-sm font-bold text-kuning">
            {MENU.length} menu
          </span>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {MENU.map((item) => (
            <article
              key={item.name}
              className="group flex flex-col gap-5 border-[3px] border-hitam bg-kuning p-4 shadow-brutal-sm transition-transform duration-150 hover:-translate-y-1 sm:flex-row sm:p-5"
            >
              <PhotoSlot
                src={PHOTOS[item.name]}
                alt={item.name}
                label={`FOTO: ${item.name.toLowerCase().replaceAll(' ', '-')}.jpg`}
                className="aspect-square w-full shrink-0 sm:w-36"
              />

              <div className="flex flex-1 flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-2xl uppercase text-hitam">{item.name}</h3>
                  {item.best && (
                    <span className="rotate-[-3deg] rounded-full border-2 border-hitam bg-merah px-2 py-0.5 font-body text-[11px] font-bold uppercase text-cream">
                      Terlaris
                    </span>
                  )}
                </div>
                <p className="mt-1.5 font-body text-sm leading-relaxed text-hitam/70">
                  {item.desc}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                  <span className="rounded-lg border-[3px] border-hitam bg-hitam px-3 py-1.5 font-display text-lg uppercase text-kuning">
                    {formatPrice(item.price)}
                  </span>
                  <a
                    href={waLink(
                      `Hai NYEKER, aku mau pesan ${item.name} (${formatPrice(item.price)}).`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border-[3px] border-hitam bg-merah px-4 py-2 font-display text-sm uppercase tracking-wide text-cream shadow-brutal-sm transition-transform duration-150 hover:-translate-y-0.5"
                  >
                    Pesan
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
