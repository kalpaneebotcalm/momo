import React from 'react';
import communityBg from '../assets/communitybg.png'; 

export default function Community() {
  return (
    <section 
      id="community" 
      className="w-full min-h-screen bg-black flex flex-col justify-between overflow-hidden select-none"
    >
      
      {/* UNIFIED TOP BANNER SECTION (Extends completely to the top behind the navbar)
*/}
      <div className="w-full bg-gradient-to-b from-[#2a2a29] via-[#222221] to-[#121212] flex flex-col items-center justify-center pt-[180px] md:pt-[220px] pb-16 px-6 shrink-0 border-b border-white/5">
        <div className="w-full max-w-[1400px] text-center px-4 space-y-7">
          
          {/* Main Stylized Header Title (Increased Size Layout) */}
          <h2 
            className="font-black uppercase text-center my-0"
            style={{ 
              fontFamily: "var(--heading)",
              color: "#e28686", 
              fontSize: "clamp(2.2rem, 5.5vw, 3.5rem)", // Expanded upper scaling bound to match image_56c168.png
              lineHeight: "1.1",
              letterSpacing: "0.08em",
              textShadow: "0 4px 12px rgba(0,0,0,0.7), 0 0 30px rgba(226, 134, 134, 0.2)"
            }}
          >
            WHY MEMO TOKEN MATTERS
          </h2>
          
          {/* First Paragraph */}
          <p 
            className="text-white font-bold text-sm md:text-xl lg:text-[22px] leading-[1.8] tracking-[0.12em] uppercase max-w-[1250px] mx-auto opacity-95"
            style={{ fontFamily: "var(--sans)" }}
          >
            Inspired by Elon's{" "}
            <span className="text-[#5be35b] font-black tracking-[0.12em]">
              TRAILBLAZER VS. TRADITION
            </span>{" "}
            ethos, this token merges decentralized finance (DeFi) with relentless innovation. Like SpaceX or Tesla, it disrupts outdated systems, empowering individuals to seize control of their financial futures.
          </p>

          {/* Second Paragraph */}
          <p 
            className="text-white font-bold text-sm md:text-xl lg:text-[22px] leading-[1.8] tracking-[0.12em] uppercase max-w-[1250px] mx-auto opacity-95"
            style={{ fontFamily: "var(--sans)" }}
          >
            By uniting a{" "}
            <span className="text-[#3adca2] font-black tracking-[0.12em]">
              GLOBAL COMMUNITY
            </span>{" "}
            of visionaries, it redistributes power from centralized gatekeepers to the people—rewarding boldness and redefining finance's boundaries. Join the mission. Disrupt. Decentralize. Dominate.
          </p>

        </div>
      </div>

      {/* LOWER CONTENT GRAPHIC SECTION*/}
      <div 
        className="w-full flex-1 min-h-[450px] md:min-h-[550px] lg:min-h-[650px] bg-no-repeat bg-top bg-cover relative flex flex-col justify-end pb-4"
        style={{ backgroundImage: `url(${communityBg})` }}
      >
        
        {/* LOWER LAYER MINI FOOTER NAVIGATION  */}
        <div className="w-full max-w-[1840px] mx-auto px-6 md:px-10 z-10 flex flex-col md:flex-row items-center justify-between gap-4 pt-10 pb-2 border-t border-white/10 mt-auto bg-gradient-to-t from-black via-black/90 to-transparent">
          
          {/* Bottom Left Navigation Text Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-black tracking-widest text-white/60 uppercase">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="/about" className="hover:text-white transition">About</a>
            <a href="/presale" className="hover:text-white transition">Presale</a>
            <a href="#roadmap" className="hover:text-white transition">Roadmap</a>
            <a href="#tokenomics" className="hover:text-white transition">Tokenomics</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="#how-to-buy" className="hover:text-white transition">How to buy</a>
            <a href="/community" className="text-[#7ee7c7]">Community</a>
          </div>

          {/* Central Copyright String */}
          <div className="text-[10px] text-white/40 font-medium md:absolute md:left-1/2 md:-translate-x-1/2 tracking-wider">
            @copyright 2026 all right reserved by Memo
          </div>

          {/* Bottom Right Social Icons Row */}
          <div className="flex items-center gap-5 text-white/60 text-base">
            <a href="#telegram" className="hover:text-[#7ee7c7] transition font-black">✈</a>
            <a href="#twitter" className="hover:text-[#7ee7c7] transition font-black">𝕏</a>
            <a href="#discord" className="hover:text-[#7ee7c7] transition font-black">👾</a>
          </div>

        </div>

      </div>

    </section>
  );
}