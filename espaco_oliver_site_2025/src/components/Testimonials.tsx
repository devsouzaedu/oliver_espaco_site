"use client"

import React, { useState } from 'react';
import Image from 'next/image';

// Componente de estrelas para avaliação
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ana Paula",
      photo: "/images/garotas_feedback_pfp (1).jpg",
      rating: 5,
      date: "12 de Março, 2025",
      text: "Adorei o serviço! As unhas ficaram perfeitas e o atendimento foi excelente. A manicure foi super cuidadosa e atenciosa. Com certeza voltarei mais vezes.",
      verified: true
    },
    {
      id: 2,
      name: "Carla Silva",
      photo: "/images/garotas_feedback_pfp (2).jpg",
      rating: 5,
      date: "05 de Março, 2025",
      text: "Melhor lugar para fazer as unhas em Alphaville! O atendimento é impecável e os resultados são sempre incríveis. As cores são lindas e a durabilidade é ótima.",
      verified: true
    },
    {
      id: 3,
      name: "Juliana Costa",
      photo: "/images/garotas_feedback_pfp (3).jpg",
      rating: 5,
      date: "27 de Fevereiro, 2025",
      text: "Ambiente super aconchegante e profissionais excelentes! Minhas unhas nunca ficaram tão bonitas. Recomendo demais o Espaço Oliver para quem busca qualidade.",
      verified: true
    },
    {
      id: 4,
      name: "Mariana Alves",
      photo: "/images/garotas_feedback_pfp (4).jpg",
      rating: 5,
      date: "18 de Fevereiro, 2025",
      text: "Experiência maravilhosa! As unhas ficaram perfeitas e duradouras. Adorei o atendimento personalizado e a atenção aos detalhes. Já agendei meu próximo horário!",
      verified: true
    }
  ];

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl mb-3 text-center text-black" style={{ fontFamily: "var(--font-display-sans)" }}>
          Avaliações dos nossos clientes
        </h2>
        
        <div className="flex justify-center mb-2">
          <StarRating rating={5} />
        </div>
        
        <p className="text-center text-gray-600 mb-12">
          {testimonials.length} Avaliações
        </p>
        
        <div className="max-w-4xl mx-auto relative">
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md hover:bg-gray-100 z-10"
            aria-label="Avaliação anterior"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div>
            <div className="flex justify-center mb-4">
              <StarRating rating={activeTestimonial.rating} />
            </div>
            
            <p className="text-right text-gray-500 text-sm mb-2">
              {activeTestimonial.date}
            </p>
            
            <p className="text-center text-gray-800 mb-8 text-lg italic">
              "{activeTestimonial.text}"
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <div className="flex-shrink-0">
                <div className="relative w-16 h-16 overflow-hidden">
                  <Image
                    src={activeTestimonial.photo}
                    alt={activeTestimonial.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div>
                <div className="font-bold text-gray-900">
                  {activeTestimonial.name}
                </div>
                
                {activeTestimonial.verified && (
                  <div className="flex items-center text-teal-600 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Cliente Verificada
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md hover:bg-gray-100 z-10"
            aria-label="Próxima avaliação"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 ${activeIndex === index ? 'bg-pink-500' : 'bg-gray-300'}`}
                aria-label={`Ir para avaliação ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 