import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { 
  Code2, 
  ExternalLink, 
  Sparkles, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Images 
} from 'lucide-react';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openGallery = (project) => {
    setActiveProject(project);
    setActiveImageIndex(0);
  };

  const closeGallery = () => {
    setActiveProject(null);
    setActiveImageIndex(0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (!activeProject) return;
    const galleryList = activeProject.gallery || [activeProject.image];
    setActiveImageIndex((prev) => (prev + 1) % galleryList.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (!activeProject) return;
    const galleryList = activeProject.gallery || [activeProject.image];
    setActiveImageIndex((prev) => (prev - 1 + galleryList.length) % galleryList.length);
  };

  return (
    <section id="proyectos" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 scroll-mt-24">
      {/* Título de la sección */}
      <div className="mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-400/30 bg-sky-500/10 text-xs font-medium text-sky-300">
          <Sparkles size={13} className="text-pink-400" />
          Trabajo Realizado
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-sky-400">Destacados</span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Haz clic en la imagen de cualquier proyecto para desplegar la galería completa y capturas de pantalla.
        </p>
      </div>

      {/* Grid de Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {projects.map((project) => {
          const galleryCount = project.gallery?.length || 1;
          const isPwa = project.id === 3 || project.title.toLowerCase().includes('pwa');

          return (
            <article 
              key={project.id}
              className="flex flex-col rounded-2xl bg-zinc-900/80 border border-zinc-800/90 overflow-hidden shadow-lg shadow-black/40 hover:border-pink-500/30 transition-all duration-300 group"
            >
              {/* Imagen del proyecto */}
              <div 
                onClick={() => openGallery(project)}
                className="w-full h-56 sm:h-64 bg-zinc-950/90 overflow-hidden relative border-b border-zinc-800/80 cursor-pointer flex items-center justify-center p-3"
                title="Haz clic para ver todas las imágenes"
              >
                {/* Fondo difuminado */}
                <img 
                  src={project.image} 
                  alt="" 
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-xl opacity-20 scale-110 pointer-events-none select-none"
                />

                {/* Imagen principal */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="relative z-10 max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300 ease-out"
                  loading="lazy"
                />

                {/* Badge de empresa */}
                <div className="absolute top-3 left-3 z-20 flex gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-zinc-900/90 backdrop-blur-md text-pink-300 border border-pink-500/30">
                    {project.company}
                  </span>
                </div>

                {/* Botón flotante para ver galería */}
                <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/85 backdrop-blur-md text-zinc-200 border border-zinc-700/80 text-xs font-medium group-hover:border-pink-400/60 group-hover:text-pink-300 transition-colors shadow-md">
                  <Images size={14} className="text-pink-400" />
                  <span>Ver galería ({galleryCount})</span>
                </div>
              </div>

              {/* Detalles del proyecto */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="space-y-3">
                  <h3 
                    onClick={() => openGallery(project)}
                    className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed text-justify">
                    {project.description}
                  </p>

                  {/* Etiquetas de tecnologías */}
                  <div className="pt-1">
                    <span className="text-[11px] font-semibold text-zinc-400 block mb-1.5">
                      Tecnologías usadas:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-800/80 border border-zinc-700/60 text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="pt-4 border-t border-zinc-800/70 flex items-center gap-3">
                  {isPwa ? (
                    /* Para el proyecto PWA: ÚNICAMENTE el botón de Demo en Vivo */
                    <a 
                      href={project.demoUrl || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-pink-500 to-sky-500 hover:from-pink-600 hover:to-sky-600 text-white transition active:scale-95 shadow-md shadow-pink-500/10"
                    >
                      <ExternalLink size={15} />
                      Demo en Vivo
                    </a>
                  ) : (
                    /* Para el resto de los proyectos */
                    <>
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700/90 text-zinc-100 border border-zinc-700 hover:border-pink-500/40 transition active:scale-95"
                        >
                          <Code2 size={15} className="text-pink-400" />
                          Ver Código
                        </a>
                      )}

                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-pink-500 to-sky-500 hover:from-pink-600 hover:to-sky-600 text-white transition active:scale-95 shadow-md shadow-pink-500/10"
                        >
                          <ExternalLink size={15} />
                          Demo en Vivo
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* MODAL / GALERÍA */}
      {activeProject && (
        <div 
          onClick={closeGallery}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl relative"
          >
            {/* Header del modal */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900/90">
              <div>
                <span className="text-[11px] font-semibold text-pink-400 uppercase tracking-wider">
                  {activeProject.company}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {activeProject.title}
                </h3>
              </div>
              <button 
                onClick={closeGallery}
                className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Imagen Principal */}
            {(() => {
              const galleryList = activeProject.gallery?.length ? activeProject.gallery : [activeProject.image];
              const currentImg = galleryList[activeImageIndex] || activeProject.image;

              return (
                <div className="relative flex-1 bg-zinc-950 flex items-center justify-center min-h-[300px] sm:min-h-[440px] p-4 overflow-hidden select-none">
                  <img 
                    src={currentImg} 
                    alt={`Captura ${activeImageIndex + 1}`}
                    className="max-h-[60vh] w-auto max-w-full object-contain rounded-lg shadow-xl"
                  />

                  {galleryList.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-3 p-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700/80 transition shadow-lg active:scale-95"
                        aria-label="Imagen anterior"
                      >
                        <ChevronLeft size={22} />
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-3 p-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700/80 transition shadow-lg active:scale-95"
                        aria-label="Siguiente imagen"
                      >
                        <ChevronRight size={22} />
                      </button>
                    </>
                  )}

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-[11px] font-medium text-zinc-300">
                    {activeImageIndex + 1} de {galleryList.length}
                  </div>
                </div>
              );
            })()}

            {/* Miniaturas inferiores */}
            {(() => {
              const galleryList = activeProject.gallery?.length ? activeProject.gallery : [activeProject.image];
              if (galleryList.length <= 1) return null;

              return (
                <div className="p-3 bg-zinc-950/80 border-t border-zinc-800 flex gap-2 overflow-x-auto justify-center">
                  {galleryList.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-14 h-14 rounded-lg overflow-hidden border-2 flex-shrink-0 transition ${
                        activeImageIndex === idx 
                          ? 'border-pink-500 scale-105' 
                          : 'border-zinc-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Miniatura" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              );
            })()}

            {/* Pie del modal con enlaces */}
            <div className="p-4 border-t border-zinc-800 bg-zinc-900 flex items-center justify-end gap-3">
              {(activeProject.id === 3 || activeProject.title.toLowerCase().includes('pwa')) ? (
                /* Modal para PWA: únicamente Demo en Vivo */
                <a 
                  href={activeProject.demoUrl || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-pink-500 to-sky-500 hover:opacity-90 text-white transition shadow-md"
                >
                  <ExternalLink size={15} />
                  Demo en Vivo
                </a>
              ) : (
                /* Modal para los demás proyectos */
                <>
                  {activeProject.githubUrl && (
                    <a 
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700 transition"
                    >
                      <Code2 size={15} className="text-pink-400" />
                      Ver Código
                    </a>
                  )}
                  {activeProject.demoUrl && (
                    <a 
                      href={activeProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-pink-500 to-sky-500 hover:opacity-90 text-white transition shadow-md"
                    >
                      <ExternalLink size={15} />
                      Demo en Vivo
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}