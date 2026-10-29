import { PHOTOS, WA_DEFAULT } from '../data.js'
import WaButton from './WaButton.jsx'
import PhotoSlot from './PhotoSlot.jsx'
import CircularBadge from './CircularBadge.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-kuning">
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 md:pb-20 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-12">
          {/* Kiri: headline */}
          <div className="relative z-10 md:col-span-7">
            <h1 className="font-display uppercase leading-[0.88] text-hitam">
              <span className="block text-[clamp(3.4rem,11vw,8.5rem)]">Cekernya</span>
              <span className="block text-[clamp(3.4rem,11vw,8.5rem)]">ada.</span>
              <span className="block text-[clamp(3.4rem,11vw,8.5rem)] text-merah">
                Tulangnya
              </span>
              <span className="relative inline-block text-[clamp(3.4rem,11vw,8.5rem)] text-merah">
                nggak.
                <svg
                  viewBox="0 0 200 12"
                  className="absolute -bottom-2 left-0 w-full text-hitam"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8 C 40 3, 80 10, 120 6 S 180 4, 198 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-8 max-w-md font-body text-lg leading-relaxed text-hitam/80">
              Ceker ayam tanpa tulang — digoreng garing atau direbus empuk, dilumuri
              saus yang bikin nagih. Pesan lewat WhatsApp, nggak perlu aplikasi apa-apa.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WaButton href={WA_DEFAULT} variant="solid">
                Pesan lewat WhatsApp
              </WaButton>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 rounded-full border-[3px] border-hitam bg-cream px-6 py-3.5 font-display text-base uppercase tracking-wide text-hitam shadow-brutal-sm transition-transform duration-150 hover:-translate-y-0.5"
              >
                Lihat menu
              </a>
            </div>
          </div>

          {/* Kanan: foto + stiker */}
          <div className="relative md:col-span-5">
            <div className="relative mx-auto max-w-md">
              <PhotoSlot
                src={PHOTOS.hero}
                alt="Ceker ayam tanpa tulang NYEKER"
                label="FOTO: hero.jpg"
                className="aspect-[4/5] w-full rotate-[-2deg] shadow-brutal-lg"
              />

              {/* Stiker TANPA TULANG */}
              <div className="absolute -left-6 -top-6 flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-hitam bg-merah text-center shadow-brutal">
                <CircularBadge
                  text="TANPA TULANG ·100% CEKER · WO TANPA TULANG · "
                  className="absolute inset-0 text-cream"
                />
                <span className="font-display text-3xl uppercase leading-none text-cream"></span>
                <span className="absolute bottom-3 font-body text-[9px] font-bold uppercase tracking-wide text-cream/90">
                  
                </span>
              </div>

              {/* Stiker harga mulai */}
              <div className="absolute -bottom-5 -right-3 rotate-3 rounded-xl border-[3px] border-hitam bg-kuning px-4 py-2 shadow-brutal">
                <p className="font-body text-xs font-semibold uppercase tracking-wide text-hitam/70">
                  Mulai dari
                </p>
                <p className="font-display text-2xl uppercase text-merah">Rp 18rb</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
