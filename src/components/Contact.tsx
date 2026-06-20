import React, { useState } from 'react';
import { Mail, Github, Linkedin, Code2, Phone, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <section id="contact" className="pt-20 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 relative">
      <div className="max-w-[1400px] mx-auto">

        {/* Main content */}
        <div className="mb-16 sm:mb-20 text-center">
          <div className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-white/30 mb-4 sm:mb-6 font-mono">
            {greeting} ☀️
          </div>

          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-green-500/15 mb-8 sm:mb-10">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-400/80 text-[10px] sm:text-[11px] tracking-wider uppercase">Available for Opportunities</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="text-white">Let's </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#9333EA]">talk</span>
            <span className="text-white/10 ml-2">→</span>
          </h2>

          <p className="text-white/30 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 sm:mb-12 px-4 sm:px-0">
            Whether you're a recruiter, a startup founder, or a fellow developer — I'd love to connect and build something great together.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            <a
              href="mailto:dhanaseelandhanaseelan464@gmail.com"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-black text-sm font-bold rounded-full hover:bg-white/90 transition-all group hover:scale-105"
            >
              <Mail size={15} />
              Send an Email
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="tel:+916383694530"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 border border-white/10 text-white/70 text-sm font-bold rounded-full hover:bg-white/5 hover:text-white hover:border-white/20 transition-all hover:scale-105"
            >
              <Phone size={15} />
              +91 63836 94530
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            {[
              { href: 'https://github.com/ADhanaseelan', icon: Github, label: 'GitHub', hover: 'hover:text-white hover:border-white/20' },
              { href: 'https://www.linkedin.com/in/dhanaseelan-mass/', icon: Linkedin, label: 'LinkedIn', hover: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/30' },
              { href: 'https://leetcode.com/u/Dhanaseelan_01/', icon: Code2, label: 'LeetCode', hover: 'hover:text-[#FFA116] hover:border-[#FFA116]/30' },
              { href: 'mailto:dhanaseelandhanaseelan464@gmail.com', icon: Mail, label: 'Email', hover: 'hover:text-[#ea580c] hover:border-[#ea580c]/30' },
            ].map(({ href, icon: Icon, label, hover }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/[0.07] flex items-center justify-center text-white/30 transition-all duration-300 hover:scale-110 ${hover}`}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="relative overflow-hidden py-8 sm:py-12 border-t border-white/[0.05]">
          <div className="text-center mb-6 sm:mb-8">
            <div className="text-[6vw] sm:text-[5vw] md:text-[4vw] font-bold tracking-tighter leading-none text-white/[0.025] select-none whitespace-nowrap overflow-hidden">
              ✺ DHANASEELAN ✺ ANGAMUTHU ✺
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 text-white/20 text-[10px] sm:text-[11px] tracking-wider uppercase text-center sm:text-left">
            <span>© 2026 Dhanaseelan Angamuthu</span>
            <span>Designed & Built with ❤️ in Tamil Nadu</span>
            <span>Frontend Developer · React · TypeScript</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
