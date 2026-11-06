import React from 'react';
import { RegistrationCross, TechnicalAnnotation } from './EditorialMarks';
import { CounterpointFrame } from './CounterpointFrame';

interface PhilosophyBlockProps {
  onImageClick?: (imageSrc: string) => void;
}

export const PhilosophyBlock: React.FC<PhilosophyBlockProps> = ({ onImageClick }) => {
  return (
    <div className="py-8 sm:py-12 border-t border-b border-[#111111]/15 space-y-10 sm:space-y-12">
      {/* Secondary Introspective Image (FIG. 02 Counterpoint) */}
      <div className="relative">
        {/* Editorial Metadata Above Image */}
        <div className="flex items-center justify-between pb-2 text-[9px] font-mono tracking-[0.2em] text-[#44413C]/60 uppercase border-b border-[#111111]/10">
          <div className="flex items-center gap-2">
            <RegistrationCross />
            <span>FIG. 02 // INTROSPECTIVE COUNTERPOINT</span>
          </div>
          <span>PLATE NO. 02</span>
        </div>

        {/* Sharp Editorial Frame with Corner Marks & Smooth Transition */}
        <CounterpointFrame
          onImageClick={onImageClick}
          className="mt-2 aspect-4/5"
        />

        {/* Bottom Caption Annotation */}
        <div className="mt-3 flex items-center justify-between text-[8px] sm:text-[9px] font-mono tracking-[0.22em] text-[#44413C]/70 uppercase">
          <span>PORTRAIT // ARCHIVAL PLATE 02</span>
          <span>SILENT OBSERVER</span>
        </div>
      </div>

      {/* Philosophical Transition & Typographic Monograph */}
      <div className="space-y-5 sm:space-y-6 pt-4">
        {/* Micro Section Marker */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-[9px] tracking-[0.28em] text-[#111111] uppercase font-semibold">
            MORE THAN PHOTOGRAPHS
          </span>
          <span className="h-[1px] w-12 bg-[#111111]/25" />
          <TechnicalAnnotation text="STATEMENT OF INTENT" />
        </div>

        {/* Primary Statement */}
        <h2 className="font-serif editorial-heading-stroke text-2xl sm:text-3xl md:text-4xl text-[#111111] font-normal leading-[1.18] uppercase tracking-tight">
          I DON'T BELIEVE GREAT PHOTOGRAPHY<br />
          IS ABOUT SIMPLY BEING IN THE RIGHT<br />
          PLACE WITH A CAMERA.
        </h2>

        {/* Seeing First */}
        <p className="font-editorial italic text-xl sm:text-2xl text-[#111111]/90">
          It's about seeing something before everyone else does.
        </p>
      </div>
    </div>
  );
};

