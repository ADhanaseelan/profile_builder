import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-anim', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      // Image fade in
      gsap.from('.about-img', {
        opacity: 0,
        x: 50,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative h-screen w-full flex items-center overflow-hidden text-black"
    >
      {/* Left Margin Socials */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-12 z-20 text-black/60">
        <div className="flex flex-col gap-16">
          <a href="#" className="hover:text-black transition-colors -rotate-90 text-[10px] font-bold tracking-widest uppercase">Instagram</a>
          <a href="https://github.com/ADhanaseelan" className="hover:text-black transition-colors -rotate-90 text-[10px] font-bold tracking-widest uppercase">Github</a>
          <a href="https://www.linkedin.com/in/dhanaseelan-mass/" className="hover:text-black transition-colors -rotate-90 text-[10px] font-bold tracking-widest uppercase">LinkedIn</a>
        </div>
      </div>

      <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-6 lg:px-12 xl:pl-32 flex items-center justify-between">

        {/* ══ LEFT COLUMN: Text & Tags ══ */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center h-full pt-10">
          <div className="about-anim mb-2">
            <p className="text-white/60 font-semibold text-sm mb-1">Hi, I'm</p>
            <p className="text-[#ea580c] font-bold text-lg">Software Developer</p>
          </div>

          <h2 className="about-anim text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[8rem] font-black tracking-tighter leading-[0.9] mb-8 text-[#ffff]">
            Dhanaseelan<br />
            {/* Angamuthu */}
          </h2>

          {/* Pill Tags */}
          <div className="about-anim flex flex-wrap gap-2 mb-8 max-w-xl">
            {['AI Architect', 'Full Stack Engineer', 'Cinematic Creator', 'MERN Stack'].map((tag) => (
              <span key={tag} className="px-5 py-2 bg-white/40 backdrop-blur-md border border-white/50 rounded-full text-black font-bold text-xs hover:bg-white/60 transition-colors cursor-default shadow-sm">
                {tag}
              </span>
            ))}
          </div>

          <a href="#projects" className="about-anim inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#ea580c] text-white font-bold rounded-full hover:bg-[#c2410c] transition-colors shadow-lg shadow-orange-900/20 w-fit mb-12">
            View Projects <ArrowUpRight size={18} strokeWidth={3} />
          </a>

          {/* Bottom Stats Grid */}
          <div className="about-anim grid grid-cols-3 gap-4 max-w-lg mt-auto pb-10">
            <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-4 shadow-sm flex flex-col justify-center">
              <div className="text-2xl font-black text-[#ea580c] mb-1">4+</div>
              <div className="text-[9px] font-bold uppercase tracking-wider text-black/80 leading-tight">Years<br />Experience</div>
            </div>
            <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-4 shadow-sm flex flex-col justify-center">
              <div className="text-2xl font-black text-[#ea580c] mb-1">20+</div>
              <div className="text-[9px] font-bold uppercase tracking-wider text-black/80 leading-tight">Projects<br />Completed</div>
            </div>
            <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-4 shadow-sm flex flex-col justify-center">
              <div className="text-lg font-black text-[#ea580c] mb-1 leading-none mt-1">AI + Full Stack</div>
              <div className="text-[9px] font-bold uppercase tracking-wider text-black/80 leading-tight mt-2">Specialist</div>
            </div>
          </div>
        </div>

      </div>

      {/* ══ RIGHT COLUMN: Portrait pinned to bottom right ══ */}
      {/* Removed right padding/margins so it aligns perfectly to the right edge */}
      <div className="absolute right-0 bottom-0 h-full w-[45%] hidden lg:flex items-end justify-end pointer-events-none z-10 overflow-hidden">
        <div className="about-img relative h-[90%] w-full flex justify-end items-end translate-x-[5%]">
          <img
            src="profile.png"
            alt="Dhanaseelan Profile"
            className="h-full w-auto object-contain object-bottom drop-shadow-[[-15px_0_30px_rgba(234,88,12,0.4)]]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
