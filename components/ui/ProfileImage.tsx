import Image from 'next/image';

type ProfileImageProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  rounded?: 'none' | 'sm' | 'md' | 'full';
  priority?: boolean;
};

const sizes = {
  sm: { width: 48, height: 48 },
  md: { width: 96, height: 96 },
  lg: { width: 192, height: 192 },
  xl: { width: 384, height: 384 },
};

const roundedStyles = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-lg',
  full: 'rounded-full',
};

export function ProfileImage({ 
  size = 'md', 
  className = '', 
  rounded = 'full',
  priority = false,
}: ProfileImageProps) {
  const { width, height } = sizes[size];
  const roundedClass = roundedStyles[rounded];
  
  return (
    <div 
      className={`relative overflow-hidden ${roundedClass} ${className}`} 
      style={{ width, height }}
    >
      <Image
        src="/gary-profile.jpg"
        alt="Gary Berkowitz, The Ubuntu Agent"
        fill
        className="object-cover"
        style={{ objectPosition: "center 60%" }}
        sizes={`${Math.max(width, height)}px`}
        priority={priority}
        quality={100}
      />
    </div>
  );
} 