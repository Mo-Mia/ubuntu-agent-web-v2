"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  sizes?: string;
  loading?: 'lazy' | 'eager';
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  objectFit = 'cover',
  sizes = '100vw',
  loading = 'lazy',
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const defaultBlurDataURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setInView(true);
              observer.disconnect();
            }
          });
        },
        { rootMargin: '200px' }
      );

      const currentElement = document.getElementById(`image-${src.replace(/[^\w]/g, '-')}`);
      if (currentElement) {
        observer.observe(currentElement);
      }

      return () => {
        if (currentElement) {
          observer.unobserve(currentElement);
        }
      };
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      setInView(true);
    }
  }, [src]);

  // Use Properly formatted alt text
  const formattedAlt = alt || 'Image';

  return (
    <div
      id={`image-${src.replace(/[^\w]/g, '-')}`}
      className={`overflow-hidden relative ${className} ${isLoaded ? 'image-loaded' : 'image-loading'}`}
      style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : 'auto' }}
      aria-label={formattedAlt}
    >
      {(inView || priority) && (
        <Image
          src={src}
          alt={formattedAlt}
          fill={!width || !height}
          width={width}
          height={height}
          quality={quality}
          loading={priority ? 'eager' : loading}
          priority={priority}
          sizes={sizes}
          style={{ objectFit }}
          onLoad={() => setIsLoaded(true)}
          placeholder={placeholder}
          blurDataURL={blurDataURL || defaultBlurDataURL}
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
      
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default OptimizedImage; 