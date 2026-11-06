import React from 'react';
import { toWebpUrl, toOptimizedOriginalUrl, getOptimizedImageUrl } from '../../utils/imageUrl';

export interface OptimizedPictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
  pictureClassName?: string;
  targetWidth?: number;
}

export const OptimizedPicture: React.FC<OptimizedPictureProps> = ({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
  className = '',
  pictureClassName = 'contents',
  targetWidth,
  style,
  onLoad,
  ...props
}) => {
  // Infer numeric width if provided as number
  const computedTargetWidth = targetWidth ?? (typeof width === 'number' ? width : 800);
  const webpSrc = toWebpUrl(src, computedTargetWidth);
  const fallbackSrc = toOptimizedOriginalUrl(src, computedTargetWidth);

  return (
    <picture className={pictureClassName}>
      <source type="image/webp" srcSet={webpSrc} />
      <img
        src={fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        className={className}
        style={style}
        onLoad={onLoad}
        referrerPolicy="no-referrer"
        {...props}
      />
    </picture>
  );
};
