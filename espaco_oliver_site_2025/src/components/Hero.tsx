"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  const images = [
    '/images/espaco_oliver_beauty_time_todas_juntas (4).JPG',
    '/images/card1_conhecanossotime_espaço_oliver.jpeg',
    '/images/espaco_oliver_beauty_foco_interno (1).jpg',
    '/images/espaco_oliver_beauty_interno_cadeiras (1).jpg',
    '/images/espaco_oliver_beauty_interno_cadeiras (2).jpg',
    '/images/espaco_oliver_beauty_interno_cadeiras (3).jpg',
    '/images/espaco_oliver_beauty_interno_cadeiras (4).jpg',
    '/images/espaco_oliver_beauty_interno_cadeiras (6).jpg',
    '/images/espaco_oliver_beauty_time_todas_juntas (2).JPG'
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Imagens com transição */}
      {images.map((image, index) => (
        <div 
          key={index}
          className="absolute inset-0 bg-cover bg-top z-0 transition-opacity duration-1000 ease-in-out"
          style={{ 
            backgroundImage: `url('${image}')`,
            opacity: currentImageIndex === index ? 1 : 0,
            filter: 'brightness(0.7)'
          }}
        />
      ))}
      
      {/* Conteúdo */}
      <motion.div 
        className="z-10 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.h1 
          className="text-5xl font-bold mb-4" 
          style={{ fontFamily: "var(--font-instrument-serif)" }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          Unhas feitas
        </motion.h1>
        <motion.h2 
          className="text-3xl mb-8" 
          style={{ fontFamily: "var(--font-instrument-serif)" }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          Você feliz
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Link 
            href="/agendar" 
            className="border-2 border-white hover:border-gray-300 transition-colors text-white font-bold py-3 px-8 text-lg"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            Agendar agora
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Indicadores de imagem */}
      <motion.div 
        className="absolute bottom-6 z-10 flex space-x-2 justify-center w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentImageIndex === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;