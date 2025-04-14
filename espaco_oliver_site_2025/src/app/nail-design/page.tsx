"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

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
                <Image
                  src="/images/convertedwebp/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_unhas (1).webp"
                  alt="Alongamento de Unhas"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
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
                O alongamento em gel permite criar unhas naturalmente bonitas e resistentes. Utilizamos produtos de alta qualidade para modelar as unhas de acordo com o seu gosto, garantindo durabilidade e um acabamento perfeito.
              </p>
              <ul className="list-disc list-inside mb-8 text-gray-600 text-lg" style={{ fontFamily: "var(--font-funnel-sans)" }}>
                <li>Preparação da unha natural</li>
                <li>Moldagem personalizada</li>
                <li>Aplicação de gel de alta qualidade</li>
                <li>Esmaltação e nail art (opcional)</li>
                <li>Acabamento de alta durabilidade</li>
              </ul>
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
                <Image
                  src="/images/convertedwebp/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_unhas (3).webp"
                  alt="Nail Art Artística"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
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
                Nail Art Exclusiva
              </h2>
              <p 
                className="text-gray-600 mb-6 text-lg" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                Nossas nail designers são verdadeiras artistas, capazes de criar designs exclusivos e personalizados. Desde decorações minimalistas até nail arts mais elaboradas, oferecemos opções para todos os gostos e ocasiões.
              </p>
              <ul className="list-disc list-inside mb-8 text-gray-600 text-lg" style={{ fontFamily: "var(--font-funnel-sans)" }}>
                <li>Desenhos exclusivos</li>
                <li>Aplicação de pedrarias</li>
                <li>Técnicas de degradê</li>
                <li>Detalhes em alto relevo</li>
                <li>Personalização completa</li>
              </ul>
              <div className="mt-6">
                <Link 
                  href="https://wa.me/5511956184727?text=Olá,%20gostaria%20de%20agendar%20uma%20nail%20art%20exclusiva"
                  target="_blank"
                  className="inline-block bg-[#C59F6E] hover:bg-[#B08C5E] transition-colors text-white font-bold py-3 px-8 text-lg" 
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                  Agendar agora
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
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
                Blindagem
              </h3>
              <p 
                className="text-gray-600 mb-4" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                Fortalecimento das unhas naturais com camadas de fibra e gel para proteger e promover o crescimento saudável.
              </p>
              <Link 
                href="https://wa.me/5511956184727?text=Olá,%20gostaria%20de%20agendar%20uma%20blindagem%20de%20unhas"
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
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 
                className="text-xl mb-3 text-black" 
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                Baby Boomer
              </h3>
              <p 
                className="text-gray-600 mb-4" 
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                Técnica sofisticada de degradê que vai do branco ao rosa nude, criando um efeito elegante e atemporal.
              </p>
              <Link 
                href="https://wa.me/5511956184727?text=Olá,%20gostaria%20de%20agendar%20uma%20nail%20art%20baby%20boomer"
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