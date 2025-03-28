"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const AboutSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section 
      ref={ref}
      className="py-24 bg-[#f9f5f2]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-3xl mb-8 tracking-widest uppercase text-black" 
              style={{ fontFamily: "var(--font-instrument-serif)", letterSpacing: '0.2em' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Espaço Oliver
            </motion.h2>
            
            <motion.p 
              className="text-gray-700 text-lg leading-loose text-center mx-auto" 
              style={{ fontFamily: "var(--font-funnel-sans)", maxWidth: '80%', lineHeight: '1.8' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              O Espaço Oliver, um estúdio de nail art incrível bem no centro de Barueri, 
              torna a experiência de fazer as unhas algo especial e único para cada cliente. 
              Aqui, você encontra coleções sazonais com designs e cores pensados especialmente 
              para quem quer se sentir cuidada, bonita e cheia de estilo, tudo com um toque bem pessoal.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection; 