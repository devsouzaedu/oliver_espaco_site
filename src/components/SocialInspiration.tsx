"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SocialInspiration = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg mb-8">
            <Image
              src="/images/image_gif_nails.webp"
              alt="Inspirações de unhas"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center">
            <p className="text-gray-600 text-sm uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-funnel-sans)" }}>
              Fique inspirada
            </p>
            <h2 className="text-3xl mb-6 font-serif max-w-2xl mx-auto" style={{ fontFamily: "var(--font-old-standard-tt)" }}>
              Siga o Espaço Oliver no Instagram e TikTok @espaço_oliver
            </h2>
            <Link
              href="https://instagram.com/espaco_oliver"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-600 transition-colors text-white font-bold py-3 px-8 rounded-full text-lg font-serif inline-block"
              style={{ fontFamily: "var(--font-old-standard-tt)" }}
            >
              Seguir
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialInspiration; 