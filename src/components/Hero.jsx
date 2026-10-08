import React, { useState } from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  Code2,
  CheckCircle2,
  MapPin,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero() {
  const [avatarError, setAvatarError] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="inicio"
      className="relative pt-24 sm:pt-28 pb-8 sm:pb-12 flex items-center justify-center overflow-hidden scroll-mt-24"
    >
      {/* Subtle ambient lighting */}
      <div className="glow-ambient-pink top-8 -left-20 sm:left-10 opacity-40 pointer-events-none"></div>
      <div className="glow-ambient-cyan top-12 -right-20 sm:right-10 opacity-35 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Direct and Human Presentation (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-4 sm:space-y-5">
            
            {/* Recruiter-friendly Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900/90 border border-emerald-500/30 backdrop-blur-md shadow-sm shadow-emerald-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-xs font-medium tracking-wide text-zinc-200">
                {personalInfo.availability}
              </span>
            </div>

            {/* Main Headline with Name and Role */}
            <div className="space-y-1">
              <h2 className="text-sm sm:text-base font-mono text-zinc-400 font-medium">
                Hola, soy <strong className="text-zinc-100 font-semibold">{personalInfo.name}</strong>
              </h2>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-zinc-100">
                <span className="bg-gradient-to-r from-pink-400 via-rose-300 to-sky-400 bg-clip-text text-transparent">
                  {personalInfo.role}
                </span>
              </h1>
            </div>

            {/* Recruiter-targeted Clear & Direct Bio */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
              {personalInfo.tagline}
            </p>

            {/* Key Focus Points */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="px-2.5 py-1 rounded-xl bg-zinc-900/80 border border-white/10 text-pink-300">
                React & TypeScript
              </span>
              <span className="px-2.5 py-1 rounded-xl bg-zinc-900/80 border border-white/10 text-sky-300">
                Python & REST APIs
              </span>
              <span className="px-2.5 py-1 rounded-xl bg-zinc-900/80 border border-white/10 text-emerald-300">
                Odoo 17 & Cloud
              </span>
              <span className="inline-flex items-center gap-1 text-zinc-400 px-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                {personalInfo.location}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-pink-500 via-rose-500 to-sky-500 hover:from-pink-600 hover:to-sky-600 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span>Ver Proyectos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* CV Button: abre en pestaña nueva para visualizar y descargar */}
              <a
                href="/CV_Alberlis_Mendez_Sistemas.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl font-semibold text-xs sm:text-sm text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 hover:border-pink-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <Download className="w-3.5 h-3.5 text-pink-400" />
                <span>Ver / Descargar CV</span>
              </a>

              {/* Quick Social Icons */}
              <div className="flex items-center gap-2 pl-1 sm:pl-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-400 hover:text-white hover:border-pink-500/40 hover:bg-zinc-800 hover:-translate-y-0.5 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-400 hover:text-sky-400 hover:border-sky-500/40 hover:bg-zinc-800 hover:-translate-y-0.5 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <button
                  onClick={handleCopyEmail}
                  title="Copiar correo electrónico"
                  aria-label="Copiar correo"
                  className="p-2.5 rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-400 hover:text-pink-400 hover:border-pink-500/40 hover:bg-zinc-800 hover:-translate-y-0.5 transition-all relative group cursor-pointer"
                >
                  {copiedEmail ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Mail className="w-4 h-4" />
                  )}
                  {copiedEmail && (
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] font-medium bg-emerald-950 text-emerald-300 border border-emerald-500/30 rounded-md whitespace-nowrap shadow-lg">
                      ¡Copiado!
                    </span>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Avatar Card with subtle glow */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative group w-full max-w-[280px] sm:max-w-[320px]">
              
              {/* Subtle Ambient Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-pink-500/40 via-rose-500/30 to-sky-400/40 opacity-50 blur-xl group-hover:opacity-75 transition-all duration-500"></div>

              {/* Main Avatar Container */}
              <div className="relative rounded-3xl p-1.5 bg-gradient-to-br from-pink-500/30 via-zinc-800/40 to-sky-500/30 border border-white/15 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="relative rounded-[20px] bg-zinc-950/90 overflow-hidden aspect-square flex items-center justify-center">
                  
                  {!avatarError ? (
                    <img
                      src="/avatar.png"
                      alt={personalInfo.name}
                      onError={() => setAvatarError(true)}
                      className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-500"
                    />
                  ) : (
                    /* Fallback */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-zinc-900 to-zinc-950 text-center relative">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-pink-500 to-sky-400 p-1 mb-3">
                        <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center">
                          <Code2 className="w-8 h-8 text-pink-400" />
                        </div>
                      </div>
                      <span className="text-sm font-bold text-zinc-200">
                        {personalInfo.name}
                      </span>
                      <span className="text-xs text-pink-400 font-mono mt-1">
                        Frontend & Full Stack Dev
                      </span>
                    </div>
                  )}

                  {/* Gradient Overlay bottom shadow */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent pointer-events-none"></div>

                  {/* Internal Status Tag */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between px-3 py-1.5 rounded-xl bg-zinc-900/80 backdrop-blur-md border border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span className="text-[11px] font-medium text-zinc-200">
                        Full Stack Dev
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-sky-300 bg-sky-950/60 px-2 py-0.5 rounded-md border border-sky-500/30">
                      React + Python
                    </span>
                  </div>
                </div>
              </div>

              {/* Clean Floating Badge */}
              <div className="absolute -top-2.5 -right-2 sm:-right-3 px-3 py-1 rounded-xl bg-zinc-900/95 border border-pink-500/30 backdrop-blur-md shadow-xl flex items-center gap-1.5">
                <span className="p-0.5 rounded bg-pink-500/20 text-pink-400">
                  <Sparkles className="w-3 h-3" />
                </span>
                <span className="text-[11px] font-semibold text-zinc-100">Clean Code & APIs</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
