"use client"

import React from 'react';

interface ResponsiveImageProps {
  webp: string;
  fallback: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  webp,
  fallback,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false
}) => {
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img
        src={fallback}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        style={width && height ? { width, height } : {}}
      />
    </picture>
  );
};

export default ResponsiveImage; 