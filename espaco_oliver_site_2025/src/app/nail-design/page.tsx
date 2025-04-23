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
              Nail Designer referência em Barueri
            </h1>
            <p 
              className="max-w-3xl mx-auto text-gray-600 mb-8 text-lg" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
            >
              Somos referência em nail designer e manicure alto padrão em Barueri. Transforme suas unhas em verdadeiras obras de arte com nossos serviços especializados de nail designer, alongamento em fibra de vidro, molde F1, molde russo, blindagem de unhas, manutenção de alongamentos, unhas decoradas e muito mais. Ambiente climatizado, confortável e atendimento de excelência para seu bem-estar.
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
                Somos referência em alongamento de unhas em gel em Barueri. O alongamento em gel permite criar unhas naturalmente bonitas e resistentes, com técnicas de nail designer de alto padrão. Utilizamos fibra de vidro, molde russo e molde F1, sempre com produtos de alta qualidade para garantir resultados impecáveis e duradouros.
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
                Banho de Gel – Manicure Alto Padrão
              </h2>
              <p 
                className="text-gray-600 mb-6 text-lg" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                O banho de gel em unhas naturais é um dos serviços de manicure alto padrão que oferecemos em Barueri. Aplicamos uma camada de gel específico sobre as unhas para maior durabilidade e brilho, com acabamento perfeito e técnica de referência.
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
                Nail Art – Referência em Barueri
              </h2>
              <p 
                className="text-gray-600 mb-6 text-lg" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                Nossa esmalteria é referência em Nail Art em Barueri. Designs exclusivos, técnicas de nail designer de alto padrão, unhas decoradas para todas as ocasiões, sempre com atendimento diferenciado e ambiente confortável.
              </p>
              <p 
                className="text-gray-600 mb-6 text-lg" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                Seja para uma ocasião especial ou para expressar seu estilo no dia a dia, nossa Nail Art é a escolha perfeita para quem busca unhas únicas e sofisticadas.
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
              Transforme suas unhas
            </h2>
            <p 
              className="max-w-3xl mx-auto text-gray-600 mb-8 text-lg" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
            >
              No Espaço Oliver Beauty, oferecemos serviços de nail design de alto padrão, 
              combinando técnica, qualidade e criatividade para resultados surpreendentes.
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