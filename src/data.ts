import { Principle } from './types';

export const PRIMARY_IMAGE = "https://res.cloudinary.com/immtrf1e/image/upload/v1790248854/ChatGPT_Image_Sep_24_2026_04_47_50_PM.webp";
export const SECONDARY_IMAGES = [
  "https://res.cloudinary.com/immtrf1e/image/upload/v1790248854/sun_day.webp",
  "https://res.cloudinary.com/immtrf1e/image/upload/v1790248863/SaveClip.App_469902819_18009146513679072_7534665940225881132_n.jpg",
] as const;
export const SECONDARY_IMAGE = SECONDARY_IMAGES[0];

export const SECTION_METADATA = {
  sectionNumber: "02",
  sectionIdentity: "WHO IS HAFIL.M",
  chapterPage: "02 / 05",
  title: "A VISUAL JOURNAL",
  subtitle: "WEDDING / FASHION / PEOPLE",
  location: "EST. 2020 — KOZHIKODE, INDIA",
  coordinates: "11°15'32\"N  75°46'49\"E",
  referenceCode: "HF-M-SEC02",
  tagline: "CAPTURING WHAT MATTERS",
  subTagline: "A LIFE IN FRAMES",
};

export const HERO_STATEMENT_LINES = [
  "I PHOTOGRAPH",
  "WHAT YOU FELT IN",
  "THE MOMENT TO",
  "MAKE SURE YOU",
  "KEEP GETTING THAT",
  "FEEL WHEN YOU",
  "SEE IT AGAIN"
];

export const ABOUT_COPY_PARAGRAPHS = [
  "I'm Hafil — a wedding and fashion photographer drawn to people, atmosphere, movement and the little things that make an image stay with you.",
  "I don't believe great photography is about simply being in the right place with a camera.",
  "It's about seeing something before everyone else does."
];

export const POETIC_OBSERVATIONS = [
  "The glance that lasts half a second.",
  "The movement of a dress.",
  "The silence before a ceremony.",
  "The confidence in a portrait.",
  "The chaos, the laughter, the people you almost didn't notice."
];

export const ABOUT_COPY_CONCLUSION = "My job is to notice them — and turn them into photographs that still mean something years later.";

export const PRINCIPLES_HEADING = "WHY I KNOW I'M GOOD AT WHAT I DO";

export const PRINCIPLES: Principle[] = [
  {
    number: "01",
    headline: "I LOOK FOR THE MOMENT BEFORE THE MOMENT.",
    description: "The photograph isn't always in the obvious moment. Sometimes it's the second before it happens."
  },
  {
    number: "02",
    headline: "I CARE ABOUT HOW IT FEELS, NOT JUST HOW IT LOOKS.",
    description: "Beautiful photographs are easy to admire. The ones that bring you back to a feeling are the ones worth keeping."
  },
  {
    number: "03",
    headline: "I LET PEOPLE BE THEMSELVES.",
    description: "No forced smiles. No unnecessary posing. Direction when it's needed. Space when it isn't."
  },
  {
    number: "04",
    headline: "I SEE THE DETAILS OTHER PEOPLE MISS.",
    description: "Hands. Fabrics. Expressions. Light. Architecture. Movement. The small things often become the photographs you remember most."
  },
  {
    number: "05",
    headline: "I TREAT EVERY FRAME LIKE IT MATTERS.",
    description: "A wedding isn't a collection of highlights. A fashion story isn't just a collection of poses. Every frame has a place in the larger story."
  },
  {
    number: "06",
    headline: "I WANT MY PHOTOGRAPHS TO AGE WELL.",
    description: "Not photographs that belong to a trend. Photographs that still feel like you years from now."
  }
];

export const CLOSING_MANIFESTO = {
  line1: "THE CAMERA IS ONLY THE TOOL.",
  line2: "SEEING IS THE REAL SKILL.",
  author: "— HAFIL.M"
};
