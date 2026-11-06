import React from 'react';
import { CLOSING_MANIFESTO, SECTION_METADATA } from '../data';
import { CornerCropMarks, RegistrationCross, TechnicalAnnotation } from './EditorialMarks';

export const ClosingManifesto: React.FC = () => {
  return (
    <section className="relative pt-8 pb-6 sm:pt-10 sm:pb-8 md:pt-12 md:pb-10 lg:pt-14 lg:pb-12 px-4 sm:px-6 md:px-8 bg-[#F4EDE1] border-b border-[#111111]/15">
      <div className="relative max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-8 xl:px-14 py-10 md:py-14 xl:py-16 bg-[#F4EDE1] border border-[#111111]/15 photo-card-shadow">
        <CornerCropMarks size={16} />

        {/* Top Annotation */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#111111]/10 text-[9px] xl:text-[9.5px] font-mono tracking-[0.25em] text-[#44413C]/60 uppercase">
          <div className="flex items-center gap-2">
            <RegistrationCross />
            <span>COLOPHON // CLOSING MANIFESTO</span>
          </div>
          <TechnicalAnnotation text="REF: SEC.02 // END" />
        </div>

        {/* The Exact Manifesto Closing */}
        <div className="space-y-4 md:space-y-6 text-center">
          <p className="font-serif editorial-heading-stroke text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#111111] font-normal tracking-tight uppercase leading-tight">
            {CLOSING_MANIFESTO.line1}
          </p>
          <p className="font-serif editorial-heading-stroke text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#111111] font-light italic tracking-tight uppercase leading-tight">
            {CLOSING_MANIFESTO.line2}
          </p>

          <div className="pt-6 md:pt-8 flex flex-col items-center gap-2">
            <span className="h-[1px] w-16 bg-[#111111]/30" />
            <span className="font-sans font-medium text-xs sm:text-sm tracking-[0.3em] uppercase text-[#111111]">
              {CLOSING_MANIFESTO.author}
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#44413C]/60 uppercase mt-1">
              KOZHIKODE, INDIA — {SECTION_METADATA.title}
            </span>
          </div>
        </div>

        {/* Bottom Technical Line */}
        <div className="mt-12 pt-6 border-t border-[#111111]/10 flex flex-wrap items-center justify-between gap-4 text-[8px] xl:text-[8.5px] font-mono tracking-[0.2em] text-[#44413C]/50 uppercase">
          <span>{SECTION_METADATA.coordinates}</span>
          <span>CURATED MONOGRAPH // PRINT EDITION NO. 02</span>
          <span>EST. 2020</span>
        </div>
      </div>
    </section>
  );
};
