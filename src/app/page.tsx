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

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Banner />
      <Navbar />
      <Hero />
      <Gallery />
      <TeamCards />
      <GiftCard />
      <SocialInspiration />
      <Location />
      <Newsletter />
      <Testimonials />
      <AboutSection />
      <Footer />
    </main>
  );
} 