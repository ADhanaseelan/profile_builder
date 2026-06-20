import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'Frontend Developer',
    type: 'Consultancy Project',
    company: 'AST Technologies',
    location: 'Salem, Tamil Nadu',
    duration: '2024 · 6 Months',
    points: [
      'Developed responsive user interfaces using React, TypeScript, and Tailwind CSS',
      'Integrated frontend components with server-side APIs ensuring seamless data flow',
      'Delivered a production-ready, client-approved web application',
      'Collaborated directly with the client for requirements gathering and UI iteration',
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    color: '#ea580c',
  },
  {
    role: 'Frontend Developer Intern',
    type: 'Internship',
    company: 'AST Technologies',
    location: 'Salem, Tamil Nadu',
    duration: '2024',
    points: [
      'Developed responsive web interfaces and studied application architecture best practices',
      'Applied UI/UX principles to client-side development using modern web technologies',
    ],
    tags: ['React', 'JavaScript', 'CSS'],
    color: '#7c3aed',
  },
  {
    role: 'Frontend Developer Intern — Report Module',
    type: 'Internship',
    company: 'Sakthi Infra',
    location: 'Tamil Nadu',
    duration: '2024',
    points: [
      'Built the frontend Report Module for a Vehicle Management Software product',
      'Designed interactive data views, filters, and tabular reports using React and TypeScript',
    ],
    tags: ['React', 'TypeScript', 'Data Visualization'],
    color: '#0891b2',
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-exp-card]').forEach((card: any, i: number) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-[900px] mx-auto">

        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <div className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-white/30 mb-3 sm:mb-4 font-mono">
            Career Path
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Work </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#9333EA]">Experience</span>
          </h2>
        </div>

        {/* Timeline list */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#ea580c]/40 via-[#7c3aed]/30 to-transparent hidden sm:block" />

          <div className="space-y-5 sm:space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-exp-card
                className="relative sm:pl-14 group"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[14px] sm:left-[18px] top-6 w-3 h-3 rounded-full border-2 border-current hidden sm:block transition-colors duration-300"
                  style={{ color: exp.color, backgroundColor: exp.color + '30', borderColor: exp.color }}
                />

                <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-500 relative overflow-hidden">
                  {/* Top color accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }}
                  />

                  {/* Role + meta */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div className="flex items-start gap-3">
                      <div
                        className="mt-0.5 p-1.5 sm:p-2 rounded-lg shrink-0"
                        style={{ background: exp.color + '20', color: exp.color }}
                      >
                        <Briefcase size={14} />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-xl font-bold text-white leading-snug">{exp.role}</h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-white/40 text-xs sm:text-sm">
                          <span className="font-semibold text-white/60">{exp.company}</span>
                          <span className="flex items-center gap-1"><MapPin size={10} />{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      <span className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border border-white/[0.07] text-white/30">
                        {exp.type}
                      </span>
                      <span className="flex items-center gap-1 text-white/30 text-xs font-mono">
                        <Calendar size={10} />{exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Points */}
                  <ul className="space-y-2 mb-5">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-white/40 text-xs sm:text-sm leading-relaxed flex items-start gap-2.5">
                        <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full" style={{ background: exp.color }} />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-2.5 sm:px-3 py-0.5 sm:py-1 border border-white/[0.07] rounded-full text-white/30 text-[10px] sm:text-[11px] tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
