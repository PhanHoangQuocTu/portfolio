'use client';

import React from 'react';
import { useSidebarContext } from '@/context/sidebar.context';

const initOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.6,
};

interface IOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
}

interface Props {
  ids: string[];
  options?: IOptions;
}

const useIntersectionObserver = ({ ids, options = initOptions }: Props) => {
  const { setActiveSection } = useSidebarContext();
  const observerRef = React.useRef<IntersectionObserver | null>(null);

  const observerOptions = React.useMemo(() => ({ ...initOptions, ...options }), [options]);

  React.useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const observer = observerRef.current;

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [ids, observerOptions, setActiveSection]);

  return null;
};

export default useIntersectionObserver;
