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
      className="relative w-full max-w-[100vw] bg-cover bg-center bg-no-repeat pt-[160px] pb-0 px-4 md:px-10 flex flex-col justify-between overflow-hidden select-none lg:aspect-[1456/816] min-h-[700px] lg:min-h-0"
      style={{ backgroundImage: `url(${roadmapBg})` }}
    >
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* Main Structural Layout Arena */}
      <div className="w-full max-w-[1840px] mx-auto z-10 flex-1 relative h-full">

        {/* DESKTOP VIEW CONTAINER (100% UNTOUCHED & UNCHANGED) */}
        <div className="hidden lg:block absolute inset-0 w-full h-full">

          {/* ===== SIGNPOST POLE ===== */}
          <div
            className="absolute z-10"
            style={{
              left: 'calc(46% - 7px)',
              top: '13%',
              width: '14px',
              height: '70%',
              background: 'linear-gradient(to right, #FFFFFF, #FFFFFF, #FFFFFF)',
              borderRadius: '4px',
              boxShadow: '3px 0 8px rgba(0,0,0,0.4), inset -3px 0 6px rgba(0,0,0,0.2)',
            }}
          />

          {/* ===== PHASE ARROW SIGNS ===== */}
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
          <div
            className="absolute z-20 bg-white border border-black/10 rounded-[20px] p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] text-black"
            style={{ top: '1%', left: '3%', width: '370px' }}
          >
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

          <div
            className="absolute z-20 bg-white border border-black/10 rounded-[20px] p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] text-black"
            style={{ top: '1%', left: '61%', width: 'min(530px, 36vw)' }}
          >
            <div className="grid gap-6 mb-4" style={{ gridTemplateColumns: '1.2fr 1fr' }}>
              <div className="bg-[#d99393] rounded-[18px] p-1.5 m-4.5 border border-black/20 flex flex-col gap-2 -rotate-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-0">
                    <span className="text-[9px] font-black text-white/90 tracking-wide">YOU PAY:</span>
                    <div className="bg-transparent border border-black/40 rounded-lg p-0.5 text-xs font-black text-black text-left h-8 flex items-center">
                      100
                    </div>
                  </div>
                  <div className="flex flex-col gap-0">
                    <span className="text-[9px] font-black text-white/90 tracking-wide">YOU RECEIVE:</span>
                    <div className="bg-transparent border border-black/40 rounded-lg p-0.5 text-xs font-black text-black flex justify-between items-center h-8">
                      <span>100,000</span>
                      <span className="text-[9px] opacity-60">$GMF</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-[#125875] text-white text-xs font-black py-2 rounded-xl border border-black shadow-[3px_3px_0px_0px_#000] tracking-wider transition-transform active:translate-y-0.5">
                  Connect Wallet
                </button>
              </div>

              <div className="bg-transparent flex flex-col items-center justify-between py-1">
                <div className="flex flex-col items-center w-full">
                  <div className="flex gap-1.5 items-center justify-center w-full mt-4">
                    {['05', '12', '35', '17'].map((v, i) => (
                      <React.Fragment key={i}>
                        <div className="flex flex-col items-center gap-1">
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
                <button className="w-full bg-[#1a333e] text-white text-xs font-black py-2.5 rounded-xl border border-black shadow-[3px_3px_0px_0px_#000] tracking-widest mt-2 hover:bg-[#142630] transition-colors">
                  NET
                </button>
              </div>
            </div>

            <div className="flex items-start justify-between gap-4 mt-2">
              <div className="flex-1 text-left">
                <h3 className="font-black text-xl leading-tight tracking-wide">Growth</h3>
                <p className="text-xs font-bold text-black/70 mt-1.5 leading-relaxed">
                  Staking platform release, community rewards programs, NET integration.
                </p>
              </div>
              <div className="shrink-0 pt-1">
                <img src={presale1} alt="Rocket" className="h-10 w-auto object-contain animate-pulse" />
              </div>
            </div>
          </div>

          <div
            className="absolute z-20 bg-white border border-black/10 rounded-[20px] p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] text-black flex flex-col justify-between"
            style={{ top: '54%', left: '54%', width: '360px', minHeight: '140px' }}
          >
            <div className="flex justify-between items-start w-full gap-4">
              <div className="flex flex-col text-left">
                <h3 className="font-black text-xl mt-7 leading-tight tracking-wide text-black">
                  Global Expansion
                </h3>
                <p className="text-xs font-bold text-black/80 mt-2 leading-relaxed max-w-[210px]">
                  Partnerships, governance integration, ecosystem enhancements.
                </p>
              </div>
              <div className="shrink-0 -mt-1">
                <img src={logo} alt="Memo Logo" className="h-14 w-auto object-contain" />
              </div>
            </div>
            <div className="w-full flex justify-center items-center pt-3">
              <img src={presale1} alt="Rocket" className="h-7 w-auto object-contain animate-pulse" />
            </div>
          </div>

          {/* ===== ELON IMAGE & THOUGHT BUBBLE ===== */}
          <div
            className="absolute pointer-events-none z-10"
            style={{ width: 'min(600px, 40vw)', height: 'min(600px, 55vh)', top: '45%', right: '-15%' }}
          >
            <img src={elon} alt="Elon Musk Illustration" className="w-full h-full object-contain object-bottom" />
          </div>

          <div className="absolute z-30 flex flex-col items-center" style={{ bottom: '43%', right: '10%' }}>
            <div
              className="bg-white border-2 border-black rounded-full px-6 py-2.5 text-xs font-black text-black flex items-center justify-center gap-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              style={{ minWidth: '130px' }}
            >
              <span className="text-base font-black leading-none -mt-0.5 select-none">↖</span>
              <span className="tracking-wide uppercase">PHASE 1</span>
            </div>
            <div className="w-full relative flex flex-col items-end pr-8 mt-1 gap-1">
              <div className="w-4 h-3 bg-white border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
              <div className="w-2.5 h-2 bg-white border-2 border-black rounded-full shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] mr-[-6px]" />
            </div>
          </div>

        </div>

        {/*  MOBILE VIEW CONTAINER (Updates exclusively targeting mobile view image_8ade5a.png) */}
        <div className="lg:hidden absolute inset-0 w-full h-full flex flex-col justify-between">
          
          {/* Signpost Setup Area */}
          <div className="relative w-full flex-1 flex items-center justify-center min-h-[420px] mt-10">
            {/* Pole Base Layer */}
            <div
            className="absolute z-10"
            style={{
              left: 'calc(46% - 7px)',
              top: '1%',
              width: '14px',
              height: '90%',
              background: 'linear-gradient(to right, #FFFFFF, #FFFFFF, #FFFFFF)',
              borderRadius: '4px',
              boxShadow: '3px 0 8px rgba(0,0,0,0.4), inset -3px 0 6px rgba(0,0,0,0.2)',
            }}
          />

          <div
            className="absolute z-20"
            style={{
              right: 'calc(54% + 0px)',
              top: '20%',
              transform: 'rotate(6deg)',
              filter: 'drop-shadow(3px 3px 4px rgba(0,0,0,0.35))',
            }}
          ></div>

            {/* Mobile Arrow 1 */}
            <div className="absolute z-20" style={{ right: 'calc(55% - 10px)', top: '4%', transform: 'rotate(17deg)' }}>
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

         

            {/* Mobile Arrow 2 */}
            <div className="absolute z-20" style={{ left: 'calc(48% - 12px)', top: '19%', transform: 'rotate(-10deg)' }}>
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

         

            {/* Mobile Arrow 3 */}
            <div className="absolute z-20" style={{ right: 'calc(55% - 5px)', top: '38%' }}>
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

         

            {/* Mobile Arrow 4 */}
            <div className="absolute z-20" style={{ left: 'calc(47% - 5px)', top: '50%', transform: 'rotate(2deg)' }}>
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
          </div>

          {/*  LOWER STAGE VECTOR SETUP LAYOUT (MATCHES WATERMARKED_IMG_2803785824709020721.PNG)*/}
          <div className="relative w-full h-[180px] mt-auto">
            
            {/* Elon illustration repositioned perfectly to the left ground space */}
            <div 
              className="absolute z-10 pointer-events-none" 
              style={{ width: '470px', height: '270px', bottom: '-50px', left: '45%' }}
            >
              <img src={elon} alt="Elon" className="w-full h-full object-contain object-bottom" />
            </div>

            {/* Floating comic style dialogue box container */}
            <div className="absolute bottom-[140px] right-[50px] z-20 flex flex-col items-center">
              <div className="bg-white border-2 border-black rounded-full px-3 py-1.5 text-[10px] font-black text-black flex items-center gap-1 shadow-[2px_2px_0px_0px_#000]">
                <span className="text-xs font-black">↖</span>
                <span className="tracking-tight whitespace-nowrap">Click here</span>
              </div>
              {/* Little connection tail trail pieces */}
              <div className="w-full flex flex-col items-end pr-5 mt-0.5 gap-0.5">
                <div className="w-2.5 h-2 bg-white border border-black rounded-full shadow-[1px_1px_0px_0px_#000]" />
                <div className="w-1.5 h-1.5 bg-white border border-black rounded-full shadow-[1px_1px_0px_0px_#000] mr-[-3px]" />
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Footer copyright anchor */}
      <div className="w-full text-center text-[10px] text-white/40 font-medium z-10 mt-4 lg:absolute lg:bottom-2 lg:left-0">
        @copyright 2026 all right reserved by Memo
      </div>
    </section>
  );
}