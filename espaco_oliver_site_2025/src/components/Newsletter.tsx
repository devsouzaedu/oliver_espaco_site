"use client"

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Newsletter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section 
      ref={ref}
      className="py-16 px-4 bg-[#F3EDE8]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl mb-4 text-black" 
            style={{ fontFamily: "var(--font-instrument-serif)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Faça parte da nossa comunidade
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-8 max-w-2xl mx-auto" 
            style={{ fontFamily: "var(--font-funnel-sans)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Entre no grupo da nossa comunidade para ser a primeira a saber sobre novidades, eventos, promoções e mais!
          </motion.p>

          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="https://api.whatsapp.com/send/?phone=5511956184727&text=Oi%2C+gostaria+de+entrar+no+grupo+da+comunidade+Espa%C3%A7o+Oliver+Beauty&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black hover:border-gray-600 transition-colors text-black font-bold py-3 px-8 inline-flex items-center"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span>Entrar na comunidade</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Newsletter; 