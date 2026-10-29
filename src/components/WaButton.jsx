import WhatsAppIcon from './WhatsAppIcon.jsx'

/**
 * Tombol CTA utama — selalu ke WhatsApp.
 * `solid` = merah penuh (titik konversi), `dark` = hitam, `outline` = kuning garis hitam.
 */
export default function WaButton({ href, children, variant = 'solid', className = '' }) {
  const base =
    'inline-flex items-center gap-2.5 rounded-full border-[3px] border-hitam px-6 py-3.5 font-display text-base uppercase tracking-wide transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0'

  const variants = {
    solid: 'bg-merah text-cream shadow-brutal hover:shadow-brutal-lg',
    dark: 'bg-hitam text-kuning shadow-brutal hover:shadow-brutal-lg',
    outline: 'bg-kuning text-hitam shadow-brutal-sm hover:shadow-brutal',
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${variants[variant]} ${className}`}>
      <WhatsAppIcon className="h-5 w-5" />
      <span>{children}</span>
    </a>
  )
}
