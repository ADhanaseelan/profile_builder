import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    num: '01',
    category: 'Full Stack · AI',
    title: 'Chronos AI',
    subtitle: 'Smart Timetable Generator',
    description:
      'An intelligent academic scheduling system that automatically generates conflict-free class timetables using faculty, subject, and room data. Deployed at Nandha Engineering College.',
    tags: ['React', 'TypeScript', 'Java', 'PostgreSQL'],
    status: 'Live — NEC Server',
    link: null,
    color: '#7C3AED',
  },
  {
    num: '02',
    category: 'Web App · Production',
    title: 'TurfZone',
    subtitle: 'Sports Booking Platform',
    description:
      'A fully responsive sports turf booking web platform enabling users to browse, select, and book turf slots in real time. Built for production with clean UI and smooth booking flow.',
    tags: ['React', 'Tailwind CSS', 'Node.js'],
    status: 'Live in Production',
    link: 'https://turrfzone.com',
    color: '#06B6D4',
  },
  {
    num: '03',
    category: 'Web App · SaaS',
    title: 'FitSphere',
    subtitle: 'Gym Management System',
    description:
      'A comprehensive gym management platform that helps gym owners manage memberships, track workouts, handle subscription plans, and monitor attendance — all in one dashboard.',
    tags: ['React', 'TypeScript', 'REST APIs'],
    status: 'Live in Production',
    link: 'https://gym.artechnology.pro',
    color: '#9333EA',
  },
  {
    num: '04',
    category: 'AI · Next.js',
    title: 'CareerVerse AI',
    subtitle: 'AI Career Guidance Platform',
    description:
      'An AI-powered career guidance platform that helps students and professionals discover the right career path, analyze their skills, and get a personalized roadmap.',
    tags: ['Next.js', 'Gemini API', 'Supabase', 'TypeScript'],
    status: 'In Development',
    link: null,
    color: '#06B6D4',
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Use vertical layout on mobile

    const ctx = gsap.context(() => {
      if (!containerRef.current || !sectionRef.current) return;

      const slides = gsap.utils.toArray('.project-slide') as HTMLElement[];
      const totalWidth = slides.length * window.innerWidth;

      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (slides.length - 1),
          end: () => '+=' + totalWidth,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  // Mobile: vertical card list
  if (isMobile) {
    return (
      <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-[700px] mx-auto">
          {/* Header */}
          <div className="mb-10">
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3 font-mono">
              Selected Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Projects
            </h2>
          </div>

          <div className="space-y-5">
            {projects.map((project) => (
              <div
                key={project.num}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 sm:p-6 hover:border-white/15 transition-all duration-500 relative overflow-hidden group"
              >
                {/* Color accent top line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-60"
                  style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
                />

                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="text-[10px] font-mono text-white/30 mb-1 block">{project.num}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-sm font-medium mt-0.5" style={{ color: project.color }}>{project.subtitle}</p>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                <p className="text-white/45 text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 border border-white/[0.07] rounded-full text-white/35 text-[10px] tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <span className={`w-1.5 h-1.5 rounded-full ${project.status.includes('Live') ? 'bg-green-500' : 'bg-yellow-400 animate-pulse'}`} />
                  <span className="text-white/35 text-xs">{project.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop: horizontal scroll
  return (
    <section id="projects" ref={sectionRef} className="relative overflow-hidden">
      {/* Section Header */}
      <div className="absolute top-8 left-6 lg:left-20 z-20">
        <div className="text-[11px] tracking-[0.3em] uppercase text-white/30 font-mono">Selected Work</div>
      </div>

      <div ref={containerRef} className="flex w-max">
        {projects.map((project) => (
          <div
            key={project.num}
            className="project-slide w-screen h-screen flex items-center px-10 lg:px-24 relative"
          >
            {/* Big background number */}
            <div
              className="absolute right-12 lg:right-24 top-1/2 -translate-y-1/2 text-[18rem] lg:text-[26rem] font-bold leading-none select-none pointer-events-none"
              style={{ color: `${project.color}08` }}
            >
              {project.num}
            </div>

            <div className="max-w-2xl relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-mono text-white/30">
                  {project.num}/{String(projects.length).padStart(2, '0')}
                </span>
                <div className="w-10 h-px bg-white/10" />
                <span className="text-[11px] tracking-[0.2em] uppercase text-white/30">{project.category}</span>
              </div>

              <h3 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-2">{project.title}</h3>
              <h4 className="text-xl lg:text-2xl font-light mb-6" style={{ color: project.color }}>
                {project.subtitle}
              </h4>

              <p className="text-white/40 text-base lg:text-lg leading-relaxed max-w-xl mb-8">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 border border-white/[0.07] rounded-full text-white/40 text-xs tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm">
                  <span className={`w-2 h-2 rounded-full ${project.status.includes('Live') ? 'bg-green-500' : 'bg-yellow-400 animate-pulse'}`} />
                  <span className="text-white/40">{project.status}</span>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group"
                  >
                    Live Demo <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
