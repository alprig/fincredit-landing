'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { TrendingUp, ShieldCheck, CalendarCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

const FEATURES = [
  {
    icon: TrendingUp,
    colorClass: 'bg-emerald-500/15 text-emerald-400',
    divider: 'emerald',
    title: 'Randament 12–20% anual',
    desc: 'Câștiguri superioare oricărui depozit bancar, cu plăți lunare garantate',
  },
  {
    icon: ShieldCheck,
    colorClass: 'bg-blue-500/15 text-blue-400',
    divider: 'blue',
    title: 'Capital protejat',
    desc: 'Investițiile sunt securizate prin gaj imobiliar și garanții reale',
  },
  {
    icon: CalendarCheck,
    colorClass: 'bg-violet-500/15 text-violet-400',
    divider: 'violet',
    title: 'Plăți lunare stabile',
    desc: 'Primiți dobânda în cont în fiecare lună, predictibil și transparent',
  },
]

function BenefitsBlock({ reduced }: { reduced: boolean }) {
  const float: Variants = reduced ? {} : {
    animate: {
      y: [0, -6, 0],
      transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' as const },
    },
  }

  return (
    <motion.div
      variants={float}
      animate="animate"
      className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/30 flex"
      style={{ border: '1px solid rgba(255,255,255,0.08)' }}
    >
      {/* Left: feature list */}
      <div className="flex-1 bg-[#0d1117] flex flex-col gap-0 p-10">
        {FEATURES.map((f, i) => {
          const Icon = f.icon
          return (
            <div key={f.title}>
              <div className="flex items-start gap-4 py-6">
                <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0', f.colorClass)}>
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">{f.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{f.desc}</p>
                </div>
              </div>
              {i < FEATURES.length - 1 && (
                <div className="border-t border-white/[0.06]" />
              )}
            </div>
          )
        })}
      </div>

      {/* Right: visual */}
      <div
        className="w-[340px] flex-shrink-0 hidden md:flex flex-col items-center justify-center relative overflow-hidden"
        style={{ background: 'linear-gradient(145deg, #1c1c3a 0%, #0e1e40 60%, #0a1628 100%)' }}
      >
        {/* Glow orb */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99,102,241,0.18) 0%, transparent 70%)' }}
        />
        {/* Stats floating card */}
        <div className="relative z-10 flex flex-col gap-4 w-56">
          <div className="bg-white/[0.06] border border-white/[0.1] rounded-2xl p-5 backdrop-blur-sm">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Randament mediu</p>
            <p className="text-4xl font-black text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #10b981, #06b6d4)' }}>18%</p>
            <p className="text-xs text-gray-500 mt-1">per an</p>
          </div>
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 backdrop-blur-sm">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Capital gestionat</p>
            <p className="text-2xl font-bold text-white">€120M+</p>
            <p className="text-xs text-emerald-400 mt-1">↑ +24% față de 2023</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const reduced = useReducedMotion() ?? false

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.1 } },
  }

  const fadeUp: Variants = {
    hidden: reduced ? {} : { opacity: 0, y: 28 },
    show: reduced ? {} : { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
      style={{ backgroundColor: '#0a0e1a' }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.15) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center gap-7"
        >
          <motion.h1
            variants={fadeUp}
            className={cn(
              'font-bold text-white leading-[1.08] tracking-tight',
              'text-[40px] sm:text-[56px] md:text-[68px] lg:text-[80px]',
            )}
          >
            Finanțare rapidă fără
            <br />
            birocrație bancară
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-xl text-base sm:text-lg text-gray-400 leading-relaxed">
            Obțineți aprobare instantanee cu termeni flexibili. Scorare AI,
            rate transparente și fonduri în cont în câteva minute.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => window.dispatchEvent(new Event('openApplyModal'))}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-semibold text-base px-8 py-3.5 transition-all duration-200 shadow-lg shadow-indigo-900/50 cursor-pointer"
            >
              Aplică Acum
            </button>
            <a
              href="#calculator"
              className="inline-flex items-center justify-center rounded-full border border-gray-600 hover:bg-white/5 text-white font-semibold text-base px-8 py-3.5 transition-all duration-200"
            >
              Calculează Creditul
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="w-full mt-4">
            <BenefitsBlock reduced={reduced} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
