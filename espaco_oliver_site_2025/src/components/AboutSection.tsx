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
                  Fundado em 2015, o Espaço Oliver Beauty nasceu da paixão pela arte de transformar mãos e unhas em verdadeiras obras de arte. Localizada no centro de Barueri, nossa esmalteria de alto padrão rapidamente se tornou referência em nail designer e manicure alto padrão na região. Começamos como um pequeno estúdio e hoje somos reconhecidos como referência em nail designer e manicure alto padrão em Barueri.
                </p>
                <p>
                  Nossa missão é proporcionar momentos de beleza, autocuidado e bem-estar para todos os nossos clientes, oferecendo serviços de manicure alto padrão, nail designer e pedicure de referência em um ambiente acolhedor, climatizado e sofisticado, com atendimento de excelência.
                </p>
                <p>
                  Com uma equipe de profissionais altamente capacitados e em constante atualização, trabalhamos com as melhores técnicas e produtos do mercado, garantindo resultados impecáveis e duradouros.
                </p>
                <p>
                  No Espaço Oliver Beauty, acreditamos que cuidar das unhas vai além da estética – é um momento de conexão consigo mesmo, uma pausa no dia a dia para se dedicar ao autocuidado e ao bem-estar.
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