"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  // Versão otimizada da primeira imagem
  const optimizedFirstImage = {
    webp: '/images/optimized/hero-first-slide.webp',
    jpg: '/images/optimized/hero-first-slide.jpg'
  };

  const images = [
    {
      webp: optimizedFirstImage.webp,
      jpg: optimizedFirstImage.jpg
    },
    {
      webp: '/images/optimized/hero-slide-2.webp',
      jpg: '/images/optimized/hero-slide-2.jpg'
    },
    {
      webp: '/images/optimized/hero-slide-3.webp',
      jpg: '/images/optimized/hero-slide-3.jpg'
    },
    {
      webp: '/images/optimized/hero-slide-4.webp',
      jpg: '/images/optimized/hero-slide-4.jpg'
    },
    {
      webp: '/images/optimized/hero-slide-5.webp',
      jpg: '/images/optimized/hero-slide-5.jpg'
    },
    {
      webp: '/images/optimized/hero-slide-6.webp',
      jpg: '/images/optimized/hero-slide-6.jpg'
    },
    {
      webp: '/images/optimized/hero-slide-7.webp',
      jpg: '/images/optimized/hero-slide-7.jpg'
    },
    {
      webp: '/images/optimized/hero-slide-8.webp',
      jpg: '/images/optimized/hero-slide-8.jpg'
    },
    {
      webp: '/images/optimized/hero-slide-9.webp',
      jpg: '/images/optimized/hero-slide-9.jpg'
    },
    // Novas imagens de spa dos pés
    {
      webp: '/images/optimized/espaco_oliver_esmalteria_barueri_alphavlle_spa_pes_horizontal_capa.jpg',
      jpg: '/images/optimized/espaco_oliver_esmalteria_barueri_alphavlle_spa_pes_horizontal_capa.jpg'
    },
    {
      webp: '/images/optimized/espaco_oliver_esmalteria_barueri_alphavlle_spa_pes_fazendo_servico_atendendo (2).jpg',
      jpg: '/images/optimized/espaco_oliver_esmalteria_barueri_alphavlle_spa_pes_fazendo_servico_atendendo (2).jpg'
    },
    {
      webp: '/images/optimized/espaco_oliver_esmalteria_barueri_alphavlle_spa_pes_cadeira_foto.jpg',
      jpg: '/images/optimized/espaco_oliver_esmalteria_barueri_alphavlle_spa_pes_cadeira_foto.jpg'
    }
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [highQualityLoaded, setHighQualityLoaded] = useState(false);
  
  useEffect(() => {
    // Carregar a versão de alta qualidade da primeira imagem
    if (typeof window !== 'undefined') {
      const highQualityImage = new window.Image();
      highQualityImage.src = images[0].jpg;
      highQualityImage.onload = () => setHighQualityLoaded(true);
    }
    
    // Iniciar o carrossel apenas após carregamento inicial
    const timer = setTimeout(() => {
      const carouselInterval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      
      return () => {
        clearInterval(carouselInterval);
      };
    }, 5000); // Espera 5 segundos antes de iniciar o carrossel
    
    return () => {
      clearTimeout(timer);
    };
  }, [images.length]);

  return (
    <div className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Primeira imagem otimizada para LCP (baixa qualidade) */}
      <div 
        className={`absolute inset-0 z-0 ${highQualityLoaded ? 'opacity-0' : 'opacity-100'}`}
        style={{ transition: 'opacity 1000ms ease-in-out' }}
      >
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet={optimizedFirstImage.webp} type="image/webp" />
            <img
              src={optimizedFirstImage.jpg}
              alt="Espaço Oliver Beauty"
              className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              style={{ 
                transform: 'translateZ(0)',
                willChange: 'opacity'
              }}
            />
          </picture>
        </div>
      </div>
      
      {/* Primeira imagem com alta prioridade para LCP (alta qualidade) */}
      <div 
        className={`absolute inset-0 z-0 ${currentImageIndex === 0 && highQualityLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transition: 'opacity 1000ms ease-in-out' }}
      >
        <picture>
          <source srcSet={optimizedFirstImage.webp} type="image/webp" />
          <img
            src={optimizedFirstImage.jpg}
            alt="Espaço Oliver Beauty"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
            loading="eager"
          />
        </picture>
      </div>
      
      {/* Imagens restantes com transição */}
      {images.slice(1).map((image, index) => (
        <div 
          key={index + 1}
          className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out"
          style={{ 
            opacity: currentImageIndex === index + 1 ? 1 : 0,
          }}
        >
          <picture>
            <source srcSet={image.webp} type="image/webp" />
            <img
              src={image.jpg}
              alt={`Espaço Oliver Beauty - Slide ${index + 2}`}
              className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
              loading="lazy"
            />
          </picture>
        </div>
      ))}
      
      {/* Conteúdo */}
      <motion.div 
        className="z-10 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl font-bold mb-4" 
          style={{ fontFamily: "var(--font-instrument-serif)" }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Unhas feitas
        </motion.h1>
        <motion.h2 
          className="text-3xl mb-8" 
          style={{ fontFamily: "var(--font-instrument-serif)" }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Você feliz
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link 
            href="https://wa.me/5511956184727?text=Olá,%20gostaria%20de%20agendar%20um%20horário%20no%20Espaço%20Oliver%20Beauty"
            target="_blank"
            className="border-2 border-white hover:border-gray-300 transition-colors text-white font-bold py-3 px-8 text-lg"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            Agendar agora
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Indicadores de imagem */}
      <div className="absolute bottom-6 z-10 flex space-x-2 justify-center w-full">
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
      </div>
    </div>
  );
};

export default Hero;