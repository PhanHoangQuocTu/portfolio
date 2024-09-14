'use client';

import React from 'react';
import dynamic from 'next/dynamic';

import { VStack } from '@/components/ui/v-stack';
import { Vortex } from '@/components/ui/vortex';

const InfoOverview = dynamic(() => import('./components/InfoOverview'));
const OverviewHeading = dynamic(() => import('./components/OverviewHeading'));
const TypeWritterComp = dynamic(() => import('./components/TypeWritterComp'));

const OverviewPage = () => {
  return (
    <div className="relative">
      <Vortex
        backgroundColor="black"
        particleCount={100}
        className="flex min-h-screen flex-col items-center justify-center px-2 md:px-10"
      >
        <VStack className="container relative min-h-screen" justify={'center'}>
          <OverviewHeading />

          <TypeWritterComp />

          <InfoOverview />
        </VStack>
      </Vortex>
    </div>
  );
};

export default OverviewPage;
