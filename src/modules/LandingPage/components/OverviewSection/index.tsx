import React from 'react';
import dynamic from 'next/dynamic';

import { VStack } from '@/components/ui/v-stack';

import { type ISectionProps } from '../../types';

const InfoOverview = dynamic(() => import('./components/InfoOverview'));
const OverviewHeading = dynamic(() => import('./components/OverviewHeading'));
const TypeWritterComp = dynamic(() => import('./components/TypeWritterComp'));

const OverviewSection: React.FC<ISectionProps> = ({ id }) => {
  return (
    <VStack id={id} className="container relative min-h-screen" justify={'center'}>
      <OverviewHeading />

      <TypeWritterComp />

      <InfoOverview />
    </VStack>
  );
};

export default OverviewSection;
