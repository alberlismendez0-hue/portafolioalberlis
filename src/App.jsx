import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsBento from './components/SkillsBento';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090d16] text-zinc-100 selection:bg-pink-500/30 selection:text-pink-200 relative overflow-x-hidden">
      {/* Floating Sticky Pill Navbar */}
      <Navbar />

      {/* Main Content: Continuous, compact flow */}
      <main className="relative flex flex-col">
        <Hero />
        <SkillsBento />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
