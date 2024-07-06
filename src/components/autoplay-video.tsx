'use client';

import React from 'react';
import { useMergedRef } from '@mantine/hooks';

const AutoPlayVideo = React.forwardRef<HTMLVideoElement, React.ComponentProps<'video'>>(
  ({ src, ...props }, videoRef) => {
    const appRef = React.useRef<React.ElementRef<'video'>>(null);
    const ref = useMergedRef(videoRef, appRef);

    const attemptPlay = React.useCallback(() => {
      if (!appRef?.current) return;
      appRef?.current.play().catch((error) => {
        console.error('Error attempting to play', error);
      });
    }, [appRef]);

    React.useEffect(() => {
      attemptPlay();
    }, [attemptPlay]);

    return (
      <video ref={ref} playsInline autoPlay loop muted {...props}>
        <source src={src} type="video/mp4" />
      </video>
    );
  }
);

export default AutoPlayVideo;
