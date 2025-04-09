"use client"

import React from 'react';
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f7f3ec]">
      <div className="text-center">
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
        <p className="text-lg text-black">Em breve um novo site do Espaço Oliver Beauty</p>
      </div>
    </div>
  );
}
