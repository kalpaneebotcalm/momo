import React from 'react';
import roadmapBg from '../assets/roadmapbg.png';
import presale1 from '../assets/presale1.png';
import coin from '../assets/coin.png';
import elon from '../assets/elon.png';
import logo from '../assets/logo.png';

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat pt-[160px] pb-12 px-4 md:px-10 flex flex-col justify-between overflow-x-hidden select-none"
      style={{ backgroundImage: `url(${roadmapBg})` }}
    >
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* Main Structural Layout Arena */}
      <div className="w-full max-w-[1840px] mx-auto z-10 flex-1 relative min-h-[750px] lg:min-h-[900px]">

        {/* =========================================================
            DESKTOP VIEW CONTAINER (Hidden on Mobile/Tablet)
           ========================================================= */}
        <div className="hidden lg:block absolute inset-0 w-full h-full">

          {/* ===== SIGNPOST POLE =====
              Vertical wooden pole centered at ~46% from left
          ===== */}
          <div
            className="absolute z-10"
            style={{
              left: 'calc(46% - 7px)',
              top: '13%',
              width: '14px',
              height: '70%',
              background: 'linear-gradient(to right, #c8b97a, #e8d9a0, #c8b97a)',
              borderRadius: '4px',
              boxShadow: '3px 0 8px rgba(0,0,0,0.4), inset -3px 0 6px rgba(0,0,0,0.2)',
            }}
          />

          {/* ===== PHASE ARROW SIGNS ===== */}

          {/* Phase 1 — Left-pointing arrow sign, top */}
          <div
            className="absolute z-20"
            style={{
              right: 'calc(54% + 0px)',
              top: '20%',
              transform: 'rotate(6deg)',
              filter: 'drop-shadow(3px 3px 4px rgba(0,0,0,0.35))',
            }}
          >
            <div style={{
              background: 'linear-gradient(#FFFFFF, #FFFFFF, #FFFFFF)',
              border: '2.5px solid #2a1f0a',
              padding: '10px 18px 10px 34px',
              fontWeight: 900,
              fontSize: '20px',
              letterSpacing: '0.04em',
              color: '#1a1a1a',
              clipPath: 'polygon(16% 0%, 100% 0%, 100% 100%, 16% 100%, 0% 50%)',
              width: '200px',
              textAlign: 'center',
              fontFamily: 'serif',
            }}>
              ← Phase 1
            </div>
          </div>

          {/* Phase 2 — Right-pointing arrow sign */}
          <div
            className="absolute z-20"
            style={{
              left: 'calc(46% + 0px)',
              top: '27%',
              transform: 'rotate(-5deg)',
              filter: 'drop-shadow(3px 3px 4px rgba(0,0,0,0.35))',
            }}
          >
            <div style={{
              background: 'linear-gradient(#FFFFFF, #FFFFFF, #FFFFFF)',
              border: '2.5px solid #2a1f0a',
              padding: '10px 34px 10px 18px',
              fontWeight: 900,
              fontSize: '20px',
              letterSpacing: '0.04em',
              color: '#1a1a1a',
              clipPath: 'polygon(0% 0%, 84% 0%, 100% 50%, 84% 100%, 0% 100%)',
              width: '200px',
              textAlign: 'center',
              fontFamily: 'serif',
            }}>
              Phase 2 →
            </div>
          </div>

          {/* Phase 3 — Left-pointing arrow sign */}
          <div
            className="absolute z-20"
            style={{
              right: 'calc(54% + 5px)',
              top: '40%',
              transform: 'rotate(0deg)',
              filter: 'drop-shadow(3px 3px 4px rgba(0,0,0,0.35))',
            }}
          >
            <div style={{
              background: 'linear-gradient(#FFFFFF, #FFFFFF, #FFFFFF)',
              border: '2.5px solid #2a1f0a',
              padding: '10px 18px 10px 34px',
              fontWeight: 900,
              fontSize: '20px',
              letterSpacing: '0.04em',
              color: '#1a1a1a',
              clipPath: 'polygon(16% 0%, 100% 0%, 100% 100%, 16% 100%, 0% 50%)',
              width: '200px',
              textAlign: 'center',
              fontFamily: 'serif',
            }}>
              ← Phase 3
            </div>
          </div>

          {/* Phase 4 — Right-pointing arrow sign */}
          <div
            className="absolute z-20"
            style={{
              left: 'calc(46% + 5px)',
              top: '46%',
              transform: 'rotate(0deg)',
              filter: 'drop-shadow(3px 3px 4px rgba(0,0,0,0.35))',
            }}
          >
            <div style={{
              background: 'linear-gradient(to right, #FFFFFF, #FFFFFF, #FFFFFF)',
              border: '2.5px solid #2a1f0a',
              padding: '10px 34px 10px 18px',
              fontWeight: 900,
              fontSize: '20px',
              letterSpacing: '0.04em',
              color: '#1a1a1a',
              clipPath: 'polygon(0% 0%, 84% 0%, 100% 50%, 84% 100%, 0% 100%)',
              width: '200px',
              textAlign: 'center',
              fontFamily: 'serif',
            }}>
              Phase 4 →
            </div>
          </div>

          {/* ===== CARDS ===== */}

          {/* CARD 1: Public Launch — top-left */}
          <div
            className="absolute z-20 bg-white border border-black/10 rounded-[20px] p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] text-black"
            style={{ top: '1%', left: '3%', width: '370px' }}
          >
            {/* Social tags row */}
            <div className="flex gap-1 flex-wrap mb-3">
              {['DEXTools', 'Telegram', 'X.com', 'Etherscan', 'X.com', 'Etherscan', 'DEXTools', 'Telegram'].map((tag, i) => (
                <span key={i} className="bg-[#9ce4c5] px-2 py-0.5 rounded text-[9px] font-black tracking-tighter border border-black/10">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-black text-lg my-0 leading-tight">Public Launch</h3>
            <p className="text-xs font-bold text-black/60 mt-1 leading-snug">
              Secure listing on major exchanges, liquidity pools established.
            </p>
            <img src={presale1} alt="Rocket" className="h-5 w-auto object-contain mt-2 ml-auto animate-pulse" />
          </div>

          {/* CARD 2: Presale Launch — bottom-left, near Phase 3 */}
          <div
            className="absolute z-20 bg-white border border-black/10 rounded-[20px] p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] text-black flex items-center gap-3"
            style={{ top: '48%', left: '11%', width: '310px' }}
          >
            <div className="w-16 h-16 rounded-full bg-[#e3f4ee] border border-black/10 flex-shrink-0 overflow-hidden flex items-center justify-center">
              <img src={coin} alt="Memo Coin" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-black text-lg my-0 leading-tight">Presale Launch</h3>
              <p className="text-xs font-bold text-black/60 mt-1 leading-snug">Token distribution and community building.</p>
              <img src={presale1} alt="Rocket" className="h-5 w-auto object-contain mt-1 animate-pulse" />
            </div>
          </div>

          {/* CARD 3: Growth — top-right */}
<div
  className="absolute z-20 bg-white border border-black/10 rounded-[20px] p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] text-black"
  style={{ top: '1%', left: '61%', width: '530px' }}
>
  {/* Pay/Receive + Timer row */}
  <div className="grid gap-6 mb-4" style={{ gridTemplateColumns: '1.2fr 1fr' }}>
    
    {/* ================= LEFT: ROTATED BOX LAYER ================= */}
    <div className="bg-[#d99393] rounded-[18px] p-1.5 m-4.5 border border-black/20 flex flex-col gap-2 -rotate-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-2 gap-4 ">
        {/* You Pay Box */}
        <div className="flex flex-col gap-0">
          <span className="text-[9px] font-black text-white/90 tracking-wide ">YOU PAY:</span>
          <div className="bg-transparent border border-black/40 rounded-lg p-0.5 text-xs font-black text-black text-left h-8 flex items-center">
            100
          </div>
        </div>
        {/* You Receive Box */}
        <div className="flex flex-col gap-0">
          <span className="text-[9px] font-black text-white/90 tracking-wide">YOU RECEIVE:</span>
          <div className="bg-transparent border border-black/40 rounded-lg p-0.5 text-xs font-black text-black flex justify-between items-center h-8">
            <span>100,000</span>
            <span className="text-[9px] opacity-60">$GMF</span>
          </div>
        </div>
      </div>
      
      {/* Connect Wallet Button */}
      <button className="w-full bg-[#125875] text-white text-xs font-black py-2 rounded-xl border border-black shadow-[3px_3px_0px_0px_#000] tracking-wider transition-transform active:translate-y-0.5">
        Connect Wallet
      </button>
    </div>

    {/* ================= RIGHT: COUNTDOWN & NET PANEL ================= */}
    <div className="bg-transparent flex flex-col items-center justify-between py-1">
      {/* Dynamic Digit Blocks */}
      <div className="flex flex-col items-center w-full">
        <div className="flex gap-1.5 items-center justify-center w-full mt-4 ">
          {['05', '12', '35', '17'].map((v, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center gap-1">
                {/* Changed background color to match the image precisely */}
                <span className="text-xl font-black bg-[#7a6464] text-white px-2.5 py-2 rounded-xl border border-black shadow-[2px_2px_0px_0px_#000] min-w-[38px] text-center">
                  {v}
                </span>
                <span className="text-[8px] font-black text-black tracking-tighter uppercase opacity-80">
                  {i === 0 ? 'DAYS' : i === 1 ? 'HOURS' : i === 2 ? 'MINUTES' : 'SECONDS'}
                </span>
              </div>
              {i < 3 && <span className="text-sm font-black text-black -mt-4">:</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* NET Action Button */}
      <button className="w-full bg-[#1a333e] text-white text-xs font-black py-2.5 rounded-xl border border-black shadow-[3px_3px_0px_0px_#000] tracking-widest mt-2 hover:bg-[#142630] transition-colors">
        NET
      </button>
    </div>

  </div>

  {/* Lower Typography Card Base Section */}
  <div className="flex items-start justify-between gap-4 mt-2">
    <div className="flex-1 text-left ">
      <h3 className="font-black text-xl leading-tight tracking-wide">Growth</h3>
      <p className="text-xs font-bold text-black/70 mt-1.5 leading-relaxed">
        Staking platform release, community rewards programs, NET integration.
      </p>
    </div>
    {/* Rocket Icon */}
    <div className="shrink-0 pt-1">
      <img src={presale1} alt="Rocket" className="h-10 w-auto object-contain animate-pulse" />
    </div>
  </div>
</div>

          {/* CARD 4: Global Expansion — bottom-right, below Phase 4 */}
<div
  className="absolute z-20 bg-white border border-black/10 rounded-[20px] p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] text-black flex flex-col justify-between"
  style={{ top: '45%', left: '61%', width: '360px', minHeight: '140px' }}
>
  {/* Top Row: Contains left-aligned text blocks and right-aligned vector logo asset */}
  <div className="flex justify-between items-start w-full gap-4">
    {/* Text block container */}
    <div className="flex flex-col text-left">
      <h3 className="font-black text-xl mt-7 leading-tight tracking-wide text-black">
        Global Expansion
      </h3>
      <p className="text-xs font-bold text-black/80 mt-2 leading-relaxed max-w-[210px]">
        Partnerships, governance integration, ecosystem enhancements.
      </p>
    </div>

    {/* Brand vector logo positioned on the right side */}
    <div className="shrink-0 -mt-1">
      <img 
        src={logo} 
        alt="Memo Logo" 
        className="h-14 w-auto object-contain" 
      />
    </div>
  </div>

  {/* Bottom Row: Centers the little rocket icon cleanly at the bottom container floor */}
  <div className="w-full flex justify-center items-center pt-3">
    <img 
      src={presale1} 
      alt="Rocket" 
      className="h-7 w-auto object-contain animate-pulse" 
    />
  </div>
</div>

          {/* ===== ELON IMAGE — bottom-right corner ===== */}
          <div
            className="absolute pointer-events-none z-10"
            style={{ width: '420px', height: '500px', bottom: '-80px', right: '-30px' }}
          >
            <img src={elon} alt="Elon Musk Illustration" className="w-full h-full object-contain object-bottom" />
          </div>

          {/* Speech bubble near Elon */}
          <div
            className="absolute z-30 bg-white border-2 border-black/70 rounded-full px-4 py-1.5 text-[11px] font-black text-black flex items-center gap-1"
            style={{ bottom: '30%', right: '18%' }}
          >
            ← PHASE 1
          </div>

        </div>

        {/* =========================================================
            MOBILE & TABLET VIEW CONTAINER (Stacked Vertically)
           ========================================================= */}
        <div className="lg:hidden w-full max-w-[550px] mx-auto flex flex-col gap-6 mt-6">

          {/* Mobile Phase cards with pole indicator */}
          <div className="relative pl-8">
            {/* Vertical pole line */}
            <div className="absolute left-3 top-0 bottom-0 w-[6px] rounded-full"
              style={{ background: 'linear-gradient(to right, #c8b97a, #e8d9a0, #c8b97a)' }} />

            <div className="flex flex-col gap-6">

              {/* Phase 1 */}
              <div className="relative">
                <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#9ce4c5] border-2 border-black rounded-full z-10" />
                <div className="bg-white border border-black/10 rounded-[20px] p-4 text-black shadow-md">
                  <div className="flex gap-1 flex-wrap mb-2">
                    {['DEXTools', 'Telegram', 'X.com', 'Etherscan'].map((tag, i) => (
                      <span key={i} className="bg-[#9ce4c5] px-2 py-0.5 rounded text-[9px] font-black border border-black/10">{tag}</span>
                    ))}
                  </div>
                  <span className="text-[10px] font-black text-[#125875] tracking-widest block mb-1">PHASE 01</span>
                  <h3 className="font-black text-base my-0">Public Launch</h3>
                  <p className="text-xs font-medium text-black/70 mt-1">Secure listing on major exchanges, liquidity pools established.</p>
                  <img src={presale1} alt="Rocket" className="h-4 w-auto object-contain mt-2 ml-auto animate-pulse" />
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative">
                <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full z-10" />
                <div className="bg-white border border-black/10 rounded-[20px] p-4 text-black shadow-md">
                  <span className="text-[10px] font-black text-[#125875] tracking-widest block mb-1">PHASE 02</span>
                  <h3 className="font-black text-base my-0">Growth</h3>
                  <p className="text-xs font-medium text-black/70 mt-1">Staking platform release, community rewards programs, NET integration.</p>
                  <img src={presale1} alt="Rocket" className="h-4 w-auto object-contain mt-2 ml-auto" />
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative">
                <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full z-10" />
                <div className="bg-white border border-black/10 rounded-[20px] p-4 text-black shadow-md flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-[#e3f4ee] border border-black/10 flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <img src={coin} alt="Memo Coin" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-[#125875] tracking-widest block mb-1">PHASE 03</span>
                    <h3 className="font-black text-base my-0">Presale Launch</h3>
                    <p className="text-xs font-medium text-black/70 mt-1">Token distribution and community building.</p>
                    <img src={presale1} alt="Rocket" className="h-4 w-auto object-contain mt-1 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="relative">
                <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full z-10" />
                <div className="bg-white border border-black/10 rounded-[20px] p-4 text-black shadow-md">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] font-black text-[#125875] tracking-widest block">PHASE 04</span>
                    <div className="bg-[#b6ebd4] border border-black/20 text-[9px] font-black px-1.5 py-0.5 rounded text-[#124b6e]">MEMO MAX</div>
                  </div>
                  <h3 className="font-black text-base my-0">Global Expansion</h3>
                  <p className="text-xs font-medium text-black/70 mt-1">Partnerships, governance integration, ecosystem enhancements.</p>
                  <img src={presale1} alt="Rocket" className="h-4 w-auto object-contain mt-2" />
                </div>
              </div>

            </div>
          </div>

          {/* Elon on mobile */}
          <div className="w-full max-w-[260px] mx-auto mt-2 opacity-90">
            <img src={elon} alt="Elon" className="w-full h-auto object-contain" />
          </div>

        </div>

      </div>

      {/* Footer copyright anchor */}
      <div className="w-full text-center text-[10px] text-white/40 font-medium z-10 mt-12">
        @copyright 2026 all right reserved by Memo
      </div>
    </section>
  );
}