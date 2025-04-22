import Image from 'next/image';

type HeroImageProps = {
  src: string;
  alt: string;
  className?: string;
  height?: string;
  priority?: boolean;
  overlay?: boolean;
};

export function HeroImage({ 
  src, 
  alt, 
  className = '', 
  height = 'h-[400px]',
  priority = false,
  overlay = false,
}: HeroImageProps) {
  return (
    <div className={`relative w-full ${height} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        priority={priority}
        loading={priority ? "eager" : "lazy"}
      />
      {overlay && (
        <div className="absolute inset-0 bg-black/40" />
      )}
    </div>
  );
} 