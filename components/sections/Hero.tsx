'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Plus, RefreshCw, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Line Chart SVG ──────────────────────────────────────────────────────────
function smoothPath(pts: [number, number][]): string {
  if (pts.length < 2) return ''
  let d = `M ${pts[0][0]} ${pts[0][1]}`
  for (let i = 0; i < pts.length - 1; i++) {
    const [x1, y1] = pts[i]
    const [x2, y2] = pts[i + 1]
    const cpx = (x1 + x2) / 2
    d += ` C ${cpx} ${y1}, ${cpx} ${y2}, ${x2} ${y2}`
  }
  return d
}

function LineChart() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  const pts: [number, number][] = [
    [0, 72], [80, 60], [160, 66], [240, 44], [320, 36], [400, 20],
  ]
  const linePath = smoothPath(pts)
  const areaPath = `${linePath} L 400 95 L 0 95 Z`

  return (
    <div className="w-full flex flex-col gap-2 mt-2">
      <svg width="100%" viewBox="0 0 400 100" preserveAspectRatio="none" className="h-16 sm:h-24">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#lineGrad)" />
        <path d={linePath} stroke="#6366f1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="flex justify-between px-0.5">
        {months.map((m) => (
          <span key={m} className="text-[10px] text-gray-500">{m}</span>
        ))}
      </div>
    </div>
  )
}

// ─── Account Overview Card ───────────────────────────────────────────────────
function AccountCard({ reduced }: { reduced: boolean }) {
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
      className="bg-[#0d1117] border border-white/[0.08] rounded-2xl p-5 flex flex-col gap-3 w-full shadow-2xl shadow-black/40"
    >
      <div className="flex items-center justify-between">
        <span className="text-white font-semibold text-sm">Account Overview</span>
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-2.5 py-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Active
        </span>
      </div>

      <div>
        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Total Balance</p>
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-white tracking-tight">€24,850.00</span>
          <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-400/10 rounded-full px-2 py-0.5">
            ↑ +12.5%
          </span>
        </div>
      </div>

      <LineChart />
    </motion.div>
  )
}

// ─── Right Panel Card ────────────────────────────────────────────────────────
function RightPanel({ reduced }: { reduced: boolean }) {
  const float: Variants = reduced ? {} : {
    animate: {
      y: [0, -5, 0],
      transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' as const, delay: 1.5 },
    },
  }

  return (
    <motion.div
      variants={float}
      animate="animate"
      className="flex flex-col gap-3 w-full"
    >
      {/* VISA Card */}
      <div
        className="rounded-2xl p-5 flex flex-col gap-3 shadow-xl shadow-black/30"
        style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #1a1f3c 50%, #0f172a 100%)', border: '1px solid rgba(99,102,241,0.2)' }}
      >
        <div className="flex items-center justify-between">
          <span className="text-white font-bold text-base tracking-tight">FinCredit</span>
          <span className="text-white font-bold text-base tracking-widest">VISA</span>
        </div>
        <p className="text-gray-300 font-mono text-sm tracking-[0.25em]">•••• •••• •••• 4821</p>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Card Holder</p>
            <p className="text-white text-sm font-semibold">ALEX MITCHELL</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Expires</p>
            <p className="text-white text-sm font-semibold">09/28</p>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#0d1117] border border-white/[0.08] rounded-xl p-4">
          <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Credit Score</p>
          <div className="flex items-center gap-1.5">
            <span className="text-2xl font-bold text-emerald-400">780</span>
            <span className="text-emerald-400 text-sm">↗</span>
          </div>
        </div>
        <div className="bg-[#0d1117] border border-white/[0.08] rounded-xl p-4">
          <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Active Loan</p>
          <span className="text-2xl font-bold text-white">€15,000</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-[#0d1117] border border-white/[0.08] rounded-xl p-4">
        <p className="text-xs text-gray-400 font-medium mb-3">Quick Actions</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: <Plus size={16} />, label: 'New Loan' },
            { icon: <RefreshCw size={16} />, label: 'Repay' },
            { icon: <FileText size={16} />, label: 'Docs' },
          ].map(({ icon, label }) => (
            <button
              key={label}
              className="flex flex-col items-center gap-1.5 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              {icon}
              <span className="text-[10px] font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────
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
      {/* Radial glow */}
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
          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className={cn(
              'font-bold text-white leading-[1.08] tracking-tight',
              'text-[40px] sm:text-[56px] md:text-[68px] lg:text-[80px]',
            )}
          >
            Fast financing without
            <br />
            the bank bureaucracy
          </motion.h1>

          {/* Sub */}
          <motion.p variants={fadeUp} className="max-w-xl text-base sm:text-lg text-gray-400 leading-relaxed">
            Get instant approval with flexible terms. AI-powered scoring,
            transparent rates, and funds in your account within minutes.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#apply"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-semibold text-base px-8 py-3.5 transition-all duration-200 shadow-lg shadow-indigo-900/50"
            >
              Apply Now
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center justify-center rounded-full border border-gray-600 hover:bg-white/5 text-white font-semibold text-base px-8 py-3.5 transition-all duration-200"
            >
              Calculate Your Loan
            </a>
          </motion.div>

          {/* Dashboard cards */}
          <motion.div variants={fadeUp} className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 max-w-4xl mx-auto">
            <AccountCard reduced={reduced} />
            <RightPanel reduced={reduced} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
