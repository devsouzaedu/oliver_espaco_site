"use client"

import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o email para seu backend
    console.log('Email subscribed:', email);
    setEmail('');
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4 font-serif" style={{ fontFamily: "var(--font-old-standard-tt)" }}>
            Faça parte da nossa comunidade
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-funnel-sans)" }}>
            Inscreva-se na nossa newsletter para ser a primeira a saber sobre novidades, eventos, promoções e mais!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Insira seu email"
              className="px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-pink-500 w-full md:w-96"
              required
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 transition-colors text-white font-bold py-3 px-8 rounded-full text-lg font-serif inline-flex items-center"
              style={{ fontFamily: "var(--font-old-standard-tt)" }}
            >
              <span>Inscrever</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 