"use client";

import React, { useState, useEffect } from 'react';
import { Play, X, Menu, Instagram, Video, Paintbrush, Heart, ChevronDown, Send } from 'lucide-react';

/**
 * Composant principal Irisfilms - Vidéaste de Mariage Fine Art
 * Architecture : Next.js (App Router) / Tailwind CSS
 */
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Gestion du scroll pour la barre de navigation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation d'apparition au scroll (simple implementation)
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const videos = [
    {
      id: "qMtcWqz_mO4", // ID YouTube exemple
      title: "Manon & Hugo",
      location: "Domaine de Canaille, Cassis",
      thumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "5L6xP_6I680", 
      title: "Camille & Pierre",
      location: "Abbaye des Vaux de Cernay",
      thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "j_S09_S_vUo",
      title: "Chloé & Alexandre",
      location: "Villa Balbianello, Lac de Côme",
      thumbnail: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "3m_5S9S_vUo",
      title: "Inès & Maxime",
      location: "Hôtel Particulier, Paris",
      thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#4a4a4a] font-sans selection:bg-[#d4c4b5] selection:text-white">
      
      {/* STYLE INJECTÉ POUR LES POLICES FINE ART */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@200;300;400&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Montserrat', sans-serif; }
        .reveal { transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1); }
      `}} />

      {/* NAVIGATION */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#faf9f6]/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-serif tracking-[0.2em] uppercase font-light">Irisfilms</a>
          
          <div className="hidden md:flex space-x-12 text-[10px] tracking-[0.3em] font-light uppercase">
            <a href="#portfolio" className="hover:text-[#d4c4b5] transition-colors">Portfolio</a>
            <a href="#apropos" className="hover:text-[#d4c4b5] transition-colors">L'Artiste</a>
            <a href="#experience" className="hover:text-[#d4c4b5] transition-colors">L'Expérience</a>
            <a href="#contact" className="hover:text-[#d4c4b5] transition-colors">Contact</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} strokeWidth={1} />
          </button>
        </div>
      </nav>

      {/* MENU MOBILE OVERLAY */}
      <div className={`fixed inset-0 bg-[#faf9f6] z-[60] flex flex-col items-center justify-center space-y-8 transition-transform duration-700 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className="absolute top-8 right-8" onClick={() => setIsMenuOpen(false)}>
          <X size={32} strokeWidth={1} />
        </button>
        {['Portfolio', 'Apropos', 'Experience', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif italic">
            {item === 'Apropos' ? 'L\'Artiste' : item}
          </a>
        ))}
      </div>

      {/* HERO SECTION */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544598009-428a27690f3c?q=80&w=2070&auto=format&fit=crop" 
            alt="Ambiance Mariage Fine Art" 
            className="w-full h-full object-cover opacity-80 scale-105 animate-[subtle-zoom_20s_infinite]"
          />
          <div className="absolute inset-0 bg-[#faf9f6]/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f6] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 reveal opacity-0 translate-y-10">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] mb-6 block font-light">Cinématographie de Mariage Fine Art</span>
          <h1 className="text-5xl md:text-8xl font-serif font-light mb-8 italic text-[#2c2c2c] leading-tight">
            L'Art de se Souvenir
          </h1>
          <p className="max-w-xl mx-auto text-sm md:text-lg font-light mb-12 leading-relaxed tracking-wide opacity-80">
            Documenter vos instants les plus précieux avec une esthétique poétique, douce et intemporelle.
          </p>
          <a href="#portfolio" className="inline-block border border-[#4a4a4a] px-10 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-[#4a4a4a] hover:text-[#faf9f6] transition-all duration-700">
            Découvrir le Portfolio
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <ChevronDown size={20} />
        </div>
      </header>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-32 px-6 bg-[#faf9f6]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-24 reveal opacity-0 translate-y-10">
            <h2 className="text-4xl md:text-5xl font-serif italic mb-4">Histoires Singulières</h2>
            <div className="w-16 h-[1px] bg-[#d4c4b5] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {videos.map((video, idx) => (
              <div key={idx} className="group cursor-pointer reveal opacity-0 translate-y-10" onClick={() => setActiveVideo(video.id)}>
                <div className="relative overflow-hidden aspect-video mb-8 bg-[#f0ede9]">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/20 transition-all duration-500">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm scale-90 group-hover:scale-100 transition-transform duration-500">
                      <Play size={20} className="text-[#d4c4b5] fill-[#d4c4b5] ml-1" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-2xl italic mb-2 tracking-wide">{video.title}</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-light">{video.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'ARTISTE SECTION */}
      <section id="apropos" className="py-32 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-16 lg:gap-32">
          <div className="md:w-1/2 reveal opacity-0 translate-y-10">
            <div className="relative inline-block">
              <div className="absolute -inset-4 border border-[#d4c4b5]/40 translate-x-2 translate-y-2 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" 
                alt="Portrait Iris" 
                className="relative z-10 w-full max-w-sm h-auto filter grayscale-[15%] brightness-[105%]" 
              />
            </div>
          </div>
          <div className="md:w-1/2 reveal opacity-0 translate-y-10">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4c4b5] block mb-6 font-medium">L'Âme derrière Irisfilms</span>
            <h2 className="text-4xl lg:text-5xl font-serif mb-8 italic text-[#2c2c2c]">Cinéaste de l'intime</h2>
            <p className="font-light leading-loose mb-6 text-gray-500 text-sm md:text-base">
              Je crois que la beauté réside dans les détails les plus fugaces. Un souffle, une main posée sur une épaule, la lumière dorée qui traverse un voile. 
            </p>
            <p className="font-light leading-loose mb-10 text-gray-500 text-sm md:text-base">
              Mon travail chez Irisfilms est de transformer votre journée en un héritage visuel. J'utilise une approche contemplative pour créer des films qui ne sont pas seulement regardés, mais ressentis.
            </p>
            <div className="font-serif text-3xl italic text-[#d4c4b5]">Iris.</div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-32 px-6 bg-[#f8f7f4]">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            {[
              { icon: <Video size={32} />, title: "Immersion", text: "Une présence discrète pour capturer l'authenticité de vos émotions." },
              { icon: <Paintbrush size={32} />, title: "Esthétique", text: "Une colorimétrie douce inspirée de la pellicule argentique." },
              { icon: <Heart size={32} />, title: "Émotion", text: "Un récit construit autour de votre histoire et de votre personnalité." }
            ].map((item, i) => (
              <div key={i} className="reveal opacity-0 translate-y-10">
                <div className="text-[#d4c4b5] flex justify-center mb-8 font-light opacity-80">{item.icon}</div>
                <h3 className="font-serif text-xl italic mb-4">{item.title}</h3>
                <p className="font-light text-xs leading-loose text-gray-400 uppercase tracking-widest">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-2xl text-center reveal opacity-0 translate-y-10">
          <h2 className="text-4xl font-serif italic mb-4">Écrivons la suite</h2>
          <p className="font-light text-gray-400 text-sm tracking-widest uppercase mb-16">Contact & Réservations</p>
          
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <input type="text" placeholder="VOS NOMS" className="w-full bg-transparent border-b border-gray-200 py-3 text-[10px] tracking-[0.3em] focus:outline-none focus:border-[#d4c4b5] transition-colors uppercase font-light" />
              <input type="email" placeholder="VOTRE EMAIL" className="w-full bg-transparent border-b border-gray-200 py-3 text-[10px] tracking-[0.3em] focus:outline-none focus:border-[#d4c4b5] transition-colors uppercase font-light" />
            </div>
            <input type="text" placeholder="DATE & LIEU DU MARIAGE" className="w-full bg-transparent border-b border-gray-200 py-3 text-[10px] tracking-[0.3em] focus:outline-none focus:border-[#d4c4b5] transition-colors uppercase font-light" />
            <textarea rows="4" placeholder="VOTRE MESSAGE" className="w-full bg-transparent border-b border-gray-200 py-3 text-[10px] tracking-[0.3em] focus:outline-none focus:border-[#d4c4b5] transition-colors uppercase font-light resize-none"></textarea>
            
            <button type="button" className="group mt-12 flex items-center justify-center space-x-4 mx-auto text-[10px] tracking-[0.4em] uppercase font-light">
              <span className="border-b border-transparent group-hover:border-[#4a4a4a] transition-all py-1">Envoyer la demande</span>
              <Send size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 bg-[#faf9f6] border-t border-gray-100 text-center">
        <h2 className="text-3xl font-serif tracking-widest uppercase mb-10 font-light">Irisfilms</h2>
        <div className="flex justify-center space-x-8 mb-12">
          <a href="#" className="text-gray-400 hover:text-[#d4c4b5] transition-colors"><Instagram size={20} strokeWidth={1.5} /></a>
          <a href="#" className="text-gray-400 hover:text-[#d4c4b5] transition-colors font-serif italic text-xl">v</a>
          <a href="#" className="text-gray-400 hover:text-[#d4c4b5] transition-colors font-serif italic text-xl">p</a>
        </div>
        <div className="text-[9px] uppercase tracking-[0.3em] text-gray-300 font-light">
          &copy; {new Date().getFullYear()} Irisfilms • Cinématographie Fine Art • France & Europe
        </div>
      </footer>

      {/* YOUTUBE MODAL PLAYER */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-500">
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            onClick={() => setActiveVideo(null)}
          >
            <X size={32} strokeWidth={1} />
          </button>
          <div className="w-full max-w-6xl aspect-video bg-black shadow-2xl">
            <iframe 
              width="100%" 
              height="100%" 
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}