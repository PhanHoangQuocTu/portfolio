import React, { forwardRef, type HTMLAttributes } from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

interface IAvatarProps extends HTMLAttributes<HTMLImageElement> {
  width?: number;
  height?: number;
  quality?: number;
}

const Avatar = forwardRef<HTMLImageElement, IAvatarProps>(
  ({ className, width = 48, height = 48, quality = 100 }, ref) => {
    return (
      <Image
        ref={ref}
        src={'/images/avatar.webp'}
        alt="avatar"
        width={width}
        height={height}
        unoptimized
        quality={quality}
        priority
        className={cn('rounded-full', className)}
      />
    );
  }
);

export default Avatar;
