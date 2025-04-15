"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Gallery = () => {
  const instagramUrl = "https://www.instagram.com/espacooliverbeauty/";
  
  // Apenas 4 imagens em um grid simples
  const galleryItems = [
    {
      id: 1,
      image: "/images/convertedwebp/espaco_oliver_manicure_unhas1.webp",
      alt: "Unhas design exclusivo"
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
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl mb-4 text-center text-black" style={{ fontFamily: "var(--font-display-sans)" }}>
          Explore: Galeria de trabalhos
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Confira alguns dos nossos trabalhos mais recentes
        </p>
        
        {/* Grid simples de 4 fotos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
          {galleryItems.map((item) => (
            <div key={item.id} className="aspect-square relative rounded-lg overflow-hidden shadow-md">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
                priority={item.id <= 2}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
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
    </section>
  );
};

export default Gallery; 