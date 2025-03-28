"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GiftCard = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg mb-8">
            <Image
              src="/images/gift_card_espaco_oliver.png"
              alt="Cartão presente"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center">
            <p className="text-gray-600 text-sm uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-funnel-sans)" }}>
              Cartão de presente
            </p>
            <h2 className="text-3xl mb-6 font-serif max-w-2xl mx-auto" style={{ fontFamily: "var(--font-old-standard-tt)" }}>
              Presenteie quem você ama com uma experiência de manicure que marca pra sempre
            </h2>
            <Link
              href="/gift-card"
              className="bg-pink-500 hover:bg-pink-600 transition-colors text-white font-bold py-3 px-8 rounded-full text-lg font-serif inline-block"
              style={{ fontFamily: "var(--font-old-standard-tt)" }}
            >
              Comprar cartão-presente
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCard; 