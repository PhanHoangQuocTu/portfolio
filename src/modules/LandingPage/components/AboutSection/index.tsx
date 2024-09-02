import React from 'react';
import dynamic from 'next/dynamic';

import { VStack } from '@/components/ui/v-stack';

import { type ISectionProps } from '../../types';

const AboutOverview = dynamic(() => import('./components/AboutOverview'));

const AboutSection: React.FC<ISectionProps> = ({ id }) => {
  return (
    <VStack id={id} className="container relative min-h-screen" justify={'center'}>
      <AboutOverview />
    </VStack>
  );
};

export default AboutSection;
