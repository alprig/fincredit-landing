'use client'

import { motion, type Variants } from 'framer-motion'

const testimonials = [
  {
    name: 'Maria Kowalski',
    role: 'Freelance Designer, Warsaw',
    initials: 'MK',
    avatarColor: 'bg-violet-600',
    stars: 5,
    quote:
      'FinCredit approved my loan in under 15 minutes. The entire process was seamless — no paperwork, no branch visits. I had the funds in my account the same day.',
  },
  {
    name: 'Alex Thompson',
    role: 'Business Owner, London',
    initials: 'AT',
    avatarColor: 'bg-indigo-600',
    stars: 5,
    quote:
      'As an entrepreneur, I needed capital for my startup. Traditional banks took weeks. FinCredit? Done in one afternoon. The AI scoring actually understood my business potential.',
  },
  {
    name: 'Sophie Laurent',
    role: 'Marketing Director, Paris',
    initials: 'SL',
    avatarColor: 'bg-sky-600',
    stars: 5,
    quote:
      'I was skeptical about online lending, but FinCredit changed my mind completely. The transparency is unmatched — I knew exactly what I was paying from day one.',
  },
]

const socialProof = [
  { stat: '4.9/5', label: 'on TrustPilot' },
  { stat: '2,400+', label: 'on-site reviews' },
  { stat: 'NPS 76', label: 'industry-leading' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export default function Testimonials() {
  return (
    <section className="bg-[#0a0e1a] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3 block">
            What Our Clients Say
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Trusted by thousands of professionals
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            Real stories from real people who transformed their financial lives with FinCredit.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map(({ name, role, initials, avatarColor, stars, quote }) => (
            <motion.div
              key={name}
              variants={cardVariants}
              className="bg-[#111827] border border-white/[0.08] rounded-2xl p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-base leading-none">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed italic flex-1">
                &ldquo;{quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                <div
                  className={`w-10 h-10 rounded-full ${avatarColor} flex items-center justify-center shrink-0`}
                >
                  <span className="text-white text-xs font-semibold">{initials}</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">{name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          className="border-t border-white/[0.08] mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
            {socialProof.map(({ stat, label }) => (
              <div key={stat} className="sm:px-10 text-center">
                <p className="text-white font-bold text-xl">{stat}</p>
                <p className="text-gray-500 text-sm mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
