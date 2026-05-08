'use client'

import { motion } from 'framer-motion'
import { Zap, DollarSign, RefreshCw, Globe, Brain, Shield, LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Zap,
    title: 'Instant Approval',
    description: 'Get approved in minutes with our AI-powered verification system',
  },
  {
    icon: DollarSign,
    title: 'No Hidden Fees',
    description: 'Transparent pricing with zero surprises. See all costs upfront',
  },
  {
    icon: RefreshCw,
    title: 'Flexible Repayment',
    description: 'Choose terms that fit your lifestyle from 2 to 60 months',
  },
  {
    icon: Globe,
    title: '100% Online',
    description: 'Complete your entire application from anywhere, at any time',
  },
  {
    icon: Brain,
    title: 'AI-Powered Scoring',
    description: 'Smart algorithms that look beyond traditional credit scores',
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Your data protected with military-grade encryption',
  },
]

export default function WhyUs() {
  return (
    <section className="bg-[#0a0e1a] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
            WHY FINCREDIT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Why thousands choose FinCredit
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
            Discover the advantages that set us apart from traditional lenders.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                className="bg-[#111827] border border-white/[0.08] rounded-2xl p-6 hover:border-indigo-500/30 transition-all"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                  <Icon size={18} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
