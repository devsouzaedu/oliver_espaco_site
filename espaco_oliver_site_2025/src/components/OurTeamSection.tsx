"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ResponsiveImage from './ResponsiveImage';

const OurTeamSection = () => {
  const team = [
    {
      id: 1,
      name: 'Mariana',
      role: 'Nail Designer',
      webp: '/images/convertedwebp/espaco_oliver_beauty_time_mariana (1).webp',
      fallback: '/images/convertedwebp/espaco_oliver_beauty_time_mariana (1).jpg'
    },
    {
      id: 2,
      name: 'Joice',
      role: 'Nail Designer',
      webp: '/images/convertedwebp/espaco_oliver_beauty_time_joice (1).webp',
      fallback: '/images/convertedwebp/espaco_oliver_beauty_time_joice (1).jpg'
    },
    {
      id: 3,
      name: 'Nega',
      role: 'Nail Designer',
      webp: '/images/convertedwebp/espaco_oliver_beauty_time_nega.webp',
      fallback: '/images/convertedwebp/espaco_oliver_beauty_time_nega.jpg'
    },
    {
      id: 4,
      name: 'Leticia',
      role: 'Nail Designer',
      webp: '/images/convertedwebp/espaco_oliver_beauty_time_leticia.webp',
      fallback: '/images/convertedwebp/espaco_oliver_beauty_time_leticia.jpg'
    },
    {
      id: 5,
      name: 'Giovana',
      role: 'Nail Designer',
      webp: '/images/convertedwebp/espaco_oliver_beauty_time_giovana2.webp',
      fallback: '/images/convertedwebp/espaco_oliver_beauty_time_giovana2.jpg'
    },
    {
      id: 6,
      name: 'Simone',
      title: 'Manicure',
      image:
      {
        webp: '/images/convertedwebp/espaco_oliver_beauty_time_simone (1).webp',
        fallback: '/images/convertedwebp/espaco_oliver_beauty_time_simone (1).jpg'
      }
    }
  ];

  return (
    <section id="nosso-time" className="py-16 px-4 bg-[#F3EDE8]">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p 
              className="uppercase text-sm tracking-wider mb-2 text-gray-600" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
            >
              PROFISSIONAIS
            </p>
            <h2 
              className="text-4xl mb-4 text-black" 
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Nosso Time
            </h2>
            <p 
              className="max-w-2xl mx-auto text-gray-600 mb-8" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
            >
              Conheça nossas profissionais apaixonadas e altamente capacitadas, prontas para cuidar de você.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <motion.div 
                key={member.id}
                className="bg-white rounded-lg overflow-hidden shadow-md"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="h-72 relative">
                  <picture>
                    <source srcSet={member.webp} type="image/webp" />
                    <img
                      src={member.fallback}
                      alt={`${member.name} - ${member.role}`}
                      className="absolute w-full h-full object-cover object-top"
                      loading="eager"
                    />
                  </picture>
                </div>
                <div className="p-6">
                  <h3 
                    className="text-xl font-semibold text-black mb-1"
                    style={{ fontFamily: "var(--font-instrument-serif)" }}
                  >
                    {member.name}
                  </h3>
                  <p 
                    className="text-gray-600"
                    style={{ fontFamily: "var(--font-funnel-sans)" }}
                  >
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
              <h3 
                className="text-2xl mb-4 text-black"
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                Equipe Completa
              </h3>
              <p 
                className="text-gray-600 mb-6"
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                Nossa equipe trabalha em conjunto para oferecer a melhor experiência possível. Venha conhecer pessoalmente nossos profissionais e descobrir por que somos referência em nail design.
              </p>
              <div className="relative h-80 w-full mb-6 rounded-lg overflow-hidden">
                <picture>
                  <source srcSet="/images/convertedwebp/espaco_oliver_beauty_time_todas_juntas (4).webp" type="image/webp" />
                  <img 
                    src="/images/convertedwebp/espaco_oliver_beauty_time_todas_juntas (4).jpg" 
                    alt="Equipe Espaço Oliver Beauty"
                    className="w-full h-full object-contain sm:object-cover object-center"
                  />
                </picture>
              </div>
              <div className="mt-6">
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
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection; 