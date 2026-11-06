import React, { useState } from 'react';
import { WeddingDesktopCollage } from './WeddingDesktopCollage';
import { WeddingMobileCollage } from './WeddingMobileCollage';
import { X } from 'lucide-react';
import { OptimizedPicture } from './common/OptimizedPicture';

export const WeddingSection: React.FC = () => {
  const [activeLightbox, setActiveLightbox] = useState<{ url: string; caption?: string } | null>(null);

  const handleImageClick = (url: string, caption?: string) => {
    setActiveLightbox({ url, caption });
  };

  return (
    <section 
      id="section-03-weddings" 
      className="relative w-full bg-[#F4EDE1] py-4 sm:py-10 lg:py-16 pb-16 sm:pb-24 lg:pb-32"
    >
      {/* Editorial Publication Canvas Frame (Edge-to-edge on mobile to maximize space, padded on desktop) */}
      <div className="w-full max-w-[1440px] mx-auto px-0 sm:px-4 lg:px-8">
        
        {/* Outer Fine Editorial Border */}
        <div className="border-y sm:border border-[#111111]/25 bg-[#F4EDE1] photo-card-shadow overflow-hidden">
          
          {/* Desktop Single-Screen Spread (lg and up) */}
          <div className="hidden lg:block">
            <WeddingDesktopCollage onImageClick={handleImageClick} />
          </div>

          {/* Mobile Vertical Editorial Spread (< lg) */}
          <div className="block lg:hidden">
            <WeddingMobileCollage onImageClick={handleImageClick} />
          </div>

        </div>

      </div>

      {/* High-Resolution Monograph Darkroom Lightbox */}
      {activeLightbox && (
        <div 
          className="fixed inset-0 z-50 bg-[#111111]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveLightbox(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-[#F4EDE1] p-4 sm:p-6 border border-[#111111]/30 photo-card-shadow flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#111111]/15 text-[9px] font-mono tracking-[0.2em] text-[#4A4741] uppercase">
              <span>HAFIL.M // WEDDING EDITORIAL ARCHIVE</span>
              <button
                type="button"
                onClick={() => setActiveLightbox(null)}
                className="p-1 text-[#111111] hover:opacity-60 transition-opacity focus:outline-hidden"
                aria-label="Close Lightbox"
              >
                <X size={16} />
              </button>
            </div>

            <div className="overflow-hidden flex-1 flex items-center justify-center bg-[#EAE6DD] max-h-[72vh]">
              <OptimizedPicture
                src={activeLightbox.url}
                alt={activeLightbox.caption || "Wedding photograph"}
                width={1200}
                height={900}
                loading="eager"
                decoding="async"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {activeLightbox.caption && (
              <div className="pt-3 text-center">
                <p className="font-editorial italic text-base sm:text-lg text-[#111111]/90">
                  {activeLightbox.caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
