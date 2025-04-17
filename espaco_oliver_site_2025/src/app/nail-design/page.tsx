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
              Nail Design Exclusivo
            </h1>
            <p 
              className="max-w-3xl mx-auto text-gray-600 mb-8 text-lg" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
            >
              Transforme suas unhas em verdadeiras obras de arte com nossos serviços especializados de nail design.
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
                  webp="/images/optimized/espaco_oliver_beauty_alongamento.webp"
                  fallback="/images/optimized/espaco_oliver_beauty_alongamento.jpg"
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
                Alongamento em Gel
              </h2>
              <p 
                className="text-gray-600 mb-6 text-lg" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                O alongamento em gel permite criar unhas naturalmente bonitas e resistentes. Nesse procedimento é feito alongamento das unhas naturais com diversos extensores (trabalhamos com fibra de vidro, molde russo e molde F1), para modelar e fazer o formato desejado. Utilizamos produtos de alta qualidade para modelar as unhas de acordo com o seu gosto, garantindo durabilidade e um acabamento perfeito.
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
                  webp="/images/optimized/espaco_oliver_beauty_unha_nailart.webp"
                  fallback="/images/optimized/espaco_oliver_beauty_unha_nailart.jpg"
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
                Banho de Gel
              </h2>
              <p 
                className="text-gray-600 mb-6 text-lg" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                 O banho de gel em unhas naturais é um procedimento estético que aplica uma camada de gel específico sobre as unhas para maior durabilidade e brilho. Primeiro, as unhas são limpas, lixadas e desidratadas. Em seguida, aplica-se uma base de gel, que é curada em cabine de LED/UV. Depois, camadas de gel colorido são aplicadas e curadas, finalizando com um top coat para selar e dar brilho.
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
                  webp="/images/optimized/espaco_oliver_beauty_alongamento_unha_reta.webp"
                  fallback="/images/optimized/espaco_oliver_beauty_alongamento_unha_reta.jpg"
                  alt="Alongamento Natural"
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
                ALONGAMENTO DE UNHAS (Natural)
              </h2>
              <p 
                className="text-gray-600 mb-6 text-lg" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                O alongamento natural é uma técnica que usa gel ou acrílico para estender e modelar unhas naturais, mantendo um aspecto natural. As unhas são preparadas (limpas e lixadas), e um molde ou tip é aplicado para definir o comprimento. O gel ou acrílico é moldado sobre a unha e curado em cabine LED/UV. Após modelagem e lixamento, aplica-se uma base e esmalte. O resultado é resistente, com aparência natural, e dura cerca de 3 a 4 semanas.
              </p>
              <div className="mt-6">
                <Link 
                  href="https://wa.me/5511956184727?text=Olá,%20gostaria%20de%20agendar%20um%20alongamento%20natural"
                  target="_blank"
                  className="inline-block bg-[#C59F6E] hover:bg-[#B08C5E] transition-colors text-white font-bold py-3 px-8 text-lg" 
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                  Agendar Alongamento Natural
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