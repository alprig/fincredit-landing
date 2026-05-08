'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Fingerprint, Bell, BarChart2, ShieldCheck } from 'lucide-react'

const pills = [
  { icon: <Fingerprint size={14} />, label: 'Biometric Login' },
  { icon: <Bell size={14} />, label: 'Smart Notifications' },
  { icon: <BarChart2 size={14} />, label: 'Real-time Analytics' },
  { icon: <ShieldCheck size={14} />, label: 'Secure Transfers' },
]

// ─── Status Bar ──────────────────────────────────────────────────────────────
function StatusBar({ bell }: { bell?: boolean }) {
  return (
    <div className="flex items-center justify-between px-4 pt-6 pb-1">
      <span className="text-[10px] font-semibold text-white">9:41</span>
      <div className="flex items-center gap-1.5">
        {bell && <Bell size={10} className="text-gray-400" />}
        <svg width="11" height="8" viewBox="0 0 11 8" fill="white" opacity={0.9}>
          <rect x="0" y="5" width="2" height="3" rx="0.4" />
          <rect x="3" y="3.5" width="2" height="4.5" rx="0.4" />
          <rect x="6" y="1.5" width="2" height="6.5" rx="0.4" />
          <rect x="9" y="0" width="2" height="8" rx="0.4" opacity="0.3" />
        </svg>
        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
          <path d="M1 6.5 Q6 2 11 6.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4" />
          <path d="M3 8 Q6 5 9 8" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7" />
          <circle cx="6" cy="8.5" r="0.8" fill="white" />
        </svg>
        <svg width="17" height="9" viewBox="0 0 17 9" fill="none">
          <rect x="0.5" y="0.5" width="13" height="8" rx="1.5" stroke="white" strokeWidth="0.9" opacity="0.5" />
          <rect x="14" y="3" width="2.5" height="3" rx="0.6" fill="white" opacity="0.4" />
          <rect x="1.5" y="1.5" width="10" height="6" rx="1" fill="white" />
        </svg>
      </div>
    </div>
  )
}

