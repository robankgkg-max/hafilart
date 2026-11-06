import React from 'react';

interface HandwrittenNoteProps {
  text: string;
  className?: string;
  rotation?: string;
  tapePosition?: 'top' | 'top-right' | 'top-left' | 'none';
  variant?: 'tape-scrap' | 'polaroid-caption';
}

export const HandwrittenNote: React.FC<HandwrittenNoteProps> = ({
  text,
  className = '',
  rotation = 'rotate-[-2deg]',
  tapePosition = 'top',
  variant = 'tape-scrap'
}) => {
  if (variant === 'polaroid-caption') {
    return (
      <div className={`text-center select-none ${className}`}>
        <p className="font-script text-2xl sm:text-3xl text-[#111111]/85 tracking-wide leading-tight">
          {text}
        </p>
      </div>
    );
  }

  return (
    <div 
      className={`relative inline-block bg-[#F8F6F0] p-4 sm:p-5 border border-[#111111]/15 photo-tape-shadow select-none ${rotation} ${className}`}
      style={{
        boxShadow: '0 4px 16px -2px rgba(17,17,17,0.08), 0 1px 4px rgba(17,17,17,0.04)'
      }}
    >
      {/* Semi-transparent washi tape strip */}
      {tapePosition !== 'none' && (
        <div 
          className={`absolute -top-3.5 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-5 washi-tape z-10 ${
            tapePosition === 'top-right' ? 'left-auto -right-2 -translate-x-0 rotate-12' : 
            tapePosition === 'top-left' ? 'left-2 -translate-x-0 -rotate-12' : 'rotate-[1deg]'
          }`}
          aria-hidden="true"
        />
      )}

      {/* Handwritten Text */}
      <div className="relative z-0 text-center">
        {text.split('\n').map((line, idx) => (
          <p 
            key={idx} 
            className="font-script text-xl sm:text-2xl md:text-3xl text-[#111111]/90 tracking-wide leading-snug whitespace-nowrap"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};
