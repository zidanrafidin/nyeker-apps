import { Clock, MapPin } from 'lucide-react'
import { WA_DEFAULT, HOURS, LOCATION } from '../data.js'
import WaButton from './WaButton.jsx'

export default function Footer() {
  return (
    <footer className="bg-hitam text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-display text-6xl uppercase leading-[0.9] sm:text-7xl md:text-8xl">
              <span className="text-kuning">Nyeker</span>
              <span className="align-super text-2xl text-merah">®</span>
            </p>
            <p className="mt-4 font-display text-2xl uppercase text-cream/80 sm:text-3xl">
              Cekernya ada. Tulangnya nggak.
            </p>
            <div className="mt-8">
              <WaButton href={WA_DEFAULT} variant="solid">
                Pesan sekarang
              </WaButton>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <div className="flex items-center gap-2 font-display text-lg uppercase text-kuning">
                  <Clock className="h-5 w-5" /> Jam buka
                </div>
                <p className="mt-2 font-body text-cream/80">{HOURS}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 font-display text-lg uppercase text-kuning">
                  <MapPin className="h-5 w-5" /> Lokasi
                </div>
                <p className="mt-2 font-body text-cream/80">{LOCATION}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t-[3px] border-cream/20 pt-6 font-body text-sm text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 NYEKER. Semua hak dilindungi.</p>
          <p>Dibikin buat anak muda yang males nyarik tulang.</p>
        </div>
      </div>
    </footer>
  )
}
