import React, { useState, useEffect } from 'react';
import { HeroStatement } from './HeroStatement';
import { PhotographerIntro } from './PhotographerIntro';
import { PhilosophyBlock } from './PhilosophyBlock';
import { PrinciplesList } from './PrinciplesList';
import { AboutDesktopSpread } from './AboutDesktopSpread';
import { CornerCropMarks, RegistrationCross, FilmEdgeCode } from './EditorialMarks';
import { PRIMARY_IMAGE, SECTION_METADATA } from '../data';
import { X, ZoomIn } from 'lucide-react';
import { OptimizedPicture } from './common/OptimizedPicture';

interface AboutSectionProps {
  forcedMode?: 'responsive' | 'desktop-spread' | 'mobile-journal';
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  // Push history state when lightbox opens so mobile back gesture dismisses the modal
  useEffect(() => {
    if (!activeLightboxImage) return;

    const originalOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    if (typeof window !== 'undefined' && window.location.hash !== '#lightbox') {
      window.history.pushState({ modal: 'lightbox' }, '', '#lightbox');
    }

    const handlePopState = () => {
      setActiveLightboxImage(null);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.removeEventListener('popstate', handlePopState);
    };
  }, [activeLightboxImage]);

  const handleCloseLightbox = () => {
    if (typeof window !== 'undefined' && window.location.hash === '#lightbox') {
      window.history.back();
    }
    setActiveLightboxImage(null);
  };

  return (
    <section 
      id="section-02-about" 
      className="relative w-full overflow-hidden bg-[#F4EDE1] border-b border-[#111111]/20"
    >
      {/* ============================================================ */}
      {/* MOBILE & TABLET EDITORIAL JOURNAL (Strictly < lg, UNTOUCHED) */}
      {/* ============================================================ */}
      <div className="block lg:hidden max-w-xl md:max-w-2xl mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-14 pb-2 md:pb-4">
        
        {/* Top Architectural Measurement Line */}
        <div className="relative pb-6 mb-8 sm:mb-12 border-b border-[#111111]/15 flex items-center justify-between text-[9px] font-mono tracking-[0.25em] text-[#44413C]/60 uppercase select-none">
          <div className="flex items-center gap-3">
            <RegistrationCross />
            <span>SECTION // 02</span>
            <span className="hidden sm:inline-block">• {SECTION_METADATA.title}</span>
          </div>

          <div className="flex items-center gap-6">
            <FilmEdgeCode className="hidden sm:flex" />
            <span>P. {SECTION_METADATA.chapterPage}</span>
          </div>
        </div>

        {/* Reference 02 Vertical Editorial Sequence */}
        <div className="space-y-12 sm:space-y-16">
          <HeroStatement />
          <PhotographerIntro onImageClick={() => setActiveLightboxImage(PRIMARY_IMAGE)} />
          <PhilosophyBlock onImageClick={(img) => setActiveLightboxImage(img)} />
          <PrinciplesList />
        </div>
      </div>

      {/* ============================================================ */}
      {/* DESKTOP BESPOKE EDITORIAL SPREAD (Strictly lg and above)     */}
      {/* ============================================================ */}
      <div className="hidden lg:block">
        <AboutDesktopSpread onImageClick={(img) => setActiveLightboxImage(img)} />
      </div>

      {/* High-Resolution Monograph Lightbox Modal — 100% Solid Opaque */}
      {activeLightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-[#0A0A0A] flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          style={{ backgroundColor: '#0A0A0A' }}
          onClick={handleCloseLightbox}
          onTouchMove={(e) => e.stopPropagation()}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-[#F4EDE1] p-3 sm:p-4 border border-[#F4EDE1]/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseLightbox}
              className="absolute -top-10 right-0 text-[#F4EDE1] hover:opacity-80 p-2 font-mono text-xs tracking-widest uppercase flex items-center gap-2 cursor-pointer"
            >
              <span>CLOSE</span>
              <X size={16} />
            </button>

            <div className="relative overflow-hidden bg-black">
              <CornerCropMarks size={16} />
              <OptimizedPicture
                src={activeLightboxImage}
                alt="Hafil.M Photograph detail"
                width={1200}
                height={1600}
                targetWidth={1200}
                loading="eager"
                decoding="async"
                className={`max-h-[75vh] w-auto mx-auto object-contain opacity-100 bg-black ${activeLightboxImage === PRIMARY_IMAGE ? 'photo-monochrome' : ''}`}
              />
            </div>

            <div className="mt-3 flex items-center justify-between font-mono text-[9px] tracking-[0.25em] text-[#111111] uppercase">
              <span>HAFIL.M // 35MM ARCHIVAL PRINT</span>
              <span className="flex items-center gap-1">
                <ZoomIn size={12} />
                MONOCHROME SILVER HALIDE TONE
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
