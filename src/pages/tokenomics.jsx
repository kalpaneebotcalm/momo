import React from 'react';
import tokenBg from '../assets/tokenbg.png'; 
import line1 from '../assets/Line 1.png';
import line2 from '../assets/Line 2.png';
import line3 from '../assets/Line 3.png';
import line4 from '../assets/Line 4.png'; 
import line5 from '../assets/Line 5.png';
import line6 from '../assets/Line 6.png';
import line7 from '../assets/Line 7.png'; // Imported mobile line assets
import line8 from '../assets/Line 8.png';
import line9 from '../assets/Line 9.png';
import line10 from '../assets/Line 10.png';
import line11 from '../assets/Line 11.png';

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

        {/* 2. IMAGE LINE PLACEMENTS (LEFT SIDE) */}
        <img 
          src={line1} 
          alt="Line 1" 
          className="absolute z-10 object-contain pointer-events-none"
          style={{
            left: '175px',
            top: '205px',
            width: '250px',
          }}
        />

        <img 
          src={line2} 
          alt="Line 2" 
          className="absolute z-10 object-contain pointer-events-none"
          style={{
            left: '105px',
            top: '390px',
            width: '260px',
          }}
        />

        <img 
          src={line3} 
          alt="Line 3" 
          className="absolute z-10 object-contain pointer-events-none"
          style={{
            left: '175px',
            top: '485px',
            width: '210px',
          }}
        />

        {/* 3. IMAGE LINE PLACEMENTS (RIGHT SIDE) */}
        <img 
          src={line4} 
          alt="Line 4" 
          className="absolute z-10 object-contain pointer-events-none"
          style={{
            right: '175px',
            top: '205px',
            width: '250px',
          }}
        />

        <img 
          src={line5} 
          alt="Line 5" 
          className="absolute z-10 object-contain pointer-events-none"
          style={{
            right: '105px',
            top: '390px',
            width: '260px',
          }}
        />

        <img 
          src={line6} 
          alt="Line 6" 
          className="absolute z-10 object-contain pointer-events-none"
          style={{
            right: '175px',
            top: '485px',
            width: '210px',
          }}
        />

        {/* 4. CONTENT OVERLAY */}
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

          {/* Left Bottom Card */}
          <div className="absolute top-[510px] left-[100px] flex flex-col items-start gap-1 pointer-events-auto">
            <div className="flex items-center gap-1">
              <span className="text-white font-black text-xs">20%</span>
              <div className="w-12 h-2.5 bg-[#40c070] rounded border border-black" />
            </div>
            <div className="bg-black/90 border-2 border-[#40c070] text-[#40c070] font-black text-[10px] tracking-widest px-3 py-1 rounded lowercase shadow-md">
              public
            </div>
          </div>

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

          {/* Right Center Card */}
          <div className="absolute top-[345px] right-[40px] flex flex-col items-end gap-1 pointer-events-auto">
            <div className="flex items-center gap-1 flex-row-reverse">
              <span className="text-white font-black text-xs">20%</span>
              <div className="w-12 h-2.5 bg-[#40c070] rounded border border-black" />
            </div>
            <div className="bg-black/90 border-2 border-[#40c070] text-[#40c070] font-black text-[10px] tracking-widest px-3 py-1 rounded lowercase shadow-md">
              public
            </div>
          </div>

          {/* Right Bottom Card */}
          <div className="absolute top-[500px] right-[100px] flex flex-col items-end gap-1 pointer-events-auto">
            <div className="flex items-center gap-1 flex-row-reverse">
              <span className="text-white font-black text-xs">20%</span>
              <div className="w-12 h-2.5 bg-[#40c070] rounded border border-black" />
            </div>
            <div className="bg-black/90 border-2 border-[#40c070] text-[#40c070] font-black text-[10px] tracking-widest px-3 py-1 rounded lowercase shadow-md">
              public
            </div>
          </div>
        </div>
      </div>

      {/* MASTER BOUND CANVAS CONTAINER (MOBILE VIEW) */}
      <div className="lg:hidden relative w-full max-w-[375px] h-[580px] -mt-10 mx-auto z-20 pointer-events-none">
        
        {/* MOBILE LINE IMAGE PLACEMENTS */}
        <img 
          src={line7} 
          alt="Line 7" 
          className="absolute z-10 object-contain pointer-events-none"
          style={{ left: '25px', top: '300px', width: '60px' }}
        />

        <img 
          src={line8} 
          alt="Line 8" 
          className="absolute z-10 object-contain pointer-events-none"
          style={{ left: '24%', top: '38%', width: '55px' }}
        />

        <img 
          src={line9} 
          alt="Line 9" 
          className="absolute z-10 object-contain pointer-events-none"
          style={{ left: '44%', top: '23%', width: '40px', height: '200px' }}
        />

        <img 
          src={line10} 
          alt="Line 10" 
          className="absolute z-10 object-contain pointer-events-none"
          style={{ right: '25%', top: '26%', width: '50px' }}
        />

        <img 
          src={line11} 
          alt="Line 11" 
          className="absolute z-10 object-contain pointer-events-none"
          style={{ right: '7%', top: '50%', width: '60px' }}
        />

        {/* Far Left Mid Card Cutoff */}
        <div className="absolute top-[305px] left-[-30px] flex flex-col items-center scale-90 pointer-events-auto">
          <div className="bg-black border border-[#40c070] text-[#40c070] font-black text-[9px] tracking-wider px-2 py-0.5 rounded-md [clip-path:polygon(0%_0%,_88%_0%,_100%_35%,_100%_100%,_0%_100%)]">
            pubic
          </div>
        </div>

        {/* Left Card */}
        <div className="absolute top-[200px] left-[20px] flex flex-col items-start gap-0.5 pointer-events-auto">
          <div className="flex items-center gap-1">
            <span className="text-white font-black text-[11px]">20%</span>
            <div className="w-10 h-2 bg-[#40c070] rounded border border-black" />
          </div>
          <div className="bg-black border border-[#40c070] text-[#40c070] font-black text-[9px] tracking-widest px-2.5 py-0.5 rounded-md lowercase [clip-path:polygon(0%_0%,_90%_0%,_100%_35%,_100%_100%,_0%_100%)]">
            public
          </div>
        </div>

        {/* Center Card */}
        <div className="absolute top-[75px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 pointer-events-auto">
          <div className="flex items-center gap-1">
            <span className="text-white font-black text-[11px]">20%</span>
            <div className="w-10 h-2 bg-[#40c070] rounded border border-black" />
          </div>
          <div className="bg-black border border-[#40c070] text-[#40c070] font-black text-[9px] tracking-widest px-2.5 py-0.5 rounded-md lowercase [clip-path:polygon(0%_0%,_90%_0%,_100%_35%,_100%_100%,_0%_100%)]">
            public
          </div>
        </div>

        {/* Right Card */}
        <div className="absolute top-[100px] right-[20px] flex flex-col items-start gap-0.5 pointer-events-auto">
          <div className="flex items-center gap-1">
            <span className="text-white font-black text-[11px]">20%</span>
            <div className="w-10 h-2 bg-[#40c070] rounded border border-black" />
          </div>
          <div className="bg-black border border-[#40c070] text-[#40c070] font-black text-[9px] tracking-widest px-2.5 py-0.5 rounded-md lowercase [clip-path:polygon(0%_0%,_90%_0%,_100%_35%,_100%_100%,_0%_100%)]">
            public
          </div>
        </div>

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