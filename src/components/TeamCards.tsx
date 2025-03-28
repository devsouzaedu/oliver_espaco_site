"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TeamCards = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1 - Conheça nosso time */}
          <div className="relative group">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/card1_conhecanossotime_espaco_oliver.jpeg"
                alt="Conheça nosso time"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
                <h3 className="text-white text-2xl font-serif mb-4" style={{ fontFamily: "var(--font-old-standard-tt)" }}>
                  Conheça nosso time
                </h3>
                <Link
                  href="/time"
                  className="bg-pink-500 hover:bg-pink-600 transition-colors text-white font-bold py-2 px-6 rounded-full text-lg font-serif"
                  style={{ fontFamily: "var(--font-old-standard-tt)" }}
                >
                  Conheça agora
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 - Faça uma visita */}
          <div className="relative group">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/conhecanossoespaco_espaco_oliver.png"
                alt="Faça uma visita"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
                <h3 className="text-white text-2xl font-serif mb-4" style={{ fontFamily: "var(--font-old-standard-tt)" }}>
                  Faça uma visita
                </h3>
                <Link
                  href="/agendar"
                  className="bg-pink-500 hover:bg-pink-600 transition-colors text-white font-bold py-2 px-6 rounded-full text-lg font-serif"
                  style={{ fontFamily: "var(--font-old-standard-tt)" }}
                >
                  Agende agora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCards; 