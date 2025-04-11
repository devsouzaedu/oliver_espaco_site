"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Contato', href: '#contato' },
    { name: 'Blog', href: '/novidadesblog' },
  ];

  return (
    <nav className="w-full bg-white shadow-md py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo_espaco_oliver.png" 
              alt="Espaço Oliver" 
              width={180} 
              height={60} 
              className="object-contain"
              priority
            />
          </Link>
        </div>
        <ul className="flex flex-wrap justify-center space-x-6 font-serif text-black" style={{ fontFamily: "var(--font-old-standard-tt)" }}>
          <li className="hover:text-pink-500 transition-colors">
            <Link href="/nail-design">Nail-design</Link>
          </li>
          <li className="hover:text-pink-500 transition-colors">
            <Link href="/manicure">Manicure</Link>
          </li>
          <li className="hover:text-pink-500 transition-colors">
            <Link href="/pedicure">Pedicure</Link>
          </li>
          <li className="hover:text-pink-500 transition-colors">
            <Link href="/novidadesblog">Novidades/Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 