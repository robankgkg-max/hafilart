import React from 'react';
import { Principle } from '../types';

interface PrincipleItemProps {
  principle: Principle;
  index: number;
}

export const PrincipleItem: React.FC<PrincipleItemProps> = ({ principle, index }) => {
  return (
    <article className="py-8 sm:py-10 md:py-12 border-b border-[#111111]/15 group transition-colors duration-300">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-8 lg:gap-12">
        {/* Large Editorial Serif Number & Headline */}
        <div className="flex items-baseline gap-4 md:gap-6 md:w-1/2 lg:w-5/12 shrink-0">
          <span className="font-serif editorial-heading-stroke text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#111111] font-light tracking-tight select-none">
            {principle.number}
          </span>
          <h3 className="font-sans text-xs sm:text-sm md:text-[14px] font-semibold text-[#111111] tracking-[0.16em] uppercase leading-snug">
            {principle.headline}
          </h3>
        </div>

        {/* Narrative Description Beneath / Alongside */}
        <div className="md:w-1/2 lg:w-7/12 md:pl-4">
          <p className="font-editorial text-base sm:text-lg md:text-xl text-[#44413C] leading-relaxed max-w-xl">
            {principle.description}
          </p>
          <div className="mt-3 flex items-center gap-2 text-[8px] font-mono tracking-[0.2em] text-[#44413C]/40 uppercase select-none">
            <span>RULE REF: PR-0{index + 1}</span>
            <span>//</span>
            <span>UNCOMPROMISED STANDARD</span>
          </div>
        </div>
      </div>
    </article>
  );
};
