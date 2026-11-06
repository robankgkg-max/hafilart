import React from 'react';

interface StampProps {
  className?: string;
  size?: number;
}

export const EmbroideryStamp: React.FC<StampProps> = ({ className = '', size = 110 }) => {
  return (
    <div 
      className={`inline-flex items-center justify-center select-none pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 120 120"
        width={size}
        height={size}
        className="w-full h-full text-[#111111]/70"
      >
        {/* Outer Circular Rule */}
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="2 1"
          opacity="0.65"
        />

        {/* Inner Continuous Thin Circle */}
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.8"
        />

        {/* Curved Path for Top Arc: "A STUDY" */}
        <path
          id="topArcPath"
          d="M 22 60 A 38 38 0 0 1 98 60"
          fill="none"
        />

        {/* Curved Path for Bottom Arc: "AND LIGHT" */}
        <path
          id="bottomArcPath"
          d="M 98 60 A 38 38 0 0 1 22 60"
          fill="none"
        />

        {/* Arced Text: A STUDY */}
        <text className="font-mono text-[8px] tracking-[0.32em] uppercase fill-current">
          <textPath href="#topArcPath" startOffset="50%" textAnchor="middle">
            A STUDY
          </textPath>
        </text>

        {/* Center Text: IN LOVE with subtle dashes */}
        <line x1="38" y1="52" x2="48" y2="52" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
        <line x1="72" y1="52" x2="82" y2="52" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
        <text
          x="60"
          y="63"
          textAnchor="middle"
          className="font-mono text-[7.5px] tracking-[0.3em] uppercase fill-current font-medium"
        >
          IN LOVE
        </text>
        <line x1="44" y1="72" x2="76" y2="72" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />

        {/* Arced Text: AND LIGHT */}
        <text className="font-mono text-[8px] tracking-[0.32em] uppercase fill-current">
          <textPath href="#bottomArcPath" startOffset="50%" textAnchor="middle">
            AND LIGHT
          </textPath>
        </text>
      </svg>
    </div>
  );
};
