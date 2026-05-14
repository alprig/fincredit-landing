'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { TrendingUp, ShieldCheck, CalendarCheck } from 'lucide-react'

const BARS = [
  { label: 'FinCredit', value: 16, height: 160, gradient: 'linear-gradient(180deg, #10b981, #06b6d4)', textColor: 'text-emerald-400' },
  { label: 'Depozit bancar', value: 5, height: 50, color: '#2a2a4a', textColor: 'text-gray-500' },
  { label: 'Obligațiuni', value: 8, height: 80, color: '#2a2a4a', textColor: 'text-gray-500' },
  { label: 'Inflație', value: 4, height: 40, color: '#ef444440', textColor: 'text-red-400' },
]

const STATS = [
  { value: '€47,200', label: 'Câștig estimat pe 5 ani la €50K', color: 'emerald', Icon: TrendingUp },
  { value: '100%', label: 'Capital protejat prin gaj imobiliar', color: 'blue', Icon: ShieldCheck },
  { value: 'Lunar', label: 'Plăți regulate direct în contul tău', color: 'violet', Icon: CalendarCheck },
]

function smoothPath(pts: [number, number][]): string {
  let d = `M ${pts[0][0]} ${pts[0][1]}`
  for (let i = 0; i < pts.length - 1; i++) {
    const [x1, y1] = pts[i]
    const [x2, y2] = pts[i + 1]
    const cpx = (x1 + x2) / 2
    d += ` C ${cpx} ${y1}, ${cpx} ${y2}, ${x2} ${y2}`
  }
  return d
}

const growthPts: [number, number][] = [
  [0, 95], [88, 82], [176, 65], [264, 44], [352, 26], [440, 10],
]

function GrowthChart() {
  const line = smoothPath(growthPts)
  const area = `${line} L 440 110 L 0 110 Z`
  const years = ['2024', '2025', '2026', '2027', '2028', '2029']

  return (
    <div className="flex flex-col gap-3">
      <svg width="100%" viewBox="0 0 440 115" preserveAspectRatio="none" className="h-28">
        <defs>
          <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="growthLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#growthGrad)" />
        <path d={line} stroke="url(#growthLine)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="flex justify-between">
        {years.map((y) => (
          <span key={y} className="text-[11px] text-gray-500">{y}</span>
        ))}
      </div>
    </div>
  )
}

export default function MobileApp() {
  const reduced = useReducedMotion() ?? false

  const fadeUp = {
    hidden: reduced ? {} : { opacity: 0, y: 24 },
    show: reduced ? {} : { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  }

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.12 } },
  }

  return (
    <section className="relative overflow-hidden py-24" style={{ backgroundColor: '#060b18' }}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(99,102,241,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">

        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center text-center gap-4"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.15em] text-indigo-400">
            DE CE SĂ INVESTEȘTI
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Unde cresc banii tăi
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Comparație între randamentul investițiilor noastre și alternativele tradiționale.
          </motion.p>
        </motion.div>

        {/* Two-column layout */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 28 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {/* Bar chart card */}
            <div className="bg-[#0d1117] border border-white/[0.08] rounded-2xl p-8">
              <p className="text-white font-semibold text-lg mb-6">Randament anual comparat</p>
              <div className="flex items-end gap-8 h-[200px]">
                {BARS.map((bar) => (
                  <div key={bar.label} className="flex flex-col items-center justify-end gap-2.5 flex-1 h-full">
                    <span className={`text-base font-bold ${bar.textColor}`}>{bar.value}%</span>
                    <div
                      className="w-full rounded-t-lg"
                      style={{
                        height: bar.height,
                        background: bar.gradient ?? bar.color,
                      }}
                    />
                    <span className={`text-xs text-center leading-tight ${bar.textColor}`}>{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {STATS.map((s) => (
                <div key={s.value} className="bg-[#0d1117] border border-white/[0.08] rounded-2xl p-5 flex flex-col gap-2">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    s.color === 'emerald' ? 'bg-emerald-500/15 text-emerald-400' :
                    s.color === 'blue' ? 'bg-blue-500/15 text-blue-400' :
                    'bg-violet-500/15 text-violet-400'
                  }`}>
                    <s.Icon size={22} />
                  </div>
                  <p className={`text-2xl font-bold ${
                    s.color === 'emerald' ? 'text-emerald-400' : 'text-white'
                  }`}>{s.value}</p>
                  <p className="text-xs text-gray-500 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {/* Image card */}
            <div
              className="rounded-2xl overflow-hidden flex items-center justify-center"
              style={{
                height: 280,
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0a2240 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div className="flex flex-col items-center gap-3 text-center px-8">
                <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-indigo-400">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                </div>
                <p className="text-white font-semibold text-lg">Investiție inteligentă</p>
                <p className="text-gray-400 text-sm leading-relaxed">Portofoliu diversificat securizat prin garanții reale</p>
              </div>
            </div>

            {/* Growth chart card */}
            <div className="bg-[#0d1117] border border-white/[0.08] rounded-2xl p-7 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <p className="text-white font-semibold text-base">Creșterea investiției</p>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-400/10 rounded-full px-3 py-1">
                  ↑ +18% / an
                </span>
              </div>
              <GrowthChart />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
