"use client"

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const faqs = [
    {
      id: 1,
      question: 'Quais tipos de alongamento de unha vocês oferecem?',
      answer: 'Oferecemos diversos tipos de alongamento, incluindo gel, fibra de vidro e acrílico. Cada técnica tem suas próprias vantagens e nossa equipe pode ajudar você a escolher a mais adequada para suas necessidades.'
    },
    {
      id: 2,
      question: 'Quanto tempo dura o atendimento para manicure e pedicure?',
      answer: 'Um atendimento completo de manicure e pedicure tradicional dura em média 1 hora. Perfeito para quem tem a agenda apertada ou precisa encaixar na rotina.'
    },
    {
      id: 3,
      question: 'Os materiais são esterilizados e individuais?',
      answer: 'Sim! A segurança e higiene de nossas clientes é prioridade. Utilizamos materiais esterilizados, seguindo rigorosamente os protocolos sanitários, e vários itens são de uso individual.'
    },
    {
      id: 4,
      question: 'Vocês fazem nail art personalizada? Posso levar referências?',
      answer: 'Com certeza! Adoramos criar designs personalizados. Fique à vontade para trazer referências, fotos ou ideias e nossas nail designers farão o possível para criar algo único para você.'
    },
    {
      id: 5,
      question: 'Quanto tempo dura o esmalte em gel ou o alongamento?',
      answer: 'O esmalte em gel dura em média 2 a 3 semanas, enquanto os alongamentos podem durar de 3 a 4 semanas, dependendo do crescimento natural das unhas e dos cuidados diários.'
    },
    {
      id: 6,
      question: 'Com quanto tempo devo voltar para fazer a manutenção?',
      answer: 'Recomendamos manutenção a cada 15-21 dias para esmaltação em gel e a cada 21-30 dias para alongamentos, dependendo do crescimento das suas unhas.'
    },
    {
      id: 7,
      question: 'Tenho unhas fracas ou roídas. Posso fazer alongamento?',
      answer: 'Sim! Na verdade, o alongamento pode ser uma ótima solução para quem tem unhas fracas ou roídas. Nossas profissionais irão avaliar o melhor método para o seu caso específico.'
    },
    {
      id: 8,
      question: 'Vocês trabalham com marcas específicas de esmalte ou gel?',
      answer: 'Trabalhamos com as melhores marcas do mercado, garantindo qualidade e durabilidade em todos os nossos serviços. Entre nossas marcas parceiras estão Andreia, OPI, CND e Colorama.'
    },
    {
      id: 9,
      question: 'Preciso marcar horário ou aceitam encaixe?',
      answer: 'Recomendamos agendar com antecedência para garantir disponibilidade, especialmente em horários de pico. Porém, sempre que possível, tentamos acomodar encaixes.'
    },
    {
      id: 10,
      question: 'Vocês oferecem pacotes mensais ou promoções?',
      answer: 'Sim, oferecemos pacotes mensais com desconto para nossas clientes frequentes. Também temos promoções sazonais e combos de serviços. Fique ligada em nossas redes sociais para saber das novidades!'
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
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p 
              className="uppercase text-sm tracking-wider mb-2 text-gray-600" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              DÚVIDAS FREQUENTES
            </motion.p>
            <motion.h2 
              className="text-4xl mb-4 text-black" 
              style={{ fontFamily: "var(--font-instrument-serif)" }}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              FAQ – Espaço Oliver Beauty
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto text-gray-600 mb-8" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.8, delay: 0.5 }}
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
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
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
                      transition={{ duration: 0.3 }}
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