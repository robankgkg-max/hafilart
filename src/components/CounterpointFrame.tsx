import React, { useState, useEffect, useRef } from 'react';
import { CornerCropMarks } from './EditorialMarks';
import { ZoomIn } from 'lucide-react';
import { SECONDARY_IMAGES } from '../data';
import { getOptimizedImageUrl } from '../utils/imageUrl';

interface CounterpointFrameProps {
  onImageClick?: (imageSrc: string) => void;
  showInspectBadge?: boolean;
  className?: string;
}

export const CounterpointFrame: React.FC<CounterpointFrameProps> = ({
  onImageClick,
  showInspectBadge = false,
  className = '',
}) => {
  // Index 0: sun_day.webp (first image)
  // Index 1: guy holding the award
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (isPaused) return;

    // After 3 seconds, smoothly transitions to the next image
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const currentSrc = SECONDARY_IMAGES[currentIndex];

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const touch = e.changedTouches[0];
    if (touch) {
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;
      if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe detected - toggle image immediately with smooth transition
        setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
      }
    }
    touchStartRef.current = null;
  };

  const img0Optimized = getOptimizedImageUrl(SECONDARY_IMAGES[0], 1200);
  const img1Optimized = getOptimizedImageUrl(SECONDARY_IMAGES[1], 1400);

  return (
    <div
      onClick={() => onImageClick?.(currentSrc)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`relative overflow-hidden bg-[#111111] cursor-pointer group photo-card-shadow select-none touch-pan-y ${className}`}
    >
      <CornerCropMarks className="z-20 pointer-events-none" />

      {/* Frame 01: sun_day.webp (First Image) */}
      <div
        className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
          currentIndex === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <img
          src={img0Optimized}
          alt="Hafil.M — Introspective quiet reflection"
          width={1121}
          height={1403}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>

      {/* Frame 02: National Fame Award presentation (Second Image) */}
      <div
        className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
          currentIndex === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <img
          src={img1Optimized}
          alt="Hafil.M — National Fame Award recipient"
          width={1440}
          height={1799}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>

      {/* Subtle Frame Progress Indicators */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-[#111111]/70 backdrop-blur-xs px-2 py-0.5 border border-white/15 text-[#F4EDE1] font-mono text-[8px] tracking-[0.2em] pointer-events-none">
        <span className={currentIndex === 0 ? 'text-white font-semibold' : 'text-white/40'}>01</span>
        <span className="text-white/30">/</span>
        <span className={currentIndex === 1 ? 'text-white font-semibold' : 'text-white/40'}>02</span>
      </div>

      {showInspectBadge && (
        <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#111111]/80 text-[#F4EDE1] px-2 py-1 font-mono text-[8px] tracking-[0.2em] flex items-center gap-1.5 backdrop-blur-xs">
          <ZoomIn size={11} />
          <span>INSPECT PLATE</span>
        </div>
      )}

      {/* Inside Monograph Captions with smooth fade */}
      <div className="absolute bottom-2.5 left-3 right-3 z-20 flex items-center justify-between pointer-events-none text-[8.5px] font-mono text-[#F4EDE1]/80 tracking-[0.2em] uppercase mix-blend-difference">
        <span>{currentIndex === 0 ? 'INTENTIONAL STILLNESS' : 'NATIONAL RECOGNITION'}</span>
        <span>{currentIndex === 0 ? 'OBSERVER AT REST' : 'EXCELLENCE // 2024'}</span>
      </div>
    </div>
  );
};
