export interface WeddingCollageItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  aspect: string;
  alt: string;
  caption?: string;
  tint?: 'warm' | 'monochrome' | 'natural';
}

export const WEDDING_SECTION_DATA = {
  sectionNumber: "03",
  title: "WEDDINGS",
  subtitleHandwritten: "the art of remembering",
  supportingStatementLine1: "LOVE. LIGHT. PEOPLE.",
  supportingStatementLine2: "THE MOMENTS IN BETWEEN.",
  
  meta: {
    est: "EST. 2020",
    location: "KOZHIKODE, INDIA",
    taglineCenter: "HAFIL.M",
    subCenter: "WEDDING ARCHIVE",
    taglineRight: "A LIFE",
    subRight: "IN FRAMES",
    referenceCode: "HF-M-SEC03"
  },

  microcopy: {
    realPeople: ["REAL", "PEOPLE", "BEAUTIFUL", "STORIES"],
    quieterPerspective: ["A", "QUIETER", "PERSPECTIVE"],
    moreThanPhotos: ["MORE", "THAN", "PHOTOGRAPHS"],
    detailsMatter: ["THE DETAILS", "MATTER"],
    peoplePlacesEmotions: ["PEOPLE", "PLACES", "EMOTIONS"],
    archivePreview: "WEDDING ARCHIVE",
    archiveSubtitle: "SELECTED WEDDINGS — CHAPTER THREE"
  },

  stamps: {
    studyInLove: {
      topArc: "A STUDY",
      center: "IN LOVE",
      bottomArc: "AND LIGHT"
    }
  },

  handwrittenNotes: {
    momentsThatLast: "Moments That Last",
    moreThanPhotographs: "More than Photographs",
    sameEyesDifferentStories: "Same eyes\nDifferent Stories",
    theArtOfRemembering: "the art of remembering"
  }
};

/**
 * Curated Photographic Assets combining the User's uploaded photography
 * with the exact visual elements from Reference 01 (Mobile) and Reference 02 (Desktop).
 */
export const WEDDING_IMAGES = {
  // 1. Dominant Bridal Portrait with cascading veil and bare back / gown
  bridalVeilBack: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
  
  // 2. Central Hero Anchor: Hands intertwined with diamond ring and lace sleeve
  intertwinedHandsRing: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=85",
  
  // 3. Vintage getaway automobile with elaborate white floral spray
  vintageCarFlowers: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=900&q=85",
  
  // 4. Lake Como waterfront villa architecture
  lakeComoVilla: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=85",
  
  // 5. Candlelit dinner banquet table setting with crystal & florals
  candlelitTable: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85",
  
  // 6. Groom in tuxedo with boutonniere (cinematic chiaroscuro)
  groomTuxedo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85",
  
  // 7. Bride and groom walking up cathedral stone stairs with trailing veil
  cathedralStepsVeil: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=85",
  
  // 8. Luxury perfume bottle, heirloom pearls & rings on marble
  perfumePearls: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=85",
  
  // 9. Joyful candid moment (User wedding image)
  candidJoyBride: "https://res.cloudinary.com/dtembvivw/image/upload/v1777536027/happiest_day_of_our_lives_%EF%B8%8F_%EF%B8%8F_wearing_falgunishanepeacockindia_jewelry_thehouseoframbhajos_ywiueq.jpg",
  
  // 10. Botanical veil shadows / lace texture
  veilShadows: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=900&q=85",

  // Additional User-provided wedding assets for gallery bridge / modal inspection
  userImage1: "https://res.cloudinary.com/dtembvivw/image/upload/v1778166004/SaveClip.App_656403465_18019254551824133_1727390248362862999_n_kamcvk.jpg",
  userImage2: "https://res.cloudinary.com/dtembvivw/image/upload/v1778085155/SaveClip.App_512375775_17988322307824133_1545619641394713253_n_bvvwzr.jpg",
  userImage3: "https://res.cloudinary.com/dtembvivw/image/upload/v1779732042/SaveClip.App_518998457_18085834000704263_2487413177226220895_n_tfq7bv.jpg",
  userImage4: "https://res.cloudinary.com/dtembvivw/image/upload/v1777536031/The_beginning_of_beautiful_forever_%EF%B8%8F_Reeyaa_Nair_MR_Khanijo_Designed_Photographed_-_f_jwfifs.jpg",
  userImage6: "https://res.cloudinary.com/dtembvivw/image/upload/v1777536020/SnapInsta.to_471570687_18067546903704263_2832707565595603722_n_s7s9xc.jpg",
};
