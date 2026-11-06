import React from 'react';
import { SECTION_METADATA } from '../data';

const EDITORIAL_STATEMENT_LINES = [
  "I PHOTOGRAPH WHAT YOU",
  "FELT IN THE MOMENT",
  "TO MAKE SURE YOU",
  "KEEP GETTING THAT FEEL",
  "WHEN YOU SEE IT AGAIN",
];

export const HeroStatement: React.FC = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Primary Statement Headline — Centered Luxury Editorial Stanza (Ref: Image 2) */}
      <div className="py-2 sm:py-4 md:py-6 text-center">
        {/* Top Centered Hairline Accent */}
        <div className="w-12 sm:w-16 h-[1px] bg-[#111111]/25 mx-auto mb-6 sm:mb-8" />

        <h1 className="font-serif editorial-heading-stroke text-[18px] min-[360px]:text-[20px] min-[400px]:text-[22px] sm:text-[25px] md:text-[29px] leading-[1.32] sm:leading-[1.3] md:leading-[1.28] tracking-[0.035em] sm:tracking-[0.04em] text-[#111111] uppercase font-normal text-center max-w-lg md:max-w-xl mx-auto">
          {EDITORIAL_STATEMENT_LINES.map((line, idx) => (
            <span key={idx} className="block whitespace-nowrap">
              {line}
            </span>
          ))}
        </h1>

        {/* Bottom Centered Hairline Accent */}
        <div className="w-12 sm:w-16 h-[1px] bg-[#111111]/25 mx-auto mt-6 sm:mt-8" />
      </div>

      {/* Subtle Micro Coordinate Line with Generous Spacing */}
      <div className="pt-2 sm:pt-4 flex items-center justify-between text-[9px] font-mono tracking-[0.22em] text-[#44413C]/60 uppercase">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 border border-[#111111]/50 inline-block" />
          <span>{SECTION_METADATA.location}</span>
        </div>
        <span>{SECTION_METADATA.coordinates}</span>
      </div>
    </div>
  );
};


