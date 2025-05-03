"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import ResponsiveImage from '@/components/ResponsiveImage';

const NailDesignPage = () => {
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
              Arte em Unhas: Nail Designer em Barueri
            </h1>
            <p 
              className="max-w-3xl mx-auto text-gray-600 mb-8 text-lg" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
            >
              Transforme suas unhas em verdadeiras obras de arte com nossos serviços especializados. Oferecemos alongamento em fibra de vidro, molde F1, molde russo, blindagem de unhas, manutenção e unhas decoradas. Tudo isso em um ambiente confortável e climatizado, com profissionais especializados para garantir sua satisfação.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
                <ResponsiveImage
                  webp="/images/optimized/espaco_oliver_manicure_alongamento_em_gel-_2_.webp"
                  fallback="/images/optimized/espaco_oliver_manicure_alongamento_em_gel (2).jpg"
                  alt="Alongamento em Gel"
                  className="w-full h-full object-cover rounded-lg"
                  loading="eager"
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
                Alongamento em Gel – Nail Designer
              </h2>
              <p 
                className="text-gray-600 mb-6 text-lg" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                O alongamento em gel cria unhas naturalmente bonitas e resistentes com acabamento profissional. Nossa equipe utiliza as melhores técnicas como fibra de vidro, molde russo e molde F1, sempre com produtos premium que garantem resultados duradouros e um visual sofisticado para suas mãos.
              </p>
              <div className="mt-6">
                <Link 
                  href="https://wa.me/5511956184727?text=Olá,%20gostaria%20de%20agendar%20um%20alongamento%20em%20gel"
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
                <ResponsiveImage
                  webp="/images/convertedwebp/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_unhas (1).webp"
                  fallback="/images/convertedwebp/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_unhas (1).jpg"
                  alt="Banho de Gel"
                  className="w-full h-full object-cover rounded-lg"
                  loading="eager"
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
                Banho de Gel – Beleza e Durabilidade
              </h2>
              <p 
                className="text-gray-600 mb-6 text-lg" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                Nosso banho de gel proporciona brilho intenso e maior durabilidade às unhas naturais. Aplicamos uma camada especial que protege, fortalece e embeleza, sem necessidade de alongamento. O resultado é um acabamento perfeito que dura muito mais que o esmalte comum.
              </p>
              <div className="mt-6">
                <Link 
                  href="https://wa.me/5511956184727?text=Olá,%20gostaria%20de%20agendar%20um%20banho%20de%20gel"
                  target="_blank"
                  className="inline-block bg-[#C59F6E] hover:bg-[#B08C5E] transition-colors text-white font-bold py-3 px-8 text-lg" 
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                  Agendar Banho de Gel
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
                <ResponsiveImage
                  webp="/images/optimized/espaco_oliver_beauty_nail_art_card.webp"
                  fallback="/images/optimized/espaco_oliver_beauty_nail_art_card.jpeg"
                  alt="Nail Art"
                  className="w-full h-full object-cover rounded-lg"
                  loading="eager"
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
                Nail Art – Expressão e Criatividade
              </h2>
              <p 
                className="text-gray-600 mb-6 text-lg" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                Expresse sua personalidade através de designs exclusivos criados por nossa equipe de artistas especialistas. Oferecemos desde desenhos delicados até trabalhos elaborados com pedrarias, adesivos e texturas que transformam suas unhas em verdadeiras peças artísticas.
              </p>
              <p 
                className="text-gray-600 mb-6 text-lg" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                Para festas, casamentos, formações ou apenas para destacar seu estilo único no dia a dia, nossas opções de Nail Art combinam tendências atuais com técnicas avançadas de decoração.
              </p>
              <div className="mt-6">
                <Link 
                  href="https://wa.me/5511956184727?text=Olá,%20gostaria%20de%20agendar%20um%20serviço%20de%20Nail%20Art"
                  target="_blank"
                  className="inline-block bg-[#C59F6E] hover:bg-[#B08C5E] transition-colors text-white font-bold py-3 px-8 text-lg" 
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                  Agendar Nail Art
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
            <motion.div
              className="bg-[#F3EDE8] p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 
                className="text-xl mb-3 text-black" 
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                Unhas em Fibra de Vidro
              </h3>
              <p 
                className="text-gray-600 mb-4" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                Alongamento durável e resistente que proporciona um aspecto muito natural às unhas.
              </p>
              <Link 
                href="https://wa.me/5511956184727?text=Olá,%20gostaria%20de%20agendar%20um%20alongamento%20em%20fibra%20de%20vidro"
                target="_blank"
                className="text-[#C59F6E] hover:text-[#B08C5E] font-medium" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                Saiba mais →
              </Link>
            </motion.div>

            <motion.div
              className="bg-[#F3EDE8] p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 
                className="text-xl mb-3 text-black" 
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                Nail Art Criativa
              </h3>
              <p 
                className="text-gray-600 mb-4" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                Designs personalizados, desde opções discretas até as mais elaboradas com pedrarias e desenhos.
              </p>
              <Link 
                href="https://wa.me/5511956184727?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Nail%20Art"
                target="_blank"
                className="text-[#C59F6E] hover:text-[#B08C5E] font-medium" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                Saiba mais →
              </Link>
            </motion.div>

            <motion.div
              className="bg-[#F3EDE8] p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 
                className="text-xl mb-3 text-black" 
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                Manutenção Profissional
              </h3>
              <p 
                className="text-gray-600 mb-4" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                Mantenha seu alongamento impecável com nossa manutenção especializada, garantindo a saúde e beleza das suas unhas.
              </p>
              <Link 
                href="https://wa.me/5511956184727?text=Olá,%20gostaria%20de%20agendar%20uma%20manutenção"
                target="_blank"
                className="text-[#C59F6E] hover:text-[#B08C5E] font-medium" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                Saiba mais →
              </Link>
            </motion.div>
          </div>

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
              Realize o sonho de unhas perfeitas
            </h2>
            <p 
              className="max-w-3xl mx-auto text-gray-600 mb-8 text-lg" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
            >
              Visite o Espaço Oliver Beauty e descubra como podemos realçar sua beleza natural.
              Nossa equipe de especialistas está pronta para atender cada necessidade com atenção personalizada.
            </p>
            <Link 
              href="https://wa.me/5511956184727?text=Olá,%20gostaria%20de%20agendar%20um%20serviço%20de%20nail%20design"
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

export default NailDesignPage; 