import React from 'react';

export const CornerCropMarks: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 12 }) => {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      {/* Top Left */}
      <div className="absolute top-0 left-0">
        <div className="absolute top-0 left-0 w-[1px] h-3 bg-[#111111]/30" />
        <div className="absolute top-0 left-0 h-[1px] w-3 bg-[#111111]/30" />
      </div>
      {/* Top Right */}
      <div className="absolute top-0 right-0">
        <div className="absolute top-0 right-0 w-[1px] h-3 bg-[#111111]/30" />
        <div className="absolute top-0 right-0 h-[1px] w-3 bg-[#111111]/30" />
      </div>
      {/* Bottom Left */}
      <div className="absolute bottom-0 left-0">
        <div className="absolute bottom-0 left-0 w-[1px] h-3 bg-[#111111]/30" />
        <div className="absolute bottom-0 left-0 h-[1px] w-3 bg-[#111111]/30" />
      </div>
      {/* Bottom Right */}
      <div className="absolute bottom-0 right-0">
        <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-[#111111]/30" />
        <div className="absolute bottom-0 right-0 h-[1px] w-3 bg-[#111111]/30" />
      </div>
    </div>
  );
};

export const RegistrationCross: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span className={`inline-block relative w-3 h-3 align-middle opacity-40 select-none ${className}`} aria-hidden="true">
    <span className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#111111] -translate-y-1/2" />
    <span className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#111111] -translate-x-1/2" />
  </span>
);

export const TechnicalAnnotation: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => (
  <span className={`font-mono text-[9px] uppercase tracking-[0.2em] text-[#44413C]/60 select-none ${className}`}>
    {text}
  </span>
);

export const VerticalMicroLabel: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => (
  <div className={`writing-vertical select-none font-sans text-[8px] uppercase tracking-[0.3em] text-[#44413C]/50 ${className}`} style={{ writingMode: 'vertical-rl' }}>
    {text}
  </div>
);

export const FilmEdgeCode: React.FC<{ code?: string; className?: string }> = ({ code = "KODAK 400TX // 36 EXP", className = '' }) => (
  <div className={`flex items-center gap-3 font-mono text-[8px] tracking-[0.25em] text-[#44413C]/40 select-none ${className}`}>
    <span>{code}</span>
    <span className="h-[1px] w-6 bg-[#111111]/20 inline-block" />
    <span>▲ 14A</span>
  </div>
);
