import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['habilidades', 'proyectos', 'contacto'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
      <nav
        className={`w-full max-w-4xl rounded-full transition-all duration-300 ${
          scrolled
            ? 'glass-pill shadow-2xl shadow-pink-950/20 border-white/15 py-2.5 px-5'
            : 'bg-zinc-900/70 backdrop-blur-md border border-white/10 py-3 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo & Status Indicator */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group cursor-pointer text-decoration-none"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-tr from-pink-500/20 to-sky-500/20 border border-pink-500/30 group-hover:border-pink-400/60 transition-all duration-300 shadow-sm shadow-pink-500/20">
              <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-sky-300 text-xs">
                AM
              </span>
              <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-xs sm:text-sm tracking-wide text-zinc-100 group-hover:text-pink-300 transition-colors flex items-center gap-1">
                {personalInfo.name}
              </span>
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider">
                Frontend & Full Stack
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Only: Habilidades, Proyectos, Contacto) */}
          <div className="hidden md:flex items-center gap-1 bg-zinc-950/60 p-1 rounded-full border border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-500/20 to-sky-500/20 text-pink-300 border border-pink-500/30 shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <a
              href="#contacto"
              onClick={(e) => handleLinkClick(e, '#contacto')}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-full group bg-gradient-to-r from-pink-500 via-rose-500 to-sky-400 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 active:scale-95"
            >
              <span className="relative px-4 py-1.5 transition-all ease-in duration-200 bg-zinc-950 rounded-full group-hover:bg-transparent flex items-center gap-1.5 text-zinc-100 group-hover:text-white">
                <span>Hablemos</span>
                <Send className="w-3.5 h-3.5 text-pink-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 focus:outline-none transition-colors border border-white/5"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5 text-pink-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Collapsible Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-1.5 animate-fadeIn">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-500/20 to-sky-500/20 text-pink-300 border border-pink-500/30'
                      : 'text-zinc-300 hover:bg-white/5 hover:text-zinc-100'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
