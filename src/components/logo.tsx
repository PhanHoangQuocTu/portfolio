import React from 'react';
import Image, { type ImageProps } from 'next/image';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export interface LogoProps extends Omit<ImageProps, 'alt' | 'src'> {
  imageClassName?: string;
  src?: string;
  alt?: string;
}

export const Logo: React.FC<LogoProps> = ({
  src = '/favicon-16x16.png',
  alt = siteConfig.name,
  className,
  imageClassName,
  ...props
}) => (
  <div className={cn('relative h-10 w-10 overflow-hidden', className)}>
    <Image
      className={cn('max-w-full', imageClassName)}
      priority
      unoptimized
      quality={100}
      src={src}
      fill
      alt={alt}
      {...props}
    />
  </div>
);
