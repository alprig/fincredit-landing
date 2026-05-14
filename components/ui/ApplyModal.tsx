'use client'

import { useEffect, useState } from 'react'
import { X, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FormState {
  name: string
  phone: string
  amount: string
  purpose: string
}

const AMOUNTS = ['€1.000 – €5.000', '€5.000 – €15.000', '€15.000 – €30.000', '€30.000 – €50.000']
const PURPOSES = ['Cheltuieli personale', 'Afaceri', 'Imobiliare', 'Mașină', 'Altele']

export default function ApplyModal() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormState>({ name: '', phone: '', amount: '', purpose: '' })

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('openApplyModal', handler)
    return () => window.removeEventListener('openApplyModal', handler)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  function close() {
    setOpen(false)
    setTimeout(() => setSubmitted(false), 300)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close} />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-[#0d1117] border border-white/[0.1] shadow-2xl shadow-black/60 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-7 pt-7 pb-5 border-b border-white/[0.07]">
          <div>
            <h2 className="text-white font-bold text-xl">Aplică pentru un Credit</h2>
            <p className="text-gray-400 text-sm mt-0.5">Completați detaliile — vă vom contacta în 15 min</p>
          </div>
          <button
            onClick={close}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 px-7 py-12 text-center">
            <CheckCircle2 size={52} className="text-emerald-400" />
            <h3 className="text-white font-bold text-xl">Cerere Trimisă!</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Echipa noastră va revizui cererea dvs. și vă va contacta în 15 minute.
            </p>
            <button
              onClick={close}
              className="mt-2 px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors"
            >
              Închide
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-7 py-6">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-sm font-medium">Nume Complet</label>
              <input
                required
                type="text"
                placeholder="Ion Popescu"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={cn(
                  'w-full bg-[#1a2035] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm',
                  'focus:outline-none focus:border-indigo-500/60 focus:bg-[#1e2540] transition-colors'
                )}
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-sm font-medium">Număr de Telefon</label>
              <input
                required
                type="tel"
                placeholder="+1 234 567 890"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={cn(
                  'w-full bg-[#1a2035] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm',
                  'focus:outline-none focus:border-indigo-500/60 focus:bg-[#1e2540] transition-colors'
                )}
              />
            </div>

            {/* Amount */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-sm font-medium">Suma Creditului</label>
              <select
                required
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
                className={cn(
                  'w-full bg-[#1a2035] border border-white/[0.08] rounded-xl px-4 py-3 text-sm transition-colors cursor-pointer',
                  'focus:outline-none focus:border-indigo-500/60 focus:bg-[#1e2540]',
                  form.amount ? 'text-white' : 'text-gray-600'
                )}
              >
                <option value="" disabled>Selectați suma</option>
                {AMOUNTS.map((a) => <option key={a} value={a} className="bg-[#1a2035] text-white">{a}</option>)}
              </select>
            </div>

            {/* Purpose */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-sm font-medium">Scopul Creditului</label>
              <select
                required
                value={form.purpose}
                onChange={(e) => setForm({ ...form, purpose: e.target.value })}
                className={cn(
                  'w-full bg-[#1a2035] border border-white/[0.08] rounded-xl px-4 py-3 text-sm transition-colors cursor-pointer',
                  'focus:outline-none focus:border-indigo-500/60 focus:bg-[#1e2540]',
                  form.purpose ? 'text-white' : 'text-gray-600'
                )}
              >
                <option value="" disabled>Selectați scopul</option>
                {PURPOSES.map((p) => <option key={p} value={p} className="bg-[#1a2035] text-white">{p}</option>)}
              </select>
            </div>

            <button
              type="submit"
              className="mt-1 w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-900/40"
            >
              Aplică Acum — Gratuit
            </button>

            <p className="text-center text-xs text-gray-600">
              Fără verificare de credit · Pre-aprobare instantanee
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
