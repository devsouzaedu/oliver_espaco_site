"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const OurTeamSection = () => {
  const team = [
    {
      id: 1,
      name: 'Mariana',
      role: 'Nail Designer',
      image: '/images/espaco_oliver_beauty_time_mariana (1).JPG'
    },
    {
      id: 2,
      name: 'Joyce',
      role: 'Nail Designer',
      image: '/images/espaco_oliver_beauty_time_joyce (1).jpg'
    },
    {
      id: 3,
      name: 'Nega',
      role: 'Nail Designer',
      image: '/images/espaco_oliver_beauty_time_nega.jpg'
    },
    {
      id: 4,
      name: 'Leticia',
      role: 'Nail Designer',
      image: '/images/espaco_oliver_beauty_time_leticia (1).jpg'
    },
    {
      id: 5,
      name: 'Giovana',
      role: 'Nail Designer',
      image: '/images/espaco_oliver_beauty_time_giovana2.jpg'
    },
    {
      id: 6,
      name: 'Simone',
      role: 'Nail Designer',
      image: '/images/espaco_oliver_beauty_time_simone (1).jpg'
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
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top"
                    loading="eager"
                    priority={member.id <= 2}
                  />
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
                <Image
                  src="/images/espaco_oliver_beauty_time_todas_juntas (4).JPG"
                  alt="Equipe Espaço Oliver Beauty"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover object-top"
                  loading="eager"
                  priority
                />
              </div>
              <div className="mt-6">
                <Link 
                  href="/agendar"
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