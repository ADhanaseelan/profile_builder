import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  // One tap → video plays WITH sound
  const handleEnter = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.play();
    setStarted(true);
  };

  const handleVideoEnd = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: () => onComplete()
    });
  };

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] bg-black">
      {/* Video — hidden until started */}
      <video
        ref={videoRef}
        src="/first1.mp4"
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${started ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Enter Screen — one tap to start with sound */}
      {!started && (
        <div
          onClick={handleEnter}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer group"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-3">
            <span className="text-white">Dhanaseelan</span>
            <span className="text-[#7C3AED]"> OS</span>
          </h1>
          <div className="mt-8 px-8 py-3 rounded-full border border-white/20 text-white/50 text-sm tracking-[0.2em] uppercase group-hover:bg-white/5 group-hover:border-white/40 group-hover:text-white transition-all duration-300">
            ▶ Enter
          </div>
        </div>
      )}

      {/* Skip — only while video is playing */}
      {started && (
        <button
          onClick={() => {
            gsap.to(containerRef.current, {
              opacity: 0, duration: 0.6, ease: "power2.inOut",
              onComplete: () => onComplete()
            });
          }}
          className="absolute bottom-8 right-8 z-10 text-white/30 text-[11px] tracking-[0.2em] uppercase font-mono hover:text-white transition-colors"
        >
          Skip →
        </button>
      )}
    </div>
  );
};

export default Preloader;
