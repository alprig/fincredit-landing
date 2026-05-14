'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { FileText, Cpu, Banknote } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    icon: <FileText size={22} aria-hidden="true" />,
    title: 'Completează Cererea',
    description: 'Completați formularul nostru simplu online în mai puțin de 2 minute.',
  },
  {
    number: '02',
    icon: <Cpu size={22} aria-hidden="true" />,
    title: 'Verificare AI',
    description: 'Algoritmii noștri verifică și aprobă cererea dvs. instantaneu.',
  },
  {
    number: '03',
    icon: <Banknote size={22} aria-hidden="true" />,
    title: 'Primiți Fondurile',
    description: 'Banii transferați direct în contul dvs. bancar în câteva ore.',
  },
]

export default function HowItWorks() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="how-it-works" className="bg-[#060b18] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.55 }}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
            CUM FUNCȚIONEAZĂ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Trei pași simpli
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            De la cerere la fonduri în cont — rapid, simplu, sigur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px border-t border-dashed border-white/10" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : i * 0.12 }}
              className="flex flex-col items-center text-center px-4 relative bg-[#0d1117] border border-white/[0.07] rounded-2xl py-10"
            >
              {/* Number */}
              <span className="text-5xl font-black bg-gradient-to-b from-indigo-400 to-violet-500 bg-clip-text text-transparent mb-5 leading-none select-none">
                {step.number}
              </span>

              {/* Icon circle */}
              <div className="w-16 h-16 rounded-full bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
                {step.icon}
              </div>

              <h3 className="text-white font-semibold text-xl mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
