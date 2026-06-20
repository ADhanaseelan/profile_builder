import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Cpu, Clapperboard, Sparkles, Coffee, Rocket, Heart, Zap } from 'lucide-react';
import profileImg from '../../animation_profile.png';

gsap.registerPlugin(ScrollTrigger);

const traits = [
  { icon: Code2, label: 'Clean Code', color: '#ea580c', desc: 'Writing readable, scalable code is my craft.' },
  { icon: Cpu, label: 'AI & Tech', color: '#7c3aed', desc: 'Exploring AI tools to build smarter products.' },
  { icon: Clapperboard, label: 'Creative', color: '#0891b2', desc: 'Cinematic vision meets engineering logic.' },
  { icon: Rocket, label: 'Builder', color: '#16a34a', desc: 'I ship ideas into real-world products fast.' },
];

const funFacts = [
  { emoji: '☕', text: 'Fueled by coffee & curiosity' },
  { emoji: '🎮', text: 'Gamer turned problem solver' },
  { emoji: '🎬', text: 'Cinematic Creator at heart' },
  { emoji: '🌙', text: 'Night owl developer mode ON' },
  { emoji: '🧠', text: 'Lifelong learner, always' },
  { emoji: '🚀', text: 'Zero to deployed in record time' },
];

const AboutMe = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredTrait, setHoveredTrait] = useState<number | null>(null);
  const [activeFact, setActiveFact] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scope all selectors within this section only
      gsap.from('[data-anim="text"]', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 68%',
        },
      });

      gsap.from('[data-anim="photo"]', {
        x: 60,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      });

      // Gentle floating animation on photo wrapper
      gsap.to('[data-anim="float"]', {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Orbit ring rotation
      gsap.utils.toArray('[data-anim="orbit"]').forEach((el: any, i: number) => {
        gsap.to(el, {
          rotation: i % 2 === 0 ? 360 : -360,
          duration: 12 + i * 4,
          repeat: -1,
          ease: 'linear',
          transformOrigin: '50% 50%',
        });
      });
    }, sectionRef); // ← scope to this section only

    const factInterval = setInterval(() => {
      setActiveFact(prev => (prev + 1) % funFacts.length);
    }, 2500);

    return () => {
      ctx.revert(); // Only kills tweens scoped to this section
      clearInterval(factInterval);
    };
  }, []);

  return (
    <section
      id="aboutme"
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-52 sm:w-72 h-52 sm:h-72 bg-violet-500/8 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">

        {/* Section label */}
        <div data-anim="text" className="flex items-center gap-3 mb-10 sm:mb-14">
          <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#ea580c]" />
          <span className="text-[#ea580c] font-bold text-xs sm:text-sm tracking-[0.25em] uppercase flex items-center gap-2">
            <Sparkles size={13} /> About Me
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#ea580c]/30 to-transparent" />
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 items-center">

          {/* ── LEFT: Text ── */}
          <div className="flex flex-col gap-5 sm:gap-6 order-2 lg:order-1">

            {/* Heading */}
            <div data-anim="text">
              <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-[1.08] text-white">
                Hello, I'm{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#fbbf24]">
                    Dhanaseelan
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M0 4 Q50 0 100 4 Q150 8 200 4" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>{' '}
                👋
              </h2>
            </div>

            {/* Role badges */}
            <div data-anim="text" className="flex flex-wrap gap-2">
              {['Frontend Developer', 'Software Engineer', 'MERN Stack'].map((role) => (
                <span
                  key={role}
                  className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wider border border-[#ea580c]/40 bg-[#ea580c]/10 text-[#f97316] uppercase"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Bio */}
            <div data-anim="text">
              <p className="text-white/65 text-sm sm:text-base md:text-lg leading-relaxed">
                I'm a{' '}
                <span className="text-white font-semibold">Frontend Developer and Software Engineer</span>{' '}
                who enjoys creating modern websites and applications. I like turning{' '}
                <span className="text-[#f97316] font-semibold">ideas into real products</span>{' '}
                and learning new technologies along the way.
              </p>
              <p className="text-white/65 text-sm sm:text-base md:text-lg leading-relaxed mt-3 sm:mt-4">
                Whether it's building user interfaces, exploring{' '}
                <span className="text-[#a78bfa] font-semibold">AI tools</span>, or working on new projects,
                I'm always excited to create something meaningful. Technology is about creating{' '}
                <span className="text-[#f97316] font-semibold">experiences people enjoy and remember</span>.
              </p>
            </div>

            {/* Fun fact ticker */}
            <div data-anim="text">
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm w-fit max-w-full">
                <Coffee size={15} className="text-[#ea580c] shrink-0" />
                <span className="text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-wider shrink-0">Fun:</span>
                <span
                  key={activeFact}
                  className="text-white text-xs sm:text-sm font-medium truncate"
                >
                  {funFacts[activeFact].emoji} {funFacts[activeFact].text}
                </span>
              </div>
            </div>

            {/* Trait cards grid */}
            <div data-anim="text" className="grid grid-cols-2 gap-2 sm:gap-3">
              {traits.map((t, i) => {
                const Icon = t.icon;
                const isHov = hoveredTrait === i;
                return (
                  <div
                    key={t.label}
                    className="relative p-3 sm:p-4 rounded-xl sm:rounded-2xl border cursor-pointer transition-all duration-300 group overflow-hidden"
                    style={{
                      borderColor: isHov ? t.color + '60' : 'rgba(255,255,255,0.07)',
                      background: isHov ? t.color + '15' : 'rgba(255,255,255,0.03)',
                      transform: isHov ? 'translateY(-3px)' : 'translateY(0)',
                      boxShadow: isHov ? `0 8px 24px ${t.color}25` : 'none',
                    }}
                    onMouseEnter={() => setHoveredTrait(i)}
                    onMouseLeave={() => setHoveredTrait(null)}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"
                      style={{ background: `radial-gradient(circle at 30% 30%, ${t.color}18, transparent 70%)` }}
                    />
                    <div className="relative z-10 flex items-start gap-2 sm:gap-3">
                      <div
                        className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl shrink-0"
                        style={{ background: t.color + '20', color: t.color }}
                      >
                        <Icon size={15} />
                      </div>
                      <div>
                        <div className="text-white font-bold text-xs sm:text-sm">{t.label}</div>
                        <div className="text-white/45 text-[10px] sm:text-xs leading-snug mt-0.5 hidden sm:block">{t.desc}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div data-anim="text" className="flex flex-wrap gap-3 mt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 bg-[#ea580c] text-white font-bold rounded-full hover:bg-[#c2410c] transition-all duration-300 shadow-lg shadow-orange-900/30 hover:scale-105 text-xs sm:text-sm"
              >
                <Rocket size={14} /> See My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 border border-white/20 text-white font-bold rounded-full hover:border-[#ea580c] hover:text-[#ea580c] transition-all duration-300 text-xs sm:text-sm hover:scale-105"
              >
                <Heart size={14} /> Let's Connect
              </a>
            </div>
          </div>

          {/* ── RIGHT: Photo ── */}
          <div data-anim="photo" className="flex justify-center order-1 lg:order-2">
            <div data-anim="float" className="relative">

              {/* Orbit rings */}
              <div
                data-anim="orbit"
                className="absolute rounded-full border border-dashed border-[#ea580c]/25"
                style={{ inset: '-20px' }}
              />
              <div
                data-anim="orbit"
                className="absolute rounded-full border border-dashed border-violet-500/15"
                style={{ inset: '-40px' }}
              />

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#ea580c]/25 via-[#f97316]/10 to-violet-600/15 blur-2xl scale-110" />

              {/* Photo frame */}
              <div className="relative w-[220px] h-[270px] sm:w-[280px] sm:h-[340px] md:w-[320px] md:h-[390px] xl:w-[370px] xl:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Dhanaseelan - Frontend Developer"
                  className="w-full h-full object-cover object-top"
                />
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent" />
                {/* Name card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-black/60 backdrop-blur-md rounded-lg sm:rounded-xl border border-white/10">
                    <div className="text-white font-black text-sm sm:text-base">Dhanaseelan A</div>
                    <div className="text-[#f97316] text-[10px] sm:text-xs font-semibold tracking-wide">Frontend Developer · MERN Stack</div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-2 sm:px-3 py-1 sm:py-2 bg-[#ea580c] text-white text-[10px] sm:text-xs font-black rounded-xl sm:rounded-2xl shadow-lg shadow-orange-500/40 rotate-6 hover:rotate-0 transition-transform duration-300 cursor-default">
                <Zap size={10} className="inline mr-1" />
                Open to Work!
              </div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 px-2 sm:px-3 py-1 sm:py-2 bg-violet-600 text-white text-[10px] sm:text-xs font-black rounded-xl sm:rounded-2xl shadow-lg shadow-violet-500/40 -rotate-3 hover:rotate-0 transition-transform duration-300 cursor-default whitespace-nowrap">
                🔥 Building Cool Things
              </div>
            </div>
          </div>

        </div>

        {/* Stats bar */}
        <div data-anim="text" className="mt-14 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {[
            { value: '4+', label: 'Years Exp.', icon: '⚡' },
            { value: '20+', label: 'Projects', icon: '🚀' },
            { value: '100%', label: 'Passion', icon: '❤️' },
            { value: '∞', label: 'Ideas/Day', icon: '💡' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:border-[#ea580c]/40 hover:bg-white/[0.07] transition-all duration-300 group text-center"
            >
              <div className="text-xl sm:text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#f97316] transition-colors duration-300">{stat.value}</div>
              <div className="text-white/45 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
