/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MobileIntroVideo } from './components/MobileIntroVideo';
import { EditorialIntroCover } from './components/EditorialIntroCover';
import { EditorialHeader } from './components/EditorialHeader';
import { ClosingManifesto } from './components/ClosingManifesto';
import { AboutSection } from './components/AboutSection';
import { WeddingArchiveSection } from './components/gallery/WeddingArchiveSection';
import { EditorialShowcaseSection } from './components/EditorialShowcaseSection';
import { FashionArchiveSection } from './components/gallery/FashionArchiveSection';
import { ConnectCTASection } from './components/ConnectCTASection';

export default function App() {
  const [isIntroActive, setIsIntroActive] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const hash = window.location.hash;
        if (
          sessionStorage.getItem('hafil_portfolio_entered') === 'true' ||
          hash.includes('portfolio') ||
          hash.includes('section-') ||
          hash.includes('series-')
        ) {
          return false;
        }
      } catch {}
    }
    return true;
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  // Mobile-only 10s intro video state (strict device check: < 768px only)
  const [showMobileVideo, setShowMobileVideo] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const hash = window.location.hash;
        if (
          sessionStorage.getItem('hafil_video_completed') === 'true' ||
          sessionStorage.getItem('hafil_portfolio_entered') === 'true' ||
          hash.includes('portfolio') ||
          hash.includes('series-')
        ) {
          return false;
        }
      } catch {}
      return window.innerWidth < 768;
    }
    return false;
  });

  // Preserve user scroll position across browser back gestures
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Ensure intro video is strictly restricted to mobile (< 768px) and never displays on desktop or tablet
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const checkViewport = () => {
      if (window.innerWidth >= 768 && showMobileVideo) {
        setShowMobileVideo(false);
      }
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, [showMobileVideo]);

  // Complete page scroll lock while intro video or cover is active
  useEffect(() => {
    if (isIntroActive || showMobileVideo) {
      // Lock html and body overflow
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';

      // Intercept wheel, touch gestures, and keyboard navigation keys
      const preventScroll = (e: Event) => {
        if (isIntroActive || showMobileVideo) {
          e.preventDefault();
        }
      };

      const preventKeyScroll = (e: KeyboardEvent) => {
        if (
          (isIntroActive || showMobileVideo) &&
          ['ArrowDown', 'ArrowUp', 'Space', 'PageDown', 'PageUp', 'Home', 'End'].includes(e.code)
        ) {
          e.preventDefault();
        }
      };

      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      window.addEventListener('keydown', preventKeyScroll, { passive: false });

      return () => {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
        window.removeEventListener('keydown', preventKeyScroll);
      };
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  }, [isIntroActive, showMobileVideo]);

  const handleMobileVideoComplete = () => {
    try {
      sessionStorage.setItem('hafil_video_completed', 'true');
    } catch {}
    setShowMobileVideo(false);
  };

  const handleEnterPortfolio = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    try {
      sessionStorage.setItem('hafil_portfolio_entered', 'true');
      sessionStorage.setItem('hafil_video_completed', 'true');
    } catch {}

    // Reset scroll to the very top before crossfading
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Refined cinematic crossfade of 550ms (within requested 400–700ms range)
    setTimeout(() => {
      setIsIntroActive(false);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

      // Establish initial portfolio history anchor
      if (typeof window !== 'undefined' && (!window.location.hash || window.location.hash === '#portfolio')) {
        window.history.replaceState({ screen: 'portfolio' }, '', '#portfolio');
      }
    }, 550);
  };

  const handleReturnToIntro = () => {
    try {
      sessionStorage.removeItem('hafil_portfolio_entered');
    } catch {}
    setIsIntroActive(true);
    setIsTransitioning(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <div className={`min-h-[100dvh] bg-[#F4EDE1] text-[#111111] antialiased film-grain selection:bg-[#111111] selection:text-[#F4EDE1] ${isIntroActive || showMobileVideo ? 'min-h-[100dvh] h-[100dvh] overflow-hidden' : ''}`}>
      {/* 00 — Mobile-Only Intro Video (strictly rendered on mobile viewports < 768px) */}
      {showMobileVideo && (
        <MobileIntroVideo onVideoComplete={handleMobileVideoComplete} />
      )}

      {/* 01 — Fullscreen Standalone Editorial Cover Screen */}
      {isIntroActive && (
        <EditorialIntroCover 
          onEnterPortfolio={handleEnterPortfolio} 
          isExiting={isTransitioning}
        />
      )}

      {/* Main Publication Flow — Section 02 Portfolio begins here */}
      <div 
        id="portfolio-entry" 
        className={`relative w-full ${
          isIntroActive && !isTransitioning 
            ? 'hidden opacity-0 pointer-events-none' 
            : isTransitioning
              ? 'block opacity-100 transition-opacity duration-600 ease-out'
              : 'block opacity-100'
        }`}
        aria-hidden={isIntroActive && !isTransitioning}
      >
        {/* Editorial Header — sticks upon entering portfolio (Screenshot 2) */}
        <EditorialHeader onReturnToIntro={handleReturnToIntro} />

        <main className="w-full">
          {/* Closing Manifesto — Placed at the top, above the second section across all devices */}
          <ClosingManifesto />

          {/* Section 02: Who is Hafil.M */}
          <AboutSection />

          {/* Section 04: Wedding Archive — Interactive Editorial Series Gallery */}
          <WeddingArchiveSection />

          {/* Next Section: Editorial Visual Feature / Showcase */}
          <EditorialShowcaseSection />

          {/* Section: Fashion Archive — Curated Fashion Editorial Gallery */}
          <FashionArchiveSection />

          {/* Section 05: Final Editorial CTA — Connect With Me */}
          <ConnectCTASection />
        </main>
      </div>
    </div>
  );
}
