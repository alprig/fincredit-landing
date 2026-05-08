'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'

// ─── Helpers ────────────────────────────────────────────────────────────────

const fmt = new Intl.NumberFormat('en-EU', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

function formatEur(value: number): string {
  return fmt.format(value)
}

// ─── Donut Chart ─────────────────────────────────────────────────────────────

interface DonutChartProps {
  principalPct: number
}

function DonutChart({ principalPct }: DonutChartProps) {
  const R = 60
  const cx = 80
  const cy = 80
  const circumference = 2 * Math.PI * R
  const principalArc = (principalPct / 100) * circumference
  const interestArc = circumference - principalArc
  const interestPct = 100 - principalPct

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <svg
          width="160"
          height="160"
          viewBox="0 0 160 160"
          aria-label={`Donut chart: ${principalPct.toFixed(1)}% principal, ${interestPct.toFixed(1)}% interest`}
          role="img"
        >
          {/* Background track */}
          <circle
            cx={cx}
            cy={cy}
            r={R}
            fill="none"
            stroke="#1a2035"
            strokeWidth={16}
          />
          {/* Interest arc (gray) */}
          <circle
            cx={cx}
            cy={cy}
            r={R}
            fill="none"
            stroke="#374151"
            strokeWidth={16}
            strokeDasharray={`${interestArc} ${principalArc}`}
            strokeDashoffset={-principalArc}
            strokeLinecap="round"
            style={{ transform: 'rotate(-90deg)', transformOrigin: `${cx}px ${cy}px` }}
          />
          {/* Principal arc (indigo) */}
          <circle
            cx={cx}
            cy={cy}
            r={R}
            fill="none"
            stroke="#6366f1"
            strokeWidth={16}
            strokeDasharray={`${principalArc} ${interestArc}`}
            strokeDashoffset={0}
            strokeLinecap="round"
            style={{ transform: 'rotate(-90deg)', transformOrigin: `${cx}px ${cy}px` }}
          />
          {/* Center label */}
          <text
            x={cx}
            y={cy - 6}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="16"
            fontWeight="700"
          >
            {principalPct.toFixed(1)}%
          </text>
          <text
            x={cx}
            y={cy + 12}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#6b7280"
            fontSize="10"
          >
            principal
          </text>
        </svg>
      </div>

      {/* Legend */}
      <div className="flex gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-indigo-500 inline-block" />
          <span className="text-gray-300">Principal</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gray-600 inline-block" />
          <span className="text-gray-300">Interest {interestPct.toFixed(1)}%</span>
        </div>
      </div>
    </div>
  )
}

// ─── Main Component ──────────────────────────────────────────────────────────

const TERM_OPTIONS = [6, 12, 24, 36, 48, 60] as const
type Term = (typeof TERM_OPTIONS)[number]

export default function Calculator() {
  const [amount, setAmount] = useState(15000)
  const [term, setTerm] = useState<Term>(24)

  const calc = useMemo(() => {
    const rate = 0.03 / 12 // 3% annual, monthly
    const n = term
    const principal = amount

    let monthly: number
    if (rate === 0) {
      monthly = principal / n
    } else {
      const factor = Math.pow(1 + rate, n)
      monthly = (principal * rate * factor) / (factor - 1)
    }

    const totalRepayment = monthly * n
    const totalInterest = totalRepayment - principal
    const principalPct = (principal / totalRepayment) * 100

    return { monthly, totalRepayment, totalInterest, principalPct }
  }, [amount, term])

  const containerVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  }

  return (
    <section className="bg-[#0a0e1a] py-20" id="calculator">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-3">
            LOAN CALCULATOR
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Calculate your loan
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            See exactly what you&apos;ll pay — no surprises, no hidden charges.
          </p>
        </div>

        {/* Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="bg-[#0d1117] border border-white/[0.08] rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* ── Left: Inputs ── */}
            <div className="flex flex-col gap-8">
              {/* Loan Amount */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label
                    htmlFor="loan-amount"
                    className="text-gray-400 text-sm font-medium"
                  >
                    Loan Amount
                  </label>
                  <span className="text-white text-2xl font-bold">
                    {formatEur(amount)}
                  </span>
                </div>

                <input
                  id="loan-amount"
                  type="range"
                  min={1000}
                  max={50000}
                  step={500}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer
                    bg-gradient-to-r from-indigo-600 to-indigo-400
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-5
                    [&::-webkit-slider-thumb]:h-5
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-white
                    [&::-webkit-slider-thumb]:shadow-lg
                    [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-moz-range-thumb]:w-5
                    [&::-moz-range-thumb]:h-5
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:bg-white
                    [&::-moz-range-thumb]:border-0
                    [&::-moz-range-thumb]:cursor-pointer"
                />

                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>€1,000</span>
                  <span>€50,000</span>
                </div>
              </div>

              {/* Loan Period */}
              <div>
                <p className="text-gray-400 text-sm font-medium mb-3">Loan Period</p>
                <div className="flex flex-wrap gap-2">
                  {TERM_OPTIONS.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTerm(t)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        term === t
                          ? 'bg-indigo-600 text-white'
                          : 'bg-[#1a2035] text-gray-400 hover:text-white'
                      }`}
                    >
                      {t}m
                    </button>
                  ))}
                </div>
              </div>

              {/* Breakdown Table */}
              <div className="border-t border-white/[0.08] pt-6 flex flex-col gap-3">
                {[
                  { label: 'Principal Amount', value: formatEur(amount) },
                  { label: 'Interest Rate', value: '3.00%' },
                  { label: 'Total Interest', value: formatEur(calc.totalInterest) },
                  { label: 'Total Repayment', value: formatEur(calc.totalRepayment) },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-gray-400 text-sm">{label}</span>
                    <span className="text-white text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Result ── */}
            <div className="flex flex-col items-center justify-between gap-8">
              {/* Monthly Payment */}
              <div className="text-center">
                <p className="text-gray-400 text-sm font-medium mb-2">Monthly Payment</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-white">
                    {formatEur(calc.monthly)}
                  </span>
                  <span className="text-gray-400 text-xl">/mo</span>
                </div>
              </div>

              {/* Donut Chart */}
              <DonutChart principalPct={calc.principalPct} />

              {/* CTA */}
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold rounded-xl py-4 text-sm">
                Apply for This Loan →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
