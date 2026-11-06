import React from 'react';
import { PRIMARY_IMAGE, ABOUT_COPY_PARAGRAPHS } from '../data';
import { CornerCropMarks, TechnicalAnnotation, RegistrationCross } from './EditorialMarks';
import { OptimizedPicture } from './common/OptimizedPicture';

interface PhotographerIntroProps {
  onImageClick?: () => void;
}

export const PhotographerIntro: React.FC<PhotographerIntroProps> = ({ onImageClick }) => {
  return (
    <div className="flex flex-col gap-8 md:gap-10">
      {/* Primary Portrait Anchor Container */}
      <div className="relative group">
        {/* Micro Header Annotation above image */}
        <div className="flex items-center justify-between pb-2 text-[9px] font-mono tracking-[0.22em] text-[#44413C]/60 uppercase border-b border-[#111111]/10">
          <div className="flex items-center gap-2">
            <RegistrationCross />
            <span>FIG. 01 // PRIMARY PORTRAIT</span>
          </div>
          <span>PLATE NO. 01</span>
        </div>

        {/* Sharp Rectangular Editorial Image Frame with Corner Marks */}
        <div 
          onClick={onImageClick}
          className="relative mt-2 overflow-hidden bg-[#111111] cursor-pointer"
        >
          <CornerCropMarks className="z-10" />

          <OptimizedPicture
            src={PRIMARY_IMAGE}
            alt="Hafil.M — Wedding & Fashion Photographer at work"
            width={900}
            height={1200}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-auto aspect-3/4 object-cover photo-monochrome transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />

          {/* Film edge simulation overlay */}
          <div className="absolute bottom-2 left-3 right-3 z-10 flex items-center justify-between pointer-events-none text-[8px] font-mono text-[#F4EDE1]/70 tracking-[0.25em] uppercase mix-blend-difference">
            <span>EXP 01 // 35MM</span>
            <span>SHUTTER SYNC // ACTIVE OBSERVER</span>
          </div>
        </div>

        {/* Supporting Editorial Microcopy Around Image */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-y-2 text-[8px] sm:text-[9px] font-sans tracking-[0.28em] text-[#44413C]/80 uppercase">
          <div className="flex items-center gap-2">
            <span>FRAMES</span>
            <span className="text-[#111111]/30">•</span>
            <span>PEOPLE</span>
            <span className="text-[#111111]/30">•</span>
            <span>PLACES</span>
            <span className="text-[#111111]/30">•</span>
            <span>FEELINGS</span>
          </div>

          <div className="text-right font-mono text-[8px] text-[#44413C]/60">
            <span>SAME EYES / DIFFERENT STORIES</span>
          </div>
        </div>

        <div className="mt-1 flex items-center justify-between text-[8px] font-mono tracking-[0.2em] text-[#44413C]/50 uppercase">
          <span>A QUIETER PERSPECTIVE</span>
          <span>A DEEPER STORY</span>
        </div>
      </div>

      {/* About Copy Block — Biographical Record */}
      <div className="pt-4 border-t border-[#111111]/15 space-y-4">
        <div className="flex items-center gap-2 text-[9px] font-mono tracking-[0.25em] text-[#44413C]/60 uppercase">
          <span className="w-2 h-[1px] bg-[#111111]/40" />
          <TechnicalAnnotation text="BIOGRAPHICAL RECORD // 02-A" />
        </div>

        {/* Lead Bio Paragraph */}
        <p className="font-editorial text-lg sm:text-xl md:text-xl text-[#111111] leading-relaxed font-normal">
          {ABOUT_COPY_PARAGRAPHS[0]}
        </p>
      </div>
    </div>
  );
};
