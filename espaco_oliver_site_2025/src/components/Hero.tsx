"use client"

import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-[600px] w-full flex items-center justify-center">
      {/* Overlay de fundo com imagem ou cor */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/images/hero_espaco_oliver_manicures.jpeg')", 
          backgroundSize: 'cover',
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Conteúdo */}
      <div className="z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4 font-serif" style={{ fontFamily: "var(--font-old-standard-tt)" }}>Unhas feitas</h1>
        <h2 className="text-3xl mb-8 font-serif" style={{ fontFamily: "var(--font-old-standard-tt)" }}>Você feliz</h2>
        <Link 
          href="/agendar" 
          className="bg-pink-500 hover:bg-pink-600 transition-colors text-white font-bold py-3 px-8 rounded-full text-lg font-serif"
          style={{ fontFamily: "var(--font-old-standard-tt)" }}
        >
          Agendar agora
        </Link>
      </div>
    </div>
  );
};

export default Hero; 