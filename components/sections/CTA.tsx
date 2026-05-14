'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles, ArrowRight, Check } from 'lucide-react'

const CHECKS = [
  'Fără verificare de credit',
  'Anulați oricând',
  'Fără taxe ascunse',
]

export default function CTA() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="cta" className="bg-[#060b18] py-24 relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
            <Sparkles size={14} aria-hidden="true" />
            Începeți călătoria astăzi
          </span>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Libertatea ta financiară
            <br />
            <span className="text-indigo-400">începe astăzi.</span>
          </h2>

          {/* Sub */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Alăturați-vă celor 50.000+ profesioniști care au ales o finanțare mai inteligentă. Aplicați în minute, primiți aprobare instantanee și preluați controlul viitorului dvs. financiar.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => window.dispatchEvent(new Event('openApplyModal'))}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              Aplică Acum — Gratuit
              <ArrowRight size={18} aria-hidden="true" />
            </button>
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-600 text-white font-semibold text-base hover:bg-white/5 transition-all duration-200">
              Vorbiți cu un Expert
            </button>
          </div>

          {/* Checklist */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {CHECKS.map((check) => (
              <span key={check} className="flex items-center gap-2 text-gray-400 text-sm">
                <Check size={14} className="text-green-400 flex-shrink-0" aria-hidden="true" />
                {check}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
