import React from 'react';
import { Heart, ArrowUp, Sparkles, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-zinc-950/80 backdrop-blur-md pt-8 pb-6 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold font-display text-zinc-100">
                {personalInfo.name}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            </div>
            <p className="text-xs text-zinc-400 max-w-sm">
              {personalInfo.role} • Desarrollando software con React y Python.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-pink-500/40 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href='https://github.com/alberlismendez0-hue'
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-sky-400 hover:border-sky-500/40 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-pink-400 hover:border-pink-500/40 transition-all"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-pink-300 hover:border-pink-500/40 hover:-translate-y-0.5 transition-all cursor-pointer"
              aria-label="Volver arriba"
              title="Volver arriba"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-400 font-mono">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Desarrollado con</span>
            <Heart className="w-3 h-3 text-pink-500 fill-pink-500" />
            <span>en React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
