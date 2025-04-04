"use client"

import React from 'react';
import Image from 'next/image';
// Componentes originais (comentados temporariamente)
/*
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import TeamCards from "@/components/TeamCards";
import GiftCard from "@/components/GiftCard";
import SocialInspiration from "@/components/SocialInspiration";
import Location from "@/components/Location";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
*/

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#F3EDE8] p-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <Image 
            src="/images/logo_espaco_oliver.png" 
            alt="Espaço Oliver" 
            width={200} 
            height={100}
            className="mx-auto"
          />
        </div>
        <h1 className="text-3xl mb-4 text-black" style={{ fontFamily: "var(--font-instrument-serif)" }}>
          Site em criação
        </h1>
        <p className="text-xl mb-6 text-gray-700" style={{ fontFamily: "var(--font-funnel-sans)" }}>
          Em breve um novo site do Espaço Oliver Beauty
        </p>
      </div>
    </main>
  );
}

{/* Conteúdo original (temporariamente desativado)
export default function OriginalHome() {
  return (
    <main className="flex flex-col min-h-screen">
      <Banner />
      <Navbar />
      <Hero />
      <Gallery />
      <TeamCards />
      <GiftCard />
      <SocialInspiration />
      <Location />
      <Newsletter />
      <Testimonials />
      <AboutSection />
      <Footer />
    </main>
  );
}
*/}
