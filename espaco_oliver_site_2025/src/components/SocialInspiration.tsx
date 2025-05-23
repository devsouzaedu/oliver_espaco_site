"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const SocialInspiration = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section 
      ref={ref}
      className="py-16 px-4 bg-[#F3EDE8]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative aspect-video overflow-hidden shadow-lg mb-8"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <picture>
              <source srcSet="/images/convertedwebp/hero_espaco_oliver_manicures.webp" type="image/webp" />
              <img
                src="/images/convertedwebp/hero_espaco_oliver_manicures.jpg"
                alt="Inspirações de unhas"
                className="w-full h-full object-cover"
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
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              FIQUE INSPIRADA
            </motion.p>
            <motion.h2 
              className="text-3xl mb-6 max-w-2xl mx-auto text-black" 
              style={{ fontFamily: "var(--font-instrument-serif)" }}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Siga o Espaço Oliver no Instagram @espacooliverbeauty
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="https://www.instagram.com/espacooliverbeauty"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black hover:border-gray-600 transition-colors text-black font-bold py-3 px-8 inline-block"
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                Seguir
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SocialInspiration; 