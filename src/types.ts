export interface Principle {
  number: string;
  headline: string;
  description: string;
}

export interface EditorialAnnotation {
  label: string;
  sublabel?: string;
  coordinates?: string;
}

export type ViewportMode = 'responsive' | 'desktop-spread' | 'mobile-journal';
