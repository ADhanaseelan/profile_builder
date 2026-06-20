import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, MessageCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const suggestedQuestions = [
  'What projects has Dhanaseelan built?',
  'What is his tech stack?',
  'Has he done any internships?',
  'Is he available for hire?',
];

const getResponse = (input: string): string => {
  const q = input.toLowerCase();

  if (q.includes('project') || q.includes('built') || q.includes('work')) {
    return "Dhanaseelan has built 3 live production apps:\n\n• **Chronos AI** — Intelligent timetable generator at NEC college\n• **TurfZone** — Sports turf booking platform (turrfzone.com)\n• **FitSphere** — Gym management system (gym.artechnology.pro)\n\nAlso building **CareerVerse AI** with Next.js + Gemini API. Reach out at dhanaseelandhanaseelan464@gmail.com!";
  }
  if (q.includes('tech') || q.includes('stack') || q.includes('skill') || q.includes('language')) {
    return "Core tech stack:\n\n**Frontend:** React.js, TypeScript, JavaScript, Tailwind CSS, Next.js\n**Languages:** Java (OOP, DSA), Python\n**Database:** PostgreSQL, MySQL, Supabase\n**Tools:** Git, Figma, VS Code, Power BI\n**AI:** Gemini API, prompt engineering";
  }
  if (q.includes('intern') || q.includes('experience') || q.includes('job')) {
    return "Yes! Dhanaseelan completed:\n\n• **Frontend Developer (Consultancy)** — 6 months at AST Technologies, Salem. Production React + TypeScript app.\n• **Frontend Developer Intern** — AST Technologies.\n• **Frontend Intern (Report Module)** — Sakthi Infra. Vehicle Management Software.";
  }
  if (q.includes('hire') || q.includes('available') || q.includes('open')) {
    return "🟢 Yes! Open to:\n\n• **Internships** (Frontend / Full Stack)\n• **Full-Time Roles** (Software Engineer / Frontend Developer)\n• **Freelance Projects**\n\nLocation: Tamil Nadu (Open to Remote/Hybrid)\n\nEmail: dhanaseelandhanaseelan464@gmail.com\nPhone: +91 6383694530";
  }
  if (q.includes('cgpa') || q.includes('college') || q.includes('education')) {
    return "📚 Education:\n\n• **B.Tech IT** — Nandha Engineering College, Erode | CGPA: 8.4 | 2023–2027\n• **HSC** — Diamond Jubilee Hr. Sec. School | 85% | 2023\n• **SSLC** — Diamond Jubilee Hr. Sec. School | 80% | 2021";
  }
  if (q.includes('certif') || q.includes('hackathon') || q.includes('achievement')) {
    return "🏆 Achievements:\n\n**Hackathons:** Hackapalooza '24 (NEC), MESCIA (KEC), INNO BLITZ 1.0 (SREC)\n**Certs:** Full Stack (Novi-Tech), Python (Infosys Springboard), AWS Cloud (In Progress)\n• Delivered 3 live production apps • CGPA 8.4";
  }
  if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
    return "Hey there! 👋 I'm DhanaGPT — ask me about Dhanaseelan's projects, skills, experience, or availability!";
  }
  return "Dhanaseelan is a Frontend Developer specializing in React, TypeScript, and modern web tech. 3 live apps, 2 internships, B.Tech IT at NEC Erode (CGPA 8.4).\n\nReach out at dhanaseelandhanaseelan464@gmail.com!";
};

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm **DhanaGPT** 🤖 — Ask me anything about Dhanaseelan's projects, skills, or career!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-chatbot]', {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '[data-chatbot]', start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSend = (text?: string) => {
    const message = text || input;
    if (!message.trim()) return;

    const newMessages = [...messages, { role: 'user', content: message }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setMessages([...newMessages, { role: 'assistant', content: getResponse(message) }]);
      setIsTyping(false);
    }, 700 + Math.random() * 400);
  };

  const formatContent = (text: string) =>
    text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
      .replace(/\n/g, '<br/>');

  return (
    <section id="chatbot" ref={sectionRef} className="py-20 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-[800px] mx-auto">

        {/* Header */}
        <div className="mb-8 sm:mb-10 text-center">
          <div className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-white/30 mb-3 sm:mb-4 font-mono flex items-center justify-center gap-2">
            <MessageCircle size={12} /> AI Assistant
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-white">Ask </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#9333EA]">DhanaGPT</span>
          </h2>
        </div>

        {/* Chat window */}
        <div data-chatbot className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm">

          {/* Header bar */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-white/[0.06] flex items-center gap-3 bg-white/[0.02]">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/25 flex items-center justify-center shrink-0">
              <Sparkles size={13} className="text-[#7C3AED]" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">DhanaGPT</div>
              <div className="text-[10px] tracking-wider uppercase text-[#06B6D4]/80">Online · Portfolio AI</div>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] text-green-400/70 hidden sm:block">Active</span>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={chatRef}
            className="p-4 sm:p-6 h-[280px] sm:h-[360px] overflow-y-auto space-y-4 scroll-smooth"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 sm:gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === 'user' ? 'bg-white/[0.07]' : 'bg-[#7C3AED]/15'
                  }`}
                >
                  {msg.role === 'user'
                    ? <User size={11} className="text-white/50" />
                    : <Bot size={11} className="text-[#7C3AED]" />
                  }
                </div>
                <div
                  className={`max-w-[85%] sm:max-w-[80%] px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#7C3AED] text-white rounded-tr-sm'
                      : 'bg-white/[0.04] text-white/60 rounded-tl-sm border border-white/[0.06]'
                  }`}
                >
                  <div dangerouslySetInnerHTML={{ __html: formatContent(msg.content) }} />
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-[#7C3AED]/15 flex items-center justify-center shrink-0">
                  <Bot size={11} className="text-[#7C3AED]" />
                </div>
                <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-white/[0.04] border border-white/[0.06]">
                  <div className="flex gap-1">
                    {[0, 150, 300].map(d => (
                      <span key={d} className="w-1.5 h-1.5 rounded-full bg-white/25 animate-bounce" style={{ animationDelay: `${d}ms` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Suggested questions */}
          <div className="px-4 sm:px-6 py-2 sm:py-3 border-t border-white/[0.06] flex gap-2 overflow-x-auto scroll-smooth">
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q)}
                className="shrink-0 text-[10px] sm:text-[11px] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/[0.07] text-white/30 hover:text-white/70 hover:border-white/15 hover:bg-white/[0.04] transition-all whitespace-nowrap"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="px-3 sm:px-4 py-2 sm:py-3 border-t border-white/[0.06] flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything about Dhanaseelan…"
              className="flex-1 bg-transparent px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder-white/20 focus:outline-none min-w-0"
            />
            <button
              onClick={() => handleSend()}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#7C3AED] flex items-center justify-center hover:bg-[#9333EA] transition-colors shrink-0"
            >
              <Send size={13} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
