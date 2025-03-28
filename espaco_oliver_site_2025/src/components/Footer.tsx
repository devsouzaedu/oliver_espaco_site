"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Sobre */}
          <div className="col-span-1 md:col-span-1">
            <Image 
              src="/images/logo_branco_espaco_oliver.png" 
              alt="Espaço Oliver" 
              width={150} 
              height={80}
              className="mb-4"
            />
            <p className="text-gray-400 mb-4" style={{ fontFamily: "var(--font-funnel-sans)" }}>
              Tornando mulheres mais belas e confiantes há mais de 15 anos.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-instrument-serif)" }}>Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="text-gray-400 hover:text-white transition-colors">
                  Equipe
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-instrument-serif)" }}>Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos/corte" className="text-gray-400 hover:text-white transition-colors">
                  Cortes
                </Link>
              </li>
              <li>
                <Link href="/servicos/coloracao" className="text-gray-400 hover:text-white transition-colors">
                  Coloração
                </Link>
              </li>
              <li>
                <Link href="/servicos/tratamentos" className="text-gray-400 hover:text-white transition-colors">
                  Tratamentos
                </Link>
              </li>
              <li>
                <Link href="/servicos/penteados" className="text-gray-400 hover:text-white transition-colors">
                  Penteados
                </Link>
              </li>
              <li>
                <Link href="/servicos/manicure" className="text-gray-400 hover:text-white transition-colors">
                  Manicure e Pedicure
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-instrument-serif)" }}>Contato</h3>
            <address className="not-italic text-gray-400 space-y-2" style={{ fontFamily: "var(--font-funnel-sans)" }}>
              <p>Rua das Flores, 123</p>
              <p>São Paulo - SP</p>
              <p>CEP: 01234-567</p>
              <p>Tel: (11) 99999-9999</p>
              <p>Email: contato@espacooliver.com</p>
            </address>
          </div>
        </div>

        <hr className="my-8 border-gray-800" />

        <div className="text-center">
          <p className="text-gray-500 text-sm" style={{ fontFamily: "var(--font-funnel-sans)" }}>
            &copy; {currentYear} Espaço Oliver. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 