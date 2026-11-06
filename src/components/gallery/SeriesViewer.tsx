import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GallerySeries } from '../../types/gallery';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { OptimizedPicture } from '../common/OptimizedPicture';
import { preloadSeriesImages } from '../../utils/imageUrl';

interface SeriesViewerProps {
  series: GallerySeries | null;
  onClose: () => void;
  originRect?: DOMRect | null;
}

export const SeriesViewer: React.FC<SeriesViewerProps> = ({
  series,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [dragDeltaX, setDragDeltaX] = useState<number>(0);
  const [dragDeltaY, setDragDeltaY] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const pointerStartRef = useRef<{ 
    x: number; 
    y: number; 
    time: number;
    isRightEdge: boolean;
    isLeftEdge: boolean;
  } | null>(null);
  const gestureAxis = useRef<'horizontal' | 'vertical' | null>(null);
  const isClosingRef = useRef<boolean>(false);

  // Complete page scroll lock while viewer is open to ensure the underlying grid cannot scroll
  useEffect(() => {
    if (!series) return;

    const originalOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [series]);

  // Close helper that manages browser history cleanly
  const dismissViewer = useCallback(() => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;

    if (typeof window !== 'undefined' && window.location.hash.startsWith('#series-')) {
      window.history.back();
      // Safety timeout ensures onClose is invoked if browser suppresses or delays popstate
      setTimeout(() => {
        onClose();
      }, 70);
    } else {
      onClose();
    }
  }, [onClose]);

  // Push history state on mount and listen to system back gesture (popstate)
  useEffect(() => {
    if (!series) return;
    
    isClosingRef.current = false;
    setCurrentIndex(0);
    setDragDeltaX(0);
    setDragDeltaY(0);
    preloadSeriesImages(series);

    const targetHash = `#series-${series.id}`;
    if (typeof window !== 'undefined' && window.location.hash !== targetHash) {
      window.history.pushState({ modal: 'series-viewer', seriesId: series.id }, '', targetHash);
    }

    const handlePopState = () => {
      isClosingRef.current = true;
      onClose();
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [series, onClose]);

  const totalImages = series?.images?.length || 0;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalImages - 1;

  const goToNext = useCallback(() => {
    if (!series || totalImages <= 1) return;
    setCurrentIndex((prev) => (prev < totalImages - 1 ? prev + 1 : prev));
  }, [series, totalImages]);

  const goToPrev = useCallback(() => {
    if (!series || totalImages <= 1) return;
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, [series, totalImages]);

  // Keyboard navigation: Escape to close, Left/Right arrows to navigate
  useEffect(() => {
    if (!series) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dismissViewer();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [series, goToNext, goToPrev, dismissViewer]);

  // Pointer & Touch Start
  const handlePointerDown = (clientX: number, clientY: number) => {
    const isRightEdge = clientX > (window.innerWidth - 65);
    const isLeftEdge = clientX < 65;

    pointerStartRef.current = {
      x: clientX,
      y: clientY,
      time: performance.now(),
      isRightEdge,
      isLeftEdge,
    };
    gestureAxis.current = null;
    setIsDragging(true);
  };

  // Pointer & Touch Move
  const handlePointerMove = (clientX: number, clientY: number, e?: React.TouchEvent | React.PointerEvent) => {
    if (!pointerStartRef.current) return;

    const deltaX = clientX - pointerStartRef.current.x;
    const deltaY = clientY - pointerStartRef.current.y;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    // Detect gesture orientation once
    if (gestureAxis.current === null) {
      if (absX > 8 || absY > 8) {
        gestureAxis.current = absX >= absY ? 'horizontal' : 'vertical';
      }
    }

    if (gestureAxis.current === 'horizontal') {
      if (e && 'cancelable' in e && e.cancelable) {
        e.preventDefault();
      }

      // If at first photo and swiping right, responsive dismiss movement
      let dampedDeltaX = deltaX;
      if (isFirst && deltaX > 0) {
        dampedDeltaX = deltaX * 0.8;
      } else if (isLast && deltaX < 0) {
        dampedDeltaX = deltaX * 0.35;
      }

      setDragDeltaX(dampedDeltaX);
      setDragDeltaY(0);
    } else if (gestureAxis.current === 'vertical') {
      // Swiping vertically down to dismiss
      if (deltaY > 0) {
        if (e && 'cancelable' in e && e.cancelable) {
          e.preventDefault();
        }
        setDragDeltaY(deltaY * 0.85);
        setDragDeltaX(0);
      }
    }
  };

  // Pointer & Touch End
  const handlePointerUp = (clientX: number, clientY: number) => {
    if (!pointerStartRef.current) return;

    const deltaX = clientX - pointerStartRef.current.x;
    const deltaY = clientY - pointerStartRef.current.y;
    const deltaTime = Math.max(performance.now() - pointerStartRef.current.time, 1);
    const velocityX = deltaX / deltaTime; // px per ms
    const velocityY = deltaY / deltaTime;

    const containerWidth = containerRef.current?.offsetWidth || window.innerWidth;
    const distanceThreshold = Math.min(containerWidth * 0.15, 68);
    const velocityThreshold = 0.32;
    const isRightEdge = pointerStartRef.current.isRightEdge;

    if (gestureAxis.current === 'vertical') {
      // Swipe down to dismiss
      if (deltaY > 75 || velocityY > 0.38) {
        dismissViewer();
        return;
      }
    } else if (gestureAxis.current === 'horizontal') {
      // 1. User swiped right at first photo to go back to grid gallery
      if (isFirst && (deltaX > distanceThreshold || velocityX > velocityThreshold)) {
        dismissViewer();
        return;
      }

      // 2. User swiped on the right side / right edge to go back (Android system back emulation)
      if (isRightEdge && (Math.abs(deltaX) > 35 || Math.abs(velocityX) > 0.28)) {
        dismissViewer();
        return;
      }

      // 3. Normal navigation between photos
      if (deltaX < -distanceThreshold || velocityX < -velocityThreshold) {
        if (!isLast) {
          goToNext();
        }
      } else if (deltaX > distanceThreshold || velocityX > velocityThreshold) {
        if (!isFirst) {
          goToPrev();
        }
      }
    }

    // Reset interaction state
    pointerStartRef.current = null;
    gestureAxis.current = null;
    setIsDragging(false);
    setDragDeltaX(0);
    setDragDeltaY(0);
  };

  if (!series || totalImages === 0) return null;

  const formattedCurrent = String(currentIndex + 1).padStart(2, '0');
  const formattedTotal = String(totalImages).padStart(2, '0');

  return (
    <AnimatePresence>
      <motion.div
        key="series-viewer-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="fixed inset-0 z-50 flex flex-col justify-between select-none overflow-hidden bg-[#0A0A0A]"
        style={{ 
          backgroundColor: '#0A0A0A',
        }}
        onClick={dismissViewer}
        onTouchMove={(e) => {
          // Block touchmove from leaking to document body
          e.stopPropagation();
        }}
        role="dialog"
        aria-modal="true"
        aria-label={`Photo series ${series.title}`}
      >
        {/* Top Editorial Navigation Bar — 100% Solid Opaque */}
        <div 
          className="w-full px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between border-b border-white/10 text-white z-30 bg-[#0A0A0A]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Left: Series Number & Context */}
          <div className="flex items-center space-x-3">
            <span className="font-mono text-[9px] sm:text-[10.5px] tracking-[0.24em] uppercase text-white/70">
              SERIES {series.number}
            </span>
            <span className="text-white/20 text-xs hidden sm:inline">/</span>
            <span className="font-serif text-xs sm:text-sm tracking-wide text-white uppercase hidden sm:inline">
              {series.title}
            </span>
          </div>

          {/* Center: Frame Count Indicator (02 / 04) */}
          <div className="font-mono text-[10px] sm:text-[11px] tracking-[0.28em] text-white/90 font-medium">
            {formattedCurrent} <span className="text-white/35">/</span> {formattedTotal}
          </div>

          {/* Right: Minimal Close Control */}
          <button
            type="button"
            onClick={dismissViewer}
            className="flex items-center space-x-1.5 text-white/70 hover:text-white transition-colors p-1.5 focus:outline-hidden cursor-pointer"
            aria-label="Close Series Viewer and return to gallery"
          >
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase hidden sm:inline">
              CLOSE
            </span>
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* ============================================================ */}
        {/* CENTER CAROUSEL CANVAS AREA — 100% OPAQUE SOLID CANVAS        */}
        {/* ============================================================ */}
        <div
          ref={containerRef}
          className="relative flex-1 w-full h-full overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y bg-[#0A0A0A]"
          onClick={dismissViewer}
          onTouchStart={(e) => {
            if (e.touches.length === 1) {
              handlePointerDown(e.touches[0].clientX, e.touches[0].clientY);
            }
          }}
          onTouchMove={(e) => {
            if (e.touches.length === 1) {
              handlePointerMove(e.touches[0].clientX, e.touches[0].clientY, e);
            }
          }}
          onTouchEnd={(e) => {
            const touch = e.changedTouches[0];
            if (touch) {
              handlePointerUp(touch.clientX, touch.clientY);
            }
          }}
          onTouchCancel={() => {
            pointerStartRef.current = null;
            gestureAxis.current = null;
            setIsDragging(false);
            setDragDeltaX(0);
            setDragDeltaY(0);
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            handlePointerDown(e.clientX, e.clientY);
          }}
          onMouseMove={(e) => {
            if (pointerStartRef.current) {
              handlePointerMove(e.clientX, e.clientY);
            }
          }}
          onMouseUp={(e) => {
            if (pointerStartRef.current) {
              handlePointerUp(e.clientX, e.clientY);
            }
          }}
          onMouseLeave={() => {
            if (pointerStartRef.current) {
              pointerStartRef.current = null;
              gestureAxis.current = null;
              setIsDragging(false);
              setDragDeltaX(0);
              setDragDeltaY(0);
            }
          }}
        >
          {/* Subtle Left Navigation Button (Desktop) */}
          {!isFirst && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 p-3 text-white/60 hover:text-white bg-[#111111]/80 hover:bg-[#111111] transition-all rounded-full focus:outline-hidden cursor-pointer"
              aria-label="Previous photograph"
            >
              <ChevronLeft size={30} strokeWidth={1.5} />
            </button>
          )}

          {/* Subtle Right Navigation Button (Desktop) */}
          {!isLast && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 p-3 text-white/60 hover:text-white bg-[#111111]/80 hover:bg-[#111111] transition-all rounded-full focus:outline-hidden cursor-pointer"
              aria-label="Next photograph"
            >
              <ChevronRight size={30} strokeWidth={1.5} />
            </button>
          )}

          {/* Continuous Slide Track — Solid Opaque Photos */}
          <div
            className="flex flex-row h-full w-full items-center"
            style={{
              transform: `translate3d(calc(-${currentIndex * 100}% + ${dragDeltaX}px), ${dragDeltaY}px, 0)`,
              transition: isDragging ? 'none' : 'transform 260ms cubic-bezier(0.16, 1, 0.3, 1)',
              willChange: 'transform',
            }}
          >
            {series.images.map((image, idx) => {
              const isCurrent = idx === currentIndex;
              const isNearby = Math.abs(idx - currentIndex) <= 1;

              return (
                <div
                  key={image.id || idx}
                  className="w-full h-full shrink-0 flex flex-col items-center justify-center px-4 sm:px-12 md:px-16 lg:px-24 py-2 sm:py-6 bg-[#0A0A0A]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative flex flex-col items-center justify-center max-w-[92vw] max-h-[80vh] sm:max-h-[82vh]">
                    {/* Photograph Container — Solid Pure Black Background (No transparency) */}
                    <div className="relative shadow-2xl overflow-hidden flex items-center justify-center bg-black border border-white/10 rounded-xs">
                      {isNearby ? (
                        <OptimizedPicture
                          src={image.url}
                          alt={image.alt || `${series.title} photo ${idx + 1}`}
                          width={1800}
                          height={1350}
                          targetWidth={1800}
                          loading="eager"
                          decoding="async"
                          fetchPriority={isCurrent ? 'high' : 'auto'}
                          className="max-w-[92vw] max-h-[74vh] sm:max-h-[76vh] object-contain block select-none pointer-events-none opacity-100 bg-black"
                        />
                      ) : (
                        <div className="w-[300px] h-[400px] bg-black" />
                      )}
                    </div>

                    {/* Micro Editorial Caption directly under photograph */}
                    {image.caption && (
                      <div className="mt-3 text-center px-4 max-w-xl select-none">
                        <p className="font-editorial italic text-xs sm:text-sm text-white/80 leading-relaxed">
                          {image.caption}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar — 100% Solid Opaque */}
        <div 
          className="w-full px-4 sm:px-8 py-3 flex items-center justify-between border-t border-white/10 text-white/60 text-[8.5px] sm:text-[9.5px] font-mono tracking-[0.24em] uppercase z-30 bg-[#0A0A0A]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Series Location / Date */}
          <div className="flex items-center">
            <span>{series.location || 'ARCHIVE'}</span>
            {series.date && (
              <>
                <span className="mx-2 opacity-40">•</span>
                <span className="opacity-70">{series.date}</span>
              </>
            )}
          </div>

          {/* Interaction Guide (Desktop) */}
          <div className="hidden sm:flex items-center space-x-4 text-white/40">
            <span>SWIPE / ARROWS TO BROWSE</span>
            <span>•</span>
            <span>SWIPE RIGHT / ESC TO GO BACK</span>
          </div>

          {/* Mobile Fast Tap Controls */}
          <div className="flex sm:hidden items-center space-x-4">
            <button
              type="button"
              onClick={goToPrev}
              disabled={isFirst}
              className={`text-white transition-opacity py-1 px-1.5 cursor-pointer ${
                isFirst ? 'opacity-20 pointer-events-none' : 'opacity-85 active:opacity-100'
              }`}
            >
              PREV
            </button>
            <span className="text-white/30">/</span>
            <button
              type="button"
              onClick={goToNext}
              disabled={isLast}
              className={`text-white transition-opacity py-1 px-1.5 cursor-pointer ${
                isLast ? 'opacity-20 pointer-events-none' : 'opacity-85 active:opacity-100'
              }`}
            >
              NEXT
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
