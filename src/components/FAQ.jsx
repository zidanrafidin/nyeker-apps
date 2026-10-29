import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQS } from '../data.js'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="bg-kuning py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-center font-display text-4xl uppercase text-hitam sm:text-5xl md:text-6xl">
          Sering ditanya
        </h2>

        <div className="mt-12 flex flex-col gap-4">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className="border-[3px] border-hitam bg-cream shadow-brutal-sm"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className="font-display text-xl uppercase text-hitam sm:text-2xl">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-6 w-6 shrink-0 text-merah transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    strokeWidth={2.5}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t-[3px] border-hitam px-5 py-4 font-body text-hitam/80 sm:px-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
