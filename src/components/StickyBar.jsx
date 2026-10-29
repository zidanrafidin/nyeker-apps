import { WA_DEFAULT } from '../data.js'
import WaButton from './WaButton.jsx'
import WhatsAppIcon from './WhatsAppIcon.jsx'

export default function StickyBar() {
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-hitam bg-kuning">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-hitam bg-merah font-display text-lg text-cream">
            N
          </span>
          <span className="font-display text-2xl uppercase leading-none tracking-wide">
            NYEKER
            <span className="ml-1.5 align-super text-[10px] text-merah">®</span>
          </span>
        </a>

        <div className="flex items-center gap-2.5">
          <span className="hidden font-body text-sm font-semibold text-hitam/70 md:block">
            Ceker tanpa tulang
          </span>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-[3px] border-hitam bg-hitam px-4 py-2 font-display text-sm uppercase tracking-wide text-kuning shadow-brutal-sm transition-transform duration-150 hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Pesan sekarang
          </a>
        </div>
      </div>
    </header>
  )
}
