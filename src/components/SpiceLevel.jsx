import { useState } from 'react'
import { Flame } from 'lucide-react'
import { SPICE_LEVELS, waLink } from '../data.js'

export default function SpiceLevel() {
  const [active, setActive] = useState(2)
  const current = SPICE_LEVELS[active - 1]
  // teks gelap di atas kuning/oranye muda, terang di atas merah
  const onDark = active >= 3

  return (
    <section className="relative overflow-hidden bg-hitam py-20 text-cream md:py-28">
      <div className="pointer-events-none absolute inset-0 texture-dots opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl uppercase sm:text-5xl md:text-6xl">
              <span className="text-kuning">Berani</span> sampai level berapa?
            </h2>
            <p className="mt-3 max-w-md font-body text-lg text-cream/80">
              Dari yang kalem sampai yang bikin kapok.
            </p>

            <div className="mt-8">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-7xl leading-none text-merah md:text-8xl">
                  {current.level}
                </span>
                <div>
                  <p className="font-display text-2xl uppercase text-kuning">
                    {current.name}
                  </p>
                  <p className="mt-1 max-w-sm font-body text-cream/80">{current.desc}</p>
                </div>
              </div>

              {/* Bar level */}
              <div className="mt-6 flex gap-2" role="tablist" aria-label="Pilih level pedas">
                {SPICE_LEVELS.map((s) => (
                  <button
                    key={s.level}
                    role="tab"
                    aria-selected={active === s.level}
                    onClick={() => setActive(s.level)}
                    className={`h-14 flex-1 rounded-md border-[3px] border-hitam transition-all duration-150 ${
                      active >= s.level
                        ? 'bg-merah shadow-brutal-sm'
                        : 'bg-cream/15 hover:bg-cream/25'
                    }`}
                    aria-label={`Level ${s.level}: ${s.name}`}
                  >
                    <Flame
                      className={`mx-auto h-6 w-6 ${
                        active >= s.level ? 'text-kuning' : 'text-cream/40'
                      }`}
                      strokeWidth={2}
                    />
                  </button>
                ))}
              </div>
            </div>

            <a
              href={waLink(`Hai NYEKER, aku mau pesan level pedas ${current.level} (${current.name}).`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border-[3px] border-hitam bg-kuning px-6 py-3.5 font-display text-base uppercase tracking-wide text-hitam shadow-brutal transition-transform duration-150 hover:-translate-y-0.5"
            >
              Pesan level {current.level}
            </a>
          </div>

          {/* Visual level */}
          <div className="flex items-center justify-center">
            <div
              className="flex aspect-square w-full max-w-sm items-center justify-center rounded-full border-[3px] border-hitam transition-colors duration-300"
              style={{
                backgroundColor:
                  active === 1
                    ? '#F5B301'
                    : active === 2
                      ? '#F08A1D'
                      : active === 3
                        ? '#E8611B'
                        : active === 4
                          ? '#E23A1A'
                          : '#C11212',
              }}
            >
              <div className="text-center">
                <Flame
                  className={`mx-auto h-20 w-20 md:h-24 md:w-24 ${
                    onDark ? 'text-cream' : 'text-hitam'
                  } ${active >= 4 ? 'animate-pulse' : ''}`}
                  strokeWidth={1.5}
                  fill="currentColor"
                />
                <p
                  className={`mt-2 font-display text-4xl uppercase md:text-5xl ${
                    onDark ? 'text-cream' : 'text-hitam'
                  }`}
                >
                  Level {current.level}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
