"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ResponsiveImage from './ResponsiveImage';

const OurSpaceSection = () => {
  const images = [
    { 
      id: 1, 
      webp: '/images/convertedwebp/espaco_oliver_beauty_interno_cadeiras (1).webp',
      fallback: '/images/convertedwebp/espaco_oliver_beauty_interno_cadeiras (1).jpg',
      alt: 'Espaço Oliver Beauty - Área interna'
    },
    { 
      id: 2, 
      webp: '/images/convertedwebp/espaco_oliver_beauty_interno_cadeiras (5).webp',
      fallback: '/images/convertedwebp/espaco_oliver_beauty_interno_cadeiras (5).jpg',
      alt: 'Espaço Oliver Beauty - Estações de trabalho'
    },
    { 
      id: 3, 
      webp: '/images/convertedwebp/espaco_oliver_beauty_interno_esmaltes_na_parede (1).webp',
      fallback: '/images/convertedwebp/espaco_oliver_beauty_interno_esmaltes_na_parede (1).jpg',
      alt: 'Espaço Oliver Beauty - Parede de esmaltes'
    },
    { 
      id: 4, 
      webp: '/images/convertedwebp/espaco_oliver_beauty_foco_interno (1).webp',
      fallback: '/images/convertedwebp/espaco_oliver_beauty_foco_interno (1).jpg',
      alt: 'Espaço Oliver Beauty - Detalhes internos'
    },
    { 
      id: 5, 
      webp: '/images/convertedwebp/espaco_oliver_beauty_interno_cadeiras (3).webp',
      fallback: '/images/convertedwebp/espaco_oliver_beauty_interno_cadeiras (3).jpg',
      alt: 'Espaço Oliver Beauty - Poltronas'
    },
    { 
      id: 6, 
      webp: '/images/convertedwebp/espaco_oliver_beauty_parede_logo.webp',
      fallback: '/images/convertedwebp/espaco_oliver_beauty_parede_logo.jpg',
      alt: 'Espaço Oliver Beauty - Parede com logo'
    },
  ];

  return (
    <section 
      id="nosso-espaco"
      className="py-16 px-4 bg-[#F3EDE8]"
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p 
              className="uppercase text-sm tracking-wider mb-2 text-gray-600" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
            >
              AMBIENTE
            </p>
            <h2 
              className="text-4xl mb-4 text-black" 
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Conheça Nosso Espaço
            </h2>
            <p 
              className="max-w-2xl mx-auto text-gray-600 mb-8" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
            >
              Projetado para proporcionar uma experiência de beleza confortável e relaxante. Nosso ambiente combina elegância e aconchego para que você se sinta em casa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div 
                key={image.id}
                className="overflow-hidden rounded-lg shadow-md h-80 relative hover:scale-[1.03] transition-all duration-300"
              >
                <picture>
                  <source srcSet={image.webp} type="image/webp" />
                  <img
                    src={image.fallback}
                    alt={image.alt}
                    className="absolute w-full h-full object-cover"
                    loading="lazy"
                  />
                </picture>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
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
      </div>
    </section>
  );
};

export default OurSpaceSection; 