import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Analytics from './components/Analytics';
import Chatbot from './components/Chatbot';
import Contact from './components/Contact';
import ScrollReveal from './components/ScrollReveal';

function App() {
  const progressRef = useRef<HTMLDivElement>(null);

  // Live scroll progress bar at top
  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${total > 0 ? scrolled / total : 0})`;
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">

      {/* Orange → amber scroll progress bar */}
      <div ref={progressRef} className="scroll-progress" />

      {/* Navbar */}
      <Navbar />

      {/* ── HERO: fullscreen video intro ── */}
      <Hero />

      {/* ── PORTFOLIO SECTIONS ── */}
      <div className="relative">

        {/* Ambient video background (fixed, behind sections) */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <video
            src="/second2.mp4"
            autoPlay muted loop playsInline
            className="w-full h-full object-cover opacity-[0.12]"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/82" />
        </div>

        {/* Sections — each slides up like a new page */}
        <div className="relative z-10">

          <ScrollReveal>
            <AboutMe />
          </ScrollReveal>

          <div className="w-full flex justify-center">
            <div className="h-px w-3/4 max-w-4xl bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          </div>

          <ScrollReveal>
            <Projects />
          </ScrollReveal>

          <div className="w-full flex justify-center">
            <div className="h-px w-3/4 max-w-4xl bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          </div>

          <ScrollReveal>
            <Experience />
          </ScrollReveal>

          <div className="w-full flex justify-center">
            <div className="h-px w-3/4 max-w-4xl bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          </div>

          <ScrollReveal>
            <Analytics />
          </ScrollReveal>

          <div className="w-full flex justify-center">
            <div className="h-px w-3/4 max-w-4xl bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          </div>

          <ScrollReveal>
            <Chatbot />
          </ScrollReveal>

          <div className="w-full flex justify-center">
            <div className="h-px w-3/4 max-w-4xl bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          </div>

          <ScrollReveal>
            <Contact />
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
}

export default App;
