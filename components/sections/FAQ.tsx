'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Care sunt condițiile de eligibilitate?',
    answer:
      'Trebuie să aveți cel puțin 18 ani, să fiți rezident UE și să dețineți un act de identitate valabil. Acceptăm cereri de la angajați, persoane fizice autorizate și proprietari de afaceri cu un venit lunar minim de €1.000.',
  },
  {
    question: 'Cât de repede pot primi fondurile?',
    answer:
      'Majoritatea creditelor aprobate sunt finanțate în 2 ore. Verificarea AI se finalizează în mai puțin de 7 minute, iar odată aprobat, transferul este inițiat imediat în contul dvs. bancar.',
  },
  {
    question: 'Ce rate ale dobânzii oferiți?',
    answer:
      'Ratele noastre pornesc de la 3,9% DAE în funcție de profilul dvs. de credit, suma și termenul creditului. Puteți folosi calculatorul nostru pentru a vedea rata personalizată înainte de a aplica.',
  },
  {
    question: 'Datele mele sunt în siguranță?',
    answer:
      'Absolut. Folosim criptare AES pe 256 de biți de nivel bancar, suntem conformi PCI DSS Nivel 1 și certificați ISO 27001. Nu împărtășim niciodată informațiile dvs. cu terți fără consimțământul dvs. explicit.',
  },
  {
    question: 'Pot rambursa creditul înainte de termen?',
    answer:
      'Da, puteți rambursa creditul oricând fără penalități de rambursare anticipată. Credem în flexibilitate — rambursările parțiale anticipate sunt de asemenea acceptate și veți plăti dobândă doar pe soldul rămas.',
  },
  {
    question: 'Ce documente am nevoie pentru a aplica?',
    answer:
      'Doar un act de identitate emis de stat și dovada veniturilor (extrase bancare sau fluturași de salariu din ultimele 3 luni). Sistemul nostru AI poate verifica adesea automat identitatea și venitul, accelerând și mai mult procesul.',
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
            Întrebări frecvente
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Tot ce trebuie să știți despre FinCredit. Nu găsiți ce căutați? Contactați echipa noastră de suport.
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
