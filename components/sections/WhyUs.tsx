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
    title: 'Aprobare Instantanee',
    description: 'Aprobat în minute cu sistemul nostru de verificare alimentat de AI',
  },
  {
    icon: DollarSign,
    title: 'Fără Taxe Ascunse',
    description: 'Prețuri transparente fără surprize. Vedeți toate costurile în avans',
  },
  {
    icon: RefreshCw,
    title: 'Rambursare Flexibilă',
    description: 'Alegeți termeni care se potrivesc stilului dvs. de viață, de la 2 la 60 de luni',
  },
  {
    icon: Globe,
    title: '100% Online',
    description: 'Completați întreaga cerere de oriunde, oricând',
  },
  {
    icon: Brain,
    title: 'Scorare AI',
    description: 'Algoritmi inteligenți care depășesc scorurile de credit tradiționale',
  },
  {
    icon: Shield,
    title: 'Securitate Bancară',
    description: 'Datele dvs. protejate cu criptare de nivel militar',
  },
]

export default function WhyUs() {
  return (
    <section className="bg-[#0a0e1a] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
            DE CE FINCREDIT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            De ce mii aleg FinCredit
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
            Descoperiți avantajele care ne diferențiază de creditorii tradiționali.
          </p>
        </motion.div>

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
