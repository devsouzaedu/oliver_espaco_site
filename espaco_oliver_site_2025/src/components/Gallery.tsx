"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Gallery = () => {
  const instagramUrl = "https://www.instagram.com/espacooliverbeauty/";
  
  const galleryItems = [
    {
      id: 1,
      image: "/images/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_unhas (1).jpeg",
      alt: "Manicure design exclusivo"
    },
    {
      id: 2,
      image: "/images/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_unhas (2).jpeg",
      alt: "Unhas decoradas"
    },
    {
      id: 3,
      image: "/images/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_unhas (3).jpg",
      alt: "Design de unhas"
    },
    {
      id: 4,
      image: "/images/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_unhas (1).jpg",
      alt: "Nail art exclusiva"
    },
    {
      id: 5,
      image: "/images/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_pé.jpg",
      alt: "Pedicure profissional"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl mb-4 text-center text-black" style={{ fontFamily: "var(--font-display-sans)" }}>
          Explore: Galeria de trabalhos
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Confira alguns dos nossos trabalhos mais recentes
        </p>
        
        <div className="relative w-full overflow-hidden">
          <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {galleryItems.map((item) => (
              <div 
                key={item.id}
                className="snap-center flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
              >
                <Link 
                  href={instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-96 w-full">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                </Link>
              </div>
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