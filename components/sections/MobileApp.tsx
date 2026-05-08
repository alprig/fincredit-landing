'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ShieldCheck, Zap, Bell, CreditCard, BarChart2, Lock } from 'lucide-react'

const features = [
  { icon: <Zap size={18} />, label: 'Instant decisions', desc: 'Loan approval in under 60 seconds' },
  { icon: <Bell size={18} />, label: 'Smart alerts', desc: 'Real-time payment & balance notifications' },
  { icon: <BarChart2 size={18} />, label: 'Spending insights', desc: 'AI-powered financial analytics' },
  { icon: <CreditCard size={18} />, label: 'Virtual card', desc: 'Instant card for online purchases' },
  { icon: <ShieldCheck size={18} />, label: 'Biometric auth', desc: 'Face ID & fingerprint security' },
  { icon: <Lock size={18} />, label: 'Bank-grade security', desc: '256-bit encryption on all data' },
]

// ─── Phone Mockup ────────────────────────────────────────────────────────────
function PhoneMockup({ variant }: { variant: 'dashboard' | 'loan' }) {
  return (
    <div className="relative w-[200px] sm:w-[220px]">
      {/* Phone frame */}
      <div className="relative bg-[#0d1117] border-2 border-white/[0.12] rounded-[2.5rem] shadow-2xl shadow-black/60 overflow-hidden"
        style={{ aspectRatio: '9/19' }}>
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0d1117] rounded-b-2xl z-10 border-b border-x border-white/[0.10]" />

        {/* Screen */}
        <div className="absolute inset-0 bg-[#0a0e1a] flex flex-col p-4 pt-8 gap-3">
          {variant === 'dashboard' ? <DashboardScreen /> : <LoanScreen />}
        </div>
      </div>

      {/* Glow */}
      <div className="absolute -inset-4 rounded-[3rem] bg-indigo-500/10 blur-2xl -z-10" />
    </div>
  )
}

function DashboardScreen() {
  return (
    <>
      <p className="text-[9px] text-gray-500 uppercase tracking-widest">Dashboard</p>
      <div>
        <p className="text-[8px] text-gray-500 mb-0.5">Total Balance</p>
        <p className="text-xl font-bold text-white">€24,850</p>
        <p className="text-[9px] text-emerald-400 font-medium">↑ +12.5% this month</p>
      </div>

      {/* Mini chart bars */}
      <div className="flex items-end gap-1 h-10">
        {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              background: i === 6 ? '#6366f1' : 'rgba(99,102,241,0.25)',
            }}
          />
        ))}
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 gap-1.5">
        <div className="bg-white/[0.05] rounded-xl p-2">
          <p className="text-[7px] text-gray-500 uppercase">Credit Score</p>
          <p className="text-sm font-bold text-emerald-400">780</p>
        </div>
        <div className="bg-white/[0.05] rounded-xl p-2">
          <p className="text-[7px] text-gray-500 uppercase">Active Loan</p>
          <p className="text-sm font-bold text-white">€15k</p>
        </div>
      </div>

      {/* Transactions */}
      <div className="flex flex-col gap-1.5">
        {[
          { name: 'Netflix', amt: '-€12.99', color: 'text-red-400' },
          { name: 'Salary', amt: '+€3,200', color: 'text-emerald-400' },
          { name: 'Repayment', amt: '-€450', color: 'text-red-400' },
        ].map(({ name, amt, color }) => (
          <div key={name} className="flex justify-between items-center">
            <span className="text-[8px] text-gray-300">{name}</span>
            <span className={`text-[8px] font-semibold ${color}`}>{amt}</span>
          </div>
        ))}
      </div>
    </>
  )
}

function LoanScreen() {
  return (
    <>
      <p className="text-[9px] text-gray-500 uppercase tracking-widest">Apply for Loan</p>

      <div className="bg-indigo-600/20 border border-indigo-500/30 rounded-xl p-3 flex flex-col gap-1">
        <p className="text-[8px] text-gray-400">Requested amount</p>
        <p className="text-xl font-bold text-white">€10,000</p>
      </div>

      {/* Progress */}
      <div className="flex flex-col gap-2">
        {[
          { label: 'Identity', done: true },
          { label: 'Documents', done: true },
          { label: 'AI Scoring', done: true },
          { label: 'Approval', done: false, active: true },
        ].map(({ label, done, active }) => (
          <div key={label} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
              done ? 'bg-emerald-400' : active ? 'bg-indigo-500 animate-pulse' : 'bg-white/10'
            }`} />
            <span className={`text-[8px] ${done ? 'text-gray-300' : active ? 'text-indigo-300' : 'text-gray-600'}`}>
              {label}
            </span>
            {done && <span className="text-[7px] text-emerald-400 ml-auto">✓</span>}
          </div>
        ))}
      </div>

      <div className="mt-auto bg-indigo-600 rounded-xl py-2 flex items-center justify-center">
        <span className="text-[9px] font-semibold text-white">Awaiting Decision…</span>
      </div>
    </>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────
export default function MobileApp() {
  const reduced = useReducedMotion() ?? false

  const fadeUp = {
    hidden: reduced ? {} : { opacity: 0, y: 24 },
    show: reduced ? {} : { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  }

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.08 } },
  }

  return (
    <section className="relative overflow-hidden py-24 sm:py-32" style={{ backgroundColor: '#0a0e1a' }}>
      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(99,102,241,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left — text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 flex flex-col gap-6 text-center lg:text-left"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex self-center lg:self-start items-center gap-2 text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              Mobile App
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight"
            >
              Your finances
              <br />
              <span className="text-indigo-400">in your pocket</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Manage loans, track your credit score, and get instant approvals — all from a beautifully designed mobile app.
            </motion.p>

            {/* Features grid */}
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map(({ icon, label, desc }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="flex items-start gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl p-3.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{label}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Store buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-white text-gray-900 font-semibold text-sm rounded-xl px-5 py-3 hover:bg-gray-100 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left leading-tight">
                  <p className="text-[10px] font-normal text-gray-500">Download on the</p>
                  <p className="text-sm font-bold">App Store</p>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-3 bg-white text-gray-900 font-semibold text-sm rounded-xl px-5 py-3 hover:bg-gray-100 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.24-12.23L13.06 8.4 3.18 23.76zm17.55-10.03-3.22-1.85-3.44 3.44 3.44 3.44 3.25-1.87c.93-.53.93-1.63-.03-2.16zM2.08 1.56C2.03 1.74 2 1.93 2 2.14v19.72c0 .21.03.4.08.57l.1.1L14.4 10.3v-.29L2.18 1.46l-.1.1zm11.3 9.04 3.44-3.44-3.22-1.85c-.96-.56-1.88-.05-1.94 1.12l-.01.39 1.73 3.78z" />
                </svg>
                <div className="text-left leading-tight">
                  <p className="text-[10px] font-normal text-gray-500">Get it on</p>
                  <p className="text-sm font-bold">Google Play</p>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right — phones */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, x: 40 }}
            whileInView={reduced ? {} : { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-shrink-0 flex items-end gap-4 sm:gap-6"
          >
            <motion.div
              animate={reduced ? {} : { y: [0, -8, 0], transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
            >
              <PhoneMockup variant="dashboard" />
            </motion.div>
            <motion.div
              animate={reduced ? {} : { y: [0, -6, 0], transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 } }}
              className="mb-8"
            >
              <PhoneMockup variant="loan" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
