import React from 'react';
import {
  Code2,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function SkillsBento() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-pink-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-sky-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-pink-400" />;
    }
  };

  return (
    <section id="habilidades" className="relative py-8 sm:py-10 overflow-hidden scroll-mt-24">
      {/* Subtle ambient lighting */}
      <div className="glow-ambient-cyan top-1/3 -left-32 opacity-25 pointer-events-none"></div>
      <div className="glow-ambient-pink bottom-10 -right-32 opacity-30 pointer-events-none"></div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-semibold tracking-wide">
            <Layers className="w-3.5 h-3.5 text-pink-400" />
            <span>Stack Tecnológico</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
            Habilidades &{' '}
            <span className="bg-gradient-to-r from-pink-400 via-rose-300 to-sky-400 bg-clip-text text-transparent">
              Herramientas
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Tecnologías y herramientas que utilizo activamente para diseñar y construir aplicaciones web robustas.
          </p>
        </div>

        {/* 3-Column Clean Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Column 1: Frontend & UI */}
          <div className="glass-panel bg-zinc-900/70 rounded-3xl p-5 sm:p-6 border border-white/10 hover:border-pink-500/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-2 rounded-xl bg-pink-500/10 border border-pink-500/25">
                  {getIcon(skillsData.frontend.icon)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-100">
                    {skillsData.frontend.title}
                  </h3>
                  <span className="text-[11px] text-zinc-400 font-mono">
                    Client-Side & UI
                  </span>
                </div>
              </div>

              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                {skillsData.frontend.subtitle}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5">
                {skillsData.frontend.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-zinc-950/80 border border-white/10 text-xs font-medium text-zinc-200"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    ></span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-white/10 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
              <span>Componentes Modulares</span>
              <span className="text-pink-300">Responsive First</span>
            </div>
          </div>

          {/* Column 2: Backend & APIs */}
          <div className="glass-panel bg-zinc-900/70 rounded-3xl p-5 sm:p-6 border border-white/10 hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/25">
                  {getIcon(skillsData.backend.icon)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-100">
                    {skillsData.backend.title}
                  </h3>
                  <span className="text-[11px] text-zinc-400 font-mono">
                    Server-Side & Data
                  </span>
                </div>
              </div>

              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                {skillsData.backend.subtitle}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5">
                {skillsData.backend.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-zinc-950/80 border border-white/10 text-xs font-medium text-zinc-200"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    ></span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-white/10 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
              <span>Bases Relacionales & NoSQL</span>
              <span className="text-sky-300">RESTful Architecture</span>
            </div>
          </div>

          {/* Column 3: Tools & Cloud */}
          <div className="glass-panel bg-zinc-900/70 rounded-3xl p-5 sm:p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/25">
                  {getIcon(skillsData.tools.icon)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-100">
                    {skillsData.tools.title}
                  </h3>
                  <span className="text-[11px] text-zinc-400 font-mono">
                    Infraestructura & Flujo
                  </span>
                </div>
              </div>

              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                {skillsData.tools.subtitle}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5">
                {skillsData.tools.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-zinc-950/80 border border-white/10 text-xs font-medium text-zinc-200"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    ></span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-white/10 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
              <span>Docker & AWS Deploy</span>
              <span className="text-purple-300">CI/CD Workflows</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
