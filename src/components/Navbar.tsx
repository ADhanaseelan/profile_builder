import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#aboutme' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [time, setTime] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'Asia/Kolkata',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled || isOpen
            ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.06]'
            : ''
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">

          {/* Left: Clock (desktop only) */}
          <div className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-white/35 font-mono min-w-[140px]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            IND {time}
          </div>

          {/* Center: Logo (mobile) / Nav links (desktop) */}
          <div className="flex md:hidden">
            <span className="text-sm font-bold text-white">
              D<span className="text-[#ea580c]">·</span>OS
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] text-white/45 hover:text-white transition-colors duration-300 tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#ea580c] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right: Email button (desktop) / Hamburger (mobile) */}
          <div className="hidden md:flex min-w-[140px] justify-end">
            <a
              href="mailto:dhanaseelandhanaseelan464@gmail.com"
              className="text-[12px] px-4 py-1.5 rounded-full border border-white/10 text-white/60 hover:bg-white/5 hover:text-white hover:border-white/20 transition-all duration-300"
            >
              Email me
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Status dot */}
        <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-white/30 font-mono mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          {time}
        </div>

        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-black text-white/60 hover:text-white hover:text-[#ea580c] transition-colors duration-300 tracking-tight"
            style={{ transitionDelay: isOpen ? `${i * 60}ms` : '0ms' }}
          >
            {link.label}
          </a>
        ))}

        <a
          href="mailto:dhanaseelandhanaseelan464@gmail.com"
          onClick={() => setIsOpen(false)}
          className="mt-4 px-8 py-3 rounded-full border border-[#ea580c]/40 text-[#ea580c] text-sm font-bold hover:bg-[#ea580c] hover:text-white transition-all duration-300"
        >
          Email me
        </a>
      </div>
    </>
  );
};

export default Navbar;
