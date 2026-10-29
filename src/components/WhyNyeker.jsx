import { Bone, Flame, Clock } from 'lucide-react'

function Block({ className = '', children }) {
  return (
    <div className={`border-[3px] border-hitam p-6 shadow-brutal sm:p-8 ${className}`}>
      {children}
    </div>
  )
}

export default function WhyNyeker() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="font-display text-4xl uppercase text-hitam sm:text-5xl md:text-6xl">
          Kenapa nyeker?
        </h2>
        <p className="mt-3 max-w-xl font-body text-lg text-hitam/70">
          Bukan ceker biasa. Ini ceker yang udah dibersihin dari hal yang bikin ribet.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-12">
          {/* Blok besar */}
          <Block className="bg-merah text-cream md:col-span-7">
            <div className="flex items-start justify-between gap-4">
              <Bone className="h-12 w-12" strokeWidth={2} />
              <span className="rounded-full border-[3px] border-hitam bg-hitam px-3 py-1 font-body text-sm font-bold text-kuning">
                0 tulang
              </span>
            </div>
            <p className="mt-6 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
              0 tulang.
              <br />
              100% ceker.
            </p>
            <p className="mt-4 max-w-md font-body text-lg leading-relaxed text-cream/90">
              Tinggal suap, nikmat sampai gigitan terakhir. Nggak ada drama nyarik-nyarik
              tulang di tengah makan.
            </p>
          </Block>

          {/* Dua blok kecil */}
          <div className="flex flex-col gap-6 md:col-span-5">
            <Block className="bg-kuning">
              <Flame className="h-9 w-9 text-merah" strokeWidth={2} />
              <p className="mt-4 font-display text-2xl uppercase text-hitam">
                Level pedas 1–5
              </p>
              <p className="mt-2 font-body text-hitam/70">
                Dari nyeker aja sampai siap tersiksa. Kamu yang pilih seberapa berani.
              </p>
            </Block>

            <Block className="bg-hitam text-cream">
              <Clock className="h-9 w-9 text-kuning" strokeWidth={2} />
              <p className="mt-4 font-display text-2xl uppercase text-kuning">
                Dimasak hari ini
              </p>
              <p className="mt-2 font-body text-cream/80">
                Fresh setiap order masuk. Bukan stok kemarin yang dipanasin.
              </p>
            </Block>
          </div>
        </div>
      </div>
    </section>
  )
}
