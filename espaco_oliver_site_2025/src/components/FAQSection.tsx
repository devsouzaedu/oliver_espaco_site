"use client"

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const faqs = [
    {
      id: 1,
      question: 'Quanto tempo dura o atendimento (média todos os procedimentos)',
      answer: 'Entre 1h a 3h30min'
    },
    {
      id: 2,
      question: 'Quanto tempo dura a esmaltação em gel em unhas naturais?',
      answer: 'Até 25 dias'
    },
    {
      id: 3,
      question: 'Precisa fazer manutenção, se sim, quanto tempo?',
      answer: 'Sim, recomendamos o período dentro de 30 dias, podendo fazer com 15, 20 ou 30 dias'
    },
    {
      id: 4,
      question: 'Preciso marcar horário ou aceitam encaixe?',
      answer: 'Sim, todos os procedimentos são feitos mediante agendamento prévio'
    },
    {
      id: 5,
      question: 'Vocês oferecem pacotes mensais ou promoções?',
      answer: 'Oferecemos algumas promoções de épocas, fique ligada no nosso site e Instagram que você sempre verá!'
    },
    {
      id: 6,
      question: 'Unhas roídas podem fazer alongamento?',
      answer: 'Sim, é perfeitamente possivel realizar alongamentos em unhas roidas, precisa ser feita primeiramente uma analise do quão roída, e como 1ª manutenção tem o intervalo de menos de 15 dias, entre em contato para maiores duvidas'
    },
    {
      id: 7,
      question: 'Trabalham com podologia?',
      answer: 'Não, mas estamos aprimorando nosso time!'
    },
    {
      id: 8,
      question: 'Atendem crianças?',
      answer: 'Sim, mas somente procedimentos mais básicos'
    },
    {
      id: 9,
      question: 'Fazem manutenções de outra profissional?',
      answer: 'Sim, somente mediante à foto de como está'
    },
    {
      id: 10,
      question: 'Qual o melhor procedimento para unhas?',
      answer: 'o que for ideal para seu dia a dia!'
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section 
      ref={ref}
      id="faq"
      className="py-16 px-4 bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <motion.p 
              className="uppercase text-sm tracking-wider mb-2 text-gray-600" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              DÚVIDAS FREQUENTES
            </motion.p>
            <motion.h2 
              className="text-4xl mb-4 text-black" 
              style={{ fontFamily: "var(--font-instrument-serif)" }}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              FAQ – Espaço Oliver Beauty
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto text-gray-600 mb-8" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              Encontre respostas para as perguntas mais comuns sobre nossos serviços e atendimento.
            </motion.p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={faq.id}
                className="border border-gray-200 rounded-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.25, delay: 0.1 + index * 0.05 }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 
                    className="text-lg font-medium text-black"
                    style={{ fontFamily: "var(--font-instrument-serif)" }}
                  >
                    {faq.question}
                  </h3>
                  <span className="text-black">
                    {activeIndex === index ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p
                          className="text-gray-600"
                          style={{ fontFamily: "var(--font-funnel-sans)" }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection; 