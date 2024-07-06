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

const useIntersectionObserver = ({ ids, options = initOptions }: { ids: string[]; options?: IOptions }) => {
  const { setActiveSection } = useSidebarContext();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [ids, options, setActiveSection]);
};

export default useIntersectionObserver;
