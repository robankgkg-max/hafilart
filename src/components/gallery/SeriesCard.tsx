import React from 'react';
import { GallerySeries } from '../../types/gallery';
import { OptimizedPicture } from '../common/OptimizedPicture';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { preloadSeriesImages } from '../../utils/imageUrl';

interface SeriesCardProps {
  series: GallerySeries;
  onOpenSeries: (series: GallerySeries, e: React.MouseEvent<HTMLButtonElement>) => void;
  priority?: boolean;
}

/**
 * High-performance vector multi-post carousel icon.
 * Zero HTTP request overhead, instant render, retina-sharp at any pixel density.
 */
const MultiPhotoBadge: React.FC = () => (
  <div 
    className="relative flex items-center justify-center p-1 sm:p-1.5 rounded-sm sm:rounded-md bg-black/50 backdrop-blur-xs border border-white/25 shadow-[0_2px_8px_rgba(0,0,0,0.5)] select-none"
    aria-hidden="true"
  >
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Background stacked photo */}
      <rect x="7" y="3" width="14" height="14" rx="2" className="fill-white/30 stroke-white/90" />
      {/* Foreground primary photo */}
      <rect x="3" y="7" width="14" height="14" rx="2" className="fill-black/75 stroke-white" />
    </svg>
  </div>
);

export const SeriesCard: React.FC<SeriesCardProps> = ({ 
  series, 
  onOpenSeries,
  priority = false
}) => {
  const [containerRef, isInView] = useIntersectionObserver<HTMLDivElement>({
    rootMargin: '400px 0px',
    triggerOnce: true,
  });

  const shouldRenderImage = priority || isInView;
  const hasMultipleImages = series.images && series.images.length > 1;

  // Preload series photos immediately on hover or touch to guarantee instant open & swipe
  const handlePreload = () => {
    preloadSeriesImages(series);
  };

  return (
    <button
      type="button"
      onClick={(e) => onOpenSeries(series, e)}
      onMouseEnter={handlePreload}
      onTouchStart={handlePreload}
      className="group relative w-full block overflow-hidden text-left focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#111111] bg-[#111111] cursor-pointer"
      aria-label={`Open photographic series ${series.number}: ${series.title}`}
    >
      {/* Container with responsive aspect ratio matching reference and fixed dimensions to prevent CLS */}
      <div 
        ref={containerRef}
        className="relative w-full aspect-[4/5] lg:aspect-[16/10] overflow-hidden bg-[#1A1918]"
      >
        {shouldRenderImage ? (
          <OptimizedPicture
            src={series.coverImage}
            alt={`Series ${series.number} — ${series.title}`}
            width={800}
            height={500}
            targetWidth={800}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03] opacity-95 group-hover:opacity-100 will-change-transform"
          />
        ) : (
          <div className="w-full h-full bg-[#1A1918]" />
        )}

        {/* Cinematic contrast gradient scrim on bottom for crisp typographic legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none transition-opacity duration-300 group-hover:from-black/85" />

        {/* Minimal Editorial Overlay Text (Bottom Left) */}
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 select-none text-white pointer-events-none">
          <div className="font-mono text-[8.5px] sm:text-[10px] tracking-[0.22em] uppercase font-normal text-white drop-shadow-sm">
            {series.title}
          </div>
        </div>

        {/* Multi-image carousel indicator */}
        {hasMultipleImages && (
          <div 
            className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10 pointer-events-none transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-105"
            aria-hidden="true"
          >
            <MultiPhotoBadge />
          </div>
        )}
      </div>
    </button>
  );
};
