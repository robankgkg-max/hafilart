import React from 'react';
import { OptimizedPicture } from './common/OptimizedPicture';

const MOBILE_TABLET_IMAGE = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789886553/mobile_and_tablet_ddybck.png';
const DESKTOP_IMAGE = 'https://res.cloudinary.com/cbi5mcab/image/upload/v1789886553/laptop_ppvltt.png';

export const EditorialShowcaseSection: React.FC = () => {
  return (
    <section 
      id="section-showcase" 
      className="relative w-full bg-[#F4EDE1] pt-2 sm:pt-4 lg:pt-6 pb-6 sm:pb-8 lg:pb-12 select-none"
    >
      {/* ============================================================ */}
      {/* DESKTOP VIEW (lg and above): Uses Laptop Image with Margins   */}
      {/* Not full-stretch, with comfortable margins for clarity       */}
      {/* ============================================================ */}
      <div className="hidden lg:block w-full max-w-6xl xl:max-w-7xl mx-auto px-8 lg:px-14 xl:px-20">
        <div className="relative overflow-hidden photo-card-shadow border border-[#111111]/15 bg-[#111111]">
          <OptimizedPicture
            src={DESKTOP_IMAGE}
            alt="Editorial Visual Showcase"
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain mx-auto block"
          />
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE & TABLET VIEW (< lg): Uses Mobile/Tablet Portrait Img */}
      {/* ============================================================ */}
      <div className="block lg:hidden w-full max-w-lg md:max-w-2xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden photo-card-shadow border border-[#111111]/15 bg-[#111111]">
          <OptimizedPicture
            src={MOBILE_TABLET_IMAGE}
            alt="Editorial Visual Showcase"
            width={800}
            height={1000}
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain mx-auto block"
          />
        </div>
      </div>
    </section>
  );
};
