'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'What are the eligibility requirements?',
    answer:
      'You must be at least 18 years old, a resident of the EU, and have a valid ID. We accept applications from employed, self-employed, and business owners with a minimum monthly income of €1,000.',
  },
  {
    question: 'How fast can I receive my funds?',
    answer:
      'Most approved loans are funded within 2 hours. Our AI verification completes in under 7 minutes, and once approved, the transfer is initiated immediately to your bank account.',
  },
  {
    question: 'What interest rates do you offer?',
    answer:
      'Our rates start from 3.9% APR depending on your credit profile, loan amount, and loan term. You can use our calculator to see your personalized rate before applying.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. We use bank-grade 256-bit AES encryption, are PCI DSS Level 1 compliant, and ISO 27001 certified. We never share your information with third parties without your explicit consent.',
  },
  {
    question: 'Can I repay my loan early?',
    answer:
      'Yes, you can repay your loan at any time with zero prepayment penalties. We believe in flexibility — partial early repayments are also accepted, and you\'ll only pay interest on the remaining balance.',
  },
  {
    question: 'What documents do I need to apply?',
    answer:
      'Just a government-issued ID and proof of income (bank statements or pay stubs from the last 3 months). Our AI system can often verify your identity and income automatically, making the process even faster.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section
      id="faq"
      className="bg-[#0a0e1a] py-20 px-6"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently asked questions
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about FinCredit. Can&apos;t find what
            you&apos;re looking for? Contact our support team.
          </p>
        </div>

        {/* Accordion */}
        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="border-b border-white/[0.08]"
              >
                <button
                  type="button"
                  className="w-full flex justify-between items-center py-5 cursor-pointer text-left gap-4"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span
                    className={
                      isOpen
                        ? 'text-white font-medium'
                        : 'text-gray-300 font-medium'
                    }
                  >
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-indigo-400">
                    {isOpen ? (
                      <Minus size={18} aria-hidden="true" />
                    ) : (
                      <Plus size={18} aria-hidden="true" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="text-gray-400 text-sm leading-relaxed pb-5">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
