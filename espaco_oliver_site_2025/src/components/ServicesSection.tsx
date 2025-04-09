"use client"

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const services = [
    { id: 1, name: 'Manicure tradicional' },
    { id: 2, name: 'Pedicure tradicional' },
    { id: 3, name: 'Esmaltação comum' },
    { id: 4, name: 'Esmaltação em gel' },
    { id: 5, name: 'Francesinha tradicional ou reversa' },
    { id: 6, name: 'Nail art (desenhos, pedrarias, adesivos etc.)' },
    { id: 7, name: 'Alongamento de unhas em gel' },
    { id: 8, name: 'Alongamento de unhas em fibra de vidro' },
    { id: 9, name: 'Alongamento acrílico' },
    { id: 10, name: 'Blindagem das unhas' },
    { id: 11, name: 'Spa dos pés e das mãos' },
    { id: 12, name: 'Hidratação profunda das cutículas' },
    { id: 13, name: 'Remoção de cutículas (com alicate ou método russo)' },
    { id: 14, name: 'Banho de gel' },
    { id: 15, name: 'Manutenção de alongamento' },
    { id: 16, name: 'Remoção de alongamento' },
    { id: 17, name: 'Unhas encapsuladas' },
    { id: 18, name: 'Reconstrução de unhas quebradas' },
    { id: 19, name: 'Unhas decoradas para ocasiões especiais (noivas, festas etc.)' }
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      ref={ref}
      id="servicos"
      className="py-16 px-4 bg-[#F3EDE8]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
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
              NOSSOS SERVIÇOS
            </motion.p>
            <motion.h2 
              className="text-4xl mb-4 text-black" 
              style={{ fontFamily: "var(--font-instrument-serif)" }}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Serviços Oferecidos
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto text-gray-600 mb-8" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Oferecemos uma variedade de serviços para deixar suas unhas impecáveis e realçar sua beleza natural.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {services.map((service) => (
              <motion.div 
                key={service.id}
                className="bg-white p-5 rounded-md shadow-sm border border-gray-100"
                variants={item}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
              >
                <h3 
                  className="text-lg font-medium text-black"
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                  {service.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link 
              href="/contato"
              className="border border-black hover:border-gray-600 transition-colors text-black font-bold py-3 px-8 inline-block"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Agende seu horário
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection; 