'use client'

import { useState, useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const TERMS = [6, 12, 24, 36, 48, 60]
const ANNUAL_RATE = 0.03

function formatEur(value: number): string {
  return new Intl.NumberFormat('en-EU', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value)
}

interface DonutProps {
  principalPct: number
}

function Donut({ principalPct }: DonutProps) {
  const R = 56
  const cx = 72
  const cy = 72
  const circumference = 2 * Math.PI * R
  const principalArc = (principalPct / 100) * circumference
  const gap = 2

  return (
    <svg width={144} height={144} viewBox="0 0 144 144" aria-hidden="true">
      {/* Track */}
      <circle cx={cx} cy={cy} r={R} fill="none" stroke="#1f2937" strokeWidth={14} />
      {/* Interest arc (gray, full) */}
      <circle
        cx={cx} cy={cy} r={R}
        fill="none"
        stroke="#374151"
        strokeWidth={14}
        strokeDasharray={`${circumference - principalArc - gap} ${principalArc + gap}`}
        strokeDashoffset={-(principalArc + gap / 2)}
        strokeLinecap="round"
        style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
      />
      {/* Principal arc (indigo) */}
      <circle
        cx={cx} cy={cy} r={R}
        fill="none"
        stroke="#6366f1"
        strokeWidth={14}
        strokeDasharray={`${principalArc - gap} ${circumference - principalArc + gap}`}
        strokeLinecap="round"
        style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
      />
      {/* Center label */}
      <text x={cx} y={cy - 6} textAnchor="middle" fill="#ffffff" fontSize={18} fontWeight={700}>
        {principalPct.toFixed(1)}%
      </text>
      <text x={cx} y={cy + 14} textAnchor="middle" fill="#6b7280" fontSize={11}>
        Principal
      </text>
    </svg>
  )
}

export default function Calculator() {
  const [amount, setAmount] = useState(15000)
  const [term, setTerm] = useState(24)
  const prefersReducedMotion = useReducedMotion()

  const calc = useMemo(() => {
    const r = ANNUAL_RATE / 12
    const n = term
    const monthly = r === 0
      ? amount / n
      : amount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)
    const totalRepayment = monthly * n
    const totalInterest = totalRepayment - amount
    const principalPct = (amount / totalRepayment) * 100
    return { monthly, totalRepayment, totalInterest, principalPct }
  }, [amount, term])

  const sliderPct = ((amount - 1000) / (50000 - 1000)) * 100

  return (
    <section id="calculator" className="bg-[#0a0e1a] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.55 }}
          className="flex flex-col items-center text-center gap-4 mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
            LOAN CALCULATOR
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Calculate your loan
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            See exactly what you&apos;ll pay — no surprises, no hidden charges.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
          className="max-w-5xl mx-auto bg-[#0d1117] border border-white/[0.08] rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — inputs */}
            <div className="flex flex-col gap-8">
              {/* Amount slider */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="loan-amount" className="text-gray-400 text-sm font-medium">
                    Loan Amount
                  </label>
                  <span className="text-white font-bold text-lg">{formatEur(amount)}</span>
                </div>
                <input
                  id="loan-amount"
                  type="range"
                  min={1000}
                  max={50000}
                  step={500}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #6366f1 ${sliderPct}%, #1f2937 ${sliderPct}%)`,
                  }}
                  aria-valuetext={formatEur(amount)}
                />
                <div className="flex justify-between text-gray-500 text-xs">
                  <span>€1,000</span>
                  <span>€50,000</span>
                </div>
              </div>

              {/* Term buttons */}
              <div className="flex flex-col gap-3">
                <span className="text-gray-400 text-sm font-medium">Loan Period</span>
                <div className="flex flex-wrap gap-2">
                  {TERMS.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTerm(t)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        term === t
                          ? 'bg-indigo-600 text-white'
                          : 'bg-[#1a2035] text-gray-400 hover:text-white hover:bg-[#1f2847]'
                      }`}
                    >
                      {t}m
                    </button>
                  ))}
                </div>
              </div>

              {/* Breakdown */}
              <div className="flex flex-col gap-0 rounded-xl overflow-hidden border border-white/[0.06]">
                {[
                  { label: 'Principal Amount', value: formatEur(amount) },
                  { label: 'Interest Rate', value: `${(ANNUAL_RATE * 100).toFixed(2)}%` },
                  { label: 'Total Interest', value: formatEur(calc.totalInterest) },
                  { label: 'Total Repayment', value: formatEur(calc.totalRepayment) },
                ].map((row, i) => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between px-5 py-3 ${
                      i < 3 ? 'border-b border-white/[0.06]' : ''
                    } ${i === 3 ? 'bg-white/[0.03]' : ''}`}
                  >
                    <span className="text-gray-400 text-sm">{row.label}</span>
                    <motion.span
                      key={row.value}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.18 }}
                      className={`font-semibold text-sm ${i === 3 ? 'text-white' : 'text-gray-200'}`}
                    >
                      {row.value}
                    </motion.span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — result */}
            <div className="flex flex-col items-center justify-center gap-8">
              {/* Monthly payment */}
              <div className="text-center">
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Monthly Payment</p>
                <motion.div
                  key={calc.monthly.toFixed(0)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-baseline justify-center gap-1"
                >
                  <span className="text-5xl md:text-6xl font-bold text-white">
                    {formatEur(calc.monthly)}
                  </span>
                  <span className="text-gray-400 text-xl">/mo</span>
                </motion.div>
              </div>

              {/* Donut chart */}
              <div className="flex flex-col items-center gap-4">
                <Donut principalPct={calc.principalPct} />
                <div className="flex items-center gap-6 text-sm">
                  <span className="flex items-center gap-2 text-gray-400">
                    <span className="w-3 h-3 rounded-full bg-indigo-500 inline-block" />
                    Principal
                  </span>
                  <span className="flex items-center gap-2 text-gray-400">
                    <span className="w-3 h-3 rounded-full bg-gray-600 inline-block" />
                    Interest {(100 - calc.principalPct).toFixed(1)}%
                  </span>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all duration-200 hover:scale-[1.02]">
                Apply for This Loan
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
