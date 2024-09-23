'use client';

import React from 'react';
import dynamic from 'next/dynamic';

import { Vortex } from '@/components/ui/vortex';

const Overview = dynamic(() => import('./components/Overview'));
const Contact = dynamic(() => import('./components/Contact'));

const AboutPage = () => {
  return (
    <div className="relative">
      <Vortex backgroundColor="black" particleCount={100} className="flex min-h-screen">
        <div className="container space-y-10 py-10">
          <Overview />

          <Contact />
        </div>
      </Vortex>
    </div>
  );
};

export default AboutPage;
