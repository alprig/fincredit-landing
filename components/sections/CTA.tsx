'use client'

import { motion } from 'framer-motion'
import { Sparkles, CheckCircle2 } from 'lucide-react'

const checks = [
  'No credit checks to apply',
  'Cancel anytime',
  'No hidden fees',
]

export default function CTA() {
  return (
    <section className="relative bg-[#060b18] py-24 overflow-hidden">
      {/* Radial gradient background glow */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="w-[640px] h-[640px] rounded-full bg-indigo-900/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-600/10 px-4 py-1.5 mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span className="text-indigo-300 text-xs font-medium tracking-wide">
            Start your journey today
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Your financial freedom
          <br />
          <span className="text-indigo-400">starts today.</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join 50,000+ professionals who chose smarter financing. Apply in minutes, get approved
          instantly, and take control of your financial future.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 transition-colors text-white font-semibold rounded-full px-8 py-4 text-base">
            Apply Now — It&apos;s Free
          </button>
          <button className="w-full sm:w-auto border border-gray-600 hover:border-gray-400 transition-colors text-white font-semibold rounded-full px-8 py-4 text-base">
            Talk to an Expert
          </button>
        </motion.div>

        {/* Checkmarks */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {checks.map((text) => (
            <div key={text} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
              <span className="text-gray-400 text-sm">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
