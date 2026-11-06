import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const DESKTOP_IMAGE = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1793769289/Winking_Photographer_in_Gradient_Studio_npbxby.webp';
const TABLET_IMAGE = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1793769289/Hafil_M_Photographer_Hero_Poster_jayaln.webp';
const MOBILE_IMAGE = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1793769289/Winking_Photographer_in_Charcoal_Suit_kgew1u.webp';

interface EditorialIntroCoverProps {
  onEnterPortfolio?: () => void;
  isExiting?: boolean;
}

export const EditorialIntroCover: React.FC<EditorialIntroCoverProps> = ({ onEnterPortfolio, isExiting = false }) => {
  const [isEntering, setIsEntering] = useState(false);

  const handleEnter = () => {
    if (isEntering) return;
    setIsEntering(true);
    if (onEnterPortfolio) {
      onEnterPortfolio();
    } else {
      const target = document.getElementById('portfolio-entry');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="editorial-intro-cover"
      className={`relative w-full min-h-[100dvh] h-[100dvh] z-50 overflow-hidden bg-[#d45a1e] text-[#F5EFE4] select-none ${
        (isExiting || isEntering) 
          ? 'absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-600 ease-out' 
          : 'opacity-100 transition-opacity duration-600 ease-out'
      }`}
      style={{ overscrollBehavior: 'none' }}
    >
      {/* ============================================================ */}
      {/* 1. DESKTOP VIEWPORT COMPOSITION (min-width: 1200px)          */}
      {/* ============================================================ */}
      <div className="hidden min-[1200px]:block absolute inset-0 w-full h-full">
        {/* Background Artwork - 16:9 Desktop Reference */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none transition-opacity duration-700 ease-out"
          style={{ backgroundImage: `url(${DESKTOP_IMAGE})` }}
          role="img"
          aria-label="Hafil M Editorial Cover"
        />

        {/* Subtle Vignette Edge for Seamless Text Readability */}
        <div className="absolute inset-0 pointer-events-none bg-radial from-transparent via-transparent to-black/30" />

        {/* ============================================================ */}
        {/* LEVEL 02 — EDITORIAL CATEGORY BLOCKS (Below Giant HAFIL M)   */}
        {/* Left: Fashion Portfolio | Right: Weddings                    */}
        {/* Placed at top-[52%] to give ample breathing room beneath     */}
        {/* the ~47% baseline of the giant HAFIL M letters               */}
        {/* ============================================================ */}

        {/* --- LEFT: FASHION BLOCK --- */}
        <div 
          className="absolute left-[3%] xl:left-[3.5%] top-[60%] text-left z-20 transition-all duration-700 delay-100 ease-out animate-in fade-in slide-in-from-bottom-2"
        >
          <div className="space-y-1">
            <h2 className="font-serif text-2xl xl:text-3xl text-[#F5EFE4] font-normal tracking-[0.24em] leading-[1.15] uppercase">
              FASHION
            </h2>
          </div>

          <div className="mt-3.5 pt-2.5 border-t border-[#F5EFE4]/20">
            <p className="font-sans text-[9px] xl:text-[9.5px] tracking-[0.38em] text-[#F5EFE4]/75 uppercase whitespace-nowrap">
              STYLE &nbsp;·&nbsp; PEOPLE &nbsp;·&nbsp; ATTITUDE
            </p>
          </div>
        </div>

        {/* --- RIGHT: WEDDINGS BLOCK --- */}
        <div 
          className="absolute right-[3%] xl:right-[3.5%] top-[60%] text-right z-20 transition-all duration-700 delay-150 ease-out animate-in fade-in slide-in-from-bottom-2"
        >
          <h2 className="font-serif text-2xl xl:text-3xl text-[#F5EFE4] font-normal tracking-[0.24em] leading-[1.15] uppercase">
            WEDDINGS
          </h2>

          <div className="mt-3.5 pt-2.5 border-t border-[#F5EFE4]/20">
            <p className="font-sans text-[9px] xl:text-[9.5px] tracking-[0.38em] text-[#F5EFE4]/75 uppercase whitespace-nowrap">
              REAL &nbsp;·&nbsp; MOMENTS &nbsp;·&nbsp; LAST &nbsp;·&nbsp; FOREVER
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* LEVEL 03 — PERSONAL EDITORIAL STATEMENTS                     */}
        {/* Left: More Than Photos | Right: Let's Create Your Reality    */}
        {/* Placed at top-[77%] continuing the editorial vertical column */}
        {/* ============================================================ */}

        {/* --- LEFT: MORE THAN PHOTOS --- */}
        <div 
          className="absolute left-[3%] xl:left-[3.5%] top-[77%] text-left z-20 transition-all duration-700 delay-200 ease-out animate-in fade-in slide-in-from-bottom-2"
        >
          {/* Script typography */}
          <p className="font-luxury-script text-3xl xl:text-[34px] text-[#F5EFE4] leading-tight drop-shadow-sm whitespace-nowrap">
            More Than Photos
          </p>

          {/* Underneath: Monograph statement */}
          <div className="mt-2.5 pt-2 border-t border-[#F5EFE4]/25">
            <p className="font-serif text-[10px] xl:text-[11px] tracking-[0.24em] text-[#F5EFE4]/90 uppercase leading-snug whitespace-nowrap">
              A DIFFERENT
            </p>
          </div>
        </div>

        {/* --- RIGHT: LET'S CREATE YOUR REALITY --- */}
        <div 
          className="absolute right-[3%] xl:right-[3.5%] top-[77%] text-right z-20 max-w-[260px] transition-all duration-700 delay-250 ease-out animate-in fade-in slide-in-from-bottom-2"
        >
          <p className="font-luxury-script text-3xl xl:text-[34px] text-[#F5EFE4] leading-tight drop-shadow-sm whitespace-nowrap">
            Let's Create<br />Your Reality
          </p>
          {/* Fine editorial underline & Monograph statement */}
          <div className="mt-2.5 pt-2 border-t border-[#F5EFE4]/25">
            <p className="font-serif text-[10px] xl:text-[11px] tracking-[0.24em] text-[#F5EFE4]/90 uppercase leading-snug whitespace-nowrap">
              PERSPECTIVE
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* LEVEL 04 — CTA + FOOTER METADATA                             */}
        {/* Centered: ENTER PORTFOLIO → | Category Line | Footer Id      */}
        {/* ============================================================ */}

        {/* --- ENTER BUTTON CTA --- */}
        <div 
          className="absolute left-1/2 top-[83.5%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center transition-all duration-700 delay-300 ease-out animate-in fade-in slide-in-from-bottom-3"
        >
          <button
            onClick={handleEnter}
            type="button"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-3.5 rounded-full border border-[#F5EFE4]/45 bg-[#111111]/50 hover:bg-[#111111]/75 hover:border-[#F5EFE4]/90 hover:shadow-[0_0_24px_rgba(245,239,228,0.24)] text-[#F5EFE4] font-serif text-xs xl:text-[13px] tracking-[0.26em] uppercase backdrop-blur-md transition-all duration-300 cursor-pointer"
          >
            <span>ENTER PORTFOLIO</span>
            <ArrowRight size={14} className="transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
          </button>
          <p className="mt-2 text-center font-serif text-[8.5px] xl:text-[9px] tracking-[0.34em] uppercase text-[#F5EFE4]/45 pointer-events-none select-none">
            ON A BEAUTIFUL WORLD
          </p>
        </div>

        {/* --- BOTTOM CATEGORY LINE --- */}
        <div 
          className="absolute left-1/2 top-[92.5%] -translate-x-1/2 -translate-y-1/2 z-20 w-full text-center pointer-events-none transition-all duration-700 delay-350 ease-out animate-in fade-in"
        >
          <p className="font-sans text-[9px] xl:text-[10px] tracking-[0.42em] uppercase text-[#F5EFE4]/65 whitespace-nowrap">
            FASHION &nbsp;|&nbsp; WEDDINGS &nbsp;|&nbsp; PORTRAITS &nbsp;|&nbsp; LIFESTYLE &nbsp;|&nbsp; TRAVEL
          </p>
        </div>

        {/* --- FOOTER IDENTIFIER --- */}
        <div 
          className="absolute left-[3%] xl:left-[3.5%] top-[95.5%] -translate-y-1/2 z-20 pointer-events-none transition-all duration-700 delay-400 ease-out animate-in fade-in"
        >
          <p className="font-mono text-[8.5px] tracking-[0.28em] text-[#F5EFE4]/50 uppercase">
            HAFIL M — PHOTOGRAPHER
          </p>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. TABLET VIEWPORT COMPOSITION (768px – 1199px)              */}
      {/* ============================================================ */}
      <div className="hidden md:max-[1199px]:block absolute inset-0 w-full h-full">
        {/* Background Artwork - Tablet Portrait Reference */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url(${TABLET_IMAGE})` }}
          role="img"
          aria-label="Hafil M Editorial Cover - Tablet"
        />

        <div className="absolute inset-0 pointer-events-none bg-radial from-transparent via-transparent to-black/30" />

        {/* Left: Fashion (6–9% left, ~48–52% vertical) */}
        <div className="absolute left-[7%] top-[50%] -translate-y-1/2 text-left z-20">
          <h2 className="font-serif text-2xl md:text-3xl text-[#F5EFE4] font-normal tracking-[0.22em] leading-tight uppercase">
            FASHION
          </h2>

          <div className="mt-3 pt-2.5 border-t border-[#F5EFE4]/20">
            <p className="font-sans text-[8.5px] tracking-[0.32em] text-[#F5EFE4]/75 uppercase whitespace-nowrap">
              STYLE &nbsp;·&nbsp; PEOPLE &nbsp;·&nbsp; ATTITUDE
            </p>
          </div>
        </div>

        {/* Right: Weddings (78–84% left / ~7% right, ~48–52% vertical) */}
        <div className="absolute right-[7%] top-[50%] -translate-y-1/2 text-right z-20">
          <h2 className="font-serif text-2xl md:text-3xl text-[#F5EFE4] font-normal tracking-[0.22em] leading-tight uppercase">
            WEDDINGS
          </h2>

          <div className="mt-3 pt-2.5 border-t border-[#F5EFE4]/20">
            <p className="font-sans text-[8.5px] tracking-[0.32em] text-[#F5EFE4]/75 uppercase whitespace-nowrap">
              REAL &nbsp;·&nbsp; MOMENTS &nbsp;·&nbsp; LAST &nbsp;·&nbsp; FOREVER
            </p>
          </div>
        </div>

        {/* Left: More Than Photos (moved down parallel) */}
        <div className="absolute left-[7%] top-[74%] -translate-y-1/2 text-left z-20">
          <p className="font-luxury-script text-2xl text-[#F5EFE4] leading-tight whitespace-nowrap">
            More Than Photos
          </p>
          <div className="mt-2 pt-1.5 border-t border-[#F5EFE4]/20">
            <p className="font-serif text-[10px] tracking-[0.22em] text-[#F5EFE4]/90 uppercase leading-snug whitespace-nowrap">
              A DIFFERENT
            </p>
          </div>
        </div>

        {/* Right: Let's Create Your Reality (moved down parallel to More Than Photos) */}
        <div className="absolute right-[7%] top-[74%] -translate-y-1/2 text-right z-20">
          <p className="font-luxury-script text-2xl text-[#F5EFE4] leading-tight whitespace-nowrap">
            Let's Create<br />Your Reality
          </p>
          <div className="mt-2 pt-1.5 border-t border-[#F5EFE4]/20">
            <p className="font-serif text-[10px] tracking-[0.22em] text-[#F5EFE4]/90 uppercase leading-snug whitespace-nowrap">
              PERSPECTIVE
            </p>
          </div>
        </div>

        {/* Enter Portfolio CTA (center horizontally, at hip level) */}
        <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
          <button
            onClick={handleEnter}
            type="button"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full border border-[#F5EFE4]/45 bg-[#111111]/45 hover:bg-[#111111]/75 hover:border-[#F5EFE4]/90 hover:shadow-[0_0_22px_rgba(245,239,228,0.22)] text-[#F5EFE4] font-serif text-xs tracking-[0.24em] uppercase backdrop-blur-md transition-all duration-300 cursor-pointer"
          >
            <span>ENTER PORTFOLIO</span>
            <ArrowRight size={13} className="transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
          </button>
          <p className="mt-2 text-center font-serif text-[8px] tracking-[0.32em] uppercase text-[#F5EFE4]/45 pointer-events-none select-none">
            ON A BEAUTIFUL WORLD
          </p>
        </div>

        {/* Category line (~91–94% vertical) */}
        <div className="absolute left-1/2 top-[92%] -translate-x-1/2 -translate-y-1/2 z-20 w-full text-center pointer-events-none">
          <p className="font-sans text-[8.5px] tracking-[0.34em] uppercase text-[#F5EFE4]/65 whitespace-nowrap">
            FASHION &nbsp;|&nbsp; WEDDINGS &nbsp;|&nbsp; PORTRAITS &nbsp;|&nbsp; LIFESTYLE &nbsp;|&nbsp; TRAVEL
          </p>
        </div>

        {/* Footer (~5% from left, ~96% vertical) */}
        <div className="absolute left-[5%] top-[96%] -translate-y-1/2 z-20 pointer-events-none">
          <p className="font-mono text-[8px] tracking-[0.24em] text-[#F5EFE4]/50 uppercase">
            HAFIL M — PHOTOGRAPHER
          </p>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. MOBILE VIEWPORT COMPOSITION (< 768px)                     */}
      {/* ============================================================ */}
      <div 
        className="block md:hidden absolute inset-0 w-full h-full overflow-hidden bg-[#d45a1e] pointer-events-auto select-none"
        style={{ overscrollBehavior: 'none' }}
      >
        {/* Background Artwork - Mobile Reference anchored to bottom so shoes remain visible */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-[center_bottom] pointer-events-none"
          style={{ backgroundImage: `url(${MOBILE_IMAGE})` }}
          role="img"
          aria-label="Hafil M Editorial Cover - Mobile"
        />

        <div className="absolute inset-0 pointer-events-none bg-radial from-transparent via-transparent to-black/35" />

        {/* Left: Mobile Fashion block (FASHION close to STYLE · PEOPLE · ATTITUDE with balanced margins) */}
        <div className="absolute left-[6%] sm:left-[6.5%] top-[47%] -translate-y-1/2 text-left z-20">
          <h2 className="font-serif text-base sm:text-lg text-[#F5EFE4] font-normal tracking-[0.2em] leading-tight uppercase mb-2 sm:mb-2.5">
            FASHION
          </h2>
          <p className="font-sans text-[7px] sm:text-[7.5px] tracking-[0.26em] text-[#F5EFE4]/80 uppercase whitespace-nowrap">
            STYLE &nbsp;·&nbsp; PEOPLE &nbsp;·&nbsp; ATTITUDE
          </p>
        </div>

        {/* Right: Mobile Weddings block (WEDDINGS close to REAL MOMENTS / LAST FOREVER with matching margins) */}
        <div className="absolute right-[4%] sm:right-[4.5%] top-[35.5%] -translate-y-1/2 text-right z-20">
          <h2 className="font-serif text-base sm:text-lg text-[#F5EFE4] font-normal tracking-[0.2em] leading-tight uppercase mb-2 sm:mb-2.5">
            WEDDINGS
          </h2>
          <div className="space-y-0.5">
            <p className="font-sans text-[7.5px] sm:text-[8px] tracking-[0.28em] text-[#F5EFE4]/75 uppercase whitespace-nowrap">
              REAL MOMENTS
            </p>
            <p className="font-sans text-[7.5px] sm:text-[8px] tracking-[0.28em] text-[#F5EFE4]/75 uppercase whitespace-nowrap">
              LAST FOREVER
            </p>
          </div>
        </div>

        {/* Left: Mobile More Than Photos (moved down parallel to right side) */}
        <div className="absolute left-[6%] top-[73%] text-left z-20 max-w-[160px]">
          <p className="font-luxury-script text-xl text-[#F5EFE4] leading-tight">
            More Than<br />Photos
          </p>
          <div className="mt-1.5 pt-1 border-t border-[#F5EFE4]/20">
            <p className="font-serif text-[8px] tracking-[0.2em] text-[#F5EFE4]/85 uppercase leading-snug">
              A DIFFERENT
            </p>
          </div>
        </div>

        {/* Right: Mobile Let's Create Your Reality (moved down parallel to More Than Photos) */}
        <div className="absolute right-[6%] top-[73%] text-right z-20 max-w-[160px]">
          <p className="font-luxury-script text-xl text-[#F5EFE4] leading-tight">
            Let's Create<br />Your Reality
          </p>
          <div className="mt-1.5 pt-1 border-t border-[#F5EFE4]/20">
            <p className="font-serif text-[8px] tracking-[0.2em] text-[#F5EFE4]/85 uppercase leading-snug">
              PERSPECTIVE
            </p>
          </div>
        </div>

        {/* Mobile CTA (center horizontally at hip level ~60%) */}
        <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 z-30 w-full px-6 flex flex-col items-center justify-center">
          <button
            onClick={handleEnter}
            type="button"
            className="group w-full max-w-[280px] min-h-[44px] scale-[0.92] origin-center inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full border border-[#F5EFE4]/45 bg-[#111111]/50 active:bg-[#111111]/80 hover:bg-[#111111]/75 hover:border-[#F5EFE4]/90 hover:shadow-[0_0_20px_rgba(245,239,228,0.22)] text-[#F5EFE4] font-serif text-[11px] tracking-[0.24em] uppercase backdrop-blur-md transition-all duration-300 active:scale-[0.88] cursor-pointer"
          >
            <span>ENTER PORTFOLIO</span>
            <ArrowRight size={12} className="transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
          </button>
          <p className="mt-1.5 text-center font-serif text-[7.5px] tracking-[0.32em] uppercase text-[#F5EFE4]/45 pointer-events-none select-none">
            ON A BEAUTIFUL WORLD
          </p>
        </div>

        {/* Mobile category line (bottom, ~92% vertical) */}
        <div className="absolute left-1/2 top-[92%] -translate-x-1/2 -translate-y-1/2 z-20 w-full px-2 text-center pointer-events-none">
          <p className="font-sans text-[clamp(6px,1.8vw,7.5px)] tracking-[0.22em] uppercase text-[#F5EFE4]/65 whitespace-nowrap overflow-hidden text-ellipsis">
            FASHION &nbsp;|&nbsp; WEDDINGS &nbsp;|&nbsp; PORTRAITS &nbsp;|&nbsp; LIFESTYLE &nbsp;|&nbsp; TRAVEL
          </p>
        </div>

        {/* Mobile footer (bottom-left, ~96% vertical) */}
        <div className="absolute left-[5%] top-[96%] -translate-y-1/2 z-20 pointer-events-none">
          <p className="font-mono text-[7.5px] tracking-[0.2em] text-[#F5EFE4]/50 uppercase">
            HAFIL M — PHOTOGRAPHER
          </p>
        </div>
      </div>
    </section>
  );
};
