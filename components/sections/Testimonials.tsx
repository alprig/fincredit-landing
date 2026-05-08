'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Star } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  quote: string
  initials: string
  color: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Maria Kowalski',
    role: 'Freelance Designer, Warsaw',
    quote: 'FinCredit approved my loan in under 15 minutes. The entire process was seamless — no paperwork, no branch visits. I had the funds in my account the same day.',
    initials: 'MK',
    color: 'bg-violet-600',
  },
  {
    name: 'Alex Thompson',
    role: 'Business Owner, London',
    quote: "As an entrepreneur, I needed capital for my startup. Traditional banks took weeks. FinCredit? Done in one afternoon. The AI scoring actually understood my business potential.",
    initials: 'AT',
    color: 'bg-indigo-600',
  },
  {
    name: 'Sophie Laurent',
    role: 'Marketing Director, Paris',
    quote: "I was skeptical about online lending, but FinCredit changed my mind completely. The transparency is unmatched — I knew exactly what I was paying from day one.",
    initials: 'SL',
    color: 'bg-blue-600',
  },
]

const SOCIAL_PROOF = [
  { value: '4.9/5', label: 'on TrustPilot' },
  { value: '2,400+', label: 'on-site reviews' },
  { value: 'NPS 76', label: 'Industry-leading' },
]

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="testimonials" className="bg-[#0a0e1a] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.55 }}
          className="flex flex-col items-center text-center gap-4 mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
            WHAT OUR CLIENTS SAY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Trusted by thousands of professionals
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Real stories from real people who transformed their financial lives with FinCredit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : i * 0.1 }}
              className="flex flex-col gap-5 p-6 rounded-2xl bg-[#111827] border border-white/[0.08] hover:border-white/20 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 py-8 border-t border-white/[0.08]"
        >
          {SOCIAL_PROOF.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              {i > 0 && <div className="hidden sm:block w-px h-8 bg-white/10" />}
              <div className="text-center">
                <p className="text-white font-bold text-xl">{item.value}</p>
                <p className="text-gray-500 text-xs uppercase tracking-wider">{item.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
