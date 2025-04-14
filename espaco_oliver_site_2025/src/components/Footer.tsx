"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Sobre */}
          <div className="col-span-1 md:col-span-1">
            <Image 
              src="/images/convertedwebp/logo_branco_espaco_oliver.webp" 
              alt="Espaço Oliver" 
              width={150} 
              height={80}
              className="mb-4"
            />
            <p className="text-white mb-4" style={{ fontFamily: "var(--font-funnel-sans)" }}>
              Tornando mulheres mais belas e confiantes há mais de 15 anos.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/espacooliverbeauty" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.me/5511956184727?text=Oi%2C%20gostaria%20de%20saber%20mais%20e%20agendar%20um%20h%C3%B3rario" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-instrument-serif)" }}>Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-gray-300 transition-colors">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-instrument-serif)" }}>Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos/manicure" className="text-white hover:text-gray-300 transition-colors">
                  Manicure e Pedicure
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-instrument-serif)" }}>Contato</h3>
            <address className="not-italic text-white space-y-2" style={{ fontFamily: "var(--font-funnel-sans)" }}>
              <p>Rua Campos Sales, 303</p>
              <p>Centro - Barueri/SP</p>
              <p>CEP: 06401-000</p>
              <p>Tel: (11) 95618-4727</p>
              <p>Email: site.eobeauty@gmail.com</p>
            </address>
          </div>
        </div>

        <hr className="my-8 border-white border-opacity-20" />

        <div className="text-center">
          <p className="text-white text-sm" style={{ fontFamily: "var(--font-funnel-sans)" }}>
            &copy; {currentYear} Espaço Oliver. Todos os direitos reservados. Site desenvolvido por <a href="https://jmsouza.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">JMSOUZA</a>, com muito amor &lt;3
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 