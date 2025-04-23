"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section 
      id="sobre-nos"
      ref={ref}
      className="py-16 px-4 bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-[600px] w-full rounded-lg overflow-hidden shadow-xl">
                <picture>
                  <source srcSet="/images/convertedwebp/espaco_oliver_beauty_foco_interno (1).webp" type="image/webp" />
                  <img
                    src="/images/convertedwebp/espaco_oliver_beauty_foco_interno (1).jpg"
                    alt="Espaço Oliver Beauty - Interior"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.p 
                className="uppercase text-sm tracking-wider mb-2 text-gray-600"
                style={{ fontFamily: "var(--font-funnel-sans)" }}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                NOSSA HISTÓRIA
              </motion.p>
              <motion.h2 
                className="text-4xl mb-6 text-black"
                style={{ fontFamily: "var(--font-instrument-serif)" }}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Sobre o Espaço Oliver Beauty
              </motion.h2>
              
              <motion.div
                className="space-y-4 text-gray-600"
                style={{ fontFamily: "var(--font-funnel-sans)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <p>
                  Fundado em 2015, o Espaço Oliver Beauty é a esmalteria de alto padrão referência em Barueri, reconhecida pelo atendimento de excelência em nail designer, manicure alto padrão, pedicure em Barueri e experiência de beleza exclusiva. Nossa história começou como um pequeno estúdio e hoje somos referência em unhas Barueri, proporcionando bem-estar e beleza para nossos clientes.
                </p>
                <p>
                  Nossa missão é proporcionar momentos únicos de beleza, autocuidado e bem-estar, com serviços de manicure em Barueri, pedicure em Barueri, alongamento de unhas em fibra de vidro, molde F1, molde russo, blindagem de unhas, manutenção de alongamentos, unhas decoradas Barueri, SPA dos pés Barueri e esmalteria com vinho Barueri. Tudo isso em um ambiente climatizado esmalteria, sofisticado e acolhedor.
                </p>
                <p>
                  Nossa equipe é formada por profissionais altamente capacitados e atualizados nas melhores técnicas do mercado, garantindo resultado impecável unhas e atendimento de excelência unhas, sempre com foco no bem-estar e beleza Barueri.
                </p>
                <p>
                  No Espaço Oliver Beauty, cuidar das unhas é mais do que estética: é viver uma experiência de beleza Barueri, com conforto, exclusividade e atenção aos detalhes. Venha conhecer a esmalteria de alto padrão que é referência em Barueri!
                </p>
              </motion.div>
              
              <motion.div 
                className="mt-8 grid grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-black mb-2" style={{ fontFamily: "var(--font-instrument-serif)" }}>
                    8+
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: "var(--font-funnel-sans)" }}>
                    Anos de experiência
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-black mb-2" style={{ fontFamily: "var(--font-instrument-serif)" }}>
                    15+
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: "var(--font-funnel-sans)" }}>
                    Profissionais
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-black mb-2" style={{ fontFamily: "var(--font-instrument-serif)" }}>
                    5000+
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: "var(--font-funnel-sans)" }}>
                    Clientes satisfeitos
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="bg-[#F3EDE8] p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-3 text-black" style={{ fontFamily: "var(--font-instrument-serif)" }}>
                Nossa Missão
              </h3>
              <p className="text-gray-600" style={{ fontFamily: "var(--font-funnel-sans)" }}>
                Proporcionar experiências únicas de beleza e bem-estar, transformando o cuidado com as unhas em momentos especiais de autocuidado.
              </p>
            </div>
            <div className="bg-[#F3EDE8] p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-3 text-black" style={{ fontFamily: "var(--font-instrument-serif)" }}>
                Nossa Visão
              </h3>
              <p className="text-gray-600" style={{ fontFamily: "var(--font-funnel-sans)" }}>
                Ser referência em nail designer, manicure alto padrão e pedicure em Barueri, reconhecido pela excelência, inovação e pelo compromisso com a qualidade e satisfação dos clientes.
              </p>
            </div>
            <div className="bg-[#F3EDE8] p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-3 text-black" style={{ fontFamily: "var(--font-instrument-serif)" }}>
                Nossos Valores
              </h3>
              <p className="text-gray-600" style={{ fontFamily: "var(--font-funnel-sans)" }}>
                Excelência, ética, respeito, inovação, comprometimento com o cliente e valorização dos nossos profissionais.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection; 