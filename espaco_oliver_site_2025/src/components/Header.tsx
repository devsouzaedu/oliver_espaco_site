"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/images/logo_espaco_oliver.png" 
              alt="Espaço Oliver" 
              width={150} 
              height={50} 
              style={{ height: 'auto' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-800 hover:text-black transition-colors font-medium"
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/servicos" 
                  className="text-gray-800 hover:text-black transition-colors font-medium"
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link 
                  href="/equipe" 
                  className="text-gray-800 hover:text-black transition-colors font-medium"
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                  Equipe
                </Link>
              </li>
              <li>
                <Link 
                  href="/sobre" 
                  className="text-gray-800 hover:text-black transition-colors font-medium"
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link 
                  href="/contato" 
                  className="text-gray-800 hover:text-black transition-colors font-medium"
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/agendar" 
              className="border-2 border-black hover:border-gray-600 transition-colors text-black font-bold py-2 px-5"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Agendar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gray-800"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/" 
                  className="block text-gray-800 hover:text-black transition-colors font-medium"
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/servicos" 
                  className="block text-gray-800 hover:text-black transition-colors font-medium"
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                  onClick={() => setIsOpen(false)}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link 
                  href="/equipe" 
                  className="block text-gray-800 hover:text-black transition-colors font-medium"
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                  onClick={() => setIsOpen(false)}
                >
                  Equipe
                </Link>
              </li>
              <li>
                <Link 
                  href="/sobre" 
                  className="block text-gray-800 hover:text-black transition-colors font-medium"
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                  onClick={() => setIsOpen(false)}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link 
                  href="/contato" 
                  className="block text-gray-800 hover:text-black transition-colors font-medium"
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                  onClick={() => setIsOpen(false)}
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link 
                  href="/agendar" 
                  className="inline-block border-2 border-black hover:border-gray-600 transition-colors text-black font-bold py-2 px-5"
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                  onClick={() => setIsOpen(false)}
                >
                  Agendar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 