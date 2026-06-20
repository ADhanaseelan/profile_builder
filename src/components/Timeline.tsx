import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  {
    year: '2025 - 2027',
    title: 'B.Tech IT - Sem 5 & 6',
    description: 'Expanding into Full Stack Development (Node.js, Next.js, Supabase). Learning AWS Cloud, Power BI, Android Development. Building AI-integrated projects with Gemini API.'
  },
  {
    year: '2024',
    title: 'Consultancy Project & Internships',
    description: 'Completed Frontend Developer Internships at AST Technologies and Sakthi Infra. Built production frontend with React + TypeScript + Tailwind CSS.'
  },
  {
    year: '2024',
    title: 'Hackathons & Certifications',
    description: 'Participated in Hackapalooza \'24, MESCIA-KEC, Innovation Day NEC, INNO BLITZ HACKATHON. Completed Novi-Tech and Infosys Springboard certifications.'
  },
  {
    year: '2023',
    title: 'B.Tech IT Journey Begins',
    description: 'Joined Nandha Engineering College. Mastered core web technologies: HTML5, CSS3, JavaScript ES6+. Learned Java programming and OOP.'
  }
];

const Timeline = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const lines = gsap.utils.toArray('.timeline-line');
    const points = gsap.utils.toArray('.timeline-point');
    const contents = gsap.utils.toArray('.timeline-content');

    contents.forEach((content: any, i) => {
      gsap.fromTo(content,
        { opacity: 0, x: i % 2 === 0 ? 50 : -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content,
            start: "top 80%",
          }
        }
      );
    });
  }, []);

  return (
    <section id="timeline" className="py-24 px-6 relative" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-accent font-accent tracking-widest text-sm uppercase mb-2">Journey</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Career <span className="text-gradient">Timeline</span></h3>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-transparent -translate-x-1/2"></div>

          {timelineEvents.map((event, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Point */}
              <div className="absolute left-[15px] md:left-1/2 w-4 h-4 rounded-full bg-surface border-2 border-accent -translate-x-1/2 mt-1.5 timeline-point z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 timeline-content ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-accent text-sm mb-4 border border-primary/20">
                  {event.year}
                </span>
                <h4 className="text-xl font-display font-bold text-white mb-3">{event.title}</h4>
                <p className="text-textSecondary font-body text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
