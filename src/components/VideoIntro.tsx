import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoIntro = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    // Wait for video metadata to load
    const setupScrollTrigger = () => {
      const duration = video.duration;
      if (!duration || isNaN(duration)) return;

      // Pin the video section and scrub through video on scroll
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${window.innerHeight * 3}`,
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          // Map scroll progress (0-1) to video time
          const time = self.progress * duration;
          video.currentTime = time;

          // Fade out overlay as scroll progresses
          if (overlayRef.current) {
            // Show scroll hint at start, fade it out
            const hintOpacity = Math.max(0, 1 - self.progress * 5);
            overlayRef.current.style.opacity = String(hintOpacity);
          }
        }
      });
    };

    // Video might already have metadata loaded
    if (video.readyState >= 1) {
      setupScrollTrigger();
    } else {
      video.addEventListener('loadedmetadata', setupScrollTrigger);
    }

    return () => {
      video.removeEventListener('loadedmetadata', setupScrollTrigger);
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === section) st.kill();
      });
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video */}
      <video
        ref={videoRef}
        src="/first1.mp4"
        muted
        playsInline
        preload="auto"
        className="absolute inset-4 w-full h-full object-cover"
      />

      {/* Scroll Hint Overlay */}
      <div ref={overlayRef} className="absolute inset-0 flex flex-col items-center justify-end pb-16 z-10 pointer-events-none">
        <div className="flex flex-col items-center gap-3 animate-bounce">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-mono">
            Scroll to explore
          </span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>

      {/* Bottom gradient fade into portfolio */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default VideoIntro;
