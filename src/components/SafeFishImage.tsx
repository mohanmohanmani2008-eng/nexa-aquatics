import { useState } from 'react';
import { Fish } from 'lucide-react';

interface SafeFishImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fallbackLabel?: string;
}

export function SafeFishImage({
  src,
  alt,
  className = '',
  priority = false,
  fallbackLabel,
}: SafeFishImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-ocean-900 via-ocean-800 to-cyan-900 text-cyan-100 p-6 text-center ${className}`}
      >
        <Fish className="w-10 h-10 text-cyan-300/80 mb-2" aria-hidden="true" />
        <span className="text-sm font-medium tracking-tight text-white">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
