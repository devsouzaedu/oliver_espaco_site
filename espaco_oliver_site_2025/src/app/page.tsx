import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Banner />
      <Navbar />
      <Hero />
      <Gallery />
      <Testimonials />
      <AboutSection />
    </main>
  );
}
