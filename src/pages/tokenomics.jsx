import React from 'react';
import tokenBg from '../assets/tokenbg.png'; 

export default function Tokenomics() {
  return (
    <section 
      id="tokenomics" 
      className="relative w-full h-screen bg-black pt-[140px] pb-6 px-4 md:px-10 flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Background Mask Layer */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />

      {/* =========================================================
          TOP TITLE CONTROLLER
          ========================================================= */}
      <div className="w-full max-w-[1840px] mx-auto z-30 absolute top-[120px] md:top-[140px] left-1/2 -translate-x-1/2 pointer-events-none">
        <h1 
          className="text-white font-black text-4xl md:text-6xl lg:text-[72px] tracking-widest uppercase text-center my-0 pointer-events-auto"
          style={{ fontFamily: 'var(--heading)' }}
        >
          TOKENOMICS
        </h1>
      </div>

      {/* =========================================================================
          MASTER BOUND CANVAS CONTAINER (DESKTOP VIEW - Hidden on Mobile)
          ========================================================================= */}
      <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-[1280px] h-[680px] hidden lg:block">
        
        {/* 1. BACKGROUND IMAGE */}
        <div 
          className="absolute pointer-events-none z-0 bg-no-repeat"
          style={{ 
            backgroundImage: `url(${tokenBg})`,
            backgroundSize: 'contain', 
            width: '680px',          
            height: '480px',
            top: '40%',                      
            left: '50%',                        
            transform: 'translateX(-50%)',     
            opacity: 1
          }} 
        />

        {/* 2. SVG VECTOR POINTER LINES */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 1280 680" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 180 210 L 240 230 L 290 290 L 360 310 L 421 367" stroke="#3b9d6e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 110 395 L 240 395 L 360 430" stroke="#40c070" strokeWidth="2.5" />
          <path d="M 180 580 L 250 540 L 380 490" stroke="#40c070" strokeWidth="2.5" />
          <path d="M 1100 210 L 1020 270 L 880 340" stroke="#40c070" strokeWidth="2.5" opacity="0.85" />
          <path d="M 1170 395 L 1070 395 L 940 420" stroke="#40c070" strokeWidth="2.5" opacity="0.85" />
          <path d="M 1100 580 L 1030 540 L 900 490" stroke="#40c070" strokeWidth="2.5" opacity="0.85" />
        </svg>

        {/* 3. CONTENT OVERLAY */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
          {/* Left Top Card */}
          <div className="absolute top-[140px] left-[110px] flex flex-col items-start gap-1 pointer-events-auto">
            <div className="flex items-center gap-1">
              <span className="text-white font-black text-xs">20%</span>
              <div className="w-12 h-2.5 bg-[#40c070] rounded border border-black" />
            </div>
            <div className="bg-black/90 border-2 border-[#40c070] text-[#40c070] font-black text-[10px] tracking-widest px-3 py-1 rounded lowercase shadow-md">
              public
            </div>
          </div>
          <div className="absolute top-[203px] left-[173px] w-3.5 h-3.5 rounded-full bg-[#40c070] border-2 border-white shadow-md shadow-black" />

          {/* Left Center Card */}
          <div className="absolute top-[325px] left-[40px] flex flex-col items-start gap-1 pointer-events-auto">
            <div className="flex items-center gap-1">
              <span className="text-white font-black text-xs">20%</span>
              <div className="w-12 h-2.5 bg-[#40c070] rounded border border-black" />
            </div>
            <div className="bg-black/90 border-2 border-[#40c070] text-[#40c070] font-black text-[10px] tracking-widest px-3 py-1 rounded lowercase shadow-md">
              public
            </div>
          </div>
          <div className="absolute top-[388px] left-[103px] w-3.5 h-3.5 rounded-full bg-[#40c070] border-2 border-white shadow-md shadow-black" />

          {/* Left Bottom Card */}
          <div className="absolute top-[510px] left-[110px] flex flex-col items-start gap-1 pointer-events-auto">
            <div className="flex items-center gap-1">
              <span className="text-white font-black text-xs">20%</span>
              <div className="w-12 h-2.5 bg-[#40c070] rounded border border-black" />
            </div>
            <div className="bg-black/90 border-2 border-[#40c070] text-[#40c070] font-black text-[10px] tracking-widest px-3 py-1 rounded lowercase shadow-md">
              public
            </div>
          </div>
          <div className="absolute top-[573px] left-[173px] w-3.5 h-3.5 rounded-full bg-[#40c070] border-2 border-white shadow-md shadow-black" />

          {/* Right Top Card */}
          <div className="absolute top-[140px] right-[110px] flex flex-col items-end gap-1 pointer-events-auto">
            <div className="flex items-center gap-1 flex-row-reverse">
              <span className="text-white font-black text-xs">20%</span>
              <div className="w-12 h-2.5 bg-[#40c070] rounded border border-black" />
            </div>
            <div className="bg-black/90 border-2 border-[#40c070] text-[#40c070] font-black text-[10px] tracking-widest px-3 py-1 rounded lowercase shadow-md">
              public
            </div>
          </div>
          <div className="absolute top-[203px] right-[173px] w-3.5 h-3.5 rounded-full bg-[#40c070] border-2 border-white shadow-md shadow-black" />

          {/* Right Center Card */}
          <div className="absolute top-[325px] right-[40px] flex flex-col items-end gap-1 pointer-events-auto">
            <div className="flex items-center gap-1 flex-row-reverse">
              <span className="text-white font-black text-xs">20%</span>
              <div className="w-12 h-2.5 bg-[#40c070] rounded border border-black" />
            </div>
            <div className="bg-black/90 border-2 border-[#40c070] text-[#40c070] font-black text-[10px] tracking-widest px-3 py-1 rounded lowercase shadow-md">
              public
            </div>
          </div>
          <div className="absolute top-[388px] right-[103px] w-3.5 h-3.5 rounded-full bg-[#40c070] border-2 border-white shadow-md shadow-black" />

          {/* Right Bottom Card */}
          <div className="absolute top-[510px] right-[110px] flex flex-col items-end gap-1 pointer-events-auto">
            <div className="flex items-center gap-1 flex-row-reverse">
              <span className="text-white font-black text-xs">20%</span>
              <div className="w-12 h-2.5 bg-[#40c070] rounded border border-black" />
            </div>
            <div className="bg-black/90 border-2 border-[#40c070] text-[#40c070] font-black text-[10px] tracking-widest px-3 py-1 rounded lowercase shadow-md">
              public
            </div>
          </div>
          <div className="absolute top-[573px] right-[173px] w-3.5 h-3.5 rounded-full bg-[#40c070] border-2 border-white shadow-md shadow-black" />
        </div>
      </div>


      {/* =========================================================================
          FIXED MOBILE VIEWPORT CONTROLLER (lg:hidden - MATCHES IMAGE_95343E.PNG)
          ========================================================================= */}
      {/* CRITICAL MOBILE FIX: 
          - Changed from absolute layout to a fixed-height layout block arena (`h-[580px] -mt-10 mx-auto`) 
          - This locks the lines and dots in place and safely spaces them away from the top text header!
      */}
      <div className="lg:hidden relative w-full max-w-[375px] h-[580px] -mt-10 mx-auto z-20 pointer-events-none">
        
        {/* SVG Pointer Lines for Mobile View */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 375 580" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 40 375 L 75 355 L 85 305" stroke="#40c070" strokeWidth="2" strokeLinecap="round" />
          <path d="M 85 365 L 110 325 L 115 210" stroke="#40c070" strokeWidth="2" strokeLinecap="round" />
          <path d="M 187 365 L 187 130" stroke="#40c070" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 285 365 L 265 325 L 295 275" stroke="#40c070" strokeWidth="2" strokeLinecap="round" />
          <path d="M 335 375 L 315 355 L 350 325" stroke="#40c070" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* Far Left Mid Card Cutoff */}
        <div className="absolute top-[305px] left-[-30px] flex flex-col items-center scale-90 pointer-events-auto">
          <div className="bg-black border border-[#40c070] text-[#40c070] font-black text-[9px] tracking-wider px-2 py-0.5 rounded-md [clip-path:polygon(0%_0%,_88%_0%,_100%_35%,_100%_100%,_0%_100%)]">
            ic
          </div>
        </div>

        {/* Left Card */}
        <div className="absolute top-[230px] left-[20px] flex flex-col items-start gap-0.5 pointer-events-auto">
          <div className="flex items-center gap-1">
            <span className="text-white font-black text-[11px]">20%</span>
            <div className="w-10 h-2 bg-[#40c070] rounded border border-black" />
          </div>
          <div className="bg-black border border-[#40c070] text-[#40c070] font-black text-[9px] tracking-widest px-2.5 py-0.5 rounded-md lowercase [clip-path:polygon(0%_0%,_90%_0%,_100%_35%,_100%_100%,_0%_100%)]">
            public
          </div>
        </div>
        <div className="absolute top-[299px] left-[79px] w-2.5 h-2.5 rounded-full bg-[#40c070]" />

        {/* Center Card */}
        <div className="absolute top-[65px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 pointer-events-auto">
          <div className="flex items-center gap-1">
            <span className="text-white font-black text-[11px]">20%</span>
            <div className="w-10 h-2 bg-[#40c070] rounded border border-black" />
          </div>
          <div className="bg-black border border-[#40c070] text-[#40c070] font-black text-[9px] tracking-widest px-2.5 py-0.5 rounded-md lowercase [clip-path:polygon(0%_0%,_90%_0%,_100%_35%,_100%_100%,_0%_100%)]">
            public
          </div>
        </div>
        <div className="absolute top-[124px] left-[182px] w-2.5 h-2.5 rounded-full bg-[#40c070]" />

        {/* Right Card */}
        <div className="absolute top-[175px] right-[20px] flex flex-col items-start gap-0.5 pointer-events-auto">
          <div className="flex items-center gap-1">
            <span className="text-white font-black text-[11px]">20%</span>
            <div className="w-10 h-2 bg-[#40c070] rounded border border-black" />
          </div>
          <div className="bg-black border border-[#40c070] text-[#40c070] font-black text-[9px] tracking-widest px-2.5 py-0.5 rounded-md lowercase [clip-path:polygon(0%_0%,_90%_0%,_100%_35%,_100%_100%,_0%_100%)]">
            public
          </div>
        </div>
        <div className="absolute top-[269px] right-[75px] w-2.5 h-2.5 rounded-full bg-[#40c070]" />

        {/* Far Right Mid Card Cutoff */}
        <div className="absolute top-[235px] right-[-30px] flex flex-col items-center scale-90 pointer-events-auto">
          <div className="flex items-center gap-1 scale-70">
            <div className="w-10 h-2 bg-[#40c070] rounded border border-black" />
          </div>
          <div className="bg-black border border-[#40c070] text-[#40c070] font-black text-[9px] tracking-wider px-2 py-0.5 rounded-md [clip-path:polygon(0%_0%,_88%_0%,_100%_35%,_100%_100%,_0%_100%)]">
            p
          </div>
        </div>

        {/* Centered Avatar Image Base */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-10"
          style={{ width: '310px', height: '310px' }}
        >
          <div 
            className="w-full h-full bg-no-repeat bg-center"
            style={{ 
              backgroundImage: `url(${tokenBg})`,
              backgroundSize: 'contain'
            }} 
          />
        </div>

      </div>

      {/* Footer Branding anchor tag */}
      <div className="w-full text-center text-[10px] text-white/40 font-medium z-30 mt-auto">
        @copyright 2026 all right reserved by Memo
      </div>
    </section>
  );
}