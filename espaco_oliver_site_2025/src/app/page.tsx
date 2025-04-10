"use client"

import React, { useState } from 'react';
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
import OurSpaceSection from '@/components/OurSpaceSection';
import OurTeamSection from '@/components/OurTeamSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleAdminAccess = () => {
    setShowPasswordModal(true);
  };

  const handlePasswordSubmit = () => {
    if (password === '2210') {
      // Armazenar autenticação no localStorage
      localStorage.setItem('adminAuthenticated', 'true');
      setShowPasswordModal(false);
      
      // Redirecionar para a página principal completa
      window.location.reload();
    } else {
      setError('Senha incorreta. Tente novamente.');
    }
  };

  // Verificar se o usuário já está autenticado
  const isAuthenticated = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('adminAuthenticated') === 'true';
    }
    return false;
  };

  // Mostrar a página completa se autenticado
  if (typeof window !== 'undefined' && isAuthenticated()) {
    return (
      <main>
        <Banner />
        <Navbar />
        <Hero />
        <Gallery />
        <OurSpaceSection />
        <OurTeamSection />
        <GiftCard />
        <SocialInspiration />
        <FAQSection />
        <ContactSection />
        <Location />
        <Newsletter />
        <Footer />
      </main>
    );
  }

  // Página "Em breve" com botão de acesso admin
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f7f3ec]">
      <div className="text-center">
        <div className="mb-8">
          <img 
            src="/logo-oliver.svg" 
            alt="Espaço Oliver"
            width={120}
            height={120}
            className="mx-auto"
          />
        </div>
        <h1 className="text-3xl font-serif mb-4 text-black">Site em criação</h1>
        <p className="text-lg text-black mb-8">Em breve um novo site do Espaço Oliver Beauty</p>
        
        <button 
          onClick={handleAdminAccess}
          className="px-4 py-2 bg-[#C59F6E] text-white rounded-md hover:bg-[#B08C5E] transition-colors"
        >
          Acesso Admin
        </button>
      </div>

      {/* Modal de senha */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-semibold mb-4 text-black">Acesso Restrito</h2>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-black mb-1">Senha</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C59F6E] text-black"
                onKeyDown={(e) => e.key === 'Enter' && handlePasswordSubmit()}
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            
            <div className="flex justify-end space-x-2">
              <button 
                onClick={() => setShowPasswordModal(false)}
                className="px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100 text-black"
              >
                Cancelar
              </button>
              <button 
                onClick={handlePasswordSubmit}
                className="px-3 py-1.5 bg-[#C59F6E] text-black rounded-md hover:bg-[#B08C5E]"
              >
                Acessar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
