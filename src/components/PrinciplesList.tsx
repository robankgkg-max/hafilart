import React from 'react';
import { PRINCIPLES, PRINCIPLES_HEADING } from '../data';
import { PrincipleItem } from './PrincipleItem';
import { RegistrationCross, TechnicalAnnotation } from './EditorialMarks';

export const PrinciplesList: React.FC = () => {
  return (
    <section className="py-12 md:py-20">
      {/* Section Header & Architectural Ticks */}
      <div className="pb-8 md:pb-12 border-b border-[#111111]/25 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <RegistrationCross />
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#111111] font-semibold">
              METHODOLOGY // CORE CODEX
            </span>
            <span className="h-[1px] w-8 bg-[#111111]/30" />
            <TechnicalAnnotation text="SIX UNBROKEN TENETS" />
          </div>

          <h2 className="font-serif editorial-heading-stroke text-3xl sm:text-4xl md:text-5xl text-[#111111] font-normal tracking-tight uppercase leading-tight">
            {PRINCIPLES_HEADING}
          </h2>
        </div>

        <div className="flex items-center gap-4 text-[9px] font-mono tracking-[0.25em] text-[#44413C]/60 uppercase">
          <span>VOL. 02</span>
          <span>•</span>
          <span>100% DISCIPLINE</span>
        </div>
      </div>

      {/* Continuous Editorial Columns */}
      <div className="divide-y-0">
        {PRINCIPLES.map((principle, index) => (
          <PrincipleItem
            key={principle.number}
            principle={principle}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
