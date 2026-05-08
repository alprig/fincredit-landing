'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { FileText, Cpu, Banknote } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    icon: <FileText size={22} aria-hidden="true" />,
    title: 'Fill Your Application',
    description: 'Complete our simple online form in under 2 minutes.',
  },
  {
    number: '02',
    icon: <Cpu size={22} aria-hidden="true" />,
    title: 'AI Verification',
    description: 'Our algorithms verify and approve your application instantly.',
  },
  {
    number: '03',
    icon: <Banknote size={22} aria-hidden="true" />,
    title: 'Receive Your Funds',
    description: 'Money transferred directly to your bank account within hours.',
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
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Three simple steps
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            From application to funds in your account — fast, simple, secure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px border-t border-dashed border-white/10" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : i * 0.12 }}
              className="flex flex-col items-center text-center px-6 relative"
            >
              {/* Number */}
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-8xl font-black text-indigo-600/10 select-none pointer-events-none leading-none">
                {step.number}
              </span>

              {/* Icon circle */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 mt-4">
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
