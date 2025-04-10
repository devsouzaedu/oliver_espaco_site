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
import { motion } from 'framer-motion';

// Variantes para diferentes tipos de animações - movimento sem alterar a visibilidade
const moveUp = {
  hidden: { y: 30 },
  visible: { 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const moveRight = {
  hidden: { x: -30 },
  visible: { 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const moveLeft = {
  hidden: { x: 30 },
  visible: { 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const noMove = {
  hidden: {},
  visible: { 
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const scaleUp = {
  hidden: { scale: 0.98 },
  visible: { 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

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
      <main className="bg-white">
        <Banner />
        <Navbar />
        <Hero />
        
        {/* As divs de seção têm fundo branco ou #F3EDE8 explicitamente definido */}
        <motion.div
          className="bg-white w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.01, margin: "100px 0px" }}
          variants={moveUp}
        >
          <Gallery />
        </motion.div>
        
        <motion.div
          className="bg-[#F3EDE8] w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.01, margin: "100px 0px" }}
          variants={moveRight}
        >
          <OurSpaceSection />
        </motion.div>
        
        <motion.div
          className="bg-white w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.01, margin: "100px 0px" }}
          variants={moveLeft}
        >
          <OurTeamSection />
        </motion.div>
        
        <motion.div
          className="bg-[#F3EDE8] w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.01, margin: "100px 0px" }}
          variants={scaleUp}
        >
          <GiftCard />
        </motion.div>
        
        <motion.div
          className="bg-white w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.01, margin: "100px 0px" }}
          variants={noMove}
        >
          <SocialInspiration />
        </motion.div>
        
        <motion.div
          className="bg-[#F3EDE8] w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.01, margin: "100px 0px" }}
          variants={moveUp}
        >
          <FAQSection />
        </motion.div>
        
        <motion.div
          className="bg-white w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.01, margin: "100px 0px" }}
          variants={moveRight}
        >
          <ContactSection />
        </motion.div>
        
        <motion.div
          className="bg-[#F3EDE8] w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.01, margin: "100px 0px" }}
          variants={moveLeft}
        >
          <Location />
        </motion.div>
        
        <motion.div
          className="bg-white w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.01, margin: "100px 0px" }}
          variants={noMove}
        >
          <Newsletter />
        </motion.div>
        
        <Footer />
      </main>
    );
  }

  // Página "Em breve" com botão de acesso admin
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f7f3ec]">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
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
        
        <motion.button 
          onClick={handleAdminAccess}
          className="px-4 py-2 bg-[#C59F6E] text-white rounded-md hover:bg-[#B08C5E] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Acesso Admin
        </motion.button>
      </motion.div>

      {/* Modal de senha */}
      {showPasswordModal && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg w-80"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
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
              <motion.button 
                onClick={() => setShowPasswordModal(false)}
                className="px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100 text-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancelar
              </motion.button>
              <motion.button 
                onClick={handlePasswordSubmit}
                className="px-3 py-1.5 bg-[#C59F6E] text-black rounded-md hover:bg-[#B08C5E]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Acessar
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
