import React from 'react';
import { 
  PRIMARY_IMAGE, 
  SECONDARY_IMAGE, 
  SECTION_METADATA, 
  HERO_STATEMENT_LINES, 
  ABOUT_COPY_PARAGRAPHS, 
  POETIC_OBSERVATIONS, 
  ABOUT_COPY_CONCLUSION,
  PRINCIPLES_HEADING, 
  PRINCIPLES 
} from '../data';
import { CornerCropMarks, RegistrationCross, TechnicalAnnotation, FilmEdgeCode } from './EditorialMarks';
import { ZoomIn } from 'lucide-react';
import { OptimizedPicture } from './common/OptimizedPicture';
import { CounterpointFrame } from './CounterpointFrame';

interface AboutDesktopSpreadProps {
  onImageClick?: (url: string) => void;
}

export const AboutDesktopSpread: React.FC<AboutDesktopSpreadProps> = ({ onImageClick }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-8 xl:px-12 py-8 lg:py-12 select-none">
      
      {/* ============================================================ */}
      {/* TOP ARCHITECTURAL MEASUREMENT & REGISTRATION BAR             */}
      {/* ============================================================ */}
      <div className="pb-4 mb-10 xl:mb-14 border-b border-[#111111]/20 flex items-center justify-between text-[9.5px] font-mono tracking-[0.25em] text-[#44413C]/70 uppercase">
        <div className="flex items-center gap-3">
          <RegistrationCross />
          <span className="font-semibold text-[#111111]">SECTION // 02</span>
          <span>• {SECTION_METADATA.title}</span>
          <span className="opacity-30">/</span>
          <span>MONOGRAPH EDITION</span>
        </div>

        <div className="flex items-center gap-2">
          <span>{SECTION_METADATA.location}</span>
          <span className="opacity-30">•</span>
          <span>{SECTION_METADATA.coordinates}</span>
        </div>

        <div className="flex items-center gap-6">
          <FilmEdgeCode />
          <span>P. {SECTION_METADATA.chapterPage}</span>
          <span className="opacity-30">/</span>
          <span>REF: {SECTION_METADATA.referenceCode}</span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* SPREAD 1: EDITORIAL HEADLINE & PRIMARY PORTRAIT (FIG. 01)     */}
      {/* ============================================================ */}
      <div className="grid grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start pb-16 xl:pb-20 border-b border-[#111111]/20">
        
        {/* Left Column (Col 1-7): Identity, Giant Headline & Bio */}
        <div className="col-span-7 space-y-8 pr-2">
          {/* Primary Statement Headline */}
          <div className="pt-2">
            <h1 className="font-serif editorial-heading-stroke text-3xl xl:text-4xl 2xl:text-[44px] leading-[1.14] tracking-tight text-[#111111] uppercase font-normal">
              {HERO_STATEMENT_LINES.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </div>

          {/* Sub-rule with Coordinates */}
          <div className="pt-6 pb-4 border-t border-[#111111]/15 flex items-center justify-between text-[9px] font-mono tracking-[0.22em] text-[#44413C]/60 uppercase">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 border border-[#111111]/50 inline-block" />
              <span>{SECTION_METADATA.location}</span>
            </div>
            <span>35MM SILVER HALIDE TONAL FIDELITY</span>
          </div>

          {/* Biographical Record */}
          <div className="pt-2 space-y-4">
            <div className="flex items-center gap-3 text-[9.5px] font-mono tracking-[0.25em] text-[#44413C]/70 uppercase">
              <span className="w-2.5 h-[1px] bg-[#111111]/40" />
              <TechnicalAnnotation text="BIOGRAPHICAL RECORD // 02-A" />
              <span className="h-[1px] w-6 bg-[#111111]/20" />
              <span>THE ARTIST AT WORK</span>
            </div>

            <p className="font-editorial text-xl xl:text-2xl text-[#111111] leading-relaxed font-normal">
              {ABOUT_COPY_PARAGRAPHS[0]}
            </p>
          </div>

          {/* Observational Nuances Box */}
          <div className="pt-6 border-t border-[#111111]/15">
            <div className="flex items-center gap-2 mb-3 text-[9px] font-mono tracking-[0.22em] text-[#44413C]/60 uppercase">
              <span className="w-1.5 h-1.5 bg-[#111111]/60 inline-block" />
              <span>AN OBSERVATIONAL INDEX // WHAT I LOOK FOR</span>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 pt-1">
              {POETIC_OBSERVATIONS.map((observation, index) => (
                <div key={index} className="flex items-baseline gap-2.5">
                  <span className="font-mono text-[8.5px] text-[#111111]/40">0{index + 1}</span>
                  <span className="font-editorial italic text-base text-[#44413C] leading-snug">
                    {observation}
                  </span>
                </div>
              ))}
            </div>

            <p className="font-sans text-[11px] tracking-[0.18em] uppercase font-semibold text-[#111111] mt-6 pt-3 border-t border-[#111111]/10">
              {ABOUT_COPY_CONCLUSION}
            </p>
          </div>

        </div>

        {/* Right Column (Col 8-12): FIG. 01 Primary Portrait Plate */}
        <div className="col-span-5 pl-2 sticky top-20">
          <div className="relative group">
            
            {/* Top Annotation */}
            <div className="flex items-center justify-between pb-2 text-[9px] font-mono tracking-[0.22em] text-[#44413C]/65 uppercase border-b border-[#111111]/15">
              <div className="flex items-center gap-2">
                <RegistrationCross />
                <span>FIG. 01 // PRIMARY PORTRAIT</span>
              </div>
              <span>PLATE NO. 01</span>
            </div>

            {/* Sharp Architectural Frame with Crop Marks */}
            <div 
              onClick={() => onImageClick?.(PRIMARY_IMAGE)}
              className="relative mt-2.5 overflow-hidden bg-[#111111] cursor-pointer group photo-card-shadow"
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
                className="w-full h-auto aspect-[3/4] object-cover photo-monochrome transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />

              {/* Click to inspect badge */}
              <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#111111]/80 text-[#F4EDE1] px-2 py-1 font-mono text-[8px] tracking-[0.2em] flex items-center gap-1.5 backdrop-blur-xs">
                <ZoomIn size={11} />
                <span>INSPECT PLATE</span>
              </div>

              {/* Film edge simulation overlay */}
              <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between pointer-events-none text-[8.5px] font-mono text-[#F4EDE1]/80 tracking-[0.25em] uppercase mix-blend-difference">
                <span>EXP 01 // 35MM</span>
                <span>SHUTTER SYNC // ACTIVE OBSERVER</span>
              </div>
            </div>

            {/* Supporting Editorial Microcopy */}
            <div className="mt-3 flex items-center justify-between text-[8.5px] font-sans tracking-[0.26em] text-[#44413C]/80 uppercase">
              <div className="flex items-center gap-2">
                <span>FRAMES</span>
                <span className="text-[#111111]/25">•</span>
                <span>PEOPLE</span>
                <span className="text-[#111111]/25">•</span>
                <span>PLACES</span>
                <span className="text-[#111111]/25">•</span>
                <span>FEELINGS</span>
              </div>

              <div className="font-mono text-[8px] text-[#44413C]/60">
                <span>SAME EYES / DIFFERENT STORIES</span>
              </div>
            </div>

            <div className="mt-1 flex items-center justify-between text-[8px] font-mono tracking-[0.2em] text-[#44413C]/50 uppercase">
              <span>PORTRAIT // ARCHIVAL PLATE 01</span>
              <span>A QUIETER PERSPECTIVE / A DEEPER STORY</span>
            </div>

          </div>
        </div>

      </div>

      {/* ============================================================ */}
      {/* SPREAD 2: THE PHILOSOPHY & INTROSPECTIVE COUNTERPOINT        */}
      {/* ============================================================ */}
      <div className="grid grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center py-16 xl:py-20 border-b border-[#111111]/20">
        
        {/* Left Column (Col 1-5): FIG. 02 Introspective Counterpoint Plate */}
        <div className="col-span-5 pr-2">
          <div className="relative group">
            
            {/* Top Annotation */}
            <div className="flex items-center justify-between pb-2 text-[9px] font-mono tracking-[0.2em] text-[#44413C]/65 uppercase border-b border-[#111111]/15">
              <div className="flex items-center gap-2">
                <RegistrationCross />
                <span>FIG. 02 // INTROSPECTIVE COUNTERPOINT</span>
              </div>
              <span>PLATE NO. 02</span>
            </div>

            {/* Sharp Architectural Frame with Crop Marks & Smooth Crossfade */}
            <CounterpointFrame
              onImageClick={onImageClick}
              showInspectBadge={true}
              className="mt-2.5 aspect-[4/5]"
            />

            {/* Bottom Caption */}
            <div className="mt-3 flex items-center justify-between text-[8.5px] font-mono tracking-[0.22em] text-[#44413C]/70 uppercase">
              <span>PORTRAIT // ARCHIVAL PLATE 02</span>
              <span>SILENT OBSERVER</span>
            </div>

          </div>
        </div>

        {/* Right Column (Col 6-12): Massive Typographic Philosophy */}
        <div className="col-span-7 pl-2 space-y-6 xl:space-y-8">
          
          {/* Micro Section Marker */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9.5px] tracking-[0.28em] text-[#111111] uppercase font-semibold">
              MORE THAN PHOTOGRAPHS
            </span>
            <span className="h-[1px] w-12 bg-[#111111]/30" />
            <TechnicalAnnotation text="STATEMENT OF INTENT // PHILOSOPHY" />
          </div>

          {/* Primary Statement Headline */}
          <h2 className="font-serif editorial-heading-stroke text-3xl xl:text-4xl 2xl:text-5xl text-[#111111] font-normal leading-[1.14] uppercase tracking-tight">
            I DON'T BELIEVE GREAT PHOTOGRAPHY<br />
            IS ABOUT SIMPLY BEING IN THE RIGHT<br />
            PLACE WITH A CAMERA.
          </h2>

          {/* Seeing First Quote */}
          <p className="font-editorial italic text-2xl xl:text-3xl text-[#111111]/90 leading-snug">
            It's about seeing something before everyone else does.
          </p>

          {/* Contextual Dual-column Archival Note */}
          <div className="pt-8 border-t border-[#111111]/15 grid grid-cols-2 gap-8 text-[9px] font-mono tracking-[0.22em] text-[#44413C]/70 uppercase">
            <div className="space-y-1.5">
              <span className="block font-semibold text-[#111111]">ANTICIPATION OVER REACTION</span>
              <p className="normal-case font-editorial text-sm text-[#44413C] tracking-normal leading-relaxed">
                Reading body language and subtle ambient energy to capture genuine emotional truth before it dissolves.
              </p>
            </div>
            <div className="space-y-1.5">
              <span className="block font-semibold text-[#111111]">UNCOMPROMISED ARCHIVE</span>
              <p className="normal-case font-editorial text-sm text-[#44413C] tracking-normal leading-relaxed">
                Classic medium and deliberate composition created to endure far beyond seasonal social media aesthetics.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* SPREAD 3: METHODOLOGY & CORE CODEX (6 PRINCIPLES GRID)       */}
      {/* ============================================================ */}
      <div className="py-16 xl:py-20 border-b border-[#111111]/20">
        
        {/* Section Header */}
        <div className="pb-8 xl:pb-12 border-b border-[#111111]/25 flex items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <RegistrationCross />
              <span className="font-mono text-[9.5px] uppercase tracking-[0.25em] text-[#111111] font-semibold">
                METHODOLOGY // CORE CODEX
              </span>
              <span className="h-[1px] w-10 bg-[#111111]/30" />
              <TechnicalAnnotation text="SIX UNBROKEN TENETS" />
            </div>

            <h2 className="font-serif editorial-heading-stroke text-3xl xl:text-4xl 2xl:text-5xl text-[#111111] font-normal tracking-tight uppercase leading-tight">
              {PRINCIPLES_HEADING}
            </h2>
          </div>

          <div className="flex items-center gap-4 text-[9.5px] font-mono tracking-[0.25em] text-[#44413C]/65 uppercase">
            <span>VOL. 02</span>
            <span>•</span>
            <span>100% DISCIPLINE</span>
            <span>•</span>
            <span>STANDARD OF CRAFT</span>
          </div>
        </div>

        {/* 2-Column Editorial Monograph Grid */}
        <div className="grid grid-cols-2 gap-x-12 xl:gap-x-16 divide-y divide-[#111111]/15">
          {PRINCIPLES.map((principle, index) => (
            <article 
              key={principle.number} 
              className={`py-8 xl:py-10 group ${index % 2 === 0 ? 'pr-4' : 'pl-4'} ${index < 2 ? 'border-t-0' : ''}`}
            >
              <div className="space-y-3">
                {/* Number + Headline */}
                <div className="flex items-baseline gap-4">
                  <span className="font-serif editorial-heading-stroke text-4xl xl:text-5xl text-[#111111] font-light tracking-tight select-none">
                    {principle.number}
                  </span>
                  <h3 className="font-sans text-xs xl:text-sm font-semibold text-[#111111] tracking-[0.16em] uppercase leading-snug">
                    {principle.headline}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-editorial text-base xl:text-lg text-[#44413C] leading-relaxed pl-12 xl:pl-14">
                  {principle.description}
                </p>

                {/* Sub-annotation */}
                <div className="pl-12 xl:pl-14 pt-1 flex items-center gap-2 text-[8px] font-mono tracking-[0.2em] text-[#44413C]/40 uppercase select-none">
                  <span>RULE REF: PR-0{index + 1}</span>
                  <span>//</span>
                  <span>UNCOMPROMISED STANDARD</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

    </div>
  );
};
