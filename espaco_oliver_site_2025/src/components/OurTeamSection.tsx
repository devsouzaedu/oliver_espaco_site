"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const OurTeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const team = [
    {
      id: 1,
      name: 'Mariana',
      role: 'Nail Designer',
      image: '/images/espaco_oliver_beauty_time_mariana (1).JPG',
      instagram: '@mariana.espacooliver'
    },
    {
      id: 2,
      name: 'Joyce',
      role: 'Nail Designer',
      image: '/images/espaco_oliver_beauty_time_joyce (1).jpg',
      instagram: '@joyce.espacooliver'
    },
    {
      id: 3,
      name: 'Nega',
      role: 'Nail Designer',
      image: '/images/espaco_oliver_beauty_time_nega.jpg',
      instagram: '@nega.espacooliver'
    },
    {
      id: 4,
      name: 'Leticia',
      role: 'Nail Designer',
      image: '/images/espaco_oliver_beauty_time_leticia (1).jpg',
      instagram: '@leticia.espacooliver'
    },
    {
      id: 5,
      name: 'Geovanna',
      role: 'Nail Designer',
      image: '/images/espaco_oliver_beauty_time_geovanna (1).jpg',
      instagram: '@geovanna.espacooliver'
    },
    {
      id: 6,
      name: 'Simone',
      role: 'Nail Designer',
      image: '/images/espaco_oliver_beauty_time_simone (1).jpg',
      instagram: '@simone.espacooliver'
    },
    {
      id: 7,
      name: 'Espaço Oliver',
      role: 'Studio',
      image: '/images/equipe/espaco_oliver_logo_perfil.png',
      instagram: '@espacooliverbeauty'
    },
    {
      id: 8,
      name: 'Equipe Oliver',
      role: 'Time Completo',
      image: '/images/equipe/equipe_espaco_oliver.jpeg',
      instagram: '@espacooliverbeauty'
    },
    {
      id: 9,
      name: 'Eventos',
      role: 'Nail Parties',
      image: '/images/equipe/nail_party_espaco_oliver.jpeg',
      instagram: '@espacooliverbeauty'
    }
  ];

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
      id="nosso-time"
      className="py-16 px-4 bg-[#F3EDE8]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p 
              className="uppercase text-sm tracking-wider mb-2 text-gray-600" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              PROFISSIONAIS
            </motion.p>
            <motion.h2 
              className="text-4xl mb-4 text-black" 
              style={{ fontFamily: "var(--font-instrument-serif)" }}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Nosso Time
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto text-gray-600 mb-8" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Conheça nossos profissionais apaixonados e altamente capacitados, prontos para cuidar de você.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {team.map((member) => (
              <motion.div 
                key={member.id}
                className="bg-white rounded-lg overflow-hidden shadow-md"
                variants={item}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-80 relative">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center"
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
                    className="text-gray-600 mb-3"
                    style={{ fontFamily: "var(--font-funnel-sans)" }}
                  >
                    {member.role}
                  </p>
                  <a 
                    href={`https://www.instagram.com/${member.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-black hover:text-gray-700 transition-colors"
                    style={{ fontFamily: "var(--font-funnel-sans)" }}
                  >
                    <FaInstagram className="h-4 w-4 mr-2" />
                    <span>{member.instagram}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
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
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurTeamSection; 