// ─── Dashboard Phone ─────────────────────────────────────────────────────────
function DashboardPhone() {
  return (
    <PhoneShell>
      <StatusBar />
      <div className="flex flex-col gap-3 px-3.5 pb-4">
        <div>
          <p className="text-[9px] text-gray-400 mb-0.5">Good morning, Alex</p>
          <p className="text-[15px] font-bold text-white leading-tight">Dashboard</p>
        </div>

        {/* Balance card */}
        <div
          className="rounded-xl p-3"
          style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' }}
        >
          <p className="text-[8px] text-indigo-200 uppercase tracking-wider mb-1">Available Balance</p>
          <p className="text-[17px] font-bold text-white leading-none mb-2.5">€24,850.00</p>
          <div className="flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-1 bg-white/25 hover:bg-white/30 rounded-lg py-1.5 text-[9px] text-white font-semibold transition-colors">
              ↑ Send
            </button>
            <button className="flex-1 flex items-center justify-center gap-1 bg-white/25 hover:bg-white/30 rounded-lg py-1.5 text-[9px] text-white font-semibold transition-colors">
              ↓ Receive
            </button>
          </div>
        </div>

        {/* Transactions */}
        <div>
          <p className="text-[9px] font-semibold text-white mb-2">Recent Transactions</p>
          <div className="flex flex-col gap-2.5">
            {[
              { emoji: '💰', name: 'Loan Deposit', sub: 'Today, 14:50', amt: '+€5,000.00', color: 'text-emerald-400', bg: 'bg-emerald-500/15' },
              { emoji: '💳', name: 'Monthly Payment', sub: 'May 1', amt: '-€654.00', color: 'text-gray-300', bg: 'bg-blue-500/15' },
              { emoji: '⭐', name: 'Credit Score Update', sub: 'Apr 28', amt: '+12 pts', color: 'text-emerald-400', bg: 'bg-purple-500/15' },
            ].map(({ emoji, name, sub, amt, color, bg }) => (
              <div key={name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full ${bg} flex items-center justify-center text-[10px]`}>
                    {emoji}
                  </div>
                  <div>
                    <p className="text-[9px] text-white font-medium leading-tight">{name}</p>
                    <p className="text-[8px] text-gray-500">{sub}</p>
                  </div>
                </div>
                <span className={`text-[9px] font-bold ${color}`}>{amt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PhoneShell>
  )
}

// ─── Loan Phone ──────────────────────────────────────────────────────────────
function LoanPhone() {
  return (
    <PhoneShell>
      <StatusBar bell />
      <div className="flex flex-col gap-2.5 px-3.5 pb-4">
        <div className="flex items-center justify-between">
          <p className="text-[15px] font-bold text-white">My Loan</p>
          <Bell size={13} className="text-gray-400" />
        </div>

        {/* Loan progress */}
        <div className="bg-white/[0.06] border border-white/[0.08] rounded-xl p-3">
          <p className="text-[8px] text-gray-400 mb-1.5">Loan Progress</p>
          <div className="flex items-baseline gap-1.5 mb-2">
            <span className="text-base font-bold text-white">€8,420</span>
            <span className="text-[8px] text-gray-500">of €15,000</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mb-1">
            <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" style={{ width: '56%' }} />
          </div>
          <p className="text-[7px] text-gray-500">56% paid off · 12 months remaining</p>
        </div>

        {/* Credit score */}
        <div className="bg-white/[0.06] border border-white/[0.08] rounded-xl p-3 flex items-center gap-3">
          <div className="relative w-11 h-11 flex-shrink-0">
            <svg viewBox="0 0 36 36" className="w-full h-full" style={{ transform: 'rotate(-90deg)' }}>
              <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3.5" />
              <circle cx="18" cy="18" r="14" fill="none" stroke="#6366f1" strokeWidth="3.5"
                strokeDasharray="65 88" strokeLinecap="round" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-white">780</span>
          </div>
          <div>
            <p className="text-[8px] text-gray-400 mb-0.5">Credit Score</p>
            <p className="text-sm font-bold text-emerald-400 leading-tight">Excellent</p>
            <p className="text-[7px] text-gray-500">+12 from last month</p>
          </div>
        </div>

        {/* Next payment */}
        <div className="bg-white/[0.06] border border-white/[0.08] rounded-xl p-3">
          <p className="text-[8px] text-gray-400 mb-1.5">Next Payment</p>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[13px] font-bold text-white">€654.00</span>
              <span className="text-[8px] text-gray-500 ml-1.5">— Jun 1</span>
            </div>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-[9px] font-bold px-2.5 py-1.5 rounded-lg transition-colors">
              Pay Now
            </button>
          </div>
        </div>

        {/* Success notification */}
        <div className="bg-emerald-500/10 border border-emerald-500/25 rounded-xl p-2.5 flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
            <span className="text-[8px] text-emerald-400">✓</span>
          </div>
          <p className="text-[8px] text-emerald-400 leading-tight">Payment of €654.00 processed successfully</p>
        </div>
      </div>
    </PhoneShell>
  )
}

// ─── Phone Shell ─────────────────────────────────────────────────────────────
function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[185px] sm:w-[210px] flex-shrink-0">
      <div
        className="relative overflow-hidden"
        style={{
          background: '#0d1117',
          border: '1.5px solid rgba(255,255,255,0.12)',
          borderRadius: '2.8rem',
          boxShadow: '0 30px 70px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04)',
          aspectRatio: '9/19.5',
        }}
      >
        {/* Notch */}
        <div
          className="absolute top-0 left-1/2 z-10"
          style={{
            transform: 'translateX(-50%)',
            width: '38%',
            height: '24px',
            background: '#0d1117',
            borderBottomLeftRadius: '14px',
            borderBottomRightRadius: '14px',
            border: '1.5px solid rgba(255,255,255,0.08)',
            borderTop: 'none',
          }}
        />
        <div className="absolute inset-0 overflow-auto scrollbar-none">
          {children}
        </div>
      </div>
      <div className="absolute -inset-6 rounded-[3.5rem] bg-indigo-500/[0.07] blur-3xl -z-10 pointer-events-none" />
    </div>
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
    show: { transition: { staggerChildren: reduced ? 0 : 0.1 } },
  }

  return (
    <section className="relative overflow-hidden py-24 sm:py-32" style={{ backgroundColor: '#0a0e1a' }}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(99,102,241,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12">

        {/* Text */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center text-center gap-4"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-widest">
            Mobile App
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Your finances in your pocket
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-base max-w-md leading-relaxed">
            Manage loans, track payments, and monitor your credit score — all
            from our beautifully designed mobile app.
          </motion.p>
        </motion.div>

        {/* Phones */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 32 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-end justify-center gap-5 sm:gap-8"
        >
          <motion.div
            animate={reduced ? {} : { y: [0, -10, 0], transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
          >
            <DashboardPhone />
          </motion.div>
          <motion.div
            animate={reduced ? {} : { y: [0, -8, 0], transition: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 } }}
            className="mb-6"
          >
            <LoanPhone />
          </motion.div>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {pills.map(({ icon, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-sm text-gray-300"
            >
              <span className="text-indigo-400">{icon}</span>
              {label}
            </motion.div>
          ))}
        </motion.div>

        {/* Store buttons */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              ),
              pre: 'Download on the',
              name: 'App Store',
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.24-12.23L13.06 8.4 3.18 23.76zm17.55-10.03-3.22-1.85-3.44 3.44 3.44 3.44 3.25-1.87c.93-.53.93-1.63-.03-2.16zM2.08 1.56C2.03 1.74 2 1.93 2 2.14v19.72c0 .21.03.4.08.57l.1.1L14.4 10.3v-.29L2.18 1.46l-.1.1zm11.3 9.04 3.44-3.44-3.22-1.85c-.96-.56-1.88-.05-1.94 1.12l-.01.39 1.73 3.78z" />
                </svg>
              ),
              pre: 'Get it on',
              name: 'Google Play',
            },
          ].map(({ icon, pre, name }) => (
            <motion.a
              key={name}
              variants={fadeUp}
              href="#"
              className="inline-flex items-center gap-3 border border-white/[0.15] bg-white/[0.04] hover:bg-white/[0.08] text-white rounded-xl px-5 py-3 transition-colors"
            >
              {icon}
              <div className="text-left leading-tight">
                <p className="text-[10px] text-gray-400">{pre}</p>
                <p className="text-sm font-semibold">{name}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
