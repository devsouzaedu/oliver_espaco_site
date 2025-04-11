"use client"

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section 
      ref={ref}
      id="contato"
      className="py-16 px-4 bg-[#F3EDE8]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p 
              className="uppercase text-sm tracking-wider mb-2 text-gray-600" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              FALE CONOSCO
            </motion.p>
            <motion.h2 
              className="text-4xl mb-4 text-black" 
              style={{ fontFamily: "var(--font-instrument-serif)" }}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Entre em Contato
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto text-gray-600 mb-8" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Estamos disponíveis para tirar suas dúvidas, agendar horários e conhecer suas necessidades.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 
                className="text-2xl mb-6 text-black" 
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                Informações de Contato
              </h3>
              
              <ul className="space-y-6">
                <motion.li 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-[#F3EDE8] p-3 rounded-full">
                    <FaWhatsapp className="text-black w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium mb-1" style={{ fontFamily: "var(--font-funnel-sans)" }}>WhatsApp</p>
                    <Link 
                      href="https://wa.me/5511956184727?text=Oi%2C%20gostaria%20de%20saber%20mais%20e%20agendar%20um%20h%C3%B3rario" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-gray-700 transition-colors"
                      style={{ fontFamily: "var(--font-funnel-sans)" }}
                    >
                      (11) 95618-4727
                    </Link>
                  </div>
                </motion.li>
                
                <motion.li 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-[#F3EDE8] p-3 rounded-full">
                    <FaEnvelope className="text-black w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium mb-1" style={{ fontFamily: "var(--font-funnel-sans)" }}>Email</p>
                    <Link 
                      href="mailto:site.eobeauty@gmail.com"
                      className="text-black hover:text-gray-700 transition-colors"
                      style={{ fontFamily: "var(--font-funnel-sans)" }}
                    >
                      site.eobeauty@gmail.com
                    </Link>
                  </div>
                </motion.li>
                
                <motion.li 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-[#F3EDE8] p-3 rounded-full">
                    <FaMapMarkerAlt className="text-black w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium mb-1" style={{ fontFamily: "var(--font-funnel-sans)" }}>Endereço</p>
                    <Link 
                      href="https://maps.google.com/?q=Rua+Campos+Sales+303,+Centro,+Barueri,+São+Paulo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-gray-700 transition-colors"
                      style={{ fontFamily: "var(--font-funnel-sans)" }}
                    >
                      Rua Campos Sales 303, Centro<br />
                      Barueri, São Paulo
                    </Link>
                  </div>
                </motion.li>
                
                <motion.li 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-[#F3EDE8] p-3 rounded-full">
                    <FaInstagram className="text-black w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium mb-1" style={{ fontFamily: "var(--font-funnel-sans)" }}>Instagram</p>
                    <Link 
                      href="https://www.instagram.com/espacooliverbeauty"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-gray-700 transition-colors"
                      style={{ fontFamily: "var(--font-funnel-sans)" }}
                    >
                      @espacooliverbeauty
                    </Link>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
            
            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.3305786317285!2d-46.8778623229675!3d-23.517325060351028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf01d65f4d1a3b%3A0x70a69e6c21946ba8!2sR.%20Campos%20Sales%2C%20303%20-%20Centro%2C%20Barueri%20-%20SP%2C%2006401-000!5e0!3m2!1sen!2sbr!4v1712262583777!5m2!1sen!2sbr" 
                width="100%" 
                height="300" 
                style={{ border: 0, borderRadius: '0.5rem' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Espaço Oliver"
                className="mb-6"
              ></iframe>
              
              <div className="flex flex-col space-y-3">
                <Link
                  href="https://wa.me/5511956184727?text=Oi%2C%20gostaria%20de%20saber%20mais%20e%20agendar%20um%20h%C3%B3rario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-black hover:border-gray-600 transition-colors text-black font-bold py-3 px-8 inline-flex items-center justify-center"
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                  <FaWhatsapp className="mr-2 h-5 w-5" />
                  <span>Agendar pelo WhatsApp</span>
                </Link>

                <Link
                  href="https://wa.me/5511956184727?text=Oi%2C%20gostaria%20de%20comprar%20um%20agendamento%20como%20presente"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-black hover:border-gray-600 transition-colors text-black font-bold py-3 px-8 inline-flex items-center justify-center"
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                  <FaWhatsapp className="mr-2 h-5 w-5" />
                  <span>Comprar Cartão de Presente</span>
                </Link>

                <Link
                  href="https://wa.me/5511956184727?text=Oi%2C%20gostaria%20de%20entrar%20no%20grupo%20da%20comunidade%20Espa%C3%A7o%20Oliver%20Beauty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-black hover:border-gray-600 transition-colors text-black font-bold py-3 px-8 inline-flex items-center justify-center"
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                  <FaWhatsapp className="mr-2 h-5 w-5" />
                  <span>Faça Parte da Nossa Comunidade</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection; 