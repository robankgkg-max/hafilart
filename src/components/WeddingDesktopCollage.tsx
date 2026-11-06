import React from 'react';
import { WEDDING_SECTION_DATA, WEDDING_IMAGES } from '../weddingData';
import { EmbroideryStamp } from './EmbroideryStamp';
import { HandwrittenNote } from './HandwrittenNote';
import { CornerCropMarks } from './EditorialMarks';
import { Menu } from 'lucide-react';
import { OptimizedPicture } from './common/OptimizedPicture';

interface WeddingDesktopCollageProps {
  onImageClick?: (url: string, caption?: string) => void;
}

export const WeddingDesktopCollage: React.FC<WeddingDesktopCollageProps> = ({ onImageClick }) => {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto bg-[#F4EDE1] select-none">
      
      {/* Top Header Bar Inside the Spread Canvas */}
      <div className="px-8 py-3.5 border-b border-[#111111]/15 flex items-center justify-between text-[9px] font-mono tracking-[0.25em] text-[#4A4741] uppercase">
        <span className="font-semibold text-[#111111] tracking-[0.28em]">HAFIL.M</span>
        
        <div className="flex items-center space-x-6 text-[#4A4741]">
          <span className="text-[#111111] font-medium">WEDDING</span>
          <span className="text-[#111111]/25">/</span>
          <span>FASHION</span>
          <span className="text-[#111111]/25">/</span>
          <span>PEOPLE</span>
        </div>

        <div className="flex items-center gap-6">
          <span>A VISUAL JOURNAL</span>
          <Menu size={14} className="text-[#111111]/70" />
        </div>
      </div>

      {/* Main Single-Screen Editorial Spread Canvas */}
      <div className="relative p-6 xl:p-8 2xl:p-10">
        <CornerCropMarks size={20} className="opacity-70" />

        {/* 4-Column Asymmetrical Moodboard Grid (Reference 02) */}
        <div className="grid grid-cols-12 gap-5 xl:gap-6 items-start">
          
          {/* ========================================================== */}
          {/* COLUMN 1 (LEFT ~32%): Headline, Statements, Groom, Car      */}
          {/* ========================================================== */}
          <div className="col-span-4 space-y-5 pr-2">
            
            {/* 03 Chapter Marker */}
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg text-[#111111]">{WEDDING_SECTION_DATA.sectionNumber}</span>
              <div className="h-[1px] w-14 bg-[#111111]/35" />
            </div>

            {/* Huge Headline & Script Subheading */}
            <div className="relative pt-0.5">
              <h1 className="font-serif archive-headline text-5xl xl:text-6xl 2xl:text-7xl text-[#111111] uppercase tracking-tight leading-[0.92]">
                {WEDDING_SECTION_DATA.title}
              </h1>
              
              <div className="-mt-3.5 xl:-mt-5 ml-1">
                <span className="font-script text-3xl xl:text-4xl 2xl:text-5xl text-[#111111]/90 block">
                  {WEDDING_SECTION_DATA.subtitleHandwritten}
                </span>
              </div>

              {/* Supporting Statement */}
              <div className="mt-4 space-y-1">
                <p className="font-mono text-[9px] xl:text-[10px] tracking-[0.26em] text-[#111111] uppercase font-medium">
                  {WEDDING_SECTION_DATA.supportingStatementLine1}
                </p>
                <p className="font-mono text-[9px] xl:text-[10px] tracking-[0.26em] text-[#111111] uppercase font-medium">
                  {WEDDING_SECTION_DATA.supportingStatementLine2}
                </p>
                <div className="h-[1px] w-12 bg-[#111111]/25 mt-3" />
              </div>
            </div>

            {/* Groom Portrait + Left Marginal Micro-Annotations */}
            <div className="grid grid-cols-12 gap-3 items-start pt-1">
              {/* Micro typography column */}
              <div className="col-span-3 space-y-6 pt-1">
                <div className="font-mono text-[7.5px] tracking-[0.2em] text-[#4A4741]/80 uppercase space-y-1">
                  {WEDDING_SECTION_DATA.microcopy.realPeople.map((w, i) => (
                    <span key={i} className="block leading-tight">{w}</span>
                  ))}
                </div>
                <div className="font-mono text-[7.5px] tracking-[0.2em] text-[#4A4741]/70 uppercase space-y-1 pt-2">
                  {WEDDING_SECTION_DATA.microcopy.quieterPerspective.map((w, i) => (
                    <span key={i} className="block leading-tight">{w}</span>
                  ))}
                </div>
              </div>

              {/* Groom in black tuxedo */}
              <div className="col-span-9">
                <div 
                  onClick={() => onImageClick?.(WEDDING_IMAGES.groomTuxedo, "Groom in black tuxedo with boutonniere")}
                  className="cursor-pointer overflow-hidden border border-[#111111]/15 bg-[#EAE6DD] photo-card-shadow"
                >
                  <OptimizedPicture
                    src={WEDDING_IMAGES.groomTuxedo}
                    alt="Groom in black tuxedo"
                    width={500}
                    height={625}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/5] object-cover photo-monochrome transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>

            {/* Vintage Car with Floral Spray */}
            <div className="pt-1 space-y-1.5">
              <div 
                onClick={() => onImageClick?.(WEDDING_IMAGES.vintageCarFlowers, "Vintage getaway automobile with floral spray")}
                className="cursor-pointer overflow-hidden border border-[#111111]/15 bg-[#EAE6DD] photo-card-shadow"
              >
                <OptimizedPicture
                  src={WEDDING_IMAGES.vintageCarFlowers}
                  alt="Vintage getaway automobile with floral spray"
                  width={640}
                  height={440}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[16/11] object-cover photo-editorial-warm transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
              <div className="font-mono text-[7.5px] tracking-[0.24em] text-[#4A4741]/80 uppercase">
                {WEDDING_SECTION_DATA.microcopy.moreThanPhotos.join(' ')}
              </div>
            </div>

          </div>

          {/* ========================================================== */}
          {/* COLUMN 2 (CENTER ~28%): Dominant Bride, Polaroid, Cathedral */}
          {/* ========================================================== */}
          <div className="col-span-3 space-y-4 relative">
            
            {/* Dominant Bridal Veil Back Portrait */}
            <div 
              onClick={() => onImageClick?.(WEDDING_IMAGES.bridalVeilBack, "Bridal portrait with cascading veil and bare back")}
              className="cursor-pointer overflow-hidden border border-[#111111]/15 bg-[#EAE6DD] photo-card-shadow relative"
            >
              <OptimizedPicture
                src={WEDDING_IMAGES.bridalVeilBack}
                alt="Bridal portrait with veil"
                width={600}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[3/4] object-cover photo-editorial-warm transition-transform duration-500 hover:scale-[1.02]"
              />
              {/* Frosted Tape accent at top */}
              <div className="absolute top-0 left-1/4 w-16 h-3.5 washi-tape opacity-85 pointer-events-none" />
            </div>

            {/* Center Overlapping Hero: Polaroid Hands Card */}
            <div className="relative -mt-16 xl:-mt-20 z-30 flex justify-center">
              <div 
                onClick={() => onImageClick?.(WEDDING_IMAGES.intertwinedHandsRing, "Intertwined hands with diamond ring and lace sleeve")}
                className="cursor-pointer bg-[#FAF8F2] p-2.5 xl:p-3 pb-4 border border-[#111111]/25 photo-card-shadow rotate-[1deg] w-[96%] transition-transform duration-300 hover:rotate-0"
              >
                {/* Masking tape on top */}
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 h-3 washi-tape pointer-events-none" />

                <div className="overflow-hidden border border-[#111111]/15 bg-[#EAE6DD]">
                  <OptimizedPicture
                    src={WEDDING_IMAGES.intertwinedHandsRing}
                    alt="Intertwined hands with ring"
                    width={500}
                    height={625}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/5] object-cover photo-editorial-warm"
                  />
                </div>
              </div>
            </div>

            {/* Cathedral Procession Steps with Long Veil */}
            <div className="relative pt-1">
              <div 
                onClick={() => onImageClick?.(WEDDING_IMAGES.cathedralStepsVeil, "Couple walking up cathedral stone steps with cascading veil")}
                className="cursor-pointer overflow-hidden border border-[#111111]/15 bg-[#EAE6DD] photo-card-shadow"
              >
                <OptimizedPicture
                  src={WEDDING_IMAGES.cathedralStepsVeil}
                  alt="Couple walking up cathedral stone steps"
                  width={500}
                  height={625}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/5] object-cover photo-monochrome transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>

              {/* Circular Stamp Seal Overlapping Bottom-Right */}
              <div className="absolute -bottom-6 -right-5 z-40">
                <EmbroideryStamp size={90} />
              </div>
            </div>

          </div>

          {/* ========================================================== */}
          {/* COLUMN 3 (CENTER-RIGHT ~22%): Villa, Joy, Perfume, Notes  */}
          {/* ========================================================== */}
          <div className="col-span-3 space-y-4">
            
            {/* Lake Como Waterfront Villa with Taped Note Above */}
            <div className="relative pt-6">
              {/* Taped Paper Note: "Moments That Last" */}
              <div className="absolute -top-2.5 left-2 z-20">
                <HandwrittenNote
                  text={WEDDING_SECTION_DATA.handwrittenNotes.momentsThatLast}
                  rotation="rotate-[-2deg]"
                  tapePosition="top"
                  className="scale-85"
                />
              </div>

              <div 
                onClick={() => onImageClick?.(WEDDING_IMAGES.lakeComoVilla, "Lake Como waterfront villa architecture")}
                className="cursor-pointer overflow-hidden border border-[#111111]/15 bg-[#EAE6DD] photo-card-shadow"
              >
                <OptimizedPicture
                  src={WEDDING_IMAGES.lakeComoVilla}
                  alt="Lake Como waterfront villa"
                  width={640}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[16/10] object-cover photo-editorial-warm transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Candid Laughing Bride & Groom */}
            <div 
              onClick={() => onImageClick?.(WEDDING_IMAGES.candidJoyBride, "Candid emotional wedding moment")}
              className="cursor-pointer overflow-hidden border border-[#111111]/15 bg-[#EAE6DD] photo-card-shadow"
            >
              <OptimizedPicture
                src={WEDDING_IMAGES.candidJoyBride}
                alt="Candid emotional wedding moment"
                width={600}
                height={450}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/3] object-cover photo-monochrome transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>

            {/* Chanel Perfume with Pearls on Sunlit Marble */}
            <div className="relative space-y-2 pt-1">
              <div 
                onClick={() => onImageClick?.(WEDDING_IMAGES.perfumePearls, "Perfume bottle, pearls and wedding rings on sunlit marble")}
                className="cursor-pointer overflow-hidden border border-[#111111]/15 bg-[#EAE6DD] photo-card-shadow"
              >
                <OptimizedPicture
                  src={WEDDING_IMAGES.perfumePearls}
                  alt="Perfume bottle, pearls and wedding rings on marble"
                  width={600}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/3] object-cover photo-editorial-warm transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>

              {/* Taped Paper Note: "Same eyes / Different Stories" */}
              <div className="flex justify-end -mr-2 -mt-3 relative z-30">
                <HandwrittenNote
                  text={WEDDING_SECTION_DATA.handwrittenNotes.sameEyesDifferentStories}
                  rotation="rotate-[2.5deg]"
                  tapePosition="top-right"
                  className="scale-85"
                />
              </div>
            </div>

          </div>

          {/* ========================================================== */}
          {/* COLUMN 4 (FAR RIGHT ~18%): Candlelit Banquet, Veil Shadows */}
          {/* ========================================================== */}
          <div className="col-span-2 space-y-4">
            
            {/* Candlelit Banquet Reception Dinner Table */}
            <div 
              onClick={() => onImageClick?.(WEDDING_IMAGES.candlelitTable, "Candlelit reception banquet table setting")}
              className="cursor-pointer overflow-hidden border border-[#111111]/15 bg-[#EAE6DD] photo-card-shadow"
            >
              <OptimizedPicture
                src={WEDDING_IMAGES.candlelitTable}
                alt="Candlelit banquet dinner table"
                width={500}
                height={667}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[3/4] object-cover photo-editorial-warm transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>

            {/* Botanical Veil Shadows & Micro Labels */}
            <div className="space-y-2 pt-1">
              <div 
                onClick={() => onImageClick?.(WEDDING_IMAGES.veilShadows, "Botanical shadows on bridal veil")}
                className="cursor-pointer overflow-hidden border border-[#111111]/15 bg-[#EAE6DD] photo-card-shadow"
              >
                <OptimizedPicture
                  src={WEDDING_IMAGES.veilShadows}
                  alt="Botanical shadows on bridal veil"
                  width={500}
                  height={667}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[3/4] object-cover photo-monochrome transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>

              {/* Details Matter & People Places Annotations */}
              <div className="space-y-1.5 pt-1">
                <div className="font-mono text-[7px] tracking-[0.2em] text-[#4A4741]/85 uppercase">
                  {WEDDING_SECTION_DATA.microcopy.detailsMatter.join(' ')}
                </div>
                <div className="font-mono text-[6.5px] tracking-[0.18em] text-[#4A4741]/70 uppercase space-y-0.5">
                  {WEDDING_SECTION_DATA.microcopy.peoplePlacesEmotions.map((w, i) => (
                    <span key={i} className="block leading-tight">{w}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* DESKTOP ARCHITECTURAL FOOTER BAR (Inside Frame)              */}
      {/* ============================================================ */}
      <div className="px-8 py-3.5 border-t border-[#111111]/15 flex items-center justify-between text-[8.5px] font-mono tracking-[0.25em] text-[#4A4741] uppercase">
        <div className="space-y-0.5">
          <span className="block font-medium text-[#111111]">{WEDDING_SECTION_DATA.meta.est}</span>
          <span className="block text-[7.5px] text-[#4A4741]/70">{WEDDING_SECTION_DATA.meta.location}</span>
        </div>

        <div className="text-center space-y-0.5">
          <span className="block font-semibold text-[#111111]">{WEDDING_SECTION_DATA.meta.taglineCenter}</span>
          <span className="block text-[7.5px] text-[#4A4741]/70">{WEDDING_SECTION_DATA.meta.subCenter}</span>
        </div>

        <div className="text-right space-y-0.5">
          <span className="block font-medium text-[#111111]">{WEDDING_SECTION_DATA.meta.taglineRight}</span>
          <span className="block text-[7.5px] text-[#4A4741]/70">{WEDDING_SECTION_DATA.meta.subRight}</span>
        </div>
      </div>

    </div>
  );
};
