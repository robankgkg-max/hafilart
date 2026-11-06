import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SECTION_METADATA } from '../data';

interface EditorialHeaderProps {
  onOpenIndex?: () => void;
  onReturnToIntro?: () => void;
}

export const EditorialHeader: React.FC<EditorialHeaderProps> = ({ onReturnToIntro }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F4EDE1]/95 backdrop-blur-md border-b border-[#111111]/15">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-3.5 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3">
          <button 
            type="button"
            onClick={onReturnToIntro}
            className="font-sans font-semibold text-[11px] md:text-[12px] tracking-[0.28em] text-[#111111] uppercase select-none hover:opacity-75 transition-opacity text-left cursor-pointer"
            title="Return to Cover"
          >
            HAFIL.M
          </button>
          <span className="hidden lg:inline-block text-[9px] tracking-[0.2em] text-[#44413C]/60 font-mono">
            // {SECTION_METADATA.referenceCode}
          </span>
        </div>

        {/* Center: Disciplines (Desktop Only) */}
        <nav className="hidden md:flex items-center space-x-6 text-[10px] tracking-[0.3em] uppercase text-[#44413C] font-sans font-normal select-none">
          <a href="#section-04-wedding-archive" className="hover:text-[#111111] transition-colors">
            WEDDING
          </a>
          <span className="text-[#111111]/25">/</span>
          <a href="#section-fashion-archive" className="hover:text-[#111111] transition-colors">
            FASHION
          </a>
          <span className="text-[#111111]/25">/</span>
          <span className="cursor-default">PEOPLE</span>
        </nav>

        {/* Right: Publication subtitle & minimal menu trigger */}
        <div className="flex items-center gap-4 md:gap-6">
          <span className="hidden sm:inline-block text-[10px] tracking-[0.28em] uppercase text-[#44413C]/80 font-sans select-none">
            A VISUAL JOURNAL
          </span>
          <span className="hidden lg:inline-block text-[9px] tracking-[0.2em] font-mono text-[#44413C]/50">
            {SECTION_METADATA.chapterPage}
          </span>

          <button
            id="editorial-menu-button"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1.5 -mr-1.5 text-[#111111] hover:text-[#44413C] transition-colors focus:outline-hidden"
            aria-label="Toggle Publication Index"
          >
            {menuOpen ? <X size={16} strokeWidth={1.5} /> : <Menu size={16} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Editorial Monograph Index Overlay (Subtle, Art Book Table of Contents) */}
      {menuOpen && (
        <div className="border-b border-[#111111]/15 bg-[#F4EDE1] px-4 sm:px-6 md:px-12 py-8 animate-in fade-in duration-200">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between gap-8">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#44413C]/60 block mb-2">
                INDEX // PUBLICATION STRUCTURE
              </span>
              <p className="font-serif italic text-lg text-[#111111]/80 max-w-sm">
                A personal archive of captured atmosphere, transient gestures, and light.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-sans text-[11px] tracking-[0.2em] uppercase">
              <div className="border-l border-[#111111]/20 pl-3">
                <span className="text-[9px] font-mono text-[#44413C]/50 block">CH. 01</span>
                <span className="text-[#44413C]/60">PRELUDE & OBSERVATIONS</span>
              </div>
              <div className="border-l border-[#111111]/20 pl-3">
                <span className="text-[9px] font-mono text-[#44413C]/50 block">CH. 02</span>
                <span className="text-[#44413C]/60">WHO IS HAFIL.M</span>
              </div>
              <a href="#section-04-wedding-archive" onClick={() => setMenuOpen(false)} className="border-l border-[#111111]/20 pl-3 block hover:border-[#111111] transition-colors">
                <span className="text-[9px] font-mono text-[#44413C]/50 block">CH. 04</span>
                <span className="text-[#44413C]/80">WEDDING ARCHIVE</span>
              </a>
              <a href="#section-05-connect" onClick={() => setMenuOpen(false)} className="border-l border-[#111111] pl-3 block hover:border-[#111111] transition-colors">
                <span className="text-[9px] font-mono text-[#111111] block font-bold">CH. 05</span>
                <span className="font-semibold text-[#111111]">CONNECT WITH ME</span>
              </a>
            </div>

            <div className="flex items-end justify-between md:justify-end text-[9px] font-mono text-[#44413C]/60 tracking-[0.2em]">
              <span>KOZHIKODE, INDIA</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
