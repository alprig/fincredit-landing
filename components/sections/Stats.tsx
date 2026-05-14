'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '50,000+', label: 'Clienți Aprobați' },
  { value: '€120M', label: 'Total Finanțat' },
  { value: '7 min', label: 'Timp Mediu de Aprobare' },
]

const trustLogos = ['VISA', 'Mastercard', 'SWIFT', 'BCE', 'TrustPilot', 'ISO 27001']

const badges = [
  { icon: '🔒', text: 'Criptare bancară' },
  { icon: '🔑', text: '256-bit SSL' },
  { icon: '✓', text: 'Conform PCI DSS' },
  { icon: '🇪🇺', text: 'Licențiat UE' },
]

export default function Stats() {
  return (
    <section className="bg-[#060b18] py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center justify-center py-8 sm:py-0 px-6 gap-2 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <span className="text-4xl md:text-5xl font-bold text-white">
                {stat.value}
              </span>
              <span className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Trust logos */}
        <motion.div
          className="flex flex-col items-center gap-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-500 text-xs uppercase tracking-widest">
            De încredere pentru instituții de top
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {trustLogos.map((logo) => (
              <span
                key={logo}
                className="px-4 py-1.5 rounded-lg border border-white/10 bg-white/5 text-gray-300 text-sm font-semibold tracking-wide"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Security badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          {badges.map((badge) => (
            <span
              key={badge.text}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs font-medium"
            >
              <span aria-hidden="true">{badge.icon}</span>
              {badge.text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
