'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
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
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isClient, setIsClient] = useState(false);

  const observerOptions = useMemo(() => ({ ...initOptions, ...options }), [options]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

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
  }, [ids, observerOptions, setActiveSection, isClient]);

  return null;
};

export default useIntersectionObserver;
