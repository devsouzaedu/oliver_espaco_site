"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const GiftCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section 
      ref={ref}
      className="py-16 px-4 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative aspect-square overflow-hidden shadow-lg mb-8"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <picture>
              <source srcSet="/images/convertedwebp/cartao_de_presente_espaco_oliver_beauty.webp" type="image/webp" />
              <img
                src="/images/convertedwebp/cartao_de_presente_espaco_oliver_beauty.jpg"
                alt="Cartão presente"
                className="object-cover w-full h-full"
              />
            </picture>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <motion.p 
              className="text-gray-600 text-sm uppercase tracking-wider mb-2" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              CARTÃO DE PRESENTE
            </motion.p>
            <motion.h2 
              className="text-3xl mb-6 max-w-2xl mx-auto text-black" 
              style={{ fontFamily: "var(--font-instrument-serif)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Presenteie quem você ama com uma experiência de manicure que marca pra sempre
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="https://api.whatsapp.com/send/?phone=5511956184727&text=Oi%2C+gostaria+de+comprar+um+agendamento+como+presente&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C59F6E] hover:bg-[#B08C5E] transition-colors text-white font-bold py-3 px-8 inline-block"
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                Compre agora seu cartão-presente
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default GiftCard; 