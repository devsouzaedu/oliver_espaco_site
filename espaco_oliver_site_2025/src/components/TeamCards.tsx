"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const TeamCards = () => {
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
            NOSSOS PROFISSIONAIS
          </motion.p>
          <motion.h2 
            className="text-4xl mb-4 text-black" 
            style={{ fontFamily: "var(--font-instrument-serif)" }}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Conheça Nossa Equipe
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600" 
            style={{ fontFamily: "var(--font-funnel-sans)" }}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Profissionais apaixonados e altamente qualificados, prontos para transformar seu visual com expertise e cuidado.
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="relative group overflow-hidden shadow-lg">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/convertedwebp/card1_conhecanossotime_espaço_oliver.webp"
                alt="Conheça nosso time"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
                <motion.h3 
                  className="text-white text-2xl mb-4" 
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Conheça nosso time
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/equipe"
                    className="border-2 border-white hover:border-gray-300 transition-colors text-white font-bold py-2 px-6 text-lg"
                    style={{ fontFamily: "var(--font-instrument-serif)" }}
                  >
                    Conheça agora
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TeamCards; 