import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Play, Pause, Volume2, VolumeX, ChevronDown } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [showText, setShowText] = useState(true);

  const handleBigPlay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsPlaying(true);
      setIsMuted(false);
      setHasStarted(true);
      setShowText(false);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setShowText(true);
      } else {
        if (videoRef.current.ended) videoRef.current.currentTime = 0;
        videoRef.current.play();
        setShowText(false);
      }
      setIsPlaying(!isPlaying);
      setHasStarted(true);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowText(true);
  };

  useEffect(() => {
    gsap.fromTo(
      '.hero-text-anim',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex items-center bg-black">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/first1.mp4"
          playsInline
          onEnded={handleVideoEnd}
          className={`w-full h-full object-cover transition-all duration-1000 ${
            !showText ? 'opacity-100 scale-100' : 'opacity-40 scale-105'
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent transition-opacity duration-1000 ${
            !showText ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 flex items-center">
        <div
          className={`w-full max-w-2xl transition-opacity duration-1000 ${
            showText ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="hero-text-anim text-[10px] tracking-[0.3em] uppercase text-[#FFA116] mb-4 sm:mb-6 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FFA116]" />
            Portfolio 2026
          </div>

          <h1 className="hero-text-anim text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[1.05] mb-4 sm:mb-6 text-white/90">
            Dhanaseelan
            <br />
            <span className="text-white/50 text-4xl sm:text-6xl md:text-7xl lg:text-8xl">Angamuthu</span>
          </h1>

          <div className="hero-text-anim text-[10px] sm:text-[11px] md:text-[13px] tracking-[0.2em] uppercase text-white/40 font-medium">
            Frontend Developer&nbsp;•&nbsp;React Engineer&nbsp;•&nbsp;Software Engineer
          </div>
        </div>

        {/* Center big play button */}
        {!hasStarted && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <button
              onClick={handleBigPlay}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border border-white/30 flex items-center justify-center bg-black/20 backdrop-blur-sm hover:scale-110 hover:bg-white/10 transition-all duration-500 group"
            >
              <Play size={24} className="text-white ml-1 sm:ml-2 group-hover:text-[#FFA116] transition-colors" fill="currentColor" />
            </button>
            <span className="mt-3 text-white/40 text-[10px] tracking-widest uppercase">Play Reel</span>
          </div>
        )}
      </div>

      {/* Scroll hint */}
      <div
        className={`absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-opacity duration-1000 ${
          showText ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-mono">Scroll</span>
        <ChevronDown size={14} className="text-white/30 animate-bounce" />
      </div>

      {/* Video controls */}
      {hasStarted && (
        <div className="absolute bottom-6 sm:bottom-10 right-4 sm:right-10 flex items-center gap-3 z-20">
          <button
            onClick={togglePlay}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-md hover:bg-white/10 transition-colors"
          >
            {isPlaying ? <Pause size={13} className="text-white" /> : <Play size={13} className="text-white ml-0.5" />}
          </button>
          <button
            onClick={toggleMute}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-md hover:bg-white/10 transition-colors"
          >
            {isMuted ? <VolumeX size={13} className="text-white" /> : <Volume2 size={13} className="text-white" />}
          </button>
        </div>
      )}
    </section>
  );
};

export default Hero;
