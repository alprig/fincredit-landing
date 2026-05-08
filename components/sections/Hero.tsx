'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

// ─── Sparkline SVG ──────────────────────────────────────────────────────────
function Sparkline() {
  return (
    <svg
      width="120"
      height="36"
      viewBox="0 0 120 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* area fill */}
      <path
        d="M0 28 L12 22 L24 25 L36 18 L48 20 L60 14 L72 16 L84 10 L96 8 L108 4 L120 2 L120 36 L0 36 Z"
        fill="url(#sparkGrad)"
      />
      {/* line */}
      <path
        d="M0 28 L12 22 L24 25 L36 18 L48 20 L60 14 L72 16 L84 10 L96 8 L108 4 L120 2"
        stroke="#6366f1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

// ─── Account Overview Card ───────────────────────────────────────────────────
function AccountCard({ reduced }: { reduced: boolean }) {
  const floatVariants: Variants = reduced
    ? {}
    : {
        animate: {
          y: [0, -8, 0],
          transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' as const },
        },
      }

  return (
    <motion.div
      variants={floatVariants}
      animate="animate"
      className={cn(
        'bg-[#111827] rounded-2xl p-5 min-w-[220px] flex flex-col gap-3',
        'shadow-xl shadow-black/40 border border-white/5',
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-gray-400 tracking-wide uppercase">
          Account Overview
        </span>
        <span className="text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 rounded-full px-2 py-0.5">
          +2.4%
        </span>
      </div>

      <div>
        <p className="text-2xl font-bold text-white tracking-tight">
          €24,850.00
        </p>
        <p className="text-xs text-gray-500 mt-0.5">Available balance</p>
      </div>

      <Sparkline />
    </motion.div>
  )
}

// ─── Credit Card Mockup ──────────────────────────────────────────────────────
function CreditCard({ reduced }: { reduced: boolean }) {
  const floatVariants: Variants = reduced
    ? {}
    : {
        animate: {
          y: [0, -6, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut' as const,
            delay: 1.2,
          },
        },
      }

  return (
    <motion.div
      variants={floatVariants}
      animate="animate"
      className={cn(
        'rounded-2xl p-5 min-w-[220px] flex flex-col gap-3',
        'bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700',
        'shadow-xl shadow-indigo-900/40 border border-white/10',
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-indigo-200 tracking-widest uppercase">
          FinCredit
        </span>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="10" cy="14" r="9" fill="white" fillOpacity="0.35" />
          <circle cx="18" cy="14" r="9" fill="white" fillOpacity="0.55" />
        </svg>
      </div>

      <p className="text-sm font-mono text-white/80 tracking-widest mt-1">
        •••• •••• •••• 4821
      </p>

      <div className="flex items-end justify-between mt-auto">
        <div>
          <p className="text-[10px] text-white/50 uppercase tracking-wide">
            Card Holder
          </p>
          <p className="text-xs font-semibold text-white">ALEX MITCHELL</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-white/50 uppercase tracking-wide">
            Expires
          </p>
          <p className="text-xs font-semibold text-white">08/28</p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 pt-3">
        <div>
          <p className="text-[10px] text-white/50 uppercase tracking-wide">
            Balance
          </p>
          <p className="text-sm font-bold text-white">€15,000</p>
        </div>
        <span className="text-xs font-bold text-white/60 tracking-widest">
          VISA
        </span>
      </div>
    </motion.div>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────
export default function Hero() {
  const reduced = useReducedMotion() ?? false

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduced ? 0 : 0.12,
      },
    },
  }

  const fadeUp: Variants = {
    hidden: reduced ? {} : { opacity: 0, y: 32 },
    show: reduced
      ? {}
      : {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: 'easeOut' as const },
        },
  }

  const fadeIn: Variants = {
    hidden: reduced ? {} : { opacity: 0 },
    show: reduced
      ? {}
      : {
          opacity: 1,
          transition: { duration: 0.5, ease: 'easeOut' as const },
        },
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0a0e1a' }}
    >
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.18) 0%, rgba(139,92,246,0.10) 40%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={fadeIn}>
            <span
              className={cn(
                'inline-flex items-center gap-2 rounded-full border border-indigo-500/40',
                'bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300',
                'tracking-wide uppercase',
              )}
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400"
                aria-hidden="true"
              />
              AI-Powered Financing
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className={cn(
              'font-bold text-white leading-tight tracking-tight',
              'text-[40px] sm:text-[56px] md:text-[64px] lg:text-[80px]',
            )}
          >
            Fast financing without
            <br />
            the bank bureaucracy
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base sm:text-lg text-gray-400 leading-relaxed"
          >
            Get instant approval with flexible terms. AI-powered scoring,
            transparent rates, and funds in your account within minutes.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          >
            <a
              href="#apply"
              className={cn(
                'inline-flex items-center justify-center rounded-full',
                'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800',
                'text-white font-semibold text-sm sm:text-base',
                'px-8 py-4 transition-colors duration-200',
                'shadow-lg shadow-indigo-900/40',
              )}
            >
              Apply Now
            </a>
            <a
              href="#calculator"
              className={cn(
                'inline-flex items-center justify-center rounded-full',
                'border border-gray-600 hover:bg-white/5 active:bg-white/10',
                'text-white font-semibold text-sm sm:text-base',
                'px-8 py-4 transition-colors duration-200',
              )}
            >
              Calculate Your Loan
            </a>
          </motion.div>

          {/* Floating cards — desktop */}
          <motion.div
            variants={fadeUp}
            className="hidden md:flex items-end gap-6 mt-10"
          >
            <AccountCard reduced={reduced} />
            <CreditCard reduced={reduced} />
          </motion.div>

          {/* Floating cards — mobile (smaller, stacked) */}
          <motion.div
            variants={fadeUp}
            className="flex md:hidden flex-col items-center gap-4 mt-8 w-full max-w-xs"
          >
            <AccountCard reduced={reduced} />
            <CreditCard reduced={reduced} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
