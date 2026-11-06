import React from 'react';
import { WEDDING_SECTION_DATA, WEDDING_IMAGES } from '../weddingData';
import { EmbroideryStamp } from './EmbroideryStamp';
import { CornerCropMarks } from './EditorialMarks';
import { OptimizedPicture } from './common/OptimizedPicture';

interface WeddingMobileCollageProps {
  onImageClick?: (url: string, caption?: string) => void;
}

export const WeddingMobileCollage: React.FC<WeddingMobileCollageProps> = ({ onImageClick }) => {
  return (
    <div className="relative w-full bg-[#F4EDE1] select-none text-[#111111] overflow-hidden">
      
      {/* Top Section Header Bar (Single non-wrapping line with crisp spacing) */}
      <div className="px-3 py-2.5 sm:px-4 sm:py-3 border-b border-[#111111]/15 flex items-center justify-between text-[8px] sm:text-[9px] font-mono tracking-[0.22em] text-[#4A4741] uppercase">
        <span className="font-semibold text-[#111111] shrink-0">HAFIL.M</span>
        <span className="text-[7.5px] sm:text-[8.5px] opacity-75 whitespace-nowrap truncate px-2">
          WEDDING / FASHION / PEOPLE
        </span>
        <span className="text-[7.5px] sm:text-[8.5px] opacity-75 shrink-0 whitespace-nowrap">
          A VISUAL JOURNAL
        </span>
      </div>

      {/* Main Collage Canvas (Dense, edge-to-edge interlocking layout like saint.jpg) */}
      <div className="relative w-full">
        <CornerCropMarks size={16} className="opacity-70 z-30" />

        {/* ============================================================ */}
        {/* UPPER TIER: 2-Column Interlocking Grid (No dead margins)     */}
        {/* Left: Typography + Stamp + Vintage Car + Groom              */}
        {/* Right: Dominant Bridal Veil + Waterfront Villa + Banquet    */}
        {/* ============================================================ */}
        <div className="grid grid-cols-2 gap-[3px] bg-[#111111]/10 p-[3px]">
          
          {/* ==================== LEFT COLUMN ==================== */}
          <div className="flex flex-col gap-[3px]">
            
            {/* Cell 1: Typography Block */}
            <div className="relative bg-[#F4EDE1] p-3 sm:p-4 flex flex-col justify-between min-h-[220px] sm:min-h-[250px]">
              <div>
                {/* 03 Chapter Marker */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-serif text-sm sm:text-base text-[#111111] font-normal">
                    {WEDDING_SECTION_DATA.sectionNumber}
                  </span>
                  <div className="h-[1px] w-8 sm:w-12 bg-[#111111]/35" />
                </div>

                {/* Massive Title: WEDDINGS */}
                <h2 className="font-serif archive-headline text-3xl sm:text-4xl text-[#111111] uppercase tracking-tight leading-[0.92]">
                  {WEDDING_SECTION_DATA.title}
                </h2>

                {/* Handwritten Cursive: the art of remembering */}
                <div className="-mt-1.5 sm:-mt-2 ml-0.5">
                  <span className="font-script text-xl sm:text-2xl text-[#111111]/90 tracking-wide block">
                    {WEDDING_SECTION_DATA.subtitleHandwritten}
                  </span>
                </div>

                {/* Supporting Statement */}
                <div className="mt-3 space-y-0.5">
                  <p className="font-mono text-[7px] sm:text-[8px] tracking-[0.22em] text-[#111111] uppercase font-medium leading-tight">
                    {WEDDING_SECTION_DATA.supportingStatementLine1}
                  </p>
                  <p className="font-mono text-[7px] sm:text-[8px] tracking-[0.22em] text-[#111111] uppercase font-medium leading-tight">
                    {WEDDING_SECTION_DATA.supportingStatementLine2}
                  </p>
                </div>
              </div>

              {/* Circular Postal Stamp overlapping into the layout */}
              <div className="pt-2 flex justify-end -mr-1 relative z-20">
                <EmbroideryStamp size={74} />
              </div>
            </div>

            {/* Cell 2: Vintage Car with Florals */}
            <div 
              onClick={() => onImageClick?.(WEDDING_IMAGES.vintageCarFlowers, "Vintage getaway automobile with white floral arrangement")}
              className="group cursor-pointer overflow-hidden bg-[#EAE6DD] relative aspect-[4/3]"
            >
              <OptimizedPicture
                src={WEDDING_IMAGES.vintageCarFlowers}
                alt="Vintage getaway car with florals"
                width={400}
                height={300}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover photo-editorial-warm transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Cell 3: Groom in Tuxedo */}
            <div 
              onClick={() => onImageClick?.(WEDDING_IMAGES.groomTuxedo, "Groom in black tuxedo portrait with boutonniere")}
              className="group cursor-pointer overflow-hidden bg-[#EAE6DD] relative aspect-[4/5]"
            >
              <OptimizedPicture
                src={WEDDING_IMAGES.groomTuxedo}
                alt="Groom in black tuxedo"
                width={400}
                height={500}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover photo-monochrome transition-transform duration-500 group-hover:scale-105"
              />
            </div>

          </div>

          {/* ==================== RIGHT COLUMN ==================== */}
          <div className="flex flex-col gap-[3px]">
            
            {/* Cell 1: Dominant Bridal Veil Back Portrait */}
            <div 
              onClick={() => onImageClick?.(WEDDING_IMAGES.bridalVeilBack, "Bridal portrait with cascading veil and bare back")}
              className="group cursor-pointer overflow-hidden bg-[#EAE6DD] relative aspect-[3/4]"
            >
              <OptimizedPicture
                src={WEDDING_IMAGES.bridalVeilBack}
                alt="Bridal portrait with veil"
                width={450}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover photo-editorial-warm transition-transform duration-500 group-hover:scale-105"
              />
              {/* Subtle top paper tape */}
              <div className="absolute top-0 left-1/3 w-14 h-3 washi-tape opacity-85 pointer-events-none" />
            </div>

            {/* Cell 2: Lake Como Waterfront Villa */}
            <div 
              onClick={() => onImageClick?.(WEDDING_IMAGES.lakeComoVilla, "Lake Como waterfront villa architecture")}
              className="group cursor-pointer overflow-hidden bg-[#EAE6DD] relative aspect-[16/10]"
            >
              <OptimizedPicture
                src={WEDDING_IMAGES.lakeComoVilla}
                alt="Lake Como waterfront villa"
                width={400}
                height={250}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover photo-editorial-warm transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Cell 3: Candlelit Banquet Dinner Table */}
            <div 
              onClick={() => onImageClick?.(WEDDING_IMAGES.candlelitTable, "Candlelit reception banquet dinner table")}
              className="group cursor-pointer overflow-hidden bg-[#EAE6DD] relative aspect-[4/3]"
            >
              <OptimizedPicture
                src={WEDDING_IMAGES.candlelitTable}
                alt="Candlelit reception table"
                width={400}
                height={300}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover photo-editorial-warm transition-transform duration-500 group-hover:scale-105"
              />
            </div>

          </div>

        </div>

        {/* ============================================================ */}
        {/* CENTER OVERLAPPING HERO: Polaroid Hands with Ring Card       */}
        {/* (Exactly like Byredo perfume bottle in saint.jpg)             */}
        {/* ============================================================ */}
        <div className="relative -mt-44 sm:-mt-52 z-30 flex justify-center px-4 pointer-events-none">
          <div 
            onClick={() => onImageClick?.(WEDDING_IMAGES.intertwinedHandsRing, "Intertwined hands with diamond ring and lace sleeve")}
            className="pointer-events-auto cursor-pointer bg-[#FAF8F2] p-2 sm:p-2.5 pb-4 sm:pb-5 border border-[#111111]/30 photo-card-shadow w-[72%] max-w-[270px] rotate-[-1deg] transition-transform active:scale-95 duration-300"
          >
            {/* Washi tape strip at top */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-3 washi-tape" />

            {/* Photograph */}
            <div className="overflow-hidden border border-[#111111]/15 bg-[#EAE6DD]">
              <OptimizedPicture
                src={WEDDING_IMAGES.intertwinedHandsRing}
                alt="Couple holding hands with ring and lace sleeve"
                width={400}
                height={500}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/5] object-cover photo-editorial-warm"
              />
            </div>

            {/* Handwritten cursive label on Polaroid bottom border */}
            <div className="pt-2 text-center">
              <span className="font-script text-lg sm:text-xl text-[#111111]/90 tracking-wide block">
                {WEDDING_SECTION_DATA.handwrittenNotes.momentsThatLast}
              </span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* LOWER TIER: Cathedral Steps + Perfume + Taped Paper Note     */}
        {/* ============================================================ */}
        <div className="grid grid-cols-12 gap-[3px] bg-[#111111]/10 p-[3px] mt-4 pt-[3px]">
          
          {/* Cathedral Procession Steps (Left ~58% width) */}
          <div className="col-span-7 relative bg-[#EAE6DD] overflow-hidden">
            <div 
              onClick={() => onImageClick?.(WEDDING_IMAGES.cathedralStepsVeil, "Couple walking up cathedral stone steps with cascading veil")}
              className="group cursor-pointer overflow-hidden aspect-[4/5]"
            >
              <OptimizedPicture
                src={WEDDING_IMAGES.cathedralStepsVeil}
                alt="Bride and groom on cathedral steps"
                width={400}
                height={500}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover photo-monochrome transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Taped paper scrap note overlapping bottom-left: "More than Photographs" */}
            <div className="absolute -bottom-2 -left-1 z-20">
              <div className="relative bg-[#FAF8F3] px-2.5 py-1.5 border border-[#111111]/25 photo-card-shadow rotate-[-3deg]">
                <div className="absolute -top-1.5 left-2 w-8 h-2.5 washi-tape" />
                <span className="font-script text-xs sm:text-sm text-[#111111]/90 leading-tight block">
                  More than
                </span>
                <span className="font-script text-xs sm:text-sm text-[#111111]/90 leading-tight block">
                  Photographs
                </span>
              </div>
            </div>
          </div>

          {/* Chanel Perfume with Pearls on Sunlit Marble (Right ~42% width) */}
          <div className="col-span-5 relative bg-[#EAE6DD] overflow-hidden">
            <div 
              onClick={() => onImageClick?.(WEDDING_IMAGES.perfumePearls, "Perfume bottle, pearls and wedding rings on sunlit marble")}
              className="group cursor-pointer overflow-hidden aspect-[4/5] flex items-center justify-center"
            >
              <OptimizedPicture
                src={WEDDING_IMAGES.perfumePearls}
                alt="Perfume bottle and pearls on marble"
                width={300}
                height={375}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover photo-editorial-warm transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* ARCHITECTURAL FOOTER BAR (Flush inside poster)               */}
      {/* ============================================================ */}
      <div className="px-3 py-2.5 sm:px-4 sm:py-3 border-t border-[#111111]/15 flex items-center justify-between text-[7px] sm:text-[8px] font-mono tracking-[0.22em] text-[#4A4741] uppercase">
        <div className="space-y-0.5">
          <span className="block font-medium text-[#111111]">{WEDDING_SECTION_DATA.meta.est}</span>
          <span className="block text-[6.5px] sm:text-[7px] text-[#4A4741]/70">{WEDDING_SECTION_DATA.meta.location}</span>
        </div>

        <div className="text-center space-y-0.5">
          <span className="block font-semibold text-[#111111]">{WEDDING_SECTION_DATA.meta.taglineCenter}</span>
          <span className="block text-[6.5px] sm:text-[7px] text-[#4A4741]/70">{WEDDING_SECTION_DATA.meta.subCenter}</span>
        </div>

        <div className="text-right space-y-0.5">
          <span className="block font-medium text-[#111111]">{WEDDING_SECTION_DATA.meta.taglineRight}</span>
          <span className="block text-[6.5px] sm:text-[7px] text-[#4A4741]/70">{WEDDING_SECTION_DATA.meta.subRight}</span>
        </div>
      </div>

    </div>
  );
};
