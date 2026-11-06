import React, { useState } from 'react';
import { WEDDING_ARCHIVE_SERIES } from '../../data/weddingArchiveData';
import { GallerySeries } from '../../types/gallery';
import { SeriesCard } from './SeriesCard';
import { SeriesViewer } from './SeriesViewer';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Menu } from 'lucide-react';

export const WeddingArchiveSection: React.FC = () => {
  const [activeSeries, setActiveSeries] = useState<GallerySeries | null>(null);
  const [gridRef, isGridInView] = useIntersectionObserver<HTMLDivElement>({
    rootMargin: '500px 0px',
    triggerOnce: true,
  });

  const handleOpenSeries = (series: GallerySeries) => {
    setActiveSeries(series);
  };

  const handleCloseSeries = () => {
    setActiveSeries(null);
  };

  return (
    <section 
      id="section-04-wedding-archive" 
      className="relative w-full bg-[#F4EDE1] pt-2 sm:pt-4 lg:pt-6 pb-8 sm:pb-12 lg:pb-14 select-none"
    >
      {/* Outer Editorial Container with Margins Matching Desktop & Mobile */}
      <div className="w-full max-w-[1440px] mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* Fine Architectural Frame */}
        <div className="border border-[#111111]/25 bg-[#F4EDE1] photo-card-shadow overflow-hidden">
          
          {/* ============================================================ */}
          {/* TOP PUBLICATION NAVIGATION BAR                               */}
          {/* ============================================================ */}
          <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 border-b border-[#111111]/20 flex items-center justify-between text-[8px] sm:text-[9.5px] font-mono tracking-[0.24em] text-[#4A4741] uppercase">
            <span className="font-semibold text-[#111111]">HAFIL.M</span>
            
            <div className="hidden sm:flex items-center space-x-3 text-[#4A4741]">
              <span className="font-semibold text-[#111111]">WEDDING</span>
              <span className="opacity-30">/</span>
              <a href="#section-fashion-archive" className="hover:text-[#111111] transition-colors">
                FASHION
              </a>
              <span className="opacity-30">/</span>
              <span>PEOPLE</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-[7.5px] sm:text-[8.5px] tracking-[0.24em] text-[#4A4741]">
                A VISUAL JOURNAL
              </span>
              <button 
                type="button" 
                className="p-1 text-[#111111] hover:opacity-60 transition-opacity focus:outline-hidden"
                aria-label="Navigation Menu"
              >
                <Menu size={16} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* ============================================================ */}
          {/* SECTION 04 HEADER: WEDDING ARCHIVE // SELECTED STORIES       */}
          {/* ============================================================ */}
          <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 border-b border-[#111111]/20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-4">
              
              {/* Left Side: Chapter 04 + Title + Subtitle */}
              <div className="space-y-2">
                {/* 04 with horizontal rule */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs sm:text-sm text-[#111111] tracking-widest font-normal">
                    04
                  </span>
                  <div className="h-[1px] w-12 sm:w-16 bg-[#111111]/30" />
                </div>

                {/* Massive Heading: WEDDING ARCHIVE */}
                <h2 className="font-serif archive-headline text-3xl sm:text-4xl lg:text-5xl text-[#111111] uppercase tracking-tight leading-[0.95] pt-1">
                  WEDDING ARCHIVE
                </h2>

                {/* Small Tracked-out Line: SELECTED STORIES */}
                <p className="font-mono text-[8px] sm:text-[9px] tracking-[0.28em] text-[#111111] uppercase font-medium pt-0.5">
                  SELECTED STORIES
                </p>
              </div>

              {/* Right Side: Vertical Divider + REAL PEOPLE, BEAUTIFUL STORIES */}
              <div className="flex items-center self-start sm:self-end">
                <div className="hidden sm:block h-5 sm:h-6 w-[1px] bg-[#111111]/25 mr-4" />
                
                <div className="text-left">
                  <p className="font-mono text-[8px] sm:text-[9px] tracking-[0.24em] uppercase text-[#111111] whitespace-nowrap">
                    REAL PEOPLE, BEAUTIFUL STORIES
                  </p>
                  {/* Short underline */}
                  <div className="w-8 h-[1px] bg-[#111111]/40 mt-1.5" />
                </div>
              </div>

            </div>
          </div>

          {/* ============================================================ */}
          {/* THE MAIN GALLERY GRID                                        */}
          {/* Strict Rule: DESKTOP = 3 COLUMNS | MOBILE & TABLET = 2 COLS  */}
          {/* Divider: 1px hairline between all columns and rows           */}
          {/* ============================================================ */}
          <div ref={gridRef} className="relative w-full bg-[#111111]/25 p-[1px]">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#111111]/25 min-h-[320px]">
              {WEDDING_ARCHIVE_SERIES.map((series, idx) => (
                <SeriesCard
                  key={series.id}
                  series={series}
                  onOpenSeries={handleOpenSeries}
                  priority={idx < 6 || isGridInView}
                />
              ))}
            </div>
          </div>

          {/* ============================================================ */}
          {/* BOTTOM IMPRINT / FOOTER BAR                                  */}
          {/* ============================================================ */}
          <div className="px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 border-t border-[#111111]/20 flex flex-col sm:flex-row items-center justify-between text-[7.5px] sm:text-[8.5px] font-mono tracking-[0.24em] text-[#4A4741] uppercase gap-2.5 sm:gap-0">
            
            {/* Brand Col */}
            <div className="text-center sm:text-left">
              <span className="font-semibold text-[#111111] block">HAFIL M</span>
              <span className="text-[#4A4741]/75 block text-[7px] sm:text-[7.5px]">LIFE IN FRAMES</span>
            </div>

            {/* Middle Divider on desktop */}
            <div className="hidden sm:block h-6 w-[1px] bg-[#111111]/20" />

            {/* Right Col */}
            <div className="text-center sm:text-right">
              <span className="font-medium text-[#111111] block">DOCUMENTING</span>
              <span className="text-[#4A4741]/75 block text-[7px] sm:text-[7.5px]">THE SOULS IN A WEDDING</span>
            </div>

          </div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* INTERACTIVE FULL-SCREEN SERIES VIEWER                         */}
      {/* ============================================================ */}
      {activeSeries && (
        <SeriesViewer
          series={activeSeries}
          onClose={handleCloseSeries}
        />
      )}
    </section>
  );
};
