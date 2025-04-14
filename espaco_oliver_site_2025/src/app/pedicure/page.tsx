"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const PedicurePage = () => {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 
              className="text-4xl md:text-5xl mb-4 text-black" 
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Serviços de Pedicure
            </h1>
            <p 
              className="max-w-3xl mx-auto text-gray-600 mb-8 text-lg" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
            >
              Cuide dos seus pés com nossos tratamentos exclusivos de pedicure, oferecidos com o máximo conforto e qualidade.
            </p>
          </motion.div>

          {/* Galeria de imagens */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative h-60 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/convertedwebp/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_pé (4).webp"
                  alt="Serviço de Pedicure"
                  width={200}
                  height={200}
                  className="w-full h-auto object-cover mb-4 rounded-lg"
                />
              </div>
              <div className="relative h-60 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/convertedwebp/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_pé (5).webp"
                  alt="Serviço de Pedicure"
                  width={200}
                  height={200}
                  className="w-full h-auto object-cover mb-4 rounded-lg"
                />
              </div>
              <div className="relative h-60 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/convertedwebp/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_pé (6).webp"
                  alt="Serviço de Pedicure"
                  width={200}
                  height={200}
                  className="w-full h-auto object-cover mb-4 rounded-lg"
                />
              </div>
              <div className="relative h-60 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/convertedwebp/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_pé (7).webp"
                  alt="Serviço de Pedicure"
                  width={200}
                  height={200}
                  className="w-full h-auto object-cover mb-4 rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/convertedwebp/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_pé.webp"
                  alt="Serviço de Pedicure"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-lg"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 
                className="text-3xl mb-6 text-black" 
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                Pedicure Completa
              </h2>
              <p 
                className="text-gray-600 mb-6 text-lg" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                Nossa pedicure completa inclui banho relaxante, esfoliação suave, remoção de cutículas, tratamento de calosidades, modelagem das unhas e esmaltação. Um tratamento perfeito para quem busca beleza e bem-estar para os pés.
              </p>
              <ul className="list-disc list-inside mb-8 text-gray-600 text-lg" style={{ fontFamily: "var(--font-funnel-sans)" }}>
                <li>Hidratação profunda</li>
                <li>Remoção de cutículas</li>
                <li>Tratamento de calosidades</li>
                <li>Massagem relaxante</li>
                <li>Esmaltação de sua escolha</li>
              </ul>
              <div className="mt-6">
                <Link 
                  href="https://wa.me/5511956184727?text=Olá,%20gostaria%20de%20agendar%20uma%20pedicure%20completa"
                  target="_blank"
                  className="inline-block bg-[#C59F6E] hover:bg-[#B08C5E] transition-colors text-white font-bold py-3 px-8 text-lg" 
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                  Agendar agora
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-12 mb-16">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/convertedwebp/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_unhas (3).webp"
                  alt="Esmaltação em Gel nos Pés"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-lg"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 
                className="text-3xl mb-6 text-black" 
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                Spa dos Pés
              </h2>
              <p 
                className="text-gray-600 mb-6 text-lg" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                Um tratamento premium para seus pés, combinando cuidados estéticos e terapêuticos. Nosso Spa dos Pés inclui banho de imersão com sais aromáticos, esfoliação profunda, máscara hidratante, massagem terapêutica e finalização com esmaltação em gel para maior durabilidade.
              </p>
              <ul className="list-disc list-inside mb-8 text-gray-600 text-lg" style={{ fontFamily: "var(--font-funnel-sans)" }}>
                <li>Banho aromático relaxante</li>
                <li>Esfoliação profunda</li>
                <li>Máscara hidratante</li>
                <li>Massagem com pedras quentes</li>
                <li>Esmaltação em gel</li>
              </ul>
              <div className="mt-6">
                <Link 
                  href="https://wa.me/5511956184727?text=Olá,%20gostaria%20de%20agendar%20um%20Spa%20dos%20Pés"
                  target="_blank"
                  className="inline-block bg-[#C59F6E] hover:bg-[#B08C5E] transition-colors text-white font-bold py-3 px-8 text-lg" 
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                  Agendar agora
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Seção adicional com mais imagens */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 
              className="text-3xl mb-6 text-center text-black" 
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Nossos Trabalhos
            </h2>
            <p 
              className="max-w-3xl mx-auto text-center text-gray-600 mb-8 text-lg" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
            >
              Confira alguns dos nossos trabalhos realizados com excelência e dedicação.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/convertedwebp/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_pé (1).webp"
                  alt="Trabalho de Pedicure"
                  width={220}
                  height={220}
                  className="w-full h-auto object-cover mb-4 rounded-lg"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/convertedwebp/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_pé (2).webp"
                  alt="Trabalho de Pedicure"
                  width={220}
                  height={220}
                  className="w-full h-auto object-cover mb-4 rounded-lg"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/convertedwebp/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_pé (3).webp"
                  alt="Trabalho de Pedicure"
                  width={220}
                  height={220}
                  className="w-full h-auto object-cover mb-4 rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h2 
              className="text-3xl mb-6 text-black" 
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Agende seu horário
            </h2>
            <p 
              className="max-w-3xl mx-auto text-gray-600 mb-8 text-lg" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
            >
              Nossos serviços de pedicure são realizados em ambiente aconchegante, 
              com produtos de alta qualidade e equipamentos esterilizados para sua total segurança.
            </p>
            <Link 
              href="https://wa.me/5511956184727?text=Olá,%20gostaria%20de%20agendar%20um%20horário%20para%20pedicure"
              target="_blank"
              className="inline-block bg-[#C59F6E] hover:bg-[#B08C5E] transition-colors text-white font-bold py-3 px-8 text-lg" 
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Agendar agora
            </Link>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default PedicurePage; 