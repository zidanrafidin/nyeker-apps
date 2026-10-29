import { TESTIMONIALS } from "../data.js";

const ROTATIONS = ["-rotate-2", "rotate-1", "-rotate-1"];

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="font-display text-4xl uppercase text-hitam sm:text-5xl md:text-6xl">
          Kata pembeli
        </h2>
        <p className="mt-3 font-body text-lg text-hitam/70">
          Bukan kata kami. Kata orang yang udah nangis pedes.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className={`border-[3px] border-hitam bg-kuning p-6 shadow-brutal ${ROTATIONS[i % 3]}`}
            >
              <svg
                viewBox="0 0 40 32"
                className="h-7 w-9 text-merah"
                aria-hidden="true"
              >
                <path
                  d="M0 32V20C0 8 7 0 18 0v6c-6 0-9 3-10 8h8v18H0zm22 0V20C22 8 29 0 40 0v6c-6 0-9 3-10 8h8v18H22z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="mt-3 font-body text-lg leading-relaxed text-hitam">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t-[3px] border-hitam pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-hitam bg-merah font-display text-lg text-cream">
                  {t.name[0]}
                </span>
                <div>
                  <p className="font-display text-base uppercase text-hitam">
                    {t.name}
                  </p>
                  <p className="font-body text-sm text-hitam/60">{t.age} </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
