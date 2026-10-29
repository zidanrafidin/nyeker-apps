import { STEPS, waLink } from '../data.js'

export default function HowToOrder() {
  return (
    <section id="cara-order" className="bg-kuning py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl uppercase text-hitam sm:text-5xl md:text-6xl">
            Cara order
          </h2>
          <p className="mt-3 font-body text-lg text-hitam/70">
            Tiga langkah, nggak pakai ribet. Yang penting laper.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="relative border-[3px] border-hitam bg-cream p-6 shadow-brutal sm:p-8"
            >
              <span className="font-display text-6xl leading-none text-merah">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-2xl uppercase text-hitam">
                {step.title}
              </h3>
              <p className="mt-2 font-body text-hitam/70">{step.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex justify-center md:justify-start">
          <a
            href={waLink('Hai NYEKER, aku mau pesan nih.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-[3px] border-hitam bg-merah px-7 py-4 font-display text-lg uppercase tracking-wide text-cream shadow-brutal transition-transform duration-150 hover:-translate-y-0.5"
          >
            Mulai order sekarang
          </a>
        </div>
      </div>
    </section>
  )
}
