import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Code2, ArrowUpRight, Trophy, Flame, GitCommit, Star, GitPullRequest, Users, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Analytics = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.analytics-card').forEach((card: any) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 88%" }
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="analytics" ref={sectionRef} className="py-20 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-16">
          <div className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-white/30 mb-3 sm:mb-4 font-mono">
            Metrics & Insights
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Coding </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#9333EA]">Analytics</span>
          </h2>
        </div>

        {/* ═══════════════════════════════════════ */}
        {/* ═══════════ GITHUB SECTION ═══════════ */}
        {/* ═══════════════════════════════════════ */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <Github size={18} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">GitHub</h3>
              <p className="text-[11px] text-white/30 tracking-wider">@ADhanaseelan</p>
            </div>
            <a href="https://github.com/ADhanaseelan" target="_blank" rel="noreferrer"
              className="ml-auto flex items-center gap-1.5 text-[11px] tracking-wider uppercase text-white/30 hover:text-white transition-colors group">
              View Profile <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Row 1: Stats + Top Languages side by side (like LeetCode card format) */}
          <div className="analytics-card grid grid-cols-1 md:grid-cols-5 gap-0 glass rounded-2xl overflow-hidden mb-4">
            <div className="md:col-span-3 p-5 sm:p-8 border-b md:border-b-0 md:border-r border-white/5">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div>
                  <div className="text-4xl sm:text-5xl font-bold text-white">
                    <img
                      src="https://komarev.com/ghpvc/?username=ADhanaseelan&style=flat-square&color=7C3AED&label="
                      alt="Profile views"
                      className="inline h-4 sm:h-5 mr-2 opacity-50"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <GitCommit size={16} className="text-[#7C3AED] mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">500+</div>
                  <div className="text-[10px] text-white/30 tracking-wider uppercase mt-1">Commits</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <Star size={16} className="text-[#FFD700] mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">15+</div>
                  <div className="text-[10px] text-white/30 tracking-wider uppercase mt-1">Repos</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <GitPullRequest size={16} className="text-[#06B6D4] mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">10+</div>
                  <div className="text-[10px] text-white/30 tracking-wider uppercase mt-1">Pull Requests</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <Users size={16} className="text-green-400 mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">5+</div>
                  <div className="text-[10px] text-white/30 tracking-wider uppercase mt-1">Contributors</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 p-4 sm:p-6 flex items-center justify-center">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=ADhanaseelan&layout=donut&theme=transparent&hide_border=true&title_color=7C3AED&text_color=94A3B8&bg_color=00000000"
                alt="Top Languages"
                className="w-full max-w-[220px] sm:max-w-[280px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Row 2: Contribution Heatmap (like LeetCode's submission heatmap) */}
          <div className="analytics-card glass rounded-2xl p-6 mb-4 hover:border-white/10 transition-all duration-500">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Flame size={14} className="text-[#06B6D4]" />
                <span className="text-[11px] tracking-[0.15em] uppercase text-white/30">Contributions in the past year</span>
              </div>
            </div>
            <img
              src="https://ghchart.rshah.org/7C3AED/ADhanaseelan"
              alt="GitHub Contribution Chart"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Row 3: Trophies (like LeetCode Badges row) */}
          <div className="analytics-card glass rounded-2xl p-6 hover:border-white/10 transition-all duration-500 overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <Trophy size={14} className="text-[#FFD700]" />
              <span className="text-[11px] tracking-[0.15em] uppercase text-white/30">Trophies & Achievements</span>
            </div>
            <img
              src="https://github-profile-trophy.vercel.app/?username=ADhanaseelan&theme=onestar&no-bg=true&no-frame=true&column=-1&margin-w=8"
              alt="GitHub Trophies"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* ═══════════════════════════════════════ */}
        {/* ═══════════ LEETCODE SECTION ════════ */}
        {/* ═══════════════════════════════════════ */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-[#FFA116]/10 border border-[#FFA116]/20 flex items-center justify-center">
              <Code2 size={18} className="text-[#FFA116]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">LeetCode</h3>
              <p className="text-[11px] text-white/30 tracking-wider">@Dhanaseelan_01</p>
            </div>
            <a href="https://leetcode.com/u/Dhanaseelan_01/" target="_blank" rel="noreferrer"
              className="ml-auto flex items-center gap-1.5 text-[11px] tracking-wider uppercase text-white/30 hover:text-[#FFA116] transition-colors group">
              View Profile <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="analytics-card glass rounded-2xl overflow-hidden mb-4">
            {/* Top Row: Stats + Badges */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              <div className="md:col-span-3 p-5 sm:p-8 border-b md:border-b-0 md:border-r border-white/5">
                <div className="flex items-start gap-5 sm:gap-8 flex-wrap">
                  {/* Solved Ring */}
                  <div className="text-center">
                    <div className="relative w-28 h-28">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8"/>
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#FFA116" strokeWidth="8" strokeDasharray="314" strokeDashoffset="80" strokeLinecap="round"/>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-white">422</span>
                        <span className="text-[9px] text-white/30">/3962</span>
                      </div>
                    </div>
                    <div className="text-[10px] text-green-400 mt-2">✓ Solved</div>
                  </div>

                  {/* Difficulty Breakdown */}
                  <div className="flex-1 space-y-3 min-w-[200px]">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <span className="text-green-400 text-sm font-medium">Easy</span>
                      <span className="text-white font-bold">188<span className="text-white/30 font-normal text-xs">/950</span></span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <span className="text-[#FFA116] text-sm font-medium">Med.</span>
                      <span className="text-white font-bold">186<span className="text-white/30 font-normal text-xs">/2069</span></span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <span className="text-red-400 text-sm font-medium">Hard</span>
                      <span className="text-white font-bold">48<span className="text-white/30 font-normal text-xs">/943</span></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Badges */}
              <div className="md:col-span-2 p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/50 text-sm">Badges</span>
                  <span className="text-white font-bold text-2xl">9</span>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  <div className="aspect-square rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-xl hover:scale-110 transition-transform" title="50 Days Badge">🏅</div>
                  <div className="aspect-square rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-xl hover:scale-110 transition-transform" title="100 Days Badge 2026">🎖️</div>
                  <div className="aspect-square rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-xl hover:scale-110 transition-transform" title="Annual Badge">🏆</div>
                  <div className="aspect-square rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-xl hover:scale-110 transition-transform" title="Problem Solver">⭐</div>
                  <div className="aspect-square rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-xl hover:scale-110 transition-transform" title="Streak Badge">🔥</div>
                  <div className="aspect-square rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-xl hover:scale-110 transition-transform" title="200 Days Badge">💎</div>
                  <div className="aspect-square rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-xl hover:scale-110 transition-transform" title="Contest Participant">🎯</div>
                  <div className="aspect-square rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-xl hover:scale-110 transition-transform" title="Daily Challenge">✅</div>
                </div>
                <div className="mt-4 text-[10px] text-white/20 tracking-wider">
                  Most Recent: <span className="text-[#FFA116]">100 Days Badge 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Submission Heatmap */}
          <div className="analytics-card glass rounded-2xl p-6 hover:border-[#FFA116]/10 transition-all duration-500">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Flame size={14} className="text-green-400" />
                <span className="text-white font-medium text-sm">533</span>
                <span className="text-white/30 text-sm">submissions in the past one year</span>
              </div>
              <div className="hidden md:flex items-center gap-4 text-[11px] text-white/30">
                <span>Total active days: <span className="text-white">236</span></span>
                <span>Max streak: <span className="text-white">48</span></span>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://leetcard.jacoblin.cool/Dhanaseelan_01?theme=dark&font=Inter&ext=heatmap&border=0&radius=12"
                alt="LeetCode Heatmap"
                className="w-full max-w-[700px] rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ── Profile Links ── */}
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <a href="https://github.com/ADhanaseelan" target="_blank" rel="noreferrer"
            className="analytics-card flex items-center gap-3 glass rounded-full px-6 py-3 hover:border-white/10 transition-all duration-300 group">
            <Github size={16} className="text-white/50 group-hover:text-white transition-colors" />
            <span className="text-sm text-white/50 group-hover:text-white transition-colors">github.com/ADhanaseelan</span>
          </a>
          <a href="https://leetcode.com/u/Dhanaseelan_01/" target="_blank" rel="noreferrer"
            className="analytics-card flex items-center gap-3 glass rounded-full px-6 py-3 hover:border-[#FFA116]/20 transition-all duration-300 group">
            <Code2 size={16} className="text-white/50 group-hover:text-[#FFA116] transition-colors" />
            <span className="text-sm text-white/50 group-hover:text-white transition-colors">leetcode.com/Dhanaseelan_01</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
