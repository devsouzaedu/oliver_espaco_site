"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import ResponsiveImage from '@/components/ResponsiveImage';

const ManicurePage = () => {
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
              Manicure alto padrão em Barueri – Unhas impecáveis e experiência de beleza
            </h1>
            <p 
              className="max-w-3xl mx-auto text-gray-600 mb-8 text-lg" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
            >
              Descubra a manicure alto padrão referência em Barueri. Nossos serviços incluem nail designer, alongamento de unhas em fibra de vidro, molde F1, molde russo, blindagem de unhas, manutenção de alongamentos, unhas decoradas Barueri e muito mais. Atendimento de excelência unhas, resultado impecável unhas e bem-estar e beleza Barueri em um ambiente acolhedor e sofisticado.
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
                  webp="/images/optimized/espaco_oliver_beauty_manicure_card.webp"
                  fallback="/images/optimized/espaco_oliver_beauty_manicure_card.JPG"
                  alt="Serviço de Manicure"
                  className="w-full h-full object-cover"
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
                Manicure Tradicional
              </h2>
              <p 
                className="text-gray-600 mb-6 text-lg" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                Nossa manicure tradicional inclui limpeza completa das unhas, remoção de cutículas, modelagem perfeita e finalização com esmaltação da sua escolha. Trabalhamos com as melhores marcas do mercado para garantir um resultado impecável e duradouro.
              </p>
              <ul className="list-disc list-inside mb-8 text-gray-600 text-lg" style={{ fontFamily: "var(--font-funnel-sans)" }}>
                <li>Tratamento de cutículas</li>
                <li>Hidratação das mãos</li>
                <li>Lixamento e modelagem</li>
                <li>Esmaltação tradicional</li>
                <li>Secagem rápida</li>
              </ul>
              <div className="mt-6">
                <Link 
                  href="https://wa.me/5511956184727?text=Olá,%20gostaria%20de%20agendar%20uma%20manicure"
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
                  webp="/images/optimized/espaço_oliver_beauty_esmaltacao_em_gel.webp"
                  fallback="/images/optimized/espaço_oliver_beauty_esmaltacao_em_gel.jpg"
                  alt="Esmaltação em Gel"
                  className="w-full h-full object-cover"
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
                Esmaltação em Gel
              </h2>
              <p 
                className="text-gray-600 mb-6 text-lg" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                A esmaltação em gel proporciona um acabamento perfeito e brilhante com maior durabilidade. O esmalte em gel não lasca e mantém o brilho por até 3 semanas. Ideal para quem tem uma rotina agitada e deseja manter as unhas sempre bonitas.
              </p>
              <ul className="list-disc list-inside mb-8 text-gray-600 text-lg" style={{ fontFamily: "var(--font-funnel-sans)" }}>
                <li>Preparação completa da unha</li>
                <li>Aplicação de base específica para gel</li>
                <li>Camadas de esmalte em gel</li>
                <li>Catalisação em lâmpada LED/UV</li>
                <li>Finalização com top coat de alto brilho</li>
              </ul>
              <div className="mt-6">
                <Link 
                  href="https://wa.me/5511956184727?text=Olá,%20gostaria%20de%20agendar%20uma%20esmaltação%20em%20gel"
                  target="_blank"
                  className="inline-block bg-[#C59F6E] hover:bg-[#B08C5E] transition-colors text-white font-bold py-3 px-8 text-lg" 
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                  Agendar agora
                </Link>
              </div>
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
              Agende seu horário
            </h2>
            <p 
              className="max-w-3xl mx-auto text-gray-600 mb-8 text-lg" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
            >
              Nossos serviços de manicure são realizados por profissionais altamente qualificadas, 
              em um ambiente aconchegante e com produtos de primeira linha.
            </p>
            <Link 
              href="https://wa.me/5511956184727?text=Olá,%20gostaria%20de%20agendar%20um%20horário%20para%20manicure"
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

export default ManicurePage; 