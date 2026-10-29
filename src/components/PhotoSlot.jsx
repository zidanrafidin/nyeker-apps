import { Drumstick } from 'lucide-react'

/**
 * Slot foto dengan fallback otomatis.
 * Kalau file foto belum ada di /public/photos, img akan error dan
 * placeholder di belakangnya yang muncul — jadi halaman tetap rapi.
 */
export default function PhotoSlot({ src, alt, label, className = '' }) {
  return (
    <div className={`relative overflow-hidden border-[3px] border-hitam bg-cream ${className}`}>
      {/* Placeholder backdrop (muncul kalau foto belum ada) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 texture-diag">
        <Drumstick className="h-10 w-10 text-hitam/30" strokeWidth={1.5} />
        <span className="rounded border border-hitam/20 px-2 py-0.5 font-body text-[11px] uppercase tracking-wider text-hitam/40">
          {label}
        </span>
      </div>
      {/* Foto asli (menutupi placeholder kalau berhasil dimuat) */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />
    </div>
  )
}
