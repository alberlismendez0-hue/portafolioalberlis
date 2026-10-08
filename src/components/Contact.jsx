import React, { useState } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  MapPin,
  MessageSquare,
  Loader2,
  ExternalLink,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Por favor completa todos los campos.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.detail || 'No se pudo enviar el correo.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error enviando formulario:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Error al conectar con el servidor.');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contacto" className="relative py-8 sm:py-10 overflow-hidden scroll-mt-24">
      {/* Luces sutiles de fondo */}
      <div className="glow-ambient-pink top-10 -left-20 opacity-30 pointer-events-none"></div>
      <div className="glow-ambient-cyan bottom-10 -right-20 opacity-30 pointer-events-none"></div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-semibold tracking-wide">
            <MessageSquare className="w-3.5 h-3.5 text-pink-400" />
            <span>Contacto Profesional</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
            ¿Buscando incorporar talento técnico?{' '}
            <span className="bg-gradient-to-r from-pink-400 via-rose-300 to-sky-400 bg-clip-text text-transparent">
              Conectemos
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Abierta a conversaciones sobre roles frontend / full stack, proyectos desafiantes y oportunidades remotas.
          </p>
        </div>

        {/* Layout en dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Columna Izquierda: Información de Contacto */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Tarjeta de Correo Directo */}
            <div className="glass-panel bg-zinc-900/70 rounded-3xl p-5 border border-pink-500/20">
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-400">
                  <Mail className="w-4 h-4" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-xl bg-zinc-950 border border-white/10 hover:border-pink-400/40 text-xs font-medium text-zinc-300 hover:text-white flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
                  title="Copiar email"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-pink-400" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <h4 className="text-[11px] font-mono uppercase tracking-wider text-pink-400 font-semibold mb-0.5">
                Correo Directo
              </h4>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm sm:text-base font-bold text-zinc-100 hover:text-pink-300 transition-colors break-all"
              >
                {personalInfo.email}
              </a>
              <p className="text-xs text-zinc-400 mt-1.5">
                Ideal para propuestas formales o coordinar una llamada técnica.
              </p>
            </div>

            {/* Tarjeta LinkedIn & GitHub */}
            <div className="glass-panel bg-zinc-900/70 rounded-3xl p-5 border border-white/10 space-y-2.5">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold">
                Perfiles Profesionales
              </h4>

              <div className="space-y-2 pt-0.5">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-950/70 border border-white/10 hover:border-sky-500/40 hover:bg-zinc-900 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-semibold text-zinc-200 group-hover:text-white">
                      Conectar en LinkedIn
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-sky-400 transition-colors" />
                </a>

                <a
                  href="https://github.com/alberlismendez0-hue"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-950/70 border border-white/10 hover:border-pink-500/40 hover:bg-zinc-900 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-pink-400" />
                    <span className="text-xs font-semibold text-zinc-200 group-hover:text-white">
                      Explorar repositorios en GitHub
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-pink-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Ubicación */}
            <div className="px-4 py-2.5 rounded-2xl bg-zinc-900/50 border border-white/5 flex items-center gap-2 text-xs text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
              <span>{personalInfo.location} • Disponibilidad inmediata</span>
            </div>

          </div>

          {/* Columna Derecha: Formulario de Contacto */}
          <div className="lg:col-span-7">
            <div className="glass-panel bg-zinc-900/70 rounded-3xl p-5 sm:p-7 border border-white/10 shadow-xl">
              
              {/* Notificación de Éxito */}
              {status === 'success' && (
                <div className="mb-4 p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-xs text-emerald-300">
                      Mensaje recibido correctamente
                    </h4>
                    <p className="text-xs text-emerald-300/80 mt-0.5">
                      Gracias por contactarme. Responderé a tu correo a la brevedad.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-1.5 text-[11px] font-semibold text-emerald-400 hover:underline cursor-pointer"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                </div>
              )}

              {/* Notificación de Error */}
              {status === 'error' && (
                <div className="mb-4 p-3 rounded-2xl bg-rose-950/60 border border-rose-500/30 text-rose-200 text-xs">
                  {errorMessage || 'Por favor completa tu nombre, correo y mensaje antes de enviar.'}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-zinc-300 font-mono"
                    >
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre o empresa"
                      className="w-full px-3.5 py-2 rounded-2xl glass-input text-xs sm:text-sm text-zinc-100 placeholder-zinc-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-zinc-300 font-mono"
                    >
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="correo@ejemplo.com"
                      className="w-full px-3.5 py-2 rounded-2xl glass-input text-xs sm:text-sm text-zinc-100 placeholder-zinc-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-zinc-300 font-mono"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribe brevemente sobre la vacante, proyecto o propuesta..."
                    className="w-full px-3.5 py-2 rounded-2xl glass-input text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 resize-none"
                  ></textarea>
                </div>

                {/* Botón de Envío */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-2xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-pink-500 via-rose-500 to-sky-500 hover:from-pink-600 hover:to-sky-600 shadow-md shadow-pink-500/20 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar Mensaje</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}