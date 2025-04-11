"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const OurSpaceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const images = [
    { 
      id: 1, 
      src: '/images/espaco_oliver_beauty_interno_cadeiras (1).jpg',
      alt: 'Espaço Oliver Beauty - Área interna'
    },
    { 
      id: 2, 
      src: '/images/espaco_oliver_beauty_interno_cadeiras (5).jpg',
      alt: 'Espaço Oliver Beauty - Estações de trabalho'
    },
    { 
      id: 3, 
      src: '/images/espaco_oliver_beauty_interno_esmaltes_na_parede (1).jpg',
      alt: 'Espaço Oliver Beauty - Parede de esmaltes'
    },
    { 
      id: 4, 
      src: '/images/espaco_oliver_beauty_foco_interno (1).jpg',
      alt: 'Espaço Oliver Beauty - Detalhes internos'
    },
    { 
      id: 5, 
      src: '/images/espaco_oliver_beauty_interno_cadeiras (3).jpg',
      alt: 'Espaço Oliver Beauty - Poltronas'
    },
    { 
      id: 6, 
      src: '/images/espaco_oliver_beauty_parede_logo.jpg',
      alt: 'Espaço Oliver Beauty - Parede com logo'
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      ref={ref}
      id="nosso-espaco"
      className="py-16 px-4 bg-[#F3EDE8]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
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
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              AMBIENTE
            </motion.p>
            <motion.h2 
              className="text-4xl mb-4 text-black" 
              style={{ fontFamily: "var(--font-instrument-serif)" }}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              Conheça Nosso Espaço
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto text-gray-600 mb-8" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Projetado para proporcionar uma experiência de beleza confortável e relaxante. Nosso ambiente combina elegância e aconchego para que você se sinta em casa.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {images.map((image) => (
              <motion.div 
                key={image.id}
                className="overflow-hidden rounded-lg shadow-md h-80 relative"
                variants={item}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Link 
              href="/agendar"
              className="inline-block bg-[#C59F6E] hover:bg-[#B08C5E] transition-colors text-white font-bold py-3 px-8 text-lg" 
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Agendar agora
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurSpaceSection; 