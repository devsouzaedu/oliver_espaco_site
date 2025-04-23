"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import ResponsiveImage from '@/components/ResponsiveImage';

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
              Pedicure em Barueri – SPA dos pés, unhas decoradas e experiência de beleza
            </h1>
            <p 
              className="max-w-3xl mx-auto text-gray-600 mb-8 text-lg" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
            >
              Descubra o melhor da pedicure em Barueri em uma esmalteria de alto padrão. Oferecemos nail designer, SPA dos pés Barueri, unhas decoradas Barueri, experiência de beleza Barueri, ambiente climatizado esmalteria, atendimento de excelência unhas, resultado impecável unhas e bem-estar e beleza Barueri.
            </p>
          </motion.div>

          {/* Galeria de imagens */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/convertedwebp/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_pé (4).webp"
                  alt="Serviço de Pedicure"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  className="object-cover object-bottom"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/convertedwebp/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_pé (5).webp"
                  alt="Serviço de Pedicure"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  className="object-cover object-bottom"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/convertedwebp/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_pé (6).webp"
                  alt="Serviço de Pedicure"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  className="object-cover object-bottom"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/convertedwebp/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_pé (7).webp"
                  alt="Serviço de Pedicure"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  className="object-cover object-bottom"
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
                  alt="Pedicure Completa"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-bottom rounded-lg"
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
                A pedicure completa é um cuidado estético para os pés que inclui cutilagem e esmaltação. O procedimento começa com a higienização dos pés, seguida do corte e lixamento das unhas para modelar o formato. A cutilagem remove o excesso de cutículas com alicate, após amolecê-las. Em seguida, realiza-se a esfoliação para suavizar a pele e a hidratação dos pés. Finaliza-se com a aplicação de base, esmalte (comum ou gel) e um top coat para maior durabilidade. O resultado são pés bem cuidados, com unhas bonitas e saudáveis.
              </p>
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

          {/* Seção Spa dos Pés com imagens de antes e depois */}
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
              Spa dos Pés
            </h2>
            <p 
              className="max-w-3xl mx-auto text-center text-gray-600 mb-8 text-lg" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
            >
              Um tratamento premium para seus pés, combinando cuidados estéticos e terapêuticos. Nosso Spa dos Pés inclui esfoliação profunda, máscara hidratante, massagem terapêutica e finalização com esmaltação em gel para maior durabilidade.
            </p>
            
            <ul className="list-disc list-inside max-w-3xl mx-auto mb-8 text-gray-600 text-lg" style={{ fontFamily: "var(--font-funnel-sans)" }}>
              <li>Esfoliação profunda</li>
              <li>Máscara hidratante</li>
              <li>Massagem relaxante</li>
              <li>Lixamento e remoção de calosidades</li>
            </ul>
            
            <p 
              className="max-w-3xl mx-auto text-center text-gray-600 mb-8 text-lg" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
            >
              Veja a transformação que nosso tratamento pode proporcionar. Resultados reais de nossos clientes.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              {/* Primeiro par de antes/depois */}
              <div className="flex flex-col space-y-2">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                  <ResponsiveImage
                    webp="/images/optimized/espaço_oliver_beauty_spa_pes_antes-_1_.webp"
                    fallback="/images/optimized/espaço_oliver_beauty_spa_pes_antes (1)-min.JPG"
                    alt="Antes do Spa dos Pés"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 bg-[#C59F6E] text-white px-4 py-2 rounded-tr-lg font-bold">
                    Antes
                  </div>
                </div>
                <p className="text-center text-gray-600" style={{ fontFamily: "var(--font-funnel-sans)" }}>
                  Antes do tratamento
                </p>
              </div>
              
              <div className="flex flex-col space-y-2">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                  <ResponsiveImage
                    webp="/images/optimized/espaco_oliver_beauty_spa_pes_depois-_1_.webp"
                    fallback="/images/optimized/espaco_oliver_beauty_spa_pes_depois (1)-min.JPG"
                    alt="Depois do Spa dos Pés"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 bg-[#C59F6E] text-white px-4 py-2 rounded-tr-lg font-bold">
                    Depois
                  </div>
                </div>
                <p className="text-center text-gray-600" style={{ fontFamily: "var(--font-funnel-sans)" }}>
                  Após o tratamento
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {/* Segundo par de antes/depois */}
              <div className="flex flex-col space-y-2">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                  <ResponsiveImage
                    webp="/images/optimized/espaço_oliver_beauty_spa_pes_antes-_2_.webp"
                    fallback="/images/optimized/espaço_oliver_beauty_spa_pes_antes (2)-min.JPG"
                    alt="Antes do Spa dos Pés"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 bg-[#C59F6E] text-white px-4 py-2 rounded-tr-lg font-bold">
                    Antes
                  </div>
                </div>
                <p className="text-center text-gray-600" style={{ fontFamily: "var(--font-funnel-sans)" }}>
                  Antes do tratamento
                </p>
              </div>
              
              <div className="flex flex-col space-y-2">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                  <ResponsiveImage
                    webp="/images/optimized/espaco_oliver_beauty_spa_pes_depois-_2_.webp"
                    fallback="/images/optimized/espaco_oliver_beauty_spa_pes_depois (2)-min.JPG"
                    alt="Depois do Spa dos Pés"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 bg-[#C59F6E] text-white px-4 py-2 rounded-tr-lg font-bold">
                    Depois
                  </div>
                </div>
                <p className="text-center text-gray-600" style={{ fontFamily: "var(--font-funnel-sans)" }}>
                  Após o tratamento
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="https://wa.me/5511956184727?text=Olá,%20gostaria%20de%20agendar%20um%20Spa%20dos%20Pés"
                target="_blank"
                className="inline-block bg-[#C59F6E] hover:bg-[#B08C5E] transition-colors text-white font-bold py-3 px-8 text-lg" 
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                Agendar meu Spa dos Pés
              </Link>
            </div>
          </motion.div>

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
                  className="w-full h-full object-cover object-bottom mb-4 rounded-lg"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/convertedwebp/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_pé (2).webp"
                  alt="Trabalho de Pedicure"
                  width={220}
                  height={220}
                  className="w-full h-full object-cover object-bottom mb-4 rounded-lg"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/convertedwebp/espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_pé (3).webp"
                  alt="Trabalho de Pedicure"
                  width={220}
                  height={220}
                  className="w-full h-full object-cover object-bottom mb-4 rounded-lg"
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