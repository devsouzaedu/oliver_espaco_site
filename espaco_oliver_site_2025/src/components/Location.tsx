"use client"

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const Location = () => {
  const businessHours = [
    { day: 'Seg', hours: '08h00 às 20h00' },
    { day: 'Ter', hours: '08h00 às 20h00' },
    { day: 'Qua', hours: '08h00 às 20h00' },
    { day: 'Qui', hours: '08h00 às 20h00' },
    { day: 'Sex', hours: '08h00 às 20h00' },
    { day: 'Sáb', hours: '08h00 às 18h00' },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
      className="py-16 px-4 bg-gray-50"
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
            Venha nos conhecer
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-8" 
            style={{ fontFamily: "var(--font-funnel-sans)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Av. Campos Sales 303, Centro - Barueri
          </motion.p>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {businessHours.map((schedule, index) => (
              <motion.div 
                key={schedule.day} 
                className="p-4 bg-white shadow-sm"
                variants={item}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
              >
                <p className="font-bold text-gray-800" style={{ fontFamily: "var(--font-instrument-serif)" }}>
                  {schedule.day}
                </p>
                <p className="text-gray-600" style={{ fontFamily: "var(--font-funnel-sans)" }}>
                  {schedule.hours}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p 
            className="text-gray-800 mb-6 max-w-2xl mx-auto" 
            style={{ fontFamily: "var(--font-funnel-sans)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Entre em contato via WhatsApp para agendar um horário ou saber mais
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black hover:border-gray-600 transition-colors text-black font-bold py-3 px-8 inline-block"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Fale conosco pelo WhatsApp
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Location; 