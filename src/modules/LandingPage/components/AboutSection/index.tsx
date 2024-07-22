import React from 'react';
import dynamic from 'next/dynamic';

import { VStack } from '@/components/ui/v-stack';

interface Props {
  id: string;
}

const AboutOverview = dynamic(() => import('./components/AboutOverview'));

const AboutSection: React.FC<Props> = ({ id }) => {
  return (
    <div id={id} className="relative py-10">
      <VStack className="container min-h-screen">
        <AboutOverview />
      </VStack>
    </div>
  );
};

export default AboutSection;
