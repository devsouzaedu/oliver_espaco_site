"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const instagramUrl = "https://www.instagram.com/espacooliverbeauty/";
  
  const galleryItems = [
    {
      id: 1,
      image: "/images/convertedwebp/espaco_oliver_manicure_unhas1.webp",
      alt: "Manicure design exclusivo"
    },
    {
      id: 2,
      image: "/images/convertedwebp/espaco_oliver_manicure_unhas2.webp",
      alt: "Unhas decoradas"
    },
    {
      id: 3,
      image: "/images/convertedwebp/espaco_oliver_manicure_unhas3.webp",
      alt: "Design de unhas"
    },
    {
      id: 4,
      image: "/images/convertedwebp/espaco_oliver_manicure_unhas4.webp",
      alt: "Nail art exclusiva"
    },
    {
      id: 5,
      image: "/images/convertedwebp/espaco_oliver_manicure_pe.webp",
      alt: "Pedicure profissional"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Função para avançar para o próximo slide
  const nextSlide = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  // Função para voltar para o slide anterior
  const prevSlide = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  // Função para lidar com o carregamento completo da imagem
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // Auto-rotação dos slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl mb-4 text-center text-black" style={{ fontFamily: "var(--font-display-sans)" }}>
          Explore: Galeria de trabalhos
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Confira alguns dos nossos trabalhos mais recentes
        </p>
        
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg">
          {/* Botões de navegação */}
          <button 
            onClick={prevSlide} 
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-gray-900 p-2 rounded-full"
            aria-label="Slide anterior"
          >
            &#10094;
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-gray-900 p-2 rounded-full"
            aria-label="Próximo slide"
          >
            &#10095;
          </button>
          
          {/* Imagem atual com animação */}
          <AnimatePresence initial={false} mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-80 md:h-96 w-full"
            >
              <Link 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-[#C59F6E] rounded-full animate-spin"></div>
                  </div>
                )}
                <Image
                  src={galleryItems[currentIndex].image}
                  alt={galleryItems[currentIndex].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                  priority={currentIndex === 0}
                  loading={currentIndex === 0 ? "eager" : "lazy"}
                  quality={80}
                  onLoadingComplete={handleImageLoad}
                />
              </Link>
            </motion.div>
          </AnimatePresence>
          
          {/* Indicadores */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href={instagramUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border-2 border-black hover:bg-black hover:text-white transition-colors text-black font-bold py-3 px-8 text-lg" 
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            Veja nossos últimos trabalhos
          </Link>
        </div>

        <div className="text-center mt-8">
          <Link 
            href="https://wa.me/5511956184727?text=Olá,%20gostaria%20de%20agendar%20um%20horário%20no%20Espaço%20Oliver%20Beauty"
            target="_blank"
            className="inline-block bg-[#C59F6E] hover:bg-[#B08C5E] transition-colors text-white font-bold py-3 px-8 text-lg" 
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            Agendar agora
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Gallery; 