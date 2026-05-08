'use client'

import { motion, type Variants } from 'framer-motion'
import { FileText, Cpu, Banknote } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Fill Your Application',
    description: 'Complete our simple online form in under 2 minutes.',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'AI Verification',
    description: 'Our algorithms verify and approve your application instantly.',
  },
  {
    number: '03',
    icon: Banknote,
    title: 'Receive Your Funds',
    description: 'Money transferred directly to your bank account within hours.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function HowItWorks() {
  return (
    <section className="bg-[#060b18] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Three simple steps
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            From application to funds in your account — fast, simple, secure.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="relative">
          {/* Connecting dashed line — desktop only */}
          <div
            className="hidden md:block absolute top-[3.75rem] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] border-t border-dashed border-white/10 z-0"
            aria-hidden="true"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map(({ number, icon: Icon, title, description }) => (
              <motion.div
                key={number}
                variants={itemVariants}
                className="relative flex flex-col items-center text-center"
              >
                {/* Decorative number */}
                <span
                  className="absolute -top-4 left-1/2 -translate-x-1/2 text-7xl font-bold text-indigo-600/30 select-none leading-none pointer-events-none"
                  aria-hidden="true"
                >
                  {number}
                </span>

                {/* Icon box */}
                <div className="relative z-10 mb-5 mt-6 w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-600/10 border border-indigo-500/20">
                  <Icon className="w-6 h-6 text-indigo-400" />
                </div>

                {/* Text */}
                <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[220px]">
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
