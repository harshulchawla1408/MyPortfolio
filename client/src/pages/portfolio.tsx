import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import HackathonChronicles from "@/components/HackathonChronicles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GalaxyStarfieldBackground from "@/components/GalaxyStarfieldBackground";

export default function Portfolio() {
  return (
    <GalaxyStarfieldBackground>
      <div className="min-h-screen bg-transparent text-slate-50 overflow-x-hidden">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <HackathonChronicles />
        <Contact />
        <Footer />
      </div>
    </GalaxyStarfieldBackground>
  );
}
