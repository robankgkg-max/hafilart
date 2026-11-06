export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
}

export interface GallerySeries {
  id: string;
  number: string;
  title: string;
  coverImage: string;
  images: GalleryImage[];
  location?: string;
  date?: string;
}
